(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[177],{

/***/ "./resources/js/App/components/Notifications.js":
/*!******************************************************!*\
  !*** ./resources/js/App/components/Notifications.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toast-notifications */ "./node_modules/react-toast-notifications/dist/index.js");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal */ "./node_modules/react-reveal/index.js");
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_reveal_Jump__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Jump */ "./node_modules/react-reveal/Jump.js");
/* harmony import */ var react_reveal_Jump__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Jump__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_reveal_Flash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal/Flash */ "./node_modules/react-reveal/Flash.js");
/* harmony import */ var react_reveal_Flash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Flash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_reveal_HeadShake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-reveal/HeadShake */ "./node_modules/react-reveal/HeadShake.js");
/* harmony import */ var react_reveal_HeadShake__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_reveal_HeadShake__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_reveal_Jello__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-reveal/Jello */ "./node_modules/react-reveal/Jello.js");
/* harmony import */ var react_reveal_Jello__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Jello__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_reveal_Pulse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-reveal/Pulse */ "./node_modules/react-reveal/Pulse.js");
/* harmony import */ var react_reveal_Pulse__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Pulse__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_reveal_RubberBand__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-reveal/RubberBand */ "./node_modules/react-reveal/RubberBand.js");
/* harmony import */ var react_reveal_RubberBand__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_reveal_RubberBand__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_reveal_Shake__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-reveal/Shake */ "./node_modules/react-reveal/Shake.js");
/* harmony import */ var react_reveal_Shake__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Shake__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_reveal_Spin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-reveal/Spin */ "./node_modules/react-reveal/Spin.js");
/* harmony import */ var react_reveal_Spin__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Spin__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_reveal_Swing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-reveal/Swing */ "./node_modules/react-reveal/Swing.js");
/* harmony import */ var react_reveal_Swing__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Swing__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_reveal_Tada__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-reveal/Tada */ "./node_modules/react-reveal/Tada.js");
/* harmony import */ var react_reveal_Tada__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Tada__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_reveal_Wobble__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-reveal/Wobble */ "./node_modules/react-reveal/Wobble.js");
/* harmony import */ var react_reveal_Wobble__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Wobble__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
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


















var AlertMessage = function AlertMessage(_ref) {
  var appearance = _ref.appearance,
      children = _ref.children,
      transitionDuration = _ref.transitionDuration,
      transitionState = _ref.transitionState,
      onDismiss = _ref.onDismiss,
      animation = _ref.animation;
  var Ani = getAnimation(animation.type);
  var direction = animation.direction;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Ani, {
    left: direction === 'left',
    right: direction === 'right',
    top: direction === 'top',
    bottom: direction === 'bottom',
    when: transitionState === 'entered'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
    variant: appearance,
    dismissible: true,
    onClose: onDismiss
  }, children));
};

function getAnimation(type) {
  switch (type) {
    case 'fade':
      return react_reveal__WEBPACK_IMPORTED_MODULE_3__["Fade"];

    case 'flip':
      return react_reveal__WEBPACK_IMPORTED_MODULE_3__["Flip"];

    case 'rotate':
      return react_reveal__WEBPACK_IMPORTED_MODULE_3__["Rotate"];

    case 'zoom':
      return react_reveal__WEBPACK_IMPORTED_MODULE_3__["Zoom"];

    case 'bounce':
      return react_reveal__WEBPACK_IMPORTED_MODULE_3__["Bounce"];

    case 'roll':
      return react_reveal__WEBPACK_IMPORTED_MODULE_3__["Roll"];

    case 'light-speed':
      return react_reveal__WEBPACK_IMPORTED_MODULE_3__["LightSpeed"];

    case 'jump':
      return react_reveal_Jump__WEBPACK_IMPORTED_MODULE_4___default.a;

    case 'flash':
      return react_reveal_Flash__WEBPACK_IMPORTED_MODULE_5___default.a;

    case 'head-shake':
      return react_reveal_HeadShake__WEBPACK_IMPORTED_MODULE_6___default.a;

    case 'jello':
      return react_reveal_Jello__WEBPACK_IMPORTED_MODULE_7___default.a;

    case 'pulse':
      return react_reveal_Pulse__WEBPACK_IMPORTED_MODULE_8___default.a;

    case 'rubber-band':
      return react_reveal_RubberBand__WEBPACK_IMPORTED_MODULE_9___default.a;

    case 'shake':
      return react_reveal_Shake__WEBPACK_IMPORTED_MODULE_10___default.a;

    case 'spin':
      return react_reveal_Spin__WEBPACK_IMPORTED_MODULE_11___default.a;

    case 'swing':
      return react_reveal_Swing__WEBPACK_IMPORTED_MODULE_12___default.a;

    case 'tada':
      return react_reveal_Tada__WEBPACK_IMPORTED_MODULE_13___default.a;

    case 'wobble':
      return react_reveal_Wobble__WEBPACK_IMPORTED_MODULE_14___default.a;

    default:
      return react_reveal__WEBPACK_IMPORTED_MODULE_3__["Slide"];
  }
}

