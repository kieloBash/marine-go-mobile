import { Colors } from "@/constants/theme";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { IconSymbol } from "./icon-symbol";

type BackHeaderProps = {
    title?: string;
    showBackButton?: boolean;
    onBackPress?: () => void;
    height?: number;
};

export const BackHeader: React.FC<BackHeaderProps> = ({
    title,
    showBackButton = true,
    onBackPress,
    height = 16,
}) => {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const tint = Colors[colorScheme ?? "light"].primary;

    return (
        <View className="flex-row items-center justify-start h-16 px-4 py-3 bg-white border-b border-input">
            <View className="flex-row items-center justify-start">
                {showBackButton ? (
                    <TouchableOpacity
                        onPress={onBackPress ?? (() => router.back())}
                        className="items-center justify-center w-10 h-10"
                    >
                        <IconSymbol icon={ArrowLeft} size={24} color={tint} />
                    </TouchableOpacity>
                ) : (
                    <View className="w-10 h-10" />
                )}
                <Text
                    className="text-lg text-center font-raleway-bold"
                    numberOfLines={1}
                    style={{ color: tint }}
                >
                    {title}
                </Text>
            </View>

        </View>
    );
};
