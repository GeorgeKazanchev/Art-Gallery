import React from 'react';
import * as styles from './gallery.module.scss';
import { Search } from '../../../features/search';
import { PaintingsList } from './paintings-list';
import { Pagination } from '../../../features/pagination';
import { paintings } from '../../../shared/mocks/paintings';

export const Gallery: React.FC = () => {
  return (
    <section className={styles.gallery}>
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
