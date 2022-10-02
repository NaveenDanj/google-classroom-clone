import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import React, { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import FirebaseApp from '../config/FirebaseApp';
import { AuthUserProvider } from '../context/AuthUserContext';
FirebaseApp

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthUserProvider>
      <ChakraProvider>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </ChakraProvider>
    </AuthUserProvider>
  )
}

export default MyApp
