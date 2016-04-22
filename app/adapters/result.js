import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
    buildURL(modelName, id, snapshot, requestType, query) {
        var url = this._super(null, null, null, null, null);
        var key = Object.keys(query)[0];
        url += key + "/";
        return url;
    },
    sortQueryParams(obj) {
        var keys = Object.keys(obj);
        var len = keys.length;
        if (len === 0) {
            return obj;
        } else if (len === 1 && obj[keys[0]].constructor === Object) {
            obj = obj[keys[0]];
            keys = Object.keys(obj);
            len = keys.length;
        }

        var newQueryParams = {};
        var sortedKeys = keys.sort();

        for (var i = 0; i < len; i++) {
            newQueryParams[sortedKeys[i]] = obj[sortedKeys[i]];
        }
        return newQueryParams;
    },
});
