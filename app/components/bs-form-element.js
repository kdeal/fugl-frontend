import Ember from 'ember';
import BsFormElement from 'ember-bootstrap-cp-validations/components/bs-form-element';

export default BsFormElement.extend({
    /**
     * I shouldn't need to do this, but without it setupValidations is not
     * being called
     */
    init() {
        this._super();
        if (!Ember.isBlank(this.get('property'))) {
            this.setupValidations();
        }
    }
});
