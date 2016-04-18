import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('project-form', 'Integration | Component | create project form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{project-form}}`);

  assert.ok(this.$().text().trim().indexOf('Title') >= 0);

  // Template block usage:"
  this.render(hbs`
    {{#project-form}}
      template block text
    {{/project-form}}
  `);

  assert.ok(this.$().text().trim().indexOf('template block text') >= 0);
});
