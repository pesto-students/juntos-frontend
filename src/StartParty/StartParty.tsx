import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { io, Socket } from "socket.io-client";

import { PartyWrapper, VideoWrapper } from "src/StartParty/StartParty.styles";
import "src/StartParty/StartParty.css";
import ChatBar from "src/StartParty/ChatBar";
import SyncVideo from "src/StartParty/SyncVideo";
import Button from "src/components/Button";
import Input from "src/components/Input";
import { v4 as uuidv4 } from "uuid";

const socket: Socket = io("http://localhost:8080", {
  transports: ["websocket", "polling", "flashsocket"],
})

// cleaup needed just added for development testing
const StartParty: React.FC<RouteComponentProps> = () => {
  const [inviteLink, setInviteLink] = useState<string>("");
  const [roomId, setRoomId] = useState<string>("");
  const [host, setHost] = useState<boolean>(false);
  const [joinParty, setJoinParty] = useState<boolean>(false);

  const handleHostParty = () => {
    setRoomId(uuidv4());
    setHost(true);
  };

  const handleJoinParty = () => {
    if (inviteLink) {
      setJoinParty(true);
    }
  };

  return (
    <PartyWrapper>
      <div>
        <div>
          <Button onClick={handleHostParty}>Host party</Button>
        </div>
        <label htmlFor="joinParty">Enter Invite link: </label>
        <Input
          name="joinParty"
          width="300px"
          value={inviteLink}
          onChange={(e) => setInviteLink(e.target.value)}
        />
        <Button onClick={handleJoinParty}>Join Party</Button>
      </div>
      {(host || joinParty) && (
        <>
          <VideoWrapper>
            <SyncVideo socket={socket} roomId={roomId || inviteLink} isHost={host} />
          </VideoWrapper>
          <ChatBar socket={socket} roomId={roomId} />
        </>
      )}
    </PartyWrapper>
  );
};

export default StartParty;
