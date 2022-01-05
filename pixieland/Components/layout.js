import Script from 'next/script'
import Menu from './navbar'

export default function Layout({ children }) {
  return (
    <>
      <Menu/>
      <main>{children}</main>
    </>
  )
}