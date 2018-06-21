// Initializes the `instadb` service on path `/instadb`
const createService = require('feathers-nedb');
const createModel = require('../../models/instadb.model');
const hooks = require('./instadb.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/instadb', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('instadb');

  service.hooks(hooks);
};
