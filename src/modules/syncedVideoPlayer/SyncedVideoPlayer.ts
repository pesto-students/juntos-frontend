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
   * channel - communication channel
   */
  channel: Socket

  /**
   * room - connected party socket room name
   * Note: room and channel are the same thing in socket.io
   */
  room: String

  /**
   * player - Youtube player object
   */
  player: any

  constructor(user: User, videoId: String, channel: Socket, room: String){
    this.user = user;
    this.videoId = videoId;
    this.room = room;
    this.channel = channel;

    const id = 'some_id';
    this.player = new window.YT.Player(`player-${id}`, {
      videoId: this.videoId,
      events: {
        onReady: this.onPlayerReady,
      },
    });
  }

  onPlayerReady() {
    // TODO
  }
  
  /**
   * start() is used to start the sync process, 
   * once the video is selected on host side, all other connected users will be notified.
   * server-side will send the notifiction to other clients in the room (messsaging to rooms is a server side feature)
   */
  start(){
    /**
     * Notify other users
     */
    this.channel.emit('share-video', 
      { 
        room: this.room, 
        videoId: this.videoId,
      }
    )

    /**
     * Load the video in the player
     */
    this.player.loadVideoById(this.videoId);
  }
}

export default SyncedVideoPlayer;