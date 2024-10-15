export type Author = {
  id: number,
  name: string,
};

export type Location = {
  id: number,
  name: string,
};

export type Painting = {
  id: number,
  name: string,
  imgUrl: string,
  created: string,
  author: Author,
  location: Location,
};
