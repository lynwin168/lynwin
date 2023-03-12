import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Marquee from 'react-fast-marquee'
import classNames from 'classnames'

import styles from './HeaderAnnouncement.module.scss'

interface HeaderAnnouncementProps {
  title: string
}

const HeaderAnnouncement: React.FC<HeaderAnnouncementProps> = ({ title }) => {
  const router = useRouter()
  const { reference } = router.query
  const visibleNavigation = reference !== '9' && reference !== '12528' && reference !== '20513'

  // NOTE: ถ้าไม่ใช้หน้าแรกให้ force header เป็นสีดำ
  const isBlackHeader = router.pathname !== '/'

  useEffect(() => {
    window.addEventListener('scroll', handleStickyScroll)
    return () => {
      window.removeEventListener('scroll', handleStickyScroll)
    }
  })

  const handleStickyScroll = () => {
    const header = document.getElementById('header-announcement')
    if (!header) return

    header.classList.toggle(styles.sticky, window.scrollY > 0)
  }

  return (
    <div
      id='header-announcement'
      className={classNames(styles.announcement, {
        [styles.black]: isBlackHeader,
        [styles.noNavigation]: !visibleNavigation
      })}
    >
      <Marquee speed={50} gradient={false}>
        {title}
      </Marquee>
    </div>
  )
}

export default HeaderAnnouncement
