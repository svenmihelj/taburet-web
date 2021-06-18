export const reduceFilterOptions = (content) =>
  content.reduce((acc, item) => {
    const obj = {
      price: {
        min: item.price,
        max: item.price,
      },
      types: [item.type],
      mechanism: [item.mechanism],
      material: [item.material],
    };
    if (item.price > obj.price.max) {
      obj.price.max = item.price;
    }
    if (item.price < obj.price.min) {
      obj.price.min = item.price;
    }
    if (item.type && !obj.types.includes(item.type)) {
      obj.types.push(item.type);
    }
    if (item.mechanism && !obj.mechanism.includes(item.mechanism)) {
      obj.mechanism.push(item.mechanism);
    }
    if (item.material && !obj.material.includes(item.material)) {
      obj.material.push(item.material);
    }

    return obj;
  }, {});
