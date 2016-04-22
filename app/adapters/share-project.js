import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
    buildURL(modelName, id, snapshot, requestType, query) {
        var url = this._super(null, null, null, null, null);
        if (snapshot) {
            query = snapshot.attributes();
        }
        if (query && query['project']) {
            var proj_id = query['project'];
            url += "projects/" + proj_id + "/access/";
        }
        if (query && query['user']) {
            url += "?user=" + query['user'];
        }
        return url;
    },
});
