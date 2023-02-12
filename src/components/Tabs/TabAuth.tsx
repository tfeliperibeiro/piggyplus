import {
  ScaleFade,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'

import { FormLogin } from '../Form/FormLogin'
import { FormRegistration } from '../Form/FormRegistration'

import { AuthButtonGoogle } from '../Buttons/AuthButtonGoogle'

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
            <AuthButtonGoogle text="Entrar com Google" />
            <FormLogin />
          </ScaleFade>
        </TabPanel>
        <TabPanel>
          <ScaleFade in initialScale={0.9}>
            <AuthButtonGoogle text="Cadastrar-se com Google" />
            <FormRegistration />
          </ScaleFade>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
