import { create } from "zustand";
import * as SecureStore from "expo-secure-store";

type AuthState = {
    user: any | null;
    token: string | null;

    setUser: (user: any) => void;
    setToken: (token: string) => void;
    logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
    token: null,
    user: null,

    setUser: (user) => set({ user }),

    setToken: async (token) => {
        await SecureStore.setItemAsync("access_token", token);
        set({ token });
    },

    logout: async () => {
        await SecureStore.deleteItemAsync("access_token");
        set({ token: null });
    },
}));

export const saveToken = (token: string) =>
    useAuthStore.getState().setToken(token);

export const getToken = () => useAuthStore.getState().token;

export const logout = () => useAuthStore.getState().logout();

export const getUser = () => useAuthStore.getState().user;

export const saveUser = (user: any) => useAuthStore.getState().setUser(user);