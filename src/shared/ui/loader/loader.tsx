import React from 'react';
import * as styles from './loader.module.scss';

type Props = {
  isLight?: boolean,
};

export const Loader: React.FC<Props> = ({ isLight = false }) => {
  return (
    <div className={`${styles.loader} ${isLight ? styles.loaderLight : ''}`}></div>
  );
};
