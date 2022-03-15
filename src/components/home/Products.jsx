import React, { useContext } from 'react'
import '@styles/components/Products.css'
import { Product } from '@components/home/Product'
import { AppContext } from '@context/AppContext'

const Products = () => {
  const { state, addToCart } = useContext(AppContext)
  const { products } = state
  // methods
  const handleAddToCart = (product) => {
    addToCart(product)
  }
  return (
    <div className='Products'>
      <div className='Products-items'>
        {products.map(product => (
          <Product key={`product-${product.id}`} product={product} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  )
}

export { Products }