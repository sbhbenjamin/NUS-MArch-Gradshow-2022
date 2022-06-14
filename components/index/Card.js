import React from 'react';
import Image from 'next/image';

import styles from '../../styles/Card.module.css';

const Card = ({ title, student, supervisor, img }) => {
  return (
    <div className={styles.card}>
      <Image
        src={img}
        alt="sample image 1"
        layout="responsive"
        width={1000}
        height={750}
      />
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h4>{title}</h4>
          <p>{student}</p>
        </div>
        <div className={styles.cardBody}>
          <p>{supervisor}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
