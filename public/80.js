(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ "./resources/js/App/layout/AdminLayout/Breadcrumb/index.js":
/*!*****************************************************************!*\
  !*** ./resources/js/App/layout/AdminLayout/Breadcrumb/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../config */ "./resources/js/config.js");
/* harmony import */ var _menu_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../menu-items */ "./resources/js/menu-items.js");
/* harmony import */ var _store_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../store/constant */ "./resources/js/store/constant.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Breadcrumb = /*#__PURE__*/function (_Component) {
  _inherits(Breadcrumb, _Component);

  var _super = _createSuper(Breadcrumb);

  function Breadcrumb() {
    var _this;

    _classCallCheck(this, Breadcrumb);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      main: [],
      item: []
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillReceiveProps", function () {
      _menu_items__WEBPACK_IMPORTED_MODULE_3__["default"].items.map(function (item, index) {
        if (item.type && item.type === 'group') {
          _this.getCollapse(item);
        }

        return false;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getCollapse", function (item) {
      if (item.children) {
        item.children.filter(function (collapse) {
          if (collapse.type && collapse.type === 'collapse') {
            _this.getCollapse(collapse);
          } else if (collapse.type && collapse.type === 'item') {
            if (document.location.pathname === _config__WEBPACK_IMPORTED_MODULE_2__["default"].basename + collapse.url) {
              _this.setState({
                item: collapse,
                main: item
              });
            }
          }

          return false;
        });
      }
    });

    return _this;
  }

  _createClass(Breadcrumb, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _menu_items__WEBPACK_IMPORTED_MODULE_3__["default"].items.map(function (item, index) {
        if (item.type && item.type === 'group') {
          _this2.getCollapse(item, index);
        }

        return false;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var main, item;
      var breadcrumb = '';
      var title = 'Welcome';

      if (this.state.main && this.state.main.type === 'collapse') {
        main = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "breadcrumb-item"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: _store_constant__WEBPACK_IMPORTED_MODULE_4__["default"].BLANK_LINK
        }, this.state.main.title));
      }

      if (this.state.item && this.state.item.type === 'item') {
        title = this.state.item.title;
        item = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "breadcrumb-item"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: _store_constant__WEBPACK_IMPORTED_MODULE_4__["default"].BLANK_LINK
        }, title));

        if (this.state.item.breadcrumbs !== false) {
          breadcrumb = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "page-header"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "page-block"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "row align-items-center"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "col-md-12"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "page-header-title"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
            className: "m-b-10"
          }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
            className: "breadcrumb"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            className: "breadcrumb-item"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            to: "/"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "feather icon-home"
          }))), main, item)))));
        }
      }

      document.title = title + ' | Bespoke Metering';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_5__["default"], null, breadcrumb);
    }
  }]);

  return Breadcrumb;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Breadcrumb);

/***/ }),

