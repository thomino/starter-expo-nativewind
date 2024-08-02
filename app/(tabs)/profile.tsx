import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const Profile = () => {
    return (
        <>
            {/*<Stack.Screen options={{ headerTitle: "List", headerShown: true, headerShadowVisible: false }} />*/}

            <View className='bg-white dark:bg-neutral-900 p-4 flex-1 items-center justify-center'>
                <Text className='text-2xl font-bold mb-2 dark:text-white'>This is anohter main page</Text>
                <View className='w-full flex-row justify-center'>
                    <Link asChild href="/screens/page-one">
                        <Pressable className='px-4 py-3 rounded-lg bg-neutral-800 mx-1'>
                            <Text className='text-base text-white'>Page one</Text>
                        </Pressable>
                    </Link>
                    <Link asChild href="/screens/page-one">
                        <Pressable className='px-4 py-3 rounded-lg bg-neutral-200 mx-1'>
                            <Text className='text-base text-neutral-900'>Page two</Text>
                        </Pressable>
                    </Link>
                </View>
            </View>
        </>
    )
}

export default Profile