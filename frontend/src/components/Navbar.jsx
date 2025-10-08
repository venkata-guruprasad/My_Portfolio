// src/components/Navbar.jsx
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>MyPortfolio</h2>
      <ul className={styles.menu}>
        <li><a href="#home">Home</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
