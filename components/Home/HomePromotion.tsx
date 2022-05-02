import { FunctionComponent } from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'

import styles from './HomePromotion.module.scss'

const HomePromotion: FunctionComponent = () => {
  return (
    <div className={styles.promotionContainer}>
      <Container>
        <Row className='gy-3'>
          {new Array(9).fill(undefined).map((_, index) => {
            return (
              <Col className='d-flex justify-content-center' xl={4} sm={6} xs={12} key={index}>
                <Image
                  src={`/images/promotion_${String(index + 1).padStart(2, '0')}.webp`}
                  alt='promotion 01'
                  height={580}
                  width={520}
                  unoptimized
                />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default HomePromotion
