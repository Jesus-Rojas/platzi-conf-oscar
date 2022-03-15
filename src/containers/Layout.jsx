import React from 'react'
import '@styles/containers/Layout.css'
import { Header } from '@shared/Header'
import { Footer } from '@shared/Footer'


const Layout = ({ children }) => {
  return (
    <div className='Main'>
      <Header />
      { children }
      <Footer />
    </div>
  )
}

export { Layout }