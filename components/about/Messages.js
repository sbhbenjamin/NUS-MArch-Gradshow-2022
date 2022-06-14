import React from 'react';
import styles from '../../styles/Messages.module.css';
import Image from 'next/image';

import prof from '../../data/images/prof.png';

const MessageContainer = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Messages</h2>
      <div className={styles.messages}>
        <Message />
        <Message />
      </div>
    </div>
  );
};

const Message = () => {
  return (
    <div className={styles.message}>
      <div>
        <Image src={prof} alt="sample image 1" />
        <div className={styles.professorText}>
          <h4>Head of Department</h4>
          <p className="noMargin">Professor John Doe (Dr.)</p>
        </div>
      </div>
      <div className={styles.messageText}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, vero sed
          optio odio corporis quidem exercitationem ducimus rem enim earum
          fugiat beatae cumque aperiam ea impedit rerum laborum sunt harum?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, vero sed
          optio odio corporis quidem exercitationem ducimus rem enim earum
          fugiat beatae cumque aperiam ea impedit rerum laborum sunt harum?
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, vero sed
          optio odio corporis quidem exercitationem ducimus rem enim earum
          fugiat beatae cumque aperiam ea impedit rerum laborum sunt harum?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, vero sed
          optio odio corporis quidem exercitationem ducimus rem enim earum
          fugiat beatae cumque aperiam ea impedit rerum laborum sunt harum?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, vero sed
          optio odio corporis quidem exercitationem ducimus rem enim earum
          fugiat beatae cumque aperiam ea impedit rerum laborum sunt harum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, vero sed
          optio odio corporis quidem exercitationem ducimus rem enim earum
          fugiat beatae cumque aperiam ea impedit rerum laborum sunt harum?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, vero sed
          optio odio corporis quidem exercitationem ducimus rem enim earum
          fugiat beatae cumque aperiam ea impedit rerum laborum sunt harum?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, vero sed
          optio odio corporis quidem exercitationem ducimus rem enim earum
          fugiat beatae cumque aperiam ea impedit rerum.
        </p>
      </div>
    </div>
  );
};

export default MessageContainer;
