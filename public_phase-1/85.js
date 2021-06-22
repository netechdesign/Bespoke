(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[85],{

/***/ "./resources/js/Demo/Charts/AmChart/MapChart.js":
/*!******************************************************!*\
  !*** ./resources/js/Demo/Charts/AmChart/MapChart.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/maps */ "./node_modules/@amcharts/amcharts4/maps.js");
/* harmony import */ var _amcharts_amcharts4_geodata_worldLow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4-geodata/worldLow */ "./node_modules/@amcharts/amcharts4-geodata/worldLow.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
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







_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__["default"]);

var MapChart = /*#__PURE__*/function (_React$Component) {
  _inherits(MapChart, _React$Component);

  var _super = _createSuper(MapChart);

  function MapChart() {
    _classCallCheck(this, MapChart);

    return _super.apply(this, arguments);
  }

  _createClass(MapChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]("am-map-4", _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["MapChart"]);
      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

      chart.geodata = _amcharts_amcharts4_geodata_worldLow__WEBPACK_IMPORTED_MODULE_3__["default"];
      chart.projection = new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["projections"].Miller();
      var polygonSeries = chart.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["MapPolygonSeries"]());
      var polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.tooltipText = "{name}: {value.value.formatNumber('#.0')}";
      polygonSeries.heatRules.push({
        property: "fill",
        target: polygonSeries.mapPolygons.template,
        min: _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#ffffff"),
        max: _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#A389D4")
      });
      polygonSeries.useGeodata = true;
      var heatLegend = chart.chartContainer.createChild(_amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["HeatLegend"]);
      heatLegend.valign = "bottom";
      heatLegend.align = "left";
      heatLegend.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["percent"](100);
      heatLegend.series = polygonSeries;
      heatLegend.orientation = "horizontal";
      heatLegend.padding(20, 20, 20, 20);
      heatLegend.valueAxis.renderer.labels.template.fontSize = 10;
      heatLegend.valueAxis.renderer.minGridDistance = 40;
      polygonSeries.mapPolygons.template.events.on("over", function (event) {
        handleHover(event.target);
      });
      polygonSeries.mapPolygons.template.events.on("hit", function (event) {
        handleHover(event.target);
      });

      function handleHover(mapPolygon) {
        if (!isNaN(mapPolygon.dataItem.value)) {
          heatLegend.valueAxis.showTooltipAt(mapPolygon.dataItem.value);
        } else {
          heatLegend.valueAxis.hideTooltip();
        }
      }

      polygonSeries.mapPolygons.template.strokeOpacity = 0.4;
      polygonSeries.mapPolygons.template.events.on("out", function (event) {
        heatLegend.valueAxis.hideTooltip();
      });
      chart.zoomControl = new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["ZoomControl"]();
      chart.zoomControl.valign = "top";
      polygonSeries.data = [{
        id: "AF",
        value: 60.524
      }, {
        id: "AL",
        value: 77.185
      }, {
        id: "DZ",
        value: 70.874
      }, {
        id: "AO",
        value: 51.498
      }, {
        id: "AR",
        value: 76.128
      }, {
        id: "AM",
        value: 74.469
      }, {
        id: "AU",
        value: 82.364
      }, {
        id: "AT",
        value: 80.965
      }, {
        id: "AZ",
        value: 70.686
      }, {
        id: "BH",
        value: 76.474
      }, {
        id: "BD",
        value: 70.258
      }, {
        id: "BY",
        value: 69.829
      }, {
        id: "BE",
        value: 80.373
      }, {
        id: "BJ",
        value: 59.165
      }, {
        id: "BT",
        value: 67.888
      }, {
        id: "BO",
        value: 66.969
      }, {
        id: "BA",
        value: 76.211
      }, {
        id: "BW",
        value: 47.152
      }, {
        id: "BR",
        value: 73.667
      }, {
        id: "BN",
        value: 78.35
      }, {
        id: "BG",
        value: 73.448
      }, {
        id: "BF",
        value: 55.932
      }, {
        id: "BI",
        value: 53.637
      }, {
        id: "KH",
        value: 71.577
      }, {
        id: "CM",
        value: 54.61
      }, {
        id: "CA",
        value: 81.323
      }, {
        id: "CV",
        value: 74.771
      }, {
        id: "CF",
        value: 49.517
      }, {
        id: "TD",
        value: 50.724
      }, {
        id: "CL",
        value: 79.691
      }, {
        id: "CN",
        value: 75.178
      }, {
        id: "CO",
        value: 73.835
      }, {
        id: "KM",
        value: 60.661
      }, {
        id: "CD",
        value: 49.643
      }, {
        id: "CG",
        value: 58.32
      }, {
        id: "CR",
        value: 79.712
      }, {
        id: "CI",
        value: 50.367
      }, {
        id: "HR",
        value: 76.881
      }, {
        id: "CU",
        value: 79.088
      }, {
        id: "CY",
        value: 79.674
      }, {
        id: "CZ",
        value: 77.552
      }, {
        id: "DK",
        value: 79.251
      }, {
        id: "GL",
        value: 79.251
      }, {
        id: "DJ",
        value: 61.319
      }, {
        id: "DO",
        value: 73.181
      }, {
        id: "EC",
        value: 76.195
      }, {
        id: "EG",
        value: 70.933
      }, {
        id: "SV",
        value: 72.361
      }, {
        id: "GQ",
        value: 52.562
      }, {
        id: "ER",
        value: 62.329
      }, {
        id: "EE",
        value: 74.335
      }, {
        id: "ET",
        value: 62.983
      }, {
        id: "FJ",
        value: 69.626
      }, {
        id: "FI",
        value: 80.362
      }, {
        id: "FR",
        value: 81.663
      }, {
        id: "GA",
        value: 63.115
      }, {
        id: "GF",
        value: 79.9
      }, {
        id: "GM",
        value: 58.59
      }, {
        id: "GE",
        value: 74.162
      }, {
        id: "DE",
        value: 80.578
      }, {
        id: "GH",
        value: 60.979
      }, {
        id: "GR",
        value: 80.593
      }, {
        id: "GT",
        value: 71.77
      }, {
        id: "GN",
        value: 55.865
      }, {
        id: "GW",
        value: 54.054
      }, {
        id: "GY",
        value: 66.134
      }, {
        id: "HT",
        value: 62.746
      }, {
        id: "HN",
        value: 73.503
      }, {
        id: "HK",
        value: 83.199
      }, {
        id: "HU",
        value: 74.491
      }, {
        id: "IS",
        value: 81.96
      }, {
        id: "IN",
        value: 66.168
      }, {
        id: "ID",
        value: 70.624
      }, {
        id: "IR",
        value: 73.736
      }, {
        id: "IQ",
        value: 69.181
      }, {
        id: "IE",
        value: 80.531
      }, {
        id: "IL",
        value: 81.641
      }, {
        id: "IT",
        value: 82.235
      }, {
        id: "JM",
        value: 73.338
      }, {
        id: "JP",
        value: 83.418
      }, {
        id: "JO",
        value: 73.7
      }, {
        id: "KZ",
        value: 66.394
      }, {
        id: "KE",
        value: 61.115
      }, {
        id: "KP",
        value: 69.701
      }, {
        id: "KR",
        value: 81.294
      }, {
        id: "KW",
        value: 74.186
      }, {
        id: "KG",
        value: 67.37
      }, {
        id: "LA",
        value: 67.865
      }, {
        id: "LV",
        value: 72.045
      }, {
        id: "LB",
        value: 79.716
      }, {
        id: "LS",
        value: 48.947
      }, {
        id: "LR",
        value: 60.23
      }, {
        id: "LY",
        value: 75.13
      }, {
        id: "LT",
        value: 71.942
      }, {
        id: "LU",
        value: 80.371
      }, {
        id: "MK",
        value: 75.041
      }, {
        id: "MG",
        value: 64.28
      }, {
        id: "MW",
        value: 54.798
      }, {
        id: "MY",
        value: 74.836
      }, {
        id: "ML",
        value: 54.622
      }, {
        id: "MR",
        value: 61.39
      }, {
        id: "MU",
        value: 73.453
      }, {
        id: "MX",
        value: 77.281
      }, {
        id: "MD",
        value: 68.779
      }, {
        id: "MN",
        value: 67.286
      }, {
        id: "ME",
        value: 74.715
      }, {
        id: "MA",
        value: 70.714
      }, {
        id: "EH",
        value: 70.714
      }, {
        id: "MZ",
        value: 49.91
      }, {
        id: "MM",
        value: 65.009
      }, {
        id: "NA",
        value: 64.014
      }, {
        id: "NP",
        value: 67.989
      }, {
        id: "NL",
        value: 80.906
      }, {
        id: "NZ",
        value: 80.982
      }, {
        id: "NI",
        value: 74.515
      }, {
        id: "NE",
        value: 57.934
      }, {
        id: "NG",
        value: 52.116
      }, {
        id: "NO",
        value: 81.367
      }, {
        id: "SJ",
        value: 81.367
      }, {
        id: "OM",
        value: 76.287
      }, {
        id: "PK",
        value: 66.42
      }, {
        id: "PA",
        value: 77.342
      }, {
        id: "PG",
        value: 62.288
      }, {
        id: "PY",
        value: 72.181
      }, {
        id: "PE",
        value: 74.525
      }, {
        id: "PH",
        value: 68.538
      }, {
        id: "PL",
        value: 76.239
      }, {
        id: "PT",
        value: 79.732
      }, {
        id: "QA",
        value: 78.231
      }, {
        id: "RO",
        value: 73.718
      }, {
        id: "RU",
        value: 67.874
      }, {
        id: "RW",
        value: 63.563
      }, {
        id: "SA",
        value: 75.264
      }, {
        id: "SN",
        value: 63.3
      }, {
        id: "RS",
        value: 73.934
      }, {
        id: "SL",
        value: 45.338
      }, {
        id: "SG",
        value: 82.155
      }, {
        id: "SK",
        value: 75.272
      }, {
        id: "SI",
        value: 79.444
      }, {
        id: "SB",
        value: 67.465
      }, {
        id: "SO",
        value: 54
      }, {
        id: "ZA",
        value: 56.271
      }, {
        id: "SS",
        value: 54.666
      }, {
        id: "ES",
        value: 81.958
      }, {
        id: "LK",
        value: 74.116
      }, {
        id: "SD",
        value: 61.875
      }, {
        id: "SR",
        value: 70.794
      }, {
        id: "SZ",
        value: 48.91
      }, {
        id: "SE",
        value: 81.69
      }, {
        id: "CH",
        value: 82.471
      }, {
        id: "SY",
        value: 71
      }, {
        id: "TW",
        value: 79.45
      }, {
        id: "TJ",
        value: 67.118
      }, {
        id: "TZ",
        value: 60.885
      }, {
        id: "TH",
        value: 74.225
      }, {
        id: "TL",
        value: 67.033
      }, {
        id: "TG",
        value: 56.198
      }, {
        id: "TT",
        value: 69.761
      }, {
        id: "TN",
        value: 75.632
      }, {
        id: "TR",
        value: 74.938
      }, {
        id: "TM",
        value: 65.299
      }, {
        id: "UG",
        value: 58.668
      }, {
        id: "UA",
        value: 68.414
      }, {
        id: "AE",
        value: 76.671
      }, {
        id: "GB",
        value: 80.396
      }, {
        id: "US",
        value: 78.797
      }, {
        id: "UY",
        value: 77.084
      }, {
        id: "UZ",
        value: 68.117
      }, {
        id: "VE",
        value: 74.477
      }, {
        id: "PS",
        value: 73.018
      }, {
        id: "VN",
        value: 75.793
      }, {
        id: "YE",
        value: 62.923
      }, {
        id: "ZM",
        value: 57.037
      }, {
        id: "ZW",
        value: 58.142
      }];
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.chart) {
        this.chart.dispose();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "am-map-4",
        style: {
          width: "100%",
          height: "500px"
        }
      }));
    }
  }]);

  return MapChart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MapChart);

