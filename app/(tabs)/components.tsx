import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'


import { Input } from '../components/FormElements'
import Button from '../components/Button'

const Components = () => {
    return (
        <ScrollView className='p-4 bg-white w-full dark:bg-neutral-900'>
            {/*<Stack.Screen options={{ headerTitle: "List", headerShown: true, headerShadowVisible: false }} />*/}

            <Input label="Basic input" placeholder="Type here" />
            <Input label="With icon" hasIcon icon="search" placeholder="Type here" />

            <View className='w-full flex-row'>
                <View className='w-1/2 pr-2'>
                    <Input label="Half" placeholder="Type here" />
                </View>
                <View className='w-1/2 pl-2'>
                    <Input label="Half icon" hasIcon icon="calendar" placeholder="Type here" />
                </View>
            </View>
            <View className='w-full flex-row items-center mt-6'>
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


            <Text className='text-3xl mt-10 font-bold dark:text-white'>Whats happening?</Text>
            <Text className='text-sm dark:text-neutral-400 text-slate-400'>This is subtitle description and whatever you want it to be or lorem ipsum dolor sit amet</Text>

        </ScrollView>
    )
}

export default Components