import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        submit() {
            console.log(this.get('model.theme'));
            this.get('model').save().then(() => {
                this.sendAction();
            });
            return true;
        },
    }
});
