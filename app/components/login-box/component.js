import Ember from 'ember';

export default Ember.Component.extend({

  status: false,

  /**
   * is glimmer component
   */
  isGlimmerComponent: true,

  actions: {
    login() {
      this.set('status', true);
    }
  }

});
