import React from 'react';
import styles from '../../styles/ActionButton.module.css';

const ActionButton = ({ text, link, type }) => {
  return (
    <a href={link}>
      <div
        className={
          type === 'primary' ? styles.primaryButton : styles.secondaryButton
        }
      >
        {text}
      </div>
    </a>
  );
};

export default ActionButton;
