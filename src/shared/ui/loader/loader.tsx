import React from 'react';
import * as styles from './loader.module.scss';

type Props = {
  isLight: boolean;
};

export default function Loader({ isLight }: Props): React.ReactNode {
  return (
    <div className={`${styles.loader} ${isLight ? styles.loaderLight : ''}`} />
  );
}
