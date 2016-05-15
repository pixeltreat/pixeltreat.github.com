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
        template: require('./practitioner.html'),
        scope: {
            'practitionerDetails': '=',
            'mode': '@'
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
    var classes = '';
    var availabilityLabel = '';

    vm.isCompetencyMode = (vm.mode === 'competency');
    vm.isAvailable = (vm.practitionerDetails.availability.type === 'available' && vm.practitionerDetails.availability.percentage < 100);
    vm.isStaffed = (vm.practitionerDetails.availability.type === 'available' && vm.practitionerDetails.availability.percentage === 100);
    vm.isUnavailable = vm.practitionerDetails.availability.type !== 'available';

    // css class assignment
    classes += vm.isCompetencyMode? 'is-competency ':'';
    classes += vm.isStaffed? 'is-staffed ':'';
    classes += vm.isUnavailable? 'is-unavailable ':'';
    vm.classes = classes;

    // check availability
    if(vm.isUnavailable){
        availabilityLabel = vm.practitionerDetails.availability.type;
    } else if(vm.isAvailable){
        availabilityLabel = vm.practitionerDetails.availability.percentage + '%';
    }

    vm.availabilityLabel = availabilityLabel;
}
