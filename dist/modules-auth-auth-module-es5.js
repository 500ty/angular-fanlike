(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-module"], {
    /***/
    "305l":
    /*!*********************************************!*\
      !*** ./src/app/modules/auth/auth.module.ts ***!
      \*********************************************/

    /*! exports provided: AuthModule */

    /***/
    function l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
        return AuthModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./auth-routing.module */
      "cMCp");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login/login.component */
      "6n5F");
      /* harmony import */


      var _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./registration/registration.component */
      "58k3");
      /* harmony import */


      var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./forgot-password/forgot-password.component */
      "SiHH");
      /* harmony import */


      var _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./logout/logout.component */
      "8DKb");
      /* harmony import */


      var _auth_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./auth.component */
      "NRzN");
      /* harmony import */


      var _i18n_translation_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../i18n/translation.module */
      "tM0M");
      /* harmony import */


      var angularx_social_login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! angularx-social-login */
      "ahC7");

      var AuthModule = function AuthModule() {
        _classCallCheck(this, AuthModule);
      };

      AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AuthModule
      });
      AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AuthModule_Factory(t) {
          return new (t || AuthModule)();
        },
        providers: [{
          provide: 'SocialAuthServiceConfig',
          useValue: {
            autoLogin: false,
            providers: [// {
            //   id: GoogleLoginProvider.PROVIDER_ID,
            //   provider: new GoogleLoginProvider(
            //     'clientId'
            //   )
            // },
            {
              id: angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["FacebookLoginProvider"].PROVIDER_ID,
              provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["FacebookLoginProvider"]('223546759563819')
            }]
          }
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _i18n_translation_module__WEBPACK_IMPORTED_MODULE_10__["TranslationModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["SocialLoginModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, {
          declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__["LogoutComponent"], _auth_component__WEBPACK_IMPORTED_MODULE_9__["AuthComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _i18n_translation_module__WEBPACK_IMPORTED_MODULE_10__["TranslationModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["SocialLoginModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__["LogoutComponent"], _auth_component__WEBPACK_IMPORTED_MODULE_9__["AuthComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _i18n_translation_module__WEBPACK_IMPORTED_MODULE_10__["TranslationModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["SocialLoginModule"]],
            providers: [{
              provide: 'SocialAuthServiceConfig',
              useValue: {
                autoLogin: false,
                providers: [// {
                //   id: GoogleLoginProvider.PROVIDER_ID,
                //   provider: new GoogleLoginProvider(
                //     'clientId'
                //   )
                // },
                {
                  id: angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["FacebookLoginProvider"].PROVIDER_ID,
                  provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["FacebookLoginProvider"]('223546759563819')
                }]
              }
            }]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "58k3":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/auth/registration/registration.component.ts ***!
      \*********************************************************************/

    /*! exports provided: RegistrationComponent */

    /***/
    function k3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
        return RegistrationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _confirm_password_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./confirm-password.validator */
      "Qy8N");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_services/auth.service */
      "+BVi");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function RegistrationComponent_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The registration details are incorrect");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function RegistrationComponent_ng_container_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " 'Passsword' and 'Confirm Password' didn't match. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function RegistrationComponent_ng_container_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function RegistrationComponent_ng_template_61_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var message_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().message;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r6, " ");
        }
      }

      function RegistrationComponent_ng_template_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RegistrationComponent_ng_template_61_ng_container_0_Template, 4, 1, "ng-container", 5);
        }

        if (rf & 2) {
          var control_r5 = ctx.control;
          var validation_r7 = ctx.validation;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r5.hasError(validation_r7) && (control_r5.dirty || control_r5.touched));
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _c1 = function _c1(a2) {
        return {
          validation: "required",
          message: "first_name is required",
          control: a2
        };
      };

      var _c2 = function _c2(a2) {
        return {
          validation: "minlength",
          message: "first_name should have at least 3 symbols",
          control: a2
        };
      };

      var _c3 = function _c3(a2) {
        return {
          validation: "maxLength",
          message: "first_name should have maximum 100 symbols",
          control: a2
        };
      };

      var _c4 = function _c4(a2) {
        return {
          validation: "required",
          message: "last_name is required",
          control: a2
        };
      };

      var _c5 = function _c5(a2) {
        return {
          validation: "minlength",
          message: "last_name should have at least 3 symbols",
          control: a2
        };
      };

      var _c6 = function _c6(a2) {
        return {
          validation: "maxLength",
          message: "last_name should have maximum 100 symbols",
          control: a2
        };
      };

      var _c7 = function _c7(a2) {
        return {
          validation: "required",
          message: "Email is required",
          control: a2
        };
      };

      var _c8 = function _c8(a2) {
        return {
          validation: "email",
          message: "Email is invalid",
          control: a2
        };
      };

      var _c9 = function _c9(a2) {
        return {
          validation: "minlength",
          message: "Email should have at least 3 symbols",
          control: a2
        };
      };

      var _c10 = function _c10(a2) {
        return {
          validation: "maxLength",
          message: "Email should have maximum 360 symbols",
          control: a2
        };
      };

      var _c11 = function _c11(a2) {
        return {
          validation: "required",
          message: "Password is required",
          control: a2
        };
      };

      var _c12 = function _c12(a2) {
        return {
          validation: "minlength",
          message: "Password should have at least 8 symbols",
          control: a2
        };
      };

      var _c13 = function _c13(a2) {
        return {
          validation: "maxLength",
          message: "Password should have maximum 100 symbols",
          control: a2
        };
      };

      var _c14 = function _c14(a2) {
        return {
          validation: "required",
          message: "Confirm Password is required",
          control: a2
        };
      };

      var _c15 = function _c15(a2) {
        return {
          validation: "minlength",
          message: "Confirm Password should have at least 8 symbols",
          control: a2
        };
      };

      var _c16 = function _c16(a2) {
        return {
          validation: "maxLength",
          message: "Confirm Password should have maximum 100 symbols",
          control: a2
        };
      };

      var RegistrationComponent = /*#__PURE__*/function () {
        function RegistrationComponent(fb, authService, router) {
          _classCallCheck(this, RegistrationComponent);

          this.fb = fb;
          this.authService = authService;
          this.router = router; // private fields

          this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

          this.isLoading$ = this.authService.isLoading$; // redirect to home if already logged in

          if (this.authService.currentUserValue) {
            this.router.navigate(['/']);
          }
        }

        _createClass(RegistrationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initForm();
          } // convenience getter for easy access to form fields

        }, {
          key: "f",
          get: function get() {
            return this.registrationForm.controls;
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.registrationForm = this.fb.group({
              first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)])],
              last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)])],
              email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(320)])],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)])],
              cPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)])],
              agree: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])]
            }, {
              validator: _confirm_password_validator__WEBPACK_IMPORTED_MODULE_2__["ConfirmPasswordValidator"].MatchPassword
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this = this;

            this.hasError = false;
            var result = {};
            Object.keys(this.f).forEach(function (key) {
              result[key] = _this.f[key].value;
            });
            console.log(result);
            var email = result.email,
                first_name = result.first_name,
                last_name = result.last_name,
                password = result.password,
                cPassword = result.cPassword;
            var newUser = {
              email: email,
              first_name: first_name,
              last_name: last_name,
              password: password,
              password_confirmation: cPassword
            }; // const newUser = new UserModel();
            // newUser.setUser(result);

            var registrationSubscr = this.authService.registration(newUser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (user) {
              console.log('registrationSubscr:', user);

              if (user) {
                _this.router.navigate(['/']);
              } else {
                _this.hasError = true;
              }
            });
            this.unsubscribe.push(registrationSubscr);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribe.forEach(function (sb) {
              return sb.unsubscribe();
            });
          }
        }]);

        return RegistrationComponent;
      }();

      RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) {
        return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegistrationComponent,
        selectors: [["app-registration"]],
        decls: 63,
        vars: 86,
        consts: [[1, "login-form", "login-signup"], ["novalidate", "novalidate", "id", "kt_login_signup_form", 1, "form", 3, "formGroup", "ngSubmit"], [1, "pb-13", "pt-lg-0", "pt-5"], [1, "font-weight-bolder", "text-dark", "font-size-h4", "font-size-h1-lg"], [1, "text-muted", "font-weight-bold", "font-size-h4"], [4, "ngIf"], [1, "form-group", "form-row"], [1, "col-md-6"], [1, "font-size-h6", "font-weight-bolder", "text-dark"], ["type", "text", "name", "first_name", "formControlName", "first_name", "placeholder", "First name", "autocomplete", "off", 1, "form-control", "form-control-solid", "h-auto", "py-7", "px-6", "rounded-lg", "font-size-h6", 3, "ngClass"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "text", "name", "last_name", "formControlName", "last_name", "placeholder", "Last name", "autocomplete", "off", 1, "form-control", "form-control-solid", "h-auto", "py-7", "px-6", "rounded-lg", "font-size-h6", 3, "ngClass"], [1, "form-group"], ["type", "email", "placeholder", "Email", "name", "email", "formControlName", "email", "autocomplete", "off", 1, "form-control", "form-control-solid", "h-auto", "py-7", "px-6", "rounded-lg", "font-size-h6", 3, "ngClass"], [1, "font-size-h6", "font-weight-bolder", "text-dark", "pt-5"], ["type", "password", "placeholder", "Password", "name", "password", "formControlName", "password", "autocomplete", "off", 1, "form-control", "form-control-solid", "h-auto", "py-7", "px-6", "rounded-lg", "font-size-h6", 3, "ngClass"], ["type", "password", "placeholder", "Confirm password", "name", "cPassword", "autocomplete", "off", "formControlName", "cPassword", 1, "form-control", "form-control-solid", "h-auto", "py-7", "px-6", "rounded-lg", "font-size-h6", 3, "ngClass"], [1, "checkbox", "mb-0"], ["type", "checkbox", "formControlName", "agree", "name", "agree"], ["href", "https://keenthemes.com/metronic/?page=faq", "target", "_blank"], [1, "form-group", "d-flex", "flex-wrap", "pb-lg-0", "pb-3"], ["type", "submit", "id", "kt_login_signup_submit", 1, "btn", "btn-primary", "font-weight-bolder", "font-size-h6", "px-8", "py-4", "my-3", "mr-4", 3, "disabled"], ["routerLink", "/auth/login", "type", "button", "id", "kt_login_signup_cancel", 1, "btn", "btn-light-primary", "font-weight-bolder", "font-size-h6", "px-8", "py-4", "my-3"], ["formError", ""], [1, "mb-10", "alert", "alert-custom", "alert-light-danger", "alert-dismissible"], [1, "alert-text"], [1, "fv-plugins-message-container"], [1, "fv-help-block"], [1, "spinner", "spinner-primary", "ml-5"]],
        template: function RegistrationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_1_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Sign Up ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Enter your details to create your account ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RegistrationComponent_ng_container_7_Template, 4, 0, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](13, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](14, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](15, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](20, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](21, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](22, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](27, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](28, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](29, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](30, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](35, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](36, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](37, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Confirm Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](42, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](43, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](44, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, RegistrationComponent_ng_container_45_Template, 4, 0, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\xA0I Agree the\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "terms and conditions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, ".\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, RegistrationComponent_ng_container_59_Template, 2, 0, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, RegistrationComponent_ng_template_61_Template, 1, 1, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registrationForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](44, _c0, ctx.registrationForm.controls["first_name"].invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](46, _c1, ctx.registrationForm.controls["first_name"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](48, _c2, ctx.registrationForm.controls["first_name"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](50, _c3, ctx.registrationForm.controls["first_name"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](52, _c0, ctx.registrationForm.controls["last_name"].invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](54, _c4, ctx.registrationForm.controls["last_name"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](56, _c5, ctx.registrationForm.controls["last_name"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](58, _c6, ctx.registrationForm.controls["last_name"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](60, _c0, ctx.registrationForm.controls["email"].invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](62, _c7, ctx.registrationForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](64, _c8, ctx.registrationForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](66, _c9, ctx.registrationForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](68, _c10, ctx.registrationForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](70, _c0, ctx.registrationForm.controls["password"].invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](72, _c11, ctx.registrationForm.controls["password"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](74, _c12, ctx.registrationForm.controls["password"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](76, _c13, ctx.registrationForm.controls["password"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](78, _c0, ctx.registrationForm.controls["cPassword"].invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](80, _c14, ctx.registrationForm.controls["cPassword"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](82, _c15, ctx.registrationForm.controls["cPassword"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](84, _c16, ctx.registrationForm.controls["cPassword"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registrationForm.controls["cPassword"].errors && ctx.registrationForm.controls["cPassword"].errors.ConfirmPassword);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.registrationForm.invalid || !ctx.registrationForm.controls["agree"].value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 42, ctx.isLoading$));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
        styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 992px) {\n  [_nghost-%COMP%]   .login-form[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 450px;\n  }\n  [_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjtBQUFFO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7RUFFSjtFQUFJO0lBQ0UsV0FBQTtFQUVOO0FBQ0YiLCJmaWxlIjoicmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgLmxvZ2luLWZvcm0ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuXG4gICAgICAubWF0LWZvcm0tZmllbGQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-registration',
            templateUrl: './registration.component.html',
            styleUrls: ['./registration.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "6n5F":
    /*!*******************************************************!*\
      !*** ./src/app/modules/auth/login/login.component.ts ***!
      \*******************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function n5F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var angularx_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angularx-social-login */
      "ahC7");
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @env/environment */
      "AytR");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_services/auth.service */
      "+BVi");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function LoginComponent_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "The login details are incorrect");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }
      }

      function LoginComponent_ng_container_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }
      }

      function LoginComponent_ng_template_38_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var message_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().message;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", message_r5, " ");
        }
      }

      function LoginComponent_ng_template_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoginComponent_ng_template_38_ng_container_0_Template, 4, 1, "ng-container", 6);
        }

        if (rf & 2) {
          var control_r4 = ctx.control;
          var validation_r6 = ctx.validation;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", control_r4.hasError(validation_r6) && (control_r4.dirty || control_r4.touched));
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _c1 = function _c1(a2) {
        return {
          validation: "required",
          message: "Email is required",
          control: a2
        };
      };

      var _c2 = function _c2(a2) {
        return {
          validation: "email",
          message: "Email is invalid",
          control: a2
        };
      };

      var _c3 = function _c3(a2) {
        return {
          validation: "minLength",
          message: "Email should have at least 3 symbols",
          control: a2
        };
      };

      var _c4 = function _c4(a2) {
        return {
          validation: "maxLength",
          message: "Email should have maximum 360 symbols",
          control: a2
        };
      };

      var _c5 = function _c5(a2) {
        return {
          validation: "required",
          message: "Password is required",
          control: a2
        };
      };

      var _c6 = function _c6(a2) {
        return {
          validation: "minlength",
          message: "Password should have at least 3 symbols",
          control: a2
        };
      };

      var _c7 = function _c7(a2) {
        return {
          validation: "maxLength",
          message: "Password should have maximum 100 symbols",
          control: a2
        };
      };

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(fb, authService, route, router, socialAuthService) {
          _classCallCheck(this, LoginComponent);

          this.fb = fb;
          this.authService = authService;
          this.route = route;
          this.router = router;
          this.socialAuthService = socialAuthService;
          this.appName = _env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].appName; // KeenThemes mock, change it to:
          // defaultAuth = {
          //   email: '',
          //   password: '',
          // };

          this.defaultAuth = {
            email: '',
            password: ''
          }; // private fields

          this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

          this.isLoading$ = this.authService.isLoading$; // redirect to home if already logged in

          if (this.authService.currentUserValue) {
            this.router.navigate(['/']).then();
          }
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initForm(); // get return url from route parameters or default to '/'

            this.returnUrl = this.route.snapshot.queryParams['returnUrl'.toString()] || '/';
          } // convenience getter for easy access to form fields

        }, {
          key: "f",
          get: function get() {
            return this.loginForm.controls;
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.loginForm = this.fb.group({
              email: [this.defaultAuth.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(320)])],
              password: [this.defaultAuth.password, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)])]
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this2 = this;

            this.hasError = false;
            var loginSub = this.authService.login(this.f.email.value, this.f.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (user) {
              if (user) {
                _this2.router.navigate([_this2.returnUrl]).then();
              } else {
                _this2.hasError = true;
              }
            });
            this.unsubscribe.push(loginSub);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribe.forEach(function (sb) {
              return sb.unsubscribe();
            });
          }
        }, {
          key: "signInWithFB",
          value: function signInWithFB() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var res, userRes;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["FacebookLoginProvider"].PROVIDER_ID);

                    case 2:
                      res = _context.sent;
                      console.log(res);

                      if (!res) {
                        _context.next = 15;
                        break;
                      }

                      _context.next = 7;
                      return this.authService.fbLogin(res).toPromise();

                    case 7:
                      userRes = _context.sent;
                      console.log('userRes:', userRes);

                      if (!userRes) {
                        _context.next = 14;
                        break;
                      }

                      _context.next = 12;
                      return this.router.navigate([this.returnUrl]);

                    case 12:
                      _context.next = 15;
                      break;

                    case 14:
                      this.hasError = true;

                    case 15:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["SocialAuthService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 40,
        vars: 44,
        consts: [[1, "login-form", "login-signin"], ["novalidate", "novalidate", "id", "kt_login_signin_form", 1, "form", 3, "formGroup", "ngSubmit"], [1, "pb-13", "pt-lg-0", "pt-5"], [1, "font-weight-bolder", "text-dark", "font-size-h4", "font-size-h1-lg"], [1, "text-muted", "font-weight-bold", "font-size-h4"], ["routerLink", "/auth/registration", "id", "kt_login_signup", 1, "text-primary", "font-weight-bolder"], [4, "ngIf"], [1, "form-group"], [1, "font-size-h6", "font-weight-bolder", "text-dark"], ["type", "email", "name", "email", "formControlName", "email", "autocomplete", "off", 1, "form-control", "form-control-solid", "h-auto", "py-7", "px-6", "rounded-lg", 3, "ngClass"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "d-flex", "justify-content-between", "mt-n5"], [1, "font-size-h6", "font-weight-bolder", "text-dark", "pt-5"], ["routerLink", "/auth/forgot-password", "id", "kt_login_forgot", 1, "text-primary", "font-size-h6", "font-weight-bolder", "text-hover-primary", "pt-5"], ["type", "password", "name", "password", "autocomplete", "off", "formControlName", "password", 1, "form-control", "form-control-solid", "h-auto", "py-7", "px-6", "rounded-lg", 3, "ngClass"], [1, "pb-lg-0", "pb-5"], ["type", "submit", "id", "kt_login_signin_submit", 1, "btn", "btn-primary", "font-weight-bolder", "font-size-h6", "px-8", "py-4", "my-3", "mr-3", 3, "disabled"], ["type", "button", 1, "btn", "btn-light-primary", "font-weight-bolder", "px-8", "py-4", "my-3", "font-size-lg", 3, "click"], [1, "svg-icon", "svg-icon-md"], ["height", "20", "src", "./assets/media/svg/social-icons/facebook.svg"], ["formError", ""], [1, "mb-10", "alert", "alert-custom", "alert-light-danger", "alert-dismissible"], [1, "alert-text"], [1, "spinner", "spinner-primary", "ml-5"], [1, "fv-plugins-message-container"], [1, "fv-help-block"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "New Here? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LoginComponent_ng_container_10_Template, 4, 0, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](15, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](16, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](17, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](18, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Forgot Password ? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](26, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](27, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](28, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Sign In ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_32_listener() {
              return ctx.signInWithFB();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Sign in with Facebook ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, LoginComponent_ng_container_36_Template, 2, 0, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, LoginComponent_ng_template_38_Template, 1, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Welcome to ", ctx.appName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 22, "AUTH.GENERAL.SIGNUP_BUTTON"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasError);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](26, _c0, ctx.loginForm.controls["email"].invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](28, _c1, ctx.loginForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](30, _c2, ctx.loginForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](32, _c3, ctx.loginForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](34, _c4, ctx.loginForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](36, _c0, ctx.loginForm.controls["password"].invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](38, _c5, ctx.loginForm.controls["password"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](40, _c6, ctx.loginForm.controls["password"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](42, _c7, ctx.loginForm.controls["password"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 24, ctx.isLoading$));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
        styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 992px) {\n  [_nghost-%COMP%]   .login-form[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 450px;\n  }\n  [_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGO0FBQUU7RUFDRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQUVKO0VBQUk7SUFDRSxXQUFBO0VBRU47QUFDRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC5sb2dpbi1mb3JtIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LXdpZHRoOiA0NTBweDtcblxuICAgICAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }, {
            type: angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["SocialAuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "8DKb":
    /*!*********************************************************!*\
      !*** ./src/app/modules/auth/logout/logout.component.ts ***!
      \*********************************************************/

    /*! exports provided: LogoutComponent */

    /***/
    function DKb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
        return LogoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services/auth.service */
      "+BVi");

      var LogoutComponent = /*#__PURE__*/function () {
        function LogoutComponent(authService) {
          _classCallCheck(this, LogoutComponent);

          this.authService = authService;
          this.authService.logout();
        }

        _createClass(LogoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LogoutComponent;
      }();

      LogoutComponent.ɵfac = function LogoutComponent_Factory(t) {
        return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LogoutComponent,
        selectors: [["app-logout"]],
        decls: 2,
        vars: 0,
        template: function LogoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "logout works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-logout',
            templateUrl: './logout.component.html',
            styleUrls: ['./logout.component.scss']
          }]
        }], function () {
          return [{
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "NRzN":
    /*!************************************************!*\
      !*** ./src/app/modules/auth/auth.component.ts ***!
      \************************************************/

    /*! exports provided: AuthComponent */

    /***/
    function NRzN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
        return AuthComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthComponent = /*#__PURE__*/function () {
        function AuthComponent() {
          _classCallCheck(this, AuthComponent);

          this.today = new Date();
        }

        _createClass(AuthComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuthComponent;
      }();

      AuthComponent.ɵfac = function AuthComponent_Factory(t) {
        return new (t || AuthComponent)();
      };

      AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthComponent,
        selectors: [["app-auth"]],
        decls: 14,
        vars: 0,
        consts: [["id", "kt_login_wrapper", 1, "d-flex", "flex-column", "flex-root", "h-100"], ["id", "kt_login", 1, "login", "login-1", "login-signin-on", "d-flex", "flex-column", "flex-lg-row", "flex-column-fluid", "bg-white"], [1, "login-aside", "d-flex", "flex-column", "flex-row-auto", 2, "background-color", "#F2C98A"], [1, "d-flex", "flex-column-auto", "flex-column", "pt-lg-40", "pt-15"], ["href", "#", 1, "text-center", "mb-10"], ["src", "./assets/media/logos/logo-light.png", "alt", "", 1, "max-h-70px"], [1, "font-weight-bolder", "text-center", "font-size-h4", "font-size-h1-lg", 2, "color", "#986923"], [1, "aside-img", "d-flex", "flex-row-fluid", "bgi-no-repeat", "bgi-position-y-bottom", "bgi-position-x-center", 2, "background-image", "url('./assets/media/svg/illustrations/login-visual-1.svg')"], [1, "login-content", "flex-row-fluid", "d-flex", "flex-column", "justify-content-center", "position-relative", "overflow-hidden", "p-7", "mx-auto"], [1, "d-flex", "flex-column-fluid", "flex-center"]],
        template: function AuthComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Get FREE Like and make MONEY ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " with facebook like now ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: [".login.login-1[_ngcontent-%COMP%]   .login-aside[_ngcontent-%COMP%]   .aside-img[_ngcontent-%COMP%] {\n  min-height: 450px;\n}\n.login.login-1[_ngcontent-%COMP%]   .login-signin[_ngcontent-%COMP%], .login.login-1[_ngcontent-%COMP%]   .login-signup[_ngcontent-%COMP%], .login.login-1[_ngcontent-%COMP%]   .login-forgot[_ngcontent-%COMP%] {\n  display: none;\n}\n.login.login-1.login-signin-on[_ngcontent-%COMP%]   .login-signup[_ngcontent-%COMP%] {\n  display: none;\n}\n.login.login-1.login-signin-on[_ngcontent-%COMP%]   .login-signin[_ngcontent-%COMP%] {\n  display: block;\n}\n.login.login-1.login-signin-on[_ngcontent-%COMP%]   .login-forgot[_ngcontent-%COMP%] {\n  display: none;\n}\n.login.login-1.login-signup-on[_ngcontent-%COMP%]   .login-signup[_ngcontent-%COMP%] {\n  display: block;\n}\n.login.login-1.login-signup-on[_ngcontent-%COMP%]   .login-signin[_ngcontent-%COMP%] {\n  display: none;\n}\n.login.login-1.login-signup-on[_ngcontent-%COMP%]   .login-forgot[_ngcontent-%COMP%] {\n  display: none;\n}\n.login.login-1.login-forgot-on[_ngcontent-%COMP%]   .login-signup[_ngcontent-%COMP%] {\n  display: none;\n}\n.login.login-1.login-forgot-on[_ngcontent-%COMP%]   .login-signin[_ngcontent-%COMP%] {\n  display: none;\n}\n.login.login-1.login-forgot-on[_ngcontent-%COMP%]   .login-forgot[_ngcontent-%COMP%] {\n  display: block;\n}\n@media (min-width: 992px) {\n  .login.login-1[_ngcontent-%COMP%]   .login-aside[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 700px;\n  }\n  .login.login-1[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 500px;\n  }\n  .login.login-1[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 450px;\n  }\n}\n@media (min-width: 992px) and (max-width: 1399.98px) {\n  .login.login-1[_ngcontent-%COMP%]   .login-aside[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 450px;\n  }\n}\n@media (max-width: 991.98px) {\n  .login.login-1[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 400px;\n  }\n}\n@media (max-width: 575.98px) {\n  .login.login-1[_ngcontent-%COMP%]   .aside-img[_ngcontent-%COMP%] {\n    min-height: 300px !important;\n    background-size: 400px;\n  }\n  .login.login-1[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n  }\n}\n[_nghost-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zYXNzL3BhZ2VzL2xvZ2luL2xvZ2luLTEuc2NzcyIsIi4uLy4uLy4uLy4uL2F1dGguY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdRO0VBQ0ksaUJBQUE7QUNWWjtBRGVJOzs7RUFHSSxhQUFBO0FDYlI7QURpQlE7RUFDSSxhQUFBO0FDZlo7QURrQlE7RUFDSSxjQUFBO0FDaEJaO0FEbUJRO0VBQ0ksYUFBQTtBQ2pCWjtBRHNCUTtFQUNJLGNBQUE7QUNwQlo7QUR1QlE7RUFDSSxhQUFBO0FDckJaO0FEd0JRO0VBQ0ksYUFBQTtBQ3RCWjtBRDJCUTtFQUNJLGFBQUE7QUN6Qlo7QUQ0QlE7RUFDSSxhQUFBO0FDMUJaO0FENkJRO0VBQ0ksY0FBQTtBQzNCWjtBQzBCSTtFRlNJO0lBQ0ksV0FBQTtJQUNBLGdCQUFBO0VDL0JWO0VEa0NNO0lBQ0ksV0FBQTtJQUNBLGdCQUFBO0VDaENWO0VEa0NVO0lBQ0ksV0FBQTtJQUNBLGdCQUFBO0VDaENkO0FBQ0Y7QUN1Q0k7RUZDSTtJQUNJLFdBQUE7SUFDQSxnQkFBQTtFQ3JDVjtBQUNGO0FDa0JJO0VGMkJRO0lBQ0ksV0FBQTtJQUNBLGdCQUFBO0VDMUNkO0FBQ0Y7QUNZSTtFRnNDSTtJQUNJLDRCQUFBO0lBQ0Esc0JBQUE7RUMvQ1Y7RURtRFU7SUFDSSxXQUFBO0lBQ0EsZUFBQTtFQ2pEZDtBQUNGO0FBckVBO0VBQ0UsWUFBQTtBQXVFRiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vIExvZ2luIDFcbi8vIFBhZ2VzIFNBU1MgZmlsZXMgYXJlIGNvbXBpbGVkIGludG8gc2VwYXJhdGUgY3NzIGZpbGVzXG4vL1xuXG5cbi8vIEluaXRpYWxpemF0aW9uIG9mIGdsb2JhbCB2YXJpYWJsZXMsIG1peGlucyBhbmQgZnVuY3Rpb25zXG5AaW1wb3J0IFwiLi4vLi4vaW5pdFwiO1xuXG4ubG9naW4ubG9naW4tMSB7XG4gICAgLmxvZ2luLWFzaWRlIHtcbiAgICAgICAgLmFzaWRlLWltZyB7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA0NTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZvcm0gbW9kZXNcbiAgICAubG9naW4tc2lnbmluLFxuICAgIC5sb2dpbi1zaWdudXAsXG4gICAgLmxvZ2luLWZvcmdvdCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJi5sb2dpbi1zaWduaW4tb24ge1xuICAgICAgICAubG9naW4tc2lnbnVwIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAubG9naW4tc2lnbmluIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ2luLWZvcmdvdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5sb2dpbi1zaWdudXAtb24ge1xuICAgICAgICAubG9naW4tc2lnbnVwIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ2luLXNpZ25pbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ2luLWZvcmdvdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5sb2dpbi1mb3Jnb3Qtb24ge1xuICAgICAgICAubG9naW4tc2lnbnVwIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAubG9naW4tc2lnbmluIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAubG9naW4tZm9yZ290IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBEZXNrdG9wIHZpZXdcbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcbiAgICAubG9naW4ubG9naW4tMSB7XG4gICAgICAgIC5sb2dpbi1hc2lkZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubG9naW4tY29udGVudCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG5cbiAgICAgICAgICAgIC5sb2dpbi1mb3JtIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBUYWJsZXQgYW5kIE1vYmlsZSBtb2RlXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWJldHdlZW4obGcsIHhsKSB7XG4gICAgLmxvZ2luLmxvZ2luLTEge1xuICAgICAgICAubG9naW4tYXNpZGUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBUYWJsZXQgbW9kZVxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKG1kKSB7XG4gICAgLmxvZ2luLmxvZ2luLTEge1xuICAgICAgICAubG9naW4tY29udGVudCB7XG4gICAgICAgICAgICAubG9naW4tZm9ybSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gTW9iaWxlIG1vZGVcbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bih4cykge1xuICAgIC5sb2dpbi5sb2dpbi0xIHtcbiAgICAgICAgLmFzaWRlLWltZyB7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dpbi1jb250ZW50IHtcbiAgICAgICAgICAgIC5sb2dpbi1mb3JtIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvcGFnZXMvbG9naW4vbG9naW4tMS5zY3NzXCI7XG5cbjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufSIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-auth',
            templateUrl: './auth.component.html',
            styleUrls: ['./auth.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "SiHH":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/auth/forgot-password/forgot-password.component.ts ***!
      \***************************************************************************/

    /*! exports provided: ForgotPasswordComponent */

    /***/
    function SiHH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
        return ForgotPasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_services/auth.service */
      "+BVi");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function ForgotPasswordComponent_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The email detail is incorrect");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ForgotPasswordComponent_ng_container_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ForgotPasswordComponent_ng_container_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email is correct!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Message with 'recovery' instruction");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " has been sent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Ok, got it! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ForgotPasswordComponent_ng_template_23_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var message_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().message;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r6, " ");
        }
      }

      function ForgotPasswordComponent_ng_template_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ForgotPasswordComponent_ng_template_23_ng_container_0_Template, 4, 1, "ng-container", 5);
        }

        if (rf & 2) {
          var control_r5 = ctx.control;
          var validation_r7 = ctx.validation;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r5.hasError(validation_r7) && (control_r5.dirty || control_r5.touched));
        }
      }

      var _c0 = function _c0(a0) {
        return {
          display: a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _c2 = function _c2(a2) {
        return {
          validation: "required",
          message: "Email is required",
          control: a2
        };
      };

      var _c3 = function _c3(a2) {
        return {
          validation: "email",
          message: "Email is invalid",
          control: a2
        };
      };

      var _c4 = function _c4(a2) {
        return {
          validation: "minLength",
          message: "Email should have at least 3 symbols",
          control: a2
        };
      };

      var _c5 = function _c5(a2) {
        return {
          validation: "maxLength",
          message: "Email should have maximum 360 symbols",
          control: a2
        };
      };

      var ErrorStates;

      (function (ErrorStates) {
        ErrorStates[ErrorStates["NotSubmitted"] = 0] = "NotSubmitted";
        ErrorStates[ErrorStates["HasError"] = 1] = "HasError";
        ErrorStates[ErrorStates["NoError"] = 2] = "NoError";
      })(ErrorStates || (ErrorStates = {}));

      var ForgotPasswordComponent = /*#__PURE__*/function () {
        function ForgotPasswordComponent(fb, authService) {
          _classCallCheck(this, ForgotPasswordComponent);

          this.fb = fb;
          this.authService = authService;
          this.errorState = ErrorStates.NotSubmitted;
          this.errorStates = ErrorStates; // private fields

          this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

          this.isLoading$ = this.authService.isLoading$;
        }

        _createClass(ForgotPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initForm();
          } // convenience getter for easy access to form fields

        }, {
          key: "f",
          get: function get() {
            return this.forgotPasswordForm.controls;
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.forgotPasswordForm = this.fb.group({
              email: ['admin@demo.com', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(320)])]
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this3 = this;

            this.errorState = ErrorStates.NotSubmitted;
            var forgotPasswordSubscr = this.authService.forgotPassword(this.f.email.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (result) {
              _this3.errorState = result ? ErrorStates.NoError : ErrorStates.HasError;
            });
            this.unsubscribe.push(forgotPasswordSubscr);
          }
        }]);

        return ForgotPasswordComponent;
      }();

      ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
        return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      };

      ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ForgotPasswordComponent,
        selectors: [["app-forgot-password"]],
        decls: 25,
        vars: 28,
        consts: [[1, "login-form", "login-forgot"], ["novalidate", "novalidate", "id", "kt_login_forgot_form", 1, "form", "fv-plugins-bootstrap", "fv-plugins-framework", 3, "formGroup", "ngStyle", "ngSubmit"], [1, "pb-13", "pt-lg-0", "pt-5"], [1, "font-weight-bolder", "text-dark", "font-size-h4", "font-size-h1-lg"], [1, "text-muted", "font-weight-bold", "font-size-h4"], [4, "ngIf"], [1, "form-group", "fv-plugins-icon-container", "has-danger"], ["type", "email", "formControlName", "email", "placeholder", "Email", "name", "email", "autocomplete", "off", 1, "form-control", "form-control-solid", "h-auto", "py-7", "px-6", "rounded-lg", "font-size-h6", 3, "ngClass"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "form-group", "d-flex", "flex-wrap", "pb-lg-0"], ["type", "submit", "id", "kt_login_forgot_submit", 1, "btn", "btn-primary", "font-weight-bolder", "font-size-h6", "px-8", "py-4", "my-3", "mr-4"], ["routerLink", "/auth/login", "id", "kt_login_forgot_cancel", 1, "btn", "btn-light-primary", "font-weight-bolder", "font-size-h6", "px-8", "py-4", "my-3"], ["formError", ""], [1, "mb-10", "alert", "alert-custom", "alert-light-danger", "alert-dismissible"], [1, "alert-text"], [1, "spinner", "spinner-primary", "ml-5"], [1, "card", "card-custom", "bgi-no-repeat", "gutter-b", 2, "height", "175px", "background-color", "#4ab58e", "background-position", "calc(100% + 1rem) bottom", "background-size", "25% auto", "background-image", "url(assets/media/svg/humans/custom-1.svg)"], [1, "card-body", "d-flex", "align-items-center"], [1, "py-2"], [1, "text-white", "font-weight-bolder", "mb-3"], [1, "text-white", "font-size-lg"], ["routerLink", "/auth/login", 1, "swal2-confirm", "btn", "font-weight-bold", "btn-light-primary"], [1, "fv-plugins-message-container"], [1, "fv-help-block"]],
        template: function ForgotPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_1_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Forgotten Password ? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Enter your email to reset your password ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ForgotPasswordComponent_ng_container_7_Template, 4, 0, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](10, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](11, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](12, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](13, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ForgotPasswordComponent_ng_container_19_Template, 2, 0, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ForgotPasswordComponent_ng_container_22_Template, 13, 0, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ForgotPasswordComponent_ng_template_23_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forgotPasswordForm)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.errorState === ctx.errorStates.NoError ? "none" : "block"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorState === ctx.errorStates.HasError);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c1, ctx.forgotPasswordForm.controls["email"].invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c2, ctx.forgotPasswordForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c3, ctx.forgotPasswordForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c4, ctx.forgotPasswordForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c5, ctx.forgotPasswordForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 14, ctx.isLoading$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorState === ctx.errorStates.NoError);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
        styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 992px) {\n  [_nghost-%COMP%]   .login-form[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 450px;\n  }\n  [_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjtBQUFFO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7RUFFSjtFQUFJO0lBQ0UsV0FBQTtFQUVOO0FBQ0YiLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgLmxvZ2luLWZvcm0ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuXG4gICAgICAubWF0LWZvcm0tZmllbGQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-forgot-password',
            templateUrl: './forgot-password.component.html',
            styleUrls: ['./forgot-password.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ahC7":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js ***!
      \*******************************************************************************************/

    /*! exports provided: AmazonLoginProvider, BaseLoginProvider, DummyLoginProvider, FacebookLoginProvider, GoogleLoginProvider, MicrosoftLoginProvider, SocialAuthService, SocialLoginModule, SocialUser, VKLoginProvider */

    /***/
    function ahC7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AmazonLoginProvider", function () {
        return AmazonLoginProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseLoginProvider", function () {
        return BaseLoginProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DummyLoginProvider", function () {
        return DummyLoginProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FacebookLoginProvider", function () {
        return FacebookLoginProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleLoginProvider", function () {
        return GoogleLoginProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MicrosoftLoginProvider", function () {
        return MicrosoftLoginProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SocialAuthService", function () {
        return SocialAuthService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SocialLoginModule", function () {
        return SocialLoginModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SocialUser", function () {
        return SocialUser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VKLoginProvider", function () {
        return VKLoginProvider;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      "mrSG");

      var BaseLoginProvider = /*#__PURE__*/function () {
        function BaseLoginProvider() {
          _classCallCheck(this, BaseLoginProvider);
        }

        _createClass(BaseLoginProvider, [{
          key: "loadScript",
          value: function loadScript(id, src, onload) {
            var parentElement = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

            // get document if platform is only browser
            if (typeof document !== 'undefined' && !document.getElementById(id)) {
              var signInJS = document.createElement('script');
              signInJS.async = true;
              signInJS.src = src;
              signInJS.onload = onload;

              if (!parentElement) {
                parentElement = document.head;
              }

              parentElement.appendChild(signInJS);
            }
          }
        }]);

        return BaseLoginProvider;
      }();

      var SocialUser = function SocialUser() {
        _classCallCheck(this, SocialUser);
      };

      var GoogleLoginProvider = /*#__PURE__*/function (_BaseLoginProvider) {
        _inherits(GoogleLoginProvider, _BaseLoginProvider);

        var _super = _createSuper(GoogleLoginProvider);

        function GoogleLoginProvider(clientId) {
          var _this4;

          var initOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            scope: 'email'
          };

          _classCallCheck(this, GoogleLoginProvider);

          _this4 = _super.call(this);
          _this4.clientId = clientId;
          _this4.initOptions = initOptions;
          return _this4;
        }

        _createClass(GoogleLoginProvider, [{
          key: "initialize",
          value: function initialize() {
            var _this5 = this;

            return new Promise(function (resolve, reject) {
              try {
                _this5.loadScript(GoogleLoginProvider.PROVIDER_ID, 'https://apis.google.com/js/platform.js', function () {
                  gapi.load('auth2', function () {
                    _this5.auth2 = gapi.auth2.init(Object.assign(Object.assign({}, _this5.initOptions), {
                      client_id: _this5.clientId
                    }));

                    _this5.auth2.then(function () {
                      resolve();
                    })["catch"](function (err) {
                      reject(err);
                    });
                  });
                });
              } catch (err) {
                reject(err);
              }
            });
          }
        }, {
          key: "getLoginStatus",
          value: function getLoginStatus(loginStatusOptions) {
            var _this6 = this;

            var options = Object.assign(Object.assign({}, this.initOptions), loginStatusOptions);
            return new Promise(function (resolve, reject) {
              if (_this6.auth2.isSignedIn.get()) {
                var user = new SocialUser();

                var profile = _this6.auth2.currentUser.get().getBasicProfile();

                var authResponse = _this6.auth2.currentUser.get().getAuthResponse(true); // get complete authResponse object


                user.id = profile.getId();
                user.name = profile.getName();
                user.email = profile.getEmail();
                user.photoUrl = profile.getImageUrl();
                user.firstName = profile.getGivenName();
                user.lastName = profile.getFamilyName();
                user.response = authResponse;

                var resolveUser = function resolveUser(authResponse) {
                  user.authToken = authResponse.access_token;
                  user.idToken = authResponse.id_token;
                  resolve(user);
                };

                if (options.refreshToken) {
                  _this6.auth2.currentUser.get().reloadAuthResponse().then(resolveUser);
                } else {
                  var _authResponse = _this6.auth2.currentUser.get().getAuthResponse(true);

                  resolveUser(_authResponse);
                }
              } else {
                reject("No user is currently logged in with ".concat(GoogleLoginProvider.PROVIDER_ID));
              }
            });
          }
        }, {
          key: "signIn",
          value: function signIn(signInOptions) {
            var _this7 = this;

            var options = Object.assign(Object.assign({}, this.initOptions), signInOptions);
            return new Promise(function (resolve, reject) {
              var offlineAccess = options && options.offline_access;
              var promise = !offlineAccess ? _this7.auth2.signIn(signInOptions) : _this7.auth2.grantOfflineAccess(signInOptions);
              promise.then(function (response) {
                var user = new SocialUser();

                if (response && response.code) {
                  user.authorizationCode = response.code;
                } else {
                  var profile = _this7.auth2.currentUser.get().getBasicProfile();

                  var authResponse = _this7.auth2.currentUser.get().getAuthResponse(true);

                  var token = authResponse.access_token;
                  var backendToken = authResponse.id_token;
                  user.id = profile.getId();
                  user.name = profile.getName();
                  user.email = profile.getEmail();
                  user.photoUrl = profile.getImageUrl();
                  user.firstName = profile.getGivenName();
                  user.lastName = profile.getFamilyName();
                  user.authToken = token;
                  user.idToken = backendToken;
                  user.response = authResponse;
                }

                resolve(user);
              }, function (closed) {
                reject(closed);
              })["catch"](function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "signOut",
          value: function signOut(revoke) {
            var _this8 = this;

            return new Promise(function (resolve, reject) {
              var signOutPromise;

              if (revoke) {
                signOutPromise = _this8.auth2.disconnect();
              } else {
                signOutPromise = _this8.auth2.signOut();
              }

              signOutPromise.then(function (err) {
                if (err) {
                  reject(err);
                } else {
                  resolve();
                }
              })["catch"](function (err) {
                reject(err);
              });
            });
          }
        }]);

        return GoogleLoginProvider;
      }(BaseLoginProvider);

      GoogleLoginProvider.PROVIDER_ID = 'GOOGLE';
      /** @dynamic */

      var SocialAuthService = /*#__PURE__*/function () {
        function SocialAuthService(config) {
          var _this9 = this;

          _classCallCheck(this, SocialAuthService);

          this.providers = new Map();
          this.autoLogin = false;
          this._user = null;
          this._authState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
          /* Consider making this an enum comprising LOADING, LOADED, FAILED etc. */

          this.initialized = false;
          this._initState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();

          if (config instanceof Promise) {
            config.then(function (config) {
              _this9.initialize(config);
            });
          } else {
            this.initialize(config);
          }
        }

        _createClass(SocialAuthService, [{
          key: "authState",
          get: function get() {
            return this._authState.asObservable();
          }
        }, {
          key: "initState",
          get: function get() {
            return this._initState.asObservable();
          }
        }, {
          key: "initialize",
          value: function initialize(config) {
            var _this10 = this;

            this.autoLogin = config.autoLogin !== undefined ? config.autoLogin : false;
            var _config$onError = config.onError,
                onError = _config$onError === void 0 ? console.error : _config$onError;
            config.providers.forEach(function (item) {
              _this10.providers.set(item.id, item.provider);
            });
            Promise.all(Array.from(this.providers.values()).map(function (provider) {
              return provider.initialize();
            })).then(function () {
              if (_this10.autoLogin) {
                var loginStatusPromises = [];
                var loggedIn = false;

                _this10.providers.forEach(function (provider, key) {
                  var promise = provider.getLoginStatus();
                  loginStatusPromises.push(promise);
                  promise.then(function (user) {
                    user.provider = key;
                    _this10._user = user;

                    _this10._authState.next(user);

                    loggedIn = true;
                  })["catch"](console.debug);
                });

                Promise.all(loginStatusPromises)["catch"](function () {
                  if (!loggedIn) {
                    _this10._user = null;

                    _this10._authState.next(null);
                  }
                });
              }
            })["catch"](function (error) {
              onError(error);
            })["finally"](function () {
              _this10.initialized = true;

              _this10._initState.next(_this10.initialized);

              _this10._initState.complete();
            });
          }
        }, {
          key: "refreshAuthToken",
          value: function refreshAuthToken(providerId) {
            var _this11 = this;

            return new Promise(function (resolve, reject) {
              if (!_this11.initialized) {
                reject(SocialAuthService.ERR_NOT_INITIALIZED);
              } else if (providerId !== GoogleLoginProvider.PROVIDER_ID) {
                reject(SocialAuthService.ERR_NOT_SUPPORTED_FOR_REFRESH_TOKEN);
              } else {
                var providerObject = _this11.providers.get(providerId);

                if (providerObject) {
                  providerObject.getLoginStatus({
                    refreshToken: true
                  }).then(function (user) {
                    user.provider = providerId;
                    _this11._user = user;

                    _this11._authState.next(user);

                    resolve();
                  })["catch"](function (err) {
                    reject(err);
                  });
                } else {
                  reject(SocialAuthService.ERR_LOGIN_PROVIDER_NOT_FOUND);
                }
              }
            });
          }
        }, {
          key: "signIn",
          value: function signIn(providerId, signInOptions) {
            var _this12 = this;

            return new Promise(function (resolve, reject) {
              if (!_this12.initialized) {
                reject(SocialAuthService.ERR_NOT_INITIALIZED);
              } else {
                var providerObject = _this12.providers.get(providerId);

                if (providerObject) {
                  providerObject.signIn(signInOptions).then(function (user) {
                    user.provider = providerId;
                    resolve(user);
                    _this12._user = user;

                    _this12._authState.next(user);
                  })["catch"](function (err) {
                    reject(err);
                  });
                } else {
                  reject(SocialAuthService.ERR_LOGIN_PROVIDER_NOT_FOUND);
                }
              }
            });
          }
        }, {
          key: "signOut",
          value: function signOut() {
            var _this13 = this;

            var revoke = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            return new Promise(function (resolve, reject) {
              if (!_this13.initialized) {
                reject(SocialAuthService.ERR_NOT_INITIALIZED);
              } else if (!_this13._user) {
                reject(SocialAuthService.ERR_NOT_LOGGED_IN);
              } else {
                var providerId = _this13._user.provider;

                var providerObject = _this13.providers.get(providerId);

                if (providerObject) {
                  providerObject.signOut(revoke).then(function () {
                    resolve();
                    _this13._user = null;

                    _this13._authState.next(null);
                  })["catch"](function (err) {
                    reject(err);
                  });
                } else {
                  reject(SocialAuthService.ERR_LOGIN_PROVIDER_NOT_FOUND);
                }
              }
            });
          }
        }]);

        return SocialAuthService;
      }();

      SocialAuthService.ɵfac = function SocialAuthService_Factory(t) {
        return new (t || SocialAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('SocialAuthServiceConfig'));
      };

      SocialAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SocialAuthService,
        factory: SocialAuthService.ɵfac
      });
      SocialAuthService.ERR_LOGIN_PROVIDER_NOT_FOUND = 'Login provider not found';
      SocialAuthService.ERR_NOT_LOGGED_IN = 'Not logged in';
      SocialAuthService.ERR_NOT_INITIALIZED = 'Login providers not ready yet. Are there errors on your console?';
      SocialAuthService.ERR_NOT_SUPPORTED_FOR_REFRESH_TOKEN = 'Chosen login provider is not supported for refreshing a token';

      SocialAuthService.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['SocialAuthServiceConfig']
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialAuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: ['SocialAuthServiceConfig']
            }]
          }];
        }, null);
      })();

      var SocialLoginModule = /*#__PURE__*/function () {
        function SocialLoginModule(parentModule) {
          _classCallCheck(this, SocialLoginModule);

          if (parentModule) {
            throw new Error('SocialLoginModule is already loaded. Import it in the AppModule only');
          }
        }

        _createClass(SocialLoginModule, null, [{
          key: "initialize",
          value: function initialize(config) {
            return {
              ngModule: SocialLoginModule,
              providers: [SocialAuthService, {
                provide: 'SocialAuthServiceConfig',
                useValue: config
              }]
            };
          }
        }]);

        return SocialLoginModule;
      }();

      SocialLoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SocialLoginModule
      });
      SocialLoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SocialLoginModule_Factory(t) {
          return new (t || SocialLoginModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SocialLoginModule, 12));
        },
        providers: [SocialAuthService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
      });

      SocialLoginModule.ctorParameters = function () {
        return [{
          type: SocialLoginModule,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }];
      };

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SocialLoginModule, {
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialLoginModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            providers: [SocialAuthService]
          }]
        }], function () {
          return [{
            type: SocialLoginModule,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }];
        }, null);
      })(); // Simulates login / logout without actually requiring an Internet connection.
      //
      // Useful for certain development situations.
      //
      // For example, if you want to simulate the greatest football referee England has ever produced:
      //
      //  const dummyUser: SocialUser = {
      //     id: '0123456789',
      //     name: 'Howard Webb',
      //     email: 'howard@webb.com',
      //     firstName: 'Howard',
      //     lastName: 'Webb',
      //     authToken: 'dummyAuthToken',
      //     photoUrl: 'https://en.wikipedia.org/wiki/Howard_Webb#/media/File:Howard_Webb_march11.jpg',
      //     provider: 'DUMMY',
      //     idToken: 'dummyIdToken',
      //     authorizationCode: 'dummyAuthCode'
      // };
      //
      //  let config = new AuthServiceConfig([
      //  { ... },
      //  {
      //       id: DummyLoginProvider.PROVIDER_ID,
      //       provider: new DummyLoginProvider(dummyUser)  // Pass your user into the constructor
      //   },
      //  { ... }
      //  ]);


      var DummyLoginProvider = /*#__PURE__*/function (_BaseLoginProvider2) {
        _inherits(DummyLoginProvider, _BaseLoginProvider2);

        var _super2 = _createSuper(DummyLoginProvider);

        function DummyLoginProvider(dummy) {
          var _this14;

          _classCallCheck(this, DummyLoginProvider);

          _this14 = _super2.call(this);

          if (dummy) {
            _this14.dummy = dummy;
          } else {
            _this14.dummy = DummyLoginProvider.DEFAULT_USER;
          } // Start not logged in


          _this14.loggedIn = false;
          return _this14;
        }

        _createClass(DummyLoginProvider, [{
          key: "getLoginStatus",
          value: function getLoginStatus() {
            var _this15 = this;

            return new Promise(function (resolve, reject) {
              if (_this15.loggedIn) {
                resolve(_this15.dummy);
              } else {
                reject('No user is currently logged in.');
              }
            });
          }
        }, {
          key: "initialize",
          value: function initialize() {
            return new Promise(function (resolve, reject) {
              resolve();
            });
          }
        }, {
          key: "signIn",
          value: function signIn() {
            var _this16 = this;

            return new Promise(function (resolve, reject) {
              _this16.loggedIn = true;
              resolve(_this16.dummy);
            });
          }
        }, {
          key: "signOut",
          value: function signOut(revoke) {
            var _this17 = this;

            return new Promise(function (resolve, reject) {
              _this17.loggedIn = false;
              resolve();
            });
          }
        }]);

        return DummyLoginProvider;
      }(BaseLoginProvider);

      DummyLoginProvider.PROVIDER_ID = 'DUMMY';
      DummyLoginProvider.DEFAULT_USER = {
        id: '1234567890',
        name: 'Mickey Mouse',
        email: 'mickey@mouse.com',
        firstName: 'Mickey',
        lastName: 'Mouse',
        authToken: 'dummyAuthToken',
        photoUrl: 'https://en.wikipedia.org/wiki/File:Mickey_Mouse.png',
        provider: 'DUMMY',
        idToken: 'dummyIdToken',
        authorizationCode: 'dummyAuthCode',
        response: {}
      };

      var FacebookLoginProvider = /*#__PURE__*/function (_BaseLoginProvider3) {
        _inherits(FacebookLoginProvider, _BaseLoginProvider3);

        var _super3 = _createSuper(FacebookLoginProvider);

        function FacebookLoginProvider(clientId) {
          var _this18;

          var initOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            scope: 'email,public_profile',
            locale: 'en_US',
            fields: 'name,email,picture,first_name,last_name',
            version: 'v4.0'
          };

          _classCallCheck(this, FacebookLoginProvider);

          _this18 = _super3.call(this);
          _this18.clientId = clientId;
          _this18.initOptions = initOptions;
          return _this18;
        }

        _createClass(FacebookLoginProvider, [{
          key: "initialize",
          value: function initialize() {
            var _this19 = this;

            return new Promise(function (resolve, reject) {
              try {
                _this19.loadScript(FacebookLoginProvider.PROVIDER_ID, "//connect.facebook.net/".concat(_this19.initOptions.locale, "/sdk.js"), function () {
                  FB.init({
                    appId: _this19.clientId,
                    autoLogAppEvents: true,
                    cookie: true,
                    xfbml: true,
                    version: _this19.initOptions.version
                  });
                  resolve();
                });
              } catch (err) {
                reject(err);
              }
            });
          }
        }, {
          key: "getLoginStatus",
          value: function getLoginStatus() {
            var _this20 = this;

            return new Promise(function (resolve, reject) {
              FB.getLoginStatus(function (response) {
                if (response.status === 'connected') {
                  var authResponse = response.authResponse;
                  FB.api("/me?fields=".concat(_this20.initOptions.fields), function (fbUser) {
                    var user = new SocialUser();
                    user.id = fbUser.id;
                    user.name = fbUser.name;
                    user.email = fbUser.email;
                    user.photoUrl = 'https://graph.facebook.com/' + fbUser.id + '/picture?type=normal';
                    user.firstName = fbUser.first_name;
                    user.lastName = fbUser.last_name;
                    user.authToken = authResponse.accessToken;
                    user.response = fbUser;
                    resolve(user);
                  });
                } else {
                  reject("No user is currently logged in with ".concat(FacebookLoginProvider.PROVIDER_ID));
                }
              });
            });
          }
        }, {
          key: "signIn",
          value: function signIn(signInOptions) {
            var options = Object.assign(Object.assign({}, this.initOptions), signInOptions);
            return new Promise(function (resolve, reject) {
              FB.login(function (response) {
                if (response.authResponse) {
                  var authResponse = response.authResponse;
                  FB.api("/me?fields=".concat(options.fields), function (fbUser) {
                    var user = new SocialUser();
                    user.id = fbUser.id;
                    user.name = fbUser.name;
                    user.email = fbUser.email;
                    user.photoUrl = 'https://graph.facebook.com/' + fbUser.id + '/picture?type=normal';
                    user.firstName = fbUser.first_name;
                    user.lastName = fbUser.last_name;
                    user.authToken = authResponse.accessToken;
                    user.response = fbUser;
                    resolve(user);
                  });
                } else {
                  reject('User cancelled login or did not fully authorize.');
                }
              }, options);
            });
          }
        }, {
          key: "signOut",
          value: function signOut() {
            return new Promise(function (resolve, reject) {
              FB.logout(function (response) {
                resolve();
              });
            });
          }
        }]);

        return FacebookLoginProvider;
      }(BaseLoginProvider);

      FacebookLoginProvider.PROVIDER_ID = 'FACEBOOK';

      var AmazonLoginProvider = /*#__PURE__*/function (_BaseLoginProvider4) {
        _inherits(AmazonLoginProvider, _BaseLoginProvider4);

        var _super4 = _createSuper(AmazonLoginProvider);

        function AmazonLoginProvider(clientId) {
          var _this21;

          var initOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            scope: 'profile',
            scope_data: {
              profile: {
                essential: false
              }
            },
            redirect_uri: location.origin
          };

          _classCallCheck(this, AmazonLoginProvider);

          _this21 = _super4.call(this);
          _this21.clientId = clientId;
          _this21.initOptions = initOptions;
          return _this21;
        }

        _createClass(AmazonLoginProvider, [{
          key: "initialize",
          value: function initialize() {
            var _this22 = this;

            var amazonRoot = null;

            if (document) {
              amazonRoot = document.createElement('div');
              amazonRoot.id = 'amazon-root';
              document.body.appendChild(amazonRoot);
            }

            window.onAmazonLoginReady = function () {
              amazon.Login.setClientId(_this22.clientId);
            };

            return new Promise(function (resolve, reject) {
              try {
                _this22.loadScript('amazon-login-sdk', 'https://assets.loginwithamazon.com/sdk/na/login1.js', function () {
                  resolve();
                }, amazonRoot);
              } catch (err) {
                reject(err);
              }
            });
          }
        }, {
          key: "getLoginStatus",
          value: function getLoginStatus() {
            var _this23 = this;

            return new Promise(function (resolve, reject) {
              var token = _this23.retrieveToken();

              if (token) {
                amazon.Login.retrieveProfile(token, function (response) {
                  if (response.success) {
                    var user = new SocialUser();
                    user.id = response.profile.CustomerId;
                    user.name = response.profile.Name;
                    user.email = response.profile.PrimaryEmail;
                    user.response = response.profile;
                    resolve(user);
                  } else {
                    reject(response.error);
                  }
                });
              } else {
                reject("No user is currently logged in with ".concat(AmazonLoginProvider.PROVIDER_ID));
              }
            });
          }
        }, {
          key: "signIn",
          value: function signIn(signInOptions) {
            var _this24 = this;

            var options = Object.assign(Object.assign({}, this.initOptions), signInOptions);
            return new Promise(function (resolve, reject) {
              amazon.Login.authorize(options, function (authResponse) {
                if (authResponse.error) {
                  reject(authResponse.error);
                } else {
                  amazon.Login.retrieveProfile(authResponse.access_token, function (response) {
                    var user = new SocialUser();
                    user.id = response.profile.CustomerId;
                    user.name = response.profile.Name;
                    user.email = response.profile.PrimaryEmail;
                    user.authToken = authResponse.access_token;
                    user.response = response.profile;

                    _this24.persistToken(authResponse.access_token);

                    resolve(user);
                  });
                }
              });
            });
          }
        }, {
          key: "signOut",
          value: function signOut(revoke) {
            var _this25 = this;

            return new Promise(function (resolve, reject) {
              try {
                amazon.Login.logout();

                _this25.clearToken();

                resolve();
              } catch (err) {
                reject(err.message);
              }
            });
          }
        }, {
          key: "persistToken",
          value: function persistToken(token) {
            localStorage.setItem("".concat(AmazonLoginProvider.PROVIDER_ID, "_token"), token);
          }
        }, {
          key: "retrieveToken",
          value: function retrieveToken() {
            return localStorage.getItem("".concat(AmazonLoginProvider.PROVIDER_ID, "_token"));
          }
        }, {
          key: "clearToken",
          value: function clearToken() {
            localStorage.removeItem("".concat(AmazonLoginProvider.PROVIDER_ID, "_token"));
          }
        }]);

        return AmazonLoginProvider;
      }(BaseLoginProvider);

      AmazonLoginProvider.PROVIDER_ID = 'AMAZON';

      var VKLoginProvider = /*#__PURE__*/function (_BaseLoginProvider5) {
        _inherits(VKLoginProvider, _BaseLoginProvider5);

        var _super5 = _createSuper(VKLoginProvider);

        function VKLoginProvider(clientId) {
          var _this26;

          var initOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            fields: 'photo_max,contacts',
            version: '5.124'
          };

          _classCallCheck(this, VKLoginProvider);

          _this26 = _super5.call(this);
          _this26.clientId = clientId;
          _this26.initOptions = initOptions;
          _this26.VK_API_URL = '//vk.com/js/api/openapi.js';
          _this26.VK_API_GET_USER = 'users.get';
          return _this26;
        }

        _createClass(VKLoginProvider, [{
          key: "initialize",
          value: function initialize() {
            var _this27 = this;

            return new Promise(function (resolve, reject) {
              try {
                _this27.loadScript(VKLoginProvider.PROVIDER_ID, _this27.VK_API_URL, function () {
                  VK.init({
                    apiId: _this27.clientId
                  });
                  resolve();
                });
              } catch (err) {
                reject(err);
              }
            });
          }
        }, {
          key: "getLoginStatus",
          value: function getLoginStatus() {
            var _this28 = this;

            return new Promise(function (resolve, reject) {
              return _this28.getLoginStatusInternal(resolve, reject);
            });
          }
        }, {
          key: "signIn",
          value: function signIn() {
            var _this29 = this;

            return new Promise(function (resolve, reject) {
              return _this29.signInInternal(resolve, reject);
            });
          }
        }, {
          key: "signOut",
          value: function signOut() {
            return new Promise(function (resolve, reject) {
              VK.Auth.logout(function (response) {
                resolve();
              });
            });
          }
        }, {
          key: "signInInternal",
          value: function signInInternal(resolve, reject) {
            var _this30 = this;

            VK.Auth.login(function (loginResponse) {
              if (loginResponse.status === 'connected') {
                _this30.getUser(loginResponse.session.mid, loginResponse.session.sid, resolve);
              }
            });
          }
        }, {
          key: "getUser",
          value: function getUser(userId, token, resolve) {
            var _this31 = this;

            VK.Api.call(this.VK_API_GET_USER, {
              user_id: userId,
              fields: this.initOptions.fields,
              v: this.initOptions.version
            }, function (userResponse) {
              resolve(_this31.createUser(Object.assign({}, {
                token: token
              }, userResponse.response[0])));
            });
          }
        }, {
          key: "getLoginStatusInternal",
          value: function getLoginStatusInternal(resolve, reject) {
            var _this32 = this;

            VK.Auth.getLoginStatus(function (loginResponse) {
              if (loginResponse.status === 'connected') {
                _this32.getUser(loginResponse.session.mid, loginResponse.session.sid, resolve);
              }
            });
          }
        }, {
          key: "createUser",
          value: function createUser(response) {
            var user = new SocialUser();
            user.id = response.id;
            user.name = "".concat(response.first_name, " ").concat(response.last_name);
            user.photoUrl = response.photo_max;
            user.authToken = response.token;
            return user;
          }
        }]);

        return VKLoginProvider;
      }(BaseLoginProvider);

      VKLoginProvider.PROVIDER_ID = 'VK';
      /**
       * Protocol modes supported by MSAL.
       */

      var ProtocolMode;

      (function (ProtocolMode) {
        ProtocolMode["AAD"] = "AAD";
        ProtocolMode["OIDC"] = "OIDC";
      })(ProtocolMode || (ProtocolMode = {}));

      var COMMON_AUTHORITY = 'https://login.microsoftonline.com/common/';
      /**
       * Microsoft Authentication using MSAL v2: https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-browser
       */

      var MicrosoftLoginProvider = /*#__PURE__*/function (_BaseLoginProvider6) {
        _inherits(MicrosoftLoginProvider, _BaseLoginProvider6);

        var _super6 = _createSuper(MicrosoftLoginProvider);

        function MicrosoftLoginProvider(clientId, initOptions) {
          var _this33;

          _classCallCheck(this, MicrosoftLoginProvider);

          _this33 = _super6.call(this);
          _this33.clientId = clientId;
          _this33.initOptions = {
            authority: COMMON_AUTHORITY,
            scopes: ['openid', 'email', 'profile', 'User.Read'],
            knownAuthorities: [],
            protocolMode: ProtocolMode.AAD,
            clientCapabilities: [],
            cacheLocation: 'sessionStorage'
          };
          _this33.initOptions = Object.assign(Object.assign({}, _this33.initOptions), initOptions);
          return _this33;
        }

        _createClass(MicrosoftLoginProvider, [{
          key: "initialize",
          value: function initialize() {
            var _this34 = this;

            return new Promise(function (resolve, reject) {
              _this34.loadScript(MicrosoftLoginProvider.PROVIDER_ID, 'https://alcdn.msauth.net/browser/2.1.0/js/msal-browser.js', function () {
                var _a;

                try {
                  var config = {
                    auth: {
                      clientId: _this34.clientId,
                      redirectUri: (_a = _this34.initOptions.redirect_uri) !== null && _a !== void 0 ? _a : location.origin,
                      authority: _this34.initOptions.authority,
                      knownAuthorities: _this34.initOptions.knownAuthorities,
                      protocolMode: _this34.initOptions.protocolMode,
                      clientCapabilities: _this34.initOptions.clientCapabilities
                    },
                    cache: !_this34.initOptions.cacheLocation ? null : {
                      cacheLocation: _this34.initOptions.cacheLocation
                    }
                  };
                  _this34._instance = new msal.PublicClientApplication(config);
                  resolve();
                } catch (e) {
                  reject(e);
                }
              });
            });
          }
        }, {
          key: "getSocialUser",
          value: function getSocialUser(loginResponse) {
            return new Promise(function (resolve, reject) {
              //After login, use Microsoft Graph API to get user info
              var meRequest = new XMLHttpRequest();

              meRequest.onreadystatechange = function () {
                if (meRequest.readyState == 4) {
                  try {
                    if (meRequest.status == 200) {
                      var userInfo = JSON.parse(meRequest.responseText);
                      var user = new SocialUser();
                      user.provider = MicrosoftLoginProvider.PROVIDER_ID;
                      user.id = loginResponse.idToken;
                      user.authToken = loginResponse.accessToken;
                      user.name = loginResponse.idTokenClaims.name;
                      user.email = loginResponse.account.username;
                      user.idToken = loginResponse.idToken;
                      user.response = loginResponse;
                      user.firstName = userInfo.givenName;
                      user.lastName = userInfo.surname;
                      resolve(user);
                    } else {
                      reject("Error retrieving user info: ".concat(meRequest.status));
                    }
                  } catch (err) {
                    reject(err);
                  }
                }
              }; //Microsoft Graph ME Endpoint: https://docs.microsoft.com/en-us/graph/api/user-get?view=graph-rest-1.0&tabs=http


              meRequest.open('GET', 'https://graph.microsoft.com/v1.0/me');
              meRequest.setRequestHeader('Authorization', "Bearer ".concat(loginResponse.accessToken));

              try {
                meRequest.send();
              } catch (err) {
                reject(err);
              }
            });
          }
        }, {
          key: "getLoginStatus",
          value: function getLoginStatus() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var accounts, loginResponse;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      accounts = this._instance.getAllAccounts();

                      if (!((accounts === null || accounts === void 0 ? void 0 : accounts.length) > 0)) {
                        _context2.next = 10;
                        break;
                      }

                      _context2.next = 4;
                      return this._instance.ssoSilent({
                        scopes: this.initOptions.scopes,
                        loginHint: accounts[0].username
                      });

                    case 4:
                      loginResponse = _context2.sent;
                      _context2.next = 7;
                      return this.getSocialUser(loginResponse);

                    case 7:
                      return _context2.abrupt("return", _context2.sent);

                    case 10:
                      throw "No user is currently logged in with ".concat(MicrosoftLoginProvider.PROVIDER_ID);

                    case 11:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "signIn",
          value: function signIn() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var loginResponse;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this._instance.loginPopup({
                        scopes: this.initOptions.scopes
                      });

                    case 2:
                      loginResponse = _context3.sent;
                      _context3.next = 5;
                      return this.getSocialUser(loginResponse);

                    case 5:
                      return _context3.abrupt("return", _context3.sent);

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "signOut",
          value: function signOut(revoke) {
            var _a, _b;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var accounts;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      accounts = this._instance.getAllAccounts();

                      if (!((accounts === null || accounts === void 0 ? void 0 : accounts.length) > 0)) {
                        _context4.next = 4;
                        break;
                      }

                      _context4.next = 4;
                      return this._instance.logout({
                        account: accounts[0],
                        postLogoutRedirectUri: (_b = (_a = this.initOptions.logout_redirect_uri) !== null && _a !== void 0 ? _a : this.initOptions.redirect_uri) !== null && _b !== void 0 ? _b : location.href
                      });

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return MicrosoftLoginProvider;
      }(BaseLoginProvider);

      MicrosoftLoginProvider.PROVIDER_ID = 'MICROSOFT';
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=angularx-social-login.js.map

      /***/
    },

    /***/
    "cMCp":
    /*!*****************************************************!*\
      !*** ./src/app/modules/auth/auth-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: AuthRoutingModule */

    /***/
    function cMCp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
        return AuthRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.component */
      "NRzN");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login/login.component */
      "6n5F");
      /* harmony import */


      var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./registration/registration.component */
      "58k3");
      /* harmony import */


      var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forgot-password/forgot-password.component */
      "SiHH");
      /* harmony import */


      var _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./logout/logout.component */
      "8DKb");

      var routes = [{
        path: '',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"],
        children: [{
          path: '',
          redirectTo: 'login',
          pathMatch: 'full'
        }, {
          path: 'login',
          component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
          data: {
            returnUrl: window.location.pathname
          }
        }, {
          path: 'registration',
          component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"]
        }, {
          path: 'forgot-password',
          component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"]
        }, {
          path: 'logout',
          component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"]
        }, {
          path: '',
          redirectTo: 'login',
          pathMatch: 'full'
        }, {
          path: '**',
          redirectTo: 'login',
          pathMatch: 'full'
        }]
      }];

      var AuthRoutingModule = function AuthRoutingModule() {
        _classCallCheck(this, AuthRoutingModule);
      };

      AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AuthRoutingModule
      });
      AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AuthRoutingModule_Factory(t) {
          return new (t || AuthRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-auth-auth-module-es5.js.map