(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-document-list></app-document-list>\n<app-document></app-document>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_document_list_document_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/document-list/document-list.component */ "./src/app/components/document-list/document-list.component.ts");
/* harmony import */ var _components_document_document_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/document/document.component */ "./src/app/components/document/document.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var config = { url: 'http://localhost:4444', options: {} };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_document_list_document_list_component__WEBPACK_IMPORTED_MODULE_6__["DocumentListComponent"],
                _components_document_document_component__WEBPACK_IMPORTED_MODULE_7__["DocumentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["SocketIoModule"].forRoot(config),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/document-list/document-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/document-list/document-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav\">\n  <span id=\"Action\" (click)=\"openDocs()\">Open Documents</span>\n  <span id=\"Action\" (click)=\"newDoc()\">New Document</span><br />\n  <span\n    [class.selected]=\"docId === currentDoc\"\n    (click)=\"loadDoc(docId)\"\n    *ngFor=\"let docId of documents | async\"\n    >{{ docId }}\n  </span>\n</div>\n"

/***/ }),

/***/ "./src/app/components/document-list/document-list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/document-list/document-list.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav {\n  position: fixed;\n  height: 100%;\n  width: 220px;\n  top: 0;\n  left: 0;\n  background-color: #111111;\n  overflow-x: hidden;\n  padding-top: 20px; }\n  .sidenav span {\n    padding: 6px 8px 6px 16px;\n    text-decoration: none;\n    font-size: 25px;\n    font-family: \"Roboto\", Tahoma, Geneva, Verdana, sans-serif;\n    color: #818181;\n    display: block; }\n  .sidenav .selected {\n    color: #e1e1e1; }\n  .sidenav :hover {\n    color: #f1f1f1;\n    cursor: pointer; }\n  .selected {\n  background-color: gray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb2N1bWVudC1saXN0L0c6XFxTYWRcXENvdXJzZV9Xb3JrXFxzb2NrZXQtYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxkb2N1bWVudC1saXN0XFxkb2N1bWVudC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWU7RUFDZixhQUFZO0VBQ1osYUFBWTtFQUNaLE9BQU07RUFDTixRQUFPO0VBQ1AsMEJBQXlCO0VBQ3pCLG1CQUFrQjtFQUNsQixrQkFBaUIsRUFpQmxCO0VBekJEO0lBV0ksMEJBQXlCO0lBQ3pCLHNCQUFxQjtJQUNyQixnQkFBZTtJQUNmLDJEQUEwRDtJQUMxRCxlQUFjO0lBQ2QsZUFBYyxFQUNmO0VBakJIO0lBbUJJLGVBQWMsRUFDZjtFQXBCSDtJQXNCSSxlQUFjO0lBQ2QsZ0JBQWUsRUFDaEI7RUFHSDtFQUNFLHVCQUFzQixFQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9jdW1lbnQtbGlzdC9kb2N1bWVudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG5cclxuICBzcGFuIHtcclxuICAgIHBhZGRpbmc6IDZweCA4cHggNnB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzgxODE4MTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAuc2VsZWN0ZWQge1xyXG4gICAgY29sb3I6ICNlMWUxZTE7XHJcbiAgfVxyXG4gIDpob3ZlciB7XHJcbiAgICBjb2xvcjogI2YxZjFmMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/document-list/document-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/document-list/document-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: DocumentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentListComponent", function() { return DocumentListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_document_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/document.service */ "./src/app/services/document.service.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocumentListComponent = /** @class */ (function () {
    function DocumentListComponent(documentService) {
        this.documentService = documentService;
        this.docsobj = {};
        this.count = 0;
    }
    DocumentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        axios__WEBPACK_IMPORTED_MODULE_2___default.a
            .get("http://localhost:4444/docs/")
            .then(function (resp) {
            return resp.data.map(function (doc) { return ((_this.docsobj[_this.count] = doc), _this.count++); });
        });
        this.documents = this.documentService.documents;
        this._docSub = this.documentService.currentDocument.subscribe(function (doc) { return (_this.currentDoc = doc.id); });
    };
    DocumentListComponent.prototype.ngOnDestroy = function () {
        this._docSub.unsubscribe();
    };
    DocumentListComponent.prototype.openDocs = function () {
        for (var i = 0; i < this.count; i++) {
            this.documentService.getDocs(this.docsobj[i]);
        }
    };
    DocumentListComponent.prototype.loadDoc = function (id) {
        this.documentService.getDocument(id);
    };
    DocumentListComponent.prototype.newDoc = function () {
        this.documentService.newDocument();
    };
    DocumentListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-document-list",
            template: __webpack_require__(/*! ./document-list.component.html */ "./src/app/components/document-list/document-list.component.html"),
            styles: [__webpack_require__(/*! ./document-list.component.scss */ "./src/app/components/document-list/document-list.component.scss")],
        }),
        __metadata("design:paramtypes", [src_app_services_document_service__WEBPACK_IMPORTED_MODULE_1__["DocumentService"]])
    ], DocumentListComponent);
    return DocumentListComponent;
}());



