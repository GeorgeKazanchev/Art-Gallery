import React from 'react';
import * as styles from './gallery.module.scss';
import { skipToken } from '@reduxjs/toolkit/query';
import { useAppSelector } from '../../../shared/model/redux-hooks';
import { selectTheme } from '../../../shared/model/theme-slice';
import { isThemeLight } from '../../../shared/model/is-theme-light';
import { useGetAuthorsQuery, useGetLocationsQuery, useGetPaintingsQuery } from '../../../shared/api/api';
import { Loader } from '../../../shared/ui';
import { Message } from '../../../shared/ui';
import { Search } from '../../../features/search';
import { PaintingsList } from './paintings-list';
import { Pagination } from '../../../features/pagination';

import getPaintingFromDto from '../../../shared/model/get-painting-from-dto';

export const Gallery: React.FC = () => {
  const {
    data: paintingsDto = [],
    isLoading,
    isSuccess: isPaintingsLoaded,
    isError,
  } = useGetPaintingsQuery();

  const { data: authors = [] } = useGetAuthorsQuery(isPaintingsLoaded ? null : skipToken);
  const { data: locations = [] } = useGetLocationsQuery(isPaintingsLoaded ? null : skipToken);
  const paintings = paintingsDto.map((painting) => getPaintingFromDto(painting, authors, locations));

  const curTheme = useAppSelector(selectTheme);
  const isLight = isThemeLight(curTheme);

  let content: React.ReactNode;

  if (isLoading) {
    content = (
      <div className={styles.loaderWrapper}>
        <Loader isLight={isLight} />
      </div>
    );
  } else if (isPaintingsLoaded) {
    content = (
      <div className={styles.container}>
        <Search />
        <PaintingsList
          paintings={paintings}
        />
        <Pagination
          pagesCount={9}
          currentPage={1}
        />
      </div>
    );
  } else if (isError) {
    content = (
      <div className={styles.errorWrapper}>
        <Message
          message='Connection error'
          description='Please try again later'
          isLight={isLight}
        />
      </div>
    );
  }

  return (
    <React.Fragment>
      <section className={`${styles.gallery} ${isLight ? styles.galleryLight : ''}`}>
        <h2 className={styles.visuallyHidden}>Gallery</h2>
        {content}
      </section>
    </React.Fragment>
  );
};
