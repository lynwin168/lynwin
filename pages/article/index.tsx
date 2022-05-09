import type { NextPage } from 'next'
import { useEffect, useMemo, useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { Col, Container, Row } from 'react-bootstrap'
import classNames from 'classnames'
import qs from 'qs'
import Link from 'next/link'

import styles from '@/styles/Article.module.scss'
import * as apiService from '@/services/api.service'
import { ArticleAttributesData } from '@/models/article.model'
import { StrapiDataItem } from '@/models/strapi.model'
import ArticleItem from '@/components/Article/ArticleItem'
import Pagination from '@/components/Common/Pagination'

const Article: NextPage = () => {
  const router = useRouter()
  const [articles, setArticles] = useState<StrapiDataItem<ArticleAttributesData>[]>([])
  const [totalPage, setTotalPage] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const { term, tag } = router.query

  useEffect(() => {
    const query = qs.stringify({
      filters: {
        title: {
          $contains: term
        },
        tags: {
          name: tag
        }
      },
      fields: ['slug', 'title', 'description', 'publishedAt'],
      sort: ['publishedAt:desc'],
      populate: ['image'],
      pagination: {
        page: currentPage,
        pageSize: 6
      }
    })

    const controller = new AbortController()
    apiService.getArticles(query, controller.signal).then((response) => {
      const { meta, data } = response
      const { page, pageCount } = meta.pagination

      setArticles(data)
      setTotalPage(pageCount)
      setCurrentPage(page)
    })

    return () => {
      // cancel the request
      controller.abort()
    }
  }, [currentPage, term, tag])

  const handleChangePage = useCallback((page: number) => {
    setCurrentPage(page)
  }, [])

  const PaginationMemo = useMemo(() => {
    return <Pagination current={currentPage} pageCount={totalPage} onChange={(page) => handleChangePage(page)} />
  }, [currentPage, totalPage, handleChangePage])

  return (
    <section className={styles.articleSection}>
      <Container className={classNames(styles.container, 'gy-4 justify-content-center')}>
        <Row className='gy-3 gx-3'>
          {articles.map((article) => (
            <Col lg={4} md={6} sm={10} key={article.id}>
              <Link href={`/article/${article.attributes.slug}`}>
                <a>
                  <ArticleItem article={article} />
                </a>
              </Link>
            </Col>
          ))}
        </Row>
        <div className={styles.pagination}>{PaginationMemo}</div>
      </Container>
    </section>
  )
}

export default Article
