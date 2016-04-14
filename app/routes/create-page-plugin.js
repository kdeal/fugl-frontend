import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
const { RSVP: { Promise }, run} = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model(params) {
        return new Promise((resolve) => {
            this.store.queryRecord('project',
                                                 {
                filter: {
                    title: params.project,
                    owner: params.username,
                },
            }).then((result) => {
                var page_plugin = this.store.createRecord('page-plugin', {project:result.get('id')});
                this.store.query('page-plugin', {filter: {project: result.get('id')}}).then((page_plugins) => {
                    page_plugin.page_plugins = page_plugins;
                    run(null, resolve, page_plugin);
                });
            });
        });
    },
    actions: {
        created() {
            this.transitionTo('/');
        },
    },
});
