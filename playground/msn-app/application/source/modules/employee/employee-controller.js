'use strict';
exports = module.exports = EmployeeCtrl;

function EmployeeCtrl() {
    var vm = this;

    vm.mainGridOptions = {
        dataSource: {
            type: 'odata',
            transport: {
                read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Employees'
            }
        },
        columns: [
            {
                field: 'FirstName',
                title: 'First Name ',
                headerAttributes: {
                    'ng-non-bindable': true
                },
                width: '180px'
            }, {
                field: 'LastName',
                title: 'Last Name',
                width: '120px'
            }, {
                field: 'Country',
                width: '120px'
            }, {
                field: 'City',
                width: '120px'
            }
        ]
    };
}
