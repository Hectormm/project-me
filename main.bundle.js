webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/animations/animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return imageAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var imageAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('imageAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':enter', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 }))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':leave', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 }))
    ])
]);
//# sourceMappingURL=animations.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isAuth()\">\r\n  <app-navigation></app-navigation>\r\n\r\n  <footer>\r\n    <app-footer-bar></app-footer-bar>\r\n  </footer>\r\n</div>\r\n\r\n<div *ngIf=\"!isAuth()\">\r\n  <router-outlet name=\"notloggedin\"> </router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_login_service__ = __webpack_require__("../../../../../src/app/services/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(LoginService, router) {
        this.LoginService = LoginService;
        this.router = router;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        if (!this.isAuth()) {
            this.router.navigate(['/']);
        }
    };
    AppComponent.prototype.isAuth = function () {
        return this.LoginService.isLogged();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_login_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_cdk_table__ = __webpack_require__("../../../cdk/@angular/cdk/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__markpieszak_ng_application_insights__ = __webpack_require__("../../../../@markpieszak/ng-application-insights/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__markpieszak_ng_application_insights___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__markpieszak_ng_application_insights__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_angular_material_angular_material_module__ = __webpack_require__("../../../../../src/app/modules/angular-material/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_footer_bar_footer_bar_component__ = __webpack_require__("../../../../../src/app/directives/footer-bar/footer-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives_navigation_navigation_component__ = __webpack_require__("../../../../../src/app/directives/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__routes_route_definitions__ = __webpack_require__("../../../../../src/app/routes/route-definitions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modules_directive_modules_view_title_directive_view_title_directive_module__ = __webpack_require__("../../../../../src/app/modules/directive-modules/view-title-directive/view-title-directive.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modules_component_modules_dashboard_dashboard_module__ = __webpack_require__("../../../../../src/app/modules/component-modules/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__modules_component_modules_teams_teams_module__ = __webpack_require__("../../../../../src/app/modules/component-modules/teams/teams.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__modules_component_modules_users_users_module__ = __webpack_require__("../../../../../src/app/modules/component-modules/users/users.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__modules_component_modules_tasks_tasks_module__ = __webpack_require__("../../../../../src/app/modules/component-modules/tasks/tasks.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__modules_component_modules_projects_projects_module__ = __webpack_require__("../../../../../src/app/modules/component-modules/projects/projects.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__modules_component_modules_reports_reports_module__ = __webpack_require__("../../../../../src/app/modules/component-modules/reports/reports.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__modules_component_modules_meetings_meetings_module__ = __webpack_require__("../../../../../src/app/modules/component-modules/meetings/meetings.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__modules_component_modules_calendar_calendar2_module__ = __webpack_require__("../../../../../src/app/modules/component-modules/calendar/calendar2.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__modules_component_modules_login_login_module__ = __webpack_require__("../../../../../src/app/modules/component-modules/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__modules_component_modules_search_search_module__ = __webpack_require__("../../../../../src/app/modules/component-modules/search/search.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__modules_component_modules_profile_profile_module__ = __webpack_require__("../../../../../src/app/modules/component-modules/profile/profile.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__modules_component_modules_notifications_notifications_module__ = __webpack_require__("../../../../../src/app/modules/component-modules/notifications/notifications.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__modules_component_modules_messenger_messenger_module__ = __webpack_require__("../../../../../src/app/modules/component-modules/messenger/messenger.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__modules_pipe_modules_capitalize_pipe_capitalize_pipe_module__ = __webpack_require__("../../../../../src/app/modules/pipe-modules/capitalize-pipe/capitalize-pipe.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__modules_pipe_modules_objectNgFor_pipe_objectNgFor_pipe_module__ = __webpack_require__("../../../../../src/app/modules/pipe-modules/objectNgFor-pipe/objectNgFor-pipe.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular









// import { MAT_DATE_LOCALE } from '@angular/material';
// Insights

// Angular Material


// Directives


// Routes

// Modules
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__directives_navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_12__directives_footer_bar_footer_bar_component__["a" /* FooterBarComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_14__routes_route_definitions__["a" /* RouteDefinitions */]),
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__modules_angular_material_angular_material_module__["a" /* AngularMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_slim_loading_bar__["a" /* SlimLoadingBarModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__angular_cdk_table__["m" /* CdkTableModule */],
            // Modules Components
            __WEBPACK_IMPORTED_MODULE_16__modules_component_modules_dashboard_dashboard_module__["a" /* DashboardModule */],
            __WEBPACK_IMPORTED_MODULE_17__modules_component_modules_teams_teams_module__["a" /* TeamsModule */],
            __WEBPACK_IMPORTED_MODULE_18__modules_component_modules_users_users_module__["a" /* UsersModule */],
            __WEBPACK_IMPORTED_MODULE_19__modules_component_modules_tasks_tasks_module__["a" /* TasksModule */],
            __WEBPACK_IMPORTED_MODULE_20__modules_component_modules_projects_projects_module__["a" /* ProjectsModule */],
            __WEBPACK_IMPORTED_MODULE_21__modules_component_modules_reports_reports_module__["a" /* ReportsModule */],
            __WEBPACK_IMPORTED_MODULE_22__modules_component_modules_meetings_meetings_module__["a" /* MeetingsModule */],
            __WEBPACK_IMPORTED_MODULE_23__modules_component_modules_calendar_calendar2_module__["a" /* Calendar2Module */],
            __WEBPACK_IMPORTED_MODULE_24__modules_component_modules_login_login_module__["a" /* LoginModule */],
            __WEBPACK_IMPORTED_MODULE_25__modules_component_modules_search_search_module__["a" /* SearchModule */],
            __WEBPACK_IMPORTED_MODULE_26__modules_component_modules_profile_profile_module__["a" /* ProfileModule */],
            __WEBPACK_IMPORTED_MODULE_27__modules_component_modules_notifications_notifications_module__["a" /* NotificationsModule */],
            __WEBPACK_IMPORTED_MODULE_28__modules_component_modules_messenger_messenger_module__["a" /* MessengerModule */],
            // Modules directives
            __WEBPACK_IMPORTED_MODULE_15__modules_directive_modules_view_title_directive_view_title_directive_module__["a" /* ViewTitleDirectiveModule */],
            // Modules pipes
            __WEBPACK_IMPORTED_MODULE_29__modules_pipe_modules_capitalize_pipe_capitalize_pipe_module__["a" /* CapitalizePipeModule */],
            __WEBPACK_IMPORTED_MODULE_30__modules_pipe_modules_objectNgFor_pipe_objectNgFor_pipe_module__["a" /* ObjectNgForPipeModule */],
            // Insights
            __WEBPACK_IMPORTED_MODULE_9__markpieszak_ng_application_insights__["ApplicationInsightsModule"].forRoot({
                instrumentationKey: '8a9ee28c-652e-4e1b-8c62-c7db88a30ba1'
            }),
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__markpieszak_ng_application_insights__["AppInsightsService"],
        ],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/classes/meeting.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Meeting; });
var Meeting = (function () {
    function Meeting() {
    }
    return Meeting;
}());

//# sourceMappingURL=meeting.js.map

/***/ }),

/***/ "../../../../../src/app/classes/notification.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notification; });
var Notification = (function () {
    function Notification() {
    }
    return Notification;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ "../../../../../src/app/classes/project.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
var Project = (function () {
    function Project() {
    }
    return Project;
}());

//# sourceMappingURL=project.js.map

/***/ }),

/***/ "../../../../../src/app/classes/task.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = (function () {
    function Task() {
    }
    return Task;
}());

//# sourceMappingURL=task.js.map

/***/ }),

/***/ "../../../../../src/app/classes/team.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Team; });
var Team = (function () {
    function Team() {
    }
    return Team;
}());

//# sourceMappingURL=team.js.map

/***/ }),

