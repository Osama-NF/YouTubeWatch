import React from 'react';
import { 
  Pressable,
  Text,
  View
} from 'react-native';
import {VideoScreenStyle} from '../../Styles/styles'

// https://lonelycpp.github.io/react-native-youtube-iframe/component-props
import YoutubePlayer from "react-native-youtube-iframe";

import VideoControls from '../../Components/VideoControls';
import VideoInfo from '../../Components/VideoInfo';

export default function VideoScreen(props) {

  const playerRef = React.useRef();
  const [lastWatched, setLastWatched] = React.useState(props.route.params.last)
  const [play, setPlay] = React.useState(true)
  const [playbackRate, setPlaybackRate] = React.useState(1)

  
  return (
    <View>

      <View style={VideoScreenStyle.videoContainer} >
        <YoutubePlayer
        ref={playerRef}
        height={250}
        play={play}
        videoId={props.route.params.id}
        playbackRate={playbackRate}
        volume={100}
        />
      </View>

      <VideoInfo
      refe={playerRef}
      length={props.route.params.fullLength}
      lastWatched={lastWatched}
      setLastWatched={setLastWatched}
      playbackRate={playbackRate}
      />

      <VideoControls
      refe={playerRef}
      play={play}
      setPlay={setPlay}
      playbackRate={playbackRate}
      setPlaybackRate={setPlaybackRate}
      />

    </View>
    );
}

