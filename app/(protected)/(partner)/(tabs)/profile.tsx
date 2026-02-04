import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { logout, getUser } from "@/store/auth-store";

const PartnerProfileScreen = () => {
    const router = useRouter();
    const user = getUser(); // can be used to show partner info

    const handleLogout = async () => {
        await logout();
        router.replace("/"); // redirect to login
    };

    return (
        <View className="flex-1 bg-muted">
            <View className="items-center justify-center flex-1 gap-4">
                <Text className="text-lg text-text font-raleway-bold">
                    {user?.name ?? "Partner"}
                </Text>
                <Text className="text-muted-foreground">
                    {user?.email ?? "partner@example.com"}
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

export default PartnerProfileScreen;
