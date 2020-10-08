(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["map-markers-map-markers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/map-markers/map-markers.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map-markers/map-markers.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>mapMarkers</ion-title>\n    <button ion-button (click)=\"callMarkers()\"> marker </button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"map\"></div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/map-markers/map-markers-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/map-markers/map-markers-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MapMarkersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapMarkersPageRoutingModule", function() { return MapMarkersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _map_markers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-markers.page */ "./src/app/map-markers/map-markers.page.ts");




const routes = [
    {
        path: '',
        component: _map_markers_page__WEBPACK_IMPORTED_MODULE_3__["MapMarkersPage"]
    }
];
let MapMarkersPageRoutingModule = class MapMarkersPageRoutingModule {
};
MapMarkersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MapMarkersPageRoutingModule);



/***/ }),

/***/ "./src/app/map-markers/map-markers.module.ts":
/*!***************************************************!*\
  !*** ./src/app/map-markers/map-markers.module.ts ***!
  \***************************************************/
/*! exports provided: MapMarkersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapMarkersPageModule", function() { return MapMarkersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _map_markers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-markers-routing.module */ "./src/app/map-markers/map-markers-routing.module.ts");
/* harmony import */ var _map_markers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map-markers.page */ "./src/app/map-markers/map-markers.page.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");









let MapMarkersPageModule = class MapMarkersPageModule {
};
MapMarkersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _map_markers_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapMarkersPageRoutingModule"]
        ],
        providers: [
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeGeocoder"],
        ],
        declarations: [_map_markers_page__WEBPACK_IMPORTED_MODULE_6__["MapMarkersPage"]]
    })
], MapMarkersPageModule);



/***/ }),

/***/ "./src/app/map-markers/map-markers.page.scss":
/*!***************************************************!*\
  !*** ./src/app/map-markers/map-markers.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content #map {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n  display: block;\n}\nion-content #map.show-map {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLW1hcmtlcnMvbWFwLW1hcmtlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0FBQUo7QUFDSTtFQUNFLFVBQUE7QUFDTiIsImZpbGUiOiJzcmMvYXBwL21hcC1tYXJrZXJzL21hcC1tYXJrZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgI21hcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICYuc2hvdy1tYXB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/map-markers/map-markers.page.ts":
/*!*************************************************!*\
  !*** ./src/app/map-markers/map-markers.page.ts ***!
  \*************************************************/
/*! exports provided: MapMarkersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapMarkersPage", function() { return MapMarkersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_marker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/marker.service */ "./src/app/services/marker.service.ts");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/localstorage.service */ "./src/app/services/localstorage.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");









let MapMarkersPage = class MapMarkersPage {
    constructor(atrCtrl, markerservice, localstorageservice, storage, modalCtrl, geolocation, nativeGeocoder, zone) {
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
    getMarkers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("Invocando os Markers ");
            let result = yield this.markerservice.getAllMarkers().toPromise();
            result.forEach((values) => {
                this.marker = {
                    position: {
                        lat: values["addressLocalization"].x,
                        lng: values["addressLocalization"].y,
                    },
                    title: values["companyName"]
                };
                this.markers.push(this.marker);
            });
            console.log(this.markers);
        });
    }
    ngOnInit() {
        //this.showMarkers();
    }
    ngAfterViewInit() {
        console.log("afterinit");
        setTimeout(() => {
            //console.log(this.mapRef.nativeElement);
            this.loadMap();
        }, 1000);
    }
    loadMap() {
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
        this.geolocation.getCurrentPosition().then((resp) => {
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
        }).catch(() => {
            this.latitude = -20.839217; //resp.coords.latitude;
            this.longitude = -41.128867; //resp.coords.longitude;
        });
        const mapEle = document.getElementById('map');
        // create LatLng object
        const myLatLng = { lat: this.latitude, lng: this.longitude };
        // create map
        this.map = new google.maps.Map(mapEle, {
            center: myLatLng,
            zoom: 12
        });
        google.maps.event.addListenerOnce(this.map, 'idle', () => {
            this.renderMarkers();
            mapEle.classList.add('show-map');
        });
    }
    showMarkers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getMarkers();
        });
    }
    callMarkers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getMarkers();
            this.loadMap();
        });
    }
    renderMarkers() {
        this.markers.forEach(mark => {
            this.addMarker(mark);
        });
    }
    addMarker(marker) {
        return new google.maps.Marker({
            position: marker.position,
            map: this.map,
            title: marker.title
        });
    }
};
MapMarkersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _services_marker_service__WEBPACK_IMPORTED_MODULE_3__["MarkerService"] },
    { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
MapMarkersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map-markers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./map-markers.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/map-markers/map-markers.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./map-markers.page.scss */ "./src/app/map-markers/map-markers.page.scss")).default]
    })
], MapMarkersPage);



