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
          <div className={styles.navItems}>
            <Link href="/works" passHref>
              <h4
                className={`${styles.navItem} ${
                  router.pathname === '/works' && styles.active
                }`}
              >
                Works
              </h4>
            </Link>
            <Link href="/about" passHref>
              <h4
                className={`${styles.navItem} ${
                  router.pathname === '/about' && styles.active
                }`}
              >
                About
              </h4>
            </Link>
            <Link href="/book" passHref>
              <h4
                className={`${styles.navItem} ${
                  router.pathname === '/book' && styles.active
                }`}
              >
                Book
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuTab;
