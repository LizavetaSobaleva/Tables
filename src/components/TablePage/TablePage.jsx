/* eslint-disable react/prop-types */

import { useState } from "react";
import Table from "../table/Table";
import Pagination from "../pagination/Pagination";
import "./tablePage.css";

const TablePage = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil((data.length - 1) / rowsPerPage);

  const handleRowsPerPageChange = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1);
  };

  return (
    <div className="table-page">
      <div className="header">
        <div className="title">Title</div>
        <div className="actions">
          <button className="action-button">Action 1</button>
          <button className="action-button">Action 2</button>
          <button className="action-button">Action 3</button>
        </div>
      </div>

      <Table data={currentData} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        rowsPerPage={rowsPerPage}
        onPageChange={setCurrentPage}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </div>
  );
};

export default TablePage;
