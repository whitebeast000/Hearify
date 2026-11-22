import React from 'react'
import { View, StyleSheet,Pressable } from 'react-native'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { PlaybackService } from '../../musicPlayerServices'



export default function ControlCenter() {
const PlayBackState = usePlaybackState()

const skipToNext = async () => {
    await TrackPlayer.skipToNext()
}
const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious()
}
const togglePlayback = async (Playback: State) => {
    const currentTrack = await TrackPlayer.getActiveTrack

    if(currentTrack !== null){
        if(Playback === State.Paused || Playback === State.Ready)
        {
            await TrackPlayer.play()
        }
        else{
           await TrackPlayer.play
        }
    
    }
}


    return (
    <View style={styles.container}>ControlCenter
    
        <Pressable onPress={skipToPrevious}>
            <Icon  style={styles.icon} name='skip-previous' size={48} />
        </Pressable>
    
        <Pressable onPress={() => togglePlayback(PlayBackState)}>
            <Icon  style={styles.icon} name={PlayBackState === State.Playing? "pause": "play"} size={75} />
        </Pressable>
    
        <Pressable onPress={skipToNext}>
            <Icon  style={styles.icon} name='skip-next' size={48} />
        </Pressable>
        
    </View>
  


)
}


const styles = StyleSheet.create({
    container: {
      marginBottom: 56,
  
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      color: '#FFFFFF',
    },
    playButton: {
      marginHorizontal: 24,
    },
  });

