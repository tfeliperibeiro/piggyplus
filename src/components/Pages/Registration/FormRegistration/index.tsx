import { FormControl, FormLabel, Input, Stack, Button } from '@chakra-ui/react'

import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { PasswordInput } from '../../../Form/PasswordInput'
import { useRouter } from 'next/router'

export const FormRegistration = () => {
  const router = useRouter()
  return (
    <FormControl
      p={7}
      bg="whiteAlpha.900"
      boxShadow="md"
      rounded="lg"
      maxW="sm"
    >
      <ArrowBackIcon
        color="cyan.500"
        fontSize="2xl"
        mb="8"
        cursor="pointer"
        onClick={() => router.back()}
      />
      <Stack spacing={4}>
        <FormLabel color="gray.400" htmlFor="name" margin="0">
          Nome
        </FormLabel>
        <Input
          id="name"
          type="text"
          placeholder="Digite seu nome"
          focusBorderColor="cyan.500"
        />
        <FormLabel color="gray.400" htmlFor="email">
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
          placeholder="Digite sua nova senha"
          focusBorderColor="cyan.500"
        />
        <FormLabel color="gray.400" htmlFor="confirm-password">
          Confirmar senha
        </FormLabel>
        <PasswordInput
          id="confirm-password"
          placeholder="Confirme sua nova senha"
          focusBorderColor="cyan.500"
        />
      </Stack>
      <Button
        bgGradient="linear(to-r, cyan.500, green.200)"
        color="whiteAlpha.900"
        width="full"
        mt="8"
        _hover={{
          bgGradient: 'linear(to-r, cyan.600, green.300)',
        }}
        rightIcon={<ArrowForwardIcon />}
      >
        Cadastrar
      </Button>
    </FormControl>
  )
}
