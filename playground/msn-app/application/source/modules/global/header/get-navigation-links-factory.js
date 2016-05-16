'use strict';

// dependencies

// directive export
exports = module.exports = createFactory;

/**
 * Factory method.
 */
function createFactory($http) {
    var options = {
        method: 'get',
        url   : 'data/navigation.json'
    };

    var xhR = $http(options);

    // return promise
    return xhR.then(successCallback, failureCallBack);
}

/**
 * success callback which returns array of objects
 * @param  {Object} response
 * @return {Array} response.data
 */
function successCallback(response) {
    return response.data;
}

/**
 * failure callback
 * @param  {Object} data
 */
function failureCallBack(data) {
    // if ajax call fails show console error, this can be changed based on requirement
    console.group('%c Looks like somthing went wrong at our end... ', 'background: #f33; color: #fff; font-size: small;');
    console.error(data.status + ' ( ' + data.statusText + ' )');
    console.groupEnd();
}
