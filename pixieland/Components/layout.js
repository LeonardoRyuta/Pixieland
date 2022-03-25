import Script from 'next/script'
import Footer from './footer'
import Menu from './navbar'

export default function Layout({ children }) {

  return (
    <>
      <Menu id="menu"/>
      <main>{children}</main>
      <Footer id="foot"/>
    </>
  )
}