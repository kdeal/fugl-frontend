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
        validator('unique', {
            model: 'category',
            field: 'title',
            filter: { project: 'project' },
        }),
    ],
    project: validator('presence', true),
});
export default DS.Model.extend(Validations, {
    title: DS.attr('string'),
    project: DS.attr('string'),
});
