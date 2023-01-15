import { Flex } from '@chakra-ui/react'

type Props = {
  children: JSX.Element
}

export const Layout = ({ children }: Props) => {
  return (
    <Flex
      height="100vh"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="start"
      maxW="md"
      margin="0 auto"
      p={[4, 0]}
    >
      {children}
    </Flex>
  )
}
