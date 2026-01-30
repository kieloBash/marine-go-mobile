import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { useHealth } from '@/hooks/use-health';
import { getToken, getUser } from '@/store/auth-store';
import { LinearGradient } from "expo-linear-gradient";
import { router } from 'expo-router';
import { FishIcon, MapPinIcon, MedalIcon, TrendingUpIcon, UsersIcon } from 'lucide-react-native';
import * as React from 'react';
import { View } from 'react-native';


export default function Screen() {
  const { data } = useHealth();
  const user = getUser();
  const token = getToken();

  return (
    <>
      <LinearGradient
        colors={["#00A3AD", "#006D75"]}
        className="flex-1"
      >
        <View className="items-center justify-center flex-1 gap-8 p-4">
          <View className='items-center justify-center gap-2'>
            <View
              className='p-6 mb-4 border-4 rounded-full shadow-lg border-white/40 bg-primary/60 elevation-lg'
            >
              <Icon
                as={FishIcon}
                className='size-16'
              />
            </View>

            <Text className='text-4xl font-raleway-bold'>Go Marine</Text>
            <Text className='text-center font-raleway'>Join the movement to protect our oceans and {"\n"} marine life</Text>
          </View>

          <View className="flex-row flex-wrap">
            <View className="w-1/2 p-1.5">
              <View className="items-start justify-start p-2.5 border border-white/30 rounded-lg bg-primary/40">
                <View className='p-1.5 rounded-xl bg-primary mb-2'>
                  <Icon as={MapPinIcon} className='size-6' />
                </View>
                <Text className='text-sm font-raleway-semibold'>Discover Events</Text>
                <Text className='text-xs font-raleway'>Near your location</Text>
              </View>
            </View>

            <View className="w-1/2 p-1.5">
              <View className="items-start justify-start p-2.5 border border-white/30 rounded-lg bg-primary/40">
                <View className='p-1.5 rounded-xl bg-primary mb-2'>
                  <Icon as={UsersIcon} className='size-6' />
                </View>
                <Text className='text-sm font-raleway-semibold'>Join Partners</Text>
                <Text className='text-xs font-raleway'>Collaborate together</Text>
              </View>
            </View>

            <View className="w-1/2 p-1.5">
              <View className="items-start justify-start p-2.5 border border-white/30 rounded-lg bg-primary/40">
                <View className='p-1.5 rounded-xl bg-primary mb-2'>
                  <Icon as={MedalIcon} className='size-6' />
                </View>
                <Text className='text-sm font-raleway-semibold'>Earn Rewards</Text>
                <Text className='text-xs font-raleway'>Points & Badges</Text>
              </View>
            </View>

            <View className="w-1/2 p-1.5">
              <View className="items-start justify-start p-2.5 border border-white/30 rounded-lg bg-primary/40">
                <View className='p-1.5 rounded-xl bg-primary mb-2'>
                  <Icon as={TrendingUpIcon} className='size-6' />
                </View>
                <Text className='text-sm font-raleway-semibold'>Make Impact</Text>
                <Text className='text-xs font-raleway'>Track your progress</Text>
              </View>
            </View>
          </View>

          <View className='w-full gap-2'>
            <Button
              className='bg-white'
              size={"lg"}
              onPress={() => {
                router.push("/(auth)/register")
              }}
            >
              <Text className='text-background font-raleway'>Create Account</Text>
            </Button>
            <Button
              size={"lg"}
              className='bg-transparent'
              variant={"outline"}
              onPress={() => {
                router.push("/(auth)/login")
              }}
            >
              <Text className='font-raleway'>Login</Text>
            </Button>
          </View>

          <Text className='text-xs text-center font-raleway'>
            By continuing, you agree to our <Text className='text-xs underline'>Terms of Service</Text> and <Text className='text-xs underline'>Privacy Policy</Text>.
          </Text>

        </View>
      </LinearGradient>
    </>
  );
}
