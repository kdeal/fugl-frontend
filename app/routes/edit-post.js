import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ModelProjectLink from 'fugl-frontend/mixins/model-project-link';
const { RSVP: { Promise, hash }, run} = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, ModelProjectLink, {
    params: {},
    model(params) {
        this.params = params;
        return new Promise((resolve) => {
            var promises = {
                project: this.getProject(params.project, params.username),
                post: this.loadRecord(params.project, params.username, params.post, 'post'),
            };
            hash(promises).then((hashs) =>{
                var promises = {
                    plugins: this.store.query('page-plugin', {project: hashs.project.get('id')}),
                    categories: this.store.query('category', {project: hashs.project.get('id')}),
                };
                hash(promises).then((queries) => {
                    var categories = [];
                    categories.addObject(this.store.createRecord('category', {id:"", title:"No Category"}));
                    categories.addObjects(queries.categories.toArray());
                    hashs.post.plugins = queries.plugins;
                    hashs.post.categories = categories;
                    run(null, resolve, hashs.post);
                });
            });
        });
    },
    actions: {
        edited() {
            this.transitionTo('project-home', this.params.username, this.params.project);
        },
    },
});
