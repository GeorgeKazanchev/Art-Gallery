const generateUniqueKey = (prefix: string): string => (
  `${prefix}_${new Date().getTime()}`
);

export default generateUniqueKey;
