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
