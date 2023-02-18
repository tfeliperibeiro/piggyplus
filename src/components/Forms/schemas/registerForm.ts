import * as yup from 'yup'

export const registerFormSchema = yup.object({
  name: yup
    .string()
    .required('Nome é obrigatório.')
    .min(2, 'Nome deve ter no mínimo 2 caracteres.')
    .max(20, 'Nome deve ter no máximo 20 caracteres.'),
  email: yup
    .string()
    .email('E-mail inválido.')
    .required('E-mail é obrigatório.'),
  password: yup
    .string()
    .min(6, 'Sua senha deve ter no mínimo 6 caracteres.')
    .required('Senha é obrigatória.')
    .max(20, 'Senha deve ter no máximo 20 caracteres.'),
})
