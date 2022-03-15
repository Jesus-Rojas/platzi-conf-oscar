import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '@styles/shared/Header.css'
import { AppContext } from '@context/AppContext'

const Header = () => {
  const { state } = useContext(AppContext)
  const { cart } = state
  return (
    <div className='Header'>
      <h1 className='Header-title'>
        <Link to='/'>
          Platzi Conf
        </Link>
      </h1>
      <div className='Header-checkout'>
        <Link to='/checkout'>
          <i className="fas fa-shopping-basket" />
        </Link>
        
        { cart.length > 0 && <div className="Header-a">{ cart.length }</div> }
      </div>
    </div>
  )
}

export { Header }