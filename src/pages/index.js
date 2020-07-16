
import { SWRConfig } from "swr"
import axios from "axios"
import Content from "../components/Content"
import Layout from "../components/Layout"
import Head from 'next/head'

function Index() {
  return (
    <Layout>
      <Head>
        <title>Ana Sayfa</title>
      </Head>
        <Content />

    </Layout>
  )
}

export default Index