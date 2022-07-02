import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Scroller from '../components/Scroller';
import styles from '../styles/Landing.module.css';

import { motion } from 'framer-motion';

const hero = {
  hidden: { opacity: 0, y: 0 },
  show: { opacity: 1, y: -5 },
};

const dragConstraints = {
  top: -200,
  left: -200,
  right: 200,
  bottom: 200,
};

const hoverProps = {
  scale: 1.2,
  transition: { duration: 0.25 },
};

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div id={styles.spin} />
        {/* <motion.div
          // drag
          // dragConstraints={dragConstraints}
          initial={{
            y: '-17vh',
            x: '5vw',
            // color: 'black',
            // 'text-shadow': 'none',
          }}
          // whileHover={{
          //   color: 'transparent',
          //   'text-shadow': '0 0 25px rgba(0,0,0,1)',
          // }}
        >
          <h1>M/Arch</h1>
        </motion.div>
        <motion.div
          drag
          dragConstraints={dragConstraints}
          initial={{ y: '18vh', x: '0vw' }}
          whileHover={hoverProps}
        >
          <h1>NUS</h1>
        </motion.div>
        <motion.div
          drag
          dragConstraints={dragConstraints}
          initial={{ y: '-2vh', x: '-5vw' }}
        >
          <h1>Gradshow</h1>
        </motion.div>
        <motion.div
          drag
          dragConstraints={dragConstraints}
          initial={{ y: '18vh', x: '-10vw' }}
        >
          <h1>2022</h1>
        </motion.div> */}

        {/* <Background /> */}
        {/* <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className={`${styles.navigation} text-dark-grey`}
        >
          <motion.div variants={item} className={styles.navItem}>
            <Link href="/index" passHref>
              <a>
                <h3>Index</h3>
              </a>
            </Link>
          </motion.div>

          <motion.div variants={item} className={styles.navItem}>
            <Link href="/about" passHref>
              <a>
                <h3>About</h3>
              </a>
            </Link>
          </motion.div>

          <motion.div variants={item} className={styles.navItem}>
            <Link href="/book" passHref>
              <a>
                <h3>Book</h3>
              </a>
            </Link>
          </motion.div>
        </motion.div> */}

        {/* <motion.div
          variants={hero}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className={styles.hero}>
            NUS M.Arch <span className={styles.highlight}>Gradshow</span> <br />
            2022
          </h1>
        </motion.div> */}

        {/* <h1 className={styles.hero}>NUS M.Arch Gradshow 2022</h1> */}
      </div>

      <motion.div
        variants={hero}
        initial="hidden"
        animate="show"
        className={styles.scroller}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Scroller />
      </motion.div>
    </div>
  );
};

export default Landing;
