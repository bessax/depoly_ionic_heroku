(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons size=\"large\" slot=\"start\" (click)=\"backToCallingPage()\">\n      <ion-icon name=\"arrow-back\"></ion-icon> \n    </ion-buttons>\n    <ion-title >\n      PROFILE\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"profile-intro\">\n    <ion-row>\n      <ion-col col-4>\n        <img class=\"profile-photo\" src=\"https://res.cloudinary.com/og-tech/image/upload/s--Ivs1sp-J--/c_scale,w_100/v1529311900/og_icon.jpg\">\n      </ion-col>\n      <ion-col col-8>\n        <div class=\"profile-info\">\n          <div class=\"post-count info-square\">\n            <p>\n              <strong>1</strong><br>\n              <em>post</em>\n            </p>\n          </div>\n          <div class=\"follower-count info-square\">\n            <p>\n              <strong>1532</strong><br>\n              <em>followers</em>\n            </p>\n          </div>\n          <div class=\"following-count info-square\">\n            <p>\n              <strong>200</strong><br>\n              <em>following</em>\n            </p>\n          </div>\n        </div>\n        <div>\n          <button ion-button class=\"follow-button\">Follow</button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class=\"more-details\">\n    <p class=\"user-name\"><strong>Oreoluwa Ogundipe</strong></p>\n    <p class=\"user-bio\">Softwèrè Engineer</p>\n  </div>\n\n  <ion-segment color=\"primary\">\n    <ion-segment-button value=\"posts\" selected>\n      <ion-icon name=\"grid\"></ion-icon>    \n    </ion-segment-button>\n    <ion-segment-button value=\"tagged\">\n        <ion-icon name=\"contacts\"></ion-icon>\n      </ion-segment-button>\n    <ion-segment-button value=\"bookmark\">\n      <ion-icon name=\"bookmark\"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-grid class=\"image-grid\">\n    <ion-row class=\"single-row\">\n      <ion-col col-4 class=\"single-image\">\n        <img height=\"100%\" width=\"100%\" src=\"https://res.cloudinary.com/og-tech/image/upload/q_40/v1506850322/blog_g3mexb.jpg\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/profile/profile-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-photo {\n  border-radius: 50%;\n  margin-top: 10px;\n  width: 8em !important;\n  height: 8em !important;\n}\n\n.profile-info {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  text-align: center;\n}\n\n.info-square {\n  text-align: center;\n}\n\n.follow-button {\n  width: 90%;\n  margin: 0px 10px;\n  background-color: #3E99ED;\n}\n\n.more-details {\n  padding-left: 10px;\n}\n\nion-segment {\n  height: 5rem;\n  border: 1px solid rgba(160, 160, 160, 0.453);\n}\n\nion-segment-button {\n  border: 0px !important;\n}\n\n.image-grid {\n  padding: 0px;\n  margin: 0px;\n}\n\n.single-row {\n  height: 18rem;\n}\n\n.single-image {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBQ1I7O0FBRUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDUjs7QUFFSTtFQUNJLGtCQUFBO0FBQ1I7O0FBRUk7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUNSOztBQUVJO0VBQ0ksa0JBQUE7QUFDUjs7QUFNSTtFQUNJLFlBQUE7RUFDQSw0Q0FBQTtBQUhSOztBQU1JO0VBQ0ksc0JBQUE7QUFIUjs7QUFNSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBSFI7O0FBTUk7RUFDSSxhQUFBO0FBSFI7O0FBTUk7RUFDSSxZQUFBO0FBSFIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC5wcm9maWxlLXBob3Rve1xuICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgd2lkdGg6IDhlbSAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDhlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wcm9maWxlLWluZm97XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmluZm8tc3F1YXJle1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmZvbGxvdy1idXR0b257XG4gICAgICAgIHdpZHRoOjkwJTtcbiAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNFOTlFRDtcbiAgICB9XG5cbiAgICAubW9yZS1kZXRhaWxze1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgfVxuXG4gICAgJHNlZ21lbnQtYnV0dG9uLWlvcy1ib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgJHNlZ21lbnQtYnV0dG9uLWlvcy10b29sYmFyLWljb24tc2l6ZTogM3JlbTtcbiAgICAkc2VnbWVudC1idXR0b24taW9zLXRvb2xiYXItaWNvbi13aWR0aDogM3JlbTtcblxuICAgIGlvbi1zZWdtZW50e1xuICAgICAgICBoZWlnaHQ6IDVyZW07XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYwLCAxNjAsIDE2MCwgMC40NTMpO1xuICAgIH1cblxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbntcbiAgICAgICAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaW1hZ2UtZ3JpZHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICB9XG5cbiAgICAuc2luZ2xlLXJvd3tcbiAgICAgICAgaGVpZ2h0OiAxOHJlbTtcbiAgICB9XG5cbiAgICAuc2luZ2xlLWltYWdle1xuICAgICAgICBwYWRkaW5nOjBweDtcbiAgICB9Il19 */");

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



let ProfilePage = class ProfilePage {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    backToCallingPage() {
        this.location.back();
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map