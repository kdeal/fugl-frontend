import DS from 'ember-data';

export default DS.Model.extend({
   user: DS.attr('string'),
    project: DS.attr('string'),
    can_edit: DS.attr('boolean', { defaultValue: true }),
});
