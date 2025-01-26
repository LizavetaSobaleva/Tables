/* eslint-disable react/prop-types */
import TableRow from "./tableRow/TableRow";
import "./table.css";
import { useDispatch, useSelector } from "react-redux";
import { selectRow } from "../../store";

const Table = ({ data }) => {
  const isBlotterOpen = useSelector((state) => state.isBlotterOpen);
  const selectedRow = useSelector((state) => state.selectedRow);
  const dispatch = useDispatch();

  const handleDragStart = (e, row) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(row));
  };

  return (
    <div className={`table-container ${isBlotterOpen ? "blotterOpen" : ""}`}>
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
              className={selectedRow === row ? "selected-row" : ""}
            >
              {row.map((cell, i) => (
                <td key={i}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
