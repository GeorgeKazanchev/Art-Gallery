import React from 'react';
import * as styles from './gallery.module.scss';
import { Search } from '../../../features/search';
import { Pagination } from '../../../features/pagination';
import { PaintingsList } from './paintings-list';

export const Gallery: React.FC = () => {
  return (
    <section className={styles.gallery}>
      <div className={styles.container}>
        <Search />
        <PaintingsList />
        <Pagination
          pagesCount={9}
          activePage={4}
        />
      </div>
    </section>
  );
};
