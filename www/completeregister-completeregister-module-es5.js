(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["completeregister-completeregister-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/completeregister/completeregister.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/completeregister/completeregister.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCompleteregisterCompleteregisterPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n      <ion-avatar  slot=\"start\">\n        <img class=\"imgLogoTopo\" src=\"../../assets/logos/couter_logo.png\">\n      </ion-avatar>\n    <ion-title >\n      User Register\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<div id=\"text\" class=\"center\">\n  <ion-text color=\"primary\">\n    <h1 style=\"text-align: center;\">Complete your profile.</h1>\n  </ion-text>\n  <ion-text color=\"secundary\">\n      <h3>First, tell us what country you live in.</h3>\n  </ion-text>\n</div>\n<div id=\"country\" class=\"center\">\n  <ion-item>\n    <ion-label>Select</ion-label>\n    <ion-select (ionChange)=\"getStates($event);\">\n      <ion-select-option name=\"selCoutry\" *ngFor=\"let c of acontrie\" value=\"{{c.idCountry}}\">{{c.countryName}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n</div>\n<div id=\"next_button\" class=\"center\">\n  <ion-button expand=\"full\" color=\"primary\">Next >>> </ion-button>\n  <ion-button expand=\"full\" color=\"danger\">Continue without complete</ion-button>\n</div>\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/completeregister/completeregister-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/completeregister/completeregister-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: CompleteregisterPageRoutingModule */

    /***/
    function srcAppCompleteregisterCompleteregisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompleteregisterPageRoutingModule", function () {
        return CompleteregisterPageRoutingModule;
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


      var _completeregister_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./completeregister.page */
      "./src/app/completeregister/completeregister.page.ts");

      var routes = [{
        path: '',
        component: _completeregister_page__WEBPACK_IMPORTED_MODULE_3__["CompleteregisterPage"]
      }];

      var CompleteregisterPageRoutingModule = function CompleteregisterPageRoutingModule() {
        _classCallCheck(this, CompleteregisterPageRoutingModule);
      };

      CompleteregisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CompleteregisterPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/completeregister/completeregister.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/completeregister/completeregister.module.ts ***!
      \*************************************************************/

    /*! exports provided: CompleteregisterPageModule */

    /***/
    function srcAppCompleteregisterCompleteregisterModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompleteregisterPageModule", function () {
        return CompleteregisterPageModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _completeregister_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./completeregister-routing.module */
      "./src/app/completeregister/completeregister-routing.module.ts");
      /* harmony import */


      var _completeregister_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./completeregister.page */
      "./src/app/completeregister/completeregister.page.ts");

      var CompleteregisterPageModule = function CompleteregisterPageModule() {
        _classCallCheck(this, CompleteregisterPageModule);
      };

      CompleteregisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _completeregister_routing_module__WEBPACK_IMPORTED_MODULE_5__["CompleteregisterPageRoutingModule"]],
        declarations: [_completeregister_page__WEBPACK_IMPORTED_MODULE_6__["CompleteregisterPage"]]
      })], CompleteregisterPageModule);
      /***/
    },

    /***/
    "./src/app/completeregister/completeregister.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/completeregister/completeregister.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCompleteregisterCompleteregisterPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".center {\n  margin: auto;\n  width: 95%;\n  padding: 10px;\n}\n\nimg {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 150px;\n  border-radius: 50%;\n}\n\nion-select {\n  font-size: 12px;\n  font-weight: 500;\n}\n\nion-label {\n  font-size: 12px;\n  font-weight: 500;\n}\n\nion-avatar {\n  max-width: 25px;\n  max-height: 25px;\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-bottom: 10px;\n}\n\nh5 {\n  margin-top: 0;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.subtitle {\n  font-size: 12px;\n}\n\n.ionIcon {\n  font-size: 20px;\n}\n\n.header-class {\n  padding-top: 4px;\n}\n\nion-slides {\n  height: 100%;\n}\n\nion-slide {\n  display: block;\n}\n\nion-label, .select-text {\n  margin-left: 10px;\n}\n\n.invalid {\n  border: 1px solid #ea6153;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGxldGVyZWdpc3Rlci9jb21wbGV0ZXJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7QUFJSjs7QUFEQTtFQUNJLGdCQUFBO0FBSUo7O0FBREE7RUFDQSxZQUFBO0FBSUE7O0FBREE7RUFDRSxjQUFBO0FBSUY7O0FBREE7RUFDRSxpQkFBQTtBQUlGOztBQURBO0VBQ0UseUJBQUE7QUFJRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBsZXRlcmVnaXN0ZXIvY29tcGxldGVyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDk1JTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbmltZ3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICBcbiAgaW9uLXNlbGVjdHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBcbiAgaW9uLWxhYmVse1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgaW9uLWF2YXRhciB7XG4gICAgbWF4LXdpZHRoOiAyNXB4O1xuICAgIG1heC1oZWlnaHQ6IDI1cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIGg1e1xuICAgIG1hcmdpbi10b3A6MDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc3VidGl0bGV7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmlvbkljb257XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaGVhZGVyLWNsYXNze1xuICAgIHBhZGRpbmctdG9wOiA0cHg7XG59XG5cbmlvbi1zbGlkZXMge1xuaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLWxhYmVsLCAuc2VsZWN0LXRleHQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmludmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWE2MTUzO1xufVxuXG4gIFxuICAiXX0= */";
      /***/
    },

    /***/
    "./src/app/completeregister/completeregister.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/completeregister/completeregister.page.ts ***!
      \***********************************************************/

    /*! exports provided: CompleteregisterPage */

    /***/
    function srcAppCompleteregisterCompleteregisterPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompleteregisterPage", function () {
        return CompleteregisterPage;
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


      var _services_country_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/country.service */
      "./src/app/services/country.service.ts");
      /* harmony import */


      var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/localstorage.service */
      "./src/app/services/localstorage.service.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var CompleteregisterPage = /*#__PURE__*/function () {
        function CompleteregisterPage(countryservice, localstorageservice, storage) {
          _classCallCheck(this, CompleteregisterPage);

          this.countryservice = countryservice;
          this.localstorageservice = localstorageservice;
          this.storage = storage;
          this.contrie = {};
        }

        _createClass(CompleteregisterPage, [{
          key: "getValue",
          value: function getValue(key) {
            var _this = this;

            this.storage.get(key).then(function (val) {
              console.log('get blu' + key + ' ,' + val);
              _this.token = val;
            })["catch"](function (err) {
              console.log('get error for ' + key + ' ' + err);
            });
          }
        }, {
          key: "getStates",
          value: function getStates(country) {
            //console.log('Executou o change');
            console.log(country.detail.value); //this.getAllStates(country.detail.value);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getValue("token");
          }
        }, {
          key: "getAllCountries",
          value: function getAllCountries() {
            var _this2 = this;

            this.countryservice.getCountry(this.token).subscribe(function (countries) {
              _this2.acontrie = countries;
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this3 = this;

            setTimeout(function () {
              _this3.getAllCountries(); // this.getAllStates(); 
              // this.getAllCities();

            }, 1000);
          }
        }]);

        return CompleteregisterPage;
      }();

      CompleteregisterPage.ctorParameters = function () {
        return [{
          type: _services_country_service__WEBPACK_IMPORTED_MODULE_2__["CountryService"]
        }, {
          type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
        }];
      };

      CompleteregisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-completeregister',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./completeregister.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/completeregister/completeregister.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./completeregister.page.scss */
        "./src/app/completeregister/completeregister.page.scss"))["default"]]
      })], CompleteregisterPage);
      /***/
    },

    /***/
    "./src/app/services/country.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/country.service.ts ***!
      \*********************************************/

    /*! exports provided: CountryService */

    /***/
    function srcAppServicesCountryServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountryService", function () {
        return CountryService;
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

      var CountryService = /*#__PURE__*/function () {
        function CountryService(httpClient) {
          _classCallCheck(this, CountryService);

          this.httpClient = httpClient;
          this.httpOpions = {};
        }

        _createClass(CountryService, [{
          key: "getCountry",
          value: function getCountry(token) {
            console.log(token);
            this.httpOpions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': 'Bearer ' + token
              })
            };
            return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiCountries).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
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
            }

            console.log(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
          }
        }]);

        return CountryService;
      }();

      CountryService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      CountryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CountryService);
      /***/
    },

    /***/
    "./src/app/services/localstorage.service.ts":
    /*!**************************************************!*\
      !*** ./src/app/services/localstorage.service.ts ***!
      \**************************************************/

    /*! exports provided: LocalstorageService */

    /***/
    function srcAppServicesLocalstorageServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalstorageService", function () {
        return LocalstorageService;
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var LocalstorageService = /*#__PURE__*/function () {
        function LocalstorageService(storage) {
          _classCallCheck(this, LocalstorageService);

          this.storage = storage;
        }

        _createClass(LocalstorageService, [{
          key: "getValue",
          value: function getValue(key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var data;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.storage.get(key).then(function (val) {
                        console.log('get ' + key + ' ,' + val);
                        data = val;
                      })["catch"](function (err) {
                        console.log('get error for ' + key + ' ' + err);
                      });

                    case 2:
                      return _context.abrupt("return", data);

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "setValue",
          value: function setValue(key, value) {
            var _this4 = this;

            this.storage.set(key, value).then(function (res) {
              console.log('set ' + key + ' ' + res);

              _this4.getValue(key);
            })["catch"](function (err) {
              console.log('set error for ' + key + ' ' + err);
            });
          }
        }]);

        return LocalstorageService;
      }();

      LocalstorageService.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }];
      };

      LocalstorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LocalstorageService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=completeregister-completeregister-module-es5.js.map