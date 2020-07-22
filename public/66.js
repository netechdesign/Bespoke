(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./resources/js/Demo/Charts/ReChart/AreaAngleChart.js":
/*!************************************************************!*\
  !*** ./resources/js/Demo/Charts/ReChart/AreaAngleChart.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _hoc_Aux_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hoc/_Aux/index */ "./resources/js/hoc/_Aux/index.js");
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




var data = [{
  name: '2007',
  'Bar 1': 0,
  'Bar 2': 0,
  'Bar 3': 35
}, {
  name: '2008',
  'Bar 1': 130,
  'Bar 2': 100,
  'Bar 3': 35
}, {
  name: '2009',
  'Bar 1': 80,
  'Bar 2': 60,
  'Bar 3': 60
}, {
  name: '2010',
  'Bar 1': 70,
  'Bar 2': 200,
  'Bar 3': 55
}, {
  name: '2011',
  'Bar 1': 220,
  'Bar 2': 150,
  'Bar 3': 85
}, {
  name: '2012',
  'Bar 1': 105,
  'Bar 2': 90,
  'Bar 3': 40
}, {
  name: '2013',
  'Bar 1': 250,
  'Bar 2': 150,
  'Bar 3': 40
}];

var AreaAngleChart = /*#__PURE__*/function (_React$Component) {
  _inherits(AreaAngleChart, _React$Component);

  var _super = _createSuper(AreaAngleChart);

  function AreaAngleChart() {
    _classCallCheck(this, AreaAngleChart);

    return _super.apply(this, arguments);
  }

  _createClass(AreaAngleChart, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux_index__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["ResponsiveContainer"], {
        width: "100%",
        height: 300
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["AreaChart"], {
        data: data,
        margin: {
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
        id: "colorBar1",
        x1: "0",
        y1: "0",
        x2: "1",
        y2: "0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "1%",
        stopColor: "#1de9b6",
        stopOpacity: 1
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "99%",
        stopColor: "#1dc4e9",
        stopOpacity: 1
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
        id: "colorBar2",
        x1: "0",
        y1: "0",
        x2: "1",
        y2: "0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "1%",
        stopColor: "#899FD4",
        stopOpacity: 1
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "99%",
        stopColor: "#A389D4",
        stopOpacity: 1
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
        dataKey: "name"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["YAxis"], {
        type: "number",
        domain: [0, 'dataMax + 50']
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["CartesianGrid"], {
        strokeDasharray: "3 3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Area"], {
        dataKey: "Bar 1",
        stroke: "none",
        fillOpacity: 0.5,
        fill: "url(#colorBar1)"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Area"], {
        dataKey: "Bar 2",
        stroke: "none",
        fillOpacity: 0.5,
        fill: "url(#colorBar2)"
      }))));
    }
  }]);

  return AreaAngleChart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AreaAngleChart);

/***/ }),

/***/ "./resources/js/Demo/Charts/ReChart/AreaSmoothChart.js":
/*!*************************************************************!*\
  !*** ./resources/js/Demo/Charts/ReChart/AreaSmoothChart.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _hoc_Aux_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hoc/_Aux/index */ "./resources/js/hoc/_Aux/index.js");
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




var data = [{
  name: '2010',
  iphone: 0,
  ipad: 0,
  itouch: 0
}, {
  name: '2011',
  iphone: 50,
  ipad: 15,
  itouch: 5
}, {
  name: '2012',
  iphone: 20,
  ipad: 50,
  itouch: 65
}, {
  name: '2013',
  iphone: 60,
  ipad: 12,
  itouch: 7
}, {
  name: '2014',
  iphone: 30,
  ipad: 20,
  itouch: 120
}, {
  name: '2015',
  iphone: 25,
  ipad: 80,
  itouch: 40
}, {
  name: '2016',
  iphone: 10,
  ipad: 10,
  itouch: 10
}];

