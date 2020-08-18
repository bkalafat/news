
import Content from "../components/Content"
import Layout from "../components/Layout"
import Head from 'next/head'

function Index() {
  return (
    <Layout>
      <Head>
        <title>Ana Sayfa</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="Haberibul.com" />
        <meta name="description" content="Ulusal Spor Magazin Ekonomi Futbol Canlı Son Dakika haberlerini bulabileceğiniz haberi bul sayfası." />
        <meta property="og:image" content="/logo512.png" />
        <meta property="og:url" content="https://haberibul.com" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://haberibul.com" />
        <meta property="og:title" content="Haberibul.com" />
        <meta property="og:description" content="Ulusal Spor Magazin Ekonomi Futbol Canlı Son Dakika haberlerini bulabileceğiniz haberi bul sayfası." />
        <meta property="twitter:url" content="https://haberibul.com" />
        <meta property="twitter:title" content="Haberibul.com" />
        <meta property="twitter:description" content="Ulusal Spor Magazin Ekonomi Futbol Canlı Son Dakika haberlerini bulabileceğiniz haberi bul sayfası." />
      </Head>
      <Content />
    </Layout>
  )
}

export default Index