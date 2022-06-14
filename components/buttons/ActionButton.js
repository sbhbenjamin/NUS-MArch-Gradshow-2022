import React from 'react';
import styles from '../../styles/ActionButton.module.css';

const ActionButton = ({ text, link, type }) => {
  return (
    <a
      className={
        type === 'primary' ? styles.primaryButton : styles.secondaryButton
      }
      href={link}
    >
      {text}
    </a>
  );
};

export default ActionButton;
