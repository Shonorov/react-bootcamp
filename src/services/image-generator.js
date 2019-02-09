var nanoid = require("nanoid");

export const getImage = function() {
  return `https://api.adorable.io/avatars/160/${nanoid()}`;
};

export default getImage;
