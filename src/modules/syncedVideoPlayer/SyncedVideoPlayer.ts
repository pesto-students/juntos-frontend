import { Socket } from "socket.io-client";

interface User {
  id: string;
  name: string;
}

class SyncedVideoPlayer {

  /**
   * User {id, name}
   */
  user: User

  /**
   * videoId - youtube videoId
   */
  videoId: String

  /**
   * room - connected party socket room name
   * Note: room and channel are the same thing in socket.io
   */
  room: String

  constructor(user: User, videoId: String, room: String){
    this.user = user;
    this.videoId = videoId;
    this.room = room;
  }
  
  /**
   * start() is used to start the sync process, 
   * once the video player is ready to play on host side, all other connected users will be notified.
   * server-side will send the notifiction to other clients in the room (messsaging to rooms is a server side feature)
   */
  start(socket: Socket, startSecond: number){
    socket.emit('video-ready', 
      { 
        room: this.room, 
        videoId: this.videoId, 
        startSecond
      }
    )
  }

  stop(){}

  play(){}

  pause(){}
}

export default SyncedVideoPlayer;