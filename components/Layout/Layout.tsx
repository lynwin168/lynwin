import { FunctionComponent } from 'react'

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
    </>
  )
}

export default Layout
