import React from "react";
import styles from "./navbar.module.css";
import {Link} from 'react-router-dom';

function navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.ul}>
        <li className={styles.li}><Link to="/" className={styles.a}>Home</Link></li>
        <li className={styles.li}><Link to="/products" className={styles.a}>Products</Link></li>
        <li className={styles.li}><Link to="/products/categories" className={styles.a}>Product Categories</Link></li>
      </ul>
    </nav>
    )
}

export default navbar;
