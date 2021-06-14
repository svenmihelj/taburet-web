export const importContent = async () => {
  const markdownFiles = require
    .context("../content", true, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));

  const content = await Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../content/${path}`);

      const language = path.substring(0, 2);
      const type = path.split("/")[1].replace(".md", "");

      return {
        ...markdown,
        language,
        type,
        id: path.split("/")[2]?.replace(".md", ""),
      };
    })
  );

  return content.reduce((acc, item) => {
    const obj = acc[item.language] || {};
    console.log(item.price);
    if (!obj.hasOwnProperty("filterOptions")) {
      obj.filterOptions = {
        price: {
          min: item.attributes.price,
          max: item.attributes.price,
        },
        types: [item.attributes.type],
        mechanism: [item.attributes.mechanism],
      };
    }
    if (!obj.hasOwnProperty("home")) {
      obj.home = {};
    }
    if (!obj.hasOwnProperty("furniture")) {
      obj.furniture = [];
    }

    if (item.type === "home") {
      obj.home = item.attributes;
    } else if (item.type === "furniture") {
      obj.furniture.push({ ...item.attributes, id: item.id });
    }

    if (item.attributes.price > obj.filterOptions.price.max) {
      obj.filterOptions.price.max = item.attributes.price;
    } else if (item.attributes.price < obj.filterOptions.price.min) {
      obj.filterOptions.price.min = item.attributes.price;
    } else if (
      item.attributes.type &&
      !obj.filterOptions.types.includes(item.attributes.type)
    ) {
      obj.filterOptions.types.push(item.attributes.type);
    } else if (
      item.attributes.mechanism &&
      !obj.filterOptions.mechanism.includes(item.attributes.mechanism)
    ) {
      obj.filterOptions.mechanism.push(item.attributes.mechanism);
    }

    acc[item.language] = obj;

    return acc;
  }, {});
};
