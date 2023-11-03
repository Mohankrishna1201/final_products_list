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
import Card from "./components/Card";
import data from "./db/data";
function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);

  //INPUT FILTER

  const [query, setQuery] = useState("");

  const handleInputChange = event => {

    setQuery(event.target.value)
  }

  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1));

  // radiofilter (to select that value)

  const handleChange = event => {
    setSelectedCategory(event.target.value);
  }

  // Buttons filter

  const handleClick = event => {

    setSelectedCategory(event.target.value)
  }


  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }

    // selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice }) => {
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />


    });
  };

  const result = filteredData(products, selectedCategory, query);
  return (
    <>
      <SideBar handleChange={handleChange} />
      <NavBar query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />


    </>
  );
}

export default App;
