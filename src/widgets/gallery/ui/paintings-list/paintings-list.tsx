import React from 'react';
import { PaintingCard } from '../../../../entities/painting-card';
import { paintings } from '../../../../shared/mocks/paintings';

//  Temporary solution
export const PaintingsList: React.FC = () => {
  return (
    <ul>
      {paintings.map((painting) =>
        <PaintingCard
          key={painting.id}
          painting={painting}
        />
      )}
    </ul>
  );
};
