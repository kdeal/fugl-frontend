import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ModelProjectLink from 'fugl-frontend/mixins/model-project-link';

export default Ember.Route.extend(AuthenticatedRouteMixin, ModelProjectLink, {
    params: {},
    model: null,
    model(params) {
        this.params = params;
        this.model = this.getProject(params.project, params.username);
        return this.model;
    },
    actions: {
        edited() {
            this.transitionTo('project-home', this.params.username, this.model.get('title'));
        },
    },
});