/***/ }),

/***/ "./resources/js/Demo/Charts/AmChart/PieChart.js":
/*!******************************************************!*\
  !*** ./resources/js/Demo/Charts/AmChart/PieChart.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
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






_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__["default"]);

var PieChart = /*#__PURE__*/function (_React$Component) {
  _inherits(PieChart, _React$Component);

  var _super = _createSuper(PieChart);

  function PieChart() {
    _classCallCheck(this, PieChart);

    return _super.apply(this, arguments);
  }

  _createClass(PieChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]("am-pie-2", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["PieChart"]);
      this.chart = chart;
      chart.data = [{
        "country": "Lithuania",
        "litres": 201.9
      }, {
        "country": "Germany",
        "litres": 165.8
      }, {
        "country": "Australia",
        "litres": 139.9
      }, {
        "country": "Austria",
        "litres": 128.3
      }, {
        "country": "UK",
        "litres": 99
      }, {
        "country": "Belgium",
        "litres": 60
      }];
      var pieSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["PieSeries"]());
      pieSeries.dataFields.value = "litres";
      pieSeries.dataFields.category = "country";
      pieSeries.slices.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#fff");
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;
      chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["Legend"]();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.chart) {
        this.chart.dispose();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "am-pie-2",
        style: {
          width: "100%",
          height: "500px"
        }
      }));
    }
  }]);

  return PieChart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PieChart);

