import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ModelProjectLink from 'fugl-frontend/mixins/model-project-link';

export default Ember.Route.extend(AuthenticatedRouteMixin, ModelProjectLink, {
    model(params) {
        return this.getProject(params.project, params.username);
    },
    actions: {
        deleted() {
            this.transitionTo('/');
        },
    },
});
