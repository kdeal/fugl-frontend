import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('login-form', 'Integration | Component | login form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{login-form}}`);

  let text = this.$().text().trim();
  assert.ok(text.indexOf('Username') >= 0);
  assert.ok(text.indexOf('Password') >= 0);
});
