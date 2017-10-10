webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\r\n    margin-bottom : 10px;\r\n}\r\n.mat-mini-fab{\r\n    margin: 28px 0px 0px 10px;\r\n}\r\n.answer{\r\n    margin : 7px 0 0px 53px;\r\n}\r\n.mat-raised-button{\r\n    margin-top: 20px;\r\n}\r\n.underline{\r\n    text-decoration: underline;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<mat-toolbar color=\"primary\">My App</mat-toolbar>\r\n<div class=\"row\">\r\n\r\n  <!--question card dynamically created  -->\r\n<div class=\"col-md-6\">\r\n  <div *ngFor=\"let card of cards; let i= index\" >    \r\n    <app-create-card [cardNumber]=\"i+1\" (currentCardNumber)=\"removeCard($event)\"></app-create-card>  \r\n  </div>\r\n  <button mat-raised-button color=\"accent\" (click)=\"addAnotherCard()\">Add Another</button>\r\n</div>\r\n\r\n<!-- Finall question answer result -->\r\n<div class=\"col-md-6 well\">\r\n  <div class=\"col-md-offset-3 col-md-8\">\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Enter Doctor Name\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Enter Hospital Name\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Specialist\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Enter Question\">\r\n  </mat-form-field>\r\n</div>\r\n<h3 style=\"text-align:center\">Created Question & Answer list</h3>   \r\n\r\n<div *ngFor=\"let data of outputData; let i=index\">\r\n  <pre class=\"col-md-10\">{{i+1}})&nbsp;<strong>{{data.question}}?</strong><p class=\"answer\">{{data.answer}}</p>\r\n    <code class=\"underline\">Sub Question Answers</code>\r\n    <div *ngFor=\"let subquestion of data.subQuestionAnswer; let i=index\">\r\n      <strong>{{i+1}})&nbsp;{{subquestion.question}}?</strong>\r\n      <p class=\"answer\">{{subquestion.answer}}</p>\r\n    </div>\r\n  </pre>\r\n  <button type=\"button\" mat-mini-fab color=\"warn\" class=\"col-md-2\" (click)=\"removeQuestion(i)\">\r\n    <mat-icon class=\"md-24\" aria-label=\"\">remove</mat-icon>\r\n  </button>\r\n</div>\r\n<button *ngIf=\"outputData[0]\" class=\"col-md-3 col-md-offset-10\" mat-raised-button color=\"accent\">Submit</button> \r\n </div>\r\n \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_fb, _store) {
        this._fb = _fb;
        this._store = _store;
        this.currentCard = 1;
        this.cards = [this.currentCard];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._store.select('form').subscribe(function (data) {
            console.log(data);
            _this.outputData = data;
        });
    };
    AppComponent.prototype.addAnotherCard = function () {
        this.currentCard += 1;
        this.cards.push(this.currentCard);
    };
    AppComponent.prototype.removeQuestion = function (i) {
        this._store.dispatch({
            type: 'REMOVE QUESTION',
            payload: i
        });
    };
    AppComponent.prototype.removeCard = function (e) {
        this.cards.splice(e - 1, 1);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_card_create_card_component__ = __webpack_require__("../../../../../src/app/create-card/create-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_store__ = __webpack_require__("../../../../../src/core/store.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__create_card_create_card_component__["a" /* CreateCardComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__ngrx_store__["b" /* StoreModule */].provideStore({ form: __WEBPACK_IMPORTED_MODULE_8__core_store__["a" /* FormReducer */] }),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatGridListModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/create-card/create-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".question{\r\n    width : 80%;\r\n    margin-left: 10%;\r\n}\r\n.mat-radio-button {\r\n    margin-left: 60px;\r\n}\r\n.mat-card-actions{\r\n    width: 100px;\r\n    margin : 0 0 0 auto;\r\n}\r\n\r\n.mat-card{\r\n    background-color: lightgray;\r\n    margin: 20px 0 20px;\r\n}\r\n.mat-mini-fab{\r\n    position : relative;\r\n    top : 35px;\r\n}\r\n.mat-checkbox{\r\n    margin-left :30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-card/create-card.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title>QUESTION {{cardNumber}}</mat-card-title>\r\n  </mat-card-header>\r\n\r\n  <form [formGroup]=\"surveyForm\" (ngSubmit)=\"save(surveyForm)\">\r\n    <mat-card-content>\r\n      1\r\n          <mat-form-field  class=\"row question\">\r\n            <input matInput placeholder=\"Enter Question\"  formControlName=\"question\">\r\n          </mat-form-field>    \r\n          <mat-radio-group formControlName=\"answer\" class=\"row\">\r\n            <mat-radio-button value=\"Yes\">Yes</mat-radio-button>\r\n            <mat-radio-button value=\"No\">No</mat-radio-button>\r\n            <mat-checkbox  (click)=\"answerField = !answerField\">Others</mat-checkbox>\r\n            <mat-form-field *ngIf=\"answerField\">  \r\n              <input matInput placeholder=\"Enter Answer\" formControlName=\"answer\"> \r\n            </mat-form-field>\r\n          </mat-radio-group>\r\n          <div formArrayName=\"subQuestionAnswer\"> \r\n            <div *ngFor=\"let question of surveyForm['controls'].subQuestionAnswer['controls']; let i=index\">\r\n              {{i+2}}\r\n              <div [formGroupName]=\"i\">\r\n                <div class=\"row\">\r\n                <mat-form-field class=\"question\">\r\n                    <input matInput placeholder=\"Enter Question\" formControlName=\"question\"> \r\n                   \r\n                  </mat-form-field>\r\n                  <button type=\"button\" mat-mini-fab color=\"warn\" (click)=\"removeSubQuestion(i)\">\r\n                      <mat-icon class=\"md-24\" aria-label=\"Example icon-button with a heart icon\">remove</mat-icon>\r\n                    </button>\r\n                  </div>\r\n                  <mat-radio-group formControlName=\"answer\" class=\"row\">\r\n                      <mat-radio-button value=\"Yes\">Yes</mat-radio-button>\r\n                      <mat-radio-button value=\"No\">No</mat-radio-button>\r\n                      <mat-checkbox (click)=\"answerField = !answerField\">Others</mat-checkbox>\r\n                      <mat-form-field *ngIf=\"answerField\">  \r\n                          <input matInput placeholder=\"Enter Answer\" formControlName=\"answer\"> \r\n                        </mat-form-field>\r\n                  </mat-radio-group>\r\n                \r\n               \r\n              </div>\r\n            </div>\r\n          </div>\r\n         \r\n    </mat-card-content>\r\n    <button type=\"button\" mat-mini-fab color=\"primary\" (click)=\"addSubQuestion()\">\r\n      <mat-icon class=\"md-24\" aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n    </button>\r\n    <mat-card-actions>\r\n      <button type=\"submit\"  mat-raised-button color=\"accent\">Save</button>\r\n    </mat-card-actions>\r\n       \r\n  </form>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/create-card/create-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateCardComponent = (function () {
    function CreateCardComponent(_fb, _store) {
        this._fb = _fb;
        this._store = _store;
        this.currentCardNumber = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.answerField = false;
    }
    CreateCardComponent.prototype.ngOnInit = function () {
        this.surveyForm = this._fb.group({
            name: [''],
            question: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required]],
            answer: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            subQuestionAnswer: this._fb.array([])
        });
    };
    CreateCardComponent.prototype.addSubQuestion = function () {
        var control = this.surveyForm.controls['subQuestionAnswer'];
        var addQuestion = this._fb.group({
            question: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            answer: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required]
        });
        control.push(addQuestion);
    };
    CreateCardComponent.prototype.removeSubQuestion = function (i) {
        var control = this.surveyForm.controls['subQuestionAnswer'];
        control.removeAt(i);
    };
    CreateCardComponent.prototype.addAnswerField = function (i) {
    };
    CreateCardComponent.prototype.save = function (form) {
        console.log(form.value);
        this._store.dispatch({
            type: 'ADD QUESTION',
            payload: form.value
        });
        console.log(this.cardNumber);
        this.currentCardNumber.emit(this.cardNumber);
    };
    return CreateCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], CreateCardComponent.prototype, "cardNumber", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _a || Object)
], CreateCardComponent.prototype, "currentCardNumber", void 0);
CreateCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-create-card',
        template: __webpack_require__("../../../../../src/app/create-card/create-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/create-card/create-card.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]) === "function" && _c || Object])
], CreateCardComponent);

var _a, _b, _c;
//# sourceMappingURL=create-card.component.js.map

/***/ }),

/***/ "../../../../../src/core/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = FormReducer;
function FormReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'ADD QUESTION':
            return state.concat([action.payload]);
        case 'REMOVE QUESTION':
            state = state.filter(function (array, index) {
                if (index !== action.payload) {
                    return true;
                }
                else {
                    return false;
                }
            });
            return state.slice();
        case 'Update Question':
        default:
            return state;
    }
}
//# sourceMappingURL=store.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map