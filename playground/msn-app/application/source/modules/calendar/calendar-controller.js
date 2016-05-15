"use strict";
exports = module.exports = CalendarCtrl;

function CalendarCtrl($scope, $firebaseArray, FireBaseURL) {
    var vm = this;

    // get the data from firebase
    var ref = new Firebase(FireBaseURL+'/projects');
    // assign the returned data to scope


    //view-model properties
    vm.projects = $firebaseArray(ref);
    vm.isPractitionerViewOpen = false;
    vm.togglePractitionerView = togglePractitionerView;


    function togglePractitionerView(){
    	vm.isPractitionerViewOpen = !vm.isPractitionerViewOpen;
        $scope.$parent.isPractitionerViewOpen = vm.isPractitionerViewOpen;        
    }
};
