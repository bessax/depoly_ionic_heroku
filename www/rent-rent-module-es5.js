(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rent-rent-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/rent/rent.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rent/rent.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRentRentPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons size=\"large\" slot=\"start\" (click)=\"backToCallingPage()\">\n      <ion-icon name=\"arrow-back\"></ion-icon> \n    </ion-buttons>\n    <ion-title >\n      Rent Register\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n \n <ion-content>\n   <ion-item-divider>\n     <!--<div class=\"divImg\">-->\n       <img (click)=\"selectImage()\" src=\"{{ photo }}\" alt=\"OMImports\"/>\n     <!--</div>-->\n     <!--<ion-button (click)=\"callExternalJS()\">Photo</ion-button>-->\n   </ion-item-divider>\n   <form [formGroup]=\"rentForm\" (ngSubmit)=\"submitForm()\" novalidate>  \n     <ion-item>\n       <ion-label position=\"stacked\">Rent Title <ion-text color=\"danger\">*</ion-text></ion-label>\n       <ion-input required type=\"text\" formControlName=\"rentTitle\"></ion-input>\n     </ion-item>\n     <ion-item>\n      <ion-label position=\"stacked\">Rent Description <ion-text color=\"danger\">*</ion-text></ion-label>\n      <ion-input required type=\"text\" formControlName=\"rentDescription\"></ion-input>\n    </ion-item> \n    <ion-item>\n      <ion-label position=\"stacked\">Rent Value <ion-text color=\"danger\">*</ion-text></ion-label>\n      <ion-input required type=\"number\" formControlName=\"rentValue\"></ion-input>\n    </ion-item> \n     <div>\n       <ion-button type=\"submit\">Confirm</ion-button>\n       <ion-button color=\"danger\">Cancel</ion-button>\n     </div>\n   </form>\n </ion-content>\n ";
      /***/
    },

    /***/
    "./src/app/rent/rent-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/rent/rent-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: RentPageRoutingModule */

    /***/
    function srcAppRentRentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RentPageRoutingModule", function () {
        return RentPageRoutingModule;
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


      var _rent_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./rent.page */
      "./src/app/rent/rent.page.ts");

      var routes = [{
        path: '',
        component: _rent_page__WEBPACK_IMPORTED_MODULE_3__["RentPage"]
      }];

      var RentPageRoutingModule = function RentPageRoutingModule() {
        _classCallCheck(this, RentPageRoutingModule);
      };

      RentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RentPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/rent/rent.module.ts":
    /*!*************************************!*\
      !*** ./src/app/rent/rent.module.ts ***!
      \*************************************/

    /*! exports provided: RentPageModule */

    /***/
    function srcAppRentRentModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RentPageModule", function () {
        return RentPageModule;
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


      var _rent_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./rent-routing.module */
      "./src/app/rent/rent-routing.module.ts");
      /* harmony import */


      var _rent_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./rent.page */
      "./src/app/rent/rent.page.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-image-cropper */
      "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");
      /* harmony import */


      var _picture_modal_picture_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../picture-modal/picture-modal.component */
      "./src/app/picture-modal/picture-modal.component.ts");

      var RentPageModule = function RentPageModule() {
        _classCallCheck(this, RentPageModule);
      };

      RentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__["ImageCropperModule"], _rent_routing_module__WEBPACK_IMPORTED_MODULE_4__["RentPageRoutingModule"]],
        declarations: [_rent_page__WEBPACK_IMPORTED_MODULE_5__["RentPage"], _picture_modal_picture_modal_component__WEBPACK_IMPORTED_MODULE_8__["PictureModalComponent"]],
        entryComponents: [_picture_modal_picture_modal_component__WEBPACK_IMPORTED_MODULE_8__["PictureModalComponent"]]
      })], RentPageModule);
      /***/
    },

    /***/
    "./src/app/rent/rent.page.scss":
    /*!*************************************!*\
      !*** ./src/app/rent/rent.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppRentRentPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 150px;\n  border-radius: 50%;\n}\n\nion-select {\n  font-size: 12px;\n  font-weight: 500;\n}\n\nion-label {\n  font-size: 12px;\n  font-weight: 500;\n}\n\nion-avatar {\n  max-width: 25px;\n  max-height: 25px;\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-bottom: 10px;\n}\n\nh5 {\n  margin-top: 0;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.subtitle {\n  font-size: 12px;\n}\n\n.ionIcon {\n  font-size: 20px;\n}\n\n.header-class {\n  padding-top: 4px;\n}\n\nion-slides {\n  height: 100%;\n}\n\nion-slide {\n  display: block;\n}\n\nion-label, .select-text {\n  margin-left: 10px;\n}\n\n.invalid {\n  border: 1px solid #ea6153;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVudC9yZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0FBSUo7O0FBREE7RUFDSSxnQkFBQTtBQUlKOztBQURBO0VBQ0EsWUFBQTtBQUlBOztBQURBO0VBQ0UsY0FBQTtBQUlGOztBQURBO0VBQ0UsaUJBQUE7QUFJRjs7QUFEQTtFQUNFLHlCQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC9yZW50L3JlbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIFxuICBpb24tc2VsZWN0e1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIFxuICBpb24tbGFiZWx7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICBpb24tYXZhdGFyIHtcbiAgICBtYXgtd2lkdGg6IDI1cHg7XG4gICAgbWF4LWhlaWdodDogMjVweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgaDV7XG4gICAgbWFyZ2luLXRvcDowO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zdWJ0aXRsZXtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uaW9uSWNvbntcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5oZWFkZXItY2xhc3N7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbn1cblxuaW9uLXNsaWRlcyB7XG5oZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pb24tbGFiZWwsIC5zZWxlY3QtdGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYTYxNTM7XG59XG5cbiAgXG4gICJdfQ== */";
      /***/
    },

    /***/
    "./src/app/rent/rent.page.ts":
    /*!***********************************!*\
      !*** ./src/app/rent/rent.page.ts ***!
      \***********************************/

    /*! exports provided: RentPage */

    /***/
    function srcAppRentRentPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RentPage", function () {
        return RentPage;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _picture_modal_picture_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../picture-modal/picture-modal.component */
      "./src/app/picture-modal/picture-modal.component.ts");
      /* harmony import */


      var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/crop/ngx */
      "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_rent_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/rent.service */
      "./src/app/services/rent.service.ts");
      /* harmony import */


      var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../services/localstorage.service */
      "./src/app/services/localstorage.service.ts");

      var RentPage = /*#__PURE__*/function () {
        function RentPage(formBuilder, atrCtrl, loadingController, router, camera, httpClient, popover, modalCtrl, crop, actionSheetController, file, rentservice, localstorage) {
          _classCallCheck(this, RentPage);

          this.formBuilder = formBuilder;
          this.atrCtrl = atrCtrl;
          this.loadingController = loadingController;
          this.router = router;
          this.camera = camera;
          this.httpClient = httpClient;
          this.popover = popover;
          this.modalCtrl = modalCtrl;
          this.crop = crop;
          this.actionSheetController = actionSheetController;
          this.file = file;
          this.rentservice = rentservice;
          this.localstorage = localstorage;
          this.croppedImagepath = "";
          this.isLoading = false;
          this.imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 50
          };
          this.objRent = {};
          this.photo = '';
        }

        _createClass(RentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.rentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"]({
              rentTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](),
              rentDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](),
              rentValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]()
            });
            this.getData();
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            this.objRent.company = this.idUserCompany;
            this.objRent.rentTitle = this.rentForm.get('rentTitle').value;
            this.objRent.rentDescription = this.rentForm.get('rentDescription').value;
            this.objRent.rentValue = this.rentForm.get('rentValue').value;
            var re = "data:image/jpeg;base64,";
            this.objRent.rentMedia = this.photo.replace(re, ""); //console.log(this.company);

            this.addRent(this.objRent, this.userToken);
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
          key: "addRent",
          value: function addRent(oRent, token) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.rentservice.addRent(oRent, token).subscribe(function (ret) {
                        console.log(ret);
                      });

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "cropImage",
          value: function cropImage(fileUrl) {
            var _this = this;

            this.crop.crop(fileUrl, {
              quality: 50
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
              _this2.photo = _this2.croppedImagepath;
              _this2.isLoading = false;
            }, function (error) {
              alert('Error in showing image' + error);
              _this2.isLoading = false;
            });
          }
        }, {
          key: "selectImage",
          value: function selectImage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this3 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
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
                      actionSheet = _context3.sent;
                      _context3.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
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
              _this4.cropImage(imageData);
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "openModal",
          value: function openModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var modal;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.modalCtrl.create({
                        component: _picture_modal_picture_modal_component__WEBPACK_IMPORTED_MODULE_6__["PictureModalComponent"]
                      });

                    case 2:
                      modal = _context4.sent;
                      _context4.next = 5;
                      return modal.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return RentPage;
      }();

      RentPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_7__["Crop"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"]
        }, {
          type: _services_rent_service__WEBPACK_IMPORTED_MODULE_10__["RentService"]
        }, {
          type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_11__["LocalstorageService"]
        }];
      };

      RentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rent',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./rent.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/rent/rent.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./rent.page.scss */
        "./src/app/rent/rent.page.scss"))["default"]]
      })], RentPage);
      /***/
    },

    /***/
    "./src/app/services/rent.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/rent.service.ts ***!
      \******************************************/

    /*! exports provided: RentService */

    /***/
    function srcAppServicesRentServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RentService", function () {
        return RentService;
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

      var RentService = /*#__PURE__*/function () {
        function RentService(httpClient) {
          _classCallCheck(this, RentService);

          this.httpClient = httpClient;
          this.httpOpions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Authorization': 'Bearer ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].token
            })
          };
        }

        _createClass(RentService, [{
          key: "addRent",
          value: function addRent(rent, token) {
            this.httpOpions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': 'Bearer ' + token
              })
            }; //this.showConfirm('invocando a api');

            console.log('Passou esse objeto ' + JSON.stringify(rent));
            console.log(this.httpOpions);
            return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiRent, rent, this.httpOpions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
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

        return RentService;
      }();

      RentService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      RentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], RentService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=rent-rent-module-es5.js.map