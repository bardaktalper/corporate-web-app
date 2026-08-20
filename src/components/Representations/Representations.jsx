// src/components/Representations/Representations.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Representations.module.scss';

gsap.registerPlugin(ScrollTrigger);

const Representations = () => {
  const sectionRef = useRef(null);

  // Müşterinin listesindeki şehirler
  const cities = [
    "Isparta", "Ankara", "Paris", "Moskova", "Kazanlık", "Astana",
    "Antalya", "New York", "Brüksel", "Saint Petersburg", "Burgaz", "Kalaganda",
    "Bodrum", "Miami", "Dortmund", "Odessa", "Pekin", "Port Sudan",
    "İzmir", "Boston", "Köln", "New Mexico", "Guanzu", "İstanbul"
  ];

  useEffect(() => {
    // Sayfa bu bölüme kaydırıldığında yumuşakça belirme animasyonu
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section className={styles.representations} id="representations" ref={sectionRef}>
      
      <div className={styles.header}>
        <div className={styles.line}></div>
        <h3>OUR REPRESENTATIONS</h3>
        <div className={styles.line}></div>
      </div>

      <div className={styles.grid}>
        {cities.map((city, index) => (
          <div key={index} className={styles.cityItem}>
            <span className="text-gold">📍</span>
            <span>{city}</span>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Representations;