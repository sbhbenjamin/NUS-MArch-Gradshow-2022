import Head from 'next/head';

import Layout from '../components/Layout';
import Landing from '../components/Landing';
import ProjectCard from '../components/ProjectCard';

import styles from '../styles/Home.module.css';

import { supervisors } from '../data/supervisors';

import FadeInWhenVisible from '../components/motion/FadeInWhenVisible';

export default function Home({ supervisors }) {
  return (
    <div>
      <Head>
        <title>NUS M.Arch Gradshow 2022</title>
        <meta name="description" content="NUS M.Arch Gradshow 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <Landing />
          <ProjectContent supervisors={supervisors} />
        </Layout>
      </main>
    </div>
  );
}

const ProjectContent = ({ supervisors }) => {
  return (
    <div className={styles.content}>
      {supervisors.map((theme) => (
        <div className={styles.project} key={theme.supervisor}>
          <FadeInWhenVisible>
            <ProjectCard
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
    props: { supervisors },
  };
};
