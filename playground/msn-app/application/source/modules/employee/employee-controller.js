'use strict';
exports = module.exports = EmployeeCtrl;

function EmployeeCtrl($http) {
    var vm = this;

    // method1 for setting grid options and data
    vm.employeeGridOptions = {
        //reorderable: true,
        //groupable: true,
        //resizable: true,
        //height: 425,
        //scrollable: {
        //  virtual: true
        //},
        //columnMenu: true,
        pageable: true,
        sortable: true,
        editable: true,
        filterable: true,

        dataSource: {
            pageSize: 5,
            transport: {
                read: function (e) {
                    getEmployeeData(e, $http);
                }
            }
        },
        columns: [
            {
                title: '',
                width: '50px',
                // locked: true,
                // lockable: false,
                template: '<input type="checkbox" class="sel" />'
            }, {
                title: 'Edit',
                width: '120px',
                command: {
                    text: 'Edit',
                    click: function (e) {
                        e.preventDefault();
                        console.log('Edit Button Clicked');
                    }
                }
            }, {
                title: 'Delete',
                width: '120px',
                command: {
                    text: 'Delete',
                    click: function (e) {
                        e.preventDefault();
                        console.log('Delete Button Clicked');
                    }
                }
            }, {
                field: 'ProductID',
                title: 'Id',
                width: '80px'
            }, {
                field: 'ProductName',
                title: 'Name'
            }, {
                field: 'UnitPrice',
                title: 'Price',
                width: '200px'
            }, {
                field: 'UnitsInStock',
                title: 'Stock',
                width: '200px'
            }
        ]
    };

    // method2 grid data
    vm.gridData = [
        {
            artist: 'Pink Floyd',
            track: 'The dark side of the Moon'
        }, {
            artist: 'The Beatles',
            track: 'I\'ve just seen a face'
        }, {
            artist: 'Queen',
            track: 'Innuendo'
        }
    ];

    // method2 grid columns
    vm.gridColumns = [
        {
            field: 'select',
            title: ' '
        }, {
            field: 'edit',
            title: 'Edit'
        }, {
            field: 'delete',
            title: 'Delete'
        }, {
            field: 'artist',
            title: 'Artist'
        }, {
            field: 'track',
            title: 'Track'
        }
    ];
}

/**
 * get employee data, TODO clean up code from sample
 * @param  {object} e
 * @param  {function} $http
 */
function getEmployeeData(e, $http) {
    var url = 'http://demos.telerik.com/kendo-ui/service/Products?callback=JSON_CALLBACK';

    $http.jsonp(url).then(function success(response) {
        e.success(response.data);
    }, function error(response) {
        alert('something went wrong');
        console.log(response);
    });
}