var Notifications = /*#__PURE__*/function (_React$Component) {
  _inherits(Notifications, _React$Component);

  var _super = _createSuper(Notifications);

  function Notifications() {
    _classCallCheck(this, Notifications);

    return _super.apply(this, arguments);
  }

  _createClass(Notifications, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastProvider"], {
        components: {
          Toast: AlertMessage
        },
        placement: this.props.notification.placement,
        animation: this.props.notification.animation
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastConsumer"], null, function (_ref2) {
        var add = _ref2.add;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          onClick: function onClick() {
            return add(_this.props.notification.message, {
              appearance: _this.props.notification.variant,
              autoDismiss: _this.props.notification.autoDismiss
            });
          }
        }, _this.props.children);
      })));
    }
  }]);

  return Notifications;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Notifications);

/***/ }),

/***/ "./resources/js/Demo/UIElements/Advance/Notification.js":
/*!**************************************************************!*\
  !*** ./resources/js/Demo/UIElements/Advance/Notification.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var _App_components_Notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../App/components/Notifications */ "./resources/js/App/components/Notifications.js");
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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var colourOptions = [{
  value: 'inverse',
  label: 'Inverse',
  color: '#333'
}, {
  value: 'primary',
  label: 'Primary',
  color: '#04a9f5'
}, {
  value: 'info',
  label: 'Info',
  color: '#3ebfea'
}, {
  value: 'success',
  label: 'Success',
  color: '#1de9b6'
}, {
  value: 'warning',
  label: 'Warning',
  color: '#f4c22b'
}, {
  value: 'danger',
  label: 'Danger',
  color: '#f44236'
}, {
  value: 'dark',
  label: 'Dark',
  color: '#c7cbce'
}, {
  value: 'light',
  label: 'Light',
  color: '#f2f2f2'
}];
var potionOption = [{
  value: 'top-left',
  label: 'Top Left'
}, {
  value: 'top-right',
  label: 'Top Right'
}, {
  value: 'top-center',
  label: 'Top Center'
}, {
  value: 'bottom-left',
  label: 'Bottom Left'
}, {
  value: 'bottom-right',
  label: 'Bottom Right'
}, {
  value: 'bottom-center',
  label: 'Bottom Center'
}];
var animationOption = [{
  value: 'fade',
  label: 'Fade'
}, {
  value: 'flip',
  label: 'Flip'
}, {
  value: 'rotate',
  label: 'Rotate'
}, {
  value: 'zoom',
  label: 'Zoom'
}, {
  value: 'bounce',
  label: 'Bounce'
}, {
  value: 'slide',
  label: 'Slide'
}, {
  value: 'roll',
  label: 'Roll'
}, {
  value: 'light-speed',
  label: 'Light Speed'
}, {
  value: 'jump',
  label: 'Jump'
}, {
  value: 'flash',
  label: 'Flash'
}, {
  value: 'head-shake',
  label: 'Head Shake'
}, {
  value: 'jello',
  label: 'Jello'
}, {
  value: 'pulse',
  label: 'Pulse'
}, {
  value: 'rubber-band',
  label: 'Rubber Band'
}, {
  value: 'shake',
  label: 'Shake'
}, {
  value: 'spin',
  label: 'Spin'
}, {
  value: 'swing',
  label: 'Swing'
}, {
  value: 'tada',
  label: 'Tada'
}, {
  value: 'wobble',
  label: 'Wobble'
}];

var dot = function dot() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#ccc';
  return {
    alignItems: 'center',
    display: 'flex',
    ':before': {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: 'block',
      marginRight: 8,
      height: 10,
      width: 10
    }
  };
};

var colourStyles = {
  control: function control(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      backgroundColor: 'white'
    });
  },
  option: function option(styles, _ref) {
    var data = _ref.data,
        isDisabled = _ref.isDisabled,
        isFocused = _ref.isFocused,
        isSelected = _ref.isSelected;
    var color = chroma_js__WEBPACK_IMPORTED_MODULE_2___default()(data.color);
    return _objectSpread(_objectSpread({}, styles), {}, {
      backgroundColor: isDisabled ? null : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
      color: isDisabled ? '#ccc' : isSelected ? chroma_js__WEBPACK_IMPORTED_MODULE_2___default.a.contrast(color, 'white') > 2 ? 'white' : 'black' : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default'
    });
  },
  input: function input(styles) {
    return _objectSpread(_objectSpread({}, styles), dot());
  },
  placeholder: function placeholder(styles) {
    return _objectSpread(_objectSpread({}, styles), dot());
  },
  singleValue: function singleValue(styles, _ref2) {
    var data = _ref2.data;
    return _objectSpread(_objectSpread({}, styles), dot(data.color));
  }
};

