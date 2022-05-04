import { FunctionComponent } from 'react'
import Image from 'next/image'

import styles from './HomeBanner.module.scss'
import classNames from 'classnames'
import { Container } from 'react-bootstrap'

const HomeHeader: FunctionComponent = () => {
  return (
    <div className={classNames('ratio', styles.bg)}>
      {/* <Container className='ratio'> */}
      <Image src='/images/home-banner.png' alt='home banner' layout='fill' unoptimized objectFit='contain' />
      {/* </Container> */}
    </div>
  )
}

export default HomeHeader