/***/ "../../../../../src/app/classes/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/components/calendar-components/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<app-view-title titulo=\"{{tituloVista}}\"></app-view-title>\r\n\r\n<a md-fab class=\"button-action calendar-today\" (click)=\"today()\" mdTooltip=\"Today\" [mdTooltipPosition]=\"'right'\"><md-icon>history</md-icon></a>\r\n<div align=\"center\">\r\n  <a md-fab class=\"button-action\" (click)=\"previusMonth()\"><md-icon>navigate_before</md-icon></a>\r\n  <h4 class=\"calendar-title\">\r\n    {{month}} {{year}}\r\n  </h4>\r\n  <a md-fab class=\"button-action\" (click)=\"nextMonth()\"><md-icon>navigate_next</md-icon></a>\r\n</div>\r\n\r\n<!-- <mwl-calendar-month-view\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [weekStartsOn]=\"1\"\r\n    [refresh]=\"refresh\"\r\n    (dayClicked)=\"dayClicked($event.day)\"\r\n    (eventClicked)=\"eventClicked($event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n</mwl-calendar-month-view> -->\r\n\r\n<mwl-calendar-month-view\r\n[viewDate]=\"viewDate\"\r\n[events]=\"events\"\r\n[weekStartsOn]=\"1\"\r\n[refresh]=\"refresh\"\r\n(dayClicked)=\"dayClicked($event.day)\"\r\n(eventClicked)=\"eventClicked($event)\"\r\n(eventTimesChanged)=\"eventTimesChanged($event)\">\r\n</mwl-calendar-month-view>\r\n\r\n<!-- <mwl-calendar-week-view\r\n[viewDate]=\"viewDate\"\r\n[events]=\"events\"\r\n[refresh]=\"refresh\"\r\n(dayClicked)=\"dayClicked($event.day)\"\r\n(eventClicked)=\"eventClicked($event)\"\r\n(eventTimesChanged)=\"eventTimesChanged($event)\">\r\n</mwl-calendar-week-view>  -->\r\n\r\n<!-- \r\n\r\n  <mwl-calendar-day-view\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    (dayClicked)=\"dayClicked($event.day)\"\r\n    (eventClicked)=\"eventClicked($event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n  </mwl-calendar-day-view> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/calendar-components/calendar/calendar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../angular-calendar/dist/css/angular-calendar.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbutton[md-raised-button] {\n  background: #0D3446 !important;\n  color: #FFFFFF !important; }\n  button[md-raised-button][disabled] {\n    background: #373a3c !important; }\n\n.button-action {\n  background: #0D3446 !important;\n  width: 30px !important;\n  height: 30px !important; }\n  .button-action span {\n    line-height: 0 !important; }\n  .button-action label {\n    cursor: pointer;\n    height: 25px;\n    margin: 0; }\n    .button-action label .icon-file {\n      line-height: 0;\n      font-size: 17px; }\n  .button-action md-icon {\n    line-height: 0;\n    font-size: 20px; }\n\n.buttons-group {\n  position: -webkit-sticky;\n  position: sticky;\n  text-align: right;\n  width: 100%;\n  left: 0;\n  bottom: 6px;\n  right: 58px; }\n  .buttons-group > .addButton {\n    background: #0D3446 !important;\n    color: #FFFFFF !important; }\n  .buttons-group > .deleteButton {\n    background: #D21A6B !important;\n    color: #FFFFFF !important;\n    width: 35px;\n    height: 35px;\n    font-size: 11px;\n    right: 63px;\n    bottom: 3px;\n    position: absolute; }\n\n.card {\n  padding: 0;\n  border: 0px; }\n\n.card-header {\n  position: relative;\n  padding: 0;\n  border-bottom-width: 0px;\n  height: 120px; }\n\n.card-text {\n  padding: 24px 0 0 24px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 auto;\n          flex: 1 auto; }\n  .card-text .card-icons {\n    color: #0D3446; }\n\n.card-actions {\n  width: 65px;\n  background: #D8DFE2;\n  text-align: center; }\n  .card-actions > button {\n    color: #0D3446; }\n\nmd-card-title {\n  font-size: 20px !important; }\n\nmd-card-subtitle {\n  margin-bottom: 0 !important; }\n\n.header-image {\n  background-size: cover;\n  height: 120px;\n  width: 120px;\n  border-radius: 0; }\n\n.card-header-comments div {\n  width: 100%;\n  margin-left: 4px; }\n\n.card-title-comments {\n  font-size: 25px; }\n\n.litle-card .card-header {\n  height: 45px; }\n\n.litle-card .card-text {\n  padding: 7px 0 0 24px; }\n\n.litle-card .card-actions {\n  width: 140px; }\n\n.litle-card md-card-subtitle md-icon {\n  font-size: 18px; }\n\n.litle-card md-card-title,\n.litle-card md-card-subtitle {\n  display: inline-block; }\n\n@media (max-width: 600px) {\n  md-grid-list {\n    height: auto !important; }\n  md-grid-tile {\n    display: block !important;\n    position: relative !important;\n    top: auto !important;\n    left: 0 !important;\n    width: 100% !important;\n    margin-bottom: 15px !important; }\n  md-card {\n    margin-left: 0 !important;\n    width: 100% !important;\n    height: 95% !important;\n    overflow: hidden; }\n  md-input-container,\n  md-select {\n    width: 100% !important; } }\n\n.container {\n  margin-left: 0px;\n  margin-right: 0px;\n  width: 100%; }\n\n.not-found-info {\n  font-size: 30px;\n  text-align: center; }\n\n::-webkit-scrollbar {\n  width: 7px; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  border-radius: none; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: none;\n  background: #0D3446; }\n\n.snack-bar {\n  background: #0D3446 !important; }\n\n.snack-bar-error {\n  background: #D21A6B !important; }\n\nbutton:focus,\na:focus {\n  outline: none; }\n\ninput:disabled {\n  color: #000000 !important; }\n\n.calendar-title {\n  display: inline-block;\n  min-width: 190px; }\n\n.button-action.calendar-today md-icon {\n  font-size: 21px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/calendar-components/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enums_monthNames_enum__ = __webpack_require__("../../../../../src/app/enums/monthNames.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_meetings_meetings_service__ = __webpack_require__("../../../../../src/app/services/meetings/meetings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Angular








var CalendarComponent = (function () {
    // export interface CalendarEvent {
    //     start: Date;
    //     end?: Date;
    //     title: string;
    //     color: EventColor;
    //     actions?: EventAction[];
    //     allDay?: boolean;
    //     cssClass?: string;
    //     resizable?: {
    //         beforeStart?: boolean;
    //         afterEnd?: boolean;
    //     };
    //     draggable?: boolean;
    // }
    function CalendarComponent(router, MeetingsService, slimLoadingBarService, snackBar) {
        this.router = router;
        this.MeetingsService = MeetingsService;
        this.slimLoadingBarService = slimLoadingBarService;
        this.snackBar = snackBar;
        this.tituloVista = 'Calendar';
        this.viewDate = new Date();
        this.monthNames = __WEBPACK_IMPORTED_MODULE_4__enums_monthNames_enum__["a" /* MonthNames */];
        this.month = this.monthNames[this.viewDate.getMonth()];
        this.year = this.viewDate.getFullYear();
        this.meetings = [];
        this.events = [];
        this.refresh = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    CalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.startLoading();
        this.MeetingsService.getAll()
            .subscribe(function (meetings) {
            _this.meetings = meetings;
            __WEBPACK_IMPORTED_MODULE_7_underscore__["each"](meetings, function (meeting) {
                _this.events.push({
                    _id: meeting._id,
                    title: meeting.name,
                    start: _this.toDate(meeting.initDate, meeting.initTime),
                    end: _this.toDate(meeting.finalDate, meeting.finalTime),
                    color: {
                        primary: meeting.color || '#71ADB5'
                    },
                    draggable: true,
                    resizable: {
                        beforeStart: true,
                        afterEnd: true,
                    },
                });
            });
            _this.refresh.next();
            // Finish loading bar
            _this.completeLoading();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    CalendarComponent.prototype.toDate = function (dateUTC, timeString) {
        var date = __WEBPACK_IMPORTED_MODULE_7_underscore__["isDate"](dateUTC) ? dateUTC : new Date(Date.parse(dateUTC));
        var timeSplit = timeString.split(':');
        date.setHours(timeSplit[0]);
        date.setMinutes(timeSplit[1]);
        return date;
    };
    ;
    CalendarComponent.prototype.startLoading = function () {
        this.slimLoadingBarService.start();
    };
    CalendarComponent.prototype.completeLoading = function () {
        var _this = this;
        setTimeout(function () {
            _this.slimLoadingBarService.complete();
        });
    };
    CalendarComponent.prototype.openSnackBar = function (message, error) {
        this.snackBar.open(message, null, {
            duration: 5000,
            extraClasses: !error ? ['snack-bar'] : ['snack-bar-error']
        });
    };
    CalendarComponent.prototype.previusMonth = function () {
        this.viewDate = new Date(new Date(this.viewDate).setMonth(this.viewDate.getMonth() - 1));
        this.month = this.monthNames[this.viewDate.getMonth()];
        this.year = this.viewDate.getFullYear();
    };
    CalendarComponent.prototype.nextMonth = function () {
        this.viewDate = new Date(new Date(this.viewDate).setMonth(this.viewDate.getMonth() + 1));
        this.month = this.monthNames[this.viewDate.getMonth()];
        this.year = this.viewDate.getFullYear();
    };
    CalendarComponent.prototype.today = function () {
        this.viewDate = new Date();
        this.month = this.monthNames[this.viewDate.getMonth()];
        this.year = this.viewDate.getFullYear();
    };
    CalendarComponent.prototype.dayClicked = function (day) {
        console.log(day);
    };
    CalendarComponent.prototype.eventClicked = function (event) {
        this.router.navigate(['/meeting', 'view', event.event._id]);
    };
    CalendarComponent.prototype.eventTimesChanged = function (a) {
        a.event.start = a.newStart;
        a.event.end = a.newEnd;
        this.updateMeeting(a);
        this.refresh.next();
    };
    CalendarComponent.prototype.updateMeeting = function (event) {
        var _this = this;
        this.startLoading();
        var meeting = __WEBPACK_IMPORTED_MODULE_7_underscore__["findWhere"](this.meetings, { _id: event.event._id });
        meeting.initDate = this.toDate(event.newStart, '00:00');
        meeting.finalDate = this.toDate(event.newEnd, '00:00');
        meeting.modificationDate = new Date();
        this.MeetingsService.update(meeting)
            .subscribe(function (result) {
            _this.openSnackBar('Meeting «' + result.name + '» updated correctly', null);
            _this.completeLoading();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    return CalendarComponent;
}());
CalendarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-calendar',
        template: __webpack_require__("../../../../../src/app/components/calendar-components/calendar/calendar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/calendar-components/calendar/calendar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_meetings_meetings_service__["a" /* MeetingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_meetings_meetings_service__["a" /* MeetingsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MdSnackBar */]) === "function" && _d || Object])
], CalendarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard-components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-view-title titulo=\"{{tituloVista}}\"></app-view-title>\r\n\r\n<md-grid-list cols=\"5\" rowHeight=\"300px\">\r\n\r\n  <md-grid-tile colspan=\"1\">\r\n    <md-card class=\"grid-card\">\r\n      <md-card-title class=\"card-title-dashboard\">\r\n        Tasks\r\n      </md-card-title>\r\n\r\n      <md-card-content>\r\n        <div style=\"display: block; height: 100%\">\r\n          <canvas baseChart [legend]=\"true\" [data]=\"ChartData\" [labels]=\"ChartLabels\" [options]=\"chartOptions\" [chartType]=\"ChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\">\r\n          </canvas>\r\n        </div>\r\n\r\n      </md-card-content>\r\n    </md-card>\r\n  </md-grid-tile>\r\n\r\n  <md-grid-tile colspan=\"2\">\r\n    <md-card class=\"grid-card grid-card-left\">\r\n      <md-card-title class=\"card-title-dashboard\">\r\n        Projects\r\n      </md-card-title>\r\n      <md-card-content>\r\n        <div class=\"table-dashboard\">\r\n          <md-table #table [dataSource]=\"dataSourceProjects\">\r\n            <ng-container mdColumnDef=\"name\">\r\n              <md-header-cell *mdHeaderCellDef> Name </md-header-cell>\r\n              <md-cell *mdCellDef=\"let element\"> {{element.name}} </md-cell>\r\n            </ng-container>\r\n\r\n            <ng-container mdColumnDef=\"description\">\r\n              <md-header-cell style=\"flex: 150px;\" *mdHeaderCellDef> Description </md-header-cell>\r\n              <md-cell style=\"flex: 150px;\" *mdCellDef=\"let element\"> {{element.description}} </md-cell>\r\n            </ng-container>\r\n\r\n            <ng-container mdColumnDef=\"progress\">\r\n              <md-header-cell *mdHeaderCellDef> Progress </md-header-cell>\r\n              <md-cell *mdCellDef=\"let element\"> {{element.progress}} </md-cell>\r\n            </ng-container>\r\n\r\n            <md-header-row *mdHeaderRowDef=\"displayedColumnsProject\"></md-header-row>\r\n            <md-row *mdRowDef=\"let row; columns: displayedColumnsProject;\" (click)=\"goToProject(row)\" style=\"cursor: pointer;\"></md-row>\r\n          </md-table>\r\n        </div>\r\n      </md-card-content>\r\n    </md-card>\r\n  </md-grid-tile>\r\n\r\n  <md-grid-tile colspan=\"1\">\r\n    <md-card class=\"grid-card grid-card-left\">\r\n      <md-card-title class=\"card-title-dashboard\">\r\n        Teams\r\n      </md-card-title>\r\n      <md-card-content>\r\n        <div class=\"table-dashboard\">\r\n          <md-table #table [dataSource]=\"dataSourceTeams\">\r\n            <ng-container mdColumnDef=\"name\">\r\n              <md-header-cell style=\"flex: 75px;\" *mdHeaderCellDef> Name </md-header-cell>\r\n              <md-cell style=\"flex: 75px;\" *mdCellDef=\"let element\"> {{element.name}} </md-cell>\r\n            </ng-container>\r\n\r\n            <ng-container mdColumnDef=\"initDate\">\r\n              <md-header-cell *mdHeaderCellDef></md-header-cell>\r\n              <md-cell *mdCellDef=\"let element\">\r\n                <p class=\"card-icons\">\r\n                  <md-icon>group</md-icon> <span>{{element.users.length}}</span>\r\n                  <md-icon>folder</md-icon> <span>{{element.projects.length}}</span>\r\n                </p>\r\n              </md-cell>\r\n            </ng-container>\r\n\r\n            <md-header-row *mdHeaderRowDef=\"displayedColumnsTeams\"></md-header-row>\r\n            <md-row *mdRowDef=\"let row; columns: displayedColumnsTeams;\" (click)=\"goToTeam(row)\" style=\"cursor: pointer;\"></md-row>\r\n          </md-table>\r\n        </div>\r\n      </md-card-content>\r\n    </md-card>\r\n  </md-grid-tile>\r\n\r\n  <md-grid-tile colspan=\"1\">\r\n    <md-card class=\"grid-card grid-card-left\">\r\n      <md-card-title class=\"card-title-dashboard\">\r\n        Meetings\r\n      </md-card-title>\r\n      <md-card-content>\r\n        <div class=\"table-dashboard\">\r\n          <md-table #table [dataSource]=\"dataSourceMeetings\">\r\n            <ng-container mdColumnDef=\"name\">\r\n              <md-header-cell style=\"flex: 100px;\" *mdHeaderCellDef> Name </md-header-cell>\r\n              <md-cell style=\"flex: 100px;\" *mdCellDef=\"let element\"> {{element.name}} </md-cell>\r\n            </ng-container>\r\n\r\n            <ng-container mdColumnDef=\"initDate\">\r\n              <md-header-cell *mdHeaderCellDef> Init Date </md-header-cell>\r\n              <md-cell *mdCellDef=\"let element\"> {{element.initDate | date: 'dd/MM/yyyy'}} </md-cell>\r\n            </ng-container>\r\n\r\n            <md-header-row *mdHeaderRowDef=\"displayedColumnsMeetings\"></md-header-row>\r\n            <md-row *mdRowDef=\"let row; columns: displayedColumnsMeetings;\" (click)=\"goToMeeting(row)\" style=\"cursor: pointer;\"></md-row>\r\n          </md-table>\r\n        </div>\r\n      </md-card-content>\r\n    </md-card>\r\n  </md-grid-tile>\r\n</md-grid-list>\r\n\r\n<md-grid-list cols=\"5\" rowHeight=\"490px\">\r\n  <md-grid-tile colspan=\"5\">\r\n    <md-card class=\"grid-card card-header-notification\">\r\n      <div>\r\n        <md-card-title class=\"card-title-notification\">\r\n          <span class=\"title-space\">Notifications</span>\r\n          <notification (actionAdd)=\"refreshNotification()\"></notification>\r\n        </md-card-title>\r\n      </div>\r\n      <md-card-content class=\"content-notifications\">\r\n        <div *ngIf=\"!notifications.length\" align=\"center\">\r\n          <h5>{{infoMessage}}</h5>\r\n        </div>\r\n        <div class=\"notifications-list\" *ngFor=\"let notification of notifications.reverse()\">\r\n          <h5>\r\n            {{notification.title}}\r\n          </h5>\r\n          <div>\r\n            {{notification.description}}\r\n          </div>\r\n          <div class=\"small\" style=\"font-style: italic;\">\r\n            <a href=\"{{notification.link}}\" target=\"_blank\">{{notification.link}}</a>\r\n            <div align=\"end\">\r\n              {{notification.creationDateString}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </md-card-content>\r\n    </md-card>\r\n  </md-grid-tile>\r\n</md-grid-list>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard-components/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid-card {\n  height: 90%;\n  width: 100%; }\n\n.grid-card.grid-card-left {\n  margin-left: 15px; }\n\n.card-header-notification div {\n  width: 100%; }\n\n.card-title-notification {\n  margin-bottom: 0px;\n  font-size: 25px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .card-title-notification > .title-space {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 auto;\n            flex: 1 auto; }\n\n.notifications-list {\n  border-bottom: 1px solid #ddd;\n  padding: 15px 5px; }\n\n.card-title-dashboard {\n  margin-bottom: 0px; }\n\n.table-dashboard md-table {\n  max-height: 200px;\n  overflow: hidden;\n  overflow-y: auto; }\n\n.content-notifications {\n  max-height: 360px;\n  overflow: hidden;\n  overflow-y: auto; }\n\n.card-icons {\n  margin-top: 0px;\n  margin-bottom: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard-components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* unused harmony export ExtentedDataSourceProject */
/* unused harmony export ExtentedDataSourceMeeting */
/* unused harmony export ExtentedDataSourceTeam */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__ = __webpack_require__("../../../cdk/@angular/cdk/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_dashboard_dashboard_service__ = __webpack_require__("../../../../../src/app/services/dashboard/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_notifications_notifications_service__ = __webpack_require__("../../../../../src/app/services/notifications/notifications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_combineLatest__ = __webpack_require__("../../../../rxjs/add/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_underscore__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Angular




// Services


// Others





// Consts
var notFound = 'Not found notifications';
var getting = 'Getting notifications';
var DashboardComponent = (function () {
    function DashboardComponent(router, NotificationsService, snackBar, slimLoadingBarService, DashboardService) {
        this.router = router;
        this.NotificationsService = NotificationsService;
        this.snackBar = snackBar;
        this.slimLoadingBarService = slimLoadingBarService;
        this.DashboardService = DashboardService;
        this.tituloVista = 'Dashboard';
        this.infoMessage = getting;
        this.notifications = [];
        this.ChartLabels = ['Done', 'Doing', 'ToDo'];
        this.ChartType = 'pie';
        this.ChartData = [0, 0, 0];
        this.chartOptions = {
            responsive: true
        };
        this.displayedColumnsProject = ['name', 'description', 'progress'];
        this.displayedColumnsMeetings = ['name', 'initDate'];
        this.displayedColumnsTeams = ['name', 'initDate'];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tituloVista = 'Dashboard';
        this.startLoading();
        __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].combineLatest(this.DashboardService.getTasks(), this.NotificationsService.getAll(), this.DashboardService.getProjects(), this.DashboardService.getMeetings(), this.DashboardService.getTeams()).subscribe(function (data) {
            _this.getTasks(data[0]);
            _this.getNotifications(data[1]);
            _this.getProjects(data[2]);
            _this.getMeetings(data[3]);
            _this.getTeams(data[4]);
            _this.completeLoading();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    DashboardComponent.prototype.goToTeam = function (team) {
        this.router.navigate(['/team', 'view', team._id]);
    };
    DashboardComponent.prototype.goToProject = function (project) {
        this.router.navigate(['/project', 'view', project._id]);
    };
    DashboardComponent.prototype.goToMeeting = function (meeting) {
        this.router.navigate(['/meeting', 'view', meeting._id]);
    };
    // events
    DashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.utcToDate = function (utc) {
        return utc ? new Date(Date.parse(utc)) : null;
    };
    ;
    DashboardComponent.prototype.getMeetings = function (meetings) {
        this.dataSourceMeetings = new ExtentedDataSourceMeeting();
        this.dataSourceMeetings.data = __WEBPACK_IMPORTED_MODULE_10_underscore__["sortBy"](meetings, 'initDate');
        console.log(meetings);
    };
    DashboardComponent.prototype.getTeams = function (teams) {
        this.dataSourceTeams = new ExtentedDataSourceTeam();
        this.dataSourceTeams.data = teams;
    };
    DashboardComponent.prototype.getProjects = function (projects) {
        this.dataSourceProjects = new ExtentedDataSourceProject();
        this.dataSourceProjects.data = projects;
    };
    DashboardComponent.prototype.getTasks = function (task) {
        this.tasks = __WEBPACK_IMPORTED_MODULE_10_underscore__["groupBy"](task, 'status');
        this.ChartData = [this.tasks.DONE.length, this.tasks.DOING.length, this.tasks.TODO.length];
    };
    DashboardComponent.prototype.getNotifications = function (notifications) {
        var _this = this;
        this.infoMessage = notFound;
        this.notifications = notifications;
        __WEBPACK_IMPORTED_MODULE_10_underscore__["each"](this.notifications, function (notification) {
            notification.creationDate = _this.utcToDate(notification.creationDate);
            notification['creationDateString'] = notification.creationDate ? notification.creationDate.toLocaleString() : '-';
        });
    };
    DashboardComponent.prototype.isAdmin = function () {
        return false;
    };
    DashboardComponent.prototype.refreshNotification = function () {
        var _this = this;
        this.notifications = [];
        this.NotificationsService.getAll().subscribe(function (notifications) {
            _this.getNotifications(notifications);
        });
    };
    DashboardComponent.prototype.startLoading = function () {
        this.slimLoadingBarService.start();
    };
    DashboardComponent.prototype.completeLoading = function () {
        var _this = this;
        setTimeout(function () {
            _this.slimLoadingBarService.complete();
        });
    };
    DashboardComponent.prototype.openSnackBar = function (message, error) {
        this.snackBar.open(message, null, {
            duration: 5000,
            extraClasses: !error ? ['snack-bar'] : ['snack-bar-error']
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard-components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard-components/dashboard/dashboard.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_notifications_notifications_service__["a" /* NotificationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_notifications_notifications_service__["a" /* NotificationsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MdSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_dashboard_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_dashboard_dashboard_service__["a" /* DashboardService */]) === "function" && _e || Object])
], DashboardComponent);

var ExtentedDataSourceProject = (function (_super) {
    __extends(ExtentedDataSourceProject, _super);
    function ExtentedDataSourceProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtentedDataSourceProject.prototype.connect = function () {
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(this.data);
    };
    ExtentedDataSourceProject.prototype.disconnect = function () { };
    return ExtentedDataSourceProject;
}(__WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__["a" /* DataSource */]));

var ExtentedDataSourceMeeting = (function (_super) {
    __extends(ExtentedDataSourceMeeting, _super);
    function ExtentedDataSourceMeeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtentedDataSourceMeeting.prototype.connect = function () {
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(this.data);
    };
    ExtentedDataSourceMeeting.prototype.disconnect = function () { };
    return ExtentedDataSourceMeeting;
}(__WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__["a" /* DataSource */]));

var ExtentedDataSourceTeam = (function (_super) {
    __extends(ExtentedDataSourceTeam, _super);
    function ExtentedDataSourceTeam() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtentedDataSourceTeam.prototype.connect = function () {
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(this.data);
    };
    ExtentedDataSourceTeam.prototype.disconnect = function () { };
    return ExtentedDataSourceTeam;
}(__WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__["a" /* DataSource */]));

var _a, _b, _c, _d, _e;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login-components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"login-container\" layout-align=\"center center\">\r\n   <div class=\"loading-bar-login\">\r\n     <ng2-slim-loading-bar [color]=\"'#0d3446'\" [height]=\"'4px'\"></ng2-slim-loading-bar>\r\n   </div>\r\n\r\n  <div class=\"app-logo\">\r\n   <img src=\"{{appLogo}}\" style=\"width: 100px; height: 100px;\" alt=\"\">\r\n   <span class=\"name-app\">\r\n     Project.Me\r\n   </span>\r\n  </div>\r\n\r\n  <div class=\"container-card\">\r\n    <md-card class=\"login-card\">\r\n      <md-card-content class=\"login-card-content\">\r\n        <form>\r\n          <div>\r\n            <md-input-container style=\"width: 100%; margin-bottom: 15px;\">\r\n              <input mdInput placeholder=\"User\" [(ngModel)]=\"user['username']\" name=\"user\">\r\n            </md-input-container>\r\n          </div>\r\n\r\n          <div>\r\n            <md-input-container style=\"width: 100%; margin-bottom: 15px;\">\r\n              <input mdInput type=\"password\" placeholder=\"Password\" [(ngModel)]=\"user['password']\" name=\"password\">\r\n            </md-input-container>\r\n          </div>\r\n\r\n          <div align=\"end\">\r\n            <button type=\"submit\" md-raised-button (click)=\"doLogin()\" [disabled]=\"isLoggin()\">Login</button>\r\n          </div>\r\n        </form>\r\n      </md-card-content>\r\n    </md-card>\r\n  </div>\r\n\r\n  <div class=\"slogan\">\r\n    Project Planning and Monitoring\r\n  </div>\r\n\r\n  <div class=\"author\">\r\n    Héctor Martínez Matías | 2017\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/login-components/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../angular-calendar/dist/css/angular-calendar.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbutton[md-raised-button] {\n  background: #0D3446 !important;\n  color: #FFFFFF !important; }\n  button[md-raised-button][disabled] {\n    background: #373a3c !important; }\n\n.button-action {\n  background: #0D3446 !important;\n  width: 30px !important;\n  height: 30px !important; }\n  .button-action span {\n    line-height: 0 !important; }\n  .button-action label {\n    cursor: pointer;\n    height: 25px;\n    margin: 0; }\n    .button-action label .icon-file {\n      line-height: 0;\n      font-size: 17px; }\n  .button-action md-icon {\n    line-height: 0;\n    font-size: 20px; }\n\n.buttons-group {\n  position: -webkit-sticky;\n  position: sticky;\n  text-align: right;\n  width: 100%;\n  left: 0;\n  bottom: 6px;\n  right: 58px; }\n  .buttons-group > .addButton {\n    background: #0D3446 !important;\n    color: #FFFFFF !important; }\n  .buttons-group > .deleteButton {\n    background: #D21A6B !important;\n    color: #FFFFFF !important;\n    width: 35px;\n    height: 35px;\n    font-size: 11px;\n    right: 63px;\n    bottom: 3px;\n    position: absolute; }\n\n.card {\n  padding: 0;\n  border: 0px; }\n\n.card-header {\n  position: relative;\n  padding: 0;\n  border-bottom-width: 0px;\n  height: 120px; }\n\n.card-text {\n  padding: 24px 0 0 24px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 auto;\n          flex: 1 auto; }\n  .card-text .card-icons {\n    color: #0D3446; }\n\n.card-actions {\n  width: 65px;\n  background: #D8DFE2;\n  text-align: center; }\n  .card-actions > button {\n    color: #0D3446; }\n\nmd-card-title {\n  font-size: 20px !important; }\n\nmd-card-subtitle {\n  margin-bottom: 0 !important; }\n\n.header-image {\n  background-size: cover;\n  height: 120px;\n  width: 120px;\n  border-radius: 0; }\n\n.card-header-comments div {\n  width: 100%;\n  margin-left: 4px; }\n\n.card-title-comments {\n  font-size: 25px; }\n\n.litle-card .card-header {\n  height: 45px; }\n\n.litle-card .card-text {\n  padding: 7px 0 0 24px; }\n\n.litle-card .card-actions {\n  width: 140px; }\n\n.litle-card md-card-subtitle md-icon {\n  font-size: 18px; }\n\n.litle-card md-card-title,\n.litle-card md-card-subtitle {\n  display: inline-block; }\n\n@media (max-width: 600px) {\n  md-grid-list {\n    height: auto !important; }\n  md-grid-tile {\n    display: block !important;\n    position: relative !important;\n    top: auto !important;\n    left: 0 !important;\n    width: 100% !important;\n    margin-bottom: 15px !important; }\n  md-card {\n    margin-left: 0 !important;\n    width: 100% !important;\n    height: 95% !important;\n    overflow: hidden; }\n  md-input-container,\n  md-select {\n    width: 100% !important; } }\n\n.container {\n  margin-left: 0px;\n  margin-right: 0px;\n  width: 100%; }\n\n.not-found-info {\n  font-size: 30px;\n  text-align: center; }\n\n::-webkit-scrollbar {\n  width: 7px; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  border-radius: none; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: none;\n  background: #0D3446; }\n\n.snack-bar {\n  background: #0D3446 !important; }\n\n.snack-bar-error {\n  background: #D21A6B !important; }\n\nbutton:focus,\na:focus {\n  outline: none; }\n\ninput:disabled {\n  color: #000000 !important; }\n\n.loading-bar-login {\n  position: fixed;\n  top: 0px;\n  width: 100%;\n  z-index: 999; }\n\n.login-container {\n  padding-top: 55px; }\n\n.container-card {\n  padding: 0 30%; }\n\n.app-logo {\n  text-align: center;\n  margin-bottom: 35px; }\n\n.name-app {\n  font-size: 400%;\n  vertical-align: middle; }\n\n.author {\n  position: fixed;\n  bottom: 10px;\n  padding-left: 15px; }\n\n.slogan {\n  font-style: italic;\n  font-size: 300%;\n  text-align: center;\n  margin: 60px 5px 25px 5px; }\n\n@media (max-width: 900px) {\n  .container-card {\n    padding: 0 20%; } }\n\n@media (max-width: 600px) {\n  .container-card {\n    text-align: center;\n    padding: 0 15px; }\n  .login-container {\n    padding-top: 25px; }\n  .app-logo {\n    margin-bottom: 15px; }\n    .app-logo > img {\n      width: 125px !important;\n      height: 125px !important; }\n  .name-app {\n    display: none; }\n  .slogan {\n    margin-top: 25px;\n    font-size: 250%; }\n  .author {\n    position: relative; }\n  .login-card button {\n    width: 100%; } }\n\n.login-card {\n  padding-top: 0;\n  padding: 20px 50px 30px 50px; }\n\n.login-card-header {\n  background: #176D81;\n  color: #FFFFFF;\n  margin-top: -25px;\n  padding: 15px 24px;\n  margin-left: -25px;\n  margin-right: -24px; }\n  .login-card-header .login-card-title {\n    margin-bottom: 0; }\n\n.login-card-content {\n  padding-top: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login-components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_login_service__ = __webpack_require__("../../../../../src/app/services/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_user__ = __webpack_require__("../../../../../src/app/classes/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Angular






var LoginComponent = (function () {
    function LoginComponent(router, LoginService, snackBar, slimLoadingBarService) {
        this.router = router;
        this.LoginService = LoginService;
        this.snackBar = snackBar;
        this.slimLoadingBarService = slimLoadingBarService;
        this.appLogo = '../../../assets/icon.png';
        this.user = new __WEBPACK_IMPORTED_MODULE_5__classes_user__["a" /* User */]();
        this.isLogged = false;
        this.login = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.setBackground(true);
    };
    LoginComponent.prototype.setBackground = function (image) {
        var body = document.getElementsByTagName('body')[0];
        body.style.background = image ? 'url(../assets/background.jpg)' : '';
        body.style.backgroundRepeat = 'repeat';
        body.style.backgroundSize = 'cover';
    };
    LoginComponent.prototype.doLogin = function () {
        var _this = this;
        this.login = true;
        this.startLoading();
        this.LoginService.login(this.user)
            .subscribe(function (logged) {
            _this.completeLoading();
            if (logged) {
                _this.doneLogin();
                _this.snackBar.dismiss();
            }
            else {
                _this.openSnackBar('Login Failed', true);
            }
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        }, function () { return _this.login = false; });
    };
    LoginComponent.prototype.startLoading = function () {
        this.slimLoadingBarService.start();
    };
    LoginComponent.prototype.completeLoading = function () {
        var _this = this;
        setTimeout(function () {
            _this.slimLoadingBarService.complete();
        });
    };
    LoginComponent.prototype.isLoggin = function () {
        return this.login;
    };
    LoginComponent.prototype.openSnackBar = function (message, error) {
        this.snackBar.open(message, null, {
            duration: 5000,
            extraClasses: !error ? ['snack-bar'] : ['snack-bar-error']
        });
    };
    LoginComponent.prototype.doneLogin = function () {
        this.setBackground(null);
        this.router.navigate(['/dashboard']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login-components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login-components/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_login_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MdSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/meeting-components/meeting/meeting.component.html":
/***/ (function(module, exports) {

module.exports = "<app-view-title titulo=\"{{tituloVista}}\" subtitulo=\"{{subtituloVista | capitalize}}\"></app-view-title>\r\n\r\n<md-grid-list cols=\"4\" rowHeight=\"280px\">\r\n  <md-grid-tile colspan=\"3\">\r\n    <md-card style=\"width: 95%; height: 95%;\">\r\n      <md-card-content style=\"padding: 0 5px;\">\r\n        <div>\r\n          <md-input-container style=\"width: 50%;\">\r\n            <input mdInput placeholder=\"Name\" [(ngModel)]=\"meeting['name']\" [disabled]=\"!isEditForm()\">\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div>\r\n          <md-input-container style=\"width: 100%;\">\r\n            <input mdInput maxlength=\"256\" placeholder=\"Description\" [(ngModel)]=\"meeting['description']\" [disabled]=\"!isEditForm()\">\r\n            <md-hint align=\"end\" *ngIf=\"isEditForm()\">{{meeting['description'] ? meeting['description'].length : 0}} / 256</md-hint>\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div style=\"margin-top: -8px;\">\r\n          <md-select placeholder=\"Meeting Manager\" style=\"width: 50%;\" [disabled]=\"!isEditForm()\"  [(ngModel)]=\"meeting['meetingManager']\">\r\n            <md-option *ngFor=\"let user of users\" [value]=\"user.value\">\r\n              {{ user.name }}\r\n            </md-option>\r\n          </md-select>\r\n        </div>\r\n\r\n        <div style=\"margin-top: 10px;\">\r\n          <md-select placeholder=\"Place\" style=\"width: 50%;\" [disabled]=\"!isEditForm()\" [(ngModel)]=\"meeting['place']\">\r\n            <md-option *ngFor=\"let place of places\" [value]=\"place\">\r\n              {{ place }}\r\n            </md-option>\r\n          </md-select>\r\n        </div>\r\n      </md-card-content>\r\n    </md-card>\r\n  </md-grid-tile>\r\n\r\n  <md-grid-tile colspan=\"1\">\r\n    <md-card style=\"width: 85%; height: 95%;\">\r\n      <md-card-content style=\"padding: 0 5px;\">\r\n        <div>\r\n          <md-form-field style=\"width: 100%;\">\r\n            <input mdInput [mdDatepicker]=\"initPicker\" placeholder=\"Init Date\" [(ngModel)]=\"meeting['initDate']\" [disabled]=\"!isEditForm()\">\r\n            <md-datepicker-toggle mdSuffix [for]=\"initPicker\"></md-datepicker-toggle>\r\n            <md-datepicker #initPicker></md-datepicker>\r\n          </md-form-field>\r\n        </div>\r\n\r\n        <div>\r\n          <md-input-container style=\"width: 100%;\">\r\n            <input mdInput placeholder=\"Init Time\" type=\"time\" [(ngModel)]=\"meeting['initTime']\" [disabled]=\"!isEditForm()\">\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div>\r\n          <md-form-field style=\"width: 100%;\">\r\n            <input mdInput [mdDatepicker]=\"finalPicker\" placeholder=\"Final Date\" [(ngModel)]=\"meeting['finalDate']\" [disabled]=\"!isEditForm()\">\r\n            <md-datepicker-toggle mdSuffix [for]=\"finalPicker\"></md-datepicker-toggle>\r\n            <md-datepicker #finalPicker></md-datepicker>\r\n          </md-form-field>\r\n        </div>\r\n\r\n        <div>\r\n          <md-input-container style=\"width: 100%;\">\r\n            <input mdInput placeholder=\"Final Time\" type=\"time\" [(ngModel)]=\"meeting['finalTime']\" [disabled]=\"!isEditForm()\">\r\n          </md-input-container>\r\n        </div>\r\n      </md-card-content>\r\n    </md-card>\r\n  </md-grid-tile>\r\n\r\n  <md-grid-tile colspan=\"2\">\r\n    <md-card style=\"width: 92%; padding: 0; height: 85%;\">\r\n      <md-card-header class=\"card-header-meeting\">\r\n        <div>\r\n          <md-card-title class=\"card-title-meeting\">\r\n            <span class=\"title-space\">Topics</span>\r\n            <a md-fab class=\"button-action\" *ngIf=\"isEditForm()\" (click)=\"addTopic()\" style=\"margin-top: -4px;\"><md-icon>add</md-icon></a>\r\n          </md-card-title>\r\n        </div>\r\n      </md-card-header>\r\n    </md-card>\r\n  </md-grid-tile>\r\n\r\n  <md-grid-tile colspan=\"2\">\r\n    <md-card style=\"width: 92%; padding: 0; height: 85%;\">\r\n      <md-card-header class=\"card-header-meeting\">\r\n        <div>\r\n          <md-card-title class=\"card-title-meeting\">\r\n            <span class=\"title-space\">Users</span>\r\n            <a md-fab class=\"button-action\" *ngIf=\"isEditForm()\" (click)=\"addUser()\" style=\"margin-top: -4px;\"><md-icon>add</md-icon></a>\r\n          </md-card-title>\r\n        </div>\r\n      </md-card-header>\r\n    </md-card>\r\n  </md-grid-tile>\r\n</md-grid-list>\r\n\r\n<md-grid-list cols=\"4\" rowHeight=\"300px\" style=\"margin-top: -15px;\">\r\n  <md-grid-tile colspan=\"4\">\r\n    <md-card style=\"width: 96%; height: 85%;\">\r\n      <md-card-header class=\"card-header-comments\">\r\n        <md-card-title class=\"card-title-comments\">\r\n          <span class=\"title-space\">Comments</span>\r\n        </md-card-title>\r\n      </md-card-header>\r\n      <md-card-content style=\"padding: 0 5px;\">\r\n        <div style=\"margin-bottom: 15px;\">\r\n          <div *ngFor=\"let meeting of meeting['comments']\">\r\n            <div>\r\n              {{meeting.description}}\r\n            </div>\r\n            <div align=\"end\" style=\"font-style: italic;\">\r\n              {{meeting.date}}\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"!meeting['comments'] || !meeting['comments'].length\" style=\"font-style: italic;\">\r\n            No comments\r\n          </div>\r\n        </div>\r\n\r\n        <form style=\"border-top: 1px solid #ddd;\">\r\n          <div style=\"margin-top: 15px\">\r\n            <md-input-container style=\"width: 100%;\">\r\n              <input mdInput maxlength=\"256\" placeholder=\"Comment\" [(ngModel)]=\"meeting['comment']\" [disabled]=\"!isEditForm()\" id=\"comment\" name=\"comment\">\r\n              <md-hint align=\"end\" *ngIf=\"isEditForm()\">{{meeting['comment'] ? meeting['comment'].length : 0}} / 500</md-hint>\r\n            </md-input-container>\r\n          </div>\r\n          <div align=\"end\" style=\"margin: 15px 0px;\">\r\n            <button type=\"submit\" md-raised-button (click)=\"addComment()\">Accept</button>\r\n          </div>\r\n        </form>\r\n      </md-card-content>\r\n    </md-card>\r\n  </md-grid-tile>\r\n</md-grid-list>\r\n\r\n\r\n<div *ngIf=\"this.action !== 'create'\" style=\"padding-left: 15px;\">\r\n  <div class=\"date-info\">\r\n    <div class=\"date-title\">Creation Date</div>\r\n    <div class=\"date-content\">{{meeting['creationDateString']}}</div>\r\n  </div>\r\n  <div class=\"date-info\">\r\n    <div class=\"date-title\">Last Modification Date</div>\r\n    <div class=\"date-content\">{{meeting['modificationDateString']}}</div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"buttons-group\">\r\n  <a md-fab class=\"deleteButton\" *ngIf=\"this.action !== 'create'\">\r\n    <delete-confirmation type=\"meeting\" name=\"{{meeting.name}}\" (actionYes)=\"deleteMeeting(meeting._id)\" (actionNo)=\"cancelDeleteMeeting()\" styleClass=\"delete-confirmation-circle\"></delete-confirmation>\r\n  </a>\r\n  <a md-fab class=\"addButton\" (click)=\"saveMeeting()\"><md-icon>{{isEditForm() ? 'save' : 'edit'}}</md-icon></a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/meeting-components/meeting/meeting.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../angular-calendar/dist/css/angular-calendar.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbutton[md-raised-button] {\n  background: #0D3446 !important;\n  color: #FFFFFF !important; }\n  button[md-raised-button][disabled] {\n    background: #373a3c !important; }\n\n.button-action {\n  background: #0D3446 !important;\n  width: 30px !important;\n  height: 30px !important; }\n  .button-action span {\n    line-height: 0 !important; }\n  .button-action label {\n    cursor: pointer;\n    height: 25px;\n    margin: 0; }\n    .button-action label .icon-file {\n      line-height: 0;\n      font-size: 17px; }\n  .button-action md-icon {\n    line-height: 0;\n    font-size: 20px; }\n\n.buttons-group {\n  position: -webkit-sticky;\n  position: sticky;\n  text-align: right;\n  width: 100%;\n  left: 0;\n  bottom: 6px;\n  right: 58px; }\n  .buttons-group > .addButton {\n    background: #0D3446 !important;\n    color: #FFFFFF !important; }\n  .buttons-group > .deleteButton {\n    background: #D21A6B !important;\n    color: #FFFFFF !important;\n    width: 35px;\n    height: 35px;\n    font-size: 11px;\n    right: 63px;\n    bottom: 3px;\n    position: absolute; }\n\n.card {\n  padding: 0;\n  border: 0px; }\n\n.card-header {\n  position: relative;\n  padding: 0;\n  border-bottom-width: 0px;\n  height: 120px; }\n\n.card-text {\n  padding: 24px 0 0 24px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 auto;\n          flex: 1 auto; }\n  .card-text .card-icons {\n    color: #0D3446; }\n\n.card-actions {\n  width: 65px;\n  background: #D8DFE2;\n  text-align: center; }\n  .card-actions > button {\n    color: #0D3446; }\n\nmd-card-title {\n  font-size: 20px !important; }\n\nmd-card-subtitle {\n  margin-bottom: 0 !important; }\n\n.header-image {\n  background-size: cover;\n  height: 120px;\n  width: 120px;\n  border-radius: 0; }\n\n.card-header-comments div {\n  width: 100%;\n  margin-left: 4px; }\n\n.card-title-comments {\n  font-size: 25px; }\n\n.litle-card .card-header {\n  height: 45px; }\n\n.litle-card .card-text {\n  padding: 7px 0 0 24px; }\n\n.litle-card .card-actions {\n  width: 140px; }\n\n.litle-card md-card-subtitle md-icon {\n  font-size: 18px; }\n\n.litle-card md-card-title,\n.litle-card md-card-subtitle {\n  display: inline-block; }\n\n@media (max-width: 600px) {\n  md-grid-list {\n    height: auto !important; }\n  md-grid-tile {\n    display: block !important;\n    position: relative !important;\n    top: auto !important;\n    left: 0 !important;\n    width: 100% !important;\n    margin-bottom: 15px !important; }\n  md-card {\n    margin-left: 0 !important;\n    width: 100% !important;\n    height: 95% !important;\n    overflow: hidden; }\n  md-input-container,\n  md-select {\n    width: 100% !important; } }\n\n.container {\n  margin-left: 0px;\n  margin-right: 0px;\n  width: 100%; }\n\n.not-found-info {\n  font-size: 30px;\n  text-align: center; }\n\n::-webkit-scrollbar {\n  width: 7px; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  border-radius: none; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: none;\n  background: #0D3446; }\n\n.snack-bar {\n  background: #0D3446 !important; }\n\n.snack-bar-error {\n  background: #D21A6B !important; }\n\nbutton:focus,\na:focus {\n  outline: none; }\n\ninput:disabled {\n  color: #000000 !important; }\n\n.header-image {\n  position: absolute;\n  height: 75px;\n  width: 75px;\n  bottom: 10px;\n  left: 10px;\n  border-radius: 50%;\n  border: 1px solid #ddd; }\n\n.card-header-meeting {\n  padding: 15px; }\n  .card-header-meeting div {\n    width: 100%;\n    margin-left: -8px; }\n\n.card-title-meeting {\n  font-size: 25px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .card-title-meeting > .title-space {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 auto;\n            flex: 1 auto; }\n\n.date-info > div {\n  font-size: 14px;\n  display: inline-block; }\n  .date-info > div.date-title {\n    width: 200px; }\n  .date-info > div.date-content {\n    width: 150px;\n    text-align: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/meeting-components/meeting/meeting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_meeting__ = __webpack_require__("../../../../../src/app/classes/meeting.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_meetings_meetings_service__ = __webpack_require__("../../../../../src/app/services/meetings/meetings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__enums_meetingPlace_enum__ = __webpack_require__("../../../../../src/app/enums/meetingPlace.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MeetingComponent = (function () {
    function MeetingComponent(MeetingsService, router, route, slimLoadingBarService, snackBar) {
        this.MeetingsService = MeetingsService;
        this.router = router;
        this.route = route;
        this.slimLoadingBarService = slimLoadingBarService;
        this.snackBar = snackBar;
        this.defaultPhoto = '../../../assets/default_image.png';
        this.tituloVista = 'Meeting';
        this.meeting = new __WEBPACK_IMPORTED_MODULE_3__classes_meeting__["a" /* Meeting */]();
        this.places = [];
    }
    MeetingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.startLoading();
        this.getPlaces();
        this.route.params.subscribe(function (params) {
            _this.subtituloVista = _this.action = params['action'];
            var kActions = (_a = {},
                _a['create'] = function () { return _this.completeLoading(); },
                _a['view'] = function () { return _this.getMeeting(params['id']); },
                _a['edit'] = function () { return _this.getMeeting(params['id']); },
                _a);
            kActions[_this.action]();
            var _a;
        });
    };
    MeetingComponent.prototype.getPlaces = function () {
        var keys = Object.keys(__WEBPACK_IMPORTED_MODULE_6__enums_meetingPlace_enum__["a" /* meetingPlace */]);
        this.places = keys.slice(keys.length / 2);
    };
    MeetingComponent.prototype.getMeeting = function (meetingID) {
        var _this = this;
        this.MeetingsService.get(meetingID)
            .subscribe(function (meeting) {
            console.log(meeting);
            _this.meeting = meeting;
            _this.meeting.creationDate = _this.utcToDate(_this.meeting.creationDate);
            _this.meeting.initDate = _this.utcToDate(_this.meeting.initDate);
            _this.meeting.finalDate = _this.utcToDate(_this.meeting.finalDate);
            _this.meeting.modificationDate = _this.utcToDate(_this.meeting.modificationDate);
            _this.meeting['creationDateString'] = _this.meeting.creationDate ? _this.meeting.creationDate.toLocaleString() : '-';
            _this.meeting['initDateString'] = _this.meeting.finalDate ? _this.meeting.finalDate.toLocaleString() : '-';
            _this.meeting['finalDateString'] = _this.meeting.finalDate ? _this.meeting.finalDate.toLocaleString() : '-';
            _this.meeting['modificationDateString'] = _this.meeting.modificationDate ? _this.meeting.modificationDate.toLocaleString() : '-';
            _this.completeLoading();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    MeetingComponent.prototype.utcToDate = function (utc) {
        return utc ? new Date(Date.parse(utc)) : null;
    };
    ;
    MeetingComponent.prototype.isEditForm = function () {
        return this.action !== 'view';
    };
    MeetingComponent.prototype.startLoading = function () {
        this.slimLoadingBarService.start();
    };
    MeetingComponent.prototype.completeLoading = function () {
        var _this = this;
        setTimeout(function () {
            _this.slimLoadingBarService.complete();
        });
    };
    MeetingComponent.prototype.openSnackBar = function (message, error) {
        this.snackBar.open(message, null, {
            duration: 5000,
            extraClasses: !error ? ['snack-bar'] : ['snack-bar-error']
        });
    };
    MeetingComponent.prototype.upload = function (res) {
        this.readImage(res.target);
    };
    MeetingComponent.prototype.readImage = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.meeting.meetingPhoto64 = myReader.result;
        };
        myReader.readAsDataURL(file);
    };
    MeetingComponent.prototype.addTask = function () {
        this.openSnackBar('Operation not available', null);
    };
    MeetingComponent.prototype.addTopic = function () {
        this.openSnackBar('Operation not available', null);
    };
    MeetingComponent.prototype.addComment = function () {
        this.openSnackBar('Operation not available', null);
    };
    MeetingComponent.prototype.saveMeeting = function () {
        var _this = this;
        var kSave = (_a = {},
            _a['create'] = function () { return _this.createMeeting(); },
            _a['edit'] = function () { return _this.updateMeeting(); },
            _a['view'] = function () { return _this.editMeeting(); },
            _a);
        kSave[this.action]();
        var _a;
    };
    MeetingComponent.prototype.createMeeting = function () {
        var _this = this;
        this.startLoading();
        this.meeting.creationDate = new Date();
        this.MeetingsService.create(this.meeting)
            .subscribe(function (result) {
            _this.openSnackBar('Meeting «' + result.name + '» created correctly', null);
            _this.completeLoading();
            _this.back();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    MeetingComponent.prototype.updateMeeting = function () {
        var _this = this;
        this.startLoading();
        this.meeting.meetingPhoto = {};
        this.meeting.modificationDate = new Date();
        this.MeetingsService.update(this.meeting)
            .subscribe(function (result) {
            _this.openSnackBar('Meeting «' + result.name + '» updated correctly', null);
            _this.completeLoading();
            _this.viewMeeting();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    MeetingComponent.prototype.editMeeting = function () {
        this.router.navigate(['/meeting', 'edit', this.meeting._id]);
    };
    MeetingComponent.prototype.viewMeeting = function () {
        this.router.navigate(['/meeting', 'view', this.meeting._id]);
    };
    MeetingComponent.prototype.deleteMeeting = function (id) {
        var _this = this;
        this.startLoading();
        this.MeetingsService.delete(id)
            .subscribe(function (result) {
            _this.openSnackBar('Meeting «' + result.name + '» deleted correctly', null);
            _this.completeLoading();
            _this.back();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    MeetingComponent.prototype.cancelDeleteMeeting = function () {
        this.openSnackBar('Cancelled operation', null);
    };
    MeetingComponent.prototype.back = function () {
        this.router.navigate(['/meetings']);
    };
    return MeetingComponent;
}());
MeetingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-meeting',
        template: __webpack_require__("../../../../../src/app/components/meeting-components/meeting/meeting.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/meeting-components/meeting/meeting.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_meetings_meetings_service__["a" /* MeetingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_meetings_meetings_service__["a" /* MeetingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MdSnackBar */]) === "function" && _e || Object])
], MeetingComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=meeting.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/meeting-components/meetings/meetings.component.html":
/***/ (function(module, exports) {

module.exports = "<app-view-title titulo=\"{{tituloVista}}\"></app-view-title>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row not-found-info\" *ngIf=\"!meetings.length\">\r\n    {{infoMessage}}\r\n  </div>\r\n\r\n  <div class=\"row\" *ngFor=\"let group of meetingsGroup | objectNgFor\">\r\n    <h5 class=\"title-group-meeting\">{{group.key}}</h5>\r\n    <div *ngFor=\"let meeting of group.value\">\r\n      <md-card class=\"card litle-card meeting-card\">\r\n        <md-card-header class=\"card-header\">\r\n          <span class=\"card-text\" style=\"padding-left: 0\">\r\n            <md-card-title>{{meeting.name}} | <span class=\"small\">{{meeting.place}}</span></md-card-title>\r\n            <md-card-subtitle>\r\n                {{meeting.initDateString}} {{meeting.initTime}} - {{meeting.finalDateString}} {{meeting.finalTime}}\r\n            </md-card-subtitle>\r\n          </span>\r\n          <span class=\"card-actions\">\r\n            <button md-icon-button (click)=\"actionMeeting('view', meeting)\">\r\n              <md-icon>search</md-icon>\r\n            </button>\r\n            <button md-icon-button (click)=\"actionMeeting('edit', meeting)\">\r\n              <md-icon>edit</md-icon>\r\n            </button>\r\n            <delete-confirmation type=\"meeting\" name=\"{{meeting.name}}\" (actionYes)=\"deleteMeeting(meeting._id)\" (actionNo)=\"cancelDeleteMeeting()\"></delete-confirmation>\r\n          </span>\r\n        </md-card-header>\r\n      </md-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"buttons-group\">\r\n  <a md-fab class=\"addButton\" (click)=\"actionMeeting('create')\"><md-icon>add</md-icon></a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/meeting-components/meetings/meetings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../angular-calendar/dist/css/angular-calendar.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbutton[md-raised-button] {\n  background: #0D3446 !important;\n  color: #FFFFFF !important; }\n  button[md-raised-button][disabled] {\n    background: #373a3c !important; }\n\n.button-action {\n  background: #0D3446 !important;\n  width: 30px !important;\n  height: 30px !important; }\n  .button-action span {\n    line-height: 0 !important; }\n  .button-action label {\n    cursor: pointer;\n    height: 25px;\n    margin: 0; }\n    .button-action label .icon-file {\n      line-height: 0;\n      font-size: 17px; }\n  .button-action md-icon {\n    line-height: 0;\n    font-size: 20px; }\n\n.buttons-group {\n  position: -webkit-sticky;\n  position: sticky;\n  text-align: right;\n  width: 100%;\n  left: 0;\n  bottom: 6px;\n  right: 58px; }\n  .buttons-group > .addButton {\n    background: #0D3446 !important;\n    color: #FFFFFF !important; }\n  .buttons-group > .deleteButton {\n    background: #D21A6B !important;\n    color: #FFFFFF !important;\n    width: 35px;\n    height: 35px;\n    font-size: 11px;\n    right: 63px;\n    bottom: 3px;\n    position: absolute; }\n\n.card {\n  padding: 0;\n  border: 0px; }\n\n.card-header {\n  position: relative;\n  padding: 0;\n  border-bottom-width: 0px;\n  height: 120px; }\n\n.card-text {\n  padding: 24px 0 0 24px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 auto;\n          flex: 1 auto; }\n  .card-text .card-icons {\n    color: #0D3446; }\n\n.card-actions {\n  width: 65px;\n  background: #D8DFE2;\n  text-align: center; }\n  .card-actions > button {\n    color: #0D3446; }\n\nmd-card-title {\n  font-size: 20px !important; }\n\nmd-card-subtitle {\n  margin-bottom: 0 !important; }\n\n.header-image {\n  background-size: cover;\n  height: 120px;\n  width: 120px;\n  border-radius: 0; }\n\n.card-header-comments div {\n  width: 100%;\n  margin-left: 4px; }\n\n.card-title-comments {\n  font-size: 25px; }\n\n.litle-card .card-header {\n  height: 45px; }\n\n.litle-card .card-text {\n  padding: 7px 0 0 24px; }\n\n.litle-card .card-actions {\n  width: 140px; }\n\n.litle-card md-card-subtitle md-icon {\n  font-size: 18px; }\n\n.litle-card md-card-title,\n.litle-card md-card-subtitle {\n  display: inline-block; }\n\n@media (max-width: 600px) {\n  md-grid-list {\n    height: auto !important; }\n  md-grid-tile {\n    display: block !important;\n    position: relative !important;\n    top: auto !important;\n    left: 0 !important;\n    width: 100% !important;\n    margin-bottom: 15px !important; }\n  md-card {\n    margin-left: 0 !important;\n    width: 100% !important;\n    height: 95% !important;\n    overflow: hidden; }\n  md-input-container,\n  md-select {\n    width: 100% !important; } }\n\n.container {\n  margin-left: 0px;\n  margin-right: 0px;\n  width: 100%; }\n\n.not-found-info {\n  font-size: 30px;\n  text-align: center; }\n\n::-webkit-scrollbar {\n  width: 7px; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  border-radius: none; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: none;\n  background: #0D3446; }\n\n.snack-bar {\n  background: #0D3446 !important; }\n\n.snack-bar-error {\n  background: #D21A6B !important; }\n\nbutton:focus,\na:focus {\n  outline: none; }\n\ninput:disabled {\n  color: #000000 !important; }\n\n.meeting-card .card-header .card-text {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .meeting-card .card-header .card-text > md-card-title {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 auto;\n            flex: 1 auto; }\n  .meeting-card .card-header .card-text > md-card-subtitle {\n    padding-top: 12px;\n    padding-right: 12px; }\n\n.title-group-meeting {\n  margin-top: 10px; }\n\n@media (max-width: 600px) {\n  md-card-header {\n    display: block !important;\n    height: 160px !important; }\n  .card-text {\n    margin-top: 5px !important;\n    padding-top: 0px !important;\n    margin-top: 0px !important; }\n  .task-description {\n    display: block !important; }\n  md-card-title {\n    top: 10px !important;\n    margin-top: 5px !important;\n    margin-left: 10px !important;\n    position: absolute !important; }\n    md-card-title > span {\n      display: block !important;\n      margin-top: 5px !important; }\n  md-card-subtitle {\n    margin-left: 10px !important;\n    top: 34px !important;\n    position: relative !important;\n    margin-top: 35px !important; }\n  .card-actions {\n    width: 100% !important;\n    position: absolute !important;\n    text-align: center !important;\n    left: 0 !important;\n    bottom: 0 !important; }\n  .card-icons {\n    margin-top: 40px !important; }\n  .icon-priority {\n    height: 100%; }\n  .buttons-group {\n    z-index: 99; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/meeting-components/meetings/meetings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_meetings_meetings_service__ = __webpack_require__("../../../../../src/app/services/meetings/meetings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enums_monthNames_enum__ = __webpack_require__("../../../../../src/app/enums/monthNames.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var notFound = 'Not found meetings';
var getting = 'Getting meetings';
var MeetingsComponent = (function () {
    function MeetingsComponent(MeetingsService, router, slimLoadingBarService, snackBar) {
        this.MeetingsService = MeetingsService;
        this.router = router;
        this.slimLoadingBarService = slimLoadingBarService;
        this.snackBar = snackBar;
        this.defaultImage = '../../../assets/default_meeting.png';
        this.tituloVista = 'Meetings';
        this.meetings = [];
        this.monthNames = __WEBPACK_IMPORTED_MODULE_5__enums_monthNames_enum__["a" /* MonthNames */];
        this.meetingsGroup = [];
    }
    MeetingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.infoMessage = getting;
        this.startLoading();
        this.MeetingsService.getAll()
            .subscribe(function (meetings) {
            _this.infoMessage = notFound;
            _this.meetings = __WEBPACK_IMPORTED_MODULE_6_underscore__["sortBy"](meetings, 'initDate');
            __WEBPACK_IMPORTED_MODULE_6_underscore__["each"](_this.meetings, function (meeting) {
                meeting.initDate = _this.utcToDate(meeting.initDate);
                meeting['initDateString'] = meeting.initDate ? meeting.initDate.toLocaleDateString() : '-';
                meeting.finalDate = _this.utcToDate(meeting.finalDate);
                meeting['finalDateString'] = meeting.finalDate ? meeting.finalDate.toLocaleDateString() : '-';
            });
            // Group by month and year
            _this.meetingsGroup = __WEBPACK_IMPORTED_MODULE_6_underscore__["groupBy"](_this.meetings, function (meeting) {
                return [_this.monthNames[meeting.initDate ? meeting.initDate.getMonth() : 0], meeting.initDate ? meeting.initDate.getFullYear() : 0].join(' ');
            });
            // Finish loading bar
            _this.completeLoading();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    MeetingsComponent.prototype.utcToDate = function (utc) {
        return utc ? new Date(Date.parse(utc)) : null;
    };
    ;
    MeetingsComponent.prototype.actionMeeting = function (action, meeting) {
        var params = [
            '/meeting',
            action
        ];
        if (action !== 'create') {
            params = params.concat([meeting._id]);
        }
        this.router.navigate(params);
    };
    MeetingsComponent.prototype.startLoading = function () {
        this.slimLoadingBarService.start();
    };
    MeetingsComponent.prototype.completeLoading = function () {
        var _this = this;
        setTimeout(function () {
            _this.slimLoadingBarService.complete();
        });
    };
    MeetingsComponent.prototype.openSnackBar = function (message, error) {
        this.snackBar.open(message, null, {
            duration: 5000,
            extraClasses: !error ? ['snack-bar'] : ['snack-bar-error']
        });
    };
    MeetingsComponent.prototype.deleteMeeting = function (id) {
        var _this = this;
        this.startLoading();
        this.MeetingsService.delete(id)
            .subscribe(function (result) {
            _this.meetings = __WEBPACK_IMPORTED_MODULE_6_underscore__["without"](_this.meetings, __WEBPACK_IMPORTED_MODULE_6_underscore__["findWhere"](_this.meetings, { _id: result._id }));
            _this.openSnackBar('Meeting «' + result.name + '» deleted correctly', null);
            _this.completeLoading();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    MeetingsComponent.prototype.cancelDeleteMeeting = function () {
        this.openSnackBar('Cancelled operation', null);
    };
    return MeetingsComponent;
}());
MeetingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-meetings',
        template: __webpack_require__("../../../../../src/app/components/meeting-components/meetings/meetings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/meeting-components/meetings/meetings.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_meetings_meetings_service__["a" /* MeetingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_meetings_meetings_service__["a" /* MeetingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MdSnackBar */]) === "function" && _d || Object])
], MeetingsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=meetings.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/messenger-components/messenger/messenger.component.html":
/***/ (function(module, exports) {

module.exports = "<app-view-title titulo=\"{{tituloVista}}\"></app-view-title>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/messenger-components/messenger/messenger.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/messenger-components/messenger/messenger.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessengerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessengerComponent = (function () {
    function MessengerComponent() {
    }
    MessengerComponent.prototype.ngOnInit = function () {
        this.tituloVista = 'Messenger';
    };
    return MessengerComponent;
}());
MessengerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-messenger',
        template: __webpack_require__("../../../../../src/app/components/messenger-components/messenger/messenger.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/messenger-components/messenger/messenger.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MessengerComponent);

//# sourceMappingURL=messenger.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile-components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-view-title titulo=\"{{tituloVista}}\"></app-view-title>\r\n\r\n<md-grid-list cols=\"5\" rowHeight=\"350px\">\r\n\r\n  <md-grid-tile colspan=\"1\">\r\n    <md-card class=\"grid-card grid-card-left\">\r\n      <md-card-title class=\"card-title-dashboard\">\r\n        {{user ? (user['username'] + ' [' + user['rank'] + ']') : 'User [Rank]' }}\r\n        <img src=\"{{user && user['userPhoto64'] ? user['userPhoto64'] : defaultPhoto}}\" class=\"user-image\" alt=\"\">\r\n      </md-card-title>\r\n      <md-card-content>\r\n        <div *ngIf=\"user['name']\">\r\n          <p class=\"user-info\">\r\n            <md-input-container>\r\n              <input mdInput placeholder=\"Name\" [(ngModel)]=\"user['name'] + ' ' + user['lastName']\" [disabled]=\"true\">\r\n            </md-input-container>\r\n            <md-input-container>\r\n              <input mdInput placeholder=\"Email\" [(ngModel)]=\"user['email']\" [disabled]=\"true\">\r\n            </md-input-container>\r\n            <md-input-container>\r\n              <input mdInput placeholder=\"Phone\" [(ngModel)]=\"user['phone']\" [disabled]=\"true\">\r\n            </md-input-container>\r\n          </p>\r\n          <p>\r\n            <button md-raised-button color=\"primary\">Change password</button>\r\n          </p>\r\n        </div>\r\n\r\n      </md-card-content>\r\n    </md-card>\r\n  </md-grid-tile>\r\n\r\n  <md-grid-tile colspan=\"2\">\r\n    <md-card class=\"grid-card grid-card-left\">\r\n      <md-card-title class=\"card-title-dashboard\">\r\n        Tasks\r\n      </md-card-title>\r\n\r\n      <md-card-content>\r\n        <div class=\"table-dashboard\">\r\n          <md-table #table [dataSource]=\"dataSourceTasks\">\r\n            <ng-container mdColumnDef=\"name\">\r\n              <md-header-cell *mdHeaderCellDef> Name </md-header-cell>\r\n              <md-cell *mdCellDef=\"let element\"> {{element.name}} </md-cell>\r\n            </ng-container>\r\n\r\n            <ng-container mdColumnDef=\"initDate\">\r\n              <md-header-cell *mdHeaderCellDef> initDate </md-header-cell>\r\n              <md-cell *mdCellDef=\"let element\"> {{element.initDate}} </md-cell>\r\n            </ng-container>\r\n\r\n            <ng-container mdColumnDef=\"finalDate\">\r\n              <md-header-cell *mdHeaderCellDef> finalDate </md-header-cell>\r\n              <md-cell *mdCellDef=\"let element\"> {{element.finalDate}} </md-cell>\r\n            </ng-container>\r\n\r\n            <md-header-row *mdHeaderRowDef=\"displayedColumnsTasks\"></md-header-row>\r\n            <md-row *mdRowDef=\"let row; columns: displayedColumnsTasks;\"></md-row>\r\n          </md-table>\r\n        </div>\r\n\r\n      </md-card-content>\r\n    </md-card>\r\n  </md-grid-tile>\r\n\r\n  <md-grid-tile colspan=\"2\">\r\n    <md-card class=\"grid-card grid-card-left\">\r\n      <md-card-title class=\"card-title-dashboard\">\r\n        Meetings\r\n      </md-card-title>\r\n      <md-card-content>\r\n        <div class=\"table-dashboard\">\r\n          <md-table #table [dataSource]=\"dataSourceMeetings\">\r\n            <ng-container mdColumnDef=\"name\">\r\n              <md-header-cell style=\"flex: 100px;\" *mdHeaderCellDef> Name </md-header-cell>\r\n              <md-cell style=\"flex: 100px;\" *mdCellDef=\"let element\"> {{element.name}} </md-cell>\r\n            </ng-container>\r\n\r\n            <ng-container mdColumnDef=\"initDate\">\r\n              <md-header-cell *mdHeaderCellDef> Init Date </md-header-cell>\r\n              <md-cell *mdCellDef=\"let element\"> {{element.initDate | date: 'dd/MM/yyyy'}} </md-cell>\r\n            </ng-container>\r\n\r\n            <md-header-row *mdHeaderRowDef=\"displayedColumnsMeetings\"></md-header-row>\r\n            <md-row *mdRowDef=\"let row; columns: displayedColumnsMeetings;\"></md-row>\r\n          </md-table>\r\n        </div>\r\n      </md-card-content>\r\n    </md-card>\r\n  </md-grid-tile>\r\n\r\n</md-grid-list>\r\n\r\n<md-grid-list cols=\"4\">\r\n  <md-grid-tile colspan=\"2\">\r\n    <md-card class=\"grid-card grid-card-left\">\r\n      <md-card-title class=\"card-title-dashboard\">\r\n        Teams\r\n      </md-card-title>\r\n      <md-card-content>\r\n        <div class=\"table-dashboard\">\r\n          <md-table #table [dataSource]=\"dataSourceTeams\">\r\n            <ng-container mdColumnDef=\"name\">\r\n              <md-header-cell *mdHeaderCellDef> Name </md-header-cell>\r\n              <md-cell *mdCellDef=\"let element\"> {{element.name}} </md-cell>\r\n            </ng-container>\r\n\r\n            <ng-container mdColumnDef=\"initDate\">\r\n              <md-header-cell *mdHeaderCellDef></md-header-cell>\r\n              <md-cell *mdCellDef=\"let element\">\r\n                <p class=\"card-icons\">\r\n                  <md-icon>group</md-icon> <span>{{element.users.length}}</span>\r\n                  <md-icon>folder</md-icon> <span>{{element.projects.length}}</span>\r\n                </p>\r\n              </md-cell>\r\n            </ng-container>\r\n\r\n            <md-header-row *mdHeaderRowDef=\"displayedColumnsTeams\"></md-header-row>\r\n            <md-row *mdRowDef=\"let row; columns: displayedColumnsTeams;\"></md-row>\r\n          </md-table>\r\n        </div>\r\n      </md-card-content>\r\n    </md-card>\r\n  </md-grid-tile>\r\n\r\n  <md-grid-tile colspan=\"2\">\r\n    <md-card class=\"grid-card grid-card-left\">\r\n      <md-card-title class=\"card-title-dashboard\">\r\n        Projects\r\n      </md-card-title>\r\n      <md-card-content>\r\n        <md-table #table [dataSource]=\"dataSourceProjects\">\r\n          <ng-container mdColumnDef=\"name\">\r\n            <md-header-cell *mdHeaderCellDef> Name </md-header-cell>\r\n            <md-cell *mdCellDef=\"let element\"> {{element.name}} </md-cell>\r\n          </ng-container>\r\n\r\n          <ng-container mdColumnDef=\"description\">\r\n            <md-header-cell style=\"flex: 150px;\" *mdHeaderCellDef> Description </md-header-cell>\r\n            <md-cell style=\"flex: 150px;\" *mdCellDef=\"let element\"> {{element.description}} </md-cell>\r\n          </ng-container>\r\n\r\n          <ng-container mdColumnDef=\"progress\">\r\n            <md-header-cell *mdHeaderCellDef> Progress </md-header-cell>\r\n            <md-cell *mdCellDef=\"let element\"> {{element.progress}} </md-cell>\r\n          </ng-container>\r\n\r\n          <md-header-row *mdHeaderRowDef=\"displayedColumnsProjects\"></md-header-row>\r\n          <md-row *mdRowDef=\"let row; columns: displayedColumnsProjects;\"></md-row>\r\n        </md-table>\r\n      </md-card-content>\r\n    </md-card>\r\n  </md-grid-tile>\r\n</md-grid-list>"

/***/ }),

/***/ "../../../../../src/app/components/profile-components/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid-card {\n  height: 90%;\n  width: 100%; }\n\n.grid-card.grid-card-left {\n  margin-left: 15px; }\n\n.card-header-notification div {\n  width: 100%; }\n\n.card-title-notification {\n  margin-bottom: 0px;\n  font-size: 25px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .card-title-notification > .title-space {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 auto;\n            flex: 1 auto; }\n\n.notifications-list {\n  border-bottom: 1px solid #ddd;\n  padding: 15px 5px; }\n\n.card-title-dashboard {\n  margin-bottom: 0px; }\n\n.table-dashboard md-table {\n  max-height: 200px;\n  overflow: hidden;\n  overflow-y: auto; }\n\n.content-notifications {\n  max-height: 360px;\n  overflow: hidden;\n  overflow-y: auto; }\n\n.card-icons {\n  margin-top: 0px;\n  margin-bottom: 0px; }\n\n.user-image {\n  width: 70px;\n  height: 70px;\n  float: right; }\n\n.user-info {\n  margin-top: 35px;\n  margin-bottom: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile-components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* unused harmony export ExtentedDataSourceProject */
/* unused harmony export ExtentedDataSourceMeeting */
/* unused harmony export ExtentedDataSourceTeam */
/* unused harmony export ExtentedDataSourceTask */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__ = __webpack_require__("../../../cdk/@angular/cdk/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_combineLatest__ = __webpack_require__("../../../../rxjs/add/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_profile_profile_service__ = __webpack_require__("../../../../../src/app/services/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_login_login_service__ = __webpack_require__("../../../../../src/app/services/login/login.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//Services


var ProfileComponent = (function () {
    function ProfileComponent(snackBar, slimLoadingBarService, ProfileService, LoginService) {
        this.snackBar = snackBar;
        this.slimLoadingBarService = slimLoadingBarService;
        this.ProfileService = ProfileService;
        this.LoginService = LoginService;
        this.defaultPhoto = '../../../assets/default_image.png';
        this.displayedColumnsProjects = ['name', 'description', 'progress'];
        this.displayedColumnsMeetings = ['name', 'initDate'];
        this.displayedColumnsTeams = ['name', 'initDate'];
        this.displayedColumnsTasks = ['name', 'initDate', 'finalDate'];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tituloVista = 'Profile';
        this.user = this.LoginService.getLoggedStorage();
        this.startLoading();
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].combineLatest(this.ProfileService.getUserMeetings(this.user._id), this.ProfileService.getUserTasks(this.user._id), this.ProfileService.getUserTeams(this.user._id), this.ProfileService.getUser(this.user._id)).subscribe(function (data) {
            console.log(data[0]);
            console.log(data[1]);
            console.log(data[2]);
            _this.getMeetings(data[0]);
            _this.getTasks(data[1]);
            _this.getTeams(data[2]);
            _this.getUser(data[3]);
            // this.getProjects(data[4]);
            _this.completeLoading();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    ProfileComponent.prototype.getUser = function (user) {
        this.user = user;
        console.log(user);
    };
    ProfileComponent.prototype.getTeams = function (teams) {
        this.dataSourceTeams = new ExtentedDataSourceTeam();
        this.dataSourceTeams.data = teams;
    };
    ProfileComponent.prototype.getProjects = function (teams) {
        this.dataSourceProjects = new ExtentedDataSourceTeam();
        this.dataSourceProjects.data = teams;
    };
    ProfileComponent.prototype.getMeetings = function (meetings) {
        this.dataSourceMeetings = new ExtentedDataSourceTeam();
        this.dataSourceMeetings.data = meetings;
    };
    ProfileComponent.prototype.getTasks = function (tasks) {
        this.dataSourceTasks = new ExtentedDataSourceTeam();
        this.dataSourceTasks.data = tasks;
    };
    ProfileComponent.prototype.startLoading = function () {
        this.slimLoadingBarService.start();
    };
    ProfileComponent.prototype.completeLoading = function () {
        var _this = this;
        setTimeout(function () {
            _this.slimLoadingBarService.complete();
        });
    };
    ProfileComponent.prototype.openSnackBar = function (message, error) {
        this.snackBar.open(message, null, {
            duration: 5000,
            extraClasses: !error ? ['snack-bar'] : ['snack-bar-error']
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile-components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile-components/profile/profile.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MdSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__services_profile_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_profile_profile_service__["a" /* ProfileService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__services_login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_login_login_service__["a" /* LoginService */]) === "function" && _d || Object])
], ProfileComponent);

var ExtentedDataSourceProject = (function (_super) {
    __extends(ExtentedDataSourceProject, _super);
    function ExtentedDataSourceProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtentedDataSourceProject.prototype.connect = function () {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.data);
    };
    ExtentedDataSourceProject.prototype.disconnect = function () { };
    return ExtentedDataSourceProject;
}(__WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__["a" /* DataSource */]));

var ExtentedDataSourceMeeting = (function (_super) {
    __extends(ExtentedDataSourceMeeting, _super);
    function ExtentedDataSourceMeeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtentedDataSourceMeeting.prototype.connect = function () {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.data);
    };
    ExtentedDataSourceMeeting.prototype.disconnect = function () { };
    return ExtentedDataSourceMeeting;
}(__WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__["a" /* DataSource */]));

var ExtentedDataSourceTeam = (function (_super) {
    __extends(ExtentedDataSourceTeam, _super);
    function ExtentedDataSourceTeam() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtentedDataSourceTeam.prototype.connect = function () {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.data);
    };
    ExtentedDataSourceTeam.prototype.disconnect = function () { };
    return ExtentedDataSourceTeam;
}(__WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__["a" /* DataSource */]));

var ExtentedDataSourceTask = (function (_super) {
    __extends(ExtentedDataSourceTask, _super);
    function ExtentedDataSourceTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtentedDataSourceTask.prototype.connect = function () {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.data);
    };
    ExtentedDataSourceTask.prototype.disconnect = function () { };
    return ExtentedDataSourceTask;
}(__WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__["a" /* DataSource */]));

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project-components/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<app-view-title titulo=\"{{tituloVista}}\" subtitulo=\"{{subtituloVista | capitalize}}\"></app-view-title>\r\n\r\n<md-grid-list cols=\"4\" rowHeight=\"280px\">\r\n  <md-grid-tile colspan=\"1\">\r\n    <md-card style=\"width: 95%; padding: 0; height: 95%;\">\r\n      <div style=\"position: relative; height: 100%;\">\r\n        <div style=\"position: absolute; right: 5px; top: 5px;\" *ngIf=\"isEditForm()\">\r\n          <button md-fab class=\"button-action\">\r\n            <label for=\"uploadPhoto\"><md-icon class=\"icon-file\">photo_camera</md-icon></label>\r\n          </button>\r\n          <input id=\"uploadPhoto\" type=\"file\" style=\"display: none;\" (change)=\"upload($event)\">\r\n        </div>\r\n\r\n        <img src=\"{{project['projectPhoto64'] || defaultPhoto}}\" style=\"width: 100%; height: 238px;\" alt=\"\">\r\n      </div>\r\n    </md-card>\r\n  </md-grid-tile>\r\n\r\n  <md-grid-tile colspan=\"3\">\r\n    <md-card style=\"width: 95%; height: 95%;\">\r\n      <md-card-content style=\"padding: 0 5px;\">\r\n        <div>\r\n          <md-input-container style=\"width: 50%;\">\r\n            <input mdInput placeholder=\"Name\" [(ngModel)]=\"project['name']\" [disabled]=\"!isEditForm()\">\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div>\r\n          <md-input-container style=\"width: 100%;\">\r\n            <input mdInput maxlength=\"256\" placeholder=\"Description\" [(ngModel)]=\"project['description']\" [disabled]=\"!isEditForm()\">\r\n            <md-hint align=\"end\" *ngIf=\"isEditForm()\">{{project['description'] ? project['description'].length : 0}} / 256</md-hint>\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div style=\"margin-top: -8px;\">\r\n          <md-select placeholder=\"Project Manager\" style=\"width: 50%;\" [disabled]=\"!isEditForm()\">\r\n            <md-option *ngFor=\"let user of users\" [value]=\"user.value\">\r\n              {{ user.name }}\r\n            </md-option>\r\n          </md-select>\r\n        </div>\r\n\r\n        <div style=\"margin-top: 14px;\">\r\n          <md-form-field>\r\n            <input mdInput [mdDatepicker]=\"picker\" placeholder=\"Final Date\" [(ngModel)]=\"project['finalDate']\" [disabled]=\"!isEditForm()\">\r\n            <md-datepicker-toggle mdSuffix [for]=\"picker\"></md-datepicker-toggle>\r\n            <md-datepicker #picker></md-datepicker>\r\n          </md-form-field>\r\n        </div>\r\n      </md-card-content>\r\n    </md-card>\r\n  </md-grid-tile>\r\n\r\n  <md-grid-tile colspan=\"2\">\r\n    <md-card style=\"width: 97%; padding: 0; height: 85%;\">\r\n      <md-card-header class=\"card-header-project\">\r\n        <div>\r\n          <md-card-title class=\"card-title-project\">\r\n            <span class=\"title-space\">Tasks</span>\r\n            <a md-fab class=\"button-action\" *ngIf=\"isEditForm()\" (click)=\"addTask()\" style=\"margin-top: -4px;\"><md-icon>add</md-icon></a>\r\n          </md-card-title>\r\n        </div>\r\n      </md-card-header>\r\n    </md-card>\r\n  </md-grid-tile>\r\n\r\n  <md-grid-tile colspan=\"2\">\r\n    <md-card style=\"width: 92%; padding: 0; height: 85%;\">\r\n      <md-card-header class=\"card-header-project\">\r\n        <div>\r\n          <md-card-title class=\"card-title-project\">\r\n            <span class=\"title-space\">Teams</span>\r\n            <a md-fab class=\"button-action\" *ngIf=\"isEditForm()\" (click)=\"addTeam()\" style=\"margin-top: -4px;\"><md-icon>add</md-icon></a>\r\n          </md-card-title>\r\n        </div>\r\n      </md-card-header>\r\n    </md-card>\r\n  </md-grid-tile>\r\n</md-grid-list>\r\n\r\n<div *ngIf=\"this.action !== 'create'\" style=\"padding-left: 15px;\">\r\n  <div class=\"date-info\">\r\n    <div class=\"date-title\">Creation Date</div>\r\n    <div class=\"date-content\">{{project['creationDateString']}}</div>\r\n  </div>\r\n  <div class=\"date-info\">\r\n    <div class=\"date-title\">Last Modification Date</div>\r\n    <div class=\"date-content\">{{project['modificationDateString']}}</div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"buttons-group\">\r\n  <a md-fab class=\"deleteButton\" *ngIf=\"this.action !== 'create'\">\r\n    <delete-confirmation type=\"project\" name=\"{{project.name}}\" (actionYes)=\"deleteProject(project._id)\" (actionNo)=\"cancelDeleteProject()\" styleClass=\"delete-confirmation-circle\"></delete-confirmation>\r\n  </a>\r\n  <a md-fab class=\"addButton\" (click)=\"saveProject()\"><md-icon>{{isEditForm() ? 'save' : 'edit'}}</md-icon></a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/project-components/project/project.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../angular-calendar/dist/css/angular-calendar.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbutton[md-raised-button] {\n  background: #0D3446 !important;\n  color: #FFFFFF !important; }\n  button[md-raised-button][disabled] {\n    background: #373a3c !important; }\n\n.button-action {\n  background: #0D3446 !important;\n  width: 30px !important;\n  height: 30px !important; }\n  .button-action span {\n    line-height: 0 !important; }\n  .button-action label {\n    cursor: pointer;\n    height: 25px;\n    margin: 0; }\n    .button-action label .icon-file {\n      line-height: 0;\n      font-size: 17px; }\n  .button-action md-icon {\n    line-height: 0;\n    font-size: 20px; }\n\n.buttons-group {\n  position: -webkit-sticky;\n  position: sticky;\n  text-align: right;\n  width: 100%;\n  left: 0;\n  bottom: 6px;\n  right: 58px; }\n  .buttons-group > .addButton {\n    background: #0D3446 !important;\n    color: #FFFFFF !important; }\n  .buttons-group > .deleteButton {\n    background: #D21A6B !important;\n    color: #FFFFFF !important;\n    width: 35px;\n    height: 35px;\n    font-size: 11px;\n    right: 63px;\n    bottom: 3px;\n    position: absolute; }\n\n.card {\n  padding: 0;\n  border: 0px; }\n\n.card-header {\n  position: relative;\n  padding: 0;\n  border-bottom-width: 0px;\n  height: 120px; }\n\n.card-text {\n  padding: 24px 0 0 24px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 auto;\n          flex: 1 auto; }\n  .card-text .card-icons {\n    color: #0D3446; }\n\n.card-actions {\n  width: 65px;\n  background: #D8DFE2;\n  text-align: center; }\n  .card-actions > button {\n    color: #0D3446; }\n\nmd-card-title {\n  font-size: 20px !important; }\n\nmd-card-subtitle {\n  margin-bottom: 0 !important; }\n\n.header-image {\n  background-size: cover;\n  height: 120px;\n  width: 120px;\n  border-radius: 0; }\n\n.card-header-comments div {\n  width: 100%;\n  margin-left: 4px; }\n\n.card-title-comments {\n  font-size: 25px; }\n\n.litle-card .card-header {\n  height: 45px; }\n\n.litle-card .card-text {\n  padding: 7px 0 0 24px; }\n\n.litle-card .card-actions {\n  width: 140px; }\n\n.litle-card md-card-subtitle md-icon {\n  font-size: 18px; }\n\n.litle-card md-card-title,\n.litle-card md-card-subtitle {\n  display: inline-block; }\n\n@media (max-width: 600px) {\n  md-grid-list {\n    height: auto !important; }\n  md-grid-tile {\n    display: block !important;\n    position: relative !important;\n    top: auto !important;\n    left: 0 !important;\n    width: 100% !important;\n    margin-bottom: 15px !important; }\n  md-card {\n    margin-left: 0 !important;\n    width: 100% !important;\n    height: 95% !important;\n    overflow: hidden; }\n  md-input-container,\n  md-select {\n    width: 100% !important; } }\n\n.container {\n  margin-left: 0px;\n  margin-right: 0px;\n  width: 100%; }\n\n.not-found-info {\n  font-size: 30px;\n  text-align: center; }\n\n::-webkit-scrollbar {\n  width: 7px; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  border-radius: none; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: none;\n  background: #0D3446; }\n\n.snack-bar {\n  background: #0D3446 !important; }\n\n.snack-bar-error {\n  background: #D21A6B !important; }\n\nbutton:focus,\na:focus {\n  outline: none; }\n\ninput:disabled {\n  color: #000000 !important; }\n\n.header-image {\n  position: absolute;\n  height: 75px;\n  width: 75px;\n  bottom: 10px;\n  left: 10px;\n  border-radius: 50%;\n  border: 1px solid #ddd; }\n\n.card-header-project {\n  padding: 15px; }\n  .card-header-project div {\n    width: 100%;\n    margin-left: -8px; }\n\n.card-title-project {\n  font-size: 25px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .card-title-project > .title-space {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 auto;\n            flex: 1 auto; }\n\n.date-info > div {\n  font-size: 14px;\n  display: inline-block; }\n  .date-info > div.date-title {\n    width: 200px; }\n  .date-info > div.date-content {\n    width: 150px;\n    text-align: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project-components/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_projects_projects_service__ = __webpack_require__("../../../../../src/app/services/projects/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_project__ = __webpack_require__("../../../../../src/app/classes/project.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProjectComponent = (function () {
    function ProjectComponent(ProjectsService, router, route, slimLoadingBarService, snackBar) {
        this.ProjectsService = ProjectsService;
        this.router = router;
        this.route = route;
        this.slimLoadingBarService = slimLoadingBarService;
        this.snackBar = snackBar;
        this.defaultPhoto = '../../../assets/default_image.png';
        this.tituloVista = 'Project';
        this.project = new __WEBPACK_IMPORTED_MODULE_5__classes_project__["a" /* Project */]();
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.startLoading();
        this.route.params.subscribe(function (params) {
            _this.subtituloVista = _this.action = params['action'];
            var kActions = (_a = {},
                _a['create'] = function () { return _this.completeLoading(); },
                _a['view'] = function () { return _this.getProject(params['id']); },
                _a['edit'] = function () { return _this.getProject(params['id']); },
                _a);
            kActions[_this.action]();
            var _a;
        });
    };
    ProjectComponent.prototype.getProject = function (projectID) {
        var _this = this;
        this.ProjectsService.get(projectID)
            .subscribe(function (project) {
            console.log(project);
            _this.project = project;
            _this.project.creationDate = _this.utcToDate(_this.project.creationDate);
            _this.project.finalDate = _this.utcToDate(_this.project.finalDate);
            _this.project.modificationDate = _this.utcToDate(_this.project.modificationDate);
            _this.project['creationDateString'] = _this.project.creationDate ? _this.project.creationDate.toLocaleString() : '-';
            _this.project['finalDateString'] = _this.project.finalDate ? _this.project.finalDate.toLocaleString() : '-';
            _this.project['modificationDateString'] = _this.project.modificationDate ? _this.project.modificationDate.toLocaleString() : '-';
            _this.completeLoading();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    ProjectComponent.prototype.utcToDate = function (utc) {
        return utc ? new Date(Date.parse(utc)) : null;
    };
    ;
    ProjectComponent.prototype.isEditForm = function () {
        return this.action !== 'view';
    };
    ProjectComponent.prototype.startLoading = function () {
        this.slimLoadingBarService.start();
    };
    ProjectComponent.prototype.completeLoading = function () {
        var _this = this;
        setTimeout(function () {
            _this.slimLoadingBarService.complete();
        });
    };
    ProjectComponent.prototype.openSnackBar = function (message, error) {
        this.snackBar.open(message, null, {
            duration: 5000,
            extraClasses: !error ? ['snack-bar'] : ['snack-bar-error']
        });
    };
    ProjectComponent.prototype.upload = function (res) {
        this.readImage(res.target);
    };
    ProjectComponent.prototype.readImage = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.project.projectPhoto64 = myReader.result;
        };
        myReader.readAsDataURL(file);
    };
    ProjectComponent.prototype.addTask = function () {
        this.openSnackBar('Operation not available', null);
    };
    ProjectComponent.prototype.addTeam = function () {
        this.openSnackBar('Operation not available', null);
    };
    ProjectComponent.prototype.saveProject = function () {
        var _this = this;
        var kSave = (_a = {},
            _a['create'] = function () { return _this.createProject(); },
            _a['edit'] = function () { return _this.updateProject(); },
            _a['view'] = function () { return _this.editProject(); },
            _a);
        kSave[this.action]();
        var _a;
    };
    ProjectComponent.prototype.createProject = function () {
        var _this = this;
        this.startLoading();
        this.project.creationDate = new Date();
        this.ProjectsService.create(this.project)
            .subscribe(function (result) {
            _this.openSnackBar('Project «' + result.name + '» created correctly', null);
            _this.completeLoading();
            _this.back();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    ProjectComponent.prototype.updateProject = function () {
        var _this = this;
        this.startLoading();
        this.project.projectPhoto = {};
        this.project.modificationDate = new Date();
        this.ProjectsService.update(this.project)
            .subscribe(function (result) {
            _this.openSnackBar('Project «' + result.name + '» updated correctly', null);
            _this.completeLoading();
            _this.viewProject();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    ProjectComponent.prototype.editProject = function () {
        this.router.navigate(['/project', 'edit', this.project._id]);
    };
    ProjectComponent.prototype.viewProject = function () {
        this.router.navigate(['/project', 'view', this.project._id]);
    };
    ProjectComponent.prototype.deleteProject = function (id) {
        var _this = this;
        this.startLoading();
        this.ProjectsService.delete(id)
            .subscribe(function (result) {
            _this.openSnackBar('Project «' + result.name + '» deleted correctly', null);
            _this.completeLoading();
            _this.back();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    ProjectComponent.prototype.cancelDeleteProject = function () {
        this.openSnackBar('Cancelled operation', null);
    };
    ProjectComponent.prototype.back = function () {
        this.router.navigate(['/projects']);
    };
    return ProjectComponent;
}());
ProjectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-project',
        template: __webpack_require__("../../../../../src/app/components/project-components/project/project.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project-components/project/project.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_projects_projects_service__["a" /* ProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_projects_projects_service__["a" /* ProjectsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MdSnackBar */]) === "function" && _e || Object])
], ProjectComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=project.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project-components/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<app-view-title titulo=\"{{tituloVista}}\"></app-view-title>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row not-found-info\" *ngIf=\"!projects.length\">\r\n    {{infoMessage}}\r\n  </div>\r\n\r\n  <div class=\"row\" *ngFor=\"let project of projects\">\r\n    <md-card class=\"card\">\r\n      <md-card-header class=\"card-header\">\r\n        <span class=\"header-image-projects\">\r\n          <img md-card-avatar class=\"image-projects\" [@imageAnimation] src=\"{{defaultImage}}\" *ngIf=\"!project.projectPhoto64\">\r\n          <img md-card-avatar class=\"image-projects\" [@imageAnimation] src=\"{{project.projectPhoto64}}\" *ngIf=\"project.projectPhoto64\">\r\n        </span>\r\n\r\n        <span class=\"card-text\">\r\n          <md-card-title>\r\n            <span>\r\n              {{project.name}}\r\n            </span>\r\n        <span class=\"project-description\" *ngIf=\"project.description\">\r\n              - {{project.description}}\r\n            </span>\r\n        </md-card-title>\r\n        <md-card-subtitle>\r\n          <p class=\"card-icons\">\r\n            <md-icon>content_paste</md-icon> <span>{{project.tasks.length}}</span>\r\n            <md-icon>people</md-icon> <span>{{project.teams.length}}</span>\r\n          </p>\r\n        </md-card-subtitle>\r\n        </span>\r\n        <span class=\"card-actions\">\r\n          <button md-icon-button (click)=\"actionProject('view', project)\">\r\n            <md-icon>search</md-icon>\r\n          </button>\r\n          <button md-icon-button (click)=\"actionProject('edit', project)\">\r\n            <md-icon>edit</md-icon>\r\n          </button>\r\n          <delete-confirmation type=\"project\" name=\"{{project.name}}\" (actionYes)=\"deleteProject(project._id)\" (actionNo)=\"cancelDeleteProject()\"></delete-confirmation>\r\n        </span>\r\n      </md-card-header>\r\n    </md-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"buttons-group\">\r\n  <a md-fab class=\"addButton\" (click)=\"actionProject('create')\">\r\n    <md-icon>add</md-icon>\r\n  </a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/project-components/projects/projects.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../angular-calendar/dist/css/angular-calendar.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbutton[md-raised-button] {\n  background: #0D3446 !important;\n  color: #FFFFFF !important; }\n  button[md-raised-button][disabled] {\n    background: #373a3c !important; }\n\n.button-action {\n  background: #0D3446 !important;\n  width: 30px !important;\n  height: 30px !important; }\n  .button-action span {\n    line-height: 0 !important; }\n  .button-action label {\n    cursor: pointer;\n    height: 25px;\n    margin: 0; }\n    .button-action label .icon-file {\n      line-height: 0;\n      font-size: 17px; }\n  .button-action md-icon {\n    line-height: 0;\n    font-size: 20px; }\n\n.buttons-group {\n  position: -webkit-sticky;\n  position: sticky;\n  text-align: right;\n  width: 100%;\n  left: 0;\n  bottom: 6px;\n  right: 58px; }\n  .buttons-group > .addButton {\n    background: #0D3446 !important;\n    color: #FFFFFF !important; }\n  .buttons-group > .deleteButton {\n    background: #D21A6B !important;\n    color: #FFFFFF !important;\n    width: 35px;\n    height: 35px;\n    font-size: 11px;\n    right: 63px;\n    bottom: 3px;\n    position: absolute; }\n\n.card {\n  padding: 0;\n  border: 0px; }\n\n.card-header {\n  position: relative;\n  padding: 0;\n  border-bottom-width: 0px;\n  height: 120px; }\n\n.card-text {\n  padding: 24px 0 0 24px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 auto;\n          flex: 1 auto; }\n  .card-text .card-icons {\n    color: #0D3446; }\n\n.card-actions {\n  width: 65px;\n  background: #D8DFE2;\n  text-align: center; }\n  .card-actions > button {\n    color: #0D3446; }\n\nmd-card-title {\n  font-size: 20px !important; }\n\nmd-card-subtitle {\n  margin-bottom: 0 !important; }\n\n.header-image {\n  background-size: cover;\n  height: 120px;\n  width: 120px;\n  border-radius: 0; }\n\n.card-header-comments div {\n  width: 100%;\n  margin-left: 4px; }\n\n.card-title-comments {\n  font-size: 25px; }\n\n.litle-card .card-header {\n  height: 45px; }\n\n.litle-card .card-text {\n  padding: 7px 0 0 24px; }\n\n.litle-card .card-actions {\n  width: 140px; }\n\n.litle-card md-card-subtitle md-icon {\n  font-size: 18px; }\n\n.litle-card md-card-title,\n.litle-card md-card-subtitle {\n  display: inline-block; }\n\n@media (max-width: 600px) {\n  md-grid-list {\n    height: auto !important; }\n  md-grid-tile {\n    display: block !important;\n    position: relative !important;\n    top: auto !important;\n    left: 0 !important;\n    width: 100% !important;\n    margin-bottom: 15px !important; }\n  md-card {\n    margin-left: 0 !important;\n    width: 100% !important;\n    height: 95% !important;\n    overflow: hidden; }\n  md-input-container,\n  md-select {\n    width: 100% !important; } }\n\n.container {\n  margin-left: 0px;\n  margin-right: 0px;\n  width: 100%; }\n\n.not-found-info {\n  font-size: 30px;\n  text-align: center; }\n\n::-webkit-scrollbar {\n  width: 7px; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  border-radius: none; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: none;\n  background: #0D3446; }\n\n.snack-bar {\n  background: #0D3446 !important; }\n\n.snack-bar-error {\n  background: #D21A6B !important; }\n\nbutton:focus,\na:focus {\n  outline: none; }\n\ninput:disabled {\n  color: #000000 !important; }\n\n.header-image-projects {\n  position: relative;\n  width: 120px;\n  margin-left: -17px; }\n  .header-image-projects .image-projects {\n    background-size: cover;\n    height: 120px;\n    width: 120px;\n    border-radius: 0;\n    position: absolute; }\n\n.card {\n  padding: 0;\n  border: 0px; }\n\n.card-header {\n  position: relative;\n  padding: 0;\n  border-bottom-width: 0px;\n  height: 120px; }\n\n.card-text {\n  padding: 24px 0 0 24px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 auto;\n          flex: 1 auto; }\n  .card-text .card-icons {\n    color: #0D3446; }\n\n.card-actions {\n  width: 65px;\n  background: #D8DFE2;\n  text-align: center; }\n  .card-actions > button {\n    color: #0D3446; }\n\nmd-card-title {\n  font-size: 20px !important; }\n\nmd-card-subtitle {\n  margin-bottom: 0 !important; }\n\n.container {\n  margin-left: 0px;\n  margin-right: 0px;\n  width: 100%; }\n\n.project-description {\n  zoom: 70%;\n  font-style: italic; }\n\n@media (max-width: 600px) {\n  md-card-header {\n    display: block !important;\n    height: 160px !important; }\n  .header-image-projects {\n    margin-left: 0 !important; }\n  .image-projects {\n    position: absolute !important; }\n  .card-text {\n    margin-top: 5px !important;\n    padding-top: 0px !important; }\n  .project-description {\n    display: block !important; }\n  md-card-title {\n    top: 10px !important;\n    margin-left: 135px !important;\n    position: absolute !important; }\n  md-card-subtitle {\n    margin-left: 135px !important;\n    top: 34px !important;\n    position: relative !important; }\n  .card-actions {\n    width: 100% !important;\n    top: 120px !important;\n    position: absolute !important;\n    text-align: center !important; }\n  .card-icons {\n    margin-top: 40px !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project-components/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_projects_projects_service__ = __webpack_require__("../../../../../src/app/services/projects/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animations_animations__ = __webpack_require__("../../../../../src/app/animations/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var notFound = 'Not found projects';
var getting = 'Getting projects';
var ProjectsComponent = (function () {
    function ProjectsComponent(ProjectsService, router, slimLoadingBarService, snackBar) {
        this.ProjectsService = ProjectsService;
        this.router = router;
        this.slimLoadingBarService = slimLoadingBarService;
        this.snackBar = snackBar;
        this.defaultImage = '../../../assets/default_image.png';
        this.tituloVista = 'Projects';
        this.projects = [];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.infoMessage = getting;
        // Start loading bar
        this.startLoading();
        this.ProjectsService.getAllWithoutPhoto()
            .subscribe(function (projects) {
            _this.infoMessage = notFound;
            _this.projects = projects;
            console.log(projects);
            _this.getProjectPhotos();
            // Finish loading bar
            _this.completeLoading();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    ProjectsComponent.prototype.getProjectPhotos = function () {
        var projectService = this.ProjectsService;
        __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](this.projects, function (project) {
            projectService.getPhoto(project._id)
                .subscribe(function (photo) {
                project.projectPhoto64 = photo.projectPhoto64;
            });
        });
    };
    ProjectsComponent.prototype.startLoading = function () {
        this.slimLoadingBarService.start();
    };
    ProjectsComponent.prototype.completeLoading = function () {
        var _this = this;
        setTimeout(function () {
            _this.slimLoadingBarService.complete();
        });
    };
    ProjectsComponent.prototype.openSnackBar = function (message, error) {
        this.snackBar.open(message, null, {
            duration: 5000,
            extraClasses: !error ? ['snack-bar'] : ['snack-bar-error']
        });
    };
    ProjectsComponent.prototype.actionProject = function (action, project) {
        var params = [
            '/project',
            action
        ];
        if (action !== 'create') {
            params = params.concat([project._id]);
        }
        this.router.navigate(params);
    };
    ProjectsComponent.prototype.deleteProject = function (id) {
        var _this = this;
        this.startLoading();
        this.ProjectsService.delete(id)
            .subscribe(function (result) {
            _this.projects = __WEBPACK_IMPORTED_MODULE_5_underscore__["without"](_this.projects, __WEBPACK_IMPORTED_MODULE_5_underscore__["findWhere"](_this.projects, { _id: result._id }));
            _this.openSnackBar('Project «' + result.name + '» deleted correctly', null);
            _this.completeLoading();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    ProjectsComponent.prototype.cancelDeleteProject = function () {
        this.openSnackBar('Cancelled operation', null);
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__("../../../../../src/app/components/project-components/projects/projects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project-components/projects/projects.component.scss")],
        animations: [__WEBPACK_IMPORTED_MODULE_6__animations_animations__["a" /* imageAnimation */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_projects_projects_service__["a" /* ProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_projects_projects_service__["a" /* ProjectsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MdSnackBar */]) === "function" && _d || Object])
], ProjectsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/report-components/report-create/report-create.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  report-create works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/report-components/report-create/report-create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/report-components/report-create/report-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportCreateComponent = (function () {
    function ReportCreateComponent() {
    }
    ReportCreateComponent.prototype.ngOnInit = function () {
    };
    return ReportCreateComponent;
}());
ReportCreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-report-create',
        template: __webpack_require__("../../../../../src/app/components/report-components/report-create/report-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/report-components/report-create/report-create.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ReportCreateComponent);

//# sourceMappingURL=report-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/report-components/report-detail/report-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  informe-detail works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/report-components/report-detail/report-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/report-components/report-detail/report-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportDetailComponent = (function () {
    function ReportDetailComponent() {
    }
    ReportDetailComponent.prototype.ngOnInit = function () {
    };
    return ReportDetailComponent;
}());
ReportDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-report-detail',
        template: __webpack_require__("../../../../../src/app/components/report-components/report-detail/report-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/report-components/report-detail/report-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ReportDetailComponent);

//# sourceMappingURL=report-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/report-components/reports/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<app-view-title titulo=\"{{tituloVista}}\"></app-view-title>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/report-components/reports/reports.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/report-components/reports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportsComponent = (function () {
    function ReportsComponent() {
    }
    ReportsComponent.prototype.ngOnInit = function () {
        this.tituloVista = 'Reports';
    };
    return ReportsComponent;
}());
ReportsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reports',
        template: __webpack_require__("../../../../../src/app/components/report-components/reports/reports.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/report-components/reports/reports.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ReportsComponent);

//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search-components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<app-view-title titulo=\"{{tituloVista}}\"></app-view-title>\r\n\r\n<div class=\"container mat-elevation-z8\">\r\n\r\n    <div class=\"search-header\">\r\n        <md-form-field floatPlaceholder=\"never\">\r\n            <input mdInput #filter placeholder=\"Filter users\">\r\n        </md-form-field>\r\n\r\n        <md-chip-list class=\"chip-position\">\r\n            <md-chip>Tasks</md-chip>\r\n            <md-chip>Meetings</md-chip>\r\n            <md-chip>Projects</md-chip>\r\n        </md-chip-list>\r\n    </div>\r\n\r\n    <div>\r\n        <md-table #table [dataSource]=\"dataSource\">\r\n    \r\n            <!--- Note that these columns can be defined in any order.\r\n                The actual rendered columns are set as a property on the row definition\" -->\r\n    \r\n            <!-- Position Column -->\r\n            <ng-container mdColumnDef=\"position\">\r\n            <md-header-cell *mdHeaderCellDef> No. </md-header-cell>\r\n            <md-cell *mdCellDef=\"let element\"> {{element.position}} </md-cell>\r\n            </ng-container>\r\n    \r\n            <!-- Name Column -->\r\n            <ng-container mdColumnDef=\"name\">\r\n            <md-header-cell *mdHeaderCellDef> Name </md-header-cell>\r\n            <md-cell *mdCellDef=\"let element\"> {{element.name}} </md-cell>\r\n            </ng-container>\r\n    \r\n            <!-- Weight Column -->\r\n            <ng-container mdColumnDef=\"weight\">\r\n            <md-header-cell *mdHeaderCellDef> Weight </md-header-cell>\r\n            <md-cell *mdCellDef=\"let element\"> {{element.weight}} </md-cell>\r\n            </ng-container>\r\n    \r\n            <!-- Color Column -->\r\n            <ng-container mdColumnDef=\"symbol\">\r\n            <md-header-cell *mdHeaderCellDef> Symbol </md-header-cell>\r\n            <md-cell *mdCellDef=\"let element\"> {{element.symbol}} </md-cell>\r\n            </ng-container>\r\n    \r\n            <md-header-row *mdHeaderRowDef=\"displayedColumns\"></md-header-row>\r\n            <md-row *mdRowDef=\"let row; columns: displayedColumns;\"></md-row>\r\n        </md-table>\r\n    </div>\r\n\r\n</div> \r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/search-components/search/search.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chip-position {\n  float: right;\n  margin-top: 15px;\n  margin-right: 20px; }\n\n.search-header {\n  margin-left: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search-components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* unused harmony export ExampleDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("../../../cdk/@angular/cdk/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchComponent = (function () {
    function SearchComponent() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource();
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.tituloVista = 'Search';
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/components/search-components/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search-components/search/search.component.scss")]
    })
], SearchComponent);

var data = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
var ExampleDataSource = (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExampleDataSource.prototype.connect = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(data);
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["a" /* DataSource */]));

//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/task-components/task/task.component.html":
/***/ (function(module, exports) {

module.exports = "<app-view-title titulo=\"{{tituloVista}}\" subtitulo=\"{{subtituloVista | capitalize}}\"></app-view-title>\r\n\r\n<md-grid-list cols=\"4\" rowHeight=\"280px\">\r\n  <md-grid-tile colspan=\"3\">\r\n    <md-card style=\"width: 95%; height: 95%;\">\r\n      <md-card-content style=\"padding: 0 5px;\">\r\n        <div>\r\n          <md-input-container style=\"width: 50%;\">\r\n            <input mdInput placeholder=\"Name\" [(ngModel)]=\"task['name']\" [disabled]=\"!isEditForm()\">\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div>\r\n          <md-input-container style=\"width: 100%;\">\r\n            <input mdInput maxlength=\"256\" placeholder=\"Description\" [(ngModel)]=\"task['description']\" [disabled]=\"!isEditForm()\">\r\n            <md-hint align=\"end\" *ngIf=\"isEditForm()\">{{task['description'] ? task['description'].length : 0}} / 256</md-hint>\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div style=\"margin-top: -8px;\">\r\n          <md-select placeholder=\"Task Manager\" style=\"width: 50%;\" [disabled]=\"!isEditForm()\" [(ngModel)]=\"task['taskManager']\">\r\n            <md-option *ngFor=\"let user of users\" [value]=\"user.value\">\r\n              {{ user.name }}\r\n            </md-option>\r\n          </md-select>\r\n        </div>\r\n\r\n        <div style=\"margin-top: -8px;\">\r\n          <!-- <md-select placeholder=\"Task Manager\" style=\"width: 50%;\" [disabled]=\"!isEditForm()\" [(ngModel)]=\"task['taskUser']\">\r\n            <md-option *ngFor=\"let user of users\" [value]=\"user.value\">\r\n              {{ user.name }}\r\n            </md-option>\r\n          </md-select> -->\r\n\r\n          <md-input-container style=\"width: 50%;\">\r\n            <input mdInput placeholder=\"taskUser\" [(ngModel)]=\"task['taskUser']\" [disabled]=\"!isEditForm()\">\r\n          </md-input-container>\r\n        </div>\r\n\r\n\r\n        <div style=\"margin-top: 8px;\">\r\n          <md-select placeholder=\"Project\" style=\"width: 50%;\" [disabled]=\"!isEditForm()\" [(ngModel)]=\"task['project']\">\r\n            <md-option *ngFor=\"let project of projects\" [value]=\"project.value\">\r\n              {{ project.name }}\r\n            </md-option>\r\n          </md-select>\r\n        </div>\r\n      </md-card-content>\r\n    </md-card>\r\n  </md-grid-tile>\r\n\r\n  <md-grid-tile colspan=\"1\">\r\n    <md-card style=\"width: 85%; height: 95%;\">\r\n      <md-card-content style=\"padding: 0 5px;\">\r\n        <div style=\"margin-top: -8px;\">\r\n          <md-select placeholder=\"Status\" style=\"width: 100%;\" [disabled]=\"!isEditForm()\" [(ngModel)]=\"task['status']\">\r\n            <md-option *ngFor=\"let state of status\" [value]=\"state\">\r\n              {{ state }}\r\n            </md-option>\r\n          </md-select>\r\n        </div>\r\n\r\n        <div style=\"margin-top: 12px;\">\r\n          <md-select placeholder=\"Priority\" style=\"width: 100%;\" [disabled]=\"!isEditForm()\" [(ngModel)]=\"task['priority']\">\r\n            <md-option *ngFor=\"let priority of priorities\" [value]=\"priority\">\r\n              {{ priority }}\r\n            </md-option>\r\n          </md-select>\r\n        </div>\r\n\r\n        <div style=\"margin-top: 16px;\">\r\n          <md-form-field style=\"width: 100%;\">\r\n            <input mdInput [mdDatepicker]=\"initPicker\" placeholder=\"Init Date\" [(ngModel)]=\"task['initDate']\" [disabled]=\"!isEditForm()\">\r\n            <md-datepicker-toggle mdSuffix [for]=\"initPicker\"></md-datepicker-toggle>\r\n            <md-datepicker #initPicker></md-datepicker>\r\n          </md-form-field>\r\n        </div>\r\n\r\n        <div>\r\n          <md-form-field style=\"width: 100%;\">\r\n            <input mdInput [mdDatepicker]=\"finalPicker\" placeholder=\"Final Date\" [(ngModel)]=\"task['finalDate']\" [disabled]=\"!isEditForm()\">\r\n            <md-datepicker-toggle mdSuffix [for]=\"finalPicker\"></md-datepicker-toggle>\r\n            <md-datepicker #finalPicker></md-datepicker>\r\n          </md-form-field>\r\n        </div>\r\n      </md-card-content>\r\n    </md-card>\r\n  </md-grid-tile>\r\n</md-grid-list>\r\n\r\n<md-grid-list cols=\"4\" rowHeight=\"350px\">\r\n  <md-grid-tile colspan=\"4\">\r\n    <md-card style=\"width: 96%; height: 85%;\">\r\n      <md-card-header class=\"card-header-comments\">\r\n        <md-card-title class=\"card-title-comments\">\r\n          <span class=\"title-space\">Comments</span>\r\n        </md-card-title>\r\n      </md-card-header>\r\n      <md-card-content style=\"padding: 0 5px;\">\r\n        <div style=\"margin-bottom: 15px;\">\r\n          <div *ngFor=\"let task of task['comments']\">\r\n            <div>\r\n              {{task.description}}\r\n            </div>\r\n            <div align=\"end\" style=\"font-style: italic;\">\r\n              {{task.date}}\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"!task['comments'] || !task['comments'].length\" style=\"font-style: italic;\">\r\n            No comments\r\n          </div>\r\n        </div>\r\n\r\n        <form style=\"border-top: 1px solid #ddd;\">\r\n          <div style=\"margin-top: 15px\">\r\n            <md-input-container style=\"width: 100%;\">\r\n              <textarea mdInput maxlength=\"256\" placeholder=\"Comment\" [(ngModel)]=\"task['comment']\" [disabled]=\"!isEditForm()\" id=\"comment\" name=\"comment\" rows=\"3\"></textarea>\r\n              <md-hint align=\"end\" *ngIf=\"isEditForm()\">{{task['comment'] ? task['comment'].length : 0}} / 500</md-hint>\r\n            </md-input-container>\r\n          </div>\r\n          <div align=\"end\" style=\"margin: 15px 0px;\">\r\n            <button type=\"submit\" md-raised-button (click)=\"addComment()\">Accept</button>\r\n          </div>\r\n        </form>\r\n      </md-card-content>\r\n    </md-card>\r\n  </md-grid-tile>\r\n</md-grid-list>\r\n\r\n\r\n<div *ngIf=\"this.action !== 'create'\" style=\"padding-left: 15px;\">\r\n  <div class=\"date-info\">\r\n    <div class=\"date-title\">Creation Date</div>\r\n    <div class=\"date-content\">{{task['creationDateString']}}</div>\r\n  </div>\r\n  <div class=\"date-info\">\r\n    <div class=\"date-title\">Last Modification Date</div>\r\n    <div class=\"date-content\">{{task['modificationDateString']}}</div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"buttons-group\">\r\n  <a md-fab class=\"deleteButton\" *ngIf=\"this.action !== 'create'\">\r\n    <delete-confirmation type=\"task\" name=\"{{task.name}}\" (actionYes)=\"deleteTask(task._id)\" (actionNo)=\"cancelDeleteTask()\" styleClass=\"delete-confirmation-circle\"></delete-confirmation>\r\n  </a>\r\n  <a md-fab class=\"addButton\" (click)=\"saveTask()\">\r\n    <md-icon>{{isEditForm() ? 'save' : 'edit'}}</md-icon>\r\n  </a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/task-components/task/task.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../angular-calendar/dist/css/angular-calendar.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbutton[md-raised-button] {\n  background: #0D3446 !important;\n  color: #FFFFFF !important; }\n  button[md-raised-button][disabled] {\n    background: #373a3c !important; }\n\n.button-action {\n  background: #0D3446 !important;\n  width: 30px !important;\n  height: 30px !important; }\n  .button-action span {\n    line-height: 0 !important; }\n  .button-action label {\n    cursor: pointer;\n    height: 25px;\n    margin: 0; }\n    .button-action label .icon-file {\n      line-height: 0;\n      font-size: 17px; }\n  .button-action md-icon {\n    line-height: 0;\n    font-size: 20px; }\n\n.buttons-group {\n  position: -webkit-sticky;\n  position: sticky;\n  text-align: right;\n  width: 100%;\n  left: 0;\n  bottom: 6px;\n  right: 58px; }\n  .buttons-group > .addButton {\n    background: #0D3446 !important;\n    color: #FFFFFF !important; }\n  .buttons-group > .deleteButton {\n    background: #D21A6B !important;\n    color: #FFFFFF !important;\n    width: 35px;\n    height: 35px;\n    font-size: 11px;\n    right: 63px;\n    bottom: 3px;\n    position: absolute; }\n\n.card {\n  padding: 0;\n  border: 0px; }\n\n.card-header {\n  position: relative;\n  padding: 0;\n  border-bottom-width: 0px;\n  height: 120px; }\n\n.card-text {\n  padding: 24px 0 0 24px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 auto;\n          flex: 1 auto; }\n  .card-text .card-icons {\n    color: #0D3446; }\n\n.card-actions {\n  width: 65px;\n  background: #D8DFE2;\n  text-align: center; }\n  .card-actions > button {\n    color: #0D3446; }\n\nmd-card-title {\n  font-size: 20px !important; }\n\nmd-card-subtitle {\n  margin-bottom: 0 !important; }\n\n.header-image {\n  background-size: cover;\n  height: 120px;\n  width: 120px;\n  border-radius: 0; }\n\n.card-header-comments div {\n  width: 100%;\n  margin-left: 4px; }\n\n.card-title-comments {\n  font-size: 25px; }\n\n.litle-card .card-header {\n  height: 45px; }\n\n.litle-card .card-text {\n  padding: 7px 0 0 24px; }\n\n.litle-card .card-actions {\n  width: 140px; }\n\n.litle-card md-card-subtitle md-icon {\n  font-size: 18px; }\n\n.litle-card md-card-title,\n.litle-card md-card-subtitle {\n  display: inline-block; }\n\n@media (max-width: 600px) {\n  md-grid-list {\n    height: auto !important; }\n  md-grid-tile {\n    display: block !important;\n    position: relative !important;\n    top: auto !important;\n    left: 0 !important;\n    width: 100% !important;\n    margin-bottom: 15px !important; }\n  md-card {\n    margin-left: 0 !important;\n    width: 100% !important;\n    height: 95% !important;\n    overflow: hidden; }\n  md-input-container,\n  md-select {\n    width: 100% !important; } }\n\n.container {\n  margin-left: 0px;\n  margin-right: 0px;\n  width: 100%; }\n\n.not-found-info {\n  font-size: 30px;\n  text-align: center; }\n\n::-webkit-scrollbar {\n  width: 7px; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  border-radius: none; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: none;\n  background: #0D3446; }\n\n.snack-bar {\n  background: #0D3446 !important; }\n\n.snack-bar-error {\n  background: #D21A6B !important; }\n\nbutton:focus,\na:focus {\n  outline: none; }\n\ninput:disabled {\n  color: #000000 !important; }\n\n.date-info > div {\n  font-size: 14px;\n  display: inline-block; }\n  .date-info > div.date-title {\n    width: 200px; }\n  .date-info > div.date-content {\n    width: 150px;\n    text-align: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/task-components/task/task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tasks_tasks_service__ = __webpack_require__("../../../../../src/app/services/tasks/tasks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_task__ = __webpack_require__("../../../../../src/app/classes/task.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__enums_taskStatus_enum__ = __webpack_require__("../../../../../src/app/enums/taskStatus.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__enums_taskPriority_enum__ = __webpack_require__("../../../../../src/app/enums/taskPriority.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TaskComponent = (function () {
    function TaskComponent(TasksService, router, route, slimLoadingBarService, snackBar) {
        this.TasksService = TasksService;
        this.router = router;
        this.route = route;
        this.slimLoadingBarService = slimLoadingBarService;
        this.snackBar = snackBar;
        this.defaultPhoto = '../../../assets/default_image.png';
        this.tituloVista = 'Task';
        this.task = new __WEBPACK_IMPORTED_MODULE_5__classes_task__["a" /* Task */]();
        this.status = [];
        this.priorities = [];
    }
    TaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getStatus();
        this.getPriority();
        this.startLoading();
        this.route.params.subscribe(function (params) {
            _this.subtituloVista = _this.action = params['action'];
            var kActions = (_a = {},
                _a['create'] = function () { return _this.completeLoading(); },
                _a['view'] = function () { return _this.getTask(params['id']); },
                _a['edit'] = function () { return _this.getTask(params['id']); },
                _a);
            kActions[_this.action]();
            var _a;
        });
    };
    TaskComponent.prototype.getStatus = function () {
        var keys = Object.keys(__WEBPACK_IMPORTED_MODULE_6__enums_taskStatus_enum__["a" /* taskStatus */]);
        this.status = keys.slice(keys.length / 2);
    };
    TaskComponent.prototype.getPriority = function () {
        var keys = Object.keys(__WEBPACK_IMPORTED_MODULE_7__enums_taskPriority_enum__["a" /* taskPriority */]);
        this.priorities = keys.slice(keys.length / 2);
    };
    TaskComponent.prototype.getTask = function (taskID) {
        var _this = this;
        this.TasksService.get(taskID)
            .subscribe(function (task) {
            console.log(task);
            _this.task = task;
            _this.task.creationDate = _this.utcToDate(_this.task.creationDate);
            _this.task.initDate = _this.utcToDate(_this.task.initDate);
            _this.task.finalDate = _this.utcToDate(_this.task.finalDate);
            _this.task.modificationDate = _this.utcToDate(_this.task.modificationDate);
            _this.task['creationDateString'] = _this.task.creationDate ? _this.task.creationDate.toLocaleString() : '-';
            _this.task['initDateString'] = _this.task.initDate ? _this.task.initDate.toLocaleString() : '-';
            _this.task['finalDateString'] = _this.task.finalDate ? _this.task.finalDate.toLocaleString() : '-';
            _this.task['modificationDateString'] = _this.task.modificationDate ? _this.task.modificationDate.toLocaleString() : '-';
            _this.completeLoading();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    TaskComponent.prototype.utcToDate = function (utc) {
        return utc ? new Date(Date.parse(utc)) : null;
    };
    ;
    TaskComponent.prototype.isEditForm = function () {
        return this.action !== 'view';
    };
    TaskComponent.prototype.startLoading = function () {
        this.slimLoadingBarService.start();
    };
    TaskComponent.prototype.completeLoading = function () {
        var _this = this;
        setTimeout(function () {
            _this.slimLoadingBarService.complete();
        });
    };
    TaskComponent.prototype.openSnackBar = function (message, error) {
        this.snackBar.open(message, null, {
            duration: 5000,
            extraClasses: !error ? ['snack-bar'] : ['snack-bar-error']
        });
    };
    TaskComponent.prototype.addComment = function () {
        this.openSnackBar('Operation not available', null);
    };
    TaskComponent.prototype.saveTask = function () {
        var _this = this;
        var kSave = (_a = {},
            _a['create'] = function () { return _this.createTask(); },
            _a['edit'] = function () { return _this.updateTask(); },
            _a['view'] = function () { return _this.editTask(); },
            _a);
        kSave[this.action]();
        var _a;
    };
    TaskComponent.prototype.createTask = function () {
        var _this = this;
        this.startLoading();
        this.task.creationDate = new Date();
        this.TasksService.create(this.task)
            .subscribe(function (result) {
            _this.openSnackBar('Task «' + result.name + '» created correctly', null);
            _this.completeLoading();
            _this.back();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    TaskComponent.prototype.updateTask = function () {
        var _this = this;
        this.startLoading();
        this.task.modificationDate = new Date();
        this.TasksService.update(this.task)
            .subscribe(function (result) {
            _this.openSnackBar('Task «' + result.name + '» updated correctly', null);
            _this.completeLoading();
            _this.viewTask();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    TaskComponent.prototype.editTask = function () {
        this.router.navigate(['/task', 'edit', this.task._id]);
    };
    TaskComponent.prototype.viewTask = function () {
        this.router.navigate(['/task', 'view', this.task._id]);
    };
    TaskComponent.prototype.deleteTask = function (id) {
        var _this = this;
        this.startLoading();
        this.TasksService.delete(id)
            .subscribe(function (result) {
            _this.openSnackBar('Task «' + result.name + '» deleted correctly', null);
            _this.completeLoading();
            _this.back();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    TaskComponent.prototype.cancelDeleteTask = function () {
        this.openSnackBar('Cancelled operation', null);
    };
    TaskComponent.prototype.back = function () {
        this.router.navigate(['/tasks']);
    };
    return TaskComponent;
}());
TaskComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-task',
        template: __webpack_require__("../../../../../src/app/components/task-components/task/task.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/task-components/task/task.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_tasks_tasks_service__["a" /* TasksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tasks_tasks_service__["a" /* TasksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MdSnackBar */]) === "function" && _e || Object])
], TaskComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=task.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/task-components/tasks/tasks.component.html":
/***/ (function(module, exports) {

module.exports = "<app-view-title titulo=\"{{tituloVista}}\"></app-view-title>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row not-found-info\" *ngIf=\"!todoTasks.length && !doingTasks.length && !doneTasks.length\">\r\n    {{infoMessage}}\r\n  </div>\r\n\r\n  <md-tab-group *ngIf=\"todoTasks.length || doingTasks.length || doneTasks.length\">\r\n    <md-tab label=\"TODO\">\r\n      <div *ngFor=\"let task of todoTasks\" class=\"taskListContainer\">\r\n        <md-card class=\"card litle-card\">\r\n          <md-card-header class=\"card-header\">\r\n            <span class=\"icon-priority {{task.priority}}\"></span>\r\n            <span class=\"card-text\">\r\n              <md-card-title>{{task.name}}</md-card-title>\r\n              <md-card-subtitle>\r\n                <span class=\"card-icons\">\r\n                  <md-icon>mode_comment</md-icon> <span style=\"margin-left: -6px;\">{{task.comments ? task.comments.length : 0}}\r\n                </span>\r\n            </span>\r\n            </md-card-subtitle>\r\n            </span>\r\n            <span class=\"card-actions\">\r\n              <button md-icon-button (click)=\"actionTask('view', task)\">\r\n                <md-icon>search</md-icon>\r\n              </button>\r\n              <button md-icon-button (click)=\"actionTask('edit', task)\">\r\n                <md-icon>edit</md-icon>\r\n              </button>\r\n              <delete-confirmation type=\"task\" name=\"{{task.name}}\" (actionYes)=\"deleteTask(task._id)\" (actionNo)=\"cancelDeleteTask()\"></delete-confirmation>\r\n            </span>\r\n          </md-card-header>\r\n        </md-card>\r\n      </div>\r\n    </md-tab>\r\n\r\n    <md-tab label=\"DOING\">\r\n      <div *ngFor=\"let task of doingTasks\" class=\"taskListContainer\">\r\n        <md-card class=\"card litle-card\">\r\n          <md-card-header class=\"card-header\">\r\n            <span class=\"icon-priority {{task.priority}}\"></span>\r\n            <span class=\"card-text\">\r\n              <md-card-title>{{task.name}}</md-card-title>\r\n              <md-card-subtitle>\r\n                <span class=\"card-icons\">\r\n                  <md-icon>mode_comment</md-icon> <span style=\"margin-left: -6px;\">{{task.comments ? task.comments.length : 0}}\r\n                </span>\r\n            </span>\r\n            </md-card-subtitle>\r\n            </span>\r\n            <span class=\"card-actions\">\r\n              <button md-icon-button (click)=\"actionTask('view', task)\">\r\n                <md-icon>search</md-icon>\r\n              </button>\r\n              <button md-icon-button (click)=\"actionTask('edit', task)\">\r\n                <md-icon>edit</md-icon>\r\n              </button>\r\n              <delete-confirmation type=\"task\" name=\"{{task.name}}\" (actionYes)=\"deleteTask(task._id)\" (actionNo)=\"cancelDeleteTask()\"></delete-confirmation>\r\n            </span>\r\n          </md-card-header>\r\n        </md-card>\r\n      </div>\r\n    </md-tab>\r\n\r\n    <md-tab label=\"DONE\">\r\n      <div *ngFor=\"let task of doneTasks\" class=\"taskListContainer\">\r\n        <md-card class=\"card litle-card\">\r\n          <md-card-header class=\"card-header\">\r\n            <span class=\"icon-priority {{task.priority}}\"></span>\r\n            <span class=\"card-text\">\r\n              <md-card-title>{{task.name}}</md-card-title>\r\n              <md-card-subtitle>\r\n                <span class=\"card-icons\">\r\n                  <md-icon>mode_comment</md-icon> <span style=\"margin-left: -6px;\">{{task.comments ? task.comments.length : 0}}\r\n                </span>\r\n            </span>\r\n            </md-card-subtitle>\r\n            </span>\r\n            <span class=\"card-actions\">\r\n              <button md-icon-button (click)=\"actionTask('view', task)\">\r\n                <md-icon>search</md-icon>\r\n              </button>\r\n              <button md-icon-button (click)=\"actionTask('edit', task)\">\r\n                <md-icon>edit</md-icon>\r\n              </button>\r\n              <delete-confirmation type=\"task\" name=\"{{task.name}}\" (actionYes)=\"deleteTask(task._id)\" (actionNo)=\"cancelDeleteTask()\"></delete-confirmation>\r\n            </span>\r\n          </md-card-header>\r\n        </md-card>\r\n      </div>\r\n    </md-tab>\r\n  </md-tab-group>\r\n</div>\r\n\r\n<div class=\"buttons-group\">\r\n  <a md-fab class=\"addButton\" (click)=\"actionTask('create')\">\r\n    <md-icon>add</md-icon>\r\n  </a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/task-components/tasks/tasks.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../angular-calendar/dist/css/angular-calendar.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbutton[md-raised-button] {\n  background: #0D3446 !important;\n  color: #FFFFFF !important; }\n  button[md-raised-button][disabled] {\n    background: #373a3c !important; }\n\n.button-action {\n  background: #0D3446 !important;\n  width: 30px !important;\n  height: 30px !important; }\n  .button-action span {\n    line-height: 0 !important; }\n  .button-action label {\n    cursor: pointer;\n    height: 25px;\n    margin: 0; }\n    .button-action label .icon-file {\n      line-height: 0;\n      font-size: 17px; }\n  .button-action md-icon {\n    line-height: 0;\n    font-size: 20px; }\n\n.buttons-group {\n  position: -webkit-sticky;\n  position: sticky;\n  text-align: right;\n  width: 100%;\n  left: 0;\n  bottom: 6px;\n  right: 58px; }\n  .buttons-group > .addButton {\n    background: #0D3446 !important;\n    color: #FFFFFF !important; }\n  .buttons-group > .deleteButton {\n    background: #D21A6B !important;\n    color: #FFFFFF !important;\n    width: 35px;\n    height: 35px;\n    font-size: 11px;\n    right: 63px;\n    bottom: 3px;\n    position: absolute; }\n\n.card {\n  padding: 0;\n  border: 0px; }\n\n.card-header {\n  position: relative;\n  padding: 0;\n  border-bottom-width: 0px;\n  height: 120px; }\n\n.card-text {\n  padding: 24px 0 0 24px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 auto;\n          flex: 1 auto; }\n  .card-text .card-icons {\n    color: #0D3446; }\n\n.card-actions {\n  width: 65px;\n  background: #D8DFE2;\n  text-align: center; }\n  .card-actions > button {\n    color: #0D3446; }\n\nmd-card-title {\n  font-size: 20px !important; }\n\nmd-card-subtitle {\n  margin-bottom: 0 !important; }\n\n.header-image {\n  background-size: cover;\n  height: 120px;\n  width: 120px;\n  border-radius: 0; }\n\n.card-header-comments div {\n  width: 100%;\n  margin-left: 4px; }\n\n.card-title-comments {\n  font-size: 25px; }\n\n.litle-card .card-header {\n  height: 45px; }\n\n.litle-card .card-text {\n  padding: 7px 0 0 24px; }\n\n.litle-card .card-actions {\n  width: 140px; }\n\n.litle-card md-card-subtitle md-icon {\n  font-size: 18px; }\n\n.litle-card md-card-title,\n.litle-card md-card-subtitle {\n  display: inline-block; }\n\n@media (max-width: 600px) {\n  md-grid-list {\n    height: auto !important; }\n  md-grid-tile {\n    display: block !important;\n    position: relative !important;\n    top: auto !important;\n    left: 0 !important;\n    width: 100% !important;\n    margin-bottom: 15px !important; }\n  md-card {\n    margin-left: 0 !important;\n    width: 100% !important;\n    height: 95% !important;\n    overflow: hidden; }\n  md-input-container,\n  md-select {\n    width: 100% !important; } }\n\n.container {\n  margin-left: 0px;\n  margin-right: 0px;\n  width: 100%; }\n\n.not-found-info {\n  font-size: 30px;\n  text-align: center; }\n\n::-webkit-scrollbar {\n  width: 7px; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  border-radius: none; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: none;\n  background: #0D3446; }\n\n.snack-bar {\n  background: #0D3446 !important; }\n\n.snack-bar-error {\n  background: #D21A6B !important; }\n\nbutton:focus,\na:focus {\n  outline: none; }\n\ninput:disabled {\n  color: #000000 !important; }\n\n.icon-priority {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 20px;\n  height: 45px; }\n  .icon-priority.HIGH {\n    background: #D21A6B; }\n  .icon-priority.MEDIUM {\n    background: #FFF3CD; }\n  .icon-priority.LOW {\n    background: #CCE5FF; }\n  .icon-priority md-icon {\n    font-size: 12px; }\n\n.taskListContainer {\n  margin-top: 10px; }\n\n@media (max-width: 600px) {\n  md-card-header {\n    display: block !important;\n    height: 160px !important; }\n  .card-text {\n    margin-top: 5px !important;\n    padding-top: 0px !important; }\n  .task-description {\n    display: block !important; }\n  md-card-title {\n    top: 10px !important;\n    margin-left: 10px !important;\n    position: absolute !important; }\n  md-card-subtitle {\n    margin-left: 10px !important;\n    top: 34px !important;\n    position: relative !important;\n    margin-top: 15px !important; }\n  .card-actions {\n    width: 100% !important;\n    position: absolute !important;\n    text-align: center !important;\n    left: 0 !important;\n    bottom: 0 !important; }\n  .card-icons {\n    margin-top: 40px !important; }\n  .icon-priority {\n    height: 100%; }\n  .buttons-group {\n    z-index: 99; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/task-components/tasks/tasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tasks_tasks_service__ = __webpack_require__("../../../../../src/app/services/tasks/tasks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__enums_taskStatus_enum__ = __webpack_require__("../../../../../src/app/enums/taskStatus.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__enums_taskPriority_enum__ = __webpack_require__("../../../../../src/app/enums/taskPriority.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var notFound = 'Not found tasks';
var getting = 'Getting tasks';
var TasksComponent = (function () {
    function TasksComponent(TasksService, router, slimLoadingBarService, snackBar) {
        this.TasksService = TasksService;
        this.router = router;
        this.slimLoadingBarService = slimLoadingBarService;
        this.snackBar = snackBar;
        this.defaultImage = '../../../assets/default_task.png';
        this.tituloVista = 'Tasks';
        this.tasks = [];
        this.todoTasks = [];
        this.doingTasks = [];
        this.doneTasks = [];
    }
    TasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.infoMessage = getting;
        this.startLoading();
        this.TasksService.getAll()
            .subscribe(function (tasks) {
            _this.infoMessage = notFound;
            _this.tasks = __WEBPACK_IMPORTED_MODULE_5_underscore__["groupBy"](__WEBPACK_IMPORTED_MODULE_5_underscore__["sortBy"](tasks, function (task) {
                return [__WEBPACK_IMPORTED_MODULE_6__enums_taskStatus_enum__["a" /* taskStatus */][task.status], __WEBPACK_IMPORTED_MODULE_7__enums_taskPriority_enum__["a" /* taskPriority */][task.priority]].join("_");
            }), 'status');
            console.log(_this.tasks);
            _this.todoTasks = _this.tasks.TODO ? _this.tasks.TODO : [];
            _this.doingTasks = _this.tasks.DOING ? _this.tasks.DOING : [];
            _this.doneTasks = _this.tasks.DONE ? _this.tasks.DONE : [];
            // Finish loading bar
            _this.completeLoading();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    TasksComponent.prototype.actionTask = function (action, task) {
        var params = [
            '/task',
            action
        ];
        if (action !== 'create') {
            params = params.concat([task._id]);
        }
        this.router.navigate(params);
    };
    TasksComponent.prototype.startLoading = function () {
        this.slimLoadingBarService.start();
    };
    TasksComponent.prototype.completeLoading = function () {
        var _this = this;
        setTimeout(function () {
            _this.slimLoadingBarService.complete();
        });
    };
    TasksComponent.prototype.openSnackBar = function (message, error) {
        this.snackBar.open(message, null, {
            duration: 5000,
            extraClasses: !error ? ['snack-bar'] : ['snack-bar-error']
        });
    };
    TasksComponent.prototype.deleteTask = function (id) {
        var _this = this;
        this.startLoading();
        this.TasksService.delete(id)
            .subscribe(function (result) {
            _this.tasks = __WEBPACK_IMPORTED_MODULE_5_underscore__["without"](_this.tasks, __WEBPACK_IMPORTED_MODULE_5_underscore__["findWhere"](_this.tasks, { _id: result._id }));
            _this.openSnackBar('Task «' + result.name + '» deleted correctly', null);
            _this.completeLoading();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    TasksComponent.prototype.cancelDeleteTask = function () {
        this.openSnackBar('Cancelled operation', null);
    };
    return TasksComponent;
}());
TasksComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-tasks',
        template: __webpack_require__("../../../../../src/app/components/task-components/tasks/tasks.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/task-components/tasks/tasks.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_tasks_tasks_service__["a" /* TasksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tasks_tasks_service__["a" /* TasksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MdSnackBar */]) === "function" && _d || Object])
], TasksComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=tasks.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/team-components/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<app-view-title titulo=\"{{tituloVista}}\" subtitulo=\"{{subtituloVista | capitalize}}\"></app-view-title>\r\n\r\n<md-grid-list cols=\"4\" rowHeight=\"250px\">\r\n  <md-grid-tile colspan=\"1\">\r\n    <md-card style=\"width: 95%; padding: 0; height: 95%;\">\r\n      <div style=\"position: relative; height: 100%;\">\r\n        <img md-card-avatar class=\"header-image\" src=\"{{team['teamLogo64'] || defaultImage}}\" alt=\"\">\r\n        <div style=\"position: absolute; right: 5px; top: 5px;\" *ngIf=\"isEditForm()\">\r\n          <button md-fab class=\"button-action\">\r\n            <label for=\"uploadPhoto\"><md-icon class=\"icon-file\">photo_camera</md-icon></label>\r\n          </button>\r\n          <input id=\"uploadPhoto\" type=\"file\" style=\"display: none;\" (change)=\"upload($event, 'photo')\">\r\n        </div>\r\n\r\n        <img src=\"{{team['teamPhoto64'] || defaultPhoto}}\" style=\"width: 100%; height: 238px;\" alt=\"\">\r\n        <div style=\"position: absolute; bottom: 6px; left: 6px;\" *ngIf=\"isEditForm()\">\r\n          <button md-fab class=\"button-action\">\r\n            <label for=\"uploadLogo\"><md-icon class=\"icon-file\">create</md-icon></label>\r\n          </button>\r\n          <input id=\"uploadLogo\" type=\"file\" style=\"display: none;\" (change)=\"upload($event, 'logo')\">\r\n        </div>\r\n      </div>\r\n    </md-card>\r\n  </md-grid-tile>\r\n\r\n  <md-grid-tile colspan=\"3\">\r\n    <md-card style=\"width: 95%; height: 95%;\">\r\n      <md-card-content style=\"padding: 0 5px;\">\r\n        <div>\r\n          <md-input-container style=\"width: 50%;\">\r\n            <input mdInput placeholder=\"Name\" [(ngModel)]=\"team['name']\" [disabled]=\"!isEditForm()\">\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div>\r\n          <md-input-container style=\"width: 100%;\">\r\n            <input mdInput maxlength=\"256\" placeholder=\"Description\" [(ngModel)]=\"team['description']\" [disabled]=\"!isEditForm()\">\r\n            <md-hint align=\"end\" *ngIf=\"isEditForm()\">{{team['description'] ? team['description'].length : 0}} / 256</md-hint>\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div style=\"margin-top: -2px;\">\r\n          <md-select placeholder=\"Leader\" style=\"width: 50%;\" [disabled]=\"!isEditForm()\">\r\n            <md-option *ngFor=\"let user of users\" [value]=\"user.value\">\r\n              {{ user.name }}\r\n            </md-option>\r\n          </md-select>\r\n        </div>\r\n      </md-card-content>\r\n    </md-card>\r\n  </md-grid-tile>\r\n\r\n  <md-grid-tile colspan=\"2\">\r\n    <md-card style=\"width: 97%; padding: 0; height: 85%;\">\r\n      <md-card-header class=\"card-header-team\">\r\n        <div>\r\n          <md-card-title class=\"card-title-team\">\r\n            <span class=\"title-space\">Users</span>\r\n            <a md-fab class=\"button-action\" *ngIf=\"isEditForm()\" (click)=\"addUsers()\" style=\"margin-top: -4px;\"><md-icon>add</md-icon></a>\r\n          </md-card-title>\r\n        </div>\r\n      </md-card-header>\r\n      <md-card-content style=\"padding: 0 25px;\">\r\n        <div>\r\n          <md-select placeholder=\"Users\" multiple style=\"width: 100%;\"  [(ngModel)]=\"team['users']\" [disabled]=\"!isEditForm()\">\r\n            <md-optgroup label=\"{{group.key}}\" *ngFor=\"let group of usersGroup | objectNgFor\">\r\n              <md-option [value]=\"user._id\" *ngFor=\"let user of group.value\">\r\n                <span>{{user.name}} {{user.lastName}}</span> |\r\n                <small>{{user.username}}</small>\r\n              </md-option>\r\n            </md-optgroup>\r\n          </md-select>\r\n        </div>\r\n      </md-card-content>\r\n    </md-card>\r\n  </md-grid-tile>\r\n\r\n  <md-grid-tile colspan=\"2\">\r\n    <md-card style=\"width: 92%; padding: 0; height: 85%;\">\r\n      <md-card-header class=\"card-header-team\">\r\n        <div>\r\n          <md-card-title class=\"card-title-team\">\r\n            <span class=\"title-space\">Projects</span>\r\n            <a md-fab class=\"button-action\" *ngIf=\"isEditForm()\" (click)=\"addProjects()\" style=\"margin-top: -4px;\"><md-icon>add</md-icon></a>\r\n          </md-card-title>\r\n        </div>\r\n      </md-card-header>\r\n    </md-card>\r\n  </md-grid-tile>\r\n</md-grid-list>\r\n\r\n<div *ngIf=\"this.action !== 'create'\" style=\"padding-left: 15px;\">\r\n  <div class=\"date-info\">\r\n    <div class=\"date-title\">Creation Date</div>\r\n    <div class=\"date-content\">{{team['creationDateString']}}</div>\r\n  </div>\r\n  <div class=\"date-info\">\r\n    <div class=\"date-title\">Last Modification Date</div>\r\n    <div class=\"date-content\">{{team['modificationDateString']}}</div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"buttons-group\">\r\n  <a md-fab class=\"deleteButton\" *ngIf=\"this.action !== 'create'\">\r\n    <delete-confirmation type=\"team\" name=\"{{team.name}}\" (actionYes)=\"deleteTeam(team._id)\" (actionNo)=\"cancelDeleteTeam()\" styleClass=\"delete-confirmation-circle\"></delete-confirmation>\r\n  </a>\r\n  <a md-fab class=\"addButton\" (click)=\"saveTeam()\"><md-icon>{{isEditForm() ? 'save' : 'edit'}}</md-icon></a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/team-components/team/team.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../angular-calendar/dist/css/angular-calendar.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbutton[md-raised-button] {\n  background: #0D3446 !important;\n  color: #FFFFFF !important; }\n  button[md-raised-button][disabled] {\n    background: #373a3c !important; }\n\n.button-action {\n  background: #0D3446 !important;\n  width: 30px !important;\n  height: 30px !important; }\n  .button-action span {\n    line-height: 0 !important; }\n  .button-action label {\n    cursor: pointer;\n    height: 25px;\n    margin: 0; }\n    .button-action label .icon-file {\n      line-height: 0;\n      font-size: 17px; }\n  .button-action md-icon {\n    line-height: 0;\n    font-size: 20px; }\n\n.buttons-group {\n  position: -webkit-sticky;\n  position: sticky;\n  text-align: right;\n  width: 100%;\n  left: 0;\n  bottom: 6px;\n  right: 58px; }\n  .buttons-group > .addButton {\n    background: #0D3446 !important;\n    color: #FFFFFF !important; }\n  .buttons-group > .deleteButton {\n    background: #D21A6B !important;\n    color: #FFFFFF !important;\n    width: 35px;\n    height: 35px;\n    font-size: 11px;\n    right: 63px;\n    bottom: 3px;\n    position: absolute; }\n\n.card {\n  padding: 0;\n  border: 0px; }\n\n.card-header {\n  position: relative;\n  padding: 0;\n  border-bottom-width: 0px;\n  height: 120px; }\n\n.card-text {\n  padding: 24px 0 0 24px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 auto;\n          flex: 1 auto; }\n  .card-text .card-icons {\n    color: #0D3446; }\n\n.card-actions {\n  width: 65px;\n  background: #D8DFE2;\n  text-align: center; }\n  .card-actions > button {\n    color: #0D3446; }\n\nmd-card-title {\n  font-size: 20px !important; }\n\nmd-card-subtitle {\n  margin-bottom: 0 !important; }\n\n.header-image {\n  background-size: cover;\n  height: 120px;\n  width: 120px;\n  border-radius: 0; }\n\n.card-header-comments div {\n  width: 100%;\n  margin-left: 4px; }\n\n.card-title-comments {\n  font-size: 25px; }\n\n.litle-card .card-header {\n  height: 45px; }\n\n.litle-card .card-text {\n  padding: 7px 0 0 24px; }\n\n.litle-card .card-actions {\n  width: 140px; }\n\n.litle-card md-card-subtitle md-icon {\n  font-size: 18px; }\n\n.litle-card md-card-title,\n.litle-card md-card-subtitle {\n  display: inline-block; }\n\n@media (max-width: 600px) {\n  md-grid-list {\n    height: auto !important; }\n  md-grid-tile {\n    display: block !important;\n    position: relative !important;\n    top: auto !important;\n    left: 0 !important;\n    width: 100% !important;\n    margin-bottom: 15px !important; }\n  md-card {\n    margin-left: 0 !important;\n    width: 100% !important;\n    height: 95% !important;\n    overflow: hidden; }\n  md-input-container,\n  md-select {\n    width: 100% !important; } }\n\n.container {\n  margin-left: 0px;\n  margin-right: 0px;\n  width: 100%; }\n\n.not-found-info {\n  font-size: 30px;\n  text-align: center; }\n\n::-webkit-scrollbar {\n  width: 7px; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  border-radius: none; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: none;\n  background: #0D3446; }\n\n.snack-bar {\n  background: #0D3446 !important; }\n\n.snack-bar-error {\n  background: #D21A6B !important; }\n\nbutton:focus,\na:focus {\n  outline: none; }\n\ninput:disabled {\n  color: #000000 !important; }\n\n.header-image {\n  position: absolute;\n  height: 75px;\n  width: 75px;\n  bottom: 10px;\n  left: 10px;\n  border-radius: 50%;\n  border: 1px solid #ddd; }\n\n.card-header-team {\n  padding: 15px;\n  padding-bottom: 0; }\n  .card-header-team div {\n    width: 100%;\n    margin-left: -8px; }\n\n.card-title-team {\n  font-size: 25px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: 0px; }\n  .card-title-team > .title-space {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 auto;\n            flex: 1 auto; }\n\n.date-info > div {\n  font-size: 14px;\n  display: inline-block; }\n  .date-info > div.date-title {\n    width: 200px; }\n  .date-info > div.date-content {\n    width: 150px;\n    text-align: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/team-components/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_teams_teams_service__ = __webpack_require__("../../../../../src/app/services/teams/teams.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_users_service__ = __webpack_require__("../../../../../src/app/services/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classes_team__ = __webpack_require__("../../../../../src/app/classes/team.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TeamComponent = (function () {
    function TeamComponent(TeamsService, UsersService, router, route, slimLoadingBarService, snackBar) {
        this.TeamsService = TeamsService;
        this.UsersService = UsersService;
        this.router = router;
        this.route = route;
        this.slimLoadingBarService = slimLoadingBarService;
        this.snackBar = snackBar;
        this.defaultPhoto = '../../../assets/default_image.png';
        this.defaultImage = '../../../assets/default_user.png';
        this.tituloVista = 'Team';
        this.team = new __WEBPACK_IMPORTED_MODULE_6__classes_team__["a" /* Team */]();
        this.usersGroup = [];
    }
    TeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.startLoading();
        this.route.params.subscribe(function (params) {
            _this.subtituloVista = _this.action = params['action'];
            __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].combineLatest(_this.UsersService.getAllWithoutPhoto()).subscribe(function (data) {
                _this.getUsers(data[0]);
                var kActions = (_a = {},
                    _a['create'] = function () { return _this.completeLoading(); },
                    _a['view'] = function () { return _this.getTeam(params['id']); },
                    _a['edit'] = function () { return _this.getTeam(params['id']); },
                    _a);
                kActions[_this.action]();
                var _a;
            }, function (error) {
                _this.completeLoading();
                _this.openSnackBar(error.statusText, true);
            });
        });
    };
    TeamComponent.prototype.getUsers = function (users) {
        this.usersGroup = __WEBPACK_IMPORTED_MODULE_8_underscore__["groupBy"](users, 'rank');
        console.log(this.usersGroup);
    };
    TeamComponent.prototype.getTeam = function (teamID) {
        var _this = this;
        this.TeamsService.get(teamID)
            .subscribe(function (team) {
            console.log(team);
            _this.team = team;
            _this.team.creationDate = _this.utcToDate(_this.team.creationDate);
            _this.team.modificationDate = _this.utcToDate(_this.team.modificationDate);
            _this.team['creationDateString'] = _this.team.creationDate ? _this.team.creationDate.toLocaleString() : '-';
            _this.team['modificationDateString'] = _this.team.modificationDate ? _this.team.modificationDate.toLocaleString() : '-';
            _this.completeLoading();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    TeamComponent.prototype.utcToDate = function (utc) {
        return utc ? new Date(Date.parse(utc)) : null;
    };
    ;
    TeamComponent.prototype.isEditForm = function () {
        return this.action !== 'view';
    };
    TeamComponent.prototype.startLoading = function () {
        this.slimLoadingBarService.start();
    };
    TeamComponent.prototype.completeLoading = function () {
        var _this = this;
        setTimeout(function () {
            _this.slimLoadingBarService.complete();
        });
    };
    TeamComponent.prototype.openSnackBar = function (message, error) {
        this.snackBar.open(message, null, {
            duration: 5000,
            extraClasses: !error ? ['snack-bar'] : ['snack-bar-error']
        });
    };
    TeamComponent.prototype.upload = function (res, type) {
        this.readImage(res.target, type);
    };
    TeamComponent.prototype.readImage = function (inputValue, type) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            if (type === 'photo') {
                _this.team.teamPhoto64 = myReader.result;
            }
            else {
                _this.team.teamLogo64 = myReader.result;
            }
        };
        myReader.readAsDataURL(file);
    };
    TeamComponent.prototype.addUsers = function () {
        this.openSnackBar('Operation not available', null);
    };
    TeamComponent.prototype.addProjects = function () {
        this.openSnackBar('Operation not available', null);
    };
    TeamComponent.prototype.saveTeam = function () {
        var _this = this;
        var kSave = (_a = {},
            _a['create'] = function () { return _this.createTeam(); },
            _a['edit'] = function () { return _this.updateTeam(); },
            _a['view'] = function () { return _this.editTeam(); },
            _a);
        kSave[this.action]();
        var _a;
    };
    TeamComponent.prototype.createTeam = function () {
        var _this = this;
        this.startLoading();
        this.team.creationDate = new Date();
        this.TeamsService.create(this.team)
            .subscribe(function (result) {
            _this.openSnackBar('Team «' + result.name + '» created correctly', null);
            _this.completeLoading();
            _this.back();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    TeamComponent.prototype.updateTeam = function () {
        var _this = this;
        this.startLoading();
        this.team.teamPhoto = {};
        this.team.teamLogo = {};
        this.team.modificationDate = new Date();
        this.TeamsService.update(this.team)
            .subscribe(function (result) {
            _this.openSnackBar('Team «' + result.name + '» updated correctly', null);
            _this.completeLoading();
            _this.viewTeam();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    TeamComponent.prototype.editTeam = function () {
        this.router.navigate(['/team', 'edit', this.team._id]);
    };
    TeamComponent.prototype.viewTeam = function () {
        this.router.navigate(['/team', 'view', this.team._id]);
    };
    TeamComponent.prototype.deleteTeam = function (id) {
        var _this = this;
        this.startLoading();
        this.TeamsService.delete(id)
            .subscribe(function (result) {
            _this.openSnackBar('Team «' + result.name + '» deleted correctly', null);
            _this.completeLoading();
            _this.back();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    TeamComponent.prototype.cancelDeleteTeam = function () {
        this.openSnackBar('Cancelled operation', null);
    };
    TeamComponent.prototype.back = function () {
        this.router.navigate(['/teams']);
    };
    return TeamComponent;
}());
TeamComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-team',
        template: __webpack_require__("../../../../../src/app/components/team-components/team/team.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/team-components/team/team.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_teams_teams_service__["a" /* TeamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_teams_teams_service__["a" /* TeamsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["A" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["A" /* MdSnackBar */]) === "function" && _f || Object])
], TeamComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=team.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/team-components/teams/teams.component.html":
/***/ (function(module, exports) {

module.exports = "<app-view-title titulo=\"{{tituloVista}}\"></app-view-title>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row not-found-info\" *ngIf=\"!teams.length\">\r\n    {{infoMessage}}\r\n  </div>\r\n\r\n  <div class=\"row\" *ngFor=\"let team of teams\">\r\n    <md-card class=\"card\">\r\n      <md-card-header class=\"card-header\">\r\n        <span class=\"header-image-teams\">\r\n          <img md-card-avatar class=\"image-teams\" [@imageAnimation] src=\"{{defaultImage}}\" *ngIf=\"!team.teamPhoto64\">\r\n          <img md-card-avatar class=\"image-teams\" [@imageAnimation] src=\"{{team.teamPhoto64}}\" *ngIf=\"team.teamPhoto64\">\r\n        </span>\r\n\r\n        <span class=\"card-text\">\r\n          <md-card-title>\r\n            <span>\r\n              {{team.name}}\r\n            </span>\r\n        <span class=\"team-description\" *ngIf=\"team.description\">\r\n              - {{team.description}}\r\n            </span>\r\n        </md-card-title>\r\n        <md-card-subtitle>\r\n          <p class=\"card-icons\">\r\n            <md-icon>group</md-icon> <span>{{team.users.length}}</span>\r\n            <md-icon>folder</md-icon> <span>{{team.projects.length}}</span>\r\n          </p>\r\n        </md-card-subtitle>\r\n        </span>\r\n        <span class=\"card-actions\">\r\n          <button md-icon-button (click)=\"actionTeam('view', team)\">\r\n            <md-icon>search</md-icon>\r\n          </button>\r\n          <button md-icon-button (click)=\"actionTeam('edit', team)\">\r\n            <md-icon>edit</md-icon>\r\n          </button>\r\n          <delete-confirmation type=\"team\" name=\"{{team.name}}\" (actionYes)=\"deleteTeam(team._id)\" (actionNo)=\"cancelDeleteTeam()\"></delete-confirmation>\r\n        </span>\r\n      </md-card-header>\r\n    </md-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"buttons-group\">\r\n  <a md-fab class=\"addButton\" (click)=\"actionTeam('create')\">\r\n    <md-icon>add</md-icon>\r\n  </a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/team-components/teams/teams.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../angular-calendar/dist/css/angular-calendar.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbutton[md-raised-button] {\n  background: #0D3446 !important;\n  color: #FFFFFF !important; }\n  button[md-raised-button][disabled] {\n    background: #373a3c !important; }\n\n.button-action {\n  background: #0D3446 !important;\n  width: 30px !important;\n  height: 30px !important; }\n  .button-action span {\n    line-height: 0 !important; }\n  .button-action label {\n    cursor: pointer;\n    height: 25px;\n    margin: 0; }\n    .button-action label .icon-file {\n      line-height: 0;\n      font-size: 17px; }\n  .button-action md-icon {\n    line-height: 0;\n    font-size: 20px; }\n\n.buttons-group {\n  position: -webkit-sticky;\n  position: sticky;\n  text-align: right;\n  width: 100%;\n  left: 0;\n  bottom: 6px;\n  right: 58px; }\n  .buttons-group > .addButton {\n    background: #0D3446 !important;\n    color: #FFFFFF !important; }\n  .buttons-group > .deleteButton {\n    background: #D21A6B !important;\n    color: #FFFFFF !important;\n    width: 35px;\n    height: 35px;\n    font-size: 11px;\n    right: 63px;\n    bottom: 3px;\n    position: absolute; }\n\n.card {\n  padding: 0;\n  border: 0px; }\n\n.card-header {\n  position: relative;\n  padding: 0;\n  border-bottom-width: 0px;\n  height: 120px; }\n\n.card-text {\n  padding: 24px 0 0 24px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 auto;\n          flex: 1 auto; }\n  .card-text .card-icons {\n    color: #0D3446; }\n\n.card-actions {\n  width: 65px;\n  background: #D8DFE2;\n  text-align: center; }\n  .card-actions > button {\n    color: #0D3446; }\n\nmd-card-title {\n  font-size: 20px !important; }\n\nmd-card-subtitle {\n  margin-bottom: 0 !important; }\n\n.header-image {\n  background-size: cover;\n  height: 120px;\n  width: 120px;\n  border-radius: 0; }\n\n.card-header-comments div {\n  width: 100%;\n  margin-left: 4px; }\n\n.card-title-comments {\n  font-size: 25px; }\n\n.litle-card .card-header {\n  height: 45px; }\n\n.litle-card .card-text {\n  padding: 7px 0 0 24px; }\n\n.litle-card .card-actions {\n  width: 140px; }\n\n.litle-card md-card-subtitle md-icon {\n  font-size: 18px; }\n\n.litle-card md-card-title,\n.litle-card md-card-subtitle {\n  display: inline-block; }\n\n@media (max-width: 600px) {\n  md-grid-list {\n    height: auto !important; }\n  md-grid-tile {\n    display: block !important;\n    position: relative !important;\n    top: auto !important;\n    left: 0 !important;\n    width: 100% !important;\n    margin-bottom: 15px !important; }\n  md-card {\n    margin-left: 0 !important;\n    width: 100% !important;\n    height: 95% !important;\n    overflow: hidden; }\n  md-input-container,\n  md-select {\n    width: 100% !important; } }\n\n.container {\n  margin-left: 0px;\n  margin-right: 0px;\n  width: 100%; }\n\n.not-found-info {\n  font-size: 30px;\n  text-align: center; }\n\n::-webkit-scrollbar {\n  width: 7px; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  border-radius: none; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: none;\n  background: #0D3446; }\n\n.snack-bar {\n  background: #0D3446 !important; }\n\n.snack-bar-error {\n  background: #D21A6B !important; }\n\nbutton:focus,\na:focus {\n  outline: none; }\n\ninput:disabled {\n  color: #000000 !important; }\n\n.header-image-teams {\n  position: relative;\n  width: 120px;\n  margin-left: -17px; }\n  .header-image-teams .image-teams {\n    background-size: cover;\n    height: 120px;\n    width: 120px;\n    border-radius: 0;\n    position: absolute; }\n\n.card {\n  padding: 0;\n  border: 0px; }\n\n.card-header {\n  position: relative;\n  padding: 0;\n  border-bottom-width: 0px;\n  height: 120px; }\n\n.card-text {\n  padding: 24px 0 0 24px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 auto;\n          flex: 1 auto; }\n  .card-text .card-icons {\n    color: #0D3446; }\n\n.card-actions {\n  width: 65px;\n  background: #D8DFE2;\n  text-align: center; }\n  .card-actions > button {\n    color: #0D3446; }\n\nmd-card-title {\n  font-size: 20px !important; }\n\nmd-card-subtitle {\n  margin-bottom: 0 !important; }\n\n.container {\n  margin-left: 0px;\n  margin-right: 0px;\n  width: 100%; }\n\n.team-description {\n  zoom: 70%;\n  font-style: italic; }\n\n@media (max-width: 600px) {\n  md-card-header {\n    display: block !important;\n    height: 160px !important; }\n  .header-image-teams {\n    margin-left: 0 !important; }\n  .image-teams {\n    position: absolute !important; }\n  .card-text {\n    margin-top: 5px !important;\n    padding-top: 0px !important; }\n  .team-description {\n    display: block !important; }\n  md-card-title {\n    top: 10px !important;\n    margin-left: 135px !important;\n    position: absolute !important; }\n  md-card-subtitle {\n    margin-left: 135px !important;\n    top: 34px !important;\n    position: relative !important; }\n  .card-actions {\n    width: 100% !important;\n    top: 120px !important;\n    position: absolute !important;\n    text-align: center !important; }\n  .card-icons {\n    margin-top: 40px !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/team-components/teams/teams.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_teams_teams_service__ = __webpack_require__("../../../../../src/app/services/teams/teams.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animations_animations__ = __webpack_require__("../../../../../src/app/animations/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var notFound = 'Not found teams';
var getting = 'Getting teams';
var TeamsComponent = (function () {
    function TeamsComponent(TeamsService, router, slimLoadingBarService, snackBar) {
        this.TeamsService = TeamsService;
        this.router = router;
        this.slimLoadingBarService = slimLoadingBarService;
        this.snackBar = snackBar;
        this.defaultImage = '../../../assets/default_image.png';
        this.tituloVista = 'Teams';
        this.teams = [];
    }
    TeamsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.infoMessage = getting;
        // Start loading bar
        this.startLoading();
        this.TeamsService.getAll()
            .subscribe(function (teams) {
            _this.infoMessage = notFound;
            _this.teams = teams;
            _this.getTeamPhotos();
            // Finish loading bar
            _this.completeLoading();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    TeamsComponent.prototype.getTeamPhotos = function () {
        var teamService = this.TeamsService;
        __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](this.teams, function (team) {
            teamService.getPhoto(team._id)
                .subscribe(function (photo) {
                team.teamPhoto64 = photo.teamPhoto64;
            });
        });
    };
    TeamsComponent.prototype.startLoading = function () {
        this.slimLoadingBarService.start();
    };
    TeamsComponent.prototype.completeLoading = function () {
        var _this = this;
        setTimeout(function () {
            _this.slimLoadingBarService.complete();
        });
    };
    TeamsComponent.prototype.openSnackBar = function (message, error) {
        this.snackBar.open(message, null, {
            duration: 5000,
            extraClasses: !error ? ['snack-bar'] : ['snack-bar-error']
        });
    };
    TeamsComponent.prototype.actionTeam = function (action, team) {
        var params = [
            '/team',
            action
        ];
        if (action !== 'create') {
            params = params.concat([team._id]);
        }
        this.router.navigate(params);
    };
    TeamsComponent.prototype.deleteTeam = function (id) {
        var _this = this;
        this.startLoading();
        this.TeamsService.delete(id)
            .subscribe(function (result) {
            _this.teams = __WEBPACK_IMPORTED_MODULE_5_underscore__["without"](_this.teams, __WEBPACK_IMPORTED_MODULE_5_underscore__["findWhere"](_this.teams, { _id: result._id }));
            _this.openSnackBar('Team «' + result.name + '» deleted correctly', null);
            _this.completeLoading();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    TeamsComponent.prototype.cancelDeleteTeam = function () {
        this.openSnackBar('Cancelled operation', null);
    };
    return TeamsComponent;
}());
TeamsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-teams',
        template: __webpack_require__("../../../../../src/app/components/team-components/teams/teams.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/team-components/teams/teams.component.scss")],
        animations: [__WEBPACK_IMPORTED_MODULE_6__animations_animations__["a" /* imageAnimation */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_teams_teams_service__["a" /* TeamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_teams_teams_service__["a" /* TeamsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MdSnackBar */]) === "function" && _d || Object])
], TeamsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=teams.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user-components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<app-view-title titulo=\"{{tituloVista}}\" subtitulo=\"{{subtituloVista | capitalize}}\"></app-view-title>\r\n\r\n<md-grid-list cols=\"6\" rowHeight=\"200px\">\r\n  <md-grid-tile colspan=\"1\">\r\n    <md-card style=\"width: 78%; padding: 0; height: 95%;\">\r\n      <div style=\"position: relative; height: 100%;\">\r\n        <div style=\"position: absolute; right: 5px; top: 5px;\" *ngIf=\"isEditForm()\">\r\n          <button md-fab class=\"button-action\">\r\n            <label for=\"uploadPhoto\"><md-icon class=\"icon-file\">photo_camera</md-icon></label>\r\n          </button>\r\n          <input id=\"uploadPhoto\" type=\"file\" style=\"display: none;\" (change)=\"upload($event)\">\r\n        </div>\r\n        <img src=\"{{user['userPhoto64'] || defaultPhoto}}\" style=\"width: 100%; height: 190px;\" alt=\"\">\r\n      </div>\r\n    </md-card>\r\n  </md-grid-tile>\r\n\r\n  <md-grid-tile colspan=\"5\">\r\n    <md-card style=\"width: 95%; height: 95%;\">\r\n      <md-card-content style=\"padding: 0 5px;\">\r\n        <div>\r\n          <md-input-container style=\"width: 50%;\">\r\n            <input mdInput placeholder=\"Username\" [(ngModel)]=\"user['username']\" [disabled]=\"!isEditForm()\">\r\n          </md-input-container>\r\n        </div>\r\n        <div>\r\n          <md-input-container style=\"width: 50%;\">\r\n            <input type=\"password\" mdInput placeholder=\"Password\" [(ngModel)]=\"user['password']\" [disabled]=\"!isEditForm()\">\r\n          </md-input-container>\r\n        </div>\r\n      </md-card-content>\r\n    </md-card>\r\n  </md-grid-tile>\r\n</md-grid-list>\r\n\r\n<md-grid-list cols=\"4\" rowHeight=\"325px\">\r\n  <md-grid-tile colspan=\"2\">\r\n    <md-card style=\"width: 92%; height: 85%;\">\r\n      <md-card-content style=\"padding: 0 5px;\">\r\n        <div>\r\n          <md-input-container style=\"width: 50%;\">\r\n            <input mdInput placeholder=\"Name\" [(ngModel)]=\"user['name']\" [disabled]=\"!isEditForm()\">\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div>\r\n          <md-input-container style=\"width: 100%;\">\r\n            <input mdInput maxlength=\"50\" placeholder=\"Last Name\" [(ngModel)]=\"user['lastName']\" [disabled]=\"!isEditForm()\">\r\n            <md-hint align=\"end\" *ngIf=\"isEditForm()\">{{user['lastName'] ? user['lastName'].length : 0}} / 50</md-hint>\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div>\r\n          <md-input-container style=\"width: 50%;\">\r\n            <input type=\"number\" mdInput placeholder=\"Phone\" [(ngModel)]=\"user['phone']\" [disabled]=\"!isEditForm()\">\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div style=\"margin-top: -8px;\">\r\n          <md-select placeholder=\"Rank\" style=\"width: 25%;\" [disabled]=\"!isEditForm()\"  [(ngModel)]=\"user['rank']\">\r\n            <md-option *ngFor=\"let rank of ranks\" [value]=\"rank\" >\r\n              {{ rank }}\r\n            </md-option>\r\n          </md-select>\r\n        </div>\r\n      </md-card-content>\r\n    </md-card>\r\n  </md-grid-tile>\r\n\r\n  <md-grid-tile colspan=\"2\">\r\n    <md-card style=\"width: 92%; padding: 0; height: 85%;\">\r\n      <md-card-header class=\"card-header-skills\">\r\n        <div>\r\n          <md-card-title class=\"card-title-skills\">\r\n            <span class=\"title-space\">Skills</span>\r\n            <a md-fab class=\"button-action\" *ngIf=\"isEditForm()\" (click)=\"addSkils()\" style=\"margin-top: -4px;\"><md-icon>add</md-icon></a>\r\n          </md-card-title>\r\n        </div>\r\n      </md-card-header>\r\n    </md-card>\r\n  </md-grid-tile>\r\n</md-grid-list>\r\n\r\n<div *ngIf=\"this.action !== 'create'\" style=\"padding-left: 15px;\">\r\n  <div class=\"date-info\">\r\n    <div class=\"date-title\">Creation Date</div>\r\n    <div class=\"date-content\">{{user['creationDateString']}}</div>\r\n  </div>\r\n  <div class=\"date-info\">\r\n    <div class=\"date-title\">Last Modification Date</div>\r\n    <div class=\"date-content\">{{user['modificationDateString']}}</div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"buttons-group\">\r\n  <a md-fab class=\"deleteButton\" *ngIf=\"this.action !== 'create'\">\r\n    <delete-confirmation type=\"user\" name=\"{{user.name}}\" (actionYes)=\"deleteUser(user._id)\" (actionNo)=\"cancelDeletedUser()\" styleClass=\"delete-confirmation-circle\"></delete-confirmation>\r\n  </a>\r\n  <a md-fab class=\"addButton\" (click)=\"saveUser()\"><md-icon>{{isEditForm() ? 'save' : 'edit'}}</md-icon></a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user-components/user/user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../angular-calendar/dist/css/angular-calendar.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbutton[md-raised-button] {\n  background: #0D3446 !important;\n  color: #FFFFFF !important; }\n  button[md-raised-button][disabled] {\n    background: #373a3c !important; }\n\n.button-action {\n  background: #0D3446 !important;\n  width: 30px !important;\n  height: 30px !important; }\n  .button-action span {\n    line-height: 0 !important; }\n  .button-action label {\n    cursor: pointer;\n    height: 25px;\n    margin: 0; }\n    .button-action label .icon-file {\n      line-height: 0;\n      font-size: 17px; }\n  .button-action md-icon {\n    line-height: 0;\n    font-size: 20px; }\n\n.buttons-group {\n  position: -webkit-sticky;\n  position: sticky;\n  text-align: right;\n  width: 100%;\n  left: 0;\n  bottom: 6px;\n  right: 58px; }\n  .buttons-group > .addButton {\n    background: #0D3446 !important;\n    color: #FFFFFF !important; }\n  .buttons-group > .deleteButton {\n    background: #D21A6B !important;\n    color: #FFFFFF !important;\n    width: 35px;\n    height: 35px;\n    font-size: 11px;\n    right: 63px;\n    bottom: 3px;\n    position: absolute; }\n\n.card {\n  padding: 0;\n  border: 0px; }\n\n.card-header {\n  position: relative;\n  padding: 0;\n  border-bottom-width: 0px;\n  height: 120px; }\n\n.card-text {\n  padding: 24px 0 0 24px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 auto;\n          flex: 1 auto; }\n  .card-text .card-icons {\n    color: #0D3446; }\n\n.card-actions {\n  width: 65px;\n  background: #D8DFE2;\n  text-align: center; }\n  .card-actions > button {\n    color: #0D3446; }\n\nmd-card-title {\n  font-size: 20px !important; }\n\nmd-card-subtitle {\n  margin-bottom: 0 !important; }\n\n.header-image {\n  background-size: cover;\n  height: 120px;\n  width: 120px;\n  border-radius: 0; }\n\n.card-header-comments div {\n  width: 100%;\n  margin-left: 4px; }\n\n.card-title-comments {\n  font-size: 25px; }\n\n.litle-card .card-header {\n  height: 45px; }\n\n.litle-card .card-text {\n  padding: 7px 0 0 24px; }\n\n.litle-card .card-actions {\n  width: 140px; }\n\n.litle-card md-card-subtitle md-icon {\n  font-size: 18px; }\n\n.litle-card md-card-title,\n.litle-card md-card-subtitle {\n  display: inline-block; }\n\n@media (max-width: 600px) {\n  md-grid-list {\n    height: auto !important; }\n  md-grid-tile {\n    display: block !important;\n    position: relative !important;\n    top: auto !important;\n    left: 0 !important;\n    width: 100% !important;\n    margin-bottom: 15px !important; }\n  md-card {\n    margin-left: 0 !important;\n    width: 100% !important;\n    height: 95% !important;\n    overflow: hidden; }\n  md-input-container,\n  md-select {\n    width: 100% !important; } }\n\n.container {\n  margin-left: 0px;\n  margin-right: 0px;\n  width: 100%; }\n\n.not-found-info {\n  font-size: 30px;\n  text-align: center; }\n\n::-webkit-scrollbar {\n  width: 7px; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  border-radius: none; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: none;\n  background: #0D3446; }\n\n.snack-bar {\n  background: #0D3446 !important; }\n\n.snack-bar-error {\n  background: #D21A6B !important; }\n\nbutton:focus,\na:focus {\n  outline: none; }\n\ninput:disabled {\n  color: #000000 !important; }\n\n.date-info > div {\n  font-size: 14px;\n  display: inline-block; }\n  .date-info > div.date-title {\n    width: 200px; }\n  .date-info > div.date-content {\n    width: 150px;\n    text-align: right; }\n\n.card-header-skills {\n  padding: 15px; }\n  .card-header-skills div {\n    width: 100%;\n    margin-left: -8px; }\n\n.card-title-skills {\n  font-size: 25px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .card-title-skills > .title-space {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 auto;\n            flex: 1 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_users_service__ = __webpack_require__("../../../../../src/app/services/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_user__ = __webpack_require__("../../../../../src/app/classes/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__enums_userRank_enum__ = __webpack_require__("../../../../../src/app/enums/userRank.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserComponent = (function () {
    function UserComponent(UsersService, router, route, slimLoadingBarService, snackBar) {
        this.UsersService = UsersService;
        this.router = router;
        this.route = route;
        this.slimLoadingBarService = slimLoadingBarService;
        this.snackBar = snackBar;
        this.defaultPhoto = '../../../assets/default_user.png';
        this.tituloVista = 'User';
        this.user = new __WEBPACK_IMPORTED_MODULE_5__classes_user__["a" /* User */]();
        this.ranks = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.startLoading();
        this.getRank();
        this.route.params.subscribe(function (params) {
            _this.subtituloVista = _this.action = params['action'];
            var kActions = (_a = {},
                _a['create'] = function () { return _this.completeLoading(); },
                _a['view'] = function () { return _this.getUser(params['id']); },
                _a['edit'] = function () { return _this.getUser(params['id']); },
                _a);
            kActions[_this.action]();
            var _a;
        });
    };
    UserComponent.prototype.getRank = function () {
        var keys = Object.keys(__WEBPACK_IMPORTED_MODULE_6__enums_userRank_enum__["a" /* userRank */]);
        this.ranks = keys.slice(keys.length / 2);
    };
    UserComponent.prototype.getUser = function (userID) {
        var _this = this;
        this.UsersService.get(userID)
            .subscribe(function (user) {
            console.log(user);
            _this.user = user;
            _this.user.creationDate = _this.utcToDate(_this.user.creationDate);
            _this.user.modificationDate = _this.utcToDate(_this.user.modificationDate);
            _this.user['creationDateString'] = _this.user.creationDate ? _this.user.creationDate.toLocaleString() : '-';
            _this.user['modificationDateString'] = _this.user.modificationDate ? _this.user.modificationDate.toLocaleString() : '-';
            _this.completeLoading();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    UserComponent.prototype.utcToDate = function (utc) {
        return utc ? new Date(Date.parse(utc)) : null;
    };
    ;
    UserComponent.prototype.isEditForm = function () {
        return this.action !== 'view';
    };
    UserComponent.prototype.startLoading = function () {
        this.slimLoadingBarService.start();
    };
    UserComponent.prototype.completeLoading = function () {
        var _this = this;
        setTimeout(function () {
            _this.slimLoadingBarService.complete();
        });
    };
    UserComponent.prototype.openSnackBar = function (message, error) {
        this.snackBar.open(message, null, {
            duration: 5000,
            extraClasses: !error ? ['snack-bar'] : ['snack-bar-error']
        });
    };
    UserComponent.prototype.upload = function (res) {
        this.readImage(res.target);
    };
    UserComponent.prototype.readImage = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.user.userPhoto64 = myReader.result;
        };
        myReader.readAsDataURL(file);
    };
    UserComponent.prototype.saveUser = function () {
        var _this = this;
        var kSave = (_a = {},
            _a['create'] = function () { return _this.createUser(); },
            _a['edit'] = function () { return _this.updateUser(); },
            _a['view'] = function () { return _this.editUser(); },
            _a);
        kSave[this.action]();
        var _a;
    };
    UserComponent.prototype.createUser = function () {
        var _this = this;
        this.startLoading();
        this.user.creationDate = new Date();
        this.UsersService.create(this.user)
            .subscribe(function (result) {
            _this.openSnackBar('User «' + result.name + '» created correctly', null);
            _this.completeLoading();
            _this.back();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    UserComponent.prototype.updateUser = function () {
        var _this = this;
        this.startLoading();
        this.user.userPhoto = {};
        this.user.modificationDate = new Date();
        this.UsersService.update(this.user)
            .subscribe(function (result) {
            _this.openSnackBar('User «' + result.name + '» updated correctly', null);
            _this.completeLoading();
            _this.viewUser();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    UserComponent.prototype.editUser = function () {
        this.router.navigate(['/user', 'edit', this.user._id]);
    };
    UserComponent.prototype.viewUser = function () {
        this.router.navigate(['/user', 'view', this.user._id]);
    };
    UserComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.startLoading();
        this.UsersService.delete(id)
            .subscribe(function (result) {
            _this.openSnackBar('User «' + result.name + '» deleted correctly', null);
            _this.completeLoading();
            _this.back();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    UserComponent.prototype.cancelDeleteUser = function () {
        this.openSnackBar('Cancelled operation', null);
    };
    UserComponent.prototype.back = function () {
        this.router.navigate(['/users']);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/components/user-components/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user-components/user/user.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MdSnackBar */]) === "function" && _e || Object])
], UserComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user-components/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<app-view-title titulo=\"{{tituloVista}}\"></app-view-title>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row not-found-info\" *ngIf=\"!users.length\">\r\n    {{infoMessage}}\r\n  </div>\r\n\r\n  <div class=\"row\" *ngFor=\"let user of users\">\r\n    <md-card class=\"card\">\r\n      <md-card-header class=\"card-header\">\r\n\r\n        <span class=\"header-image-users\">\r\n            <img md-card-avatar class=\"image-users\" [@imageAnimation] src=\"{{defaultImage}}\" *ngIf=\"!user.userPhoto64\">\r\n            <img md-card-avatar class=\"image-users\" [@imageAnimation] src=\"{{user.userPhoto64}}\" *ngIf=\"user.userPhoto64\">\r\n        </span>\r\n        <span class=\"card-text\">\r\n          <md-card-title>{{user.name}} {{user.lastName}}</md-card-title>\r\n          <md-card-subtitle>\r\n              {{user.username}} | {{user.rank}}\r\n            <p class=\"card-icons\">\r\n        </p>\r\n        </md-card-subtitle>\r\n        </span>\r\n        <span class=\"card-actions\">\r\n          <button md-icon-button (click)=\"actionUser('view', user)\">\r\n            <md-icon>search</md-icon>\r\n          </button>\r\n          <button md-icon-button (click)=\"actionUser('edit', user)\">\r\n            <md-icon>edit</md-icon>\r\n          </button>\r\n          <delete-confirmation type=\"user\" name=\"{{user.name}}\" (actionYes)=\"deleteUser(user._id)\" (actionNo)=\"cancelDeleteUser()\"></delete-confirmation>\r\n        </span>\r\n      </md-card-header>\r\n    </md-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"buttons-group\">\r\n  <a md-fab class=\"addButton\" (click)=\"actionUser('create')\">\r\n    <md-icon>add</md-icon>\r\n  </a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user-components/users/users.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../angular-calendar/dist/css/angular-calendar.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbutton[md-raised-button] {\n  background: #0D3446 !important;\n  color: #FFFFFF !important; }\n  button[md-raised-button][disabled] {\n    background: #373a3c !important; }\n\n.button-action {\n  background: #0D3446 !important;\n  width: 30px !important;\n  height: 30px !important; }\n  .button-action span {\n    line-height: 0 !important; }\n  .button-action label {\n    cursor: pointer;\n    height: 25px;\n    margin: 0; }\n    .button-action label .icon-file {\n      line-height: 0;\n      font-size: 17px; }\n  .button-action md-icon {\n    line-height: 0;\n    font-size: 20px; }\n\n.buttons-group {\n  position: -webkit-sticky;\n  position: sticky;\n  text-align: right;\n  width: 100%;\n  left: 0;\n  bottom: 6px;\n  right: 58px; }\n  .buttons-group > .addButton {\n    background: #0D3446 !important;\n    color: #FFFFFF !important; }\n  .buttons-group > .deleteButton {\n    background: #D21A6B !important;\n    color: #FFFFFF !important;\n    width: 35px;\n    height: 35px;\n    font-size: 11px;\n    right: 63px;\n    bottom: 3px;\n    position: absolute; }\n\n.card {\n  padding: 0;\n  border: 0px; }\n\n.card-header {\n  position: relative;\n  padding: 0;\n  border-bottom-width: 0px;\n  height: 120px; }\n\n.card-text {\n  padding: 24px 0 0 24px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 auto;\n          flex: 1 auto; }\n  .card-text .card-icons {\n    color: #0D3446; }\n\n.card-actions {\n  width: 65px;\n  background: #D8DFE2;\n  text-align: center; }\n  .card-actions > button {\n    color: #0D3446; }\n\nmd-card-title {\n  font-size: 20px !important; }\n\nmd-card-subtitle {\n  margin-bottom: 0 !important; }\n\n.header-image {\n  background-size: cover;\n  height: 120px;\n  width: 120px;\n  border-radius: 0; }\n\n.card-header-comments div {\n  width: 100%;\n  margin-left: 4px; }\n\n.card-title-comments {\n  font-size: 25px; }\n\n.litle-card .card-header {\n  height: 45px; }\n\n.litle-card .card-text {\n  padding: 7px 0 0 24px; }\n\n.litle-card .card-actions {\n  width: 140px; }\n\n.litle-card md-card-subtitle md-icon {\n  font-size: 18px; }\n\n.litle-card md-card-title,\n.litle-card md-card-subtitle {\n  display: inline-block; }\n\n@media (max-width: 600px) {\n  md-grid-list {\n    height: auto !important; }\n  md-grid-tile {\n    display: block !important;\n    position: relative !important;\n    top: auto !important;\n    left: 0 !important;\n    width: 100% !important;\n    margin-bottom: 15px !important; }\n  md-card {\n    margin-left: 0 !important;\n    width: 100% !important;\n    height: 95% !important;\n    overflow: hidden; }\n  md-input-container,\n  md-select {\n    width: 100% !important; } }\n\n.container {\n  margin-left: 0px;\n  margin-right: 0px;\n  width: 100%; }\n\n.not-found-info {\n  font-size: 30px;\n  text-align: center; }\n\n::-webkit-scrollbar {\n  width: 7px; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  border-radius: none; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: none;\n  background: #0D3446; }\n\n.snack-bar {\n  background: #0D3446 !important; }\n\n.snack-bar-error {\n  background: #D21A6B !important; }\n\nbutton:focus,\na:focus {\n  outline: none; }\n\ninput:disabled {\n  color: #000000 !important; }\n\n.header-image-users {\n  position: relative;\n  width: 120px;\n  margin-left: -17px; }\n  .header-image-users .image-users {\n    background-size: cover;\n    height: 120px;\n    width: 120px;\n    border-radius: 0;\n    position: absolute; }\n\n@media (max-width: 600px) {\n  md-card-header {\n    display: block !important;\n    height: 160px !important; }\n  .header-image-users {\n    margin-left: 0 !important; }\n  .image-users {\n    position: absolute !important; }\n  .card-text {\n    margin-top: 5px !important;\n    padding-top: 0px !important; }\n  md-card-title {\n    margin-left: 135px !important;\n    position: absolute !important; }\n  md-card-subtitle {\n    margin-left: 135px !important;\n    top: 34px !important;\n    position: relative !important; }\n  .card-actions {\n    width: 100% !important;\n    top: 120px !important;\n    position: absolute !important;\n    text-align: center !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-components/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_users_service__ = __webpack_require__("../../../../../src/app/services/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animations_animations__ = __webpack_require__("../../../../../src/app/animations/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var notFound = 'Not found users';
var getting = 'Getting users';
var UsersComponent = (function () {
    function UsersComponent(UsersService, router, slimLoadingBarService, snackBar) {
        this.UsersService = UsersService;
        this.router = router;
        this.slimLoadingBarService = slimLoadingBarService;
        this.snackBar = snackBar;
        this.defaultImage = '../../../assets/default_user.png';
        this.tituloVista = 'Users';
        this.users = [];
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.infoMessage = getting;
        this.startLoading();
        this.UsersService.getAllWithoutPhoto()
            .subscribe(function (users) {
            _this.infoMessage = notFound;
            _this.users = users;
            _this.getUserPhotos();
            console.log(users);
            // Finish loading bar
            _this.completeLoading();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    UsersComponent.prototype.getUserPhotos = function () {
        var userService = this.UsersService;
        __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](this.users, function (user) {
            userService.getPhoto(user._id)
                .subscribe(function (photo) {
                user.userPhoto64 = photo.userPhoto64;
            });
        });
    };
    UsersComponent.prototype.actionUser = function (action, user) {
        var params = [
            '/user',
            action
        ];
        if (action !== 'create') {
            params = params.concat([user._id]);
        }
        this.router.navigate(params);
    };
    UsersComponent.prototype.startLoading = function () {
        this.slimLoadingBarService.start();
    };
    UsersComponent.prototype.completeLoading = function () {
        var _this = this;
        setTimeout(function () {
            _this.slimLoadingBarService.complete();
        });
    };
    UsersComponent.prototype.openSnackBar = function (message, error) {
        this.snackBar.open(message, null, {
            duration: 5000,
            extraClasses: !error ? ['snack-bar'] : ['snack-bar-error']
        });
    };
    UsersComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.startLoading();
        this.UsersService.delete(id)
            .subscribe(function (result) {
            _this.users = __WEBPACK_IMPORTED_MODULE_5_underscore__["without"](_this.users, __WEBPACK_IMPORTED_MODULE_5_underscore__["findWhere"](_this.users, { _id: result._id }));
            _this.openSnackBar('User «' + result.name + '» deleted correctly', null);
            _this.completeLoading();
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    UsersComponent.prototype.cancelDeleteUser = function () {
        this.openSnackBar('Cancelled operation', null);
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-users',
        template: __webpack_require__("../../../../../src/app/components/user-components/users/users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user-components/users/users.component.scss")],
        animations: [__WEBPACK_IMPORTED_MODULE_6__animations_animations__["a" /* imageAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MdSnackBar */]) === "function" && _d || Object])
], UsersComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/delete-confirmation/delete-confirmation-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title class=\"delete-confirmation-title\">Delete</h1>\r\n<div md-dialog-content class=\"delete-confirmation-content\">\r\n  Do you want to delete «{{name}}» {{type}}?\r\n</div>\r\n<div md-dialog-actions align=\"end\" class=\"delete-confirmation-actions\">\r\n  <button md-raised-button md-dialog-close=\"S\">Yes</button>\r\n  <button md-raised-button md-dialog-close=\"N\">No</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/directives/delete-confirmation/delete-confirmation-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../angular-calendar/dist/css/angular-calendar.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbutton[md-raised-button] {\n  background: #0D3446 !important;\n  color: #FFFFFF !important; }\n  button[md-raised-button][disabled] {\n    background: #373a3c !important; }\n\n.button-action {\n  background: #0D3446 !important;\n  width: 30px !important;\n  height: 30px !important; }\n  .button-action span {\n    line-height: 0 !important; }\n  .button-action label {\n    cursor: pointer;\n    height: 25px;\n    margin: 0; }\n    .button-action label .icon-file {\n      line-height: 0;\n      font-size: 17px; }\n  .button-action md-icon {\n    line-height: 0;\n    font-size: 20px; }\n\n.buttons-group {\n  position: -webkit-sticky;\n  position: sticky;\n  text-align: right;\n  width: 100%;\n  left: 0;\n  bottom: 6px;\n  right: 58px; }\n  .buttons-group > .addButton {\n    background: #0D3446 !important;\n    color: #FFFFFF !important; }\n  .buttons-group > .deleteButton {\n    background: #D21A6B !important;\n    color: #FFFFFF !important;\n    width: 35px;\n    height: 35px;\n    font-size: 11px;\n    right: 63px;\n    bottom: 3px;\n    position: absolute; }\n\n.card {\n  padding: 0;\n  border: 0px; }\n\n.card-header {\n  position: relative;\n  padding: 0;\n  border-bottom-width: 0px;\n  height: 120px; }\n\n.card-text {\n  padding: 24px 0 0 24px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 auto;\n          flex: 1 auto; }\n  .card-text .card-icons {\n    color: #0D3446; }\n\n.card-actions {\n  width: 65px;\n  background: #D8DFE2;\n  text-align: center; }\n  .card-actions > button {\n    color: #0D3446; }\n\nmd-card-title {\n  font-size: 20px !important; }\n\nmd-card-subtitle {\n  margin-bottom: 0 !important; }\n\n.header-image {\n  background-size: cover;\n  height: 120px;\n  width: 120px;\n  border-radius: 0; }\n\n.card-header-comments div {\n  width: 100%;\n  margin-left: 4px; }\n\n.card-title-comments {\n  font-size: 25px; }\n\n.litle-card .card-header {\n  height: 45px; }\n\n.litle-card .card-text {\n  padding: 7px 0 0 24px; }\n\n.litle-card .card-actions {\n  width: 140px; }\n\n.litle-card md-card-subtitle md-icon {\n  font-size: 18px; }\n\n.litle-card md-card-title,\n.litle-card md-card-subtitle {\n  display: inline-block; }\n\n@media (max-width: 600px) {\n  md-grid-list {\n    height: auto !important; }\n  md-grid-tile {\n    display: block !important;\n    position: relative !important;\n    top: auto !important;\n    left: 0 !important;\n    width: 100% !important;\n    margin-bottom: 15px !important; }\n  md-card {\n    margin-left: 0 !important;\n    width: 100% !important;\n    height: 95% !important;\n    overflow: hidden; }\n  md-input-container,\n  md-select {\n    width: 100% !important; } }\n\n.container {\n  margin-left: 0px;\n  margin-right: 0px;\n  width: 100%; }\n\n.not-found-info {\n  font-size: 30px;\n  text-align: center; }\n\n::-webkit-scrollbar {\n  width: 7px; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  border-radius: none; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: none;\n  background: #0D3446; }\n\n.snack-bar {\n  background: #0D3446 !important; }\n\n.snack-bar-error {\n  background: #D21A6B !important; }\n\nbutton:focus,\na:focus {\n  outline: none; }\n\ninput:disabled {\n  color: #000000 !important; }\n\n.delete-confirmation-title {\n  background: #176D81;\n  color: #FFFFFF;\n  margin-top: -25px;\n  padding: 10px 24px;\n  margin-left: -25px;\n  margin-right: -24px; }\n\n.delete-confirmation-content {\n  min-height: 75px; }\n\n.delete-confirmation-actions > button:first-child {\n  margin-right: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/directives/delete-confirmation/delete-confirmation.component.html":
/***/ (function(module, exports) {

module.exports = "<span [className]=\"styleClass\">\r\n  <button md-icon-button (click)=\"delete()\">\r\n    <md-icon>delete</md-icon>\r\n  </button>\r\n</span>\r\n"

/***/ }),

/***/ "../../../../../src/app/directives/delete-confirmation/delete-confirmation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".delete-confirmation-circle md-icon {\n  position: absolute;\n  line-height: 0px !important;\n  zoom: 80%;\n  top: 4px;\n  right: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/directives/delete-confirmation/delete-confirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteConfirmationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DeleteConfirmationDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeleteConfirmationComponent = (function () {
    function DeleteConfirmationComponent(dialog) {
        this.dialog = dialog;
        this.actionYes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.actionNo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DeleteConfirmationComponent.prototype.delete = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DeleteConfirmationDialog);
        dialogRef.componentInstance.type = this.type;
        dialogRef.componentInstance.name = this.name;
        dialogRef.componentInstance.id = this.id;
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'S') {
                _this.actionYes.emit(_this.id);
            }
            else {
                _this.actionNo.emit(_this.id);
            }
        });
    };
    return DeleteConfirmationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DeleteConfirmationComponent.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DeleteConfirmationComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DeleteConfirmationComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DeleteConfirmationComponent.prototype, "styleClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], DeleteConfirmationComponent.prototype, "actionYes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], DeleteConfirmationComponent.prototype, "actionNo", void 0);
DeleteConfirmationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'delete-confirmation',
        template: __webpack_require__("../../../../../src/app/directives/delete-confirmation/delete-confirmation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/directives/delete-confirmation/delete-confirmation.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialog */]) === "function" && _c || Object])
], DeleteConfirmationComponent);

var DeleteConfirmationDialog = (function () {
    function DeleteConfirmationDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return DeleteConfirmationDialog;
}());
DeleteConfirmationDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'deleteConfirmationDialog',
        template: __webpack_require__("../../../../../src/app/directives/delete-confirmation/delete-confirmation-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/directives/delete-confirmation/delete-confirmation-dialog.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */]) === "function" && _d || Object])
], DeleteConfirmationDialog);

var _a, _b, _c, _d;
//# sourceMappingURL=delete-confirmation.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/footer-bar/footer-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"footer\">\r\n  <md-toolbar-row class=\"footer-row\">Project.Me</md-toolbar-row>\r\n</md-toolbar>\r\n"

/***/ }),

/***/ "../../../../../src/app/directives/footer-bar/footer-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../angular-calendar/dist/css/angular-calendar.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbutton[md-raised-button] {\n  background: #0D3446 !important;\n  color: #FFFFFF !important; }\n  button[md-raised-button][disabled] {\n    background: #373a3c !important; }\n\n.button-action {\n  background: #0D3446 !important;\n  width: 30px !important;\n  height: 30px !important; }\n  .button-action span {\n    line-height: 0 !important; }\n  .button-action label {\n    cursor: pointer;\n    height: 25px;\n    margin: 0; }\n    .button-action label .icon-file {\n      line-height: 0;\n      font-size: 17px; }\n  .button-action md-icon {\n    line-height: 0;\n    font-size: 20px; }\n\n.buttons-group {\n  position: -webkit-sticky;\n  position: sticky;\n  text-align: right;\n  width: 100%;\n  left: 0;\n  bottom: 6px;\n  right: 58px; }\n  .buttons-group > .addButton {\n    background: #0D3446 !important;\n    color: #FFFFFF !important; }\n  .buttons-group > .deleteButton {\n    background: #D21A6B !important;\n    color: #FFFFFF !important;\n    width: 35px;\n    height: 35px;\n    font-size: 11px;\n    right: 63px;\n    bottom: 3px;\n    position: absolute; }\n\n.card {\n  padding: 0;\n  border: 0px; }\n\n.card-header {\n  position: relative;\n  padding: 0;\n  border-bottom-width: 0px;\n  height: 120px; }\n\n.card-text {\n  padding: 24px 0 0 24px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 auto;\n          flex: 1 auto; }\n  .card-text .card-icons {\n    color: #0D3446; }\n\n.card-actions {\n  width: 65px;\n  background: #D8DFE2;\n  text-align: center; }\n  .card-actions > button {\n    color: #0D3446; }\n\nmd-card-title {\n  font-size: 20px !important; }\n\nmd-card-subtitle {\n  margin-bottom: 0 !important; }\n\n.header-image {\n  background-size: cover;\n  height: 120px;\n  width: 120px;\n  border-radius: 0; }\n\n.card-header-comments div {\n  width: 100%;\n  margin-left: 4px; }\n\n.card-title-comments {\n  font-size: 25px; }\n\n.litle-card .card-header {\n  height: 45px; }\n\n.litle-card .card-text {\n  padding: 7px 0 0 24px; }\n\n.litle-card .card-actions {\n  width: 140px; }\n\n.litle-card md-card-subtitle md-icon {\n  font-size: 18px; }\n\n.litle-card md-card-title,\n.litle-card md-card-subtitle {\n  display: inline-block; }\n\n@media (max-width: 600px) {\n  md-grid-list {\n    height: auto !important; }\n  md-grid-tile {\n    display: block !important;\n    position: relative !important;\n    top: auto !important;\n    left: 0 !important;\n    width: 100% !important;\n    margin-bottom: 15px !important; }\n  md-card {\n    margin-left: 0 !important;\n    width: 100% !important;\n    height: 95% !important;\n    overflow: hidden; }\n  md-input-container,\n  md-select {\n    width: 100% !important; } }\n\n.container {\n  margin-left: 0px;\n  margin-right: 0px;\n  width: 100%; }\n\n.not-found-info {\n  font-size: 30px;\n  text-align: center; }\n\n::-webkit-scrollbar {\n  width: 7px; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  border-radius: none; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: none;\n  background: #0D3446; }\n\n.snack-bar {\n  background: #0D3446 !important; }\n\n.snack-bar-error {\n  background: #D21A6B !important; }\n\nbutton:focus,\na:focus {\n  outline: none; }\n\ninput:disabled {\n  color: #000000 !important; }\n\n.footer {\n  position: fixed;\n  bottom: -19px;\n  width: 100%;\n  background: #176D81;\n  color: #FFFFFF; }\n\n.footer-row {\n  position: absolute;\n  top: 0;\n  max-height: 45px;\n  right: 0;\n  padding: 0 16px; }\n\n@media (max-width: 600px) {\n  .footer {\n    min-height: 64px !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/directives/footer-bar/footer-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterBarComponent = (function () {
    function FooterBarComponent() {
    }
    FooterBarComponent.prototype.ngOnInit = function () {
    };
    return FooterBarComponent;
}());
FooterBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer-bar',
        template: __webpack_require__("../../../../../src/app/directives/footer-bar/footer-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/directives/footer-bar/footer-bar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterBarComponent);

//# sourceMappingURL=footer-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"topBar\">\r\n  <md-toolbar-row class=\"topBar-row\">\r\n    <span class=\"example-spacer\">\r\n\r\n      <button md-icon-button (click)=\"start.open()\">\r\n        <md-icon>menu</md-icon>\r\n      </button>\r\n\r\n      <button md-icon-button (click)=\"start.close()\" routerLink=\"/dashboard\" >\r\n        <md-icon>home</md-icon>\r\n      </button>\r\n\r\n      <button md-icon-button (click)=\"start.close()\" routerLink=\"/profile\">\r\n        <md-icon>person</md-icon>\r\n      </button>\r\n\r\n      <button (click)=\"start.close()\" md-icon-button routerLink=\"/messenger\">\r\n        <md-icon style=\"zoom: 90%;\">message</md-icon>\r\n      </button>\r\n\r\n      <button md-icon-button (click)=\"goBack(); start.close()\" >\r\n        <md-icon>keyboard_backspace</md-icon>\r\n      </button>\r\n    </span>\r\n\r\n    <span class=\"small\">    \r\n      {{userName}}\r\n    </span>\r\n\r\n    <button (click)=\"logOut(); start.close()\" md-icon-button>\r\n      <md-icon>exit_to_app</md-icon>\r\n    </button>\r\n\r\n  </md-toolbar-row>\r\n</md-toolbar>\r\n\r\n<div class=\"loading-bar\">\r\n  <ng2-slim-loading-bar [color]=\"'#0d3446'\" [height]=\"'4px'\"></ng2-slim-loading-bar>\r\n</div>\r\n\r\n<md-sidenav-container fullscreen>\r\n  <md-sidenav #start class=\"menu\">\r\n    <md-nav-list style=\"overflow-x: hidden;\">\r\n      <a style=\"margin-left:20px\">\r\n        <md-input-container style=\"width: 70%;\">\r\n          <input mdInput placeholder=\"Search\" [(ngModel)]=\"search\" (keyup.enter)=\"start.close(); searchText(this.search)\">\r\n        </md-input-container>\r\n        <button (click)=\"start.close(); searchText(this.search)\" md-icon-button>\r\n          <md-icon>search</md-icon>\r\n        </button>\r\n      </a>\r\n      <a md-list-item class=\"item-menu\" (click)=\"start.close()\" routerLink=\"/calendar\">Calendar</a>\r\n      <a md-list-item class=\"item-menu\" (click)=\"start.close()\" routerLink=\"/meetings\">Meetings</a>\r\n      <a md-list-item class=\"item-menu\" (click)=\"start.close()\" routerLink=\"/projects\">Projects</a>\r\n      <a md-list-item class=\"item-menu\" (click)=\"start.close()\" routerLink=\"/tasks\">Tasks</a>\r\n      <a md-list-item class=\"item-menu\" (click)=\"start.close()\" routerLink=\"/teams\">Teams</a>\r\n      <a md-list-item class=\"item-menu\" (click)=\"start.close()\" routerLink=\"/users\">Users</a>\r\n    </md-nav-list>\r\n    <hr>\r\n  </md-sidenav>\r\n\r\n  <div class=\"main-content\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n\r\n</md-sidenav-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/directives/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../angular-calendar/dist/css/angular-calendar.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbutton[md-raised-button] {\n  background: #0D3446 !important;\n  color: #FFFFFF !important; }\n  button[md-raised-button][disabled] {\n    background: #373a3c !important; }\n\n.button-action {\n  background: #0D3446 !important;\n  width: 30px !important;\n  height: 30px !important; }\n  .button-action span {\n    line-height: 0 !important; }\n  .button-action label {\n    cursor: pointer;\n    height: 25px;\n    margin: 0; }\n    .button-action label .icon-file {\n      line-height: 0;\n      font-size: 17px; }\n  .button-action md-icon {\n    line-height: 0;\n    font-size: 20px; }\n\n.buttons-group {\n  position: -webkit-sticky;\n  position: sticky;\n  text-align: right;\n  width: 100%;\n  left: 0;\n  bottom: 6px;\n  right: 58px; }\n  .buttons-group > .addButton {\n    background: #0D3446 !important;\n    color: #FFFFFF !important; }\n  .buttons-group > .deleteButton {\n    background: #D21A6B !important;\n    color: #FFFFFF !important;\n    width: 35px;\n    height: 35px;\n    font-size: 11px;\n    right: 63px;\n    bottom: 3px;\n    position: absolute; }\n\n.card {\n  padding: 0;\n  border: 0px; }\n\n.card-header {\n  position: relative;\n  padding: 0;\n  border-bottom-width: 0px;\n  height: 120px; }\n\n.card-text {\n  padding: 24px 0 0 24px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 auto;\n          flex: 1 auto; }\n  .card-text .card-icons {\n    color: #0D3446; }\n\n.card-actions {\n  width: 65px;\n  background: #D8DFE2;\n  text-align: center; }\n  .card-actions > button {\n    color: #0D3446; }\n\nmd-card-title {\n  font-size: 20px !important; }\n\nmd-card-subtitle {\n  margin-bottom: 0 !important; }\n\n.header-image {\n  background-size: cover;\n  height: 120px;\n  width: 120px;\n  border-radius: 0; }\n\n.card-header-comments div {\n  width: 100%;\n  margin-left: 4px; }\n\n.card-title-comments {\n  font-size: 25px; }\n\n.litle-card .card-header {\n  height: 45px; }\n\n.litle-card .card-text {\n  padding: 7px 0 0 24px; }\n\n.litle-card .card-actions {\n  width: 140px; }\n\n.litle-card md-card-subtitle md-icon {\n  font-size: 18px; }\n\n.litle-card md-card-title,\n.litle-card md-card-subtitle {\n  display: inline-block; }\n\n@media (max-width: 600px) {\n  md-grid-list {\n    height: auto !important; }\n  md-grid-tile {\n    display: block !important;\n    position: relative !important;\n    top: auto !important;\n    left: 0 !important;\n    width: 100% !important;\n    margin-bottom: 15px !important; }\n  md-card {\n    margin-left: 0 !important;\n    width: 100% !important;\n    height: 95% !important;\n    overflow: hidden; }\n  md-input-container,\n  md-select {\n    width: 100% !important; } }\n\n.container {\n  margin-left: 0px;\n  margin-right: 0px;\n  width: 100%; }\n\n.not-found-info {\n  font-size: 30px;\n  text-align: center; }\n\n::-webkit-scrollbar {\n  width: 7px; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  border-radius: none; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: none;\n  background: #0D3446; }\n\n.snack-bar {\n  background: #0D3446 !important; }\n\n.snack-bar-error {\n  background: #D21A6B !important; }\n\nbutton:focus,\na:focus {\n  outline: none; }\n\ninput:disabled {\n  color: #000000 !important; }\n\n.menu {\n  width: 250px; }\n\n.topBar {\n  position: fixed;\n  z-index: 5;\n  color: #FFFFFF;\n  top: -19px;\n  background: #176D81; }\n\n.main-content {\n  margin-left: 64px;\n  margin-right: 64px; }\n\n@media (max-width: 600px) {\n  .main-content {\n    margin-left: 25px;\n    margin-right: 25px; }\n  .topBar {\n    min-height: 64px !important; } }\n\n.item-menu {\n  margin-left: 5px; }\n\n.mat-sidenav-container,\n.mat-sidenav-container.mat-sidenav-transition {\n  margin-bottom: 45px !important;\n  margin-top: 45px !important; }\n\n.topBar-row {\n  max-height: 47px;\n  top: 17px;\n  position: absolute;\n  right: 0;\n  padding: 0 16px; }\n\n.example-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 auto;\n          flex: 1 auto; }\n\n.loading-bar {\n  position: absolute;\n  top: 41px;\n  width: 100%;\n  z-index: 999; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/directives/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_login_service__ = __webpack_require__("../../../../../src/app/services/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavigationComponent = (function () {
    function NavigationComponent(Location, router, LoginService, snackBar) {
        this.Location = Location;
        this.router = router;
        this.LoginService = LoginService;
        this.snackBar = snackBar;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLogged = this.LoginService.isLogged();
        this.userName = this.LoginService.getLoggedStorage().username;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["NavigationStart"]; })
            .subscribe(function (route) {
            if (route.url === '/' && _this.LoginService.isLogged()) {
                _this.routeHandle();
                _this.openSnackBar('(ง︡’-‘︠)ง You shall not pass', true);
            }
        });
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["NavigationError"]; })
            .subscribe(function (route) {
            _this.routeHandle();
            _this.openSnackBar('404:    ¯\\_(ツ)_/¯', true);
        });
    };
    NavigationComponent.prototype.routeHandle = function () {
        if (this.LoginService.isLogged()) {
            this.router.navigate(['/dashboard']);
        }
    };
    NavigationComponent.prototype.openSnackBar = function (message, error) {
        this.snackBar.open(message, null, {
            duration: 5000,
            extraClasses: !error ? ['snack-bar'] : ['snack-bar-error']
        });
    };
    NavigationComponent.prototype.goBack = function () {
        this.Location.back();
    };
    NavigationComponent.prototype.searchText = function () {
        this.router.navigate(['/search', this.search]);
        this.search = null;
    };
    NavigationComponent.prototype.logOut = function () {
        this.LoginService.logOut();
        this.router.navigate(['/']);
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/directives/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/directives/navigation/navigation.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_login_login_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MdSnackBar */]) === "function" && _d || Object])
], NavigationComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/notification/notification-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title class=\"notification-title\">Notification</h1>\r\n<form>\r\n  <div md-dialog-content class=\"notification-content\">\r\n    <div>\r\n      <md-input-container style=\"width: 50%;\">\r\n        <input mdInput placeholder=\"Title\" [(ngModel)]=\"notification['title']\" name=\"title\">\r\n      </md-input-container>\r\n    </div>\r\n\r\n    <div>\r\n      <md-input-container style=\"width: 100%;\">\r\n        <textarea mdInput maxlength=\"1000\" placeholder=\"Description\" [(ngModel)]=\"notification['description']\" name=\"description\" rows=\"3\"></textarea>\r\n        <md-hint align=\"end\">{{notification['description'] ? notification['description'].length : 0}} / 1000</md-hint>\r\n      </md-input-container>\r\n    </div>\r\n\r\n    <div>\r\n      <md-input-container style=\"width: 100%;\">\r\n        <input mdInput maxlength=\"256\" placeholder=\"Link\" [(ngModel)]=\"notification['link']\" name=\"link\">\r\n      </md-input-container>\r\n    </div>\r\n  </div>\r\n  <div md-dialog-actions align=\"end\" class=\"notification-actions\">\r\n    <button type=\"submit\" md-raised-button (click)=\"addNotification()\">Accept</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/directives/notification/notification-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../angular-calendar/dist/css/angular-calendar.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbutton[md-raised-button] {\n  background: #0D3446 !important;\n  color: #FFFFFF !important; }\n  button[md-raised-button][disabled] {\n    background: #373a3c !important; }\n\n.button-action {\n  background: #0D3446 !important;\n  width: 30px !important;\n  height: 30px !important; }\n  .button-action span {\n    line-height: 0 !important; }\n  .button-action label {\n    cursor: pointer;\n    height: 25px;\n    margin: 0; }\n    .button-action label .icon-file {\n      line-height: 0;\n      font-size: 17px; }\n  .button-action md-icon {\n    line-height: 0;\n    font-size: 20px; }\n\n.buttons-group {\n  position: -webkit-sticky;\n  position: sticky;\n  text-align: right;\n  width: 100%;\n  left: 0;\n  bottom: 6px;\n  right: 58px; }\n  .buttons-group > .addButton {\n    background: #0D3446 !important;\n    color: #FFFFFF !important; }\n  .buttons-group > .deleteButton {\n    background: #D21A6B !important;\n    color: #FFFFFF !important;\n    width: 35px;\n    height: 35px;\n    font-size: 11px;\n    right: 63px;\n    bottom: 3px;\n    position: absolute; }\n\n.card {\n  padding: 0;\n  border: 0px; }\n\n.card-header {\n  position: relative;\n  padding: 0;\n  border-bottom-width: 0px;\n  height: 120px; }\n\n.card-text {\n  padding: 24px 0 0 24px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 auto;\n          flex: 1 auto; }\n  .card-text .card-icons {\n    color: #0D3446; }\n\n.card-actions {\n  width: 65px;\n  background: #D8DFE2;\n  text-align: center; }\n  .card-actions > button {\n    color: #0D3446; }\n\nmd-card-title {\n  font-size: 20px !important; }\n\nmd-card-subtitle {\n  margin-bottom: 0 !important; }\n\n.header-image {\n  background-size: cover;\n  height: 120px;\n  width: 120px;\n  border-radius: 0; }\n\n.card-header-comments div {\n  width: 100%;\n  margin-left: 4px; }\n\n.card-title-comments {\n  font-size: 25px; }\n\n.litle-card .card-header {\n  height: 45px; }\n\n.litle-card .card-text {\n  padding: 7px 0 0 24px; }\n\n.litle-card .card-actions {\n  width: 140px; }\n\n.litle-card md-card-subtitle md-icon {\n  font-size: 18px; }\n\n.litle-card md-card-title,\n.litle-card md-card-subtitle {\n  display: inline-block; }\n\n@media (max-width: 600px) {\n  md-grid-list {\n    height: auto !important; }\n  md-grid-tile {\n    display: block !important;\n    position: relative !important;\n    top: auto !important;\n    left: 0 !important;\n    width: 100% !important;\n    margin-bottom: 15px !important; }\n  md-card {\n    margin-left: 0 !important;\n    width: 100% !important;\n    height: 95% !important;\n    overflow: hidden; }\n  md-input-container,\n  md-select {\n    width: 100% !important; } }\n\n.container {\n  margin-left: 0px;\n  margin-right: 0px;\n  width: 100%; }\n\n.not-found-info {\n  font-size: 30px;\n  text-align: center; }\n\n::-webkit-scrollbar {\n  width: 7px; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  border-radius: none; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: none;\n  background: #0D3446; }\n\n.snack-bar {\n  background: #0D3446 !important; }\n\n.snack-bar-error {\n  background: #D21A6B !important; }\n\nbutton:focus,\na:focus {\n  outline: none; }\n\ninput:disabled {\n  color: #000000 !important; }\n\n.notification-title {\n  background: #176D81;\n  color: #FFFFFF;\n  margin-top: -25px;\n  padding: 10px 24px;\n  margin-left: -25px;\n  margin-right: -24px; }\n\n.notification-content {\n  min-height: 75px; }\n\n.notification-actions > button:first-child {\n  margin-right: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/directives/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<a md-fab class=\"button-action\" (click)=\"showNotification()\" style=\"margin-top: -4px;\">\r\n  <md-icon>add</md-icon>\r\n</a>\r\n"

/***/ }),

/***/ "../../../../../src/app/directives/notification/notification.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".delete-confirmation-circle md-icon {\n  position: absolute;\n  line-height: 0px !important;\n  zoom: 80%;\n  top: 4px;\n  right: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/directives/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NotificationDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_notification__ = __webpack_require__("../../../../../src/app/classes/notification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notifications_notifications_service__ = __webpack_require__("../../../../../src/app/services/notifications/notifications.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NotificationComponent = (function () {
    function NotificationComponent(dialog) {
        this.dialog = dialog;
        this.actionAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NotificationComponent.prototype.showNotification = function () {
        var _this = this;
        var dialogRef = this.dialog.open(NotificationDialog, {
            width: '600px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.actionAdd.emit();
            }
        });
    };
    return NotificationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], NotificationComponent.prototype, "actionAdd", void 0);
NotificationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'notification',
        template: __webpack_require__("../../../../../src/app/directives/notification/notification.component.html"),
        styles: [__webpack_require__("../../../../../src/app/directives/notification/notification.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialog */]) === "function" && _b || Object])
], NotificationComponent);

var NotificationDialog = (function () {
    function NotificationDialog(dialogRef, NotificationsService, snackBar, slimLoadingBarService) {
        this.dialogRef = dialogRef;
        this.NotificationsService = NotificationsService;
        this.snackBar = snackBar;
        this.slimLoadingBarService = slimLoadingBarService;
        this.notification = new __WEBPACK_IMPORTED_MODULE_2__classes_notification__["a" /* Notification */]();
    }
    NotificationDialog.prototype.addNotification = function () {
        var _this = this;
        this.startLoading();
        this.notification.creationDate = new Date();
        this.NotificationsService.create(this.notification)
            .subscribe(function (result) {
            _this.openSnackBar('Notification «' + result.title + '» created correctly', null);
            _this.completeLoading();
            _this.dialogRef.close(true);
        }, function (error) {
            _this.completeLoading();
            _this.openSnackBar(error.statusText, true);
        });
    };
    NotificationDialog.prototype.startLoading = function () {
        this.slimLoadingBarService.start();
    };
    NotificationDialog.prototype.completeLoading = function () {
        var _this = this;
        setTimeout(function () {
            _this.slimLoadingBarService.complete();
        });
    };
    NotificationDialog.prototype.openSnackBar = function (message, error) {
        this.snackBar.open(message, null, {
            duration: 5000,
            extraClasses: !error ? ['snack-bar'] : ['snack-bar-error']
        });
    };
    return NotificationDialog;
}());
NotificationDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'notificationDialog',
        template: __webpack_require__("../../../../../src/app/directives/notification/notification-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/directives/notification/notification-dialog.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_notifications_notifications_service__["a" /* NotificationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_notifications_notifications_service__["a" /* NotificationsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MdSnackBar */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _f || Object])
], NotificationDialog);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=notification.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/view-title/view-title.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"titulo-vista\">\r\n  {{titulo}} <small *ngIf=\"subtitulo\">{{subtitulo}}</small>\r\n</h3>\r\n"

/***/ }),

/***/ "../../../../../src/app/directives/view-title/view-title.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".titulo-vista {\n  padding-top: 15px;\n  border-bottom: 1px solid #000;\n  margin-bottom: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/directives/view-title/view-title.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewTitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewTitleComponent = (function () {
    function ViewTitleComponent() {
    }
    ViewTitleComponent.prototype.ngOnInit = function () {
    };
    return ViewTitleComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ViewTitleComponent.prototype, "titulo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ViewTitleComponent.prototype, "subtitulo", void 0);
ViewTitleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-view-title',
        template: __webpack_require__("../../../../../src/app/directives/view-title/view-title.component.html"),
        styles: [__webpack_require__("../../../../../src/app/directives/view-title/view-title.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ViewTitleComponent);

//# sourceMappingURL=view-title.component.js.map

/***/ }),

/***/ "../../../../../src/app/enums/meetingPlace.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meetingPlace; });
var meetingPlace;
(function (meetingPlace) {
    meetingPlace[meetingPlace["SALA POSTIGUET"] = 0] = "SALA POSTIGUET";
    meetingPlace[meetingPlace["SALA SANTA BARBARA"] = 1] = "SALA SANTA BARBARA";
    meetingPlace[meetingPlace["SALA SAN FERNANDO"] = 2] = "SALA SAN FERNANDO";
    meetingPlace[meetingPlace["SALA LA RAMBLA"] = 3] = "SALA LA RAMBLA";
    meetingPlace[meetingPlace["SALA UA"] = 4] = "SALA UA";
    meetingPlace[meetingPlace["SALA LINEA 24"] = 5] = "SALA LINEA 24";
})(meetingPlace || (meetingPlace = {}));
//# sourceMappingURL=meetingPlace.enum.js.map

/***/ }),

/***/ "../../../../../src/app/enums/monthNames.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonthNames; });
var MonthNames;
(function (MonthNames) {
    MonthNames[MonthNames["January"] = 0] = "January";
    MonthNames[MonthNames["February"] = 1] = "February";
    MonthNames[MonthNames["March"] = 2] = "March";
    MonthNames[MonthNames["April"] = 3] = "April";
    MonthNames[MonthNames["May"] = 4] = "May";
    MonthNames[MonthNames["June"] = 5] = "June";
    MonthNames[MonthNames["July"] = 6] = "July";
    MonthNames[MonthNames["August"] = 7] = "August";
    MonthNames[MonthNames["September"] = 8] = "September";
    MonthNames[MonthNames["October"] = 9] = "October";
    MonthNames[MonthNames["November"] = 10] = "November";
    MonthNames[MonthNames["December"] = 11] = "December";
})(MonthNames || (MonthNames = {}));
//# sourceMappingURL=monthNames.enum.js.map

/***/ }),

/***/ "../../../../../src/app/enums/taskPriority.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return taskPriority; });
var taskPriority;
(function (taskPriority) {
    taskPriority[taskPriority["HIGH"] = 0] = "HIGH";
    taskPriority[taskPriority["MEDIUM"] = 1] = "MEDIUM";
    taskPriority[taskPriority["LOW"] = 2] = "LOW";
})(taskPriority || (taskPriority = {}));
//# sourceMappingURL=taskPriority.enum.js.map

/***/ }),

/***/ "../../../../../src/app/enums/taskStatus.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return taskStatus; });
var taskStatus;
(function (taskStatus) {
    taskStatus[taskStatus["TODO"] = 0] = "TODO";
    taskStatus[taskStatus["DOING"] = 1] = "DOING";
    taskStatus[taskStatus["DONE"] = 2] = "DONE";
})(taskStatus || (taskStatus = {}));
//# sourceMappingURL=taskStatus.enum.js.map

/***/ }),

/***/ "../../../../../src/app/enums/userRank.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userRank; });
var userRank;
(function (userRank) {
    userRank[userRank["DEVELOPER 1"] = 0] = "DEVELOPER 1";
    userRank[userRank["DEVELOPER 2"] = 1] = "DEVELOPER 2";
    userRank[userRank["DEVELOPER 3"] = 2] = "DEVELOPER 3";
    userRank[userRank["TEAM LEADER 1"] = 3] = "TEAM LEADER 1";
    userRank[userRank["TEAM LEADER 2"] = 4] = "TEAM LEADER 2";
    userRank[userRank["TEAM LEADER 3"] = 5] = "TEAM LEADER 3";
    userRank[userRank["GROUP LEADER 1"] = 6] = "GROUP LEADER 1";
    userRank[userRank["GROUP LEADER 2"] = 7] = "GROUP LEADER 2";
    userRank[userRank["GROUP LEADER 3"] = 8] = "GROUP LEADER 3";
    userRank[userRank["ADMIN"] = 9] = "ADMIN";
})(userRank || (userRank = {}));
//# sourceMappingURL=userRank.enum.js.map

/***/ }),

/***/ "../../../../../src/app/modules/angular-material/angular-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var MATERIAL_MODULES = [
    __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdAutocompleteModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdButtonModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdCardModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdChipsModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MdGridListModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MdInputModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MdListModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MdProgressBarModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MdProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MdRippleModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MdSelectModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MdSidenavModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MdTabsModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MdToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* A11yModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* CompatibilityModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdButtonToggleModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdDialogModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MdIconModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MdMenuModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MdRadioModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MdSliderModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MdSlideToggleModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MdSnackBarModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MdTooltipModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* StyleModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdDatepickerModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MdNativeDateModule */],
];
var AngularMaterialModule = (function () {
    function AngularMaterialModule() {
    }
    return AngularMaterialModule;
}());
AngularMaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: MATERIAL_MODULES,
        exports: MATERIAL_MODULES
    })
], AngularMaterialModule);

//# sourceMappingURL=angular-material.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/component-modules/calendar/calendar2.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Calendar2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_angular_material_module__ = __webpack_require__("../../../../../src/app/modules/angular-material/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_calendar_components_calendar_calendar_component__ = __webpack_require__("../../../../../src/app/components/calendar-components/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directive_modules_view_title_directive_view_title_directive_module__ = __webpack_require__("../../../../../src/app/modules/directive-modules/view-title-directive/view-title-directive.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_calendar_calendar_service__ = __webpack_require__("../../../../../src/app/services/calendar/calendar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_pipe_modules_capitalize_pipe_capitalize_pipe_module__ = __webpack_require__("../../../../../src/app/modules/pipe-modules/capitalize-pipe/capitalize-pipe.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Components


// Services

// Pipes

var Calendar2Module = (function () {
    function Calendar2Module() {
    }
    return Calendar2Module;
}());
Calendar2Module = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_material_angular_material_module__["a" /* AngularMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3_angular_calendar__["a" /* CalendarModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__directive_modules_view_title_directive_view_title_directive_module__["a" /* ViewTitleDirectiveModule */],
            __WEBPACK_IMPORTED_MODULE_7__modules_pipe_modules_capitalize_pipe_capitalize_pipe_module__["a" /* CapitalizePipeModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__components_calendar_components_calendar_calendar_component__["a" /* CalendarComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__components_calendar_components_calendar_calendar_component__["a" /* CalendarComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_calendar_calendar_service__["a" /* CalendarService */],
        ],
    })
], Calendar2Module);

//# sourceMappingURL=calendar2.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/component-modules/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_angular_material_module__ = __webpack_require__("../../../../../src/app/modules/angular-material/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dashboard_components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard-components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directive_modules_view_title_directive_view_title_directive_module__ = __webpack_require__("../../../../../src/app/modules/directive-modules/view-title-directive/view-title-directive.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directive_modules_notification_directive_notification_directive_module__ = __webpack_require__("../../../../../src/app/modules/directive-modules/notification-directive/notification-directive.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_dashboard_dashboard_service__ = __webpack_require__("../../../../../src/app/services/dashboard/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_notifications_notifications_service__ = __webpack_require__("../../../../../src/app/services/notifications/notifications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_pipe_modules_capitalize_pipe_capitalize_pipe_module__ = __webpack_require__("../../../../../src/app/modules/pipe-modules/capitalize-pipe/capitalize-pipe.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_cdk_table__ = __webpack_require__("../../../cdk/@angular/cdk/table.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Components



// Services


// Pipes


var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_material_angular_material_module__["a" /* AngularMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6__directive_modules_view_title_directive_view_title_directive_module__["a" /* ViewTitleDirectiveModule */],
            __WEBPACK_IMPORTED_MODULE_7__directive_modules_notification_directive_notification_directive_module__["a" /* NotificationDirectiveModule */],
            __WEBPACK_IMPORTED_MODULE_10__modules_pipe_modules_capitalize_pipe_capitalize_pipe_module__["a" /* CapitalizePipeModule */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["C" /* MdTableModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_cdk_table__["m" /* CdkTableModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__components_dashboard_components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__components_dashboard_components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__services_dashboard_dashboard_service__["a" /* DashboardService */],
            __WEBPACK_IMPORTED_MODULE_9__services_notifications_notifications_service__["a" /* NotificationsService */],
        ],
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/component-modules/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_angular_material_module__ = __webpack_require__("../../../../../src/app/modules/angular-material/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login-components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directive_modules_view_title_directive_view_title_directive_module__ = __webpack_require__("../../../../../src/app/modules/directive-modules/view-title-directive/view-title-directive.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_login_login_service__ = __webpack_require__("../../../../../src/app/services/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_pipe_modules_capitalize_pipe_capitalize_pipe_module__ = __webpack_require__("../../../../../src/app/modules/pipe-modules/capitalize-pipe/capitalize-pipe.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Components

// Directives

// Services

// Pipes

var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_material_angular_material_module__["a" /* AngularMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__["a" /* SlimLoadingBarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6__directive_modules_view_title_directive_view_title_directive_module__["a" /* ViewTitleDirectiveModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__modules_pipe_modules_capitalize_pipe_capitalize_pipe_module__["a" /* CapitalizePipeModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__components_login_components_login_login_component__["a" /* LoginComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__components_login_components_login_login_component__["a" /* LoginComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__services_login_login_service__["a" /* LoginService */],
        ],
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/component-modules/meetings/meetings.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_angular_material_module__ = __webpack_require__("../../../../../src/app/modules/angular-material/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_meeting_components_meetings_meetings_component__ = __webpack_require__("../../../../../src/app/components/meeting-components/meetings/meetings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_meeting_components_meeting_meeting_component__ = __webpack_require__("../../../../../src/app/components/meeting-components/meeting/meeting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_directive_modules_view_title_directive_view_title_directive_module__ = __webpack_require__("../../../../../src/app/modules/directive-modules/view-title-directive/view-title-directive.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_directive_modules_delete_confirmation_directive_delete_confirmation_directive_module__ = __webpack_require__("../../../../../src/app/modules/directive-modules/delete-confirmation-directive/delete-confirmation-directive.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_meetings_meetings_service__ = __webpack_require__("../../../../../src/app/services/meetings/meetings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_pipe_modules_capitalize_pipe_capitalize_pipe_module__ = __webpack_require__("../../../../../src/app/modules/pipe-modules/capitalize-pipe/capitalize-pipe.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_pipe_modules_objectNgFor_pipe_objectNgFor_pipe_module__ = __webpack_require__("../../../../../src/app/modules/pipe-modules/objectNgFor-pipe/objectNgFor-pipe.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Components


// Modules


// Services

// Pipes


var MeetingComponents = [
    __WEBPACK_IMPORTED_MODULE_5__components_meeting_components_meeting_meeting_component__["a" /* MeetingComponent */],
    __WEBPACK_IMPORTED_MODULE_4__components_meeting_components_meetings_meetings_component__["a" /* MeetingsComponent */],
];
var MeetingsModule = (function () {
    function MeetingsModule() {
    }
    return MeetingsModule;
}());
MeetingsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_material_angular_material_module__["a" /* AngularMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6__modules_directive_modules_view_title_directive_view_title_directive_module__["a" /* ViewTitleDirectiveModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__modules_directive_modules_delete_confirmation_directive_delete_confirmation_directive_module__["a" /* DeleteConfirmationDirectiveModule */],
            __WEBPACK_IMPORTED_MODULE_9__modules_pipe_modules_capitalize_pipe_capitalize_pipe_module__["a" /* CapitalizePipeModule */],
            __WEBPACK_IMPORTED_MODULE_10__modules_pipe_modules_objectNgFor_pipe_objectNgFor_pipe_module__["a" /* ObjectNgForPipeModule */],
        ],
        declarations: [
            MeetingComponents,
        ],
        exports: [
            MeetingComponents,
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__services_meetings_meetings_service__["a" /* MeetingsService */],
        ],
    })
], MeetingsModule);

//# sourceMappingURL=meetings.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/component-modules/messenger/messenger.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessengerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_angular_material_module__ = __webpack_require__("../../../../../src/app/modules/angular-material/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_messenger_components_messenger_messenger_component__ = __webpack_require__("../../../../../src/app/components/messenger-components/messenger/messenger.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directive_modules_view_title_directive_view_title_directive_module__ = __webpack_require__("../../../../../src/app/modules/directive-modules/view-title-directive/view-title-directive.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_messenger_messenger_service__ = __webpack_require__("../../../../../src/app/services/messenger/messenger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_pipe_modules_capitalize_pipe_capitalize_pipe_module__ = __webpack_require__("../../../../../src/app/modules/pipe-modules/capitalize-pipe/capitalize-pipe.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Components


// Services

// Pipes

var MessengerModule = (function () {
    function MessengerModule() {
    }
    return MessengerModule;
}());
MessengerModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_material_angular_material_module__["a" /* AngularMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__directive_modules_view_title_directive_view_title_directive_module__["a" /* ViewTitleDirectiveModule */],
            __WEBPACK_IMPORTED_MODULE_6__modules_pipe_modules_capitalize_pipe_capitalize_pipe_module__["a" /* CapitalizePipeModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__components_messenger_components_messenger_messenger_component__["a" /* MessengerComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__components_messenger_components_messenger_messenger_component__["a" /* MessengerComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services_messenger_messenger_service__["a" /* MessengerService */],
        ],
    })
], MessengerModule);

//# sourceMappingURL=messenger.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/component-modules/notifications/notifications.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_angular_material_module__ = __webpack_require__("../../../../../src/app/modules/angular-material/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directive_modules_view_title_directive_view_title_directive_module__ = __webpack_require__("../../../../../src/app/modules/directive-modules/view-title-directive/view-title-directive.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notifications_notifications_service__ = __webpack_require__("../../../../../src/app/services/notifications/notifications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_pipe_modules_capitalize_pipe_capitalize_pipe_module__ = __webpack_require__("../../../../../src/app/modules/pipe-modules/capitalize-pipe/capitalize-pipe.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Components

// Services

//Pipes

var NotificationsModule = (function () {
    function NotificationsModule() {
    }
    return NotificationsModule;
}());
NotificationsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_material_angular_material_module__["a" /* AngularMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__directive_modules_view_title_directive_view_title_directive_module__["a" /* ViewTitleDirectiveModule */],
            __WEBPACK_IMPORTED_MODULE_5__modules_pipe_modules_capitalize_pipe_capitalize_pipe_module__["a" /* CapitalizePipeModule */],
        ],
        declarations: [],
        exports: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__services_notifications_notifications_service__["a" /* NotificationsService */],
        ],
    })
], NotificationsModule);

//# sourceMappingURL=notifications.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/component-modules/profile/profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_angular_material_module__ = __webpack_require__("../../../../../src/app/modules/angular-material/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_table__ = __webpack_require__("../../../cdk/@angular/cdk/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_profile_components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile-components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directive_modules_view_title_directive_view_title_directive_module__ = __webpack_require__("../../../../../src/app/modules/directive-modules/view-title-directive/view-title-directive.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_profile_profile_service__ = __webpack_require__("../../../../../src/app/services/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_pipe_modules_capitalize_pipe_capitalize_pipe_module__ = __webpack_require__("../../../../../src/app/modules/pipe-modules/capitalize-pipe/capitalize-pipe.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Components


// Services

//Pipes

var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_material_angular_material_module__["a" /* AngularMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__directive_modules_view_title_directive_view_title_directive_module__["a" /* ViewTitleDirectiveModule */],
            __WEBPACK_IMPORTED_MODULE_9__modules_pipe_modules_capitalize_pipe_capitalize_pipe_module__["a" /* CapitalizePipeModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["C" /* MdTableModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_cdk_table__["m" /* CdkTableModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__components_profile_components_profile_profile_component__["a" /* ProfileComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_6__components_profile_components_profile_profile_component__["a" /* ProfileComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__services_profile_profile_service__["a" /* ProfileService */],
        ],
    })
], ProfileModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/component-modules/projects/projects.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_angular_material_module__ = __webpack_require__("../../../../../src/app/modules/angular-material/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_project_components_projects_projects_component__ = __webpack_require__("../../../../../src/app/components/project-components/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_project_components_project_project_component__ = __webpack_require__("../../../../../src/app/components/project-components/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_directive_modules_view_title_directive_view_title_directive_module__ = __webpack_require__("../../../../../src/app/modules/directive-modules/view-title-directive/view-title-directive.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_directive_modules_delete_confirmation_directive_delete_confirmation_directive_module__ = __webpack_require__("../../../../../src/app/modules/directive-modules/delete-confirmation-directive/delete-confirmation-directive.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_pipe_modules_capitalize_pipe_capitalize_pipe_module__ = __webpack_require__("../../../../../src/app/modules/pipe-modules/capitalize-pipe/capitalize-pipe.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_projects_projects_service__ = __webpack_require__("../../../../../src/app/services/projects/projects.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Components


// Modules



// Services

var ProjectComponents = [
    __WEBPACK_IMPORTED_MODULE_5__components_project_components_project_project_component__["a" /* ProjectComponent */],
    __WEBPACK_IMPORTED_MODULE_4__components_project_components_projects_projects_component__["a" /* ProjectsComponent */],
];
var ProjectsModule = (function () {
    function ProjectsModule() {
    }
    return ProjectsModule;
}());
ProjectsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_material_angular_material_module__["a" /* AngularMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6__modules_directive_modules_view_title_directive_view_title_directive_module__["a" /* ViewTitleDirectiveModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__modules_directive_modules_delete_confirmation_directive_delete_confirmation_directive_module__["a" /* DeleteConfirmationDirectiveModule */],
            __WEBPACK_IMPORTED_MODULE_8__modules_pipe_modules_capitalize_pipe_capitalize_pipe_module__["a" /* CapitalizePipeModule */],
        ],
        declarations: [
            ProjectComponents,
        ],
        exports: [
            ProjectComponents,
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__services_projects_projects_service__["a" /* ProjectsService */],
        ],
    })
], ProjectsModule);

//# sourceMappingURL=projects.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/component-modules/reports/reports.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_angular_material_module__ = __webpack_require__("../../../../../src/app/modules/angular-material/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_report_components_reports_reports_component__ = __webpack_require__("../../../../../src/app/components/report-components/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_report_components_report_create_report_create_component__ = __webpack_require__("../../../../../src/app/components/report-components/report-create/report-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_report_components_report_detail_report_detail_component__ = __webpack_require__("../../../../../src/app/components/report-components/report-detail/report-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_directive_modules_view_title_directive_view_title_directive_module__ = __webpack_require__("../../../../../src/app/modules/directive-modules/view-title-directive/view-title-directive.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_directive_modules_delete_confirmation_directive_delete_confirmation_directive_module__ = __webpack_require__("../../../../../src/app/modules/directive-modules/delete-confirmation-directive/delete-confirmation-directive.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_pipe_modules_capitalize_pipe_capitalize_pipe_module__ = __webpack_require__("../../../../../src/app/modules/pipe-modules/capitalize-pipe/capitalize-pipe.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_reports_reports_service__ = __webpack_require__("../../../../../src/app/services/reports/reports.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Components



// Modules



// Services

var ReportComponents = [
    __WEBPACK_IMPORTED_MODULE_5__components_report_components_report_create_report_create_component__["a" /* ReportCreateComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components_report_components_report_detail_report_detail_component__["a" /* ReportDetailComponent */],
    __WEBPACK_IMPORTED_MODULE_4__components_report_components_reports_reports_component__["a" /* ReportsComponent */],
];
var ReportsModule = (function () {
    function ReportsModule() {
    }
    return ReportsModule;
}());
ReportsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_material_angular_material_module__["a" /* AngularMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_7__modules_directive_modules_view_title_directive_view_title_directive_module__["a" /* ViewTitleDirectiveModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__modules_directive_modules_delete_confirmation_directive_delete_confirmation_directive_module__["a" /* DeleteConfirmationDirectiveModule */],
            __WEBPACK_IMPORTED_MODULE_9__modules_pipe_modules_capitalize_pipe_capitalize_pipe_module__["a" /* CapitalizePipeModule */],
        ],
        declarations: [
            ReportComponents,
        ],
        exports: [
            ReportComponents,
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__services_reports_reports_service__["a" /* ReportsService */],
        ],
    })
], ReportsModule);

//# sourceMappingURL=reports.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/component-modules/search/search.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_angular_material_module__ = __webpack_require__("../../../../../src/app/modules/angular-material/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_search_components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search-components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directive_modules_view_title_directive_view_title_directive_module__ = __webpack_require__("../../../../../src/app/modules/directive-modules/view-title-directive/view-title-directive.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_search_search_service__ = __webpack_require__("../../../../../src/app/services/search/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_pipe_modules_capitalize_pipe_capitalize_pipe_module__ = __webpack_require__("../../../../../src/app/modules/pipe-modules/capitalize-pipe/capitalize-pipe.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_cdk_table__ = __webpack_require__("../../../cdk/@angular/cdk/table.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Components


// Services

// Pipes


var SearchModule = (function () {
    function SearchModule() {
    }
    return SearchModule;
}());
SearchModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_material_angular_material_module__["a" /* AngularMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__directive_modules_view_title_directive_view_title_directive_module__["a" /* ViewTitleDirectiveModule */],
            __WEBPACK_IMPORTED_MODULE_7__modules_pipe_modules_capitalize_pipe_capitalize_pipe_module__["a" /* CapitalizePipeModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["C" /* MdTableModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_cdk_table__["m" /* CdkTableModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__components_search_components_search_search_component__["a" /* SearchComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__components_search_components_search_search_component__["a" /* SearchComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_search_search_service__["a" /* SearchService */],
        ],
    })
], SearchModule);

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/component-modules/tasks/tasks.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_angular_material_module__ = __webpack_require__("../../../../../src/app/modules/angular-material/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_task_components_tasks_tasks_component__ = __webpack_require__("../../../../../src/app/components/task-components/tasks/tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_task_components_task_task_component__ = __webpack_require__("../../../../../src/app/components/task-components/task/task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_directive_modules_view_title_directive_view_title_directive_module__ = __webpack_require__("../../../../../src/app/modules/directive-modules/view-title-directive/view-title-directive.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_directive_modules_delete_confirmation_directive_delete_confirmation_directive_module__ = __webpack_require__("../../../../../src/app/modules/directive-modules/delete-confirmation-directive/delete-confirmation-directive.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_pipe_modules_capitalize_pipe_capitalize_pipe_module__ = __webpack_require__("../../../../../src/app/modules/pipe-modules/capitalize-pipe/capitalize-pipe.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_tasks_tasks_service__ = __webpack_require__("../../../../../src/app/services/tasks/tasks.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Components


// Modules



// Services

var TaskComponents = [
    __WEBPACK_IMPORTED_MODULE_6__components_task_components_task_task_component__["a" /* TaskComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components_task_components_tasks_tasks_component__["a" /* TasksComponent */],
];
var TasksModule = (function () {
    function TasksModule() {
    }
    return TasksModule;
}());
TasksModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_material_angular_material_module__["a" /* AngularMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_7__modules_directive_modules_view_title_directive_view_title_directive_module__["a" /* ViewTitleDirectiveModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__modules_directive_modules_delete_confirmation_directive_delete_confirmation_directive_module__["a" /* DeleteConfirmationDirectiveModule */],
            __WEBPACK_IMPORTED_MODULE_9__modules_pipe_modules_capitalize_pipe_capitalize_pipe_module__["a" /* CapitalizePipeModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["D" /* MdTabsModule */],
        ],
        declarations: [
            TaskComponents,
        ],
        exports: [
            TaskComponents,
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__services_tasks_tasks_service__["a" /* TasksService */],
        ],
    })
], TasksModule);

//# sourceMappingURL=tasks.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/component-modules/teams/teams.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_angular_material_module__ = __webpack_require__("../../../../../src/app/modules/angular-material/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_team_components_teams_teams_component__ = __webpack_require__("../../../../../src/app/components/team-components/teams/teams.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_team_components_team_team_component__ = __webpack_require__("../../../../../src/app/components/team-components/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_directive_modules_view_title_directive_view_title_directive_module__ = __webpack_require__("../../../../../src/app/modules/directive-modules/view-title-directive/view-title-directive.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_directive_modules_delete_confirmation_directive_delete_confirmation_directive_module__ = __webpack_require__("../../../../../src/app/modules/directive-modules/delete-confirmation-directive/delete-confirmation-directive.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_pipe_modules_capitalize_pipe_capitalize_pipe_module__ = __webpack_require__("../../../../../src/app/modules/pipe-modules/capitalize-pipe/capitalize-pipe.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_pipe_modules_objectNgFor_pipe_objectNgFor_pipe_module__ = __webpack_require__("../../../../../src/app/modules/pipe-modules/objectNgFor-pipe/objectNgFor-pipe.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_teams_teams_service__ = __webpack_require__("../../../../../src/app/services/teams/teams.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Components


// Modules


//Pipes


// Service

var TeamComponents = [
    __WEBPACK_IMPORTED_MODULE_5__components_team_components_team_team_component__["a" /* TeamComponent */],
    __WEBPACK_IMPORTED_MODULE_4__components_team_components_teams_teams_component__["a" /* TeamsComponent */],
];
var TeamsModule = (function () {
    function TeamsModule() {
    }
    return TeamsModule;
}());
TeamsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_material_angular_material_module__["a" /* AngularMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6__modules_directive_modules_view_title_directive_view_title_directive_module__["a" /* ViewTitleDirectiveModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__modules_directive_modules_delete_confirmation_directive_delete_confirmation_directive_module__["a" /* DeleteConfirmationDirectiveModule */],
            __WEBPACK_IMPORTED_MODULE_8__modules_pipe_modules_capitalize_pipe_capitalize_pipe_module__["a" /* CapitalizePipeModule */],
            __WEBPACK_IMPORTED_MODULE_9__modules_pipe_modules_objectNgFor_pipe_objectNgFor_pipe_module__["a" /* ObjectNgForPipeModule */],
        ],
        declarations: [
            TeamComponents,
        ],
        exports: [
            TeamComponents,
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__services_teams_teams_service__["a" /* TeamsService */],
        ],
    })
], TeamsModule);

//# sourceMappingURL=teams.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/component-modules/users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_angular_material_module__ = __webpack_require__("../../../../../src/app/modules/angular-material/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_components_users_users_component__ = __webpack_require__("../../../../../src/app/components/user-components/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user-components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_directive_modules_view_title_directive_view_title_directive_module__ = __webpack_require__("../../../../../src/app/modules/directive-modules/view-title-directive/view-title-directive.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_directive_modules_delete_confirmation_directive_delete_confirmation_directive_module__ = __webpack_require__("../../../../../src/app/modules/directive-modules/delete-confirmation-directive/delete-confirmation-directive.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_pipe_modules_capitalize_pipe_capitalize_pipe_module__ = __webpack_require__("../../../../../src/app/modules/pipe-modules/capitalize-pipe/capitalize-pipe.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_users_users_service__ = __webpack_require__("../../../../../src/app/services/users/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Components


// Modules



// Services

var UserComponents = [
    __WEBPACK_IMPORTED_MODULE_5__components_user_components_user_user_component__["a" /* UserComponent */],
    __WEBPACK_IMPORTED_MODULE_4__components_user_components_users_users_component__["a" /* UsersComponent */],
];
var UsersModule = (function () {
    function UsersModule() {
    }
    return UsersModule;
}());
UsersModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_material_angular_material_module__["a" /* AngularMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6__modules_directive_modules_view_title_directive_view_title_directive_module__["a" /* ViewTitleDirectiveModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__modules_directive_modules_delete_confirmation_directive_delete_confirmation_directive_module__["a" /* DeleteConfirmationDirectiveModule */],
            __WEBPACK_IMPORTED_MODULE_8__modules_pipe_modules_capitalize_pipe_capitalize_pipe_module__["a" /* CapitalizePipeModule */],
        ],
        declarations: [
            UserComponents,
        ],
        exports: [
            UserComponents,
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__services_users_users_service__["a" /* UsersService */],
        ],
    })
], UsersModule);

//# sourceMappingURL=users.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/directive-modules/delete-confirmation-directive/delete-confirmation-directive.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteConfirmationDirectiveModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_angular_material_angular_material_module__ = __webpack_require__("../../../../../src/app/modules/angular-material/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_delete_confirmation_delete_confirmation_component__ = __webpack_require__("../../../../../src/app/directives/delete-confirmation/delete-confirmation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DeleteConfirmationDirectiveModule = (function () {
    function DeleteConfirmationDirectiveModule() {
    }
    return DeleteConfirmationDirectiveModule;
}());
DeleteConfirmationDirectiveModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__modules_angular_material_angular_material_module__["a" /* AngularMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__directives_delete_confirmation_delete_confirmation_component__["a" /* DeleteConfirmationComponent */],
            __WEBPACK_IMPORTED_MODULE_3__directives_delete_confirmation_delete_confirmation_component__["b" /* DeleteConfirmationDialog */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__directives_delete_confirmation_delete_confirmation_component__["a" /* DeleteConfirmationComponent */],
            __WEBPACK_IMPORTED_MODULE_3__directives_delete_confirmation_delete_confirmation_component__["b" /* DeleteConfirmationDialog */],
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__directives_delete_confirmation_delete_confirmation_component__["b" /* DeleteConfirmationDialog */],
        ],
    })
], DeleteConfirmationDirectiveModule);

//# sourceMappingURL=delete-confirmation-directive.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/directive-modules/notification-directive/notification-directive.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationDirectiveModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_angular_material_angular_material_module__ = __webpack_require__("../../../../../src/app/modules/angular-material/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_notification_notification_component__ = __webpack_require__("../../../../../src/app/directives/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_notifications_notifications_service__ = __webpack_require__("../../../../../src/app/services/notifications/notifications.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Service

var NotificationDirectiveModule = (function () {
    function NotificationDirectiveModule() {
    }
    return NotificationDirectiveModule;
}());
NotificationDirectiveModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__modules_angular_material_angular_material_module__["a" /* AngularMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormsModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__directives_notification_notification_component__["a" /* NotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_4__directives_notification_notification_component__["b" /* NotificationDialog */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__directives_notification_notification_component__["a" /* NotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_4__directives_notification_notification_component__["b" /* NotificationDialog */],
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__directives_notification_notification_component__["b" /* NotificationDialog */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services_notifications_notifications_service__["a" /* NotificationsService */],
        ],
    })
], NotificationDirectiveModule);

//# sourceMappingURL=notification-directive.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/directive-modules/view-title-directive/view-title-directive.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewTitleDirectiveModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_view_title_view_title_component__ = __webpack_require__("../../../../../src/app/directives/view-title/view-title.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewTitleDirectiveModule = (function () {
    function ViewTitleDirectiveModule() {
    }
    return ViewTitleDirectiveModule;
}());
ViewTitleDirectiveModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__directives_view_title_view_title_component__["a" /* ViewTitleComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__directives_view_title_view_title_component__["a" /* ViewTitleComponent */],
        ]
    })
], ViewTitleDirectiveModule);

