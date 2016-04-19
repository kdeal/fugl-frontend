import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('project-plugin-selector', 'Integration | Component | project plugin selector', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{project-plugin-selector model=undefined plugins=[]}}`);

  assert.ok(this.$().text().trim().indexOf('Project Plugins') >= 0);
});
