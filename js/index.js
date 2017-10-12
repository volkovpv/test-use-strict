/**
 * Created by volkov_p_v on 10.2017.
 */

function AssignValue() {
    this.variable = 'variable';
}

Foo.prototype.withStrict = function () {
    'use strict';
    try {
        xWithStrict = this.variable;
    } catch(err) {
        console.error(err);
    }
};

Foo.prototype.withoutStrict = function () {
    try {
        xWithoutStrict = this.variable;
    } catch(err) {
        console.error(err);
    }
};

var assignValue = new AssignValue();

assignValue.withStrict();
assignValue.withoutStrict();