import { User } from "src/modules/User";
import { Socket } from "socket.io-client";

interface messageData {
  message: string;
  user: User;
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
    this.channel.emit("sendMessage", {
      message,
      roomId: this.roomId,
      user: this.user,
    });
  }

  async fetchMessages(): Promise<messageData> {
    this.channel.emit("requestAllMessages", {
      roomId: this.roomId,
      user: this.user,
    });
    return new Promise<messageData>((resolve, reject) => {
      this.channel.on(
        "fetchAllMessages",
        (messages: messageData, errorMessage: string) => {
          if (errorMessage) {
            reject(errorMessage);
          }
          return resolve(messages);
        }
      );
    });
  }
}
