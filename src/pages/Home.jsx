import React from 'react'
import { Products } from '@components/home/Products'
import initialState from '../states/initialState'

const Home = () => {
  return (
    <>
      <Products products={initialState.products} />
    </>
  )
}

export { Home } 