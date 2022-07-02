import React from 'react';
import Navbar from './Navbar';
import styles from '../styles/Layout.module.css';
import { motion } from 'framer-motion';
import Footer from './Footer';

const variant = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 },
};

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variant}
        className={styles.content}
        transition={{ type: 'linear' }}
      >
        {children}
      </motion.main>
    </>
  );
};

export default Layout;
