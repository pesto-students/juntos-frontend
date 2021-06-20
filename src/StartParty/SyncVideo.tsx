import React, { useEffect, useState, useRef } from "react";
import YouTube, { PlayerVars } from "react-youtube";

import { useAuth } from "src/context/GlobalContext";
import Input from "src/components/Input";
import { Room } from "src/modules/Room";
import {
  SyncVideoProps,
  YTEventFunction,
} from "src/StartParty/StartParty.interface";
import "src/StartParty/StartParty.css";
import { SocketRoomEvents } from "src/common/interface";

let room: Room, updatePlayerTimestamp: ReturnType<typeof setInterval>;

const SyncVideo: React.FC<SyncVideoProps> = ({ roomId, socket, isHost }) => {
  const { globalState } = useAuth();
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/watch?v=RHSpjyMHPYg"
  );
  // this will be needed for non host User if they try to play aur pause video.
  // It will reset player back to status of host's player.
  const [hostPlayerStatus, setHostPlayerStatus] = useState<Number>(NaN);
  const playerRef = useRef<YouTube>(null);

  useEffect(() => {
    if (globalState.user) {
      room = new Room(isHost, globalState.user, socket, roomId);

      //when host start the video
      room.on(SocketRoomEvents.startVideo, ({ videoUrl, playerStatus }) => {
        console.log("on.startVideo");
        if (videoUrl) {
          setVideoUrl(videoUrl);
        }
        setHostPlayerStatus(playerStatus);
      });

      //when host pause the video
      room.on(SocketRoomEvents.pauseVideo, () => {
        console.log("on.pauseVideo");
        playerRef.current?.getInternalPlayer().pauseVideo();
      });

      // // update the timeStamp
      // room.on(SocketRoomEvents.updateTimeStamp, ({ timestamp }) => {
      //   console.log("on.updateTimeStamp");
      //   const YTPlayer: YTEventFunction =
      //     playerRef.current?.getInternalPlayer();
      //   if (
      //     timestamp &&
      //     Math.abs(+(YTPlayer.getCurrentTime() || 0) - +(timestamp || 0)) > 5
      //   ) {
      //     YTPlayer.seekTo(timestamp, false);
      //   }
      // });
    }
  }, [globalState.user, roomId, socket, isHost]);

  useEffect(() => {
    const YTPlayer: YTEventFunction = playerRef.current?.getInternalPlayer();
    console.log(hostPlayerStatus, ">>>>hostPlayerStatus>>");
    if (updatePlayerTimestamp) {
      console.log('clear updateTimeStamp')
      clearInterval(updatePlayerTimestamp);
    }
    if (hostPlayerStatus === 1) {
      // updatePlayerTimestamp = setInterval(() => {
      //   room.sendMessage(SocketRoomEvents.updateTimeStamp, {
      //     roomId,
      //     timestamp: YTPlayer.getCurrentTime(),
      //     playerStatus: hostPlayerStatus,
      //   });
      // }, 2000);
      playerRef.current?.getInternalPlayer().playVideo();
    }
    if (hostPlayerStatus === 2) {
      YTPlayer.pauseVideo();
    }
  }, [videoUrl, hostPlayerStatus, roomId]);

  let videoCode: string | undefined;
  if (videoUrl) {
    videoCode = videoUrl.split("v=")[1]?.split("&")[0];
  }

  const onPlayerStateChange = ({
    target: player,
  }: {
    target: YTEventFunction;
  }) => {
    // -1 - unStarted, 1 - playing, 2 - pause, 3 - buffering, 0 - Done
    const playerStatus = player.getPlayerState();
    console.log(playerStatus);
    if ((playerStatus === -1 || playerStatus === 1) && videoCode) {
      room.sendMessage(SocketRoomEvents.startVideo, {
        videoUrl: player.getVideoUrl(),
        roomId,
        playerStatus,
      });
    }
    // Pause all users
    if (playerStatus === 2) {
      room.sendMessage(SocketRoomEvents.pauseVideo, { roomId, playerStatus });
    }
  };

  const opts: { playerVars: PlayerVars } = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      mute: 1,
      controls: isHost ? 1 : 0,
    },
  };

  return (
    <>
      <div>
        <h1>Youtube Sync Service</h1>
        <div></div>
      </div>
      <div>
        <label htmlFor="videoUrlInput">Enter Video link: </label>
        <Input
          name="videoUrlInput"
          width="300px"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <div>
          <YouTube
            ref={playerRef}
            videoId={videoCode}
            onStateChange={onPlayerStateChange}
            opts={opts}
          />
        </div>
      </div>
    </>
  );
};

export default SyncVideo;
