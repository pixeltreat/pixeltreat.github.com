'use strict';

// directive export
exports = module.exports = createFactory;

/**
 * Factory method.
 */
function createFactory($http) {
    // using
    return function (url, method, data) {
        // check for valid url
        if (!url) {
            console.error(
                '%c Please provide valid url!',
                'background: #fc0; color: #333; font-size:12px; border-radius: 2px; padding: 2px;'
            );
            return;
        }

        // options object for xhr request
        var options = {
            method: method || 'get',
            url: url,
            data: data || ''
        };

        // caching xhr to use as promise
        var xhR = $http(options);

        // return promise
        return xhR.then(successCallback, failureCallBack);
    };
}

/**
 * success callback which returns array of objects
 * @param  {Object} response
 * @return {Array} response.data
 */
function successCallback(response) {
    console.info(
        '%c Requested data has been successfully returned! ',
        'color: #060; font-size: 12px; padding: 2px;'
    );

    return response.data;
}

/**
 * failure callback
 * @param  {Object} data
 */
function failureCallBack(response) {
    // if ajax call fails show console error, this can be changed based on requirement
    console.groupCollapsed(
        '%c Looks like somthing went wrong with the request... ',
        'background: #f33; color: #fff; font-size: 12px; border-radius: 2px; padding: 2px;'
    );
    console.error(response.status + ' ( ' + response.statusText + ' )');
    console.groupCollapsedEnd();
}
