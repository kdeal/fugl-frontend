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
        validator('format', {
            regex: /^[a-zA-Z0-9@.\+\-_]+$/,
            message: 'Letters, digits and @/./+/-/_ only.',
        }),
        validator(function(value) {
            if (!value) {
                return false;
            }
            this.store = Ember.inject.service();
            return this.get('store').queryRecord('user', {lookup: {username:value}}).then(() => {
                return true;
            },
            () => {
                return "User with that username doesn't exist";
            });
        }),
    ],
});
export default Ember.Component.extend(Validations, {
    store: Ember.inject.service(),
    username: "",
    actions: {
        done() {
            this.sendAction('done');
        },
        submit() {
            this.get('store').queryRecord('user', {
                lookup: {
                    username:this.username
                }
            }).then((user) => {
                this.set('model.user', user.get('id'));
                this.get('model').save().then(() => {
                    this.sendAction();
                });
            });

            return true;
        },
        delete(share) {
            share.deleteRecord();
            share.save();
        }
    }

});
