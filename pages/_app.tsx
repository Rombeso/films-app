import { AppPropsType } from 'next/dist/shared/lib/utils'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppPropsType): JSX.Element {
  return (
    <>
      <Head>
        <title>My films - app</title>
        <link key={1} rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
