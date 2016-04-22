import Ember from 'ember';
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
    ],
    password: validator('presence', true),
});

export default Ember.Component.extend(Validations, {
    session: Ember.inject.service('session'),
    username: '',
    password: '',
    error_msg: false,

    actions: {
        login() {
            this.get('session').authenticate('authenticator:django', this.username, this.password).catch((reason) => {
                this.set('error_msg', reason);
                return true;
            });
        },
    },
});
