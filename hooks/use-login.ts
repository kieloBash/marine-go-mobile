import { login } from "@/api/auth";
import { saveToken, saveUser } from "@/store/auth-store";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { toast } from "@/lib/toast";

export const useLogin = () =>
    useMutation({
        mutationFn: ({ email, password }: { email: string; password: string }) =>
            login(email, password),

        onMutate: () => {
            toast.info("Signing you in...");
        },

        onSuccess: (data) => {
            toast.dismiss(); // auto-dismiss info toast

            saveUser(data.payload.user);
            saveToken(data.payload.access_token);

            if (!data.payload.user.isOnboarded) {
                toast.success("Please add your information!")
                router.replace("/(protected)/onboarding")
            } else {
                if (data.payload.user.role.name === "USER") {
                    toast.success("Welcome back USER 👋");
                    router.replace("/(protected)/(user)/(tabs)/home");
                } else {
                    toast.success("Welcome back PARTNER 👋");
                    router.replace("/(protected)/(partner)/(tabs)/home");
                }
            }
        },

        onError: (error: any) => {
            toast.dismiss();

            toast.error(
                error?.response?.data?.message ??
                "Invalid email or password"
            );
        },
    });
