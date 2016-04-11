import Ember from 'ember';
import BaseValidator from 'ember-cp-validations/validators/base';

export default BaseValidator.extend({
    store: Ember.inject.service(),
    validate(value, options, model/*, attribute*/) {
        var query = {};
        query[options['field']] = value;
        for (var key in options['filter']) {
                query[key] = model.get(key);
        }
        return this.get('store').query(options['model'], {filter:query}).then(result => {
            return Ember.isEmpty(result)? true:
                `A ${options['field']} of ${value} already exists`;
        }, error => {
            return error;
        });
    }
});