/***/ }),

/***/ "./src/app/services/loader.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/loader.service.ts ***!
  \********************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let LoaderService = class LoaderService {
    constructor(loadingController) {
        this.loadingController = loadingController;
    }
    showHideAutoLoader() {
        this.loadingController.create({
            message: 'This Loader Will Auto Hide in 2 Seconds',
            duration: 2000
        }).then((res) => {
            res.present();
            res.onDidDismiss().then((dis) => {
                console.log('Loading dismissed! after 2 Seconds', dis);
            });
        });
    }
    // Show the loader for infinite time
    showLoader() {
        this.loadingController.create({
            message: 'Please wait...'
        }).then((res) => {
            res.present();
        });
    }
    // Hide the loader if already created otherwise return error
    hideLoader() {
        this.loadingController.dismiss().then((res) => {
            console.log('Loading dismissed!', res);
        }).catch((error) => {
            console.log('error', error);
        });
    }
};
LoaderService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
LoaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoaderService);



/***/ }),

/***/ "./src/app/services/localstorage.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/localstorage.service.ts ***!
  \**************************************************/
/*! exports provided: LocalstorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalstorageService", function() { return LocalstorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");



let LocalstorageService = class LocalstorageService {
    constructor(storage) {
        this.storage = storage;
    }
    getValue(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data;
            yield this.storage.get(key).then((val) => {
                console.log('get ' + key + ' ,' + val);
                data = val;
            })
                .catch((err) => {
                console.log('get error for ' + key + ' ' + err);
            });
            return data;
        });
    }
    setValue(key, value) {
        this.storage.set(key, value).then((res) => {
            console.log('set ' + key + ' ' + res);
            this.getValue(key);
        }).catch((err) => {
            console.log('set error for ' + key + ' ' + err);
        });
    }
};
LocalstorageService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
LocalstorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LocalstorageService);



/***/ }),

/***/ "./src/app/services/marker.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/marker.service.ts ***!
  \********************************************/
/*! exports provided: MarkerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerService", function() { return MarkerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./localstorage.service */ "./src/app/services/localstorage.service.ts");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loader.service */ "./src/app/services/loader.service.ts");









let MarkerService = class MarkerService {
    constructor(httpClient, nativeHTTP, localstorageservice, loaderservice) {
        this.httpClient = httpClient;
        this.nativeHTTP = nativeHTTP;
        this.localstorageservice = localstorageservice;
        this.loaderservice = loaderservice;
        this.httpOpions = {};
    }
    getAllMarkers() {
        //console.log(token);
        this.httpOpions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiMarker, this.httpOpions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // Manipulação de erros
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Erro ocorreu no lado do client
            errorMessage = error.error.message;
        }
        else {
            // Erro ocorreu no lado do servidor
            errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
MarkerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"] },
    { type: _localstorage_service__WEBPACK_IMPORTED_MODULE_7__["LocalstorageService"] },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"] }
];
MarkerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MarkerService);



/***/ })

}]);
//# sourceMappingURL=map-markers-map-markers-module-es2015.js.map