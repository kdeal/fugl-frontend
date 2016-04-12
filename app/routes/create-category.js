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
                var category = this.store.createRecord('category', {project:result.get('id')});
                this.store.query('category', {filter: {project: result.get('id')}}).then((categories) => {
                    category.categories = categories;
                    run(null, resolve, category);
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
