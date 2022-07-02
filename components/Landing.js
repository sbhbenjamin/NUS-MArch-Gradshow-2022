import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Scroller from '../components/Scroller';
import styles from '../styles/Landing.module.css';

import Navbar from './Navbar';

import { motion } from 'framer-motion';

const hero = {
  hidden: { opacity: 0, y: 0 },
  show: { opacity: 1, y: -5 },
};

const Landing = () => {
  return (
    <>
      <Navbar darkTheme={true} />
      <div className={styles.container}>
        <div className={styles.content}>
          <span id={styles.spin} />
        </div>

        <motion.div
          variants={hero}
          initial="hidden"
          animate="show"
          className={styles.scrollContainer}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className={styles.scrollerText}>Explore Studios</p>
          <div className={styles.scroller}>
            <Scroller />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Landing;
