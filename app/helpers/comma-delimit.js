import Ember from 'ember';

export function commaDelimit([elements,attr,bold]) {
    if (!elements) {
        return "";
    }

    var list = "";
    var list_val = "";
    elements.forEach((element, index) => {
        if (index !== 0) {
            list += ", ";
        }
        if (attr) {
            list_val += element.get(attr);
        } else {
            list_val += element;
        }
        if (bold == list_val) {
            list += "<em>" + list_val + "</em>";
        } else {
            list += list_val;
        }
    });
    return Ember.String.htmlSafe(list);
}

export default Ember.Helper.helper(commaDelimit);
