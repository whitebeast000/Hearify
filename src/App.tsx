import { StyleSheet,ActivityIndicator, Text, View } from 'react-native'
import React, { useState, useEffect }  from 'react'

import {addTrack, setupPlayer} from '../musicPlayerServices'


export default function App() {

  const [isPlayerReady, setIsPlayerReady] = useState(false)


  async function setup() {
    let isSetup = await setupPlayer()

    if(isSetup)
    {
      await addTrack()
    }

    setIsPlayerReady(isSetup)
  }


  useEffect(() => {
    setup()

  }, [])

  if(!isPlayerReady){
    return(
      <View>
        <ActivityIndicator> </ActivityIndicator>
      </View>
    )
  }

  return (
    <View>
      <Text> </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
})