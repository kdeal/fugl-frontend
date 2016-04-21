import Ember from 'ember';
import BaseValidator from 'ember-cp-validations/validators/base';

export default BaseValidator.extend({
    store: Ember.inject.service(),
    validate(value, options, model/*, attribute*/) {
        if (!value) {
            return false;
        }
        var query = {};
        query[options['field']] = value;
        for (var key in options['filter']) {
                query[key] = model.get(key);
        }
        return this.get('store').queryRecord(options['model'], {available:query}).then((result) => {
            var data = JSON.parse(result.get('raw_json'));
            if (data['available']) {
                return true;
            }

            return `A ${options['field']} of ${value} already exists`;
        }, (error) => {
            return error;
        });
    }
});
