import { FunctionComponent } from 'react'
import classNames from 'classnames'
import Slider, { Settings } from 'react-slick'
import Image from 'next/image'

import Illustration from '../../public/images/Asset 4.svg'
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
      <div className={classNames('ratio', styles.divider, styles.top)}>
        <Image src='/images/home-game-top-divider.webp' layout='fill' alt='divider' />
      </div>
      <Container className='position-relative'>
        <h1 className='mb-0'>เกมส์มันส์มันส์</h1>
        <span>เกมเยอะ ภาพสวยทั้งใหม่ และ เป็นที่นิยม</span>
        <Slider className='home-slick-slider mt-4' {...settings}>
          <div className='d-flex justify-content-center'>
            <Image src='/images/game_01.webp' alt='game_01' width={290} height={400} />
          </div>
          <div className='d-flex justify-content-center'>
            <Image src='/images/game_02.webp' alt='game_02' width={290} height={400} />
          </div>
          <div className='d-flex justify-content-center'>
            <Image src='/images/game_03.webp' alt='game_03' width={290} height={400} />
          </div>
          <div className='d-flex justify-content-center'>
            <Image src='/images/game_04.webp' alt='game_04' width={290} height={400} />
          </div>
          <div className='d-flex justify-content-center'>
            <Image src='/images/game_05.webp' alt='game_05' width={290} height={400} />
          </div>
        </Slider>
      </Container>
      <div className={classNames('ratio', styles.divider, styles.bottom)}>
        <Image src='/images/home-game-bottom-divider.webp' layout='fill' alt='divider' />
      </div>
    </div>
  )
}

export default HomeGame
