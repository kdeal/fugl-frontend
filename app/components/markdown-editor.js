/* globals SimpleMDE */
import Ember from 'ember';

export default Ember.Component.extend({
    editor: null,
    didInsertElement() {
        this.editor = new SimpleMDE({
            element: this.$().find('textarea')[0],
            initialValue: this.get("model.content"),
            forceSynce: true,
        });
        var mde = this;
        this.editor.codemirror.on("change", function(){
            if (mde.get('model')) {
                mde.set("model." + mde.property, mde.editor.value());
            }
        });
    },
});
