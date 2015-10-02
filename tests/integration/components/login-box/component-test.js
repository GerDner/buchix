import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('login-box', 'Integration | Component | login box', {
  integration: true
});

test('it renders login fields', function(assert) {
  assert.expect(2);

  this.render(hbs`{{login-box}}`);

  assert.equal(this.$().find('.input-login').length, 1);
  assert.equal(this.$().find('.input-password').length, 1);
});




