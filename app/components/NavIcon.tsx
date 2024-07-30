import { Pressable, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

import Feather from '@expo/vector-icons/Feather';

const NavIcon = (props) => {
    const { icon, url, hasBadge } = props
    return (
        <View className='w-[44px] h-[44px] ml-2'>
            <Link asChild href={url}>
                <Pressable className="w-full h-full rounded-lg items-center justify-center relative">
                    <Feather name={icon} size={25} color="#333" />
                    {hasBadge &&
                        <View className="h-3 w-3 bg-sky-500 rounded-full absolute top-2 right-1 z-20" />
                    }
                </Pressable>
            </Link>
        </View>
    )
}

export default NavIcon