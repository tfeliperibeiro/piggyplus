import { Button, ButtonProps } from '@chakra-ui/react'

import { ArrowForwardIcon } from '@chakra-ui/icons'

type ButtonAuthProps = ButtonProps & {
  text: string
}

export const AuthButton = ({ text, ...rest }: ButtonAuthProps) => {
  return (
    <Button
      bgGradient="linear(to-r, primary.500, primary.800)"
      color="text.light.900"
      width="full"
      mt="8"
      type="submit"
      _hover={{
        bgGradient: 'linear(to-r, primary.400, primary.700)',
      }}
      rightIcon={<ArrowForwardIcon />}
      {...rest}
    >
      {text}
    </Button>
  )
}
