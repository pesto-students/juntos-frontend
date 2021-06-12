import { User } from "src/modules/User";
import { Socket } from "socket.io-client";

interface chatMessage {
  timestamp: number;
  sender: string;
  message: string;
}
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
    this.channel.emit("postChatMessage", {
      message,
      roomId: this.roomId,
      user: this.user?.getToken(),
    });
  }

  fetchMessages(): Promise<chatMessage[]> {
    this.channel.emit("requestAllChatMessages", {
      roomId: this.roomId,
    });
    return new Promise<chatMessage[]>((resolve, reject) => {
      this.channel.on(
        "fetchAllMessages",
        (messages: chatMessage[], errorMessage: string) => {
          if (errorMessage) {
            reject(errorMessage);
          }
          return resolve(messages);
        }
      );
    });
  }
}
