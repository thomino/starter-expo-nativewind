import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

import { Input } from '../components/FormElements'

const Search = () => {
    return (
        <>
            {/*<Stack.Screen options={{ headerTitle: "List", headerShown: true, headerShadowVisible: false }} />*/}

            <View className='bg-white dark:bg-neutral-900 p-4 flex-1 items-center justify-center'>
                <Text className='text-2xl font-bold mb-2 dark:text-white'>Search for example</Text>
                <View className='w-full flex-row justify-center'>
                    <Input hasIcon icon="search" label="Search here" placeholder="Type" />
                </View>
            </View>
        </>
    )
}

export default Search