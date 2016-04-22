import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ModelProjectLink from 'fugl-frontend/mixins/model-project-link';
const { RSVP: { Promise, hash}, run} = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, ModelProjectLink, {
    model(params) {
        return new Promise((resolve) => {
            var promises = {
                project: this.getProject(params.project, params.username),
                categories: this.get_existing(params.project, params.username, 'category'),
                tags: this.get_existing(params.project, params.username, 'tag'),
                page_plugins: this.get_existing(params.project, params.username, 'page_plugin'),
                project_plugins: this.get_existing(params.project, params.username, 'project_plugin'),
                pages: this.get_existing(params.project, params.username, 'page'),
                posts: this.get_existing(params.project, params.username, 'post'),
            };
            hash(promises).then((results) =>{
                var model = results.project;
                model.owner_username = params.username;
                model.categories = results.categories;
                model.tags = results.tags;
                model.page_plugins = results.page_plugins;
                model.project_plugins = results.project_plugins;
                model.pages = results.pages;
                model.posts = results.posts;
                run(null, resolve, model);
            });
        });
    },
});
