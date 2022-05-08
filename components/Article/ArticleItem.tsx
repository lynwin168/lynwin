import { FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import dayjs from 'dayjs'

import styles from './ArticleItem.module.scss'
import { strapiMediaURL } from '@/utils/common.util'

import { ArticleAttributesData } from '@/models/article.model'
import { StrapiDataItem } from '@/models/strapi.model'

type ArticleItemProps = {
  article: StrapiDataItem<ArticleAttributesData>
}

const ArticleItem: FunctionComponent<ArticleItemProps> = ({ article }) => {
  const { attributes } = article
  const { title, description, image, publishedAt, slug } = attributes
  const { alternativeText, formats } = image.data.attributes
  const { url: imageUrl, height: imageHeight, width: imageWidth } = formats.small

  return (
    <Link href={`/article/${slug}`}>
      <a>
        <div className={styles.articleItem}>
          <div className={styles.thumbnail}>
            <Image src={strapiMediaURL(imageUrl)} alt={alternativeText} height={imageHeight} width={imageWidth} />
          </div>
          <div className={styles.content}>
            <h4 className={classNames(styles.title, 'mb-2')}>{title}</h4>
            <p className={styles.description}>{description}</p>
            <div className={styles.meta}>
              <FontAwesomeIcon icon={faClock} className={styles.icon} />
              {dayjs(publishedAt).format('DD MMM YYYY')}
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ArticleItem
