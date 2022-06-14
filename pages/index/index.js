import React from 'react';
import styles from '../../styles/Index.module.css';

import Layout from '../../components/Layout';
import Options from '../../components/index/Options';
import Gallery from '../../components/index/Gallery';
import Footer from '../../components/Footer';

const Index = ({ works }) => {
  return (
    <div>
      <Layout>
        <div className="wrapper">
          <div className="content">
            <h2>Index of Works</h2>
            <div className={styles.controls}>
              <Options />
            </div>
            <div className={styles.gallery}>
              <Gallery />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Index;
