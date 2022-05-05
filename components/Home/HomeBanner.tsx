import { FunctionComponent } from 'react'
import Image from 'next/image'

import styles from './HomeBanner.module.scss'
import classNames from 'classnames'
import { Container } from 'react-bootstrap'

const HomeHeader: FunctionComponent = () => {
  return (
    <div className={classNames('ratio', styles.bg)}>
      <Image src='/images/home-banner.webp' alt='home banner' layout='fill' unoptimized objectFit='contain' />
    </div>
  )
}

export default HomeHeader
