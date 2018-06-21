const assert = require('assert');
const app = require('../../src/app');

describe('\'instadb\' service', () => {
  it('registered the service', () => {
    const service = app.service('instadb');

    assert.ok(service, 'Registered the service');
  });
});
