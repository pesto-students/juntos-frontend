import { Socket } from "socket.io-client";

export interface SyncVideoProps {
  roomId: string;
  socket: Socket;
  isHost: boolean;
}

export interface YTEventFunction {
  // getDuration: Returns the duration in seconds of the currently playing video.
  // Note that getDuration() will return 0 until the video's metadata is loaded,
  // which normally happens just after the video starts playing.
  getDuration: () => Number;

  // getPlayerState: Returns the state of the player. Possible values are:
  // -1 – unStarted, 0 – ended, 1 – playing, 2 – paused,3 – buffering, 5 – video cued
  getPlayerState: () => Number;

  // playVideo: Plays the currently cued/loaded video.
  // The final player state after this function executes will be playing (1).
  // Note: A playback only counts toward a video's official view count
  // if it is initiated via a native play button in the player.
  playVideo: () => void;

  // getCurrentTime: Returns the elapsed time in seconds since the video started playing.
  getCurrentTime: () => any;

  /** Pauses the currently playing video. The final player state after this
      function executes will be paused (2) unless the player is in the ended (0)state
      when the function is called, in which case the player state will not change. */
  pauseVideo: () => void;

  /** Returns the YouTube.com URL for the currently loaded/playing video.*/
  getVideoUrl: () => string;

  /** seekTo: Seeks to a specified time in the video. If the player is paused when the function is called, it will remain paused. If the function is called from another state (playing, video cued, etc.), the player will play the video.
      The seconds parameter identifies the time to which the player should advance.

      1. The player will advance to the closest keyframe before that time unless the player
         has already downloaded the portion of the video to which the user is seeking.

      2. The allowSeekAhead parameter determines whether the player will make a new request 
         to the server if the seconds parameter specifies a time outside of the currently 
         buffered video data. */
  seekTo: (seconds: Number, allowSeekAhead: boolean) => void;
}
