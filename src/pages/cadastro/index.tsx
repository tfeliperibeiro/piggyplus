import { Flex } from '@chakra-ui/react'

import { FormRegistration } from '@/components/Form/Registration/FormRegistration'
import { Logo } from '@/components/Logo'

export default function Register() {
  return (
    <Flex justify="center" align="center" w={['full', 'sm']} mb="4" gap={['8']}>
      <Logo />
      <FormRegistration />
    </Flex>
  )
}
