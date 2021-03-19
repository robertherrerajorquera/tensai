function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./contacto/contacto.component */
    "./src/app/contacto/contacto.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/home"];
    };

    var _c1 = function _c1() {
      return ["active"];
    };

    var _c2 = function _c2() {
      return ["/corteplasma"];
    };

    var _c3 = function _c3() {
      return ["/fabricacion"];
    };

    var _c4 = function _c4() {
      return ["/implementacion"];
    };

    var _c5 = function _c5() {
      return ["/impresion"];
    };

    var _c6 = function _c6() {
      return ["/dise\xF1o"];
    };

    var _c7 = function _c7() {
      return ["/bastidores"];
    };

    var _c8 = function _c8() {
      return ["/standpublicitario"];
    };

    var _c9 = function _c9() {
      return ["/nosotros"];
    };

    var _c10 = function _c10() {
      return ["/contacto"];
    };

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(contactoComponent) {
        _classCallCheck(this, AppComponent);

        this.contactoComponent = contactoComponent;
        this.title = 'Tensai';
        this.contacto = null;
        this.conta = {
          name: null,
          lastname: null,
          correo: null,
          tel: null,
          coti: null
        };
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "mensaje",
        value: function mensaje() {
          this.contactoComponent.agregar(this.conta).subscribe(function (datos) {
            // tslint:disable-next-line:no-string-literal
            if (datos['resultado'] === 'OK') {
              // tslint:disable-next-line:no-string-literal
              alert(datos['mensaje']);
            } else {
              alert('datos no enviados');
            }
          });
        }
      }, {
        key: "hayRegistros",
        value: function hayRegistros() {
          return true;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_1__["ContactoComponent"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 43,
      vars: 44,
      consts: [[1, "navbar", "navbar-expand-lg", "pt-1", "border-bottom", "pb-1", "sticky-top"], [1, "navbar-brand", "ml-2", "nav-link", "icon-bor", "pb-0", "pt-0", "mt-0", "mb-0", 3, "routerLink", "routerLinkActive"], ["src", "../assets/logoG.png", "alt", "", 1, "p-0", "m-0"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "icon-bor", "p-0"], [1, "navbar-toggler-icon", "oran-let"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], [1, "nav-link", "icon-bor", "pb-1", "pt-1", 3, "routerLink", "routerLinkActive"], [1, "sr-only"], [1, "nav-item", "dropdown", "mt-0"], ["data-toggle", "dropdown", "href", "#", "role", "button", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "icon-bor", "pb-1", "pt-1"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu", "borderr", "pb-0", "pt-0", "mt-0"], [1, "nav-link", "icon-bor", "text-s1", "pt-1", "pb-1", 3, "routerLink", "routerLinkActive"], [1, "nav-link", "icon-bor", "text-s1", "pb-1", "pt-1", 3, "routerLink", "routerLinkActive"], [1, "dropdown-divider", "mt-0", "mb-0"], [1, "dropdown-menu", "border0", "pb-0", "pt-0", "mt-0"], [1, "nav-item"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u2630");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Servicios ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Corte Plasma ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Fabricacion ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Implementacion ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Impresion ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Dise\xF1o ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Trabajos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Bastidores ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Stand Publicitario ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Nosotros ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Contacto ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c0))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c2))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c3))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c4))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c5))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c6))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c7))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c8))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c9))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c10))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c1));
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["nav[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\nli[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.icon-bor[_ngcontent-%COMP%] {\n  color: #2442a5 !important;\n}\n\n.icon-bor[_ngcontent-%COMP%]:hover {\n  color: #f36d14 !important;\n}\n\n.text-s1[_ngcontent-%COMP%]:hover {\n  text-shadow: 1px 1px #d94c2b;\n}\n\n.border0[_ngcontent-%COMP%] {\n  border: 0px;\n  box-shadow: 1px 1px #d53e26;\n  border-radius: 1px;\n}\n\n.borderr[_ngcontent-%COMP%] {\n  border: 0px;\n  border-right: 1px solid #d53e26;\n  border-bottom: 1px solid #d53e26;\n  border-radius: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JlcnRoZXJyZXJhL0Rlc2t0b3AvQW5ndWxhci90ZW5zYWkvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDSSxzQkFsQkk7QUNDUjs7QURtQkE7RUFDSSxnQkFBQTtBQ2hCSjs7QURrQkE7RUFDSSx5QkFBQTtBQ2ZKOztBRGtCQTtFQUNJLHlCQUFBO0FDZko7O0FEbUJBO0VBQ0ksNEJBQUE7QUNoQko7O0FEa0JBO0VBQ0ksV0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNmSjs7QURpQkE7RUFDSSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDZEoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiR3aGl0ZTogI2ZmZjtcbiRncmlzOiByZ2JhKDMyLCAzMiwgMzYsIDAuNzMzKTtcbiRibHVlYjogcmdiKDM2LCA2NiwgMTY1KTtcbiRibHVlbDogcmdiKDM2LCA4NiwgMTc5KTtcbiRicm93bjogcmdiYSgxMjgsIDAsIDAsIDAuNzE5KTtcbiR0cmFuc3A6IHJnYmEoMjU1LDI1NSwyNTUsMC4wKTtcbiRibGFjazogIzAwMDtcblxuJHJlZDE6IHJnYigyMDUsMjgsMzUpO1xuJG9yYW4xOiByZ2IoMjEzLDYyLDM4KTtcbiRvcmFuMjogcmdiKDIxNyw3Niw0Myk7XG4keWVsbDE6IHJnYigyMzAsMTQyLDQ4KTsgXG4keWVsbDI6IHJnYigyNTAsMjEwLDU5KTtcbiRyZWQyOiByZ2IoMjA0LDQwLDUwKTtcblxuJG9yYW5nZTogcmdiKDI0MywgMTA5LCAyMCk7XG5cbm5hdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xufVxubGkge1xuICAgIGxpc3Qtc3R5bGU6bm9uZTtcbn1cbi5pY29uLWJvcntcbiAgICBjb2xvcjogJGJsdWViICFpbXBvcnRhbnQ7XG4gICBcbn1cbi5pY29uLWJvcjpob3ZlcntcbiAgICBjb2xvcjokb3JhbmdlICFpbXBvcnRhbnQ7XG4gICBcbn1cblxuLnRleHQtczE6aG92ZXJ7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggJG9yYW4yO1xufVxuLmJvcmRlcjB7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAkb3JhbjE7XG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xufVxuLmJvcmRlcnJ7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJG9yYW4xO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkb3JhbjE7XG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xufSIsIm5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmljb24tYm9yIHtcbiAgY29sb3I6ICMyNDQyYTUgIWltcG9ydGFudDtcbn1cblxuLmljb24tYm9yOmhvdmVyIHtcbiAgY29sb3I6ICNmMzZkMTQgIWltcG9ydGFudDtcbn1cblxuLnRleHQtczE6aG92ZXIge1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAjZDk0YzJiO1xufVxuXG4uYm9yZGVyMCB7XG4gIGJvcmRlcjogMHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4ICNkNTNlMjY7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbn1cblxuLmJvcmRlcnIge1xuICBib3JkZXI6IDBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Q1M2UyNjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNTNlMjY7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_1__["ContactoComponent"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _bastidores_bastidores_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./bastidores/bastidores.component */
    "./src/app/bastidores/bastidores.component.ts");
    /* harmony import */


    var _disenio_disenio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./disenio/disenio.component */
    "./src/app/disenio/disenio.component.ts");
    /* harmony import */


    var _corteplasma_corteplasma_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./corteplasma/corteplasma.component */
    "./src/app/corteplasma/corteplasma.component.ts");
    /* harmony import */


    var _fabricacion_fabricacion_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./fabricacion/fabricacion.component */
    "./src/app/fabricacion/fabricacion.component.ts");
    /* harmony import */


    var _implementacion_implementacion_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./implementacion/implementacion.component */
    "./src/app/implementacion/implementacion.component.ts");
    /* harmony import */


    var _impresion_impresion_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./impresion/impresion.component */
    "./src/app/impresion/impresion.component.ts");
    /* harmony import */


    var _stand_stand_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./stand/stand.component */
    "./src/app/stand/stand.component.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./nosotros/nosotros.component */
    "./src/app/nosotros/nosotros.component.ts");
    /* harmony import */


    var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./contacto/contacto.component */
    "./src/app/contacto/contacto.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_app_routing__WEBPACK_IMPORTED_MODULE_4__["appRoutingProviders"], {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_7__["HashLocationStrategy"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_routing__WEBPACK_IMPORTED_MODULE_4__["routing"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _bastidores_bastidores_component__WEBPACK_IMPORTED_MODULE_11__["BastidoresComponent"], _disenio_disenio_component__WEBPACK_IMPORTED_MODULE_12__["DisenioComponent"], _corteplasma_corteplasma_component__WEBPACK_IMPORTED_MODULE_13__["CorteplasmaComponent"], _fabricacion_fabricacion_component__WEBPACK_IMPORTED_MODULE_14__["FabricacionComponent"], _implementacion_implementacion_component__WEBPACK_IMPORTED_MODULE_15__["ImplementacionComponent"], _impresion_impresion_component__WEBPACK_IMPORTED_MODULE_16__["ImpresionComponent"], _stand_stand_component__WEBPACK_IMPORTED_MODULE_17__["StandComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_18__["ErrorComponent"], _nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_19__["NosotrosComponent"], _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_20__["ContactoComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _bastidores_bastidores_component__WEBPACK_IMPORTED_MODULE_11__["BastidoresComponent"], _disenio_disenio_component__WEBPACK_IMPORTED_MODULE_12__["DisenioComponent"], _corteplasma_corteplasma_component__WEBPACK_IMPORTED_MODULE_13__["CorteplasmaComponent"], _fabricacion_fabricacion_component__WEBPACK_IMPORTED_MODULE_14__["FabricacionComponent"], _implementacion_implementacion_component__WEBPACK_IMPORTED_MODULE_15__["ImplementacionComponent"], _impresion_impresion_component__WEBPACK_IMPORTED_MODULE_16__["ImpresionComponent"], _stand_stand_component__WEBPACK_IMPORTED_MODULE_17__["StandComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_18__["ErrorComponent"], _nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_19__["NosotrosComponent"], _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_20__["ContactoComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_routing__WEBPACK_IMPORTED_MODULE_4__["routing"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]],
          providers: [_app_routing__WEBPACK_IMPORTED_MODULE_4__["appRoutingProviders"], {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_7__["HashLocationStrategy"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! exports provided: appRoutingProviders, routing */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function () {
      return appRoutingProviders;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routing", function () {
      return routing;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _corteplasma_corteplasma_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./corteplasma/corteplasma.component */
    "./src/app/corteplasma/corteplasma.component.ts");
    /* harmony import */


    var _fabricacion_fabricacion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./fabricacion/fabricacion.component */
    "./src/app/fabricacion/fabricacion.component.ts");
    /* harmony import */


    var _implementacion_implementacion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./implementacion/implementacion.component */
    "./src/app/implementacion/implementacion.component.ts");
    /* harmony import */


    var _impresion_impresion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./impresion/impresion.component */
    "./src/app/impresion/impresion.component.ts");
    /* harmony import */


    var _disenio_disenio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./disenio/disenio.component */
    "./src/app/disenio/disenio.component.ts");
    /* harmony import */


    var _bastidores_bastidores_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./bastidores/bastidores.component */
    "./src/app/bastidores/bastidores.component.ts");
    /* harmony import */


    var _stand_stand_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./stand/stand.component */
    "./src/app/stand/stand.component.ts");
    /* harmony import */


    var _nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./nosotros/nosotros.component */
    "./src/app/nosotros/nosotros.component.ts");
    /* harmony import */


    var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./contacto/contacto.component */
    "./src/app/contacto/contacto.component.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts"); // importar componentes
    // array de rutas


    var appRoutes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }, {
      path: 'corteplasma',
      component: _corteplasma_corteplasma_component__WEBPACK_IMPORTED_MODULE_2__["CorteplasmaComponent"]
    }, {
      path: 'fabricacion',
      component: _fabricacion_fabricacion_component__WEBPACK_IMPORTED_MODULE_3__["FabricacionComponent"]
    }, {
      path: 'implementacion',
      component: _implementacion_implementacion_component__WEBPACK_IMPORTED_MODULE_4__["ImplementacionComponent"]
    }, {
      path: 'impresion',
      component: _impresion_impresion_component__WEBPACK_IMPORTED_MODULE_5__["ImpresionComponent"]
    }, {
      path: 'diseño',
      component: _disenio_disenio_component__WEBPACK_IMPORTED_MODULE_6__["DisenioComponent"]
    }, {
      path: 'bastidores',
      component: _bastidores_bastidores_component__WEBPACK_IMPORTED_MODULE_7__["BastidoresComponent"]
    }, {
      path: 'standpublicitario',
      component: _stand_stand_component__WEBPACK_IMPORTED_MODULE_8__["StandComponent"]
    }, {
      path: 'nosotros',
      component: _nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_9__["NosotrosComponent"]
    }, {
      path: 'contacto',
      component: _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_10__["ContactoComponent"]
    }, {
      path: '**',
      component: _error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"]
    }]; // exportar modulo del router

    var appRoutingProviders = [];

    var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);
    /***/

  },

  /***/
  "./src/app/bastidores/bastidores.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/bastidores/bastidores.component.ts ***!
    \****************************************************/

  /*! exports provided: BastidoresComponent */

  /***/
  function srcAppBastidoresBastidoresComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BastidoresComponent", function () {
      return BastidoresComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var BastidoresComponent =
    /*#__PURE__*/
    function () {
      function BastidoresComponent() {
        _classCallCheck(this, BastidoresComponent);
      }

      _createClass(BastidoresComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BastidoresComponent;
    }();

    BastidoresComponent.ɵfac = function BastidoresComponent_Factory(t) {
      return new (t || BastidoresComponent)();
    };

    BastidoresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BastidoresComponent,
      selectors: [["app-bastidores"]],
      decls: 17,
      vars: 0,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-4", "bg-blue"], ["src", "../../assets/portafolio/IMG-20170429-WA0017.jpg", "alt", "bastidor puma", 1, "cont-img", "cont-img-r", "mb-3", "mt-3", "ml-3"], [1, "col-sm-8", "bg-blue"], [1, "cl-wt"], [1, "font-3", "cl-wt"], [1, "triangle", "bg-blue"], [1, "col-sm-12", "m-0", "d-flex", "row", "d-wrap", "justify-content-center", "pt-5", "pb-3"], [1, "col-sm-3", "card", "d-flex", "ml-3", "mt-3", "border-0"], ["id", "1", "src", "../../assets/trabajos/bastidores/1502983180963.jpg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por", 3, "ngClass"], ["id", "1", "src", "../../assets/trabajos/bastidores/1503318432219.jpg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por", 3, "ngClass"], ["id", "1", "src", "../../assets/trabajos/bastidores/1561640139843.jpg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por", 3, "ngClass"]],
      template: function BastidoresComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Bastidores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Los bastidores publicitarios son publicidad est\xE1tica usada principalmente para cubrir muros y separar ambientes, habitualmente visten gr\xE1ficas art\xEDsticas decorativas, por esto mismo es que nos encargamos de crear lo mejor en bastidores, para que el hambiente que desees lograr no solo se vea bonito, sino que tambien demuestre lo que quiere la empresa. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".bg-blue[_ngcontent-%COMP%] {\n  background-color: #2a61da;\n}\n\n.cl-wt[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.triangle[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  width: 0;\n  height: 0px;\n  border-top: 50px solid #2a61da;\n  border-left: 80px solid white;\n  border-right: 80px solid white;\n  border-bottom: 0px solid blue;\n}\n\n.cont-img[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 270px;\n  padding: 0px 0px 0px 0px;\n}\n\n.cont-img-r[_ngcontent-%COMP%] {\n  padding: 0px 2px 2px 0px;\n  box-shadow: 10px 10px #e62d28;\n}\n\n.cont-img-l[_ngcontent-%COMP%] {\n  padding: 0px 0px 2px 2px;\n  box-shadow: -10px 10px #e62d28;\n}\n\n.card-por[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 4px 4px #cd1c23;\n}\n\n@media (max-width: 700px) {\n  .cont-img[_ngcontent-%COMP%] {\n    height: 150px;\n    width: 220px;\n    padding: 0px 0px 0px 0px;\n  }\n}\n\n@media (max-width: 600px) {\n  .cont-img[_ngcontent-%COMP%] {\n    height: 130px;\n    width: 200px;\n    padding: 0px 0px 0px 0px;\n  }\n}\n\n@media (max-width: 500px) {\n  .cont-img[_ngcontent-%COMP%] {\n    height: 90px;\n    width: 160px;\n    padding: 0px 0px 0px 0px;\n  }\n}\n\n@media (max-width: 400px) {\n  .cont-img[_ngcontent-%COMP%] {\n    height: 60px;\n    width: 130px;\n    padding: 0px 0px 0px 0px;\n  }\n}\n\n.si[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.308);\n  \n  outline: none;\n  \n  display: block;\n}\n\n.no[_ngcontent-%COMP%] {\n  \n  display: none;\n  \n  position: fixed;\n  z-index: 999;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  top: 0;\n  left: 0;\n}\n\n.shi[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.nho[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JlcnRoZXJyZXJhL0Rlc2t0b3AvQW5ndWxhci90ZW5zYWkvc3JjL2FwcC9iYXN0aWRvcmVzL2Jhc3RpZG9yZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Jhc3RpZG9yZXMvYmFzdGlkb3Jlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQTtFQUNJLHlCQVBHO0FDSlA7O0FEYUE7RUFDSSxZQVRDO0FDREw7O0FEWUE7RUFDSSxpQkFBQTtFQUNDLFFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7QUNUTDs7QURjQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUNYSjs7QURjQTtFQUNJLHdCQUFBO0VBQ0EsNkJBQUE7QUNYSjs7QURhQTtFQUNJLHdCQUFBO0VBQ0EsOEJBQUE7QUNWSjs7QURhQTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7QUNWSjs7QURjQTtFQUVJO0lBQ0ksYUFBQTtJQUNBLFlBQUE7SUFDQSx3QkFBQTtFQ1pOO0FBQ0Y7O0FEaUJBO0VBRUk7SUFDSSxhQUFBO0lBQ0EsWUFBQTtJQUNBLHdCQUFBO0VDaEJOO0FBQ0Y7O0FEb0JBO0VBRUk7SUFDSSxZQUFBO0lBQ0EsWUFBQTtJQUNBLHdCQUFBO0VDbkJOO0FBQ0Y7O0FEc0JBO0VBRUk7SUFDSSxZQUFBO0lBQ0EsWUFBQTtJQUNBLHdCQUFBO0VDckJOO0FBQ0Y7O0FEd0JBO0VBRUksWUFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLG9DQUFBO0VBQ0gsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ3ZCRDs7QUR5QkE7RUFDSSxnQ0FBQTtFQUNILGFBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FDdEJEOztBRHlCQTtFQUNJLGFBQUE7QUN0Qko7O0FEd0JBO0VBQ0ksY0FBQTtBQ3JCSiIsImZpbGUiOiJzcmMvYXBwL2Jhc3RpZG9yZXMvYmFzdGlkb3Jlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRyZWQxOiByZ2IoMjA1LDI4LDM1KTtcbiRvcmFuMTogcmdiKDIxMyw2MiwzOCk7XG4kb3JhbjI6IHJnYigyMTcsNzYsNDMpO1xuJHllbGwxOiByZ2IoMjMwLDE0Miw0OCk7IFxuJHllbGwyOiByZ2IoMjUwLDIxMCw1OSk7XG4kcmVkMjogcmdiKDIwNCw0MCw1MCk7XG4kYmx1ZTogcmdiKDQyLCA5NywgMjE4KTtcbiR3dDogcmdiKDI1NSwyNTUsMjU1KTtcblxuJG9yYW5nZTogcmdiKDI0MywgMTA5LCAyMCk7XG5cblxuLmJnLWJsdWV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG59XG4uY2wtd3R7XG4gICAgY29sb3I6ICR3dDtcbn1cbi50cmlhbmdsZXtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgd2lkdGg6IDA7XG4gICAgIGhlaWdodDogMHB4O1xuICAgICBib3JkZXItdG9wOiA1MHB4IHNvbGlkICRibHVlO1xuICAgICBib3JkZXItbGVmdDogODBweCBzb2xpZCB3aGl0ZTtcbiAgICAgYm9yZGVyLXJpZ2h0OiA4MHB4IHNvbGlkIHdoaXRlO1xuICAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgYmx1ZTtcbn1cblxuXG5cbi5jb250LWltZ3tcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAyNzBweDtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbi5jb250LWltZy1ye1xuICAgIHBhZGRpbmc6IDBweCAycHggMnB4IDBweDtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggcmdiKDIzMCw0NSw0MCk7XG59XG4uY29udC1pbWctbHtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDJweCAycHg7XG4gICAgYm94LXNoYWRvdzogLTEwcHggMTBweCByZ2IoMjMwLDQ1LDQwKTtcbn1cblxuLmNhcmQtcG9ye1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3gtc2hhZG93OiA0cHggNHB4ICRyZWQxO1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkgeyBcbiAgIFxuICAgIC5jb250LWltZ3tcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gICAgfVxuXG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7IFxuICAgXG4gICAgLmNvbnQtaW1ne1xuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbiAgICB9XG5cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7IFxuICAgXG4gICAgLmNvbnQtaW1ne1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICAgIH1cblxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7IFxuICAgXG4gICAgLmNvbnQtaW1ne1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICAgIH1cblxufVxuLnNpe1xuXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMDgpO1xuICAgIC8qKiBSZW1vdmUgZGVmYXVsdCBicm93c2VyIG91dGxpbmUgKi9cblx0b3V0bGluZTogbm9uZTtcblx0LyoqIFVuaGlkZSBsaWdodGJveCAqKi9cblx0ZGlzcGxheTogYmxvY2s7XG59XG4ubm97ICBcbiAgICAvKiogRGVmYXVsdCBsaWdodGJveCB0byBoaWRkZW4gKi9cblx0ZGlzcGxheTogbm9uZTtcblx0LyoqIFBvc2l0aW9uIGFuZCBzdHlsZSAqL1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHotaW5kZXg6IDk5OTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cbn1cbi5zaGl7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5uaG97XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4iLCIuYmctYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTYxZGE7XG59XG5cbi5jbC13dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRyaWFuZ2xlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyLXRvcDogNTBweCBzb2xpZCAjMmE2MWRhO1xuICBib3JkZXItbGVmdDogODBweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJpZ2h0OiA4MHB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAwcHggc29saWQgYmx1ZTtcbn1cblxuLmNvbnQtaW1nIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDI3MHB4O1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbi5jb250LWltZy1yIHtcbiAgcGFkZGluZzogMHB4IDJweCAycHggMHB4O1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggI2U2MmQyODtcbn1cblxuLmNvbnQtaW1nLWwge1xuICBwYWRkaW5nOiAwcHggMHB4IDJweCAycHg7XG4gIGJveC1zaGFkb3c6IC0xMHB4IDEwcHggI2U2MmQyODtcbn1cblxuLmNhcmQtcG9yIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiA0cHggNHB4ICNjZDFjMjM7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAuY29udC1pbWcge1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250LWltZyB7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnQtaW1nIHtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5jb250LWltZyB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gIH1cbn1cbi5zaSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMDgpO1xuICAvKiogUmVtb3ZlIGRlZmF1bHQgYnJvd3NlciBvdXRsaW5lICovXG4gIG91dGxpbmU6IG5vbmU7XG4gIC8qKiBVbmhpZGUgbGlnaHRib3ggKiovXG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubm8ge1xuICAvKiogRGVmYXVsdCBsaWdodGJveCB0byBoaWRkZW4gKi9cbiAgZGlzcGxheTogbm9uZTtcbiAgLyoqIFBvc2l0aW9uIGFuZCBzdHlsZSAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5zaGkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubmhvIHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BastidoresComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bastidores',
          templateUrl: './bastidores.component.html',
          styleUrls: ['./bastidores.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contacto/contacto.component.ts":
  /*!************************************************!*\
    !*** ./src/app/contacto/contacto.component.ts ***!
    \************************************************/

  /*! exports provided: ContactoComponent */

  /***/
  function srcAppContactoContactoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactoComponent", function () {
      return ContactoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ContactoComponent_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El nombre es obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ContactoComponent_span_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El apellido es obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ContactoComponent_span_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El nombre es obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ContactoComponent_span_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El nombre es obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ContactoComponent_span_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El nombre es obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ContactoComponent =
    /*#__PURE__*/
    function () {
      function ContactoComponent(http) {
        _classCallCheck(this, ContactoComponent);

        this.name = '';
        this.lastname = '';
        this.email = '';
        this.tel = '';
        this.message = '';
        this.http = http;
      }

      _createClass(ContactoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Start php via the built in server: $ php -S localhost:8000
          this.endpoint = 'http://www.tensairetail.cl/mensaje/';
        }
      }, {
        key: "sendEmail",
        value: function sendEmail() {
          var postVars = {
            name: this.name,
            lastname: this.lastname,
            email: this.email,
            tel: this.tel,
            message: this.message
          }; // You may also want to check the response. But again, let's keep it simple.

          this.http.post("".concat(this.endpoint, "mensaje.php"), postVars).subscribe(function (response) {
            return console.log(response);
          }, function (response) {
            return console.log(response);
          });
        }
      }, {
        key: "agregar",
        value: function agregar(articulo) {
          return this.http.post('', JSON.stringify(articulo));
        }
      }]);

      return ContactoComponent;
    }();

    ContactoComponent.ɵfac = function ContactoComponent_Factory(t) {
      return new (t || ContactoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ContactoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactoComponent,
      selectors: [["app-contacto"]],
      decls: 85,
      vars: 11,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-6", "pl-5", "mb-2"], [1, "card", "p-0", "m-0", "cont-img-r"], [1, "card-header", "bg-dark", "font-2", "text-white", "pb-0", "mb-2"], [1, "float-left"], [1, "card-text", "pl-2", "pr-2"], ["novalidate", "", 1, "container-fluid"], ["forma", "ngForm"], [1, "form-group", "col-sm-12"], ["for", "name", 1, "float-left", "ml-2"], ["type", "text", "id", "name", "name", "name", "required", "", "minlength", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nm", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["for", "lastname", 1, "float-left", "ml-2"], ["type", "text", "id", "lastname", "name", "lastname", "required", "", "minlength", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], ["lnm", "ngModel"], ["for", "email", 1, "float-left", "ml-2"], ["type", "email", "id", "email", "name", "email", "required", "", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["em", "ngModel"], ["for", "tel", 1, "float-left", "ml-2"], ["type", "tel", "id", "tel", "name", "tel", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["tl", "ngModel"], ["for", "message", 1, "float-left", "ml-2"], ["id", "message", "cols", "30", "rows", "4", "name", "message", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ct", "ngModel"], [1, "form-group", "col-sm-12", "mt-2"], [1, "form-control", "mb-1", "mt-4", "mr-5", 3, "disabled", "click"], [1, "col-sm-6", "mt-5", "mr-0"], [1, "container-fluid", "p-0", "m-0"], [1, "col-sm-12"], [1, "float-left", "ml-4", "font-1", "pb-2", "mb-2"], [1, "col-sm-6", "p-0", "m-0", "float-sm-left"], [1, "no-li"], ["id", "bk", 1, "font-1"], ["id", "bk", 1, "no-li", "font-2", "pt-0"], ["href", "tel:+56232478311", 1, "rd"], ["id", "bk", 1, "no-li", "font-2", "mt-0"], ["href", "tel:+562 32478303", 1, "rd"], [1, "no-li", "pt-2"], [1, "font-1"], ["id", "bk", 1, "font-2"], ["href", "https://api.whatsapp.com/send?phone=56942605298&text=hola,%20me%20gustar\xEDa%20cotizar%20uno%20de%20sus%20productos,%20en%20el%20area%20de%20retail.", "target", "_blank", 1, "rd"], [1, "col-sm-6", "p-0", "m-0", "float-sm-right"], [1, "font-2"], ["href", "#", 1, "rd"], [1, "col-sm-12", "p-0", "m-0"], ["id", "bk", 1, "no-li"], [1, "text-danger"]],
      template: function ContactoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "COTIZAR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nombre : \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactoComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ContactoComponent_span_15_Template, 2, 0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Apellido :\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactoComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.lastname = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ContactoComponent_span_21_Template, 2, 0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Correo :\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactoComponent_Template_input_ngModelChange_25_listener($event) {
            return ctx.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ContactoComponent_span_27_Template, 2, 0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Telefono :\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactoComponent_Template_input_ngModelChange_31_listener($event) {
            return ctx.tel = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ContactoComponent_span_33_Template, 2, 0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Cotizacion :\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "textarea", 24, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactoComponent_Template_textarea_ngModelChange_37_listener($event) {
            return ctx.message = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ContactoComponent_span_39_Template, 2, 0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactoComponent_Template_button_click_41_listener() {
            return ctx.sendEmail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Cotizar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " CONTACTO ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Numeros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "+562 32478311");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "+562 32478303");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " whatsapp ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "+56942605298");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "CORREOS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " ventas@tensairetail.cl");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Direccion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Chile, Santiago, Comuna de Padre Hurtado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.touched && !_r1.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lastname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.touched && !_r3.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.touched && !_r5.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.touched && !_r7.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.touched && !_r9.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"]],
      styles: ["textarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n\n.cont-img-r[_ngcontent-%COMP%] {\n  padding: 0px 2px 2px 0px;\n  box-shadow: 5px 5px rgba(32, 32, 32, 0.658);\n}\n\n.font-1[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n\n.font-2[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.font-3[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.no-li[_ngcontent-%COMP%] {\n  text-decoration: none;\n  list-style: none;\n}\n\n.rd[_ngcontent-%COMP%] {\n  color: #cd1c23;\n}\n\n.rd[_ngcontent-%COMP%]:hover {\n  color: #2a61da;\n}\n\na[_ngcontent-%COMP%]:link {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JlcnRoZXJyZXJhL0Rlc2t0b3AvQW5ndWxhci90ZW5zYWkvc3JjL2FwcC9jb250YWN0by9jb250YWN0by5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdG8vY29udGFjdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDSSxZQUFBO0FDVEo7O0FEV0E7RUFDSSx3QkFBQTtFQUNBLDJDQUFBO0FDUko7O0FEVUE7RUFDSSxlQUFBO0FDUEo7O0FEU0E7RUFDSSxlQUFBO0FDTko7O0FEUUE7RUFDSSxlQUFBO0FDTEo7O0FEUUE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0FDTEo7O0FET0E7RUFDSSxjQWhDRztBQzRCUDs7QURNQTtFQUNJLGNBN0JHO0FDMEJQOztBREtBO0VBRUEscUJBQUE7QUNIQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RvL2NvbnRhY3RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHJlZDE6IHJnYigyMDUsMjgsMzUpO1xuJG9yYW4xOiByZ2IoMjEzLDYyLDM4KTtcbiRvcmFuMjogcmdiKDIxNyw3Niw0Myk7XG4keWVsbDE6IHJnYigyMzAsMTQyLDQ4KTsgXG4keWVsbDI6IHJnYigyNTAsMjEwLDU5KTtcbiRyZWQyOiByZ2IoMjA0LDQwLDUwKTtcbiRibHVlOiByZ2IoNDIsIDk3LCAyMTgpO1xuXG4kb3JhbmdlOiByZ2IoMjQzLCAxMDksIDIwKTtcblxudGV4dGFyZWF7XG4gICAgcmVzaXplOiBub25lO1xufVxuLmNvbnQtaW1nLXJ7XG4gICAgcGFkZGluZzogMHB4IDJweCAycHggMHB4O1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggcmdiYSgzMiwgMzIsIDMyLCAwLjY1OCk7XG59XG4uZm9udC0xe1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbn1cbi5mb250LTJ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLmZvbnQtM3tcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5uby1saXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5yZHtcbiAgICBjb2xvcjogJHJlZDE7XG59XG4ucmQ6aG92ZXJ7XG4gICAgY29sb3I6ICRibHVlO1xufVxuYTpsaW5rXG57XG50ZXh0LWRlY29yYXRpb246bm9uZTtcbn0gIiwidGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG59XG5cbi5jb250LWltZy1yIHtcbiAgcGFkZGluZzogMHB4IDJweCAycHggMHB4O1xuICBib3gtc2hhZG93OiA1cHggNXB4IHJnYmEoMzIsIDMyLCAzMiwgMC42NTgpO1xufVxuXG4uZm9udC0xIHtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuXG4uZm9udC0yIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uZm9udC0zIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ubm8tbGkge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5yZCB7XG4gIGNvbG9yOiAjY2QxYzIzO1xufVxuXG4ucmQ6aG92ZXIge1xuICBjb2xvcjogIzJhNjFkYTtcbn1cblxuYTpsaW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */"]
    });
    ContactoComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ContactoComponent,
      factory: ContactoComponent.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contacto',
          templateUrl: './contacto.component.html',
          styleUrls: ['./contacto.component.scss']
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/corteplasma/corteplasma.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/corteplasma/corteplasma.component.ts ***!
    \******************************************************/

  /*! exports provided: CorteplasmaComponent */

  /***/
  function srcAppCorteplasmaCorteplasmaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CorteplasmaComponent", function () {
      return CorteplasmaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0, a1) {
      return {
        shi: a0,
        nho: a1
      };
    };

    var _c1 = function _c1(a0, a1) {
      return {
        si: a0,
        no: a1
      };
    };

    var CorteplasmaComponent =
    /*#__PURE__*/
    function () {
      function CorteplasmaComponent(config) {
        _classCallCheck(this, CorteplasmaComponent);

        this.estadoPositivo = false;
        config.interval = 2000;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = false;
      }

      _createClass(CorteplasmaComponent, [{
        key: "cambiaEstado",
        value: function cambiaEstado() {
          this.estadoPositivo = !this.estadoPositivo;
          alert('hola');
        }
      }, {
        key: "antiCambio",
        value: function antiCambio() {
          // tslint:disable-next-line:no-unused-expression
          this.estadoPositivo = false;
          alert('chao');
          this.img = this.img1;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CorteplasmaComponent;
    }();

    CorteplasmaComponent.ɵfac = function CorteplasmaComponent_Factory(t) {
      return new (t || CorteplasmaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]));
    };

    CorteplasmaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CorteplasmaComponent,
      selectors: [["app-corteplasma"]],
      decls: 20,
      vars: 17,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-4", "bg-blue"], ["src", "../../assets/fotos(1)/corteplasma.png", "alt", "corte plasma", 1, "cont-img", "cont-img-r", "mb-3", "mt-3", "ml-3"], [1, "col-sm-8", "bg-blue"], [1, "cl-wt"], [1, "font-3", "cl-wt"], [1, "triangle", "bg-blue"], [1, "col-sm-12", "m-0", "d-flex", "row", "d-wrap", "justify-content-center", "pt-5", "pb-3"], [1, "col-sm-3", "card", "d-flex", "ml-3", "mt-3", "border-0", 3, "click"], ["id", "1", "src", "../../assets/servicios/corteplasma/1563461359005.jpg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por", 3, "ngClass"], ["id", "2", "src", "../../assets/servicios/corteplasma/IMG_20190531_134924.jpg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por", 3, "ngClass"], ["id", "3", "src", "../../assets/servicios/corteplasma/IMG_20190911_134604.jpg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por", 3, "ngClass"], [3, "ngClass", "click"], [1, "text-success"], ["alt", "", 3, "src"]],
      template: function CorteplasmaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Corte Plasma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "En nuestra secci\xF3n de corte pl\xE1sma usted podra disfrutar del mejor servicio de corte o dise\xF1o para sus metales. Trabajando este con cortes perfectamente definido de hasta 5 mm, adem\xE1s de tratar sus cortes de la mejor forma posible ya que contamos con maquina y personal especializado propio para la creaci\xF3n y/o modificaci\xF3n de sus productos. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CorteplasmaComponent_Template_div_click_11_listener() {
            return ctx.cambiaEstado();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CorteplasmaComponent_Template_div_click_13_listener() {
            return ctx.cambiaEstado();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CorteplasmaComponent_Template_div_click_15_listener() {
            return ctx.cambiaEstado();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CorteplasmaComponent_Template_div_click_17_listener() {
            return ctx.antiCambio();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx.estadoPositivo, !ctx.estadoPositivo));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, ctx.estadoPositivo, !ctx.estadoPositivo));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c0, ctx.estadoPositivo, !ctx.estadoPositivo));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c1, ctx.estadoPositivo, !ctx.estadoPositivo));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../assets/servicios/corteplasma/", ctx.img1, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: [".bg-blue[_ngcontent-%COMP%] {\n  background-color: #2a61da;\n}\n\n.cl-wt[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.triangle[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  width: 0;\n  height: 0px;\n  border-top: 50px solid #2a61da;\n  border-left: 80px solid white;\n  border-right: 80px solid white;\n  border-bottom: 0px solid blue;\n}\n\n.cont-img[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 270px;\n  padding: 0px 0px 0px 0px;\n}\n\n.cont-img-r[_ngcontent-%COMP%] {\n  padding: 0px 2px 2px 0px;\n  box-shadow: 10px 10px #e62d28;\n}\n\n.cont-img-l[_ngcontent-%COMP%] {\n  padding: 0px 0px 2px 2px;\n  box-shadow: -10px 10px #e62d28;\n}\n\n.card-por[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 4px 4px #cd1c23;\n}\n\n@media (max-width: 700px) {\n  .cont-img[_ngcontent-%COMP%] {\n    height: 150px;\n    width: 220px;\n    padding: 0px 0px 0px 0px;\n  }\n}\n\n@media (max-width: 600px) {\n  .cont-img[_ngcontent-%COMP%] {\n    height: 130px;\n    width: 200px;\n    padding: 0px 0px 0px 0px;\n  }\n}\n\n@media (max-width: 500px) {\n  .cont-img[_ngcontent-%COMP%] {\n    height: 90px;\n    width: 160px;\n    padding: 0px 0px 0px 0px;\n  }\n}\n\n@media (max-width: 400px) {\n  .cont-img[_ngcontent-%COMP%] {\n    height: 60px;\n    width: 130px;\n    padding: 0px 0px 0px 0px;\n  }\n}\n\n.si[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.308);\n  \n  outline: none;\n  \n  display: block;\n}\n\n.no[_ngcontent-%COMP%] {\n  \n  display: none;\n  \n  position: fixed;\n  z-index: 999;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  top: 0;\n  left: 0;\n}\n\n.shi[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.nho[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JlcnRoZXJyZXJhL0Rlc2t0b3AvQW5ndWxhci90ZW5zYWkvc3JjL2FwcC9jb3J0ZXBsYXNtYS9jb3J0ZXBsYXNtYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29ydGVwbGFzbWEvY29ydGVwbGFzbWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFDSSx5QkFQRztBQ0pQOztBRGFBO0VBQ0ksWUFUQztBQ0RMOztBRFlBO0VBQ0ksaUJBQUE7RUFDQyxRQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0FDVEw7O0FEY0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FDWEo7O0FEY0E7RUFDSSx3QkFBQTtFQUNBLDZCQUFBO0FDWEo7O0FEYUE7RUFDSSx3QkFBQTtFQUNBLDhCQUFBO0FDVko7O0FEYUE7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0FDVko7O0FEY0E7RUFFSTtJQUNJLGFBQUE7SUFDQSxZQUFBO0lBQ0Esd0JBQUE7RUNaTjtBQUNGOztBRGlCQTtFQUVJO0lBQ0ksYUFBQTtJQUNBLFlBQUE7SUFDQSx3QkFBQTtFQ2hCTjtBQUNGOztBRG9CQTtFQUVJO0lBQ0ksWUFBQTtJQUNBLFlBQUE7SUFDQSx3QkFBQTtFQ25CTjtBQUNGOztBRHNCQTtFQUVJO0lBQ0ksWUFBQTtJQUNBLFlBQUE7SUFDQSx3QkFBQTtFQ3JCTjtBQUNGOztBRHdCQTtFQUVJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7RUFDQSxvQ0FBQTtFQUNILGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUN2QkQ7O0FEeUJBO0VBQ0ksZ0NBQUE7RUFDSCxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ3RCRDs7QUR5QkE7RUFDSSxhQUFBO0FDdEJKOztBRHdCQTtFQUNJLGNBQUE7QUNyQkoiLCJmaWxlIjoic3JjL2FwcC9jb3J0ZXBsYXNtYS9jb3J0ZXBsYXNtYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRyZWQxOiByZ2IoMjA1LDI4LDM1KTtcbiRvcmFuMTogcmdiKDIxMyw2MiwzOCk7XG4kb3JhbjI6IHJnYigyMTcsNzYsNDMpO1xuJHllbGwxOiByZ2IoMjMwLDE0Miw0OCk7IFxuJHllbGwyOiByZ2IoMjUwLDIxMCw1OSk7XG4kcmVkMjogcmdiKDIwNCw0MCw1MCk7XG4kYmx1ZTogcmdiKDQyLCA5NywgMjE4KTtcbiR3dDogcmdiKDI1NSwyNTUsMjU1KTtcblxuJG9yYW5nZTogcmdiKDI0MywgMTA5LCAyMCk7XG5cblxuLmJnLWJsdWV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG59XG4uY2wtd3R7XG4gICAgY29sb3I6ICR3dDtcbn1cbi50cmlhbmdsZXtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgd2lkdGg6IDA7XG4gICAgIGhlaWdodDogMHB4O1xuICAgICBib3JkZXItdG9wOiA1MHB4IHNvbGlkICRibHVlO1xuICAgICBib3JkZXItbGVmdDogODBweCBzb2xpZCB3aGl0ZTtcbiAgICAgYm9yZGVyLXJpZ2h0OiA4MHB4IHNvbGlkIHdoaXRlO1xuICAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgYmx1ZTtcbn1cblxuXG5cbi5jb250LWltZ3tcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAyNzBweDtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbi5jb250LWltZy1ye1xuICAgIHBhZGRpbmc6IDBweCAycHggMnB4IDBweDtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggcmdiKDIzMCw0NSw0MCk7XG59XG4uY29udC1pbWctbHtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDJweCAycHg7XG4gICAgYm94LXNoYWRvdzogLTEwcHggMTBweCByZ2IoMjMwLDQ1LDQwKTtcbn1cblxuLmNhcmQtcG9ye1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3gtc2hhZG93OiA0cHggNHB4ICRyZWQxO1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkgeyBcbiAgIFxuICAgIC5jb250LWltZ3tcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gICAgfVxuXG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7IFxuICAgXG4gICAgLmNvbnQtaW1ne1xuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbiAgICB9XG5cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7IFxuICAgXG4gICAgLmNvbnQtaW1ne1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICAgIH1cblxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7IFxuICAgXG4gICAgLmNvbnQtaW1ne1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICAgIH1cblxufVxuLnNpe1xuXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMDgpO1xuICAgIC8qKiBSZW1vdmUgZGVmYXVsdCBicm93c2VyIG91dGxpbmUgKi9cblx0b3V0bGluZTogbm9uZTtcblx0LyoqIFVuaGlkZSBsaWdodGJveCAqKi9cblx0ZGlzcGxheTogYmxvY2s7XG59XG4ubm97ICBcbiAgICAvKiogRGVmYXVsdCBsaWdodGJveCB0byBoaWRkZW4gKi9cblx0ZGlzcGxheTogbm9uZTtcblx0LyoqIFBvc2l0aW9uIGFuZCBzdHlsZSAqL1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHotaW5kZXg6IDk5OTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cbn1cbi5zaGl7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5uaG97XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4iLCIuYmctYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTYxZGE7XG59XG5cbi5jbC13dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRyaWFuZ2xlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyLXRvcDogNTBweCBzb2xpZCAjMmE2MWRhO1xuICBib3JkZXItbGVmdDogODBweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJpZ2h0OiA4MHB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAwcHggc29saWQgYmx1ZTtcbn1cblxuLmNvbnQtaW1nIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDI3MHB4O1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbi5jb250LWltZy1yIHtcbiAgcGFkZGluZzogMHB4IDJweCAycHggMHB4O1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggI2U2MmQyODtcbn1cblxuLmNvbnQtaW1nLWwge1xuICBwYWRkaW5nOiAwcHggMHB4IDJweCAycHg7XG4gIGJveC1zaGFkb3c6IC0xMHB4IDEwcHggI2U2MmQyODtcbn1cblxuLmNhcmQtcG9yIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiA0cHggNHB4ICNjZDFjMjM7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAuY29udC1pbWcge1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250LWltZyB7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnQtaW1nIHtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5jb250LWltZyB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gIH1cbn1cbi5zaSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMDgpO1xuICAvKiogUmVtb3ZlIGRlZmF1bHQgYnJvd3NlciBvdXRsaW5lICovXG4gIG91dGxpbmU6IG5vbmU7XG4gIC8qKiBVbmhpZGUgbGlnaHRib3ggKiovXG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubm8ge1xuICAvKiogRGVmYXVsdCBsaWdodGJveCB0byBoaWRkZW4gKi9cbiAgZGlzcGxheTogbm9uZTtcbiAgLyoqIFBvc2l0aW9uIGFuZCBzdHlsZSAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5zaGkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubmhvIHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CorteplasmaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-corteplasma',
          templateUrl: './corteplasma.component.html',
          styleUrls: ['./corteplasma.component.scss']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/disenio/disenio.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/disenio/disenio.component.ts ***!
    \**********************************************/

  /*! exports provided: DisenioComponent */

  /***/
  function srcAppDisenioDisenioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisenioComponent", function () {
      return DisenioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DisenioComponent =
    /*#__PURE__*/
    function () {
      function DisenioComponent() {
        _classCallCheck(this, DisenioComponent);
      }

      _createClass(DisenioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DisenioComponent;
    }();

    DisenioComponent.ɵfac = function DisenioComponent_Factory(t) {
      return new (t || DisenioComponent)();
    };

    DisenioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DisenioComponent,
      selectors: [["app-disenio"]],
      decls: 14,
      vars: 0,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-4", "bg-blue"], ["src", "../../assets/fotos(1)/muebleria con bodega1.png", "alt", "", 1, "cont-img", "cont-img-r", "mb-3", "mt-3", "ml-3"], [1, "col-sm-8", "bg-blue"], [1, "cl-wt"], [1, "font-3", "cl-wt"], [1, "triangle", "bg-blue"], [1, "col-sm-3", "card", "d-flex", "ml-3", "mt-3", "border-0"], ["id", "1", "src", "../../assets/servicios/diseno/MEDIDAS.jpg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por"], ["id", "1", "src", "../../assets/servicios/diseno/PARANTE 1.jpg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por"]],
      template: function DisenioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dise\xF1o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " En nuestra sala de especializada en impresi\xF3n contamos con personal instrudio y capacitado para dise\xF1ar lo que sea que usted necesite o tenga en mente, para solucionar sus dudas. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".bg-blue[_ngcontent-%COMP%] {\n  background-color: #2a61da;\n}\n\n.cl-wt[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.triangle[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  width: 0;\n  height: 0px;\n  border-top: 50px solid #2a61da;\n  border-left: 80px solid white;\n  border-right: 80px solid white;\n  border-bottom: 0px solid blue;\n}\n\n.cont-img[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 270px;\n  padding: 0px 0px 0px 0px;\n}\n\n.cont-img-r[_ngcontent-%COMP%] {\n  padding: 0px 2px 2px 0px;\n  box-shadow: 10px 10px #e62d28;\n}\n\n.cont-img-l[_ngcontent-%COMP%] {\n  padding: 0px 0px 2px 2px;\n  box-shadow: -10px 10px #e62d28;\n}\n\n.black[_ngcontent-%COMP%] {\n  background-color: #181818;\n}\n\n.bg-blue[_ngcontent-%COMP%] {\n  background-color: #2a61da;\n}\n\n.cl-wt[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.triangle[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  width: 0;\n  height: 0px;\n  border-top: 50px solid #2a61da;\n  border-left: 80px solid white;\n  border-right: 80px solid white;\n  border-bottom: 0px solid blue;\n}\n\n.cont-img[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 270px;\n  padding: 0px 0px 0px 0px;\n}\n\n.cont-img-r[_ngcontent-%COMP%] {\n  padding: 0px 2px 2px 0px;\n  box-shadow: 10px 10px #e62d28;\n}\n\n.cont-img-l[_ngcontent-%COMP%] {\n  padding: 0px 0px 2px 2px;\n  box-shadow: -10px 10px #e62d28;\n}\n\n.card-por[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 4px 4px #cd1c23;\n}\n\n@media (max-width: 700px) {\n  .cont-img[_ngcontent-%COMP%] {\n    height: 150px;\n    width: 220px;\n    padding: 0px 0px 0px 0px;\n  }\n}\n\n@media (max-width: 600px) {\n  .cont-img[_ngcontent-%COMP%] {\n    height: 130px;\n    width: 200px;\n    padding: 0px 0px 0px 0px;\n  }\n}\n\n@media (max-width: 500px) {\n  .cont-img[_ngcontent-%COMP%] {\n    height: 90px;\n    width: 160px;\n    padding: 0px 0px 0px 0px;\n  }\n}\n\n@media (max-width: 400px) {\n  .cont-img[_ngcontent-%COMP%] {\n    height: 60px;\n    width: 130px;\n    padding: 0px 0px 0px 0px;\n  }\n}\n\n.si[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.308);\n  \n  outline: none;\n  \n  display: block;\n}\n\n.no[_ngcontent-%COMP%] {\n  \n  display: none;\n  \n  position: fixed;\n  z-index: 999;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  top: 0;\n  left: 0;\n}\n\n.shi[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.nho[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JlcnRoZXJyZXJhL0Rlc2t0b3AvQW5ndWxhci90ZW5zYWkvc3JjL2FwcC9kaXNlbmlvL2Rpc2VuaW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rpc2VuaW8vZGlzZW5pby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQTtFQUNJLHlCQVJHO0FDSlA7O0FEY0E7RUFDSSxZQVZDO0FDREw7O0FEYUE7RUFDSSxpQkFBQTtFQUNDLFFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7QUNWTDs7QURlQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUNaSjs7QURjQTtFQUNJLHdCQUFBO0VBQ0EsNkJBQUE7QUNYSjs7QURhQTtFQUNJLHdCQUFBO0VBQ0EsOEJBQUE7QUNWSjs7QURZQTtFQUNJLHlCQUFBO0FDVEo7O0FEd0JBO0VBQ0kseUJBUEc7QUNkUDs7QUR1QkE7RUFDSSxZQVRDO0FDWEw7O0FEc0JBO0VBQ0ksaUJBQUE7RUFDQyxRQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0FDbkJMOztBRHdCQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUNyQko7O0FEd0JBO0VBQ0ksd0JBQUE7RUFDQSw2QkFBQTtBQ3JCSjs7QUR1QkE7RUFDSSx3QkFBQTtFQUNBLDhCQUFBO0FDcEJKOztBRHVCQTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7QUNwQko7O0FEd0JBO0VBRUk7SUFDSSxhQUFBO0lBQ0EsWUFBQTtJQUNBLHdCQUFBO0VDdEJOO0FBQ0Y7O0FEMkJBO0VBRUk7SUFDSSxhQUFBO0lBQ0EsWUFBQTtJQUNBLHdCQUFBO0VDMUJOO0FBQ0Y7O0FEOEJBO0VBRUk7SUFDSSxZQUFBO0lBQ0EsWUFBQTtJQUNBLHdCQUFBO0VDN0JOO0FBQ0Y7O0FEZ0NBO0VBRUk7SUFDSSxZQUFBO0lBQ0EsWUFBQTtJQUNBLHdCQUFBO0VDL0JOO0FBQ0Y7O0FEa0NBO0VBRUksWUFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLG9DQUFBO0VBQ0gsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ2pDRDs7QURtQ0E7RUFDSSxnQ0FBQTtFQUNILGFBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FDaENEOztBRG1DQTtFQUNJLGFBQUE7QUNoQ0o7O0FEa0NBO0VBQ0ksY0FBQTtBQy9CSiIsImZpbGUiOiJzcmMvYXBwL2Rpc2VuaW8vZGlzZW5pby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRyZWQxOiByZ2IoMjA1LDI4LDM1KTtcbiRvcmFuMTogcmdiKDIxMyw2MiwzOCk7XG4kb3JhbjI6IHJnYigyMTcsNzYsNDMpO1xuJHllbGwxOiByZ2IoMjMwLDE0Miw0OCk7IFxuJHllbGwyOiByZ2IoMjUwLDIxMCw1OSk7XG4kcmVkMjogcmdiKDIwNCw0MCw1MCk7XG4kYmx1ZTogcmdiKDQyLCA5NywgMjE4KTtcbiR3dDogcmdiKDI1NSwyNTUsMjU1KTtcblxuJG9yYW5nZTogcmdiKDI0MywgMTA5LCAyMCk7XG5cblxuXG4uYmctYmx1ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbn1cbi5jbC13dHtcbiAgICBjb2xvcjogJHd0O1xufVxuLnRyaWFuZ2xle1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICB3aWR0aDogMDtcbiAgICAgaGVpZ2h0OiAwcHg7XG4gICAgIGJvcmRlci10b3A6IDUwcHggc29saWQgJGJsdWU7XG4gICAgIGJvcmRlci1sZWZ0OiA4MHB4IHNvbGlkIHdoaXRlO1xuICAgICBib3JkZXItcmlnaHQ6IDgwcHggc29saWQgd2hpdGU7XG4gICAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCBibHVlO1xufVxuXG5cblxuLmNvbnQtaW1ne1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDI3MHB4O1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbn1cbi5jb250LWltZy1ye1xuICAgIHBhZGRpbmc6IDBweCAycHggMnB4IDBweDtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggcmdiKDIzMCw0NSw0MCk7XG59XG4uY29udC1pbWctbHtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDJweCAycHg7XG4gICAgYm94LXNoYWRvdzogLTEwcHggMTBweCByZ2IoMjMwLDQ1LDQwKTtcbn1cbi5ibGFja3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xufVxuXG4kcmVkMTogcmdiKDIwNSwyOCwzNSk7XG4kb3JhbjE6IHJnYigyMTMsNjIsMzgpO1xuJG9yYW4yOiByZ2IoMjE3LDc2LDQzKTtcbiR5ZWxsMTogcmdiKDIzMCwxNDIsNDgpOyBcbiR5ZWxsMjogcmdiKDI1MCwyMTAsNTkpO1xuJHJlZDI6IHJnYigyMDQsNDAsNTApO1xuJGJsdWU6IHJnYig0MiwgOTcsIDIxOCk7XG4kd3Q6IHJnYigyNTUsMjU1LDI1NSk7XG5cbiRvcmFuZ2U6IHJnYigyNDMsIDEwOSwgMjApO1xuXG5cbi5iZy1ibHVle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xufVxuLmNsLXd0e1xuICAgIGNvbG9yOiAkd3Q7XG59XG4udHJpYW5nbGV7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgIHdpZHRoOiAwO1xuICAgICBoZWlnaHQ6IDBweDtcbiAgICAgYm9yZGVyLXRvcDogNTBweCBzb2xpZCAkYmx1ZTtcbiAgICAgYm9yZGVyLWxlZnQ6IDgwcHggc29saWQgd2hpdGU7XG4gICAgIGJvcmRlci1yaWdodDogODBweCBzb2xpZCB3aGl0ZTtcbiAgICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIGJsdWU7XG59XG5cblxuXG4uY29udC1pbWd7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMjcwcHg7XG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xufVxuXG4uY29udC1pbWctcntcbiAgICBwYWRkaW5nOiAwcHggMnB4IDJweCAwcHg7XG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IHJnYigyMzAsNDUsNDApO1xufVxuLmNvbnQtaW1nLWx7XG4gICAgcGFkZGluZzogMHB4IDBweCAycHggMnB4O1xuICAgIGJveC1zaGFkb3c6IC0xMHB4IDEwcHggcmdiKDIzMCw0NSw0MCk7XG59XG5cbi5jYXJkLXBvcntcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAkcmVkMTtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHsgXG4gICBcbiAgICAuY29udC1pbWd7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICAgIH1cblxufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkgeyBcbiAgIFxuICAgIC5jb250LWltZ3tcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gICAgfVxuXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkgeyBcbiAgIFxuICAgIC5jb250LWltZ3tcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbiAgICB9XG5cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkgeyBcbiAgIFxuICAgIC5jb250LWltZ3tcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbiAgICB9XG5cbn1cbi5zaXtcblxuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzA4KTtcbiAgICAvKiogUmVtb3ZlIGRlZmF1bHQgYnJvd3NlciBvdXRsaW5lICovXG5cdG91dGxpbmU6IG5vbmU7XG5cdC8qKiBVbmhpZGUgbGlnaHRib3ggKiovXG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuLm5veyAgXG4gICAgLyoqIERlZmF1bHQgbGlnaHRib3ggdG8gaGlkZGVuICovXG5cdGRpc3BsYXk6IG5vbmU7XG5cdC8qKiBQb3NpdGlvbiBhbmQgc3R5bGUgKi9cblx0cG9zaXRpb246IGZpeGVkO1xuXHR6LWluZGV4OiA5OTk7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXG59XG4uc2hpe1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4ubmhve1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuIiwiLmJnLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE2MWRhO1xufVxuXG4uY2wtd3Qge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cmlhbmdsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwcHg7XG4gIGJvcmRlci10b3A6IDUwcHggc29saWQgIzJhNjFkYTtcbiAgYm9yZGVyLWxlZnQ6IDgwcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yaWdodDogODBweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIGJsdWU7XG59XG5cbi5jb250LWltZyB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAyNzBweDtcbiAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xufVxuXG4uY29udC1pbWctciB7XG4gIHBhZGRpbmc6IDBweCAycHggMnB4IDBweDtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4ICNlNjJkMjg7XG59XG5cbi5jb250LWltZy1sIHtcbiAgcGFkZGluZzogMHB4IDBweCAycHggMnB4O1xuICBib3gtc2hhZG93OiAtMTBweCAxMHB4ICNlNjJkMjg7XG59XG5cbi5ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODE4MTg7XG59XG5cbi5iZy1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhNjFkYTtcbn1cblxuLmNsLXd0IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHJpYW5nbGUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMHB4O1xuICBib3JkZXItdG9wOiA1MHB4IHNvbGlkICMyYTYxZGE7XG4gIGJvcmRlci1sZWZ0OiA4MHB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmlnaHQ6IDgwcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCBibHVlO1xufVxuXG4uY29udC1pbWcge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjcwcHg7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbn1cblxuLmNvbnQtaW1nLXIge1xuICBwYWRkaW5nOiAwcHggMnB4IDJweCAwcHg7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAjZTYyZDI4O1xufVxuXG4uY29udC1pbWctbCB7XG4gIHBhZGRpbmc6IDBweCAwcHggMnB4IDJweDtcbiAgYm94LXNoYWRvdzogLTEwcHggMTBweCAjZTYyZDI4O1xufVxuXG4uY2FyZC1wb3Ige1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggI2NkMWMyMztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5jb250LWltZyB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMjIwcHg7XG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnQtaW1nIHtcbiAgICBoZWlnaHQ6IDEzMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuY29udC1pbWcge1xuICAgIGhlaWdodDogOTBweDtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLmNvbnQtaW1nIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbiAgfVxufVxuLnNpIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMwOCk7XG4gIC8qKiBSZW1vdmUgZGVmYXVsdCBicm93c2VyIG91dGxpbmUgKi9cbiAgb3V0bGluZTogbm9uZTtcbiAgLyoqIFVuaGlkZSBsaWdodGJveCAqKi9cbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5ubyB7XG4gIC8qKiBEZWZhdWx0IGxpZ2h0Ym94IHRvIGhpZGRlbiAqL1xuICBkaXNwbGF5OiBub25lO1xuICAvKiogUG9zaXRpb24gYW5kIHN0eWxlICovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLnNoaSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5uaG8ge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisenioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-disenio',
          templateUrl: './disenio.component.html',
          styleUrls: ['./disenio.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/error/error.component.ts":
  /*!******************************************!*\
    !*** ./src/app/error/error.component.ts ***!
    \******************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ErrorComponent =
    /*#__PURE__*/
    function () {
      function ErrorComponent() {
        _classCallCheck(this, ErrorComponent);
      }

      _createClass(ErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorComponent;
    }();

    ErrorComponent.ɵfac = function ErrorComponent_Factory(t) {
      return new (t || ErrorComponent)();
    };

    ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ErrorComponent,
      selectors: [["app-error"]],
      decls: 6,
      vars: 0,
      consts: [[1, "jumbotron"], [1, "error", "ft-gx"], [1, "error", "ft-mid"]],
      template: function ErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error 404!!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "No se ha encontrado la p\xE1gina disponible.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".error[_ngcontent-%COMP%] {\n  color: rgba(128, 0, 0, 0.719);\n}\n\n.ft-gx[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n\n.ft-mid[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n\n.ft-min[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JlcnRoZXJyZXJhL0Rlc2t0b3AvQW5ndWxhci90ZW5zYWkvc3JjL2FwcC9lcnJvci9lcnJvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFDSSw2QkFURTtBQ0ZOOztBRGFBO0VBQ0MsZUFSTTtBQ0ZQOztBRFlBO0VBQ0ksZUFWSTtBQ0NSOztBRFdBO0VBQ0ksZUFaRTtBQ0lOIiwiZmlsZSI6InNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkd2hpdGU6ICNmZmY7XG4kZ3JpczogcmdiYSgxNywgMTcsIDE5LCAwLjcwNSk7XG4kYmx1ZWI6IHJnYigzNiwgNjYsIDE2NSk7XG4kYmx1ZWw6IHJnYigzNiwgODYsIDE3OSk7XG4kcmVkOiByZ2JhKDEyOCwgMCwgMCwgMC43MTkpO1xuJHRyYW5zcDogcmdiYSgyNTUsMjU1LDI1NSwwLjApO1xuJG9yYW5nZTogcmdiKDI0MywgMTA5LCAyMCk7XG4kYmxhY2s6ICMwMDA7XG4kZnRneDogNTBweDtcbiRmdG1pZDogMzVweDtcbiRmdG06IDEycHg7XG5cbi5lcnJvcntcbiAgICBjb2xvcjogJHJlZDtcbn1cbi5mdC1neHtcbiBmb250LXNpemU6ICRmdGd4O1xufVxuLmZ0LW1pZHtcbiAgICBmb250LXNpemU6ICRmdG1pZDtcbn1cbi5mdC1taW57XG4gICAgZm9udC1zaXplOiAkZnRtO1xufVxuIiwiLmVycm9yIHtcbiAgY29sb3I6IHJnYmEoMTI4LCAwLCAwLCAwLjcxOSk7XG59XG5cbi5mdC1neCB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuLmZ0LW1pZCB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLmZ0LW1pbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-error',
          templateUrl: './error.component.html',
          styleUrls: ['./error.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/fabricacion/fabricacion.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/fabricacion/fabricacion.component.ts ***!
    \******************************************************/

  /*! exports provided: FabricacionComponent */

  /***/
  function srcAppFabricacionFabricacionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FabricacionComponent", function () {
      return FabricacionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return {};
    };

    var FabricacionComponent =
    /*#__PURE__*/
    function () {
      function FabricacionComponent() {
        _classCallCheck(this, FabricacionComponent);
      }

      _createClass(FabricacionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FabricacionComponent;
    }();

    FabricacionComponent.ɵfac = function FabricacionComponent_Factory(t) {
      return new (t || FabricacionComponent)();
    };

    FabricacionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FabricacionComponent,
      selectors: [["app-fabricacion"]],
      decls: 21,
      vars: 10,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-4", "bg-blue"], ["src", "../../assets/portafolio/1501250022425.jpg", "alt", "Fabricacion cartel Jack Daniels", 1, "cont-img", "cont-img-r", "mb-3", "mt-3", "ml-3"], [1, "col-sm-8", "bg-blue"], [1, "cl-wt"], [1, "font-3", "cl-wt"], [1, "triangle", "bg-blue"], [1, "col-sm-12", "m-0", "d-flex", "row", "d-wrap", "justify-content-center", "pt-5", "pb-3"], [1, "col-sm-3", "card", "d-flex", "ml-3", "mt-3", "border-0"], ["id", "1", "src", "../../assets/servicios/fabricacion/1561559659308.jpg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por", 3, "ngClass"], ["id", "2", "src", "../../assets/servicios/fabricacion/IMG_20190911_134604.jpg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por", 3, "ngClass"], ["id", "3", "src", "../../assets/servicios/fabricacion/1566573899034.jpg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por", 3, "ngClass"], ["id", "3", "src", "../../assets/servicios/fabricacion/1564685653938.jpg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por", 3, "ngClass"], ["id", "3", "src", "../../assets/servicios/fabricacion/1564118596232.jpg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por", 3, "ngClass"]],
      template: function FabricacionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Fabricaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Somos especialistas fabricando cualquier proyecto que necesite o tenga en mente, ya que contamos con todo la instrumental, material y profesinales necesarios para cumplir con las mejores espectativas. Destacando entre cualquier otra empresa debido a que nosotros si contamos con \"taller\" propio para hacer y deshacer como queramos sin perdidas de tiempo ni dineros innecesarias, reduciendo sus costos, sus tiempos de producci\xF3n y mejorando la calidad que otros lugares podr\xEDan ofrecerle. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".bg-blue[_ngcontent-%COMP%] {\n  background-color: #2a61da;\n}\n\n.cl-wt[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.triangle[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  width: 0;\n  height: 0px;\n  border-top: 50px solid #2a61da;\n  border-left: 80px solid white;\n  border-right: 80px solid white;\n  border-bottom: 0px solid blue;\n}\n\n.cont-img[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 270px;\n  padding: 0px 0px 0px 0px;\n}\n\n.cont-img-r[_ngcontent-%COMP%] {\n  padding: 0px 2px 2px 0px;\n  box-shadow: 10px 10px #e62d28;\n}\n\n.cont-img-l[_ngcontent-%COMP%] {\n  padding: 0px 0px 2px 2px;\n  box-shadow: -10px 10px #e62d28;\n}\n\n.card-por[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 4px 4px #cd1c23;\n}\n\n@media (max-width: 700px) {\n  .cont-img[_ngcontent-%COMP%] {\n    height: 150px;\n    width: 220px;\n    padding: 0px 0px 0px 0px;\n  }\n}\n\n@media (max-width: 600px) {\n  .cont-img[_ngcontent-%COMP%] {\n    height: 130px;\n    width: 200px;\n    padding: 0px 0px 0px 0px;\n  }\n}\n\n@media (max-width: 500px) {\n  .cont-img[_ngcontent-%COMP%] {\n    height: 90px;\n    width: 160px;\n    padding: 0px 0px 0px 0px;\n  }\n}\n\n@media (max-width: 400px) {\n  .cont-img[_ngcontent-%COMP%] {\n    height: 60px;\n    width: 130px;\n    padding: 0px 0px 0px 0px;\n  }\n}\n\n.si[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.308);\n  \n  outline: none;\n  \n  display: block;\n}\n\n.no[_ngcontent-%COMP%] {\n  \n  display: none;\n  \n  position: fixed;\n  z-index: 999;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  top: 0;\n  left: 0;\n}\n\n.shi[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.nho[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JlcnRoZXJyZXJhL0Rlc2t0b3AvQW5ndWxhci90ZW5zYWkvc3JjL2FwcC9mYWJyaWNhY2lvbi9mYWJyaWNhY2lvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmFicmljYWNpb24vZmFicmljYWNpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFDSSx5QkFQRztBQ0pQOztBRGFBO0VBQ0ksWUFUQztBQ0RMOztBRFlBO0VBQ0ksaUJBQUE7RUFDQyxRQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0FDVEw7O0FEY0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FDWEo7O0FEY0E7RUFDSSx3QkFBQTtFQUNBLDZCQUFBO0FDWEo7O0FEYUE7RUFDSSx3QkFBQTtFQUNBLDhCQUFBO0FDVko7O0FEYUE7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0FDVko7O0FEY0E7RUFFSTtJQUNJLGFBQUE7SUFDQSxZQUFBO0lBQ0Esd0JBQUE7RUNaTjtBQUNGOztBRGlCQTtFQUVJO0lBQ0ksYUFBQTtJQUNBLFlBQUE7SUFDQSx3QkFBQTtFQ2hCTjtBQUNGOztBRG9CQTtFQUVJO0lBQ0ksWUFBQTtJQUNBLFlBQUE7SUFDQSx3QkFBQTtFQ25CTjtBQUNGOztBRHNCQTtFQUVJO0lBQ0ksWUFBQTtJQUNBLFlBQUE7SUFDQSx3QkFBQTtFQ3JCTjtBQUNGOztBRHdCQTtFQUVJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7RUFDQSxvQ0FBQTtFQUNILGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUN2QkQ7O0FEeUJBO0VBQ0ksZ0NBQUE7RUFDSCxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ3RCRDs7QUR5QkE7RUFDSSxhQUFBO0FDdEJKOztBRHdCQTtFQUNJLGNBQUE7QUNyQkoiLCJmaWxlIjoic3JjL2FwcC9mYWJyaWNhY2lvbi9mYWJyaWNhY2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRyZWQxOiByZ2IoMjA1LDI4LDM1KTtcbiRvcmFuMTogcmdiKDIxMyw2MiwzOCk7XG4kb3JhbjI6IHJnYigyMTcsNzYsNDMpO1xuJHllbGwxOiByZ2IoMjMwLDE0Miw0OCk7IFxuJHllbGwyOiByZ2IoMjUwLDIxMCw1OSk7XG4kcmVkMjogcmdiKDIwNCw0MCw1MCk7XG4kYmx1ZTogcmdiKDQyLCA5NywgMjE4KTtcbiR3dDogcmdiKDI1NSwyNTUsMjU1KTtcblxuJG9yYW5nZTogcmdiKDI0MywgMTA5LCAyMCk7XG5cblxuLmJnLWJsdWV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG59XG4uY2wtd3R7XG4gICAgY29sb3I6ICR3dDtcbn1cbi50cmlhbmdsZXtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgd2lkdGg6IDA7XG4gICAgIGhlaWdodDogMHB4O1xuICAgICBib3JkZXItdG9wOiA1MHB4IHNvbGlkICRibHVlO1xuICAgICBib3JkZXItbGVmdDogODBweCBzb2xpZCB3aGl0ZTtcbiAgICAgYm9yZGVyLXJpZ2h0OiA4MHB4IHNvbGlkIHdoaXRlO1xuICAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgYmx1ZTtcbn1cblxuXG5cbi5jb250LWltZ3tcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAyNzBweDtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbi5jb250LWltZy1ye1xuICAgIHBhZGRpbmc6IDBweCAycHggMnB4IDBweDtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggcmdiKDIzMCw0NSw0MCk7XG59XG4uY29udC1pbWctbHtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDJweCAycHg7XG4gICAgYm94LXNoYWRvdzogLTEwcHggMTBweCByZ2IoMjMwLDQ1LDQwKTtcbn1cblxuLmNhcmQtcG9ye1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3gtc2hhZG93OiA0cHggNHB4ICRyZWQxO1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkgeyBcbiAgIFxuICAgIC5jb250LWltZ3tcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gICAgfVxuXG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7IFxuICAgXG4gICAgLmNvbnQtaW1ne1xuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbiAgICB9XG5cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7IFxuICAgXG4gICAgLmNvbnQtaW1ne1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICAgIH1cblxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7IFxuICAgXG4gICAgLmNvbnQtaW1ne1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICAgIH1cblxufVxuLnNpe1xuXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMDgpO1xuICAgIC8qKiBSZW1vdmUgZGVmYXVsdCBicm93c2VyIG91dGxpbmUgKi9cblx0b3V0bGluZTogbm9uZTtcblx0LyoqIFVuaGlkZSBsaWdodGJveCAqKi9cblx0ZGlzcGxheTogYmxvY2s7XG59XG4ubm97ICBcbiAgICAvKiogRGVmYXVsdCBsaWdodGJveCB0byBoaWRkZW4gKi9cblx0ZGlzcGxheTogbm9uZTtcblx0LyoqIFBvc2l0aW9uIGFuZCBzdHlsZSAqL1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHotaW5kZXg6IDk5OTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cbn1cbi5zaGl7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5uaG97XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4iLCIuYmctYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTYxZGE7XG59XG5cbi5jbC13dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRyaWFuZ2xlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyLXRvcDogNTBweCBzb2xpZCAjMmE2MWRhO1xuICBib3JkZXItbGVmdDogODBweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJpZ2h0OiA4MHB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAwcHggc29saWQgYmx1ZTtcbn1cblxuLmNvbnQtaW1nIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDI3MHB4O1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbi5jb250LWltZy1yIHtcbiAgcGFkZGluZzogMHB4IDJweCAycHggMHB4O1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggI2U2MmQyODtcbn1cblxuLmNvbnQtaW1nLWwge1xuICBwYWRkaW5nOiAwcHggMHB4IDJweCAycHg7XG4gIGJveC1zaGFkb3c6IC0xMHB4IDEwcHggI2U2MmQyODtcbn1cblxuLmNhcmQtcG9yIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiA0cHggNHB4ICNjZDFjMjM7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAuY29udC1pbWcge1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250LWltZyB7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnQtaW1nIHtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5jb250LWltZyB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gIH1cbn1cbi5zaSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMDgpO1xuICAvKiogUmVtb3ZlIGRlZmF1bHQgYnJvd3NlciBvdXRsaW5lICovXG4gIG91dGxpbmU6IG5vbmU7XG4gIC8qKiBVbmhpZGUgbGlnaHRib3ggKiovXG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubm8ge1xuICAvKiogRGVmYXVsdCBsaWdodGJveCB0byBoaWRkZW4gKi9cbiAgZGlzcGxheTogbm9uZTtcbiAgLyoqIFBvc2l0aW9uIGFuZCBzdHlsZSAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5zaGkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubmhvIHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FabricacionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fabricacion',
          templateUrl: './fabricacion.component.html',
          styleUrls: ['./fabricacion.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 145,
      vars: 0,
      consts: [["id", "inicio", 1, "container-fluid", "mt-0", "p-0"], ["id", "carouselExampleIndicators", "data-interval", "3000", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "bg-dark", "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1", 1, "bg-dark"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2", 1, "bg-dark"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "../../assets/corteplasma.JPG", "alt", "Estructura met\xE1lica estaci\xF3n de metro", 1, "d-block", "w-100", "h-100"], [1, "carousel-caption"], [1, "font-img", "pt-2", "pb-0"], [1, "font-titimg", "wt-shadow", "h-t"], [1, "carousel-item"], ["src", "../../assets/pintura1.JPG", "id", "bk", "alt", "motobomba instalada", 1, "d-block", "w-100", "h-100"], ["src", "../../assets/IMPRESION PUBLICITARIA.png", "id", "bk", "alt", "Third slide", 1, "d-block", "w-100", "h-100"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon", "bg-dark", "radius-maximus"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon", "bg-dark", "radius-maximus"], [1, "jumbotron"], [1, "font-1"], [1, "font-2"], ["href", "nosotros.html", "role", "button", 1, "btn", "btn-dark", "btn-nos"], ["id", "portafolio", 1, "container-fluid", "bg-white"], [1, "row"], [1, "col-sm-12", "pl-5", "pt-3", "font-1", "text-dark"], [1, "d-flex", "row", "d-wrap", "justify-content-center", "pt-5", "pb-3"], [1, "col-sm-3", "card", "d-flex", "ml-3", "mt-3", "border-0"], ["id", "1", "src", "../../assets/portafolio/1501250022425.jpg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por"], ["src", "../../assets/portafolio/ALMACEN LA FRANCESA.jpg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por"], ["src", "../../assets/portafolio/IMG-20160924-WA0000.jpg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por"], ["src", "../../assets/portafolio/IMG-20161006-WA0050.jpg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por"], ["src", "../../assets/portafolio/IMG-20161006-WA0052.jpg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por"], ["src", "../../assets/portafolio/IMG-20170123-WA0002.jpg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por"], ["src", "../../assets/portafolio/IMG-20170429-WA0017.jpg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por"], ["id", "quiensomos", 1, "container-fluid", "col-or"], ["data-av-animation", "slideInRight", 1, "row", "pt-3", "pb-5", "pl-5", "pr-5", "aniview"], [1, "col-sm-6", "font-1", "text-white"], [1, "col-sm-6", "text-white", "font-2"], ["id", "quehacemos", 1, "container-fluid", "pt-3", "pb-3", "bg-white", "text-dark"], ["data-av-animation", "fadeInUp", 1, "row", "pt-5", "pb-5", "pl-5", "pr-5", "aniview"], [1, "col-sm-6", "font-1", "text-dark"], [1, "font-2", "text-dark"], ["data-av-animation", "fadeInUp", 1, "row", "pt-5", "pb-5", "pl-5", "pr-5", "col-blu", "aniview"], [1, "col-sm-6"], [1, "font-tit"], [1, "col-sm-6", "d-flex", "justify-content-center"], ["src", "../../assets/fotos(1)/muebleria con bodega1.png", "alt", "", 1, "cont-img", "cont-img-r", "mb-1"], ["data-av-animation", "fadeInUp", 1, "row", "pt-5", "pb-5", "pl-5", "pr-5", "bg-light", "aniview"], ["src", "../../assets/fotos(1)/IMPRESION PUBLICITARIA.png", "alt", "", 1, "cont-img", "cont-img-l", "mb-1"], [1, "col-sm-6", "text-dark"], ["src", "../../assets/fotos(1)/corte l\xE1ser.png", "alt", "", 1, "cont-img", "cont-img-r", "mb-1"], ["src", "../../assets/fotos(1)/corte-example.jpg", "alt", "", 1, "cont-img", "cont-img-l", "mb-1"], [1, "col-sm-6", "text-dark", "font-1"], [1, "col-sm-6", "font-1"], ["src", "../../assets/fotos(1)/corteplasma.png", "alt", "", 1, "cont-img", "cont-img-r", "mb-1"], ["src", "../../assets/fotos(1)/sold-example.jpg", "alt", "", 1, "cont-img", "cont-img-l", "mb-1"], ["src", "../../assets/fotos(1)/pintura electrost\xE1tica.png", "alt", "", 1, "cont-img", "cont-img-r", "mb-1"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Se realiza servicio de corte plasma para cualquiera de sus productos o proyectos, los cuales son efectuados por un profesional en el \xE1rea dentro de nuestro empresa. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Corte Plasma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Contamos con un horno para pintura electrost\xE1tica propio de 8 metros de largo para pintar todo sus productos proyectos ya sean grandes, medianos, peque\xF1os. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Pintura Electrost\xE1tica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Impresion publicitaria con la mejor calidad para sus productos y servicios. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Impresion Publicitaria");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Nosotros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " En Tensai somos unos genios en nuestra \xE1rea, estamos comprometidos con la calidad de sus productos y servicios, dedicandonos a ser cada d\xEDa mejores y principalmente en el \xE1rea de dise\xF1o y fabricaci\xF3n relacionada al mundo del retail. Encontrando en este lugar todo lo relacionado con el retail, ya sea el dise\xF1o y/o fabricacion de un o muchos muebles para su marca, o cualquiera sea la publicidad que requiera para esta como lo son: gigantograf\xEDas, impresiones con aderencia, murales, carteles personalizados, muebles personalizados para la marca y\nmucho m\xE1s. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Nosotros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Portafolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Quien Somos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Somos una empresa familiar con mas de 15 a\xF1os de experiencia en el area de retail, publicidad, construccion y servicios relacionados con el agua como la instalacion de fosas septicas, estanques de agua y mas productos relacionados con el \xE1rea. Dominando cada uno de estas \xE1reas, con taller propio para crear, dise\xF1ar, fabricar o reparar cualquier tipo de producto con la mejor calidad del mercado. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Que Hacemos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Nuestro objetivo es fabricar, dise\xF1ar, crear un compromiso con la firma de ofrecer el mejor servicio y que exista un equilibrio economico, as\xED logrando enaltecer su marca. Somos capaces de ofrecer el mejor control del proyecto, antes, durante y hasta su implementacion a nivel nacional. Para as\xED potenciar la marca de nuestro clientes solidificando en el mercado. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Porque Elegirnos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Te ofrecemos garant\xEDa, calidad y compromiso logrando as\xED optimizar su presupuesto adem\xE1s de una estrategia personalizada para conocer tu necesidades por que nuestro equipo se destaca por ser un grupo unido, experimentado y en constante innovaci\xF3n, para sumar sinergia e incrementar sus ventas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h1", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Muebleria retail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Se fabrica y creamos la mejor muebleria retail para su empresa cumpliendo con la calidad de producto y servicio que tanto necesita. Exhibidores, bigboy, elaboracion de stand, intervencion lineal, islas, pedestales, cabeceras, gondolas, atriles porta precio, gancheras, revisteros, porta pancarta, atriles, porta menu. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h2", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Impresion publicitaria");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Contamos con el servicio de impresion publicitaria, como gigantograf\xEDas, stopper , flejeras, parantes, pendones y todo relacionado con el \xE1rea de impresion publicitaria, incluyendo ploteo y todo tipo de impresiones con grandes medidas, alta definicion o caracter\xEDsticas especiales. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h2", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Corte laser");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Tenemos para usted el servicio de corte laser que permite cortar acr\xEDlico, madera, sintra y grabados con la forma, tama\xF1o y/o diametro que necesite. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h2", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Corte router");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Si necesita un corte ya sea en madera, acrilico o polimero limpio y de calidad, nuestro servicio de corte router es lo que necesita como: tallado, grabado de se\xF1alitica, plastico, materiales en 2d y 3d, adem\xE1s se fabrican piezas personalizadas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h2", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Corte plasma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Tenemos para usted el servicio de corte plasma para dar ese dise\xF1o que tanto desea para sus metales o productos que requieren un poco m\xE1s de cuidado al trabajarlos con la mejor deficinici\xF3n y calidad, como: corte de pilares ranurados, revestimientos de muebles, metalicos, sistemas de sujecion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h2", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Soldadura");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Para el \xE1rea de marketing, publicidad, mobiliario retail y relacionados contamos con el mejor servicio de soldadura con materias primas certificadas y de alta calidad. Cual sea el tipo de soldadura que requiera ya sea TIG, MIG o ARCO seg\xFAn sea necesario para el mejor trabajo de calidad de su mobiliario. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h2", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Pintura electrostatica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Para el servicio de pintura electrostatica contamos con un horno de 8 metros de largo que permite al cliente pintar una cantidad considerable de sus prod\xFActos, adem\xE1s de obtener ese acabado de calidad y alta durabilidad que es necesario para sus productos de retail o cualquier producto met\xE1lico que requiera pintura de calidad. Adem\xE1s contamos con certificaci\xF3n de calidad de los proveedores de pintura. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".card-por[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 4px 4px #cd1c23;\n}\n\n.font-1[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n\n.font-2[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.font-3[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.card-img-top[_ngcontent-%COMP%] {\n  padding: 0px 0px 0px 0px;\n}\n\n.cont-por-w[_ngcontent-%COMP%] {\n  max-height: 300px;\n  max-width: 400px;\n}\n\n.cont-por-h[_ngcontent-%COMP%] {\n  max-height: 400px;\n  max-width: 300px;\n}\n\n.col-or[_ngcontent-%COMP%] {\n  background-color: #f36d14;\n  color: white;\n}\n\n.col-blu[_ngcontent-%COMP%] {\n  background-color: #2456b3;\n  color: white;\n}\n\n.h-t[_ngcontent-%COMP%] {\n  padding: 0px 0px 0px 0px;\n  margin: 0px 0px 0px 0px;\n}\n\n.cont-img[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 370px;\n  padding: 0px 0px 0px 0px;\n}\n\n.cont-img-r[_ngcontent-%COMP%] {\n  padding: 0px 0px 0px 0px;\n  box-shadow: 10px 10px #e62d28;\n}\n\n.cont-img-l[_ngcontent-%COMP%] {\n  padding: 0px 0px 0px 0px;\n  box-shadow: -10px 10px #e62d28;\n}\n\n.carousel-item[_ngcontent-%COMP%] {\n  max-height: 600px;\n  min-height: 200px;\n  padding: 10px 0px 0px 0px;\n}\n\n.pcar[_ngcontent-%COMP%] {\n  padding-top: -20px;\n}\n\n@media (max-width: 700px) {\n  .font-img[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .font-titimg[_ngcontent-%COMP%] {\n    padding-top: 0px;\n    margin-top: 0px;\n    font-size: 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JlcnRoZXJyZXJhL0Rlc2t0b3AvQW5ndWxhci90ZW5zYWkvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0FDakJKOztBRG1CQTtFQUNJLGVBQUE7QUNoQko7O0FEa0JBO0VBQ0ksZUFBQTtBQ2ZKOztBRGlCQTtFQUNJLGVBQUE7QUNkSjs7QURnQkE7RUFDSSx3QkFBQTtBQ2JKOztBRGVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ1pKOztBRGVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ1pKOztBRGdCQTtFQUNJLHlCQTlCSztFQStCTCxZQUFBO0FDYko7O0FEZ0JBO0VBQ0kseUJBL0NJO0VBZ0RKLFlBQUE7QUNiSjs7QURlQTtFQUNJLHdCQUFBO0VBQ0EsdUJBQUE7QUNaSjs7QURtQkE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FDaEJKOztBRGtCQTtFQUNJLHdCQUFBO0VBQ0EsNkJBQUE7QUNmSjs7QURpQkE7RUFDSSx3QkFBQTtFQUNBLDhCQUFBO0FDZEo7O0FEaUJBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDZEo7O0FEaUJBO0VBQ0ksa0JBQUE7QUNkSjs7QURnQkE7RUFDSTtJQUNJLGVBQUE7RUNiTjs7RURlRTtJQUNJLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7RUNaTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4kd2hpdGU6ICNmZmY7XG4kZ3JpczogcmdiYSgzMiwgMzIsIDM2LCAwLjczMyk7XG4kYmx1ZWI6IHJnYigzNiwgNjYsIDE2NSk7XG4kYmx1ZWw6IHJnYigzNiwgODYsIDE3OSk7XG4kYnJvd246IHJnYmEoMTI4LCAwLCAwLCAwLjcxOSk7XG4kdHJhbnNwOiByZ2JhKDI1NSwyNTUsMjU1LDAuMCk7XG4kYmxhY2s6ICMwMDA7XG5cbiRyZWQxOiByZ2IoMjA1LDI4LDM1KTtcbiRvcmFuMTogcmdiKDIxMyw2MiwzOCk7XG4kb3JhbjI6IHJnYigyMTcsNzYsNDMpO1xuJHllbGwxOiByZ2IoMjMwLDE0Miw0OCk7IFxuJHllbGwyOiByZ2IoMjUwLDIxMCw1OSk7XG4kcmVkMjogcmdiKDIwNCw0MCw1MCk7XG5cbiRvcmFuZ2U6IHJnYigyNDMsIDEwOSwgMjApO1xuXG4uY2FyZC1wb3J7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJveC1zaGFkb3c6IDRweCA0cHggJHJlZDE7XG59XG4uZm9udC0xe1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbn1cbi5mb250LTJ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLmZvbnQtM3tcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4uY2FyZC1pbWctdG9we1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbn1cbi5jb250LXBvci13e1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIG1heC13aWR0aDogNDAwcHg7XG59XG5cbi5jb250LXBvci1oe1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgIG1heC13aWR0aDogMzAwcHg7XG59XG5cblxuLmNvbC1vcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG59XG5cbi5jb2wtYmx1e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlbDtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuLmgtdHtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbiBcblxuXG5cbi5jb250LWltZ3tcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiAzNzBweDtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG59XG4uY29udC1pbWctcntcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IHJnYigyMzAsNDUsNDApO1xufVxuLmNvbnQtaW1nLWx7XG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICAgIGJveC1zaGFkb3c6IC0xMHB4IDEwcHggcmdiKDIzMCw0NSw0MCk7XG59XG5cbi5jYXJvdXNlbC1pdGVtIHtcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAwcHggMHB4O1xufVxuXG4ucGNhcntcbiAgICBwYWRkaW5nLXRvcDogLTIwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHsgXG4gICAgLmZvbnQtaW1ne1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuICAgIC5mb250LXRpdGltZ3tcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuXG59IiwiLmNhcmQtcG9yIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiA0cHggNHB4ICNjZDFjMjM7XG59XG5cbi5mb250LTEge1xuICBmb250LXNpemU6IDI4cHg7XG59XG5cbi5mb250LTIge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5mb250LTMge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5jYXJkLWltZy10b3Age1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbi5jb250LXBvci13IHtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG59XG5cbi5jb250LXBvci1oIHtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG1heC13aWR0aDogMzAwcHg7XG59XG5cbi5jb2wtb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM2ZDE0O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb2wtYmx1IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NTZiMztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaC10IHtcbiAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICBtYXJnaW46IDBweCAwcHggMHB4IDBweDtcbn1cblxuLmNvbnQtaW1nIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDM3MHB4O1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbi5jb250LWltZy1yIHtcbiAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggI2U2MmQyODtcbn1cblxuLmNvbnQtaW1nLWwge1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gIGJveC1zaGFkb3c6IC0xMHB4IDEwcHggI2U2MmQyODtcbn1cblxuLmNhcm91c2VsLWl0ZW0ge1xuICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIHBhZGRpbmc6IDEwcHggMHB4IDBweCAwcHg7XG59XG5cbi5wY2FyIHtcbiAgcGFkZGluZy10b3A6IC0yMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLmZvbnQtaW1nIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cblxuICAuZm9udC10aXRpbWcge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufSJdfQ== */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('enterState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(-100%)',
          opacity: 0.5
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(0)',
          opacity: 1
        }))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('enterState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(-100%)',
            opacity: 0.5
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(0)',
            opacity: 1
          }))])])]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/implementacion/implementacion.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/implementacion/implementacion.component.ts ***!
    \************************************************************/

  /*! exports provided: ImplementacionComponent */

  /***/
  function srcAppImplementacionImplementacionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImplementacionComponent", function () {
      return ImplementacionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ImplementacionComponent =
    /*#__PURE__*/
    function () {
      function ImplementacionComponent() {
        _classCallCheck(this, ImplementacionComponent);
      }

      _createClass(ImplementacionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ImplementacionComponent;
    }();

    ImplementacionComponent.ɵfac = function ImplementacionComponent_Factory(t) {
      return new (t || ImplementacionComponent)();
    };

    ImplementacionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImplementacionComponent,
      selectors: [["app-implementacion"]],
      decls: 27,
      vars: 0,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-4", "bg-blue"], ["src", "../../assets/fotos(1)/muebleria stand palettas.png", "alt", "implementacion mueble stand paletta", 1, "cont-img", "cont-img-r", "mb-3", "mt-3", "ml-3"], [1, "col-sm-8", "bg-blue"], [1, "cl-wt"], [1, "font-3", "cl-wt"], [1, "triangle", "bg-blue"], [1, "col-sm-12", "m-0", "d-flex", "row", "d-wrap", "justify-content-center", "pt-5", "pb-3"], [1, "col-sm-3", "card", "d-flex", "ml-3", "mt-3", "border-0"], ["id", "1", "src", "../../assets/servicios/implementacion/1561640139843.jpg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por", 3, "ngClass"], ["id", "1", "src", "../../assets/servicios/implementacion/1502983180963.jpg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por", 3, "ngClass"], ["id", "1", "src", "../../assets/servicios/implementacion/1503318432219.jpg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por", 3, "ngClass"], ["id", "1", "src", "../../assets/servicios/implementacion/ANTES.jpg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por", 3, "ngClass"], ["id", "1", "src", "../../assets/servicios/implementacion/GTD MANQUEHUE LISTO.jpeg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por", 3, "ngClass"], ["id", "1", "src", "../../assets/servicios/implementacion/IMG-20191016-WA0020.jpg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por", 3, "ngClass"], ["id", "1", "src", "../../assets/servicios/implementacion/IMG-20191016-WA0024.jpeg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por", 3, "ngClass"], ["id", "1", "src", "../../assets/servicios/implementacion/FABRICACION EXHIBIDORES PUMA.JPG", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por", 3, "ngClass"]],
      template: function ImplementacionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Implementacion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Adem\xE1s de poder crear y/o fabricar cualquier dise\xF1o que tenga en mente, tambien podemos instalar dicho producto publicitario junto a los mejores profesionales para as\xED obtener un servicio completo en un mismo lugar sin perder calidad en su trabajo. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".bg-blue[_ngcontent-%COMP%] {\n  background-color: #2a61da;\n}\n\n.cl-wt[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.triangle[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  width: 0;\n  height: 0px;\n  border-top: 50px solid #2a61da;\n  border-left: 80px solid white;\n  border-right: 80px solid white;\n  border-bottom: 0px solid blue;\n}\n\n.cont-img[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 270px;\n  padding: 0px 0px 0px 0px;\n}\n\n.cont-img-r[_ngcontent-%COMP%] {\n  padding: 0px 2px 2px 0px;\n  box-shadow: 10px 10px #e62d28;\n}\n\n.cont-img-l[_ngcontent-%COMP%] {\n  padding: 0px 0px 2px 2px;\n  box-shadow: -10px 10px #e62d28;\n}\n\n.black[_ngcontent-%COMP%] {\n  background-color: #181818;\n}\n\n.bg-blue[_ngcontent-%COMP%] {\n  background-color: #2a61da;\n}\n\n.cl-wt[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.triangle[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  width: 0;\n  height: 0px;\n  border-top: 50px solid #2a61da;\n  border-left: 80px solid white;\n  border-right: 80px solid white;\n  border-bottom: 0px solid blue;\n}\n\n.cont-img[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 270px;\n  padding: 0px 0px 0px 0px;\n}\n\n.cont-img-r[_ngcontent-%COMP%] {\n  padding: 0px 2px 2px 0px;\n  box-shadow: 10px 10px #e62d28;\n}\n\n.cont-img-l[_ngcontent-%COMP%] {\n  padding: 0px 0px 2px 2px;\n  box-shadow: -10px 10px #e62d28;\n}\n\n.card-por[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 4px 4px #cd1c23;\n}\n\n@media (max-width: 700px) {\n  .cont-img[_ngcontent-%COMP%] {\n    height: 150px;\n    width: 220px;\n    padding: 0px 0px 0px 0px;\n  }\n}\n\n@media (max-width: 600px) {\n  .cont-img[_ngcontent-%COMP%] {\n    height: 130px;\n    width: 200px;\n    padding: 0px 0px 0px 0px;\n  }\n}\n\n@media (max-width: 500px) {\n  .cont-img[_ngcontent-%COMP%] {\n    height: 90px;\n    width: 160px;\n    padding: 0px 0px 0px 0px;\n  }\n}\n\n@media (max-width: 400px) {\n  .cont-img[_ngcontent-%COMP%] {\n    height: 60px;\n    width: 130px;\n    padding: 0px 0px 0px 0px;\n  }\n}\n\n.si[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.308);\n  \n  outline: none;\n  \n  display: block;\n}\n\n.no[_ngcontent-%COMP%] {\n  \n  display: none;\n  \n  position: fixed;\n  z-index: 999;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  top: 0;\n  left: 0;\n}\n\n.shi[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.nho[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JlcnRoZXJyZXJhL0Rlc2t0b3AvQW5ndWxhci90ZW5zYWkvc3JjL2FwcC9pbXBsZW1lbnRhY2lvbi9pbXBsZW1lbnRhY2lvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW1wbGVtZW50YWNpb24vaW1wbGVtZW50YWNpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUE7RUFDSSx5QkFSRztBQ0pQOztBRGNBO0VBQ0ksWUFWQztBQ0RMOztBRGFBO0VBQ0ksaUJBQUE7RUFDQyxRQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0FDVkw7O0FEZUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FDWko7O0FEY0E7RUFDSSx3QkFBQTtFQUNBLDZCQUFBO0FDWEo7O0FEYUE7RUFDSSx3QkFBQTtFQUNBLDhCQUFBO0FDVko7O0FEWUE7RUFDSSx5QkFBQTtBQ1RKOztBRHdCQTtFQUNJLHlCQVBHO0FDZFA7O0FEdUJBO0VBQ0ksWUFUQztBQ1hMOztBRHNCQTtFQUNJLGlCQUFBO0VBQ0MsUUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtBQ25CTDs7QUR3QkE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FDckJKOztBRHdCQTtFQUNJLHdCQUFBO0VBQ0EsNkJBQUE7QUNyQko7O0FEdUJBO0VBQ0ksd0JBQUE7RUFDQSw4QkFBQTtBQ3BCSjs7QUR1QkE7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0FDcEJKOztBRHdCQTtFQUVJO0lBQ0ksYUFBQTtJQUNBLFlBQUE7SUFDQSx3QkFBQTtFQ3RCTjtBQUNGOztBRDJCQTtFQUVJO0lBQ0ksYUFBQTtJQUNBLFlBQUE7SUFDQSx3QkFBQTtFQzFCTjtBQUNGOztBRDhCQTtFQUVJO0lBQ0ksWUFBQTtJQUNBLFlBQUE7SUFDQSx3QkFBQTtFQzdCTjtBQUNGOztBRGdDQTtFQUVJO0lBQ0ksWUFBQTtJQUNBLFlBQUE7SUFDQSx3QkFBQTtFQy9CTjtBQUNGOztBRGtDQTtFQUVJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7RUFDQSxvQ0FBQTtFQUNILGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNqQ0Q7O0FEbUNBO0VBQ0ksZ0NBQUE7RUFDSCxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ2hDRDs7QURtQ0E7RUFDSSxhQUFBO0FDaENKOztBRGtDQTtFQUNJLGNBQUE7QUMvQkoiLCJmaWxlIjoic3JjL2FwcC9pbXBsZW1lbnRhY2lvbi9pbXBsZW1lbnRhY2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRyZWQxOiByZ2IoMjA1LDI4LDM1KTtcbiRvcmFuMTogcmdiKDIxMyw2MiwzOCk7XG4kb3JhbjI6IHJnYigyMTcsNzYsNDMpO1xuJHllbGwxOiByZ2IoMjMwLDE0Miw0OCk7IFxuJHllbGwyOiByZ2IoMjUwLDIxMCw1OSk7XG4kcmVkMjogcmdiKDIwNCw0MCw1MCk7XG4kYmx1ZTogcmdiKDQyLCA5NywgMjE4KTtcbiR3dDogcmdiKDI1NSwyNTUsMjU1KTtcblxuJG9yYW5nZTogcmdiKDI0MywgMTA5LCAyMCk7XG5cblxuXG4uYmctYmx1ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbn1cbi5jbC13dHtcbiAgICBjb2xvcjogJHd0O1xufVxuLnRyaWFuZ2xle1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICB3aWR0aDogMDtcbiAgICAgaGVpZ2h0OiAwcHg7XG4gICAgIGJvcmRlci10b3A6IDUwcHggc29saWQgJGJsdWU7XG4gICAgIGJvcmRlci1sZWZ0OiA4MHB4IHNvbGlkIHdoaXRlO1xuICAgICBib3JkZXItcmlnaHQ6IDgwcHggc29saWQgd2hpdGU7XG4gICAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCBibHVlO1xufVxuXG5cblxuLmNvbnQtaW1ne1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDI3MHB4O1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbn1cbi5jb250LWltZy1ye1xuICAgIHBhZGRpbmc6IDBweCAycHggMnB4IDBweDtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggcmdiKDIzMCw0NSw0MCk7XG59XG4uY29udC1pbWctbHtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDJweCAycHg7XG4gICAgYm94LXNoYWRvdzogLTEwcHggMTBweCByZ2IoMjMwLDQ1LDQwKTtcbn1cbi5ibGFja3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xufVxuXG4kcmVkMTogcmdiKDIwNSwyOCwzNSk7XG4kb3JhbjE6IHJnYigyMTMsNjIsMzgpO1xuJG9yYW4yOiByZ2IoMjE3LDc2LDQzKTtcbiR5ZWxsMTogcmdiKDIzMCwxNDIsNDgpOyBcbiR5ZWxsMjogcmdiKDI1MCwyMTAsNTkpO1xuJHJlZDI6IHJnYigyMDQsNDAsNTApO1xuJGJsdWU6IHJnYig0MiwgOTcsIDIxOCk7XG4kd3Q6IHJnYigyNTUsMjU1LDI1NSk7XG5cbiRvcmFuZ2U6IHJnYigyNDMsIDEwOSwgMjApO1xuXG5cbi5iZy1ibHVle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xufVxuLmNsLXd0e1xuICAgIGNvbG9yOiAkd3Q7XG59XG4udHJpYW5nbGV7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgIHdpZHRoOiAwO1xuICAgICBoZWlnaHQ6IDBweDtcbiAgICAgYm9yZGVyLXRvcDogNTBweCBzb2xpZCAkYmx1ZTtcbiAgICAgYm9yZGVyLWxlZnQ6IDgwcHggc29saWQgd2hpdGU7XG4gICAgIGJvcmRlci1yaWdodDogODBweCBzb2xpZCB3aGl0ZTtcbiAgICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIGJsdWU7XG59XG5cblxuXG4uY29udC1pbWd7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMjcwcHg7XG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xufVxuXG4uY29udC1pbWctcntcbiAgICBwYWRkaW5nOiAwcHggMnB4IDJweCAwcHg7XG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IHJnYigyMzAsNDUsNDApO1xufVxuLmNvbnQtaW1nLWx7XG4gICAgcGFkZGluZzogMHB4IDBweCAycHggMnB4O1xuICAgIGJveC1zaGFkb3c6IC0xMHB4IDEwcHggcmdiKDIzMCw0NSw0MCk7XG59XG5cbi5jYXJkLXBvcntcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAkcmVkMTtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHsgXG4gICBcbiAgICAuY29udC1pbWd7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICAgIH1cblxufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkgeyBcbiAgIFxuICAgIC5jb250LWltZ3tcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gICAgfVxuXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkgeyBcbiAgIFxuICAgIC5jb250LWltZ3tcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbiAgICB9XG5cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkgeyBcbiAgIFxuICAgIC5jb250LWltZ3tcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbiAgICB9XG5cbn1cbi5zaXtcblxuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzA4KTtcbiAgICAvKiogUmVtb3ZlIGRlZmF1bHQgYnJvd3NlciBvdXRsaW5lICovXG5cdG91dGxpbmU6IG5vbmU7XG5cdC8qKiBVbmhpZGUgbGlnaHRib3ggKiovXG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuLm5veyAgXG4gICAgLyoqIERlZmF1bHQgbGlnaHRib3ggdG8gaGlkZGVuICovXG5cdGRpc3BsYXk6IG5vbmU7XG5cdC8qKiBQb3NpdGlvbiBhbmQgc3R5bGUgKi9cblx0cG9zaXRpb246IGZpeGVkO1xuXHR6LWluZGV4OiA5OTk7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXG59XG4uc2hpe1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4ubmhve1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuIiwiLmJnLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE2MWRhO1xufVxuXG4uY2wtd3Qge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cmlhbmdsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwcHg7XG4gIGJvcmRlci10b3A6IDUwcHggc29saWQgIzJhNjFkYTtcbiAgYm9yZGVyLWxlZnQ6IDgwcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yaWdodDogODBweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIGJsdWU7XG59XG5cbi5jb250LWltZyB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAyNzBweDtcbiAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xufVxuXG4uY29udC1pbWctciB7XG4gIHBhZGRpbmc6IDBweCAycHggMnB4IDBweDtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4ICNlNjJkMjg7XG59XG5cbi5jb250LWltZy1sIHtcbiAgcGFkZGluZzogMHB4IDBweCAycHggMnB4O1xuICBib3gtc2hhZG93OiAtMTBweCAxMHB4ICNlNjJkMjg7XG59XG5cbi5ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODE4MTg7XG59XG5cbi5iZy1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhNjFkYTtcbn1cblxuLmNsLXd0IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHJpYW5nbGUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMHB4O1xuICBib3JkZXItdG9wOiA1MHB4IHNvbGlkICMyYTYxZGE7XG4gIGJvcmRlci1sZWZ0OiA4MHB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmlnaHQ6IDgwcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCBibHVlO1xufVxuXG4uY29udC1pbWcge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjcwcHg7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbn1cblxuLmNvbnQtaW1nLXIge1xuICBwYWRkaW5nOiAwcHggMnB4IDJweCAwcHg7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAjZTYyZDI4O1xufVxuXG4uY29udC1pbWctbCB7XG4gIHBhZGRpbmc6IDBweCAwcHggMnB4IDJweDtcbiAgYm94LXNoYWRvdzogLTEwcHggMTBweCAjZTYyZDI4O1xufVxuXG4uY2FyZC1wb3Ige1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggI2NkMWMyMztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5jb250LWltZyB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMjIwcHg7XG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnQtaW1nIHtcbiAgICBoZWlnaHQ6IDEzMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuY29udC1pbWcge1xuICAgIGhlaWdodDogOTBweDtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLmNvbnQtaW1nIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbiAgfVxufVxuLnNpIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMwOCk7XG4gIC8qKiBSZW1vdmUgZGVmYXVsdCBicm93c2VyIG91dGxpbmUgKi9cbiAgb3V0bGluZTogbm9uZTtcbiAgLyoqIFVuaGlkZSBsaWdodGJveCAqKi9cbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5ubyB7XG4gIC8qKiBEZWZhdWx0IGxpZ2h0Ym94IHRvIGhpZGRlbiAqL1xuICBkaXNwbGF5OiBub25lO1xuICAvKiogUG9zaXRpb24gYW5kIHN0eWxlICovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLnNoaSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5uaG8ge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImplementacionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-implementacion',
          templateUrl: './implementacion.component.html',
          styleUrls: ['./implementacion.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/impresion/impresion.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/impresion/impresion.component.ts ***!
    \**************************************************/

  /*! exports provided: ImpresionComponent */

  /***/
  function srcAppImpresionImpresionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImpresionComponent", function () {
      return ImpresionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ImpresionComponent =
    /*#__PURE__*/
    function () {
      function ImpresionComponent() {
        _classCallCheck(this, ImpresionComponent);
      }

      _createClass(ImpresionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ImpresionComponent;
    }();

    ImpresionComponent.ɵfac = function ImpresionComponent_Factory(t) {
      return new (t || ImpresionComponent)();
    };

    ImpresionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImpresionComponent,
      selectors: [["app-impresion"]],
      decls: 21,
      vars: 0,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-4", "bg-blue"], ["src", "../../assets/fotos(1)/mural.jpeg", "alt", "", 1, "cont-img", "cont-img-r", "mb-3", "mt-3", "ml-3"], [1, "col-sm-8", "bg-blue"], [1, "cl-wt"], [1, "font-3", "cl-wt"], [1, "triangle", "bg-blue"], [1, "col-sm-12", "m-0", "d-flex", "row", "d-wrap", "justify-content-center", "pt-5", "pb-3"], [1, "col-sm-3", "card", "d-flex", "ml-3", "mt-3", "border-0"], ["id", "1", "src", "../../assets/servicios/impresion/GRAFICA.jpg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por", 3, "ngClass"], ["id", "1", "src", "../../assets/servicios/impresion/HELADOS PALETTAS.jpg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por", 3, "ngClass"], ["id", "1", "src", "../../assets/servicios/impresion/IMG-20161006-WA0017.jpg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por", 3, "ngClass"], ["id", "1", "src", "../../assets/servicios/impresion/MALL VIVO PANORAMICO.png", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por", 3, "ngClass"], ["id", "1", "src", "../../assets/servicios/impresion/PALETAS ZOFRI 2.png", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por", 3, "ngClass"]],
      template: function ImpresionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Impresion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Nuestra sala de impresi\xF3n cuenta con Plotters para lograr una impresion clara y precisa de hasta 1520mm de ancho por el alto que sea necesario. Adem\xE1s podr\xE1 complementar con un gran abanico de estilos de papeles diferentes para lograr una imagen duradera, de calidad y precisa para cada hambiente al cual usted exponga dicha impresion. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".bg-blue[_ngcontent-%COMP%] {\n  background-color: #2a61da;\n}\n\n.cl-wt[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.triangle[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  width: 0;\n  height: 0px;\n  border-top: 50px solid #2a61da;\n  border-left: 80px solid white;\n  border-right: 80px solid white;\n  border-bottom: 0px solid blue;\n}\n\n.cont-img[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 270px;\n  padding: 0px 0px 0px 0px;\n}\n\n.cont-img-r[_ngcontent-%COMP%] {\n  padding: 0px 2px 2px 0px;\n  box-shadow: 10px 10px #e62d28;\n}\n\n.cont-img-l[_ngcontent-%COMP%] {\n  padding: 0px 0px 2px 2px;\n  box-shadow: -10px 10px #e62d28;\n}\n\n.black[_ngcontent-%COMP%] {\n  background-color: #181818;\n}\n\n.bg-blue[_ngcontent-%COMP%] {\n  background-color: #2a61da;\n}\n\n.cl-wt[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.triangle[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  width: 0;\n  height: 0px;\n  border-top: 50px solid #2a61da;\n  border-left: 80px solid white;\n  border-right: 80px solid white;\n  border-bottom: 0px solid blue;\n}\n\n.cont-img[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 270px;\n  padding: 0px 0px 0px 0px;\n}\n\n.cont-img-r[_ngcontent-%COMP%] {\n  padding: 0px 2px 2px 0px;\n  box-shadow: 10px 10px #e62d28;\n}\n\n.cont-img-l[_ngcontent-%COMP%] {\n  padding: 0px 0px 2px 2px;\n  box-shadow: -10px 10px #e62d28;\n}\n\n.card-por[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 4px 4px #cd1c23;\n}\n\n@media (max-width: 700px) {\n  .cont-img[_ngcontent-%COMP%] {\n    height: 150px;\n    width: 220px;\n    padding: 0px 0px 0px 0px;\n  }\n}\n\n@media (max-width: 600px) {\n  .cont-img[_ngcontent-%COMP%] {\n    height: 130px;\n    width: 200px;\n    padding: 0px 0px 0px 0px;\n  }\n}\n\n@media (max-width: 500px) {\n  .cont-img[_ngcontent-%COMP%] {\n    height: 90px;\n    width: 160px;\n    padding: 0px 0px 0px 0px;\n  }\n}\n\n@media (max-width: 400px) {\n  .cont-img[_ngcontent-%COMP%] {\n    height: 60px;\n    width: 130px;\n    padding: 0px 0px 0px 0px;\n  }\n}\n\n.si[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.308);\n  \n  outline: none;\n  \n  display: block;\n}\n\n.no[_ngcontent-%COMP%] {\n  \n  display: none;\n  \n  position: fixed;\n  z-index: 999;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  top: 0;\n  left: 0;\n}\n\n.shi[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.nho[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JlcnRoZXJyZXJhL0Rlc2t0b3AvQW5ndWxhci90ZW5zYWkvc3JjL2FwcC9pbXByZXNpb24vaW1wcmVzaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbXByZXNpb24vaW1wcmVzaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0kseUJBUkc7QUNKUDs7QURjQTtFQUNJLFlBVkM7QUNETDs7QURhQTtFQUNJLGlCQUFBO0VBQ0MsUUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtBQ1ZMOztBRGVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQ1pKOztBRGNBO0VBQ0ksd0JBQUE7RUFDQSw2QkFBQTtBQ1hKOztBRGFBO0VBQ0ksd0JBQUE7RUFDQSw4QkFBQTtBQ1ZKOztBRFlBO0VBQ0kseUJBQUE7QUNUSjs7QUR3QkE7RUFDSSx5QkFQRztBQ2RQOztBRHVCQTtFQUNJLFlBVEM7QUNYTDs7QURzQkE7RUFDSSxpQkFBQTtFQUNDLFFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7QUNuQkw7O0FEd0JBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQ3JCSjs7QUR3QkE7RUFDSSx3QkFBQTtFQUNBLDZCQUFBO0FDckJKOztBRHVCQTtFQUNJLHdCQUFBO0VBQ0EsOEJBQUE7QUNwQko7O0FEdUJBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtBQ3BCSjs7QUR3QkE7RUFFSTtJQUNJLGFBQUE7SUFDQSxZQUFBO0lBQ0Esd0JBQUE7RUN0Qk47QUFDRjs7QUQyQkE7RUFFSTtJQUNJLGFBQUE7SUFDQSxZQUFBO0lBQ0Esd0JBQUE7RUMxQk47QUFDRjs7QUQ4QkE7RUFFSTtJQUNJLFlBQUE7SUFDQSxZQUFBO0lBQ0Esd0JBQUE7RUM3Qk47QUFDRjs7QURnQ0E7RUFFSTtJQUNJLFlBQUE7SUFDQSxZQUFBO0lBQ0Esd0JBQUE7RUMvQk47QUFDRjs7QURrQ0E7RUFFSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0VBQ0Esb0NBQUE7RUFDSCxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDakNEOztBRG1DQTtFQUNJLGdDQUFBO0VBQ0gsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNoQ0Q7O0FEbUNBO0VBQ0ksYUFBQTtBQ2hDSjs7QURrQ0E7RUFDSSxjQUFBO0FDL0JKIiwiZmlsZSI6InNyYy9hcHAvaW1wcmVzaW9uL2ltcHJlc2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRyZWQxOiByZ2IoMjA1LDI4LDM1KTtcbiRvcmFuMTogcmdiKDIxMyw2MiwzOCk7XG4kb3JhbjI6IHJnYigyMTcsNzYsNDMpO1xuJHllbGwxOiByZ2IoMjMwLDE0Miw0OCk7IFxuJHllbGwyOiByZ2IoMjUwLDIxMCw1OSk7XG4kcmVkMjogcmdiKDIwNCw0MCw1MCk7XG4kYmx1ZTogcmdiKDQyLCA5NywgMjE4KTtcbiR3dDogcmdiKDI1NSwyNTUsMjU1KTtcblxuJG9yYW5nZTogcmdiKDI0MywgMTA5LCAyMCk7XG5cblxuXG4uYmctYmx1ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbn1cbi5jbC13dHtcbiAgICBjb2xvcjogJHd0O1xufVxuLnRyaWFuZ2xle1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICB3aWR0aDogMDtcbiAgICAgaGVpZ2h0OiAwcHg7XG4gICAgIGJvcmRlci10b3A6IDUwcHggc29saWQgJGJsdWU7XG4gICAgIGJvcmRlci1sZWZ0OiA4MHB4IHNvbGlkIHdoaXRlO1xuICAgICBib3JkZXItcmlnaHQ6IDgwcHggc29saWQgd2hpdGU7XG4gICAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCBibHVlO1xufVxuXG5cblxuLmNvbnQtaW1ne1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDI3MHB4O1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbn1cbi5jb250LWltZy1ye1xuICAgIHBhZGRpbmc6IDBweCAycHggMnB4IDBweDtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggcmdiKDIzMCw0NSw0MCk7XG59XG4uY29udC1pbWctbHtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDJweCAycHg7XG4gICAgYm94LXNoYWRvdzogLTEwcHggMTBweCByZ2IoMjMwLDQ1LDQwKTtcbn1cbi5ibGFja3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xufVxuXG4kcmVkMTogcmdiKDIwNSwyOCwzNSk7XG4kb3JhbjE6IHJnYigyMTMsNjIsMzgpO1xuJG9yYW4yOiByZ2IoMjE3LDc2LDQzKTtcbiR5ZWxsMTogcmdiKDIzMCwxNDIsNDgpOyBcbiR5ZWxsMjogcmdiKDI1MCwyMTAsNTkpO1xuJHJlZDI6IHJnYigyMDQsNDAsNTApO1xuJGJsdWU6IHJnYig0MiwgOTcsIDIxOCk7XG4kd3Q6IHJnYigyNTUsMjU1LDI1NSk7XG5cbiRvcmFuZ2U6IHJnYigyNDMsIDEwOSwgMjApO1xuXG5cbi5iZy1ibHVle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xufVxuLmNsLXd0e1xuICAgIGNvbG9yOiAkd3Q7XG59XG4udHJpYW5nbGV7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgIHdpZHRoOiAwO1xuICAgICBoZWlnaHQ6IDBweDtcbiAgICAgYm9yZGVyLXRvcDogNTBweCBzb2xpZCAkYmx1ZTtcbiAgICAgYm9yZGVyLWxlZnQ6IDgwcHggc29saWQgd2hpdGU7XG4gICAgIGJvcmRlci1yaWdodDogODBweCBzb2xpZCB3aGl0ZTtcbiAgICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIGJsdWU7XG59XG5cblxuXG4uY29udC1pbWd7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMjcwcHg7XG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xufVxuXG4uY29udC1pbWctcntcbiAgICBwYWRkaW5nOiAwcHggMnB4IDJweCAwcHg7XG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IHJnYigyMzAsNDUsNDApO1xufVxuLmNvbnQtaW1nLWx7XG4gICAgcGFkZGluZzogMHB4IDBweCAycHggMnB4O1xuICAgIGJveC1zaGFkb3c6IC0xMHB4IDEwcHggcmdiKDIzMCw0NSw0MCk7XG59XG5cbi5jYXJkLXBvcntcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAkcmVkMTtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHsgXG4gICBcbiAgICAuY29udC1pbWd7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICAgIH1cblxufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkgeyBcbiAgIFxuICAgIC5jb250LWltZ3tcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gICAgfVxuXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkgeyBcbiAgIFxuICAgIC5jb250LWltZ3tcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbiAgICB9XG5cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkgeyBcbiAgIFxuICAgIC5jb250LWltZ3tcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbiAgICB9XG5cbn1cbi5zaXtcblxuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzA4KTtcbiAgICAvKiogUmVtb3ZlIGRlZmF1bHQgYnJvd3NlciBvdXRsaW5lICovXG5cdG91dGxpbmU6IG5vbmU7XG5cdC8qKiBVbmhpZGUgbGlnaHRib3ggKiovXG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuLm5veyAgXG4gICAgLyoqIERlZmF1bHQgbGlnaHRib3ggdG8gaGlkZGVuICovXG5cdGRpc3BsYXk6IG5vbmU7XG5cdC8qKiBQb3NpdGlvbiBhbmQgc3R5bGUgKi9cblx0cG9zaXRpb246IGZpeGVkO1xuXHR6LWluZGV4OiA5OTk7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXG59XG4uc2hpe1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4ubmhve1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuIiwiLmJnLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE2MWRhO1xufVxuXG4uY2wtd3Qge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cmlhbmdsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwcHg7XG4gIGJvcmRlci10b3A6IDUwcHggc29saWQgIzJhNjFkYTtcbiAgYm9yZGVyLWxlZnQ6IDgwcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yaWdodDogODBweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIGJsdWU7XG59XG5cbi5jb250LWltZyB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAyNzBweDtcbiAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xufVxuXG4uY29udC1pbWctciB7XG4gIHBhZGRpbmc6IDBweCAycHggMnB4IDBweDtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4ICNlNjJkMjg7XG59XG5cbi5jb250LWltZy1sIHtcbiAgcGFkZGluZzogMHB4IDBweCAycHggMnB4O1xuICBib3gtc2hhZG93OiAtMTBweCAxMHB4ICNlNjJkMjg7XG59XG5cbi5ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODE4MTg7XG59XG5cbi5iZy1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhNjFkYTtcbn1cblxuLmNsLXd0IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHJpYW5nbGUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMHB4O1xuICBib3JkZXItdG9wOiA1MHB4IHNvbGlkICMyYTYxZGE7XG4gIGJvcmRlci1sZWZ0OiA4MHB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmlnaHQ6IDgwcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCBibHVlO1xufVxuXG4uY29udC1pbWcge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjcwcHg7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbn1cblxuLmNvbnQtaW1nLXIge1xuICBwYWRkaW5nOiAwcHggMnB4IDJweCAwcHg7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAjZTYyZDI4O1xufVxuXG4uY29udC1pbWctbCB7XG4gIHBhZGRpbmc6IDBweCAwcHggMnB4IDJweDtcbiAgYm94LXNoYWRvdzogLTEwcHggMTBweCAjZTYyZDI4O1xufVxuXG4uY2FyZC1wb3Ige1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggI2NkMWMyMztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5jb250LWltZyB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMjIwcHg7XG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnQtaW1nIHtcbiAgICBoZWlnaHQ6IDEzMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuY29udC1pbWcge1xuICAgIGhlaWdodDogOTBweDtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLmNvbnQtaW1nIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbiAgfVxufVxuLnNpIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMwOCk7XG4gIC8qKiBSZW1vdmUgZGVmYXVsdCBicm93c2VyIG91dGxpbmUgKi9cbiAgb3V0bGluZTogbm9uZTtcbiAgLyoqIFVuaGlkZSBsaWdodGJveCAqKi9cbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5ubyB7XG4gIC8qKiBEZWZhdWx0IGxpZ2h0Ym94IHRvIGhpZGRlbiAqL1xuICBkaXNwbGF5OiBub25lO1xuICAvKiogUG9zaXRpb24gYW5kIHN0eWxlICovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLnNoaSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5uaG8ge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImpresionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-impresion',
          templateUrl: './impresion.component.html',
          styleUrls: ['./impresion.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/nosotros/nosotros.component.ts":
  /*!************************************************!*\
    !*** ./src/app/nosotros/nosotros.component.ts ***!
    \************************************************/

  /*! exports provided: NosotrosComponent */

  /***/
  function srcAppNosotrosNosotrosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NosotrosComponent", function () {
      return NosotrosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NosotrosComponent =
    /*#__PURE__*/
    function () {
      function NosotrosComponent() {
        _classCallCheck(this, NosotrosComponent);
      }

      _createClass(NosotrosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NosotrosComponent;
    }();

    NosotrosComponent.ɵfac = function NosotrosComponent_Factory(t) {
      return new (t || NosotrosComponent)();
    };

    NosotrosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NosotrosComponent,
      selectors: [["app-nosotros"]],
      decls: 17,
      vars: 0,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-11", "bg-blue", "bor-or1", "mar-l"], [1, "cl-wt"], [1, "font-3", "cl-wt"], [1, "col-sm-6", "bg-or2", "bor-or1", "mar-l"], [1, "col-sm-5", "bg-yel1", "bor-or1", "mar-l"]],
      template: function NosotrosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nosotros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " En Tensai somos unos genios en nuestra \xE1rea, estamos comprometidos con la calidad de sus productos y servicios, dedicandonos a ser cada d\xEDa mejores y principalmente en el \xE1rea de dise\xF1o y fabricaci\xF3n relacionada al mundo del retail. Encontrando en este lugar todo lo relacionado con el retail, ya sea el dise\xF1o y/o fabricacion de un o muchos muebles para su marca, o cualquiera sea la publicidad que requiera para esta como lo son: gigantograf\xEDas, impresiones con aderencia, murales, carteles personalizados, muebles personalizados para la marca y mucho m\xE1s. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Misi\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Entregar un proyecto a corde a sus necesidades, con la calidad y prestaciones que todos los clientes necesitan adem\xE1s entregar sus productos en el tiempo justo. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Visi\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Como empresa, queremos posicionarnos dentro de las mejores marcas de retail del pa\xEDs, con herramientas para crear proyectos mas grandes y superando la precision actual. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".bg-or2[_ngcontent-%COMP%] {\n  background-color: #d94c2b;\n}\n\n.bg-yel1[_ngcontent-%COMP%] {\n  background-color: #e68e30;\n}\n\n.bg-blue[_ngcontent-%COMP%] {\n  background-color: #2a61da;\n}\n\n.cl-wt[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.triangle[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  width: 0;\n  height: 0px;\n  border-top: 50px solid #2a61da;\n  border-left: 80px solid white;\n  border-right: 80px solid white;\n  border-bottom: 0px solid blue;\n}\n\n.cont-img[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 270px;\n  padding: 0px 0px 0px 0px;\n}\n\n.cont-img-r[_ngcontent-%COMP%] {\n  padding: 0px 2px 2px 0px;\n  box-shadow: 10px 10px #e62d28;\n}\n\n.cont-img-l[_ngcontent-%COMP%] {\n  padding: 0px 0px 2px 2px;\n  box-shadow: -10px 10px #e62d28;\n}\n\n.bor-or1[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 20px;\n  box-shadow: 6px 6px #d53e26;\n}\n\n.mar-l[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n\n\n@media only screen and (min-width: 320px) and (max-width: 736px) {\n  .mar-l[_ngcontent-%COMP%] {\n    margin-left: 17px;\n    margin-right: 17px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JlcnRoZXJyZXJhL0Rlc2t0b3AvQW5ndWxhci90ZW5zYWkvc3JjL2FwcC9ub3NvdHJvcy9ub3NvdHJvcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbm9zb3Ryb3Mvbm9zb3Ryb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFDSSx5QkFYSTtBQ0FSOztBRGFBO0VBQ0kseUJBYkk7QUNHUjs7QURZQTtFQUNJLHlCQWJHO0FDSVA7O0FEV0E7RUFDSSxZQWZDO0FDT0w7O0FEVUE7RUFDSSxpQkFBQTtFQUNDLFFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7QUNQTDs7QURXQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUNSSjs7QURVQTtFQUNJLHdCQUFBO0VBQ0EsNkJBQUE7QUNQSjs7QURTQTtFQUNJLHdCQUFBO0VBQ0EsOEJBQUE7QUNOSjs7QURRQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQ0xKOztBRE9BO0VBQ0ksaUJBQUE7QUNKSjs7QURTQSxnREFBQTs7QUFDQTtFQUlFO0lBQ0ksaUJBQUE7SUFDQSxrQkFBQTtFQ1RKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ub3NvdHJvcy9ub3NvdHJvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRyZWQxOiByZ2IoMjA1LDI4LDM1KTtcbiRvcmFuMTogcmdiKDIxMyw2MiwzOCk7XG4kb3JhbjI6IHJnYigyMTcsNzYsNDMpO1xuJHllbGwxOiByZ2IoMjMwLDE0Miw0OCk7IFxuJHllbGwyOiByZ2IoMjUwLDIxMCw1OSk7XG4kcmVkMjogcmdiKDIwNCw0MCw1MCk7XG4kYmx1ZTogcmdiKDQyLCA5NywgMjE4KTtcbiR3dDogcmdiKDI1NSwyNTUsMjU1KTtcblxuJG9yYW5nZTogcmdiKDI0MywgMTA5LCAyMCk7XG5cblxuLmJnLW9yMntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbjI7XG59XG4uYmcteWVsMXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeWVsbDE7XG59XG4uYmctYmx1ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbn1cbi5jbC13dHtcbiAgICBjb2xvcjogJHd0O1xufVxuLnRyaWFuZ2xle1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICB3aWR0aDogMDtcbiAgICAgaGVpZ2h0OiAwcHg7XG4gICAgIGJvcmRlci10b3A6IDUwcHggc29saWQgJGJsdWU7XG4gICAgIGJvcmRlci1sZWZ0OiA4MHB4IHNvbGlkIHdoaXRlO1xuICAgICBib3JkZXItcmlnaHQ6IDgwcHggc29saWQgd2hpdGU7XG4gICAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCBibHVlO1xufVxuXG5cbi5jb250LWltZ3tcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAyNzBweDtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG59XG4uY29udC1pbWctcntcbiAgICBwYWRkaW5nOiAwcHggMnB4IDJweCAwcHg7XG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IHJnYigyMzAsNDUsNDApO1xufVxuLmNvbnQtaW1nLWx7XG4gICAgcGFkZGluZzogMHB4IDBweCAycHggMnB4O1xuICAgIGJveC1zaGFkb3c6IC0xMHB4IDEwcHggcmdiKDIzMCw0NSw0MCk7XG59XG4uYm9yLW9yMXtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYm94LXNoYWRvdzogNnB4IDZweCAkb3JhbjE7XG59XG4ubWFyLWx7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cblxuXG4vKiBjYW1iaW9zIGNzcyBwYXJhIG1vZG8gdmVydGljYWwgeSBob3Jpem9udGFsICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4td2lkdGg6IDMyMHB4KSBcbiAgYW5kIChtYXgtd2lkdGg6IDczNnB4KVxue1xuICAubWFyLWx7XG4gICAgICBtYXJnaW4tbGVmdDogMTdweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTdweDtcbiAgfVxuICBcbn1cbiAiLCIuYmctb3IyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NGMyYjtcbn1cblxuLmJnLXllbDEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY4ZTMwO1xufVxuXG4uYmctYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTYxZGE7XG59XG5cbi5jbC13dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRyaWFuZ2xlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyLXRvcDogNTBweCBzb2xpZCAjMmE2MWRhO1xuICBib3JkZXItbGVmdDogODBweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJpZ2h0OiA4MHB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAwcHggc29saWQgYmx1ZTtcbn1cblxuLmNvbnQtaW1nIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDI3MHB4O1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbi5jb250LWltZy1yIHtcbiAgcGFkZGluZzogMHB4IDJweCAycHggMHB4O1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggI2U2MmQyODtcbn1cblxuLmNvbnQtaW1nLWwge1xuICBwYWRkaW5nOiAwcHggMHB4IDJweCAycHg7XG4gIGJveC1zaGFkb3c6IC0xMHB4IDEwcHggI2U2MmQyODtcbn1cblxuLmJvci1vcjEge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3gtc2hhZG93OiA2cHggNnB4ICNkNTNlMjY7XG59XG5cbi5tYXItbCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4vKiBjYW1iaW9zIGNzcyBwYXJhIG1vZG8gdmVydGljYWwgeSBob3Jpem9udGFsICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1hci1sIHtcbiAgICBtYXJnaW4tbGVmdDogMTdweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE3cHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NosotrosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nosotros',
          templateUrl: './nosotros.component.html',
          styleUrls: ['./nosotros.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/stand/stand.component.ts":
  /*!******************************************!*\
    !*** ./src/app/stand/stand.component.ts ***!
    \******************************************/

  /*! exports provided: StandComponent */

  /***/
  function srcAppStandStandComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StandComponent", function () {
      return StandComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var StandComponent =
    /*#__PURE__*/
    function () {
      function StandComponent() {
        _classCallCheck(this, StandComponent);
      }

      _createClass(StandComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StandComponent;
    }();

    StandComponent.ɵfac = function StandComponent_Factory(t) {
      return new (t || StandComponent)();
    };

    StandComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StandComponent,
      selectors: [["app-stand"]],
      decls: 15,
      vars: 0,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-4", "bg-blue"], ["src", "../../assets/portafolio/muebleria stand palettas.png", "alt", "Stand publicitario de paletas", 1, "cont-img", "cont-img-r", "mb-3", "mt-3", "ml-3"], [1, "col-sm-8", "bg-blue"], [1, "cl-wt"], [1, "font-3", "cl-wt"], [1, "triangle", "bg-blue"], [1, "col-sm-12", "m-0", "d-flex", "row", "d-wrap", "justify-content-center", "pt-5", "pb-3"], [1, "col-sm-3", "card", "d-flex", "ml-3", "mt-3", "border-0"], ["id", "1", "src", "../../assets/trabajos/stand publicitario/FABRICADO E IMPLEMENTADO.jpeg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por", 3, "ngClass"], ["id", "1", "src", "../../assets/trabajos/stand publicitario/IMG-20200116-WA0031.jpeg", "alt", "", 1, "card-img-top", "cont-por-w", "w-100", "h-100", "card-por", 3, "ngClass"]],
      template: function StandComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Stand publicitario");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Es donde se expone y presenta sus productos o servicios. Si son de tama\xF1o considerable se le suele llamar tambi\xE9n pabell\xF3n, as\xED como expositor si es de peque\xF1o tama\xF1o. Los stand publicitarios creados en tensai cumplen con el objetivo de todo stand, ser el medio por el cual la gente puede visualizar la marca, o producto de su empresa, pero con exelente calidad para que la impresion del cliente siempre sea la mejor. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".bg-blue[_ngcontent-%COMP%] {\n  background-color: #2a61da;\n}\n\n.cl-wt[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.triangle[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  width: 0;\n  height: 0px;\n  border-top: 50px solid #2a61da;\n  border-left: 80px solid white;\n  border-right: 80px solid white;\n  border-bottom: 0px solid blue;\n}\n\n.cont-img[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 270px;\n  padding: 0px 0px 0px 0px;\n}\n\n.cont-img-r[_ngcontent-%COMP%] {\n  padding: 0px 2px 2px 0px;\n  box-shadow: 10px 10px #e62d28;\n}\n\n.cont-img-l[_ngcontent-%COMP%] {\n  padding: 0px 0px 2px 2px;\n  box-shadow: -10px 10px #e62d28;\n}\n\n.card-por[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 4px 4px #cd1c23;\n}\n\n@media (max-width: 700px) {\n  .cont-img[_ngcontent-%COMP%] {\n    height: 150px;\n    width: 220px;\n    padding: 0px 0px 0px 0px;\n  }\n}\n\n@media (max-width: 600px) {\n  .cont-img[_ngcontent-%COMP%] {\n    height: 130px;\n    width: 200px;\n    padding: 0px 0px 0px 0px;\n  }\n}\n\n@media (max-width: 500px) {\n  .cont-img[_ngcontent-%COMP%] {\n    height: 90px;\n    width: 160px;\n    padding: 0px 0px 0px 0px;\n  }\n}\n\n@media (max-width: 400px) {\n  .cont-img[_ngcontent-%COMP%] {\n    height: 60px;\n    width: 130px;\n    padding: 0px 0px 0px 0px;\n  }\n}\n\n.si[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.308);\n  \n  outline: none;\n  \n  display: block;\n}\n\n.no[_ngcontent-%COMP%] {\n  \n  display: none;\n  \n  position: fixed;\n  z-index: 999;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  top: 0;\n  left: 0;\n}\n\n.shi[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.nho[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JlcnRoZXJyZXJhL0Rlc2t0b3AvQW5ndWxhci90ZW5zYWkvc3JjL2FwcC9zdGFuZC9zdGFuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3RhbmQvc3RhbmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFDSSx5QkFQRztBQ0pQOztBRGFBO0VBQ0ksWUFUQztBQ0RMOztBRFlBO0VBQ0ksaUJBQUE7RUFDQyxRQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0FDVEw7O0FEY0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FDWEo7O0FEY0E7RUFDSSx3QkFBQTtFQUNBLDZCQUFBO0FDWEo7O0FEYUE7RUFDSSx3QkFBQTtFQUNBLDhCQUFBO0FDVko7O0FEYUE7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0FDVko7O0FEY0E7RUFFSTtJQUNJLGFBQUE7SUFDQSxZQUFBO0lBQ0Esd0JBQUE7RUNaTjtBQUNGOztBRGlCQTtFQUVJO0lBQ0ksYUFBQTtJQUNBLFlBQUE7SUFDQSx3QkFBQTtFQ2hCTjtBQUNGOztBRG9CQTtFQUVJO0lBQ0ksWUFBQTtJQUNBLFlBQUE7SUFDQSx3QkFBQTtFQ25CTjtBQUNGOztBRHNCQTtFQUVJO0lBQ0ksWUFBQTtJQUNBLFlBQUE7SUFDQSx3QkFBQTtFQ3JCTjtBQUNGOztBRHdCQTtFQUVJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7RUFDQSxvQ0FBQTtFQUNILGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUN2QkQ7O0FEeUJBO0VBQ0ksZ0NBQUE7RUFDSCxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ3RCRDs7QUR5QkE7RUFDSSxhQUFBO0FDdEJKOztBRHdCQTtFQUNJLGNBQUE7QUNyQkoiLCJmaWxlIjoic3JjL2FwcC9zdGFuZC9zdGFuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRyZWQxOiByZ2IoMjA1LDI4LDM1KTtcbiRvcmFuMTogcmdiKDIxMyw2MiwzOCk7XG4kb3JhbjI6IHJnYigyMTcsNzYsNDMpO1xuJHllbGwxOiByZ2IoMjMwLDE0Miw0OCk7IFxuJHllbGwyOiByZ2IoMjUwLDIxMCw1OSk7XG4kcmVkMjogcmdiKDIwNCw0MCw1MCk7XG4kYmx1ZTogcmdiKDQyLCA5NywgMjE4KTtcbiR3dDogcmdiKDI1NSwyNTUsMjU1KTtcblxuJG9yYW5nZTogcmdiKDI0MywgMTA5LCAyMCk7XG5cblxuLmJnLWJsdWV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG59XG4uY2wtd3R7XG4gICAgY29sb3I6ICR3dDtcbn1cbi50cmlhbmdsZXtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgd2lkdGg6IDA7XG4gICAgIGhlaWdodDogMHB4O1xuICAgICBib3JkZXItdG9wOiA1MHB4IHNvbGlkICRibHVlO1xuICAgICBib3JkZXItbGVmdDogODBweCBzb2xpZCB3aGl0ZTtcbiAgICAgYm9yZGVyLXJpZ2h0OiA4MHB4IHNvbGlkIHdoaXRlO1xuICAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgYmx1ZTtcbn1cblxuXG5cbi5jb250LWltZ3tcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAyNzBweDtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbi5jb250LWltZy1ye1xuICAgIHBhZGRpbmc6IDBweCAycHggMnB4IDBweDtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggcmdiKDIzMCw0NSw0MCk7XG59XG4uY29udC1pbWctbHtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDJweCAycHg7XG4gICAgYm94LXNoYWRvdzogLTEwcHggMTBweCByZ2IoMjMwLDQ1LDQwKTtcbn1cblxuLmNhcmQtcG9ye1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3gtc2hhZG93OiA0cHggNHB4ICRyZWQxO1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkgeyBcbiAgIFxuICAgIC5jb250LWltZ3tcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gICAgfVxuXG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7IFxuICAgXG4gICAgLmNvbnQtaW1ne1xuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbiAgICB9XG5cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7IFxuICAgXG4gICAgLmNvbnQtaW1ne1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICAgIH1cblxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7IFxuICAgXG4gICAgLmNvbnQtaW1ne1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICAgIH1cblxufVxuLnNpe1xuXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMDgpO1xuICAgIC8qKiBSZW1vdmUgZGVmYXVsdCBicm93c2VyIG91dGxpbmUgKi9cblx0b3V0bGluZTogbm9uZTtcblx0LyoqIFVuaGlkZSBsaWdodGJveCAqKi9cblx0ZGlzcGxheTogYmxvY2s7XG59XG4ubm97ICBcbiAgICAvKiogRGVmYXVsdCBsaWdodGJveCB0byBoaWRkZW4gKi9cblx0ZGlzcGxheTogbm9uZTtcblx0LyoqIFBvc2l0aW9uIGFuZCBzdHlsZSAqL1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHotaW5kZXg6IDk5OTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cbn1cbi5zaGl7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5uaG97XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4iLCIuYmctYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTYxZGE7XG59XG5cbi5jbC13dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRyaWFuZ2xlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyLXRvcDogNTBweCBzb2xpZCAjMmE2MWRhO1xuICBib3JkZXItbGVmdDogODBweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJpZ2h0OiA4MHB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAwcHggc29saWQgYmx1ZTtcbn1cblxuLmNvbnQtaW1nIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDI3MHB4O1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbi5jb250LWltZy1yIHtcbiAgcGFkZGluZzogMHB4IDJweCAycHggMHB4O1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggI2U2MmQyODtcbn1cblxuLmNvbnQtaW1nLWwge1xuICBwYWRkaW5nOiAwcHggMHB4IDJweCAycHg7XG4gIGJveC1zaGFkb3c6IC0xMHB4IDEwcHggI2U2MmQyODtcbn1cblxuLmNhcmQtcG9yIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiA0cHggNHB4ICNjZDFjMjM7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAuY29udC1pbWcge1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250LWltZyB7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnQtaW1nIHtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5jb250LWltZyB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gIH1cbn1cbi5zaSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMDgpO1xuICAvKiogUmVtb3ZlIGRlZmF1bHQgYnJvd3NlciBvdXRsaW5lICovXG4gIG91dGxpbmU6IG5vbmU7XG4gIC8qKiBVbmhpZGUgbGlnaHRib3ggKiovXG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubm8ge1xuICAvKiogRGVmYXVsdCBsaWdodGJveCB0byBoaWRkZW4gKi9cbiAgZGlzcGxheTogbm9uZTtcbiAgLyoqIFBvc2l0aW9uIGFuZCBzdHlsZSAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5zaGkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubmhvIHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StandComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-stand',
          templateUrl: './stand.component.html',
          styleUrls: ['./stand.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/robertherrera/Desktop/Angular/tensai/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map