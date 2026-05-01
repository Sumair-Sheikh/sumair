import { Briefcase, Calendar } from 'lucide-react';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title reveal">Professional <span>Experience</span></h2>
        
        <div className={styles.timeline}>
          {/* Main Experience Node */}
          <div className={`${styles.timelineItem} reveal`}>
            <div className={styles.timelineDot}>
              <Briefcase size={20} />
            </div>
            <div className={styles.timelineContent}>
              <div className={styles.header}>
                <h3 className={styles.role}>Front-end & WordPress Developer</h3>
                <span className={styles.company}>Koderlabs</span>
              </div>
              <div className={styles.date}>
                <Calendar size={16} /> <span>2019 - Present (5+ Years)</span>
              </div>
              <p className={styles.desc}>
                Spearheaded the front-end development and WordPress implementation for over 50+ diverse client projects. 
                Focusing heavily on robust custom UI development, seamless user experiences, and dynamic data integration.
              </p>
              <ul className={styles.responsibilities}>
                <li>Developed complex custom WordPress themes from scratch using ACF, custom post types, and tailored taxonomies.</li>
                <li>Faithfully translated high-fidelity Figma, XD, and PSD designs into fully responsive, interactive web interfaces.</li>
                <li>Collaborated with cross-functional teams to integrate APIs, optimize Core Web Vitals, and ensure accessibility standards.</li>
                <li>Initiated the department's transition toward component-driven architecture and Next.js for high-performance marketing sites.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
