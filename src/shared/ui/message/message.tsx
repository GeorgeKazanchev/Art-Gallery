import React from 'react';
import * as styles from './message.module.scss';

type Props = {
  message: string;
  description: string;
  isLight: boolean;
};

export default function Message({
  message,
  description,
  isLight,
}: Props): React.ReactNode {
  return (
    <article className={styles.messageBlock}>
      <p className={`${styles.message} ${isLight ? styles.messageLight : ''}`}>
        {message}
      </p>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
