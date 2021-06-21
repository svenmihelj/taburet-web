export const reduceFilterOptions = (content) =>
  content.reduce(
    (acc, item) => {
      if (item.price > acc.price.max) {
        acc.price.max = item.price;
      }
      if (item.price < acc.price.min) {
        acc.price.min = item.price;
      }
      if (item.type && !acc.types.includes(item.type)) {
        acc.types.push(item.type);
      }
      if (item.mechanism && !acc.mechanism.includes(item.mechanism)) {
        acc.mechanism.push(item.mechanism);
      }
      if (item.material && !acc.material.includes(item.material)) {
        acc.material.push(item.material);
      }

      return acc;
    },
    {
      price: {
        min: 9999999,
        max: 0,
      },
      types: [],
      mechanism: [],
      material: [],
    }
  );
