import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
    buildURL(modelName, id, snapshot, requestType, query) {
        var url = this._super(null, null, null, null, null);
        var key = Object.keys(query)[0];
        url += key + "/";
        return url;
    },
});
