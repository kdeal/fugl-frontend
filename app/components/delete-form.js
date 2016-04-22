import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        submit() {
            this.get('model').deleteRecord();
            this.get('model').save().then(() => {
                this.sendAction();
            });
            return true;
        },
    },
});
