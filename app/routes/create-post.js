import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ModelProjectLink from 'fugl-frontend/mixins/model-project-link';
const { RSVP: { Promise, hash }, run} = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, ModelProjectLink, {
    params: {},
    model(params) {
        this.params = params;
        return new Promise((resolve) => {
            this.createRecord(params.project, params.username, 'post').then((new_post) =>{
                var promises = {
                    plugins: this.store.query('page-plugin', {project: new_post.get('project')}),
                    categories: this.store.query('category', {project: new_post.get('project')}),
                };
                hash(promises).then((queries) => {
                    var categories = [];
                    categories.addObject(this.store.createRecord('category', {id:"", title:"No Category"}));
                    categories.addObjects(queries.categories.toArray());
                    new_post.plugins = queries.plugins;
                    new_post.categories = categories;
                    run(null, resolve, new_post);
                });
            });
        });
    },
    actions: {
        done() {
            this.transitionTo('project-home', this.params.username, this.params.project);
        },
    },
});
