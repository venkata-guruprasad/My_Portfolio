// src/components/Resume.jsx
import styles from "../styles/Resume.module.css";
import resumePDF from "../assets/Venkata Guru Prasad Kalluri_Full Stack Developer.pdf";

function Resume() {
  return (
    <section id="resume" className={styles.resume}>
      <h2>My Resume</h2>
      <p>Download my resume and explore my skills.</p>
      <a href={resumePDF} download className={styles.btn}>Download Resume</a>
      <div className={styles.skills}>
        <span>HTML5</span><span>CSS3</span><span>JavaScript</span><span>React</span><span>Node.js</span><span>Java</span><span>Python</span>
      </div>
    </section>
  );
}

export default Resume;
