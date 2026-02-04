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

            toast.success("Welcome back 👋");
            router.replace("/(protected)/dashboard");
        },

        onError: (error: any) => {
            toast.dismiss();

            toast.error(
                error?.response?.data?.message ??
                "Invalid email or password"
            );
        },
    });
