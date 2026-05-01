import styles from './Skills.module.css';

const skillCategories = [
  {
    title: "Front-End",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3 / SCSS", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 90 },
    ]
  },
  {
    title: "WordPress",
    skills: [
      { name: "Custom Theme Dev", level: 95 },
      { name: "ACF / CPT", level: 90 },
      { name: "Elementor", level: 85 },
      { name: "Performance Opt", level: 80 },
    ]
  },
  {
    title: "Modern Stack",
    skills: [
      { name: "React", level: 70 },
      { name: "Next.js", level: 65 },
      { name: "Git & GitHub", level: 80 },
      { name: "Vercel", level: 75 },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.section}`}>
      <div className="container">
        <h2 className="section-title reveal">My <span>Skills</span></h2>
        
        <div className={styles.grid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={`${styles.categoryCard} reveal`} style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill, sIndex) => (
                  <div key={sIndex} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillNumber}>{skill.level}%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div 
                        className={styles.progressFill} 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
