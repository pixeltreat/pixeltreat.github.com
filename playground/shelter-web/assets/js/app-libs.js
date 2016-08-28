/// <reference path="C:\Dev\tfs\ComTecCollection\Test-TFVC\Apps\Dev\Shelter\Ver1.0\Src\Shelter.Web\01 PL\Shelter.Web\src/modules/modules.js" />

//when adding a variable to this file make sure, there are no name collisions

//global varibales in total application

//Service layer deployed location (Without security)
//var globalBaseServiceUrl = 'https://beta.comtecinfo.com/IMServiceDemo/';

//Servicelayer on local machine.
//var globalBaseServiceUrl = 'http://localhost:7222/';
//var globalBaseServiceUrl = 'https://beta.comtecinfo.com/sheltersl/';
//QA Service URL
var globalBaseServiceUrl = 'https://beta.comtecinfo.com/msnssldemo/';

//var globalBaseServiceUrl = 'http://localhost:52848/';

var gloabalHospitalId = 640502;

var gloabalHospiceId = 640306;

var gloabalMiscellaneousSectionId = 2;
var gloabalVitalSignsSectionId = 4;



//Roles
var globalSuperAdminId = 9;
var globalAdministratorId = 4;
var globalFacilityUpdateId = 3;
var globalFacilityReadOnlyId = 2;


//Question types
//we can get rid of this
var globalAnswerTypes = [
{ "Key": 1, "Value": "String Text Box" },
{ "Key": 2, "Value": "Numeric Text Box" },
{ "Key": 3, "Value": "Decimal Text Box" },
{ "Key": 4, "Value": "Text Area" },
{ "Key": 5, "Value": "Multiple Choice Only One Answer" },
{ "Key": 6, "Value": "MultipleChoice Multiple Answer" },
{ "Key": 7, "Value": "Dropdown List" }
];

var globalDefaultAnswerType = { "Key": 1, "Value": "String Text Box" };


var globalQtStringTextBoxId = 1;
var globalQtNumericTextBoxId = 2;
var globalQtDecimalTextBoxId = 3;
var globalQtTextAreaId = 4;
var globalQtMultipleChoiceOnlyOneAnswerId = 5;
var globalQtMultipleChoiceMultipleAnswerId = 6;
var globalQtDropdownListId = 7;



// Files Order
//1.  comtec.startup.js file
//2. constants and utility functions, these files are independent, does not depend on any other files except comtec.startup.js.
//3. helpers
//4. errors
//5. ajax util
//6. data source files, currently each data source file is independent and does not depend on any other data source files.


/// <reference path="comtec.startup.js" />


// constants and util functions

/// <reference path="common/comtec.model.js" />
/// <reference path="common/comtec.controler.names.js" />
/// <reference path="common/comtec.event.names.js" />
/// <reference path="common/comtec.route.names.js" />
/// <reference path="common/comtec.message.types.js" />
/// <reference path="common/comtec.styles.js" />
/// <reference path="common/comtec.messages.js" />


/// <reference path="comtec.helpers.js" />
/// <reference path="comtec.error.js" />
/// <reference path="comtec.ajax.util.js" />


// Data sorce files
/// <reference path="datasources/comtec.ds.admin.status.js" />
/// <reference path="datasources/comtec.ds.admin.bedtype.js" />
/// <reference path="datasources/comtec.ds.admin.hssbedtype.js" />
/// <reference path="datasources/comtec.ds.admin.genservice.js" />
/// <reference path="datasources/comtec.ds.admin.outcome.js" />
/// <reference path="datasources/comtec.ds.admin.reasons.js" />
/// <reference path="datasources/comtec.ds.admin.promptins.js" />
/// <reference path="datasources/comtec.ds.admin.scripts.js" />
/// <reference path="datasources/comtec.ds.admin.medicalequip.js" />
/// <reference path="datasources/comtec.ds.admin.evacdestination.js" />
/// <reference path="datasources/comtec.ds.admin.utilityprovider.js" />
/// <reference path="datasources/comtec.ds.admin.enum.js" />
/// <reference path="datasources/comtec.ds.admin.transportation.js" />
/// <reference path="datasources/comtec.ds.admin.disposition.js" />
/// <reference path="datasources/comtec.ds.admin.transporttype.js" />
/// <reference path="datasources/comtec.ds.admin.evacueetype.js" />


/// <reference path="datasources/comtec.ds.su.facilitycensus.js" />
/// <reference path="datasources/comtec.ds.su.generatorfacility.js" />
/// <reference path="datasources/comtec.ds.su.facilitycensus.js" />



var $ct = $ct || {};
$ct.ds = $ct.ds || {};
$ct.ds.admin = $ct.ds.admin || {};
$ct.ds.shlt = $ct.ds.shlt || {};
$ct.ds.emp = $ct.ds.emp || {};
$ct.ds.sheltree = $ct.ds.sheltree || {};



$ct.constants = function () {


    var emptyGUID = "00000000-0000-0000-0000-000000000000";

    var getemptyGUID = function () {
        return emptyGUID;
    };

    var newRecordId = "-1";

    var getNewRecordId = function () {
        return newRecordId;
    };

    var getHttpVerb = "GET";

    var getGetHttpVerb = function () {
        return getHttpVerb;
    };

    var postHttpVerb = "POST";

    var getPostHttpVerb = function () {
        return postHttpVerb;
    };

    var dataType = 'json';
    var getDataType = function () {
        return dataType;
    };

    var contentType = 'application/json; charset=utf-8';

    var getContentType = function () {
        return contentType;
    };

    var Key = 'Comtec@12#';
    var getKey = function () {
        return Key;
    };

    var ClientTag = 'ShelterWeb';
    var getClientTag = function () {
        return ClientTag;
    };

    var SessionToken = [];
    var getSessionToken = function () {
        return SessionToken;
    };

    var ServiceRequest = {
        ClientTag: ClientTag,
        AccessToken: 'access',
        InfSystem: 'Comtec',
        RequestId: '',
        SessionToken: [],
        Data: null
    };

    var getServiceRequest = function () {
        return ServiceRequest;
    };



    // Exposed objects and parameters
    return {
        getemptyGUID: getemptyGUID,

        //AJAX Related
        getGetHttpVerb: getGetHttpVerb,
        getPostHttpVerb: getPostHttpVerb,
        getDataType: getDataType,
        getContentType: getContentType,

        //Authentical relates  
        getKey: getKey,
        getClientTag: getClientTag,
        getSessionToken: getSessionToken,
        SessionToken: SessionToken,
        getServiceRequest: getServiceRequest,
        getNewRecordId: getNewRecordId

    };
} ();
















//Controler Names
$ct.cn = function () {

    var baseServiceUrl = globalBaseServiceUrl + "api/";

    
    //Start of admin controllers

    var agencyUrl = baseServiceUrl + "Agency/"
    var getAgencyUrl = function () {
        return agencyUrl;
    };

    var medicalConditionTierUrl = baseServiceUrl + "MedicalConditionTier/"
    var getMedicalConditionTierUrl = function () {
        return medicalConditionTierUrl;
    };

    var shelterTypeUrl = baseServiceUrl + "ShelterType/"
    var getShelterTypeUrl = function () {
        return shelterTypeUrl;
    };

    var staffSpecialtyUrl = baseServiceUrl + "StaffSpeciality/"
    var getStaffSpecialtyUrl = function () {
        return staffSpecialtyUrl;
    };
    //end of admin controllers


    // start of common controllers

    var commonServicesUrl = baseServiceUrl + "KeyValue/"
    var getcommonServicesUrl = function () {
        return commonServicesUrl;
    };
    var departmentServiceUrl = baseServiceUrl + "Department/"
    var getDepartmentServiceUrl = function () {
        return departmentServiceUrl;
    };
    var staffTypeServiceUrl = baseServiceUrl + "StaffType/"
    var getStaffTypeServiceUrl = function () {
        return staffTypeServiceUrl;
    };
    var medicalConditionServiceUrl = baseServiceUrl + "MedicalCondition/"
    var getmedicalConditionServiceUrl = function () {
        return medicalConditionServiceUrl;
    };
    var transportationTypeServiceUrl = baseServiceUrl + "Transportationtype/"
    var getTransportationTypeServiceUrl = function () {
        return transportationTypeServiceUrl;
    };
    var sheltreeEmployeeRatioUrl = baseServiceUrl + "SheltreeEmployeeRatio/"
    var getSheltreeEmployeeRatioUrl = function () {
        return sheltreeEmployeeRatioUrl;
    };


    var equipmentSupplyUrl = baseServiceUrl + "EquipmentSupply/"
    var getEquipmentSupplyUrl = function () {
        return equipmentSupplyUrl;
    };

    var shelterIdentificationUrl = baseServiceUrl + "ShelterIdentification/"
    var getShelterIdentificationUrl = function () {
        return shelterIdentificationUrl;
    };

    // Start of other controllers


    var employeeUrl = baseServiceUrl + "Employee/"
    var getEmployeeUrl = function () {
        return employeeUrl;
    };

    var shelterUrl = baseServiceUrl + "Shelter/"
    var getShelterUrl = function () {
        return shelterUrl;
    };

    var employeeAttendanceUrl = baseServiceUrl + "EmployeeAttendance/"
    var getEmployeeAttendanceUrl = function () {
        return employeeAttendanceUrl;
    };


   
    var DispositionUrl = baseServiceUrl + "Disposition/"
    var getDispositionUrl = function () {
        return DispositionUrl;
    };
    // start of shelterstaus controller
    var shelterStatusUrl = baseServiceUrl + "ShelterStatus/"
    var getShelterStatusUrl = function () {
        return shelterStatusUrl;
    };
    //end of shelterstaus controller


    // start of event controller
    var eventUrl = baseServiceUrl + "Event/"
    var getEventUrl = function () {
        return eventUrl;
    };
    //end of event controller


    // start of shelterstaus controller
   
    //end of shelterstaus controller
    var sheltereeFacilityUrl = baseServiceUrl + "SheltereeFacility/"
    var getSheltereeFacilityUrl = function () {
        return sheltereeFacilityUrl;
    };

    // start of question controller

    var questionUrl = baseServiceUrl + "Question/"
    var getQuestionUrl = function () {
        return questionUrl;
    };

    var questionResponseUrl = baseServiceUrl + "QuestionResponse/"
    var getQuestionResponseUrl = function () {
        return questionResponseUrl;
    };

    // end  of question controller

    // start of reports controller
    var reportsUrl = baseServiceUrl + "Reports/"
    var getReportsUrl = function () {
        return reportsUrl;
    };
    // end  of reports controller
    

    return {
        //Start of admin controllers
        getAgencyUrl: getAgencyUrl,
        getMedicalConditionTierUrl: getMedicalConditionTierUrl,
        getShelterTypeUrl: getShelterTypeUrl,
        getStaffSpecialtyUrl: getStaffSpecialtyUrl,
        getDispositionUrl:getDispositionUrl,
        //end of admin controllers

        // start of common controllers
        getcommonServicesUrl: getcommonServicesUrl,
        getDepartmentServiceUrl: getDepartmentServiceUrl,
        getStaffTypeServiceUrl: getStaffTypeServiceUrl,
        getmedicalConditionServiceUrl: getmedicalConditionServiceUrl,
        getTransportationTypeServiceUrl: getTransportationTypeServiceUrl,
        getSheltreeEmployeeRatioUrl: getSheltreeEmployeeRatioUrl,
        getEquipmentSupplyUrl: getEquipmentSupplyUrl,
        getShelterIdentificationUrl:getShelterIdentificationUrl,
        // end of common controllers

        // Start of other controllers
        getShelterUrl : getShelterUrl,
        getEmployeeUrl: getEmployeeUrl,

        // start of shelterstaus controller
        getShelterStatusUrl: getShelterStatusUrl,
        //end of shelterstaus controller

        // start of event controller
        getEventUrl: getEventUrl,
        //end of event controller
    
        getEmployeeAttendanceUrl: getEmployeeAttendanceUrl,   
        getSheltereeFacilityUrl: getSheltereeFacilityUrl,
        getQuestionUrl: getQuestionUrl,
        getQuestionResponseUrl: getQuestionResponseUrl,


        // start of reports controller
        getReportsUrl: getReportsUrl
        //end of reports controller

       


    };
} ();


//Event Names
$ct.en = function () {

    //start of application independant common events

    var updateSecuritySettings = "UPDATE_SECURITY_SETTINGS";
    var getUpdateSecuritySettings = function () {
        return updateSecuritySettings;
    };

    var doNotHavePermission = "DO_NOT_HAVE_PERMISSION";
    var getDoNotHavePermission = function () {
        return doNotHavePermission;
    };

    var goToNoPermissionPage = "GO_TO_NO_PERMISSION_PAGE";
    var getGoToNoPermissionPage = function () {
        return goToNoPermissionPage;
    };

    var goToNoRolePage = "GO_TO_NO_ROLE_PAGE";
    var getGoToNoRolePage = function () {
        return goToNoRolePage;
    };

    var showValidationMsg = "SHOW_VALIDATION_MESSAGE";

    var getShowValidationMsg = function () {
        return showValidationMsg;
    };

    var showSuccMsg = "SHOW_SUCCESS_MESSAGE";

    var getShowSuccMsg = function () {
        return showSuccMsg;
    };

    var showErrorMsg = "SHOW_ERROR_MESSAGE";

    var getShowErrorMsg = function () {
        return showErrorMsg;
    };

    var showErrorMsgJS = "SHOW_ERROR_MESSAGE_JS";

    var getShowErrorMsgJS = function () {
        return showErrorMsgJS;
    };

    var hideErrorMsg = "HIDE_ERROR_MESSAGE";

    var getHideErrorMsg = function () {
        return hideErrorMsg;
    };


    var refreshView = "REFRESH_VIEW";

    var getRefreshView = function () {
        return refreshView;
    };


    var goToHome = "GO_TO_HOME";

    var getGoToHome = function () {
        return goToHome;
    };


    //end of application independant common events



    

    //start of admin events  

    var displayAgencyList = "DISPLAY_AGENCY_LIST";

    var getDisplayAgencyList = function () {
        return displayAgencyList;
    };


    var agencyCreatedOrUpdated = "AGENCY_CREATED_OR_UPDATED";

    var getAgencyCreatedOrUpdated = function () {
        return agencyCreatedOrUpdated;
    };


    var displayDepartmentList = "DISPLAY_DEPARTMENT_LIST";

    var getDisplayDepartmentList = function () {
        return displayDepartmentList;
    };


    var departmentCreatedOrUpdated = "DEPARTMENT_CREATED_OR_UPDATED";

    var getDepartmentCreatedOrUpdated = function () {
        return departmentCreatedOrUpdated;
    };


    var displayMedicalConditionList = "DISPLAY_MEDICALCONDITION_LIST";

    var getDisplayMedicalConditionList = function () {
        return displayMedicalConditionList;
    };


    var medicalConditionCreatedOrUpdated = "MEDICALCONDITION_CREATED_OR_UPDATED";

    var getMedicalConditionCreatedOrUpdated = function () {
        return medicalConditionCreatedOrUpdated;
    };


    var displayMedicalConditionTierList = "DISPLAY_MEDICALCONDITIONTIER_LIST";

    var getDisplayMedicalConditionTierList = function () {
        return displayMedicalConditionTierList;
    };


    var medicalConditionTierCreatedOrUpdated = "MEDICALCONDITIONTIER_CREATED_OR_UPDATED";

    var getMedicalConditionTierCreatedOrUpdated = function () {
        return medicalConditionTierCreatedOrUpdated;
    };


    var displayShelterTypeList = "DISPLAY_SHELTERTYPE_LIST";

    var getDisplayShelterTypeList = function () {
        return displayShelterTypeList;
    };


    var shelterTypeCreatedOrUpdated = "SHELTERTYPE_CREATED_OR_UPDATED";

    var getShelterTypeCreatedOrUpdated = function () {
        return shelterTypeCreatedOrUpdated;
    };


    var displaySheltreeEmployeeRatioList = "DISPLAY_SHELTREEEMPLOYEERATIO_LIST";

    var getDisplaySheltreeEmployeeRatioList = function () {
        return displaySheltreeEmployeeRatioList;
    };


    var sheltreeEmployeeRatioCreatedOrUpdated = "SHELTREEEMPLOYEERATIO_CREATED_OR_UPDATED";

    var getSheltreeEmployeeRatioCreatedOrUpdated = function () {
        return sheltreeEmployeeRatioCreatedOrUpdated;
    };


    var displayStaffSpecialtyList = "DISPLAY_STAFFSPECIALTY_LIST";

    var getDisplayStaffSpecialtyList = function () {
        return displayStaffSpecialtyList;
    };


    var staffSpecialtyCreatedOrUpdated = "STAFFSPECIALTY_CREATED_OR_UPDATED";

    var getStaffSpecialtyCreatedOrUpdated = function () {
        return staffSpecialtyCreatedOrUpdated;
    };


    var displayStaffTypeList = "DISPLAY_STAFFTYPE_LIST";

    var getDisplayStaffTypeList = function () {
        return displayStaffTypeList;
    };


    var staffTypeCreatedOrUpdated = "STAFFTYPE_CREATED_OR_UPDATED";

    var getStaffTypeCreatedOrUpdated = function () {
        return staffTypeCreatedOrUpdated;
    };


    var displayTransportTypeList = "DISPLAY_TRANSPORTATIONTYPE_LIST";

    var getDisplayTransportTypeList = function () {
        return displayTransportTypeList;
    };


    var transportTypeCreatedOrUpdated = "TRANSPORTATIONTYPE_CREATED_OR_UPDATED";

    var getTransportTypeCreatedOrUpdated = function () {
        return transportTypeCreatedOrUpdated;
    };


    var displayDispositionList = "DISPLAY_DISPOSITION_LIST";

    var getDisplayDispositionList = function () {
        return displayDispositionList;
    };


    var dispositionCreatedOrUpdated = "DISPOSITION_CREATED_OR_UPDATED";

    var getDispositionCreatedOrUpdated = function () {
        return dispositionCreatedOrUpdated;
    };

    var displayEquipmentSupplyList = "DISPLAY_EquipmentSupply_LIST";

    var getDisplayEquipmentSupplyList = function () {
        return displayEquipmentSupplyList;
    };

    var equipmentSupplyCreatedOrUpdated = "EQUIPMENTSUPPLY_CREATED_OR_UPDATED";

    var getEquipmentSupplyCreatedOrUpdated = function () {
        return equipmentSupplyCreatedOrUpdated;
    };

    var displayShelterIdentificationList = "DISPLAY_SHELTERIDENTIFICATION_LIST";

    var getDisplayShelterIdentificationList = function () {
        return displayShelterIdentificationList;
    };
    

    var ShelterIdentificationCreatedOrUpdated = "SHELTERIDENTIFICATION_CREATED_OR_UPDATED";

    var getShelterIdentificationCreatedOrUpdated = function () {
        return ShelterIdentificationCreatedOrUpdated;
    };


    var displayquestionList = "DISPLAY_QUESTION_LIST";

    var getDisplayquestionList = function () {
        return displayquestionList;
    };


    var questionCreatedOrUpdated = "QUESTION_CREATED_OR_UPDATED";

    var getQuestionCreatedOrUpdated = function () {
        return questionCreatedOrUpdated;
    };

    var displayEventList = "DISPLAY_EVENT_LIST";

    var getDisplayEventList = function () {
        return displayEventList;
    };


    var eventCreatedOrUpdated = "EVENT_CREATED_OR_UPDATED";

    var getEventCreatedOrUpdated = function () {
        return eventCreatedOrUpdated;
    };


    //end of admin events

    //start of employee events  


    //Use this event when user clicks on employee menu item second time onwords
    var employeeMenuItemClicked = "EMPLOYEE_MENU_ITEM_CLICKED";

    var getEmployeeMenuItemClicked = function () {
        return employeeMenuItemClicked;
    };

    //to refresh current employee page with newly selected data in employee header(Shelter type and Shelter)
    var employeeHeaderDataChanged = "EMPLOYEE_HEADER_DATA_CHANGED";

    var getEmployeeHeaderDataChanged = function () {
        return employeeHeaderDataChanged;
    };

    //to load shelter type, shelter drop down lists, when user click on employee menu item first time
    var loadEmployeeHeaderInfo = "LOAD_EMPLOYEE_HEADER_INFO";

    var getLoadEmployeeHeaderInfo = function () {
        return loadEmployeeHeaderInfo;
    };


    //to show shelter dropdown lists in employee shelter header
    var showEmployeeShelterHeader = "SHOW_EMPLOYEE_SHELTER_HEADER";

    var getShowEmployeeShelterHeader = function () {
        return showEmployeeShelterHeader;
    };

    //to hide shelter dropdown lists in employee shelter header
    var hideEmployeeShelterHeader = "HIDE_EMPLOYEE_SHELTER_HEADER";

    var getHideEmployeeShelterHeader = function () {
        return hideEmployeeShelterHeader;
    };


    var hideEmployeeHeader = "HIDE_EMPLOYEE_HEADER";

    var getHideEmployeeHeader = function () {
        return hideEmployeeHeader;
    };

    var hideEmployeeHeaderNav = "HIDE_EMPLOYEE_HEADER_NAV";

    var getHideEmployeeHeaderNavigation = function () {
        return hideEmployeeHeaderNav;
    };


    var showActiveEmployeeHeader = "SHOW_ACTIVE_EMPLOYEE_HEADER";

    var getShowActiveEmployeeHeader = function () {
        return showActiveEmployeeHeader;
    };

    var employeeCreatedOrUpdated = "EMPLOYEE_CREATED_OR_UPDATED";

    var getEmployeeCreatedOrUpdated = function () {
        return employeeCreatedOrUpdated;
    };


    var employeeRecordReload = "RELOAD_EMPLOYEE_RECORD";

    var getEmployeeRecordReload = function () {
        return employeeRecordReload;
    };

    var manageEmployeeClicked = "MANAGE_EMPLOYEE_CLICKED";
    var getManageEmployeeClicked = function () {
        return manageEmployeeClicked;
    };


    var manageEmployeeExpandedClicked = "MANAGE_EMPLOYEE_EXPANDED_CLICKED";
    var getManageEmployeeExpandedClicked = function () {
        return manageEmployeeExpandedClicked;
    };

    var employeeExpandedCreatedOrUpdated = "EMPLOYEE_EXPANDED_CREATED_OR_UPDATED";

    var getEmployeeExpandedCreatedOrUpdated = function () {
        return employeeExpandedCreatedOrUpdated;
    };

    //end of employee events
 
    //Start  of employee attendence events

    var employeeAttendenceComments = "COMMENT_UPDATE";

    var getEmployeeAttendenceComments = function () {
        return employeeAttendenceComments;
    };

    var employeeAttendenceList = "DISPLAY_EMPLOYEEATTENDENCE_LIST";

    var getEmployeeAttendenceList = function () {
        return employeeAttendenceList;
    };

    var employeeAttendanceUpdated = "EMPLOYEEATTENDENCE_CREATED_OR_UPDATED";
    var getEmployeeAttendanceUpdated = function () {
        return employeeAttendanceUpdated;
    };



    //End  of employee attendence events

    //start of shelteree events  

    //Use this event when user clicks on shelteree menu item second time onwords
    var sheltereeMenuItemClicked = "SHELTEREE_MENU_ITEM_CLICKED";

    var getSheltereeMenuItemClicked = function () {
        return sheltereeMenuItemClicked;
    };

    //to refresh current shelteree page with newly selected data in shelteree header(Shelter type and Shelter)
    var sheltereeHeaderDataChanged = "SHELTEREE_HEADER_DATA_CHANGED";

    var getSheltereeHeaderDataChanged = function () {
        return sheltereeHeaderDataChanged;
    };

    //to load shelter type, shelter drop down lists, when user click on shelteree menu item first time
    var loadSheltereeHeaderInfo = "LOAD_SHELTEREE_HEADER_INFO";

    var getLoadSheltereeHeaderInfo = function () {
        return loadSheltereeHeaderInfo;
    };


    //to show shelter dropdown lists in shelteree shelter header
    var showSheltereeShelterHeader = "SHOW_SHELTEREE_SHELTER_HEADER";

    var getShowSheltereeShelterHeader = function () {
        return showSheltereeShelterHeader;
    };

    //to hide shelter dropdown lists in shelteree shelter header
    var hideSheltereeShelterHeader = "HIDE_SHELTEREE_SHELTER_HEADER";

    var getHideSheltereeShelterHeader = function () {
        return hideSheltereeShelterHeader;
    };


    var hideSheltereeHeader = "HIDE_SHELTEREE_HEADER";

    var getHideSheltereeHeader = function () {
        return hideSheltereeHeader;
    };

    var hideSheltereeHeaderNav = "HIDE_SHELTEREE_HEADER_NAV";

    var getHideSheltereeHeaderNavigation = function () {
        return hideSheltereeHeaderNav;
    };


    var showActiveSheltereeHeader = "SHOW_ACTIVE_SHELTEREE_HEADER";

    var getShowActiveSheltereeHeader = function () {
        return showActiveSheltereeHeader;
    };

    var sheltereeCreatedOrUpdated = "SHELTEREE_CREATED_OR_UPDATED";

    var getSheltereeCreatedOrUpdated = function () {
        return sheltereeCreatedOrUpdated;
    };

    var sheltereeDischargeCreatedOrUpdated = "SHELTEREE_DISCHARGE_CREATED_OR_UPDATED";

    var getSheltereeDischargeCreatedOrUpdated = function () {
      return sheltereeDischargeCreatedOrUpdated;
    };


    var sheltereeMedicalUpdateCreatedOrUpdated = "SHELTEREE_MEDICAL_UPDATE_CREATED_OR_UPDATED";

    var getSheltereeMedicalUpdateCreatedOrUpdated = function () {
        return sheltereeMedicalUpdateCreatedOrUpdated;
    };



    var sheltereeRecordReload = "RELOAD_SHELTEREE_RECORD";

    var getSheltereeRecordReload = function () {
        return sheltereeRecordReload;
    };

    var manageSheltereeClicked = "MANAGE_SHELTEREE_CLICKED";

    var getManageSheltereeClicked = function () {
        return manageSheltereeClicked;
    };

    var manageSheltereeDischargeClicked = "MANAGE_SHELTEREE_DISCHARGE_CLICKED";

    var getManageSheltereeDischargeClicked = function () {
        return manageSheltereeDischargeClicked;
    };


    var manageSheltereeMedicalUpdateClicked = "MANAGE_SHELTEREE_MEDICAL_UPDATE_CLICKED";

    var getManageSheltereeMedicalUpdateClicked = function () {
        return manageSheltereeMedicalUpdateClicked;
    };


    var sheltereeCensusData = "SHELTEREE_CENSUS_DATA";

    var getSheltereeCensusData = function () {
        return sheltereeCensusData;
    };
    



    //end of shelteree events

    return {

        //start of application independant common events

        getUpdateSecuritySettings: getUpdateSecuritySettings,
        getDoNotHavePermission: getDoNotHavePermission,
        getGoToNoRolePage: getGoToNoRolePage,
        getGoToNoPermissionPage : getGoToNoPermissionPage,
        getShowValidationMsg: getShowValidationMsg,
        getShowSuccMsg: getShowSuccMsg,
        getShowErrorMsg: getShowErrorMsg,
        getShowErrorMsgJS: getShowErrorMsgJS,
        getHideErrorMsg: getHideErrorMsg,
        getRefreshView: getRefreshView,
        getGoToHome: getGoToHome,

        //end of application independant common events


        //start of admin events    
        
        getDisplayAgencyList: getDisplayAgencyList,
        getAgencyCreatedOrUpdated: getAgencyCreatedOrUpdated,
        getDisplayDepartmentList: getDisplayDepartmentList,
        getDepartmentCreatedOrUpdated: getDepartmentCreatedOrUpdated,
        getDisplayMedicalConditionList: getDisplayMedicalConditionList,
        getMedicalConditionCreatedOrUpdated: getMedicalConditionCreatedOrUpdated,
        getDisplayMedicalConditionTierList: getDisplayMedicalConditionTierList,
        getMedicalConditionTierCreatedOrUpdated: getMedicalConditionTierCreatedOrUpdated,
        getDisplayShelterTypeList: getDisplayShelterTypeList,
        getShelterTypeCreatedOrUpdated: getShelterTypeCreatedOrUpdated,
        getDisplaySheltreeEmployeeRatioList: getDisplaySheltreeEmployeeRatioList,
        getSheltreeEmployeeRatioCreatedOrUpdated: getSheltreeEmployeeRatioCreatedOrUpdated,
        getDisplayStaffSpecialtyList: getDisplayStaffSpecialtyList,
        getStaffSpecialtyCreatedOrUpdated: getStaffSpecialtyCreatedOrUpdated,
        getDisplayStaffTypeList: getDisplayStaffTypeList,
        getStaffTypeCreatedOrUpdated: getStaffTypeCreatedOrUpdated,
        getDisplayTransportTypeList: getDisplayTransportTypeList,
        getTransportTypeCreatedOrUpdated: getTransportTypeCreatedOrUpdated,
        getDisplayDispositionList: getDisplayDispositionList,
        getDispositionCreatedOrUpdated: getDispositionCreatedOrUpdated,
        getDisplayEquipmentSupplyList: getDisplayEquipmentSupplyList,
        getEquipmentSupplyCreatedOrUpdated: getEquipmentSupplyCreatedOrUpdated,
        getDisplayShelterIdentificationList:getDisplayShelterIdentificationList,
        getShelterIdentificationCreatedOrUpdated:getShelterIdentificationCreatedOrUpdated,
        getDisplayquestionList: getDisplayquestionList,
        getQuestionCreatedOrUpdated:getQuestionCreatedOrUpdated,
        getDisplayEventList: getDisplayEventList,
        getEventCreatedOrUpdated: getEventCreatedOrUpdated,
        //end of admin events  


        //start of employee events    
        
        getEmployeeMenuItemClicked : getEmployeeMenuItemClicked,
        getEmployeeHeaderDataChanged : getEmployeeHeaderDataChanged,
        getLoadEmployeeHeaderInfo : getLoadEmployeeHeaderInfo,
        getShowEmployeeShelterHeader : getShowEmployeeShelterHeader,
        getHideEmployeeShelterHeader : getHideEmployeeShelterHeader,
        getHideEmployeeHeader : getHideEmployeeHeader,
        getHideEmployeeHeaderNavigation : getHideEmployeeHeaderNavigation,
        getShowActiveEmployeeHeader : getShowActiveEmployeeHeader,
        getManageEmployeeClicked: getManageEmployeeClicked,
        getManageEmployeeExpandedClicked: getManageEmployeeExpandedClicked,
        getEmployeeCreatedOrUpdated: getEmployeeCreatedOrUpdated,
        getEmployeeRecordReload:getEmployeeRecordReload,
        getEmployeeExpandedCreatedOrUpdated: getEmployeeExpandedCreatedOrUpdated,

        //end of employee events 


        //start of employee  attendence events    
        getEmployeeAttendenceComments: getEmployeeAttendenceComments,
        getEmployeeAttendanceUpdated: getEmployeeAttendanceUpdated,
        getEmployeeAttendenceList: getEmployeeAttendenceList,


        //end of employee  attendenceevents 

        //start of shelteree events  

        getSheltereeMenuItemClicked: getSheltereeMenuItemClicked,
        getSheltereeHeaderDataChanged: getSheltereeHeaderDataChanged,
        getLoadSheltereeHeaderInfo: getLoadSheltereeHeaderInfo,
        getShowSheltereeShelterHeader: getShowSheltereeShelterHeader,
        getHideSheltereeShelterHeader: getHideSheltereeShelterHeader,
        getHideSheltereeHeader: getHideSheltereeHeader,
        getHideSheltereeHeaderNavigation: getHideSheltereeHeaderNavigation,
        getShowActiveSheltereeHeader: getShowActiveSheltereeHeader,
        getSheltereeCreatedOrUpdated: getSheltereeCreatedOrUpdated,
        getSheltereeDischargeCreatedOrUpdated: getSheltereeDischargeCreatedOrUpdated,
        getSheltereeMedicalUpdateCreatedOrUpdated:getSheltereeMedicalUpdateCreatedOrUpdated,
        getSheltereeRecordReload: getSheltereeRecordReload,
        getManageSheltereeClicked: getManageSheltereeClicked,
        getManageSheltereeDischargeClicked: getManageSheltereeDischargeClicked,
        getManageSheltereeMedicalUpdateClicked: getManageSheltereeMedicalUpdateClicked,
        getSheltereeCensusData: getSheltereeCensusData

        //end of shelteree events
    };
} ();

