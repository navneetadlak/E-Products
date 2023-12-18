import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log("Api response data: ", data);

        if(Array.isArray(data.products)){
            setProducts(data.products);
        }else{
            console.error("API did not return any data: ", data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>Title:</strong> {product.title} <br />
            <strong>Category:</strong> {product.category} <br />
            <strong>Brand:</strong> {product.brand} <br />
            <strong>Description:</strong> {product.description} <br />
            <strong>Price:</strong> ${product.price} <br />
            <strong>Discount Percentage:</strong> {product.discountPercentage}% <br />
            <strong>Rating:</strong> {product.rating} <br />
            <strong>Stock:</strong> {product.stock} <br />
            <strong>Images:</strong>
            <ul>
              {product.images.map((image, index) => (
                <li key={index}>
                  <img src={image} alt={`Product ${index + 1}`} style={{ maxWidth: '300px' }} />
                </li>
              ))}
            </ul>
            <hr></hr>
          </li>
          
        ))}
      </ul>
    </div>
  );
};
export default Products;

