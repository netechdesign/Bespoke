(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[144],{

/***/ "./resources/js/Demo/PageLayout/Vertical/CollapseMenu.js":
/*!***************************************************************!*\
  !*** ./resources/js/Demo/PageLayout/Vertical/CollapseMenu.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/actions */ "./resources/js/store/actions.js");
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







var CollapseMenu = /*#__PURE__*/function (_Component) {
  _inherits(CollapseMenu, _Component);

  var _super = _createSuper(CollapseMenu);

  function CollapseMenu() {
    _classCallCheck(this, CollapseMenu);

    return _super.apply(this, arguments);
  }

  _createClass(CollapseMenu, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (this.props.layout !== 'vertical') {
        this.props.onChangeLayout('vertical');
      }

      if (!this.props.collapseMenu) {
        this.props.onToggleNavigation();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
        as: "h5"
      }, "Collapse Menu Layout")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, null, "Open ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "config.ts"), " file from directory [ ../src/config.ts ] and edit ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mark", null, "highlighted"), " options in this file."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
        bordered: true,
        striped: true,
        responsive: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
        className: "header-table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Configuration"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mark", null, "layout: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "vertical"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "preLayout: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "null")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mark", null, "collapseMenu: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "true"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "layoutType: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "menu-dark")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "navIconColor: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "false")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "headerBackColor: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "header-default")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "navBackColor: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "navbar-default")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "navBrandColor: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "brand-default")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "navBackImage: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "false")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "rtlLayout: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "false")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "navFixedLayout: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "true")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "headerFixedLayout: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "false")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "boxLayout: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "false")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "navDropdownIcon: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "style1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "navListIcon: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "style1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "navActiveListColor: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "active-default")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "navListTitleColor: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "title-default")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "navListTitleHide: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "false"))))))))))));
    }
  }]);

  return CollapseMenu;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    layout: state.layout,
    collapseMenu: state.collapseMenu
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onChangeLayout: function onChangeLayout(layout) {
      return dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["CHANGE_LAYOUT"],
        layout: layout
      });
    },
    onToggleNavigation: function onToggleNavigation() {
      return dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["COLLAPSE_MENU"]
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(CollapseMenu));

/***/ })

}]);