//Route names
// When ever route name in the module is changed change corresponding name here also.
//When new route is added in module, add new route here also.
$ct.rn = function () {

    /*start of other routes */

    var noPermission = "nopermission";

    var getNoPermission = function () {
        return noPermission;
    };

    var noRole = "norole";

    var getNoRole = function () {
        return noRole;
    };

    var noActiveEvent = "noactiveevent";

    var getNoActiveEvent = function () {
        return noActiveEvent;
    };


    var noFacilitiesFound = "nofacilitiesfound";

    var getNoFacilitiesFound = function () {
        return noFacilitiesFound;
    };

    
    /*end of other routes */


    
    //start of admin routes

    var agencyList = "agencylist";

    var getAgencyList = function () {
        return agencyList;
    };


    var agency = "agency";

    var getAgency = function () {
        return agency;
    };


    var departmentList = "departmentlist";

    var getDepartmentList = function () {
        return departmentList;
    };


    var department = "department";

    var getDepartment = function () {
        return department;
    };


    var medicalConditionList = "medicalconditionlist";

    var getMedicalConditionList = function () {
        return medicalConditionList;
    };


    var medicalCondition = "medicalcondition";

    var getMedicalCondition = function () {
        return medicalCondition;
    };


    var medicalConditionTierList = "medicalconditiontierlist";

    var getMedicalConditionTierList = function () {
        return medicalConditionTierList;
    };


    var medicalConditionTier = "medicalconditiontier";

    var getMedicalConditionTier = function () {
        return medicalConditionTier;
    };


    var shelterTypeList = "sheltertypelist";

    var getShelterTypeList = function () {
        return shelterTypeList;
    };


    var shelterType = "sheltertype";

    var getShelterType = function () {
        return shelterType;
    };


    var sheltreeEmployeeRatioList = "sheltreeemployeeratiolist";

    var getSheltreeEmployeeRatioList = function () {
        return sheltreeEmployeeRatioList;
    };


    var sheltreeEmployeeRatio = "sheltreeemployeeratio";

    var getSheltreeEmployeeRatio = function () {
        return sheltreeEmployeeRatio;
    };


    var staffSpecialtyList = "staffspecialtylist";

    var getStaffSpecialtyList = function () {
        return staffSpecialtyList;
    };


    var staffSpecialty = "staffspecialty";

    var getStaffSpecialty = function () {
        return staffSpecialty;
    };



    var staffTypeList = "stafftypelist";

    var getStaffTypeList = function () {
        return staffTypeList;
    };


    var staffType = "stafftype";

    var getStaffType = function () {
        return staffType;
    };


    var transportTypeList = "transportationtypelist";

    var getTransportTypeList = function () {
        return transportTypeList;
    };


    var transportType = "transportationtype";

    var getTransportType = function () {
        return transportType;
    };


    var dispositionList = "dispositionlist";

    var getDispositionList = function () {
        return dispositionList;
    };


    var disposition = "disposition";

    var getDisposition = function () {
        return disposition;
    };


    var equipmentSupplyList = "equipmentsupplylist";

    var getequipmentSupplyList = function () {
        return equipmentSupplyList;
    };


    var equipmentSupply = "equipmentsupply";

    var getequipmentSupply = function () {
        return equipmentSupply;
    };


    var shelterIdentificationList = "shelteridentificationlist";

    var getshelterIdentificationList = function () {
        return shelterIdentificationList;
    };


    var shelterIdentification = "shelteridentification";

    var getshelterIdentification = function () {
        return shelterIdentification;
    };


    var questionList = "questionlist";

    var getQuestionList = function () {
        return questionList;
    };


    var question = "question";

    var getQuestion = function () {
        return question;
    };

    var eventList = "eventlist";

    var getEventList = function () {
        return eventList;
    };


    var event = "event";

    var getEvent= function () {
        return event;
    };
   
    //end of admin routes
    

    //start of shelter routes


    var shelterStatus = "shelterstatus";

    var getShelterStatus = function () {
        return shelterStatus;
    };


    //end of shelter routes



    //start of employee routes


    var employeeList = "employeelist";

    var getEmployeeList = function () {
        return employeeList;
    };
    

    var employeeExtendedList = "employeeextendedlist";

    var getEmployeeExtendedList = function () {
        return employeeExtendedList;
    };


    var employee = "employee";

    var getEmployee = function () {
        return employee;
    };
    

    var bulkUpdateEmployee = "bulkupdateemployee";

    var getBulkUpdateEmployee = function () {
        return bulkUpdateEmployee;
    };

    var bulkUpdateEmployeeExtended = "bulkupdateemployeeextended";

    var getBulkUpdateEmployeeExtended = function () {
        return bulkUpdateEmployeeExtended;
    };
    

    var downloadEmployee = "downloademployee";

    var getDownloadEmployee = function () {
        return downloadEmployee;
    };


    var uploadEmployee = "uploademployee";

    var getUploadEmployee = function () {
        return uploadEmployee;
    };

    var employeeAttendance = "employeeattendance";

    var getEmployeeAttendance = function () {
        return employeeAttendance;
    };
    
    var employeeAttendanceComments = "comments";

    var getEmployeeAttendanceComments = function () {
        return employeeAttendanceComments;
    };


    var bulkUpdateEmployeeAttendance = "bulkupdateemployeeattendance";

    var getBulkUpdateEmployeeAttendance = function () {
        return bulkUpdateEmployeeAttendance;
    };


    var multiFacilityEmployeeAttendance = "multifacilityemployeeattendance";

    var getMultiFacilityEmployeeAttendance = function () {
        return multiFacilityEmployeeAttendance;
    };

    var multiFacilityEmployeeExtendedList = "multifacilityemployeeextendedlist";

    var getMultiFacilityEmployeeExtendedList = function () {
        return multiFacilityEmployeeExtendedList;
    };
    var multiFacilityEmployeeList = "multifacilityemployeelist";

    var getMultiFacilityEmployeeList = function () {
        return multiFacilityEmployeeList;
    };


    //end of employee routes
   

    //start of shelteree routes


    var sheltereeList = "sheltereelist";

    var getSheltereeList = function () {
        return sheltereeList;
    };
   
    var sheltereeMedicalUpdateList = "sheltereemedicalupdatelist";

    var getSheltereeMedicalUpdateList = function () {
        return sheltereeMedicalUpdateList;
    };

    var sheltereeDischargeList = "sheltereedischargelist";

    var getSheltereeDischargeList = function () {
        return sheltereeDischargeList;
    };
    
    var shelteree = "shelteree";

    var getShelteree = function () {
        return shelteree;
    };


    var bulkUpdateShelteree = "bulkupdateshelteree";

    var getBulkUpdateShelteree = function () {
        return bulkUpdateShelteree;
    };

    var bulkUpdateSheltereeDischarge = "bulkupdatesheltereedischarge";

    var getBulkUpdateSheltereeDischarge = function () {
        return bulkUpdateSheltereeDischarge;
    };


    var bulkUpdateSheltereeMedicalUpdate = "bulkupdatesheltereemedicalupdate";

    var getBulkUpdateSheltereeMedicalUpdate = function () {
        return bulkUpdateSheltereeMedicalUpdate;
    };

    var downloadShelteree = "downloadshelteree";

    var getDownloadShelteree = function () {
        return downloadShelteree;
    };


    var uploadShelteree = "uploadshelteree";

    var getUploadShelteree = function () {
        return uploadShelteree;
    };




    //end of shelteree routes
    
    //start of report routes


    var staffRawDataReport = "staffrawdatareport";

    var getStaffRawDataReport = function () {
        return staffRawDataReport;
    };


    var staffAttendanceRawDataReport = "staffattendancerawdatareport";

    var getStaffAttendanceRawDataReport = function () {
        return staffAttendanceRawDataReport;
    };


    var sheltereeRawDataReport = "sheltereerawdatareport";

    var getSheltereeRawDataReport = function () {
        return sheltereeRawDataReport;
    };

    //end of report routes

    return {

        /*start of other routes */

        getNoPermission: getNoPermission,
        getNoRole: getNoRole,
        getNoActiveEvent: getNoActiveEvent,
        getNoFacilitiesFound:getNoFacilitiesFound,
        /*end of other module routes */


        //start of admin routes

        getAgencyList: getAgencyList,
        getAgency: getAgency,
        getDepartmentList: getDepartmentList,
        getDepartment: getDepartment,
        getMedicalConditionList: getMedicalConditionList,
        getMedicalCondition: getMedicalCondition,
        getMedicalConditionTierList: getMedicalConditionTierList,
        getMedicalConditionTier: getMedicalConditionTier,
        getShelterTypeList: getShelterTypeList,
        getShelterType: getShelterType,
        getSheltreeEmployeeRatioList: getSheltreeEmployeeRatioList,
        getSheltreeEmployeeRatio: getSheltreeEmployeeRatio,
        getStaffSpecialtyList: getStaffSpecialtyList,
        getStaffSpecialty: getStaffSpecialty,
        getStaffTypeList: getStaffTypeList,
        getStaffType: getStaffType,
        getTransportTypeList: getTransportTypeList,
        getTransportType: getTransportType,
        getDispositionList: getDispositionList,
        getDisposition: getDisposition,
        getequipmentSupplyList: getequipmentSupplyList,
        getequipmentSupply: getequipmentSupply,
        getshelterIdentification: getshelterIdentification,
        getshelterIdentificationList:getshelterIdentificationList,
        getQuestionList: getQuestionList,
        getQuestion: getQuestion,
        getEventList: getEventList,
        getEvent: getEvent,
        //end of admin routes


        //start of shelter routes

        getShelterStatus:getShelterStatus,

        //end of shelter routes


        //start of employee routes

        getEmployeeList: getEmployeeList,
        getEmployeeExtendedList:getEmployeeExtendedList,
        getEmployee: getEmployee,
        getBulkUpdateEmployee: getBulkUpdateEmployee,
        getBulkUpdateEmployeeExtended:getBulkUpdateEmployeeExtended,
        getDownloadEmployee:getDownloadEmployee,
        getUploadEmployee:getUploadEmployee,
        getEmployeeAttendance: getEmployeeAttendance,
        getBulkUpdateEmployeeAttendance: getBulkUpdateEmployeeAttendance,
        getMultiFacilityEmployeeAttendance: getMultiFacilityEmployeeAttendance,
        getMultiFacilityEmployeeExtendedList: getMultiFacilityEmployeeExtendedList,
        getMultiFacilityEmployeeList: getMultiFacilityEmployeeList,

        //end of employee routes


        //start of shelteree routes

        getSheltereeList: getSheltereeList,
        getSheltereeMedicalUpdateList: getSheltereeMedicalUpdateList,
        getSheltereeDischargeList: getSheltereeDischargeList,
        getShelteree: getShelteree,
        getBulkUpdateShelteree: getBulkUpdateShelteree,
        getBulkUpdateSheltereeDischarge: getBulkUpdateSheltereeDischarge,
        getBulkUpdateSheltereeMedicalUpdate: getBulkUpdateSheltereeMedicalUpdate,
        getDownloadShelteree: getDownloadShelteree,
        getUploadShelteree: getUploadShelteree,

        //end of shelteree routes

        //start of report routes

        getStaffRawDataReport: getStaffRawDataReport,
        getStaffAttendanceRawDataReport: getStaffAttendanceRawDataReport,
        getSheltereeRawDataReport: getSheltereeRawDataReport

        //end  of report routes
    };
} ();
//Message types, Acknowledge Types and response message validation
$ct.mt = function () {


    // This object corresponds to AcknowledgeTypeEnum enum in service layer
    var acknowledgeType = {
        success: "success",
        failure: "failure"
    }


    var getAcknowledgeTypeSuccess = function () {
        return acknowledgeType.success;
    };

    var getAcknowledgeTypeFailure = function () {
        return acknowledgeType.failure;
    };

    var isError = function (response) {

        var error = false;

        if (getAcknowledgeTypeSuccess() !== $ct.helpers.toLower(response.AcknowledgeType)) {

            if ((response.MessageType !== undefined) && (response.MessageType !== null)) {
                if (messageTypes.error == $ct.helpers.toLower(response.MessageType) || messageTypes.warning == $ct.helpers.toLower(response.MessageType) || messageTypes.information == $ct.helpers.toLower(response.MessageType) || messageTypes.info == $ct.helpers.toLower(response.MessageType) || messageTypes.message == $ct.helpers.toLower(response.MessageType) || messageTypes.exportToExcel == $ct.helpers.toLower(response.MessageType) || messageTypes.businessRuleValidation == $ct.helpers.toLower(response.MessageType)) {
                    error = true;
                }
            }
            else {
                error = true;
            }
        }

        return error;

    };

    var getErrorObject = function (response) {

        if (isError(response)) {

            var errorObject = {};

            if ((response.MessageType !== undefined) && (response.MessageType !== null)) {
                errorObject.messageType = response.MessageType;
            }
            else {
                errorObject.messageType = messageTypes.error;
            }

            if ((response.MessageType !== undefined) && (response.MessageType !== null)) {
                errorObject.message = response.Message;
            }
            else {
                errorObject.message = "Error please contact administrator";
            }

            return errorObject;
        }

        return null;

    };



    // This object corresponds to MessageTypeEnum enum in service layer
    var messageTypes = {

        //Download is removed
        success: "success",
        error: "error",
        warning: "warning",
        information: "information",
        info: "info",
        message: "message",
        versionConflict: "versionconflict",
        noDataFound: "nodatafound",
        noActiveEvent: "noactiveevent",
        exportToExcel: "exporttoexcel" ,
        businessRuleValidation: "businessrulevalidation",
        authentication: "authentication",
        concurrentEvent: "concurrentevent"

    };

    var getSuccess = function () {
        return messageTypes.success;
    };

    var getError = function () {
        return messageTypes.error;
    };

    var getWarning = function () {
        return messageTypes.warning;
    };

    var getInformation = function () {
        return messageTypes.information;
    };

    var getInfo = function () {
        return messageTypes.info;
    };

    var getMessage = function () {
        return messageTypes.message;
    };

    var getVersionConflict = function () {
        return messageTypes.versionConflict;
    };

    var getNoDataFound = function () {
        return messageTypes.noDataFound;
    };


    var getAuthentication = function () {
        return messageTypes.authentication;
    };

    var getConcurrentEvent = function () {
        return messageTypes.concurrentEvent;
    };


    var isAuthenticationFailed = function (response) {

        if ((response.MessageType !== undefined) && (response.MessageType !== null)) {
            if (messageTypes.authentication === $ct.helpers.toLower(response.MessageType)) {
                return true;
            }
        }
        return false;

    };

    var isVersionConflict = function (response) {

        if ((response.MessageType !== undefined) && (response.MessageType !== null)) {
            if (messageTypes.versionConflict === $ct.helpers.toLower(response.MessageType)) {
                return true;
            }
        }
        return false;

    };

    var isNoDataFound = function (response) {

        if ((response.MessageType !== undefined) && (response.MessageType !== null)) {
            if (messageTypes.noDataFound === $ct.helpers.toLower(response.MessageType)) {
                return true;
            }
        }
        return false;

    };


    var isBusinessRule = function (response) {

        if ((response.MessageType !== undefined) && (response.MessageType !== null)) {
            if (messageTypes.businessRuleValidation === $ct.helpers.toLower(response.MessageType)) {
                return true;
            }
        }
        return false;

    };


    var isNoActiveEvent = function (response) {

        if ((response.MessageType !== undefined) && (response.MessageType !== null)) {
            if (messageTypes.noActiveEvent === $ct.helpers.toLower(response.MessageType)) {
                return true;
            }
        }
        return false;

    };


    var isConcurrentEvent = function (response) {

        if ((response.MessageType !== undefined) && (response.MessageType !== null)) {
            if (messageTypes.concurrentEvent === $ct.helpers.toLower(response.MessageType)) {
                return true;
            }
        }
        return false;

    };


    return {

        //Acknowledge types
        getAcknowledgeTypeSuccess: getAcknowledgeTypeSuccess,
        getAcknowledgeTypeFailure: getAcknowledgeTypeFailure,

        //Message types
        getSuccess: getSuccess,
        getError: getError,
        getWarning: getWarning,
        getInformation: getInformation,
        getInfo: getInfo,
        getMessage: getMessage,
        getVersionConflict: getVersionConflict,
        getNoDataFound: getNoDataFound,
        getAuthentication: getAuthentication,
        getConcurrentEvent: getConcurrentEvent,

        //Message type validations
        isAuthenticationFailed : isAuthenticationFailed,
        isVersionConflict: isVersionConflict,
        isNoDataFound: isNoDataFound,
        isBusinessRule : isBusinessRule,
        isNoActiveEvent: isNoActiveEvent,
        isConcurrentEvent: isConcurrentEvent,

        isError : isError,
        getErrorObject: getErrorObject

    };
} ();
//styles
$ct.styles = function () {

    var validDataBorder = "1px solid #00ff00";

    var getValidDataBorder = function () {
        return validDataBorder;
    };


    var invalidDataBorder = "1px solid #ff0000";

    var getInvalidDataBorder = function () {
        return invalidDataBorder;
    };


    var noneStyle = "none";

    var getNoneStyle = function () {
        return noneStyle;
    };


    var blockStyle = "block";

    var getBlockStyle = function () {
        return blockStyle;
    };

    var inlineBlockStyle = "inline-block";

    var getInlineBlockStyle = function () {
        return inlineBlockStyle;
    };

    var removeInvalidDataBorder = "";

    var getRemoveInvalidDataBorder = function () {
        return removeInvalidDataBorder;
    };


    var displayInlineBlockClass = "displayInlineBlock";

    var getDisplayInlineBlockClass = function () {
        return displayInlineBlockClass;
    };

    var displayNoneImportantClass = "displayNoneImportant";

    var getDisplayNoneImportantClass = function () {
        return displayNoneImportantClass;
    };



    var dataInvalidClass = "datainvalidcolor";

    var getDataInvalidClass = function () {
        return dataInvalidClass;
    };


    var noClass = "";

    var getNoClass = function () {
        return noClass;
    };


    //staus update classes

    var redBorderStatusUpdate = "redBrdr";

    var getRedBorderStatusUpdate = function () {
        return redBorderStatusUpdate;
    };

    var greyBorderStatusUpdate = "greyBrdr";

    var getGreyBorderStatusUpdate = function () {
        return greyBorderStatusUpdate;
    };

    var redBorderClass = "redBorder";

    var getRedBorderClass = function () {
        return redBorderClass;
    };

    var greenBorderClass = "greenBorder";

    var getGreenBorderClass = function () {
        return greenBorderClass;
    };

    var grayBorderClass = "greyBorder";

    var getGrayBorderClass = function () {
        return grayBorderClass;
    };

    var okCircleClass = "icon-ok-circle";

    var getOkCircleClass = function () {
        return okCircleClass;
    };


    var attentionClass = "icon-attention";

    var getAttentionClass = function () {
        return attentionClass;
    };

    var emptyIconClass = "icon-right-dir";

    var getEmptyIconClass = function () {
        return emptyIconClass;
    };

    //staus update classes end

    //message header classes

    var redBackgroundClass = "imp-message_red";

    var getRedBackgroundClass = function () {
        return redBackgroundClass;
    };

    var grayBackgroundClass = "imp-message_grey";

    var getGrayBackgroundClass = function () {
        return grayBackgroundClass;
    };

    var greenBackgroundClass = "imp-message_green";

    var getGreenBackgroundClass = function () {
        return greenBackgroundClass;
    };


    var redMessageIconClass = "imp-message-icon_red";

    var getRedMessageIconClass = function () {
        return redMessageIconClass;
    };


    var grayMessageIconClass = "imp-message-icon_grey";

    var getGrayMessageIconClass = function () {
        return grayMessageIconClass;
    };


    var greenMessageIconClass = "imp-message-icon_green";

    var getGreenMessageIconClass = function () {
        return greenMessageIconClass;
    };

    //message header classes end


    // start of sheltree header classes

    var completeDataPresentClass = "sheltree-navigation__complete-data";

    var getCompleteDataPresentClass = function () {
        return completeDataPresentClass;
    };

    var partialDataPresentClass = "sheltree-navigation__partial-data";

    var getPartialDataPresentClass = function () {
        return partialDataPresentClass;
    };

    var noDataClass = "sheltree-navigation__no-data";

    var getNoDataClass = function () {
        return noDataClass;
    };

    var activeTabClass = "sheltree-navigation__focus";

    var getActiveTabClass = function () {
        return activeTabClass;
    };


    var tabDisabledClass = "sheltree-navigation__disabled";

    var getTabDisabledClass = function () {
        return tabDisabledClass;
    };



    // end of sheltree header classes




    return {

        getValidDataBorder: getValidDataBorder,
        getInvalidDataBorder: getInvalidDataBorder,

        getNoneStyle: getNoneStyle,
        getBlockStyle: getBlockStyle,
        getInlineBlockStyle: getInlineBlockStyle,

        getDisplayInlineBlockClass: getDisplayInlineBlockClass, 
        getDisplayNoneImportantClass : getDisplayNoneImportantClass,

        getRemoveInvalidDataBorder: getRemoveInvalidDataBorder,
        getDataInvalidClass: getDataInvalidClass,
        getNoClass: getNoClass,

        //staus update classes
        getRedBorderStatusUpdate: getRedBorderStatusUpdate,
        getGreyBorderStatusUpdate: getGreyBorderStatusUpdate,
        getRedBorderClass: getRedBorderClass,
        getGreenBorderClass: getGreenBorderClass,
        getGrayBorderClass: getGrayBorderClass,
        getOkCircleClass: getOkCircleClass,
        getAttentionClass: getAttentionClass,
        getEmptyIconClass: getEmptyIconClass,


        //message header classes
        getRedBackgroundClass: getRedBackgroundClass,
        getGrayBackgroundClass: getGrayBackgroundClass,
        getGreenBackgroundClass: getGreenBackgroundClass,
        getRedMessageIconClass: getRedMessageIconClass,
        getGrayMessageIconClass: getGrayMessageIconClass,
        getGreenMessageIconClass: getGreenMessageIconClass,

        // start of sheltree header classes
        getCompleteDataPresentClass: getCompleteDataPresentClass,
        getPartialDataPresentClass : getPartialDataPresentClass,
        getNoDataClass: getNoDataClass,
        getActiveTabClass: getActiveTabClass,
        getTabDisabledClass: getTabDisabledClass
        // end of sheltree header classes
    };
} ();

