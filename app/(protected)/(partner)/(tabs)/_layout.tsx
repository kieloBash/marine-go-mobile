import { IconSymbol } from "@/components/global/icon-symbol";
import { MainPartnerHeader } from "@/components/partner/main-partner-header";
import { Colors } from "@/constants/theme";
import { Tabs } from "expo-router";
import { CalendarIcon, HomeIcon, UserIcon } from "lucide-react-native";
import React from "react";
import { useColorScheme } from "react-native";

const tabs = [
    { name: "home", title: "Home", icon: HomeIcon, header: MainPartnerHeader },
    { name: "activity", title: "Activity", icon: CalendarIcon, header: MainPartnerHeader },
    { name: "profile", title: "Profile", icon: UserIcon, header: MainPartnerHeader },
];

const PartnerTabsLayout = () => {
    const colorScheme = useColorScheme();
    const activeColor = Colors[colorScheme ?? "light"].primary;
    const inactiveColor = Colors[colorScheme ?? "light"].muted;

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: activeColor,
                tabBarInactiveTintColor: inactiveColor,
                headerShown: true, // we already show our custom header
                // tabBarStyle: { backgroundColor }, // match background
            }}
        >
            {tabs.map((tab) => (
                <Tabs.Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        title: tab.title,
                        tabBarIcon: ({ color, size }) => (
                            <IconSymbol icon={tab.icon} size={size} color={color} />
                        ),
                        header: () => <tab.header />
                    }}
                />
            ))}
        </Tabs>
    );
};

export default PartnerTabsLayout;