var AdvanceNotification = /*#__PURE__*/function (_React$Component) {
  _inherits(AdvanceNotification, _React$Component);

  var _super = _createSuper(AdvanceNotification);

  function AdvanceNotification() {
    var _this;

    _classCallCheck(this, AdvanceNotification);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      variant: 'inverse',
      placement: 'top-right',
      autoDismiss: true,
      animation: {
        type: 'slide',
        direction: 'top'
      },
      message: 'Bootstrap Growl Turning standard Bootstrap alerts into awesome notification'
    });

    _defineProperty(_assertThisInitialized(_this), "animationDirectionHandler", function (direction) {
      _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
        animation: _objectSpread(_objectSpread({}, _this.state.animation), {}, {
          direction: direction
        })
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.setState({
        message: event.target.value
      });
    });

    return _this;
  }

  _createClass(AdvanceNotification, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Growl Notification")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "justify-content-md-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 12,
        md: 7
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        controlId: "formPosition"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Position Variant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
        defaultValue: potionOption[1],
        label: "Select Position",
        options: potionOption,
        onChange: function onChange(_ref3) {
          var value = _ref3.value;
          return _this2.setState({
            placement: value
          });
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        controlId: "formColor"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Color Variant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
        defaultValue: colourOptions[0],
        label: "Select Variant",
        options: colourOptions,
        styles: colourStyles,
        onChange: function onChange(_ref4) {
          var value = _ref4.value;
          return _this2.setState({
            variant: value
          });
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        controlId: "formAnimation"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Animation Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
        defaultValue: animationOption[5],
        label: "Select Variant",
        options: animationOption,
        onChange: function onChange(_ref5) {
          var value = _ref5.value;
          return _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
            animation: _objectSpread(_objectSpread({}, _this2.state.animation), {}, {
              type: value
            })
          }));
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        controlId: "formDirectionRight"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Animation Direction")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        controlId: "formDirectionRight"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "radio radio-primary d-inline"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "radio",
        name: "rdoDirection",
        id: "directionNone",
        checked: this.state.animation.direction === 'none',
        onChange: function onChange(_ref6) {
          var value = _ref6.value;
          return _this2.animationDirectionHandler('none');
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "directionNone",
        className: "cr"
      }, "None")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "radio radio-primary d-inline"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "radio",
        name: "rdoDirection",
        id: "directionRight",
        checked: this.state.animation.direction === 'right',
        onChange: function onChange(_ref7) {
          var value = _ref7.value;
          return _this2.animationDirectionHandler('right');
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "directionRight",
        className: "cr"
      }, "Right")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "radio radio-primary d-inline"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "radio",
        name: "rdoDirection",
        id: "directionLeft",
        checked: this.state.animation.direction === 'left',
        onChange: function onChange(_ref8) {
          var value = _ref8.value;
          return _this2.animationDirectionHandler('left');
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "directionLeft",
        className: "cr"
      }, "Left")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "radio radio-primary d-inline"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "radio",
        name: "rdoDirection",
        id: "directionTop",
        checked: this.state.animation.direction === 'top',
        onChange: function onChange(_ref9) {
          var value = _ref9.value;
          return _this2.animationDirectionHandler('top');
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "directionTop",
        className: "cr"
      }, "Top")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "radio radio-primary d-inline"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "radio",
        name: "rdoDirection",
        id: "directionBottom",
        checked: this.state.animation.direction === 'bottom',
        onChange: function onChange(_ref10) {
          var value = _ref10.value;
          return _this2.animationDirectionHandler('bottom');
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "directionBottom",
        className: "cr"
      }, "Bottom"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        controlId: "formBasicEmail"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "switch switch-primary d-inline m-r-10"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        id: "icon-colored",
        checked: this.state.autoDismiss,
        onChange: function onChange() {
          return _this2.setState(function (prevState) {
            return {
              autoDismiss: !prevState.autoDismiss
            };
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "icon-colored",
        className: "cr"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Auto Dismiss")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        controlId: "exampleForm.ControlTextarea1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
        as: "textarea",
        rows: "3",
        value: this.state.message,
        onChange: this.handleChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_Notifications__WEBPACK_IMPORTED_MODULE_5__["default"], {
        notification: this.state
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Add Notification")))))))));
    }
  }]);

  return AdvanceNotification;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AdvanceNotification);

/***/ })

}]);