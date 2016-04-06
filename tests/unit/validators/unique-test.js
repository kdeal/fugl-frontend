import { moduleFor, test } from 'ember-qunit';

moduleFor('validator:unique', 'Unit | Validator | unique', {
  needs: ['validator:messages']
});

test('it works', function(assert) {
  var validator = this.subject();
  assert.ok(validator);
});
