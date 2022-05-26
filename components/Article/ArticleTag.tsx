import { FunctionComponent } from 'react'
import Link from 'next/link'

import styles from './ArticleTag.module.scss'
import { StrapiDataItem } from '@/models/strapi.model'
import { TagAttributesData } from '@/models/tag.model'
import classNames from 'classnames'

type ArticleTagProps = {
  tags: { data: [StrapiDataItem<TagAttributesData>] }
}

const ArticleTag: FunctionComponent<ArticleTagProps> = ({ tags }) => {
  if (!tags.data.length) return null

  return (
    <div className={styles.tagContainer}>
      <div className={styles.title}>Tag :</div>
      <div className={styles.tagItems}>
        {tags.data.map((tag, index) => (
          <Link key={tag.id} href={{ pathname: '/article', query: { tag: tag.attributes.name } }}>
            <a>
              {tag.attributes.name}
              {index < tags.data.length - 1}
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ArticleTag
