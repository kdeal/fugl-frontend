import Ember from 'ember';

export default Ember.Component.extend({
    checked: [],
    init() {
        this._super(...arguments);
        if (this.get('model.page_plugins')) {
            this.checked = this.get('model.page_plugins').split(',');
        }
    },

    didRender() {
        this.$('.plugins').each((index, element) => {
            if (this.checked.contains(element.id)) {
                this.setActive(element, true);
            }
        });
    },
    setActive(element, active) {
        if (active) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    },
    actions: {
        checked(value) {
            if (this.checked.contains(value)) {
                this.checked.removeObject(value);
                this.setActive(this.$('#' + value)[0], false);
            } else {
                this.checked.addObject(value);
                this.setActive(this.$('#' + value)[0], true);
            }
            this.model.set('page_plugins', this.checked.toArray().join());
        },
    },
});
