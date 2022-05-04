import type { NextPage } from 'next'

import HomeBanner from '@/components/Home/HomeBanner'
import HomePromotion from '@/components/Home/HomePromotion'
import HomeArticle from '@/components/Home/HomeArticle'
import HomeGame from '@/components/Home/HomeGame'

const Home: NextPage = () => {
  return (
    <>
      <HomeBanner />
      <HomePromotion />
      <HomeGame />
      <HomeArticle />
    </>
  )
}

export default Home
