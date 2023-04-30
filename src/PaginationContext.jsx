import { createContext, useContext, useState } from 'react'

const PaginationContext = createContext({})

export const usePagination = () => useContext(PaginationContext)

const PaginationProvider = ({ children }) => {
  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const lastItemIndex = currentPage * itemsPerPage
  const firstItemIndex = lastItemIndex - itemsPerPage
  const values = {
    itemsPerPage,
    currentPage,
    setCurrentPage,
    firstItemIndex,
    lastItemIndex,
  }
  return (
    <PaginationContext.Provider value={values}>
      {children}
    </PaginationContext.Provider>
  )
}
export default PaginationProvider
