import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/Home";
import MenuNav from "./components/commons/MenuNav";

function App() {
  return (
    <>
      <div className="App">
        <MenuNav></MenuNav>
        <Home></Home>
      </div>
    </>
  );
}

export default App;
