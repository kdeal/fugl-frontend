import { commaDelimit } from 'fugl-frontend/helpers/comma-delimit';
import { module, test } from 'qunit';

module('Unit | Helper | comma delimit');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = commaDelimit([[1, 2, 3], false]);
  assert.ok(result);
});
