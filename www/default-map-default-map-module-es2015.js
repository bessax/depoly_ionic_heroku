(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default-map-default-map-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/default-map/default-map.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/default-map/default-map.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n\n  <ion-toolbar color=\"primary\">\n    <ion-searchbar [(ngModel)]=\"autocomplete.input\" (ionInput)=\"UpdateSearchResults()\" placeholder=\"Search for a place\"  (ionClear)=\"ClearAutocomplete()\"></ion-searchbar>\n  </ion-toolbar>\n  <ion-list [hidden]=\"autocompleteItems.length == 0\">\n    <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"SelectSearchResult(item)\">\n      {{ item.description }}\n    </ion-item>\n  </ion-list>\n  <ion-toolbar color=\"warning\">\n    <ion-button (click)=\"showMap()\" shape=\"round\" color=\"dark\">\n      <ion-icon slot=\"start\" name=\"locate\"></ion-icon>\n      Where I Am\n    </ion-button>\n    <ion-title slot=\"end\">Google Map</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-content> \n    <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n      <ion-fab-button (click)=\"ShowCords()\" ion-fab color=\"tertiary\">\n        <ion-icon name=\"information-circle-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n    <div class=\"map-wrapper\" style=\"height: 100%;\">      \n      <div id=\"map_center\">\n        <ion-icon name=\"pin\" size=\"large\" color=\"danger\"></ion-icon>      \n      </div>\n      <div #map id=\"map\"  style=\"height: 100%;\"></div>\n    </div>   \n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"3\">\n        <b>Lattitude</b>\n      </ion-col>\n      <ion-col>\n        {{latitude}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <b>Longitude</b>\n      </ion-col>\n      <ion-col>\n        {{longitude}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <b>Address</b>\n      </ion-col>\n      <ion-col>\n        {{address}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/default-map/default-map-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/default-map/default-map-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DefaultMapPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultMapPageRoutingModule", function() { return DefaultMapPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _default_map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-map.page */ "./src/app/default-map/default-map.page.ts");




const routes = [
    {
        path: '',
        component: _default_map_page__WEBPACK_IMPORTED_MODULE_3__["DefaultMapPage"]
    }
];
let DefaultMapPageRoutingModule = class DefaultMapPageRoutingModule {
};
DefaultMapPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DefaultMapPageRoutingModule);



/***/ }),

/***/ "./src/app/default-map/default-map.module.ts":
/*!***************************************************!*\
  !*** ./src/app/default-map/default-map.module.ts ***!
  \***************************************************/
/*! exports provided: DefaultMapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultMapPageModule", function() { return DefaultMapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _default_map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./default-map-routing.module */ "./src/app/default-map/default-map-routing.module.ts");
/* harmony import */ var _default_map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default-map.page */ "./src/app/default-map/default-map.page.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");









let DefaultMapPageModule = class DefaultMapPageModule {
};
DefaultMapPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _default_map_routing_module__WEBPACK_IMPORTED_MODULE_5__["DefaultMapPageRoutingModule"]
        ],
        providers: [
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeGeocoder"],
        ],
        declarations: [_default_map_page__WEBPACK_IMPORTED_MODULE_6__["DefaultMapPage"]]
    })
], DefaultMapPageModule);



/***/ }),

/***/ "./src/app/default-map/default-map.page.scss":
/*!***************************************************!*\
  !*** ./src/app/default-map/default-map.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlZmF1bHQtbWFwL2RlZmF1bHQtbWFwLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/default-map/default-map.page.ts":
/*!*************************************************!*\
  !*** ./src/app/default-map/default-map.page.ts ***!
  \*************************************************/
