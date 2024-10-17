import type { Author, Location, Painting } from '../types/painting';
import type { PaintingDto } from '../types/painting-dto';

const getPaintingFromDto = (
  painting: PaintingDto,
  authors: Author[],
  locations: Location[]
): Painting => {
  
  const { id, name, imageUrl: imgUrl, created, authorId, locationId } = painting;

  const author = authors.find((item) => item.id === authorId);
  if (!author) {
    throw new Error('The painting\'s author is not found');
  }

  const location = locations.find((item) => item.id === locationId);
  if (!location) {
    throw new Error('The painting\'s location is not found');
  }

  return {
    id,
    name,
    imgUrl,
    created,
    author,
    location,
  };
};

export default getPaintingFromDto;
