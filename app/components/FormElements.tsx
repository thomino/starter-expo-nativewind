import { View, Text, TextInput } from "react-native";
import Feather from '@expo/vector-icons/Feather';


const Input = (props) => {
    const { value, label, hasIcon, icon, placeholder } = props;
    return (
        <View className='w-full relative mt-4'>
            <Text className="text-sm absolute top-2 left-3 z-20">{label}</Text>
            <TextInput placeholder={placeholder} className='w-full bg-white h-[65px] pt-2 border border-neutral-400 rounded-xl px-3 text-base focus:border-neutral-800 focus:border-2' value={value} />
            {hasIcon &&
                <View className='absolute top-5 right-4'>
                    <Feather name={icon} size={25} color="#333" />
                </View>
            }
        </View>
    )

};


export { Input };