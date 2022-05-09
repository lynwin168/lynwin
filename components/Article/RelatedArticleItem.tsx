import { FunctionComponent } from 'react'
import Image from 'next/image'
import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

import styles from './RelatedArticleItem.module.scss'
import { ArticleAttributesData } from '@/models/article.model'
import { StrapiDataItem } from '@/models/strapi.model'
import { strapiMediaURL } from '@/utils/common.util'

type RelatedArticleItemProps = {
  article: StrapiDataItem<ArticleAttributesData>
}

const RelatedArticleItem: FunctionComponent<RelatedArticleItemProps> = ({ article }) => {
  return (
    <div className={styles.relatedArticleItem}>
      <div className={styles.thumbnail}>
        <Image
          src={strapiMediaURL(article.attributes.image.data.attributes.formats.small.url)}
          alt='blog'
          width={500}
          height={385}
        />
      </div>
      <div className={styles.content}>
        <h6 className={styles.title}>{article.attributes.title}</h6>
        <span className={styles.date}>
          <FontAwesomeIcon type='thin' icon={faClock} className='me-1' />
          {dayjs(article.attributes.publishedAt).format('DD MMM YYYY')}
        </span>
      </div>
    </div>
  )
}

export default RelatedArticleItem
