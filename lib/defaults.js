var _ = require('lodash');

 module.exports = function (options) {
    return _.defaults(options || {}, {
        maxDepth: 6
    });
};