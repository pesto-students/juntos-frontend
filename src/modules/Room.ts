import { User } from "src/modules/User";
import { Socket } from "socket.io-client";
import { SocketRoomEvents } from "src/common/interface";
interface StatusChangeParams {
  videoUrl?: string;
  timestamp?: Number;
  playerState?: Number;
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

  sendMessage(event: SocketRoomEvents, data: StatusChangeParams) {
    this.channel.emit(event, { ...data, roomId: this.roomId });
  }

  on(
    event: SocketRoomEvents,
    listener: (playerData: StatusChangeParams) => void
  ) {
    return this.channel.on(event, listener);
  }
}
