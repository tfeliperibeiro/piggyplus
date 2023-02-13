import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  FormErrorMessage,
  Checkbox,
  Flex,
  Link,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'

import { useForm } from 'react-hook-form'

import { loginFormSchema } from '@/schemas/loginForm'
import { LoginFormInputsType } from '@/types/loginForm'

import { PasswordInput } from './PasswordInput'
import { AuthButton } from '../Buttons/AuthButton'

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
          <FormLabel color="text.primary.400" htmlFor="email">
            Email
          </FormLabel>
          <Input
            {...register('email')}
            id="email"
            autoComplete="current-email"
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
      <Flex mt="8" justify={'center'}>
        <Checkbox colorScheme="purple" color="text.primary.500">
          Mantenha-me conectado.
        </Checkbox>
      </Flex>
      <AuthButton text="Entrar" mt={'4'} />
      <Flex
        justify={'center'}
        mt="4"
        color={'text.primary.400'}
        _hover={{ color: 'primary.500' }}
      >
        <Link>Esqueceu sua senha?</Link>
      </Flex>
    </form>
  )
}
