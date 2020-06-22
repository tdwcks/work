import Head from 'next/head'
import React from 'react'
import { motion } from 'framer-motion';
import { initGA, logPageView } from '../utils/analytics'

export default class Layout extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  render () {
    return (
      <div>
      <Head>
        <title>Tom Wicks</title>
        <link rel="icon" href="/images/favicon/favicon.ico" />
        <meta name="description" content="Glide through the sleepy village of Windminster delivering mail to its residents. On each delivery you will be rewarded with stamps which you can use to upgrade your wardrobe, glider and unlock new routes."/>
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content="Postman Tap" />
        <meta name="og:description" property="og:description" content="Glide through Windminster delivering post" />
        <meta property="og:site_name" content="Postman Tap" />
        <meta property="og:url" content="https://postmantap.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Postman Tap" />
        <meta name="twitter:description" content="Glide through Windminster delivering post" />
        <meta name="twitter:site" content="https://postmantap.com" />
        <meta name="twitter:creator" content="Windminster" />
        <link rel="icon" type="image/png" href="/images/favicon/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/favicon/favicon.ico" />
        <meta property="og:image" content="/images/meta/social.png" />
        <meta name="twitter:image" content="/images/meta/social.png" />
      </Head>
      <main className="block">{this.props.children}</main>
      </div>
    )
  }
}
