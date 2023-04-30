import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import '../styles/Product.css'
const Products = ({ id, title, price, rating, image }) => {
  const { dispatch } = useStateValue()

  const addToBasket = () => {
    dispatch({
      type: 'ADD',
      item: {
        id,
        title,
        price,
        rating,
        image,
      },
    })
  }

  return (
    <>
      <Link to={`/${id}`} className="product">
        <div className="product_info">
          <p className="product_title">{title}</p>
          <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product_rating">
            {Array(Math.ceil(rating))
              .fill()
              .map((_, i) => (
                <p key={i}>⭐</p>
              ))}
          </div>
        </div>
        <img src={image} alt="product" />
      </Link>
      <button className="product_btn" onClick={addToBasket}>
        Add to basket
      </button>
    </>
  )
}

export default Products