//Messages
$ct.msg = function () {

    //Common messages

    var genericErrorMsg = 'An Unknown Error Occured While Processing Your Request. Please Contact Administrator.';
    var getGenericErrorMsg = function () {
        return genericErrorMsg;
    };

    var invalidServiceRequestObject = "Please Configure ServiceRequest Object Properly."
    var getInvalidServiceRequestObject = function () {
        return invalidServiceRequestObject;
    };

    var invalidRequestMsg = "Invalid Request";
    var getinvalidRequestMsg = function () {
        return invalidRequestMsg;
    };

    var invalidResponseForRequestMsg = "Invalid Response For Request";
    var getInvalidResponseForRequestMsg = function () {
        return invalidResponseForRequestMsg;
    };

    var invalidResponseMsg = " Invalid Response ";
    var getInvalidResponseMsg = function () {
        return invalidResponseMsg;
    };

    var versionConflictReloadMsg = "Version Conflict Occured Do You Want To Refresh Data ?";
    var getVersionConflictReloadMsg = function () {
        return versionConflictReloadMsg;
    };

    var deleteConfirmationMsg = "Are You Sure You Want To Delete? ";
    var getDeleteConfirmationMsg = function () {
        return deleteConfirmationMsg;
    };

    var validationMsg = "Please Fill Required Data ";
    var getValidationMsg = function () {
        return validationMsg;
    };

    var successMsg = " Saved Successfully";
    var getSuccessMsg = function () {
        return successMsg;
    };

    var deleteSuccessMsg = " Deleted Successfully";
    var getDeleteSuccessMsg = function () {
        return deleteSuccessMsg;
    };


    var employeeUploadError = "Invalid Data";
    var getEmployeeUploadError = function () {
        return employeeUploadError;
    };

    var sheltereeUploadError = "Invalid Data";
    var getSheltereeUploadError = function () {
        return sheltereeUploadError;
    };



    //Form specific messages




    var agencySuccessMsg = "Agency " + successMsg;
    var getAgencySuccessMsg = function () {
        return agencySuccessMsg;
    };

    var shelterTypeSuccessMsg = "ShelterType " + successMsg;
    var getShelterTypeSuccessMsg = function () {
        return shelterTypeSuccessMsg;
    };

    var medicalConditionTierSuccessMsg = "Medical Condition Tier" + successMsg;
    var getMedicalConditionTierSuccessMsg = function () {
        return medicalConditionTierSuccessMsg
    };

    var staffSpecialtySuccessMsg = "Staff Specialty " + successMsg;
    var getStaffSpecialtySuccessMsg = function () {
        return staffSpecialtySuccessMsg;
    };
    var departmentSuccessMsg = "Department " + successMsg;
    var getDepartmentSuccessMsg = function () {
        return departmentSuccessMsg;
    };
    var medicalConditionSuccessMsg = "Medical Condition " + successMsg;
    var getMedicalConditionSuccessMsg = function () {
        return medicalConditionSuccessMsg;
    };
    var sheltereeEmployeeSuccessMsg = "Shelteree Staff Ratio" + successMsg;
    var getSheltereeEmployeeSuccessMsg = function () {
        return sheltereeEmployeeSuccessMsg;
    };
    var staffTypeSuccessMsg = "Staff Type " + successMsg;
    var getStaffTypeSuccessMsg = function () {
        return staffTypeSuccessMsg;
    };
    var transportTypeSuccessMsg = "Transportation Type" + successMsg;
    var getTransportTypeSuccessMsg = function () {
        return transportTypeSuccessMsg;
    };

    var equipmentSupplySuccessMsg = "Equipment Supply" + successMsg;
    var getEquipmentSupplySuccessMsg = function () {
        return equipmentSupplySuccessMsg;
    };

    var questionSuccessMsg = "Question" + successMsg;
    var getQuestionSuccessMsg = function () {
        return questionSuccessMsg;
    };

    var questionResponseSuccessMsg = "Question Response" + successMsg;
    var getQuestionResponseSuccessMsg = function () {
        return questionResponseSuccessMsg;
    };


    var eventSuccessMsg = "Event" + successMsg;
    var getEventSuccessMsg = function () {
        return eventSuccessMsg;
    };



    var questionDeleteSuccessMsg = "Question" + deleteSuccessMsg;
    var getQuestionDeleteSuccessMsg = function () {
        return questionDeleteSuccessMsg;
    };
    var agencyDeleteSuccessMsg = "Agency " + deleteSuccessMsg;
    var getAgencyDeleteSuccessMsg = function () {
        return agencyDeleteSuccessMsg;
    };

    var medicalConditionTierDeleteSuccessMsg = "Medical Condition Tier" + deleteSuccessMsg;
    var getMedicalConditionTierDeleteSuccessMsg  = function () {
        return medicalConditionTierDeleteSuccessMsg 
    };

    var shelterTypeDeleteSuccessMsg = "Shelter Type " + deleteSuccessMsg;
    var getShelterTypeDeleteSuccessMsg = function () {
        return shelterTypeDeleteSuccessMsg;
    };

    var staffSpecialtyDeleteSuccessMsg = "Staff Specialty " + deleteSuccessMsg;
    var getStaffSpecialtyDeleteSuccessMsg = function () {
        return staffSpecialtyDeleteSuccessMsg;
    };

    var departmentDeleteSuccessMsg = "Department " + deleteSuccessMsg;
    var getDepartmentDeleteSuccessMsg = function () {
        return departmentDeleteSuccessMsg;
    };
    var medicalConditionDeleteSuccessMsg = "Medical Condition " + deleteSuccessMsg;
    var getMedicalConditionDeleteSuccessMsg = function () {
        return medicalConditionDeleteSuccessMsg;
    };
    var sheltereeEmployeeDeleteSuccessMsg = "Shelteree Staff Ratio" + deleteSuccessMsg;
    var getSheltereeEmployeeDeleteSuccessMsg = function () {
        return sheltereeEmployeeDeleteSuccessMsg;
    };
    var staffTypeDeleteSuccessMsg = "Staff Type " + deleteSuccessMsg;
    var getStaffTypeDeleteSuccessMsg = function () {
        return staffTypeDeleteSuccessMsg;
    };
    var transportTypeDeleteSuccessMsg = "Transportation Type " + deleteSuccessMsg;
    var getTransportTypeDeleteSuccessMsg = function () {
        return transportTypeDeleteSuccessMsg;
    };


    var shelterIdentificationDeleteSuccessMsg = "Shelter Identification " + deleteSuccessMsg;
    var getShelterIdentificationDeleteSuccessMsg = function () {
        return shelterIdentificationDeleteSuccessMsg;
    };
   

    var shelterIdentificationSuccessMsg = "Shelter Identification " + successMsg;
    var getShelterIdentificationSuccessMsg = function () {
        return shelterIdentificationSuccessMsg;
    };

    var eventDeleteSuccessMsg = "Event " + deleteSuccessMsg;
    var getEventDeleteSuccessMsg = function () {
        return eventDeleteSuccessMsg;
    };
    
    var uploadValidFile = "Please Select Excel File(.xls,.xslx)";
    var getUploadValidFile = function () {
        return uploadValidFile;
    };
    

    var validateUploadEmployees = "Please Select Import Action";
    var getEmployeesUploadImportOption = function () {
        return validateUploadEmployees;
    };


    // employee related messages

    var EmployeeSuccessMsg = "Staff" + successMsg;
    var getEmployeeSuccessMsg = function () {
        return EmployeeSuccessMsg;
    };


    var employeeDeleteSuccessMsg = "Staff " + deleteSuccessMsg;
    var getEmployeeDeleteSuccessMsg = function () {
        return employeeDeleteSuccessMsg;
    };

    var employeeUploadSuccessMsg = "Data " + successMsg;
    var getEmployeeUploadSuccessMsg = function () {
        return employeeUploadSuccessMsg;
    };


    var employeeAttendenceUpdatedSuccessMsg = "Staff Attendance" + successMsg;
    var getEmployeeAttendenceUpdatedSuccessMsg = function () {
        return employeeAttendenceUpdatedSuccessMsg;
    };

    var dispositionDeleteSuccessMsg = "Disposition " + deleteSuccessMsg;
    var getDispositionDeleteSuccessMsg = function () {
        return dispositionDeleteSuccessMsg;
    };

    var dispositionSuccessMsg = "Disposition " + successMsg;
    var getDispositionSuccessMsg = function () {
        return dispositionSuccessMsg;
    };


    var equipmentSupplyDeleteSuccessMsg = "Equipment Supply " + deleteSuccessMsg;
    var getequipmentSupplyDeleteSuccessMsg = function () {
        return equipmentSupplyDeleteSuccessMsg;
    };

    // shelterstatus related messages

    var ShelterStatusSuccessMsg = "Shelter Status" + successMsg;
    var getShelterStatusSuccessMsg = function () {
        return ShelterStatusSuccessMsg;
    };

    // shelteree related messages

    var sheltereeSuccessMsg = "Shelteree" + successMsg;
    var getSheltereeSuccessMsg = function () {
        return sheltereeSuccessMsg;
    };


    var sheltereeUploadSuccessMsg = "Data " + successMsg;
    var getSheltereeUploadSuccessMsg = function () {
        return sheltereeUploadSuccessMsg;
    };

    var sheltereeMedicalConditionUpdateListSuccessMsg = "Medical Condition Update  Comment " + successMsg;
    var getSheltereeMedicalConditionUpdateListCommentSuccessMsg = function () {
        return sheltereeMedicalConditionUpdateListSuccessMsg;
    };

    var demographicsSuccessMsg = "Demographics " + successMsg;
    var getDemographicsSuccessMsg = function () {
        return demographicsSuccessMsg;
    };

    var medicalSuccessMsg = "Medical " + successMsg;
    var getMedicalSuccessMsg = function () {
        return medicalSuccessMsg;
    };

    var treatmentsSuccessMsg = "Treatments " + successMsg;
    var getTreatmentsSuccessMsg = function () {
        return treatmentsSuccessMsg;
    };

    var equipmentSuccessMsg = "Equipment " + successMsg;
    var getEquipmentSuccessMsg = function () {
        return equipmentSuccessMsg;
    };

    var medicationSuccessMsg = "Medication" + successMsg;
    var getMedicationSuccessMsg = function () {
        return medicationSuccessMsg;
    };
    
    var sheltereeDispositionSuccessMsg = "Disposition " + successMsg;
    var getSheltereeDispostionSuccessMsg = function () {
        return sheltereeDispositionSuccessMsg;
    };

    var incompletesheltereetabdatawarningMsg = " Current tab has incomplete data, do you want to proceed?";
    var getIncompletesheltereetabdatawarningMsg = function () {
        return incompletesheltereetabdatawarningMsg;
    };
    


    var sheltereeDeleteSuccessMsg = "Shelteree " + deleteSuccessMsg;
    var getSheltereeDeleteSuccessMsg = function () {
        return sheltereeDeleteSuccessMsg;
    };

   
    

    //specific validation messages

    var staffTypeValidationMsg = "Please Select Atleast One Staff Type";
    var getStaffTypeValidationMsg = function () {
        return staffTypeValidationMsg;
    };

    var staffSpecialtyValidationMsg = "Please Select Atleast One Medical Condition";
    var getStaffSpecialtyValidationMsg = function () {
        return staffSpecialtyValidationMsg;
    };

    var bulkUpdateEmployeeValidationMsg = "Please Select Records To Bulk Update";
    var getBulkUpdateEmployeeValidationMsg = function () {
        return bulkUpdateEmployeeValidationMsg;
    };

    var bulkUpdateEmployeeAttendanceValidationMsg = "Please Select Atleast One Staff";
    var getBulkUpdateEmployeeAttendanceValidationMsg = function () {
        return bulkUpdateEmployeeAttendanceValidationMsg;
    };
    

    var bulkUpdateEmployeeExtendedValidationMsg = "Please Select Records To Bulk Update";
    var getBulkUpdateEmployeeExtendedValidationMsg = function () {
        return bulkUpdateEmployeeExtendedValidationMsg;
    };

    var bulkUpdateSheltereeValidationMsg = "Please Select Records To Bulk Update";
    var getBulkUpdateSheltereeValidationMsg = function () {
        return bulkUpdateSheltereeValidationMsg;
    };

    var bulkUpdateSheltreeDischargeValidationMsg = "Please Select Records To Bulk Update";
    var getBulkUpdateSheltreeDischargeValidationMsg = function () {
        return bulkUpdateSheltreeDischargeValidationMsg;
    };

    var bulkUpdateSheltreeMedicalUpdateValidationMsg = "Please Select Records To Bulk Update";
    var getBulkUpdateSheltreeMedicalUpdateValidationMsg = function () {
        return bulkUpdateSheltreeMedicalUpdateValidationMsg;
    };
    
    var reportSheltersValidationMsg = "Please Fill Required Data";
    var getReportSheltersValidationMsg = function () {
        return reportSheltersValidationMsg;
    };

    var reportEventsValidationMsg = "Please Fill Required Data";
    var getReportEventsValidationMsg = function () {
        return reportEventsValidationMsg;
    };

    var startDateEndDateValidationMsg = "Start Date Should Be Less Than End Date";
    var getStartDateEndDateValidationMsg = function () {
        return startDateEndDateValidationMsg;
    };

    var concurrentEventsValidationMsg = "System Does Not Support Concurrent Events";
    var getConcurrentEventsValidationMsg = function () {
        return concurrentEventsValidationMsg;
    };
    
    return {

        //Common messages
        getGenericErrorMsg: getGenericErrorMsg,
        getInvalidServiceRequestObject: getInvalidServiceRequestObject,
        getinvalidRequestMsg: getinvalidRequestMsg,
        getInvalidResponseForRequestMsg: getInvalidResponseForRequestMsg,
        getInvalidResponseMsg: getInvalidResponseMsg,
        getVersionConflictReloadMsg: getVersionConflictReloadMsg,
        getDeleteConfirmationMsg: getDeleteConfirmationMsg,
        getValidationMsg: getValidationMsg,
        getEmployeeUploadError:getEmployeeUploadError,
    

        //Form specific messages
        
        

        //Admin related messages
        getSuccessMsg: getSuccessMsg,
        getAgencySuccessMsg: getAgencySuccessMsg,
        getShelterTypeSuccessMsg: getShelterTypeSuccessMsg,
        getMedicalConditionTierSuccessMsg: getMedicalConditionTierSuccessMsg,
        getStaffSpecialtySuccessMsg: getStaffSpecialtySuccessMsg,
        getDepartmentSuccessMsg: getDepartmentSuccessMsg,
        getMedicalConditionSuccessMsg: getMedicalConditionSuccessMsg,
        getSheltereeEmployeeSuccessMsg: getSheltereeEmployeeSuccessMsg,
        getStaffTypeSuccessMsg:getStaffTypeSuccessMsg,
        getTransportTypeSuccessMsg: getTransportTypeSuccessMsg,
        getDispositionDeleteSuccessMsg: getDispositionDeleteSuccessMsg,
        getDispositionSuccessMsg:getDispositionSuccessMsg,
        getShelterIdentificationSuccessMsg:getShelterIdentificationSuccessMsg,
        getShelterIdentificationDeleteSuccessMsg:getShelterIdentificationDeleteSuccessMsg,
        getEquipmentSupplySuccessMsg: getEquipmentSupplySuccessMsg,
        getQuestionSuccessMsg:getQuestionSuccessMsg,
        getQuestionResponseSuccessMsg:getQuestionResponseSuccessMsg,
        getEventSuccessMsg: getEventSuccessMsg,


        getDeleteSuccessMsg: getDeleteSuccessMsg,
        getAgencyDeleteSuccessMsg: getAgencyDeleteSuccessMsg,
        getShelterTypeDeleteSuccessMsg: getShelterTypeDeleteSuccessMsg,
        getMedicalConditionTierDeleteSuccessMsg: getMedicalConditionTierDeleteSuccessMsg,
        getStaffSpecialtyDeleteSuccessMsg: getStaffSpecialtyDeleteSuccessMsg,
        getDepartmentDeleteSuccessMsg: getDepartmentDeleteSuccessMsg,
        getMedicalConditionDeleteSuccessMsg: getMedicalConditionDeleteSuccessMsg,
        getSheltereeEmployeeDeleteSuccessMsg: getSheltereeEmployeeDeleteSuccessMsg,
        getStaffTypeDeleteSuccessMsg:getStaffTypeDeleteSuccessMsg,
        getTransportTypeDeleteSuccessMsg: getTransportTypeDeleteSuccessMsg,
        getequipmentSupplyDeleteSuccessMsg: getequipmentSupplyDeleteSuccessMsg,
        getQuestionDeleteSuccessMsg:getQuestionDeleteSuccessMsg,
        getEventDeleteSuccessMsg: getEventDeleteSuccessMsg,

        getUploadValidFile: getUploadValidFile,
        getEmployeesUploadImportOption: getEmployeesUploadImportOption,

        // employee related messages

        getEmployeeSuccessMsg: getEmployeeSuccessMsg,
        getEmployeeDeleteSuccessMsg: getEmployeeDeleteSuccessMsg,
        getEmployeeUploadSuccessMsg: getEmployeeUploadSuccessMsg,

        // shelterstatus related messages

        getShelterStatusSuccessMsg: getShelterStatusSuccessMsg,
        getEmployeeAttendenceUpdatedSuccessMsg: getEmployeeAttendenceUpdatedSuccessMsg,

        // shelteree related messages
        getSheltereeSuccessMsg: getSheltereeSuccessMsg,
        getSheltereeDeleteSuccessMsg:getSheltereeDeleteSuccessMsg,
        getSheltereeUploadSuccessMsg: getSheltereeUploadSuccessMsg,
        getSheltereeUploadError: getSheltereeUploadError,
        getSheltereeMedicalConditionUpdateListCommentSuccessMsg: getSheltereeMedicalConditionUpdateListCommentSuccessMsg,
        getDemographicsSuccessMsg: getDemographicsSuccessMsg,
        getMedicalSuccessMsg: getMedicalSuccessMsg,
        getTreatmentsSuccessMsg:getTreatmentsSuccessMsg,
        getEquipmentSuccessMsg: getEquipmentSuccessMsg,
        getMedicationSuccessMsg: getMedicationSuccessMsg,
        getSheltereeDispostionSuccessMsg: getSheltereeDispostionSuccessMsg,
        getIncompletesheltereetabdatawarningMsg:getIncompletesheltereetabdatawarningMsg,


        //specific validation messages
        getStaffTypeValidationMsg: getStaffTypeValidationMsg,
        getStaffSpecialtyValidationMsg: getStaffSpecialtyValidationMsg,
        getBulkUpdateEmployeeValidationMsg: getBulkUpdateEmployeeValidationMsg,
        getBulkUpdateEmployeeAttendanceValidationMsg: getBulkUpdateEmployeeAttendanceValidationMsg,
        getBulkUpdateEmployeeExtendedValidationMsg: getBulkUpdateEmployeeExtendedValidationMsg,
        getBulkUpdateSheltereeValidationMsg: getBulkUpdateSheltereeValidationMsg,
        getBulkUpdateSheltreeDischargeValidationMsg: getBulkUpdateSheltreeDischargeValidationMsg,
        getBulkUpdateSheltreeMedicalUpdateValidationMsg: getBulkUpdateSheltreeMedicalUpdateValidationMsg,
        getReportSheltersValidationMsg: getReportSheltersValidationMsg,
        getReportEventsValidationMsg: getReportEventsValidationMsg,
        getStartDateEndDateValidationMsg: getStartDateEndDateValidationMsg,
        getConcurrentEventsValidationMsg: getConcurrentEventsValidationMsg

    };
} ();


