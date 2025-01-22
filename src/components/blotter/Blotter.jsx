import { useState } from "react";
import "./blotter.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBlotter,
  selectRow,
  toggleBlotter,
  removeFromBlotter,
} from "../../store";

const Blotter = () => {
  const isBlotterOpen = useSelector((state) => state.isBlotterOpen);
  const blotterData = useSelector((state) => state.blotterData);
  const dispatch = useDispatch();

  const [contextMenu, setContextMenu] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const row = JSON.parse(e.dataTransfer.getData("text/plain"));
    dispatch(addToBlotter(row));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleContextMenu = (e, rowIndex) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY, rowIndex });
  };

  const handleDelete = (rowIndex) => {
    dispatch(removeFromBlotter(rowIndex));
    setContextMenu(null);
  };

  const handleCloseContextMenu = () => {
    setContextMenu(null);
  };

  return (
    <>
      {!isBlotterOpen ? (
        <div
          className={`blotterButton ${isBlotterOpen ? "blotter-open" : ""}`}
          onClick={() => dispatch(toggleBlotter())}
        >
          <div className="blotterTitle">Blotter</div>
        </div>
      ) : (
        <div
          className={`blotter ${isBlotterOpen ? "blotterOpen" : ""}`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={handleCloseContextMenu}
        >
          <div className="blotterHeader">
            <div className="blotterTitle">Blotter</div>
            <div
              className="hideButton"
              onClick={() => dispatch(toggleBlotter())}
            >
              _
            </div>
          </div>
          <div className="blotterContent">
            <table>
              <thead></thead>
              <tbody>
                {blotterData.map((row, index) => (
                  <tr
                    key={index}
                    onContextMenu={(e) => handleContextMenu(e, index)}
                    onClick={() => dispatch(selectRow(row))}
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
          </div>

          {contextMenu && (
            <div
              className="contextMenu"
              style={{ top: contextMenu.y, left: contextMenu.x }}
            >
              <button onClick={() => handleDelete(contextMenu.rowIndex)}>
                Delete
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Blotter;