var AreaSmoothChart = /*#__PURE__*/function (_React$Component) {
  _inherits(AreaSmoothChart, _React$Component);

  var _super = _createSuper(AreaSmoothChart);

  function AreaSmoothChart() {
    _classCallCheck(this, AreaSmoothChart);

    return _super.apply(this, arguments);
  }

  _createClass(AreaSmoothChart, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux_index__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["ResponsiveContainer"], {
        width: "100%",
        height: 300
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["AreaChart"], {
        data: data,
        margin: {
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
        id: "colorBar1",
        x1: "0",
        y1: "0",
        x2: "1",
        y2: "0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "1%",
        stopColor: "#1de9b6",
        stopOpacity: 1
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "99%",
        stopColor: "#1dc4e9",
        stopOpacity: 1
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
        id: "colorBar2",
        x1: "0",
        y1: "0",
        x2: "1",
        y2: "0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "1%",
        stopColor: "#899FD4",
        stopOpacity: 1
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "99%",
        stopColor: "#A389D4",
        stopOpacity: 1
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
        dataKey: "name"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["YAxis"], {
        type: "number",
        domain: [0, 'dataMax + 80']
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["CartesianGrid"], {
        strokeDasharray: "3 3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Area"], {
        type: "monotone",
        dataKey: "iphone",
        stroke: "none",
        fillOpacity: 0.8,
        fill: "#A389D4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Area"], {
        type: "monotone",
        dataKey: "ipad",
        stroke: "none",
        fillOpacity: 0.8,
        fill: "#1de9b6"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Area"], {
        type: "monotone",
        dataKey: "itouch",
        stroke: "none",
        fillOpacity: 0.8,
        fill: "#04a9f5"
      }))));
    }
  }]);

  return AreaSmoothChart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AreaSmoothChart);

/***/ }),

/***/ "./resources/js/Demo/Charts/ReChart/BarSimpleChart.js":
/*!************************************************************!*\
  !*** ./resources/js/Demo/Charts/ReChart/BarSimpleChart.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _hoc_Aux_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hoc/_Aux/index */ "./resources/js/hoc/_Aux/index.js");
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




var data = [{
  name: '2008',
  'Bar 1': 50,
  'Bar 2': 40,
  'Bar 3': 35
}, {
  name: '2009',
  'Bar 1': 75,
  'Bar 2': 65,
  'Bar 3': 60
}, {
  name: '2010',
  'Bar 1': 50,
  'Bar 2': 40,
  'Bar 3': 55
}, {
  name: '2011',
  'Bar 1': 75,
  'Bar 2': 65,
  'Bar 3': 85
}, {
  name: '2012',
  'Bar 1': 100,
  'Bar 2': 90,
  'Bar 3': 40
}];

var BarSimpleChart = /*#__PURE__*/function (_React$Component) {
  _inherits(BarSimpleChart, _React$Component);

  var _super = _createSuper(BarSimpleChart);

  function BarSimpleChart() {
    _classCallCheck(this, BarSimpleChart);

    return _super.apply(this, arguments);
  }

  _createClass(BarSimpleChart, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux_index__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["ResponsiveContainer"], {
        width: "100%",
        height: 300
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["BarChart"], {
        data: data,
        margin: {
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
        id: "colorBar1",
        x1: "0",
        y1: "0",
        x2: "1",
        y2: "0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "1%",
        stopColor: "#1de9b6",
        stopOpacity: 1
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "99%",
        stopColor: "#1dc4e9",
        stopOpacity: 1
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
        id: "colorBar2",
        x1: "0",
        y1: "0",
        x2: "1",
        y2: "0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "1%",
        stopColor: "#899FD4",
        stopOpacity: 1
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "99%",
        stopColor: "#A389D4",
        stopOpacity: 1
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["CartesianGrid"], {
        strokeDasharray: "3 3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
        dataKey: "name"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["YAxis"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Legend"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
        dataKey: "Bar 1",
        fillOpacity: 1,
        fill: "url(#colorBar1)"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
        dataKey: "Bar 2",
        fillOpacity: 1,
        fill: "url(#colorBar2)"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
        dataKey: "Bar 3",
        fill: "#04a9f5"
      }))));
    }
  }]);

  return BarSimpleChart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (BarSimpleChart);

/***/ }),

/***/ "./resources/js/Demo/Charts/ReChart/BarStackedChart.js":
/*!*************************************************************!*\
  !*** ./resources/js/Demo/Charts/ReChart/BarStackedChart.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _hoc_Aux_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hoc/_Aux/index */ "./resources/js/hoc/_Aux/index.js");
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




var data = [{
  name: '2008',
  'Bar 1': 50,
  'Bar 2': 40,
  'Bar 3': 35
}, {
  name: '2009',
  'Bar 1': 75,
  'Bar 2': 65,
  'Bar 3': 60
}, {
  name: '2010',
  'Bar 1': 50,
  'Bar 2': 40,
  'Bar 3': 55
}, {
  name: '2011',
  'Bar 1': 75,
  'Bar 2': 65,
  'Bar 3': 85
}, {
  name: '2012',
  'Bar 1': 100,
  'Bar 2': 90,
  'Bar 3': 40
}];

