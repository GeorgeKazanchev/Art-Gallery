const { floor, min, max } = Math;
const range = (low: number, high: number) =>
  Array.from(
    {
      length: high - low,
    },
    (_, i) => i + low,
  );

const getResArrayStartValues = (start: number, ellipsis: string) => {
  let values: (string | number)[];
  if (start > 2) {
    values = [1, ellipsis];
  } else if (start > 1) {
    values = [1];
  } else {
    values = [];
  }
  return values;
};

const getResArrayEndValues = (end: number, total: number, ellipsis: string) => {
  let values: (string | number)[];
  if (end < total - 1) {
    values = [ellipsis, total];
  } else if (end < total) {
    values = [total];
  } else {
    values = [];
  }
  return values;
};

const createPaginator =
  (count: number, ellipsis: string) => (total: number, curPage: number) => {
    const start = max(
      1,
      min(curPage - floor((count - 3) / 2), total - count + 2),
    );
    const end = min(total, max(curPage + floor((count - 2) / 2), count - 1));

    const resArrayStartValues = getResArrayStartValues(start, ellipsis);
    const resArrayEndValues = getResArrayEndValues(end, total, ellipsis);

    return [
      ...resArrayStartValues,
      ...range(start, end + 1),
      ...resArrayEndValues,
    ];
  };

export default createPaginator;
