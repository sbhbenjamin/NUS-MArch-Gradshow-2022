import React from 'react';
import Card from './Card';
import styles from '../../styles/Gallery.module.css';

import one from '../../data/images/1.jpg';
import two from '../../data/images/2.jpg';
import three from '../../data/images/3.jpg';

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <Card
        title="Monarchs and Milkweed"
        student="John Doe"
        supervisor="Assoc. Prof. Jane Doe"
        img="https://res.cloudinary.com/fay/image/upload/q_5/v1617047570/galaxy_ne5p8f.jpg"
      />
      <Card
        title="Monarchs and Milkweed"
        student="John Doe"
        supervisor="Assoc. Prof. Jane Doe"
        img={three}
      />
      <Card
        title="Monarchs and Milkweed"
        student="John Doe"
        supervisor="Assoc. Prof. Jane Doe"
        img={two}
      />
      <Card
        title="Monarchs and Milkweed"
        student="John Doe"
        supervisor="Assoc. Prof. Jane Doe"
        img={one}
      />
      <Card
        title="Monarchs and Milkweed"
        student="John Doe"
        supervisor="Assoc. Prof. Jane Doe"
        img={three}
      />
      <Card
        title="Monarchs and Milkweed"
        student="John Doe"
        supervisor="Assoc. Prof. Jane Doe"
        img={two}
      />
    </div>
  );
};

export default Gallery;
