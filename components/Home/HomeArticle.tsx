import { FunctionComponent } from 'react'
import { Button, Container } from 'react-bootstrap'
import classNames from 'classnames'
import Link from 'next/link'
import Slider, { Settings } from 'react-slick'

import styles from './HomeArticle.module.scss'
import { ArticleAttributesData } from '@/models/article.model'
import { StrapiDataItem } from '@/models/strapi.model'
import ArticleItem from '../Article/ArticleItem'

type HomeArticleProps = {
  articles: StrapiDataItem<ArticleAttributesData>[]
}

const HomeArticle: FunctionComponent<HomeArticleProps> = ({ articles }) => {
  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    speed: 1000,
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
        breakpoint: 768,
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
              <Link href={`/article/${article.attributes.slug}`}>
                <a>
                  <ArticleItem article={article} />
                </a>
              </Link>
            </div>
          ))}
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
