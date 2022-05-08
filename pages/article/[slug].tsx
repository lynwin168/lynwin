import type { NextPage, GetServerSideProps } from 'next'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { Col, Container, Row, Button } from 'react-bootstrap'
import qs from 'qs'
import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faLine, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import classNames from 'classnames'

import styles from '@/styles/ArticleDetail.module.scss'
import * as apiService from '@/services/api.service'
import { ArticleAttributesData } from '@/models/article.model'
import { popupWindows, strapiMediaURL } from '@/utils/common.util'
import { StrapiDataItem } from '@/models/strapi.model'

import RelatedArticleItem from '@/components/Article/RelatedArticleItem'
import ArticleSearchBox from '@/components/Article/ArticleSearchBox'
import Seo, { SeoProps } from '@/components/Common/Seo'
import ArticleTag from '@/components/Article/ArticleTag'
import CardView from '@/components/Common/CardView'

type ArticleDetailProps = {
  article: StrapiDataItem<ArticleAttributesData>
}

type SocialShareType = 'twitter' | 'facebook' | 'line'

const ArticleDetail: NextPage<ArticleDetailProps> = ({ article }) => {
  if (!article) return <div></div>

  const { title, description, image, updatedAt, publishedAt, content, relatedArticles, tags } = article.attributes
  const { alternativeText, url: imageURL } = image.data.attributes

  const handleClickShare = (type: SocialShareType) => {
    const url = window.location.href

    if (type === 'twitter') {
      const openURL = `https://twitter.com/intent/tweet?text=${title} ${url}`
      popupWindows(openURL, title)
    } else if (type === 'facebook') {
      const openURL = `http://www.facebook.com/sharer.php?u=${url}`
      popupWindows(openURL, title)
    } else if (type === 'line') {
      const openURL = `http://line.me/R/msg/text/?${title} ${url}`
      window.open(openURL)
    }
  }

  const seoData: SeoProps = {
    title,
    description,
    shareImageURL: strapiMediaURL(imageURL),
    articleInfo: {
      publishedTime: publishedAt,
      updatedTime: updatedAt
    }
  }

  return (
    <>
      <Seo {...seoData} />
      <section className={styles.articleDetailSection}>
        <Container>
          <Row>
            <Col lg={8}>
              <CardView>
                <div className={styles.articleDetailSectionWrapper}>
                  <div className={styles.detailsThumb}>
                    {imageURL && (
                      <Image src={strapiMediaURL(imageURL)} alt={alternativeText} layout='fill' objectFit='contain' />
                    )}
                  </div>
                  <div className={styles.detailsContent}>
                    <h3 className={styles.title}>{title}</h3>
                    <div className={styles.meta}>
                      <div>
                        <FontAwesomeIcon icon={faClock} className={classNames(styles.icon, 'me-2')} />
                        {dayjs(publishedAt).format('DD MMM YYYY')}
                      </div>
                      <div className={styles.socialShareWrapper}>
                        <Button className={styles.facebook} onClick={() => handleClickShare('facebook')}>
                          <FontAwesomeIcon icon={faFacebookSquare} />
                        </Button>
                        <Button className={styles.twitter} onClick={() => handleClickShare('twitter')}>
                          <FontAwesomeIcon icon={faTwitterSquare} />
                        </Button>
                        <Button className={styles.line} onClick={() => handleClickShare('line')}>
                          <FontAwesomeIcon icon={faLine} />
                        </Button>
                      </div>
                    </div>
                    <div className={styles.detailsInner}>{content && <ReactMarkdown>{content}</ReactMarkdown>}</div>
                    {tags && <ArticleTag tags={tags} />}
                  </div>
                </div>
              </CardView>
            </Col>
            <Col lg={4}>
              <CardView className={styles.articleSidebar}>
                <div className={styles.articleSidebarItem}>
                  <div className='mb-4'>
                    <ArticleSearchBox />
                  </div>
                  {relatedArticles.data.length > 0 && (
                    <>
                      <h5 className='mb-3'>บทความที่เกี่ยวข้อง</h5>
                      <div className={styles.relatedArticleItems}>
                        {relatedArticles.data.map((article) => (
                          <RelatedArticleItem article={article} key={article.id} />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </CardView>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const query = qs.stringify({
      filters: {
        slug: context.params?.slug
      },
      populate: ['image', 'tags', 'relatedArticles.image']
    })
    const articles = await apiService.getArticles(query)

    return {
      props: { article: articles.data[0] }
    }
  } catch (error) {
    return {
      notFound: true
    }
  }
}

export default ArticleDetail
