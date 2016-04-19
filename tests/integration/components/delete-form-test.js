import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('delete-form', 'Integration | Component | delete form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{delete-form}}`);

  assert.ok(this.$().text().trim().indexOf('Delete') >= 0);

  // Template block usage:"
  this.render(hbs`
    {{#delete-form}}
      template block text
    {{/delete-form}}
  `);

  assert.ok(this.$().text().trim().indexOf('template block text') >= 0);
});
