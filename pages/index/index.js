import React, { useState, useEffect } from 'react';
import styles from '../../styles/Index.module.css';

import Layout from '../../components/Layout';
import Options from '../../components/index/Options';
import Gallery from '../../components/index/Gallery';
import Footer from '../../components/Footer';

import { projects } from '../../data/projects';
import { supervisors } from '../../data/supervisors';
import { clusters } from '../../data/clusters';

const Index = () => {
  const [viewableProjects, setViewableProjects] = useState(projects);
  const [query, setQuery] = useState('');

  const [supervisor, setSupervisor] = useState(supervisors[0].sid);
  const [cluster, setCluster] = useState(clusters[0].cid);

  useEffect(() => {
    const supervisorSelected = supervisor !== supervisors[0].sid;
    const clusterSelected = cluster !== clusters[0].cid;

    const filteredProjects = projects.filter((project) => {
      let match = true;

      const matchByTitle = project.title
        .toLowerCase()
        .includes(query.toLowerCase());

      const matchByStudent = project.student
        .toLowerCase()
        .includes(query.toLowerCase());

      const matchBySupervisor = project.sid === supervisor;

      const matchByCluster = project.cid === cluster;

      match &= matchByTitle | matchByStudent;

      if (supervisorSelected) {
        match &= matchBySupervisor;
      }

      if (clusterSelected) {
        match &= matchByCluster;
      }
      return match;
    });

    setViewableProjects(filteredProjects);
  }, [query, supervisor, cluster]);

  return (
    <div>
      <Layout>
        <div className={`${styles.container} wrapper`}>
          <div className="content">
            <h2>Index of Works</h2>
            <div className={styles.controls}>
              <Options
                query={query}
                setQuery={setQuery}
                supervisor={supervisor}
                setSupervisor={setSupervisor}
                cluster={cluster}
                setCluster={setCluster}
              />
            </div>
            <div className={styles.gallery}>
              <Gallery projects={viewableProjects} />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Index;
