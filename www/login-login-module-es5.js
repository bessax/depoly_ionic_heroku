(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <img src='../../../assets/logos/couter_logo_t.png' alt=\"APP Logo\" class=\"center\"/>\n\n<ion-list>\n\n  <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-item>\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <ion-input type=\"text\" formControlName=\"username\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-icon name=\"key-outline\"></ion-icon>\n      <ion-input type=\"password\" formControlName=\"userpass\"></ion-input>\n    </ion-item>\n\n    <div>\n      <ion-button type=\"submit\" expand=\"block\">Log In</ion-button>\n    </div>\n  </form>\n\n</ion-list>\n<div>\n  <br>\n  <ion-router-link href=\"./signup\" class=\"linkunderline\">Forgot password</ion-router-link>\n  <br>\n  <ion-router-link href=\"./presignin\" class=\"linkunderline\">Register an account</ion-router-link>\n</div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/login/login-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/login/login.module.ts":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/login/login.page.scss":
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: url('background.png');\n}\n\nion-list {\n  --ion-background-color:#FAFAFA;\n}\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQUE7QUFDSjs7QUFFQTtFQUNJLDhCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5wbmcnKTtcbn1cblxuaW9uLWxpc3R7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojRkFGQUZBO1xufVxuLmNlbnRlcntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDUwJTsgICAgXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/login/login.page.ts":
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_auhentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/auhentication.service */
      "./src/app/services/auhentication.service.ts");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(formBuilder, authenticationservice, atrCtrl, router) {
          _classCallCheck(this, LoginPage);

          this.formBuilder = formBuilder;
          this.authenticationservice = authenticationservice;
          this.atrCtrl = atrCtrl;
          this.router = router;
          this.authentication = {};
        }

        _createClass(LoginPage, [{
          key: "submitForm",
          value: function submitForm() {
            this.pusername = this.ionicForm.get('username').value;
            this.puserpassword = this.ionicForm.get('userpass').value;

            try {
              var uData = {
                companyLogin: this.pusername,
                companyPassword: this.puserpassword
              };
              this.authenticationservice.userAuthentication(uData);
            } catch (e) {
              console.log('error' + e);
            }
          }
        }, {
          key: "showInvalidCredentials",
          value: function showInvalidCredentials(erro) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.atrCtrl.create({
                        header: 'ATENTION',
                        subHeader: 'Invalid Credentials',
                        message: erro,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      alert.present();

                    case 4:
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
            this.ionicForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
              userpass: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
            });
            this.authenticated = false;
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _services_auhentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    },

    /***/
    "./src/app/services/auhentication.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/services/auhentication.service.ts ***!
      \***************************************************/

    /*! exports provided: AuthenticationService */

    /***/
    function srcAppServicesAuhenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return AuthenticationService;
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


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./localstorage.service */
      "./src/app/services/localstorage.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/loader.service */
      "./src/app/services/loader.service.ts");
      /* harmony import */


      var _company_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./company.service */
      "./src/app/services/company.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(httpClient, nativeHTTP, localstorageservice, route, loaderservice, companyservice, alertController) {
          _classCallCheck(this, AuthenticationService);

          this.httpClient = httpClient;
          this.nativeHTTP = nativeHTTP;
          this.localstorageservice = localstorageservice;
          this.route = route;
          this.loaderservice = loaderservice;
          this.companyservice = companyservice;
          this.alertController = alertController; //headers

          this.httpOpions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
        }

        _createClass(AuthenticationService, [{
          key: "errorAlert",
          value: function errorAlert(err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'ERROR',
                        subHeader: 'Wrong username or password',
                        message: 'Error message: ' + err,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getCompanyData",
          value: function getCompanyData(id, token) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var companyReturn;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.companyservice.getCompanyById(id, token).toPromise();

                    case 2:
                      companyReturn = _context3.sent;
                      this.localstorageservice.setValue("companyName", companyReturn["companyName"]);
                      this.localstorageservice.setValue("companyEmail", companyReturn["companyEmail"]);
                      this.localstorageservice.setValue("companyPhonenumber", companyReturn["companyPhonenumber"]);
                      this.localstorageservice.setValue("companyCellPhone", companyReturn["companyCellPhone"]);
                      this.localstorageservice.setValue("companyStateCode", companyReturn["stateCode"]);
                      console.log(companyReturn["stateCode"]);

                      if (companyReturn["stateCode"]) {
                        this.route.navigate(['/tabs/feeds']);
                      } else {
                        this.route.navigate(['completeregister']);
                      }

                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } //Realiza autenticação do usuário

        }, {
          key: "userAuthentication",
          value: function userAuthentication(userData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this = this;

              var error, data, user;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      error = false;
                      this.loaderservice.showLoader();
                      _context4.next = 4;
                      return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiAuthentication, userData).toPromise().then(function (res) {
                        error = false;
                        data = res;
                      })["catch"](function (err) {
                        error = true;

                        _this.loaderservice.hideLoader();

                        _this.handleError(err);

                        _this.errorAlert("Please, verify your username and password and try again");
                      });

                    case 4:
                      if (!error) {
                        if (data["token"] !== "") {
                          this.loaderservice.hideLoader();
                          user = data["user"];
                          this.localstorageservice.setValue("token", data["token"]);
                          this.localstorageservice.setValue("compId", user["companyId"]);
                          this.getCompanyData(user["companyId"], data["token"]); //console.log('statecode '+this.localstorageservice.getValue("companyStateCode"));
                        }
                      }

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
          /*getApiToken(username:string, userpassword:string){
            let res = this.userAuthentication(username, userpassword);
                environment.token = res["token"];
            environment.empName = res["companyName"];
            environment.loginName = res["companyLogin"];
                console.log('No authentication');
            console.log(environment.token);
                if (environment.token != ''){
              this.localstorageservice.setValue('token',res["token"]);
              return true
            }else{
              return false;
            }
          }*/
          // Manipulação de erros

        }, {
          key: "handleError",
          value: function handleError(error) {
            _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].token = '';
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

        return AuthenticationService;
      }();

      AuthenticationService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]
        }, {
          type: _localstorage_service__WEBPACK_IMPORTED_MODULE_6__["LocalstorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _services_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"]
        }, {
          type: _company_service__WEBPACK_IMPORTED_MODULE_9__["CompanyService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"]
        }];
      };

      AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthenticationService);
      /***/
    },

    /***/
    "./src/app/services/loader.service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/loader.service.ts ***!
      \********************************************/

    /*! exports provided: LoaderService */

    /***/
    function srcAppServicesLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
        return LoaderService;
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

      var LoaderService = /*#__PURE__*/function () {
        function LoaderService(loadingController) {
          _classCallCheck(this, LoaderService);

          this.loadingController = loadingController;
        }

        _createClass(LoaderService, [{
          key: "showHideAutoLoader",
          value: function showHideAutoLoader() {
            this.loadingController.create({
              message: 'This Loader Will Auto Hide in 2 Seconds',
              duration: 2000
            }).then(function (res) {
              res.present();
              res.onDidDismiss().then(function (dis) {
                console.log('Loading dismissed! after 2 Seconds', dis);
              });
            });
          } // Show the loader for infinite time

        }, {
          key: "showLoader",
          value: function showLoader() {
            this.loadingController.create({
              message: 'Please wait...'
            }).then(function (res) {
              res.present();
            });
          } // Hide the loader if already created otherwise return error

        }, {
          key: "hideLoader",
          value: function hideLoader() {
            this.loadingController.dismiss().then(function (res) {
              console.log('Loading dismissed!', res);
            })["catch"](function (error) {
              console.log('error', error);
            });
          }
        }]);

        return LoaderService;
      }();

      LoaderService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      LoaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LoaderService);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var data;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.storage.get(key).then(function (val) {
                        console.log('get ' + key + ' ,' + val);
                        data = val;
                      })["catch"](function (err) {
                        console.log('get error for ' + key + ' ' + err);
                      });

                    case 2:
                      return _context5.abrupt("return", data);

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "setValue",
          value: function setValue(key, value) {
            var _this2 = this;

            this.storage.set(key, value).then(function (res) {
              console.log('set ' + key + ' ' + res);

              _this2.getValue(key);
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
//# sourceMappingURL=login-login-module-es5.js.map