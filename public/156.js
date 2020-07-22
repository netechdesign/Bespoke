(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[156],{

/***/ "./resources/js/Demo/UIElements/Advance/Tour.js":
/*!******************************************************!*\
  !*** ./resources/js/Demo/UIElements/Advance/Tour.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var reactour__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactour */ "./node_modules/reactour/dist/reactour.esm.js");
/* harmony import */ var react_joyride__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-joyride */ "./node_modules/react-joyride/es/index.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var _App_components_MainCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../App/components/MainCard */ "./resources/js/App/components/MainCard.js");
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var steps = [{
  selector: '.tour-1',
  content: 'Click hear customize basic card layout'
}, {
  selector: '.card-option',
  content: 'Click hear open card options'
}, {
  selector: '.displayChatbox',
  content: 'Click chat open chat conversation'
}, {
  selector: '.mobile-menu',
  content: 'Click to see collapse menu layout'
}, {
  selector: '.pcoded-menu-caption',
  content: 'Menu caption'
}];
var stepsRide = [{
  content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Let's begin our journey!"),
  placement: 'center',
  locale: {
    skip: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      "aria-label": "skip"
    }, "S-K-I-P")
  },
  target: 'body'
}, {
  target: '.tour-1',
  content: 'Click hear customize basic card layout',
  placement: 'top'
}, {
  target: '.card-option',
  content: 'Click hear open card options'
}, {
  target: '.displayChatbox',
  content: 'Click chat open chat conversation'
}, {
  target: '.mobile-menu',
  content: 'Click to see collapse menu layout'
}, {
  target: '.pcoded-menu-caption',
  content: 'Menu caption'
}];

var AdvanceTour = /*#__PURE__*/function (_React$Component) {
  _inherits(AdvanceTour, _React$Component);

  var _super = _createSuper(AdvanceTour);

  function AdvanceTour() {
    var _this;

    _classCallCheck(this, AdvanceTour);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isTourOpen: false,
      run: false,
      steps: stepsRide
    });

    _defineProperty(_assertThisInitialized(_this), "handleJoyrideCallback", function (data) {
      var status = data.status;

      if ([react_joyride__WEBPACK_IMPORTED_MODULE_3__["STATUS"].FINISHED, react_joyride__WEBPACK_IMPORTED_MODULE_3__["STATUS"].SKIPPED].includes(status)) {
        _this.setState({
          run: false
        });
      }
      /*console.groupCollapsed(type);
      console.log(data);
      console.groupEnd();*/

    });

    return _this;
  }

  _createClass(AdvanceTour, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Tour")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: function onClick() {
          return _this2.setState({
            isTourOpen: true
          });
        }
      }, "Start Basic Tour"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: function onClick() {
          return _this2.setState({
            run: true
          });
        }
      }, "Joy Ride"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactour__WEBPACK_IMPORTED_MODULE_2__["default"], {
        steps: steps,
        isOpen: this.state.isTourOpen,
        onRequestClose: function onRequestClose() {
          return _this2.setState({
            isTourOpen: false
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_joyride__WEBPACK_IMPORTED_MODULE_3__["default"], {
        callback: this.handleJoyrideCallback,
        run: this.state.run,
        continuous: true,
        scrollToFirstStep: true,
        showProgress: true,
        showSkipButton: true,
        steps: this.state.steps,
        styles: {
          options: {
            zIndex: 10000
          }
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
        isOption: true,
        title: "Hello tour",
        cardClass: "tour-1 card-test"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "H1 Datta Able"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "H2 Datta Able"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "H3 Datta Able"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "H4 Datta Able"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "H5 Datta Able"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "H6 Datta Able"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, null, "Paragraph Datta Able"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, null, "Paragraph Datta Able")))));
    }
  }]);

  return AdvanceTour;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AdvanceTour);

/***/ })

}]);