//# sourceMappingURL=view-title-directive.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/pipe-modules/capitalize-pipe/capitalize-pipe.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_capitalize_capitalize_pipe__ = __webpack_require__("../../../../../src/app/pipes/capitalize/capitalize.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CapitalizePipeModule = (function () {
    function CapitalizePipeModule() {
    }
    return CapitalizePipeModule;
}());
CapitalizePipeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__pipes_capitalize_capitalize_pipe__["a" /* CapitalizePipe */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__pipes_capitalize_capitalize_pipe__["a" /* CapitalizePipe */]
        ]
    })
], CapitalizePipeModule);

//# sourceMappingURL=capitalize-pipe.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/pipe-modules/objectNgFor-pipe/objectNgFor-pipe.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectNgForPipeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_objectNgFor_objectNgFor_pipe__ = __webpack_require__("../../../../../src/app/pipes/objectNgFor/objectNgFor.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ObjectNgForPipeModule = (function () {
    function ObjectNgForPipeModule() {
    }
    return ObjectNgForPipeModule;
}());
ObjectNgForPipeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__pipes_objectNgFor_objectNgFor_pipe__["a" /* ObjectNgForPipe */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__pipes_objectNgFor_objectNgFor_pipe__["a" /* ObjectNgForPipe */]
        ]
    })
], ObjectNgForPipeModule);

