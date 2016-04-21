import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

const { RSVP: { Promise }/*, isEmpty*/, run, inject} = Ember;

export default Base.extend({
    session: Ember.inject.service('session'),
    store: inject.service(),
    authenticate(/*username, password*/) {
        return new Promise((resolve/*, reject*/) => {
            this.set('session.data.user', {id: 2, username: 'testing', password: 'testing'});
            run(null, resolve, "Success");
        });
    },

    restore() {
        return Promise.resolve();
    },

    invalidate() {
        this.set('session.data.user', undefined);
        return Promise.resolve();
    },
});
