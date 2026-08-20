// src/components/Sectors/SectorsGrid.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SectorCard from './SectorCard';
import styles from './Sectors.module.scss';

const SectorsGrid = () => {
  const gridRef = useRef(null);

  // Veri yapımızı (Veritabanı tablomuz gibi) genişlettik
  const sectorsData = [
    { 
      id: "gayrimenkul", 
      title: "REAL ESTATE SERVICES", 
      subtitle: "Gayrimenkul Aracılık",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop",
      cardSubtitle: "Premier Brokerage & Consulting",
      companyName: "YUNUS YILDIZ / YILDIZ PREMIUM GAYRİMENKUL",
      actionText: "VIEW PARTNER LISTINGS" 
    },
    { 
      id: "kozmetik", 
      title: "COSMETICS & ROSE OIL", 
      subtitle: "Gül Yağı ve Kozmetik", 
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=600&auto=format&fit=crop",
      cardSubtitle: "100% Pure & Natural Production",
      companyName: "DAMASCENA & ALBA GRUPS",
      actionText: "PARTNERSHIP DETAILS" 
    },
    { 
      id: "organizasyon", 
      title: "ORGANIZATION SERVICES", 
      subtitle: "Özel Organizasyonlar",
      image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=600&auto=format&fit=crop",
      cardSubtitle: "Exclusive Event Management",
      companyName: "ANTALYA ETKİNLİK YÖNETİMİ",
      actionText: "OUR EVENTS" 
    },
    { 
      id: "tarim", 
      title: "XMAX AGRO", 
      subtitle: "Amsterdam Merkezli",
      image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?q=80&w=600&auto=format&fit=crop",
      cardSubtitle: "Global Flower Export",
      companyName: "ÇİÇEK İHRACATI",
      actionText: "AGRO DETAILS" 
    },
    { 
      id: "hali", 
      title: "FINE CARPET TRADE", 
      subtitle: "İthalat ve İhracat",
      image: "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=600&auto=format&fit=crop",
      cardSubtitle: "Premium Import & Export",
      companyName: "PREMIUM HALI TİCARETİ",
      actionText: "VIEW COLLECTION" 
    },
    { 
      id: "izolasyon", 
      title: "THERMAL INSULATION", 
      subtitle: "Isı ve Ses İzolasyonu",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=600&auto=format&fit=crop",
      cardSubtitle: "Next Generation Nanotech",
      companyName: "İZMİR YALITIM & HY-TECH", 
      actionText: "VIEW CATALOG", 
      isNew: true 
    }
  ];

  useEffect(() => {
    gsap.fromTo(gridRef.current.children, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out", delay: 1.5 }
    );
  }, []);

  return (
    <section className={styles.sectorsSection} id="sectors">
      <div className={styles.gridContainer} ref={gridRef}>
        {sectorsData.map((sector) => (
          <SectorCard 
            key={sector.id}
            id={sector.id}
            title={sector.title}
            subtitle={sector.subtitle}
            
            // İŞTE EKSİK OLAN VE RESİMLERİ GETİRECEK SATIRLAR:
            image={sector.image} 
            cardSubtitle={sector.cardSubtitle} 
            
            companyName={sector.companyName}
            actionText={sector.actionText}
            isNew={sector.isNew}
          />
        ))}
      </div>
    </section>
  );
};

export default SectorsGrid;