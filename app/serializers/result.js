import Application from './application';

export default Application.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        var data = {
            type: "result",
            id: 1,
            attributes: {
                raw_json: JSON.stringify(payload),
            }
        };
        return {data:data};
    },
});
