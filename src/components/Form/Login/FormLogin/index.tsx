import { FormControl, FormLabel, Input, Stack, Button } from '@chakra-ui/react'

import { ArrowForwardIcon } from '@chakra-ui/icons'
import { PasswordInput } from '../../PasswordInput'

export const FormLogin = () => {
  return (
    <FormControl>
      <Stack>
        <FormLabel color="gray.400" htmlFor="email" margin="0">
          Email
        </FormLabel>
        <Input
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
          focusBorderColor="purple.500"
        />
        <FormLabel color="gray.400" htmlFor="password">
          Senha
        </FormLabel>
        <PasswordInput
          id="password"
          placeholder="Digite sua senha"
          focusBorderColor="purple.500"
        />
      </Stack>
      <Button
        bgGradient="linear(to-r, purple.500, purple.800)"
        color="whiteAlpha.900"
        width="full"
        transition="ease 0.3s"
        mt="8"
        _hover={{
          bgGradient: 'linear(to-r, purple.400, purple.700)',
        }}
        rightIcon={<ArrowForwardIcon />}
      >
        Entrar
      </Button>
    </FormControl>
  )
}
