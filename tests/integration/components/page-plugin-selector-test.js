import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('page-plugin-selector', 'Integration | Component | page plugin selector', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{page-plugin-selector model=undefined plugins=[]}}`);

  assert.ok(this.$().text().trim().indexOf('Page Plugins') >= 0);
});
