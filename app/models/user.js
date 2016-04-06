import DS from 'ember-data';
import {
  validator, buildValidations
}
from 'ember-cp-validations';

var Validations = buildValidations({
    username: [
        validator('presence', true),
        validator('length', {
            min: 6,
            max: 30
        }),
        validator('format', {
            regex: /[a-zA-Z0-9@.+-_]+$/,
            message: 'Letters, digits and @/./+/-/_ only.',
        }),
        validator('unique', {
            model: 'user',
            field: 'username',
        }),
    ],
    password: [
        validator('presence', true),
        validator('length', { min: 8 }),
    ],
    password2: [
        validator('confirmation', {
            on: 'password',
        }),
        validator('presence', true),
    ],
    email: [
        validator('presence', true),
        validator('format', { type: 'email' })
    ],
});

export default DS.Model.extend(Validations, {
    username: DS.attr('string'),
    email: DS.attr('string'),
    password: DS.attr('string'),
});
