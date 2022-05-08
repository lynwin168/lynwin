import { FunctionComponent } from 'react'
import Image, { ImageProps } from 'next/image'

import styles from './HomeTrustItem.module.scss'

type HomeTrustItemProps = ImageProps & {
  title: string
  subTitle: string
  imageSize: number
}

const HomeTrustItem: FunctionComponent<HomeTrustItemProps> = ({ title, subTitle, alt, imageSize, ...imageProps }) => {
  const mobileImageSize = imageSize / 2
  return (
    <div className={styles.container}>
      <div className='d-block d-sm-none' style={{ minWidth: mobileImageSize }}>
        <Image width={mobileImageSize} height={mobileImageSize} {...imageProps} alt={alt} />
      </div>
      <div className='d-none d-sm-block' style={{ minWidth: imageSize }}>
        <Image width={imageSize} height={imageSize} {...imageProps} alt={alt} />
      </div>
      <div className={styles.infoWrapper}>
        <span className={styles.title}>{title}</span>
        <span className='mt-2 d-none d-md-block'>{subTitle}</span>
      </div>
    </div>
  )
}

export default HomeTrustItem
