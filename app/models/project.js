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
        validator('format', {
            regex: /^[a-zA-Z0-9\-_]+$/,
            message: 'Letters, digits and -/_ only.',
        }),
        validator('unique', {
            model: 'project',
            field: 'title',
            filter: { owner: 'owner' },
        }),
    ],
    description: [
        validator('presence', true),
        validator('length', {
            max: 1000
        }),
    ],
    owner: validator('presence', true),
});

export default DS.Model.extend(Validations, {
    title: DS.attr('string'),
    description: DS.attr('string'),
    owner: DS.attr('string'),
    theme: DS.attr('string'),
});
