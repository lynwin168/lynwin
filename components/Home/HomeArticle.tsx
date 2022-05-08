import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import { Button, Container } from 'react-bootstrap'
import Slider, { Settings } from 'react-slick'

import styles from './HomeArticle.module.scss'

const HomeArticle: FunctionComponent = () => {
  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className={styles.articleSection}>
      <Container className='text-center'>
        <h1 className='text-center text-white'>บทความ</h1>
        <Slider className='home-slick-slider article-slick-slider mt-4' {...settings}>
          <div className='d-flex justify-content-center'>
            <Image src='/images/article_01.jpg' alt='article' width={400} height={200} style={{ borderRadius: 5 }} />
          </div>
          <div className='d-flex justify-content-center'>
            <Image
              className='rounded-5'
              src='/images/article_01.jpg'
              alt='article'
              width={400}
              height={200}
              style={{ borderRadius: 5 }}
            />
          </div>
          <div className='d-flex justify-content-center'>
            <Image
              className='rounded-5'
              src='/images/article_01.jpg'
              alt='article'
              width={400}
              height={200}
              style={{ borderRadius: 5 }}
            />
          </div>
        </Slider>
        <Link href='/article' passHref>
          <Button className={classNames(styles.viewAllArticle, 'mt-3')}>บทความทั้งหมด</Button>
        </Link>
      </Container>
    </div>
  )
}

export default HomeArticle
