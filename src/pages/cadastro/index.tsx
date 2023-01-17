import { Flex } from '@chakra-ui/react'

import { Layout } from '@/components/Layouts/LoginAndRegistration'
import { FormRegistration } from '@/components/Pages/Registration/FormRegistration'
import { Logo } from '@/components/Logo'

export default function Register() {
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
        <FormRegistration />
      </>
    </Layout>
  )
}
