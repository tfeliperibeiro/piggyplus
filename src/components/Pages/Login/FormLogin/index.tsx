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
      boxShadow="sm"
      rounded="lg"
      maxW="sm"
    >
      <Stack spacing={4}>
        <FormLabel color="gray.300" htmlFor="email" margin="0">
          Email
        </FormLabel>
        <Input
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
          focusBorderColor="pink.400"
        />
        <FormLabel color="gray.300" htmlFor="password">
          Senha
        </FormLabel>
        <PasswordInput
          id="password"
          placeholder="Digite seu e-mail"
          focusBorderColor="pink.400"
        />
      </Stack>
      <Button
        bg="pink.400"
        color="whiteAlpha.900"
        width="full"
        mt="8"
        _hover={{ bg: 'pink.500' }}
        rightIcon={<ArrowForwardIcon />}
      >
        Entrar
      </Button>
      <Flex justifyContent="center" mt="8" gap="2">
        <Text color="gray.500">Não tem uma conta ?</Text>
        <Link onClick={() => router.push('/cadastro')} color="pink.400">
          Cadastre-se
        </Link>
      </Flex>
    </FormControl>
  )
}
