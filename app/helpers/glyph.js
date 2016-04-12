import Ember from 'ember';

export function glyph([glyph,]/*, hash*/) {
    return Ember.String.htmlSafe(`<span class='glyphicon glyphicon-${glyph}'></span>`);
}

export default Ember.Helper.helper(glyph);
