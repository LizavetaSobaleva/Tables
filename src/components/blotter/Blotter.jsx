import "./blotter.css";
import { useDispatch, useSelector } from "react-redux";
import { addToBlotter, selectRow, toggleBlotter } from "../../store";

const Blotter = () => {
  const isBlotterOpen = useSelector((state) => state.isBlotterOpen);
  const blotterData = useSelector((state) => state.blotterData); // Получение данных блоттера из Redux
  const dispatch = useDispatch();

  const handleDrop = (e) => {
    e.preventDefault();
    const row = JSON.parse(e.dataTransfer.getData("text/plain")); // Извлечение данных строки
    dispatch(addToBlotter(row)); // Добавление строки в блоттер
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Разрешение перетаскивания
  };

  return (
    <>
      {!isBlotterOpen ? (
        <div className="blotterBtn" onClick={() => dispatch(toggleBlotter())}>
          Blotter
        </div>
      ) : (
        <div
          className="blotter"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div className="blotter_header">
            Blotter
            <div
              className="hideBtn"
              onClick={() => dispatch(toggleBlotter())}
            ></div>
          </div>
          <div className="blotter_content">
            <table>
              <thead></thead>
              <tbody>
                {blotterData.map((row, index) => (
                  <tr
                    key={index}
                    onClick={() => dispatch(selectRow(row))} // Обработка клика по строке блоттера
                  >
                    {row.map((cell, i) => (
                      <td key={i}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Blotter;
