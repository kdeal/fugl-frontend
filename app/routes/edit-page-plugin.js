import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ModelProjectLink from 'fugl-frontend/mixins/model-project-link';

export default Ember.Route.extend(AuthenticatedRouteMixin, ModelProjectLink, {
    model(params) {
        return this.loadRecordWithExisting(params.project, params.username, params.page_plugin, 'page_plugin');
    },
    actions: {
        edited() {
            this.transitionTo('/');
        },
    },
});
