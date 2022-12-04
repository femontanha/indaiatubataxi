import '../styles/globals.css'
import type { AppProps } from 'next/app'
import WhatsApp from '../components/WhatsApp'
import Header from '../components/Header'
import Container from '../components/Container'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <WhatsApp />
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  )
}
