import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import WhatsApp from '../components/WhatsApp'
import Header from '../components/Header'
import Container from '../components/Container'
import Footer from '../components/Footer'
import 'nprogress/nprogress.css'

const NProgress = require('nprogress')

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleStart = (url: string) => {
      NProgress.start()
    }

    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

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
