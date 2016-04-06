import Ember from 'ember';
import BsForm from 'ember-bootstrap-cp-validations/components/bs-form';

export default BsForm.extend({
    /**
     * Another thing I don't think I should have to do but it fixes everything
     */
    submit(e) {
        if (e) {
            e.preventDefault();
        }

        this.sendAction('before');

        if (!this.get('hasValidator')) {
            return this.sendAction();
        } else {
            let validationPromise = this.validate(this.get('model'));
            if (validationPromise && validationPromise instanceof Ember.RSVP.Promise) {
                validationPromise.then((r) => this.sendAction('action', r), (err) => {
                    this.get('childFormElements').setEach('showValidation', true);
                    return this.sendAction('invalid', err);
                });
            }
        }
    },
});
