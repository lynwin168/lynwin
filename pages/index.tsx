import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import qs from 'qs'

import styles from '@/styles/Home.module.scss'

import * as apiService from '@/services/api.service'
import HomeBanner from '@/components/Home/HomeBanner'
import HomePromotion from '@/components/Home/HomePromotion'
import HomeArticle from '@/components/Home/HomeArticle'
import HomeGame from '@/components/Home/HomeGame'
import HomeAboutus from '@/components/Home/HomeAboutus'
import HomeTrust from '@/components/Home/HomeTrust'
import { ArticleAttributesData } from '@/models/article.model'
import { StrapiDataItem } from '@/models/strapi.model'

const Home: NextPage = () => {
  const [articles, setArticles] = useState<StrapiDataItem<ArticleAttributesData>[]>([])

  useEffect(() => {
    const query = qs.stringify({
      fields: ['slug', 'title', 'description', 'publishedAt'],
      sort: ['publishedAt:desc'],
      populate: ['image'],
      pagination: {
        page: 1,
        pageSize: 3
      }
    })

    const controller = new AbortController()
    apiService.getArticles(query, controller.signal).then((response) => {
      const { data } = response
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
      {articles.length > 0 && <HomeArticle articles={articles} />}
    </>
  )
}

export default Home
