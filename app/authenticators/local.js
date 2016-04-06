import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

const { RSVP: { Promise }, isEmpty, run, inject} = Ember;

export default Base.extend({
    store: inject.service(),
    authenticate(username, password) {
        return new Promise((resolve, reject) => {
            this.get('store').queryRecord('user', {filter: {username: username}}).then(result => {
                if (isEmpty(result)) {
                    run(null, reject, "Invalid username or password");
                }
                if (password === result.get('password')) {
                    run(null, resolve, "Success");
                } else {
                    run(null, reject, "Invalid username or password");
                }
            });
        });
    },

    restore() {
        return Promise.resolve();
    },
});
