import { Tabs } from "expo-router"
import { Text, View, Pressable } from "react-native";
import { Link } from "expo-router";
import NavIcon from "../components/NavIcon";
import Feather from '@expo/vector-icons/Feather';

export default () => {
    const getHeaderOptions = (title: string) => ({
        ...DifferentHeader({ title })
    });
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#0EA5E9', tabBarHideOnKeyboard:true, headerTitle: ' ', tabBarShowLabel: false, tabBarStyle: {height:70, alignItems: "center", display: "flex"} }}>
            <Tabs.Screen name="home" options={{ ...MainHeader(), tabBarIcon: ({ focused }) => (<Feather name="home" size={25} color={focused ? '#333' : '#bbb'} />) }} />
            <Tabs.Screen name="search" options={{ ...getHeaderOptions('Search'), tabBarIcon: ({ focused }) => (<Feather name="search" size={25} color={focused ? '#333' : '#bbb'} />) }} />
            <Tabs.Screen name="profile" options={{ ...getHeaderOptions('Profile'), tabBarIcon: ({ focused }) => (<Feather name="user" size={25} color={focused ? '#333' : '#bbb'} />) }} />
        </Tabs>
    )
}


const MainHeader = () => ({
    headerShadowVisible: false,
    headerLeft: () => (
        <Text className="font-bold text-xl ml-4">
            App name
        </Text>

    ),
    headerRight: () => (
        <View className="flex flex-row mr-4 items-center">
            <NavIcon icon="plus-circle" url="/screens/page-one" />
            <NavIcon icon="bell" hasBadge url="/screens/page-two" />
        </View>
    )
});


const DifferentHeader = (props) => {
    const { title } = props
    return {
        headerShadowVisible: false,
        headerLeft: () => (
            <Text className="font-bold text-xl ml-4">
                {title}
            </Text>

        ),
        headerRight: () => (
            <View className="flex flex-row mr-4 items-center">
                <NavIcon icon="heart" url="/screens/page-one" />
                <NavIcon icon="settings" url="/screens/page-two" />
            </View>
        ),
    
}
}