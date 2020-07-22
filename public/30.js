(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./resources/js/Demo/Widget/Chart/AmChartAge.js":
/*!******************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/AmChartAge.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amcharts3/amcharts/amcharts */ "./node_modules/amcharts3/amcharts/amcharts.js");
/* harmony import */ var amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var amcharts3_amcharts_serial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amcharts3/amcharts/serial */ "./node_modules/amcharts3/amcharts/serial.js");
/* harmony import */ var amcharts3_amcharts_serial__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_serial__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var amcharts3_amcharts_themes_light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! amcharts3/amcharts/themes/light */ "./node_modules/amcharts3/amcharts/themes/light.js");
/* harmony import */ var amcharts3_amcharts_themes_light__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_themes_light__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts3-react */ "./node_modules/@amcharts/amcharts3-react/index.js");
/* harmony import */ var _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4__);
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







var AmChartAge = /*#__PURE__*/function (_Component) {
  _inherits(AmChartAge, _Component);

  var _super = _createSuper(AmChartAge);

  function AmChartAge() {
    _classCallCheck(this, AmChartAge);

    return _super.apply(this, arguments);
  }

  _createClass(AmChartAge, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default.a.makeChart("Stack-age", {
        "type": "serial",
        "theme": "light",
        "dataProvider": [{
          "age": "<20",
          "visits": 30,
          "color": ["#1de9b6", "#1dc4e9"]
        }, {
          "age": "30",
          "visits": 35,
          "color": ["#899FD4", "#A389D4"]
        }, {
          "age": "40",
          "visits": 40,
          "color": ["#1de9b6", "#1dc4e9"]
        }, {
          "age": "50",
          "visits": 30,
          "color": ["#899FD4", "#A389D4"]
        }, {
          "age": "60",
          "visits": 32,
          "color": ["#1de9b6", "#1dc4e9"]
        }, {
          "age": ">70",
          "visits": 38,
          "color": ["#899FD4", "#A389D4"]
        }],
        "valueAxes": [{
          "gridAlpha": 0,
          "axisAlpha": 0,
          "lineAlpha": 0,
          "fontSize": 0
        }],
        "startDuration": 1,
        "graphs": [{
          "balloonText": "<b>[[category]]: [[value]]</b>",
          "fillColorsField": "color",
          "fillAlphas": 0.9,
          "lineAlpha": 0.2,
          "columnWidth": 0.2,
          "type": "column",
          "valueField": "visits"
        }],
        "chartCursor": {
          "categoryBalloonEnabled": false,
          "cursorAlpha": 0,
          "zoomable": false
        },
        "categoryField": "age",
        "categoryAxis": {
          "gridPosition": "start",
          "gridAlpha": 0,
          "axisAlpha": 0,
          "lineAlpha": 0
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "Stack-age",
        className: "Stackchart",
        style: {
          width: '100%',
          height: this.props.height
        }
      });
    }
  }]);

  return AmChartAge;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AmChartAge);

/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/AmChartStatistics11.js":
/*!***************************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/AmChartStatistics11.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amcharts3/amcharts/amcharts */ "./node_modules/amcharts3/amcharts/amcharts.js");
/* harmony import */ var amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var amcharts3_amcharts_serial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amcharts3/amcharts/serial */ "./node_modules/amcharts3/amcharts/serial.js");
/* harmony import */ var amcharts3_amcharts_serial__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_serial__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var amcharts3_amcharts_themes_light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! amcharts3/amcharts/themes/light */ "./node_modules/amcharts3/amcharts/themes/light.js");
/* harmony import */ var amcharts3_amcharts_themes_light__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_themes_light__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts3-react */ "./node_modules/@amcharts/amcharts3-react/index.js");
/* harmony import */ var _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4__);
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







