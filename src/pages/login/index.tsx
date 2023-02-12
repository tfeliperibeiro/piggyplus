import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { getSession } from 'next-auth/react'
import { Box, Flex, Text } from '@chakra-ui/react'

import { TabAuth } from '@/components/Tabs/TabAuth'

import FinanceImage from '../../../public/assets/finance.png'

export default function Login() {
  return (
    <>
      <Flex
        w={{ base: 'full', sm: 'full', md: 'full', lg: 'full', xl: '5xl' }}
        m={{ xl: '0 auto' }}
        h={{ base: '100vh', sm: '100vh' }}
        alignItems={{ base: 'center', sm: 'center' }}
        justifyContent={{
          base: 'space-evenly',
          sm: 'space-evenly',
          xl: 'space-between',
        }}
        flexDir={{
          base: 'column',
          sm: 'column',
          md: 'row',
          lg: 'row',
          xl: 'row',
        }}
      >
        <Flex
          w={{ base: 'full', sm: 'md', md: 'md', lg: 'lg', xl: 'lg' }}
          h={{ md: 'lg', lg: 'lg', xl: 'lg' }}
          align={{ md: 'center', lg: 'center', xl: 'center' }}
          flexDir={{ md: 'column', lg: 'column', xl: 'column' }}
        >
          <Text
            fontSize={{
              base: '2xl',
              sm: '2xl',
              md: '3xl',
              lg: '3xl',
              xl: '3xl',
            }}
            textAlign={'center'}
            fontWeight="black"
          >
            Nunca foi tão{' '}
            <Text as="span" color="primary.500">
              simples{' '}
            </Text>
            organizar suas finanças.
          </Text>
          <Box
            display={{
              base: 'none',
              sm: 'none',
              md: 'initial',
              lg: 'initial',
              xl: 'initial',
            }}
          >
            <Image
              src={FinanceImage}
              alt="Imagem de uma mão segurando moedas"
              width={400}
            />
          </Box>
        </Flex>
        <TabAuth />
      </Flex>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
