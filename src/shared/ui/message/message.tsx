import React from 'react';
import * as styles from './message.module.scss';

type Props = {
  message: string,
  description?: string | undefined,
  isLight?: boolean,
};

export const Message: React.FC<Props> = ({ message, description = undefined, isLight = false }) => {
  return (
    <article className={styles.messageBlock}>
      <p className={`${styles.message} ${isLight ? styles.messageLight : ''}`}>{message}</p>
      <p className={styles.description}>{description}</p>
    </article>
  );
};