/***/ "./resources/js/menu-items.js":
/*!************************************!*\
  !*** ./resources/js/menu-items.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  items: [{
    id: 'app',
    title: 'App',
    type: 'group',
    icon: 'icon-app',
    children: [{
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      classes: 'nav-item',
      url: '/dashboard',
      icon: 'feather icon-home'
    }, {
      id: 'RoleUser',
      title: 'Role & User',
      type: 'collapse',
      icon: 'feather icon-menu',
      children: [{
        id: 'Role',
        title: 'Role',
        type: 'item',
        url: '/role'
      }, {
        id: 'v-fixed',
        title: 'User',
        type: 'item',
        url: '/user'
      }]
    }, {
      id: 'data_import',
      title: 'Data Import',
      type: 'item',
      classes: 'nav-item',
      url: '/dataimport',
      icon: 'feather icon-clipboard'
    }, {
      id: 'list',
      title: 'Uploaded Data',
      type: 'item',
      classes: 'nav-item',
      url: '/list',
      icon: 'feather icon-layers'
    }, {
      id: 'SiteEngineer',
      title: 'Area Manager',
      type: 'item',
      classes: 'nav-item',
      url: '/siteengineer',
      icon: 'feather icon-users'
    }, {
      id: 'Engineer',
      title: 'Engineer',
      type: 'item',
      classes: 'nav-item',
      url: '/Engineer',
      icon: 'feather icon-user'
    }, {
      id: 'Report',
      title: 'Report',
      type: 'item',
      classes: 'nav-item',
      url: '/report',
      icon: 'feather icon-file-text'
    }, {
      id: 'Installs',
      title: 'Installs',
      type: 'collapse',
      icon: 'feather icon-menu',
      children: [{
        id: 'utilitainstallsday',
        title: 'Utilita Day',
        type: 'item',
        classes: 'nav-item',
        url: '/utilitainstalls/day/Completed'
      }, {
        id: 'utilitainstallsweektodate',
        title: 'Utilita Week to Date',
        type: 'item',
        classes: 'nav-item',
        url: '/utilitainstalls/weektodate/Completed'
      }, {
        id: 'utilitainstallsmonthtodate',
        title: 'Utilita Month to Date',
        type: 'item',
        classes: 'nav-item',
        url: '/utilitainstalls/monthtodate/Completed'
      }, {
        id: 'utilitainstallsmonthprior',
        title: 'Utilita Month Prior',
        type: 'item',
        classes: 'nav-item',
        url: '/utilitainstalls/monthprior/Completed'
      }, {
        id: 'utilitainstallsyeartodate',
        title: 'Utilita Year to date',
        type: 'item',
        classes: 'nav-item',
        url: '/utilitainstalls/yeartodate/Completed'
      }, {
        id: 'utilitainstallsyearprior',
        title: 'Utilita Year Prior',
        type: 'item',
        classes: 'nav-item',
        url: '/utilitainstalls/yearprior/Completed'
      } //mds
      , {
        id: 'mdsinstallsday',
        title: 'Mds Day',
        type: 'item',
        classes: 'nav-item',
        url: '/mdsinstalls/day/Completed'
      }, {
        id: 'mdsinstallsweektodate',
        title: 'Mds Week to Date',
        type: 'item',
        classes: 'nav-item',
        url: '/mdsinstalls/weektodate/Completed'
      }, {
        id: 'mdsinstallsmonthtodate',
        title: 'Mds Month to Date',
        type: 'item',
        classes: 'nav-item',
        url: '/mdsinstalls/monthtodate/Completed'
      }, {
        id: 'mdsinstallsmonthprior',
        title: 'Mds Month Prior',
        type: 'item',
        classes: 'nav-item',
        url: '/mdsinstalls/monthprior/Completed'
      }, {
        id: 'mdsinstallsyeartodate',
        title: 'Mds Year to date',
        type: 'item',
        classes: 'nav-item',
        url: '/mdsinstalls/yeartodate/Completed'
      }, {
        id: 'mdsinstallsyearprior',
        title: 'Mds Year Prior',
        type: 'item',
        classes: 'nav-item',
        url: '/mdsinstalls/yearprior/Completed'
      }]
    }, {
      id: 'Aborts',
      title: 'Aborts',
      type: 'collapse',
      icon: 'feather icon-menu',
      children: [{
        id: 'utilitainstallsday',
        title: 'Utilita Day',
        type: 'item',
        classes: 'nav-item',
        url: '/utilitainstalls/day/Aborts'
      }, {
        id: 'abortsutilitainstallsweektodate',
        title: 'Utilita Week to Date',
        type: 'item',
        classes: 'nav-item',
        url: '/utilitainstalls/weektodate/Aborts'
      }, {
        id: 'abortsutilitainstallsmonthtodate',
        title: 'Utilita Month to Date',
        type: 'item',
        classes: 'nav-item',
        url: '/utilitainstalls/monthtodate/Aborts'
      }, {
        id: 'abortsutilitainstallsmonthprior',
        title: 'Utilita Month Prior',
        type: 'item',
        classes: 'nav-item',
        url: '/utilitainstalls/monthprior/Aborts'
      }, {
        id: 'abortsutilitainstallsyeartodate',
        title: 'Utilita Year to date',
        type: 'item',
        classes: 'nav-item',
        url: '/utilitainstalls/yeartodate/Aborts'
      }, {
        id: 'abortsutilitainstallsyearprior',
        title: 'Utilita Year Prior',
        type: 'item',
        classes: 'nav-item',
        url: '/utilitainstalls/yearprior/Aborts'
      } //mds
      , {
        id: 'mdsinstallsday',
        title: 'Mds Day',
        type: 'item',
        classes: 'nav-item',
        url: '/mdsinstalls/day/Aborts'
      }, {
        id: 'abortsmdsinstallsweektodate',
        title: 'Mds Week to Date',
        type: 'item',
        classes: 'nav-item',
        url: '/mdsinstalls/weektodate/Aborts'
      }, {
        id: 'abortsmdsinstallsmonthtodate',
        title: 'Mds Month to Date',
        type: 'item',
        classes: 'nav-item',
        url: '/mdsinstalls/monthtodate/Aborts'
      }, {
        id: 'abortsmdsinstallsmonthprior',
        title: 'Mds Month Prior',
        type: 'item',
        classes: 'nav-item',
        url: '/mdsinstalls/monthprior/Aborts'
      }, {
        id: 'abortsmdsinstallsyeartodate',
        title: 'Mds Year to date',
        type: 'item',
        classes: 'nav-item',
        url: '/mdsinstalls/yeartodate/Aborts'
      }, {
        id: 'abortsmdsinstallsyearprior',
        title: 'Mds Year Prior',
        type: 'item',
        classes: 'nav-item',
        url: '/mdsinstalls/yearprior/Aborts'
      }]
    }, {
      id: 'FuelMix',
      title: 'Fuel Mix',
      type: 'collapse',
      icon: 'feather icon-menu',
      children: [{
        id: 'FuelMixweektodate',
        title: 'Utilita Week',
        type: 'item',
        classes: 'nav-item',
        url: '/utilitafuelmix/weektodate'
      }, {
        id: 'utilitafuelmixmonthtodate',
        title: 'Utilita Month',
        type: 'item',
        classes: 'nav-item',
        url: '/utilitafuelmix/monthtodate'
      }, {
        id: 'utilitafuelmixyeartodate',
        title: 'Utilita Year',
        type: 'item',
        classes: 'nav-item',
        url: '/utilitafuelmix/yeartodate'
      }, //mds
      {
        id: 'mdsFuelMixweektodate',
        title: 'Mds Utilita Week',
        type: 'item',
        classes: 'nav-item',
        url: '/mdsfuelmix/weektodate'
      }, {
        id: 'mdsfuelmixmonthtodate',
        title: 'Mds Month',
        type: 'item',
        classes: 'nav-item',
        url: '/mdsfuelmix/monthtodate'
      }, {
        id: 'mdsfuelmixyeartodate',
        title: 'Mds Year',
        type: 'item',
        classes: 'nav-item',
        url: '/mdsfuelmix/yeartodate'
      }]
    }, {
      id: 'ooh',
      title: 'ooh',
      type: 'collapse',
      icon: 'feather icon-menu',
      children: [{
        id: 'oohtodate',
        title: 'Utilita Week',
        type: 'item',
        classes: 'nav-item',
        url: '/utilitaooh/weektodate'
      }, {
        id: 'oohmonthtodate',
        title: 'Utilita Month',
        type: 'item',
        classes: 'nav-item',
        url: '/utilitaooh/monthtodate'
      }, {
        id: 'oohyeartodate',
        title: 'Utilita Year',
        type: 'item',
        classes: 'nav-item',
        url: '/utilitaooh/yeartodate'
      } //mds
      , {
        id: 'mdsoohtodate',
        title: 'Mds Week',
        type: 'item',
        classes: 'nav-item',
        url: '/mdsooh/weektodate'
      }, {
        id: 'mdsoohmonthtodate',
        title: 'Mds Month',
        type: 'item',
        classes: 'nav-item',
        url: '/mdsooh/monthtodate'
      }, {
        id: 'mdsoohyeartodate',
        title: 'Mds Year',
        type: 'item',
        classes: 'nav-item',
        url: '/mdsooh/yeartodate'
      }]
    }, //sms
    {
      id: 'sms',
      title: 'SMS',
      type: 'collapse',
      icon: 'feather icon-menu',
      children: [{
        id: 'team',
        title: 'Team',
        type: 'item',
        classes: 'nav-item',
        url: '/team'
      }, {
        id: 'sms_groups',
        title: 'Team Groups',
        type: 'item',
        classes: 'nav-item',
        url: '/sms-groups'
      }, {
        id: 'engineer_lookup',
        title: 'Employee Lookup',
        type: 'item',
        classes: 'nav-item',
        url: '/employee_lookup'
      }, {
        id: 'job_lookup',
        title: 'Job Lookup',
        type: 'item',
        classes: 'nav-item',
        url: '/job_lookup'
      }, {
        id: 'time_lookup',
        title: 'Time Lookup',
        type: 'item',
        classes: 'nav-item',
        url: '/time_lookup'
      }, {
        id: 'bonus_period',
        title: 'Bonus Period',
        type: 'item',
        classes: 'nav-item',
        url: '/bonus_period/add'
      }, {
        id: 'performance',
        title: 'Performance',
        type: 'item',
        classes: 'nav-item',
        url: '/performance'
      }, {
        id: 'bonus_periods',
        title: 'Bonus Periods',
        type: 'item',
        classes: 'nav-item',
        url: '/bonus-periods'
      }, {
        id: 'work-mix',
        title: 'Work Mix',
        type: 'item',
        classes: 'nav-item',
        url: '/work-mix'
      }]
    }, {
      id: 'settarget',
      title: 'Set Target',
      type: 'item',
      classes: 'nav-item',
      url: '/settarget',
      icon: 'feather icon-feather icon-target'
    }, {
      id: 'vehicle',
      title: 'Vehicle',
      type: 'item',
      classes: 'nav-item',
      url: '/vehicle',
      icon: 'feather icon-feather icon-file-text'
    }]
  }]
});

/***/ }),

/***/ "./resources/js/store/constant.js":
/*!****************************************!*\
  !*** ./resources/js/store/constant.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var DEMO = {
  BLANK_LINK: "#!"
};
/* harmony default export */ __webpack_exports__["default"] = (DEMO);

/***/ })

}]);