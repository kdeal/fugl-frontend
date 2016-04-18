import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('create-page-plugin-form', 'Integration | Component | create page plugin form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{page-plugin-form}}`);

  assert.ok(this.$().text().trim().indexOf('Title') >= 0);

  // Template block usage:"
  this.render(hbs`
    {{#page-plugin-form}}
      template block text
    {{/page-plugin-form}}
  `);

  assert.ok(this.$().text().trim().indexOf('template block text') >= 0);
});
