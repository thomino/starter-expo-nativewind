import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';
import { useColorScheme } from "nativewind";

const Button = (props) => {
    const { colorScheme } = useColorScheme();
    const { title, icon, hasIcon, isSmall, isSecondary } = props
    return (

        <Pressable className={`flex-1 flex-row items-center justify-center rounded-lg ${isSmall ? ' px-2 py-3' : 'py-4 px-2'} ${isSecondary ? 'bg-slate-200 dark:bg-neutral-800' : 'bg-neutral-900 dark:bg-white '}`}>
            {hasIcon &&
                <View className='mr-4'>
                    <Feather name={icon} size={20} color={isSecondary ? (colorScheme === 'dark' ? '#ccc' : '#aaa') : (colorScheme === 'dark' ? '#000' : '#fff')}/>
                </View>
            }
            <Text className={`${isSmall ? ' text-sm' : 'text-base'} ${isSecondary ? 'text-slate-800 dark:text-white' : 'text-white dark:text-neutral-900'}`}>{title}</Text>
            
        </Pressable>

    )
}

export default Button