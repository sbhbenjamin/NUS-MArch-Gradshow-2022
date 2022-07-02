import React from 'react';
import styles from '../../styles/Messages.module.css';
import Image from 'next/image';

import { messages } from '../../data/messages';

const MessageContainer = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Messages</h2>
      <div className={styles.messages}>
        {messages.map(({ img, name, title, message }) => (
          <Message
            key={img}
            img={img}
            title={title}
            message={message}
            name={name}
          />
        ))}
      </div>
    </div>
  );
};

const Message = ({ img, title, message, name }) => {
  return (
    <div className={styles.message}>
      <div>
        <Image
          loader={() => img}
          src={img}
          alt={name}
          width={400}
          height={600}
        />
        <div className={styles.professorText}>
          <p>
            <strong>{name}</strong>
          </p>
          {title.map((line) => (
            <p className="noMargin" key={line}>
              <em>{line}</em>
            </p>
          ))}
        </div>
      </div>
      <div className={styles.messageText}>
        {message.map((msg) => (
          <p key={msg}>{msg}</p>
        ))}
      </div>
    </div>
  );
};

export default MessageContainer;
