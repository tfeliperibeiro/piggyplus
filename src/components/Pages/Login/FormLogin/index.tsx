import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Link,
  Flex,
  Text,
} from '@chakra-ui/react'

import { ArrowForwardIcon } from '@chakra-ui/icons'
import { PasswordInput } from '../../../Form/PasswordInput'
import { useRouter } from 'next/router'

export const FormLogin = () => {
  const router = useRouter()

  return (
    <FormControl
      p={7}
      bg="whiteAlpha.900"
      boxShadow="md"
      rounded="lg"
      maxW="sm"
    >
      <Stack spacing={4}>
        <FormLabel color="gray.400" htmlFor="email" margin="0">
          Email
        </FormLabel>
        <Input
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
          focusBorderColor="cyan.500"
        />
        <FormLabel color="gray.400" htmlFor="password">
          Senha
        </FormLabel>
        <PasswordInput
          id="password"
          placeholder="Digite sua senha"
          focusBorderColor="cyan.500"
        />
      </Stack>
      <Button
        bgGradient="linear(to-r, cyan.500, green.200)"
        color="whiteAlpha.900"
        width="full"
        transition="ease 0.3s"
        mt="8"
        _hover={{
          bgGradient: 'linear(to-r, cyan.600, green.300)',
        }}
        rightIcon={<ArrowForwardIcon />}
      >
        Entrar
      </Button>
      <Flex justifyContent="center" mt="8" gap="2">
        <Text color="gray.500">Não tem uma conta ?</Text>
        <Link onClick={() => router.push('/cadastro')} color="cyan.500">
          Cadastre-se
        </Link>
      </Flex>
    </FormControl>
  )
}
