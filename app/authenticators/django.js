import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

const { RSVP: { Promise }/*, isEmpty*/, run, inject} = Ember;

export default Base.extend({
    session: Ember.inject.service('session'),
    store: inject.service(),
    authenticate(username, password) {
        return new Promise((resolve, reject) => {
            var data = {
                username: username,
                password: password,
            }
            this.makeRequest(data).then((result) => {
                this.set('session.data.user', result);
                run(null, resolve, "Success");
            }, (error) => {
                run(null, reject, error);
            });
        });
    },

    restore() {
        return Promise.resolve();
    },

    invalidate() {
        this.set('session.data.user', undefined);
        return Promise.resolve();
    },

    makeRequest(data) {
        var options = {
            url: '/api/users/authenticate/',
            type: 'POST',
            dataType: 'json',
            data: data,
        };

        return $.ajax(options);
    },
});
