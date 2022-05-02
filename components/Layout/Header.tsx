import { FunctionComponent, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'react-bootstrap'

import styles from './Header.module.scss'

const Header: FunctionComponent = () => {
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
    <>
      <header id='header' className={styles.header}>
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
                <Link href='#home-promotion'>
                  <a>โปรโมชัน</a>
                </Link>
              </li>
              <li className='d-none d-md-block'>
                <Link href='/'>
                  <a>บทความ</a>
                </Link>
              </li>
              <li>
                <Button
                  target='_blank'
                  rel='noreferrer'
                  href='https://lynwin168.servicelyn.com/signup'
                  variant='outline-dark'
                  className={styles.btnSignin}
                >
                  เข้าสู่ระบบ
                </Button>
              </li>
              <li>
                <Button
                  target='_blank'
                  rel='noreferrer'
                  href='https://lynwin168.servicelyn.com/'
                  variant='outline-dark'
                  className={styles.btnSignup}
                >
                  สมัครสมาชิก
                </Button>
              </li>
            </ul>
          </div>
        </Container>
      </header>
    </>
  )
}

export default Header
