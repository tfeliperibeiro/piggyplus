import Image from 'next/image'
import { Flex, Text } from '@chakra-ui/react'

import { Layout } from '@/components/Layouts/LoginAndRegistration'
import { FormRegistration } from '@/components/Pages/Registration/FormRegistration'

import LogoPiggy from '../../../public/assets/logo-piggy.svg'

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
          <Text fontSize="4xl" color="pink.400" fontWeight="extrabold">
            Piggy
            <Text fontSize="5xl" as="span">
              +
            </Text>
          </Text>
          <Image src={LogoPiggy} alt="Logo Piggy Plus" />
        </Flex>
        <FormRegistration />
      </>
    </Layout>
  )
}