import { Code2, LayoutTemplate, MonitorSmartphone, Zap } from 'lucide-react';
import styles from './Services.module.css';

const services = [
  {
    icon: <LayoutTemplate size={32} />,
    title: 'WordPress Custom Dev',
    description: 'Bespoke WordPress theme and plugin development tailored to your exact business needs using ACF and Custom Post Types.'
  },
  {
    icon: <MonitorSmartphone size={32} />,
    title: 'Front-end Development',
    description: 'Converting complex Figma, XD, or PSD designs into pixel-perfect, responsive HTML, CSS, and interactive UI interfaces.'
  },
  {
    icon: <Code2 size={32} />,
    title: 'Next.js Applications',
    description: 'Building blazing fast, SEO-optimized web applications utilizing modern React and the Next.js App Router ecosystem.'
  },
  {
    icon: <Zap size={32} />,
    title: 'Speed Optimization',
    description: 'Auditing and optimizing existing websites to achieve perfect Core Web Vitals and lightning-fast load times.'
  }
];

export default function Services() {
  return (
    <section id="services" className={`section ${styles.section}`}>
      <div className="container">
        <h2 className="section-title reveal">My <span>Services</span></h2>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={`${styles.serviceCard} reveal`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.desc}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
