import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const Home = () => {
  return (
    <>

      <View className='bg-white p-4 flex-1 items-center justify-center'>
        <Text className='text-2xl font-bold mb-2'>This is home page</Text>
        <Link asChild href="/(tabs)/home/subpage">
          <Pressable className='px-4 py-3 rounded-lg bg-neutral-800'>
            <Text className='text-base text-white'>Subpage</Text>
          </Pressable>
        </Link>
      </View>
    </>
  )
}

export default Home