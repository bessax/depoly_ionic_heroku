(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["prefeedpost-prefeedpost-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/prefeedpost/prefeedpost.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/prefeedpost/prefeedpost.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>prefeedpost</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/prefeedpost/prefeedpost-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/prefeedpost/prefeedpost-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PrefeedpostPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefeedpostPageRoutingModule", function() { return PrefeedpostPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _prefeedpost_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prefeedpost.page */ "./src/app/prefeedpost/prefeedpost.page.ts");




const routes = [
    {
        path: '',
        component: _prefeedpost_page__WEBPACK_IMPORTED_MODULE_3__["PrefeedpostPage"]
    }
];
let PrefeedpostPageRoutingModule = class PrefeedpostPageRoutingModule {
};
PrefeedpostPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PrefeedpostPageRoutingModule);



/***/ }),

/***/ "./src/app/prefeedpost/prefeedpost.module.ts":
/*!***************************************************!*\
  !*** ./src/app/prefeedpost/prefeedpost.module.ts ***!
  \***************************************************/
/*! exports provided: PrefeedpostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefeedpostPageModule", function() { return PrefeedpostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _prefeedpost_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prefeedpost-routing.module */ "./src/app/prefeedpost/prefeedpost-routing.module.ts");
/* harmony import */ var _prefeedpost_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prefeedpost.page */ "./src/app/prefeedpost/prefeedpost.page.ts");







let PrefeedpostPageModule = class PrefeedpostPageModule {
};
PrefeedpostPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _prefeedpost_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrefeedpostPageRoutingModule"]
        ],
        declarations: [_prefeedpost_page__WEBPACK_IMPORTED_MODULE_6__["PrefeedpostPage"]]
    })
], PrefeedpostPageModule);



/***/ }),

/***/ "./src/app/prefeedpost/prefeedpost.page.scss":
/*!***************************************************!*\
  !*** ./src/app/prefeedpost/prefeedpost.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZWZlZWRwb3N0L3ByZWZlZWRwb3N0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/prefeedpost/prefeedpost.page.ts":
/*!*************************************************!*\
  !*** ./src/app/prefeedpost/prefeedpost.page.ts ***!
  \*************************************************/
/*! exports provided: PrefeedpostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefeedpostPage", function() { return PrefeedpostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PrefeedpostPage = class PrefeedpostPage {
    constructor() { }
    ngOnInit() {
    }
};
PrefeedpostPage.ctorParameters = () => [];
PrefeedpostPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prefeedpost',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./prefeedpost.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/prefeedpost/prefeedpost.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./prefeedpost.page.scss */ "./src/app/prefeedpost/prefeedpost.page.scss")).default]
    })
], PrefeedpostPage);



/***/ })

}]);
//# sourceMappingURL=prefeedpost-prefeedpost-module-es2015.js.map