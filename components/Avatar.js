import React from 'react';
import Image from 'next/dist/client/image';

import Footer from './Footer';

import styles from '../styles/Avatar.module.css';

import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaGlobeAsia } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

import { avatars } from '../data/images/avatars';

const Avatar = ({
  name,
  email,
  web,
  linkedin,
  instagram,
  projectId,
  isSmallSize,
}) => {
  return (
    <div>
      <div className={styles.avatarWrapper}>
        <Image
          loader={() => {
            return `https://d18eblg1a9ju11.cloudfront.net/avatars/${avatars[projectId]}`;
          }}
          alt={name}
          src={avatars[projectId]}
          width={isSmallSize ? 80 : 150}
          height={isSmallSize ? 80 : 150}
          className={styles.avatar}
        />
        <p>{name}</p>
        <div className={styles.socials}>
          {web && (
            <a href={web} target="_blank" rel="noreferrer">
              <FaGlobeAsia size={20} />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noreferrer">
              <AiFillLinkedin size={20} />
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
              <FiMail size={20} />
            </a>
          )}
          {instagram && (
            <a href={instagram} target="_blank" rel="noreferrer">
              <AiFillInstagram size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Avatar;
