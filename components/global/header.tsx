import { Stack } from 'expo-router';
import { MoonStarIcon, SunIcon } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { Button } from '../ui/button';
import { Icon } from '../ui/icon';

function ThemeToggle() {
    const { colorScheme, toggleColorScheme } = useColorScheme();
    const THEME_ICONS = {
        light: SunIcon,
        dark: MoonStarIcon,
    };
    return (
        <Button
            onPressIn={toggleColorScheme}
            size="icon"
            variant="ghost"
            className="rounded-full ios:size-9 web:mx-4">
            <Icon as={THEME_ICONS[colorScheme ?? 'light']} className="size-5" />
        </Button>
    );
}

interface IProps {
    title?: string;
}
const Header = ({ title }: IProps) => {
    const SCREEN_OPTIONS = {
        title: title || 'MarineGo',
        headerTransparent: true,
        headerRight: () => <ThemeToggle />,
    };

    return (
        <Stack.Screen options={SCREEN_OPTIONS} />
    )
}

export default Header