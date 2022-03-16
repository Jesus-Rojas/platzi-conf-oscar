import { useState } from 'react'
import initialState from '../states/initialState'

const useInitialState = () => {
  // state
  const [state, setState] = useState(initialState);

  //methods
  const addToCart = (payload) => {
    const filtro = state.cart.filter(data => data.id === payload.id)
    if (filtro.length == 0) {
      setState({
        ...state,
        cart: [...state.cart, payload]
      })
    }
  }
  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter(data => data.id !== payload.id)
    })
  }
  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: payload
    })
  }
  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload] 
    })
  }
  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    state,
    addNewOrder,
  }
}

export { useInitialState }