import React from 'react';
import Theme from '../../../shared/types/theme';
import * as styles from './header.module.scss';
import { isThemeLight } from '../../../shared/helpers/theme';

//  TODO: Move theme to a Redux's store
const theme = Theme.Dark;
const isLight = isThemeLight(theme);

const desktopMinWidth = 1440;

export const Header: React.FC = () => {
  return (
    <header className={`${styles.header} ${isLight ? styles.headerLight : ''}`}>
      <div className={styles.container}>
        {
          isLight
            ? (
              <picture>
                <source media={`(min-width: ${desktopMinWidth}px)`} srcSet='/assets/logo-large-dark.svg' />
                <img src='/assets/logo-medium-dark.svg' alt='Логотип &laquo;Framework Team&raquo;' />
              </picture>
            )
            : (
              <picture>
                <source media={`(min-width: ${desktopMinWidth}px)`} srcSet='/assets/logo-large-light.svg' />
                <img src='/assets/logo-medium-light.svg' alt='Логотип &laquo;Framework Team&raquo;' />
              </picture>
            )
        }

        <button 
          className={`${styles.themeSwitcher} ${isLight ? styles.themeSwitcherLight : ''}`}
          type='button'
          aria-label='Change theme'
        ></button>
      </div>
    </header>
  );
};
