import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Wireless Bluetooth Headphones",
    price: 1999,
    oldPrice: 2999,
    rating: 4,
    reviews: 1200,
    image: "https://via.placeholder.com/200"
  },
  {
    id: 2,
    title: "Smart Watch with Heart Rate Monitor",
    price: 2499,
    oldPrice: 3999,
    rating: 5,
    reviews: 800,
    image: "https://via.placeholder.com/200"
  }
];

const ProductList = () => {
  return (
    <div style={gridStyle}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gap: "20px",
  padding: "20px"
};

export default ProductList;