define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var calculator = require('./calculator');

    // Load library/vendor modules using
    // full IDs, like:
    var print = require('print');

    print(calculator.add(1,2));
});