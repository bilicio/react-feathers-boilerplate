const instadb = require('./instadb/instadb.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(instadb);
};
