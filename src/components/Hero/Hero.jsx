// src/components/Hero/Hero.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Hero.module.scss';

// 1. Resmi import ediyoruz (İsmi kendi kaydettiğin isme göre düzenle)
import eagleImg from '../../assets/images/kartal.png'; 

const Hero = () => {
  const eagleRef = useRef(null);
  const sloganRef = useRef(null);
  const chairmanRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(eagleRef.current, 
      { opacity: 0, y: -50 }, 
      { opacity: 1, y: 0, duration: 1.2 }
    )
    .fromTo(sloganRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1 },
      "-=0.5"
    )
    .fromTo(chairmanRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.5"
    );
  }, []);

  return (
    <section className={styles.hero} id="home">
      
      <div className={styles.eagleContainer} ref={eagleRef}>
        {/* 2. Yer tutucu div yerine gerçek img etiketimizi koyduk */}
        <img src={eagleImg} alt="Xmax Group Küresel Vizyon" className={styles.eagleImage} />
      </div>

      <div className={styles.sloganContainer} ref={sloganRef}>
        <div className={styles.line}></div>
        <h3 className={styles.slogan}>GLOBAL VISION &bull; STRONG FUTURE</h3>
        <div className={styles.line}></div>
      </div>

      <div className={styles.chairmanContainer} ref={chairmanRef}>
        <h4>KEMAL YILDIZ <span className="text-gold">- CHAIRMAN</span></h4>
      </div>
      
    </section>
  );
};

export default Hero;    