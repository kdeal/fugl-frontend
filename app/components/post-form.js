import Ember from 'ember';

export default Ember.Component.extend({
    init() {
        this._super(...arguments);
        if (!this.get('model.categories')) {
            return;
        }
        var category_id = this.get('model.category');
        var category;
        this.get('model.categories').forEach((item) => {
            if (item.get('id') === category_id) {
                category = item;
            }
        });

        this.set('model.category', category);
    },
    actions: {
        submit() {
            this.set('model.category', this.get('model.category.id'));
            this.get('model').save();
            this.sendAction();
            return true;
        },
    }
});
