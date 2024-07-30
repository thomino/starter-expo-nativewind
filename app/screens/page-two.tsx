import { View, Text } from 'react-native'
import React from 'react'

import { BackHeader } from '../components/Headers'
import { Stack } from 'expo-router'

const PageTwo = () => {
  const getHeaderOptions = (title: string) => ({
    ...BackHeader({ title })
  });
  return (
    <>
      <Stack.Screen options={getHeaderOptions('Page two')} />
      <View className='flex-1 bg-white p-4'>
        <Text>Page two</Text>
      </View>
    </>
  )
}

export default PageTwo