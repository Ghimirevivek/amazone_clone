import React, { useState } from 'react'
import '../styles/CheckoutProduct.css'
import { useStateValue } from '../StateProvider'
import { Link } from 'react-router-dom'
const CheckoutProduct = ({ id, title, price, rating, image }) => {
  const { dispatch } = useStateValue()
  const [count, setCount] = useState(1)
  const removeBasket = () => {
    dispatch({
      type: 'REMOVE',
      id,
    })
  }
  //console.log(id)
  return (
    <div className="checkoutProduct">
      <Link to={`/${id}`} className="checkout_link">
        <img src={image} alt="ProductImage" className="checkoutProduct_image" />
      </Link>
      <div className="checkoutProduct_info">
        <Link to={`/${id}`} className="checkout_link">
          <p className="checkoutProduct_title">{title}</p>
        </Link>
        <p className="checkoutProduct_price">
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(Math.ceil(rating))
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <div className="checkoutProduct_count">
          <button
            disabled={count <= 0}
            onClick={() => setCount((prev) => prev - 1)}
          >
            -
          </button>
          <span>{count}</span>
          <button
            disabled={count >= 10}
            onClick={() => setCount((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <button onClick={removeBasket}>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
