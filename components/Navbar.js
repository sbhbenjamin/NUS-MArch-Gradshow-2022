import React, { useState } from 'react';
import Link from 'next/dist/client/link';

import styles from '../styles/Navbar.module.css';

import { Spin as Hamburger } from 'hamburger-react';

import Logo from '../public/logo.svg';
import MenuTab from './MenuTab';

import { motion } from 'framer-motion';

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
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
            <Logo width="80px" height="80px" />
          </a>
        </Link>
        <div className={styles.hamburger}>
          <Hamburger rounded toggled={isOpen} toggle={setOpen} />
        </div>
        {isOpen && <MenuTab closeTab={() => setOpen(false)} />}
      </div>
    </>
  );
};

export default Navbar;