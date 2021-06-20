import { User } from "src/modules/User";
import { Socket } from "socket.io-client";

interface statusChangeParams {
  videoUrl?: string;
  roomId: string;
  playerStatus: Number;
}

export class Room {
  private isHost: boolean;
  private user: User;
  private roomId: string;
  private channel: Socket;

  constructor(isHost: boolean, user: User, channel: Socket, roomId: string) {
    channel.emit("joinRoom", { roomId, user: user.getProfile() });
    this.user = user;
    this.roomId = roomId;
    this.channel = channel;
    this.isHost = isHost;
  }

  sendMessage(message: string) {
    this.channel.emit("postChatMessage", {
      message,
      roomId: this.roomId,
      user: this.user.getProfile(),
    });
  }

  startVideo({ videoUrl, roomId, playerStatus }: statusChangeParams) {
    this.channel.emit("startVideo", { videoUrl, roomId, playerStatus });
  }

  pauseVideo({ roomId, playerStatus }: statusChangeParams) {
    this.channel.emit("pauseVideo", { roomId, playerStatus });
  }

  on(listener: (playerData: statusChangeParams) => void) {
    this.channel.on("startVideo", listener);
    this.channel.on("pauseVideo", listener);
  }
}
