import React from 'react';
import Layout from '../../components/layout';

import styles from '../../styles/Events.module.css';

const index = () => {
  return (
    <Layout>
      <div className="wrapper">
        <h1>Events</h1>
        <div className={styles.table}>
          <h3>Date</h3>
          <h3>Time</h3>
          <h3>Event</h3>
          <h3>Location</h3>

          <p>28 Apr, Saturday</p>
          <p>14:00 (SGT)</p>
          <p>Show Launch</p>
          <p>Suntec City Atrium</p>

          <p>29 Apr, Saturday</p>
          <p>12:00 (SGT)</p>
          <p>Stories from Micro-Architecture</p>
          <p>Zoom</p>

          <p>30 Apr, Saturday</p>
          <p>15:00 (SGT)</p>
          <p>Post-Pandemic Studio</p>
          <p>Zoom</p>
        </div>
      </div>
    </Layout>
  );
};

export default index;
