import PasswordInput from '@/components/global/password-input';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/ui/text';
import { useHealth } from '@/hooks/use-health';
import { useLogin } from '@/hooks/use-login';
import { getToken, getUser } from '@/store/auth-store';
import { LinearGradient } from "expo-linear-gradient";
import { router } from 'expo-router';
import { FishIcon, LockIcon, MailIcon, MapPinIcon, MedalIcon, TrendingUpIcon, UsersIcon } from 'lucide-react-native';
import * as React from 'react';
import { Animated, Dimensions, Modal, TextInput, TouchableOpacity, View } from 'react-native';

const { height } = Dimensions.get("window");

const LoginModal = (props: { anim: Animated.Value, isOpen: boolean, closeLogin: () => void }) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const { mutate, isPending, error } = useLogin();

  async function handleLogin() {
    if (!email || !password) {
      console.log("Email and password are required")
      return
    }

    mutate({ email, password })
  }

  return (
    <Modal transparent visible={props.isOpen} animationType="none">
      <TouchableOpacity style={{
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
      }} onPress={props.closeLogin} />

      <Animated.View
        style={[
          { transform: [{ translateY: props.anim }] },
        ]}
        className={"px-6 py-6 rounded-t-2xl absolute bottom-0 w-full h-[65%] bg-card"}
      >
        <View className='items-center justify-center gap-1 mb-8'>
          <Text className='text-2xl font-raleway-semibold text-text'>Welcome Back!</Text>
          <Text className='text-sm text-muted-foreground font-raleway'>Sign in to continue your journey</Text>
        </View>
        <View className='gap-2 mb-4'>
          <Label htmlFor="email" nativeID='email'>Email Address</Label>
          <View className='flex-row items-center justify-start gap-2 px-3 py-1 leading-5 border rounded-xl border-input bg-input/30 text-text'>
            <Icon as={MailIcon} className='text-muted-foreground size-4' />
            <TextInput id='email' className='w-full font-raleway' placeholder='your.email@example.com' value={email} onChangeText={setEmail}
            />
          </View>
        </View>
        <View className='gap-2 mb-4'>
          <Label htmlFor="password" nativeID='password'>Password</Label>
          <View className='flex-row items-center justify-start gap-2 px-3 py-1 leading-5 border rounded-xl border-input bg-input/30 text-text'>
            <Icon as={LockIcon} className='text-muted-foreground size-4' />
            <PasswordInput
              value={password}
              onChange={setPassword}
              placeholder='Enter your password'
              className='flex-1 font-raleway'
            />
          </View>
        </View>
        <View className='items-end mb-4'>
          <Button variant={"link"} className='text-sm text-primary font-raleway-semibold'>
            <Text>Forgot Password?</Text>
          </Button>
        </View>
        <Button
          variant={"default"}
          size={"lg"}
          className='w-full'
          onPress={handleLogin}>
          <Text>Sign In</Text>
        </Button >

        <Separator className='h-[1.5px] my-8' />

        <View className='flex-row items-center justify-center gap-1'>
          <Text className='text-sm text-muted-foreground font-raleway'>Don't have an account?</Text>
          <Button onPress={() => {
            router.push("/(auth)/register")
          }} variant={"link"} size={"sm"} className='p-0 w-fit'><Text>Sign up</Text></Button>
        </View>
      </Animated.View>
    </Modal>
  );
}

export default function Screen() {
  const { data } = useHealth();
  const user = getUser();
  const token = getToken();

  const [isLoginVisible, setLoginVisible] = React.useState<boolean>(false);
  const slideAnim = React.useRef(new Animated.Value(height)).current;

  const openLogin = () => {
    setLoginVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeLogin = () => {
    Animated.timing(slideAnim, {
      toValue: height,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setLoginVisible(false));
  };

  return (
    <>
      <LinearGradient
        colors={["#00A3AD", "#006D75"]}
        className="flex-1"
      >
        <LoginModal anim={slideAnim} isOpen={isLoginVisible} closeLogin={closeLogin} />
        <View className="items-center justify-center flex-1 gap-8 p-4">
          <View className='items-center justify-center gap-2'>
            <View
              className='p-6 mb-4 border-4 rounded-full shadow-lg border-white/40 bg-primary/60 elevation-lg'
            >
              <Icon
                as={FishIcon}
                className='text-white size-16'
              />
            </View>

            <Text className='text-4xl text-foreground font-raleway-bold'>Go Marine</Text>
            <Text className='text-center font-raleway'>Join the movement to protect our oceans and {"\n"} marine life</Text>
          </View>

          <View className="flex-row flex-wrap">
            <View className="w-1/2 p-1.5">
              <View className="items-start justify-start p-2.5 border border-white/30 rounded-xl bg-primary/40">
                <View className='p-1.5 rounded-xl bg-primary mb-2'>
                  <Icon as={MapPinIcon} className='size-6' />
                </View>
                <Text className='text-sm font-raleway-semibold'>Discover Events</Text>
                <Text className='text-xs font-raleway'>Near your location</Text>
              </View>
            </View>

            <View className="w-1/2 p-1.5">
              <View className="items-start justify-start p-2.5 border border-white/30 rounded-xl bg-primary/40">
                <View className='p-1.5 rounded-xl bg-primary mb-2'>
                  <Icon as={UsersIcon} className='size-6' />
                </View>
                <Text className='text-sm font-raleway-semibold'>Join Partners</Text>
                <Text className='text-xs font-raleway'>Collaborate together</Text>
              </View>
            </View>

            <View className="w-1/2 p-1.5">
              <View className="items-start justify-start p-2.5 border border-white/30 rounded-xl bg-primary/40">
                <View className='p-1.5 rounded-xl bg-primary mb-2'>
                  <Icon as={MedalIcon} className='size-6' />
                </View>
                <Text className='text-sm font-raleway-semibold'>Earn Rewards</Text>
                <Text className='text-xs font-raleway'>Points & Badges</Text>
              </View>
            </View>

            <View className="w-1/2 p-1.5">
              <View className="items-start justify-start p-2.5 border border-white/30 rounded-xl bg-primary/40">
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
              <Text className='text-primary font-raleway-bold'>Create Account</Text>
            </Button>
            <Button
              size={"lg"}
              className='border border-white'
              variant={"ghost"}
              onPress={() => {
                openLogin();
              }}
            >
              <Text className='font-raleway-bold'>Login</Text>
            </Button>
          </View>

          <Text className='text-xs text-center font-raleway'>
            By continuing, you agree to our <Text className='text-xs underline'>Terms of Service</Text> and <Text className='text-xs underline'>Privacy Policy</Text>.
          </Text>

        </View>
      </LinearGradient >
    </>
  );
}
