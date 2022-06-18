import Head from 'next/head';

import Layout from '../components/Layout';
import Landing from '../components/Landing';
import ProjectCard from '../components/ProjectCard';

import styles from '../styles/Home.module.css';

import { themes } from '../data/themes';

import FadeInWhenVisible from '../components/motion/FadeInWhenVisible';

export default function Home({ themes }) {
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
          <ProjectContent />
        </Layout>
      </main>
    </div>
  );
}

const ProjectContent = () => {
  return (
    <div className={styles.content}>
      {themes.map((theme) => (
        <div className={styles.project} key={theme.supervisor}>
          <FadeInWhenVisible>
            <ProjectCard
              project={theme.theme}
              name={theme.supervisor}
              href={`/themes/${theme.supervisor.toLowerCase()}`}
            />
          </FadeInWhenVisible>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: { themes },
  };
};
