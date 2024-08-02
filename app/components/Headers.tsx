import { useRouter } from "expo-router";
import { View, Pressable, Text } from "react-native";
import Feather from '@expo/vector-icons/Feather';

import { useColorScheme } from "nativewind";

const BackHeader = (props) => {
    const { colorScheme } = useColorScheme();
    const { title, children } = props
    const router = useRouter();
    return {
        headerShadowVisible: false,
        headerLeft: () => (
            <View className="flex flex-row items-center relative">
                <Pressable className="flex flex-row items-center justify-center z-20" onPress={() => router.back()}>
                    <Feather name="arrow-left" size={25} color={`${colorScheme === "dark" ? "#fff" : "#333"}`} />
                </Pressable>
                <Text className="font-bold text-xl ml-4 dark:text-white">
                    {title}
                </Text>
            </View>
        ),
        headerRight: () => (
            <View className="flex flex-row items-center">
                {children}{/*<Pressable className="bg-sky-500 px-3 py-2 rounded-lg"><Text className="text-sm text-white">Publish</Text></Pressable>*/}
            </View>
        ),
        headerTitle: ' '
    };
};

export {BackHeader}