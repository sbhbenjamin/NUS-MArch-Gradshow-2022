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
                loader={() => '/2022/placeholder.png'}
                src="/placeholder.png"
                alt="NUS M.Arch II Book"
                height={390}
                width={310}
              />
            </div>
            <div className={styles.description}>
              <div className={styles.bookHeader}>
                <h2>NUS M.Arch II Book</h2>
                <p className="text-dark-grey">
                  <em>A compendium of works for the batch of 2022</em>
                </p>
              </div>
              <div className={styles.bookText}>
                <p>
                  The NUS M.Arch Grad Show Book 2022 celebrates the achievements
                  of our students&apos; year-long design leadership in their
                  thesis work, and it is a compendium of radical and thoughtful
                  ideas for the architecture discipline as well as the larger
                  society. As part of our larger NUS M.Arch Show 2022, the
                  cohort&apos;s work are loosely located into five threads, each
                  addressing a relevant discourse in today&apos;s context. These
                  five threads offer a glimpse of the diverse yet collective
                  voice of the thesis projects, our students, and our
                  architecture education in the Department of Architecture, NUS.
                </p>
                <p>
                  Hard copies of the book are now available, going at the order
                  price of SGD65. It is a hard cover, 565 pages compendium of
                  thesis descriptions and visuals, with accompanying artefacts
                  such as interviews and reflections on research and living
                  through the pandemic. Please note that the book is free for
                  AY21/22 M.Arch II students/M.Arch teaching faculty as well as
                  industry members who have RSVP-ed for the opening night of
                  Gradshow 2022 (one copy per company).
                </p>
                <p>
                  Unfortunately, the book will only be available for local
                  (Singapore) purchase at this point of time. Please fill in the
                  form below if you wish to order, and make the payment through
                  PayLah!/PayNow to Jeremy &lt;+65 9183 9791&gt;. We will only
                  confirm the order once we have received your payment. Once the
                  books are ready for collection, we will use your contact
                  details to notify you of the collection time, date and
                  location.
                </p>
                <p>
                  <strong>
                    As there are limited copies available, this order form will
                    close by 24th July 2022 or if orders have been met.
                  </strong>
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
                  link="https://forms.gle/ge6tJxcoZC7H5YxY7"
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
