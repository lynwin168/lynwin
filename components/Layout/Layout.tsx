import { FunctionComponent } from 'react'
import { useRouter } from 'next/router'

import BottomNavigationBar from './BottomNavigationBar'
import Footer from './Footer'
import Header from './Header'
import Seo from '../Common/Seo'

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
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

  return (
    <>
      {/* custom seo */}
      {router.pathname !== '/article/[slug]' && (
        <Seo
          title='Lynwin168 ฝาก ถอน ไว มั่นใจ 100%'
          description='lynwin168 ฝาก ถอน ไว มั่นใจ 100%'
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
