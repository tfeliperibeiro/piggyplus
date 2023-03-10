import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  FormErrorMessage,
} from '@chakra-ui/react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { registerFormSchema } from '@/schemas/registerForm'
import { RegistrationFormType } from '@/types/registrationForm'
import { PasswordInput } from './PasswordInput'
import { AuthButton } from '../Buttons/AuthButton'

export const FormRegistration = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegistrationFormType>({
    resolver: yupResolver(registerFormSchema),
  })

  const onSubmit = (data: RegistrationFormType) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <FormControl isInvalid={!!errors.name}>
          <FormLabel color="text.primary.400" htmlFor="name">
            Nome
          </FormLabel>
          <Input
            {...register('name')}
            id="name"
            placeholder="Digite seu nome"
            focusBorderColor="primary.500"
            errorBorderColor="error.primary"
          />
          <FormErrorMessage color="error.primary">
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel color="text.primary.400" htmlFor="email">
            Email
          </FormLabel>
          <Input
            {...register('email')}
            id="email"
            placeholder="Digite seu e-mail"
            focusBorderColor="primary.500"
            errorBorderColor="error.primary"
          />
          <FormErrorMessage color="error.primary">
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.password}>
          <FormLabel color="text.primary.400" htmlFor="password">
            Senha
          </FormLabel>
          <PasswordInput
            id="password"
            placeholder="Digite sua senha"
            focusBorderColor="primary.500"
            errorBorderColor="error.primary"
            control={control}
          />
          <FormErrorMessage color="error.primary">
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
      </Stack>
      <AuthButton text="Cadastrar" />
    </form>
  )
}
