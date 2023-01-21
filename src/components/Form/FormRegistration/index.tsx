import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  FormErrorMessage,
} from '@chakra-ui/react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registrationFormSchema } from '@/schemas/registrationForm'
import { RegistrationFormType } from '@/types'
import { PasswordInput } from '../PasswordInput'
import { ButtonAuth } from '../ButtonAuth'

export const FormRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormType>({
    resolver: yupResolver(registrationFormSchema),
  })

  const onSubmit = (data: RegistrationFormType) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <FormControl isInvalid={!!errors.name}>
          <FormLabel color="gray.400" htmlFor="name">
            Nome
          </FormLabel>
          <Input
            {...register('name')}
            id="name"
            type="text"
            placeholder="Digite seu nome"
            focusBorderColor="purple.500"
          />
          <FormErrorMessage color="red.300">
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel color="gray.400" htmlFor="email">
            Email
          </FormLabel>
          <Input
            {...register('email')}
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            focusBorderColor="purple.500"
          />
        </FormControl>
        <FormControl>
          <FormLabel color="gray.400" htmlFor="password">
            Senha
          </FormLabel>
          <PasswordInput
            placeholder="Digite sua senha"
            focusBorderColor="purple.500"
          />
        </FormControl>
      </Stack>
      <ButtonAuth text="Cadastrar" />
    </form>
  )
}
