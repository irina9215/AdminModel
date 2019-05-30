const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/gamma-projectx/excel', { target: 'http://120.52.79.177:8080/' }));
};