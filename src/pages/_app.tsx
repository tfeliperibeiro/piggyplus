import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { globalTheme } from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={globalTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