/*! exports provided: DefaultMapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultMapPage", function() { return DefaultMapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");




let DefaultMapPage = class DefaultMapPage {
    constructor(geolocation, nativeGeocoder, zone) {
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.zone = zone;
        this.infoWindows = [];
        this.markers = [{
                title: "Marke #1",
                latitude: "-20.839217",
                longitude: "-41.128867"
            },
            {
                title: "Marke #2",
                latitude: "-20.848167",
                longitude: "-41.130426"
            },
            {
                title: "Marke #3",
                latitude: "-20.852399",
                longitude: "-41.128194"
            }];
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = { input: '' };
        this.autocompleteItems = [];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        console.log("afterinit");
        setTimeout(() => {
            console.log(this.mapRef.nativeElement);
            this.showMap();
        }, 1000);
    }
    addMarkersToMap(markers) {
        for (let marker of markers) {
            let position = new google.maps.LatLng(marker.latitude, marker.longitude);
            let mapMarker = new google.maps.Marker({
                position: position,
                title: marker.title,
                latitude: marker.latitude,
                longitude: marker.longitude
            });
            mapMarker.setMap(this.map);
            this.addInfoWindowToMarker(mapMarker);
        }
    }
    addInfoWindowToMarker(marker) {
        let infoWindowContent = '<div id="content">' +
            '<h2 id="firstHeading" class="firstHeading">' + marker.title + '</h2>' +
            '<p>Latitude: ' + marker.latitude + '</p>' +
            '<p>Longitude: ' + marker.longitude + '</p>' +
            '</div>';
        let infoWindow = new google.maps.infoWindow({
            content: infoWindowContent
        });
        marker.addListener('click', () => {
            this.closeAllInfoWindows();
            infoWindow.open(this.map, marker);
        });
        this.infoWindows.push(infoWindow);
    }
    closeAllInfoWindows() {
        for (let window of this.infoWindows) {
            window.close();
        }
    }
    showMap() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.latitude = -20.839217; //resp.coords.latitude;
            this.longitude = -41.128867; //resp.coords.longitude;
            let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            let mapOptions = {
                center: latLng,
                zoom: 15
            };
            this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
            this.map = new google.maps.Map(this.mapRef.nativeElement, mapOptions);
            this.map.addListener('dragend', () => {
                console.log('accuray', this.map, this.map.center.lat());
                this.latitude = this.map.center.lat();
                this.longitude = this.map.center.lng();
                this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng());
            });
            this.addMarkersToMap(this.markers);
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    getAddressFromCoords(lattitude, longitude) {
        console.log("getAddressFromCoords " + lattitude + " " + longitude);
        let options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
            .then((result) => {
            this.address = "";
            let responseAddress = [];
            for (let [key, value] of Object.entries(result[0])) {
                if (value.length > 0)
                    responseAddress.push(value);
            }
            responseAddress.reverse();
            for (let value of responseAddress) {
                this.address += value + ", ";
            }
            this.address = this.address.slice(0, -2);
        })
            .catch((error) => {
            this.address = "Address Not Available!";
        });
    }
    ShowCards() {
        alert('lat' + this.latitude + ' ,long' + this.longitude);
    }
    UpdateSearchResults() {
        if (this.autocomplete.input == '') {
            this.autocompleteItems = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input }, (predictions, status) => {
            this.autocompleteItems = [];
            this.zone.run(() => {
                predictions.forEach((prediction) => {
                    this.autocompleteItems.push(prediction);
                });
            });
        });
    }
    SelectSearchResult(item) {
        ///WE CAN CONFIGURE MORE COMPLEX FUNCTIONS SUCH AS UPLOAD DATA TO FIRESTORE OR LINK IT TO SOMETHING
        alert(JSON.stringify(item));
        this.placeid = item.place_id;
    }
    GoTo() {
        return window.location.href = 'https://www.google.com/maps/search/?api=1&query=Google&query_place_id=' + this.placeid;
    }
};
DefaultMapPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
DefaultMapPage.propDecorators = {
    mapRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['map', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false },] }]
};
DefaultMapPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-default-map',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./default-map.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/default-map/default-map.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./default-map.page.scss */ "./src/app/default-map/default-map.page.scss")).default]
    })
], DefaultMapPage);



/***/ })

}]);
//# sourceMappingURL=default-map-default-map-module-es2015.js.map