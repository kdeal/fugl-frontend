import DS from 'ember-data';
import {
  validator, buildValidations
}
from 'ember-cp-validations';
var Validations = buildValidations({
    title: [
        validator('presence', true),
        validator('length', {
            max: 50
        }),
    ],
    content: [
        validator('presence', true),
        validator('length', {
            max: 50000
        }),
    ],
    project: validator('presence', true),
});
export default DS.Model.extend(Validations, {
    title: DS.attr('string'),
    content: DS.attr('string'),
    page_plugins: DS.attr('string'),
    project: DS.attr('string'),
});
