import DS from 'ember-data';

export default DS.JSONSerializer.extend({
    serializeIntoHash(hash, typeClass, snapshot, options) {
        var sub_hash = this.serialize(snapshot, options);
        Object.keys(sub_hash).forEach((key) => {
            hash[key] = sub_hash[key];
        });
    },
});
