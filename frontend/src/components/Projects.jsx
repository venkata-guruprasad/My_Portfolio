// src/components/Projects.jsx
import styles from "../styles/Projects.module.css";
import project1 from "../assets/project1.jpg";

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <img src={project1} alt="Project" />
          <h3>Shopeasy</h3>
          <p>E-commerce website built with React and Node.js</p>
          <a href="https://github.com/venkata-guruprasad/E-Commerce-FullStack" target="_blank">GitHub</a>
          <a href="https://e-commerce-fullstack-frontend-yzyo.onrender.com/" target="_blank">Live Demo</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
