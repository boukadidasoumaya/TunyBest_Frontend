import React from "react";
import "./PaginatedItems.css"
const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <a
            className="page-link"
            href="#"
            onClick={() => paginate(currentPage - 1)}
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <a
              className="page-link"
              href="#"
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === Math.ceil(totalItems / itemsPerPage)
              ? "disabled"
              : ""
          }`}
        >
          <a
            className="page-link"
            href="#"
            onClick={() => paginate(currentPage + 1)}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
