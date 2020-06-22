import Head from 'next/head'
import Layout from '../components/layout'
import Switch from '../components/switch'
import Hero from '../components/hero'
import { motion } from 'framer-motion';

export default () => (
  <Layout>
    <Head>
      <title>Tom Wicks </title>
    </Head>
    <Switch colour="racing" switcheroo="/"></Switch>
    <Hero title="" description="dnje" foreground="mint" background="racing"></Hero>
    <div className="text-lg text-gray-700 float-right w-1/2 md:text-xl">
      <div className="mb-4 relative image  overflow-hidden bg-racing" style={{padding: "0 0 65% 0"}}>
        <img className="absolute self-center w-full pb-4" src="images/me.jpg"/>
      </div>
      <div class="p-8 pt-3">

      </div>
    </div>
  </Layout>
)
