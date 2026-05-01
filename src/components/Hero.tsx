"use client";

import { useEffect, useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "I build high-performance, scalable websites using WordPress and modern front-end technologies.";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 40); // Typewriter speed

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.backgroundGlow}></div>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <span className={styles.greeting}>Hi, I'm</span>
          <h1 className={styles.name}>
            Sumair <span>Gulzar</span>
          </h1>
          <h2 className={styles.role}>
            Front-end Developer | WordPress Expert | Next.js Developer
          </h2>
          <p className={styles.intro}>
            {text}
            <span className={`${styles.cursor} ${isTypingComplete ? styles.blink : ''}`}>|</span>
          </p>

          <div className={styles.ctaGroup}>
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
