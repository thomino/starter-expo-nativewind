import { View, Text } from 'react-native'
import React from 'react'

import { BackHeader } from '../components/Headers'
import { Stack } from 'expo-router'

const PageOne = () => {
  const getHeaderOptions = (title: string) => ({
    ...BackHeader({ title })
  });
  return (
    <>
      <Stack.Screen options={getHeaderOptions('Page one')} />
      <View className='flex-1 bg-white p-4'>
        <Text>Page one</Text>
      </View>
    </>
  )
}

export default PageOne