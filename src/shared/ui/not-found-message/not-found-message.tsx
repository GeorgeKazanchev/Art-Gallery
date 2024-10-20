import React from 'react';
import Message from '../message/message';
import * as styles from './not-found-message.module.scss';

type Props = {
  searchQuery: string;
  description: string;
  isLight: boolean;
};

export default function NotFoundMessage({
  searchQuery,
  description,
  isLight,
}: Props): React.ReactNode {
  return (
    <Message message={searchQuery} description={description} isLight={isLight}>
      No matches for <span className={styles.searchQuery}>{searchQuery}</span>
    </Message>
  );
}
