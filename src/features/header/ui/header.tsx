import React from 'react';
import isThemeLight from '../../../shared/model/is-theme-light';
import Theme from '../../../shared/types/theme';

import * as styles from './header.module.scss';
import {
  useAppSelector,
  useAppDispatch,
} from '../../../shared/model/redux-hooks';
import { selectTheme, setTheme } from '../../../shared/model/theme-slice';

const desktopMinWidth = 1440; //  It'll be better to get this width from the 'variables.scss'

export default function Header(): React.ReactNode {
  const dispatch = useAppDispatch();
  const curTheme = useAppSelector(selectTheme);
  const isLight = isThemeLight(curTheme);

  const handleThemeSwitcherClick = () => {
    const newTheme = isLight ? Theme.Dark : Theme.Light;
    dispatch(setTheme(newTheme));
    localStorage.setItem('theme', newTheme.toString());
  };

  return (
    <header className={`${styles.header} ${isLight ? styles.headerLight : ''}`}>
      <div className={styles.container}>
        {isLight ? (
          <picture>
            <source
              media={`(min-width: ${desktopMinWidth}px)`}
              srcSet="assets/logo-large-dark.svg"
            />
            <img
              src="assets/logo-medium-dark.svg"
              alt="Логотип &laquo;Framework Team&raquo;"
            />
          </picture>
        ) : (
          <picture>
            <source
              media={`(min-width: ${desktopMinWidth}px)`}
              srcSet="assets/logo-large-light.svg"
            />
            <img
              src="assets/logo-medium-light.svg"
              alt="Логотип &laquo;Framework Team&raquo;"
            />
          </picture>
        )}

        <button
          className={`${styles.themeSwitcher} ${isLight ? styles.themeSwitcherLight : ''}`}
          type="button"
          aria-label="Change theme"
          onClick={handleThemeSwitcherClick}
        />
      </div>
    </header>
  );
}
