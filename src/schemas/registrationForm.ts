import * as yup from 'yup'

export const registrationFormSchema = yup.object({
  name: yup.string().required('Este campo é obrigatório'),
  email: yup
    .string()
    .email('Email inválido')
    .required('Este campo é obrigatório'),
  password: yup
    .string()
    .min(6, 'Sua senha deve conter no mínimo 6 caracteres')
    .required('Este campo é obrigatório'),
})
