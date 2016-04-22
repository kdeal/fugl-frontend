import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
const { RSVP: { Promise, hash }, run} = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    session: Ember.inject.service('session'),
    store: Ember.inject.service(),
    model() {
        return new Promise((resolve) => {
            var promises = {
                project: this.store.createRecord('project',{
                    owner:this.get('session.data.user.id')}),
                themes: this.store.query('theme', {}),
            };

            hash(promises).then((result) => {
                this.project = result.project;
                result.project.themes = result.themes.toArray();
                result.project.themes.forEach((theme) => {
                    if (theme.get('title') === 'default') {
                        result.project.theme = theme.get('id');
                    }
                });
                run(null, resolve, result.project);
            });
        });
    },
    actions: {
        done() {
            this.transitionTo('/');
        },
        create() {
            this.transitionTo('project-home', this.get('session.data.user.username'), this.get('project.title'));
        },
    },
});
