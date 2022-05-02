import { FunctionComponent, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'

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

  const handleClickOpenMenu = () => {
    const menu = document.querySelector(`.${styles.menu}`)
    const overlay = document.querySelector(`.${styles.overlay}`)
    if (!menu || !overlay) return

    menu.classList.toggle(styles.active, true)
    overlay.classList.toggle(styles.active, true)
  }

  const handleClickCloseMenu = () => {
    const menu = document.querySelector(`.${styles.menu}`)
    const overlay = document.querySelector(`.${styles.overlay}`)
    if (!menu || !overlay) return

    menu.classList.toggle(styles.active, false)
    overlay.classList.toggle(styles.active, false)
  }

  return (
    <>
      <div className={styles.overlay} onClick={() => handleClickCloseMenu()}></div>
      <div id='header' className={styles.header}>
        <Container>
          <div className={styles.headerBottom}>
            <div className={styles.headerBottomArea}>
              <Link href='/'>
                <a>
                  <Image src='/images/logo.webp' alt='logo' unoptimized width={150} height={42} />
                </a>
              </Link>
              <ul className={styles.menu}>
                {/* {routes.map((item, index) => (
                  <li onClick={() => handleClickCloseMenu()} key={index}>
                    <Link href={item.path}>
                      <a>{item.title}</a>
                    </Link>
                  </li>
                ))} */}
                <button
                  className={classNames(styles.btnClose, 'btn-close btn-close-white d-lg-none')}
                  onClick={() => handleClickCloseMenu()}
                ></button>
              </ul>
              <div className='d-flex d-lg-none align-items-center'>
                <div className={classNames(styles.headerTrigger, 'me-2')} onClick={() => handleClickOpenMenu()}>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Header
