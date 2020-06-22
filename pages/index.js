import Head from 'next/head'
import Layout from '../components/layout'
import Switch from '../components/switch'
import Work from '../components/work'
import Hero from '../components/hero'

export default () => (
  <Layout home>
    <Head>
      <title>Tom Wicks </title>
    </Head>
      <Switch colour="cobalt" switcheroo="/info"></Switch>
      <Hero title="" description="A collection of recent work by designer Tom Wicks" foreground="sky" background="cobalt"></Hero>
      <div className="float-right w-1/2">
        <Work url="/work/chronicle" title="Chronicle" description="Beautifully simple Diary for iOS" fileName="/images/work/chronicle/cover.png" ></Work>
        <Work url="/work/postman-tap" title="Postman Tap" description="Relaxing gliding game for phones" fileName="/images/work/postman-tap/cover.png" ></Work>
      </div>
  </Layout>
)
