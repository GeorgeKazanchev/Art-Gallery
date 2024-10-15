import { Painting } from '../types/painting';

export const paintings: Painting[] = [
  {
    id: 1,
    name: 'Cascate di Tivoli',
    imgUrl: '/assets/paintings/painting-1.jpg',
    created: '1761',
    author: {
      id: 1,
      name: 'Jean Honore Fragonard',
    },
    location: {
      id: 1,
      name: 'Louvre Museum',
    }
  },
  {
    id: 2,
    name: 'Portrait of Vincent van Gogh',
    imgUrl: '/assets/paintings/painting-2.jpg',
    created: '1886',
    author: {
      id: 1,
      name: 'Jean Honore Fragonard',
    },
    location: {
      id: 1,
      name: 'Louvre Museum',
    }
  },
];
