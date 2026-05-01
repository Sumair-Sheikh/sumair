"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import styles from './Projects.module.css';

const projectsData = [
  {
    id: 1,
    title: 'Companion Labs',
    category: 'wordpress',
    image: '/images/companion_labs.png',
    tech: ['WordPress', 'Custom Theme', 'ACF'],
    description: 'A modern SaaS website built with custom WordPress architecture focusing on speed and intuitive layout.',
    link: 'https://companionlabs.co/'
  },
  {
    id: 2,
    title: 'Identity Trust DNA',
    category: 'wordpress',
    image: '/images/identity_trust.png',
    tech: ['WordPress', 'Performance', 'UI'],
    description: 'Corporate website designed with high-end enterprise aesthetics and robust custom post types.',
    link: 'https://identitytrustdna.com/'
  },
  {
    id: 3,
    title: 'Remembrance',
    category: 'wordpress',
    image: '/images/remembrance.png',
    tech: ['WordPress', 'Elementor', 'CSS3'],
    description: 'A beautiful, ethereal memorial tribute platform focusing on elegant typography and soft UI.',
    link: 'https://remembrance.love/'
  },
  {
    id: 4,
    title: 'Pilates Nosara',
    category: 'wordpress',
    image: '/images/pilates_nosara.png',
    tech: ['WordPress', 'Custom Dev', 'Booking'],
    description: 'Vibrant and fully responsive site for a Pilates studio, prioritizing visual imagery and smooth navigation.',
    link: 'https://pilatesnosara.com/'
  },
  {
    id: 5,
    title: 'Luxury Vending Solutions',
    category: 'nextjs',
    image: '/images/luxury_vending.png',
    tech: ['Next.js', 'React', 'Tailwind'],
    description: 'High-performance modern web app offering a premium feel for high-end office environments.',
    link: 'https://luxuryvendingsolutions.com/'
  },
  {
    id: 6,
    title: 'Lighthouse Services',
    category: 'nextjs',
    image: '/images/lighthouse_services.png',
    tech: ['Next.js', 'React', 'Vercel'],
    description: 'Fast, corporate web profile built with Next.js App Router for optimal SEO and Core Web Vitals.',
    link: 'https://lighthouse-website.vercel.app/'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title reveal">Featured <span>Projects</span></h2>
        
        <div className={`${styles.filterContainer} reveal`}>
          <button 
            className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
            onClick={() => setFilter('all')}
          >
            All Works
          </button>
          <button 
            className={`${styles.filterBtn} ${filter === 'wordpress' ? styles.active : ''}`}
            onClick={() => setFilter('wordpress')}
          >
            WordPress
          </button>
          <button 
            className={`${styles.filterBtn} ${filter === 'nextjs' ? styles.active : ''}`}
            onClick={() => setFilter('nextjs')}
          >
            Next.js
          </button>
        </div>

        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={`${styles.projectCard} reveal`}>
              <div className={styles.imageContainer}>
                {/* Fallback pattern in case image is completely broken, but next/image handles optimization */}
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  style={{ objectFit: 'cover' }}
                  className={styles.image}
                  unoptimized // since we just dropped in the files locally without proper sizes for demo
                />
                <div className={styles.overlay}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.viewLink}>
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.techTags}>
                  {project.tech.map((tag, index) => (
                    <span key={index} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
