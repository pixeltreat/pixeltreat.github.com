define(['Boiler', './viewmodel', 'text!./view.html', 'i18n!./nls/resources'], function (Boiler, ViewModel, template, nls) {

    var Component = function (moduleContext) {

        var vm, panel = null;



        moduleContext.listen($ct.en.getRefreshView(), function (viewName) {

            if ($ct.rn.getBulkUpdateSheltereeMedicalUpdate() == viewName) {
                if (vm) {
                    vm.data.resetFields();
                }
            }

        });



        this.activate = function (parent, params) {

            //Set the current view(route name), if view needs refesh functionality
            moduleContext.parentContext.currentView = $ct.rn.getBulkUpdateSheltereeMedicalUpdate();


            if (!panel) {

                panel = new Boiler.ViewTemplate(parent, template, nls);
                vm = new ViewModel(moduleContext);
                kendo.bind(panel.getDomElement(), vm.data);
            }

            vm.data.resetFields();

            panel.show();
            moduleContext.notify($ct.en.getHideEmployeeHeaderNavigation(), null);
            moduleContext.notify($ct.en.getHideEmployeeShelterHeader(), null);
            moduleContext.notify($ct.en.getHideSheltereeHeaderNavigation(), null);
            moduleContext.notify($ct.en.getHideSheltereeShelterHeader(), null);
        }

        this.deactivate = function () {
            if (panel) {
                panel.hide();
            }
        }

    };

    return Component;

});