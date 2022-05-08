import { useEffect, useState } from 'react'
import type { NextPage, GetStaticProps } from 'next'
import qs from 'qs'

import * as apiService from '@/services/api.service'
import HomeBanner from '@/components/Home/HomeBanner'
import HomePromotion from '@/components/Home/HomePromotion'
import HomeArticle from '@/components/Home/HomeArticle'
import HomeGame from '@/components/Home/HomeGame'
import HomeAboutus from '@/components/Home/HomeAboutus'
import HomeTrust from '@/components/Home/HomeTrust'
import { ArticleAttributesData } from '@/models/article.model'
import { StrapiDataItem } from '@/models/strapi.model'
import Image from 'next/image'

import styles from '@/styles/Home.module.scss'

const Home: NextPage = () => {
  const [articles, setArticles] = useState<StrapiDataItem<ArticleAttributesData>[]>([])

  useEffect(() => {
    const query = qs.stringify({
      fields: ['slug', 'title', 'description', 'publishedAt'],
      populate: ['image'],
      pagination: {
        page: 1,
        pageSize: 6
      }
    })

    const controller = new AbortController()
    apiService.getArticles(query, controller.signal).then((response) => {
      const { meta, data } = response
      const { page, pageCount } = meta.pagination

      setArticles(data)
    })
  }, [])

  return (
    <>
      <a rel='noreferrer' target='_blank' href='https://line.me/R/ti/p/@341zdvtu' className={styles.lineButton}>
        <Image src='/images/home-line.webp' width={103} height={128} alt='line button' unoptimized />
      </a>
      <HomeBanner />
      <HomePromotion />
      <HomeAboutus />
      <HomeTrust />
      <HomeGame />
      <HomeArticle articles={articles} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await apiService.getArticles()

  return {
    props: {}
  }
  // try {
  // } catch (error) {
  // }
  // ...
}

export default Home
