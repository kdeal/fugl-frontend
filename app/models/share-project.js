import Model from 'ember-data/model';
import {
  validator, buildValidations
}
from 'ember-cp-validations';

var Validations = buildValidations({
    user: validator('presence', true),
    project: validator('presence', true),
});

export default Model.extend({
    user: DS.attr('string'),
    project: DS.attr('string'),
    can_edit: DS.attr('boolean', { defaultValue: true }),
});
