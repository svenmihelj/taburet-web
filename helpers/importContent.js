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

    acc[item.language] = obj;

    return acc;
  }, {});
};
