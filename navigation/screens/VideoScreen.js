import React from 'react';
import { 
  Pressable,
  Text,
  View
} from 'react-native';
import {VideoScreenStyle} from '../../Styles/styles'
// https://lonelycpp.github.io/react-native-youtube-iframe/component-props
import YoutubePlayer from "react-native-youtube-iframe";

// Icons
import {
  MaterialCommunityIcons
} from '@expo/vector-icons';

export default function VideoScreen(props) {

  const playerRef = React.useRef();
  const [lastWatched, setLastWatched] = React.useState(props.route.params.last)
  const BUTTON_SIZE = 124

  
  return (
    <View>

      <View style={VideoScreenStyle.videoContainer} >
        <YoutubePlayer
        ref={playerRef}
        height={250}
        play={true}
        videoId={props.route.params.id}
        />
      </View>

      <View style={VideoScreenStyle.videoInfo}>
        
        <View>
          <Text>Finished: {lastWatched}</Text>
          <Text>Out of: {props.route.params.fullLength}</Text>
        </View>

        <Pressable 
        style={VideoScreenStyle.btn}
        onPress={()=> {
          playerRef.current?.getCurrentTime().then(setLastWatched)
        }}>
          <MaterialCommunityIcons name="content-save" size={48} color="black" />
        </Pressable>

      </View>

      <View style={VideoScreenStyle.videoControls}>
        
        <View style={VideoScreenStyle.controlGroup}>
        
          <Pressable style={VideoScreenStyle.btn}>
            <MaterialCommunityIcons name="play-speed" size={BUTTON_SIZE} color="black" />
          </Pressable>
          
          <Pressable style={VideoScreenStyle.btn}>
            <MaterialCommunityIcons name="volume-high" size={BUTTON_SIZE} color="black" />
          </Pressable>

        </View>

        <View style={VideoScreenStyle.controlGroup}>

          <Pressable style={VideoScreenStyle.btn}>
            <MaterialCommunityIcons name="fast-forward-5" size={BUTTON_SIZE} color="black" /> 
          </Pressable>
          
          <Pressable style={VideoScreenStyle.btn}>
            <MaterialCommunityIcons name="pause" size={BUTTON_SIZE} color="black" />
          </Pressable>
        
          <Pressable style={VideoScreenStyle.btn}>
            <MaterialCommunityIcons name="rewind-5" size={BUTTON_SIZE} color="black" />
          </Pressable>
        
        </View>

      </View>

    </View>
    );
}

