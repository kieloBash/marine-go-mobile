import { BackHeader } from "@/components/global/back-header";
import { Colors } from "@/constants/theme";
import { Stack } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PartnerLayout = () => {
    const colorScheme = useColorScheme();
    const backgroundColor = Colors[colorScheme ?? "light"].background;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor }}>
            <Stack
                screenOptions={{
                    headerShown: false, // default: hide headers for tabs
                }}
            >
                <Stack.Screen name="(tabs)" />

                <Stack.Screen
                    name="settings"
                    options={{
                        headerShown: true,
                        header: () => <BackHeader title="Settings" />,
                    }}
                />

                <Stack.Screen
                    name="notifications"
                    options={{
                        headerShown: true,
                        header: () => <BackHeader title="Notifications" />,
                    }}
                />
            </Stack>
        </SafeAreaView>
    );
};

export default PartnerLayout;
