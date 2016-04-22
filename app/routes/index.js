import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
const { RSVP: { Promise }, run} = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    session: Ember.inject.service('session'),
    store: Ember.inject.service(),
    model() {
        return new Promise((resolve) => {
            this.store.query('project', {}).then((projects) => {
                projects.forEach((project) => {
                    this.store.findRecord('user', project.get('owner')).then((res_user) => {
                        project.set('owner_obj', res_user);
                    });
                });
                run(null, resolve, projects);
            });
        });
    },
});
