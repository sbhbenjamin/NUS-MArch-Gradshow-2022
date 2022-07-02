import React, { useState } from 'react';
import Link from 'next/dist/client/link';

import styles from '../styles/Navbar.module.css';

import { Spin as Hamburger } from 'hamburger-react';

import Logo from '../public/logo.svg';
import MenuTab from './MenuTab';

import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* <motion.nav animate={isOpen ? 'open' : 'closed'} variants={variants}>
        {isOpen && <MenuTab />}
      </motion.nav> */}
      <div className={styles.navbar}>
        <Link href="/">
          <a>
            <Logo className={styles.logo} width="80px" height="80px" />
          </a>
        </Link>
        <div className={styles.rightNav}>
          <div className={styles.navItem}>
            <Link href="/index">
              <a>
                <h4>Works</h4>
              </a>
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link href="/about">
              <a>
                <h4>About</h4>
              </a>
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link href="/book">
              <a>
                <h4>Book</h4>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.hamburger}>
          <Hamburger
            className={styles.hamburgerIcon}
            rounded
            color={isOpen ? 'black' : 'white'}
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
        {isOpen && <MenuTab closeTab={() => setOpen(false)} />}
      </div>
    </>
  );
};

export default Navbar;
