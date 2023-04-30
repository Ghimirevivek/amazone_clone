import { createContext, useContext, useReducer } from 'react'

//creating context
const StateContext = createContext({})

//writing customhook and exporting it
export const useStateValue = () => useContext(StateContext)

//writing default provider

const StateProvider = ({ reducer, initialstate, children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate)
  const values = { state, dispatch }
  return (
    <>
      <StateContext.Provider value={values}>{children}</StateContext.Provider>
    </>
  )
}
export default StateProvider
