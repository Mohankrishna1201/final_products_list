import NavBar from "./Nav/NavBar";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended"
import Category from "./SideBar/Category/Category";
import Colors from "./SideBar/Colors/Colors";
import Price from "./SideBar/Price/Price";
import "./App.css"
import SideBar from "./SideBar/SideBar";

function App() {
  return (
    <>
      <SideBar />
      <NavBar />
      <Recommended />
      <Products />

      <Colors />
      <Price />
      <Category />

    </>
  );
}

export default App;