var AmChartStatistics11 = /*#__PURE__*/function (_Component) {
  _inherits(AmChartStatistics11, _Component);

  var _super = _createSuper(AmChartStatistics11);

  function AmChartStatistics11() {
    _classCallCheck(this, AmChartStatistics11);

    return _super.apply(this, arguments);
  }

  _createClass(AmChartStatistics11, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default.a.makeChart("Statistics-sale", {
        "type": "serial",
        "theme": "light",
        "autoMargins": false,
        "addClassNames": true,
        "zoomOutText": "",
        "defs": {
          "filter": [{
            "id": "shadow",
            "width": "150%",
            "height": "150%",
            "feOffset": {
              "result": "offOut",
              "in": "SourceAlpha",
              "dx": "2",
              "dy": "2"
            },
            "feGaussianBlur": {
              "result": "blurOut",
              "in": "offOut",
              "stdDeviation": "10"
            },
            "feColorMatrix": {
              "result": "blurOut",
              "type": "matrix",
              "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .2 0"
            },
            "feBlend": {
              "in": "SourceGraphic",
              "in2": "blurOut",
              "mode": "normal"
            }
          }]
        },
        "fontSize": 15,
        "pathToImages": "../amcharts/images/",
        "dataProvider": [{
          "year": "2001",
          "bicycles": 55
        }, {
          "year": "2002",
          "bicycles": 40
        }, {
          "year": "2003",
          "bicycles": 50
        }],
        "dataDateFormat": "YYYY",
        "marginTop": 10,
        "marginRight": 0,
        "marginLeft": 0,
        "autoMarginOffset": 5,
        "categoryField": "year",
        "categoryAxis": {
          "gridAlpha": 0,
          "axisAlpha": 0,
          "startOnAxis": true,
          "tickLength": 0,
          "color": "#fff",
          "parseDates": true,
          "minPeriod": "YYYY",
          "offset": 0,
          "inside": true
        },
        "valueAxes": [{
          "fontSize": 0,
          "gridAlpha": 0,
          "axisAlpha": 0,
          "minimum": 0,
          "maximum": 100
        }],
        "graphs": [{
          "id": "g3",
          "title": "Bicycles",
          "valueField": "bicycles",
          "lineAlpha": 1,
          "lineColor": "#FFFFFF",
          "lineThickness": 3,
          "bullet": "round",
          "bulletBorderAlpha": 3,
          "bulletAlpha": 1,
          "bulletSize": 8,
          "stackable": false,
          "bulletColor": "#04A5F5",
          "bulletBorderColor": "#fff",
          "bulletBorderThickness": 3,
          "balloonText": "<div style='margin-bottom:30px;text-shadow: 2px 2px rgba(0, 0, 0, 0.1); font-weight:200;font-size:30px; color:#ffffff'>[[value]]</div>"
        }],
        "chartCursor": {
          "cursorAlpha": 1,
          "fontSize": 0,
          "zoomable": false,
          "cursorColor": "#fff",
          "categoryBalloonColor": "#04A5F5",
          "fullWidth": true,
          "categoryBalloonDateFormat": "YYYY",
          "balloonPointerOrientation": "vertical"
        },
        "balloon": {
          "borderAlpha": 0,
          "fillAlpha": 0,
          "shadowAlpha": 0,
          "offsetX": 40,
          "offsetY": -50
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "Statistics-sale",
        className: "last-week-sales",
        style: {
          width: '100%',
          height: this.props.height
        }
      });
    }
  }]);

  return AmChartStatistics11;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AmChartStatistics11);

/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/AmChartStatistics6.js":
/*!**************************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/AmChartStatistics6.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amcharts3/amcharts/amcharts */ "./node_modules/amcharts3/amcharts/amcharts.js");
/* harmony import */ var amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var amcharts3_amcharts_serial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amcharts3/amcharts/serial */ "./node_modules/amcharts3/amcharts/serial.js");
/* harmony import */ var amcharts3_amcharts_serial__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_serial__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var amcharts3_amcharts_themes_light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! amcharts3/amcharts/themes/light */ "./node_modules/amcharts3/amcharts/themes/light.js");
/* harmony import */ var amcharts3_amcharts_themes_light__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_themes_light__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts3-react */ "./node_modules/@amcharts/amcharts3-react/index.js");
/* harmony import */ var _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4__);
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







