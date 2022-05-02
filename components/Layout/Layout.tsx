import { FunctionComponent } from 'react'
import BottomNavigationBar from './BottomNavigationBar'

import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <BottomNavigationBar />
    </>
  )
}

export default Layout
