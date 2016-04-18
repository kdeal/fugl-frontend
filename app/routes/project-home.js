import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ModelProjectLink from 'fugl-frontend/mixins/model-project-link';
const { RSVP: { Promise, hash}, run} = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, ModelProjectLink, {
    model(params) {
        return new Promise((resolve) => {
            var promises = {
                project: this.getProject(params.project, params.username),
                categories: this.get_existing(params.project, params.username, 'category'),
                page_plugins: this.get_existing(params.project, params.username, 'page_plugin'),
                pages: this.get_existing(params.project, params.username, 'page'),
                posts: this.get_existing(params.project, params.username, 'post'),
            };
            hash(promises).then((results) =>{
                var model = results.project;
                model.categories = results.categories;
                model.page_plugins = results.page_plugins;
                model.pages = results.pages;
                model.posts = results.posts;
                run(null, resolve, model);
            });
        });
    },
});
