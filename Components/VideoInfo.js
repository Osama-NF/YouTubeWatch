import { View, Pressable, Text } from "react-native"
// Icons
import {
    MaterialCommunityIcons
} from '@expo/vector-icons';
import { VideoScreenStyle } from "../Styles/styles";


export default function VideoInfo({refe, length, lastWatched, setLastWatched, playbackRate}) {
    return(
        <View style={VideoScreenStyle.videoInfo}>
        
            <View>
                <Text>Finished: {lastWatched}</Text>
                <Text>Out of: {length}</Text>
                <Text>Playback Speed: {playbackRate}</Text>
            </View>

            <Pressable 
            style={VideoScreenStyle.btn}
            onPress={()=> {
                console.log(refe)
                refe.current?.getCurrentTime().then(setLastWatched)
            }}>
                <MaterialCommunityIcons name="content-save" size={48} color="black" />
            </Pressable>

      </View>
    )
}