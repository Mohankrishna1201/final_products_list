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
import ProductCard from "./components/ProductCard";
import Pagination from "./components/Pagination";





function App() {

  //------toggling sidebar
  const [open, setOpen] = useState(false);


  const handleClick1 = () => {
    setOpen(!open);
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

  // ------------ pagination -----------

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);


  const posts = filteredData(products, selectedCategory, query);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const result = posts.slice(firstPostIndex, lastPostIndex);
  return (
    <>

      <SideBar handleChange={handleChange} open={open} />
      <NavBar query={query} handleInputChange={handleInputChange} click={handleClick1} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
      <Pagination totalPosts={posts.length} postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage} />
    </>
    //<ProductCard />

  );
}

export default App;
