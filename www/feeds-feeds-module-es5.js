(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feeds-feeds-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/animated-like/animated-like.component.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/animated-like/animated-like.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsAnimatedLikeAnimatedLikeComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-icon (click)=\"toggleLikeState()\" tappable [@heart]=\"likeState\" size=\"large\" name=\"heart\"></ion-icon>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/estimatemodal/estimatemodal.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/estimatemodal/estimatemodal.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppEstimatemodalEstimatemodalComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n      <ion-avatar  slot=\"start\">\n        <img class=\"imgLogoTopo\" src=\"../../assets/logos/couter_logo.png\">\n      </ion-avatar>\n    <ion-title >\n      GET ESTIMATE\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"estimateAdd\" (ngSubmit)=\"submitForm()\" novalidate>  \n    <ion-item>\n      <ion-label position=\"stacked\">Name <ion-text color=\"danger\">*</ion-text></ion-label>\n      <ion-input required type=\"text\" formControlName=\"nameText\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Cell Phone <ion-text color=\"danger\">*</ion-text></ion-label>\n      <ion-input required type=\"cel\" formControlName=\"cel\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">E-mail <ion-text color=\"danger\">*</ion-text></ion-label>\n      <ion-input required type=\"email\" formControlName=\"email\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">State <ion-text color=\"danger\">*</ion-text></ion-label>\n      <ion-input required type=\"text\" formControlName=\"state\"></ion-input>\n    </ion-item>\n    <ion-button (click)=\"openFile()\" expand=\"full\">Attachment</ion-button>\n    <div>\n      <ion-label>\n        {{fileName}}\n      </ion-label>\n    </div>\n    <div>\n      <ion-button type=\"submit\">Confirm</ion-button>\n      <ion-button color=\"danger\">Cancel</ion-button>\n    </div>\n  </form>\n</ion-content>\n \n\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/feeds/feeds.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feeds/feeds.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFeedsFeedsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons size=\"large\" slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n    <!-- <ion-buttons slot=\"primary\">\n      <ion-button>\n        <ion-icon size=\"large\" name=\"chatbubbles\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title ><center><ion-avatar slot=\"start\">\n      <img class=\"imgLogoTopo\" src=\"../../assets/logos/couter_logo.png\">\n    </ion-avatar></center></ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let item of apostfeed\" class=\"single-post-home\">\n    \n    <!-- Melhorar o posicionamento na tela -->\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <!--<img src=\"{{'./assets/avatars/'+item.avatar}}\">-->\n        <div *ngIf=\"item.companyNavigation['companyLogo']!== '';else other_content\">\n          <img src=\"{{photo+item.companyNavigation['companyLogo']}}\">\n      </div>\n      <ng-template #other_content>\n        <img src=\"../../assets/avatars/avatar1.jpg\">\n      </ng-template>\n      </ion-avatar>\n      <ion-label>\n        <!--<h5>{{apostfeed.title}}</h5>-->\n        <h5>{{item.companyNavigation[\"companyName\"]}}</h5>\n        <!--<p class=\"subtitle\">{{item.subtitle}}</p>-->\n        <p class=\"subtitle\">{{item.companyNavigation[\"companyLogin\"]}}</p>\n      </ion-label>\n      <ion-icon name=\"paper-plane-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n\n    <img src=\"{{photo+item.media}}\" class=\"imgCenter\">\n    <!--<img src=\"../../../assets/images/\"{{item.image}}>-->\n    \n    <ion-row>\n      <ion-col>\n          <ion-icon name=\"heart\"></ion-icon>\n          <div>12 Likes</div>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name=\"cash-outline\" class=\"ionIcon\" (click)=\"ShowPopover(item.postText,item.productValue)\"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name=\"map-outline\" class=\"ionIcon\"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small (click)=\"openEstimateModal(item.company)\">\n          <ion-icon name=\"cart-outline\" class=\"ionIcon\"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <!--<ion-icon name=\"cash-outline\" class=\"ionIcon\" (click)=\"{{showUserData(item.title}})\"></ion-icon>-->\n\n    <ion-card-content>\n      <p>{{item.postText}}</p>\n      <!--<p>Sem texto ainda</p>-->\n      <ion-label slot=\"end\">\n       <!-- <p class=\"subtitle\">{{item.date}}</p> -->\n       <p class=\"subtitle\">01/01/2000</p> \n      </ion-label>\n    </ion-card-content>\n  \n  </ion-card>\n\n</ion-content>\n\n";
      /***/
    },

    /***/
    "./src/app/components/animated-like/animated-like.component.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/components/animated-like/animated-like.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsAnimatedLikeAnimatedLikeComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5pbWF0ZWQtbGlrZS9hbmltYXRlZC1saWtlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/components/animated-like/animated-like.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/components/animated-like/animated-like.component.ts ***!
      \*********************************************************************/

    /*! exports provided: AnimatedLikeComponent */

    /***/
    function srcAppComponentsAnimatedLikeAnimatedLikeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnimatedLikeComponent", function () {
        return AnimatedLikeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

      var AnimatedLikeComponent = /*#__PURE__*/function () {
        function AnimatedLikeComponent() {
          _classCallCheck(this, AnimatedLikeComponent);

          this.likeState = 'unliked';
          this.iconName = 'heart-empty';
        }

        _createClass(AnimatedLikeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleLikeState",
          value: function toggleLikeState() {
            if (this.likeState == 'unliked') {
              this.likeState = 'liked';
              this.iconName = 'heart';
            } else {
              this.likeState = 'unliked';
              this.iconName = 'heart-empty';
            }
          }
        }]);

        return AnimatedLikeComponent;
      }();

      AnimatedLikeComponent.ctorParameters = function () {
        return [];
      };

      AnimatedLikeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-animated-like',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./animated-like.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/animated-like/animated-like.component.html"))["default"],
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('heart', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('unliked', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          color: '#fff',
          opacity: '0.5',
          transform: 'scale(1)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('liked', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          color: '#e74c3c',
          opacity: '1',
          transform: 'scale(1.1)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('unliked <=> liked', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms ease-out'))])],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./animated-like.component.scss */
        "./src/app/components/animated-like/animated-like.component.scss"))["default"]]
      })], AnimatedLikeComponent);
      /***/
    },

    /***/
    "./src/app/estimatemodal/estimatemodal.component.scss":
    /*!************************************************************!*\
      !*** ./src/app/estimatemodal/estimatemodal.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppEstimatemodalEstimatemodalComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VzdGltYXRlbW9kYWwvZXN0aW1hdGVtb2RhbC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/estimatemodal/estimatemodal.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/estimatemodal/estimatemodal.component.ts ***!
      \**********************************************************/

    /*! exports provided: EstimatemodalComponent */

    /***/
    function srcAppEstimatemodalEstimatemodalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EstimatemodalComponent", function () {
        return EstimatemodalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/file-chooser/ngx */
      "./node_modules/@ionic-native/file-chooser/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/localstorage.service */
      "./src/app/services/localstorage.service.ts");
      /* harmony import */


      var _services_estimates_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/estimates.service */
      "./src/app/services/estimates.service.ts");

      var EstimatemodalComponent = /*#__PURE__*/function () {
        function EstimatemodalComponent(fileChooser, formBuilder, navparams, localstorage, estimateservice) {
          _classCallCheck(this, EstimatemodalComponent);

          this.fileChooser = fileChooser;
          this.formBuilder = formBuilder;
          this.navparams = navparams;
          this.localstorage = localstorage;
          this.estimateservice = estimateservice;
          this.objEstimate = {};
          this.objCompanyNav = {};
        }

        _createClass(EstimatemodalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.estimateAdd = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
              nameText: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
              cel: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
              state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
            });
            this.idCompEstimate = this.navparams.get('idCompanyEstimate');
            console.log('pos ==> ' + this.idCompEstimate);
            this.getData();
          }
        }, {
          key: "getData",
          value: function getData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.localstorage.getValue('compId');

                    case 2:
                      this.idUserCompany = _context.sent;
                      _context.next = 5;
                      return this.localstorage.getValue('token');

                    case 5:
                      this.userToken = _context.sent;

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "openFile",
          value: function openFile() {
            var _this = this;

            this.fileChooser.open().then(function (uri) {
              return _this.fileName = uri;
            })["catch"](function (e) {
              return console.log(e);
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            console.log('id da emp =>' + this.idUserCompany);
            this.objEstimate.company = this.idUserCompany;
            this.objEstimate.phoneNumber = this.estimateAdd.get('cel').value;
            this.objEstimate.state = this.estimateAdd.get('state').value;
            this.objEstimate.email = this.estimateAdd.get('email').value;
            this.objCompanyNav.idCompany = this.idCompEstimate;
            this.objEstimate.companyNavigation = this.objCompanyNav;
            console.log(this.objEstimate);
            this.estimateservice.addEstimated(this.objEstimate, this.userToken).subscribe(function (ret) {
              console.log(ret);
            });
            /*this.postFeed.productValue = this.postPhotoSel.get('postValue').value;
            let date = new Date().toUTCString();
            //this.postFeed.postDate = formatDate()  date;
                  var re = "data:image/jpeg;base64,";
            this.postFeed.media = this.croppedImagepath.replace(re,"");
                  this.postfeedservice.addPrePost(this.postFeed, this.token).subscribe((ret)=>{
              console.log(ret);
            });
            //console.log('Pelo menos clicou');*/
          }
        }]);

        return EstimatemodalComponent;
      }();

      EstimatemodalComponent.ctorParameters = function () {
        return [{
          type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_2__["FileChooser"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }, {
          type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"]
        }, {
          type: _services_estimates_service__WEBPACK_IMPORTED_MODULE_6__["EstimatesService"]
        }];
      };

      EstimatemodalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-estimatemodal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./estimatemodal.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/estimatemodal/estimatemodal.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./estimatemodal.component.scss */
        "./src/app/estimatemodal/estimatemodal.component.scss"))["default"]]
      })], EstimatemodalComponent);
      /***/
    },

    /***/
    "./src/app/feeds/feeds-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/feeds/feeds-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: FeedsPageRoutingModule */

    /***/
    function srcAppFeedsFeedsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedsPageRoutingModule", function () {
        return FeedsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _feeds_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./feeds.page */
      "./src/app/feeds/feeds.page.ts");

      var routes = [{
        path: '',
        component: _feeds_page__WEBPACK_IMPORTED_MODULE_3__["FeedsPage"]
      }];

      var FeedsPageRoutingModule = function FeedsPageRoutingModule() {
        _classCallCheck(this, FeedsPageRoutingModule);
      };

      FeedsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FeedsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/feeds/feeds.module.ts":
    /*!***************************************!*\
      !*** ./src/app/feeds/feeds.module.ts ***!
      \***************************************/

    /*! exports provided: FeedsPageModule */

    /***/
    function srcAppFeedsFeedsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedsPageModule", function () {
        return FeedsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _feeds_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./feeds-routing.module */
      "./src/app/feeds/feeds-routing.module.ts");
      /* harmony import */


      var _feeds_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./feeds.page */
      "./src/app/feeds/feeds.page.ts");
      /* harmony import */


      var _components_animated_like_animated_like_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../components/animated-like/animated-like.component */
      "./src/app/components/animated-like/animated-like.component.ts");
      /* harmony import */


      var _estimatemodal_estimatemodal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../estimatemodal/estimatemodal.component */
      "./src/app/estimatemodal/estimatemodal.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var FeedsPageModule = function FeedsPageModule() {
        _classCallCheck(this, FeedsPageModule);
      };

      FeedsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _feeds_routing_module__WEBPACK_IMPORTED_MODULE_4__["FeedsPageRoutingModule"]],
        declarations: [_feeds_page__WEBPACK_IMPORTED_MODULE_5__["FeedsPage"], _components_animated_like_animated_like_component__WEBPACK_IMPORTED_MODULE_6__["AnimatedLikeComponent"], _estimatemodal_estimatemodal_component__WEBPACK_IMPORTED_MODULE_7__["EstimatemodalComponent"]],
        entryComponents: [_estimatemodal_estimatemodal_component__WEBPACK_IMPORTED_MODULE_7__["EstimatemodalComponent"]]
      })], FeedsPageModule);
      /***/
    },

    /***/
    "./src/app/feeds/feeds.page.scss":
    /*!***************************************!*\
      !*** ./src/app/feeds/feeds.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppFeedsFeedsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".single-post-home {\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-bottom: 10px;\n  padding-top: 10px;\n  width: 100%;\n  box-shadow: 1px 1px #fdfdfd;\n}\n\n/*\n.imgCenter {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\nh5{\n    margin-top:0;\n    font-size: 15px;\n}\n.subtitle{\n    font-size: 12px;\n}\n.ionIcon{\n    font-size: 20px;\n}\n.imgLogoTopo{\n    padding-top: 17px;\n    border-radius: 50%;\n    height: 45px;\n    width: 45px;\n}\n.imgFeed{\n    width: auto;\n}\n\nion-card app-animated-like {\n\n    position: absolute;\n\n    top: 5px;\n\n    right: 5px;\n\n    } */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZHMvZmVlZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQUFBIiwiZmlsZSI6InNyYy9hcHAvZmVlZHMvZmVlZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpbmdsZS1wb3N0LWhvbWV7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHdpZHRoOjEwMCU7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCByZ2IoMjUzLCAyNTMsIDI1Myk7XG59XG4vKlxuLmltZ0NlbnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuaDV7XG4gICAgbWFyZ2luLXRvcDowO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5zdWJ0aXRsZXtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uaW9uSWNvbntcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4uaW1nTG9nb1RvcG97XG4gICAgcGFkZGluZy10b3A6IDE3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogNDVweDtcbiAgICB3aWR0aDogNDVweDtcbn1cbi5pbWdGZWVke1xuICAgIHdpZHRoOiBhdXRvO1xufVxuXG5pb24tY2FyZCBhcHAtYW5pbWF0ZWQtbGlrZSB7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgXG4gICAgdG9wOiA1cHg7XG4gICAgXG4gICAgcmlnaHQ6IDVweDtcbiAgICBcbiAgICB9ICovIl19 */";
      /***/
    },

    /***/
    "./src/app/feeds/feeds.page.ts":
    /*!*************************************!*\
      !*** ./src/app/feeds/feeds.page.ts ***!
      \*************************************/

    /*! exports provided: FeedsPage */

    /***/
    function srcAppFeedsFeedsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedsPage", function () {
        return FeedsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_postfeed_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/postfeed.service */
      "./src/app/services/postfeed.service.ts");
      /* harmony import */


      var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/localstorage.service */
      "./src/app/services/localstorage.service.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _popovercomponent_popovercomponent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../popovercomponent/popovercomponent.page */
      "./src/app/popovercomponent/popovercomponent.page.ts");
      /* harmony import */


      var _estimatemodal_estimatemodal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../estimatemodal/estimatemodal.component */
      "./src/app/estimatemodal/estimatemodal.component.ts");

      var FeedsPage = /*#__PURE__*/function () {
        function FeedsPage(atrCtrl, postfeedservice, localstorageservice, storage, popovercontroler, modalCtrl) {
          _classCallCheck(this, FeedsPage);

          this.atrCtrl = atrCtrl;
          this.postfeedservice = postfeedservice;
          this.localstorageservice = localstorageservice;
          this.storage = storage;
          this.popovercontroler = popovercontroler;
          this.modalCtrl = modalCtrl;
          this.postfeed = {};
          this.photo = 'data:image/jpeg;base64,';
        }

        _createClass(FeedsPage, [{
          key: "getLimitedPosts",
          value: function getLimitedPosts(initial, maximum, token) {
            var _this2 = this;

            console.log("token passado " + token);
            return this.postfeedservice.getPagPost(initial, maximum, token).subscribe(function (pfeed) {
              _this2.apostfeed = pfeed; //console.log('esse é o pfeed');      
            });
          }
        }, {
          key: "preparePhoto",
          value: function preparePhoto() {
            this.apostfeed.forEach(function (value) {
              console.log(value.postText);
            });
          }
        }, {
          key: "getValue",
          value: function getValue(key) {
            var _this3 = this;

            this.storage.get(key).then(function (val) {
              console.log('get blu' + key + ' ,' + val);
              _this3.token = val;
            })["catch"](function (err) {
              console.log('get error for ' + key + ' ' + err);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getValue("token");
            console.log("Email da empresa");
            console.log(this.localstorageservice.getValue("companyEmail"));
          }
        }, {
          key: "ShowPopover",
          value: function ShowPopover(prodDescript, prodValue) {
            this.popovercontroler.create({
              component: _popovercomponent_popovercomponent_page__WEBPACK_IMPORTED_MODULE_6__["PopovercomponentPage"],
              componentProps: {
                itemDescription: prodDescript,
                itemValue: prodValue
              },
              showBackdrop: false
            }).then(function (popoverElement) {
              popoverElement.present();
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this4 = this;

            console.log("afterinit");
            setTimeout(function () {
              _this4.getLimitedPosts(1, 20, _this4.token); //this.preparePhoto();
              // this.getAllCities();

            }, 1000);
          }
        }, {
          key: "openEstimateModal",
          value: function openEstimateModal(idPostCompany) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalCtrl.create({
                        component: _estimatemodal_estimatemodal_component__WEBPACK_IMPORTED_MODULE_7__["EstimatemodalComponent"],
                        componentProps: {
                          idCompanyEstimate: idPostCompany
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      _context2.next = 5;
                      return modal.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return FeedsPage;
      }();

      FeedsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _services_postfeed_service__WEBPACK_IMPORTED_MODULE_3__["PostfeedService"]
        }, {
          type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      FeedsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feeds',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./feeds.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/feeds/feeds.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./feeds.page.scss */
        "./src/app/feeds/feeds.page.scss"))["default"]]
      })], FeedsPage);
      /***/
    },

    /***/
    "./src/app/services/estimates.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/services/estimates.service.ts ***!
      \***********************************************/

    /*! exports provided: EstimatesService */

    /***/
    function srcAppServicesEstimatesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EstimatesService", function () {
        return EstimatesService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var EstimatesService = /*#__PURE__*/function () {
        function EstimatesService(httpClient) {
          _classCallCheck(this, EstimatesService);

          this.httpClient = httpClient;
          this.httpOpions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Authorization': 'Bearer ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].token
            })
          };
        }

        _createClass(EstimatesService, [{
          key: "addEstimated",
          value: function addEstimated(estimated, token) {
            //this.showConfirm('invocando a api');
            this.httpOpions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': 'Bearer ' + token
              })
            };
            return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiEstimates, estimated, this.httpOpions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          } // Manipulação de erros

        }, {
          key: "handleError",
          value: function handleError(error) {
            var errorMessage = '';

            if (error.error instanceof ErrorEvent) {
              // Erro ocorreu no lado do client
              errorMessage = error.error.message;
            } else {
              // Erro ocorreu no lado do servidor
              errorMessage = "C\xF3digo do erro: ".concat(error.status, ", ") + "menssagem: ".concat(error.message);
            } //this.showConfirm(errorMessage);


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
          }
        }]);

        return EstimatesService;
      }();

      EstimatesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      EstimatesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], EstimatesService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=feeds-feeds-module-es5.js.map