//# sourceMappingURL=objectNgFor-pipe.module.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/capitalize/capitalize.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value, args) {
        if (!value) {
            return value;
        }
        return value.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    return CapitalizePipe;
}());
CapitalizePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'capitalize' })
], CapitalizePipe);

//# sourceMappingURL=capitalize.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/objectNgFor/objectNgFor.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectNgForPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ObjectNgForPipe = (function () {
    function ObjectNgForPipe() {
    }
    ObjectNgForPipe.prototype.transform = function (value, args) {
        var objRet = [];
        __WEBPACK_IMPORTED_MODULE_1_underscore__["each"](value, function (val, index) {
            objRet.push({
                key: index,
                value: val
            });
        });
        return objRet;
    };
    return ObjectNgForPipe;
}());
ObjectNgForPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'objectNgFor' })
], ObjectNgForPipe);

//# sourceMappingURL=objectNgFor.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/routes/route-definitions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteDefinitions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_login_components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login-components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_dashboard_components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard-components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_calendar_components_calendar_calendar_component__ = __webpack_require__("../../../../../src/app/components/calendar-components/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_team_components_teams_teams_component__ = __webpack_require__("../../../../../src/app/components/team-components/teams/teams.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_team_components_team_team_component__ = __webpack_require__("../../../../../src/app/components/team-components/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_project_components_projects_projects_component__ = __webpack_require__("../../../../../src/app/components/project-components/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_project_components_project_project_component__ = __webpack_require__("../../../../../src/app/components/project-components/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_meeting_components_meeting_meeting_component__ = __webpack_require__("../../../../../src/app/components/meeting-components/meeting/meeting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_meeting_components_meetings_meetings_component__ = __webpack_require__("../../../../../src/app/components/meeting-components/meetings/meetings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_task_components_tasks_tasks_component__ = __webpack_require__("../../../../../src/app/components/task-components/tasks/tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_task_components_task_task_component__ = __webpack_require__("../../../../../src/app/components/task-components/task/task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_messenger_components_messenger_messenger_component__ = __webpack_require__("../../../../../src/app/components/messenger-components/messenger/messenger.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile-components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_report_components_reports_reports_component__ = __webpack_require__("../../../../../src/app/components/report-components/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_search_components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search-components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_user_components_users_users_component__ = __webpack_require__("../../../../../src/app/components/user-components/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_user_components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user-components/user/user.component.ts");
// components

















