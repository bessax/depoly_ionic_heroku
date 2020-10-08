(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["map-markers-map-markers-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/map-markers/map-markers.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map-markers/map-markers.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMapMarkersMapMarkersPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>mapMarkers</ion-title>\n    <button ion-button (click)=\"callMarkers()\"> marker </button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"map\"></div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/map-markers/map-markers-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/map-markers/map-markers-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: MapMarkersPageRoutingModule */

    /***/
    function srcAppMapMarkersMapMarkersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapMarkersPageRoutingModule", function () {
        return MapMarkersPageRoutingModule;
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


      var _map_markers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./map-markers.page */
      "./src/app/map-markers/map-markers.page.ts");

      var routes = [{
        path: '',
        component: _map_markers_page__WEBPACK_IMPORTED_MODULE_3__["MapMarkersPage"]
      }];

      var MapMarkersPageRoutingModule = function MapMarkersPageRoutingModule() {
        _classCallCheck(this, MapMarkersPageRoutingModule);
      };

      MapMarkersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MapMarkersPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/map-markers/map-markers.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/map-markers/map-markers.module.ts ***!
      \***************************************************/

    /*! exports provided: MapMarkersPageModule */

    /***/
    function srcAppMapMarkersMapMarkersModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapMarkersPageModule", function () {
        return MapMarkersPageModule;
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


      var _map_markers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./map-markers-routing.module */
      "./src/app/map-markers/map-markers-routing.module.ts");
      /* harmony import */


      var _map_markers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./map-markers.page */
      "./src/app/map-markers/map-markers.page.ts");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");

      var MapMarkersPageModule = function MapMarkersPageModule() {
        _classCallCheck(this, MapMarkersPageModule);
      };

      MapMarkersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _map_markers_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapMarkersPageRoutingModule"]],
        providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeGeocoder"]],
        declarations: [_map_markers_page__WEBPACK_IMPORTED_MODULE_6__["MapMarkersPage"]]
      })], MapMarkersPageModule);
      /***/
    },

    /***/
    "./src/app/map-markers/map-markers.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/map-markers/map-markers.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppMapMarkersMapMarkersPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content #map {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n  display: block;\n}\nion-content #map.show-map {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLW1hcmtlcnMvbWFwLW1hcmtlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0FBQUo7QUFDSTtFQUNFLFVBQUE7QUFDTiIsImZpbGUiOiJzcmMvYXBwL21hcC1tYXJrZXJzL21hcC1tYXJrZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgI21hcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICYuc2hvdy1tYXB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/map-markers/map-markers.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/map-markers/map-markers.page.ts ***!
      \*************************************************/

    /*! exports provided: MapMarkersPage */

    /***/
    function srcAppMapMarkersMapMarkersPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapMarkersPage", function () {
        return MapMarkersPage;
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


      var _services_marker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/marker.service */
      "./src/app/services/marker.service.ts");
      /* harmony import */


      var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/localstorage.service */
      "./src/app/services/localstorage.service.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");

      var MapMarkersPage = /*#__PURE__*/function () {
        function MapMarkersPage(atrCtrl, markerservice, localstorageservice, storage, modalCtrl, geolocation, nativeGeocoder, zone) {
          _classCallCheck(this, MapMarkersPage);

          this.atrCtrl = atrCtrl;
          this.markerservice = markerservice;
          this.localstorageservice = localstorageservice;
          this.storage = storage;
          this.modalCtrl = modalCtrl;
          this.geolocation = geolocation;
          this.nativeGeocoder = nativeGeocoder;
          this.zone = zone;
          this.marker = {};
          this.markers = [];
          this.map = null;
          this.myLatLng = {};
        }

        _createClass(MapMarkersPage, [{
          key: "getMarkers",
          value: function getMarkers() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var result;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log("Invocando os Markers ");
                      _context.next = 3;
                      return this.markerservice.getAllMarkers().toPromise();

                    case 3:
                      result = _context.sent;
                      result.forEach(function (values) {
                        _this.marker = {
                          position: {
                            lat: values["addressLocalization"].x,
                            lng: values["addressLocalization"].y
                          },
                          title: values["companyName"]
                        };

                        _this.markers.push(_this.marker);
                      });
                      console.log(this.markers);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {//this.showMarkers();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            console.log("afterinit");
            setTimeout(function () {
              //console.log(this.mapRef.nativeElement);
              _this2.loadMap();
            }, 1000);
          }
        }, {
          key: "loadMap",
          value: function loadMap() {
            var _this3 = this;

            /*const mapEle: HTMLElement = document.getElementById('map');
            this.geolocation.getCurrentPosition().then((resp) => {
              this.latitude = -20.839217;//resp.coords.latitude;
              this.longitude = -41.128867;//resp.coords.longitude;
                      this.myLatLng = new google.maps.LatLng(this.latitude, this.longitude);
              let mapOptions = {
                center: this.myLatLng,
                zoom: 15
              }
              
              //this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
                    this.map = new google.maps.Map(mapEle, mapOptions);
            }).catch((error) => {
              console.log('Error getting location', error);
            });*/
            // create a new map by passing HTMLElement
            this.latitude = -20.839217; //resp.coords.latitude;

            this.longitude = -41.128867; //resp.coords.longitude;

            this.geolocation.getCurrentPosition().then(function (resp) {
              _this3.latitude = resp.coords.latitude;
              _this3.longitude = resp.coords.longitude;
            })["catch"](function () {
              _this3.latitude = -20.839217; //resp.coords.latitude;

              _this3.longitude = -41.128867; //resp.coords.longitude;
            });
            var mapEle = document.getElementById('map'); // create LatLng object

            var myLatLng = {
              lat: this.latitude,
              lng: this.longitude
            }; // create map

            this.map = new google.maps.Map(mapEle, {
              center: myLatLng,
              zoom: 12
            });
            google.maps.event.addListenerOnce(this.map, 'idle', function () {
              _this3.renderMarkers();

              mapEle.classList.add('show-map');
            });
          }
        }, {
          key: "showMarkers",
          value: function showMarkers() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.getMarkers();

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "callMarkers",
          value: function callMarkers() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.getMarkers();

                    case 2:
                      this.loadMap();

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "renderMarkers",
          value: function renderMarkers() {
            var _this4 = this;

            this.markers.forEach(function (mark) {
              _this4.addMarker(mark);
            });
          }
        }, {
          key: "addMarker",
          value: function addMarker(marker) {
            return new google.maps.Marker({
              position: marker.position,
              map: this.map,
              title: marker.title
            });
          }
        }]);

        return MapMarkersPage;
      }();

      MapMarkersPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _services_marker_service__WEBPACK_IMPORTED_MODULE_3__["MarkerService"]
        }, {
          type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"]
        }, {
          type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      MapMarkersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map-markers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./map-markers.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/map-markers/map-markers.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./map-markers.page.scss */
        "./src/app/map-markers/map-markers.page.scss"))["default"]]
      })], MapMarkersPage);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var data;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.storage.get(key).then(function (val) {
                        console.log('get ' + key + ' ,' + val);
                        data = val;
                      })["catch"](function (err) {
                        console.log('get error for ' + key + ' ' + err);
                      });

                    case 2:
                      return _context4.abrupt("return", data);

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "setValue",
          value: function setValue(key, value) {
            var _this5 = this;

            this.storage.set(key, value).then(function (res) {
              console.log('set ' + key + ' ' + res);

              _this5.getValue(key);
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
    "./src/app/services/marker.service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/marker.service.ts ***!
      \********************************************/

    /*! exports provided: MarkerService */

    /***/
    function srcAppServicesMarkerServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarkerService", function () {
        return MarkerService;
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

      var MarkerService = /*#__PURE__*/function () {
        function MarkerService(httpClient, nativeHTTP, localstorageservice, loaderservice) {
          _classCallCheck(this, MarkerService);

          this.httpClient = httpClient;
          this.nativeHTTP = nativeHTTP;
          this.localstorageservice = localstorageservice;
          this.loaderservice = loaderservice;
          this.httpOpions = {};
        }

        _createClass(MarkerService, [{
          key: "getAllMarkers",
          value: function getAllMarkers() {
            //console.log(token);
            this.httpOpions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
              })
            };
            return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiMarker, this.httpOpions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
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

        return MarkerService;
      }();

      MarkerService.ctorParameters = function () {
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

      MarkerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], MarkerService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=map-markers-map-markers-module-es5.js.map