import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useLogin } from '@/hooks/use-login'
import React, { useState } from 'react'
import { Text, View } from 'react-native'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { mutate, isPending, error } = useLogin();


    async function handleLogin() {
        // Implement login logic here

        if (!email || !password) {
            console.log("Email and password are required")
            return
        }

        mutate({ email, password })
    }

    return (
        <View>
            <Input placeholder='Enter your email address' value={email} onChangeText={setEmail} />
            <Input placeholder='Enter password' value={password} onChangeText={setPassword}
                // secureTextEntry
            />
            <Button onPress={handleLogin}>
                <Text>Login</Text>
            </Button >
        </View >
    )
}

export default LoginScreen