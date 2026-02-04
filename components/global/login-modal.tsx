import PasswordInput from '@/components/global/password-input';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import KeyboardView from '@/components/ui/keyboard-view';
import { Label } from '@/components/ui/label';
import { Text } from '@/components/ui/text';
import { useLogin } from '@/hooks/use-login';
import { toast } from '@/lib/toast';
import { LockIcon, MailIcon } from 'lucide-react-native';
import React from 'react';
import { ActivityIndicator, Animated, Modal, TextInput, TouchableWithoutFeedback, View } from 'react-native';

const LoginModal = (props: { anim: Animated.Value, isOpen: boolean, closeLogin: () => void }) => {
    const [email, setEmail] = React.useState('kielo_bash_mercado@dlsu.edu.ph');
    const [password, setPassword] = React.useState('User1234!');
    const { mutate, isPending } = useLogin();

    async function handleLogin() {
        if (!email || !password) {
            toast.error("Email and password are required");
            return;
        }
        mutate({ email, password });
    }

    if (!props.isOpen) return null;

    return (
        <Modal transparent visible={props.isOpen} animationType="none">
            {/* Dark background overlay */}
            <TouchableWithoutFeedback onPress={props.closeLogin}>
                <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.4)" }} />
            </TouchableWithoutFeedback>

            {/* Sliding modal content */}
            <Animated.View
                style={[
                    { transform: [{ translateY: props.anim }], height: '60%' },
                ]}
                className="absolute bottom-0 w-full px-6 py-8 bg-card rounded-t-2xl"
            >
                <KeyboardView>
                    <View className="flex-1">
                        {/* Header */}
                        <View className='items-center justify-center gap-1 mb-6'>
                            <Text className='text-2xl font-raleway-semibold text-text'>Welcome Back!</Text>
                            <Text className='text-sm text-muted-foreground font-raleway'>
                                Sign in to continue your journey
                            </Text>
                        </View>

                        {/* Inputs */}
                        <View className='gap-4'>
                            {/* Email */}
                            <View className='gap-2'>
                                <Label htmlFor="email" nativeID="email">Email Address</Label>
                                <View className='flex-row items-center gap-2 px-3 py-1 border rounded-xl border-input bg-input/30'>
                                    <Icon as={MailIcon} className='text-muted-foreground size-4' />
                                    <TextInput
                                        id='email'
                                        className='w-full font-raleway text-text'
                                        placeholder='your.email@example.com'
                                        value={email}
                                        onChangeText={setEmail}
                                    />
                                </View>
                            </View>

                            {/* Password */}
                            <View className='gap-2'>
                                <Label htmlFor="password" nativeID="password">Password</Label>
                                <View className='flex-row items-center gap-2 px-3 py-1 border rounded-xl border-input bg-input/30'>
                                    <Icon as={LockIcon} className='text-muted-foreground size-4' />
                                    <PasswordInput
                                        value={password}
                                        onChange={setPassword}
                                        placeholder='Enter your password'
                                        className="flex-1 text-black font-raleway placeholder:text-muted-foreground"
                                    />
                                </View>
                            </View>
                        </View>

                        {/* Forgot Password */}
                        <View className='items-end mt-2 mb-4'>
                            <Button variant="link" className='text-sm text-primary font-raleway-semibold'>
                                <Text>Forgot Password?</Text>
                            </Button>
                        </View>

                        {/* Login Button */}
                        <Button
                            variant="default"
                            size="lg"
                            className='w-full'
                            disabled={isPending}
                            onPress={handleLogin}
                        >
                            {isPending ? (
                                <ActivityIndicator color="white" />
                            ) : (
                                <Text className="font-semibold text-white">Login</Text>
                            )}
                        </Button>

                        {/* Sign up link */}
                        <View className='flex-row items-center justify-center gap-1 mt-6'>
                            <Text className='text-sm text-muted-foreground font-raleway'>Don't have an account?</Text>
                            <Button
                                onPress={() => props.closeLogin()}
                                variant="link"
                                size="sm"
                                className='p-0 w-fit'
                            >
                                <Text>Sign up</Text>
                            </Button>
                        </View>
                    </View>
                </KeyboardView>
            </Animated.View>
        </Modal>
    );
};

export default LoginModal;
