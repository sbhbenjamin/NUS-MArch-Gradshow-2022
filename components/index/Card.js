import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/Card.module.css';

import { thumbnails } from '../../data/images/thumbnails';

const Card = ({ id, title, student, supervisor, img }) => {
  const thumbnail = thumbnails[id];
  return (
    <div className={styles.card}>
      <Link href={`/projects/${id}`}>
        <a>
          <Image
            loader={() => {
              return `https://d18eblg1a9ju11.cloudfront.net/thumbnails/${thumbnail.url}`;
            }}
            src={`https://d18eblg1a9ju11.cloudfront.net/thumbnails/${thumbnail}`}
            alt="sample image 1"
            layout="responsive"
            width={1000}
            height={750}
          />
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <h5>{title}</h5>
              <p>{student}</p>
            </div>
            <div className={styles.cardBody}>
              <p>{supervisor}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Card;
