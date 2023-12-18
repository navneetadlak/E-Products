import React, { useState, useEffect } from "react";

const ProductCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories"
        );
        const categoryData = await response.json();
        console.log("Api response data: ", categoryData);

        if (Array.isArray(categoryData)) {
          setCategories(categoryData);
        } else {
          console.error("API did not return any data: ", categoryData);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Products Categories</h1>
      {categories.map((category) => (
        <li key={category}>{category}</li>
      ))}
    </div>
  );
  
};

export default ProductCategories;
