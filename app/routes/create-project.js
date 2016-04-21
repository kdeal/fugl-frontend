import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    session: Ember.inject.service('session'),
    store: Ember.inject.service(),
    model() {
        var project = this.store.createRecord('project',
                                              {owner: this.get('session.data.user.username')}
                                             );
        return project;
    },
    actions: {
        created() {
            this.transitionTo('project-home', this.get('model.title'), this.get('model.owner'));
        },
    },
});
