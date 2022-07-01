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
          <div className={styles.cardImage}>
            <Image
              loader={() => {
                return `https://d18eblg1a9ju11.cloudfront.net/thumbnails/${thumbnail.url}`;
              }}
              src={`https://d18eblg1a9ju11.cloudfront.net/thumbnails/${thumbnail}`}
              alt="sample image 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <p>
                <strong>{title}</strong>
              </p>
            </div>
            <div className={styles.cardBody}>
              <p>{student}</p>
              <p>{supervisor}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Card;
