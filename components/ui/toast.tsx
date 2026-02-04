import { useToastStore } from "@/store/toast-store";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import { Animated, Text } from "react-native";

export default function Toast() {
    const { visible, message, type } = useToastStore();

    const opacity = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(-20)).current;

    useEffect(() => {
        if (visible) {
            // Animate IN
            Animated.parallel([
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 250,
                    useNativeDriver: true,
                }),
                Animated.spring(translateY, {
                    toValue: 0,
                    damping: 14,
                    stiffness: 120,
                    useNativeDriver: true,
                }),
            ]).start();
        } else {
            // Animate OUT
            Animated.parallel([
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true,
                }),
                Animated.timing(translateY, {
                    toValue: -20,
                    duration: 200,
                    useNativeDriver: true,
                }),
            ]).start();
        }
    }, [visible]);

    if (!visible) return null;

    return (
        <Animated.View
            className="absolute z-50 top-14 left-4 right-4"
            style={{
                opacity,
                transform: [{ translateY }],
            }}
        >
            <Animated.View
                className={clsx(
                    "rounded-2xl px-4 py-3 shadow-lg",
                    type === "success" && "bg-emerald-600",
                    type === "info" && "bg-sky-600",
                    type === "error" && "bg-red-600"
                )}
            >
                <Text className="text-sm font-medium text-white">
                    {message}
                </Text>
            </Animated.View>
        </Animated.View>
    );
}
