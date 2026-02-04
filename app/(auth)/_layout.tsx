import { Colors } from '@/constants/theme';
import { Stack } from 'expo-router'
import React from 'react'
import { useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

const AuthLayout = () => {
    const colorScheme = useColorScheme();
    const backgroundColor = Colors[colorScheme ?? "light"].background;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor }}>
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="register" />
                {/* <Stack.Screen name="verification" /> */}
            </Stack>
        </SafeAreaView>
    )
}

export default AuthLayout 