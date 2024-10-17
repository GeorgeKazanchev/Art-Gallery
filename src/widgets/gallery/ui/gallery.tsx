import React from 'react';
import * as styles from './gallery.module.scss';
import { useAppSelector } from '../../../shared/model/redux-hooks';
import { selectTheme } from '../../../shared/model/theme-slice';
import { isThemeLight } from '../../../shared/model/is-theme-light';
import { useGetAuthorsQuery, useGetLocationsQuery, useGetPaintingsQuery } from '../../../shared/api/api';
import { Search } from '../../../features/search';
import { PaintingsList } from './paintings-list';
import { Pagination } from '../../../features/pagination';

import getPaintingFromDto from '../../../shared/model/get-painting-from-dto';

export const Gallery: React.FC = () => {
  const { data: paintingsDto = [] } = useGetPaintingsQuery();
  const { data: authors = [] } = useGetAuthorsQuery();
  const { data: locations = [] } = useGetLocationsQuery();

  const paintings = paintingsDto.map((painting) => getPaintingFromDto(painting, authors, locations));

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
