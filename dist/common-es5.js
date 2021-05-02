(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "90At":
    /*!*******************************************!*\
      !*** ./src/app/core/configs/constants.ts ***!
      \*******************************************/

    /*! exports provided: Constants, ROUTES */

    /***/
    function At(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Constants", function () {
        return Constants;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });

      var Constants = {
        pagination: {
          perPage: 20
        },
        api: {
          login: '/login'
        },
        message: {
          emptyMessage: 'No Data'
        },
        redirectUrl: '/dashboard',
        loginUrl: '/auth/login',
        asideMenu: [{
          label: 'Dashboard',
          icon: 'flaticon2-protection text-primary',
          routerLink: '/dashboard'
        }],
        currencies: [{
          label: 'USD',
          value: 'USD'
        }],
        table: {
          rows: 50,
          rowsPerPageOptions: [10, 20, 50, 100]
        },
        minimumPayment: 0
      };

      var ROUTES = _toConsumableArray(Constants.asideMenu);
      /***/

    },

    /***/
    "Qy8N":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/auth/registration/confirm-password.validator.ts ***!
      \*************************************************************************/

    /*! exports provided: ConfirmPasswordValidator */

    /***/
    function Qy8N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPasswordValidator", function () {
        return ConfirmPasswordValidator;
      });

      var ConfirmPasswordValidator = /*#__PURE__*/function () {
        function ConfirmPasswordValidator() {
          _classCallCheck(this, ConfirmPasswordValidator);
        }

        _createClass(ConfirmPasswordValidator, null, [{
          key: "MatchPassword",
          value:
          /**
           * Check matching password with confirm password
           * @param control AbstractControl
           */
          function MatchPassword(control) {
            var password = control.get('password').value;
            var confirmPassword = control.get('cPassword').value;

            if (password !== confirmPassword) {
              control.get('cPassword').setErrors({
                ConfirmPassword: true
              });
            } else {
              return null;
            }
          }
        }]);

        return ConfirmPasswordValidator;
      }();
      /***/

    },

    /***/
    "tM0M":
    /*!****************************************************!*\
      !*** ./src/app/modules/i18n/translation.module.ts ***!
      \****************************************************/

    /*! exports provided: TranslationModule */

    /***/
    function tM0M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslationModule", function () {
        return TranslationModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var TranslationModule = function TranslationModule() {
        _classCallCheck(this, TranslationModule);
      };

      TranslationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TranslationModule
      });
      TranslationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TranslationModule_Factory(t) {
          return new (t || TranslationModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TranslationModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map