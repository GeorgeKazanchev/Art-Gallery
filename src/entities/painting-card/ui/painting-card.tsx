import React from 'react';
import * as styles from './painting-card.module.scss';
import type { Painting } from '../../../shared/types/painting';

type Props = {
  painting: Painting,
};

export const PaintingCard: React.FC<Props> = ({ painting }) => {
  return (
    <figure className={styles.card}>
      <img className={styles.image} src={painting.imgUrl} alt={painting.name} />
      <figcaption className={styles.caption}>
        <div className={styles.descriptionWrapper}>

          <div className={`${styles.description} ${styles.descriptionMain}`}>
            <h2 className={`${styles.upperLine} ${styles.name}`}>
              {painting.name}
            </h2>
            <span className={styles.lowerLine}>
              {painting.created}
            </span>
          </div>

          <div className={`${styles.description} ${styles.descriptionAdditional}`}>
            <span className={styles.upperLine}>
              {painting.author.name}
            </span>
            <span className={styles.lowerLine}>
              {painting.location.name}
            </span>
          </div>

        </div>
      </figcaption>
    </figure>
  );
};
