import { FunctionComponent } from 'react'
import Image from 'next/image'

import styles from './HomeBanner.module.scss'
import classNames from 'classnames'

const HomeHeader: FunctionComponent = () => {
  return (
    <section className={classNames('ratio', styles.bg)}>
      <Image src='/images/home-banner.webp' alt='home banner' layout='fill' unoptimized objectFit='contain' />
    </section>
  )
}

export default HomeHeader
