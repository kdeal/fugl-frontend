import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('create-category-form', 'Integration | Component | create category', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{create-category-form}}`);

  assert.ok(this.$().text().trim().indexOf('Title') >= 0);

  // Template block usage:"
  this.render(hbs`
    {{#create-category-form}}
      template block text
    {{/create-category-form}}
  `);

  assert.ok(this.$().text().trim().indexOf('template block text') >= 0);
});
