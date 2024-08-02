import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
const StackLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </>
    )
}

export default StackLayout