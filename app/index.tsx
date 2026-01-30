import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { useHealth } from '@/hooks/use-health';
import { Stack } from 'expo-router';
import { MoonStarIcon, SunIcon } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { Image, type ImageStyle, View } from 'react-native';

const LOGO = {
  light: require('@/assets/images/react-native-reusables-light.png'),
  dark: require('@/assets/images/react-native-reusables-dark.png'),
};

const SCREEN_OPTIONS = {
  title: 'React Native Reusables',
  headerTransparent: true,
  headerRight: () => <ThemeToggle />,
};

const IMAGE_STYLE: ImageStyle = {
  height: 76,
  width: 76,
};

export default function Screen() {
  const { colorScheme } = useColorScheme();
  const { data } = useHealth();
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <View className="items-center justify-center flex-1 gap-8 p-4">
        <Image source={LOGO[colorScheme ?? 'light']} style={IMAGE_STYLE} resizeMode="contain" />
        <View className="gap-2 p-4">
          <Text className="font-mono text-sm ios:text-foreground text-muted-foreground">
            1. Edit <Text variant="code">app/index.tsx</Text> to get started.
          </Text>
          <Text className="font-mono text-sm ios:text-foreground text-muted-foreground">
            2. Save to see your changes instantly.
          </Text>
        </View>
        <View className="flex-row gap-2">
          <Text>{data?.payload}</Text>
        </View>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <Text>Card Content</Text>
          </CardContent>
          <CardFooter>
            <Text>Card Footer</Text>
          </CardFooter>
        </Card>
      </View>
    </>
  );
}

const THEME_ICONS = {
  light: SunIcon,
  dark: MoonStarIcon,
};

function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

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
