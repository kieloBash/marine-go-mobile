import { IconSymbol } from "@/components/global/icon-symbol";
import { MainUserHeader } from "@/components/user/main-user-header";
import { Colors } from "@/constants/theme";
import { Tabs } from "expo-router";
import { CalendarIcon, CompassIcon, HomeIcon, TrophyIcon, UserIcon } from "lucide-react-native";
import React from "react";
import { useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const tabs = [
    { name: "home", title: "Home", icon: HomeIcon, header: MainUserHeader },
    { name: "discover", title: "Discover", icon: CompassIcon, header: MainUserHeader },
    { name: "leaderboard", title: "LeaderBoard", icon: TrophyIcon, header: MainUserHeader },
    { name: "activity", title: "Activity", icon: CalendarIcon, header: MainUserHeader },
    { name: "profile", title: "Profile", icon: UserIcon, header: MainUserHeader },
];

const UserTabsLayout = () => {
    const colorScheme = useColorScheme();
    const activeColor = Colors[colorScheme ?? "light"].primary;
    const inactiveColor = Colors[colorScheme ?? "light"].muted;
    const backgroundColor = Colors[colorScheme ?? "light"].background;

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

export default UserTabsLayout;
