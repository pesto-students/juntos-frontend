import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useAuth } from "src/context/GlobalContext";
import { Chat } from "src/modules/Chat";
import { io } from "socket.io-client";
import { toast } from "react-toastify";
import Input from "src/components/Input";
import { PartyWrapper, ChatWrapper, VideoWrapper } from "./StartParty.styles";
import "./StartParty.css";
import { cssScale } from "src/common/constants/cssScale";

let chat: Chat;

const StartParty: React.FC<RouteComponentProps<{ roomId?: string }>> = ({
  history,
  match,
}) => {
  const { state } = useAuth();

  const [message, setMessage] = useState("");
  const [chatData, setChatData] = useState<{ user: string; message: string }[]>(
    []
  );

  useEffect(() => {
    const { roomId } = match.params;
    if (roomId) {
      const socket = io("http://localhost:8080", {
        transports: ["websocket", "polling", "flashsocket"],
      });
      if (state.user) {
        chat = new Chat(state.user, roomId, socket);
        const subscribeReceiveChatMessage = chat.receiveMessages(
          ({ message, user }) => {
            setChatData((existingChats) => {
              const newChats = [...existingChats];
              newChats.push({ message, user });
              return newChats;
            });
          }
        );
        // cleanup receiveChatMessage listener
        return () => {
          subscribeReceiveChatMessage.off("receiveChatMessage");
        };
      }
    } else {
      toast.error("invalid room Id");
    }
  }, [state.user, match.params]);

  const postChat = () => {
    if (message) {
      chat.sendMessage(message);
      setMessage("");
    }
  };

  return (
    <PartyWrapper>
      <VideoWrapper></VideoWrapper>
      <ChatWrapper>
        <div className="chatContent">
          <div className="chatInfo">
            <span>Chat</span>
            <span></span>
          </div>
          <div className="chatBox">
            {chatData.map(({ user, message }, i) => (
              <div key={i} className="messageItem">
                <span className="userText">{user}:</span>&nbsp;
                <span className="chatText">{message}</span>
              </div>
            ))}
          </div>
          <div className="buttonInside">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && postChat()}
              placeholder="Enter message"
              paddingRight={cssScale.c11}
              borderRadius={cssScale.c2}
              outline="none"
            />
            <button className="buttonInsideInput" onClick={postChat}>
              Send
            </button>
          </div>
        </div>
      </ChatWrapper>
    </PartyWrapper>
  );
};

export default StartParty;