/***/ }),

/***/ "./src/app/components/document/document.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/document/document.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<textarea\r\n  [(ngModel)]=\"document.doc\"\r\n  (keyup)=\"editDoc()\"\r\n  placeholder=\"Start typing...\"\r\n></textarea>\r\n<div>\r\n  <button class=\"Action1\" (click)=\"deleteDoc()\">Delete document</button>\r\n  <img\r\n    id=\"Speech\"\r\n    (click)=\"startDictation()\"\r\n    src=\"https://i.imgur.com/cHidSVu.gif\"\r\n  />\r\n  <button class=\"Action2\" (click)=\"saveDoc()\">Save document</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/document/document.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/document/document.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea {\n  position: fixed;\n  width: calc(100% - 235px);\n  height: 88.1%;\n  right: 0;\n  top: 0;\n  font-size: 18pt;\n  padding-top: 20px;\n  resize: none;\n  border: none;\n  padding: 20px 0px 20px 15px; }\n\ndiv {\n  position: fixed;\n  width: calc(100% - 220px);\n  height: 7%;\n  right: 0;\n  font-size: 18pt;\n  padding-top: 20px;\n  resize: none;\n  border: none;\n  padding-left: 0;\n  top: 91%; }\n\ndiv button {\n    padding: 16px 8px 6px 0px;\n    text-decoration: none;\n    font-size: 25px;\n    font-family: \"Roboto\", Tahoma, Geneva, Verdana, sans-serif;\n    color: #818181;\n    display: inline-block;\n    width: 48%; }\n\ndiv :hover {\n    color: black;\n    cursor: pointer; }\n\nimg {\n  height: 85%;\n  width: 4%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb2N1bWVudC9HOlxcU2FkXFxDb3Vyc2VfV29ya1xcc29ja2V0LWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcZG9jdW1lbnRcXGRvY3VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWU7RUFDZiwwQkFBeUI7RUFDekIsY0FBYTtFQUNiLFNBQVE7RUFDUixPQUFNO0VBQ04sZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsYUFBWTtFQUNaLGFBQVk7RUFDWiw0QkFBMkIsRUFDNUI7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLDBCQUF5QjtFQUN6QixXQUFVO0VBQ1YsU0FBUTtFQUNSLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLGFBQVk7RUFDWixhQUFZO0VBQ1osZ0JBQWU7RUFDZixTQUFRLEVBY1Q7O0FBeEJEO0lBWUksMEJBQXlCO0lBQ3pCLHNCQUFxQjtJQUNyQixnQkFBZTtJQUNmLDJEQUEwRDtJQUMxRCxlQUFjO0lBQ2Qsc0JBQXFCO0lBQ3JCLFdBQVUsRUFDWDs7QUFuQkg7SUFxQkksYUFBWTtJQUNaLGdCQUFlLEVBQ2hCOztBQUVIO0VBQ0UsWUFBVztFQUNYLFVBQVMsRUFDViIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9jdW1lbnQvZG9jdW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZXh0YXJlYSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMzVweCk7XHJcbiAgaGVpZ2h0OiA4OC4xJTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgZm9udC1zaXplOiAxOHB0O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMjBweCAwcHggMjBweCAxNXB4O1xyXG59XHJcbmRpdiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMjBweCk7XHJcbiAgaGVpZ2h0OiA3JTtcclxuICByaWdodDogMDtcclxuICBmb250LXNpemU6IDE4cHQ7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgdG9wOiA5MSU7XHJcbiAgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDE2cHggOHB4IDZweCAwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzgxODE4MTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA0OCU7XHJcbiAgfVxyXG4gIDpob3ZlciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcbmltZyB7XHJcbiAgaGVpZ2h0OiA4NSU7XHJcbiAgd2lkdGg6IDQlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/document/document.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/document/document.component.ts ***!
  \***********************************************************/
