import { FunctionComponent, MouseEvent, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Button } from 'react-bootstrap'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

import styles from './Layout.module.scss'
import BottomNavigationBar from './BottomNavigationBar'
import Footer from './Footer'
import Header from './Header'
import Seo from '../Common/Seo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const [visibleContactButton, setVisibleContactButton] = useState(true)
  const router = useRouter()
  const keywords = [
    'LYN BET',
    'lynbeer',
    'lynblue89',
    'lynwin',
    'lynwin168',
    'lyngold',
    'lynking',
    '168',
    'เว็บสล็อต',
    'สล็อตออนไลน์',
    'เกมสล็อตออนไลน์ได้เงินจริง',
    'PGSLOT',
    'คาสิโน',
    'คาสิโนออนไลน์',
    'casino',
    'บาคาร่า',
    'เว็บแทงบอลออนไลน์',
    'ยูฟ่า',
    'UFA',
    'พนันออนไลน์',
    'บริการตลอด 24 ชม',
    'หวย',
    'หวยไทย',
    'หวยลาว',
    'หวยเวียดนาม',
    'หวยฮานอย',
    'หวยมาเล',
    'หวยสิงคโป',
    'slot',
    'slot online',
    'game slot',
    'gameslot',
    'สล็อต',
    'สล็อตออนไลน์',
    'เกมสล็อต',
    'ยิงปลา',
    'เกมยิงปลา',
    'joker',
    'evoplay',
    'simpleplay',
    'playstar',
    'kingmaker',
    'habanero'
  ]

  const handleClickHiddenContactButton = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setVisibleContactButton(false)
  }

  return (
    <>
      {visibleContactButton && (
        <a rel='noreferrer' target='_blank' href='https://line.me/R/ti/p/@341zdvtu' className={styles.lineButton}>
          <Button className={styles.closeButton} onClick={handleClickHiddenContactButton}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </Button>
          <Image src='/images/home-line.webp' width={103} height={128} alt='line button' unoptimized />
        </a>
      )}
      {/* custom seo */}
      {router.pathname !== '/article/[slug]' && (
        <Seo
          title='Lynwin168 สล็อต PG SLOT สล็อตออนไลน์ สล็อตแตกง่าย ที่นี้'
          description='ทางเข้าเล่นสล็อต สมัครสล็อต เกมยิงปลา เว็บสล็อตออนไลน์ ฝากถอนไม่มีขั้นต่ำ ระบบออโต้โอนไว เว็บสล็อตที่ดีที่สุด ดูแลโดยทีมงานคุณภาพได้ที่ '
          keywords={keywords.join(', ')}
        />
      )}
      <Header />
      <main>{children}</main>
      <Footer />
      <BottomNavigationBar />
    </>
  )
}

export default Layout
