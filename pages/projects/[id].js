import React, { useState } from 'react';
import Image from 'next/image';

import Layout from '../../components/layout';
import Avatar from '../../components/Avatar';
import Footer from '../../components/Footer';
import BackButton from '../../components/buttons/backButton';

import styles from '../../styles/Project.module.css';

import { motion } from 'framer-motion';

// sample projects
import { projects } from '../../data/projects';
import { imagesSource } from '../../data/images';

const customLoader = () => {
  return 'https://res.cloudinary.com/datxbbgwb/image/upload/q_5,fl_lossy,f_auto/';
};

const Project = ({ project, images }) => {
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
          <div className={styles.avatar}>
            <Avatar name={student} />
          </div>
        </div>
        <div className={`${styles.imageBox} disable-scrollbars`}>
          {images &&
            images.map((image) => (
              <div
                key={image.secure_url}
                onClick={() => setEnlarged(!isEnlarged)}
              >
                <Image
                  className={`${styles.individualImageBox} ${
                    isEnlarged && styles.enlarged
                  }`}
                  src={image.secure_url}
                  alt="image"
                  layout="responsive"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  priority
                />
              </div>
            ))}
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

const getBase64ImageUrl = async (imageId) => {
  const response = await fetch(
    `https://res.cloudinary.com/datxbbgwb/image/upload/q_5/w_100/e_blur:1000,q_auto,f_webp${imageId}`
  );
  const buffer = await response.arrayBuffer();
  const data = Buffer.from(buffer).toString('base64');
  return `data:image/webp;base64,${data}`;
};

export const getStaticProps = async ({ params }) => {
  const project = projects.find(
    (project) => project.id.toString() === params.id
  );

  // find images from project
  const images = imagesSource[`Projects/${params.id}`];
  console.log(images.length);
  // const blurredImages = await images.map(async (image) => ({
  //   blur_url: await getBase64ImageUrl(image.secure_url),
  //   ...image,
  // }));
  // const res = await Promise.all(blurredImages);

  return {
    props: { project, images }, // will be passed to the page component as props
  };
};

export const getStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { id: project.id.toString() },
  }));
  return { paths, fallback: false };
};

export default Project;
