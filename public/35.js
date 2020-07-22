(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./resources/js/Demo/Widget/Chart/AmChartNewsStatistics.js":
/*!*****************************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/AmChartNewsStatistics.js ***!
  \*****************************************************************/
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







var AmChartNewsStatistics = /*#__PURE__*/function (_Component) {
  _inherits(AmChartNewsStatistics, _Component);

  var _super = _createSuper(AmChartNewsStatistics);

  function AmChartNewsStatistics() {
    _classCallCheck(this, AmChartNewsStatistics);

    return _super.apply(this, arguments);
  }

  _createClass(AmChartNewsStatistics, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default.a.makeChart("bar-chart", {
        "type": "serial",
        "theme": "light",
        "dataProvider": [{
          "game": "Sport",
          "visits": 53,
          "color": ["#1de9b6", "#1dc4e9"]
        }, {
          "game": "Music",
          "visits": 13,
          "color": ["#a389d4", "#899ed4"]
        }, {
          "game": "Travel",
          "visits": 30,
          "color": ["#04a9f5", "#049df5"]
        }, {
          "game": "News",
          "visits": 4,
          "color": ["#f44236", "#f48f36"]
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
          "lineAlpha": 0,
          "columnWidth": 0.2,
          "type": "column",
          "valueField": "visits"
        }],
        "chartCursor": {
          "categoryBalloonEnabled": false,
          "cursorAlpha": 0,
          "zoomable": false
        },
        "categoryField": "game",
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
        id: "bar-chart",
        className: "lineChart ChartShadow",
        style: {
          width: '100%',
          height: this.props.height
        }
      });
    }
  }]);

  return AmChartNewsStatistics;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AmChartNewsStatistics);

/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/AmChartPhoneCalls.js":
/*!*************************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/AmChartPhoneCalls.js ***!
  \*************************************************************/
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var AmChartPhoneCalls = /*#__PURE__*/function (_Component) {
  _inherits(AmChartPhoneCalls, _Component);

  var _super = _createSuper(AmChartPhoneCalls);

  function AmChartPhoneCalls() {
    var _this;

    _classCallCheck(this, AmChartPhoneCalls);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      dataum: [{
        "year": "2000",
        "value": 55
      }, {
        "year": "2001",
        "value": 45
      }, {
        "year": "2002",
        "value": 60
      }, {
        "year": "2003",
        "value": 80
      }, {
        "year": "2004",
        "value": 70
      }, {
        "year": "2005",
        "value": 55
      }]
    });

    return _this;
  }

  _createClass(AmChartPhoneCalls, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var chartm = _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default.a.makeChart("call-chart", {
        "type": "serial",
        "addClassNames": true,
        "defs": {
          "filter": [{
            "x": "-50%",
            "y": "-50%",
            "width": "200%",
            "height": "200%",
            "id": "blur",
            "feGaussianBlur": {
              "in": "SourceGraphic",
              "stdDeviation": "30"
            }
          }, {
            "id": "shadow",
            "x": "-10%",
            "y": "-10%",
            "width": "120%",
            "height": "120%",
            "feOffset": {
              "result": "offOut",
              "in": "SourceAlpha",
              "dx": "0",
              "dy": "20"
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
        "dataProvider": this.state.dataum,
        "autoMarginOffset": 0,
        "marginRight": 0,
        "categoryField": "year",
        "categoryAxis": {
          "color": '#fff',
          "gridAlpha": 0,
          "axisAlpha": 0,
          "lineAlpha": 0,
          "offset": -20,
          "inside": true,
          "parseDates": true,
          "minPeriod": "YYYY"
        },
        "valueAxes": [{
          "fontSize": 0,
          "inside": true,
          "gridAlpha": 0,
          "axisAlpha": 0,
          "lineAlpha": 0,
          "minimum": 0,
          "maximum": 100
        }],
        "chartCursor": {
          "valueLineEnabled": false,
          "valueLineBalloonEnabled": false,
          "cursorAlpha": 0,
          "zoomable": false,
          "valueZoomable": false,
          "cursorColor": "#fff",
          "categoryBalloonColor": "#95ead5",
          "valueLineAlpha": 0
        },
        "graphs": [{
          "id": "g1",
          "type": "smoothedLine",
          "valueField": "value",
          "fillColors": ["#1de9b6", "#1dc4e9"],
          "lineAlpha": 0,
          "fillAlphas": 1,
          "showBalloon": true,
          "balloon": {
            "drop": true,
            "adjustBorderColor": false,
            "color": "#ffffff",
            "fillAlphas": 0.2,
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletSize": 5,
            "hideBulletsCount": 50,
            "lineThickness": 2,
            "useLineColorForBulletBorder": true,
            "valueField": "value",
            "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
          }
        }]
      });
      setTimeout(function () {
        chartm.zoomToIndexes(1, _this2.state.dataum.length - 2);
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "call-chart",
        style: {
          width: '100%',
          height: this.props.height
        }
      });
    }
  }]);

  return AmChartPhoneCalls;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AmChartPhoneCalls);

/***/ })

}]);