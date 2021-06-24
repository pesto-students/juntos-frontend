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

  /**
   * 
   * @param isHost Is Current user is Host
   * @param user User instance
   * @param channel socekt instance 
   * @param roomId 
   * @description initialize and Join Room  
   */
  constructor(isHost: boolean, user: User, channel: Socket, roomId: string) {
    channel.emit(SocketRoomEvents.joinRoom, { roomId, user: user.getProfile() });
    this.user = user;
    this.roomId = roomId;
    this.channel = channel;
    this.isHost = isHost;
  }

  /**
   * 
   * @param event Socket Event that can be triggered by User.
   * @param data Data to be sent to socket server.
   */
  sendMessage(event: SocketRoomEvents, data: StatusChangeParams) {
    this.channel.emit(event, { ...data, roomId: this.roomId });
  }

  /**
   * 
   * @param event Socket Event that can be triggered by User.
   * @param playerData Received data from socket server.
   * @returns listener event listener.
   */
  on(
    event: SocketRoomEvents,
    listener: (playerData: StatusChangeParams) => void
  ) {
    return this.channel.on(event, listener);
  }
}
