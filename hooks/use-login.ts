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

            const message =
                error?.response?.data?.message ?? "Invalid email or password";

            if (message.toLowerCase().includes("email not verified")) {
                toast.info("Please verify your email first.");

                // Email used during login (better to capture it directly)
                const email =
                    error?.config?.data?.email ??
                    JSON.parse(error?.config?.data || "{}")?.email;

                if (!email) {
                    toast.error("Missing email for verification");
                    return;
                }

                router.push({
                    pathname: "/(auth)/verification/[email]",
                    params: { email },
                });

                return;
            }

            toast.error(message);
        }

    });
