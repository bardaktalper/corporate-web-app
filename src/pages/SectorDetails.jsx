// src/pages/SectorDetails.jsx (İlgili kısımlar)
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './SectorDetails.module.scss';

const SectorDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectorDatabase = {
    gayrimenkul: {
      title: "REAL ESTATE",
      companyName: "Yıldız Premium Gayrimenkul",
      description: "Türkiye ve küresel pazarda lüks konut, ticari alan ve yatırım danışmanlığı hizmetleri sunuyoruz. Uzman kadromuzla, gayrimenkul portföyünüzü en doğru şekilde yönetmek ve en yüksek getiriyi sağlamak için stratejik çözümler üretiyoruz.",
      websiteUrl: "https://www.sahibinden.com",
      instagramUrl: "https://www.instagram.com/yildizpremiumofficial/", // Instagram eklendi
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
      highlights: ["Lüks Konut Danışmanlığı", "Ticari Gayrimenkul", "Global Yatırım Yönetimi"]
    },
    izolasyon: {
      title: "THERMAL INSULATION",
      companyName: "İzmir Yalıtım & Hy-Tech", // Yazım hatası düzeltildi
      description: "Yeni nesil nanoteknolojik ısı ve ses yalıtım sistemleri ile binalarınızda %60'a varan enerji tasarrufu sağlıyoruz.",
      websiteUrl: "https://www.hytechthermal.com", // Site güncellendi
      image: "https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=1200&auto=format&fit=crop",
      highlights: ["Nanoteknolojik Yalıtım", "Enerji Tasarrufu", "Endüstriyel Çözümler"],
      // Birden fazla PDF eklendi (Dosya isimlerindeki boşluklar %20 ile güvenli URL'ye çevrildi)
      pdfs: [
        { url: "/assets/docs/2016-Hi-TECH%20KATALOG.pdf", name: "Hy-Tech Katalog (2016)" },
        { url: "/assets/docs/Hi-Tech%20FİYAT%20LİSTESİ.pdf", name: "Hy-Tech Fiyat Listesi" }
      ]
    }
  };

  const data = sectorDatabase[id];

  if (!data) return <div className={styles.notFound}><Link to="/">ANA SAYFAYA DÖN</Link></div>;

  return (
    <div className={styles.detailsContainer}>
      {/* Banner */}
      <div className={styles.heroBanner} style={{ backgroundImage: `url(${data.image})` }}>
        <div className={styles.overlay}></div>
        <div className={styles.bannerContent}>
          <h4 className="text-gold">{data.title}</h4>
          <h1>{data.companyName}</h1>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.mainContent}>
          <h3 className={styles.sectionTitle}>Hakkımızda</h3>
          <div className={styles.line}></div>
          <p className={styles.description}>{data.description}</p>
          <ul className={styles.highlightsList}>
            {data.highlights.map((item, index) => (
              <li key={index}><span className="text-gold">✓</span> {item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.sidebar}>
          <div className={styles.actionCard}>
            <h3>Bağlantılar & Dökümanlar</h3>
            
            {/* Varsa PDF'leri Listele */}
            {data.pdfs && data.pdfs.map((pdf, index) => (
              <a key={index} href={pdf.url} download target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>
                <span className={styles.icon}>📄</span> {pdf.name} İndir
              </a>
            ))}

            {/* Varsa Instagram Linki */}
            {data.instagramUrl && (
              <a href={data.instagramUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn} style={{backgroundColor: '#E1306C', color: '#fff'}}>
                <span className={styles.icon}>📸</span> Instagram'da İncele
              </a>
            )}

            <a href={data.websiteUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
              <span className={styles.icon}>🌐</span> {data.companyName} Sitesine Git
            </a>
            
            <Link to="/" className={styles.secondaryBtn}>Ana Sayfaya Dön</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorDetails;