import React from 'react';
import isThemeLight from '../../../shared/model/is-theme-light';

import * as styles from './pagination.module.scss';
import { useAppSelector } from '../../../shared/model/redux-hooks';
import { selectTheme } from '../../../shared/model/theme-slice';
import { ELLIPSIS, MAX_PAGES_SHOWN } from '../config/consts';

import createPaginator from '../model/create-paginator';
import getPageClassname from '../model/get-page-classname';
import generateUniqueKey from '../../../shared/model/generate-unique-key';

type Props = {
  pagesCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const getPaginationPages = createPaginator(MAX_PAGES_SHOWN, ELLIPSIS);

export default function Pagination({
  pagesCount,
  currentPage,
  onPageChange,
}: Props): React.ReactNode {
  if (currentPage < 0 || currentPage > pagesCount) {
    throw new RangeError('Active page in the pagination is incorrect');
  }

  const paginationPages = getPaginationPages(pagesCount, currentPage);
  const curTheme = useAppSelector(selectTheme);
  const isLight = isThemeLight(curTheme);

  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.adjacentPage} ${styles.previousPage} ${isLight ? styles.adjacentPageLight : ''}`}
        type="button"
        disabled={currentPage === 1}
        aria-label="Go to the previous page"
        onClick={() => onPageChange(currentPage - 1)}
      >
        <svg
          className={`${styles.pageLinkIcon} ${isLight ? styles.pageLinkIconLight : ''}`}
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.312255 0.283494C0.487119 0.0697714 0.80213 0.0382703 1.01585 0.213134L7.61585 5.61313C7.73192 5.7081 7.79923 5.85015 7.79923 6.00011C7.79923 6.15008 7.73192 6.29213 7.61585 6.38709L1.01585 11.7871C0.80213 11.962 0.487119 11.9305 0.312255 11.7167C0.137391 11.503 0.168893 11.188 0.382615 11.0131L6.50964 6.00011L0.382615 0.987091C0.168892 0.812228 0.137391 0.497216 0.312255 0.283494Z"
          />
        </svg>
      </button>

      <ul className={`${styles.pages} ${isLight ? styles.pagesLight : ''}`}>
        {paginationPages.map((page, index) => (
          <li
            key={generateUniqueKey(index.toString())}
            className={getPageClassname(page, currentPage, isLight)}
          >
            {page !== ELLIPSIS ? (
              <button
                className={styles.pageLink}
                type="button"
                onClick={() => {
                  if (typeof page === 'number') {
                    onPageChange(page);
                  }
                }}
              >
                {page}
              </button>
            ) : (
              ELLIPSIS
            )}
          </li>
        ))}
      </ul>

      <button
        className={`${styles.adjacentPage} ${isLight ? styles.adjacentPageLight : ''}`}
        type="button"
        disabled={currentPage === pagesCount}
        aria-label="Go to the next page"
        onClick={() => onPageChange(currentPage + 1)}
      >
        <svg
          className={`${styles.pageLinkIcon} ${isLight ? styles.pageLinkIconLight : ''}`}
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.312255 0.283494C0.487119 0.0697714 0.80213 0.0382703 1.01585 0.213134L7.61585 5.61313C7.73192 5.7081 7.79923 5.85015 7.79923 6.00011C7.79923 6.15008 7.73192 6.29213 7.61585 6.38709L1.01585 11.7871C0.80213 11.962 0.487119 11.9305 0.312255 11.7167C0.137391 11.503 0.168893 11.188 0.382615 11.0131L6.50964 6.00011L0.382615 0.987091C0.168892 0.812228 0.137391 0.497216 0.312255 0.283494Z"
          />
        </svg>
      </button>
    </div>
  );
}
