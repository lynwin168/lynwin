import { FunctionComponent } from 'react'
import Image, { ImageProps } from 'next/image'

import styles from './HomeTrustItem.module.scss'

type HomeTrustItemProps = ImageProps & {
  title: string
  subTitle: string
}

const HomeTrustItem: FunctionComponent<HomeTrustItemProps> = ({ title, subTitle, alt, ...imageProps }) => {
  return (
    <div className={styles.container}>
      <Image {...imageProps} alt={alt} />
      <div className={styles.infoWrapper}>
        <span className={styles.title}>{title}</span>
        <span className='mt-2'>{subTitle}</span>
      </div>
    </div>
  )
}

export default HomeTrustItem
