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
      w={{ base: 'full', sm: 'md', md: 'md', lg: 'md', xl: 'md' }}
      h={'lg'}
      paddingInline={{ base: '4', sm: '0', md: '4', lg: '0', xl: '0' }}
    >
      <TabList>
        <Tab>Entrar</Tab>
        <Tab>Cadastrar</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ScaleFade in initialScale={0.9}>
            <Flex
              w={{ base: 'full', sm: 'full' }}
              align={{ base: 'center', sm: 'center' }}
              justify={{ base: 'center', sm: 'center' }}
              mt={'8'}
              mb={'8'}
            >
              <Button
                leftIcon={<FcGoogle size="1.4rem" />}
                bgColor="text.light.900"
                boxShadow="md"
                color="text.primary.500"
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
            <Flex align="center" w="full" justify="center" mt={'8'} mb={'8'}>
              <Button
                leftIcon={<FcGoogle size="1.4rem" />}
                bgColor="text.light.900"
                boxShadow="md"
                color="text.primary.500"
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
