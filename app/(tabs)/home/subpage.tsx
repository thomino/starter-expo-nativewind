import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const subpage = () => {
  return (
    <>
    <Stack.Screen options={{headerShown: false}} />
      <View className='flex-1 p-4 bg-white items-center justify-center'>
        <Text className='text-3xl font-bold'>subpage</Text>
      </View>
    </>
  )
}

export default subpage