import React, { useState } from 'react';
import Image from 'next/image';

import Layout from '../../components/Layout';
import Avatar from '../../components/Avatar';
import BackButton from '../../components/buttons/backButton';

import styles from '../../styles/Project.module.css';
import { motion } from 'framer-motion';

// sample projects
import { projects } from '../../data/projects';
import { thumbnails } from '../../data/images/thumbnails';
import { projects as allProjectImages } from '../../data/images/projects';

const Project = ({ project, projectImages: images, thumbnailImage }) => {
  const { title, abstract, student, supervisor, theme, comment } = project;
  const [isEnlarged, setEnlarged] = useState(null);

  return (
    <Layout>
      {/* Enlarged image overlay */}
      <div>
        {isEnlarged && (
          <div
            className={styles.imageWrapper}
            onClick={() => setEnlarged(null)}
          >
            <div className={styles.imageOverlay}>
              <Image
                layout="fill"
                objectFit="contain"
                alt="Enlarged image"
                loader={() => {
                  return `https://d18eblg1a9ju11.cloudfront.net/projects/${isEnlarged}`;
                }}
                src={`https://d18eblg1a9ju11.cloudfront.net/projects/${isEnlarged}`}
              />
            </div>
          </div>
        )}
      </div>

      <div className={`${styles.container}`}>
        <div className={`${styles.contentBox} disable-scrollbars`}>
          <div className={styles.innerContentBox}>
            {/* <div className={`${styles.imageFilter} ${styles.hideOnTablet}`} /> */}
            <div className={`${styles.coverImage} ${styles.hideOnTablet}`}>
              <Image
                loader={() => {
                  return `https://d18eblg1a9ju11.cloudfront.net/thumbnails/${thumbnailImage}`;
                }}
                src={thumbnailImage}
                alt="cover image"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className={styles.textBox}>
              <div className={styles.back}>
                <BackButton />
              </div>
              <ProjectHeader
                title={title}
                student={student}
                supervisor={supervisor}
                theme={theme}
              />

              <ProjectAbstract abstracts={abstract} />
            </div>

            <SupervisorComments supervisor={supervisor} comment={comment} />

            <div className={styles.hideOnMobile}>
              <Avatar
                name={student}
                projectId={project.id}
                email={project.email}
                web={project.web}
                instagram={project.instagram}
                linkedin={project.linkedin}
                isSmallSize={false}
              />
            </div>
          </div>
        </div>
        <div className={`${styles.imageBox} disable-scrollbars`}>
          {images &&
            images.map((image) => (
              <div
                key={image.url}
                onClick={() => setEnlarged(image.url)}
                className={styles.individualImageBox}
              >
                <Image
                  loader={() => {
                    return `https://d18eblg1a9ju11.cloudfront.net/projects/${image.url}`;
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
        <div className={styles.hideOnTablet}>
          <Avatar
            name={student}
            projectId={project.id}
            email={project.email}
            web={project.web}
            instagram={project.instagram}
            linkedin={project.linkedin}
            isSmallSize={true}
          />
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
        <div className={styles.meta}>
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
      </div>
    </motion.div>
  );
};

const ProjectAbstract = ({ abstracts }) => {
  return (
    <div className={styles.textContainer}>
      <div>
        <p>
          <strong>Abstract</strong>
        </p>
        <div className="textBox">
          {abstracts.map((abstract) => (
            <p key={abstract}>{abstract}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

const SupervisorComments = ({ supervisor, comment }) => {
  return (
    <div className={`${styles.callout} ${styles.textContainer}`}>
      <div className={styles.calloutContent}>
        <p>
          <strong>Supervisor Comments</strong>
        </p>
        <div>
          <p className="textBox">{comment}</p>
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

  // get thumbnail
  const thumbnailImage = thumbnails[project.id].url;

  // find images from project
  const projectImages = allProjectImages[`${params.id}`];
  return {
    props: { project, projectImages, thumbnailImage }, // will be passed to the page component as props
  };
};

export const getStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { id: project.id.toString() },
  }));
  return { paths, fallback: false };
};

export default Project;
