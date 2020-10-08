(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default-map-default-map-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/default-map/default-map.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/default-map/default-map.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDefaultMapDefaultMapPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n\n  <ion-toolbar color=\"primary\">\n    <ion-searchbar [(ngModel)]=\"autocomplete.input\" (ionInput)=\"UpdateSearchResults()\" placeholder=\"Search for a place\"  (ionClear)=\"ClearAutocomplete()\"></ion-searchbar>\n  </ion-toolbar>\n  <ion-list [hidden]=\"autocompleteItems.length == 0\">\n    <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"SelectSearchResult(item)\">\n      {{ item.description }}\n    </ion-item>\n  </ion-list>\n  <ion-toolbar color=\"warning\">\n    <ion-button (click)=\"showMap()\" shape=\"round\" color=\"dark\">\n      <ion-icon slot=\"start\" name=\"locate\"></ion-icon>\n      Where I Am\n    </ion-button>\n    <ion-title slot=\"end\">Google Map</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-content> \n    <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n      <ion-fab-button (click)=\"ShowCords()\" ion-fab color=\"tertiary\">\n        <ion-icon name=\"information-circle-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n    <div class=\"map-wrapper\" style=\"height: 100%;\">      \n      <div id=\"map_center\">\n        <ion-icon name=\"pin\" size=\"large\" color=\"danger\"></ion-icon>      \n      </div>\n      <div #map id=\"map\"  style=\"height: 100%;\"></div>\n    </div>   \n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"3\">\n        <b>Lattitude</b>\n      </ion-col>\n      <ion-col>\n        {{latitude}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <b>Longitude</b>\n      </ion-col>\n      <ion-col>\n        {{longitude}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <b>Address</b>\n      </ion-col>\n      <ion-col>\n        {{address}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/default-map/default-map-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/default-map/default-map-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: DefaultMapPageRoutingModule */

    /***/
    function srcAppDefaultMapDefaultMapRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultMapPageRoutingModule", function () {
        return DefaultMapPageRoutingModule;
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


      var _default_map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./default-map.page */
      "./src/app/default-map/default-map.page.ts");

      var routes = [{
        path: '',
        component: _default_map_page__WEBPACK_IMPORTED_MODULE_3__["DefaultMapPage"]
      }];

      var DefaultMapPageRoutingModule = function DefaultMapPageRoutingModule() {
        _classCallCheck(this, DefaultMapPageRoutingModule);
      };

      DefaultMapPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DefaultMapPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/default-map/default-map.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/default-map/default-map.module.ts ***!
      \***************************************************/

    /*! exports provided: DefaultMapPageModule */

    /***/
    function srcAppDefaultMapDefaultMapModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultMapPageModule", function () {
        return DefaultMapPageModule;
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


      var _default_map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./default-map-routing.module */
      "./src/app/default-map/default-map-routing.module.ts");
      /* harmony import */


      var _default_map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./default-map.page */
      "./src/app/default-map/default-map.page.ts");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");

      var DefaultMapPageModule = function DefaultMapPageModule() {
        _classCallCheck(this, DefaultMapPageModule);
      };

      DefaultMapPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _default_map_routing_module__WEBPACK_IMPORTED_MODULE_5__["DefaultMapPageRoutingModule"]],
        providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeGeocoder"]],
        declarations: [_default_map_page__WEBPACK_IMPORTED_MODULE_6__["DefaultMapPage"]]
      })], DefaultMapPageModule);
      /***/
    },

    /***/
    "./src/app/default-map/default-map.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/default-map/default-map.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppDefaultMapDefaultMapPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlZmF1bHQtbWFwL2RlZmF1bHQtbWFwLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/default-map/default-map.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/default-map/default-map.page.ts ***!
      \*************************************************/

    /*! exports provided: DefaultMapPage */

    /***/
    function srcAppDefaultMapDefaultMapPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultMapPage", function () {
        return DefaultMapPage;
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


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");

      var DefaultMapPage = /*#__PURE__*/function () {
        function DefaultMapPage(geolocation, nativeGeocoder, zone) {
          _classCallCheck(this, DefaultMapPage);

          this.geolocation = geolocation;
          this.nativeGeocoder = nativeGeocoder;
          this.zone = zone;
          this.infoWindows = [];
          this.markers = [{
            title: "Marke #1",
            latitude: "-20.839217",
            longitude: "-41.128867"
          }, {
            title: "Marke #2",
            latitude: "-20.848167",
            longitude: "-41.130426"
          }, {
            title: "Marke #3",
            latitude: "-20.852399",
            longitude: "-41.128194"
          }];
          this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
          this.autocomplete = {
            input: ''
          };
          this.autocompleteItems = [];
        }

        _createClass(DefaultMapPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            console.log("afterinit");
            setTimeout(function () {
              console.log(_this.mapRef.nativeElement);

              _this.showMap();
            }, 1000);
          }
        }, {
          key: "addMarkersToMap",
          value: function addMarkersToMap(markers) {
            var _iterator = _createForOfIteratorHelper(markers),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var marker = _step.value;
                var position = new google.maps.LatLng(marker.latitude, marker.longitude);
                var mapMarker = new google.maps.Marker({
                  position: position,
                  title: marker.title,
                  latitude: marker.latitude,
                  longitude: marker.longitude
                });
                mapMarker.setMap(this.map);
                this.addInfoWindowToMarker(mapMarker);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "addInfoWindowToMarker",
          value: function addInfoWindowToMarker(marker) {
            var _this2 = this;

            var infoWindowContent = '<div id="content">' + '<h2 id="firstHeading" class="firstHeading">' + marker.title + '</h2>' + '<p>Latitude: ' + marker.latitude + '</p>' + '<p>Longitude: ' + marker.longitude + '</p>' + '</div>';
            var infoWindow = new google.maps.infoWindow({
              content: infoWindowContent
            });
            marker.addListener('click', function () {
              _this2.closeAllInfoWindows();

              infoWindow.open(_this2.map, marker);
            });
            this.infoWindows.push(infoWindow);
          }
        }, {
          key: "closeAllInfoWindows",
          value: function closeAllInfoWindows() {
            var _iterator2 = _createForOfIteratorHelper(this.infoWindows),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _window = _step2.value;

                _window.close();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }, {
          key: "showMap",
          value: function showMap() {
            var _this3 = this;

            this.geolocation.getCurrentPosition().then(function (resp) {
              _this3.latitude = -20.839217; //resp.coords.latitude;

              _this3.longitude = -41.128867; //resp.coords.longitude;

              var latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
              var mapOptions = {
                center: latLng,
                zoom: 15
              };

              _this3.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);

              _this3.map = new google.maps.Map(_this3.mapRef.nativeElement, mapOptions);

              _this3.map.addListener('dragend', function () {
                console.log('accuray', _this3.map, _this3.map.center.lat());
                _this3.latitude = _this3.map.center.lat();
                _this3.longitude = _this3.map.center.lng();

                _this3.getAddressFromCoords(_this3.map.center.lat(), _this3.map.center.lng());
              });

              _this3.addMarkersToMap(_this3.markers);
            })["catch"](function (error) {
              console.log('Error getting location', error);
            });
          }
        }, {
          key: "getAddressFromCoords",
          value: function getAddressFromCoords(lattitude, longitude) {
            var _this4 = this;

            console.log("getAddressFromCoords " + lattitude + " " + longitude);
            var options = {
              useLocale: true,
              maxResults: 5
            };
            this.nativeGeocoder.reverseGeocode(lattitude, longitude, options).then(function (result) {
              _this4.address = "";
              var responseAddress = [];

              for (var _i = 0, _Object$entries = Object.entries(result[0]); _i < _Object$entries.length; _i++) {
                var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                    key = _Object$entries$_i[0],
                    value = _Object$entries$_i[1];

                if (value.length > 0) responseAddress.push(value);
              }

              responseAddress.reverse();

              for (var _i2 = 0, _responseAddress = responseAddress; _i2 < _responseAddress.length; _i2++) {
                var _value = _responseAddress[_i2];
                _this4.address += _value + ", ";
              }

              _this4.address = _this4.address.slice(0, -2);
            })["catch"](function (error) {
              _this4.address = "Address Not Available!";
            });
          }
        }, {
          key: "ShowCards",
          value: function ShowCards() {
            alert('lat' + this.latitude + ' ,long' + this.longitude);
          }
        }, {
          key: "UpdateSearchResults",
          value: function UpdateSearchResults() {
            var _this5 = this;

            if (this.autocomplete.input == '') {
              this.autocompleteItems = [];
              return;
            }

            this.GoogleAutocomplete.getPlacePredictions({
              input: this.autocomplete.input
            }, function (predictions, status) {
              _this5.autocompleteItems = [];

              _this5.zone.run(function () {
                predictions.forEach(function (prediction) {
                  _this5.autocompleteItems.push(prediction);
                });
              });
            });
          }
        }, {
          key: "SelectSearchResult",
          value: function SelectSearchResult(item) {
            ///WE CAN CONFIGURE MORE COMPLEX FUNCTIONS SUCH AS UPLOAD DATA TO FIRESTORE OR LINK IT TO SOMETHING
            alert(JSON.stringify(item));
            this.placeid = item.place_id;
          }
        }, {
          key: "GoTo",
          value: function GoTo() {
            return window.location.href = 'https://www.google.com/maps/search/?api=1&query=Google&query_place_id=' + this.placeid;
          }
        }]);

        return DefaultMapPage;
      }();

      DefaultMapPage.ctorParameters = function () {
        return [{
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]
        }, {
          type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      DefaultMapPage.propDecorators = {
        mapRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['map', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            "static": false
          }]
        }]
      };
      DefaultMapPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-default-map',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./default-map.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/default-map/default-map.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./default-map.page.scss */
        "./src/app/default-map/default-map.page.scss"))["default"]]
      })], DefaultMapPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-map-default-map-module-es5.js.map