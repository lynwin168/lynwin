import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
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
