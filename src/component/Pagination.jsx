import React from 'react'
import { usePagination } from '../PaginationContext'
import '../styles/Pagination.css'

const Pagination = (props) => {
  const { itemsPerPage, setCurrentPage, currentPage } = usePagination()
  const { totalItems } = props
  const maxPage = Math.ceil(totalItems / itemsPerPage)
  return (
    <div className="pagination_container">
      <button
        className="pagination_button"
        onClick={() => setCurrentPage((prev) => prev - 1)}
        disabled={currentPage <= 1}
      >
        Prev
      </button>
      <span className="pagination_page">{currentPage}</span>
      <button
        className="pagination_button"
        onClick={() => setCurrentPage((prev) => prev + 1)}
        disabled={currentPage >= maxPage}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
