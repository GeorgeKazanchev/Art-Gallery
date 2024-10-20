import React from 'react';
import isThemeLight from '../../../shared/model/is-theme-light';

import * as styles from './search.module.scss';
import { useAppSelector } from '../../../shared/model/redux-hooks';
import { selectTheme } from '../../../shared/model/theme-slice';

type Props = {
  searchQuery: string,
  onSearchQueryChange: (searchQuery: string) => void,
};

export default function Search({ searchQuery, onSearchQueryChange }: Props): React.ReactNode {
  const curTheme = useAppSelector(selectTheme);
  const isLight = isThemeLight(curTheme);

  return (
    <form className={styles.searchForm} method="get" action="#">
      <label
        className={styles.inputLabel}
        htmlFor="search"
        aria-label="Search for paintings"
      >
        <input
          className={`${styles.input} ${isLight ? styles.inputLight : ''}`}
          type="text"
          value={searchQuery}
          name="search"
          id="search"
          placeholder="Painting title"
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
            onSearchQueryChange(evt.target.value);
          }}
        />
      </label>
      <input
        style={{ display: searchQuery.length === 0 ? 'none' : 'block' }}
        className={`${styles.reset} ${isLight ? styles.resetLight : ''}`}
        type="reset"
        value=""
        aria-label="Clear a search field"
        onClick={() => {
          onSearchQueryChange("");
        }}
      />
    </form>
  );
}