var AmChartStatistics6 = /*#__PURE__*/function (_Component) {
  _inherits(AmChartStatistics6, _Component);

  var _super = _createSuper(AmChartStatistics6);

  function AmChartStatistics6() {
    _classCallCheck(this, AmChartStatistics6);

    return _super.apply(this, arguments);
  }

  _createClass(AmChartStatistics6, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default.a.makeChart("bar-chart2", {
        "type": "serial",
        "theme": "light",
        "marginTop": 10,
        "marginRight": 0,
        "valueAxes": [{
          "id": "v1",
          "position": "left",
          "axisAlpha": 0,
          "lineAlpha": 0,
          "autoGridCount": false,
          "labelFunction": function labelFunction(value) {
            return +Math.round(value) + "00";
          }
        }],
        "graphs": [{
          "id": "g1",
          "valueAxis": "v1",
          "lineColor": ["#1de9b6", "#1dc4e9"],
          "fillColors": ["#1de9b6", "#1dc4e9"],
          "fillAlphas": 1,
          "type": "column",
          "title": "SALES",
          "valueField": "sales",
          "columnWidth": 0.3,
          "legendValueText": "$[[value]]M",
          "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
        }, {
          "id": "g2",
          "valueAxis": "v1",
          "lineColor": ["#a389d4", "#899ed4"],
          "fillColors": ["#a389d4", "#899ed4"],
          "fillAlphas": 1,
          "type": "column",
          "title": "VISITS ",
          "valueField": "visits",
          "columnWidth": 0.3,
          "legendValueText": "$[[value]]M",
          "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
        }, {
          "id": "g3",
          "valueAxis": "v1",
          "lineColor": ["#04a9f5", "#049df5"],
          "fillColors": ["#04a9f5", "#049df5"],
          "fillAlphas": 1,
          "type": "column",
          "title": "CLICKS",
          "valueField": "clicks",
          "columnWidth": 0.3,
          "legendValueText": "$[[value]]M",
          "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
        }],
        "chartCursor": {
          "pan": true,
          "valueLineEnabled": true,
          "valueLineBalloonEnabled": true,
          "cursorAlpha": 0,
          "valueLineAlpha": 0.2
        },
        "categoryField": "Year",
        "categoryAxis": {
          "dashLength": 1,
          "gridAlpha": 0,
          "axisAlpha": 0,
          "lineAlpha": 0,
          "minorGridEnabled": true
        },
        "legend": {
          "useGraphSettings": true,
          "position": "top"
        },
        "balloon": {
          "borderThickness": 1,
          "shadowAlpha": 0
        },
        "dataProvider": [{
          "Year": "2014",
          "sales": 2,
          "visits": 4,
          "clicks": 3
        }, {
          "Year": "2015",
          "sales": 4,
          "visits": 7,
          "clicks": 5
        }, {
          "Year": "2016",
          "sales": 2,
          "visits": 3,
          "clicks": 4
        }, {
          "Year": "2017",
          "sales": 4.5,
          "visits": 6,
          "clicks": 4
        }]
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "bar-chart2",
        className: "bar-chart2",
        style: {
          width: '100%',
          height: this.props.height
        }
      });
    }
  }]);

  return AmChartStatistics6;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AmChartStatistics6);

/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/FlotChartTransactions.js":
/*!*****************************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/FlotChartTransactions.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_flot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-flot */ "./node_modules/react-flot/index.js");
/* harmony import */ var react_flot__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_flot__WEBPACK_IMPORTED_MODULE_1__);
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



