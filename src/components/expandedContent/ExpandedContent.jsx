/* eslint-disable react/prop-types */
import "./expandedContent.css";
import Table from "../table/Table";
import data from "../../data";

const ExpandedContent = ({ rowData, isClosing }) => {
  // Берем заголовок (первая строка) и первые две строки данных
  const nestedTableData = [
    data[0], // заголовок
    ...data.slice(4, 6), // первые две строки данных
  ];

  const containsMatch = rowData.some(
    (cell) => typeof cell === "string" && cell.toLowerCase().includes("match")
  );

  const expandedContentStyle = containsMatch
    ? rowData.some(
        (cell) =>
          typeof cell === "string" && cell.toLowerCase().includes("unmatch")
      )
      ? { borderColor: "#fce1e1" }
      : { backgroundColor: "#d9f9e4" }
    : {};

  return (
    <tr className={`expanded-content-row ${isClosing ? "closing" : ""}`}>
      <td
        className="expanded-content"
        colSpan={rowData.length + 1}
        style={expandedContentStyle}
      >
        <div className="content-wrapper">
          <div className="nested-table-container">
            <Table data={nestedTableData} />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ExpandedContent;
