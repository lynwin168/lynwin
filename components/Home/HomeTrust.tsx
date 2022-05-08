import { FunctionComponent } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import styles from './HomeTrust.module.scss'
import HomeTrustItem from './HomeTrustItem'

const HomeTrust: FunctionComponent = () => {
  return (
    <section className={styles.trustSection}>
      <Container>
        <Row className='gy-4'>
          <Col xl={4} md={6}>
            <HomeTrustItem
              src='/images/ic-trust-smart-wallet.webp'
              height={115}
              width={115}
              alt='smart wallet'
              title='Smart Wallet'
              subTitle='เล่นได้ทุกเกมส์ไม่ต้องโยกเงิน'
              unoptimized
            />
          </Col>
          <Col xl={4} md={6}>
            <HomeTrustItem
              src='/images/ic-trust-award.webp'
              height={115}
              width={115}
              alt='number one in thailand'
              title='อันดับ 1 ในไทย'
              subTitle='เทคโนโลยี และเกมส์จากทั่วทุกมุมโลก'
              unoptimized
            />
          </Col>
          <Col xl={4} md={6}>
            <HomeTrustItem
              src='/images/ic-trust-exchange.webp'
              height={115}
              width={115}
              alt='exchange'
              title='ฝาก - ถอน เร็วมาก'
              subTitle='ฝาก - ถอน เร็วมากด้วยระบบ Bot AI'
              unoptimized
            />
          </Col>
          <Col xl={4} md={6}>
            <HomeTrustItem
              src='/images/ic-trust-game.webp'
              height={115}
              width={115}
              alt='game'
              title='เล่นได้ทุกที'
              subTitle='ระบบใช้งานง่ายรองรับทุกอุปกรณ์'
              unoptimized
            />
          </Col>
          <Col xl={4} md={6}>
            <HomeTrustItem
              src='/images/ic-trust-contact.webp'
              height={115}
              width={115}
              alt='contact'
              title='บริการด้วยใจ'
              subTitle='ฝ่ายบริการลูกค้า 24 ชม. ทุกวัน'
              unoptimized
            />
          </Col>
          <Col xl={4} md={6}>
            <HomeTrustItem
              src='/images/ic-trust-giff.webp'
              height={115}
              width={115}
              alt='good promotion'
              title='โปรดีๆ สำหรับทุกคน'
              subTitle='กิจกรรมและโปรโมชันหลากหลาย'
              unoptimized
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HomeTrust
