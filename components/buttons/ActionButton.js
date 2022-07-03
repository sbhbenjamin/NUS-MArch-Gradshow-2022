import React from 'react';
import styles from '../../styles/ActionButton.module.css';

const ActionButton = ({ text, link, type }) => {
  return (
    <div
      className={
        type === 'primary' ? styles.primaryButton : styles.secondaryButton
      }
    >
      <a href={link}>{text}</a>
    </div>
  );
};

export default ActionButton;
