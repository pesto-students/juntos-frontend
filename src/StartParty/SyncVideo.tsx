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
let videoCode: string | undefined;

const SyncVideo: React.FC<SyncVideoProps> = ({ roomId, socket, isHost }) => {
  const { globalState } = useAuth();
  const [currentVideoUrl, setVideoUrl] = useState("");
  if (currentVideoUrl) {
    videoCode = currentVideoUrl.split("v=")[1]?.split("&")[0];
  }
  // this will be needed for non host User if they try to play aur pause video.
  // It will reset player back to status of host's player.
  const playerRef = useRef<YouTube>(null);

  useEffect(() => {
    if (globalState.user) {
      room = new Room(isHost, globalState.user, socket, roomId);
      const YTPlayer: YTEventFunction = playerRef.current?.getInternalPlayer();
      //when host start the video
      room.on(SocketRoomEvents.startVideo, ({ videoUrl = "" }) => {
        setVideoUrl(videoUrl);
      });

      //when host pause the video
      room.on(SocketRoomEvents.pauseVideo, () => {
        YTPlayer?.pauseVideo();
      });
      if (!isHost) {
        // update the timeStamp
        room.on(
          SocketRoomEvents.updateTimeStamp,
          ({ timestamp = 0, playerState }) => {
            const YTPlayer: YTEventFunction =
              playerRef.current?.getInternalPlayer();
            YTPlayer?.getCurrentTime().then((result: Number) => {
              if (Math.abs(+(result || 0) - +(timestamp || 0)) > 5) {
                YTPlayer?.seekTo(timestamp, true);
              }
            });
            if (YTPlayer.getPlayerState() !== playerState) {
              if (playerState === 1) {
                YTPlayer?.playVideo();
              } else if (playerState === 2) {
                YTPlayer?.pauseVideo();
              }
            }
          }
        );
      }
    }
  }, [globalState.user, socket, isHost, roomId]);

  useEffect(() => {
    const YTPlayer: YTEventFunction = playerRef.current?.getInternalPlayer();
    if (isHost) {
      if (updatePlayerTimestamp) {
        clearInterval(updatePlayerTimestamp);
      }
    }
    if (videoCode) {
      YTPlayer?.playVideo();
    }
    return () => {
      clearInterval(updatePlayerTimestamp);
    };
  }, [currentVideoUrl, isHost]);

  const onPlayerStateChange = ({
    target: player,
  }: {
    target: YTEventFunction;
  }) => {
    if (isHost) {
      // -1 - unStarted, 1 - playing, 2 - pause, 3 - buffering, 0 - Done
      const playerState = player.getPlayerState();
      if ((playerState === -1 || playerState === 1) && videoCode) {
        room.sendMessage(SocketRoomEvents.startVideo, {
          videoUrl: player.getVideoUrl(),
        });
        if (!updatePlayerTimestamp) {
          updatePlayerTimestamp = setInterval(() => {
            room.sendMessage(SocketRoomEvents.updateTimeStamp, {
              timestamp: player.getCurrentTime(),
              playerState: player.getPlayerState(),
            });
          }, 2000);
        }
      }
      // Pause all users
      if (playerState === 2) {
        room.sendMessage(SocketRoomEvents.pauseVideo, {});
      }
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
        <div>{roomId}</div>
        <div>https://www.youtube.com/watch?v=RHSpjyMHPYg</div>
      </div>
      <div>
        <label htmlFor="videoUrlInput">Enter Video link: </label>
        <Input
          name="videoUrlInput"
          width="300px"
          value={currentVideoUrl}
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
