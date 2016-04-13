import Ember from 'ember';

export default Ember.Component.extend({
    checked: [],
    actions: {
        checked(value) {
            if (this.checked.contains(value)) {
                this.checked.removeObject(value);
            } else {
                this.checked.addObject(value);
            }
            this.model.set('page_plugins', this.checked.toArray().join());
        },
    },
});
