import React from 'react';
import Layout from '../../components/Layout';
import Theme from '../../components/about/Theme';
import Messages from '../../components/about/Messages';

import Background from '../../public/backgrounds/contour1.svg';

import styles from '../../styles/About.module.css';

const index = () => {
  return (
    <Layout>
      <Theme />
      <Location />
      <Messages />
    </Layout>
  );
};

const Location = () => {
  return (
    <div className={styles.location}>
      <h2>Event Details</h2>
      <div className={styles.textContent}>
        <div>
          <p>
            <strong>Location:</strong> Suntec City, North Wing 7 Temasek Blvd
            Singapore 038987 #01-457B & #01-458A/B (Nearest shop is TM Lewin &
            Onitsuka Tiger Event)
          </p>
        </div>
        <div>
          <p>
            <strong>Duration:</strong> 9 July - 24 July
          </p>
        </div>
        <div>
          <p>
            <strong>Opening hours:</strong> 10am - 10pm daily
          </p>
        </div>
        <p>
          For car parking, we recommend carpark D or E as those are the nearest
          to the venue. For public transport, we recommend coming in from
          Esplanade MRT Exit A. For dropping off, we recommend dropping off at
          Tower 1 & 2.
        </p>
        <div>
          <p>
            Do pm us via{' '}
            <a
              className="link"
              href="https://www.instagram.com/nusm.archgradshow/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              @nusm.archgradshow
            </a>{' '}
            if there are any queries! See you soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