//Help Titles
$ct.ht = function () {

    var help = "Help";

    var getHelp = function () {
        return help;
    };

    var operatingStatus = "Operating Status";

    var getOperatingStatus = function () {
        return operatingStatus;
    };

    return {

        getHelp: getHelp
       // getOperatingStatus: getOperatingStatus,

    };

} ();




//Most of the configuration constants for the application




$ct.other = function () {

    var hospiceId = gloabalHospiceId;

    var getHospiceId = function () {
        return hospiceId;
    };

    var hospitalId = gloabalHospitalId;

    var getHospitalId = function () {
        return hospitalId;
    };

    var miscellaneousSectionId = gloabalMiscellaneousSectionId;

    var getMiscellaneousSectionId = function () {
        return miscellaneousSectionId;
    };

    var vitalSignsSectionId = gloabalVitalSignsSectionId;

    var getVitalSignsSectionId = function () {
        return vitalSignsSectionId;
    };


    var employeeTemplateURL = globalBaseServiceUrl + "uploadtemplate/" + "EmployeeUploadTemplate.xlsx";

    var getEmployeeTemplateURL = function () {
        return employeeTemplateURL;
    };


    var sheltereeTemplateURL = globalBaseServiceUrl + "uploadtemplate/" + "SheltereeUploadTemplate.xlsx";

    var getSheltereeTemplateURL = function () {
        return sheltereeTemplateURL;
    };



    var answerTypes = globalAnswerTypes;

    var getAnswerTypes = function () {
        return answerTypes;
    };


    var defaultAnswerType = globalDefaultAnswerType;



    var getDefaultAnswerType = function () {
        return defaultAnswerType;
    };



    //start of question type id's
    var stringTextBoxId = globalQtStringTextBoxId;
    var getStringTextBoxId = function () {
        return stringTextBoxId;
    };

    var numericTextBoxId = globalQtNumericTextBoxId;
    var getNumericTextBoxId = function () {
        return numericTextBoxId;
    };

    var decimalTextBoxId = globalQtDecimalTextBoxId;
    var getDecimalTextBoxId = function () {
        return decimalTextBoxId;
    };

    var textAreaId = globalQtTextAreaId;
    var getTextAreaId = function () {
        return textAreaId;
    };

    var multipleChoiceOnlyOneAnswerId = globalQtMultipleChoiceOnlyOneAnswerId;
    var getMultipleChoiceOnlyOneAnswerId = function () {
        return multipleChoiceOnlyOneAnswerId;
    };

    var multipleChoiceMultipleAnswerId = globalQtMultipleChoiceMultipleAnswerId;
    var getMultipleChoiceMultipleAnswerId = function () {
        return multipleChoiceMultipleAnswerId;
    };

    var dropdownListId = globalQtDropdownListId;
    var getDropdownListId = function () {
        return dropdownListId;
    };



    return {
        getHospiceId: getHospiceId,
        getHospitalId: getHospitalId,
        getMiscellaneousSectionId: getMiscellaneousSectionId,
        getVitalSignsSectionId : getVitalSignsSectionId,
        getEmployeeTemplateURL: getEmployeeTemplateURL,
        getSheltereeTemplateURL: getSheltereeTemplateURL,
        getAnswerTypes: getAnswerTypes,
        getDefaultAnswerType: getDefaultAnswerType,

        getStringTextBoxId: getStringTextBoxId,
        getNumericTextBoxId: getNumericTextBoxId,
        getDecimalTextBoxId: getDecimalTextBoxId,
        getTextAreaId: getTextAreaId,
        getMultipleChoiceOnlyOneAnswerId: getMultipleChoiceOnlyOneAnswerId,
        getMultipleChoiceMultipleAnswerId: getMultipleChoiceMultipleAnswerId,
        getDropdownListId: getDropdownListId

    };

} ();



// role id's for security
$ct.roles = function () {

    var superAdminId = globalSuperAdminId;

    var getSuperAdminId = function () {
        return superAdminId;
    };

    var administratorId = globalAdministratorId;

    var getAdministratorId = function () {
        return administratorId;
    };

    var facilityUpdateId = globalFacilityUpdateId;

    var getFacilityUpdateId = function () {
        return facilityUpdateId;
    };

    var facilityReadOnlyId = globalFacilityReadOnlyId;

    var getFacilityReadOnlyId = function () {
        return facilityReadOnlyId;
    };




    return {

        getSuperAdminId: getSuperAdminId,
        getAdministratorId: getAdministratorId,
        getFacilityUpdateId: getFacilityUpdateId,
        getFacilityReadOnlyId: getFacilityReadOnlyId

    };

} ();



$ct.helpers = function () {
    // caching message container DOM element
    var $messageHeader = $('.messages-container');

    // delay will be provided from HTML as a data attribute, so that no need to touch JS in future
    var messageDelay = ($messageHeader.data('delay-seconds') * 1000);

    /**
     * update message template and show/hide with delay
     * @param  {string} templateData HTML served as a string
     * @param  {object} viewModel view modal object
     */
    function updateMessages(templateData, viewModel) {
        // remove the existing template data from the container
        $messageHeader.empty();

        // append new template
        $($.trim(templateData)).appendTo($messageHeader);

        // bind it to viewModel
        kendo.bind($messageHeader, viewModel);

        // show and auto hide message after given time
        $messageHeader.addClass('is-visible');
        setTimeout(delayAndHideMessage, messageDelay);
    }

    /**
     * remove visible class from the message section after defined delay
     */
    function delayAndHideMessage() {
        $messageHeader.removeClass('is-visible');
    }

    var errorMsgShow = updateMessages;
    // function (errorTemplate, viewModel) {
    //     $('.messages-container').empty();
    //
    //     $($.trim(errorTemplate))
    //         .appendTo('.messages-container')
    //         .each(function () {
    //             $(this).closest('.messages-container').animate({
    //                 top: 0
    //             }, 800);
    //         });
    //
    //     var messageHeader = $('.messages-container');
    //     kendo.bind(messageHeader, viewModel);
    // };

    var sucessMsgShow = updateMessages;
    // function (succTemplate, viewModel) {
    //     $('.messages-container').empty();
    //     $($.trim(succTemplate))
    //         .appendTo('.messages-container')
    //         .each(function () {
    //             $(this).closest('.messages-container').animate({
    //                 top: 0
    //             }, 800);
    //         })
    //         .delay(4000)
    //         .queue(function () {
    //             $(this).closest('.messages-container').animate({
    //                 top: -($('.messages-container').height() + 20)
    //             }, function () {
    //                 $('.messages-container').empty();
    //             });
    //         });
    //
    //     var messageHeader = $('.messages-container');
    //     kendo.bind(messageHeader, viewModel);
    // };

    var hideErrorMsgWindow = function (errorTemplate, viewModel) {
        $messageHeader.empty();
    };

    var displayPageBusyCursor = function (msg) {
        $('#pageleveloverlay').show();
    };

    var hidePageBusyCursor = function (msg) {
        $('#pageleveloverlay').hide();
    };

    var displayWorkAreaBusyCursor = function (msg) {
        $('#workareaoverlay').show();
    };

    var hideWorkAreaBusyCursor = function (msg) {
        // To wait before hiding busy cursor.
        $('#workareaoverlay').hide();
    };

    var clearValidations = function (viewId) {

        viewId = '#' + viewId;
        $(viewId).find('.k-invalid-msg').hide();
        var domElement = $(viewId).find('.k-invalid');
        domElement.removeClass('k-invalid');

        var domElement1 = $(viewId).find('.k-valid');
        domElement1.removeClass('k-valid');

    };

    var displayAlertWindow = function (msg) {
        alert(msg);
    };

    var displayConfirmWindow = function (msg) {
        if (confirm(msg)) {
            return true;
        } else {
            return false;
        }
    };

    var displayWindow = function (template, windowTitle, viewModel) {
        var WindowElement = $('#commonWindow');
        WindowElement.html('');
        WindowElement.append(template.getJQueryElement());

        if (viewModel === undefined) {
            kendo.bind(WindowElement, kendo.observable({}));
        } else {
            kendo.bind(WindowElement, viewModel);
            if (viewModel.initialize !== undefined) {
                viewModel.initialize();
            }
        }

        WindowElement.show();

        var window = WindowElement.data('kendoWindow');

        if (windowTitle !== undefined) {
            window.title(windowTitle);
        } else {
            window.title("");
        }

        window.center().open();
    };

    var toLower = function (data) {
        return data.toLowerCase();
    };

    var toUpper = function (data) {
        return data.toUpperCase();
    };

    var executeFunctionByName = function (functionName, context, args) {
        args = Array.prototype.slice.call(arguments).splice(2);
        var namespaces = functionName.split('.');
        var func = namespaces.pop();
        for (var i = 0; i < namespaces.length; i++) {
            context = context[namespaces[i]];
        }
        return context[func].apply(this, args);
    };

    var getDateFromEpochDate = function (epochDate) {
        if (parseInt(epochDate))
            return new Date(epochDate * 1000);
    };

    var getTodaysDateWithMaxTime = function () {
        var todayDate = new Date();
        return new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate(), 23, 59, 0, 0);
    };

    var getCurrentTimeStamp = function () {
        var todayDate = new Date();

        return todayDate.getMonth() + 1 + '/' + todayDate.getDate() + '/' + todayDate.getFullYear() + ' ' + todayDate.getHours() + ':' + todayDate.getMinutes() + ':' + todayDate.getSeconds();
    };

    return {
        toLower: toLower,
        toUpper: toUpper,
        executeFunctionByName: executeFunctionByName,
        getDateFromEpochDate: getDateFromEpochDate,
        getTodaysDateWithMaxTime: getTodaysDateWithMaxTime,
        getCurrentTimeStamp: getCurrentTimeStamp,

        displayAlertWindow: displayAlertWindow,
        displayConfirmWindow: displayConfirmWindow,
        displayWindow: displayWindow,

        errorMsgShow: errorMsgShow,
        sucessMsgShow: sucessMsgShow,
        hideErrorMsgWindow: hideErrorMsgWindow,

        displayPageBusyCursor: displayPageBusyCursor,
        hidePageBusyCursor: hidePageBusyCursor,
        displayWorkAreaBusyCursor: displayWorkAreaBusyCursor,
        hideWorkAreaBusyCursor: hideWorkAreaBusyCursor,
        clearValidations: clearValidations
    };
}();


$ct.security = function () {


    var authenticationFailedAction = function () {

        var event = jQuery.Event($ct.en.getGoToNoPermissionPage());
        $(document).trigger(event);

    };


    var userIdentity = null;

    var setUserIdentity = function (userIdentityObj) {
        userIdentity = userIdentityObj;
    };


    var isValidRole = function () {

        if (userIdentity == null || userIdentity == undefined) {
            authenticationFailedAction();
        }

        validRole = false;
        $.each(userIdentity.Roles, function (index, record) {

            if (
                    (record.Key == $ct.roles.getSuperAdminId()) ||

                    (record.Key == $ct.roles.getAdministratorId()) ||

                    (record.Key == $ct.roles.getFacilityUpdateId()) ||

                    (record.Key == $ct.roles.getFacilityReadOnlyId())

            ) {
                validRole = true;
            }

        });

        return validRole;

    };


    var setRoles = function () {

        if (userIdentity == null || userIdentity == undefined) {
            authenticationFailedAction();
        }

        $.each(userIdentity.Roles, function (index, record) {

            if (record.Key == $ct.roles.getSuperAdminId())
                isSuperAdmin = true;

            if (record.Key == $ct.roles.getAdministratorId())
                isAdmin = true;

            if (record.Key == $ct.roles.getFacilityUpdateId())
                isFacilityUpdate = true;

            if (record.Key == $ct.roles.getFacilityReadOnlyId())
                isFacilityReadOnly = true;

        });


        //Setting highest role

        if (isSuperAdmin) {

            isAdmin = false;
            isFacilityUpdate = false;
            isFacilityReadOnly = false;

        }

        if (isAdmin) {

            isFacilityUpdate = false;
            isFacilityReadOnly = false;

        }

        if (isFacilityUpdate) {

            isFacilityReadOnly = false;
        
        }


    };


    var isSuperAdmin = false;

    var isSuperAdminRole = function () {
        return isSuperAdmin
    };

    var isAdmin = false;

    var isAdminRole = function () {
        return isAdmin
    };

    var isFacilityUpdate = false;

    var isFacilityUpdateRole = function () {
        return isFacilityUpdate
    };

    var isFacilityReadOnly = false;

    var isFacilityReadOnlyRole = function () {
        return isFacilityReadOnly
    };




    var getUserName = function () {

        if (userIdentity == null || userIdentity == undefined) {
            authenticationFailedAction();
        }

        return userIdentity.UserFullName;

    };

    var isMultiFacilityUser = function () {

        if (userIdentity == null || userIdentity == undefined) {
            authenticationFailedAction();
        }

        if (userIdentity.IsMultiFacilityUser) {
            return true;
        }
        else {
            return false;
        }

    };



    return {

        authenticationFailedAction: authenticationFailedAction,
        setUserIdentity: setUserIdentity,
        isValidRole: isValidRole,
        getUserName: getUserName,
        isMultiFacilityUser: isMultiFacilityUser,

        setRoles: setRoles,

        //calling setRoles function is prerequisite
        isSuperAdminRole: isSuperAdminRole,
        isAdminRole: isAdminRole,
        isFacilityUpdateRole: isFacilityUpdateRole,
        isFacilityReadOnlyRole: isFacilityReadOnlyRole
        
    };
} ();

$(function () {
    $.ajaxSetup({ cache: false });
});

$ct.ajax = function () {

    var wrapRequest = function (requestData) {

        var isValidRequest = true;

        //extend is used to use different instance of service request in every ajax call
        var svcReq = $.extend(true, {}, $ct.constants.getServiceRequest()); ;

        if (svcReq !== undefined) {
            if (svcReq.ClientTag === undefined || svcReq.ClientTag.length <= 0) {
                isValidRequest = false;
            } else {
                svcReq.RequestId = Math.uuidCompact();
                svcReq.Data = requestData;
                svcReq.SessionToken = $ct.constants.getSessionToken();
            }
        } else {
            isValidRequest = false;
        }

        if (!isValidRequest) {
            $ct.helpers.displayAlertWindow($ct.msg.getInvalidServiceRequestObject());
        } else {
            return svcReq;
        }
    };

    //error and success messages in response object needs be handled by client(caller of ajax function) 
    var unwrapResponse = function (response, requestData) {
        var isValidRequest = true;
        var errorMsg = $ct.msg.getGenericErrorMsg();
        var request = $.parseJSON(requestData);

        if (request !== undefined) {
            if (response !== undefined) {
                if (response.ResponseId === undefined || response.ResponseId.length <= 0 || response.ResponseId !== request.RequestId) {
                    isValidRequest = false;
                    errorMsg = $ct.msg.getInvalidResponseForRequestMsg();

                } else if ($ct.mt.getAcknowledgeTypeSuccess() !== $ct.helpers.toLower(response.AcknowledgeType)) {
                    var errorObj = $ct.mt.getErrorObject(response);
                    if (errorObj != null) {

                        var event = jQuery.Event($ct.en.getShowErrorMsgJS());
                        event.errorObj = errorObj;
                        $(document).trigger(event);
                        $ct.helpers.hideWorkAreaBusyCursor();
                        $ct.helpers.hidePageBusyCursor();
                    }
                    if ($ct.mt.isAuthenticationFailed(response)) {

                        var event = jQuery.Event($ct.en.getGoToNoRolePage());
                        $(document).trigger(event);

                    }
                }
                else {

                    $ct.constants.SessionToken = response.SessionToken;

                }
            } else {

                isValidRequest = false;
                errorMsg = $ct.msg.getInvalidResponseMsg();

            }
        } else {
            isValidRequest = false;
        }

        if (!isValidRequest) {
            $ct.helpers.displayAlertWindow(errorMsg);
        } else {
            return response.Data;
        }
    };

    var ajaxRequest = function (url, requestData, httpVerb, callBack, errorCallBack, isSaveRequest, attempt, isWrapped) {
        $.ajax(url, {
            data: requestData,
            type: httpVerb,
            dataType: $ct.constants.getDataType(),
            contentType: $ct.constants.getContentType(),
            success: function (data) {
                if (callBack != undefined) {
                    var resp = null;

                    var resp = unwrapResponse(data, requestData);

                    if (isWrapped) {
                        resp = data;
                    }

                    if (resp !== undefined)
                    //Success callback
                        callBack(resp);
                    else {
                        if ((errorCallBack !== undefined) && (errorCallBack !== null)) {

                            errorCallBack();
                        }
                    }
                }
            },

            error: function (xhr, status, err) {

                if ((errorCallBack !== undefined) && (errorCallBack !== null)) {
                    errorCallBack(xhr, status, err);
                }

                /*if (!isSaveRequest && attempt <= maxRequestAttempt) {
                ajaxRequest(url, requestData, httpVerb, callBack, errorCallBack, isSaveRequest, attempt + 1);
                } else {
                if (errorCallBack !== undefined)
                errorCallBack();
                }*/
            }
        });
    };

    var ajaxGet = function (url, request, callback, errorCallBack) {
        return ajaxRequest(url, request, $ct.constants.getGetHttpVerb(), callBack, errorCallBack, false, 1);
    };

    var ajaxPost = function (url, request, callBack, errorCallBack, isWrapped) {
        var svcReq = wrapRequest(request);

        if (svcReq !== undefined)
            return ajaxRequest(url, JSON.stringify(svcReq), $ct.constants.getPostHttpVerb(), callBack, errorCallBack, false, 1, isWrapped);
        //return ajaxRequest(url, kendo.stringify(svcReq), $cm.postHttpVerb, callBack, errorCallBack, false, 1);
    };

    var ajaxSave = function (url, request, callBack, errorCallBack) {
        var svcReq = wrapRequest(request);

        if (svcReq !== undefined)
            return ajaxRequest(url, JSON.stringify(svcReq), $ct.constants.getPostHttpVerb(), callBack, errorCallBack, true, 1);
        //return ajaxRequest(url, kendo.stringify(svcReq), $cm.postHttpVerb, callBack, errorCallBack, true, 1);
    };

    // Exposed objects and parameters
    return {

        ajaxGet: ajaxGet,
        ajaxPost: ajaxPost,
        ajaxSave: ajaxSave

    };
} ();

