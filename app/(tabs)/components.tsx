import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'


import { Input } from '../components/FormElements'
import Button from '../components/Button'

const Components = () => {
    return (
        <ScrollView className='p-4 bg-white'>
            {/*<Stack.Screen options={{ headerTitle: "List", headerShown: true, headerShadowVisible: false }} />*/}


            <View className='w-full flex-row items-center'>
                <View className='w-1/2 pr-1'>
                    <Button title="Primary" url="#" />
                </View>
                <View className='w-1/2 pl-1'>
                    <Button isSecondary title="Secondary" url="#" />
                </View>
            </View>
            <View className='w-full flex-row items-center mt-2'>
                <View className='w-1/2 pr-1'>
                    <Button title="Small" isSmall url="#" />
                </View>
                <View className='w-1/2 pl-1'>
                    <Button isSecondary isSmall title="Small" url="#" />
                </View>
            </View>
            <View className='mt-2'>
                <Button title="With icon" hasIcon icon="search" url="#" />
            </View>
            <Input label="Basic input" placeholder="Type here" />
            <Input label="With icon" hasIcon icon="search" placeholder="Type here" />
        </ScrollView>
    )
}

export default Components