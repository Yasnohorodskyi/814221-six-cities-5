export const generateRandomDate = (start, end) => {
  let date = new Date(start + Math.random() * (end - start));
  return date;
};

export const getRandomElsFromArr = (array, randomMin, randomMax) => {
  let sortedEls = new Set();
  let elsQuantity = getRandomInteger(randomMin, randomMax);
  for (let i = 0; i < elsQuantity; i++) {
    let randomIndex = getRandomInteger(0, array.length - 1);
    sortedEls.add(array[randomIndex]);
  }
  return Array.from(sortedEls);
};

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

