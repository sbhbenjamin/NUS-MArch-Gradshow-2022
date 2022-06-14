import React from 'react';
import Layout from '../../components/layout';
import Theme from '../../components/about/Theme';
import Messages from '../../components/about/Messages';

import Background from '../../public/backgrounds/contour1.svg';

import styles from '../../styles/About.module.css';

const index = () => {
  return (
    <Layout>
      <Theme />
      <Messages />
    </Layout>
  );
};

export default index;
