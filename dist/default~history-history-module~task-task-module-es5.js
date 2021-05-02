(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~history-history-module~task-task-module"], {
    /***/
    "iQdX":
    /*!*********************************************************************************!*\
      !*** ./node_modules/ngx-sharebuttons/__ivy_ngcc__/fesm2015/ngx-sharebuttons.js ***!
      \*********************************************************************************/

    /*! exports provided: IShareButton, SHARE_BUTTONS, SHARE_BUTTONS_CONFIG, ShareDirective, ShareModule, ShareService, SharerMethod, ɵ0, ɵ1 */

    /***/
    function iQdX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IShareButton", function () {
        return IShareButton;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SHARE_BUTTONS", function () {
        return SHARE_BUTTONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SHARE_BUTTONS_CONFIG", function () {
        return SHARE_BUTTONS_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShareDirective", function () {
        return ShareDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShareModule", function () {
        return ShareModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShareService", function () {
        return ShareService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharerMethod", function () {
        return SharerMethod;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ1", function () {
        return ɵ1;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/clipboard */
      "UXJo");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var SHARE_BUTTONS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('shareButtonsConfig');

      var IShareButton = function IShareButton() {
        _classCallCheck(this, IShareButton);
      };

      var SharerMethod;

      (function (SharerMethod) {
        SharerMethod["Anchor"] = "anchor";
        SharerMethod["Window"] = "window";
      })(SharerMethod || (SharerMethod = {}));
      /**
       * Simple object check.
       */


      function isObject(item) {
        return item && typeof item === 'object' && !Array.isArray(item);
      }
      /**
       * Deep merge two objects.
       */


      function mergeDeep(target) {
        for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          sources[_key - 1] = arguments[_key];
        }

        if (!sources.length) {
          return target;
        }

        var source = sources.shift();

        if (isObject(target) && isObject(source)) {
          for (var key in source) {
            if (isObject(source[key])) {
              if (!target[key]) {
                Object.assign(target, _defineProperty({}, key, {}));
              }

              mergeDeep(target[key], source[key]);
            } else {
              Object.assign(target, _defineProperty({}, key, source[key]));
            }
          }
        }

        return mergeDeep.apply(void 0, [target].concat(sources));
      }
      /** Returns a valid URL or falls back to current URL */


      function getValidUrl(url, fallbackUrl) {
        if (url) {
          var r = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

          if (r.test(url)) {
            return url;
          }

          console.warn("[ShareButtons]: Sharing link '".concat(url, "' is invalid!"));
        }

        return fallbackUrl;
      }

      function printPage() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (sub) {
          return document.defaultView.print();
        });
      }

      function copyToClipboard(_ref) {
        var params = _ref.params,
            data = _ref.data,
            clipboard = _ref.clipboard,
            updater = _ref.updater;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
          clipboard.copy(params.url); // Disable copy button

          updater.next({
            icon: data.successIcon,
            text: data.successText,
            disabled: true
          });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["delay"])(data.delay), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
          return updater.next({
            icon: data.icon,
            text: data.text,
            disabled: false
          });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1));
      }

      var ɵ0 = function ɵ0(p) {
        return p.description ? "".concat(p.description, "\r\n").concat(p.url) : p.url;
      }; // Create message body that includes the sharing link used for Email, SMS and WhatsApp buttons


      var linkInDescription = {
        description: ɵ0
      };
      var ɵ1 = {
        text: 'Copy link',
        icon: ['fas', 'link'],
        successText: 'Copied',
        successIcon: ['fas', 'check'],
        delay: 2000
      };
      var SHARE_BUTTONS = {
        facebook: {
          type: 'facebook',
          text: 'Facebook',
          ariaLabel: 'Share on Facebook',
          icon: ['fab', 'facebook-f'],
          color: '#4267B2',
          share: {
            desktop: 'https://www.facebook.com/sharer/sharer.php?'
          },
          params: {
            url: 'u'
          }
        },
        twitter: {
          type: 'twitter',
          text: 'Twitter',
          ariaLabel: 'Share on Twitter',
          icon: ['fab', 'twitter'],
          color: '#00acee',
          share: {
            desktop: 'https://twitter.com/intent/tweet?'
          },
          params: {
            url: 'url',
            description: 'text',
            tags: 'hashtags',
            via: 'via'
          }
        },
        linkedin: {
          type: 'linkedin',
          text: 'LinkedIn',
          ariaLabel: 'Share on LinkedIn',
          icon: ['fab', 'linkedin-in'],
          color: '#006fa6',
          share: {
            desktop: 'https://www.linkedin.com/shareArticle?'
          },
          params: {
            url: 'url',
            title: 'title',
            description: 'summary'
          }
        },
        pinterest: {
          type: 'pinterest',
          text: 'Pinterest',
          ariaLabel: 'Share on Pinterest',
          icon: ['fab', 'pinterest-p'],
          color: '#BD091D',
          share: {
            desktop: 'https://pinterest.com/pin/create/button/?'
          },
          params: {
            url: 'url',
            description: 'description',
            image: 'media'
          }
        },
        reddit: {
          type: 'reddit',
          text: 'Reddit',
          ariaLabel: 'Share on Reddit',
          icon: ['fab', 'reddit-alien'],
          color: '#FF4006',
          share: {
            desktop: 'https://www.reddit.com/submit?'
          },
          params: {
            url: 'url',
            title: 'title'
          }
        },
        tumblr: {
          type: 'tumblr',
          text: 'Tumblr',
          ariaLabel: 'Share on Tumblr',
          icon: ['fab', 'tumblr'],
          color: '#36465D',
          share: {
            desktop: 'https://tumblr.com/widgets/share/tool?'
          },
          params: {
            url: 'canonicalUrl',
            description: 'caption',
            tags: 'tags'
          }
        },
        mix: {
          type: 'mix',
          text: 'Mix',
          ariaLabel: 'Share on Mix',
          icon: ['fab', 'mix'],
          color: '#eb4924',
          share: {
            desktop: 'https://mix.com/add?'
          },
          params: {
            url: 'url'
          }
        },
        viber: {
          type: 'viber',
          text: 'Viber',
          ariaLabel: 'Share on Viber',
          icon: ['fab', 'viber'],
          color: '#665ca7',
          share: {
            android: 'viber://forward?',
            ios: 'viber://forward?'
          },
          params: {
            description: 'text'
          },
          paramsFunc: linkInDescription
        },
        vk: {
          type: 'vk',
          text: 'VKontakte',
          ariaLabel: 'Share on VKontakte',
          icon: ['fab', 'vk'],
          color: '#4C75A3',
          share: {
            desktop: 'https://vk.com/share.php?'
          },
          params: {
            url: 'url'
          }
        },
        telegram: {
          type: 'telegram',
          text: 'Telegram',
          ariaLabel: 'Share on Telegram',
          icon: ['fab', 'telegram-plane'],
          color: '#0088cc',
          share: {
            desktop: 'https://t.me/share/url?'
          },
          params: {
            url: 'url',
            description: 'text'
          }
        },
        messenger: {
          type: 'messenger',
          text: 'Messenger',
          ariaLabel: 'Share on Messenger',
          icon: ['fab', 'facebook-messenger'],
          color: '#0080FF',
          share: {
            android: 'fb-messenger://share/?',
            ios: 'fb-messenger://share/?'
          },
          params: {
            url: 'link'
          }
        },
        whatsapp: {
          type: 'whatsapp',
          text: 'WhatsApp',
          ariaLabel: 'Share on WhatsApp',
          icon: ['fab', 'whatsapp'],
          color: '#25D366',
          share: {
            desktop: 'https://web.whatsapp.com/send?',
            android: 'whatsapp://send?',
            ios: 'https://api.whatsapp.com/send?'
          },
          params: {
            description: 'text'
          },
          paramsFunc: linkInDescription
        },
        xing: {
          type: 'xing',
          text: 'Xing',
          ariaLabel: 'Share on Xing',
          icon: ['fab', 'xing'],
          color: '#006567',
          share: {
            desktop: 'https://www.xing.com/spi/shares/new?'
          },
          params: {
            url: 'url'
          }
        },
        line: {
          type: 'line',
          text: 'Line',
          ariaLabel: 'Share on Line',
          icon: ['fab', 'line'],
          color: '#00b900',
          share: {
            desktop: 'https://social-plugins.line.me/lineit/share?'
          },
          params: {
            url: 'url'
          }
        },
        sms: {
          type: 'sms',
          text: 'SMS',
          ariaLabel: 'Share link via SMS',
          icon: ['fas', 'sms'],
          color: '#20c16c',
          share: {
            desktop: 'sms:?',
            ios: 'sms:&'
          },
          params: {
            description: 'body'
          },
          paramsFunc: linkInDescription
        },
        email: {
          type: 'email',
          text: 'Email',
          ariaLabel: 'Share link via email',
          icon: ['fas', 'envelope'],
          color: '#FF961C',
          share: {
            desktop: 'mailto:?'
          },
          params: {
            title: 'subject',
            description: 'body'
          },
          paramsFunc: linkInDescription
        },
        print: {
          type: 'print',
          text: 'Print',
          ariaLabel: 'Print page',
          icon: ['fas', 'print'],
          color: '#765AA2',
          func: printPage
        },
        copy: {
          type: 'copy',
          text: 'Copy link',
          ariaLabel: 'Copy link',
          icon: ['fas', 'link'],
          color: '#607D8B',
          data: ɵ1,
          func: copyToClipboard
        }
      };

      var ShareService = /*#__PURE__*/function () {
        function ShareService(config, _document) {
          _classCallCheck(this, ShareService);

          this._document = _document;
          /** Global config that applies on all share buttons in the app */

          this.config = {
            sharerMethod: SharerMethod.Anchor,
            sharerTarget: '_blank',
            windowObj: this._document.defaultView,
            windowFuncName: 'open',
            prop: SHARE_BUTTONS,
            theme: 'default',
            include: [],
            exclude: [],
            size: 0,
            autoSetMeta: true,
            windowWidth: 800,
            windowHeight: 500,
            moreButtonIcon: 'ellipsis-h',
            lessButtonIcon: 'minus'
          };
          /** Stream that emits when config changes */

          this.config$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](this.config);

          if (config) {
            this.setConfig(config);
          }
        }
        /**
         * Share buttons properties, used to get the text, color and icon of each button.
         */


        _createClass(ShareService, [{
          key: "prop",
          get: function get() {
            return this.config.prop;
          }
        }, {
          key: "windowSize",
          get: function get() {
            return "width=".concat(this.config.windowWidth, ", height=").concat(this.config.windowHeight);
          }
        }, {
          key: "setConfig",
          value: function setConfig(config) {
            this.config = mergeDeep(this.config, config);
            this.config$.next(this.config);
          }
        }, {
          key: "addButton",
          value: function addButton(name, props) {
            this.setConfig({
              prop: _defineProperty({}, name, props)
            });
          }
        }]);

        return ShareService;
      }();

      ShareService.ɵfac = function ShareService_Factory(t) {
        return new (t || ShareService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SHARE_BUTTONS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
      };

      ShareService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function ShareService_Factory() {
          return new ShareService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(SHARE_BUTTONS_CONFIG, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
        },
        token: ShareService,
        providedIn: "root"
      });

      ShareService.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [SHARE_BUTTONS_CONFIG]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShareService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [SHARE_BUTTONS_CONFIG]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();

      var ShareDirective = /*#__PURE__*/function () {
        function ShareDirective(_el, _meta, _platform, _clipboard, _share, _cd, _document) {
          _classCallCheck(this, ShareDirective);

          this._meta = _meta;
          this._platform = _platform;
          this._clipboard = _clipboard;
          this._share = _share;
          this._cd = _cd;
          this._document = _document;
          /** Stream that emits when button is destroyed */

          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Stream that emit when share button need to be updated */

          this._updater = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Set meta tags from document head, useful when SEO is supported */

          this.autoSetMeta = this._share.config.autoSetMeta;
          /** Sharing link */

          this.url = this._share.config.url;
          /** Sets the title parameter */

          this.title = this._share.config.title;
          /** Sets the description parameter */

          this.description = this._share.config.description;
          /** Sets the image parameter for sharing on Pinterest */

          this.image = this._share.config.image;
          /** Sets the tags parameter for sharing on Twitter and Tumblr */

          this.tags = this._share.config.tags;
          /** Stream that emits when share dialog is opened */

          this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Stream that emits when share dialog is closed */

          this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this._el = _el.nativeElement;
        }
        /**
         * Share the link
         */


        _createClass(ShareDirective, [{
          key: "share",
          value: function share() {
            // Avoid SSR error
            if (this._platform.isBrowser && this.shareButton) {
              // Prepare sharer url params
              var params = this.autoSetMeta ? this.getParamsFromMetaTags() : this.getParamsFromInputs(); // Prepare share button click

              var click = this.shareButton.share ? this.open(params) : this.shareButton.func({
                params: params,
                data: this.shareButton.data,
                clipboard: this._clipboard,
                updater: this._updater
              });
              click.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe();
            } else {
              console.warn("".concat(this.text, " button is not compatible on this Platform"));
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // This stream is mainly used to update the copy button text and icon when it is being clicked
            this._updater.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) {
              _this.icon = data.icon;
              _this.text = data.text;
              _this._el.style.pointerEvents = data.disabled ? 'none' : 'auto';

              _this._cd.markForCheck();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            // Avoid SSR error
            if (this._platform.isBrowser) {
              // Create share button
              if (this._shareButtonChanged(changes.shareButtonName)) {
                this._createShareButton();
              } // Prepare share url


              if (this._urlChanged(changes.url)) {
                this.url = getValidUrl(this.autoSetMeta ? this.url || this._getMetaTagContent('og:url') : this.url, this._document.defaultView.location.href);
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();
          }
        }, {
          key: "_createShareButton",
          value: function _createShareButton() {
            var button = this._share.config.prop[this.shareButtonName];

            if (button) {
              // Set share button properties
              this.shareButton = button; // Remove previous button class

              this._el.classList.remove("sb-".concat(this._buttonClass)); // Add new button class


              this._el.classList.add("sb-".concat(this.shareButtonName)); // Set button css color variable


              this._el.style.setProperty('--button-color', this.shareButton.color); // Keep a copy of the class for future replacement


              this._buttonClass = this.shareButtonName;
              this.color = this.shareButton.color;
              this.text = this.shareButton.text;
              this.icon = this.shareButton.icon; // Set aria-label attribute

              this._el.setAttribute('aria-label', button.ariaLabel);
            } else {
              console.error("[ShareButtons]: The share button '".concat(this.shareButtonName, "' does not exist!"));
            }
          }
          /**
           * Get meta tag content
           */

        }, {
          key: "_getMetaTagContent",
          value: function _getMetaTagContent(key) {
            var metaUsingProperty = this._meta.getTag("property=\"".concat(key, "\""));

            if (metaUsingProperty) {
              return metaUsingProperty.getAttribute('content');
            }

            var metaUsingName = this._meta.getTag("name=\"".concat(key, "\""));

            if (metaUsingName) {
              return metaUsingName.getAttribute('content');
            }
          }
        }, {
          key: "_shareButtonChanged",
          value: function _shareButtonChanged(change) {
            return change && (change.firstChange || change.previousValue !== change.currentValue);
          }
        }, {
          key: "_urlChanged",
          value: function _urlChanged(change) {
            return !this.url || change && change.previousValue !== change.currentValue;
          }
          /**
           * Get share params from meta tags first and fallback to user inputs
           */

        }, {
          key: "getParamsFromMetaTags",
          value: function getParamsFromMetaTags() {
            return {
              url: this.url,
              title: this.title || this._getMetaTagContent('og:title'),
              description: this.description || this._getMetaTagContent('og:description'),
              image: this.image || this._getMetaTagContent('og:image'),
              via: this._share.config.twitterAccount,
              tags: this.tags
            };
          }
          /**
           * Get share params from user inputs
           */

        }, {
          key: "getParamsFromInputs",
          value: function getParamsFromInputs() {
            return {
              url: this.url,
              title: this.title,
              description: this.description,
              image: this.image,
              tags: this.tags,
              via: this._share.config.twitterAccount
            };
          }
        }, {
          key: "open",
          value: function open(params) {
            var _this2 = this;

            // Set sharer link based on user's device
            var sharerLink;

            if (this._platform.IOS && this.shareButton.share.ios) {
              sharerLink = this.shareButton.share.ios;
            } else if (this._platform.ANDROID && this.shareButton.share.android) {
              sharerLink = this.shareButton.share.android;
            } else {
              sharerLink = this.shareButton.share.desktop;
            }

            if (sharerLink) {
              // Set sharer link params
              this._finalUrl = sharerLink + this._serializeParams(params); // Log the sharer link in debug mode

              if (this._share.config.debug) {
                console.log('[DEBUG SHARE BUTTON]: ', this._finalUrl);
              } // Open the share window
              // There are two methods available for opening the share window:
              // 1. Using a real anchor
              // 2. Using window.open


              var sharerMethod = this.shareButton.method || this._share.config.sharerMethod;
              var sharerTarget = this.shareButton.target || this._share.config.sharerTarget;

              switch (sharerMethod) {
                case SharerMethod.Anchor:
                  var linkElement = this._document.createElement('a'); // Make it open in a new tab/window (depends on user's browser configuration)


                  linkElement.setAttribute('target', sharerTarget); // Prevent security vulnerability https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c

                  linkElement.setAttribute('rel', 'noopener noreferrer');
                  linkElement.href = this._finalUrl;
                  linkElement.click();
                  linkElement.remove();
                  break;

                case SharerMethod.Window:
                  // Open link using Window object
                  var openWindow = this._share.config.windowObj[this._share.config.windowFuncName];
                  var popUpWindow = openWindow(this._finalUrl, sharerTarget, this._share.windowSize); // Prevent security vulnerability https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c

                  this._share.config.windowObj.opener = null; // Resolve when share dialog is closed

                  if (popUpWindow) {
                    return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (sub) {
                      var pollTimer = _this2._document.defaultView.setInterval(function () {
                        if (popUpWindow.closed) {
                          _this2._document.defaultView.clearInterval(pollTimer); // Emit when share windows is closed


                          _this2.closed.emit(_this2.shareButtonName);

                          sub.next();
                          sub.complete();
                        }
                      }, 200);
                    });
                  }

                  break;
              } // Emit when share window is opened


              this.opened.emit(this.shareButtonName);
            }

            return rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
          }
        }, {
          key: "_serializeParams",
          value: function _serializeParams(params) {
            var _this3 = this;

            return Object.entries(this.shareButton.params).map(function (_ref2) {
              var _ref3 = _slicedToArray(_ref2, 2),
                  key = _ref3[0],
                  value = _ref3[1];

              // Check if share button param has a map function
              var paramFunc = _this3.shareButton.paramsFunc ? _this3.shareButton.paramsFunc[key] : null;

              if (params[key] || paramFunc) {
                var paramValue = paramFunc ? paramFunc(params) : params[key];
                return "".concat(value, "=").concat(encodeURIComponent(paramValue));
              }

              return '';
            }).filter(function (urlParam) {
              return urlParam !== '';
            }).join('&');
          }
        }]);

        return ShareDirective;
      }();

      ShareDirective.ɵfac = function ShareDirective_Factory(t) {
        return new (t || ShareDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["Clipboard"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ShareService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
      };

      ShareDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ShareDirective,
        selectors: [["", "shareButton", ""]],
        hostBindings: function ShareDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShareDirective_click_HostBindingHandler() {
              return ctx.share();
            });
          }
        },
        inputs: {
          autoSetMeta: "autoSetMeta",
          url: "url",
          title: "title",
          description: "description",
          image: "image",
          tags: "tags",
          shareButtonName: ["shareButton", "shareButtonName"]
        },
        outputs: {
          opened: "opened",
          closed: "closed"
        },
        exportAs: ["shareButton"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      ShareDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]
        }, {
          type: _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["Clipboard"]
        }, {
          type: ShareService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      };

      ShareDirective.propDecorators = {
        shareButtonName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['shareButton']
        }],
        autoSetMeta: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        description: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tags: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        share: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShareDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[shareButton]',
            exportAs: 'shareButton'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]
          }, {
            type: _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["Clipboard"]
          }, {
            type: ShareService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }];
        }, {
          autoSetMeta: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          tags: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],

          /**
           * Share the link
           */
          share: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
          }],
          shareButtonName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['shareButton']
          }]
        });
      })();

      var ShareModule = /*#__PURE__*/function () {
        function ShareModule() {
          _classCallCheck(this, ShareModule);
        }

        _createClass(ShareModule, null, [{
          key: "withConfig",
          value: function withConfig(config) {
            return {
              ngModule: ShareModule,
              providers: [{
                provide: SHARE_BUTTONS_CONFIG,
                useValue: config
              }]
            };
          }
        }]);

        return ShareModule;
      }();

      ShareModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ShareModule
      });
      ShareModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ShareModule_Factory(t) {
          return new (t || ShareModule)();
        },
        imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShareModule, {
          declarations: function declarations() {
            return [ShareDirective];
          },
          imports: function imports() {
            return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"]];
          },
          exports: function exports() {
            return [ShareDirective];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShareModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"]],
            declarations: [ShareDirective],
            exports: [ShareDirective]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-sharebuttons.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~history-history-module~task-task-module-es5.js.map