var BarStackedChart = /*#__PURE__*/function (_React$Component) {
  _inherits(BarStackedChart, _React$Component);

  var _super = _createSuper(BarStackedChart);

  function BarStackedChart() {
    _classCallCheck(this, BarStackedChart);

    return _super.apply(this, arguments);
  }

  _createClass(BarStackedChart, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux_index__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["ResponsiveContainer"], {
        width: "100%",
        height: 300
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["BarChart"], {
        data: data,
        margin: {
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
        id: "colorBar1",
        x1: "0",
        y1: "0",
        x2: "1",
        y2: "0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "1%",
        stopColor: "#1de9b6",
        stopOpacity: 1
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "99%",
        stopColor: "#1dc4e9",
        stopOpacity: 1
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
        id: "colorBar2",
        x1: "0",
        y1: "0",
        x2: "1",
        y2: "0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "1%",
        stopColor: "#899FD4",
        stopOpacity: 1
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "99%",
        stopColor: "#A389D4",
        stopOpacity: 1
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["CartesianGrid"], {
        strokeDasharray: "3 3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
        dataKey: "name"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["YAxis"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Legend"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
        dataKey: "Bar 1",
        stackId: "bar",
        fillOpacity: 1,
        fill: "url(#colorBar1)"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
        dataKey: "Bar 2",
        stackId: "bar",
        fillOpacity: 1,
        fill: "url(#colorBar2)"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
        dataKey: "Bar 3",
        stackId: "bar",
        fill: "#04a9f5"
      }))));
    }
  }]);

  return BarStackedChart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (BarStackedChart);

/***/ }),

/***/ "./resources/js/Demo/Charts/ReChart/ComboChart.js":
/*!********************************************************!*\
  !*** ./resources/js/Demo/Charts/ReChart/ComboChart.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
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




var data = [{
  name: '2008',
  'Bar 1': 50,
  'Bar 2': 40,
  'Bar 3': 35,
  pv: 80,
  amt: 140
}, {
  name: '2009',
  'Bar 1': 75,
  'Bar 2': 65,
  'Bar 3': 60,
  pv: 96,
  amt: 150
}, {
  name: '2010',
  'Bar 1': 50,
  'Bar 2': 40,
  'Bar 3': 55,
  pv: 109,
  amt: 98
}, {
  name: '2011',
  'Bar 1': 75,
  'Bar 2': 65,
  'Bar 3': 85,
  pv: 120,
  amt: 122
}, {
  name: '2012',
  'Bar 1': 100,
  'Bar 2': 90,
  'Bar 3': 40,
  pv: 68,
  amt: 170
}, {
  name: '2013',
  'Bar 1': 80,
  'Bar 2': 85,
  'Bar 3': 45,
  pv: 90,
  amt: 85
}];

var ComboChart = /*#__PURE__*/function (_PureComponent) {
  _inherits(ComboChart, _PureComponent);

  var _super = _createSuper(ComboChart);

  function ComboChart() {
    _classCallCheck(this, ComboChart);

    return _super.apply(this, arguments);
  }

  _createClass(ComboChart, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["ResponsiveContainer"], {
        width: "100%",
        height: 300
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["ComposedChart"], {
        data: data,
        margin: {
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
        id: "colorBar1",
        x1: "0",
        y1: "0",
        x2: "1",
        y2: "0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "1%",
        stopColor: "#1de9b6",
        stopOpacity: 1
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "99%",
        stopColor: "#1dc4e9",
        stopOpacity: 1
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
        id: "colorBar2",
        x1: "0",
        y1: "0",
        x2: "1",
        y2: "0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "1%",
        stopColor: "#899FD4",
        stopOpacity: 1
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "99%",
        stopColor: "#A389D4",
        stopOpacity: 1
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["CartesianGrid"], {
        stroke: "#f5f5f5"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
        dataKey: "name"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["YAxis"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Legend"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Area"], {
        type: "monotone",
        dataKey: "amt",
        fillOpacity: 0.2,
        fill: "url(#colorBar1)",
        stroke: "none"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
        dataKey: "Bar 1",
        fill: "#1de9b6"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
        dataKey: "Bar 2",
        fill: "#A389D4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
        dataKey: "Bar 3",
        fill: "#04a9f5"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Line"], {
        dataKey: "pv",
        stroke: "#1dc4e9",
        strokeWidth: 5
      }))));
    }
  }]);

  return ComboChart;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (ComboChart);

