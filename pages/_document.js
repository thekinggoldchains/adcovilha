import { Html, Head, Main, NextScript } from 'next/document'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
 
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>AD Covilhã</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <body>
        <Main />
        <NextScript />
      </body>
      <Footer/>
    </Html>
  )
}