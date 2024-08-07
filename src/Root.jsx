import { Outlet } from 'react-router-dom'
import MainNavigation from './components/Layout/MainNavigation'
import Footer from './components/Layout/Footer'

function RootLayout() {
  return (
    <>
    <h1><MainNavigation /></h1>
    <Outlet />
    <Footer />
    </>
  )
}

export default RootLayout