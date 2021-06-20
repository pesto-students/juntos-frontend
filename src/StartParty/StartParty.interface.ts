import { Socket } from "socket.io-client";

export interface SyncVideoProps {
  roomId: string;
  socket: Socket;
  isHost: boolean;
}

export interface YTEventFunction {
  // getCurrentTime: Returns the elapsed time in seconds since the video started playing.
  getCurrentTime: () => Number;

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

  /** Pauses the currently playing video. The final player state after this
      function executes will be paused (2) unless the player is in the ended (0)state
      when the function is called, in which case the player state will not change. */
  pauseVideo: () => void;

  /**  @description Returns the YouTube.com URL for the currently loaded/playing video.*/
  getVideoUrl: () => string;
}
