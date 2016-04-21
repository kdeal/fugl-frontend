import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ModelProjectLink from 'fugl-frontend/mixins/model-project-link';

const { RSVP: { Promise, hash}, run} = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, ModelProjectLink, {
    params: {},
    model(params) {
        this.params = params;
        return new Promise((resolve) => {
            var promises = {
                project: this.getProject(params.project, params.username),
                page: this.loadRecord(params.project, params.username, params.page, 'page'),
            };
            hash(promises).then((hashs) =>{
                this.store.query('page-plugin', {filter:{project: hashs.project.get('id')}}).then((plugins) => {
                    hashs.page.plugins = plugins;
                    run(null, resolve, hashs.page);
                });
            });
        });
    },
    actions: {
        edited() {
            this.transitionTo('project-home', this.params.username, this.params.project);
        },
    },
});
