import React from 'react';
import Link from 'next/link';
import styles from '../styles/MenuTab.module.css';
import { useRouter } from 'next/router';

const MenuTab = ({ closeTab }) => {
  const router = useRouter();
  return (
    <>
      <span onClick={closeTab} className={styles.overlayTab} />
      <div className={styles.overlay}>
        <div className={`${styles.content}`}>
          <Link href="/index" passHref>
            <a>
              <h3 className={router.pathname === '/index' && styles.active}>
                Works
              </h3>
            </a>
          </Link>
          <Link href="/about" passHref>
            <a>
              <h3 className={router.pathname === '/about' && styles.active}>
                About
              </h3>
            </a>
          </Link>
          <Link href="/book" passHref>
            <a>
              <h3 className={router.pathname === '/book' && styles.active}>
                Book
              </h3>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MenuTab;
