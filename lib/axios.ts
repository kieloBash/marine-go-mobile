import { useAuthStore } from '@/store/auth-store';
import axios from 'axios';
import { env } from '../config/env';

export const api = axios.create({
    baseURL: env.API_URL,
    timeout: 10000,
});

// Attach JWT automatically
api.interceptors.request.use((config) => {
    const token = useAuthStore.getState().token;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});
