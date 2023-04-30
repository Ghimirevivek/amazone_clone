import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './component/Header'
import './styles/App.css'
import Home from './component/Home'
import Checkout from './component/Checkout'
import Login from './component/Login'
import Productsid from './component/Productsid'
import { useStateValue } from './StateProvider'
const App = () => {
  const { dispatch } = useStateValue()
  // load saved basket from local storage
  useEffect(() => {
    const savedBasket = localStorage.getItem('basket')
    if (savedBasket) {
      dispatch({ type: 'SET_BASKET', basket: JSON.parse(savedBasket) })
    }
  }, [dispatch])
  useEffect(() => {
    if (localStorage.getItem('email') !== null) {
      const userName = localStorage.getItem('email')
      const index = userName.indexOf('@')
      const extractName = userName.slice(0, index)
      dispatch({
        type: 'SET_USER',
        user: `${extractName}`,
      })
    }
  }, [dispatch])

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<Productsid />} />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
      </Routes>
    </>
  )
}
export default App
