import { Button } from '@react-navigation/elements'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'

export default function DetailScreen() {
    const navigation = useNavigation()

    const BackToHome = () => {
        navigation.goBack('Home')
    }
  return (
    <View>
        <Button className="bg-red-500" onPress={BackToHome}>anjirrr</Button>
        <Text>Details</Text>
    </View>
  )
}
