import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import '../styles/ProductId.css'
import Header from './Header'

const Productsid = () => {
  const params = useParams()
  const [data, setData] = useState({})
  const { dispatch } = useStateValue()
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
      .catch((err) => console.log(err))
  }, [params.id])

  const add = () => {
    dispatch({
      type: 'ADD',
      item: {
        id: data.id,
        title: data.title,
        price: data.price,
        rating: data.rating ? data.rating.rate : 0,
        image: data.image,
      },
    })
  }
  const navigate = useNavigate()
  const goBack = () => {
    navigate('/')
  }
  return (
    <>
      <Header />
      <div className="container">
        <div className="product_image">
          <img src={data.image} alt={data.title} />
        </div>
        <div className="product_details">
          <h1>{data.title}</h1>
          <p className="price">$ {data.price}</p>
          <div className="ratings">
            <span className="rating_stars">
              {Array(data.rating ? Math.floor(data.rating.rate) : 0)
                .fill()
                .map((_, i) => (
                  <p key={i}>⭐</p>
                ))}
            </span>
            <span className="rating_value">
              {Math.floor(data.rating?.rate)}.0
            </span>
            <span className="rating_count">({data.rating?.count} ratings)</span>
          </div>
          <div className="product_description">
            <h2>Description</h2>
            <p>{data.description}</p>
          </div>
          <div className="product_action">
            <button onClick={add}>Add to cart</button>
            <button onClick={goBack}>Buy now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Productsid
