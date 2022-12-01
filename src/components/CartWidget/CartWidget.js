import React from 'react'
import "./cart.css"

const CartWidget = () => {
  return (
    <div>
        <i className ="bi bi-cart3"></i>
      <span className=" cart-counter position-absolute bg-white text-center text-danger translate-middle h5 ">
        7
      </span>
    </div>
  )
}

export default CartWidget