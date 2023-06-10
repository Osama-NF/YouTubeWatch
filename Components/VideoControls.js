import { View, Pressable, Button } from "react-native";
// Icons
import {
    MaterialCommunityIcons,
    AntDesign
} from '@expo/vector-icons';
import { VideoScreenStyle } from "../Styles/styles";
import React from 'react'


export default function VideoControls({refe, play, setPlay, playbackRate, setPlaybackRate}) {

    const BUTTON_SIZE = 124
    const [pauseIcon, setPauseIcon] = React.useState('pause')

    const changePauseBtn = () => {
        if (play) setPauseIcon('play')
        else setPauseIcon('pause')
    }

    const pauseBtn = () => {
        setPlay(!play)
        changePauseBtn()
    }

    const rewindBtn = () => {
        refe.current.getCurrentTime().then((time)=> {
            refe.current.seekTo(time - 5)
        })
    }

    const forwardBtn = () => {
        refe.current.getCurrentTime().then((time)=> {
            refe.current.seekTo(time + 5)
        })
    }

    const fasterBtn = () => {
        if (playbackRate === 2) return
        setPlaybackRate(playbackRate + 0.25)
    }
    
    const slowerBtn = () => {
        if (playbackRate === 0.25) return
        setPlaybackRate(playbackRate - 0.25)
    }

    return (
        <View style={VideoScreenStyle.videoControls}>
        
        <View style={VideoScreenStyle.controlGroup}>
        
          <Pressable 
          style={VideoScreenStyle.btn}
          onPress={fasterBtn}>
            <MaterialCommunityIcons name="clock-plus-outline" size={BUTTON_SIZE} color="black" />
          </Pressable>
          
          <Pressable 
          style={VideoScreenStyle.btn}
          onPress={slowerBtn}>
            <MaterialCommunityIcons name="clock-minus-outline" size={BUTTON_SIZE} color="black" />
          </Pressable>

        </View>

        <View style={VideoScreenStyle.controlGroup}>

          <Pressable 
          style={VideoScreenStyle.btn}
          onPress={forwardBtn}>
            <MaterialCommunityIcons name="fast-forward-5" size={BUTTON_SIZE} color="black" /> 
          </Pressable>
          
          <Pressable 
          style={VideoScreenStyle.btn}
          onPress={pauseBtn}>
            <MaterialCommunityIcons name={pauseIcon} size={BUTTON_SIZE} color="black" />
          </Pressable>
        
          <Pressable 
          style={VideoScreenStyle.btn}
          onPress={rewindBtn}>
            <MaterialCommunityIcons name="rewind-5" size={BUTTON_SIZE} color="black" />
          </Pressable>
        
        </View>

      </View>
    )
}