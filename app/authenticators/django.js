import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

const { RSVP: { Promise }, run, inject} = Ember;

export default Base.extend({
    session: Ember.inject.service('session'),
    cookies: Ember.inject.service(),
    store: inject.service(),
    authenticate(username, password) {
        return new Promise((resolve, reject) => {
            var data = {
                username: username,
                password: password,
            };
            this.makeRequest('/api/users/authenticate/', 'POST', data).then((result) => {
                this.set('session.data.user', result);
                run(null, resolve, "Success");
            }, (error) => {
                run(null, reject, error);
            });
        });
    },

    restore() {
        return new Promise((resolve, reject) => {
            this.makeRequest('/api/users/session/', 'GET', {}).then((result) => {
                if (result['valid']) {
                    run(null, resolve, null);
                } else {
                    run(null, reject, null);
                }
            });
        });
    },

    invalidate() {
        this.set('session.data.user', undefined);
        return new Promise((resolve) => {
            this.makeRequest('/api/users/logout', 'DELETE', {}).then(() => {
                run(null, resolve, null);
            });
        });
    },

    makeRequest(url, method, data) {
        var options = {
            url: url,
            type: method,
            dataType: 'json',
            data: data,
        };
        var _this = this;
        if (! (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method))) {
            options['beforeSend'] =  (request) => {
                request.setRequestHeader("X-CSRFToken", _this.get('cookies').read("csrftoken"));
            };
        }

        return $.ajax(options);
    },
});
