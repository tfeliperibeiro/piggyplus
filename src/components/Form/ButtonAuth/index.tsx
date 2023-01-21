import { Button } from '@chakra-ui/react'

import { ArrowForwardIcon } from '@chakra-ui/icons'

type ButtonAuthProps = {
  text: string
}

export const ButtonAuth = ({ text }: ButtonAuthProps) => {
  return (
    <Button
      bgGradient="linear(to-r, purple.500, purple.800)"
      color="whiteAlpha.900"
      width="full"
      mt="8"
      type="submit"
      _hover={{
        bgGradient: 'linear(to-r, purple.400, purple.700)',
      }}
      rightIcon={<ArrowForwardIcon />}
    >
      {text}
    </Button>
  )
}
