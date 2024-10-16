import React from 'react';
import * as styles from './pagination.module.scss';
import { useAppSelector } from '../../../shared/model/redux-hooks';
import { selectTheme } from '../../../shared/model/theme-slice';
import { isThemeLight } from '../../../shared/helpers/theme';
import { ELLIPSIS, MAX_PAGES_SHOWN } from '../config/consts';

import createPaginator from '../helpers/create-paginator';
import getPageClassname from '../helpers/get-page-classname';

type Props = {
  pagesCount: number,
  checkedPage: number,
};

const getPaginationPages = createPaginator(MAX_PAGES_SHOWN, ELLIPSIS);

export const Pagination: React.FC<Props> = ({ pagesCount, checkedPage }) => {
  if (checkedPage < 0 || checkedPage > pagesCount) {
    throw new RangeError('Active page in the pagination is incorrect');
  }

  const paginationPages = getPaginationPages(pagesCount, checkedPage);
  const curTheme = useAppSelector(selectTheme);
  const isLight = isThemeLight(curTheme);

  return (
    <div className={styles.pagination}>
      <a
        className={`${styles.adjacentPage} ${styles.previousPage} ${isLight ? styles.adjacentPageLight : ''}`}
        href='#'
        aria-label='Go to the previous page'
      >
        <svg className={`${styles.pageLinkIcon} ${isLight ? styles.pageLinkIconLight : ''}`} width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.312255 0.283494C0.487119 0.0697714 0.80213 0.0382703 1.01585 0.213134L7.61585 5.61313C7.73192 5.7081 7.79923 5.85015 7.79923 6.00011C7.79923 6.15008 7.73192 6.29213 7.61585 6.38709L1.01585 11.7871C0.80213 11.962 0.487119 11.9305 0.312255 11.7167C0.137391 11.503 0.168893 11.188 0.382615 11.0131L6.50964 6.00011L0.382615 0.987091C0.168892 0.812228 0.137391 0.497216 0.312255 0.283494Z" />
        </svg>
      </a>

      <ul className={`${styles.pages} ${isLight ? styles.pagesLight : ''}`}>
        {paginationPages.map((page, index) => (       //  TODO: Change keys to something else
          <li key={index} className={getPageClassname(page, checkedPage, isLight)}>
            {page !== ELLIPSIS
              ? (
                <a className={`${styles.pageLink}`} href='#'>{page}</a>
              )
              : ELLIPSIS}
          </li>
        ))}
      </ul>

      <a
        className={`${styles.adjacentPage} ${isLight ? styles.adjacentPageLight : ''}`}
        href='#'
        aria-label='Go to the next page'
      >
        <svg className={`${styles.pageLinkIcon} ${isLight ? styles.pageLinkIconLight : ''}`} width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.312255 0.283494C0.487119 0.0697714 0.80213 0.0382703 1.01585 0.213134L7.61585 5.61313C7.73192 5.7081 7.79923 5.85015 7.79923 6.00011C7.79923 6.15008 7.73192 6.29213 7.61585 6.38709L1.01585 11.7871C0.80213 11.962 0.487119 11.9305 0.312255 11.7167C0.137391 11.503 0.168893 11.188 0.382615 11.0131L6.50964 6.00011L0.382615 0.987091C0.168892 0.812228 0.137391 0.497216 0.312255 0.283494Z" />
        </svg>
      </a>
    </div>
  );
};
