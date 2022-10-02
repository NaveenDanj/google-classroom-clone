import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import config  from '../config/FirebaseApp.js'
import {initializeApp} from "firebase/app";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


function MyApp({ Component, pageProps }: AppProps) {

  initializeApp(config);

  return (
    <RecoilRoot>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  )
}

export default MyApp
