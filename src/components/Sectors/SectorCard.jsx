// src/components/Sectors/SectorCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sectors.module.scss';

const SectorCard = ({ id, title, subtitle, image, cardSubtitle, companyName, actionText, isNew }) => {
  return (
    <div className={styles.card}>
      {isNew && <div className={styles.badge}>NEW</div>}
      
      {/* 1. Üst Başlıklar */}
      <div className={styles.cardHeader}>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
      </div>
      
      {/* 2. Geniş Görsel Alanı */}
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.cardImage} />
      </div>
      
      {/* 3. Resim Altı Metin ve Logo Alanı */}
      <div className={styles.cardBody}>
        <h6 className={styles.cardSubtitle}>{cardSubtitle}</h6>
        
        <div className={styles.companyInfo}>
          {/* İstersen buraya sonradan img etiketiyle müşterinin küçük logolarını koyabilirsin */}
          <div className={styles.logoPlaceholder}>
             <span style={{fontSize: '20px'}}>⌂</span>
          </div>
          <p>{companyName}</p>
        </div>
      </div>
      
      {/* 4. Yeni Altın Rengi Buton */}
      <div className={styles.cardFooter}>
        <Link to={`/sector/${id}`} className={styles.actionBtn}>
          {actionText}
        </Link>
      </div>
    </div>
  );
};

export default SectorCard;