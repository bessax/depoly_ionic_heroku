(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["job-reg-job-reg-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/job-reg/job-reg.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/job-reg/job-reg.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppJobRegJobRegPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons size=\"large\" slot=\"start\" (click)=\"backToCallingPage()\">\n      <ion-icon name=\"arrow-back\"></ion-icon> \n    </ion-buttons>\n    <ion-title >\n      Job Register\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n \n <ion-content>\n   <form [formGroup]=\"jobForm\" (ngSubmit)=\"submitForm()\" novalidate>  \n     <ion-item>\n       <ion-label position=\"stacked\">Job Title<ion-text color=\"danger\">*</ion-text></ion-label>\n       <ion-input required type=\"text\" formControlName=\"jobtitle\"></ion-input>\n     </ion-item>\n     <ion-item>\n      <ion-label position=\"stacked\">Job Description<ion-text color=\"danger\">*</ion-text></ion-label>\n      <ion-input required  rows=\"6\" formControlName=\"jobDescription\"></ion-input>\n    </ion-item>\n     <div>\n       <ion-button type=\"submit\">Confirm</ion-button>\n       <ion-button color=\"danger\">Cancel</ion-button>\n     </div>\n   </form>\n </ion-content>\n ";
      /***/
    },

    /***/
    "./src/app/job-reg/job-reg-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/job-reg/job-reg-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: JobRegPageRoutingModule */

    /***/
    function srcAppJobRegJobRegRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobRegPageRoutingModule", function () {
        return JobRegPageRoutingModule;
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


      var _job_reg_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./job-reg.page */
      "./src/app/job-reg/job-reg.page.ts");

      var routes = [{
        path: '',
        component: _job_reg_page__WEBPACK_IMPORTED_MODULE_3__["JobRegPage"]
      }];

      var JobRegPageRoutingModule = function JobRegPageRoutingModule() {
        _classCallCheck(this, JobRegPageRoutingModule);
      };

      JobRegPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], JobRegPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/job-reg/job-reg.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/job-reg/job-reg.module.ts ***!
      \*******************************************/

    /*! exports provided: JobRegPageModule */

    /***/
    function srcAppJobRegJobRegModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobRegPageModule", function () {
        return JobRegPageModule;
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


      var _job_reg_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./job-reg-routing.module */
      "./src/app/job-reg/job-reg-routing.module.ts");
      /* harmony import */


      var _job_reg_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./job-reg.page */
      "./src/app/job-reg/job-reg.page.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var JobRegPageModule = function JobRegPageModule() {
        _classCallCheck(this, JobRegPageModule);
      };

      JobRegPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _job_reg_routing_module__WEBPACK_IMPORTED_MODULE_4__["JobRegPageRoutingModule"]],
        declarations: [_job_reg_page__WEBPACK_IMPORTED_MODULE_5__["JobRegPage"]]
      })], JobRegPageModule);
      /***/
    },

    /***/
    "./src/app/job-reg/job-reg.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/job-reg/job-reg.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppJobRegJobRegPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 150px;\n  border-radius: 50%;\n}\n\nion-select {\n  font-size: 12px;\n  font-weight: 500;\n}\n\nion-label {\n  font-size: 12px;\n  font-weight: 500;\n}\n\nion-avatar {\n  max-width: 25px;\n  max-height: 25px;\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-bottom: 10px;\n}\n\nh5 {\n  margin-top: 0;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.subtitle {\n  font-size: 12px;\n}\n\n.ionIcon {\n  font-size: 20px;\n}\n\n.header-class {\n  padding-top: 4px;\n}\n\nion-slides {\n  height: 100%;\n}\n\nion-slide {\n  display: block;\n}\n\nion-label, .select-text {\n  margin-left: 10px;\n}\n\n.invalid {\n  border: 1px solid #ea6153;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9iLXJlZy9qb2ItcmVnLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0FBSUo7O0FBREE7RUFDSSxnQkFBQTtBQUlKOztBQURBO0VBQ0EsWUFBQTtBQUlBOztBQURBO0VBQ0UsY0FBQTtBQUlGOztBQURBO0VBQ0UsaUJBQUE7QUFJRjs7QUFEQTtFQUNFLHlCQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC9qb2ItcmVnL2pvYi1yZWcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIFxuICBpb24tc2VsZWN0e1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIFxuICBpb24tbGFiZWx7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICBpb24tYXZhdGFyIHtcbiAgICBtYXgtd2lkdGg6IDI1cHg7XG4gICAgbWF4LWhlaWdodDogMjVweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgaDV7XG4gICAgbWFyZ2luLXRvcDowO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zdWJ0aXRsZXtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uaW9uSWNvbntcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5oZWFkZXItY2xhc3N7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbn1cblxuaW9uLXNsaWRlcyB7XG5oZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pb24tbGFiZWwsIC5zZWxlY3QtdGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYTYxNTM7XG59XG5cbiAgXG4gICJdfQ== */";
      /***/
    },

    /***/
    "./src/app/job-reg/job-reg.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/job-reg/job-reg.page.ts ***!
      \*****************************************/

    /*! exports provided: JobRegPage */

    /***/
    function srcAppJobRegJobRegPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobRegPage", function () {
        return JobRegPage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_jobs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/jobs.service */
      "./src/app/services/jobs.service.ts");
      /* harmony import */


      var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/localstorage.service */
      "./src/app/services/localstorage.service.ts");

      var JobRegPage = /*#__PURE__*/function () {
        function JobRegPage(jobservice, localstorage) {
          _classCallCheck(this, JobRegPage);

          this.jobservice = jobservice;
          this.localstorage = localstorage;
          this.objJob = {};
        }

        _createClass(JobRegPage, [{
          key: "jobPOST",
          value: function jobPOST(oJob, token) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.jobservice.addJob(oJob, token).subscribe(function (ret) {
                        console.log(ret);
                      });

                    case 2:
                      ;

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.jobForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              jobtitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
              jobDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
            });
            this.getData();
          }
        }, {
          key: "getData",
          value: function getData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.localstorage.getValue('compId');

                    case 2:
                      this.idUserCompany = _context2.sent;
                      _context2.next = 5;
                      return this.localstorage.getValue('token');

                    case 5:
                      this.userToken = _context2.sent;

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            this.objJob.company = this.idUserCompany;
            this.objJob.jobTitle = this.jobForm.get('jobtitle').value;
            this.objJob.jobDescription = this.jobForm.get('jobDescription').value; //this.postFeed.postDate = formatDate()  date;

            console.log('olha o token' + this.userToken);
            console.log('Olha a empresa' + this.idUserCompany);
            this.jobPOST(this.objJob, this.userToken); //console.log('Pelo menos clicou');
          }
        }]);

        return JobRegPage;
      }();

      JobRegPage.ctorParameters = function () {
        return [{
          type: _services_jobs_service__WEBPACK_IMPORTED_MODULE_3__["JobsService"]
        }, {
          type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"]
        }];
      };

      JobRegPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-job-reg',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./job-reg.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/job-reg/job-reg.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./job-reg.page.scss */
        "./src/app/job-reg/job-reg.page.scss"))["default"]]
      })], JobRegPage);
      /***/
    },

    /***/
    "./src/app/services/jobs.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/jobs.service.ts ***!
      \******************************************/

    /*! exports provided: JobsService */

    /***/
    function srcAppServicesJobsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobsService", function () {
        return JobsService;
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

      var JobsService = /*#__PURE__*/function () {
        function JobsService(httpClient) {
          _classCallCheck(this, JobsService);

          this.httpClient = httpClient;
          this.httpOpions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Authorization': 'Bearer ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].token
            })
          };
        }

        _createClass(JobsService, [{
          key: "addJob",
          value: function addJob(job, token) {
            this.httpOpions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': 'Bearer ' + token
              })
            }; //this.showConfirm('invocando a api');

            console.log(JSON.stringify(job));
            return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiJobs, job, this.httpOpions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
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

        return JobsService;
      }();

      JobsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      JobsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], JobsService);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var data;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.storage.get(key).then(function (val) {
                        console.log('get ' + key + ' ,' + val);
                        data = val;
                      })["catch"](function (err) {
                        console.log('get error for ' + key + ' ' + err);
                      });

                    case 2:
                      return _context3.abrupt("return", data);

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "setValue",
          value: function setValue(key, value) {
            var _this = this;

            this.storage.set(key, value).then(function (res) {
              console.log('set ' + key + ' ' + res);

              _this.getValue(key);
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
//# sourceMappingURL=job-reg-job-reg-module-es5.js.map