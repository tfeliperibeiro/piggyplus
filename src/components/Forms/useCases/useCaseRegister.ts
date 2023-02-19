import { useMutation } from '@tanstack/react-query';
import { register } from '../services/register';

export const useCaseRegister = () => {
  const { mutate: regiterUser } = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { regiterUser };
};
