import { View, Text, TextInput } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { useColorScheme } from "nativewind";

const Input = (props) => {
    const { colorScheme } = useColorScheme();
    const { value, label, hasIcon, icon, placeholder } = props;
    return (
        <View className='w-full relative mt-4'>
            <Text className="text-sm absolute top-2 left-3 z-20 dark:text-white">{label}</Text>
            <TextInput placeholder={placeholder} className='w-full bg-white dark:bg-neutral-800 h-[65px] pt-2 border border-neutral-400 dark:border-neutral-600 rounded-xl px-3 text-base focus:border-neutral-800 dark:focus:border-neutral-400 focus:border-2 dark:text-white' placeholderTextColor={`${colorScheme === "dark" ? "rgba(255,255,255,0.4)" : "#333"}`} value={value} />
            {hasIcon &&
                <View className='absolute top-5 right-4'>
                    <Feather name={icon} size={25} color={`${colorScheme === "dark" ? "#fff" : "#333"}`} />
                </View>
            }
        </View>
    )

};


export { Input };