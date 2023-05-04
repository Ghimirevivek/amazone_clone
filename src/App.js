import React, { Suspense, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles/App.css'
import { useStateValue } from './StateProvider'
import { Spinner } from 'react-bootstrap'
const Header = React.lazy(() => import('./component/Header'))
const Checkout = React.lazy(() => import('./component/Checkout'))
const Home = React.lazy(() => import('./component/Home'))
const Login = React.lazy(() => import('./component/Login'))
const Productsid = React.lazy(() => import('./component/Productsid'))
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
      <Suspense
        fallback={
          <Spinner
            style={{
              position: 'absolute',
              top: '49%',
              left: '49%',
            }}
          />
        }
      >
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
      </Suspense>
    </>
  )
}
export default App
