import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import HomeBanner from '@/components/Home/HomeBanner'
import HomePromotion from '@/components/Home/HomePromotion'

const Home: NextPage = () => {
  return (
    <>
      <HomeBanner />
      <HomePromotion />
    </>
  )
}

export default Home
