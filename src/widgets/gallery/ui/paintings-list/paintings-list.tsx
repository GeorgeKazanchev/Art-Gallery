import React from 'react';
import PaintingCard from '../../../../entities/painting-card';

import * as styles from './paintings-list.module.scss';
import type { Painting } from '../../../../shared/types/painting';

type Props = {
  paintings: Painting[],
};

export default function PaintingsList({ paintings }: Props): React.ReactNode {
  return (
    <ul className={styles.list}>
      {paintings.map((painting) => (
        <PaintingCard
          key={painting.id}
          painting={painting}
        />
      ))}
    </ul>
  );
}
