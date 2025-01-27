/* eslint-disable react/prop-types */
import { useState } from "react";
import "./tableRow.css";
import ExpandedContent from "../../expandedContent/ExpandedContent";

const TableRow = ({ rowData, isHeader, onDragStart, onClick, isSelected }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const Tag = isHeader ? "th" : "td";

  const toggleExpand = (e) => {
    e.stopPropagation();

    if (isExpanded) {
      setIsClosing(true);
      setTimeout(() => {
        setIsExpanded(false);
        setIsClosing(false);
      }, 200); // Длительность анимации
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <>
      <tr
        draggable={!isHeader}
        onDragStart={onDragStart}
        onClick={onClick}
        className={`${isSelected ? "selected-row" : ""} ${
          isExpanded ? "expanded-row" : ""
        }`}
      >
        {!isHeader ? (
          <td className="expand-cell">
            <button onClick={toggleExpand} className="expand-button">
              <span className={`expand-icon ${isExpanded ? "expanded" : ""}`}>
                {isExpanded ? "-" : "+"}
              </span>
            </button>
          </td>
        ) : (
          <th className="expand-header"></th>
        )}

        {rowData.map((cell, index) => (
          <Tag key={index}>{cell}</Tag>
        ))}
      </tr>
      {isExpanded && (
        <ExpandedContent rowData={rowData} isClosing={isClosing} />
      )}
    </>
  );
};

export default TableRow;
