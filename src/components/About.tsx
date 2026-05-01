import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title reveal">About <span>Me</span></h2>
        
        <div className={styles.grid}>
          <div className={`${styles.textContent} reveal`}>
            <p>
              I am a passionate <strong>Front-end Developer</strong> based in Karachi, Pakistan, with over <strong>5 years of experience</strong> shaping the digital web. 
            </p>
            <p>
              My journey started with a deep dive into WordPress custom development, mastering theme creation, ACF, CPTs, and converting complex Figma designs into pixel-perfect, dynamic WordPress templates. 
            </p>
            <p>
              Recognizing the shift toward modern, component-driven architectures, I am actively transitioning into Next.js and the React ecosystem. I combine my extensive background in responsive UI and optimization with modern JavaScript frameworks to build high-performance, scalable web applications.
            </p>
            
            <div className={styles.stats}>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Projects Delivered</span>
              </div>
            </div>
          </div>
          
          <div className={`${styles.expertise} reveal`}>
            <h3>Key Expertise</h3>
            <ul className={styles.expertiseList}>
              <li>
                <span className={styles.bullet}></span>
                <strong>WordPress Custom Themes</strong> - Built from scratch
              </li>
              <li>
                <span className={styles.bullet}></span>
                <strong>ACF & Custom Post Types</strong> - Dynamic content architecture
              </li>
              <li>
                <span className={styles.bullet}></span>
                <strong>Figma to UI</strong> - Pixel-perfect, semantic HTML/CSS
              </li>
              <li>
                <span className={styles.bullet}></span>
                <strong>Modern Stack Transition</strong> - React & Next.js integration
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
