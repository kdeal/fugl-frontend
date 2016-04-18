import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ModelProjectLink from 'fugl-frontend/mixins/model-project-link';

const { RSVP: { Promise, hash}, run} = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, ModelProjectLink, {
    model(params) {
        return new Promise((resolve) => {
            var promises = {
                project: this.getProject(params.project, params.username),
                page: this.loadRecord(params.project, params.username, params.page, 'page'),
            };
            hash(promises).then((hash) =>{
                this.store.query('page-plugin', {filter:{project: hash.project.get('id')}}).then((plugins) => {
                    hash.page.plugins = plugins;
                    run(null, resolve, hash.page);
                });
            });
        });
    },
    actions: {
        edited() {
            this.transitionTo('/');
        },
    },
});
