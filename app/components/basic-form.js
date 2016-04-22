import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        done() {
            this.get('model').rollbackAttributes();
            this.sendAction('done');
        },
        submit() {
            this.get('model').save().then(() => {
                this.sendAction();
            });
            return true;
        },
    }
});
