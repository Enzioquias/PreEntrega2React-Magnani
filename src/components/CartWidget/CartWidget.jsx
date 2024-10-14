import React from 'react'
import cart from './assets/cart.svg'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='CartWidget'>
      <img style={{height:"5vh", width:"5vw" }} src={cart} alt="cart" />
      <br />
      0
    </div>
  )
}

export default CartWidget
