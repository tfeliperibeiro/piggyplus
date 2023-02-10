import { useRouter } from 'next/router'

import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Flex, Text, Button } from '@chakra-ui/react'

export default function Home() {
  const router = useRouter()
  return (
    <Flex
      flexDir="column"
      maxW="sm"
      margin="0 auto"
      justify="center"
      align="center"
      w="full"
      height="100vh"
      p={[4, 0]}
    >
      <Text fontSize="2xl">Página Home em construção...</Text>
      <Button
        bgGradient="linear(to-r, primary.500, primary.800)"
        color="text.light.900"
        width="full"
        mt="8"
        _hover={{
          bgGradient: 'linear(to-r, primary.400, primary.700)',
        }}
        rightIcon={<ArrowForwardIcon />}
        onClick={() => router.push('/login')}
      >
        Ir para Login
      </Button>
    </Flex>
  )
}
