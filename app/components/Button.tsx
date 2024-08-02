import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';

const Button = (props) => {
    const { title, icon, hasIcon, isSmall, isSecondary } = props
    return (

        <Pressable className={`flex-1 flex-row items-center justify-center rounded-lg ${isSmall ? ' px-2 py-3' : 'py-4 px-2'} ${isSecondary ? 'bg-slate-200 text-slate-800' : 'bg-neutral-900 '}`}>
            {hasIcon &&
                <View className='mr-4'>
                    <Feather name={icon} size={20} color={`${isSecondary ? '#ccc' : '#fff'}`} />
                </View>
            }
            <Text className={`${isSmall ? ' text-sm' : 'text-base'} ${isSecondary ? 'text-slate-800' : 'text-white'}`}>{title}</Text>
            
        </Pressable>

    )
}

export default Button