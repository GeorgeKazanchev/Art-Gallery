import React from 'react';
import { Header } from '../../../features/header';
import { Gallery } from '../../../widgets/gallery';

export const Main: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Gallery />
    </React.Fragment>
  );
};
