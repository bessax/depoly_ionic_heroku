(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feed-post-feed-post-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed-post/feed-post.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feed-post/feed-post.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>feedPost</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/feed-post/feed-post-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/feed-post/feed-post-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: FeedPostPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPostPageRoutingModule", function() { return FeedPostPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _feed_post_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feed-post.page */ "./src/app/feed-post/feed-post.page.ts");




const routes = [
    {
        path: '',
        component: _feed_post_page__WEBPACK_IMPORTED_MODULE_3__["FeedPostPage"]
    }
];
let FeedPostPageRoutingModule = class FeedPostPageRoutingModule {
};
FeedPostPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FeedPostPageRoutingModule);



/***/ }),

/***/ "./src/app/feed-post/feed-post.module.ts":
/*!***********************************************!*\
  !*** ./src/app/feed-post/feed-post.module.ts ***!
  \***********************************************/
/*! exports provided: FeedPostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPostPageModule", function() { return FeedPostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _feed_post_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feed-post-routing.module */ "./src/app/feed-post/feed-post-routing.module.ts");
/* harmony import */ var _feed_post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feed-post.page */ "./src/app/feed-post/feed-post.page.ts");







let FeedPostPageModule = class FeedPostPageModule {
};
FeedPostPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _feed_post_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedPostPageRoutingModule"]
        ],
        declarations: [_feed_post_page__WEBPACK_IMPORTED_MODULE_6__["FeedPostPage"]]
    })
], FeedPostPageModule);



/***/ }),

/***/ "./src/app/feed-post/feed-post.page.scss":
/*!***********************************************!*\
  !*** ./src/app/feed-post/feed-post.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlZWQtcG9zdC9mZWVkLXBvc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/feed-post/feed-post.page.ts":
/*!*********************************************!*\
  !*** ./src/app/feed-post/feed-post.page.ts ***!
  \*********************************************/
/*! exports provided: FeedPostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPostPage", function() { return FeedPostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FeedPostPage = class FeedPostPage {
    constructor() { }
    ngOnInit() {
    }
};
FeedPostPage.ctorParameters = () => [];
FeedPostPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feed-post',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./feed-post.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed-post/feed-post.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./feed-post.page.scss */ "./src/app/feed-post/feed-post.page.scss")).default]
    })
], FeedPostPage);



/***/ })

}]);
//# sourceMappingURL=feed-post-feed-post-module-es2015.js.map