import DS from 'ember-data';

export default DS.Model.extend({
    raw_json: DS.attr('string'),
});
