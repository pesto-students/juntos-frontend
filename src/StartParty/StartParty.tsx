import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { io, Socket } from "socket.io-client";

import { PartyWrapper, VideoWrapper } from "src/StartParty/StartParty.styles";
import "src/StartParty/StartParty.css";
import ChatBar from "src/StartParty/ChatBar";
import SyncVideo from "src/StartParty/SyncVideo";
import useShareLinkRedirect from "src/common/hooks/useShareLinkRedirect";

// TODO cleaup needed just added for development testing
// will be removed once heroku setup for backend is done
const socket: Socket = io("http://localhost:8080", {
  transports: ["websocket", "polling", "flashsocket"],
});

const StartParty: React.FC<
  RouteComponentProps<
    {},
    {},
    { shareLink: string; videoId?: string; videoUrl?: string; isHost: boolean }
  >
> = ({ history }) => {
  const { isHost, videoId, shareLink, videoUrl } =
    history.location?.state ?? {};

  useShareLinkRedirect();

  return (
    <PartyWrapper>
      <VideoWrapper>
        <SyncVideo
          videoId={videoId}
          videoUrl={videoUrl}
          socket={socket}
          roomId={shareLink}
          isHost={isHost}
        />
      </VideoWrapper>
      <ChatBar socket={socket} roomId={shareLink} />
    </PartyWrapper>
  );
};

export default StartParty;
