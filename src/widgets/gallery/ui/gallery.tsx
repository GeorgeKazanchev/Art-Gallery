import React from 'react';
import * as styles from './gallery.module.scss';
import { useAppSelector } from '../../../shared/model/redux-hooks';
import { selectTheme } from '../../../shared/model/theme-slice';
import { isThemeLight } from '../../../shared/helpers/theme';
import { Search } from '../../../features/search';
import { PaintingsList } from './paintings-list';
import { Pagination } from '../../../features/pagination';
import { paintings } from '../../../shared/mocks/paintings';

export const Gallery: React.FC = () => {
  const curTheme = useAppSelector(selectTheme);
  const isLight = isThemeLight(curTheme);

  return (
    <section className={`${styles.gallery} ${isLight ? styles.galleryLight : ''}`}>
      <div className={styles.container}>
        <Search />
        <PaintingsList
          paintings={paintings}
        />
        <Pagination
          pagesCount={9}
          checkedPage={4}
        />
      </div>
    </section>
  );
};
