import { Box, Flex, Text } from '@chakra-ui/react'

import { TabAuth } from '@/components/TabAuth'
import Image from 'next/image'

import FinanceImage from '../../../public/assets/finance.png'

export default function Login() {
  return (
    <>
      <Flex
        w={{ sm: 'full', xl: '5xl' }}
        m={{ xl: '0 auto' }}
        h={{ sm: '100vh' }}
        alignItems={{ sm: 'center' }}
        justifyContent={{ sm: 'space-evenly', xl: 'space-between' }}
        flexDir={{ sm: 'column', xl: 'row' }}
      >
        <Flex
          w={{ sm: 'full', xl: 'lg' }}
          h={{ xl: 'lg' }}
          align={{ xl: 'center' }}
          flexDir={{ xl: 'column' }}
        >
          <Text
            fontSize={{ sm: '2xl', xl: '3xl' }}
            textAlign={{ sm: 'center' }}
            fontWeight="black"
          >
            Nunca foi tão{' '}
            <Text as="span" color="purple.500">
              simples{' '}
            </Text>
            organizar suas finanças.
          </Text>
          <Box display={{ sm: 'none', xl: 'initial' }}>
            <Image src={FinanceImage} alt="teste" width={400} />
          </Box>
        </Flex>
        <TabAuth />
      </Flex>
    </>
  )
}
