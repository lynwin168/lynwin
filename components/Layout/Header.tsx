import { FunctionComponent, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'react-bootstrap'
import classNames from 'classnames'

import styles from './Header.module.scss'
import { useRouter } from 'next/router'

const Header: FunctionComponent = () => {
  const router = useRouter()

  // NOTE: ถ้าไม่ใช้หน้าแรกให้ force header เป็นสีดำ
  const isBlackHeader = router.pathname !== '/'

  useEffect(() => {
    window.addEventListener('scroll', handleStickyScroll)
    return () => {
      window.removeEventListener('scroll', handleStickyScroll)
    }
  })

  const handleStickyScroll = () => {
    const header = document.getElementById('header')
    if (!header) return

    header.classList.toggle(styles.sticky, window.scrollY > 0)
  }

  return (
    <header id='header' className={classNames(styles.header, { [styles.black]: isBlackHeader })}>
      <Container>
        <div className='d-flex justify-content-between'>
          <Link href='/'>
            <a className='d-flex align-items-center'>
              <Image src='/images/header-logo.webp' alt='logo' unoptimized width={152} height={25} />
            </a>
          </Link>
          <ul className={styles.menu}>
            <li className='d-none d-md-block'>
              <Link href='/'>
                <a>หน้าแรก</a>
              </Link>
            </li>
            <li className='d-none d-md-block'>
              <Link href='/#home-promotion'>
                <a>โปรโมชั่น</a>
              </Link>
            </li>
            <li className='d-none d-md-block'>
              <Link href='/article'>
                <a>บทความ</a>
              </Link>
            </li>
            <li className='d-none d-sm-block'>
              <Link href='/signin' passHref>
                <Button variant='outline-dark' className={styles.btnSignin}>
                  เข้าสู่ระบบ
                </Button>
              </Link>
            </li>
            <li>
              <Link href='/signup' passHref>
                <Button variant='outline-dark' className={styles.btnSignup}>
                  สมัครสมาชิก
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  )
}

export default Header
