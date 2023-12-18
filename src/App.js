import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import Homepage from "./Components/Homepage/homepage";
import Products from "./Components/Products/products";
import ProductCategories from "./Components/ProductCategories/ProductCategories";
import ProductCategory from "./Components/ProductCategory/productCategory";
import ProductDetail from "./Components/ProductDetail/productDetail";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/categories" element={<ProductCategories />} />
          <Route
            path="/products/category/:category_name"
            element={<ProductCategory />}
          />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
