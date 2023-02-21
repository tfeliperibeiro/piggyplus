import { useMutation } from '@tanstack/react-query';
import { register } from '../services/register';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

type ErrorType = {
  message: string;
};

export const useCaseRegister = () => {
  const { mutate: regiterUser, isLoading } = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error: AxiosError<ErrorType>) => {
      toast.error(error.response?.data.message);
    },
  });
  return { regiterUser, isLoading };
};
