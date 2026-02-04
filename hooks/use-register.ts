// src/hooks/useRegister.ts
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { register, RegisterPayload } from "@/api/auth";
import { toast } from "@/lib/toast";

export const useRegister = () =>
    useMutation({
        mutationFn: (payload: RegisterPayload) => register(payload),

        onMutate: () => {
            toast.info("Creating your account...");
        },

        onSuccess: () => {
            toast.dismiss();
            toast.success("Account created successfully 🎉");
            router.replace("/(auth)/verification");
        },

        onError: (error: any) => {
            toast.dismiss();

            // 🔑 Normalize backend error response
            const message =
                error?.response?.data?.message || // <-- your current server format
                error?.response?.data?.errors?.[0] || // fallback (if added later)
                error?.message ||
                "Registration failed. Please try again.";

            toast.error(message);
        },
    });
