import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from '../styles/ProjectCard.module.css';
import { blur } from '@cloudinary/url-gen/actions/effect';

const variant = {
  hidden: { opacity: 0, y: 0 },
  show: { opacity: 1, y: -5 },
};

const ProjectCard = ({ project, name, href, projectUrl }) => {
  return (
    <motion.div
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
            }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3, ease: 'easeInOut', duration: 0.5 }}
              // whileHover={{ filter: 'blur(0px)' }}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  // filter: 'blur(2px)'
                },
                hidden: { opacity: 0, y: 25 },
              }}
            >
              <h2>{project}</h2>
              <h4>{name}</h4>
            </motion.div>
          </motion.div>
        </a>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
