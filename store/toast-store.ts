import { create } from "zustand";

export type ToastType = "success" | "info" | "error";

type ToastState = {
    visible: boolean;
    message: string;
    type: ToastType;
    timeoutId?: NodeJS.Timeout;

    show: (type: ToastType, message: string, duration?: number) => void;
    hide: () => void;
};

export const useToastStore = create<ToastState>((set, get) => ({
    visible: false,
    message: "",
    type: "info",
    timeoutId: undefined,

    show: (type, message, duration = 3000) => {
        // clear previous toast
        if (get().timeoutId) {
            clearTimeout(get().timeoutId);
        }

        const timeoutId: any = setTimeout(() => {
            set({ visible: false });
        }, duration);

        set({
            visible: true,
            type,
            message,
            timeoutId,
        });
    },

    hide: () => {
        if (get().timeoutId) {
            clearTimeout(get().timeoutId);
        }
        set({ visible: false, timeoutId: undefined });
    },
}));
