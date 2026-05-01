"use client";

import { Mail, Phone, Send } from 'lucide-react';
import styles from './Contact.module.css';

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("This is a demo contact form. In a real environment, it would send an email!");
  };

  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className="container">
        <h2 className="section-title reveal">Get In <span>Touch</span></h2>
        
        <div className={styles.grid}>
          <div className={`${styles.contactInfo} reveal`}>
            <h3>Let's build something great together.</h3>
            <p className={styles.subtitle}>
              I'm always open to discussing web development work or partnership opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className={styles.infoItems}>
              <a href="mailto:ssumair04@gmail.com" className={styles.item}>
                <div className={styles.iconBox}><Mail size={24} /></div>
                <div>
                  <span className={styles.label}>Email</span>
                  <span className={styles.value}>ssumair04@gmail.com</span>
                </div>
              </a>
              
              <a href="tel:+923233283742" className={styles.item}>
                <div className={styles.iconBox}><Phone size={24} /></div>
                <div>
                  <span className={styles.label}>Phone</span>
                  <span className={styles.value}>+92-323-3283742</span>
                </div>
              </a>
              
              <a href="https://linkedin.com/in/sumairgulzar" target="_blank" rel="noopener noreferrer" className={styles.item}>
                <div className={styles.iconBox}><LinkedinIcon /></div>
                <div>
                  <span className={styles.label}>LinkedIn</span>
                  <span className={styles.value}>Connect with me</span>
                </div>
              </a>
            </div>
          </div>

          <form className={`${styles.form} reveal`} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required placeholder="John Doe" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required placeholder="john@example.com" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" required rows={5} placeholder="Tell me about your project..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
