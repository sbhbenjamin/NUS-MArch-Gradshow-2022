import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project, name, href, projectUrl }) => {
  return (
    <div>
      <Link href={href}>
        <a>
          <div
            className={styles.card}
            style={{
              backgroundImage: `linear-gradient(0, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(https://d18eblg1a9ju11.cloudfront.net/${projectUrl})`,
              backgroundSize: 'cover',
            }}
          >
            <h2>{project}</h2>
            <h4>{name}</h4>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProjectCard;
