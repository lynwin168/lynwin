import { FunctionComponent } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import dayjs from 'dayjs'

import styles from './ArticleItem.module.scss'
import CardView from '../Common/CardView'
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
    <CardView hoverable>
      <Image
        className={styles.thumbnail}
        src={strapiMediaURL(imageUrl)}
        alt={alternativeText}
        height={imageHeight}
        width={imageWidth}
        unoptimized
      />
      <div className={styles.articleContent}>
        <h1 className={classNames(styles.title, 'mb-2')}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.meta}>
          <FontAwesomeIcon icon={faClock} className={styles.icon} />
          {dayjs(publishedAt).format('DD MMM YYYY')}
        </div>
      </div>
    </CardView>
  )
}

export default ArticleItem
