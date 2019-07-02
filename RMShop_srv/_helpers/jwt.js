const expressJwt = require("express-jwt");
const config = require("config.json");

module.exports = jwt;

function jwt() {
  const { secret } = config;
  return expressJwt({ secret }).unless({
    path: [
      // public routes that don't require authentication
      "/img/1.jpeg",
      "/public",
      "/categories",
      "/products",
      "/users",
      "/users/authenticate",
      "/users/registration"
    ]
  });
}
