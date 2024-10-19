import type { Author, Location, Painting } from '../types/painting';
import type { PaintingDto } from '../types/painting-dto';

const getPaintingFromDto = (
  painting: PaintingDto,
  authors: Author[],
  locations: Location[],
): Painting => {
  const {
    id, name, imageUrl: imgUrl, created, authorId, locationId,
  } = painting;

  const author = authors.find((item) => item.id === authorId);
  const location = locations.find((item) => item.id === locationId);

  return {
    id,
    name,
    imgUrl,
    created,
    author: author ?? { id: 0, name: 'Author: N/A' },
    location: location ?? { id: 0, location: 'Location: N/A' },
  };
};

export default getPaintingFromDto;
