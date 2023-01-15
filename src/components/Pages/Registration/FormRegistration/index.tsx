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
      boxShadow="sm"
      rounded="lg"
      maxW="sm"
    >
      <ArrowBackIcon
        color="pink.400"
        fontSize="2xl"
        mb="8"
        cursor="pointer"
        onClick={() => router.back()}
      />
      <Stack spacing={4}>
        <FormLabel color="gray.300" htmlFor="email" margin="0">
          Nome
        </FormLabel>
        <Input
          id="email"
          type="email"
          placeholder="Digite seu nome"
          focusBorderColor="pink.400"
        />
        <FormLabel color="gray.300" htmlFor="email">
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
          placeholder="Digite sua senha"
          focusBorderColor="pink.400"
        />
        <FormLabel color="gray.300" htmlFor="password">
          Confirmar senha
        </FormLabel>
        <PasswordInput
          id="password"
          placeholder="Confirme sua senha"
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
        Cadastrar
      </Button>
    </FormControl>
  )
}
