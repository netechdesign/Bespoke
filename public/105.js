(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[105],{

/***/ "./resources/js/App/components/UcFirst.js":
/*!************************************************!*\
  !*** ./resources/js/App/components/UcFirst.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var UcFirst = /*#__PURE__*/function (_React$Component) {
  _inherits(UcFirst, _React$Component);

  var _super = _createSuper(UcFirst);

  function UcFirst() {
    _classCallCheck(this, UcFirst);

    return _super.apply(this, arguments);
  }

  _createClass(UcFirst, [{
    key: "render",
    value: function render() {
      var string = this.props.text;
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }]);

  return UcFirst;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (UcFirst);

/***/ }),

/***/ "./resources/js/Demo/UIElements/Basic/Button.js":
/*!******************************************************!*\
  !*** ./resources/js/Demo/UIElements/Basic/Button.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var _App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../App/components/MainCard */ "./resources/js/App/components/MainCard.js");
/* harmony import */ var _App_components_UcFirst__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../App/components/UcFirst */ "./resources/js/App/components/UcFirst.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var BasicButton = /*#__PURE__*/function (_React$Component) {
  _inherits(BasicButton, _React$Component);

  var _super = _createSuper(BasicButton);

  function BasicButton() {
    _classCallCheck(this, BasicButton);

    return _super.apply(this, arguments);
  }

  _createClass(BasicButton, [{
    key: "render",
    value: function render() {
      var buttonVariants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
      var buttonOptions = [{
        variant: 'primary',
        icon: 'feather icon-thumbs-up'
      }, {
        variant: 'secondary',
        icon: 'feather icon-camera'
      }, {
        variant: 'success',
        icon: 'feather icon-check-circle'
      }, {
        variant: 'danger',
        icon: 'feather icon-slash'
      }, {
        variant: 'warning',
        icon: 'feather icon-alert-triangle'
      }, {
        variant: 'info',
        icon: 'feather icon-info'
      }];
      var basicButtons = buttonVariants.map(function (variant, idx) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["OverlayTrigger"], {
          key: idx,
          overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null, variant)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          variant: variant
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_UcFirst__WEBPACK_IMPORTED_MODULE_4__["default"], {
          text: variant
        })));
      });
      var outlineButtons = buttonVariants.map(function (variant, idx) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["OverlayTrigger"], {
          key: idx,
          overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null, 'outline-' + variant)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          variant: 'outline-' + variant
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_UcFirst__WEBPACK_IMPORTED_MODULE_4__["default"], {
          text: variant
        })));
      });
      var squareButtons = buttonVariants.map(function (variant, idx) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          key: idx,
          className: "btn-square",
          variant: variant
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_UcFirst__WEBPACK_IMPORTED_MODULE_4__["default"], {
          text: variant
        }));
      });
      var disabledButtons = buttonVariants.map(function (variant, idx) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          key: idx,
          disabled: true,
          variant: variant
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_UcFirst__WEBPACK_IMPORTED_MODULE_4__["default"], {
          text: variant
        }));
      });
      var roundedButtons = buttonVariants.map(function (variant, idx) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          key: idx,
          className: "btn-rounded",
          variant: variant
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_UcFirst__WEBPACK_IMPORTED_MODULE_4__["default"], {
          text: variant
        }));
      });
      var glowButtons = buttonVariants.map(function (variant, idx) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["OverlayTrigger"], {
          key: idx,
          overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null, 'btn-glow-' + variant)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          className: 'btn-glow-' + variant,
          variant: variant
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_UcFirst__WEBPACK_IMPORTED_MODULE_4__["default"], {
          text: variant
        })));
      });
      var iconButtons = buttonOptions.map(function (button, idx) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          key: idx,
          variant: button.variant
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: button.icon
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_UcFirst__WEBPACK_IMPORTED_MODULE_4__["default"], {
          text: button.variant
        }));
      });
      var outlineIconButtons = buttonOptions.map(function (button, idx) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          key: idx,
          variant: 'outline-' + button.variant
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: button.icon
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_UcFirst__WEBPACK_IMPORTED_MODULE_4__["default"], {
          text: button.variant
        }));
      });
      var onlyIconButtons = buttonOptions.map(function (button, idx) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          className: "btn-icon",
          key: idx,
          variant: button.variant
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: button.icon
        }));
      });
      var onlyOutlineIconButtons = buttonOptions.map(function (button, idx) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          className: "btn-icon",
          key: idx,
          variant: 'outline-' + button.variant
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: button.icon
        }));
      });
      var onlyIconRoundedButtons = buttonOptions.map(function (button, idx) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          className: "btn-icon btn-rounded",
          key: idx,
          variant: button.variant
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: button.icon
        }));
      });
      var onlyOutlineIconRoundedButtons = buttonOptions.map(function (button, idx) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          className: "btn-icon btn-rounded",
          key: idx,
          variant: 'outline-' + button.variant
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: button.icon
        }));
      });
      var basicDropdownButton = buttonOptions.map(function (button) {
        var title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_UcFirst__WEBPACK_IMPORTED_MODULE_4__["default"], {
          text: button.variant
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownButton"], {
          title: title,
          variant: button.variant,
          id: "dropdown-variants-".concat(button.variant),
          key: button.variant
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
          eventKey: "1"
        }, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
          eventKey: "2"
        }, "Another action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
          eventKey: "3"
        }, "Something else hear"));
      });
      var splitDropdownButton = buttonOptions.map(function (button) {
        var title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_UcFirst__WEBPACK_IMPORTED_MODULE_4__["default"], {
          text: button.variant
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["SplitButton"], {
          title: title,
          variant: button.variant,
          id: "dropdown-split-variants-".concat(button.variant),
          key: button.variant,
          className: "mr-2 mb-2"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
          eventKey: "1"
        }, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
          eventKey: "2"
        }, "Another action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
          eventKey: "3"
        }, "Something else hear"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
          eventKey: "4"
        }, "Separated link"));
      });
      var basicOutlineDropdownButton = buttonOptions.map(function (button) {
        var title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_UcFirst__WEBPACK_IMPORTED_MODULE_4__["default"], {
          text: button.variant
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownButton"], {
          title: title,
          variant: 'outline-' + button.variant,
          id: "dropdown-variants-".concat(button.variant),
          key: button.variant
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
          eventKey: "1"
        }, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
          eventKey: "2"
        }, "Another action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
          eventKey: "3"
        }, "Something else hear"));
      });
      var splitOutlineDropdownButton = buttonOptions.map(function (button) {
        var title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_UcFirst__WEBPACK_IMPORTED_MODULE_4__["default"], {
          text: button.variant
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["SplitButton"], {
          title: title,
          variant: 'outline-' + button.variant,
          id: "dropdown-split-variants-".concat(button.variant),
          key: button.variant,
          className: "mr-2 mb-2"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
          eventKey: "1"
        }, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
          eventKey: "2"
        }, "Another action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
          eventKey: "3"
        }, "Something else hear"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
          eventKey: "4"
        }, "Separated link"));
      });
      var basicIconDropdownButton = buttonOptions.map(function (button) {
        var title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: button.icon
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownButton"], {
          title: title,
          variant: button.variant,
          id: "dropdown-variants-".concat(button.variant),
          key: button.variant,
          className: "drp-icon"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
          eventKey: "1"
        }, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
          eventKey: "2"
        }, "Another action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
          eventKey: "3"
        }, "Something else hear"));
      });
      var outlineIconDropdownButton = buttonOptions.map(function (button) {
        var title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: button.icon
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownButton"], {
          title: title,
          variant: 'outline-' + button.variant,
          id: "dropdown-variants-".concat(button.variant),
          key: button.variant,
          className: "drp-icon"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
          eventKey: "1"
        }, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
          eventKey: "2"
        }, "Another action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
          eventKey: "3"
        }, "Something else hear"));
      });
      var basicIconDropdownRoundedButton = buttonOptions.map(function (button) {
        var title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: button.icon
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownButton"], {
          title: title,
          variant: button.variant,
          id: "dropdown-variants-".concat(button.variant),
          key: button.variant,
          className: "drp-icon btn-rounded"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
          eventKey: "1"
        }, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
          eventKey: "2"
        }, "Another action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
          eventKey: "3"
        }, "Something else hear"));
      });
      var outlineIconDropdownRoundedButton = buttonOptions.map(function (button) {
        var title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: button.icon
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownButton"], {
          title: title,
          variant: 'outline-' + button.variant,
          id: "dropdown-variants-".concat(button.variant),
          key: button.variant,
          className: "drp-icon btn-rounded"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
          eventKey: "1"
        }, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
          eventKey: "2"
        }, "Another action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
          eventKey: "3"
        }, "Something else hear"));
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Default"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "use ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "variant=\"*\""), " props in component ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Button"), " to get various button"), basicButtons, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["OverlayTrigger"], {
        overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null, "link")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "link"
      }, "Link"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Outline"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "use ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "variant=\"outline-*\""), " props in component ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Button"), " to get various outline button"), outlineButtons), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Square Button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "use ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "className=\"btn-square\""), " props in component ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Button"), " to get square button"), squareButtons), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Disabled Button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "use ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "disabled"), " props in component ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Button"), " to get disabled button"), disabledButtons), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Rounded Button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "use ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "className=\"btn-rounded\""), " props in component ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Button"), " to get rounded button"), roundedButtons), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Glow Button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "use ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "className=\"btn-glow\""), " props in component ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Button"), " to get glow button"), glowButtons), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Shadow Button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "use ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "className=\".shadow-[ 1 / 2 / 3 / 4 / 5 ]\""), " props in component ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Button"), " to get shadow button"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["OverlayTrigger"], {
        overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null, "shadow-1")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "shadow-1",
        variant: "primary"
      }, "Shadow 1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["OverlayTrigger"], {
        overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null, "shadow-2")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "shadow-2",
        variant: "success"
      }, "Shadow 2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["OverlayTrigger"], {
        overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null, "shadow-3")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "shadow-3",
        variant: "danger"
      }, "Shadow 3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["OverlayTrigger"], {
        overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null, "shadow-4")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "shadow-4",
        variant: "warning"
      }, "Shadow 4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["OverlayTrigger"], {
        overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null, "shadow-5")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "shadow-5",
        variant: "info"
      }, "Shadow 5"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Sizes [ Large ]"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "use ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "size=\"lg\""), " props in component ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Button"), " to get large button"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "primary",
        size: "lg"
      }, "Large Button"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary",
        size: "lg"
      }, "Large Button"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Sizes [ Small ]"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "use ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "size=\"sm\""), " props in component ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Button"), " to get small button"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "primary",
        size: "sm"
      }, "Small Button"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary",
        size: "sm"
      }, "Small Button"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Checkbox Button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonToolbar"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ToggleButtonGroup"], {
        type: "checkbox",
        defaultValue: 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ToggleButton"], {
        variant: "secondary",
        value: 1
      }, "Checkbox"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ToggleButton"], {
        variant: "secondary",
        value: 2
      }, "Checkbox"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Radio Button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonToolbar"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ToggleButtonGroup"], {
        type: "radio",
        name: "options",
        defaultValue: 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ToggleButton"], {
        variant: "secondary",
        value: 1
      }, "Active"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ToggleButton"], {
        variant: "secondary",
        value: 2
      }, "Radio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ToggleButton"], {
        variant: "secondary",
        value: 3
      }, "Radio"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Button With Icon"
      }, iconButtons)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Outline Icon Buttons"
      }, outlineIconButtons)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Only Icon"
      }, onlyIconButtons)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Outline Icon"
      }, onlyOutlineIconButtons)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Icon Button Rounded"
      }, onlyIconRoundedButtons)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Icon Outline Button Rounded"
      }, onlyOutlineIconRoundedButtons))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Basic Dropdown Button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonToolbar"], null, basicDropdownButton)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Split Dropdown Button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonToolbar"], null, splitDropdownButton)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Basic Outline Dropdown Button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonToolbar"], null, basicOutlineDropdownButton)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Split Outline Dropdown Button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonToolbar"], null, splitOutlineDropdownButton)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Basic Icon Dropdown"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonToolbar"], null, basicIconDropdownButton))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Outline Icon Dropdown"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonToolbar"], null, outlineIconDropdownButton))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Basic Rounded Icon Dropdown"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonToolbar"], null, basicIconDropdownRoundedButton))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Outline Rounded Icon Dropdown"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonToolbar"], null, outlineIconDropdownRoundedButton))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Basic Button Group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], {
        "aria-label": "Basic example"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary"
      }, "Left"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary"
      }, "Middle"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary"
      }, "Right")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Button Toolbar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonToolbar"], {
        "aria-label": "Toolbar with button groups"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], {
        className: "mr-2",
        "aria-label": "First group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary"
      }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary"
      }, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary"
      }, "3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary"
      }, "4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], {
        className: "mr-2",
        "aria-label": "Second group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary"
      }, "5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary"
      }, "6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary"
      }, "7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], {
        "aria-label": "Third group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary"
      }, "8")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Button Toolbar Size"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "use ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "size=\"lg\""), " props in component ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "ButtonGroup"), " to get large button toolbar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], {
        size: "lg"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary"
      }, "Left"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary"
      }, "Middle"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary"
      }, "Right"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "default toolbar size"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary"
      }, "Left"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary"
      }, "Middle"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary"
      }, "Right"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "use ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "size=\"sm\""), " props in component ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "ButtonGroup"), " to get small button toolbar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], {
        size: "sm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary"
      }, "Left"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary"
      }, "Middle"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary"
      }, "Right"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Nesting"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary"
      }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary"
      }, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownButton"], {
        variant: "secondary",
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"],
        title: "Dropdown",
        id: "bg-nested-dropdown"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        eventKey: "1"
      }, "Dropdown link"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        eventKey: "2"
      }, "Dropdown link"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Vertical Variation"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], {
        vertical: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary",
        className: "mr-0 mb-0"
      }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary",
        className: "mr-0 mb-0"
      }, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary",
        className: "mr-0 mb-0"
      }, "3"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], {
        vertical: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary",
        className: "mr-0 mb-0"
      }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary",
        className: "mr-0 mb-0"
      }, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownButton"], {
        variant: "secondary",
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"],
        title: "Dropdown",
        id: "bg-nested-dropdown"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        eventKey: "1"
      }, "Dropdown link"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        eventKey: "2"
      }, "Dropdown link")))))))));
    }
  }]);

  return BasicButton;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (BasicButton);

/***/ })

}]);