var optionsSaleView = {
  series: {
    label: "",
    curvedLines: {
      active: true,
      nrSplinePoints: 0
    }
  },
  tooltip: {
    show: true,
    content: "x : %x | y : %y"
  },
  grid: {
    hoverable: true,
    borderWidth: 0,
    labelMargin: 0,
    axisMargin: 0,
    minBorderMargin: 0
  },
  yaxis: {
    min: 0,
    max: 50,
    color: 'transparent',
    font: {
      size: 0
    }
  },
  xaxis: {
    color: 'transparent',
    font: {
      size: 0
    }
  }
};
var dataSaleView = [{
  data: [[0, 48], [1, 30], [2, 25], [3, 30], [4, 20], [5, 40], [6, 30]],
  color: "#1dc4e9",
  bars: {
    show: true,
    lineWidth: 1,
    fill: true,
    fillColor: {
      colors: [{
        opacity: 1
      }, {
        opacity: 1
      }]
    },
    barWidth: 0.2,
    align: 'center',
    horizontal: false
  },
  points: {
    show: false,
    radius: 3,
    fill: true
  },
  curvedLines: {
    apply: false
  }
}];

var FlotChartTransactions = /*#__PURE__*/function (_Component) {
  _inherits(FlotChartTransactions, _Component);

  var _super = _createSuper(FlotChartTransactions);

  function FlotChartTransactions() {
    _classCallCheck(this, FlotChartTransactions);

    return _super.apply(this, arguments);
  }

  _createClass(FlotChartTransactions, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_flot__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "transactions",
        options: optionsSaleView,
        data: dataSaleView,
        width: "80px",
        height: this.props.height,
        style: {
          margin: '0 auto'
        }
      });
    }
  }]);

  return FlotChartTransactions;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FlotChartTransactions);

/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/FlotChartTransactions1.js":
/*!******************************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/FlotChartTransactions1.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_flot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-flot */ "./node_modules/react-flot/index.js");
/* harmony import */ var react_flot__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_flot__WEBPACK_IMPORTED_MODULE_1__);
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



var optionsSaleView = {
  series: {
    label: "",
    curvedLines: {
      active: true,
      nrSplinePoints: 0
    }
  },
  tooltip: {
    show: true,
    content: "x : %x | y : %y"
  },
  grid: {
    hoverable: true,
    borderWidth: 0,
    labelMargin: 0,
    axisMargin: 0,
    minBorderMargin: 0
  },
  yaxis: {
    min: 0,
    max: 50,
    color: 'transparent',
    font: {
      size: 0
    }
  },
  xaxis: {
    color: 'transparent',
    font: {
      size: 0
    }
  }
};
var dataSaleView = [{
  data: [[0, 48], [1, 30], [2, 25], [3, 30], [4, 20], [5, 40], [6, 30]],
  color: "#a389d4",
  bars: {
    show: true,
    lineWidth: 1,
    fill: true,
    fillColor: {
      colors: [{
        opacity: 1
      }, {
        opacity: 1
      }]
    },
    barWidth: 0.2,
    align: 'center',
    horizontal: false
  },
  points: {
    show: false,
    radius: 3,
    fill: true
  },
  curvedLines: {
    apply: false
  }
}];

var FlotChartTransactions1 = /*#__PURE__*/function (_Component) {
  _inherits(FlotChartTransactions1, _Component);

  var _super = _createSuper(FlotChartTransactions1);

  function FlotChartTransactions1() {
    _classCallCheck(this, FlotChartTransactions1);

    return _super.apply(this, arguments);
  }

  _createClass(FlotChartTransactions1, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_flot__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "mx-auto",
        id: "transactions1",
        options: optionsSaleView,
        data: dataSaleView,
        width: "80px",
        height: "50px"
      });
    }
  }]);

  return FlotChartTransactions1;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FlotChartTransactions1);

/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/FlotChartTransactions2.js":
/*!******************************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/FlotChartTransactions2.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_flot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-flot */ "./node_modules/react-flot/index.js");
/* harmony import */ var react_flot__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_flot__WEBPACK_IMPORTED_MODULE_1__);
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



