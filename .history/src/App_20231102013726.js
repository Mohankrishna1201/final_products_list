import NavBar from "./Nav/NavBar";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended"
import Category from "./SideBar/Category/Category";
import Colors from "./SideBar/Colors/Colors";
import Price from "./SideBar/Price/Price";
import "./App.css"
import SideBar from "./SideBar/SideBar";
import { useState } from "react";
import products from "./db/data"

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);

  //INPUT FILTER

  const [query, setQuery] = useState("");

  const handleInputChange = event => {

    setQuery(event.target.value)
  }

  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1));


  return (
    <>
      <SideBar />
      <NavBar />
      <Recommended />
      <Products />


    </>
  );
}

export default App;
