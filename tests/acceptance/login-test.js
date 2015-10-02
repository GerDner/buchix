import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'buchix/tests/helpers/start-app';

module('Acceptance | login', {
  beforeEach: function () {
    this.application = startApp();
  },

  afterEach: function () {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /account/login', function (assert) {
  visit('/account/login');

  andThen(function () {
    assert.equal(currentURL(), '/account/login');
  });

});
