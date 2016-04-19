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
            model: 'clone-project',
            field: 'title',
            filter: { owner: 'owner' },
        }),
    ],
    project: validator('presence', true),
    owner: validator('presence', true),
});

export default DS.Model.extend(Validations, {
    title: DS.attr('string'),
    theme: DS.attr('boolean', { defaultValue: false }),
    pages: DS.attr('boolean', { defaultValue: false }),
    posts: DS.attr('boolean', { defaultValue: false }),
    plugins: DS.attr('boolean', { defaultValue: false }),
    project: DS.attr('string'),
    owner: DS.attr('string'),
});
