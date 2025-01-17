import "./App.css";
import Blotter from "./components/blotter/Blotter";
import Navbar from "./components/Navbar/Navbar";
import Table from "./components/table/Table";
import data from "./data";

function App() {
  return (
    <>
      <Navbar />
      <Table data={data} />
      <Blotter />
    </>
  );
}

export default App;