var RouteDefinitions = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__components_login_components_login_login_component__["a" /* LoginComponent */],
        pathMatch: 'full',
        outlet: 'notloggedin'
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_1__components_dashboard_components_dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'calendar',
        component: __WEBPACK_IMPORTED_MODULE_2__components_calendar_components_calendar_calendar_component__["a" /* CalendarComponent */]
    },
    {
        path: 'team/:action',
        component: __WEBPACK_IMPORTED_MODULE_4__components_team_components_team_team_component__["a" /* TeamComponent */]
    },
    {
        path: 'team/:action/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__components_team_components_team_team_component__["a" /* TeamComponent */]
    },
    {
        path: 'teams',
        component: __WEBPACK_IMPORTED_MODULE_3__components_team_components_teams_teams_component__["a" /* TeamsComponent */]
    },
    {
        path: 'project/:action',
        component: __WEBPACK_IMPORTED_MODULE_6__components_project_components_project_project_component__["a" /* ProjectComponent */]
    },
    {
        path: 'project/:action/:id',
        component: __WEBPACK_IMPORTED_MODULE_6__components_project_components_project_project_component__["a" /* ProjectComponent */]
    },
    {
        path: 'projects',
        component: __WEBPACK_IMPORTED_MODULE_5__components_project_components_projects_projects_component__["a" /* ProjectsComponent */]
    },
    {
        path: 'meeting/:action',
        component: __WEBPACK_IMPORTED_MODULE_7__components_meeting_components_meeting_meeting_component__["a" /* MeetingComponent */]
    },
    {
        path: 'meeting/:action/:id',
        component: __WEBPACK_IMPORTED_MODULE_7__components_meeting_components_meeting_meeting_component__["a" /* MeetingComponent */]
    },
    {
        path: 'meetings',
        component: __WEBPACK_IMPORTED_MODULE_8__components_meeting_components_meetings_meetings_component__["a" /* MeetingsComponent */]
    },
    {
        path: 'task/:action',
        component: __WEBPACK_IMPORTED_MODULE_10__components_task_components_task_task_component__["a" /* TaskComponent */]
    },
    {
        path: 'task/:action/:id',
        component: __WEBPACK_IMPORTED_MODULE_10__components_task_components_task_task_component__["a" /* TaskComponent */]
    },
    {
        path: 'tasks',
        component: __WEBPACK_IMPORTED_MODULE_9__components_task_components_tasks_tasks_component__["a" /* TasksComponent */]
    },
    {
        path: 'users',
        component: __WEBPACK_IMPORTED_MODULE_15__components_user_components_users_users_component__["a" /* UsersComponent */]
    },
    {
        path: 'user/:action',
        component: __WEBPACK_IMPORTED_MODULE_16__components_user_components_user_user_component__["a" /* UserComponent */]
    },
    {
        path: 'user/:action/:id',
        component: __WEBPACK_IMPORTED_MODULE_16__components_user_components_user_user_component__["a" /* UserComponent */]
    },
    {
        path: 'messenger',
        component: __WEBPACK_IMPORTED_MODULE_11__components_messenger_components_messenger_messenger_component__["a" /* MessengerComponent */]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_12__components_profile_components_profile_profile_component__["a" /* ProfileComponent */]
    },
    {
        path: 'reports',
        component: __WEBPACK_IMPORTED_MODULE_13__components_report_components_reports_reports_component__["a" /* ReportsComponent */]
    },
    {
        path: 'search/:quest',
        component: __WEBPACK_IMPORTED_MODULE_14__components_search_components_search_search_component__["a" /* SearchComponent */]
    }
];
//# sourceMappingURL=route-definitions.js.map

