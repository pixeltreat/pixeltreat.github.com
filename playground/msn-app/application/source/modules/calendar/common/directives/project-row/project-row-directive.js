"use strict";

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
        restrict: 'EA',
        replace: true,
        template: require('./project-row.html'),
        scope: {
            projectDetails: '=',
            competencyDetails: '=',
            mode: '@'
        },
        controllerAs: 'vm',
        bindToController: true,
        controller: controllerFn
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

    vm.isCompetencyMode = (vm.mode === 'competency');

    if(vm.isCompetencyMode){
        vm.details = vm.competencyDetails.details;
        vm.weeks = vm.competencyDetails.weeks;
    } else{
        vm.details = vm.projectDetails.details;
        vm.weeks = vm.projectDetails.weeks;
    }
    
}
