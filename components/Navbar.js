import React, { useState } from 'react';
import Link from 'next/dist/client/link';
import { useRouter } from 'next/router';
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
      delay: 0.7,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Navbar = ({ darkTheme = false, animate = false, fixed = false }) => {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className={`${styles.navbar} ${!fixed && styles.fixedNavbar}`}>
        <motion.div
          initial={animate && 'hidden'}
          animate="show"
          variants={item}
          transition={{ duration: 1 }}
        >
          <Link href="/">
            <a>
              <Logo className={styles.logo} width="80px" height="80px" />
            </a>
          </Link>
        </motion.div>
        <motion.div
          variants={container}
          initial={animate && 'hidden'}
          animate="show"
          className={styles.rightNav}
        >
          <Link href="/works">
            <motion.div
              variants={item}
              transition={{ duration: 1 }}
              className={`${styles.navItem} ${
                router.pathname === '/works' && styles.active
              }`}
            >
              <h4>Works</h4>
            </motion.div>
          </Link>
          <Link href="/about">
            <motion.div
              variants={item}
              transition={{ duration: 1 }}
              className={`${styles.navItem} ${
                router.pathname === '/about' && styles.active
              }`}
            >
              <h4>About</h4>
            </motion.div>
          </Link>
          <Link href="/book">
            <motion.div
              variants={item}
              transition={{ duration: 1 }}
              className={`${styles.navItem} ${
                router.pathname === '/book' && styles.active
              }`}
            >
              <h4>Book</h4>
            </motion.div>
          </Link>
        </motion.div>
        <div className={styles.hamburger}>
          {darkTheme ? (
            <Hamburger
              className={styles.hamburgerIcon}
              rounded
              color={isOpen ? 'black' : 'white'}
              toggled={isOpen}
              toggle={setOpen}
            />
          ) : (
            <Hamburger
              className={styles.hamburgerIcon}
              rounded
              color="black"
              toggled={isOpen}
              toggle={setOpen}
            />
          )}
        </div>
        {isOpen && <MenuTab closeTab={() => setOpen(false)} />}
      </div>
    </>
  );
};

export default Navbar;