/***/ }),

/***/ "../../../../../src/app/services/calendar/calendar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarService = (function () {
    function CalendarService() {
    }
    return CalendarService;
}());
CalendarService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], CalendarService);

//# sourceMappingURL=calendar.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/dashboard/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables_variables__ = __webpack_require__("../../../../../src/app/variables/variables.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardService = (function () {
    function DashboardService(http) {
        this.http = http;
        this.api = __WEBPACK_IMPORTED_MODULE_3__variables_variables__["a" /* apiUrl */];
    }
    // Get all tasks from the API
    DashboardService.prototype.getTasks = function () {
        return this.http.get(this.api + '/task')
            .map(function (res) { return res.json(); });
    };
    DashboardService.prototype.getProjects = function () {
        return this.http.get(this.api + '/project')
            .map(function (res) { return res.json(); });
    };
    DashboardService.prototype.getMeetings = function () {
        return this.http.get(this.api + '/meeting')
            .map(function (res) { return res.json(); });
    };
    DashboardService.prototype.getTeams = function () {
        return this.http.get(this.api + '/teamsWithoutPhoto')
            .map(function (res) { return res.json(); });
    };
    return DashboardService;
}());
DashboardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], DashboardService);

var _a;
//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_user__ = __webpack_require__("../../../../../src/app/classes/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__variables_variables__ = __webpack_require__("../../../../../src/app/variables/variables.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.api = __WEBPACK_IMPORTED_MODULE_4__variables_variables__["a" /* apiUrl */];
        this.user = new __WEBPACK_IMPORTED_MODULE_3__classes_user__["a" /* User */]();
        this.logged = false;
    }
    LoginService.prototype.login = function (user) {
        var _this = this;
        return this.http.post(this.api + '/login', user)
            .map(function (res) {
            res.json();
            _this.user = JSON.parse(res['_body']);
            _this.setLoggedStorage();
            _this.logged = _this.user._id ? true : false;
            return _this.logged;
        });
    };
    LoginService.prototype.isLogged = function () {
        return this.logged || this.getLoggedStorage()._id ? true : false;
        ;
    };
    LoginService.prototype.logOut = function () {
        this.logged = false;
        sessionStorage.clear();
    };
    LoginService.prototype.setLoggedStorage = function () {
        sessionStorage.setItem('user', JSON.stringify(this.user));
    };
    LoginService.prototype.getLoggedStorage = function () {
        return JSON.parse(sessionStorage.getItem('user')) || {};
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/meetings/meetings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables_variables__ = __webpack_require__("../../../../../src/app/variables/variables.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MeetingsService = (function () {
    function MeetingsService(http) {
        this.http = http;
        this.api = __WEBPACK_IMPORTED_MODULE_3__variables_variables__["a" /* apiUrl */];
    }
    // Get all meetings from the API
    MeetingsService.prototype.getAll = function () {
        return this.http.get(this.api + '/meeting')
            .map(function (res) { return res.json(); });
    };
    // Get meeting from
    MeetingsService.prototype.get = function (id) {
        return this.http.get(this.api + '/meeting/' + id)
            .map(function (res) { return res.json(); });
    };
    // Create new meeting
    MeetingsService.prototype.create = function (meeting) {
        return this.http.post(this.api + '/meeting', meeting)
            .map(function (res) { return res.json(); });
    };
    // Update meeting data
    MeetingsService.prototype.update = function (meeting) {
        return this.http.put(this.api + '/meeting/' + meeting._id, meeting)
            .map(function (res) { return res.json(); });
    };
    // Delete meeting
    MeetingsService.prototype.delete = function (id) {
        return this.http.delete(this.api + '/meeting/' + id)
            .map(function (res) { return res.json(); });
    };
    return MeetingsService;
}());
MeetingsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], MeetingsService);