$ct.ds.common = function () {


    var getUserIdentityData = function (successCallBack) {

        var requestParam = {};


        $ct.ajax.ajaxPost($ct.cn.getcommonServicesUrl() + 'GetUserIdentityData', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, function () {

            $ct.security.authenticationFailedAction();

        }, true)


        return "";
    };

    var getAlertsData = function (successCallBack) {

        var requestParam = "";

        $ct.ajax.ajaxPost($ct.cn.getShelterUrl() + 'GetShelterAlerts', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };


    return {

        getUserIdentityData: getUserIdentityData,
        getAlertsData: getAlertsData

    };

} ();
$ct.ds.admin.agency = function () {

    var getAgencies = function (ViewModel, successCallBack) {

        var datasource = new kendo.data.DataSource({
            transport: {
                read: function (options) {
                    var filter = null;
                    if (options.data.filter !== undefined) {
                        filter = options.data.filter;
                    }
                    var sort = null;
                    if (options.data.sort !== undefined) {
                        sort = options.data.sort;
                    }
                    var requestParam = {};
                    requestParam.Criteria = { PageSize: options.data.pageSize, PageIndex: options.data.page, SearchToken: ViewModel.searchToken, Filter: filter, Sort: sort };

                    ViewModel.set("selectedId", -1);

                    $ct.ajax.ajaxPost($ct.cn.getAgencyUrl() + 'GetAgencies', requestParam, function (result) {
                        if ($ct.mt.isNoDataFound(result)) {
                            var currPageIndex = datasource.page();
                            if (currPageIndex > 1)
                                datasource.page(currPageIndex - 1);
                        }
                       
                        options.success(result);

                        if (successCallBack != null)
                            successCallBack(result);
                    }, null, true)
                }
            },
            serverSorting: true,
            serverPaging: true,
            serverFiltering: true,
            pageSize: 10,
            schema: {
                data: function (response) {
                    return response.Data;
                },
                total: function (response) {

                    if (response != null && response != undefined && response != "")
                        return response.TotalRecords;
                },
                model: { // define the model of the data source. Required for validation and property types.
                    fields: {
                        DisplayOrder: { type: "number" }
                    }
                }
            }
        });

        return datasource;


    };

    var deleteAgencyById = function (ViewModel, successCallBack) {
        var requestParam = {};

        requestParam.AgencyId = ViewModel.selectedId;
        requestParam.AgencyVersion = ViewModel.selectedRecordVersion;

        $ct.ajax.ajaxPost($ct.cn.getAgencyUrl() + 'DeleteAgency', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";


    };

    var getAgencyById = function (agencyId, successCallBack) {

        var requestParam = {};

        requestParam.AgencyId = agencyId;

        $ct.ajax.ajaxPost($ct.cn.getAgencyUrl() + 'GetAgencyById', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    var saveAgency = function (saveAgencyData, successCallBack) {

        $ct.ajax.ajaxPost($ct.cn.getAgencyUrl() + 'SaveAgency', saveAgencyData, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    return {
        getAgencies: getAgencies,
        deleteAgencyById: deleteAgencyById,
        getAgencyById: getAgencyById,
        saveAgency: saveAgency
    };

}();


$ct.ds.admin.department = function () {


    var getDepartments = function (ViewModel, successCallBack) {

        var datasource = new kendo.data.DataSource({
            transport: {
                read: function (options) {
                    var filter = null;
                    if (options.data.filter !== undefined) {
                        filter = options.data.filter;
                    }
                    var sort = null;
                    if (options.data.sort !== undefined) {
                        sort = options.data.sort;
                    }
                    var requestParam = {};
                    requestParam.Criteria = { PageSize: options.data.pageSize, PageIndex: options.data.page, SearchToken: ViewModel.searchToken, Filter: filter, Sort: sort };

                    ViewModel.set("selectedId", -1);

                    $ct.ajax.ajaxPost($ct.cn.getDepartmentServiceUrl() + 'GetDepartments', requestParam, function (result) {
                        if ($ct.mt.isNoDataFound(result)) {
                            var currPageIndex = datasource.page();
                            if (currPageIndex > 1)
                                datasource.page(currPageIndex - 1);
                        }

                        options.success(result);

                        if (successCallBack != null)
                            successCallBack(result);
                    }, null, true)
                }
            },
            serverSorting: true,
            serverPaging: true,
            serverFiltering: true,
            pageSize: 10,
            schema: {
                data: function (response) {
                    return response.Data;
                },
                total: function (response) {

                    if (response != null && response != undefined && response != "")
                        return response.TotalRecords;
                },
                model: { // define the model of the data source. Required for validation and property types.
                    fields: {
                        DisplayOrder: { type: "number" },
                        HVAC: { type: "boolean" }
                    }
                }
            }
        });

        //  datasource.fetch();
        return datasource;


    };

    var deleteDepartmentById = function (ViewModel, successCallBack) {
        var requestParam = {};

        requestParam.DepartmentId = ViewModel.selectedId;
        requestParam.DepartmentVersion = ViewModel.selectedRecordVersion;
        //change url
        $ct.ajax.ajaxPost($ct.cn.getDepartmentServiceUrl() + 'DeleteDepartment', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";


    };

    var getDepartmentById = function (departmentId, successCallBack) {

        var requestParam = {};

        requestParam.departmentId = departmentId;

        $ct.ajax.ajaxPost($ct.cn.getDepartmentServiceUrl() + 'GetDepartmentById', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    var saveDepartment = function (departmentData, successCallBack) {

        $ct.ajax.ajaxPost($ct.cn.getDepartmentServiceUrl() + 'SaveDepartment', departmentData, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };



    return {
        getDepartments: getDepartments,
        deleteDepartmentById: deleteDepartmentById,
        getDepartmentById: getDepartmentById,
        saveDepartment: saveDepartment
    };

}();


$ct.ds.admin.medicalconditiontier = function () {

    var getMedicalConditionTiers = function (ViewModel, successCallBack) {

        var datasource = new kendo.data.DataSource({
            transport: {
                read: function (options) {
                    var filter = null;
                    if (options.data.filter !== undefined) {
                        filter = options.data.filter;
                    }
                    var sort = null;
                    if (options.data.sort !== undefined) {
                        sort = options.data.sort;
                    }
                    var requestParam = {};
                    requestParam.Criteria = { PageSize: options.data.pageSize, PageIndex: options.data.page, SearchToken: ViewModel.searchToken, Filter: filter, Sort: sort };

                    ViewModel.set("selectedId", -1);

                    $ct.ajax.ajaxPost($ct.cn.getMedicalConditionTierUrl() + 'GetMedicalConditionTiers', requestParam, function (result) {
                        if ($ct.mt.isNoDataFound(result)) {
                            var currPageIndex = datasource.page();
                            if (currPageIndex > 1)
                                datasource.page(currPageIndex - 1);
                        }
                       
                        options.success(result);

                        if (successCallBack != null)
                            successCallBack(result);
                    }, null, true)
                }
            },
            serverSorting: true,
            serverPaging: true,
            serverFiltering: true,
            pageSize: 10,
            schema: {
                data: function (response) {
                    return response.Data;
                },
                total: function (response) {

                    if (response != null && response != undefined && response != "")
                        return response.TotalRecords;
                },
                model: { // define the model of the data source. Required for validation and property types.
                    fields: {
                        DisplayOrder: { type: "number" }
                    }
                }
            }
        });

        return datasource;


    };

    var deleteMedicalConditionTierById = function (ViewModel, successCallBack) {
        var requestParam = {};

        requestParam.MedicalConditionTierId = ViewModel.selectedId;
        requestParam.MedicalConditionTierVersion = ViewModel.selectedRecordVersion;

        $ct.ajax.ajaxPost($ct.cn.getMedicalConditionTierUrl() + 'DeleteMedicalConditionTier', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";


    };

    var getMedicalConditionTierById = function (medicalConditionTierId, successCallBack) {

        var requestParam = {};

        requestParam.MedicalConditionTierId = medicalConditionTierId;

        $ct.ajax.ajaxPost($ct.cn.getMedicalConditionTierUrl() + 'GetMedicalConditionTierById', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    var saveMedicalConditionTier = function (saveMedicalConditionTierData, successCallBack) {

        $ct.ajax.ajaxPost($ct.cn.getMedicalConditionTierUrl() + 'SaveMedicalConditionTier', saveMedicalConditionTierData, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    return {
        getMedicalConditionTiers: getMedicalConditionTiers,
        deleteMedicalConditionTierById: deleteMedicalConditionTierById,
        getMedicalConditionTierById: getMedicalConditionTierById,
        saveMedicalConditionTier: saveMedicalConditionTier
    };

}();


$ct.ds.admin.sheltertype = function () {

    var getShelterTypes = function (ViewModel, successCallBack) {
        
        var datasource = new kendo.data.DataSource({
            transport: {
                read: function (options) {
                    var filter = null;
                    if (options.data.filter !== undefined) {
                        filter = options.data.filter;
                    }
                    var sort = null;
                    if (options.data.sort !== undefined) {
                        sort = options.data.sort;
                    }
                    var requestParam = {};
                    requestParam.Criteria = { PageSize: options.data.pageSize, PageIndex: options.data.page, SearchToken: ViewModel.searchToken, Filter: filter, Sort: sort };

                    ViewModel.set("selectedId", -1);

                    $ct.ajax.ajaxPost($ct.cn.getShelterTypeUrl() + 'GetShelterTypes', requestParam, function (result) {
                        if ($ct.mt.isNoDataFound(result)) {
                            var currPageIndex = datasource.page();
                            if (currPageIndex > 1)
                                datasource.page(currPageIndex - 1);
                        }
                       
                        options.success(result);

                        if (successCallBack != null)
                            successCallBack(result);
                    }, null, true)
                }
            },
            serverSorting: true,
            serverPaging: true,
            serverFiltering: true,
            pageSize: 10,
            schema: {
                data: function (response) {
                    return response.Data;
                },
                total: function (response) {

                    if (response != null && response != undefined && response != "")
                        return response.TotalRecords;
                },
                model: { // define the model of the data source. Required for validation and property types.
                    fields: {
                        DisplayOrder: { type: "number" }
                    }
                }
            }
        });

        return datasource;


    };

    var deleteShelterTypeById = function (ViewModel, successCallBack) {
        var requestParam = {};

        requestParam.ShelterTypeId = ViewModel.selectedId;
        requestParam.ShelterTypeVersion = ViewModel.selectedRecordVersion;

        $ct.ajax.ajaxPost($ct.cn.getShelterTypeUrl() + 'DeleteShelterType', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";


    };

    var getShelterTypeById = function (shelterTypeId, successCallBack) {

        var requestParam = {};

        requestParam.ShelterTypeId = shelterTypeId;

        $ct.ajax.ajaxPost($ct.cn.getShelterTypeUrl() + 'GetShelterTypeById', requestParam, function (result) {
            
            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    var saveShelterType = function (saveShelterTypeData, successCallBack) {

        $ct.ajax.ajaxPost($ct.cn.getShelterTypeUrl() + 'SaveShelterType', saveShelterTypeData, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    return {
        getShelterTypes: getShelterTypes,
        deleteShelterTypeById: deleteShelterTypeById,
        getShelterTypeById: getShelterTypeById,
        saveShelterType: saveShelterType
    };

}();


$ct.ds.admin.staffspecialty= function () {

    var getStaffSpecialities = function (ViewModel, successCallBack) {
        
        var datasource = new kendo.data.DataSource({
            transport: {
                read: function (options) {
                    var filter = null;
                    if (options.data.filter !== undefined) {
                        filter = options.data.filter;
                    }
                    var sort = null;
                    if (options.data.sort !== undefined) {
                        sort = options.data.sort;
                    }
                    var requestParam = {};
                    requestParam.Criteria = { PageSize: options.data.pageSize, PageIndex: options.data.page, SearchToken: ViewModel.searchToken, Filter: filter, Sort: sort };

                    ViewModel.set("selectedId", -1);

                    $ct.ajax.ajaxPost($ct.cn.getStaffSpecialtyUrl() + 'GetStaffSpecialities', requestParam, function (result) {
                        if ($ct.mt.isNoDataFound(result)) {
                            var currPageIndex = datasource.page();
                            if (currPageIndex > 1)
                                datasource.page(currPageIndex - 1);
                        }
                       
                        options.success(result);

                        if (successCallBack != null)
                            successCallBack(result);
                    }, null, true)
                }
            },
            serverSorting: true,
            serverPaging: true,
            serverFiltering: true,
            pageSize: 10,
            schema: {
                data: function (response) {
                    return response.Data;
                },
                total: function (response) {

                    if (response != null && response != undefined && response != "")
                        return response.TotalRecords;
                },
                model: { // define the model of the data source. Required for validation and property types.
                    fields: {
                        DisplayOrder: { type: "number" }
                    }
                }
            }
        });

        return datasource;


    };

    var deleteStaffSpecialtyById = function (ViewModel, successCallBack) {
        var requestParam = {};

        requestParam.StaffSpecialityId = ViewModel.selectedId;
        requestParam.StaffSpecialityVersion = ViewModel.selectedRecordVersion;

        $ct.ajax.ajaxPost($ct.cn.getStaffSpecialtyUrl() + 'DeleteStaffSpeciality', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";


    };

    var getStaffSpecialtyById = function (staffSpecialtyId, successCallBack) {

        var requestParam = {};

        requestParam.StaffSpecialityId = staffSpecialtyId;

        $ct.ajax.ajaxPost($ct.cn.getStaffSpecialtyUrl() + 'GetStaffSpecialityById', requestParam, function (result) {
            
            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    var saveStaffSpecialty = function (saveStaffSpecialtyData, successCallBack) {

        $ct.ajax.ajaxPost($ct.cn.getStaffSpecialtyUrl() + 'SaveStaffSpeciality', saveStaffSpecialtyData, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    return {
        getStaffSpecialities: getStaffSpecialities,
        deleteStaffSpecialtyById: deleteStaffSpecialtyById,
        getStaffSpecialtyById: getStaffSpecialtyById,
        saveStaffSpecialty: saveStaffSpecialty
    };

}();


$ct.ds.admin.transportationType = function () {


    var getTransportationTypes = function (ViewModel, successCallBack) {
        
            var datasource = new kendo.data.DataSource({
                transport: {
                    read: function (options) {
                        var filter = null;
                        if (options.data.filter !== undefined) {
                            filter = options.data.filter;
                        }
                        var sort = null;
                        if (options.data.sort !== undefined) {
                            sort = options.data.sort;
                        }
                        var requestParam = {};
                        requestParam.Criteria = { PageSize: options.data.pageSize, PageIndex: options.data.page, SearchToken: ViewModel.searchToken, Filter: filter, Sort: sort };

                        ViewModel.set("selectedId", -1);

                        $ct.ajax.ajaxPost($ct.cn.getTransportationTypeServiceUrl() + 'GetTransportationTypes', requestParam, function (result) {
                            if ($ct.mt.isNoDataFound(result)) {
                                var currPageIndex = datasource.page();
                                if (currPageIndex > 1)
                                    datasource.page(currPageIndex - 1);
                            }

                            options.success(result);

                            if (successCallBack != null)
                                successCallBack(result);
                        }, null, true)
                    }
                },
                serverSorting: true,
                serverPaging: true,
                serverFiltering: true,
                pageSize: 10,
                schema: {
                    data: function (response) {
                        return response.Data;
                    },
                    total: function (response) {

                        if (response != null && response != undefined && response != "")
                            return response.TotalRecords;
                    },
                    model: { // define the model of the data source. Required for validation and property types.
                        fields: {
                            DisplayOrder: { type: "number" },
                            HVAC: { type: "boolean" }
                        }
                    }
                }
            });

            //  datasource.fetch();
            return datasource;


        };

    var deleteTransportationTypeById = function (ViewModel, successCallBack) {
            var requestParam = {};

            requestParam.transportationtypeId = ViewModel.selectedId;
            requestParam.transportationtypeVersion = ViewModel.selectedRecordVersion;
            //change url
            $ct.ajax.ajaxPost($ct.cn.getTransportationTypeServiceUrl() + 'DeleteTransportationType', requestParam, function (result) {

                if (successCallBack != null)
                    successCallBack(result);

            }, null, true)


            return "";


        };

    var getTransportationTypeById = function (transportationtypeId, successCallBack) {

            var requestParam = {};

            requestParam.transportationtypeId = transportationtypeId;
            //change url
            $ct.ajax.ajaxPost($ct.cn.getTransportationTypeServiceUrl() + 'GetTransportationTypeById', requestParam, function (result) {

                if (successCallBack != null)
                    successCallBack(result);

            }, null, true)


            return "";
        };

    var saveTransportationType = function (medicalConditionData, successCallBack) {
            //change url
        $ct.ajax.ajaxPost($ct.cn.getTransportationTypeServiceUrl() + 'SaveTransportationType', medicalConditionData, function (result) {

                if (successCallBack != null)
                    successCallBack(result);

            }, null, true)


            return "";
        };



        return {
            getTransportationTypes: getTransportationTypes,
            deleteTransportationTypeById: deleteTransportationTypeById,
            getTransportationTypeById: getTransportationTypeById,
            saveTransportationType: saveTransportationType
        };

    }();




$ct.ds.admin.medicalcondition = function () {
   

    var getMedicalconditions = function (ViewModel, successCallBack) {
        
        var datasource = new kendo.data.DataSource({
            transport: {
                read: function (options) {
                    var filter = null;
                    if (options.data.filter !== undefined) {
                        filter = options.data.filter;
                    }
                    var sort = null;
                    if (options.data.sort !== undefined) {
                        sort = options.data.sort;
                    }
                    var requestParam = {};
                    requestParam.Criteria = { PageSize: options.data.pageSize, PageIndex: options.data.page, SearchToken: ViewModel.searchToken, Filter: filter, Sort: sort };

                    ViewModel.set("selectedId", -1);

                    $ct.ajax.ajaxPost($ct.cn.getmedicalConditionServiceUrl() + 'GetMedicalConditions', requestParam, function (result) {
                        if ($ct.mt.isNoDataFound(result)) {
                            var currPageIndex = datasource.page();
                            if (currPageIndex > 1)
                                datasource.page(currPageIndex - 1);
                        }

                        options.success(result);

                        if (successCallBack != null)
                            successCallBack(result);
                    }, null, true)
                }
            },
            serverSorting: true,
            serverPaging: true,
            serverFiltering: true,
            pageSize: 10,
            schema: {
                data: function (response) {
                    return response.Data;
                },
                total: function (response) {

                    if (response != null && response != undefined && response != "")
                        return response.TotalRecords;
                },
                model: { // define the model of the data source. Required for validation and property types.
                    fields: {
                        DisplayOrder: { type: "number" },
                        HVAC: { type: "boolean" }
                    }
                }
            }
        });

        //  datasource.fetch();
        return datasource;


    };

    var deletegetMedicalConditionById = function (ViewModel, successCallBack) {
        var requestParam = {};

        requestParam.MedicalConditionId = ViewModel.selectedId;
        requestParam.MedicalConditionVersion = ViewModel.selectedRecordVersion;
        //change url
        $ct.ajax.ajaxPost($ct.cn.getmedicalConditionServiceUrl() + 'DeleteMedicalCondition', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";


    };

    var getMedicalConditionById = function (MedicalConditionId, successCallBack) {

        var requestParam = {};

        requestParam.MedicalConditionId = MedicalConditionId;
        //change url
        $ct.ajax.ajaxPost($ct.cn.getmedicalConditionServiceUrl() + 'GetMedicalConditionById', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    var saveMedicalCondition = function (medicalConditionData, successCallBack) {
        //change url
        $ct.ajax.ajaxPost($ct.cn.getmedicalConditionServiceUrl() + 'SaveMedicalCondition', medicalConditionData, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };



    return {
        getMedicalconditions: getMedicalconditions,
        deletegetMedicalConditionById: deletegetMedicalConditionById,
        getMedicalConditionById: getMedicalConditionById,
        saveMedicalCondition: saveMedicalCondition
    };

}();



$ct.ds.admin.stafftype = function () {


    var getStaffTypes = function (ViewModel, successCallBack) {
       
        var datasource = new kendo.data.DataSource({
            transport: {
                read: function (options) {
                    var filter = null;
                    if (options.data.filter !== undefined) {
                        filter = options.data.filter;
                    }
                    var sort = null;
                    if (options.data.sort !== undefined) {
                        sort = options.data.sort;
                    }
                    var requestParam = {};
                    requestParam.Criteria = { PageSize: options.data.pageSize, PageIndex: options.data.page, SearchToken: ViewModel.searchToken, Filter: filter, Sort: sort };

                    ViewModel.set("selectedId", -1);

                    $ct.ajax.ajaxPost($ct.cn.getStaffTypeServiceUrl() + 'GetStaffTypes', requestParam, function (result) {
                        if ($ct.mt.isNoDataFound(result)) {
                            var currPageIndex = datasource.page();
                            if (currPageIndex > 1)
                                datasource.page(currPageIndex - 1);
                        }

                        options.success(result);

                        if (successCallBack != null)
                            successCallBack(result);
                    }, null, true)
                }
            },
            serverSorting: true,
            serverPaging: true,
            serverFiltering: true,
            pageSize: 10,
            schema: {
                data: function (response) {
                    return response.Data;
                },
                total: function (response) {

                    if (response != null && response != undefined && response != "")
                        return response.TotalRecords;
                },
                model: { // define the model of the data source. Required for validation and property types.
                    fields: {
                        DisplayOrder: { type: "number" },
                        HVAC: { type: "boolean" }
                    }
                }
            }
        });

        //  datasource.fetch();
        return datasource;


    };

    var deletegetStaffTypesById = function (ViewModel, successCallBack) {
        var requestParam = {};

        requestParam.StaffTypeId = ViewModel.selectedId;
        requestParam.StaffTypeVersion = ViewModel.selectedRecordVersion;
        //change url
        $ct.ajax.ajaxPost($ct.cn.getStaffTypeServiceUrl() + 'DeleteStaffType', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";


    };

    var getStaffTypesById = function (staffTypeId, successCallBack) {

        var requestParam = {};

        requestParam.StaffTypeId = staffTypeId;
        //change url
        $ct.ajax.ajaxPost($ct.cn.getStaffTypeServiceUrl() + 'GetStaffTypeById', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    var saveStaffTypes = function (staffTypeData, successCallBack) {
        //change url
        $ct.ajax.ajaxPost($ct.cn.getStaffTypeServiceUrl() + 'SaveStaffType', staffTypeData, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };



    return {
        getStaffTypes: getStaffTypes,
        deletegetStaffTypesById: deletegetStaffTypesById,
        getStaffTypesById: getStaffTypesById,
        saveStaffTypes: saveStaffTypes
    };

}();



$ct.ds.admin.sheltreeEmployeeRatio = function () {

    var getSheltreeEmployeeRatio = function (ViewModel, successCallBack) {
        
        var datasource = new kendo.data.DataSource({
            transport: {
                read: function (options) {
                    var filter = null;
                    if (options.data.filter !== undefined) {
                        filter = options.data.filter;
                    }
                    var sort = null;
                    if (options.data.sort !== undefined) {
                        sort = options.data.sort;
                    }
                    var requestParam = {};
                    requestParam.Criteria = { PageSize: options.data.pageSize, PageIndex: options.data.page, SearchToken: ViewModel.searchToken, Filter: filter, Sort: sort };

                    ViewModel.set("selectedId", -1);

                    $ct.ajax.ajaxPost($ct.cn.getSheltreeEmployeeRatioUrl() + 'GetSheltreeEmployeeRatios', requestParam, function (result) {
                        if ($ct.mt.isNoDataFound(result)) {
                            var currPageIndex = datasource.page();
                            if (currPageIndex > 1)
                                datasource.page(currPageIndex - 1);
                        }

                        options.success(result);

                        if (successCallBack != null)
                            successCallBack(result);
                    }, null, true)
                }
            },
            serverSorting: true,
            serverPaging: true,
            serverFiltering: true,
            pageSize: 10,
            schema: {
                data: function (response) {
                    return response.Data;
                },
                total: function (response) {

                    if (response != null && response != undefined && response != "")
                        return response.TotalRecords;
                },
                model: { // define the model of the data source. Required for validation and property types.
                    fields: {
                        SheltreeCount: { type: "number" },
                        EmployeeCount: { type: "number" },

                    }
                }
            }
        });

        return datasource;


    };

    var deletesheltreeEmployeeRatioById = function (ViewModel, successCallBack) {
        var requestParam = {};

        requestParam.SheltreeEmployeeRatioId = ViewModel.selectedId;
        requestParam.SheltreeEmployeeRatioVersion = ViewModel.selectedRecordVersion;

        $ct.ajax.ajaxPost($ct.cn.getSheltreeEmployeeRatioUrl() + 'DeleteSheltreeEmployeeRatio', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";


    };

    var getsheltreeEmployeeRatioById = function (sheltreeEmployeeRatioId, successCallBack) {

        var requestParam = {};

        requestParam.SheltreeEmployeeRatioId = sheltreeEmployeeRatioId;

        $ct.ajax.ajaxPost($ct.cn.getSheltreeEmployeeRatioUrl() + 'GetSheltreeEmployeeRatioById', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    var savesheltreeEmployeeRatio = function (saveAgencyData, successCallBack) {

        $ct.ajax.ajaxPost($ct.cn.getSheltreeEmployeeRatioUrl() + 'SaveSheltreeEmployeeRatio', saveAgencyData, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    return {
        getSheltreeEmployeeRatio: getSheltreeEmployeeRatio,
        deletesheltreeEmployeeRatioById: deletesheltreeEmployeeRatioById,
        getsheltreeEmployeeRatioById: getsheltreeEmployeeRatioById,
        savesheltreeEmployeeRatio: savesheltreeEmployeeRatio
    };

}();
$ct.ds.admin.disposition = function () {

    var getDispositions = function (ViewModel, successCallBack) {

        var datasource = new kendo.data.DataSource({
            transport: {
                read: function (options) {
                    var filter = null;
                    if (options.data.filter !== undefined) {
                        filter = options.data.filter;
                    }
                    var sort = null;
                    if (options.data.sort !== undefined) {
                        sort = options.data.sort;
                    }
                    var requestParam = {};
                    requestParam.Criteria = { PageSize: options.data.pageSize, PageIndex: options.data.page, SearchToken: ViewModel.searchToken, Filter: filter, Sort: sort };

                    ViewModel.set("selectedId", -1);

                    $ct.ajax.ajaxPost($ct.cn.getDispositionUrl() + 'GetDispositions', requestParam, function (result) {
                        if ($ct.mt.isNoDataFound(result)) {
                            var currPageIndex = datasource.page();
                            if (currPageIndex > 1)
                                datasource.page(currPageIndex - 1);
                        }

                        options.success(result);

                        if (successCallBack != null)
                            successCallBack(result);
                    }, null, true)
                }
            },
            serverSorting: true,
            serverPaging: true,
            serverFiltering: true,
            pageSize: 10,
            schema: {
                data: function (response) {
                    return response.Data;
                },
                total: function (response) {

                    if (response != null && response != undefined && response != "")
                        return response.TotalRecords;
                },
                model: { // define the model of the data source. Required for validation and property types.
                    fields: {
                        DisplayOrder: { type: "number" }
                    }
                }
            }
        });

        return datasource;


    };

    var deleteDispositionById = function (ViewModel, successCallBack) {
        var requestParam = {};

        requestParam.DispositionId = ViewModel.selectedId;
        requestParam.DispositionVersion = ViewModel.selectedRecordVersion;

        $ct.ajax.ajaxPost($ct.cn.getDispositionUrl() + 'DeleteDisposition', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";


    };

    var getDispositionById = function (dispositionId, successCallBack) {

        var requestParam = {};

        requestParam.DispositionId = dispositionId;

        $ct.ajax.ajaxPost($ct.cn.getDispositionUrl() + 'GetDispositionById', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    var saveDisposition = function (saveDispositionData, successCallBack) {

        $ct.ajax.ajaxPost($ct.cn.getDispositionUrl() + 'SaveDisposition', saveDispositionData, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    return {
        getDispositions: getDispositions,
        deleteDispositionById: deleteDispositionById,
        getDispositionById: getDispositionById,
        saveDisposition: saveDisposition
    };

}();


$ct.ds.admin.shelterIdentification = function () {

    var getShelterIdentifications = function (ViewModel, successCallBack) {

        var datasource = new kendo.data.DataSource({
            transport: {
                read: function (options) {
                    var filter = null;
                    if (options.data.filter !== undefined) {
                        filter = options.data.filter;
                    }
                    var sort = null;
                    if (options.data.sort !== undefined) {
                        sort = options.data.sort;
                    }
                    var requestParam = {};
                    requestParam.Criteria = { PageSize: options.data.pageSize, PageIndex: options.data.page, SearchToken: ViewModel.searchToken, Filter: filter, Sort: sort };

                    ViewModel.set("selectedId", -1);

                    $ct.ajax.ajaxPost($ct.cn.getShelterIdentificationUrl() + 'GetShelterIdentifications', requestParam, function (result) {
                        if ($ct.mt.isNoDataFound(result)) {
                            var currPageIndex = datasource.page();
                            if (currPageIndex > 1)
                                datasource.page(currPageIndex - 1);
                        }

                        options.success(result);

                        if (successCallBack != null)
                            successCallBack(result);
                    }, null, true)
                }
            },
            serverSorting: true,
            serverPaging: true,
            serverFiltering: true,
            pageSize: 10,
            schema: {
                data: function (response) {
                    return response.Data;
                },
                total: function (response) {

                    if (response != null && response != undefined && response != "")
                        return response.TotalRecords;
                },
                model: { // define the model of the data source. Required for validation and property types.
                    fields: {
                        DisplayOrder: { type: "number" }
                    }
                }
            }
        });

        return datasource;


    };

    var deleteShelterIdentificationById = function (ViewModel, successCallBack) {
        var requestParam = {};

        requestParam.ShelterIdentificationId = ViewModel.selectedId;
        requestParam.ShelterIdentificationVersion = ViewModel.selectedRecordVersion;

        $ct.ajax.ajaxPost($ct.cn.getShelterIdentificationUrl() + 'DeleteShelterIdentification', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";


    };

    var getShelterIdentificationById = function (shelterIdentificationId, successCallBack) {

        var requestParam = {};

        requestParam.ShelterIdentificationId = shelterIdentificationId;

        $ct.ajax.ajaxPost($ct.cn.getShelterIdentificationUrl() + 'GetShelterIdentificationById', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    var saveShelterIdentification = function (saveShelterIdentificationData, successCallBack) {

        $ct.ajax.ajaxPost($ct.cn.getShelterIdentificationUrl() + 'SaveShelterIdentification', saveShelterIdentificationData, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    return {
        getShelterIdentifications: getShelterIdentifications,
        deleteShelterIdentificationById: deleteShelterIdentificationById,
        getShelterIdentificationById: getShelterIdentificationById,
        saveShelterIdentification: saveShelterIdentification
    };

}();



$ct.ds.admin.equipmentsupply = function () {

    var getEquipmentSupplies = function (ViewModel, successCallBack) {

        var datasource = new kendo.data.DataSource({
            transport: {
                read: function (options) {
                    var filter = null;
                    if (options.data.filter !== undefined) {
                        filter = options.data.filter;
                    }
                    var sort = null;
                    if (options.data.sort !== undefined) {
                        sort = options.data.sort;
                    }
                    var requestParam = {};
                    requestParam.Criteria = { PageSize: options.data.pageSize, PageIndex: options.data.page, SearchToken: ViewModel.searchToken, Filter: filter, Sort: sort };

                    ViewModel.set("selectedId", -1);

                    $ct.ajax.ajaxPost($ct.cn.getEquipmentSupplyUrl() + 'GetEquipmentSupplies', requestParam, function (result) {
                        if ($ct.mt.isNoDataFound(result)) {
                            var currPageIndex = datasource.page();
                            if (currPageIndex > 1)
                                datasource.page(currPageIndex - 1);
                        }

                        options.success(result);

                        if (successCallBack != null)
                            successCallBack(result);
                    }, null, true)
                }
            },
            serverSorting: true,
            serverPaging: true,
            serverFiltering: true,
            pageSize: 10,
            schema: {
                data: function (response) {
                    return response.Data;
                },
                total: function (response) {

                    if (response != null && response != undefined && response != "")
                        return response.TotalRecords;
                },
                model: { // define the model of the data source. Required for validation and property types.
                    fields: {
                        DisplayOrder: { type: "number" }
                    }
                }
            }
        });

        return datasource;


    };

    var deleteEquipmentSupplyById = function (ViewModel, successCallBack) {
        var requestParam = {};

        requestParam.EquipmentSupplyId = ViewModel.selectedId;
        requestParam.EquipmentSupplyVersion = ViewModel.selectedRecordVersion;

        $ct.ajax.ajaxPost($ct.cn.getEquipmentSupplyUrl() + 'DeleteEquipmentSupply', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";


    };

    var getEquipmentSupplyById = function (equipmentSupplyId, successCallBack) {

        var requestParam = {};

        requestParam.EquipmentSupplyId = equipmentSupplyId;

        $ct.ajax.ajaxPost($ct.cn.getEquipmentSupplyUrl() + 'GetEquipmentSupplyById', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    var saveEquipmentSupply = function (saveEquipmentSupplyData, successCallBack) {

        $ct.ajax.ajaxPost($ct.cn.getEquipmentSupplyUrl() + 'SaveEquipmentSupply', saveEquipmentSupplyData, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    return {
        getEquipmentSupplies: getEquipmentSupplies,
        deleteEquipmentSupplyById: deleteEquipmentSupplyById,
        getEquipmentSupplyById: getEquipmentSupplyById,
        saveEquipmentSupply: saveEquipmentSupply
    };

}();


$ct.ds.admin.event = function () {
    var getEvents = function (ViewModel, successCallBack) {

        var datasource = new kendo.data.DataSource({
            transport: {
                read: function (options) {
                    var filter = null;
                    if (options.data.filter !== undefined) {
                        filter = options.data.filter;
                    }
                    var sort = null;
                    if (options.data.sort !== undefined) {
                        sort = options.data.sort;
                    }
                    var requestParam = {};
                    requestParam.Criteria = { PageSize: options.data.pageSize, PageIndex: options.data.page, SearchToken: ViewModel.searchToken, Filter: filter, Sort: sort };



                    $ct.ajax.ajaxPost($ct.cn.getEventUrl() + 'GetAllEvents', requestParam, function (result) {
                        if ($ct.mt.isNoDataFound(result)) {
                            var currPageIndex = datasource.page();
                            if (currPageIndex > 1)
                                datasource.page(currPageIndex - 1);
                        }

                        options.success(result);

                        if (successCallBack != null)
                            successCallBack(result);
                    }, null, true)
                }
            },
            serverSorting: true,
            serverPaging: true,
            serverFiltering: true,
            pageSize: 10,
            schema: {
                data: function (response) {
                    return response.Data;
                },
                total: function (response) {

                    if (response != null && response != undefined && response != "")
                        return response.TotalRecords;
                },
                model: { // define the model of the data source. Required for validation and property types.
                    fields: {
                        DisplayOrder: { type: "number" }
                    }
                }
            }
        });

        return datasource;


    };

    var deleteEventById = function (ViewModel, successCallBack) {
        var requestParam = {};

        requestParam.EventId = ViewModel.selectedId;
        requestParam.EventVersion = ViewModel.selectedRecordVersion;

        $ct.ajax.ajaxPost($ct.cn.getEventUrl() + 'DeleteEvent', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";


    };

    var getEventById = function (eventId, successCallBack) {

        var requestParam = {};

        requestParam.EventId = eventId;

        $ct.ajax.ajaxPost($ct.cn.getEventUrl() + 'GetEventById', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    var saveEvent = function (saveEventData, successCallBack) {

        $ct.ajax.ajaxPost($ct.cn.getEventUrl() + 'SaveEvent', saveEventData, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };
   

    return {
        getEvents: getEvents,
        deleteEventById: deleteEventById,
        getEventById: getEventById,
        saveEvent: saveEvent
    };

}();


$ct.ds.shlt.shelter = function () {


    var getSheltersWithSecurityForActiveEvent = function (successCallBack) {

        var requestParam = "";
        $ct.ajax.ajaxPost($ct.cn.getShelterUrl() + 'GetSheltersWithSecurityForActiveEvent', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    var getSheltersWithSecurityForActiveEventWithDs = function (successCallBack) {

        var datasource = new kendo.data.DataSource({
            transport: {
                read: function (options) {

                    var requestParam = "";

                    $ct.ajax.ajaxPost($ct.cn.getShelterUrl() + 'GetSheltersWithSecurityForActiveEvent', requestParam, function (result) {
                        
                        var resultData = result.Data;
                        if ((resultData !== undefined && resultData !== null && resultData.length > 0) && ($ct.security.isMultiFacilityUser())) {

                            //var selectItem = {};

                            //selectItem.Id = -1;
                            //selectItem.Name = "All Shelters";

                            //resultData.splice(0, 0, selectItem);

                        }

                        options.success(resultData);
                        if (successCallBack != null)
                            successCallBack(resultData);
                    }, null, true)
                }
            }
        });

        return datasource;

    };



    var getSheltersWithSecurityAndCensusForActiveEventWithDs = function (successCallBack) {

        var datasource = new kendo.data.DataSource({
                transport: {
                    read: function (options) {

                    var requestParam = "";

                    $ct.ajax.ajaxPost($ct.cn.getShelterUrl() + 'GetSheltersCensusWithSecurityForActiveEvent', requestParam, function (result) {

                        var resultData = result.Data;
                        if ((resultData !== undefined && resultData !== null && resultData.length > 0) && ($ct.security.isMultiFacilityUser())) {

                                //var selectItem = {};

                                    //selectItem.Id = -1;
                            //selectItem.Name = "All Shelters";

                    //resultData.splice(0, 0, selectItem);

                    }

            options.success(resultData);
                        if (successCallBack != null)
                            successCallBack(resultData);
                        }, null, true)
                        }
                        }
                        });

        return datasource;

            };



    var getShelterStatus = function (ViewModel, successCallBack) {

        var datasource = new kendo.data.DataSource({
            transport: {
                read: function (options) {
                    var filter = null;
                    if (options.data.filter !== undefined) {
                        filter = options.data.filter;
                    }
                    var sort = null;
                    if (options.data.sort !== undefined) {
                        sort = options.data.sort;
                    }

                    var requestParam = {};

                    requestParam.Criteria = { PageSize: options.data.pageSize, PageIndex: options.data.page, Filter: filter, Sort: sort };
                    requestParam.EventId = ViewModel.selectedEventItem.Key;
                    $ct.ajax.ajaxPost($ct.cn.getShelterStatusUrl() + 'GetShelterStatusList', requestParam, function (result) {

                        if ($ct.mt.isNoDataFound(result)) {
                            var currPageIndex = datasource.page();
                            if (currPageIndex > 1)
                                datasource.page(currPageIndex - 1);
                        }

                        options.success(result);

                        if (successCallBack != null)
                            successCallBack(result);
                    }, null, true)
                }
            },
            serverSorting: true,
            serverPaging: true,
            serverFiltering: true,
            pageSize: 10,
            schema: {
                data: function (response) {

                    //Adding or formatting  open and closed date to data 
                    $.each(response.Data, function (index, record) {


                        record.onchangeopencloseddate = function () {

                            var opendate = kendo.parseDate(this.get("OpenDate"), "yyyy-MM-ddTHH:mm:s");

                            var closeddate = kendo.parseDate(this.get("ClosedDate"), "yyyy-MM-ddTHH:mm:s");

                            var currentdate = new Date();



                            if ((opendate == "") || (opendate == null) || (opendate > currentdate)) {

                                this.set("Status", "Not Assigned");


                            }

                            else if ((opendate < currentdate) && (closeddate == null)) {
                                this.set("Status", "Open");

                            }
                            else if ((opendate < closeddate) && (closeddate < currentdate)) {
                                this.set("Status", "Closed");

                            }
                            else if (closeddate > currentdate) {
                                this.set("Status", "Open");

                            }

                            return true;
                        };




                        if (record.OpenDate === undefined) {
                            record.OpenDate = null;
                        }
                        else {
                            record.OpenDate = kendo.parseDate(record.OpenDate, "yyyy-MM-ddTHH:mm:s");
                        }

                        if (record.ClosedDate === undefined) {
                            record.ClosedDate = null;
                        }
                        else {
                            record.ClosedDate = kendo.parseDate(record.ClosedDate, "yyyy-MM-ddTHH:mm:s");
                        }


                        record.saveClicked = false;


                        record.hideOpenDateValidation = function () {


                            if (this.get("saveClicked")) {
                                var openDt = this.get("OpenDate");

                                if ((openDt == "") || (openDt == null)) {
                                    return false;
                                }
                                else {
                                    return true;
                                }
                            }
                            else {
                                return true;
                            }

                        };

                        record.hideClosedDateValidation = function () {

                            if (this.get("saveClicked")) {
                                var closedDt = this.get("ClosedDate");

                                if ((closedDt == "") || (closedDt == null)) {
                                    return false;
                                }
                                else {
                                    return true;
                                }
                            }
                            else {
                                return true;
                            }

                        };



                        record.hideOpenClosedDateValidation = function () {

                            if (this.get("saveClicked")) {


                                var openDt = this.get("OpenDate");

                                if ((openDt == "") || (openDt == null)) {
                                    return true;
                                }

                                var closedDt = this.get("ClosedDate");

                                if ((closedDt == "") || (closedDt == null)) {
                                    return true;
                                }

                                if (openDt < closedDt) {
                                    return true;
                                }
                                else {
                                    return false;
                                }

                            }
                            else {
                                return true;
                            }

                        }





                    });

                    return response.Data;
                },
                total: function (response) {

                    if (response != null && response != undefined && response != "")
                        return response.TotalRecords;
                }
            }
        });

        //  datasource.fetch();
        return datasource;


    };


    var getEvents = function (successCallBack) {

        var requestParam = "";
        $ct.ajax.ajaxPost($ct.cn.getEventUrl() + 'GetEvents', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };


    var saveShelterStatus = function (saveShelterStatusData, successCallBack) {

        var requestParam = {};
        requestParam.ShelterStatus = {}
        requestParam.ShelterStatus.FacilityId = saveShelterStatusData.ShelterId;
        requestParam.ShelterStatus.OpenDate = saveShelterStatusData.OpenDate;
        requestParam.ShelterStatus.ClosedDate = saveShelterStatusData.ClosedDate;
        requestParam.ShelterStatus.IsNew = saveShelterStatusData.IsNew;
        requestParam.ShelterStatus.Version = saveShelterStatusData.Version;
        requestParam.ShelterStatus.EventId = saveShelterStatusData.EventId;

        $ct.ajax.ajaxPost($ct.cn.getShelterStatusUrl() + 'SaveShelterStatus', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };


    var exportShelterStatusToExcel = function (ViewModel, successCallBack) {


        var filter = null;
        if (ViewModel.dsShelterStatus.filter() !== undefined) {
            filter = ViewModel.dsShelterStatus.filter();
        }
        var sort = null;
        if (ViewModel.dsShelterStatus.sort() !== undefined) {
            sort = ViewModel.dsShelterStatus.sort();
        }

        var pageIndex = 1;
        if (ViewModel.dsShelterStatus.page() !== undefined) {
            pageIndex = ViewModel.dsShelterStatus.page();
        }

        var pageSize = 10;
        if (ViewModel.dsShelterStatus.pageSize() !== undefined) {
            pageSize = ViewModel.dsShelterStatus.pageSize();
        }


        var requestParam = {};
        requestParam.Criteria = { PageSize: pageSize, PageIndex: pageIndex, SearchToken: ViewModel.searchToken, Filter: filter, Sort: sort };
        requestParam.EventId = ViewModel.selectedEventItem.Key;


        $ct.ajax.ajaxPost($ct.cn.getShelterStatusUrl() + 'ExportShelterStatusToExcel', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)

        return "";
    }



    return {
        getSheltersWithSecurityForActiveEvent: getSheltersWithSecurityForActiveEvent,
        getSheltersWithSecurityForActiveEventWithDs: getSheltersWithSecurityForActiveEventWithDs,
        getSheltersWithSecurityAndCensusForActiveEventWithDs: getSheltersWithSecurityAndCensusForActiveEventWithDs,
        getShelterStatus: getShelterStatus,
        getEvents: getEvents,
        saveShelterStatus: saveShelterStatus,
        exportShelterStatusToExcel: exportShelterStatusToExcel
    };

}();
$ct.ds.emp.employee = function () {

    var getImportActionOptions = function (successCallBack) {

        var requestParam = "";
        $ct.ajax.ajaxPost($ct.cn.getEmployeeUrl() + 'GetImportActionOptions', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };


    var getExportFailedImportedEmployeeDataToExcel = function (viewModel, successCallBack) {
        var requestParam = { "FileContentId": viewModel.FileContentId, "FacilityId": viewModel.FacilityId };
        $ct.ajax.ajaxPost($ct.cn.getEmployeeUrl() + 'ExportFailedImportedEmployeeToExcel', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);
        }, null, true)

        return '';
    };



    var getEmployees = function (ViewModel, successCallBack) {

        var datasource = new kendo.data.DataSource({
            transport: {
                read: function (options) {
                    var filter = null;
                    if (options.data.filter !== undefined) {
                        filter = options.data.filter;
                    }
                    var sort = null;
                    if (options.data.sort !== undefined) {
                        sort = options.data.sort;
                    }
                    var requestParam = {};
                    requestParam.Criteria = { PageSize: options.data.pageSize, PageIndex: options.data.page, SearchToken: ViewModel.searchToken, Filter: filter, Sort: sort };
                    //TODO:
                    requestParam.ShelterId = ViewModel.empHeaderData.shelter.Id;

                    requestParam.SelectedEmployeeIds = ViewModel.get("empRequestData.SelectedEmployeeIds");
                    requestParam.UnSelectedEmployeeIds = ViewModel.get("empRequestData.UnSelectedEmployeeIds");
                    requestParam.ViewAll = ViewModel.empRequestData.ViewAll;
                    requestParam.FetchSelectedOnly = ViewModel.empRequestData.FetchSelectedOnly;

                    ViewModel.set("selectedId", "-1");

                    $ct.ajax.ajaxPost($ct.cn.getEmployeeUrl() + 'GetEmployees', requestParam, function (result) {

                        if ($ct.mt.isNoDataFound(result)) {
                            var currPageIndex = datasource.page();
                            if (currPageIndex > 1)
                                datasource.page(currPageIndex - 1);
                        }

                        options.success(result);

                        if (successCallBack != null)
                            successCallBack(result);
                    }, null, true)
                }
            },
            serverSorting: true,
            serverPaging: true,
            serverFiltering: true,
            pageSize: 10,
            schema: {
                data: function (response) {
                    return response.Data.Employees;
                },
                total: function (response) {

                    if (response != null && response != undefined && response != "")
                        return response.TotalRecords;
                },
                model: { // define the model of the data source. Required for validation and property types.
                    fields: {
                        IsMedical: { type: "boolean" }
                    }
                }
            }
        });

        return datasource;


    };

    var getEmployeeExpandedList = function (ViewModel, successCallBack) {

        var datasource = new kendo.data.DataSource({
            transport: {
                read: function (options) {
                    var filter = null;
                    if (options.data.filter !== undefined) {
                        filter = options.data.filter;
                    }
                    var sort = null;
                    if (options.data.sort !== undefined) {
                        sort = options.data.sort;
                    }
                    var requestParam = {};
                    requestParam.Criteria = { PageSize: options.data.pageSize, PageIndex: options.data.page, SearchToken: ViewModel.searchToken, Filter: filter, Sort: sort };

                    requestParam.ShelterId = ViewModel.empHeaderData.shelter.Id;

                    requestParam.SelectedEmployeeIds = ViewModel.get("empRequestData.SelectedEmployeeIds");
                    requestParam.UnSelectedEmployeeIds = ViewModel.get("empRequestData.UnSelectedEmployeeIds");
                    requestParam.ViewAll = ViewModel.empRequestData.ViewAll;
                    requestParam.FetchSelectedOnly = ViewModel.empRequestData.FetchSelectedOnly;

                    ViewModel.set("selectedId", $ct.constants.getemptyGUID());

                    $ct.ajax.ajaxPost($ct.cn.getEmployeeUrl() + 'GetExpandedEmployees', requestParam, function (result) {

                        if (result.Data.ExpandedEmployees.length === 0) {
                            var currPageIndex = datasource.page();
                            if (currPageIndex > 1)
                                datasource.page(currPageIndex - 1);
                        }
                        options.success(result);
                        if (successCallBack != null)
                            successCallBack(result);
                    }, null, true)

                }
            },
            serverSorting: true,
            serverPaging: true,
            serverFiltering: true,
            pageSize: 10,
            schema: {
                data: function (response) {
                    //ViewModel.set("SelectedEmployeeIds", response.Data.SelectedEmployeeIds);
                    return response.Data.ExpandedEmployees;
                },
                total: function (response) {

                    if (response != null && response != undefined && response != "")
                        return response.TotalRecords;
                },
                model: { // define the model of the data source. Required for validation and property types.
                    fields: {
                        IsMedical: { type: "boolean" }
                    }
                }
            }
        });

        return datasource;
    };

    var getEmployeeBulkUpdateLookup = function (ViewModel, successCallBack) {

        var requestParam = {};

        requestParam.SelectedEmployeeIds = ViewModel.get("empRequestData.SelectedEmployeeIds");
        requestParam.UnSelectedEmployeeIds = ViewModel.get("empRequestData.UnSelectedEmployeeIds");
        requestParam.ViewAll = ViewModel.empRequestData.ViewAll;
        requestParam.FetchSelectedOnly = ViewModel.empRequestData.FetchSelectedOnly;

        $ct.ajax.ajaxPost($ct.cn.getEmployeeUrl() + 'GetEmployeeBulKUpdateLookupData', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);
        }, null, true)

        return "";
    };


    var bulkUpdateEmployeeData = function (ViewModel, successCallBack) {

        var requestParam = {};
        var reqObj = ViewModel.saveRequest;

        requestParam.ShelterId = ViewModel.shelterId;
        // requestParam.SelectedPatientIds = ViewModel.SelectedPatientIds;

        requestParam.SelectedStaffTypeId = reqObj.valStaffType;
        requestParam.SelectedDepartmentId = reqObj.valDepartment;
        requestParam.SelectedShiftId = reqObj.valShiftTime;
        requestParam.SelectedStaffSpecialityId = reqObj.valStaffSpeciality;

        $ct.ajax.ajaxPost($ct.cn.getEmployeeUrl() + 'BulkUpdateEmployeeData', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };






    var deleteEmployeeById = function (selEmployeeId, selEmployeeVersion, successCallBack) {

        var requestParam = {};

        requestParam.Id = selEmployeeId;
        requestParam.EmployeeVersion = selEmployeeVersion;

        $ct.ajax.ajaxPost($ct.cn.getEmployeeUrl() + 'DeleteEmployee', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";

    };



    var getEmployeeById = function (employeeId, successCallBack) {

        var requestParam = {};

        requestParam.EmployeeId = employeeId;

        $ct.ajax.ajaxPost($ct.cn.getEmployeeUrl() + 'GetEmployeeById', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };


    var saveEmployee = function (saveEmployeeData, successCallBack) {

        $ct.ajax.ajaxPost($ct.cn.getEmployeeUrl() + 'SaveEmployee', saveEmployeeData, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };


    var exportEmployeesListToExcel = function (ViewModel, successCallBack) {

        var filter = null;
        if (ViewModel.dsEmployeeList.filter() !== undefined) {
            filter = ViewModel.dsEmployeeList.filter();
        }
        var sort = null;
        if (ViewModel.dsEmployeeList.sort() !== undefined) {
            sort = ViewModel.dsEmployeeList.sort();
        }

        var pageIndex = 1;
        if (ViewModel.dsEmployeeList.page() !== undefined) {
            pageIndex = ViewModel.dsEmployeeList.page();
        }

        var pageSize = 10;
        if (ViewModel.dsEmployeeList.pageSize() !== undefined) {
            pageSize = ViewModel.dsEmployeeList.pageSize();
        }


        var requestParam = {};
        requestParam.Criteria = { PageSize: pageSize, PageIndex: pageIndex, SearchToken: ViewModel.searchToken, Filter: filter, Sort: sort };

        requestParam.ShelterId = ViewModel.empHeaderData.shelter.Id;


        //+Note Request Data Added
        requestParam.SelectedEmployeeIds = ViewModel.get("empRequestData.SelectedEmployeeIds");
        requestParam.UnSelectedEmployeeIds = ViewModel.get("empRequestData.UnSelectedEmployeeIds");
        requestParam.ViewAll = ViewModel.empRequestData.ViewAll;
        requestParam.FetchSelectedOnly = ViewModel.empRequestData.FetchSelectedOnly;


        $ct.ajax.ajaxPost($ct.cn.getEmployeeUrl() + 'ExportEmployeeToExcel', requestParam, function (result) {


            if (successCallBack != null)
                successCallBack(result);

        }, null, true)

        return "";

    };


    var exportEmplyeesExpandedListToExcel = function (ViewModel, successCallBack) {


        var filter = null;
        if (ViewModel.dsEmployeeExpandedList.filter() !== undefined) {
            filter = ViewModel.dsEmployeeExpandedList.filter();
        }
        var sort = null;
        if (ViewModel.dsEmployeeExpandedList.sort() !== undefined) {
            sort = ViewModel.dsEmployeeExpandedList.sort();
        }

        var pageIndex = 1;
        if (ViewModel.dsEmployeeExpandedList.page() !== undefined) {
            pageIndex = ViewModel.dsEmployeeExpandedList.page();
        }

        var pageSize = 10;
        if (ViewModel.dsEmployeeExpandedList.pageSize() !== undefined) {
            pageSize = ViewModel.dsEmployeeExpandedList.pageSize();
        }


        var requestParam = {};
        requestParam.Criteria = { PageSize: pageSize, PageIndex: pageIndex, SearchToken: ViewModel.searchToken, Filter: filter, Sort: sort };
        requestParam.ShelterId = ViewModel.empHeaderData.shelter.Id;


        //+Note Request Data Added
        requestParam.SelectedEmployeeIds = ViewModel.get("empRequestData.SelectedEmployeeIds");
        requestParam.UnSelectedEmployeeIds = ViewModel.get("empRequestData.UnSelectedEmployeeIds");
        requestParam.ViewAll = ViewModel.empRequestData.ViewAll;
        requestParam.FetchSelectedOnly = ViewModel.empRequestData.FetchSelectedOnly;



        $ct.ajax.ajaxPost($ct.cn.getEmployeeUrl() + 'ExportExpandedEmployeeToExcel', requestParam, function (result) {


            if (successCallBack != null)
                successCallBack(result);

        }, null, true)

        return "";


    };


    //var getActiveEvents = function (selectedShelterId, successCallBack) {

    //    var requestParam = {};

    //    requestParam.ShelterId = selectedShelterId;

    //    $ct.ajax.ajaxPost($ct.cn.getEventUrl() + 'GetActiveEvent', requestParam, function (result) {

    //        if (successCallBack != null)
    //            successCallBack(result);

    //    }, null, true)


    //    return "";
    //};

    var downloadEmployeeToExcel = function (ViewModel, successCallBack) {

        var requestParam = {};

        requestParam.ShelterId = ViewModel.selectedShelterItem.Id;


        $ct.ajax.ajaxPost($ct.cn.getEmployeeUrl() + 'DownloadEmployeeToExcel', requestParam, function (result) {


            if (successCallBack != null)
                successCallBack(result);

        }, null, true)

        return "";


    };

    var getEmployeeColumnLookup = function (successCallBack) {

        var requestParam = "";

        $ct.ajax.ajaxPost($ct.cn.getEmployeeUrl() + 'GetEmployeeFilterLookupData', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)

        return "";
    };

    var downloadEmployeeTemplate = function (successCallBack) {

        var Data = "";

        $ct.ajax.ajaxPost($ct.cn.getEmployeeUrl() + 'DownloadEmployeeTemplate', Data, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)
        return "";

    };

    return {

        getImportActionOptions: getImportActionOptions,
        getExportFailedImportedEmployeeDataToExcel: getExportFailedImportedEmployeeDataToExcel,
        getEmployeeBulkUpdateLookup  : getEmployeeBulkUpdateLookup ,
        bulkUpdateEmployeeData: bulkUpdateEmployeeData,
        getEmployees: getEmployees,
        getEmployeeExpandedList:getEmployeeExpandedList,
        deleteEmployeeById: deleteEmployeeById,
        getEmployeeById: getEmployeeById,
        saveEmployee: saveEmployee,
        exportEmployeesListToExcel: exportEmployeesListToExcel,
        exportEmplyeesExpandedListToExcel:exportEmplyeesExpandedListToExcel,
        downloadEmployeeToExcel: downloadEmployeeToExcel,
       // getActiveEvents: getActiveEvents,
        getEmployeeColumnLookup: getEmployeeColumnLookup,
        downloadEmployeeTemplate: downloadEmployeeTemplate

    };

}();
$ct.ds.emp.empattendance = function () {


    //var getEmployeeAttendenceEvent = function (successCallBack) {
    //    var Data = {};
    //    Data.ShelterId = 1;
    //    $ct.ajax.ajaxPost($ct.cn.getEventUrl() + 'GetActiveEvent', Data, function (result) {

    //        if (successCallBack != null)
    //            successCallBack(result);

    //    }, null, true)


    //    return "";


    //};
    var getEmployeeAttendenceInitialLoad = function (successCallBack) {

        $ct.ajax.ajaxPost($ct.cn.getEmployeeAttendanceUrl() + 'GetEmployeeShiftTime', "", function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";


    };
    //var getEmployeeAttendenceFacilities = function (successCallBack) {

    //    $ct.ajax.ajaxPost($ct.cn.getShelterUrl() + 'GetSheltersWithSecurity', "", function (result) {

    //        if (successCallBack != null)
    //            successCallBack(result);

    //    }, null, true)


    //    return "";


    //};

    var getEmployeeAttendence = function (ViewModel, successCallBack) {

        var datasource = new kendo.data.DataSource({
            transport: {

                read: function (options) {

                    var filter = null;
                    if (options.data.filter !== undefined) {
                        filter = options.data.filter;
                    }

                    var sort = null;
                    if (options.data.sort !== undefined) {
                        sort = options.data.sort;
                    }

                    var requestParam = {};
                    requestParam.Criteria = { PageSize: options.data.pageSize, PageIndex: options.data.page, SearchToken: ViewModel.searchToken, Filter: filter, Sort: sort };


                    //previousAttendenceDatestring
                    
                    
                    
                    
                    requestParam.FacilityId = ViewModel.previousSelectedFacility;
                   
                   
                    requestParam.PrevShiftDate = ViewModel.previousAttendenceDatestring;
                    requestParam.CurrShiftDate = ViewModel.attendenceDatestring;
                    requestParam.ShiftId = ViewModel.previousSelectedShift;
                    requestParam.SelectedEmployeeIds = ViewModel.dcRequestData.selectedEmployeeIds;
                    requestParam.UnSelectedEmployeeIds = ViewModel.dcRequestData.unSelectedEmployeeIds;
                    requestParam.ViewAll = ViewModel.dcRequestData.viewAll;
                    requestParam.FetchSelectedOnly = ViewModel.dcRequestData.fetchSelectedOnly;


                    $ct.ajax.ajaxPost($ct.cn.getEmployeeAttendanceUrl() + 'GetEmployeeAttendance', requestParam, function (result) {

                        ViewModel.set("dcRequestData.viewAll", false);
                        ViewModel.set("dcRequestData.fetchSelectedOnly", false);

                        options.success(result);

                        if (successCallBack != null)
                            successCallBack(result);
                    }, null, true)
                }
            },
            serverSorting: true,
            serverPaging: true,
            serverFiltering: true,
            pageSize: 9,
            schema: {
                data: function (response) {

                    $.each(response.Data.EmployeeAttendanceRawData, function (index, record) {

                        record.hideValidation = true;
                        record.saveClicked = false;
                        record.StatusLookUpData = response.Data.StatusLookUpData;


                    });

                    return response.Data.EmployeeAttendanceRawData;
                },
                total: function (response) {

                    if (response != null && response != undefined && response != "")
                        return response.TotalRecords;
                },
                model: { // define the model of the data source. Required for validation and property types.
                    fields: {
                       
                    }
                }
            }
        });

        
        return datasource;


    };

    var saveEmployeeAttendence = function (saveEmployeeAttendenceData, successCallBack) {

        $ct.ajax.ajaxPost($ct.cn.getEmployeeAttendanceUrl() + 'SaveEmployeeAttendance', saveEmployeeAttendenceData, function (result) {


            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    var bulkUpdateEmployeeAttendence = function (bulkUpdateEmployeeAttendenceData, successCallBack) {

        $ct.ajax.ajaxPost($ct.cn.getEmployeeAttendanceUrl() + 'BulkUpdateSelectedEmployeeAttendance', bulkUpdateEmployeeAttendenceData, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    var exportEmployeeAttendenceToExcel = function (ViewModel, successCallBack) {


        var filter = null;
        if (ViewModel.dsEmployeeAttendance.filter() !== undefined) {
            filter = ViewModel.dsEmployeeAttendance.filter();
        }

        var sort = null;
        if (ViewModel.dsEmployeeAttendance.sort() !== undefined) {
            sort = ViewModel.dsEmployeeAttendance.sort();
        }

        var pageIndex = 1;
        if (ViewModel.dsEmployeeAttendance.page() !== undefined) {
            pageIndex = ViewModel.dsEmployeeAttendance.page();
        }

        var pageSize = 10;
        if (ViewModel.dsEmployeeAttendance.pageSize() !== undefined) {
            pageSize = ViewModel.dsEmployeeAttendance.pageSize();
        }

        var requestParam = {};

        requestParam.Criteria = { PageSize: pageSize, PageIndex: pageIndex, Filter: filter, Sort: sort };
       
       
      
        requestParam.FacilityId = ViewModel.previousSelectedFacility;
        requestParam.PrevShiftDate = ViewModel.previousAttendenceDatestring;
        requestParam.CurrShiftDate = ViewModel.attendenceDatestring;
        requestParam.ShiftId = ViewModel.previousSelectedShift;
        requestParam.SelectedEmployeeIds = ViewModel.get("dcRequestData.selectedEmployeeIds");
        requestParam.UnSelectedEmployeeIds = ViewModel.get("dcRequestData.unSelectedEmployeeIds");
        requestParam.ViewAll = ViewModel.dcRequestData.viewAll;
        requestParam.FetchSelectedOnly = ViewModel.dcRequestData.fetchSelectedOnly;

        $ct.ajax.ajaxPost($ct.cn.getEmployeeAttendanceUrl() + 'ExportEmployeeAttendanceToExcel', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)

        return "";
    };


    var getEmployeeAttendanceCommentHistory = function (commentsViewModel, successCallBack) {
        var Data = {};
        Data.EmployeeId = commentsViewModel.datafromParent.griddata.EmployeeId;
        Data.ShiftDate = commentsViewModel.datafromParent.date;
        Data.ShiftId = commentsViewModel.datafromParent.griddata.ShiftId;
        $ct.ajax.ajaxPost($ct.cn.getEmployeeAttendanceUrl() + 'GetEmployeeAttendanceComments', Data, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";


    };

    var saveEmployeeAttendenceComment = function (saveEmployeeAttendenceData, successCallBack) {

        $ct.ajax.ajaxPost($ct.cn.getEmployeeAttendanceUrl() + 'SaveEmployeeAttendanceComment', saveEmployeeAttendenceData, function (result) {


            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    return {
       // getEmployeeAttendenceEvent: getEmployeeAttendenceEvent,
        getEmployeeAttendenceInitialLoad: getEmployeeAttendenceInitialLoad,
        //getEmployeeAttendenceFacilities: getEmployeeAttendenceFacilities,
        getEmployeeAttendence: getEmployeeAttendence,
        saveEmployeeAttendence: saveEmployeeAttendence,
        bulkUpdateEmployeeAttendence: bulkUpdateEmployeeAttendence,
        exportEmployeeAttendenceToExcel: exportEmployeeAttendenceToExcel,
        getEmployeeAttendanceCommentHistory: getEmployeeAttendanceCommentHistory,
        saveEmployeeAttendenceComment: saveEmployeeAttendenceComment

    };



}();
$ct.ds.sheltree.sheltree = function () {

    var getShelterees = function (ViewModel, successCallBack) {

        var datasource = new kendo.data.DataSource({
            transport: {
                read: function (options) {
                    var filter = null;
                    if (options.data.filter !== undefined) {
                        filter = options.data.filter;
                    }
                    var sort = null;
                    if (options.data.sort !== undefined) {
                        sort = options.data.sort;
                    }
                    var requestParam = {};
                    requestParam.Criteria = { PageSize: options.data.pageSize, PageIndex: options.data.page, SearchToken: ViewModel.searchToken, Filter: filter, Sort: sort };
                    //TODO:

                    requestParam.ShelterId = ViewModel.sheltereeHeaderData.shelter.Id;
                    //requestParam.ShelterId = 1;

                    requestParam.SelectedSheltereeIds = ViewModel.get("sheltereeRequestData.SelectedSheltereeIds");
                    requestParam.UnSelectedSheltereeIds = ViewModel.get("sheltereeRequestData.UnSelectedSheltereeIds");
                    requestParam.ViewAll = ViewModel.sheltereeRequestData.ViewAll;
                    requestParam.FetchSelectedOnly = ViewModel.sheltereeRequestData.FetchSelectedOnly;


                    ViewModel.set("selectedId", "-1");

                    $ct.ajax.ajaxPost($ct.cn.getSheltereeFacilityUrl() + 'GetShelterees', requestParam, function (result) {

                        if ($ct.mt.isNoDataFound(result)) {
                            var currPageIndex = datasource.page();
                            if (currPageIndex > 1)
                                datasource.page(currPageIndex - 1);
                        }

                        options.success(result);

                        if (successCallBack != null)
                            successCallBack(result);
                    }, null, true)
                }
            },
            serverSorting: true,
            serverPaging: true,
            serverFiltering: true,
            pageSize: 10,
            schema: {
                data: function (response) {
                    return response.Data.SheltereeRawData;
                },
                total: function (response) {

                    if (response != null && response != undefined && response != "")
                        return response.TotalRecords;
                },
                model: { // define the model of the data source. Required for validation and property types.
                    fields: {
                        //IsMedical: { type: "boolean" }
                    }
                }
            }
        });

        return datasource;


    };

    var deleteSheltereeById = function (selSheltereeId, selSheltereeVersion, successCallBack) {

        var requestParam = {};

        requestParam.Id = selSheltereeId;
        requestParam.SheltereeVersion = selSheltereeVersion;

        $ct.ajax.ajaxPost($ct.cn.getSheltereeFacilityUrl() + 'DeleteShelteree', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";

    };

    var exportSheltereesListToExcel = function (ViewModel, successCallBack) {

        var filter = null;
        if (ViewModel.dsSheltereeList.filter() !== undefined) {
            filter = ViewModel.dsSheltereeList.filter();
        }
        var sort = null;
        if (ViewModel.dsSheltereeList.sort() !== undefined) {
            sort = ViewModel.dsSheltereeList.sort();
        }

        var pageIndex = 1;
        if (ViewModel.dsSheltereeList.page() !== undefined) {
            pageIndex = ViewModel.dsSheltereeList.page();
        }

        var pageSize = 10;
        if (ViewModel.dsSheltereeList.pageSize() !== undefined) {
            pageSize = ViewModel.dsSheltereeList.pageSize();
        }


        var requestParam = {};
        requestParam.Criteria = { PageSize: pageSize, PageIndex: pageIndex, SearchToken: ViewModel.searchToken, Filter: filter, Sort: sort };

        requestParam.ShelterId = ViewModel.sheltereeHeaderData.shelter.Id;

        requestParam.SelectedSheltereeIds = ViewModel.get("sheltereeRequestData.SelectedSheltereeIds");
        requestParam.UnSelectedSheltereeIds = ViewModel.get("sheltereeRequestData.UnSelectedSheltereeIds");
        requestParam.ViewAll = ViewModel.sheltereeRequestData.ViewAll;
        requestParam.FetchSelectedOnly = ViewModel.sheltereeRequestData.FetchSelectedOnly;

        $ct.ajax.ajaxPost($ct.cn.getSheltereeFacilityUrl() + 'ExportSheltereeDataToExcel', requestParam, function (result) {


            if (successCallBack != null)
                successCallBack(result);

        }, null, true)

        return "";

    };

    var getSheltereeBulkUpdateLookup = function (ViewModel, successCallBack) {

        var requestParam = {};

        requestParam.SelectedSheltereeIds = ViewModel.get("sheltereeRequestData.SelectedSheltereeIds");
        requestParam.UnSelectedSheltereeIds = ViewModel.get("sheltereeRequestData.UnSelectedSheltereeIds");
        requestParam.ViewAll = ViewModel.sheltereeRequestData.ViewAll;
        requestParam.FetchSelectedOnly = ViewModel.sheltereeRequestData.FetchSelectedOnly;

        $ct.ajax.ajaxPost($ct.cn.getSheltereeFacilityUrl() + 'GetSheltereeBulKUpdateLookupData', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);
        }, null, true)

        return "";
    };

    var bulkUpdateSheltereeData = function (ViewModel, successCallBack) {

        var requestParam = {};
        var reqObj = ViewModel.saveRequest;

        requestParam.ShelterId = ViewModel.shelterId;
        // requestParam.SelectedPatientIds = ViewModel.SelectedPatientIds;

        requestParam.SelectedTransportationTypeId = reqObj.valTransportationType;
        requestParam.SelectedDispositionId = reqObj.valDisposition;

        if (reqObj.valDischargeDate == null) {
            requestParam.SelectedDischargeDate = reqObj.valDischargeDate;
        }
        else {
            var DischargeDate = (reqObj.valDischargeDate.getMonth() + 1) + "/" + reqObj.valDischargeDate.getDate() + "/" + reqObj.valDischargeDate.getFullYear();
            requestParam.SelectedDischargeDate = DischargeDate;
        }
       
        if (reqObj.valArrivalDate == null) {
            
            requestParam.SelectedArrivalDate = reqObj.valArrivalDate;
        }
        else {

            var ArrivalDate = (reqObj.valArrivalDate.getMonth() + 1) + "/" + reqObj.valArrivalDate.getDate() + "/" + reqObj.valArrivalDate.getFullYear();
            requestParam.SelectedArrivalDate = ArrivalDate;
        }

        if (reqObj.valDischargeTime == null) {
            requestParam.SelectedDischargeTime = reqObj.valDischargeTime;
        }
        else {

            var DischargeTime = (reqObj.valDischargeTime.getHours()) + ":" + reqObj.valDischargeTime.getMinutes();
            requestParam.SelectedDischargeTime = DischargeTime;
        }

        if (reqObj.valArrivalTime == null) {
            requestParam.SelectedArrivalTime = reqObj.valArrivalTime;
        }
        else {

            var ArrivalTime = (reqObj.valArrivalTime.getHours()) + ":" + reqObj.valArrivalTime.getMinutes();
            requestParam.SelectedArrivalTime = ArrivalTime;
        }

        requestParam.Destination = reqObj.valDestination;
       
        $ct.ajax.ajaxPost($ct.cn.getSheltereeFacilityUrl() + 'BulkUpdateSheltereeData', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    //var getActiveEvents = function (ViewModel, successCallBack) {

    //    var requestParam = {};


    //    requestParam.ShelterId = ViewModel.sheltereeHeaderData.shelter.Id;

    //    $ct.ajax.ajaxPost($ct.cn.getEventUrl() + 'GetActiveEvent', requestParam, function (result) {

    //        if (successCallBack != null)
    //            successCallBack(result);

    //    }, null, true)


    //    return "";
    //};

    var getImportActionOptions = function (successCallBack) {

        var requestParam = "";
        $ct.ajax.ajaxPost($ct.cn.getSheltereeFacilityUrl() + 'GetSheltereeImportActionOptions', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    var getExportFailedImportedSheltereeDataToExcel = function (viewModel, successCallBack) {
        var requestParam = { "FileContentId": viewModel.FileContentId, "FacilityId": viewModel.FacilityId };
        $ct.ajax.ajaxPost($ct.cn.getSheltereeFacilityUrl() + 'ExportFailedImportedSheltreeToExcel', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);
        }, null, true)

        return '';
    };

    var downloadSheltereeToExcel = function (ViewModel, successCallBack) {

        var requestParam = {};

        requestParam.ShelterId = ViewModel.selectedShelterItem.Id;


        $ct.ajax.ajaxPost($ct.cn.getSheltereeFacilityUrl() + 'DownloadSheltereeToExcel', requestParam, function (result) {


            if (successCallBack != null)
                successCallBack(result);

        }, null, true)

        return "";


    };

    var getSheltereeDischargees = function (ViewModel, successCallBack) {

        var datasource = new kendo.data.DataSource({
            transport: {
                read: function (options) {
                    var filter = null;
                    if (options.data.filter !== undefined) {
                        filter = options.data.filter;
                    }
                    var sort = null;
                    if (options.data.sort !== undefined) {
                        sort = options.data.sort;
                    }
                    var requestParam = {};
                    requestParam.Criteria = { PageSize: options.data.pageSize, PageIndex: options.data.page, SearchToken: ViewModel.searchToken, Filter: filter, Sort: sort };
                    //TODO:

                    requestParam.ShelterId = ViewModel.sheltereeHeaderData.shelter.Id;
                    //requestParam.ShelterId = 1;

                    requestParam.SelectedSheltereeIds = ViewModel.get("sheltereeRequestData.SelectedSheltereeIds");
                    requestParam.UnSelectedSheltereeIds = ViewModel.get("sheltereeRequestData.UnSelectedSheltereeIds");
                    requestParam.ViewAll = ViewModel.sheltereeRequestData.ViewAll;
                    requestParam.FetchSelectedOnly = ViewModel.sheltereeRequestData.FetchSelectedOnly;

                    ViewModel.set("selectedId", "-1");

                    $ct.ajax.ajaxPost($ct.cn.getSheltereeFacilityUrl() + 'GetSheltereeDischargeView', requestParam, function (result) {

                        if ($ct.mt.isNoDataFound(result)) {
                            var currPageIndex = datasource.page();
                            if (currPageIndex > 1)
                                datasource.page(currPageIndex - 1);
                        }

                        options.success(result);

                        if (successCallBack != null)
                            successCallBack(result);
                    }, null, true)
                }
            },
            serverSorting: true,
            serverPaging: true,
            serverFiltering: true,
            pageSize: 10,
            schema: {
                data: function (response) {
                    return response.Data.DischargeRawData;
                },
                total: function (response) {

                    if (response != null && response != undefined && response != "")
                        return response.TotalRecords;
                },
                model: { // define the model of the data source. Required for validation and property types.
                    fields: {
                        // IsMedical: { type: "boolean" }
                    }
                }
            }
        });

        return datasource;


    };

    var exportSheltereeDischargeesListToExcel = function (ViewModel, successCallBack) {

        var filter = null;
        if (ViewModel.dsSheltereeDischargeList.filter() !== undefined) {
            filter = ViewModel.dsSheltereeDischargeList.filter();
        }
        var sort = null;
        if (ViewModel.dsSheltereeDischargeList.sort() !== undefined) {
            sort = ViewModel.dsSheltereeDischargeList.sort();
        }

        var pageIndex = 1;
        if (ViewModel.dsSheltereeDischargeList.page() !== undefined) {
            pageIndex = ViewModel.dsSheltereeDischargeList.page();
        }

        var pageSize = 10;
        if (ViewModel.dsSheltereeDischargeList.pageSize() !== undefined) {
            pageSize = ViewModel.dsSheltereeDischargeList.pageSize();
        }


        var requestParam = {};
        requestParam.Criteria = { PageSize: pageSize, PageIndex: pageIndex, SearchToken: ViewModel.searchToken, Filter: filter, Sort: sort };

        requestParam.ShelterId = ViewModel.sheltereeHeaderData.shelter.Id;

        requestParam.SelectedSheltereeIds = ViewModel.get("sheltereeRequestData.SelectedSheltereeIds");
        requestParam.UnSelectedSheltereeIds = ViewModel.get("sheltereeRequestData.UnSelectedSheltereeIds");
        requestParam.ViewAll = ViewModel.sheltereeRequestData.ViewAll;
        requestParam.FetchSelectedOnly = ViewModel.sheltereeRequestData.FetchSelectedOnly;

        $ct.ajax.ajaxPost($ct.cn.getSheltereeFacilityUrl() + 'ExportSheltereeDischargeDataToExcel', requestParam, function (result) {


            if (successCallBack != null)
                successCallBack(result);

        }, null, true)

        return "";

    };


    var getSheltereeMedicalUpdatees = function (ViewModel, successCallBack) {

        var datasource = new kendo.data.DataSource({
            transport: {
                read: function (options) {
                    var filter = null;
                    if (options.data.filter !== undefined) {
                        filter = options.data.filter;
                    }
                    var sort = null;
                    if (options.data.sort !== undefined) {
                        sort = options.data.sort;
                    }
                    var requestParam = {};
                    requestParam.Criteria = { PageSize: options.data.pageSize, PageIndex: options.data.page, SearchToken: ViewModel.searchToken, Filter: filter, Sort: sort };
                    //TODO:
                    requestParam.ShelterId = ViewModel.sheltereeHeaderData.shelter.Id;
                    //requestParam.ShelterId = 1;

                    requestParam.SelectedSheltereeIds = ViewModel.get("sheltereeRequestData.SelectedSheltereeIds");
                    requestParam.UnSelectedSheltereeIds = ViewModel.get("sheltereeRequestData.UnSelectedSheltereeIds");
                    requestParam.ViewAll = ViewModel.sheltereeRequestData.ViewAll;
                    requestParam.FetchSelectedOnly = ViewModel.sheltereeRequestData.FetchSelectedOnly;

                    ViewModel.set("selectedId", "-1");

                    $ct.ajax.ajaxPost($ct.cn.getSheltereeFacilityUrl() + 'GetSheltereeMedicalUpdateView', requestParam, function (result) {

                        if ($ct.mt.isNoDataFound(result)) {
                            var currPageIndex = datasource.page();
                            if (currPageIndex > 1)
                                datasource.page(currPageIndex - 1);
                        }

                        options.success(result);

                        if (successCallBack != null)
                            successCallBack(result);
                    }, null, true)
                }
            },
            serverSorting: true,
            serverPaging: true,
            serverFiltering: true,
            pageSize: 10,
            schema: {
                data: function (response) {
                    return response.Data.MedicalUpdateRawData;
                },
                total: function (response) {

                    if (response != null && response != undefined && response != "")
                        return response.TotalRecords;
                },
                model: { // define the model of the data source. Required for validation and property types.
                    fields: {
                        IsMedical: { type: "boolean" }
                    }
                }
            }
        });

        return datasource;


    };

    var exportSheltereeMedicalUpdateesListToExcel = function (ViewModel, successCallBack) {

        var filter = null;
        if (ViewModel.dsSheltereeMedicalUpdateList.filter() !== undefined) {
            filter = ViewModel.dsSheltereeMedicalUpdateList.filter();
        }
        var sort = null;
        if (ViewModel.dsSheltereeMedicalUpdateList.sort() !== undefined) {
            sort = ViewModel.dsSheltereeMedicalUpdateList.sort();
        }

        var pageIndex = 1;
        if (ViewModel.dsSheltereeMedicalUpdateList.page() !== undefined) {
            pageIndex = ViewModel.dsSheltereeMedicalUpdateList.page();
        }

        var pageSize = 10;
        if (ViewModel.dsSheltereeMedicalUpdateList.pageSize() !== undefined) {
            pageSize = ViewModel.dsSheltereeMedicalUpdateList.pageSize();
        }


        var requestParam = {};
        requestParam.Criteria = { PageSize: pageSize, PageIndex: pageIndex, SearchToken: ViewModel.searchToken, Filter: filter, Sort: sort };

        requestParam.ShelterId = ViewModel.sheltereeHeaderData.shelter.Id;

        requestParam.SelectedSheltereeIds = ViewModel.get("sheltereeRequestData.SelectedSheltereeIds");
        requestParam.UnSelectedSheltereeIds = ViewModel.get("sheltereeRequestData.UnSelectedSheltereeIds");
        requestParam.ViewAll = ViewModel.sheltereeRequestData.ViewAll;
        requestParam.FetchSelectedOnly = ViewModel.sheltereeRequestData.FetchSelectedOnly;

        $ct.ajax.ajaxPost($ct.cn.getSheltereeFacilityUrl() + 'ExportSheltereeMedicalUpdateDataToExcel', requestParam, function (result) {


            if (successCallBack != null)
                successCallBack(result);

        }, null, true)

        return "";

    };

    var generatereportsforDischargeesList = function (ViewModel, successCallBack) {

        var requestParam = {};
       
        requestParam.ShelterId = ViewModel.sheltereeHeaderData.shelter.Id;

        $ct.ajax.ajaxPost($ct.cn.getSheltereeFacilityUrl() + 'GetSheltereeDischargeReportData', requestParam, function (result) {


                if (successCallBack != null)
                    successCallBack(result);

        }, null, true)

        return "";

    };

    var generatereportsforMedicalUpdateesList = function (ViewModel, successCallBack) {

        var requestParam = {};

        requestParam.ShelterId = ViewModel.sheltereeHeaderData.shelter.Id;

        $ct.ajax.ajaxPost($ct.cn.getSheltereeFacilityUrl() + 'GetSheltereeMedicalSummaryReportData', requestParam, function (result) {


            if (successCallBack != null)
                successCallBack(result);

        }, null, true)

        return "";

    };

    var commentMedicalUpdateList = function (MedicalUpdateListId, successCallBack) {

        var requestParam = {};

        requestParam.Id = MedicalUpdateListId;

        //getSheltereeFacilityUrl
        $ct.ajax.ajaxPost($ct.cn.getSheltereeFacilityUrl() + 'GetSheltereeComments', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    var commentSaveMedicalUpdateList = function (MedicalUpdateListData, successCallBack) {



        //getSheltereeFacilityUrl
        $ct.ajax.ajaxPost($ct.cn.getSheltereeFacilityUrl() + 'SaveSheltereeComment', MedicalUpdateListData, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };
    var downloadSheltereeTemplate = function (successCallBack) {

        var Data = "";

        $ct.ajax.ajaxPost($ct.cn.getSheltereeFacilityUrl() + 'DownloadSheltereeTemplate', Data, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)

        return "";

    };

    var generateSheltereeReportClick = function (ReportData, successCallBack) {

        var requestParam = {};
        requestParam.SheltereeId = ReportData.sheltereeId;
        requestParam.EventId = ReportData.eventId;

        $ct.ajax.ajaxPost($ct.cn.getSheltereeFacilityUrl() + 'GetSheltereePDFReport', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };
    

    return {

        getShelterees: getShelterees,
        deleteSheltereeById: deleteSheltereeById,
        exportSheltereesListToExcel: exportSheltereesListToExcel,
        getSheltereeBulkUpdateLookup: getSheltereeBulkUpdateLookup,
        bulkUpdateSheltereeData: bulkUpdateSheltereeData,
       // getActiveEvents: getActiveEvents,
        getImportActionOptions: getImportActionOptions,
        getExportFailedImportedSheltereeDataToExcel: getExportFailedImportedSheltereeDataToExcel,
        downloadSheltereeToExcel: downloadSheltereeToExcel,
        getSheltereeDischargees: getSheltereeDischargees,
        exportSheltereeDischargeesListToExcel: exportSheltereeDischargeesListToExcel,
        getSheltereeMedicalUpdatees: getSheltereeMedicalUpdatees,
        exportSheltereeMedicalUpdateesListToExcel: exportSheltereeMedicalUpdateesListToExcel,
        generatereportsforMedicalUpdateesList:generatereportsforMedicalUpdateesList,
        generatereportsforDischargeesList:generatereportsforDischargeesList,
        commentMedicalUpdateList: commentMedicalUpdateList,
        commentSaveMedicalUpdateList: commentSaveMedicalUpdateList,
        downloadSheltereeTemplate: downloadSheltereeTemplate,
        generateSheltereeReportClick: generateSheltereeReportClick

    };

}();
$ct.ds.admin.question = function () {

    var getQuestions = function (ViewModel, successCallBack) {

        var datasource = new kendo.data.DataSource({
            transport: {
                read: function (options) {
                    var filter = null;
                    if (options.data.filter !== undefined) {
                        filter = options.data.filter;
                    }
                    var sort = null;
                    if (options.data.sort !== undefined) {
                        sort = options.data.sort;
                    }
                    var requestParam = {};
                    requestParam.Criteria = { PageSize: options.data.pageSize, PageIndex: options.data.page, SearchToken: ViewModel.searchToken, Filter: filter, Sort: sort };

                    ViewModel.set("selectedId", -1);

                    $ct.ajax.ajaxPost($ct.cn.getQuestionUrl() + 'GetQuestions', requestParam, function (result) {
                        if ($ct.mt.isNoDataFound(result)) {
                            var currPageIndex = datasource.page();
                            if (currPageIndex > 1)
                                datasource.page(currPageIndex - 1);
                        }

                        options.success(result);

                        if (successCallBack != null)
                            successCallBack(result);
                    }, null, true)
                }
            },
            serverSorting: true,
            serverPaging: true,
            serverFiltering: true,
            pageSize: 10,
            schema: {
                data: function (response) {
                    return response.Data;
                },
                total: function (response) {

                    if (response != null && response != undefined && response != "")
                        return response.TotalRecords;
                },
                model: { // define the model of the data source. Required for validation and property types.
                    fields: {
                        DisplayOrder: { type: "number" }
                    }
                }
            }
        });

        return datasource;


    };

    var deleteQuestionById = function (ViewModel, successCallBack) {
        var requestParam = {};

        requestParam.QuestionId = ViewModel.selectedId;
        requestParam.QuestionVersion = ViewModel.selectedRecordVersion;

        $ct.ajax.ajaxPost($ct.cn.getQuestionUrl() + 'DeleteQuestion', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";


    };

    var getQuestionById = function (questionId, successCallBack) {

        var requestParam = {};
        requestParam.QuestionId = questionId;

        $ct.ajax.ajaxPost($ct.cn.getQuestionUrl() + 'GetQuestionById', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)

        return "";
    };

    var saveQuestion = function (question, successCallBack) {

        $ct.ajax.ajaxPost($ct.cn.getQuestionUrl() + 'SaveQuestion', question, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)

        return "";
    };

    var getQuestionTypeById = function (questiontypeId, successCallBack) {

        var requestParam = {};
        requestParam.QuestionTypeId = questiontypeId;

        $ct.ajax.ajaxPost($ct.cn.getmedicalConditionServiceUrl() + 'GetMedicalConditionsByQuestionTypeId', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)

        return "";
    };




   

    return {
        getQuestions: getQuestions,
        deleteQuestionById: deleteQuestionById,
        getQuestionById: getQuestionById,
        saveQuestion: saveQuestion,
        getQuestionTypeById: getQuestionTypeById

    };

}();


$ct.ds.sheltree.sheltreeinput = function () {

    var getMedicalTabQuestionGroupResponse = function (sheltereeId, successCallBack) {

        var requestParam = {};
        requestParam.SheltereeId = sheltereeId;

        $ct.ajax.ajaxPost($ct.cn.getQuestionResponseUrl() + 'GetMedicalTabQuestionGroupResponse', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)

        return "";
    };


    var getCareRequirements = function (sheltereeId, successCallBack) {

        var requestParam = {};
        requestParam.SheltereeId = sheltereeId;

        $ct.ajax.ajaxPost($ct.cn.getQuestionResponseUrl() + 'GetCareRequirementsQuestionGroupResponse', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)

        return "";
    };

    var getVitals = function (sheltereeId, successCallBack) {

        var requestParam = {};
        requestParam.SheltereeId = sheltereeId;

        $ct.ajax.ajaxPost($ct.cn.getQuestionResponseUrl() + 'GetVitalQuestionGroupResponse', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)

        return "";
    };



   
    var saveQuestionResponse = function (questionResponse, successCallBack) {

        //url pending
        $ct.ajax.ajaxPost($ct.cn.getQuestionResponseUrl() + 'SaveQuestionResponse', questionResponse, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };



    var getEquipmentSuppliesById = function (sheltereeId, successCallBack) {
     
        var requestParam = {};
        requestParam.SheltereeId = sheltereeId;

        $ct.ajax.ajaxPost($ct.cn.getSheltereeFacilityUrl() + 'GetSheltereeEquipmentSupplyById', requestParam, function (result) {

            if (successCallBack != null)
            {
                successCallBack(result);
            }

        }, null, true)
        return "";
    };

    var saveEquipmentSupplies = function (saveEquipmentSuppliesData, successCallBack) {

        $ct.ajax.ajaxPost($ct.cn.getSheltereeFacilityUrl() + 'SaveSheltereeEquipmentSupply', saveEquipmentSuppliesData, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };


    var getSheltereeIdentificationDischargeAndDispositionById = function (sheltereeId, successCallBack) {

        var requestParam = {};

        requestParam.SheltereeId = sheltereeId;

        $ct.ajax.ajaxPost($ct.cn.getSheltereeFacilityUrl() + 'GetSheltereeIdentificationDispositionDischargeById', requestParam, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    var saveSheltereeIdentificationDischargeAndDisposition = function (saveData, successCallBack) {

        $ct.ajax.ajaxPost($ct.cn.getSheltereeFacilityUrl() + 'SaveSheltereeIdentificationDispositionDischarge', saveData, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    var getDemographicsById = function (sheltreeId,shelterId, successCallBack) {
        var requestParam = {};

        requestParam.SheltereeId = sheltreeId;
        requestParam.FacilityId = shelterId;

        $ct.ajax.ajaxPost($ct.cn.getSheltereeFacilityUrl() + 'GetSheltereeById', requestParam, function (result) {
            if (successCallBack != null)

                successCallBack(result);
        }, null, true)
        return "";

    };

    var saveDemographics = function (saveEquipmentSuppliesByIdData, successCallBack) {

        $ct.ajax.ajaxPost($ct.cn.getSheltereeFacilityUrl() + 'SaveShelteree', saveEquipmentSuppliesByIdData, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };


    var getMedicationById = function (sheltreeId, successCallBack) {
        var requestParam = {};

        requestParam.SheltereeId = sheltreeId;
        //   requestParam.SheltereeId = $ct.constants.getemptyGUID();

        $ct.ajax.ajaxPost($ct.cn.getSheltereeFacilityUrl() + 'GetSheltereeMedications', requestParam, function (result) {
            if (successCallBack != null)

                successCallBack(result);
        }, null, true)
        return "";
    };

    var saveMedication = function (saveEquipmentSuppliesByIdData, successCallBack) {

        $ct.ajax.ajaxPost($ct.cn.getSheltereeFacilityUrl() + 'SaveSheltereeMedicationWithAllergies', saveEquipmentSuppliesByIdData, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    return {

        getMedicalTabQuestionGroupResponse: getMedicalTabQuestionGroupResponse,
        getCareRequirements: getCareRequirements,
        getVitals: getVitals,
        saveQuestionResponse: saveQuestionResponse,
        getEquipmentSuppliesById: getEquipmentSuppliesById,
        saveEquipmentSupplies: saveEquipmentSupplies,
        getSheltereeIdentificationDischargeAndDispositionById: getSheltereeIdentificationDischargeAndDispositionById,
        saveSheltereeIdentificationDischargeAndDisposition: saveSheltereeIdentificationDischargeAndDisposition,
        getDemographicsById: getDemographicsById,
        saveDemographics: saveDemographics,
        getMedicationById: getMedicationById,
        saveMedication: saveMedication

    };

}();


$ct.ds.reports= function () {

    var getLookupsForStaffRawDataReport = function (successCallBack) {

        var Data = "";

        $ct.ajax.ajaxPost($ct.cn.getReportsUrl() + 'GetLookupsForEmployeeRawDataReport', Data, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };


    var getLookupsForSheltereeRawDataReport = function (successCallBack) {

        var Data = "";

        $ct.ajax.ajaxPost($ct.cn.getReportsUrl() + 'GetLookupsForSheltereeRawDataReport', Data, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    var getLookupsForStaffAttendanceRawDataReport = function (successCallBack) {

        var Data = "";

        $ct.ajax.ajaxPost($ct.cn.getReportsUrl() + 'GetLookupsForEmployeeAttendanceRawDataReport', Data, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    var genarateStaffRawDataReport = function (params, successCallBack) {


        $ct.ajax.ajaxPost($ct.cn.getReportsUrl() + 'GetReportForEmployeeRawData', params, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

    var genarateStaffAttendanceRawDataReport = function (params, successCallBack) {


        $ct.ajax.ajaxPost($ct.cn.getReportsUrl() + 'GetReportForEmployeeAttendanceRawData', params, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };


    var genarateSheltereeRawDataReport = function (params, successCallBack) {


        $ct.ajax.ajaxPost($ct.cn.getReportsUrl() + 'GetReportForSheltereeRawData', params, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";
    };

   
    return {

        getLookupsForStaffRawDataReport: getLookupsForStaffRawDataReport,
        getLookupsForSheltereeRawDataReport: getLookupsForSheltereeRawDataReport,
        getLookupsForStaffAttendanceRawDataReport: getLookupsForStaffAttendanceRawDataReport,
        genarateStaffRawDataReport: genarateStaffRawDataReport,
        genarateStaffAttendanceRawDataReport: genarateStaffAttendanceRawDataReport,
        genarateSheltereeRawDataReport: genarateSheltereeRawDataReport
    }
}();
$ct.ds.event= function () {


    var getActiveEvent = function (successCallBack) {
        var Data = {};

        $ct.ajax.ajaxPost($ct.cn.getEventUrl() + 'GetActiveEvent', Data, function (result) {

            if (successCallBack != null)
                successCallBack(result);

        }, null, true)


        return "";


    };

   
    return {


        getActiveEvent: getActiveEvent
    }

}();
/**
* root HTML element
* @type {object}
*/
var rootEle = document.documentElement;

// media queries, to keep this wrapped in a IIFE so that we can move out later.
(function(w){
    w.mediaQuery = w.mediaQuery || {};
    w.device     = w.device || {};
    var BP;

    // check if match media api avaible on this browser to avoid throwing errors
    if(!Modernizr && !Modernizr.mq && !Modernizr.touch){
        return;
    }

    BP = {
        'TABLET'    : '(max-width  : 1024px)',
        'MOBILE'    : '(max-width  : 800px)',
        'XMOBILE'   : '(max-width  : 480px)',
        'LANDSCAPE' : '(orientation: landscape)',
        'PORTRAIT'  : '(orientation: portrait)'
    };

    // check for media query passed
    mediaQuery.is = function (key) {
        return Modernizr.mq(BP[key]);
    };

    // device check
    device.has = function(key) {
        return Modernizr[key];
    };

    return mediaQuery;
})(window);

$(document).ready(function (e) {
    var $appHeader  = $('#hd');
    var $appContent = $('#bd');

    // alerts
    $appContent.on('click', '.app-alerts', alertsToggle);

    // navigation view toggle if tablet && landscape with touch
    if(device.has('touch')){
        $appHeader.on('click', '.main-menu', showNavPanel);
    }else {
        $appHeader.on({
            'mouseenter': showNavPanel,
            'mouseleave': hideNavPanel
        },'.main-menu');
    }

    // hide nav when close button clicked
    $appHeader.on('click', '.app-logo__menu-collapse', toggleNavPanel);

    // expand/collapse navigation
    $appHeader.on('click', '.app-nav__main__li.has-subnav', toggleMainNavActive);

    // active class for selected subnav
    $appHeader.on('click', '.app-nav__sub__li', toggleSubNavActive);
});

/**
 * Toggle alerts view on the page
 * @param  {object} e event
 */
function alertsToggle(e){
    var alertsEle = e.currentTarget;
    $(alertsEle).toggleClass('is-alerts-visible');
}

/**
 * show navigation panel
 */
function showNavPanel(e) {
    var focusedElement = document.activeElement;
    $(rootEle).addClass('has-nav-expanded');

    // if focused element not found, exit from here, because no further execution is needed.
    if(!focusedElement){
        return;
    }

    // hack to avoid cursor overlap in IE
    if (focusedElement.nodeName === 'TEXTAREA' || focusedElement.nodeName === 'INPUT') {
        focusedElement.blur();
    }
}

/**
 * hide navigation panel
 */
function hideNavPanel() {
    $(rootEle).removeClass('has-nav-expanded');
}

/**
 * Toggle navigation section
 */
function toggleNavPanel() {
    $(rootEle).toggleClass('has-nav-expanded');
}

/**
 * Main nav active state toggle
 * @param  {Object} event
 */
function toggleMainNavActive(event) {
    var $ele               = $(event.currentTarget);
    var mainNavActiveClass = 'is-mainnav-active';
    var isActive           = $ele.hasClass(mainNavActiveClass);

    // if the main menu already has active class remove
    if (isActive) {
        resetMainSubNavState(mainNavActiveClass);
    } else {
        resetMainSubNavState(mainNavActiveClass);

        // add active class to current element
        $ele.addClass(mainNavActiveClass);
    }
}

/**
 * remove active class from main nav and subnav
 * @param {string} mainNavActiveClass
 */
function resetMainSubNavState(mainNavActiveClass) {
    var subNavActiveClass  = 'is-subnav-active';
    var $mainNav           = $('.app-nav__main__li');
    var $subNav            = $('.app-nav__sub__li');

    $mainNav.removeClass(mainNavActiveClass);
    $subNav.removeClass(subNavActiveClass);
}

/**
 * Subnav active state update based on clicked element
 * @param  {Object} event
 */
function toggleSubNavActive(event) {
    var $ele               = $(event.currentTarget);
    var subNavActiveClass  = 'is-subnav-active';
    var $subNavSiblings    = $ele.siblings('.'+subNavActiveClass);

    event.stopPropagation();

    // remove active class from siblings
    $subNavSiblings.removeClass(subNavActiveClass);

    // add active class to current element
    $ele.addClass(subNavActiveClass);
}

//# sourceMappingURL=app-libs.js.map
