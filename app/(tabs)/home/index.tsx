import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

import { useColorScheme } from "nativewind";



const Home = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <>

      <View className='bg-white dark:bg-neutral-900 p-4 flex-1 items-center justify-center'>
        <Text className='text-2xl font-bold mb-2 dark:text-white'>This is home page</Text>

          <Pressable onPress={toggleColorScheme} className='px-4 py-3 rounded-lg bg-neutral-800 dark:bg-white'>
            <Text className='text-base text-white dark:text-neutral-900'>Switch theme</Text>
          </Pressable>

      </View>
    </>
  )
}

export default Home