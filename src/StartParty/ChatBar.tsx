import React, { useEffect, useState, useRef } from "react";
import { useAuth } from "src/context/GlobalContext";
import { Chat } from "src/modules/Chat";
import { Socket } from "socket.io-client";
import Input from "src/components/Input";
import { ChatWrapper } from "./StartParty.styles";
import "./StartParty.css";
import { cssScale } from "src/common/constants/cssScale";
import { scrollToBottom } from "src/common/utils";
import ChatIcon from "src/assets/icons/ChatIcon";

let chat: Chat;

interface ChatBarProps {
  roomId: string;
  socket: Socket;
}

const ChatBar: React.FC<ChatBarProps> = ({ roomId, socket }) => {
  const { globalState } = useAuth();

  const [message, setMessage] = useState("");
  const [chatData, setChatData] = useState<{ user: string; message: string }[]>(
    []
  );

  const chatBox = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (globalState.user) {
      chat = new Chat(globalState.user, roomId, socket);
      const subscribeReceiveChatMessage = chat.receiveMessages(
        ({ message, user }) => {
          setChatData((existingChats) => {
            const newChats = [...existingChats];
            newChats.push({ message, user });
            return newChats;
          });
          scrollToBottom(chatBox);
        }
      );
      // cleanup receiveChatMessage listener
      return () => {
        subscribeReceiveChatMessage.off("receiveChatMessage");
      };
    }
  }, [globalState.user, roomId ,socket]);

  const postChat = () => {
    if (message) {
      chat.sendMessage(message);
      setMessage("");
    }
  };

  return (
    <ChatWrapper>
      <div className="chatInfo">
        <ChatIcon
          style={{
            width: cssScale.c6,
            margin: `${cssScale.c0} ${cssScale.c2} -${cssScale.c2}`,
          }}
        />
        <span>Chat</span>
      </div>
      <div className="chatContent">
        <div className="chatBox" ref={chatBox}>
          {chatData.map(({ user, message }, i) => (
            <div key={i} className="messageItem">
              <span className="userText">{user}:</span>&nbsp;
              <span className="chatText">{message}</span>
            </div>
          ))}
        </div>
        <div className="ChatInputWrapper">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && postChat()}
            placeholder="Enter message"
            paddingRight={cssScale.c11}
            borderRadius={cssScale.c2}
            outline="none"
          />
          <div className="buttonInsideInput" onClick={postChat}></div>
        </div>
      </div>
    </ChatWrapper>
  );
};

export default ChatBar;
