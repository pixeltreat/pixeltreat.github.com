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
        template: require('./practitioners.html'),
        scope: {
            projectsList: '='
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

    vm.competencyList = [
        {
            name: 'Front End Engineering',
            label: 'FE',
            count: 15,
            details: [{
                detailName: 'CL',
                detailValue: 'Christopher Moore'
            }],
            weeks: [{
                    week: 'Jun 01',
                    practitioners: [{
                        name: 'Ryan Greene',   
                        designation: 'L',                     
                        availability: {
                            type:'pto',
                            percentage:0
                        }
                    }, {
                        name: 'Dan Hart',   
                        designation: 'SL',                     
                        availability: {
                            type:'ooo',
                            percentage:0
                        }
                    }, {
                        name: 'Kaplan, Mike',      
                        designation: 'Sr.',                  
                        availability: {
                            type:'available',
                            percentage:100
                        }
                    }, {
                        name: 'Groff, Jason',   
                        designation: 'A',                     
                        availability: {
                            type:'available',
                            percentage:30
                        }
                    }]
                }, {
                    week: 'Jun 08',
                    practitioners: [{
                        name: 'Ryan Greene',   
                        designation: 'L',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Dan Hart',   
                        designation: 'SL',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Kaplan, Mike',      
                        designation: 'Sr.',                  
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Groff, Jason',   
                        designation: 'A',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }]
                }, {
                    week: 'Jun 15',
                    practitioners: [{
                        name: 'Ryan Greene',   
                        designation: 'L',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Dan Hart',   
                        designation: 'SL',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Kaplan, Mike',      
                        designation: 'Sr.',                  
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Groff, Jason',   
                        designation: 'A',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }]
                }, {
                    week: 'Jun 22',
                    practitioners: [{
                        name: 'Ryan Greene',   
                        designation: 'L',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Dan Hart',   
                        designation: 'SL',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }                        
                    }, {
                        name: 'Kaplan, Mike',      
                        designation: 'Sr.',                  
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Groff, Jason',   
                        designation: 'A',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }]
                }, {
                    week: 'Jun 29',
                    practitioners: [{
                        name: 'Ryan Greene',   
                        designation: 'L',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Dan Hart',   
                        designation: 'SL',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Kaplan, Mike',      
                        designation: 'Sr.',                  
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Groff, Jason',   
                        designation: 'A',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }]
                }, {
                    week: 'Jul 06',
                    practitioners: [{
                        name: 'Ryan Greene',   
                        designation: 'L',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Dan Hart',   
                        designation: 'SL',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Kaplan, Mike',      
                        designation: 'Sr.',                  
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Groff, Jason',   
                        designation: 'A',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }]
                }

            ]
        },{
            name: 'Quality Assurance',
            label: 'QA',
            count: 5,
            details: [{
                detailName: 'CL',
                detailValue: 'Christopher Moore'
            }],
            weeks: [{
                    week: 'Jun 01',
                    practitioners: [{
                        name: 'Ryan Greene',   
                        designation: 'L',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Dan Hart',   
                        designation: 'SL',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Kaplan, Mike',      
                        designation: 'Sr.',                  
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Groff, Jason',   
                        designation: 'A',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }]
                }, {
                    week: 'Jun 08',
                    practitioners: [{
                        name: 'Ryan Greene',   
                        designation: 'L',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Dan Hart',   
                        designation: 'SL',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Kaplan, Mike',      
                        designation: 'Sr.',                  
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Groff, Jason',   
                        designation: 'A',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }]
                }, {
                    week: 'Jun 15',
                    practitioners: [{
                        name: 'Ryan Greene',   
                        designation: 'L',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Dan Hart',   
                        designation: 'SL',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Kaplan, Mike',      
                        designation: 'Sr.',                  
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Groff, Jason',   
                        designation: 'A',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }]
                }, {
                    week: 'Jun 22',
                    practitioners: [{
                        name: 'Ryan Greene',   
                        designation: 'L',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Dan Hart',   
                        designation: 'SL',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Kaplan, Mike',      
                        designation: 'Sr.',                  
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Groff, Jason',   
                        designation: 'A',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }]
                }, {
                    week: 'Jun 29',
                    practitioners: [{
                        name: 'Ryan Greene',   
                        designation: 'L',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Dan Hart',   
                        designation: 'SL',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Kaplan, Mike',      
                        designation: 'Sr.',                  
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Groff, Jason',   
                        designation: 'A',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }]
                }, {
                    week: 'Jul 06',
                    practitioners: [{
                        name: 'Ryan Greene',   
                        designation: 'L',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Dan Hart',   
                        designation: 'SL',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Kaplan, Mike',      
                        designation: 'Sr.',                  
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }, {
                        name: 'Groff, Jason',   
                        designation: 'A',                     
                        availability: {
                            type:'available',
                            percentage:50
                        }
                    }]
                }

            ]
        }
    ];
}
