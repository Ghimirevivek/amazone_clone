import React, { useEffect, useState } from 'react'
import '../styles/Header.css'
import { Menu, Search } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { ShoppingCart } from '@mui/icons-material'
import { useStateValue } from '../StateProvider'
const Header = () => {
  const { state, dispatch } = useStateValue()
  const { basket, user } = state
  // console.log(state, dispatch)
  const [active, setActive] = useState(true)
  const signOut = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    localStorage.removeItem('basket')
    dispatch({
      type: 'SET_USER',
      user: null,
    })
  }
  useEffect(() => {
    const id = setInterval(() => {
      if (window.innerWidth >= 350) {
        setActive(true)
      } else {
        setActive(false)
      }
    }, 100)

    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <nav className="header">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
          className="header_logo"
        />
      </Link>
      <div className="header_search">
        <input type="text" className="header_input" />
        <Search className="header_searchIcon" />
      </div>
      <div className="header_nav">
        {active && (
          <div className="nav_link_container">
            <Link to={!user && '/login'} className="header_link">
              <div onClick={signOut} className="header_option">
                <span className="header_option_1">
                  Hello <strong>{user}</strong>
                </span>
                <span className="header_option_2">
                  {!user ? 'Sign in' : 'Sign out'}
                </span>
              </div>
            </Link>
            <Link to="/" className="header_link">
              <div className="header_option">
                <span className="header_option_1">Returns</span>
                <span className="header_option_2">& Orders</span>
              </div>
            </Link>
            <Link to="/" className="header_link">
              <div className="header_option">
                <span className="header_option_1">Your</span>
                <span className="header_option_2">Prime</span>
              </div>
            </Link>
          </div>
        )}
        <Link to="/checkout" className="basket_link">
          <div className="header_option_basket">
            <ShoppingCart className="header_basket" />
            <span className="header_basket_count">
              {basket ? basket.length : 0}
            </span>
          </div>
        </Link>

        {!active && <Menu className="navbar_listIcon" />}
      </div>
    </nav>
  )
}

export default Header
