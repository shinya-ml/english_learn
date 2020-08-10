export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getIndex = (obj, item) => {
  let matchedIndex = 0;
  Object.keys(obj).forEach((key) => {
    if (JSON.stringify(item) === JSON.stringify(obj[key])) {
      matchedIndex = parseInt(key);
    }
  });
  return matchedIndex;
};