/***/ }),

/***/ "./resources/js/Demo/Charts/ReChart/LineAngleChart.js":
/*!************************************************************!*\
  !*** ./resources/js/Demo/Charts/ReChart/LineAngleChart.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _hoc_Aux_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hoc/_Aux/index */ "./resources/js/hoc/_Aux/index.js");
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




var data = [{
  name: '2007',
  'Series 1': 20,
  'Series 2': 10
}, {
  name: '2008',
  'Series 1': 55,
  'Series 2': 45
}, {
  name: '2009',
  'Series 1': 45,
  'Series 2': 35
}, {
  name: '2010',
  'Series 1': 75,
  'Series 2': 65
}, {
  name: '2011',
  'Series 1': 50,
  'Series 2': 40
}, {
  name: '2012',
  'Series 1': 75,
  'Series 2': 65
}, {
  name: '2013',
  'Series 1': 100,
  'Series 2': 90
}];

var LineAngleChart = /*#__PURE__*/function (_React$Component) {
  _inherits(LineAngleChart, _React$Component);

  var _super = _createSuper(LineAngleChart);

  function LineAngleChart() {
    _classCallCheck(this, LineAngleChart);

    return _super.apply(this, arguments);
  }

  _createClass(LineAngleChart, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux_index__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["ResponsiveContainer"], {
        width: "100%",
        height: 300
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["LineChart"], {
        data: data,
        margin: {
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["CartesianGrid"], {
        strokeDasharray: "3 3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
        dataKey: "name"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["YAxis"], {
        type: "number"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Legend"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Line"], {
        dataKey: "Series 1",
        stroke: "#1de9b6",
        strokeWidth: 3
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Line"], {
        dataKey: "Series 2",
        stroke: "#04a9f5",
        strokeWidth: 3
      }))));
    }
  }]);

  return LineAngleChart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LineAngleChart);

/***/ }),

/***/ "./resources/js/Demo/Charts/ReChart/LineSmoothChart.js":
/*!*************************************************************!*\
  !*** ./resources/js/Demo/Charts/ReChart/LineSmoothChart.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _hoc_Aux_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hoc/_Aux/index */ "./resources/js/hoc/_Aux/index.js");
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




var data = [{
  name: '2007',
  'Series 1': 100,
  'Series 2': 90
}, {
  name: '2008',
  'Series 1': 75,
  'Series 2': 65
}, {
  name: '2009',
  'Series 1': 50,
  'Series 2': 40
}, {
  name: '2010',
  'Series 1': 75,
  'Series 2': 65
}, {
  name: '2011',
  'Series 1': 50,
  'Series 2': 40
}, {
  name: '2012',
  'Series 1': 75,
  'Series 2': 65
}, {
  name: '2013',
  'Series 1': 100,
  'Series 2': 90
}];

var LineSmoothChart = /*#__PURE__*/function (_React$Component) {
  _inherits(LineSmoothChart, _React$Component);

  var _super = _createSuper(LineSmoothChart);

  function LineSmoothChart() {
    _classCallCheck(this, LineSmoothChart);

    return _super.apply(this, arguments);
  }

  _createClass(LineSmoothChart, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux_index__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["ResponsiveContainer"], {
        width: "100%",
        height: 300
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["LineChart"], {
        data: data,
        margin: {
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["CartesianGrid"], {
        strokeDasharray: "3 3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
        dataKey: "name"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["YAxis"], {
        type: "number"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Legend"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Line"], {
        type: "monotone",
        dataKey: "Series 1",
        stroke: "#1de9b6",
        strokeWidth: 3
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Line"], {
        type: "monotone",
        dataKey: "Series 2",
        stroke: "#A389D4",
        strokeWidth: 3
      }))));
    }
  }]);

  return LineSmoothChart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LineSmoothChart);

/***/ }),

/***/ "./resources/js/Demo/Charts/ReChart/PieBasicChart.js":
/*!***********************************************************!*\
  !*** ./resources/js/Demo/Charts/ReChart/PieBasicChart.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _hoc_Aux_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hoc/_Aux/index */ "./resources/js/hoc/_Aux/index.js");
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




