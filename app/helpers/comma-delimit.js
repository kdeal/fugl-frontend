import Ember from 'ember';

export function commaDelimit([elements,attr]/*, hash*/) {
    if (!elements) {
        return "";
    }
    var list = "";
    elements.forEach((element, index) => {
        if (index !== 0) {
            list += ", ";
        }
        if (attr) {
            list += element.get(attr);
        } else {
            list += element;
        }
    });
    return list;
}

export default Ember.Helper.helper(commaDelimit);
