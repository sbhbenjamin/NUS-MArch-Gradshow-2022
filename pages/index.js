import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';

import Landing from '../components/Landing';
import ProjectCard from '../components/ProjectCard';

import styles from '../styles/Home.module.css';

import { supervisors } from '../data/supervisors';
import { supervisors as supervisorThumbnails } from '../data/images/supervisors';

import FadeInWhenVisible from '../components/motion/FadeInWhenVisible';

import {
  motion,
  useSpring,
  useTransform,
  useElementScroll,
} from 'framer-motion';

export default function Home({ supervisors, supervisorThumbnails }) {
  const ref = useRef();
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useElementScroll(ref);
  const yRange = useTransform(scrollYProgress, [0, 0.98], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => {
    yRange.onChange((v) => {
      setIsComplete(v >= 1);
      console.log(v);
    });
  }, [yRange]);

  return (
    <div>
      <Head>
        <title>NUS M.Arch Gradshow 2022</title>
        <meta property="og:title" content="NUS M.Arch Gradshow 2022" />
        <meta
          name="keywords"
          content="nus architecture, nus architecture gradshow, nus masters in architecture, nus architecture masters gradshow 2022, nus architecture graduation show, nus architecture exhibition"
        />

        <meta
          property="og:description"
          content="NUS Masters of Architecture Gradshow 2022: Architecture Etcetera – An exhibition showcasing the works by the Class of 2022 from NUS Masters of Architecture."
        />
        <meta
          property="og:url"
          content="https://www.nusmarchgradshow.com/2022"
        />
        <meta property="og:image" content="/2022/preview.jpg" />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href="https://www.nusmarchgradshow.com/2022"
          key="canonical"
        />
        <link rel="icon" href="/2022/logo.svg" />
      </Head>

      <main className={styles.landing}>
        <>
          {/** progress wheel */}
          <svg className="progress-icon" viewBox="0 0 60 60">
            <motion.path
              fill="none"
              strokeWidth="5"
              stroke="white"
              strokeDasharray="0 1"
              d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
              style={{
                pathLength,
                rotate: 90,
                translateX: 5,
                translateY: 5,
                scaleX: -1, // Reverse direction of line animation
              }}
            />
            <motion.path
              fill="none"
              strokeWidth="5"
              stroke="white"
              d="M14,26 L 22,33 L 35,16"
              initial={false}
              strokeDasharray="0 1"
              animate={{ pathLength: isComplete ? 1 : 0 }}
            />
          </svg>

          {/** landing page content */}
          <div className={styles.content} ref={ref}>
            <Landing />
            <ProjectContent
              supervisors={supervisors}
              supervisorThumbnails={supervisorThumbnails}
            />
          </div>
        </>
      </main>
    </div>
  );
}

const ProjectContent = ({ supervisors, supervisorThumbnails }) => {
  return (
    <div>
      {supervisors.map((theme) => (
        <div className={styles.project} key={theme.supervisor}>
          <FadeInWhenVisible>
            <ProjectCard
              projectUrl={`supervisors/${supervisorThumbnails[theme.sid]}`}
              project={theme.theme}
              name={theme.supervisor}
              href={`/themes/${theme.sid}`}
            />
          </FadeInWhenVisible>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  supervisors.shift();

  return {
    props: { supervisors, supervisorThumbnails },
  };
};
