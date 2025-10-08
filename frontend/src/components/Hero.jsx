// src/components/Hero.jsx
import styles from "../styles/Hero.module.css";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.text}>
        <h1>Hello, I'm <span>Venkata Guru Prasad Kalluri</span></h1>
        <p>Aspiring Fullstack Developer | React.js | Node.js</p>
        <a href="#projects" className={styles.btn}>View My Work</a>
      </div>
      <img src={profile} alt="Profile" className={styles.image} />
    </section>
  );
}

export default Hero;
