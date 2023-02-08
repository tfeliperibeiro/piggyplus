import {
  Button,
  Flex,
  ScaleFade,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'

import { FormLogin } from '../Form/FormLogin'
import { FormRegistration } from '../Form/FormRegistration'

import { FcGoogle } from 'react-icons/fc'

export const TabAuth = () => {
  return (
    <Tabs
      isLazy
      isFitted
      variant="solid-rounded"
      colorScheme="purple"
      w={{ sm: 'full', xl: 'md' }}
      h={{ xl: 'lg' }}
      p={{ sm: '4', xl: '0' }}
    >
      <TabList>
        <Tab>Entrar</Tab>
        <Tab>Cadastrar</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ScaleFade in initialScale={0.9}>
            <Flex
              w={{ sm: 'full' }}
              align={{ sm: 'center' }}
              justify={{ sm: 'center' }}
              mt={{ sm: '8' }}
              mb={{ sm: '8' }}
            >
              <Button
                leftIcon={<FcGoogle size="1.4rem" />}
                bgColor="whiteAlpha.900"
                boxShadow="md"
                color="gray.600"
                _hover={{ boxShadow: 'lg' }}
              >
                Entrar com o Google
              </Button>
            </Flex>
            <FormLogin />
          </ScaleFade>
        </TabPanel>
        <TabPanel>
          <ScaleFade in initialScale={0.9}>
            <Flex
              align="center"
              w="full"
              justify="center"
              mt={{ sm: '8' }}
              mb={{ sm: '8' }}
            >
              <Button
                leftIcon={<FcGoogle size="1.4rem" />}
                bgColor="whiteAlpha.900"
                boxShadow="md"
                color="gray.600"
                _hover={{ boxShadow: 'lg' }}
              >
                Cadastrar-se com o Google
              </Button>
            </Flex>
            <FormRegistration />
          </ScaleFade>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
