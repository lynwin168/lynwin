import { FunctionComponent } from 'react'
import Link from 'next/link'

import styles from './ArticleTag.module.scss'
import { StrapiDataItem } from '@/models/strapi.model'
import { TagAttributesData } from '@/models/tag.model'

type ArticleTagProps = {
  tags: { data: [StrapiDataItem<TagAttributesData>] }
}

const ArticleTag: FunctionComponent<ArticleTagProps> = ({ tags }) => {
  if (!tags.data.length) return null

  return (
    <div className={styles.tagWrapper}>
      <div className='mr-2'>Tag:</div>
      <div className={styles.tagItemsWrapper}>
        {tags.data.map((tag) => (
          <Link key={tag.id} href={{ pathname: '/article', query: { tag: tag.attributes.name } }}>
            <a>{tag.attributes.name}</a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ArticleTag
