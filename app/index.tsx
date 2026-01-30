import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { useHealth } from '@/hooks/use-health';
import { getToken, getUser } from '@/store/auth-store';
import { router, Stack } from 'expo-router';
import { MoonStarIcon, SunIcon } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { type ImageStyle, View } from 'react-native';

const LOGO = {
  light: require('@/assets/images/react-native-reusables-light.png'),
  dark: require('@/assets/images/react-native-reusables-dark.png'),
};

const SCREEN_OPTIONS = {
  title: 'MarineGo',
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
  const user = getUser();
  const token = getToken();

  console.log("INDEX: ", user, token)
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <View className="items-center justify-center flex-1 gap-8 p-4">
        <Button
          onPress={() => {
            router.push("/(auth)/login")
          }}
        >
          <Text>Login</Text>
        </Button>
        <Button
          onPress={() => {
            router.push("/(auth)/register")
          }}
        >
          <Text>Register</Text>
        </Button>
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
