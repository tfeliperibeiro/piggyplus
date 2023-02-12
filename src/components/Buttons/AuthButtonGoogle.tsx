import { Button, FlexProps, Flex } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'

import { signIn } from 'next-auth/react'

type AuthButtonGoogleProps = FlexProps & {
  text: string
}

export const AuthButtonGoogle = ({ text, ...rest }: AuthButtonGoogleProps) => {
  return (
    <Flex
      w={{ base: 'full', sm: 'full' }}
      align={{ base: 'center', sm: 'center' }}
      justify={{ base: 'center', sm: 'center' }}
      mt={'8'}
      mb={'8'}
      {...rest}
    >
      <Button
        leftIcon={<FcGoogle size="1.4rem" />}
        bgColor="text.light.900"
        boxShadow="md"
        color="text.primary.500"
        _hover={{ boxShadow: 'lg' }}
        onClick={() => signIn()}
      >
        {text}
      </Button>
    </Flex>
  )
}
