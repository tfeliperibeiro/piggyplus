import { AddTransactionButton } from '@/components/Buttons/AddTransactionButton'
import { CardBalance } from '@/components/Cards/CardBalance'

import { DashboardHeader } from '@/components/Headers/DashboardHeader'
import { DrawerMobile } from '@/components/Menus/DrawerMobile'
import { Flex, Text } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'

export default function Dashboard() {
  const { data: session } = useSession()
  return (
    <>
      <Flex
        w="full"
        display={{ base: 'flex', lg: 'none' }}
        align="center"
        justify="space-between"
        paddingInline="8"
        pt="8"
      >
        <DrawerMobile />
        <Text color="text.primary.500" fontWeight="semibold">
          Olá, {session?.user?.name}!
        </Text>
      </Flex>
      <DashboardHeader />
      <CardBalance />
      <AddTransactionButton />
    </>
  )
}
