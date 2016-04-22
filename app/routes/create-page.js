import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ModelProjectLink from 'fugl-frontend/mixins/model-project-link';
const { RSVP: { Promise }, run} = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, ModelProjectLink, {
    params: {},
    model(params) {
        this.params = params;
        return new Promise((resolve) => {
            this.createRecord(params.project, params.username, 'page').then((new_page) =>{
                this.store.query('page-plugin', {project: new_page.get('project')}).then((plugins) => {
                    new_page.plugins = plugins;
                    run(null, resolve, new_page);
                });
            });
        });
    },
    actions: {
        done() {
            this.transitionTo('project-home', this.params.username, this.params.project);
        },
    },
});
