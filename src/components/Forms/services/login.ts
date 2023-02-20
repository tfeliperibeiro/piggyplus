import { FormLoginType } from '@/components/Forms/types/formLogin';
import { api } from '@/lib/api';

export const login = async (formLoginData: FormLoginType) => {
  const { data } = await api.post('api/auth/login', formLoginData);

  return data;
};
