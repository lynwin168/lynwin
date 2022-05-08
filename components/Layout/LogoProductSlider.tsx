import Image from 'next/image'
import { FunctionComponent } from 'react'
import Slider, { Settings } from 'react-slick'

const LogoProductSlider: FunctionComponent = () => {
  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 11,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8
        }
      }
    ]
  }

  return (
    <Slider className='footer-products-slider' {...settings}>
      <Image src='/images/ic-slot-arkmebet.webp' width={79} height={40} alt='arkmebet' />
      <Image src='/images/ic-sa-gaming.webp' width={79} height={40} alt='sa-gaming' />
      <Image src='/images/ic-sexy-gaming.webp' width={79} height={40} alt='sexy-gaming' />
      <Image src='/images/ic-dream-gaming.webp' width={79} height={40} alt='dream-gaming' />
      <Image src='/images/ic-pretty-gaming.webp' width={79} height={40} alt='pretty-gaming' />
      <Image src='/images/ic-ag-gaming.webp' width={79} height={40} alt='ag-gaming' />
      <Image src='/images/ic-live-22.webp' width={79} height={40} alt='live-22' />
      <Image src='/images/ic-joker-gaming.webp' width={79} height={40} alt='joker-gaming' />
      <Image src='/images/ic-pg-slot.webp' width={79} height={40} alt='pg-slot' />
      <Image src='/images/ic-dragoonsoft.webp' width={79} height={40} alt='dragoonsoft' />
      <Image src='/images/ic-spade-gaming.webp' width={79} height={40} alt='spade-gaming' />
      <Image src='/images/ic-gamatron.webp' width={79} height={40} alt='gamatron' />
      <Image src='/images/ic-ameba.webp' width={79} height={40} alt='ameba' />
    </Slider>
  )
}

export default LogoProductSlider
