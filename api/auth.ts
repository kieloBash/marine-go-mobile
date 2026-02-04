import { api } from "@/lib/axios";
import { ApiSuccessResponse } from "@/types";

export type LoginResponse = {
    access_token: string;
    user: {
        id: string;
        email: string;
        name?: string;
    };
};

export const login = async (email: string, password: string) => {
    const { data } = await api.post<ApiSuccessResponse<LoginResponse>>("/auth/login", {
        email,
        password,
    });

    return data;
};

export type RegisterPayload = {
    name: string;
    email: string;
    city: string;
    password: string;
    confirmPassword: string;
    role?: {
        name: "USER" | "PARTNER";
    };
};

export type RegisterResponse = {
    id: string;
    email: string;
    message: string;
}

export const register = async (payload: RegisterPayload): Promise<ApiSuccessResponse<RegisterResponse>> => {
    const { data } = await api.post<ApiSuccessResponse<RegisterResponse>>("/auth/register", payload);
    return data;
};