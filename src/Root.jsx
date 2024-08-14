import { Outlet } from 'react-router-dom'
import MainNavigation from './components/Layout/MainNavigation'
import Footer from './components/Layout/Footer'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

function RootLayout() {
  return (
    <>
    <h1><MainNavigation /></h1>
    <Outlet />
    <Footer />
    <Cart />
    <Checkout />
    </>
  )
}

export default RootLayout