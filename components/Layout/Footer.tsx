import { FunctionComponent } from 'react'
import Image from 'next/image'

import styles from './Footer.module.scss'
import { Container } from 'react-bootstrap'

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footerContainer}>
      <Container className='d-flex align-items-center flex-column pt-5'>
        <Image src='/images/truemoneywallet-logo.png' alt='true money wallet' width={300} height={88} />
        <div className='d-flex justify-content-center mt-2' style={{ gap: 12 }}>
          <Image src='/images/bank_kbank.png' alt='kbank' width={40} height={40} />
          <Image src='/images/bank_bbl.png' alt='bbl' width={40} height={40} />
          <Image src='/images/bank_gsb.png' alt='gsb' width={40} height={40} />
          <Image src='/images/bank_ktb.png' alt='ktb' width={40} height={40} />
          <Image src='/images/bank_scb.png' alt='scb' width={40} height={40} />
          <Image src='/images/bank_ttb.png' alt='ttb' width={40} height={40} />
          <Image src='/images/bank_kiatnakin.png' alt='kiatnakin' width={40} height={40} />
          <Image src='/images/bank_tisco.png' alt='tisco' width={40} height={40} />
          <Image src='/images/bank_baac.png' alt='baac' width={40} height={40} />
        </div>
        <p className='text-white mt-5'>2020-2021 © Copyright LINWIN168 All rights Reserved.</p>
      </Container>
    </footer>
  )
}

export default Footer
