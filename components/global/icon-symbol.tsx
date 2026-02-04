import React from "react";
import { View } from "react-native";

type IconSymbolProps = {
    icon: React.ComponentType<any>;
    size?: number;
    color?: string;
    strokeWidth?: number;
};

export function IconSymbol({
    icon: IconComponent,
    size = 24,
    color = "#000",
    strokeWidth = 2,
}: IconSymbolProps) {
    return (
        <View>
            <IconComponent size={size} color={color} strokeWidth={strokeWidth} />
        </View>
    );
}
