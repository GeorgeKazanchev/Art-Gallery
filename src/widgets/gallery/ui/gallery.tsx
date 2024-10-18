import React from 'react';
import * as styles from './gallery.module.scss';
import getPaintingFromDto from '../../../shared/model/get-painting-from-dto';
import { skipToken } from '@reduxjs/toolkit/query';
import { useAppSelector } from '../../../shared/model/redux-hooks';
import { selectTheme } from '../../../shared/model/theme-slice';
import { isThemeLight } from '../../../shared/model/is-theme-light';
import { Loader } from '../../../shared/ui';
import { Message } from '../../../shared/ui';
import { Search } from '../../../features/search';
import { PaintingsList } from './paintings-list';
import { Pagination } from '../../../features/pagination';
import { PICTURES_PER_PAGE } from '../../../shared/config/consts';

import {
  useGetAllPaintingsQuery,
  useGetAuthorsQuery,
  useGetLocationsQuery,
  useGetShownPaintingsQuery
} from '../../../shared/api/api';

export const Gallery: React.FC = () => {
  //  Количество страниц галереи зависит от общего числа картин.
  //  Чтобы получить это число, с сервера загружаются все картины.
  let totalPages = React.useRef(0);
  const { data: allPaintings, isSuccess } = useGetAllPaintingsQuery();
  if (isSuccess) {
    totalPages.current = Math.ceil(allPaintings.length / PICTURES_PER_PAGE);
  }

  const [currentPage, setCurrentPage] = React.useState(1);

  const {
    data: paintingsDto = [],
    isLoading,
    isSuccess: isPaintingsLoaded,
    isError,
  } = useGetShownPaintingsQuery(currentPage);
  const { data: authors = [] } = useGetAuthorsQuery(isPaintingsLoaded ? null : skipToken);
  const { data: locations = [] } = useGetLocationsQuery(isPaintingsLoaded ? null : skipToken);
  const paintings = paintingsDto.map((painting) => getPaintingFromDto(painting, authors, locations));

  const curTheme = useAppSelector(selectTheme);
  const isLight = isThemeLight(curTheme);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
          pagesCount={totalPages.current}
          currentPage={currentPage}
          onPageChange={handlePageChange}
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
