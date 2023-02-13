import {
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'

import { useSession, signOut } from 'next-auth/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

export const DashboardHeader = () => {
  const { data: session } = useSession()

  return (
    <Flex
      w="full"
      h="12"
      justify="end"
      pr="16"
      mt="8"
      align="center"
      gap="4"
      display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}
    >
      <Avatar src={session?.user?.image as string} />
      <Menu>
        <MenuButton
          color={'text.primary.500'}
          as={Button}
          rightIcon={<ChevronDownIcon />}
        >
          {session?.user?.name}
        </MenuButton>
        <MenuList color={'text.primary.500'}>
          <MenuItem>Perfil</MenuItem>
          <MenuItem onClick={() => signOut()}>Sair</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}
