import { Outlet } from "react-router-dom";
import Header from "./Components/Header"
import Dropdown from "./Components/Dropdown";

function App() {
  return (
    <div className="App">
      <Header/>
      <Dropdown/>
      <Outlet/>
    </div>
  );
}

export default App;
