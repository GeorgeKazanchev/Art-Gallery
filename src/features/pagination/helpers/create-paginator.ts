import { ELLIPSIS } from '../config/consts';

const { floor, min, max } = Math;
const range = (low: number, high: number) => Array.from(
  {
    length: high - low,
  },
  (_, i) => i + low
);

const createPaginator = (count: number, ellipsis = ELLIPSIS) => (total: number, curPage: number) => {
  const start = max(1, min(curPage - floor((count - 3) / 2), total - count + 2));
  const end = min(total, max(curPage + floor((count - 2) / 2), count - 1));
  return [
    ...(start > 2 ? [1, ellipsis] : start > 1 ? [1] : []),
    ...range(start, end + 1), 
    ...(end < total - 1 ? [ellipsis, total] : end < total ? [total] : []),
  ];
};

export default createPaginator;
