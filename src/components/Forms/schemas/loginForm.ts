import * as yup from 'yup';

export const loginFormSchema = yup
  .object({
    email: yup
      .string()
      .email('Email inválido.')
      .required('Este campo é obrigatório.')
      .matches(
        /^[^@]+@(?!gmail\.com)[^@]+\.[^@]+$/,
        'Faça login com Google no botão acima.'
      ),
    password: yup
      .string()
      .min(6, 'Deve ter no mínimo 6 caracteres.')
      .max(20, 'Sua senha deve ter no máximo 20 caracteres.')
      .required('Campo senha é obrigatório.'),
  })
  .noUnknown(true);