var data = [{
  name: 'Group A',
  value: 55
}, {
  name: 'Group B',
  value: 10
}, {
  name: 'Group C',
  value: 15
}, {
  name: 'Group D',
  value: 20
}];
var COLORS = ['#1de9b6', '#A389D4', '#04a9f5', '#1dc4e9'];
var RADIAN = Math.PI / 180;

var renderCustomizedLabel = function renderCustomizedLabel(_ref) {
  var cx = _ref.cx,
      cy = _ref.cy,
      midAngle = _ref.midAngle,
      innerRadius = _ref.innerRadius,
      outerRadius = _ref.outerRadius,
      percent = _ref.percent,
      index = _ref.index;
  var radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  var x = cx + radius * Math.cos(-midAngle * RADIAN);
  var y = cy + radius * Math.sin(-midAngle * RADIAN);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    x: x,
    y: y,
    fill: "white",
    textAnchor: x > cx ? 'start' : 'end',
    dominantBaseline: "central"
  }, "".concat((percent * 100).toFixed(0), "%"));
};

var PieBasicChart = /*#__PURE__*/function (_React$Component) {
  _inherits(PieBasicChart, _React$Component);

  var _super = _createSuper(PieBasicChart);

  function PieBasicChart() {
    _classCallCheck(this, PieBasicChart);

    return _super.apply(this, arguments);
  }

  _createClass(PieBasicChart, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux_index__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["ResponsiveContainer"], {
        width: "100%",
        height: 300
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["PieChart"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Pie"], {
        data: data,
        cx: "auto",
        cy: "auto",
        labelLine: false,
        label: renderCustomizedLabel,
        outerRadius: 120,
        fill: "#8884d8",
        dataKey: "value"
      }, data.map(function (entry, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
          key: "cell-".concat(index),
          fill: COLORS[index % COLORS.length]
        });
      })))));
    }
  }]);

  return PieBasicChart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PieBasicChart);

/***/ }),

/***/ "./resources/js/Demo/Charts/ReChart/PieDonutChart.js":
/*!***********************************************************!*\
  !*** ./resources/js/Demo/Charts/ReChart/PieDonutChart.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _hoc_Aux_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hoc/_Aux/index */ "./resources/js/hoc/_Aux/index.js");
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




var data = [{
  name: 'Data 1',
  value: 55
}, {
  name: 'Data 2',
  value: 10
}, {
  name: 'Data 3',
  value: 15
}, {
  name: 'Data 4',
  value: 20
}];
var COLORS = ['#1de9b6', '#A389D4', '#04a9f5', '#1dc4e9'];

var renderActiveShape = function renderActiveShape(props) {
  var RADIAN = Math.PI / 180;
  var cx = props.cx,
      cy = props.cy,
      midAngle = props.midAngle,
      innerRadius = props.innerRadius,
      outerRadius = props.outerRadius,
      startAngle = props.startAngle,
      endAngle = props.endAngle,
      fill = props.fill,
      payload = props.payload,
      percent = props.percent,
      value = props.value;
  var sin = Math.sin(-RADIAN * midAngle);
  var cos = Math.cos(-RADIAN * midAngle);
  var sx = cx + (outerRadius + 10) * cos;
  var sy = cy + (outerRadius + 10) * sin;
  var mx = cx + (outerRadius + 30) * cos;
  var my = cy + (outerRadius + 30) * sin;
  var ex = mx + (cos >= 0 ? 1 : -1) * 22;
  var ey = my;
  var textAnchor = cos >= 0 ? 'start' : 'end';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    x: cx,
    y: cy,
    dy: 8,
    textAnchor: "middle",
    fill: "#000",
    style: {
      fontSize: '16px',
      fontWeight: 600
    }
  }, payload.name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", null, " val: ", payload.value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Sector"], {
    cx: cx,
    cy: cy,
    innerRadius: innerRadius,
    outerRadius: outerRadius,
    startAngle: startAngle,
    endAngle: endAngle,
    fill: fill
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Sector"], {
    cx: cx,
    cy: cy,
    startAngle: startAngle,
    endAngle: endAngle,
    innerRadius: outerRadius + 6,
    outerRadius: outerRadius + 10,
    fill: fill
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M".concat(sx, ",").concat(sy, "L").concat(mx, ",").concat(my, "L").concat(ex, ",").concat(ey),
    stroke: fill,
    fill: "none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: ex,
    cy: ey,
    r: 2,
    fill: fill,
    stroke: "none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    x: ex + (cos >= 0 ? 1 : -1) * 12,
    y: ey,
    textAnchor: textAnchor,
    fill: "#333"
  }, "PV ".concat(value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    x: ex + (cos >= 0 ? 1 : -1) * 12,
    y: ey,
    dy: 18,
    textAnchor: textAnchor,
    fill: "#999"
  }, "(Rate ".concat((percent * 100).toFixed(2), "%)")));
};

