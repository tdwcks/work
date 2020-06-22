import Link from 'next/link'
import { motion } from 'framer-motion';
import Head from 'next/head'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Switch from '../../components/switch'
import Hero from '../../components/hero'
import Router from 'next/router'
import Layout from '../../components/layout'
import Video from '../../components/video'

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>

  return (
      <Layout>
      <Head><title>Work </title></Head>
      <Hero title={frontmatter.title} description={frontmatter.description} foreground={frontmatter.foreground} background={frontmatter.background}></Hero>
      <Switch colour={frontmatter.background} switcheroo="/info"></Switch>
      <div className="float-right w-1/2 pb-4">
          <div className="mb-4 image bg-racing relative overflow-hidden" style={{padding: "0 0 65% 0"}}>
            <img className="self-center absolute w-full -mt-16" src={frontmatter.featureImage}/>
          </div>
          <article className="p-8 pt-1">
            <Video url={frontmatter.video}></Video>
            <div className="markdown-content text-lg text-gray-700 md:text-xl">
              <ReactMarkdown source={markdownBody} />
            </div>
          </article>
            <Link href={'/work/' + frontmatter.nextSlug}>
              <div class="flex mt-2 mb-6 items-center">
                <h1 className={'next-project ml-6 mr-2 pb-0 mb-0 pointer text-3xl pt-2 text-' + frontmatter.background}>{frontmatter.nextName}</h1>
                <div className={'rounded-lg cursor-pointer transform rotate-180 mt-2 text-' + frontmatter.background}>
                    <svg className="fill-current" width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0606 9.06065L17.9393 6.93933L4.87866 20L17.9393 33.0607L20.0606 30.9393L10.1213 21H34V18H11.1213L20.0606 9.06065Z" fill={frontmatter.background}/>
                    </svg>
                </div>
              </div>
            </Link>
      </div>
      </Layout>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { workname } = ctx.params

  const content = await import(`../../works/${workname}.md`)
  const config = await import(`../../siteconfig.json`)
  const data = matter(content.default)

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)

      return slug
    })
    return data
  })(require.context('../../works', true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/work/${slug}`)

  return {
    paths,
    fallback: false,
  }
}
