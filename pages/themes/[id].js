import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import ProjectCard from '../../components/ProjectCard';
import Layout from '../../components/Layout';
import styles from '../../styles/Themes.module.css';

import { projects } from '../../data/projects';

import useHorizontalScroll from '../../utils/useHorizontalScroll';
import BackButton from '../../components/buttons/backButton';

import { useWindowSize } from '../../hooks/useWindowSize';

const Theme = ({ projects, theme, supervisor }) => {
  const scrollRef = useHorizontalScroll();
  const size = useWindowSize();

  useState(() => {
    console.log(size);
  }, [size]);

  return (
    <Layout>
      <div className={styles.wrapper}>
        <BackButton />
        <div className={styles.header}>
          <h2>{theme}</h2>
          <p>{supervisor}</p>
        </div>
      </div>
      <div className={styles.content}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ ease: 'easeInOut', duration: 0.5 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <div
            className={styles.projectGallery}
            ref={scrollRef}
            style={{ overflow: 'hidden' }}
          >
            {projects.map((project) => (
              <ProjectCard
                project={project.title}
                name={project.student}
                href={`/projects/${project.id}`}
                key={project.id}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  const filteredProjects = projects.filter(
    (project) => project.supervisor.toLowerCase() === params.id
  );
  console.log('encoding', projects[0].supervisor.toLowerCase());
  console.log('params', params.id);
  const { theme, supervisor } = projects[0];
  return {
    props: { projects: filteredProjects, theme, supervisor }, // will be passed to the page component as props
  };
};

export const getStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { id: project.supervisor.toLowerCase() },
  }));
  return { paths, fallback: false };
};

export default Theme;
