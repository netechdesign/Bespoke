(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[152],{

/***/ "./resources/js/Demo/UIElements/Advance/Nestable.js":
/*!**********************************************************!*\
  !*** ./resources/js/Demo/UIElements/Advance/Nestable.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_nestable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-nestable */ "./node_modules/react-nestable/dist/index.js");
/* harmony import */ var react_nestable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_nestable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
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





var items = [{
  id: 1,
  text: 'Item 1'
}, {
  id: 2,
  text: 'Item 2',
  children: [{
    id: 3,
    text: 'Item 3'
  }, {
    id: 4,
    text: 'Item 4'
  }, {
    id: 5,
    text: 'Item 5',
    children: [{
      id: 6,
      text: 'Item 6'
    }, {
      id: 7,
      text: 'Item 7'
    }, {
      id: 8,
      text: 'Item 8'
    }]
  }, {
    id: 9,
    text: 'Item 9'
  }, {
    id: 10,
    text: 'Item 10'
  }]
}, {
  id: 11,
  text: 'Item 11'
}, {
  id: 12,
  text: 'Item 12'
}];

var AdvanceNestable = /*#__PURE__*/function (_React$Component) {
  _inherits(AdvanceNestable, _React$Component);

  var _super = _createSuper(AdvanceNestable);

  function AdvanceNestable() {
    var _this;

    _classCallCheck(this, AdvanceNestable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      example: 1,
      defaultCollapsed: false
    });

    _defineProperty(_assertThisInitialized(_this), "collapse", function (collapseCase) {
      if (_this.refNestable || _this.refNestableHandler) {
        switch (collapseCase) {
          case 0:
            _this.refNestable.collapse('NONE');

            _this.refNestableHandler.collapse('NONE');

            break;

          case 1:
            _this.refNestable.collapse('ALL');

            _this.refNestableHandler.collapse('ALL');

            break;

          case 2:
            _this.refNestable.collapse([1]);

            _this.refNestableHandler.collapse([1]);

            break;

          default:
            _this.refNestable.collapse('NONE');

            _this.refNestableHandler.collapse('NONE');

            break;
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderItem", function (_ref) {
      var item = _ref.item,
          collapseIcon = _ref.collapseIcon,
          handler = _ref.handler;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pc-nestable-item"
      }, handler, collapseIcon, item.text);
    });

    _defineProperty(_assertThisInitialized(_this), "renderExampleOne", function () {
      var defaultCollapsed = _this.state.defaultCollapsed;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_nestable__WEBPACK_IMPORTED_MODULE_2___default.a, {
        items: items,
        collapsed: defaultCollapsed,
        renderItem: _this.renderItem,
        ref: function ref(el) {
          return _this.refNestable = el;
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
    });

    _defineProperty(_assertThisInitialized(_this), "renderExampleTwo", function () {
      var defaultCollapsed = _this.state.defaultCollapsed;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_nestable__WEBPACK_IMPORTED_MODULE_2___default.a, {
        items: items,
        collapsed: defaultCollapsed,
        renderItem: _this.renderItem,
        handler: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "pc-nestable-item-handler"
        }),
        ref: function ref(el) {
          return _this.refNestableHandler = el;
        }
      }));
    });

    return _this;
  }

  _createClass(AdvanceNestable, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Nestable")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 12,
        className: "pb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: function onClick() {
          return _this2.collapse(0);
        }
      }, "Expand All"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary",
        onClick: function onClick() {
          return _this2.collapse(1);
        }
      }, "Collapse All")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 12,
        md: 6
      }, this.renderExampleOne()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 12,
        md: 6
      }, this.renderExampleTwo())))))));
    }
  }]);

  return AdvanceNestable;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AdvanceNestable);

/***/ })

}]);