import React from 'react';
import * as styles from './search.module.scss';
import { useAppSelector } from '../../../shared/model/redux-hooks';
import { selectTheme } from '../../../shared/model/theme-slice';
import { isThemeLight } from '../../../shared/model/is-theme-light';

export const Search: React.FC = () => {
  const curTheme = useAppSelector(selectTheme);
  const isLight = isThemeLight(curTheme);

  return (
    <form className={styles.searchForm} method='get' action='#'>
      <label htmlFor='search' aria-label='Search for paintings'></label>
      <input
        className={`${styles.input} ${isLight ? styles.inputLight : ''}`}
        type='text'
        name='search'
        id='search'
        placeholder='Painting title'
      />
      <button
        className={`${styles.reset} ${isLight ? styles.resetLight : ''}`}
        type='reset'
      ></button>
    </form>
  );
};
