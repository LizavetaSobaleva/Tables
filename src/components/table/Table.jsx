/* eslint-disable react/prop-types */
import TableRow from "./tableRow/TableRow";
import "./table.css";
import { useDispatch, useSelector } from "react-redux";
import { selectRow, addToBlotter } from "../../store";
import { useState } from "react";

const Table = ({ data }) => {
  const isBlotterOpen = useSelector((state) => state.isBlotterOpen);
  const selectedRow = useSelector((state) => state.selectedRow);
  const dispatch = useDispatch();
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
    row: null,
  });

  const handleDragStart = (e, row) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(row));
  };

  const handleContextMenu = (e, row) => {
    e.preventDefault();
    setContextMenu({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      row,
    });
  };

  const handleCopyToBlotter = () => {
    if (contextMenu.row) {
      dispatch(addToBlotter(contextMenu.row));
    }
    setContextMenu({ ...contextMenu, visible: false });
  };

  const handleCloseContextMenu = () => {
    setContextMenu({ ...contextMenu, visible: false });
  };

  return (
    <div
      className={`table-container ${isBlotterOpen ? "blotterOpen" : ""}`}
      onClick={handleCloseContextMenu}
    >
      <table>
        <thead>
          <TableRow rowData={data[0]} isHeader />
        </thead>
        <tbody>
          {data.slice(1).map((row, index) => (
            <tr
              key={index}
              draggable
              onDragStart={(e) => handleDragStart(e, row)}
              onClick={() => dispatch(selectRow(row))}
              onContextMenu={(e) => handleContextMenu(e, row)}
              className={selectedRow === row ? "selected-row" : ""}
            >
              {row.map((cell, i) => (
                <td
                  key={i}
                  className={i === row.length - 1 ? "fixed-column" : ""}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {contextMenu.visible && (
        <div
          className="context-menu"
          style={{ top: contextMenu.y, left: contextMenu.x }}
        >
          <button onClick={handleCopyToBlotter}>Add to Blotter</button>
        </div>
      )}
    </div>
  );
};

export default Table;
