import Ember from 'ember';

export default Ember.Route.extend({
    session: Ember.inject.service('session'),
    store: Ember.inject.service(),
    model() {
        return this.store.query('project',
                                {filter:{owner: this.get('session.data.user.username')}}
                               );
    },
});
