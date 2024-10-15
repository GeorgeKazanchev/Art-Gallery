import React from 'react';
import * as styles from './paintings-list.module.scss';
import { PaintingCard } from '../../../../entities/painting-card';
import type { Painting } from '../../../../shared/types/painting';

type Props = {
  paintings: Painting[],
};

export const PaintingsList: React.FC<Props> = ({ paintings }) => {
  return (
    <ul className={styles.list}>
      {paintings.map((painting) =>
        <PaintingCard
          key={painting.id}
          painting={painting}
        />
      )}
    </ul>
  );
};
