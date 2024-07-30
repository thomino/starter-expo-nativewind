import { Pressable, Text, View, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react';

import { Link, Stack, useRouter } from 'expo-router'

import { BackHeader } from '../components/Headers';

const Notifications = () => {



    const getHeaderOptions = (title: string) => ({
        ...BackHeader({ title })
    });
  
    return (

        <>
            <Stack.Screen options={getHeaderOptions('Notifications')} />
            <ScrollView showsVerticalScrollIndicator={false} className='w-full h-full bg-white'>
                <View className='px-4'>
                    <Text className='text-xs font-semibold mt-4 uppercase'>Today</Text>
                    <General time="5m" hasContent name="Coco Ho" action="commented on" item="Morning in Cloud 9" content="Hey this is amazing! Let's go together next time. Lorem ipsum dolor site amet" />
                    <General time="15m" name="Tomas Zeman" action="liked" item="Morning in Cloud 9" url="/screens/social/post-detail" />
                    <General time="51m" name="John Florence" action="started following you" url="/screens/social/profile" />
                    <General time="1h" name="Tomas Zeman" hasContent action="invited you to" item="Trip to the north" content="25 Jul - 26 Jul, 2024" url="/screens/store/event-detail" />
                    <Text className='text-xs font-semibold mt-8 uppercase'>Today</Text>
                    <General isBooking time="1d" name="Coco Ho" hasContent action="booked a class" item="Advanced surf training" content="25 Jul, 2024 - 10:00am" />
                    <General isProduct time="1d" name="Coco Ho" hasContent action="wants to rent" item="Firewire Seaside 5'7" content="25 Jul, 2024 - 10:00am" />
                    <General time="1h" name="Tomas Zeman" hasContent isSpot action="surfed at" item="Cloud 9" content="Waves: 10, Conditions: 4.9" />
                    <General isProduct time="1d" name="Coco Ho" hasContent action="recieved your request for rent of" item="Firewire Seaside 5'7" content="25 Jul, 2024 - 10:00am" />
                </View>
            </ScrollView>

        </>
    )
}


const General = (props) => {
    const { img, item, name, url, action, content, isSpot, hasContent, time, isFollow, isBooking, isProduct } = props
    const router = useRouter();
    return (
        <Link href="/" asChild className='w-full'>
            <Pressable className='w-full flex-row items-center py-4 border-b border-slate-200'>
                {isProduct ?
                    <View className='w-12 h-12 relative mr-4'>
                        <View className='w-full h-full rounded-xl border border-slate-200 bg-slate-200' />
                        <View className='w-6 h-6 rounded-full absolute bottom-0 -right-2 border-2 border-white'>
                            <View className='w-5 h-5 rounded-full bg-slate-300' />
                        </View>
                    </View>
                    : isBooking ?
                        <View className='w-12 h-12 relative mr-4'>
                            <Image source={{ uri: 'https://barefootsurftravel.com/wp-content/uploads/2018/07/IMG_3776-1500x1050.jpg' }} className='w-full h-full rounded-xl border border-slate-200' />
                            <View className='w-6 h-6 rounded-full absolute bottom-0 -right-2 border-2 border-white'>
                                <View className='w-5 h-5 rounded-full bg-slate-300' />
                            </View>
                        </View>
                        : isSpot ?
                            <View className='w-12 h-12 rounded-full relative mr-4 bg-slate-100 items-center justify-center'>

                                <View className='w-6 h-6 rounded-full absolute bottom-0 -right-2 border-2 border-white'>
                                    <View className='w-5 h-5 rounded-full bg-slate-300' />
                                </View>
                            </View>
                            :
                            <View className='w-12 h-12 rounded-full mr-4 bg-slate-300' />

                }
                <View className='flex-1'>
                    <View className='flex-row flex-1 justify-between items-center'>
                        <Text className='flex-1'>
                            <Text className='font-bold'>{name}</Text> <Text>{action}</Text> <Text className='font-bold'>{item}</Text>
                        </Text>
                        <Text className='text-xs translate-y-px text-slate-500 ml-2'>
                            {time}
                        </Text>
                    </View>
                    {hasContent &&
                        <Text numberOfLines={2} ellipsizeMode='tail' className='mt-0 flex-1 text-slate-700 text-xs'>
                            {content}
                        </Text>
                    }

                    {isBooking &&
                        <></>
                    }
                </View>
            </Pressable>
        </Link>

    )
};




export default Notifications