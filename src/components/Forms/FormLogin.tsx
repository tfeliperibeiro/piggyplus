import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  FormErrorMessage,
  Flex,
  Link,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';

import { useForm } from 'react-hook-form';

import { loginFormSchema } from './schemas/loginForm';
import { FormLoginType } from './types/formLogin';

import { PasswordInput } from './components/PasswordInput';
import { AuthButton } from '../Buttons/AuthButton';
import { useCaseLogin } from './useCases/useCaseLogin';

export const FormLogin = () => {
  const { loginUser, isLoading } = useCaseLogin();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormLoginType>({
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit = (data: FormLoginType) => {
    loginUser(data);
  };

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
      <AuthButton text="Entrar" mt={'8'} isLoading={isLoading} />
      <Flex
        justify={'center'}
        mt="4"
        color={'text.primary.400'}
        _hover={{ color: 'primary.500' }}
      >
        <Link>Esqueceu sua senha?</Link>
      </Flex>
    </form>
  );
};
