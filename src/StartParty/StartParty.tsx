import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { io, Socket } from "socket.io-client";

import { PartyWrapper, VideoWrapper } from "src/StartParty/StartParty.styles";
import "src/StartParty/StartParty.css";
import ChatBar from "src/StartParty/ChatBar";
import SyncVideo from "src/StartParty/SyncVideo";

const socket: Socket = io("http://localhost:8080", {
  transports: ["websocket", "polling", "flashsocket"],
});
// cleaup needed just added for development testing
const roomId = "testRoom";

const StartParty: React.FC<RouteComponentProps> = () => {
  return (
    <PartyWrapper>
      <VideoWrapper>
        <SyncVideo socket={socket} roomId={roomId} isHost={true} />
      </VideoWrapper>
      <ChatBar socket={socket} roomId={roomId} />
    </PartyWrapper>
  );
};

export default StartParty;
