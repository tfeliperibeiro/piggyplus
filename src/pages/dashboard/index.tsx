import { Flex, Text } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'

export default function Dashboard() {
  const { data: session } = useSession()

  return (
    <Flex align={'center'}>
      <Text>Welcome {session?.user?.name}</Text>
    </Flex>
  )
}
