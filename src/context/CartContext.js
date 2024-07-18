import React from 'react'

const CartContext = React.createContext({
  // this maintains the cart list
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
})

export default CartContext
