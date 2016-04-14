import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('post-form', 'Integration | Component | post form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{post-form}}`);

  assert.ok(this.$().text().trim().indexOf('Title') >= 0);

  // Template block usage:"
  this.render(hbs`
    {{#post-form}}
      template block text
    {{/post-form}}
  `);

  assert.ok(this.$().text().trim().indexOf('template block text') >= 0);
});
