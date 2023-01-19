import { Flex, Text } from '@chakra-ui/react'

import { Header } from '@/components/Header'
import { TabAuth } from '@/components/TabAuth'
import Image from 'next/image'

import FinanceImage from '../../../public/assets/finance.png'

export default function Login() {
  return (
    <>
      <Header />
      <Flex justify="space-between" w="5xl" m="0 auto" h="100vh" align="center">
        <Flex justify="space-around" align="center" flexDir="column" h="lg">
          <Text fontSize="3xl" fontWeight="black" w="lg" textAlign="center">
            Nunca foi tão{' '}
            <Text as="span" color="purple.500">
              simples{' '}
            </Text>
            organizar suas finanças.
          </Text>
          <Image src={FinanceImage} alt="teste" width={400} />
        </Flex>
        <TabAuth />
      </Flex>
    </>
  )
}
