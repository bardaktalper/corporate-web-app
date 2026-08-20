// src/pages/About.jsx
import React, { useEffect } from 'react';
import styles from './About.module.scss';

const About = () => {
  // Sayfa açıldığında otomatik olarak en tepeye kaydırır
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Geçici lüks ofis görseli
  const heroImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop";

  return (
    <div className={styles.aboutContainer}>
      
      {/* Üst Banner */}
      <div className={styles.heroBanner} style={{ backgroundImage: `url(${heroImage})` }}>
        <div className={styles.overlay}></div>
        <div className={styles.bannerContent}>
          <h4 className="text-gold">ABOUT US & CONTACT</h4>
          <h1>XMAX GROUP</h1>
        </div>
      </div>

      {/* Alt İçerik: İletişim Bilgileri */}
      <div className={styles.contentWrapper}>
        <div className={styles.infoCard}>
          <h3 className={styles.title}>İletişim Bilgilerimiz</h3>
          <div className={styles.line}></div>
          <p className={styles.description}>
            Xmax Group olarak lüks tüketim, gayrimenkul, organizasyon ve uluslararası ticaret alanlarında küresel çapta birinci sınıf hizmet sunuyoruz. Bizimle aşağıdaki kanallar üzerinden iletişime geçebilirsiniz.
          </p>
          
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <span className={styles.icon}>📍</span>
              <div>
                <strong>Merkez Ofis</strong>
                <p>Türkiye ÇELEBİLER MAH. TUHAFİYECİLER SİT. 112. CAD. NO:11 K4 D:177 MERKEZ / ISPARTA</p>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <span className={styles.icon}>📞</span>
              <div>
                <strong>Telefon</strong>
                <p>+90 (533) 300 34 94</p>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <span className={styles.icon}>✉️</span>
              <div>
                <strong>E-Posta</strong>
                <p>kemalyildiz1972@gmail.com</p>
              </div>
            </div>

            {/* Yeni Eklenen Instagram Bölümü */}
            <div className={styles.contactItem}>
              <span className={styles.icon}>📸</span>
              <div>
                <strong>Instagram</strong>
                <a href="https://www.instagram.com/xmaxgroup/" target="_blank" rel="noopener noreferrer" className={styles.instaLink}>
                  @xmaxgroup
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;