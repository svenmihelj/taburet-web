export const nameCompateAsc = (a, b) => {
  if (a.title < b.title) {
    return 1;
  }
  if (a.title > b.title) {
    return -1;
  }

  return 0;
};

export const nameCompateDesc = (a, b) => {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }

  return 0;
};

export const priceCompareAsc = (a, b) => {
  if (a.price < b.price) {
    return 1;
  }
  if (a.price > b.price) {
    return -1;
  }

  return 0;
};

export const priceCompareDesc = (a, b) => {
  if (a.price < b.price) {
    return -1;
  }
  if (a.price > b.price) {
    return 1;
  }

  return 0;
};

export const dateCompareDesc = (a, b) => {
  if (a.date < b.date) {
    return -1;
  }
  if (a.date > b.date) {
    return 1;
  }

  return 0;
};
