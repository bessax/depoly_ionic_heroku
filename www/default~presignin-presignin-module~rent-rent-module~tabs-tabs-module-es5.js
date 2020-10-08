(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~presignin-presignin-module~rent-rent-module~tabs-tabs-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/picture-modal/picture-modal.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/picture-modal/picture-modal.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPictureModalPictureModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n      <ion-avatar  slot=\"start\">\n        <img class=\"imgLogoTopo\" src=\"../../assets/logos/couter_logo.png\">\n      </ion-avatar>\n    <ion-title >\n      IMAGE PICKER\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-item-divider>\n    <!--<div class=\"divImg\">-->\n      <img (click)=\"selectImage()\" src=\"{{ croppedImagepath }}\" alt=\"Selected Photo\"/>\n    <!--</div>-->\n    <!--<ion-button (click)=\"callExternalJS()\">Photo</ion-button>-->\n  </ion-item-divider>\n  <form [formGroup]=\"postPhotoSel\" (ngSubmit)=\"submitForm()\" novalidate>  \n    <ion-item>\n      <ion-label position=\"stacked\">Text <ion-text color=\"danger\">*</ion-text></ion-label>\n      <ion-input required type=\"text\" formControlName=\"postText\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Value <ion-text color=\"danger\">*</ion-text></ion-label>\n      <ion-input required type=\"number\" formControlName=\"postValue\"></ion-input>\n    </ion-item>\n    <div>\n      <ion-button type=\"submit\">Confirm</ion-button>\n      <ion-button color=\"danger\">Cancel</ion-button>\n    </div>\n  </form>\n</ion-content>\n <ion-footer>\n  <ion-toolbar>\n    <ion-button expand=\"full\" (click)=\"selectImage()\">\n      Get Image\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n \n\n";
      /***/
    },

    /***/
    "./src/app/picture-modal/picture-modal.component.scss":
    /*!************************************************************!*\
      !*** ./src/app/picture-modal/picture-modal.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPictureModalPictureModalComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-select {\n  font-size: 12px;\n  font-weight: 500;\n}\n\nion-label {\n  font-size: 12px;\n  font-weight: 500;\n}\n\nion-avatar {\n  max-width: 25px;\n  max-height: 25px;\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-bottom: 10px;\n}\n\nh5 {\n  margin-top: 0;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.subtitle {\n  font-size: 12px;\n}\n\n.ionIcon {\n  font-size: 20px;\n}\n\n.header-class {\n  padding-top: 4px;\n}\n\nion-slides {\n  height: 100%;\n}\n\nion-slide {\n  display: block;\n}\n\nion-label, .select-text {\n  margin-left: 10px;\n}\n\n.invalid {\n  border: 1px solid #ea6153;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGljdHVyZS1tb2RhbC9waWN0dXJlLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtBQUdKOztBQUFBO0VBQ0ksZ0JBQUE7QUFHSjs7QUFBQTtFQUNBLFlBQUE7QUFHQTs7QUFBQTtFQUNFLGNBQUE7QUFHRjs7QUFBQTtFQUNFLGlCQUFBO0FBR0Y7O0FBQUE7RUFDRSx5QkFBQTtBQUdGIiwiZmlsZSI6InNyYy9hcHAvcGljdHVyZS1tb2RhbC9waWN0dXJlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIFxuICBpb24tc2VsZWN0e1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIFxuICBpb24tbGFiZWx7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICBpb24tYXZhdGFyIHtcbiAgICBtYXgtd2lkdGg6IDI1cHg7XG4gICAgbWF4LWhlaWdodDogMjVweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgaDV7XG4gICAgbWFyZ2luLXRvcDowO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zdWJ0aXRsZXtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uaW9uSWNvbntcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5oZWFkZXItY2xhc3N7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbn1cblxuaW9uLXNsaWRlcyB7XG5oZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pb24tbGFiZWwsIC5zZWxlY3QtdGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYTYxNTM7XG59XG5cbiAgXG4gICJdfQ== */";
      /***/
    },

    /***/
    "./src/app/picture-modal/picture-modal.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/picture-modal/picture-modal.component.ts ***!
      \**********************************************************/

    /*! exports provided: PictureModalComponent */

    /***/
    function srcAppPictureModalPictureModalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PictureModalComponent", function () {
        return PictureModalComponent;
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


      var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/crop/ngx */
      "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/localstorage.service */
      "./src/app/services/localstorage.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_postfeed_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/postfeed.service */
      "./src/app/services/postfeed.service.ts");

      var PictureModalComponent = /*#__PURE__*/function () {
        function PictureModalComponent(crop, camera, actionSheetController, file, localstorageservice, formBuilder, postfeedservice) {
          _classCallCheck(this, PictureModalComponent);

          this.crop = crop;
          this.camera = camera;
          this.actionSheetController = actionSheetController;
          this.file = file;
          this.localstorageservice = localstorageservice;
          this.formBuilder = formBuilder;
          this.postfeedservice = postfeedservice;
          this.myImage = null;
          this.croppedImage = null;
          this.croppedImagepath = "";
          this.isLoading = false;
          this.postFeed = {};
        }

        _createClass(PictureModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.geStorateData();
            this.postPhotoSel = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
              postText: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](),
              postValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]()
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            this.postFeed.company = this.idCompany;
            this.postFeed.postText = this.postPhotoSel.get('postText').value;
            this.postFeed.productValue = this.postPhotoSel.get('postValue').value;
            var date = new Date().toUTCString(); //this.postFeed.postDate = formatDate()  date;

            var re = "data:image/jpeg;base64,";
            this.postFeed.media = this.croppedImagepath.replace(re, "");
            this.postfeedservice.addPrePost(this.postFeed, this.token).subscribe(function (ret) {
              console.log(ret);
            }); //console.log('Pelo menos clicou');
          }
        }, {
          key: "cropImage",
          value: function cropImage(fileUrl) {
            var _this = this;

            this.crop.crop(fileUrl, {
              quality: 100
            }).then(function (newPath) {
              _this.showCroppedImage(newPath.split('?')[0]);
            }, function (error) {
              alert('Error cropping image' + error);
            });
          }
        }, {
          key: "showCroppedImage",
          value: function showCroppedImage(ImagePath) {
            var _this2 = this;

            this.isLoading = true;
            var copyPath = ImagePath;
            var splitPath = copyPath.split('/');
            var imageName = splitPath[splitPath.length - 1];
            var filePath = ImagePath.split(imageName)[0];
            this.file.readAsDataURL(filePath, imageName).then(function (base64) {
              _this2.croppedImagepath = base64;
              _this2.isLoading = false;
            }, function (error) {
              alert('Error in showing image' + error);
              _this2.isLoading = false;
            });
          }
        }, {
          key: "selectImage",
          value: function selectImage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.actionSheetController.create({
                        header: "Select Image source",
                        buttons: [{
                          text: 'Load from Library',
                          handler: function handler() {
                            _this3.pickImage(_this3.camera.PictureSourceType.PHOTOLIBRARY);
                          }
                        }, {
                          text: 'Use Camera',
                          handler: function handler() {
                            _this3.pickImage(_this3.camera.PictureSourceType.CAMERA);
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      actionSheet = _context.sent;
                      _context.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "pickImage",
          value: function pickImage(sourceType) {
            var _this4 = this;

            var options = {
              quality: 100,
              sourceType: sourceType,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (imageData) {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64 (DATA_URL):
              // let base64Image = 'data:image/jpeg;base64,' + imageData;
              _this4.cropImage(imageData);
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "geStorateData",
          value: function geStorateData() {
            var _this5 = this;

            var lDataToken = this.localstorageservice.getValue("token").then(function (value) {
              _this5.token = value;
            })["catch"](function (err) {
              console.log("Error to get token");
            });
            var lDataCompanyId = this.localstorageservice.getValue("compId").then(function (value) {
              _this5.idCompany = value;
            })["catch"](function (err) {
              console.log("Error to get Company Id");
            });
          }
        }]);

        return PictureModalComponent;
      }();

      PictureModalComponent.ctorParameters = function () {
        return [{
          type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_2__["Crop"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"]
        }, {
          type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["LocalstorageService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: _services_postfeed_service__WEBPACK_IMPORTED_MODULE_8__["PostfeedService"]
        }];
      };

      PictureModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-picture-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./picture-modal.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/picture-modal/picture-modal.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./picture-modal.component.scss */
        "./src/app/picture-modal/picture-modal.component.scss"))["default"]]
      })], PictureModalComponent);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var data;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.storage.get(key).then(function (val) {
                        console.log('get ' + key + ' ,' + val);
                        data = val;
                      })["catch"](function (err) {
                        console.log('get error for ' + key + ' ' + err);
                      });

                    case 2:
                      return _context2.abrupt("return", data);

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "setValue",
          value: function setValue(key, value) {
            var _this6 = this;

            this.storage.set(key, value).then(function (res) {
              console.log('set ' + key + ' ' + res);

              _this6.getValue(key);
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
    },

    /***/
    "./src/app/services/postfeed.service.ts":
    /*!**********************************************!*\
      !*** ./src/app/services/postfeed.service.ts ***!
      \**********************************************/

    /*! exports provided: PostfeedService */

    /***/
    function srcAppServicesPostfeedServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostfeedService", function () {
        return PostfeedService;
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


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _localstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./localstorage.service */
      "./src/app/services/localstorage.service.ts");
      /* harmony import */


      var _loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./loader.service */
      "./src/app/services/loader.service.ts");

      var PostfeedService = /*#__PURE__*/function () {
        function PostfeedService(httpClient, nativeHTTP, localstorageservice, loaderservice) {
          _classCallCheck(this, PostfeedService);

          this.httpClient = httpClient;
          this.nativeHTTP = nativeHTTP;
          this.localstorageservice = localstorageservice;
          this.loaderservice = loaderservice;
          this.httpOpions = {};
        }

        _createClass(PostfeedService, [{
          key: "getPagPost",
          value: function getPagPost(initial, maximum, token) {
            console.log(token);
            this.httpOpions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': 'Bearer ' + token
              })
            };
            return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiPaginacaoAll + 'pagina=' + initial + '&qtdRegistry=' + maximum, this.httpOpions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "addPrePost",
          value: function addPrePost(prepost, token) {
            //this.showConfirm('invocando a api')
            this.httpOpions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': 'Bearer ' + token
              })
            };
            console.log(prepost);
            return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiPagPost2, prepost, this.httpOpions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
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

        return PostfeedService;
      }();

      PostfeedService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"]
        }, {
          type: _localstorage_service__WEBPACK_IMPORTED_MODULE_7__["LocalstorageService"]
        }, {
          type: _loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"]
        }];
      };

      PostfeedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PostfeedService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~presignin-presignin-module~rent-rent-module~tabs-tabs-module-es5.js.map