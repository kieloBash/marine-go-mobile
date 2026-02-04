import { InputField } from '@/components/global/input-field'
import PasswordInput from '@/components/global/password-input'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import KeyboardView from '@/components/ui/keyboard-view'
import { Label } from '@/components/ui/label'
import { useRegister } from '@/hooks/use-register'
import { toast } from '@/lib/toast'
import { router, Stack } from 'expo-router'
import { LockIcon, MailIcon, MapPinIcon, UserIcon } from 'lucide-react-native'
import React, { useState } from 'react'
import { Text, View } from 'react-native'

const Form = () => {
    const [fullName, setFullName] = useState("Kielo Bash Mercado");
    const [email, setEmail] = useState("kielo_bash_mercado@dlsu.edu.ph");
    const [location, setLocation] = useState("Makati City");
    const [password, setPassword] = useState("User1234!");
    const [confirmPassword, setConfirmPassword] = useState("User1234!");

    const { mutate, isPending } = useRegister();

    function handleSubmit() {
        // --- Client-side validation ---
        if (!fullName || !email || !location || !password || !confirmPassword) {
            toast.error("Please fill in all required fields");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        mutate({
            email,
            name: fullName,
            city: location,
            confirmPassword,
            password,
        });
    }

    return (
        <View className="flex-1 px-4">
            <InputField
                id="fullName"
                label="Full Name*"
                placeholder="Juan Dela Cruz"
                icon={UserIcon}
                value={fullName}
                onChangeText={setFullName}
            />

            <InputField
                id="email"
                label="Email Address*"
                placeholder="your.email@example.com"
                icon={MailIcon}
                value={email}
                onChangeText={setEmail}
            // autoCapitalize="none"
            />

            <InputField
                id="location"
                label="City*"
                placeholder="Quezon City"
                icon={MapPinIcon}
                value={location}
                onChangeText={setLocation}
            />

            <View className="gap-2 mb-4">
                <Label>Password*</Label>
                <View className="flex-row items-center gap-2 px-3 py-1 border rounded-xl border-input bg-input/30">
                    <Icon as={LockIcon} className="text-muted-foreground size-4" />
                    <PasswordInput
                        value={password}
                        onChange={setPassword}
                        placeholder="Enter your password"
                        className="flex-1 text-black font-raleway placeholder:text-muted-foreground"
                    />
                </View>
            </View>

            <View className="gap-2 mb-6">
                <Label>Confirm Password*</Label>
                <View className="flex-row items-center gap-2 px-3 py-1 border rounded-xl border-input bg-input/30">
                    <Icon as={LockIcon} className="text-muted-foreground size-4" />
                    <PasswordInput
                        value={confirmPassword}
                        onChange={setConfirmPassword}
                        placeholder="Confirm your password"
                        className="flex-1 text-black font-raleway placeholder:text-muted-foreground"
                    />
                </View>
            </View>

            <Button
                variant="default"
                size="lg"
                disabled={isPending}
                onPress={handleSubmit}
                className={isPending ? "opacity-60" : ""}
            >
                <Text className="text-white font-raleway-bold">
                    {isPending ? "Creating account..." : "Create Account"}
                </Text>
            </Button>

            <View className="flex-row items-center justify-center gap-1 mt-4">
                <Text className="text-sm text-muted-foreground font-raleway">
                    Already have an account?
                </Text>
                <Button
                    onPress={() => router.replace("/")}
                    variant="link"
                    size="sm"
                    className="p-0"
                >
                    <Text className="text-primary font-raleway-bold">
                        Log In
                    </Text>
                </Button>
            </View>
        </View>
    );
};


export default function RegisterScreen() {
    return (
        <>
            <Stack.Screen options={{ headerTitle: "" }}
            />
            <View className="items-center justify-start flex-1 gap-8 px-4 py-8 bg-muted">
                <View className='items-center justify-center gap-1'>
                    <Text className='text-3xl text-primary font-raleway-bold'>Create Account</Text>
                    <Text className='text-center font-raleway text-muted-foreground'>Join thousands of marine conservation volunteers</Text>
                </View>

                <KeyboardView>
                    <Form />
                </KeyboardView>
            </View>
        </>
    )
}