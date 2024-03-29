import { FunctionComponent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Button } from 'react-bootstrap'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import Script from 'next/script'

import * as apiService from '@/services/api.service'
import styles from './Layout.module.scss'
import BottomNavigationBar from './BottomNavigationBar'
import Footer from './Footer'
import Header from './Header'
import Seo from '../Common/Seo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeaderAnnouncement from './HeaderAnnouncement'
import { StrapiDataItem } from '@/models/strapi.model'
import { AnnouncementAttributesData } from '@/models/announcement.model'
import { AnnouncementContext } from 'contexts/AnnouncementContext'

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const [announcement, setAnnouncement] = useState<StrapiDataItem<AnnouncementAttributesData>>()
  const router = useRouter()
  const { reference } = router.query
  const visibleNavigation = reference !== '9' && reference !== '12528' && reference !== '20513'
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

  useEffect(() => {
    apiService
      .getAnnouncement()
      .then((response) => {
        setAnnouncement(response)
      })
      .catch(() => {})
  }, [])

  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
                });
            `}
      </Script>
      {/* <!-- Facebook Pixel Code --> */}
      <Script id='facebook-pixel' strategy='afterInteractive'>
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '354541863450733'); fbq('track', 'PageView');`}
      </Script>
      <noscript>
        <Image
          height={1}
          width={1}
          src={'https://www.facebook.com/tr?id=354541863450733&ev=PageView&noscript=1'}
          alt='facebook pixel'
          unoptimized
        />
      </noscript>
      {visibleNavigation && (
        <a
          rel="noreferrer"
          target="_blank"
          href="https://line.me/R/ti/p/@926slomw"
          className={styles.lineButton}
        >
          <Button className={styles.closeButton}>
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
      {visibleNavigation && <Header />}
      {announcement && <HeaderAnnouncement title={announcement.attributes.title} />}
      <AnnouncementContext.Provider value={{ announcementTitle: announcement?.attributes.title }}>
        <main>{children}</main>
      </AnnouncementContext.Provider>
      <Footer />
      {visibleNavigation && <BottomNavigationBar />}
    </>
  )
}

export default Layout
