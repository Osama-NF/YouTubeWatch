import React from 'react';
import { 
  Pressable,
  Text,
  View
} from 'react-native';
// https://lonelycpp.github.io/react-native-youtube-iframe/component-props
import YoutubePlayer from "react-native-youtube-iframe";

export default function VideoScreen(props) {

  const playerRef = React.useRef();

  
  return (
    <View>

      <YoutubePlayer
      ref={playerRef}
      height={250}
      play={true}
      videoId={props.route.params.id}
      />

      <View>
        
        <Pressable
        onPress={()=> {
          // To get current time, shouldn't be here but I will leave it for now
          playerRef.current?.getCurrentTime().then( currentTime => console.log(currentTime))
        }}
        >
          <Text>Pause</Text>  
        </Pressable>

        <Pressable>
          <Text>Start</Text>  
        </Pressable>
      
      </View>

    </View>
    );
}

