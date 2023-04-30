import React from 'react'
import { useStateValue } from '../StateProvider'
import '../styles/Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
const Checkout = () => {
  const { state } = useStateValue()
  const { basket } = state
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg"
          alt="ad"
        />
        {basket.length === 0 ? (
          <div>
            <h2>Your shopping basket is empty</h2>
            <p>
              You have no items in your basket. To buy one or more items,click
              "Add to basket" next to item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Your shopping basket</h2>
            {basket.map((item, index) => (
              <CheckoutProduct
                key={index}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}
    </div>
  )
}

export default Checkout
