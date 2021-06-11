import { User } from "src/modules/User";
import { Socket } from "socket.io-client";

interface messageData {
  message: string;
  user: User;
}

type ChatDetails = messageData & { roomId: string };

export class Chat {
  private user: User;
  private roomId: string;
  private channel: Socket;

  constructor(user: User, roomId: string, channel: Socket) {
    this.user = user;
    this.roomId = roomId;
    this.channel = channel;
  }

  sendMessage(message: string) {
    const chatDataToSend: ChatDetails = {
      message,
      roomId: this.roomId,
      user: this.user,
    };
    this.channel.emit("sendMessage", chatDataToSend);
  }

  // updateMessages will update our react chat components messsages
  async fetchMessages(updateMessages: any) {
    this.channel.emit("requestAllMessages", {
      roomId: this.roomId,
      user: this.user,
    });
    this.channel.on("fetchAllMessages", (messages: messageData) => {
      updateMessages(messages);
    });
  }
}
