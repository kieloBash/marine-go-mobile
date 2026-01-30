import { login } from "@/api/auth";
import { saveToken, saveUser } from "@/store/auth-store";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";

export const useLogin = () =>
    useMutation({
        mutationFn: ({ email, password }: { email: string; password: string }) =>
            login(email, password),

        onSuccess: (data) => {
            saveUser(data.payload.user);
            saveToken(data.payload.access_token);
            router.replace("/(protected)/dashboard");
        },
    });
