import React from 'react';
import { skipToken } from '@reduxjs/toolkit/query';

import PaintingsList from '../ui/paintings-list';
import NotFoundMessage from '../../../shared/ui/not-found-message/not-found-message';
import isThemeLight from '../../../shared/model/is-theme-light';
import getPaintingFromDto from '../../../shared/model/get-painting-from-dto';
import * as styles from './use-search-paintings.module.scss';

import { useAppSelector } from '../../../shared/model/redux-hooks';
import { selectTheme } from '../../../shared/model/theme-slice';
import { Loader, Message } from '../../../shared/ui';

import {
  useGetAuthorsQuery,
  useGetLocationsQuery,
  useGetPaintingsBySearchQuery,
} from '../../../shared/api/api';

export default function useSearchPaintings(
  searchQuery: string,
): React.ReactNode {
  const {
    data: searchedPaintingsDto = [],
    isLoading: isSearchLoading,
    isSuccess: isSearchSuccess,
    isError: isSearchError,
  } = useGetPaintingsBySearchQuery(searchQuery);

  const { data: authors = [] } = useGetAuthorsQuery(
    isSearchSuccess ? null : skipToken,
  );
  const { data: locations = [] } = useGetLocationsQuery(
    isSearchSuccess ? null : skipToken,
  );

  const foundPaintings = searchedPaintingsDto
    .map((painting) => getPaintingFromDto(painting, authors, locations))
    .filter((painting) =>
      painting.name
        .toLocaleLowerCase()
        .includes(searchQuery.toLocaleLowerCase()),
    );

  const curTheme = useAppSelector(selectTheme);
  const isLight = isThemeLight(curTheme);

  let searchContent: React.ReactNode;
  if (isSearchLoading) {
    searchContent = (
      <div className={styles.loaderWrapper}>
        <Loader isLight={isLight} />
      </div>
    );
  } else if (isSearchSuccess) {
    searchContent =
      foundPaintings.length > 0 ? (
        <PaintingsList paintings={foundPaintings} />
      ) : (
        <div className={styles.errorWrapper}>
          <NotFoundMessage
            searchQuery={searchQuery}
            description="Please try again with a different spelling or keywords."
            isLight={isLight}
          />
        </div>
      );
  } else if (isSearchError) {
    searchContent = (
      <Message
        message="An error occured while searching"
        description="Please try again later."
        isLight={isLight}
      />
    );
  }

  return searchContent;
}
