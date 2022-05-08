import type { NextPage } from 'next'

import HomeBanner from '@/components/Home/HomeBanner'
import HomePromotion from '@/components/Home/HomePromotion'
import HomeArticle from '@/components/Home/HomeArticle'
import HomeGame from '@/components/Home/HomeGame'
import HomeAboutus from '@/components/Home/HomeAboutus'
import HomeTrust from '@/components/Home/HomeTrust'

const Home: NextPage = () => {
  return (
    <>
      <HomeBanner />
      <HomePromotion />
      <HomeAboutus />
      <HomeTrust />
      <HomeGame />
      <HomeArticle />
    </>
  )
}

export default Home
