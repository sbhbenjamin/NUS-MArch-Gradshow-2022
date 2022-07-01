import React from 'react';
import styles from '../../styles/ActionButton.module.css';

const ActionButton = ({ text, link, type }) => {
  return (
    <div>
      <a
        className={
          type === 'primary' ? styles.primaryButton : styles.secondaryButton
        }
        href={link}
      >
        {text}
      </a>
    </div>
  );
};

export default ActionButton;
