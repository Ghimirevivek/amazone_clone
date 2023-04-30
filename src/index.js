import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import StateProvider from './StateProvider'
import Reducer, { initialState } from './Reducer'
import PaginationProvider from './PaginationContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <PaginationProvider>
      <StateProvider reducer={Reducer} initialstate={initialState}>
        <App />
      </StateProvider>
    </PaginationProvider>
  </BrowserRouter>
)
