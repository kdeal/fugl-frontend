import Ember from 'ember';
import BaseValidator from 'ember-cp-validations/validators/base';

export default BaseValidator.extend({
    store: Ember.inject.service(),
    validate(value, options, model/*, attribute*/) {
        if (!value) {
            return false;
        }
        var server_query = {};
        server_query[options['field']] = value;
        for (var key in options['filter']) {
                server_query[key] = model.get(key);
        }
        var query = {};
        var plural_model = options['model'].pluralize();
        query[plural_model + '/available'] = server_query;
        return this.get('store').queryRecord('result', query).then((result) => {
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
