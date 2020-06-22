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
    <Hero title="" description="I design apps, games and websites that help drive change." foreground="mint" background="racing"></Hero>
    <div className="text-lg text-gray-700 float-right w-1/2 md:text-xl">
      <div className="mb-4 relative image  overflow-hidden bg-racing" style={{padding: "0 0 65% 0"}}>
        <img className="absolute self-center w-full pb-4" src="images/me.jpg"/>
      </div>
      <div class="p-8 pt-3">
        <p className="pb-4">I’m a senior designer at Run An Empire, a game that turns running into adventures.</p>
        <p className="pb-4">Before that I co-founded Miln, a design studio based in Huddersfield that worked with a range of startups and more established insititutions, as well as creating our own products.</p>
        <p className="pb-4">My work has been featured on the Apple App Store, Forbes, Business Insider, The Guardian and BBC.</p>
        <p className="pb-6">I studied at Goldsmiths University where I recieved a first class degree in design.</p>

        <p className="pb-4">I’m @tdwcks on Twitter, Instagram and Spotify. </p>
      </div>
    </div>
  </Layout>
)
