import React from 'react';
import isThemeLight from '../../../shared/model/is-theme-light';

import * as styles from './painting-card.module.scss';
import { useAppSelector } from '../../../shared/model/redux-hooks';
import { selectTheme } from '../../../shared/model/theme-slice';
import { SERVER_BASE_URL } from '../../../shared/config/consts';
import type { Painting } from '../../../shared/types/painting';

type Props = {
  painting: Painting,
};

export default function PaintingCard({ painting }: Props): React.ReactNode {
  const curTheme = useAppSelector(selectTheme);
  const isLight = isThemeLight(curTheme);

  const [isImageLoaded, setIsImageLoaded] = React.useState(false);

  return (
    <li>
      <figure
        className={styles.card}
        title={(
          `Name: ${painting.name}\n`
          + `Created: ${painting.created}\n`
          + `Author: ${painting.author.name}\n`
          + `Location: ${painting.location.location}`
        )}
      >
        <div
          style={{ display: isImageLoaded ? 'none' : 'block' }}
          className={`${styles.imageLoader} ${isLight ? styles.imageLoaderLight : ''}`}
        />
        <img
          style={{ display: isImageLoaded ? 'block' : 'none' }}
          onLoad={() => setIsImageLoaded(true)}
          className={styles.image}
          src={`${SERVER_BASE_URL}/${painting.imgUrl}`}
          alt={painting.name}
        />
        <figcaption className={`${styles.caption} ${isLight ? styles.captionLight : ''}`}>
          <div className={styles.descriptionWrapper}>

            <div className={`${styles.description} ${styles.descriptionMain}`}>
              <h2 className={`${styles.upperLine} ${styles.name} ${isLight ? styles.upperLineLight : ''}`}>
                {painting.name}
              </h2>
              <span className={`${styles.lowerLine} ${isLight ? styles.lowerLineLight : ''}`}>
                {painting.created}
              </span>
            </div>

            <div className={`${styles.description} ${styles.descriptionAdditional}`}>
              <span className={`${styles.upperLine} ${isLight ? styles.upperLineLight : ''}`}>
                {painting.author.name}
              </span>
              <span className={`${styles.lowerLine} ${isLight ? styles.lowerLineLight : ''}`}>
                {painting.location.location}
              </span>
            </div>

          </div>
        </figcaption>
      </figure>
    </li>
  );
}
