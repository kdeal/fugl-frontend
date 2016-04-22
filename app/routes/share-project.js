import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ModelProjectLink from 'fugl-frontend/mixins/model-project-link';
const { RSVP: { Promise, hash }, run} = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, ModelProjectLink, {
    model(params) {
        this.params = params;
        return new Promise((resolve) => {
            this.getProject(params.project, params.username).then((project) => {
                this.store.query('share-project', {project:project.get('id')}).then((shares) => {
                    var promises = {
                        share: this.store.createRecord('share-project', {
                            project: project.get('id'),
                        }),
                    };
                    shares.forEach((share) => {
                        var user_promise = this.store.findRecord('user', share.get('user'));
                        user_promise.then((user) => {
                            share.user_obj = user;
                        });
                        promises[share.get('id')] = user_promise;
                    });
                    hash(promises).then((result) => {
                        result.share.shares = shares;
                        run(null, resolve, result.share);
                    });
                });
            });
        });
    },
    actions: {
        done() {
            this.transitionTo('project-home', this.params.username, this.params.project);
        },
    }
});