/***/ }),

/***/ "./resources/js/Demo/Charts/AmChart/XyChart.js":
/*!*****************************************************!*\
  !*** ./resources/js/Demo/Charts/AmChart/XyChart.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
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






_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__["default"]);

var XyChart = /*#__PURE__*/function (_React$Component) {
  _inherits(XyChart, _React$Component);

  var _super = _createSuper(XyChart);

  function XyChart() {
    _classCallCheck(this, XyChart);

    return _super.apply(this, arguments);
  }

  _createClass(XyChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]("am-xy-1", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYChart"]);
      chart.data = [{
        "country": "Lithuania",
        "research": 501.9,
        "marketing": 250,
        "sales": 199
      }, {
        "country": "Czech Republic",
        "research": 301.9,
        "marketing": 222,
        "sales": 251
      }, {
        "country": "Ireland",
        "research": 201.1,
        "marketing": 170,
        "sales": 199
      }, {
        "country": "Germany",
        "research": 165.8,
        "marketing": 122,
        "sales": 90
      }, {
        "country": "Australia",
        "research": 139.9,
        "marketing": 99,
        "sales": 252
      }, {
        "country": "Austria",
        "research": 128.3,
        "marketing": 85,
        "sales": 84
      }, {
        "country": "UK",
        "research": 99,
        "marketing": 93,
        "sales": 142
      }, {
        "country": "Belgium",
        "research": 60,
        "marketing": 50,
        "sales": 55
      }, {
        "country": "The Netherlands",
        "research": 50,
        "marketing": 42,
        "sales": 25
      }];
      var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["CategoryAxis"]());
      categoryAxis.dataFields.category = "country";
      categoryAxis.title.text = "Local country offices";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 20;
      var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
      valueAxis.title.text = "Expenditure (M)";
      var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ColumnSeries"]());
      series.dataFields.valueY = "research";
      series.dataFields.categoryX = "country";
      series.name = "Research";
      series.tooltipText = "{name}: [bold]{valueY}[/]";
      series.stacked = true;
      var series2 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ColumnSeries"]());
      series2.dataFields.valueY = "marketing";
      series2.dataFields.categoryX = "country";
      series2.name = "Marketing";
      series2.tooltipText = "{name}: [bold]{valueY}[/]";
      series2.stacked = true;
      var series3 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ColumnSeries"]());
      series3.dataFields.valueY = "sales";
      series3.dataFields.categoryX = "country";
      series3.name = "Sales";
      series3.tooltipText = "{name}: [bold]{valueY}[/]";
      chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYCursor"]();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.chart) {
        this.chart.dispose();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "am-xy-1",
        style: {
          width: "100%",
          height: "500px"
        }
      }));
    }
  }]);

  return XyChart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (XyChart);

