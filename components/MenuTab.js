import React from 'react';
import Link from 'next/link';
import styles from '../styles/MenuTab.module.css';

const MenuTab = ({ closeTab }) => {
  return (
    <>
      <span onClick={closeTab} className={styles.overlayTab} />
      <div className={styles.overlay}>
        <div className={`${styles.content}`}>
          <Link href="/index" passHref>
            <a>
              <h3>Index</h3>
            </a>
          </Link>
          <Link href="/about" passHref>
            <a>
              <h3>About</h3>
            </a>
          </Link>
          <Link href="/events" passHref>
            <a>
              <h3>Events</h3>
            </a>
          </Link>
          <Link href="/book" passHref>
            <a>
              <h3>Book</h3>
            </a>
          </Link>
          <Link href="/gallery" passHref>
            <a>
              <h3>Gallery</h3>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MenuTab;
