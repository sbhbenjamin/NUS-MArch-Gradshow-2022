import React from 'react';
import styles from '../../styles/Theme.module.css';

const Theme = () => {
  return (
    <div className={styles.themeContainer}>
      <div className={styles.themeContent}>
        <h2>Theme</h2>
        <div className={styles.themeText}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            facilis pariatur ut quidem ad libero ex impedit tempora consequuntur
            quibusdam, corrupti nesciunt maxime eveniet suscipit quis eligendi
            voluptas veniam! Esse. Corrupti nesciunt maxime eveniet suscipit
            quis eligendi voluptas veniam! Esse.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Theme;
