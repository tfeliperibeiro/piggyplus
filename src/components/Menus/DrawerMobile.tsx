import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  IconButton,
  Avatar,
  Button,
  Text,
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'

import { useSession, signOut } from 'next-auth/react'

export const DrawerMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { data: session } = useSession()

  return (
    <>
      <IconButton
        aria-label="open-drawer"
        icon={<HamburgerIcon />}
        onClick={onOpen}
      />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            display="flex"
            gap={6}
            alignItems="center"
            color="text.primary.400"
            borderBottomWidth="1px"
          >
            <Avatar src={session?.user?.image as string} />
            {session?.user?.name}
          </DrawerHeader>
          <DrawerBody>
            <Text>Em construção...</Text>
            <Button
              bg="primary.500"
              color="text.light.900"
              mt="8"
              onClick={() => signOut()}
            >
              Sair
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
