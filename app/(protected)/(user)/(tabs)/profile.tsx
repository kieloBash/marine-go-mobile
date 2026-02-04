import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { logout, getUser } from "@/store/auth-store";

const UserProfileScreen = () => {
    const router = useRouter();
    const user = getUser();

    const handleLogout = async () => {
        await logout();
        // Navigate back to login screen (adjust the path as needed)
        router.replace("/");
    };

    return (
        <View className="flex-1 bg-muted">
            <View className="items-center justify-center flex-1 gap-4">
                <Text className="text-lg text-text font-raleway-bold">
                    {user?.name ?? "User"}
                </Text>
                <Text className="text-muted-foreground">
                    {user?.email ?? "user@example.com"}
                </Text>

                {/* Logout Button */}
                <TouchableOpacity
                    onPress={handleLogout}
                    className="px-6 py-3 mt-6 bg-destructive rounded-xl"
                >
                    <Text className="text-base text-white font-raleway-bold">
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default UserProfileScreen;
