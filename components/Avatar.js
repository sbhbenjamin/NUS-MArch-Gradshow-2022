import React from 'react';
import sampleavatar from '../public/avatar.jpeg';
import Image from 'next/dist/client/image';

import styles from '../styles/Avatar.module.css';

// import { AiFillInstagram, AiFillLinkedin } from 'react-icons/Ai';
import { FaGlobeAsia } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Avatar = ({ name, email, website, linkedin, instagram }) => {
  return (
    <div>
      <div className={styles.avatarWrapper}>
        <Image
          src={sampleavatar}
          alt="sample avatar"
          width={150}
          height={150}
          className={styles.avatar}
        />
        <p>{name}</p>
        <div className={styles.socials}>
          <FaGlobeAsia size={20} />
          {/* <AiFillLinkedin size={20} /> */}
          <FiMail size={20} />
          {/* <AiFillInstagram size={20} /> */}
        </div>
      </div>
    </div>
  );
};

export default Avatar;
