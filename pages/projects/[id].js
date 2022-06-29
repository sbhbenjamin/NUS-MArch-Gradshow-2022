import React, { useState } from 'react';
import Image from 'next/image';

import Layout from '../../components/Layout';
import Avatar from '../../components/Avatar';
import Footer from '../../components/Footer';
import BackButton from '../../components/buttons/backButton';

import styles from '../../styles/Project.module.css';

import { motion } from 'framer-motion';

// sample projects
import { projects } from '../../data/projects';
import { projects as allProjectImages } from '../../data/images/projects';

const Project = ({ project, projectImages: images }) => {
  const { title, abstract, student, supervisor, theme, comment } = project;
  const [isEnlarged, setEnlarged] = useState(false);

  return (
    <Layout>
      <div className={`${styles.container}`}>
        <div className={`${styles.contentBox} disable-scrollbars`}>
          <div className={styles.textBox}>
            <BackButton />
            <ProjectHeader
              title={title}
              student={student}
              supervisor={supervisor}
              theme={theme}
            />

            <ProjectAbstract abstracts={abstract} />
          </div>

          <SupervisorComments supervisor={supervisor} comment={comment} />
          <div className={`${styles.avatar} ${styles.hideOnMobile}`}>
            <Avatar name={student} projectId={project.id} />
          </div>
        </div>
        <div className={`${styles.imageBox} disable-scrollbars`}>
          {images &&
            images.map((image) => (
              <div key={image.url} onClick={() => setEnlarged(!isEnlarged)}>
                <Image
                  className={`${styles.individualImageBox} ${
                    isEnlarged && styles.enlarged
                  }`}
                  loader={() => {
                    return `https://nusmarchgradshow2022.s3.ap-southeast-1.amazonaws.com/projects/${image.url}`;
                  }}
                  src={image.url}
                  alt="image"
                  layout="responsive"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                />
              </div>
            ))}
        </div>
        <div className={`${styles.avatar} ${styles.hideOnTablet}`}>
          <Avatar name={student} projectId={project.id} />
        </div>
      </div>
    </Layout>
  );
};

const ProjectHeader = ({ title, student, supervisor, theme }) => {
  return (
    <motion.div className={styles.projectHeader}>
      <div className={styles.text}>
        <h2>{title}</h2>
        <p className="text-light-grey text-uppercase">
          BY{' '}
          <span>
            <strong className="text-uppercase">{student}</strong>
          </span>
        </p>
        <p className="text-light-grey text-uppercase">
          SUPERVISED BY{' '}
          <span>
            <strong>{supervisor}</strong>
          </span>
        </p>
        <p className="text-light-grey text-uppercase">
          STUDIO THEME{' '}
          <span>
            <strong>{theme}</strong>
          </span>
        </p>
      </div>
    </motion.div>
  );
};

const ProjectAbstract = ({ abstracts }) => {
  return (
    <div className={styles.textContainer}>
      <p>
        <strong>Abstract</strong>
      </p>
      <div className={styles.text}>
        {abstracts.map((abstract) => (
          <p key={abstract}>{abstract}</p>
        ))}
      </div>
    </div>
  );
};

const SupervisorComments = ({ supervisor, comment }) => {
  return (
    <div className={styles.callout}>
      <div className={`${styles.calloutContent} ${styles.textContainer}`}>
        <p>
          <strong>Supervisor Comments</strong>
        </p>
        <div className={styles.text}>
          <p className="text">{comment}</p>
          <p className={styles.quoteName}>- {supervisor}</p>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const project = projects.find(
    (project) => project.id.toString() === params.id
  );

  // find images from project
  const projectImages = allProjectImages[`${params.id}`];
  return {
    props: { project, projectImages }, // will be passed to the page component as props
  };
};

export const getStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { id: project.id.toString() },
  }));
  return { paths, fallback: false };
};

export default Project;
