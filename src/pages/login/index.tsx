import { Flex } from '@chakra-ui/react'

import { FormLogin } from '@/components/Pages/Login/FormLogin'
import { Layout } from '@/components/Layouts/LoginAndRegistration'
import { Logo } from '@/components/Logo'

export default function Login() {
  return (
    <Layout>
      <>
        <Flex
          justify="space-between"
          align="center"
          w={['full', 'sm']}
          mb="4"
          gap={['8']}
        >
          <Logo />
        </Flex>
        <FormLogin />
      </>
    </Layout>
  )
}
