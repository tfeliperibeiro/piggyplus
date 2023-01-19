import { Flex } from '@chakra-ui/react'
import { Logo } from '../Logo'

export const Header = () => {
  return (
    <Flex position="absolute" w="full" pl="12" align="center">
      <Logo />
    </Flex>
  )
}
