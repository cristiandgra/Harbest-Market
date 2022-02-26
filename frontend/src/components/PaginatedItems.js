import React from "react";

export const PaginatedItems = () => {
  return (
    <nav aria-label="Page navigation example" className="pagination-container">
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link">Previous</button>
        </li>
        <li className="page-item">
          <button className="page-link">1</button>
        </li>
        <li className="page-item">
          <button className="page-link">Next</button>
        </li>
      </ul>
    </nav>
  );
};
