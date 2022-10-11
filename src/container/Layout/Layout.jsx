import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Head from 'next/head'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <div className=''>
        <Head>
            <title>Bags</title>
        </Head>
        <header className='header'>
            <Navbar
                NavbarLogo = 'Bags'
            />
        </header>
        <main className=''>
            {children}
        </main>
        <Footer
            FooterLogo = 'bags'
            FooterPara = '&copy; all right reserved. aymenjdily 2022'

            FooterNavigation = 'navigation'
            FooterList1 = 'home'
            FooterList2 = 'collection'
            FooterList3 = 'about'
            FooterList4 = 'services'
        />
    </div>
  )
}

export default Layout