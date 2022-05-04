import { FunctionComponent } from 'react'
import classNames from 'classnames'
import Slider, { Settings } from 'react-slick'
import Image from 'next/image'

import styles from './HomeGame.module.scss'
import { Button, Container } from 'react-bootstrap'

const HomeGame: FunctionComponent = () => {
  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className={classNames('text-center', styles.gameContainer)}>
      <Container className='position-relative'>
        <h1 className='mb-0'>เกมส์มันส์มันส์</h1>
        <span>เกมเยอะ ภาพสวยทั้งใหม่ และ เป็นที่นิยม</span>
        <Slider className='home-slick-slider mt-4' {...settings}>
          <div className='d-flex justify-content-center'>
            <Image src='/images/game_01.png' alt='article' width={290} height={400} />
          </div>
          <div className='d-flex justify-content-center'>
            <Image src='/images/game_02.png' alt='article' width={290} height={400} />
          </div>
          <div className='d-flex justify-content-center'>
            <Image src='/images/game_03.png' alt='article' width={290} height={400} />
          </div>
          <div className='d-flex justify-content-center'>
            <Image src='/images/game_04.png' alt='article' width={290} height={400} />
          </div>
          <div className='d-flex justify-content-center'>
            <Image src='/images/game_05.png' alt='article' width={290} height={400} />
          </div>
        </Slider>
        <Button className={classNames('mt-2', styles.btnAllGame)}>เกมส์ทั้งหมด</Button>
      </Container>
      <div></div>
    </div>
  )
}

export default HomeGame
