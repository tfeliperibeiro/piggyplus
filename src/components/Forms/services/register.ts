import { RegisterFormType } from '@/components/Forms/types/registerForm';
import { api } from '@/lib/api';

export const register = async (registerFormData: RegisterFormType) => {
  const { data } = await api.post('api/auth/cadastro', registerFormData);

  return data;
};
