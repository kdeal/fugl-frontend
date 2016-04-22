/* jshint unused: false */
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
    createRecord(store, type, snapshot) {
        var data = {};
        var serializer = store.serializerFor(type.modelName);
        var base_url = this.buildURL(null, null, null, null);

        serializer.serializeIntoHash(data, type, snapshot, { includeId: true });

        var project_id = data['project'];
        var url = base_url + "projects/" + project_id + "/clone/";

        return this.ajax(url, "POST", { data: data });
    },
});
