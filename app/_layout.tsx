import '@/global.css';
import { queryClient } from '@/lib/react-query';

import { NAV_THEME } from '@/lib/theme';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { SafeAreaProvider } from "react-native-safe-area-context";

import Toast from '@/components/ui/toast';
import { useFonts } from "expo-font";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

export default function RootLayout() {
  const { colorScheme } = useColorScheme();

  const [loaded] = useFonts({
    Raleway: require("../assets/fonts/Raleway-Regular.ttf"),
    RalewayMedium: require("../assets/fonts/Raleway-Medium.ttf"),
    RalewaySemiBold: require("../assets/fonts/Raleway-SemiBold.ttf"),
    RalewayBold: require("../assets/fonts/Raleway-Bold.ttf"),
  });

  if (!loaded) return null;

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider value={NAV_THEME['light']}>
          <StatusBar style={'light'} />
          <Stack
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name='index' options={{ headerShown: false }} />
          </Stack>
          <Toast />
          <PortalHost />
        </ThemeProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
