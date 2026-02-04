import React from "react";
import { View, Text, TouchableOpacity, useColorScheme } from "react-native";
import { useRouter } from "expo-router";
import { IconSymbol } from "@/components/global/icon-symbol";
import { Colors } from "@/constants/theme";
import { Menu, Bell, User } from "lucide-react-native";

export const MainPartnerHeader: React.FC = () => {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const tint = Colors[colorScheme ?? "light"].primary;

    const iconProps = { size: 24, color: tint };

    return (
        <View className="flex-row items-center justify-between h-16 px-4 py-3 bg-white border-b border-input">
            <View className="flex-row items-center justify-start">
                <TouchableOpacity onPress={() => router.push("/(protected)/(partner)/settings")} className="p-2">
                    <IconSymbol icon={Menu} {...iconProps} />
                </TouchableOpacity>

                <Text className="text-lg font-raleway-bold" style={{ color: tint }}>
                    GoMarine Partner
                </Text>
            </View>

            <View className="flex-row items-center space-x-4">
                <TouchableOpacity onPress={() => router.push("/(protected)/(partner)/notifications")} className="p-2">
                    <IconSymbol icon={Bell} {...iconProps} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push("/(protected)/(partner)/(tabs)/profile")} className="p-2">
                    <IconSymbol icon={User} {...iconProps} />
                </TouchableOpacity>
            </View>
        </View>
    );
};
