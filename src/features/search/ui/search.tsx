import React from 'react';
import * as styles from './search.module.scss';

export const Search: React.FC = () => {
  return (
    <form className={styles.searchForm} method='get' action='#'>
      <input className={styles.input} type='text' name='search' id='' placeholder='Painting title' />
      <button className={styles.reset} type='reset'></button>
    </form>
  );
};
