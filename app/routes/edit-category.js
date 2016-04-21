import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ModelProjectLink from 'fugl-frontend/mixins/model-project-link';

export default Ember.Route.extend(AuthenticatedRouteMixin, ModelProjectLink, {
    params: {},
    model(params) {
        this.params = params;
        return this.loadRecordWithExisting(params.project, params.username, params.category, 'category');
    },
    actions: {
        edited() {
            this.transitionTo('project-home', this.params.username, this.params.project);
        },
    },
});
