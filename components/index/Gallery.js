import React from 'react';
import Card from './Card';
import styles from '../../styles/Gallery.module.css';

const Gallery = ({ projects }) => {
  return (
    <div className={styles.gallery}>
      {projects.map((project) => (
        <Card
          id={project.id}
          title={project.title}
          student={project.student}
          supervisor={project.supervisor}
          key={project.id}
        />
      ))}
    </div>
  );
};

export default Gallery;
