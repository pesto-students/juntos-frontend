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

let room: Room;

const SyncVideo: React.FC<SyncVideoProps> = ({ roomId, socket, isHost }) => {
  const { globalState } = useAuth();
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/watch?v=iDO9J_3OVJ0"
  );
  // this will be needed for non host User if they try to play aur pause video.
  // It will reset player back to status of host's player.
  const [hostPlayerStatus, setHostPlayerStatus] = useState<Number>(NaN);
  const playerRef = useRef<YouTube>(null);

  useEffect(() => {
    if (globalState.user) {
      room = new Room(isHost, globalState.user, socket, roomId);
      room.on(({ videoUrl, playerStatus }) => {
        if (videoUrl) {
          setVideoUrl(videoUrl);
          setHostPlayerStatus(playerStatus);
        } else {
          playerRef.current?.getInternalPlayer().pauseVideo();
        }
      });
    }
  }, [globalState.user, roomId, socket, isHost]);

  useEffect(() => {
    if (hostPlayerStatus === 1) {
      playerRef.current?.getInternalPlayer().playVideo();
    } else {
      playerRef.current?.getInternalPlayer().pauseVideo();
    }
  }, [videoUrl, hostPlayerStatus]);

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
    if ((playerStatus === -1 || playerStatus === 1) && videoCode) {
      room.startVideo({ videoUrl: player.getVideoUrl(), roomId, playerStatus });
    }
    // Pause all users
    if (playerStatus === 2) {
      room.pauseVideo({ roomId, playerStatus });
    }
  };

  const opts: { playerVars: PlayerVars } = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      mute: 1,
      controls: 0,
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
