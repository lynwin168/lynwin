import { FunctionComponent } from 'react'
import Head from 'next/head'

export type SeoProps = {
  title: string
  description: string
  keywords?: string
  shareImageURL?: string
  articleInfo?: {
    publishedTime: string
    updatedTime: string
  }
}

const Seo: FunctionComponent<SeoProps> = ({ title, description, keywords, shareImageURL, articleInfo }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property='og:type' content='website' />
      <meta property='og:locale' content='th_TH' />
      <meta property='og:site_name' content='Lynwin168' />
      <meta name='description' content={description} />
      {keywords && <meta name='keywords' content={keywords} />}

      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />

      {shareImageURL && (
        <>
          <meta property='og:image' content={shareImageURL} />
          <meta property='og:image:secure_url' content={shareImageURL} />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />
          <meta name='twitter:image' content={shareImageURL} />
        </>
      )}

      {/* Article */}
      {articleInfo && (
        <>
          <meta property='og:type' content='article' />
          <meta property='og:updated_time' content={articleInfo.updatedTime} />
          <meta property='article:publisher' content='https://lynwin168.com' />
          <meta property='article:author' content='Lynwin168' />
          <meta property='article:published_time' content={articleInfo.publishedTime} />
          <meta property='article:modified_time' content={articleInfo.updatedTime} />
        </>
      )}
    </Head>
  )
}

export default Seo
