(function() {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(['require', 'ojs/ojasyncvalidator-adapter'], function (require, SyncValidatorAdapter) {
  'use strict';

  function _interopNamespace(e) {
    if (e && e.__esModule) {
      return e;
    } else {
      var n = {};

      if (e) {
        Object.keys(e).forEach(function (k) {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function get() {
              return e[k];
            }
          });
        });
      }

      n['default'] = e;
      return n;
    }
  }

  SyncValidatorAdapter = SyncValidatorAdapter && Object.prototype.hasOwnProperty.call(SyncValidatorAdapter, 'default') ? SyncValidatorAdapter['default'] : SyncValidatorAdapter;
  /**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */

  /**
   * @preserve Copyright 2013 jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */

  /* jslint browser: true,devel:true*/

  /**
   * @since 8.0.0
   * @export
   * @class AsyncRequiredValidator
   * @final
   * @implements AsyncValidator
   * @classdesc Constructs an AsyncRequiredValidator ensures that the value provided is not empty.
   * @param {Object=} options an object literal used to provide the following properties
   * @augments oj.AsyncValidator
   * @ojtsmodule
   * @ojtsimport {module: "ojvalidator-async", type: "AMD", importName: "AsyncValidator"}
   * @ojtsimport {module: "ojvalidator-required", type: "AMD", importName: "RequiredValidator"}
   * @ojsignature [{target: "Type",
   *                value: "class AsyncRequiredValidator<V> implements AsyncValidator<V>"},
   *               {target: "Type",
   *                value: "RequiredValidator.ValidatorOptions",
   *                for: "options", jsdocOverride: true}
   *              ]
   * @see oj.RequiredValidator
   */

  /**
   * Validates value to be non-empty
   *
   * @param {string} value that is being validated
   * @returns {Promise.<void>}
   * @throws {Error} when there is no match
   * @ojsignature {target: "Type",
   *               value: "(value: V): Promise<void>"}
   * @memberof AsyncRequiredValidator
   * @instance
   * @export
   * @method validate
   */

  /**
   * A message to be used as hint, when giving a hint on the expected pattern. There is no default
   * hint for this property.
   *
   * @memberof AsyncRequiredValidator
   * @instance
   * @export
   * @name hint
   * @type {Promise.<string|null>}
   */

  /**
   * End of jsdoc
   */

  var AsyncRequiredValidator = /*#__PURE__*/function (_SyncValidatorAdapter) {
    _inherits(AsyncRequiredValidator, _SyncValidatorAdapter);

    var _super = _createSuper(AsyncRequiredValidator);

    function AsyncRequiredValidator(options) {
      var _this;

      _classCallCheck(this, AsyncRequiredValidator);

      _this = _super.call(this, options);
      _this.options = options;
      return _this;
    }

    _createClass(AsyncRequiredValidator, [{
      key: "hint",
      get: function get() {
        return _get(_getPrototypeOf(AsyncRequiredValidator.prototype), "_GetHint", this).call(this);
      }
    }, {
      key: "_InitLoadingPromise",
      value: function _InitLoadingPromise() {
        if (!this._loadingPromise) {
          this._loadingPromise = new Promise(function (resolve, reject) {
            require(['ojs/ojvalidator-required'], function (m) {
              resolve(_interopNamespace(m));
            }, reject);
          });
        }
      }
    }]);

    return AsyncRequiredValidator;
  }(SyncValidatorAdapter);

  return AsyncRequiredValidator;
});

}())