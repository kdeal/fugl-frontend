import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ModelProjectLink from 'fugl-frontend/mixins/model-project-link';
const { RSVP: { Promise, hash }, run} = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, ModelProjectLink, {
    params: {},
    model(params) {
        this.params = params;
        return new Promise((resolve) => {
            var promises = {
                project: this.getProject(params.project, params.username),
                themes: this.store.query('theme', {}),
            };

            hash(promises).then((result) => {
                this.project = result.project;
                result.project.themes = result.themes.toArray();
                run(null, resolve, result.project);
            });
        });
    },
    actions: {
        done() {
            this.transitionTo('project-home', this.params.username, this.project.get('title'));
        },
    },
});
