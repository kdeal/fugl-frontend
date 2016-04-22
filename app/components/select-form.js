import BasicForm from 'fugl-frontend/components/basic-form';

export default BasicForm.extend({
    property: "",
    init() {
        this._super(...arguments);
        var plural = this.property.pluralize();
        if (!this.get('model.' + plural)) {
            return;
        }
        var prop_id = this.get('model.' + this.property);
        var prop;
        this.get('model.' + plural).forEach((item) => {
            if (item.get('id') === prop_id) {
                prop = item;
            }
        });

        this.set('model.' + this.property, prop);
    },
    actions: {
        submit() {
            this.set('model.' + this.property, this.get('model.' + this.property + '.id'));
            this._super();
        },
    }
});
