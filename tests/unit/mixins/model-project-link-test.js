import Ember from 'ember';
import ModelProjectLinkMixin from 'fugl-frontend/mixins/model-project-link';
import { module, test } from 'qunit';

module('Unit | Mixin | model project link');

// Replace this with your real tests.
test('it works', function(assert) {
  let ModelProjectLinkObject = Ember.Object.extend(ModelProjectLinkMixin);
  let subject = ModelProjectLinkObject.create();
  assert.ok(subject);
});