var PieDonutChart = /*#__PURE__*/function (_React$Component) {
  _inherits(PieDonutChart, _React$Component);

  var _super = _createSuper(PieDonutChart);

  function PieDonutChart() {
    var _this;

    _classCallCheck(this, PieDonutChart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeIndex: 0
    });

    _defineProperty(_assertThisInitialized(_this), "onPieEnter", function (data, index) {
      _this.setState({
        activeIndex: index
      });
    });

    return _this;
  }

  _createClass(PieDonutChart, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux_index__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["ResponsiveContainer"], {
        width: "100%",
        height: 300
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["PieChart"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Pie"], {
        data: data,
        activeIndex: this.state.activeIndex,
        activeShape: renderActiveShape,
        cx: "auto",
        cy: "auto",
        innerRadius: 80,
        outerRadius: 120,
        fill: "#8884d8",
        paddingAngle: 2,
        dataKey: "value",
        onMouseEnter: this.onPieEnter
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null), data.map(function (entry, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
          key: "cell-".concat(index),
          fill: COLORS[index % COLORS.length]
        });
      })))));
    }
  }]);

  return PieDonutChart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PieDonutChart);

/***/ }),

/***/ "./resources/js/Demo/Charts/ReChart/index.js":
/*!***************************************************!*\
  !*** ./resources/js/Demo/Charts/ReChart/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _hoc_Aux_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hoc/_Aux/index */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var _BarSimpleChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BarSimpleChart */ "./resources/js/Demo/Charts/ReChart/BarSimpleChart.js");
/* harmony import */ var _BarStackedChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BarStackedChart */ "./resources/js/Demo/Charts/ReChart/BarStackedChart.js");
/* harmony import */ var _AreaAngleChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AreaAngleChart */ "./resources/js/Demo/Charts/ReChart/AreaAngleChart.js");
/* harmony import */ var _AreaSmoothChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AreaSmoothChart */ "./resources/js/Demo/Charts/ReChart/AreaSmoothChart.js");
/* harmony import */ var _LineAngleChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LineAngleChart */ "./resources/js/Demo/Charts/ReChart/LineAngleChart.js");
/* harmony import */ var _LineSmoothChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LineSmoothChart */ "./resources/js/Demo/Charts/ReChart/LineSmoothChart.js");
/* harmony import */ var _PieBasicChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PieBasicChart */ "./resources/js/Demo/Charts/ReChart/PieBasicChart.js");
/* harmony import */ var _PieDonutChart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PieDonutChart */ "./resources/js/Demo/Charts/ReChart/PieDonutChart.js");
/* harmony import */ var _ComboChart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ComboChart */ "./resources/js/Demo/Charts/ReChart/ComboChart.js");
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














var ReChart = /*#__PURE__*/function (_React$Component) {
  _inherits(ReChart, _React$Component);

  var _super = _createSuper(ReChart);

  function ReChart() {
    _classCallCheck(this, ReChart);

    return _super.apply(this, arguments);
  }

  _createClass(ReChart, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux_index__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Bar [ Simple ] Chart")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BarSimpleChart__WEBPACK_IMPORTED_MODULE_3__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Bar [ Stacked ] Chart")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BarStackedChart__WEBPACK_IMPORTED_MODULE_4__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Line [ Angle ] Chart")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AreaAngleChart__WEBPACK_IMPORTED_MODULE_5__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Area [ Smooth ] Chart")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AreaSmoothChart__WEBPACK_IMPORTED_MODULE_6__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Line [ Angle ] Chart")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LineAngleChart__WEBPACK_IMPORTED_MODULE_7__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Line [ Smooth ] Chart")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LineSmoothChart__WEBPACK_IMPORTED_MODULE_8__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Pie [ Basic ] Chart")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PieBasicChart__WEBPACK_IMPORTED_MODULE_9__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Pie [ Donut ] Chart")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PieDonutChart__WEBPACK_IMPORTED_MODULE_10__["default"], null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Combo Chart")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ComboChart__WEBPACK_IMPORTED_MODULE_11__["default"], null))))));
    }
  }]);

  return ReChart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ReChart);

/***/ })

}]);