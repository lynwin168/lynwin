import { FunctionComponent } from 'react'
import Image from 'next/image'

import styles from './Footer.module.scss'
import { Container } from 'react-bootstrap'
import LogoProductSlider from './LogoProductSlider'

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className='pt-4'>
        <LogoProductSlider />
      </div>
      <Container className='d-flex align-items-center flex-column '>
        <Image src='/images/truemoneywallet-logo.webp' alt='true money wallet' width={300} height={88} />
        <div className='d-flex justify-content-center mt-2' style={{ gap: 12 }}>
          <Image src='/images/bank_kbank.webp' alt='kbank' width={40} height={40} />
          <Image src='/images/bank_bbl.webp' alt='bbl' width={40} height={40} />
          <Image src='/images/bank_gsb.webp' alt='gsb' width={40} height={40} />
          <Image src='/images/bank_ktb.webp' alt='ktb' width={40} height={40} />
          <Image src='/images/bank_scb.webp' alt='scb' width={40} height={40} />
          <Image src='/images/bank_ttb.webp' alt='ttb' width={40} height={40} />
          <Image src='/images/bank_kiatnakin.webp' alt='kiatnakin' width={40} height={40} />
          <Image src='/images/bank_tisco.webp' alt='tisco' width={40} height={40} />
          <Image src='/images/bank_baac.webp' alt='baac' width={40} height={40} />
        </div>
        <p className='text-center text-white mt-5'>2020-2022 © Copyright LINWIN168 All rights Reserved.</p>
      </Container>
    </footer>
  )
}

export default Footer
