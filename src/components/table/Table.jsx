/* eslint-disable react/prop-types */
import TableRow from "./tableRow/TableRow";
import "./table.css";
import { useDispatch, useSelector } from "react-redux";
import { selectRow } from "../../store";

const Table = ({ data }) => {
  const isBlotterOpen = useSelector((state) => state.isBlotterOpen);
  const selectedRow = useSelector((state) => state.selectedRow); // Получение выбранной строки из состояния
  const dispatch = useDispatch();

  const handleDragStart = (e, row) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(row)); // Передача данных строки
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
              onDragStart={(e) => handleDragStart(e, row)} // Устанавливаем обработчик dragstart
              onClick={() => dispatch(selectRow(row))} // Обрабатываем выбор строки
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
    </div>
  );
};

export default Table;
