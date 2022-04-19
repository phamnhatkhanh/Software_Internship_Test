const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://register-internship.herokuapp.com/",
      changeOrigin: true,
    })
  );
};
