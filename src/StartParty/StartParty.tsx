import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { PartyWrapper, VideoWrapper } from "./StartParty.styles";
import "./StartParty.css";
import ChatBar from "src/StartParty/ChatBar";

const StartParty: React.FC<RouteComponentProps> = () => {
  return (
    <PartyWrapper>
      <VideoWrapper></VideoWrapper>
      <ChatBar roomId="testingRoom" />
    </PartyWrapper>
  );
};

export default StartParty;
