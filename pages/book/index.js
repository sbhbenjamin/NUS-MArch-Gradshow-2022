import Image from 'next/image';
import React from 'react';
import Layout from '../../components/Layout';
import ActionButton from '../../components/buttons/ActionButton';

import styles from '../../styles/Book.module.css';

const index = () => {
  return (
    <Layout>
      <div className="wrapper">
        <div className={styles.bookContainer}>
          <div className={styles.bookContent}>
            <div className={styles.bookImage}>
              <Image
                loader={() => '/placeholder.png'}
                src="/placeholder.png"
                alt="NUS M.Arch II Book"
                height={390}
                width={310}
              />
            </div>
            <div className={styles.description}>
              <div className={styles.bookText}>
                <h2>NUS M.Arch II Book</h2>
                <p className="text-dark-grey">
                  <em>A compendium of works for the batch of 2022</em>
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur facilis pariatur ut quidem ad libero ex impedit
                  tempora consequuntur quibusdam, corrupti nesciunt maxime
                  eveniet suscipit quis eligendi voluptas veniam! Esse. Corrupti
                  nesciunt maxime eveniet suscipit quis eligendi voluptas
                  veniam! Esse.
                </p>
              </div>

              <div className={styles.buttonContainer}>
                <ActionButton
                  text="Preview Book"
                  link="https://issuu.com/nusmarchshow/docs/2022_gradbook_web_preview"
                  type="secondary"
                />
                <ActionButton
                  text="Pre-Order Book"
                  link="https://www.google.com"
                  type="primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
