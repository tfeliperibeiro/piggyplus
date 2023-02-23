import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { cookie } from '@/lib/cookies';
import { login } from '../services/login';

type ErrorType = {
  message: string;
};

export const useCaseLogin = () => {
  const router = useRouter();
  const { mutate: loginUser, isLoading } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      cookie.set('@piggyplus_token', data.token);
      router.push('/dashboard');
    },
    onError: (error: AxiosError<ErrorType>) => {
      toast.error(error.response?.data.message);
    },
  });
  return { loginUser, isLoading };
};