var _a;
//# sourceMappingURL=meetings.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/messenger/messenger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessengerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessengerService = (function () {
    function MessengerService() {
    }
    return MessengerService;
}());
MessengerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], MessengerService);

//# sourceMappingURL=messenger.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/notifications/notifications.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables_variables__ = __webpack_require__("../../../../../src/app/variables/variables.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificationsService = (function () {
    function NotificationsService(http) {
        this.http = http;
        this.api = __WEBPACK_IMPORTED_MODULE_3__variables_variables__["a" /* apiUrl */];
    }
    // Get all notifications from the API
    NotificationsService.prototype.getAll = function () {
        return this.http.get(this.api + '/notification')
            .map(function (res) { return res.json(); });
    };
    // Get notification from
    NotificationsService.prototype.get = function (id) {
        return this.http.get(this.api + '/notification/' + id)
            .map(function (res) { return res.json(); });
    };
    // Create new notification
    NotificationsService.prototype.create = function (notification) {
        return this.http.post(this.api + '/notification', notification)
            .map(function (res) { return res.json(); });
    };
    // Update notification data
    NotificationsService.prototype.update = function (notification) {
        return this.http.put(this.api + '/notification/' + notification._id, notification)
            .map(function (res) { return res.json(); });
    };
    // Delete notification
    NotificationsService.prototype.delete = function (id) {
        return this.http.delete(this.api + '/notification/' + id)
            .map(function (res) { return res.json(); });
    };
    return NotificationsService;
}());
NotificationsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], NotificationsService);

