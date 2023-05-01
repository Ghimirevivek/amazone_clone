import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Login.css'
import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
const Login = () => {
  const { dispatch } = useStateValue()
  const [id, setId] = useState({
    email: '',
    password: '',
  })
  // console.log(id.email, id.password)
  const navigate = useNavigate()
  const signInevent = (e) => {
    e.preventDefault()
    if (
      localStorage.getItem('email') !== null &&
      localStorage.getItem('password') !== null
    ) {
      navigate('/')
    } else if (id.email === 'admin' && id.password === 'admin') {
      localStorage.setItem('email', id.email)
      localStorage.setItem('password', id.password)
      const userName = localStorage.getItem('email')
      const index = userName.indexOf('@')
      const extractName = userName.slice(0, index)
      dispatch({
        type: 'SET_USER',
        user: `${extractName}`,
      })
      navigate('/')
    } else {
      alert('You need to register first')
    }
  }

  const registerEvent = (e) => {
    e.preventDefault()
    localStorage.setItem('email', id.email)
    localStorage.setItem('password', id.password)
    const userName = localStorage.getItem('email')
    const index = userName.indexOf('@')
    const extractName = userName.slice(0, index)
    dispatch({
      type: 'SET_USER',
      user: `${extractName}`,
    })
    navigate('/')
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
          alt="logo"
          className="login_image"
        />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setId({ ...id, email: e.target.value })}
            value={id.email}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setId({ ...id, password: e.target.value })}
            value={id.password}
          />

          <button className="login_signin_btn" onClick={signInevent}>
            Sign in
          </button>
        </form>
        <p>
          By signing-in you aggree to the terms and conditions of use and sale.
          Please see our privacy notice, our cookies notice and our
          intrest-based ads notice.
        </p>
        <button className="login_register_btn" onClick={registerEvent}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  )
}

export default Login
