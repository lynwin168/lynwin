import { FunctionComponent } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

import styles from './RelatedArticleItem.module.scss'
import { ArticleAttributesData } from '@/models/article.model'
import { StrapiDataItem } from '@/models/strapi.model'
import { strapiMediaURL } from '@/utils/common.util'

type RelatedArticleItemProps = {
  article: StrapiDataItem<ArticleAttributesData>
}

const RelatedArticleItem: FunctionComponent<RelatedArticleItemProps> = ({ article }) => {
  return (
    <Link key={article.id} href={`/article/${article.attributes.slug}`}>
      <a>
        <div className={styles.relatedArticleItem}>
          <div className={styles.thumb}>
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
              <FontAwesomeIcon type='thin' icon={faClock} className={styles.icon} />
              {dayjs(article.attributes.publishedAt).format('DD MMM YYYY')}
            </span>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default RelatedArticleItem
