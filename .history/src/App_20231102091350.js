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

  // Define arrays of possible values for each field
  const companyOptions = ["Nike", "Adidas", "Reebok", "Puma", "New Balance"];
  const colorOptions = ["white", "black", "blue", "red", "green"];
  const categoryOptions = ["sneakers", "running shoes", "basketball shoes", "casual footwear"];

  // Function to select a random item from an array
  function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  // Functions to generate random company, color, and category
  function randomCompany() {
    return getRandomItem(companyOptions);
  }

  function randomColor() {
    return getRandomItem(colorOptions);
  }

  function randomCategory() {
    return getRandomItem(categoryOptions);
  }

  // Example usage
  const randomData = {
    // Other fields...
    "company": randomCompany(),
    "color": randomColor(),
    "category": randomCategory()
  };


  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
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

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }
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
