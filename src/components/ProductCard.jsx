import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <img
        src={product.image}
        alt={product.title}
        className={styles.image}
      />

      <div className={styles.info}>
        <h3 className={styles.title}>{product.title}</h3>

        <div className={styles.rating}>
          {"⭐".repeat(product.rating)}
          <span className={styles.count}>({product.reviews})</span>
        </div>

        <div className={styles.price}>
          <span className={styles.current}>₹{product.price}</span>
          <span className={styles.old}>₹{product.oldPrice}</span>
        </div>

        <div className={styles.prime}>✔ Prime FREE Delivery</div>

        <button className={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;