import { InputField } from '@/components/global/input-field';
import { Button } from '@/components/ui/button';
import { Colors } from '@/constants/theme';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useRef } from 'react';
import { Text, View, TouchableOpacity, TextInput, Animated } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useGlobalSearchParams } from 'expo-router';

const VerificationScreen = () => {
    const params = useGlobalSearchParams();
    const email = params.email as string;

    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [focusedIndex, setFocusedIndex] = useState(0);
    const [resendTimer, setResendTimer] = useState(0);
    const inputRefs = useRef<Array<TextInput | null>>([]);
    const shakeAnimation = useRef(new Animated.Value(0)).current;

    const handleOtpChange = (text: string, index: number) => {
        // Only allow single digit
        if (text.length > 1) {
            text = text.slice(-1);
        }

        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Auto-focus next input
        if (text && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyPress = (e: any, index: number) => {
        if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerify = () => {
        const otpString = otp.join('');
        if (otpString.length === 6) {
            console.log("Verifying OTP:", otpString);
            // TODO: Call verification API
        } else {
            // Shake animation for invalid input
            Animated.sequence([
                Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
                Animated.timing(shakeAnimation, { toValue: -10, duration: 50, useNativeDriver: true }),
                Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
                Animated.timing(shakeAnimation, { toValue: 0, duration: 50, useNativeDriver: true }),
            ]).start();
        }
    };

    const handleResend = () => {
        if (resendTimer === 0) {
            console.log("Resend OTP");
            setResendTimer(60);
            // Start countdown
            const interval = setInterval(() => {
                setResendTimer((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
            // TODO: Call resend OTP API
        }
    };

    const isOtpComplete = otp.every(digit => digit !== '');

    return (
        <LinearGradient
            colors={[Colors.gradient.start, Colors.gradient.end]}
            className="flex-1"
        >
            <View className="items-center justify-between flex-1 px-6 py-12">
                {/* Header */}
                <View className="items-center gap-3 mt-16">
                    {/* Icon */}
                    <View className="items-center justify-center w-20 h-20 mb-4 bg-white/20 rounded-3xl backdrop-blur-lg">
                        <Feather name="mail" size={40} color="white" />
                    </View>

                    <Text className="text-3xl text-white font-raleway-bold">
                        Verify your Account
                    </Text>
                    <Text className="text-base text-center text-white/80 font-raleway max-w-[280px]">
                        Enter the 6-digit code we sent to{'\n'}
                        <Text className="text-white font-raleway-semibold">{email}</Text>
                    </Text>
                </View>

                {/* OTP Input Section */}
                <View className="items-center justify-center flex-1 w-full">
                    <Animated.View
                        className="flex-row justify-center gap-2 mb-8"
                        style={{ transform: [{ translateX: shakeAnimation }] }}
                    >
                        {otp.map((digit, index) => (
                            <View
                                key={index}
                                className={`w-14 h-16 rounded-2xl overflow-hidden ${focusedIndex === index
                                    ? 'bg-white'
                                    : 'bg-white/20'
                                    }`}
                                style={{
                                    borderWidth: focusedIndex === index ? 2 : 0,
                                    borderColor: 'white',
                                }}
                            >
                                <TextInput
                                    ref={(ref) => {
                                        inputRefs.current[index] = ref;
                                    }}
                                    className={`flex-1 text-2xl text-center font-raleway-bold ${focusedIndex === index ? 'text-primary' : 'text-white'
                                        }`}
                                    value={digit}
                                    onChangeText={(text) => handleOtpChange(text, index)}
                                    onKeyPress={(e) => handleKeyPress(e, index)}
                                    onFocus={() => setFocusedIndex(index)}
                                    keyboardType="number-pad"
                                    maxLength={1}
                                    selectTextOnFocus
                                />
                            </View>
                        ))}
                    </Animated.View>

                    {/* Verify Button */}
                    <View className="w-full max-w-md">
                        <Button
                            variant="default"
                            size="lg"
                            onPress={handleVerify}
                            className={`${isOtpComplete ? 'bg-white' : 'bg-white/40'
                                } rounded-2xl`}
                            disabled={!isOtpComplete}
                        >
                            <Text className={`text-base text-center font-raleway-bold ${isOtpComplete ? 'text-primary' : 'text-white/60'
                                }`}>
                                Verify Account
                            </Text>
                        </Button>
                    </View>
                </View>

                {/* Footer Section */}
                <View className="items-center gap-4 mb-8">
                    {/* Resend OTP */}
                    <View className="flex-row items-center gap-1">
                        <Text className="text-base text-white/80 font-raleway">
                            Didn't receive the code?
                        </Text>
                        <TouchableOpacity
                            onPress={handleResend}
                            disabled={resendTimer > 0}
                        >
                            <Text className={`text-base font-raleway-bold ${resendTimer > 0 ? 'text-white/40' : 'text-white'
                                }`}>
                                {resendTimer > 0 ? `Resend in ${resendTimer}s` : 'Resend'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Help Text */}
                    <TouchableOpacity>
                        <Text className="text-sm text-center text-white/60 font-raleway">
                            Having trouble? Contact support
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
};

export default VerificationScreen;