/* eslint-disable react/prop-types */
import "./tableRow.css";

const TableRow = ({ rowData, isHeader }) => {
  const Tag = isHeader ? "th" : "td"; // Используем th для заголовков, td для данных

  return (
    <tr>
      {rowData.map((cell, index) => (
        <Tag
          key={index}
          className={index === rowData.length - 1 ? "fixed-column" : ""}
        >
          {cell}
        </Tag>
      ))}
    </tr>
  );
};

export default TableRow;
