import React from 'react';
import styles from '../styles/Scroller.module.css';

const Scroller = () => {
  return (
    <span className={styles.scroll__mouse}>
      <span className={styles.scroll__wheel}></span>
    </span>
  );
};

export default Scroller;
