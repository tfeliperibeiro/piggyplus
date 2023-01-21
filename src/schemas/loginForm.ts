import * as yup from 'yup'

export const loginFormSchema = yup.object({
  email: yup
    .string()
    .email('Email inválido')
    .required('Este campo é obrigatório'),
  password: yup
    .string()
    .min(6, 'Sua senha deve conter no mínimo 6 caracteres')
    .required('Este campo é obrigatório'),
})
