import type { NextPage } from 'next'

import HomeBanner from '@/components/Home/HomeBanner'
import HomePromotion from '@/components/Home/HomePromotion'
import HomeArticle from '@/components/Home/HomeArticle'
import HomeGame from '@/components/Home/HomeGame'
import HomeAboutus from '@/components/Home/HomeAboutus'

const Home: NextPage = () => {
  return (
    <>
      <HomeBanner />
      <HomePromotion />
      <HomeAboutus />
      <HomeGame />
      <HomeArticle />
    </>
  )
}

export default Home
