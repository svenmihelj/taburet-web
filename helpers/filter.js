export const filterFurniture = (list, options) => {
  return [...list].filter((item) => {
    if (options?.price && item.price > options.price) {
      return false;
    }

    if (options?.type?.length && !options.type.includes(item.type)) {
      return false;
    }

    if (
      options?.mechanism?.length &&
      !options.mechanism.includes(item.mechanism)
    ) {
      return false;
    }

    if (options?.material?.length && options.material.includes(item.material)) {
      return false;
    }

    return true;
  });
};
