import React from 'react'
import '@styles/shared/Header.css'

const Header = () => {
  return (
    <div className='Header'>
      <h1 className='Header-title'>Platzi Conf</h1>
      <div className="Header-checkout">
        Checkout
      </div>
    </div>
  )
}

export { Header }