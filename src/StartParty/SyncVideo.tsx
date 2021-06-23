import React, { useEffect, useState, useRef } from "react";
import YouTube, { PlayerVars } from "react-youtube";

import { useAuth } from "src/context/GlobalContext";
import { Room } from "src/modules/Room";
import {
  SyncVideoProps,
  YTEventFunction,
} from "src/StartParty/StartParty.interface";
import "src/StartParty/StartParty.css";
import { SocketRoomEvents } from "src/common/interface";
import { HighlightContainer, ViewportSection } from "src/components";
import { Text } from "src/components/Text";
import { TranslucentInput } from "src/SelectVideo/SelectVideo.styles";
let room: Room,
  updatePlayerTimestamp: ReturnType<typeof setInterval> | undefined;
let videoCode: string | undefined;

const SyncVideo: React.FC<SyncVideoProps> = ({
  roomId,
  socket,
  isHost,
  videoId = "",
  videoUrl = "",
}) => {
  // Auth Context Needed for Current user Info
  const { globalState } = useAuth();
  const playerRef = useRef<YouTube>(null);

  const [currentVideoUrl, setCurrentVideoUrl] = useState<string>(
    videoUrl
      ? videoUrl
      : videoId
      ? `https://www.youtube.com/watch?v=${videoId}`
      : ""
  );

  /**
   * Extract videoId from videoUrl for youtube
   */
  if (currentVideoUrl) {
    videoCode = currentVideoUrl.split("v=")[1]?.split("&")[0];
  }

  /**
   * Youtube player Ref for getting access to player current stats
   */
  const YTPlayer: YTEventFunction = playerRef.current?.getInternalPlayer();

  const opts: { playerVars: PlayerVars } = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  useEffect(() => {
    if (globalState.user) {
      room = new Room(isHost, globalState.user, socket, roomId);
      /**
       * When host start the video Listen for startVideo SocketRoomEvent
       */
      room.on(SocketRoomEvents.startVideo, ({ videoUrl = "" }) => {
        setCurrentVideoUrl(videoUrl);
      });

      /**
       * When host start the video Listen for pauseVideo SocketRoomEvent
       */
      room.on(SocketRoomEvents.pauseVideo, () => {
        YTPlayer?.pauseVideo();
      });

      if (!isHost) {
        /**
         * Update timeStamp Socket Event.
         * This will be needed for non host User if they try to play aur pause video.
         * It will reset player back to status of host's player.
         */
        room.on(
          SocketRoomEvents.updateTimeStamp,
          ({ timestamp = 0, playerState, videoUrl }) => {
            // if difference between host and user exceeds greater than 3 seconds
            // seek video to updated timeStamp
            YTPlayer?.getCurrentTime().then((result: Number) => {
              if (Math.abs(+(result || 0) - +(timestamp || 0)) > 3) {
                YTPlayer?.seekTo(timestamp, true);
              }
            });

            // change YTPlayer state according to the host playerState
            if (YTPlayer?.getPlayerState() !== playerState) {
              if (playerState === 1) {
                YTPlayer?.playVideo();
              } else if (playerState === 2) {
                YTPlayer?.pauseVideo();
              }
            }

            // If host joins late then set current VideoUrl from the updateTimeStamp Event
            if (videoUrl && currentVideoUrl !== videoUrl) {
              setCurrentVideoUrl(videoUrl);
            }
          }
        );
      }
    }
    return () => {
      room.sendMessage(SocketRoomEvents.leaveRoom, {});
    };
  }, [globalState.user, socket, isHost, roomId, currentVideoUrl, YTPlayer]);

  useEffect(() => {
    /**
     * if videoUrl Change then clear Previus Interval.
     * Start again after new URL video is played.
     */
    if (isHost && updatePlayerTimestamp) {
      clearInterval(updatePlayerTimestamp);
      updatePlayerTimestamp = undefined;
    }

    /**
     * If valid video code present playVideo
     */
    videoCode && YTPlayer?.playVideo();

    /**
     * Clean Up updatePlayerTimestamp Interval at Unmount
     */
    return () => {
      if (isHost && updatePlayerTimestamp) {
        clearInterval(updatePlayerTimestamp);
      }
    };
  }, [currentVideoUrl, isHost, YTPlayer]);

  const onPlayerStateChange = ({
    target: player,
  }: {
    target: YTEventFunction;
  }) => {
    if (isHost) {
      /**
       * @description player.getPlayerState()
       * -1 - unStarted
       *  1 - playing
       *  2 - pause
       *  3 - buffering
       *  0 - Done
       */
      const playerState = player.getPlayerState();
      if (playerState === 1 && videoCode) {
        room.sendMessage(SocketRoomEvents.startVideo, {
          videoUrl: player.getVideoUrl(),
        });
      }

      /**
       * Start updateTimeStamp SocketEvent again after Video is loaded.
       */
      if (!updatePlayerTimestamp) {
        updatePlayerTimestamp = setInterval(() => {
          room.sendMessage(SocketRoomEvents.updateTimeStamp, {
            timestamp: player.getCurrentTime(),
            playerState: player.getPlayerState(),
            videoUrl: player.getVideoUrl(),
          });
        }, 2000);
      }

      // Pause all users
      if (playerState === 2) {
        room.sendMessage(SocketRoomEvents.pauseVideo, {});
      }
    }
  };

  return (
    <ViewportSection>
      <HighlightContainer
        flexDirection={`column`}
        justifyContent="flex-start"
        alignItems="center"
        padding="36px"
      >
        <div>{roomId}</div>
        {isHost && (
          <>
            <Text>Enter Youtube Url:</Text>
            <TranslucentInput
              name="videoUrlInput"
              value={currentVideoUrl}
              onChange={(e) => setCurrentVideoUrl(e.target.value)}
            />
          </>
        )}
        <br />
        <YouTube
          ref={playerRef}
          videoId={videoCode}
          onStateChange={onPlayerStateChange}
          opts={opts}
        />
      </HighlightContainer>
    </ViewportSection>
  );
};

export default SyncVideo;
