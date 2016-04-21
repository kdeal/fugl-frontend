import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('create-tag-form', 'Integration | Component | create tag', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{category-form}}`);

  assert.ok(this.$().text().trim().indexOf('Title') >= 0);

  // Template block usage:"
  this.render(hbs`
    {{#tag-form}}
      template block text
    {{/tag-form}}
  `);

  assert.ok(this.$().text().trim().indexOf('template block text') >= 0);
});