var _a;
//# sourceMappingURL=notifications.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/profile/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables_variables__ = __webpack_require__("../../../../../src/app/variables/variables.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
        this.api = __WEBPACK_IMPORTED_MODULE_3__variables_variables__["a" /* apiUrl */];
    }
    // Get all tasks from the API
    ProfileService.prototype.getUser = function (id) {
        return this.http.get(this.api + '/user/' + id)
            .map(function (res) { return res.json(); });
    };
    ProfileService.prototype.getUserTasks = function (id) {
        return this.http.get(this.api + '/task/user/' + id)
            .map(function (res) { return res.json(); });
    };
    ProfileService.prototype.getUserProjects = function (id) {
        return this.http.get(this.api + '/project/user/' + id)
            .map(function (res) { return res.json(); });
    };
    ProfileService.prototype.getUserMeetings = function (id) {
        return this.http.get(this.api + '/meeting/user/' + id)
            .map(function (res) { return res.json(); });
    };
    ProfileService.prototype.getUserTeams = function (id) {
        return this.http.get(this.api + '/team/user/' + id)
            .map(function (res) { return res.json(); });
    };
    return ProfileService;
}());
ProfileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ProfileService);

var _a;
//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/projects/projects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables_variables__ = __webpack_require__("../../../../../src/app/variables/variables.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectsService = (function () {
    function ProjectsService(http) {
        this.http = http;
        this.api = __WEBPACK_IMPORTED_MODULE_3__variables_variables__["a" /* apiUrl */];
    }
    // Get all projects from the API
    ProjectsService.prototype.getAll = function () {
        return this.http.get(this.api + '/project')
            .map(function (res) { return res.json(); });
    };
    // Get all teams from the API
    ProjectsService.prototype.getAllWithoutPhoto = function () {
        return this.http.get(this.api + '/projectsWithoutPhoto')
            .map(function (res) { return res.json(); });
    };
    //Get project photo
    ProjectsService.prototype.getPhoto = function (id) {
        return this.http.get(this.api + '/project/photo/' + id)
            .map(function (res) { return res.json(); });
    };
    // Get project from
    ProjectsService.prototype.get = function (id) {
        return this.http.get(this.api + '/project/' + id)
            .map(function (res) { return res.json(); });
    };
    // Create new project
    ProjectsService.prototype.create = function (project) {
        return this.http.post(this.api + '/project', project)
            .map(function (res) { return res.json(); });
    };
    // Update project data
    ProjectsService.prototype.update = function (project) {
        return this.http.put(this.api + '/project/' + project._id, project)
            .map(function (res) { return res.json(); });
    };
    // Delete project
    ProjectsService.prototype.delete = function (id) {
        return this.http.delete(this.api + '/project/' + id)
            .map(function (res) { return res.json(); });
    };
    return ProjectsService;
}());
ProjectsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ProjectsService);

var _a;
//# sourceMappingURL=projects.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/reports/reports.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportsService = (function () {
    function ReportsService() {
    }
    return ReportsService;
}());
ReportsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ReportsService);

//# sourceMappingURL=reports.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/search/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchService = (function () {
    function SearchService() {
    }
    return SearchService;
}());
SearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SearchService);

//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/tasks/tasks.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables_variables__ = __webpack_require__("../../../../../src/app/variables/variables.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TasksService = (function () {
    function TasksService(http) {
        this.http = http;
        this.api = __WEBPACK_IMPORTED_MODULE_3__variables_variables__["a" /* apiUrl */];
    }
    // Get all tasks from the API
    TasksService.prototype.getAll = function () {
        return this.http.get(this.api + '/task')
            .map(function (res) { return res.json(); });
    };
    // Get task from
    TasksService.prototype.get = function (id) {
        return this.http.get(this.api + '/task/' + id)
            .map(function (res) { return res.json(); });
    };
    // Create new task
    TasksService.prototype.create = function (task) {
        return this.http.post(this.api + '/task', task)
            .map(function (res) { return res.json(); });
    };
    // Update task data
    TasksService.prototype.update = function (task) {
        return this.http.put(this.api + '/task/' + task._id, task)
            .map(function (res) { return res.json(); });
    };
    // Delete task
    TasksService.prototype.delete = function (id) {
        return this.http.delete(this.api + '/task/' + id)
            .map(function (res) { return res.json(); });
    };
    return TasksService;
}());
TasksService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TasksService);

var _a;
//# sourceMappingURL=tasks.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/teams/teams.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables_variables__ = __webpack_require__("../../../../../src/app/variables/variables.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeamsService = (function () {
    function TeamsService(http) {
        this.http = http;
        this.api = __WEBPACK_IMPORTED_MODULE_3__variables_variables__["a" /* apiUrl */];
    }
    // Get all teams from the API
    TeamsService.prototype.getAll = function () {
        return this.http.get(this.api + '/teamsWithoutPhoto')
            .map(function (res) { return res.json(); });
    };
    TeamsService.prototype.getPhoto = function (id) {
        return this.http.get(this.api + '/team/photo/' + id)
            .map(function (res) { return res.json(); });
    };
    // Get team from
    TeamsService.prototype.get = function (id) {
        return this.http.get(this.api + '/team/' + id)
            .map(function (res) { return res.json(); });
    };
    // Create new team
    TeamsService.prototype.create = function (team) {
        return this.http.post(this.api + '/team', team)
            .map(function (res) { return res.json(); });
    };
    // Update team data
    TeamsService.prototype.update = function (team) {
        return this.http.put(this.api + '/team/' + team._id, team)
            .map(function (res) { return res.json(); });
    };
    // Delete team
    TeamsService.prototype.delete = function (id) {
        return this.http.delete(this.api + '/team/' + id)
            .map(function (res) { return res.json(); });
    };
    return TeamsService;
}());
TeamsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TeamsService);

var _a;
//# sourceMappingURL=teams.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/users/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables_variables__ = __webpack_require__("../../../../../src/app/variables/variables.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
        this.api = __WEBPACK_IMPORTED_MODULE_3__variables_variables__["a" /* apiUrl */];
    }
    // Get all teams from the API
    UsersService.prototype.getAll = function () {
        return this.http.get(this.api + '/user')
            .map(function (res) { return res.json(); });
    };
    // Get all teams from the API
    UsersService.prototype.getAllWithoutPhoto = function () {
        return this.http.get(this.api + '/usersWithoutPhoto')
            .map(function (res) { return res.json(); });
    };
    //Get user photo
    UsersService.prototype.getPhoto = function (id) {
        return this.http.get(this.api + '/user/photo/' + id)
            .map(function (res) { return res.json(); });
    };
    // Get team from
    UsersService.prototype.get = function (id) {
        return this.http.get(this.api + '/user/' + id)
            .map(function (res) { return res.json(); });
    };
    // Create new team
    UsersService.prototype.create = function (user) {
        return this.http.post(this.api + '/user', user)
            .map(function (res) { return res.json(); });
    };
    // Update team data
    UsersService.prototype.update = function (user) {
        return this.http.put(this.api + '/user/' + user._id, user)
            .map(function (res) { return res.json(); });
    };
    // Delete team
    UsersService.prototype.delete = function (id) {
        return this.http.delete(this.api + '/user/' + id)
            .map(function (res) { return res.json(); });
    };
    return UsersService;
}());
UsersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UsersService);

var _a;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/app/variables/variables.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiUrl; });
var apiUrl = 'https://tfm-server.azurewebsites.net/api';
//# sourceMappingURL=variables.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map