import { ArticleAttributesData } from '@/models/article.model'
import { StrapiDataItem } from '@/models/strapi.model'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import { Button, Container } from 'react-bootstrap'
import Slider, { Settings } from 'react-slick'
import ArticleItem from '../Article/ArticleItem'
import CardView from '../Common/CardView'

import styles from './HomeArticle.module.scss'

type HomeArticleProps = {
  articles: StrapiDataItem<ArticleAttributesData>[]
}

const HomeArticle: FunctionComponent<HomeArticleProps> = ({ articles }) => {
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
      <Container>
        <h1 className='text-center text-white'>บทความ</h1>
        <Slider className='home-slick-slider article-slick-slider mt-4' {...settings}>
          {articles.map((article) => (
            <div className='px-2' key={article.id}>
              <ArticleItem article={article} />
            </div>
          ))}
          {/* <div className='d-flex justify-content-center'>
            <ArticleItem />
            <CardView>
              <Image src='/images/article_01.jpg' alt='article' width={400} height={200} style={{ borderRadius: 5 }} />
              <div className='p-4'>LUCIABET คาสิโนออนไลน์ ที่ได้ยิ่งใหญ่ในวงการพนันออนไลน์</div>
            </CardView>
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
          </div> */}
        </Slider>
        <div className='text-center'>
          <Link href='/article' passHref>
            <Button className={classNames(styles.viewAllArticle, 'mt-3')}>บทความทั้งหมด</Button>
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default HomeArticle
