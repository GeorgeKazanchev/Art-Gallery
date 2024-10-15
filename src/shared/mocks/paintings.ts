import type { Painting } from '../types/painting';

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
      id: 2,
      name: 'John Russell',
    },
    location: {
      id: 2,
      name: 'Van Gogh Museum',
    }
  },
  {
    id: 3,
    name: 'Unequal Marriage',
    imgUrl: '/assets/paintings/painting-3.jpg',
    created: '1862',
    author: {
      id: 3,
      name: 'Vasili Pukirev',
    },
    location: {
      id: 3,
      name: 'Tretyakov Gallery',
    }
  },
  {
    id: 4,
    name: 'The happy Violinist',
    imgUrl: '/assets/paintings/painting-4.jpg',
    created: '1624',
    author: {
      id: 4,
      name: 'Gerard van Honthorst',
    },
    location: {
      id: 4,
      name: 'Thyssen-Bornemisza Museum',
    }
  },
  {
    id: 5,
    name: 'The Arcadian',
    imgUrl: '/assets/paintings/painting-5.jpg',
    created: '1834',
    author: {
      id: 5,
      name: 'Thomas Cole',
    },
    location: {
      id: 5,
      name: 'Metropolitan Museum of Art',
    }
  },
  {
    id: 6,
    name: 'Golfo di Napoli',
    imgUrl: '/assets/paintings/painting-6.jpg',
    created: '1845',
    author: {
      id: 6,
      name: 'Ivan Aivazovsky',
    },
    location: {
      id: 6,
      name: 'The Ostrogozhsk Museum',
    }
  },
];
