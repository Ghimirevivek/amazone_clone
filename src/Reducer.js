export const initialState = {
  basket: [],
  user: null,
}
export const getTotal = (basket) => {
  return basket.reduce((amount, item) => item.price + amount, 0)
}
const Reducer = (state, action) => {
  //   console.log(action)
  switch (action.type) {
    case 'ADD':
      const updatedBasket = [...state.basket, action.item]
      localStorage.setItem('basket', JSON.stringify(updatedBasket))
      return { ...state, basket: updatedBasket }
    case 'REMOVE':
      const index = state.basket.findIndex((item) => item.id === action.id)
      const newBasket = [...state.basket]
      newBasket.splice(index, 1)
      localStorage.setItem('basket', JSON.stringify(newBasket))
      //const newBasket = state.basket.filter((item) => item.id !== action.id)
      return { ...state, basket: newBasket }
    case 'SET_USER':
      return { ...state, user: action.user }
    case 'SET_BASKET':
      return { ...state, basket: action.basket }
    default:
      return state
  }
}
export default Reducer
