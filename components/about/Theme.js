import React from 'react';
import styles from '../../styles/Theme.module.css';
import Footer from '../Footer';

const Theme = () => {
  return (
    <div className={styles.themeContainer}>
      <div className={styles.themeContent}>
        <h2>Theme</h2>
        <div className={styles.themeText}>
          <p>
            To our Industry Partners, Staff, Alumni, and Students: For the first
            time since the pandemic began, the NUS M.Arch grad show is back
            physically! Our theme this year, &ldquo;Architecture
            Etcetera&rdquo;, focuses on celebrating the designer behind the work
            just as much as the work itself! Glimpses of life and interests
            outside and amongst the field of architecture will be interspersed
            throughout the show.
          </p>
          <p>
            This year’s works are grouped into five clusters: (i) Atmosphere +
            Agency (ii) Conservation + Heritage (iii) Performative Design (iv)
            Speculative Environments (v) Urban Commons + Wellness
          </p>
          <p>
            These clusters represent the main research branches of this
            year&apos;s cohort. The show recognises that there is no one
            methodology that can best articulate what architecture truly is;
            these trajectories offer a mere glimpse into the futures crafted by
            the graduating cohort. Culminating our thesis semester, the cohort
            of 2022 would like to invite all to join us in the celebration of
            our thesis works through our physical exhibition, publications, as
            well as website. Stay tuned for more details as we approach event
            day itself!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Theme;
