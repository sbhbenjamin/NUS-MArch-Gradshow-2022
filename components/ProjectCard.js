import Link from 'next/link';
import React from 'react';

import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project, name, href }) => {
  return (
    <div>
      <Link href={href}>
        <a>
          <div className={styles.card}>
            <h3>{project}</h3>
            <h4>{name}</h4>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProjectCard;