var optionsSaleView = {
  series: {
    label: "",
    curvedLines: {
      active: true,
      nrSplinePoints: 0
    }
  },
  tooltip: {
    show: true,
    content: "x : %x | y : %y"
  },
  grid: {
    hoverable: true,
    borderWidth: 0,
    labelMargin: 0,
    axisMargin: 0,
    minBorderMargin: 0
  },
  yaxis: {
    min: 0,
    max: 50,
    color: 'transparent',
    font: {
      size: 0
    }
  },
  xaxis: {
    color: 'transparent',
    font: {
      size: 0
    }
  }
};
var dataSaleView = [{
  data: [[0, 44], [1, 26], [2, 22], [3, 35], [4, 28], [5, 35], [6, 28]],
  color: "#1dc4e9",
  bars: {
    show: true,
    lineWidth: 1,
    fill: true,
    fillColor: {
      colors: [{
        opacity: 1
      }, {
        opacity: 1
      }]
    },
    barWidth: 0.2,
    align: 'center',
    horizontal: false
  },
  points: {
    show: false,
    radius: 3,
    fill: true
  },
  curvedLines: {
    apply: false
  }
}];

var FlotChartTransactions2 = /*#__PURE__*/function (_Component) {
  _inherits(FlotChartTransactions2, _Component);

  var _super = _createSuper(FlotChartTransactions2);

  function FlotChartTransactions2() {
    _classCallCheck(this, FlotChartTransactions2);

    return _super.apply(this, arguments);
  }

  _createClass(FlotChartTransactions2, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_flot__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "transactions2",
        options: optionsSaleView,
        data: dataSaleView,
        width: "80px",
        height: "50px",
        style: {
          margin: '0 auto'
        }
      });
    }
  }]);

  return FlotChartTransactions2;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FlotChartTransactions2);

/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/FlotChartTransactions3.js":
/*!******************************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/FlotChartTransactions3.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_flot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-flot */ "./node_modules/react-flot/index.js");
/* harmony import */ var react_flot__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_flot__WEBPACK_IMPORTED_MODULE_1__);
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



var optionsSaleView = {
  series: {
    label: "",
    curvedLines: {
      active: true,
      nrSplinePoints: 0
    }
  },
  tooltip: {
    show: true,
    content: "x : %x | y : %y"
  },
  grid: {
    hoverable: true,
    borderWidth: 0,
    labelMargin: 0,
    axisMargin: 0,
    minBorderMargin: 0
  },
  yaxis: {
    min: 0,
    max: 50,
    color: 'transparent',
    font: {
      size: 0
    }
  },
  xaxis: {
    color: 'transparent',
    font: {
      size: 0
    }
  }
};
var dataSaleView = [{
  data: [[0, 40], [1, 30], [2, 25], [3, 38], [4, 30], [5, 38], [6, 30]],
  color: "#1dc4e9",
  bars: {
    show: true,
    lineWidth: 1,
    fill: true,
    fillColor: {
      colors: [{
        opacity: 1
      }, {
        opacity: 1
      }]
    },
    barWidth: 0.2,
    align: 'center',
    horizontal: false
  },
  points: {
    show: false,
    radius: 3,
    fill: true
  },
  curvedLines: {
    apply: false
  }
}];

var FlotChartTransactions3 = /*#__PURE__*/function (_Component) {
  _inherits(FlotChartTransactions3, _Component);

  var _super = _createSuper(FlotChartTransactions3);

  function FlotChartTransactions3() {
    _classCallCheck(this, FlotChartTransactions3);

    return _super.apply(this, arguments);
  }

  _createClass(FlotChartTransactions3, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_flot__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "transactions3",
        options: optionsSaleView,
        data: dataSaleView,
        width: "80px",
        height: this.props.height,
        style: {
          margin: '0 auto'
        }
      });
    }
  }]);

  return FlotChartTransactions3;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FlotChartTransactions3);

/***/ })

}]);