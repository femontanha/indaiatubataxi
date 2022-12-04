import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta name="description" content="Promoção para viagens taxi Indaiatuba e região."/>
        <meta name="keywords" content="promocao,taxi,taxi indaiatuba,indaiatuba,salto,itu,guarulhos,viracopos,campinas" />
        <link rel="canonical" href="https://indaiatubataxi.com.br/promocao/" />
        <meta property="og:site_name" content="Táxi Executivo para empresas e viagens | Transporte com segurança e qualidade" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Promoções | Táxi Executivo para empresas e viagens" />
        <meta property="og:description" content="Promoção para viagens taxi Indaiatuba e região." />
        <meta property="og:url" content="https://indaiatubataxi.com.br/promocao/" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:domain" content="indaiatubataxi.com.br" />
        <meta property="twitter:title" content="Promoções | Táxi Executivo para empresas e viagens" />
        <meta property="twitter:description" content="Promoção para viagens taxi Indaiatuba e região." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
