import { AppProps } from 'next/dist/shared/lib/router/router'
import React from 'react'
import Head from 'next/head'
import '../components/global.css'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>NextJS App From Scratch</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
