const snakeCaseToCamel = (data) => {
  if (Array.isArray(data)) return data.map((item) => snakeCaseToCamel(item));
  else if (data !== null && typeof data === "object") {
    const transformedData = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const camelCase = key.replace(/_([a-z])/g, (match, letter) =>
          letter.toUpperCase()
        );
        transformedData[camelCase] = snakeCaseToCamel(
          data[key]
        );
      }
    }
    return transformedData;
  }
  return data;
}

export const Middleware = ({ data }) => {
  const transformedData = snakeCaseToCamel(data);
  return transformedData;
};


