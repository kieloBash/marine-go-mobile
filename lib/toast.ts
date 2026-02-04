import { useToastStore } from "@/store/toast-store";

export const toast = {
    success: (message: string) => {
        // Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        useToastStore.getState().show("success", message);
    },

    info: (message: string) => {
        useToastStore.getState().show("info", message, 2000);
    },

    error: (message: string) => {
        // Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        useToastStore.getState().show("error", message, 4000);
    },

    dismiss: () => {
        useToastStore.getState().hide();
    },
};
