'use strict';

exports = module.exports = createDirective;

/**
 * Factory method.
 */
function createDirective() {
    /**
     * Returned object.
     * @var {Object}
     */
    var directive = {
        restrict        : 'A',
        replace         : true,
        template        : require('./header.html'),
        scope           : {},
        controllerAs    : 'vm',
        bindToController: true,
        controller      : controllerFn
    };

    return directive;
}

/**
* Create a link to the view.
*
* @param {Object} scope
*/
function controllerFn() {
    /**
     * ...
     * @var {String}
     */
    var vm = this;

    vm.navLinks = [
        {
            'label': 'Admin',
            'icon': 'admin',
            'URL': '#',
            'subnav': [
                {
                    'label': 'Subnav Link1',
                    'URL': '#'
                },
                {
                    'label': 'Subnav Link2',
                    'URL': '#'
                }
            ]
        },
        {
            'label': 'Dashboard',
            'icon': 'dashboard',
            'URL': '#'
        },
        {
            'label': 'Employee',
            'icon': 'employee',
            'URL': '#',
            'subnav': [
                {
                    'label': 'Short View',
                    'URL': '#'
                },
                {
                    'label': 'Expanded View',
                    'URL': '#'
                },
                {
                    'label': 'Download Template',
                    'URL': '#'
                },
                {
                    'label': 'Upload Data',
                    'URL': '#'
                },
                {
                    'label': 'Download Data',
                    'URL': '#'
                }
            ]
        },
        {
            'label': 'Shelter',
            'icon': 'shelter',
            'URL': '#',
            'subnav': [
                {
                    'label': 'Subnav Link1',
                    'URL': '#'
                }
            ]
        },
        {
            'label': 'Transportation',
            'icon': 'transport',
            'URL': '#',
            'subnav': [
                {
                    'label': 'Subnav Link1',
                    'URL': '#'
                }
            ]
        },
        {
            'label': 'Reports',
            'icon': 'reports',
            'URL': '#',
            'subnav': [
                {
                    'label': 'Subnav Link1',
                    'URL': '#'
                }
            ]
        },
        {
            'label': 'Help',
            'icon': 'help',
            'URL': '#'
        },
        {
            'label': 'Contact',
            'icon': 'contact',
            'URL': '#'
        },
        {
            'label': 'Refresh',
            'icon': 'refresh',
            'URL': '#'
        },
        {
            'label': 'User',
            'icon': 'user',
            'URL': '#'
        },
        {
            'label': 'Logout',
            'icon': 'logout',
            'URL': '#'
        }
    ];
}
