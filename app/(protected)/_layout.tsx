import { Stack } from "expo-router";
import React from "react";

const ProtectedLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: false, // hide all headers in this stack
            }}
        >
            {/* Group screens */}
            <Stack.Screen name="(user)" />
            <Stack.Screen name="(partner)" />
        </Stack>
    );
};

export default ProtectedLayout;
