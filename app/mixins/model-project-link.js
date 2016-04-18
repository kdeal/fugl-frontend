import Ember from 'ember';
const { RSVP: { Promise, hash}, run} = Ember;

export default Ember.Mixin.create({
    project: false,
    createWithExisting(project, username, model) {
        return new Promise((resolve) => {
            this.createRecord(project, username, model).then((new_model) => {
                this.get_existing(project, username, model).then((existing) => {
                    new_model.existing = existing;
                    run(null, resolve, new_model);
                });
            });
        });
    },
    createRecord(project, username, model) {
        return new Promise((resolve) => {
            this.getProject(project, username).then((result) => {
                var new_model = this.store.createRecord(model, {project:result.get('id')});
                run(null, resolve, new_model);
            });
        });
    },
    loadRecordWithExisting(project, username, model_id, model) {
        return new Promise((resolve) => {
            var promises = {
                load_model: this.loadRecord(project, username, model_id, model),
                existing: this.get_existing(project, username, model),
            };
            hash(promises).then((results) => {
                results.load_model.existing = results.existing;
                run(null, resolve, results.load_model);
            });
        });
    },
    /**
     * Passing in project and username to determine if user can edit project in the future
     */
    loadRecord(project, username, model_id, model) {
        return this.store.queryRecord(model, {filter:{id: model_id}})
    },
    getProject(project, username) {
        if (!this.project) {
            this.project = this.store.queryRecord('project',
                                                  {
                filter: {
                    title: project,
                    owner: username,
                },
            });
        }
        return this.project;
    },
    get_existing(project, username, model) {
        return new Promise((resolve) => {
            this.getProject(project, username).then((result) => {
                this.store.query(model, {filter: {project: result.get('id')}}).then((models) => {
                    run(null, resolve, models);
                });
            });
        });
    },
});