/*! exports provided: DocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentComponent", function() { return DocumentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_document_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/document.service */ "./src/app/services/document.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(documentService) {
        this.documentService = documentService;
    }
    DocumentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._docSub = this.documentService.currentDocument
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])({
            id: "",
            doc: "Select an existing document or create a new one to get started",
        }))
            .subscribe(function (document) { return (_this.document = document); });
    };
    DocumentComponent.prototype.ngOnDestroy = function () {
        this._docSub.unsubscribe();
    };
    DocumentComponent.prototype.editDoc = function () {
        this.documentService.editDocument(this.document);
    };
    DocumentComponent.prototype.saveDoc = function () {
        this.documentService.saveDocument(this.document.id, this.document.doc);
    };
    DocumentComponent.prototype.deleteDoc = function () {
        this.documentService.deleteDocument(this.document);
    };
    DocumentComponent.prototype.startDictation = function () {
        this.documentService.addDoc(this.document);
        this.documentService.editDocument(this.document);
    };
    DocumentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-document",
            template: __webpack_require__(/*! ./document.component.html */ "./src/app/components/document/document.component.html"),
            styles: [__webpack_require__(/*! ./document.component.scss */ "./src/app/components/document/document.component.scss")],
        }),
        __metadata("design:paramtypes", [src_app_services_document_service__WEBPACK_IMPORTED_MODULE_1__["DocumentService"]])
    ], DocumentComponent);
    return DocumentComponent;
}());



/***/ }),

/***/ "./src/app/services/document.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/document.service.ts ***!
  \**********************************************/
/*! exports provided: DocumentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentService", function() { return DocumentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var webkitSpeechRecognition = window.webkitSpeechRecognition;
var DocumentService = /** @class */ (function () {
    function DocumentService(socket) {
        this.socket = socket;
        this.currentDocument = this.socket.fromEvent("document");
        this.documents = this.socket.fromEvent("documents");
    }
    DocumentService.prototype.saveDocument = function (name, text) {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a
            .post("https://limitless-hollows-40293.herokuapp.com/docs/add", {
            name: name,
            text: text,
        })
            .then(function (res) { return console.log(res.data); })
            .catch(function (error) { return console.log(error.message); });
    };
    DocumentService.prototype.deleteDocument = function (doc) {
        this.socket.emit("deleteDoc", doc);
        axios__WEBPACK_IMPORTED_MODULE_2___default.a
            .delete("https://limitless-hollows-40293.herokuapp.com/docs/" + doc.id)
            .then(function (resp) { return console.log(resp.data); })
            .catch(function (error) { return console.log(error.message); });
    };
    DocumentService.prototype.getDocument = function (id) {
        this.socket.emit("getDoc", id);
    };
    DocumentService.prototype.newDocument = function () {
        this.socket.emit("addDoc", { id: this.docId(), doc: "" });
    };
    DocumentService.prototype.getDocs = function (doc) {
        this.socket.emit("addDoc", { id: doc.name, doc: doc.text });
    };
    DocumentService.prototype.editDocument = function (document) {
        this.socket.emit("editDoc", document);
    };
    DocumentService.prototype.addDoc = function (doc) {
        if (window.hasOwnProperty("webkitSpeechRecognition")) {
            var recognition = new webkitSpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = "uk-UA";
            recognition.start();
            recognition.onresult = function (e) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        doc.doc += e.results[0][0].transcript;
                        recognition.stop();
                        return [2 /*return*/];
                    });
                });
            };
            recognition.onerror = function () {
                recognition.stop();
            };
        }
    };
    DocumentService.prototype.docId = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    DocumentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"]])
    ], DocumentService);
    return DocumentService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Sad\Course_Work\socket-app\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map