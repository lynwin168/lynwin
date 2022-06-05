import { FunctionComponent } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

export type SeoProps = {
  title: string
  description: string
  keywords?: string
  shareImageURL?: string
  articleInfo?: {
    slug: string
    publishedTime: string
    updatedTime: string
    tags: string
  }
}

const Seo: FunctionComponent<SeoProps> = ({ title, description, keywords, shareImageURL, articleInfo }) => {
  const router = useRouter()
  const currentPath = router.asPath.split('?')[0]
  const currentURL = currentPath === '/' ? '' : currentPath

  return (
    <Head>
      <title>{title}</title>
      <meta property='og:locale' content='th_TH' />
      <meta property='og:site_name' content='Lynwin168' />
      <meta name='description' content={description} />
      {keywords && <meta name='keywords' content={keywords} />}

      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={`https://lynwin168.com${currentURL}`} />

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
      {articleInfo ? (
        <>
          <link rel='canonical' href={`https://lynwin168.com/article/${articleInfo.slug}`} />
          <meta name='tags' content={articleInfo.tags} />
          <meta property='og:type' content='article' />
          <meta property='og:updated_time' content={articleInfo.updatedTime} />
          <meta property='article:publisher' content='https://lynwin168.com' />
          <meta property='article:author' content='Lynwin168' />
          <meta property='article:published_time' content={articleInfo.publishedTime} />
          <meta property='article:modified_time' content={articleInfo.updatedTime} />
        </>
      ) : (
        <meta property='og:type' content='website' />
      )}
    </Head>
  )
}

export default Seo
