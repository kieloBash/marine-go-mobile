import { api } from '@/lib/axios';
import { ApiSuccessResponse } from '@/types';
import { useQuery } from '@tanstack/react-query';

export const useHealth = () =>
    useQuery({
        queryKey: ['health'],
        queryFn: async (): Promise<ApiSuccessResponse<any>> => {
            const { data } = await api.get('/');
            return data;
        },
    });
