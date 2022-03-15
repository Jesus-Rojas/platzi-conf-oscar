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
  return {
    addToCart,
    removeFromCart,
    state,
  }
}

export { useInitialState }