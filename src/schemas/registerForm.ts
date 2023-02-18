import * as yup from 'yup'

export const registerFormSchema = yup.object({
  name: yup
    .string()
    .required('Este campo é obrigatório.')
    .min(2, 'Deve ter no mínimo 2 caracteres.')
    .max(20, 'Deve ter no máximo 20 caracteres.'),
  email: yup
    .string()
    .email('Email inválido.')
    .required('Este campo é obrigatório.'),
  password: yup
    .string()
    .min(6, 'Deve ter no mínimo 6 caracteres.')
    .required('Este campo é obrigatório.')
    .max(20, 'Deve ter no máximo 20 caracteres.'),
})
