import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/Home";
import MenuNav from "./components/commons/MenuNav";
import FooterMenu from "./components/commons/FooterMenu";

function App() {
  return (
    <>
      <div className="App">
        <MenuNav></MenuNav>
        <Home></Home>
        <FooterMenu></FooterMenu>
      </div>
    </>
  );
}

export default App;
