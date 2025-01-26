import "./App.css";
import Blotter from "./components/blotter/Blotter";
import Sidebar from "./components/sidebar/Sidebar";

import TablePage from "./components/TablePage/TablePage";
import data from "./data";

function App() {
  return (
    <>
      <Sidebar />
      <TablePage data={data} />
      <Blotter />
    </>
  );
}

export default App;
