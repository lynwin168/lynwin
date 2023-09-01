import { FunctionComponent } from 'react'
import { faRightFromBracket, faUserPlus, faGift, faAddressBook } from '@fortawesome/free-solid-svg-icons'

import styles from './BottomNavigationBar.module.scss'
import BottomNavigationItem from './BottomNavigationItem'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'

const BottomNavigationBar: FunctionComponent = () => {
  return (
    <div
      className={classNames(styles.navigationContainer, 'd-flex align-items-center justify-content-center d-sm-none')}
    >
      <Link href='https://member.jpotbet.com/register?ref=111301'>
        <a>
          <BottomNavigationItem icon={faUserPlus} title='สมัครสมาชิก' />
        </a>
      </Link>
      <Link href='https://member.jpotbet.com/'>
        <a >
          <BottomNavigationItem icon={faRightFromBracket} title='เข้าสู่ระบบ' highlight />
        </a>
      </Link>
      <div className={classNames('mx-1 logo-animation ', styles.logo)}>
        <Image src='/images/linwin-logo-solo.webp' width={40} height={40} alt='logo' unoptimized />
      </div>
      <Link href='/#home-promotion'>
        <a>
          <BottomNavigationItem icon={faGift} title='โปรโมชั่น' />
        </a>
      </Link>
      <a target='_blank' rel='noreferrer' href='https://line.me/R/ti/p@926slomw'>
        <BottomNavigationItem icon={faAddressBook} title='ติดต่อ' />
      </a>
    </div>
  )
}

export default BottomNavigationBar
