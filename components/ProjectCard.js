import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project, name, href, projectUrl }) => {
  return (
    <motion.div
      initial={{}}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
    >
      <Link href={href}>
        <a>
          <motion.div
            className={styles.card}
            style={{
              backgroundImage: `linear-gradient(0, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(https://d18eblg1a9ju11.cloudfront.net/${projectUrl})`,
              backgroundSize: 'cover',
              backdropFilter: 'blur(5px)',
            }}
          >
            <h2>{project}</h2>
            <h4>{name}</h4>
          </motion.div>
        </a>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
