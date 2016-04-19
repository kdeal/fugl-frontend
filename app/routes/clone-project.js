import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ModelProjectLink from 'fugl-frontend/mixins/model-project-link';

const { RSVP: { Promise }, run} = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, ModelProjectLink, {
    session: Ember.inject.service('session'),
    store: Ember.inject.service(),
    model(params) {
        return new Promise((resolve) => {
            this.getProject(params.project, params.username).then((project) => {
                var clone_project = this.store.createRecord('clone-project',
                                                      {
                    owner: this.get('session.data.user.username'),
                    project: project.get('id'),
                });
                run(null, resolve, clone_project);
            });
        });
    },
    actions: {
        cloned() {
            this.transitionTo('/');
        },
    },
});
