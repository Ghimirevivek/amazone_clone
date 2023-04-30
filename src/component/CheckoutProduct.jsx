import React from 'react'
import '../styles/CheckoutProduct.css'
import { useStateValue } from '../StateProvider'
const CheckoutProduct = ({ id, title, price, rating, image }) => {
  const { dispatch } = useStateValue()
  const removeBasket = () => {
    dispatch({
      type: 'REMOVE',
      id,
    })
  }
  return (
    <div className="checkoutProduct">
      <img src={image} alt="ProductImage" className="checkoutProduct_image" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
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
        <button onClick={removeBasket}>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
