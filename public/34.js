(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./resources/js/Demo/Widget/Chart/AmChartEarnings1.js":
/*!************************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/AmChartEarnings1.js ***!
  \************************************************************/
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







var AmChartEarnings1 = /*#__PURE__*/function (_Component) {
  _inherits(AmChartEarnings1, _Component);

  var _super = _createSuper(AmChartEarnings1);

  function AmChartEarnings1() {
    _classCallCheck(this, AmChartEarnings1);

    return _super.apply(this, arguments);
  }

  _createClass(AmChartEarnings1, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default.a.makeChart("widget-line-chart1", {
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
        "dataProvider": [{
          "day": "Mon",
          "value": 60
        }, {
          "day": "Tue",
          "value": 50
        }, {
          "day": "Wed",
          "value": 59
        }, {
          "day": "Thu",
          "value": 55
        }, {
          "day": "Fri",
          "value": 65
        }, {
          "day": "Sat",
          "value": 55
        }, {
          "day": "Sun",
          "value": 70
        }],
        "autoMarginOffset": 0,
        "marginRight": 0,
        "categoryField": "day",
        "categoryAxis": {
          "color": '#393c40',
          "gridAlpha": 0,
          "axisAlpha": 0,
          "lineAlpha": 0,
          "offset": -20,
          "inside": true
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
          "categoryBalloonColor": "#23d3d7",
          "valueLineAlpha": 0
        },
        "graphs": [{
          "id": "g1",
          "type": "line",
          "valueField": "value",
          "lineColor": "#23d3d7",
          "lineAlpha": 1,
          "lineThickness": 3,
          "fillAlphas": 0,
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
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "widget-line-chart1",
        className: "WidgetlineChart ChartShadow",
        style: {
          width: '100%',
          height: this.props.height
        }
      });
    }
  }]);

  return AmChartEarnings1;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AmChartEarnings1);

/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/AmChartYearlySummary.js":
/*!****************************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/AmChartYearlySummary.js ***!
  \****************************************************************/
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







var AmChartYearlySummary = /*#__PURE__*/function (_Component) {
  _inherits(AmChartYearlySummary, _Component);

  var _super = _createSuper(AmChartYearlySummary);

  function AmChartYearlySummary() {
    _classCallCheck(this, AmChartYearlySummary);

    return _super.apply(this, arguments);
  }

  _createClass(AmChartYearlySummary, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default.a.makeChart("bar-chart3", {
        "type": "serial",
        "theme": "light",
        "marginTop": 10,
        "marginRight": 0,
        "valueAxes": [{
          "id": "v1",
          "position": "left",
          "gridAlpha": 0,
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
          "title": "Last Week ",
          "valueField": "sales2",
          "columnWidth": 0.2,
          "legendValueText": "$[[value]]M",
          "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
        }, {
          "id": "g2",
          "valueAxis": "v1",
          "lineColor": ["#a389d4", "#899ed4"],
          "fillColors": ["#a389d4", "#899ed4"],
          "fillAlphas": 1,
          "type": "column",
          "title": "Market Place ",
          "valueField": "sales1",
          "columnWidth": 0.2,
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
        "categoryField": "date",
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
          "date": "Q1",
          "sales1": 4.5,
          "sales2": 5.5
        }, {
          "date": "Q2",
          "sales1": 5,
          "sales2": 6.5
        }, {
          "date": "Q3",
          "sales1": 6.5,
          "sales2": 5.5
        }, {
          "date": "Q4",
          "sales1": 6,
          "sales2": 7
        }]
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "bar-chart3",
        className: "bar-chart3",
        style: {
          width: '100%',
          height: this.props.height
        }
      });
    }
  }]);

  return AmChartYearlySummary;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AmChartYearlySummary);

/***/ })

}]);