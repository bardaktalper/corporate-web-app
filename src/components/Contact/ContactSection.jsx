// src/components/Contact/ContactSection.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Eklentiyi import ediyoruz
import styles from './Contact.module.scss';

// GSAP'a ScrollTrigger eklentisini kaydediyoruz
gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    // Footer elemanına scroll animasyonu ekliyoruz
    gsap.fromTo(footerRef.current,
      { opacity: 0, y: 50 }, // Başlangıç: görünmez ve biraz aşağıda
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current, // Animasyonu tetikleyecek eleman
          start: "top 85%", // Footer'ın üst kısmı, ekranın %85'ine geldiğinde başlasın
          toggleActions: "play none none reverse" // Aşağı inerken oynat, yukarı çıkarken geri al
        }
      }
    );
  }, []);

  return (
    // Referansı footer etiketine atıyoruz
    <footer className={styles.footer} id="contact" ref={footerRef}>
      <div className={styles.container}>
        
        {/* Sol Taraf: Adres ve İletişim Bilgileri */}
        <div className={styles.infoBox}>
          <h3 className={styles.title}>CONTACT & LOCATION</h3>
          
          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <span className="text-gold">📍</span>
              <p>ÇELEBİLER MAH. TUHAFİYECİLER SİT. 112. CAD. NO:11 K4 D:177 MERKEZ / ISPARTA</p>
            </div>
            <div className={styles.detailItem}>
              <span className="text-gold">📞</span>
              <p>+90 533 300 34 94</p>
            </div>
            <div className={styles.detailItem}>
              <span className="text-gold">✉️</span>
              <p>kemalyildiz1972@gmail.com <br/> info@xmaxgroup.com</p>
            </div>
            <div className={styles.detailItem}>
              <span className="text-gold">🌐</span>
              <p>www.xmaxgroup.com</p>
            </div>
          </div>
        </div>

        {/* Orta Taraf: Sosyal Medya ve Referanslar */}
        <div className={styles.socialBox}>
          <h3 className={styles.title}>CONNECT WITH US</h3>
          <div className={styles.socialLinks}>
            <p><span className="text-gold">📸</span> Instagram: Xmaxgroup</p>
            <p><span className="text-gold">📸</span> Instagram: @izmiryalitim</p>
          </div>
          
          <div className={styles.references}>
            <button className={styles.outlineBtn}>VIEW BIM REFERENCE</button>
          </div>
        </div>

        {/* Sağ Taraf: QR Kod */}
        <div className={styles.qrBox}>
          <div className={styles.qrPlaceholder}>
            <span className={styles.mutedText}>QR KOD</span>
          </div>
          <p className={styles.qrText}>Scan for details</p>
        </div>

      </div>
      
      {/* En Alt: Telif Hakkı ve Kapanış Sloganı */}
      <div className={styles.bottomBar}>
        <p>GLOBAL VISION &bull; STRONG FUTURE</p>
        <small>&copy; {new Date().getFullYear()} XmaX GROUP. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default ContactSection;