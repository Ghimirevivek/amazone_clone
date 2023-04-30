import React from 'react'
import { useStateValue } from '../StateProvider'
import '../styles/Subtotal.css'
import { getTotal } from '../Reducer'

const Subtotal = () => {
  const { state } = useStateValue()
  const { basket } = state
  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items):{' '}
        <strong>$ {getTotal(basket).toFixed(2)}</strong>
      </p>
      <small className="subtotal_gift">
        <input type="checkbox" />
        This order contains gift
      </small>
      <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal
