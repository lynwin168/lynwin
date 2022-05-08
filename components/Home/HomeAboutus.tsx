import classNames from 'classnames'
import Image from 'next/image'
import { FunctionComponent } from 'react'
import { Row, Col, Container } from 'react-bootstrap'

import styles from './HomeAboutus.module.scss'

const HomeAboutus: FunctionComponent = () => {
  return (
    <section className={styles.aboutusSection}>
      <Container className={styles.contentContainer}>
        <h2 className='position-relative' style={{ zIndex: 1 }}>
          ฝาก-ถอน ออโต้ โปรแรงสุดในไทย อัพเกรดใหม่ LYNWIN168 ระบบไวกว่าเดิม
        </h2>
        <div className='mt-4 position-relative' style={{ zIndex: 1 }}>
          <Image src='/images/header-logo.webp' width={304} height={50} alt='logo' />
        </div>
        <div className={styles.monkeyIcon}>
          <Image src='/images/home-monkey.webp' width={329} height={600} alt='monkey' unoptimized />
        </div>
        <Row className={classNames('flex-xxl-row flex-column-reverse', styles.rowContent)}>
          <Col className='mt-5 mt-xxl-0' xxl={5}>
            <Image src='/images/home-turtle.webp' width={673} height={798} alt='turtle' />
          </Col>
          <Col xxl={7}>
            <div className={styles.welcomeTextContainer}>
              <div className={styles.welcomeLabel}>
                <h1 className={styles.title}>ยินดีต้อนรับเข้าสู่ LYNWIN168</h1>
                <span className={styles.subTitle}>
                  <span className={styles.highlight}>เว็บพนันออนไลน์ที่ยิ่งใหญ่</span>ที่สุดในยุคนี้
                </span>
              </div>
              <div className={styles.penguinIcon}>
                <Image src='/images/home-penguin.webp' width={174} height={280} alt='penguin' />
              </div>
              <div className={styles.kingIcon}>
                <Image src='/images/home-king.webp' height={346} width={371} alt='king' unoptimized />
              </div>
              <div className={styles.goldBagIcon}>
                <Image src='/images/home-gold-bag.webp' width={188} height={457} alt='gold bag' />
              </div>
              <p className={styles.firstContent}>
                เมื่อยุคสมัยเปลี่ยนไป โลกของการสร้างรายได้ บนโลกออนไลน์ ที่ เป็นแค่โลกเสมือนจริง ได้เปลี่ยนความไม่แน่นอน
                ให้เกิดความแน่นอน ทั้ง ยังสร้างรายได้ที่มั่นคงและง่ายดาย ได้มากกว่า ไม่ว่าคุณจะเป็นใคร ก็หา
                เงินได้ง่ายยิ่งกว่าปลอกกล้วยเข้าปาก ได้จริง ๆ ด้วยสิ่งสำคัญเพียงข้อเดียว คือ…การเลือก คาสิโนออนไลน์
                ที่เชื่อถือได้ และให้บริการแก่สมาชิกทุก ๆ ท่าน ได้ อย่างไม่มีแบ่งแยก ไม่เลือกปฎิบัติ ไม่สร้างความเครียด
                เหมือนดั่งการ ทำเงิน ในรูปแบบอื่น ๆ บนโลกของความเป็นจริง
              </p>
              <p className={styles.secondContent}>
                และถ้าหากคุณเป็นหนึ่งคน ที่กำลังมองหาการสร้าง รายได้ ในรูปแบบนี้ การเข้ามาที่ คาสิโนออนไลน์ LYNWIN168
                แห่งนี้ แปลว่าคุณมาถูกที่ ถูกทางแล้ว เพราะใน ปี 2022 นี้ ไม่มีแหล่งรายได้ใด ที่จะมอบ
                ประสบการณ์ทางเลือกใหม่ ได้เต็มรูปแบบ ครบ วงจร และสร้างความหลากหลาย ได้เงินจริง!! ได้เท่ากับ ที่
                คาสิโนออนไลน์ LYNWIN168อีก แล้ว อย่างแน่นอน
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HomeAboutus
