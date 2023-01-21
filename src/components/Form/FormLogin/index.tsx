import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  FormErrorMessage,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'

import { useForm } from 'react-hook-form'

import { loginFormSchema } from '@/schemas/loginForm'
import { LoginFormInputsType } from '@/types/loginForm'

import { PasswordInput } from '../PasswordInput'
import { ButtonAuth } from '../ButtonAuth'

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormInputsType>({
    resolver: yupResolver(loginFormSchema),
  })

  const onSubmit = (data: LoginFormInputsType) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel color="gray.400" htmlFor="email">
            Email
          </FormLabel>
          <Input
            {...register('email')}
            id="email"
            autoComplete="current-email"
            placeholder="Digite seu e-mail"
            focusBorderColor="purple.500"
            errorBorderColor="red.300"
          />
          <FormErrorMessage color="red.300">
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.password}>
          <FormLabel color="gray.400" htmlFor="password">
            Senha
          </FormLabel>
          <PasswordInput
            id="password"
            placeholder="Digite sua senha"
            focusBorderColor="purple.500"
            errorBorderColor="red.300"
            control={control}
          />

          <FormErrorMessage color="red.300">
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
      </Stack>
      <ButtonAuth text="Entrar" />
    </form>
  )
}
