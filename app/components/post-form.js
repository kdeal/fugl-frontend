import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        submit() {
            this.set('model.category', this.get('model.category.id'));
            this.get('model').save();
            this.sendAction();
            return true;
        },
    }
});