/***/ }),

/***/ "./resources/js/Demo/Charts/AmChart/index.js":
/*!***************************************************!*\
  !*** ./resources/js/Demo/Charts/AmChart/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _hoc_Aux_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hoc/_Aux/index */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var _PieChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PieChart */ "./resources/js/Demo/Charts/AmChart/PieChart.js");
/* harmony import */ var _XyChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./XyChart */ "./resources/js/Demo/Charts/AmChart/XyChart.js");
/* harmony import */ var _MapChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MapChart */ "./resources/js/Demo/Charts/AmChart/MapChart.js");
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








var AmChart = /*#__PURE__*/function (_React$Component) {
  _inherits(AmChart, _React$Component);

  var _super = _createSuper(AmChart);

  function AmChart() {
    _classCallCheck(this, AmChart);

    return _super.apply(this, arguments);
  }

  _createClass(AmChart, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux_index__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Amchart 4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "mb-4"
      }, "Pie Chart"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        className: "mb-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Pie [ With Legend ] Chart"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PieChart__WEBPACK_IMPORTED_MODULE_3__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "mb-4"
      }, "XY Chart"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        className: "mb-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "XY [ Stacked 1 ] Chart"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_XyChart__WEBPACK_IMPORTED_MODULE_4__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "mb-4"
      }, "Map Chart"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        className: "mb-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Map [ Heat-Map ] Chart"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MapChart__WEBPACK_IMPORTED_MODULE_5__["default"], null))))))));
    }
  }]);

  return AmChart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AmChart);

/***/ })

}]);