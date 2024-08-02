import { View, Text } from 'react-native'
import React from 'react'

import { BackHeader } from '../components/Headers'
import { Stack } from 'expo-router'
import { useColorScheme } from "nativewind";

const PageTwo = () => {
  const { colorScheme } = useColorScheme();
  const getHeaderOptions = (title) => ({
    ...BackHeader({ title }),
    headerStyle: {
      backgroundColor: colorScheme === 'dark' ? '#171717' : '#fff', // Dynamic background color
    },
    headerTintColor: colorScheme === 'dark' ? '#fff' : '#000', // Dynamic text color
  });
  return (
    <>
      <Stack.Screen options={getHeaderOptions('Page two')} />
      <View className='flex-1 bg-white dark:bg-neutral-900 p-4'>
        <Text className='dark:text-white'>Page two</Text>
      </View>
    </>
  )
}

export default PageTwo