/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      includePaths:  [
        'bower_components/bootstrap/scss'
      ]
    }
  });
  return app.toTree();
};
