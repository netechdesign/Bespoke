(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./node_modules/amcharts3/amcharts/radar.js":
/*!**************************************************!*\
  !*** ./node_modules/amcharts3/amcharts/radar.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(){var d=window.AmCharts;d.AmRadarChart=d.Class({inherits:d.AmCoordinateChart,construct:function(a){this.type="radar";d.AmRadarChart.base.construct.call(this,a);this.cname="AmRadarChart";this.marginRight=this.marginBottom=this.marginTop=this.marginLeft=0;this.radius="35%";d.applyTheme(this,a,this.cname)},initChart:function(){d.AmRadarChart.base.initChart.call(this);if(this.dataChanged)this.parseData();else this.onDataUpdated()},onDataUpdated:function(){this.drawChart()},updateGraphs:function(){var a=
this.graphs,b;for(b=0;b<a.length;b++){var c=a[b];c.index=b;c.width=this.realRadius;c.height=this.realRadius;c.x=this.marginLeftReal;c.y=this.marginTopReal;c.data=this.chartData}},parseData:function(){d.AmRadarChart.base.parseData.call(this);this.parseSerialData(this.dataProvider)},updateValueAxes:function(){var a=this.valueAxes,b;for(b=0;b<a.length;b++){var c=a[b];c.axisRenderer=d.RadAxis;c.guideFillRenderer=d.RadarFill;c.axisItemRenderer=d.RadItem;c.autoGridCount=!1;c.rMultiplier=1;c.x=this.marginLeftReal;
c.y=this.marginTopReal;c.width=this.realRadius;c.height=this.realRadius;c.marginsChanged=!0;c.titleDY=-c.height}},drawChart:function(){d.AmRadarChart.base.drawChart.call(this);var a=this.updateWidth(),b=this.updateHeight(),c=this.marginTop+this.getTitleHeight(),f=this.marginLeft,m=this.marginBottom,n=this.marginRight,e=b-c-m;this.marginLeftReal=f+(a-f-n)/2;this.marginTopReal=c+e/2;this.realRadius=d.toCoordinate(this.radius,Math.min(a-f-n,b-c-m),e);this.updateValueAxes();this.updateGraphs();a=this.chartData;
if(d.ifArray(a)){if(0<this.realWidth&&0<this.realHeight){a=a.length-1;c=this.valueAxes;for(b=0;b<c.length;b++)c[b].zoom(0,a);c=this.graphs;for(b=0;b<c.length;b++)c[b].zoom(0,a);(a=this.legend)&&a.invalidateSize()}}else this.cleanChart();this.dispDUpd();this.gridAboveGraphs||(this.gridSet.toBack(),this.axesSet.toBack(),this.set.toBack())},formatString:function(a,b,c){var f=b.graph;-1!=a.indexOf("[[category]]")&&(a=a.replace(/\[\[category\]\]/g,String(b.serialDataItem.category)));f=f.numberFormatter;
f||(f=this.nf);a=d.formatValue(a,b.values,["value"],f,"",this.usePrefixes,this.prefixesOfSmallNumbers,this.prefixesOfBigNumbers);-1!=a.indexOf("[[")&&(a=d.formatDataContextValue(a,b.dataContext));return a=d.AmRadarChart.base.formatString.call(this,a,b,c)},cleanChart:function(){d.callMethod("destroy",[this.valueAxes,this.graphs])}})})();(function(){var d=window.AmCharts;d.RadAxis=d.Class({construct:function(a){var b=a.chart,c=a.axisThickness,f=a.axisColor,m=a.axisAlpha;this.set=b.container.set();this.set.translate(a.x,a.y);b.axesSet.push(this.set);var n=a.axisTitleOffset,e=a.radarCategoriesEnabled,r=a.chart.fontFamily,h=a.fontSize;void 0===h&&(h=a.chart.fontSize);var k=a.color;void 0===k&&(k=a.chart.color);if(b){this.axisWidth=a.height;var p=b.chartData,l=p.length,w,z=this.axisWidth;"middle"==a.pointPosition&&"circles"!=a.gridType&&
(a.rMultiplier=Math.cos(180/l*Math.PI/180),z*=a.rMultiplier);for(w=0;w<l;w+=a.axisFrequency){var q=180-360/l*w,g=q;"middle"==a.pointPosition&&(g-=180/l);var t=this.axisWidth*Math.sin(q/180*Math.PI),q=this.axisWidth*Math.cos(q/180*Math.PI);0<m&&(t=d.line(b.container,[0,t],[0,q],f,m,c),this.set.push(t),d.setCN(b,t,a.bcn+"line"));if(e){var x="start",t=(z+n)*Math.sin(g/180*Math.PI),q=(z+n)*Math.cos(g/180*Math.PI);if(180==g||0===g)x="middle",t-=5;0>g&&(x="end",t-=10);180==g&&(q-=5);0===g&&(q+=5);g=d.text(b.container,
p[w].category,k,r,h,x);g.translate(t+5,q);this.set.push(g);d.setCN(b,g,a.bcn+"title")}}}}})})();(function(){var d=window.AmCharts;d.RadItem=d.Class({construct:function(a,b,c,f,m,n,e,r){f=a.chart;void 0===c&&(c="");var h=a.chart.fontFamily,k=a.fontSize;void 0===k&&(k=a.chart.fontSize);var p=a.color;void 0===p&&(p=a.chart.color);var l=a.chart.container;this.set=m=l.set();var w=a.axisColor,z=a.axisAlpha,q=a.tickLength,g=a.gridAlpha,t=a.gridThickness,x=a.gridColor,D=a.dashLength,E=a.fillColor,B=a.fillAlpha,F=a.labelsEnabled;n=a.counter;var G=a.inside,H=a.gridType,u,J=a.labelOffset,A;b-=a.height;
var y;e?(F=!0,void 0!==e.id&&(A=f.classNamePrefix+"-guide-"+e.id),isNaN(e.tickLength)||(q=e.tickLength),void 0!=e.lineColor&&(x=e.lineColor),isNaN(e.lineAlpha)||(g=e.lineAlpha),isNaN(e.dashLength)||(D=e.dashLength),isNaN(e.lineThickness)||(t=e.lineThickness),!0===e.inside&&(G=!0),void 0!==e.boldLabel&&(r=e.boldLabel)):c||(g/=3,q/=2);var I="end",C=-1;G&&(I="start",C=1);var v;F&&(v=d.text(l,c,p,h,k,I,r),v.translate((q+3+J)*C,b),m.push(v),d.setCN(f,v,a.bcn+"label"),e&&d.setCN(f,v,"guide"),d.setCN(f,
v,A,!0),this.label=v,y=d.line(l,[0,q*C],[b,b],w,z,t),m.push(y),d.setCN(f,y,a.bcn+"tick"),e&&d.setCN(f,y,"guide"),d.setCN(f,y,A,!0));b=Math.abs(b);r=[];h=[];if(0<g){if("polygons"==H){u=a.data.length;for(k=0;k<u;k++)p=180-360/u*k,r.push(b*Math.sin(p/180*Math.PI)),h.push(b*Math.cos(p/180*Math.PI));r.push(r[0]);h.push(h[0]);g=d.line(l,r,h,x,g,t,D)}else g=d.circle(l,b,"#FFFFFF",0,t,x,g);m.push(g);d.setCN(f,g,a.bcn+"grid");d.setCN(f,g,A,!0);e&&d.setCN(f,g,"guide")}if(1==n&&0<B&&!e&&""!==c){e=a.previousCoord;
if("polygons"==H){for(k=u;0<=k;k--)p=180-360/u*k,r.push(e*Math.sin(p/180*Math.PI)),h.push(e*Math.cos(p/180*Math.PI));u=d.polygon(l,r,h,E,B)}else u=d.wedge(l,0,0,0,360,b,b,e,0,{fill:E,"fill-opacity":B,stroke:"#000","stroke-opacity":0,"stroke-width":1});m.push(u);d.setCN(f,u,a.bcn+"fill");d.setCN(f,u,A,!0)}!1===a.visible&&(y&&y.hide(),v&&v.hide());""!==c&&(a.counter=0===n?1:0,a.previousCoord=b)},graphics:function(){return this.set},getLabel:function(){return this.label}})})();(function(){var d=window.AmCharts;d.RadarFill=d.Class({construct:function(a,b,c,f){b-=a.axisWidth;c-=a.axisWidth;var m=Math.min(b,c);c=Math.max(b,c);b=a.chart;var n=b.container,e=f.fillAlpha,r=f.fillColor;c=Math.abs(c);var m=Math.abs(m),h=Math.min(c,m);c=Math.max(c,m);var m=h,h=f.angle+90,k=f.toAngle+90;isNaN(h)&&(h=0);isNaN(k)&&(k=360);this.set=n.set();void 0===r&&(r="#000000");isNaN(e)&&(e=0);if("polygons"==a.gridType){var k=[],p=[];a=a.data.length;var l;for(l=0;l<a;l++)h=180-360/a*l,k.push(c*Math.sin(h/
180*Math.PI)),p.push(c*Math.cos(h/180*Math.PI));k.push(k[0]);p.push(p[0]);for(l=a;0<=l;l--)h=180-360/a*l,k.push(m*Math.sin(h/180*Math.PI)),p.push(m*Math.cos(h/180*Math.PI));n=d.polygon(n,k,p,r,e)}else n=d.wedge(n,0,0,h,k-h,c,c,m,0,{fill:r,"fill-opacity":e,stroke:"#000","stroke-opacity":0,"stroke-width":1});d.setCN(b,n,"guide-fill");f.id&&d.setCN(b,n,"guide-fill-"+f.id);this.set.push(n);this.fill=n},graphics:function(){return this.set},getLabel:function(){}})})();


/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/AmChartActivity.js":
/*!***********************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/AmChartActivity.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amcharts3/amcharts/amcharts */ "./node_modules/amcharts3/amcharts/amcharts.js");
/* harmony import */ var amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var amcharts3_amcharts_pie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amcharts3/amcharts/pie */ "./node_modules/amcharts3/amcharts/pie.js");
/* harmony import */ var amcharts3_amcharts_pie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_pie__WEBPACK_IMPORTED_MODULE_2__);
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







var AmChartActivity = /*#__PURE__*/function (_Component) {
  _inherits(AmChartActivity, _Component);

  var _super = _createSuper(AmChartActivity);

  function AmChartActivity() {
    _classCallCheck(this, AmChartActivity);

    return _super.apply(this, arguments);
  }

  _createClass(AmChartActivity, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default.a.makeChart("chart-activity", {
        "type": "pie",
        "theme": "light",
        "dataProvider": [{
          "title": "Max",
          "value": 550,
          "color": "#1de9b6"
        }, {
          "title": "Min",
          "value": 237,
          "color": "#ecedef"
        }],
        "titleField": "title",
        "valueField": "value",
        "colorField": "color",
        "labelRadius": 5,
        "radius": "42%",
        "innerRadius": "95%",
        "labelText": "",
        "balloon": {
          "fixedPosition": true
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "chart-activity",
        className: "chart-activity",
        style: {
          width: '100%',
          height: '230px'
        }
      });
    }
  }]);

  return AmChartActivity;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AmChartActivity);

/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/AmChartCommand.js":
/*!**********************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/AmChartCommand.js ***!
  \**********************************************************/
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







var AmChartCommand = /*#__PURE__*/function (_Component) {
  _inherits(AmChartCommand, _Component);

  var _super = _createSuper(AmChartCommand);

  function AmChartCommand() {
    var _this;

    _classCallCheck(this, AmChartCommand);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      dataum: [{
        "year": "1999",
        "value": 30
      }, {
        "year": "2000",
        "value": 55
      }, {
        "year": "2001",
        "value": 80
      }, {
        "year": "2002",
        "value": 60
      }, {
        "year": "2003",
        "value": 100
      }, {
        "year": "2004",
        "value": 70
      }]
    });

    return _this;
  }

  _createClass(AmChartCommand, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var chartm = _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default.a.makeChart("command-card-chart1", {
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
        "dataDateFormat": "YYYY",
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
        "chartCursor": {
          "valueLineEnabled": false,
          "valueLineBalloonEnabled": false,
          "cursorAlpha": 0,
          "zoomable": false,
          "cursorColor": "#fff",
          "categoryBalloonColor": "#04a9f5",
          "valueZoomable": false,
          "valueLineAlpha": 0
        },
        "valueAxes": [{
          "fontSize": 0,
          "inside": true,
          "gridAlpha": 0,
          "axisAlpha": 0,
          "lineAlpha": 0,
          "minimum": 0,
          "maximum": 150
        }],
        "graphs": [{
          "id": "g1",
          "valueField": "value",
          "type": "smoothedLine",
          "lineColor": '#04a9f5',
          "fillColors": ["#23b7e5"],
          "lineAlpha": 1,
          "lineThickness": 5,
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
      }, 400);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "command-card-chart1",
        style: {
          width: '100%',
          height: '250px'
        }
      });
    }
  }]);

  return AmChartCommand;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AmChartCommand);

/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/AmChartDevices.js":
/*!**********************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/AmChartDevices.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amcharts3/amcharts/amcharts */ "./node_modules/amcharts3/amcharts/amcharts.js");
/* harmony import */ var amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var amcharts3_amcharts_pie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amcharts3/amcharts/pie */ "./node_modules/amcharts3/amcharts/pie.js");
/* harmony import */ var amcharts3_amcharts_pie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_pie__WEBPACK_IMPORTED_MODULE_2__);
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







var AmChartDevices = /*#__PURE__*/function (_Component) {
  _inherits(AmChartDevices, _Component);

  var _super = _createSuper(AmChartDevices);

  function AmChartDevices() {
    _classCallCheck(this, AmChartDevices);

    return _super.apply(this, arguments);
  }

  _createClass(AmChartDevices, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default.a.makeChart("device-chart", {
        "type": "pie",
        "theme": "light",
        "labelRadius": -35,
        "labelText": "[[percents]]%",
        "dataProvider": [{
          "device": "Tablet",
          "percentage": 25.9,
          "color": "#a389d4"
        }, {
          "device": "Mobile",
          "percentage": 32.5,
          "color": "#04a9f5"
        }, {
          "device": "Desktop",
          "percentage": 41.6,
          "color": "#1de9b6"
        }],
        "valueField": "percentage",
        "titleField": "device",
        "colorField": "color",
        "balloon": {
          "fixedPosition": true
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "device-chart",
        className: "device-chart",
        style: {
          width: '250px',
          height: '250px'
        }
      });
    }
  }]);

  return AmChartDevices;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AmChartDevices);

/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/AmChartEarnings.js":
/*!***********************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/AmChartEarnings.js ***!
  \***********************************************************/
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







var AmChartEarnings = /*#__PURE__*/function (_Component) {
  _inherits(AmChartEarnings, _Component);

  var _super = _createSuper(AmChartEarnings);

  function AmChartEarnings() {
    _classCallCheck(this, AmChartEarnings);

    return _super.apply(this, arguments);
  }

  _createClass(AmChartEarnings, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default.a.makeChart("widget-line-chart", {
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
          "value": 45
        }, {
          "day": "Wed",
          "value": 70
        }, {
          "day": "Thu",
          "value": 55
        }, {
          "day": "Fri",
          "value": 70
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
          "color": '#fff',
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
          "categoryBalloonColor": "#51b4e6",
          "valueLineAlpha": 0
        },
        "graphs": [{
          "id": "g1",
          "type": "line",
          "valueField": "value",
          "lineColor": "#ffffff",
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
        id: "widget-line-chart",
        className: "WidgetlineChart2 ChartShadow",
        style: {
          width: '100%',
          height: this.props.height
        }
      });
    }
  }]);

  return AmChartEarnings;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AmChartEarnings);

/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/AmChartReplay.js":
/*!*********************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/AmChartReplay.js ***!
  \*********************************************************/
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







var AmChartReplay = /*#__PURE__*/function (_Component) {
  _inherits(AmChartReplay, _Component);

  var _super = _createSuper(AmChartReplay);

  function AmChartReplay() {
    _classCallCheck(this, AmChartReplay);

    return _super.apply(this, arguments);
  }

  _createClass(AmChartReplay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default.a.makeChart("bar-chart1", {
        "type": "serial",
        "theme": "light",
        "dataProvider": [{
          "Average": "0-1",
          "value": 53,
          "color": ["#1de9b6", "#1dc4e9"]
        }, {
          "Average": "1-4",
          "value": 13,
          "color": ["#a389d4", "#899ed4"]
        }, {
          "Average": "8-24",
          "value": 30,
          "color": ["#04a9f5", "#049df5"]
        }, {
          "Average": ">24",
          "value": 4,
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
          "labelPosition": "top",
          "labelText": "[[value]]",
          "fillColorsField": "color",
          "fillAlphas": 0.9,
          "lineAlpha": 0,
          "type": "column",
          "valueField": "value"
        }],
        "chartCursor": {
          "categoryBalloonEnabled": false,
          "cursorAlpha": 0,
          "zoomable": false
        },
        "categoryField": "Average",
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
        id: "bar-chart1",
        className: "BarChart barChart1 ChartShadow",
        style: {
          width: '100%',
          height: this.props.height
        }
      });
    }
  }]);

  return AmChartReplay;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AmChartReplay);

/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/AmChartSales.js":
/*!********************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/AmChartSales.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amcharts3/amcharts/amcharts */ "./node_modules/amcharts3/amcharts/amcharts.js");
/* harmony import */ var amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var amcharts3_amcharts_pie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amcharts3/amcharts/pie */ "./node_modules/amcharts3/amcharts/pie.js");
/* harmony import */ var amcharts3_amcharts_pie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_pie__WEBPACK_IMPORTED_MODULE_2__);
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







var AmChartSales = /*#__PURE__*/function (_Component) {
  _inherits(AmChartSales, _Component);

  var _super = _createSuper(AmChartSales);

  function AmChartSales() {
    _classCallCheck(this, AmChartSales);

    return _super.apply(this, arguments);
  }

  _createClass(AmChartSales, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default.a.makeChart("chart-sale", {
        "type": "pie",
        "theme": "light",
        "dataProvider": [{
          "title": "Max",
          "value": 500,
          "color": "#1de9b6"
        }, {
          "title": "Min",
          "value": 237,
          "color": "#fff"
        }],
        "titleField": "title",
        "valueField": "value",
        "colorField": "color",
        "labelRadius": 5,
        "radius": "42%",
        "innerRadius": "91%",
        "labelText": "",
        "balloon": {
          "fixedPosition": true
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "chart-sale",
        className: "chart-sale",
        style: {
          width: '220px',
          height: '220px'
        }
      });
    }
  }]);

  return AmChartSales;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AmChartSales);

/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/AmChartStatistics.js":
/*!*************************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/AmChartStatistics.js ***!
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







var AmChartStatistics = /*#__PURE__*/function (_Component) {
  _inherits(AmChartStatistics, _Component);

  var _super = _createSuper(AmChartStatistics);

  function AmChartStatistics() {
    _classCallCheck(this, AmChartStatistics);

    return _super.apply(this, arguments);
  }

  _createClass(AmChartStatistics, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default.a.makeChart("stack-bar", {
        "type": "serial",
        "theme": "light",
        "dataProvider": [{
          "year": "Jan",
          "visits": 10,
          "color": ["#1de9b6", "#1dc4e9"]
        }, {
          "year": "Feb",
          "visits": 13,
          "color": ["#1de9b6", "#1dc4e9"]
        }, {
          "year": "Mar",
          "visits": 20,
          "color": ["#1de9b6", "#1dc4e9"]
        }, {
          "year": "Apr",
          "visits": 28,
          "color": ["#1de9b6", "#1dc4e9"]
        }, {
          "year": "May",
          "visits": 25,
          "color": ["#1de9b6", "#1dc4e9"]
        }, {
          "year": "Jun",
          "visits": 4,
          "color": ["#1de9b6", "#1dc4e9"]
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
          "columnWidth": 0.1,
          "type": "column",
          "valueField": "visits"
        }],
        "chartCursor": {
          "categoryBalloonEnabled": false,
          "cursorAlpha": 0,
          "zoomable": false
        },
        "categoryField": "year",
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
        id: "stack-bar",
        className: "Stackchart",
        style: {
          width: '100%',
          height: '300px'
        }
      });
    }
  }]);

  return AmChartStatistics;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AmChartStatistics);

/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/AmChartStatistics10.js":
/*!***************************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/AmChartStatistics10.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amcharts3/amcharts/amcharts */ "./node_modules/amcharts3/amcharts/amcharts.js");
/* harmony import */ var amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var amcharts3_amcharts_radar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amcharts3/amcharts/radar */ "./node_modules/amcharts3/amcharts/radar.js");
/* harmony import */ var amcharts3_amcharts_radar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_radar__WEBPACK_IMPORTED_MODULE_2__);
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







var AmChartStatistics10 = /*#__PURE__*/function (_Component) {
  _inherits(AmChartStatistics10, _Component);

  var _super = _createSuper(AmChartStatistics10);

  function AmChartStatistics10() {
    _classCallCheck(this, AmChartStatistics10);

    return _super.apply(this, arguments);
  }

  _createClass(AmChartStatistics10, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default.a.makeChart("Statistics-line", {
        "type": "serial",
        "theme": "light",
        "marginTop": 10,
        "marginRight": 0,
        "dataProvider": [{
          "year": "2014",
          "value": 30
        }, {
          "year": "2015",
          "value": 60
        }, {
          "year": "2016",
          "value": 50
        }, {
          "year": "2017",
          "value": 70
        }],
        "valueAxes": [{
          "axisAlpha": 0,
          "minimum": 0,
          "maximum": 100,
          "position": "left"
        }],
        "graphs": [{
          "id": "g1",
          "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
          "bullet": "round",
          "bulletSize": 5,
          "lineColor": "#1dc4e9",
          "lineThickness": 5,
          "valueField": "value"
        }],
        "chartCursor": {
          "categoryBalloonDateFormat": "YYYY",
          "cursorAlpha": 0,
          "valueLineEnabled": true,
          "valueLineBalloonEnabled": true,
          "valueLineAlpha": 0.5,
          "fullWidth": true
        },
        "dataDateFormat": "YYYY",
        "categoryField": "year",
        "categoryAxis": {
          "minPeriod": "YYYY",
          "parseDates": true,
          "minorGridAlpha": 0.1,
          "gridColor": '#fff',
          "minorGridEnabled": true
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "Statistics-line",
        className: "ChartShadow",
        style: {
          width: '100%',
          height: '450px'
        }
      });
    }
  }]);

  return AmChartStatistics10;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AmChartStatistics10);

/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/AmChartStatistics2.js":
/*!**************************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/AmChartStatistics2.js ***!
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







var AmChartStatistics2 = /*#__PURE__*/function (_Component) {
  _inherits(AmChartStatistics2, _Component);

  var _super = _createSuper(AmChartStatistics2);

  function AmChartStatistics2() {
    _classCallCheck(this, AmChartStatistics2);

    return _super.apply(this, arguments);
  }

  _createClass(AmChartStatistics2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default.a.makeChart("chart-line", {
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
          "Year": "Jan",
          "value": 50
        }, {
          "Year": "Feb",
          "value": 60
        }, {
          "Year": "Mar",
          "value": 55
        }, {
          "Year": "Apr",
          "value": 62
        }, {
          "Year": "May",
          "value": 55
        }, {
          "Year": "Jun",
          "value": 62
        }],
        "autoMarginOffset": 0,
        "marginRight": 0,
        "categoryField": "Year",
        "categoryAxis": {
          "color": '#fff',
          "gridAlpha": 0,
          "axisAlpha": 0,
          "lineAlpha": 0,
          "offset": -20,
          "minPeriod": "YYYY",
          "inside": true
        },
        "valueAxes": [{
          "fontSize": 0,
          "inside": true,
          "gridAlpha": 0,
          "axisAlpha": 0,
          "lineAlpha": 0,
          "minimum": 0,
          "maximum": 80
        }],
        "chartCursor": {
          "valueLineEnabled": false,
          "valueLineBalloonEnabled": false,
          "cursorAlpha": 0,
          "zoomable": false,
          "valueZoomable": false,
          "cursorColor": "#fff",
          "categoryBalloonDateFormat": "YYYY",
          "categoryBalloonColor": "#1dd6d1",
          "valueLineAlpha": 0
        },
        "graphs": [{
          "id": "g1",
          "type": "line",
          "valueField": "value",
          "bullet": "round",
          "lineColor": "#ffffff",
          "lineAlpha": 1,
          "lineThickness": 3,
          "fillAlphas": 0,
          "showBalloon": true,
          "balloon": {
            "drop": true,
            "adjustBorderColor": false,
            "color": "#000",
            "fillAlphas": 0.2,
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletSize": 5,
            "hideBulletsCount": 50,
            "lineThickness": 2,
            "type": "smoothedLine",
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
        id: "chart-line",
        className: "lineChart ChartShadow",
        style: {
          width: '100%',
          height: '260px'
        }
      });
    }
  }]);

  return AmChartStatistics2;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AmChartStatistics2);

/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/AmChartStatistics3.js":
/*!**************************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/AmChartStatistics3.js ***!
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







var AmChartStatistics3 = /*#__PURE__*/function (_Component) {
  _inherits(AmChartStatistics3, _Component);

  var _super = _createSuper(AmChartStatistics3);

  function AmChartStatistics3() {
    _classCallCheck(this, AmChartStatistics3);

    return _super.apply(this, arguments);
  }

  _createClass(AmChartStatistics3, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default.a.makeChart("line-chart1", {
        "type": "serial",
        "theme": "light",
        "marginTop": 10,
        "marginRight": 0,
        "dataProvider": [{
          "year": "Jan",
          "value": 65,
          "value2": 125,
          "value3": 175
        }, {
          "year": "Feb",
          "value": 105,
          "value2": 80,
          "value3": 190
        }, {
          "year": "Mar",
          "value": 145,
          "value2": 30,
          "value3": 160
        }, {
          "year": "Apr",
          "value": 105,
          "value2": 70,
          "value3": 190
        }, {
          "year": "May",
          "value": 145,
          "value2": 110,
          "value3": 140
        }, {
          "year": "Jun",
          "value": 185,
          "value2": 150,
          "value3": 100
        }],
        "valueAxes": [{
          "axisAlpha": 0,
          "position": "left"
        }],
        "graphs": [{
          "id": "g1",
          "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
          "bullet": "false",
          "lineColor": "#2cd929",
          "lineThickness": 3,
          "negativeLineColor": "#2cd929",
          "type": "smoothedLine",
          "valueField": "value"
        }, {
          "id": "g2",
          "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
          "bullet": "false",
          "lineColor": "#29bdf5",
          "lineThickness": 3,
          "negativeLineColor": "#29bdf5",
          "type": "smoothedLine",
          "valueField": "value2"
        }, {
          "id": "g3",
          "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
          "bullet": "false",
          "lineColor": "#fdda08",
          "lineThickness": 3,
          "negativeLineColor": "#fdda08",
          "type": "smoothedLine",
          "valueField": "value3"
        }],
        "chartCursor": {
          "cursorAlpha": 0,
          "valueLineEnabled": true,
          "valueLineBalloonEnabled": true,
          "valueLineAlpha": 0.5,
          "fullWidth": true
        },
        "categoryField": "year",
        "categoryAxis": {
          "minorGridAlpha": 0.1,
          "minorGridEnabled": true,
          "gridAlpha": 0,
          "axisAlpha": 0,
          "lineAlpha": 0
        },
        "legend": {
          "useGraphSettings": true,
          "position": "top"
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "line-chart1",
        className: "ChartShadow",
        style: {
          width: '100%',
          height: '350px'
        }
      });
    }
  }]);

  return AmChartStatistics3;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AmChartStatistics3);

/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/AmChartStatistics4.js":
/*!**************************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/AmChartStatistics4.js ***!
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







var AmChartStatistics4 = /*#__PURE__*/function (_Component) {
  _inherits(AmChartStatistics4, _Component);

  var _super = _createSuper(AmChartStatistics4);

  function AmChartStatistics4() {
    _classCallCheck(this, AmChartStatistics4);

    return _super.apply(this, arguments);
  }

  _createClass(AmChartStatistics4, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default.a.makeChart("line-chart2", {
        "type": "serial",
        "theme": "light",
        "marginTop": 10,
        "marginRight": 0,
        "dataProvider": [{
          "year": "Jan",
          "value": 160,
          "value2": 85
        }, {
          "year": "Feb",
          "value": 140,
          "value2": 95
        }, {
          "year": "Mar",
          "value": 150,
          "value2": 90
        }, {
          "year": "Apr",
          "value": 95,
          "value2": 125
        }, {
          "year": "May",
          "value": 130,
          "value2": 105
        }, {
          "year": "Jun",
          "value": 55,
          "value2": 120
        }, {
          "year": "Jul",
          "value": 75,
          "value2": 110
        }, {
          "year": "Aug",
          "value": 65,
          "value2": 140
        }, {
          "year": "Sep",
          "value": 140,
          "value2": 100
        }, {
          "year": "oct",
          "value": 120,
          "value2": 95
        }, {
          "year": "Nov",
          "value": 110,
          "value2": 130
        }, {
          "year": "Dec",
          "value": 180,
          "value2": 80
        }],
        "valueAxes": [{
          "axisAlpha": 0,
          "minimum": 0,
          "maximum": 200,
          "position": "left"
        }],
        "graphs": [{
          "id": "g1",
          "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
          "bullet": "round",
          "bulletBorderAlpha": 2,
          "bulletAlpha": 1,
          "bulletSize": 12,
          "stackable": false,
          "bulletColor": "#fff",
          "bulletBorderColor": "#a389d4",
          "bulletBorderThickness": 3,
          "lineColor": "#a389d4",
          "lineThickness": 2,
          "type": "smoothedLine",
          "valueField": "value"
        }, {
          "id": "g2",
          "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
          "bullet": "round",
          "bulletBorderAlpha": 2,
          "bulletAlpha": 1,
          "bulletSize": 12,
          "stackable": false,
          "bulletColor": "#fff",
          "bulletBorderColor": "#1ddcc8",
          "bulletBorderThickness": 3,
          "lineColor": "#1ddcc8",
          "lineThickness": 2,
          "type": "smoothedLine",
          "valueField": "value2"
        }],
        "chartCursor": {
          "cursorAlpha": 0,
          "valueLineEnabled": true,
          "valueLineBalloonEnabled": true,
          "valueLineAlpha": 0.5,
          "fullWidth": true
        },
        "categoryField": "year",
        "categoryAxis": {
          "minorGridAlpha": 0,
          "minorGridEnabled": true,
          "gridAlpha": 0,
          "axisAlpha": 0,
          "lineAlpha": 0
        },
        "legend": {
          "useGraphSettings": true,
          "position": "top"
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "line-chart2",
        className: "lineChart2 ChartShadow",
        style: {
          width: '100%',
          height: '350px'
        }
      });
    }
  }]);

  return AmChartStatistics4;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AmChartStatistics4);

/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/AmChartStatistics5.js":
/*!**************************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/AmChartStatistics5.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amcharts3/amcharts/amcharts */ "./node_modules/amcharts3/amcharts/amcharts.js");
/* harmony import */ var amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var amcharts3_amcharts_pie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amcharts3/amcharts/pie */ "./node_modules/amcharts3/amcharts/pie.js");
/* harmony import */ var amcharts3_amcharts_pie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_pie__WEBPACK_IMPORTED_MODULE_2__);
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







var AmChartStatistics5 = /*#__PURE__*/function (_Component) {
  _inherits(AmChartStatistics5, _Component);

  var _super = _createSuper(AmChartStatistics5);

  function AmChartStatistics5() {
    _classCallCheck(this, AmChartStatistics5);

    return _super.apply(this, arguments);
  }

  _createClass(AmChartStatistics5, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default.a.makeChart("chart-percent", {
        "type": "pie",
        "theme": "light",
        "dataProvider": [{
          "title": "page done",
          "value": 23,
          "color": "#1de9b6"
        }, {
          "title": "page progress",
          "value": 14,
          "color": "#f4c22b"
        }, {
          "title": "page outstanding",
          "value": 35,
          "color": "#a389d4"
        }, {
          "title": "page started",
          "value": 28,
          "color": "#04a9f5"
        }],
        "titleField": "title",
        "valueField": "value",
        "colorField": "color",
        "labelRadius": 5,
        "radius": "42%",
        "innerRadius": "91%",
        "labelText": "",
        "balloon": {
          "fixedPosition": true
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "chart-percent",
        className: "chart-percent",
        style: {
          width: '100%',
          height: this.props.height
        }
      });
    }
  }]);

  return AmChartStatistics5;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AmChartStatistics5);

/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/AmChartStatistics7.js":
/*!**************************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/AmChartStatistics7.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amcharts3/amcharts/amcharts */ "./node_modules/amcharts3/amcharts/amcharts.js");
/* harmony import */ var amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var amcharts3_amcharts_pie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amcharts3/amcharts/pie */ "./node_modules/amcharts3/amcharts/pie.js");
/* harmony import */ var amcharts3_amcharts_pie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_pie__WEBPACK_IMPORTED_MODULE_2__);
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







var AmChartStatistics7 = /*#__PURE__*/function (_Component) {
  _inherits(AmChartStatistics7, _Component);

  var _super = _createSuper(AmChartStatistics7);

  function AmChartStatistics7() {
    _classCallCheck(this, AmChartStatistics7);

    return _super.apply(this, arguments);
  }

  _createClass(AmChartStatistics7, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default.a.makeChart("chart-statistics", {
        "type": "pie",
        "theme": "light",
        "dataProvider": [{
          "title": "page Views",
          "value": 24.7,
          "color": "#1de9b6"
        }, {
          "title": "page Clicks",
          "value": 36.3,
          "color": "#a389d4"
        }, {
          "title": "page Likes",
          "value": 23.5,
          "color": "#04a9f5"
        }, {
          "title": "page",
          "value": 15.5,
          "color": "#ecedef"
        }],
        "titleField": "title",
        "valueField": "value",
        "colorField": "color",
        "labelRadius": 5,
        "radius": "42%",
        "innerRadius": "90%",
        "labelText": "",
        "balloon": {
          "fixedPosition": true
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "chart-statistics",
        className: "chart-statistics",
        style: {
          width: '100%',
          height: '250px'
        }
      });
    }
  }]);

  return AmChartStatistics7;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AmChartStatistics7);

/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/AmChartStatistics9.js":
/*!**************************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/AmChartStatistics9.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amcharts3/amcharts/amcharts */ "./node_modules/amcharts3/amcharts/amcharts.js");
/* harmony import */ var amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var amcharts3_amcharts_radar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amcharts3/amcharts/radar */ "./node_modules/amcharts3/amcharts/radar.js");
/* harmony import */ var amcharts3_amcharts_radar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_radar__WEBPACK_IMPORTED_MODULE_2__);
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







var AmChartStatistics9 = /*#__PURE__*/function (_Component) {
  _inherits(AmChartStatistics9, _Component);

  var _super = _createSuper(AmChartStatistics9);

  function AmChartStatistics9() {
    _classCallCheck(this, AmChartStatistics9);

    return _super.apply(this, arguments);
  }

  _createClass(AmChartStatistics9, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default.a.makeChart("sales-render", {
        "type": "radar",
        "theme": "light",
        "dataProvider": [{
          "Month": "Jan",
          "visit": 100,
          "sales": 80
        }, {
          "Month": "Feb",
          "visit": 60,
          "sales": 90
        }, {
          "Month": "Mar",
          "visit": 100,
          "sales": 80
        }, {
          "Month": "Apr",
          "visit": 100,
          "sales": 110
        }, {
          "Month": "May",
          "visit": 100,
          "sales": 40
        }, {
          "Month": "Jun",
          "visit": 80,
          "sales": 115
        }],
        "valueAxes": [{
          "axisTitleOffset": 20,
          "minimum": 0,
          "axisAlpha": 0.15
        }, {
          "id": "v2",
          "axisTitleOffset": 20,
          "minimum": 0,
          "axisAlpha": 0,
          "inside": true
        }],
        "startDuration": 2,
        "graphs": [{
          "balloonText": "[[value]] visit of per year",
          "bullet": "false",
          "fillAlphas": 1,
          "lineColor": ["#a389d4", "#899ed4"],
          "valueField": "visit"
        }, {
          "balloonText": "[[value]] sales of per year",
          "bullet": "false",
          "valueField": "sales",
          "fillAlphas": 1,
          "lineColor": ["#1de9b6", "#1dc4e9"],
          "valueAxis": "v2"
        }],
        "categoryField": "Month"
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "sales-render",
        style: {
          width: '100%',
          height: '300px'
        }
      });
    }
  }]);

  return AmChartStatistics9;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AmChartStatistics9);

/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/AmChartStats.js":
/*!********************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/AmChartStats.js ***!
  \********************************************************/
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







var AmChartStats = /*#__PURE__*/function (_Component) {
  _inherits(AmChartStats, _Component);

  var _super = _createSuper(AmChartStats);

  function AmChartStats() {
    var _this;

    _classCallCheck(this, AmChartStats);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      dataum: [{
        "year": "1999",
        "value": 20
      }, {
        "year": "2000",
        "value": 25
      }, {
        "year": "2001",
        "value": 30
      }, {
        "year": "2002",
        "value": 28
      }, {
        "year": "2003",
        "value": 25
      }, {
        "year": "2004",
        "value": 28
      }, {
        "year": "2005",
        "value": 30
      }]
    });

    return _this;
  }

  _createClass(AmChartStats, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var chartm = _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default.a.makeChart("sitevisite-chart", {
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
        "dataDateFormat": "YYYY",
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
        "chartCursor": {
          "valueLineEnabled": false,
          "valueLineBalloonEnabled": false,
          "cursorAlpha": 0,
          "zoomable": false,
          "cursorColor": "#fff",
          "categoryBalloonColor": "#899ed4",
          "valueZoomable": false,
          "valueLineAlpha": 0
        },
        "valueAxes": [{
          "fontSize": 0,
          "inside": true,
          "gridAlpha": 0,
          "axisAlpha": 0,
          "lineAlpha": 0
        }],
        "graphs": [{
          "id": "g1",
          "valueField": "value",
          "type": "smoothedLine",
          "lineColor": '#fff',
          "fillColors": ["#a389d4", "transparent"],
          "lineAlpha": 1,
          "lineThickness": 5,
          "fillAlphas": 0.3,
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
      }, 400);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "sitevisite-chart",
        style: {
          width: '100%',
          height: '250px'
        }
      });
    }
  }]);

  return AmChartStats;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AmChartStats);

/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/AmChartUserCard.js":
/*!***********************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/AmChartUserCard.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amcharts3/amcharts/amcharts */ "./node_modules/amcharts3/amcharts/amcharts.js");
/* harmony import */ var amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var amcharts3_amcharts_pie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amcharts3/amcharts/pie */ "./node_modules/amcharts3/amcharts/pie.js");
/* harmony import */ var amcharts3_amcharts_pie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_pie__WEBPACK_IMPORTED_MODULE_2__);
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







var AmChartUserCard = /*#__PURE__*/function (_Component) {
  _inherits(AmChartUserCard, _Component);

  var _super = _createSuper(AmChartUserCard);

  function AmChartUserCard() {
    _classCallCheck(this, AmChartUserCard);

    return _super.apply(this, arguments);
  }

  _createClass(AmChartUserCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default.a.makeChart("chart-percent1", {
        "type": "pie",
        "theme": "light",
        "dataProvider": [{
          "title": "Main Wallet",
          "value": 33.33,
          "color": "#1de9b6"
        }, {
          "title": "Travel",
          "value": 33.33,
          "color": "#a389d4"
        }, {
          "title": "Food & Drink",
          "value": 33.33,
          "color": "#04a9f5"
        }],
        "titleField": "title",
        "valueField": "value",
        "colorField": "color",
        "labelRadius": 5,
        "radius": "42%",
        "innerRadius": "89%",
        "labelText": "",
        "balloon": {
          "fixedPosition": true
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "chart-percent1",
        className: "chart-percent1",
        style: {
          width: '100%',
          height: '200px'
        }
      });
    }
  }]);

  return AmChartUserCard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AmChartUserCard);

/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/AmChartWebStatistics.js":
/*!****************************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/AmChartWebStatistics.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amcharts3/amcharts/amcharts */ "./node_modules/amcharts3/amcharts/amcharts.js");
/* harmony import */ var amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var amcharts3_amcharts_radar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amcharts3/amcharts/radar */ "./node_modules/amcharts3/amcharts/radar.js");
/* harmony import */ var amcharts3_amcharts_radar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_radar__WEBPACK_IMPORTED_MODULE_2__);
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







var AmChartWebStatistics = /*#__PURE__*/function (_Component) {
  _inherits(AmChartWebStatistics, _Component);

  var _super = _createSuper(AmChartWebStatistics);

  function AmChartWebStatistics() {
    _classCallCheck(this, AmChartWebStatistics);

    return _super.apply(this, arguments);
  }

  _createClass(AmChartWebStatistics, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default.a.makeChart("webchart", {
        "type": "radar",
        "theme": "light",
        "dataProvider": [{
          "direction": "Sales",
          "value": 15
        }, {
          "direction": "Visits",
          "value": 13
        }, {
          "direction": "Views",
          "value": 11.1
        }, {
          "direction": "Clicks",
          "value": 15
        }],
        "valueAxes": [{
          "gridType": "circles",
          "minimum": 0,
          "autoGridCount": true,
          "axisAlpha": 0,
          "fillAlpha": 0.05,
          "fillColor": "#eff1f4",
          "gridAlpha": 0.08,
          "position": "center"
        }],
        "startDuration": 1,
        "graphs": [{
          "balloonText": "[[category]]: [[value]] m/s",
          "bullet": "false",
          "fillAlphas": 1,
          "lineColor": ["#1de9b6", "#1dc4e9"],
          "valueField": "value"
        }],
        "categoryField": "direction"
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "webchart",
        style: {
          width: '100%',
          height: '250px'
        }
      });
    }
  }]);

  return AmChartWebStatistics;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AmChartWebStatistics);

/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/FlotChartLast3Days.js":
/*!**************************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/FlotChartLast3Days.js ***!
  \**************************************************************/
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
  data: [[0, 30], [20, 45], [50, 30], [80, 45], [100, 30]],
  color: "#1dc4e9",
  lines: {
    show: true,
    fill: true,
    lineWidth: 0,
    fillColor: {
      colors: [{
        opacity: 0.9
      }, {
        opacity: 0.1
      }]
    }
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

var FlotChartLast3Days = /*#__PURE__*/function (_Component) {
  _inherits(FlotChartLast3Days, _Component);

  var _super = _createSuper(FlotChartLast3Days);

  function FlotChartLast3Days() {
    _classCallCheck(this, FlotChartLast3Days);

    return _super.apply(this, arguments);
  }

  _createClass(FlotChartLast3Days, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_flot__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "sale-view",
        options: optionsSaleView,
        data: dataSaleView,
        width: "100%",
        height: "200px"
      });
    }
  }]);

  return FlotChartLast3Days;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FlotChartLast3Days);

/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/FlotChartUserCard.js":
/*!*************************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/FlotChartUserCard.js ***!
  \*************************************************************/
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
      active: true
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
    max: 90,
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
  data: [[0, 50], [20, 70], [35, 45], [50, 73], [65, 85]],
  color: "#1dc4e9",
  lines: {
    show: true,
    fill: false,
    lineWidth: 3
  },
  points: {
    show: false,
    radius: 3,
    fill: true
  },
  curvedLines: {
    apply: true
  }
}];

var FlotChartUserCard = /*#__PURE__*/function (_Component) {
  _inherits(FlotChartUserCard, _Component);

  var _super = _createSuper(FlotChartUserCard);

  function FlotChartUserCard() {
    _classCallCheck(this, FlotChartUserCard);

    return _super.apply(this, arguments);
  }

  _createClass(FlotChartUserCard, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_flot__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "power-card-chart",
        options: optionsSaleView,
        data: dataSaleView,
        width: "100%",
        height: "100px"
      });
    }
  }]);

  return FlotChartUserCard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FlotChartUserCard);

/***/ }),

/***/ "./resources/js/Demo/Widget/WdgetChart.js":
/*!************************************************!*\
  !*** ./resources/js/Demo/Widget/WdgetChart.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var _store_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/constant */ "./resources/js/store/constant.js");
/* harmony import */ var _assets_images_user_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/user/avatar-1.jpg */ "./resources/js/assets/images/user/avatar-1.jpg");
/* harmony import */ var _assets_images_user_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_user_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_user_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/user/avatar-2.jpg */ "./resources/js/assets/images/user/avatar-2.jpg");
/* harmony import */ var _assets_images_user_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_user_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_user_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/user/avatar-3.jpg */ "./resources/js/assets/images/user/avatar-3.jpg");
/* harmony import */ var _assets_images_user_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_user_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Chart_AmChartCommand__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Chart/AmChartCommand */ "./resources/js/Demo/Widget/Chart/AmChartCommand.js");
/* harmony import */ var _Chart_AmChartSales__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Chart/AmChartSales */ "./resources/js/Demo/Widget/Chart/AmChartSales.js");
/* harmony import */ var _Chart_AmChartStatistics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Chart/AmChartStatistics */ "./resources/js/Demo/Widget/Chart/AmChartStatistics.js");
/* harmony import */ var _Chart_AmChartStatistics1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Chart/AmChartStatistics1 */ "./resources/js/Demo/Widget/Chart/AmChartStatistics1.js");
/* harmony import */ var _Chart_AmChartStatistics2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Chart/AmChartStatistics2 */ "./resources/js/Demo/Widget/Chart/AmChartStatistics2.js");
/* harmony import */ var _Chart_AmChartNewsStatistics__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Chart/AmChartNewsStatistics */ "./resources/js/Demo/Widget/Chart/AmChartNewsStatistics.js");
/* harmony import */ var _Chart_AmChartStatistics3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Chart/AmChartStatistics3 */ "./resources/js/Demo/Widget/Chart/AmChartStatistics3.js");
/* harmony import */ var _Chart_AmChartStatistics4__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Chart/AmChartStatistics4 */ "./resources/js/Demo/Widget/Chart/AmChartStatistics4.js");
/* harmony import */ var _Chart_AmChartEarnings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Chart/AmChartEarnings */ "./resources/js/Demo/Widget/Chart/AmChartEarnings.js");
/* harmony import */ var _Chart_AmChartEarnings1__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Chart/AmChartEarnings1 */ "./resources/js/Demo/Widget/Chart/AmChartEarnings1.js");
/* harmony import */ var _Chart_AmChartReplay__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Chart/AmChartReplay */ "./resources/js/Demo/Widget/Chart/AmChartReplay.js");
/* harmony import */ var _Chart_AmChartStatistics5__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Chart/AmChartStatistics5 */ "./resources/js/Demo/Widget/Chart/AmChartStatistics5.js");
/* harmony import */ var _Chart_AmChartStatistics6__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Chart/AmChartStatistics6 */ "./resources/js/Demo/Widget/Chart/AmChartStatistics6.js");
/* harmony import */ var _Chart_AmChartDevices__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Chart/AmChartDevices */ "./resources/js/Demo/Widget/Chart/AmChartDevices.js");
/* harmony import */ var _Chart_AmChartUserCard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Chart/AmChartUserCard */ "./resources/js/Demo/Widget/Chart/AmChartUserCard.js");
/* harmony import */ var _Chart_AmChartYearlySummary__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Chart/AmChartYearlySummary */ "./resources/js/Demo/Widget/Chart/AmChartYearlySummary.js");
/* harmony import */ var _Chart_FlotChartLast3Days__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Chart/FlotChartLast3Days */ "./resources/js/Demo/Widget/Chart/FlotChartLast3Days.js");
/* harmony import */ var _Chart_AmChartStatistics7__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Chart/AmChartStatistics7 */ "./resources/js/Demo/Widget/Chart/AmChartStatistics7.js");
/* harmony import */ var _Chart_AmChartActivity__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Chart/AmChartActivity */ "./resources/js/Demo/Widget/Chart/AmChartActivity.js");
/* harmony import */ var _Chart_AmChartStatistics8__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Chart/AmChartStatistics8 */ "./resources/js/Demo/Widget/Chart/AmChartStatistics8.js");
/* harmony import */ var _Chart_AmChartStatistics9__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Chart/AmChartStatistics9 */ "./resources/js/Demo/Widget/Chart/AmChartStatistics9.js");
/* harmony import */ var _Chart_AmChartWebStatistics__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Chart/AmChartWebStatistics */ "./resources/js/Demo/Widget/Chart/AmChartWebStatistics.js");
/* harmony import */ var _Chart_AmChartStatistics10__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Chart/AmChartStatistics10 */ "./resources/js/Demo/Widget/Chart/AmChartStatistics10.js");
/* harmony import */ var _Chart_FlotChartTransactions__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Chart/FlotChartTransactions */ "./resources/js/Demo/Widget/Chart/FlotChartTransactions.js");
/* harmony import */ var _Chart_FlotChartTransactions1__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Chart/FlotChartTransactions1 */ "./resources/js/Demo/Widget/Chart/FlotChartTransactions1.js");
/* harmony import */ var _Chart_FlotChartTransactions2__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Chart/FlotChartTransactions2 */ "./resources/js/Demo/Widget/Chart/FlotChartTransactions2.js");
/* harmony import */ var _Chart_FlotChartTransactions3__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Chart/FlotChartTransactions3 */ "./resources/js/Demo/Widget/Chart/FlotChartTransactions3.js");
/* harmony import */ var _Chart_AmChartStats__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Chart/AmChartStats */ "./resources/js/Demo/Widget/Chart/AmChartStats.js");
/* harmony import */ var _Chart_AmChartStatistics11__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Chart/AmChartStatistics11 */ "./resources/js/Demo/Widget/Chart/AmChartStatistics11.js");
/* harmony import */ var _Chart_FlotChartUserCard__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Chart/FlotChartUserCard */ "./resources/js/Demo/Widget/Chart/FlotChartUserCard.js");
/* harmony import */ var _Chart_AmChartWorldUser__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Chart/AmChartWorldUser */ "./resources/js/Demo/Widget/Chart/AmChartWorldUser.js");
/* harmony import */ var _Chart_AmChartPhoneCalls__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./Chart/AmChartPhoneCalls */ "./resources/js/Demo/Widget/Chart/AmChartPhoneCalls.js");
/* harmony import */ var _Chart_AmChartAge__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./Chart/AmChartAge */ "./resources/js/Demo/Widget/Chart/AmChartAge.js");
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










































var WdgetChart = /*#__PURE__*/function (_React$Component) {
  _inherits(WdgetChart, _React$Component);

  var _super = _createSuper(WdgetChart);

  function WdgetChart() {
    _classCallCheck(this, WdgetChart);

    return _super.apply(this, arguments);
  }

  _createClass(WdgetChart, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "card-command"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "card-icon fa fa-comment f-16 m-r-5"
      }), "Command")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        className: "p-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_AmChartCommand__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "comment-bar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "text-uppercase text-muted"
      }, "COMMENTERS", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-uppercase float-right"
      }, "view all")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row align-items-center justify-content-center mt-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "mb-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "rounded-circle mr-2 ml-2",
        style: {
          width: '40px'
        },
        src: _assets_images_user_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: "activity-user text-uppercase"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "d-block d-sm-inline-block m-t-10"
      }, "Ida Jorgensen"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto text-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "float-right f-14"
      }, "3 comments"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Sales")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_AmChartSales__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row text-center mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "f-w-300"
      }, "184"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-uppercase"
      }, "12 Today")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Statistics")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_AmChartStatistics__WEBPACK_IMPORTED_MODULE_9__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Statistics")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_AmChartStatistics1__WEBPACK_IMPORTED_MODULE_10__["default"], {
        height: "350px"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "theme-bg gradientcolor"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
        className: "borderless"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5",
        className: "text-white"
      }, "Statistics")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        className: "p-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-2 text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "text-white text-uppercase f-w-400"
      }, "Month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "btn btn-round bg-white text-uppercase mx-3 px-4 f-w-400"
      }, "Week"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "text-white text-uppercase f-w-400"
      }, "Day")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "my-3 text-center text-white"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: " d-block mb-1"
      }, "$78.89 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "feather icon-arrow-up"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Week2 +15.44")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_AmChartStatistics2__WEBPACK_IMPORTED_MODULE_11__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "News Statistics")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        className: "pl-0 pr-0 pb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_AmChartNewsStatistics__WEBPACK_IMPORTED_MODULE_12__["default"], {
        height: "250px"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        className: "border-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "theme-bg d-block rounded-circle mx-auto mb-2",
        style: {
          width: '10px',
          height: '10px'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "mb-2"
      }, "53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "mt-2 mb-0"
      }, "Sport")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "theme-bg2 d-block rounded-circle mx-auto mb-2",
        style: {
          width: '10px',
          height: '10px'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "mb-2"
      }, "13"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "mt-2 mb-0"
      }, "Music")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "bg-c-blue d-block rounded-circle mx-auto mb-2",
        style: {
          width: '10px',
          height: '10px'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "mb-2"
      }, "30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "mt-2 mb-0"
      }, "Travel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "bg-c-red d-block rounded-circle mx-auto mb-2",
        style: {
          width: '10px',
          height: '10px'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "mb-2"
      }, "4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "mt-2 mb-0"
      }, "News")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Statistics")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_AmChartStatistics3__WEBPACK_IMPORTED_MODULE_13__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Statistics")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_AmChartStatistics4__WEBPACK_IMPORTED_MODULE_14__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "bg-c-blue"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
        className: "borderless"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5",
        className: "text-white"
      }, "Earnings")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        style: {
          padding: '0 25px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "earning-text mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "mb-3 text-white f-w-300"
      }, "$4295.36 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-arrow-up teal accent-3"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-uppercase text-white d-block"
      }, "Total Earnings")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_AmChartEarnings__WEBPACK_IMPORTED_MODULE_15__["default"], {
        height: "300px"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Earnings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, null, "Mon 15 - Sun 21")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "earning-price mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "m-0 f-w-300"
      }, "$894.39")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_AmChartEarnings1__WEBPACK_IMPORTED_MODULE_16__["default"], {
        height: "300px"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Reply"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, null, "Time for first reply")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "reply-price"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "f-w-300"
      }, "2.43 h"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-uppercase"
      }, "average time for first reply")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_AmChartReplay__WEBPACK_IMPORTED_MODULE_17__["default"], {
        height: "290px"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Statistics")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_AmChartStatistics5__WEBPACK_IMPORTED_MODULE_18__["default"], {
        height: "290px"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "mb-1 text-muted d-block"
      }, "23%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress",
        style: {
          height: '5px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-bar progress-c-green",
        role: "progressbar",
        style: {
          width: '23%'
        },
        "aria-valuenow": "23",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "mb-1 text-muted d-block"
      }, "14%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress",
        style: {
          height: '5px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-bar progress-c-yellow",
        role: "progressbar",
        style: {
          width: '14%'
        },
        "aria-valuenow": "14",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "mb-1 text-muted d-block"
      }, "35%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress",
        style: {
          height: '5px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-bar progress-c-purple",
        role: "progressbar",
        style: {
          width: '35%'
        },
        "aria-valuenow": "35",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "mb-1 text-muted d-block"
      }, "28%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress",
        style: {
          height: '5px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-bar progress-c-blue",
        role: "progressbar",
        style: {
          width: '28%'
        },
        "aria-valuenow": "28",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "pb-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Statistics")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_AmChartStatistics6__WEBPACK_IMPORTED_MODULE_19__["default"], {
        height: "350px"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "pb-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Devices")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_AmChartDevices__WEBPACK_IMPORTED_MODULE_20__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-12 pt-3 pb-3 border-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "mr-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-circle text-c-green  mr-2"
      }), "Desktop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "float-right"
      }, "41.6 %")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-12 pt-3 pb-3 border-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "mr-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-circle text-c-blue  mr-2"
      }), "Mobile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "float-right"
      }, "32.5 %")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-12 pt-3 border-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "mr-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-circle text-c-purple  mr-2"
      }), "Tablet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "float-right"
      }, "25.9 %")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "pb-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "rounded-circle m-r-10",
        style: {
          width: '40px'
        },
        src: _assets_images_user_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
        alt: "activity-user"
      }), " Jonas Nielsen")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "f-w-300"
      }, "$359,234"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "d-block pt-1 pb-3"
      }, "TOTAL SAVINGS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_AmChartUserCard__WEBPACK_IMPORTED_MODULE_21__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "client-name"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-12 pt-2 pb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "mr-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-circle text-c-green  mr-2"
      }), "Main wallet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "float-right text-muted"
      }, "$194.42")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-12 pt-2 pb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "mr-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-circle text-c-blue  mr-2"
      }), "Travel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "float-right text-muted"
      }, "$86.48")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-12 pt-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "mr-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-circle text-c-purple  mr-2"
      }), "Food & Drink"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "float-right text-muted"
      }, "$23.27"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "pb-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Yearly Summary")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row pb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4 col-6 text-center m-b-15"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "f-w-300"
      }, "$2356.4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Invoiced")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4 col-6 text-center m-b-15"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "f-w-300"
      }, "$1935.6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Profit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4 col-12 text-center m-b-15"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "f-w-300"
      }, "$468.9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Expenses"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_AmChartYearlySummary__WEBPACK_IMPORTED_MODULE_22__["default"], {
        height: "300px"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Last 3 Days")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4 col-6 text-center m-b-15"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "f-w-300"
      }, "$32,42"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-right"
      }, "Mon ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "+5,93"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4 col-6 text-center m-b-15"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "f-w-300"
      }, "$28,36"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-right"
      }, "Tue ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "-4,24"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4 col-12 text-center m-b-15"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "f-w-300"
      }, "$59,48"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-right"
      }, "Wed ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "+12,25"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        className: "p-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_FlotChartLast3Days__WEBPACK_IMPORTED_MODULE_23__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Statistics")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_AmChartStatistics7__WEBPACK_IMPORTED_MODULE_24__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-12 pt-2 pb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "mr-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-circle text-c-green  mr-2"
      }), "page Views"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "float-right"
      }, "15.5 %")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-12 pt-2 pb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "mr-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-circle text-c-blue  mr-2"
      }), "page Clicks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "float-right"
      }, "23.5 %")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-12 pt-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "mr-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-circle text-c-purple  mr-2"
      }), "page Likes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "float-right"
      }, "36.3 %")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Activity")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_AmChartActivity__WEBPACK_IMPORTED_MODULE_25__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "text-uppercase d-block mb-2"
      }, "max"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "f-w-300"
      }, "9.376"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Steps")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "text-uppercase d-block mb-2"
      }, "min"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "font-weight-light"
      }, "237"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Steps")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Statistics")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "f-w-300"
      }, "$894.39")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        className: "p-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_AmChartStatistics8__WEBPACK_IMPORTED_MODULE_26__["default"], {
        height: "300px"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Statistics"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, null, "Last 6 Months")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_AmChartStatistics9__WEBPACK_IMPORTED_MODULE_27__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Web Statistics")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_AmChartWebStatistics__WEBPACK_IMPORTED_MODULE_28__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-12 pt-3 pb-3 mt-3 border-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "mr-3"
      }, "Sales"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "float-right"
      }, "563 / 735")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-12 pt-3 pb-3 border-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "mr-3"
      }, "Clicks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "float-right"
      }, "76898 / 95442")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-12 pt-3 pb-3 border-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "mr-3"
      }, "Views"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "float-right"
      }, "3682 / 4235")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-12 pt-3 border-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "mr-3"
      }, "Visits"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "float-right"
      }, "2348 / 3749")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Statistics")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_AmChartStatistics10__WEBPACK_IMPORTED_MODULE_29__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Transactions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, null, "Jun 23 - Jul 23")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row align-items-center justify-content-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "f-w-300 mb-0 float-left"
      }, "$59,48")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_FlotChartTransactions__WEBPACK_IMPORTED_MODULE_30__["default"], {
        height: "80px"
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Transactions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, null, "June - July")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row align-items-center justify-content-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_FlotChartTransactions1__WEBPACK_IMPORTED_MODULE_31__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "f-w-300 pt-3 mb-0"
      }, "$80,48")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_FlotChartTransactions2__WEBPACK_IMPORTED_MODULE_32__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "f-w-300 pt-3 mb-0"
      }, "$40,27")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Transactions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, null, "Jun 23 - Jul 23")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row align-items-center justify-content-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_FlotChartTransactions3__WEBPACK_IMPORTED_MODULE_33__["default"], {
        height: "80px"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "f-w-300 mb-0 float-right"
      }, "$59,48")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "theme-bg2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
        className: "borderless"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5",
        className: "text-white"
      }, "Stats")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4 col-6 text-center m-b-10"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "text-white f-w-300"
      }, "932"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "d-block text-white"
      }, "This Month")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4 col-6 text-center m-b-10"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "text-white f-w-300"
      }, "85"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "d-block text-white"
      }, "This Week")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4 col-12 text-center m-b-10"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "text-white f-w-300"
      }, "26"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "d-block text-white"
      }, "Today")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        className: "p-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_AmChartStats__WEBPACK_IMPORTED_MODULE_34__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "bg-c-blue"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
        className: "borderless"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5",
        className: "text-white"
      }, "Statistics")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_AmChartStatistics11__WEBPACK_IMPORTED_MODULE_35__["default"], {
        height: "350px"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        className: "user-chart"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row align-items-center justify-content-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-line-chart f-30"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "img-fluid rounded-circle",
        src: _assets_images_user_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "dashboard-user"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-envelope f-30"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "m-t-30 text-center"
      }, "Alma Christensen"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-center d-block"
      }, "UX Designer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row m-t-40"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_FlotChartUserCard__WEBPACK_IMPORTED_MODULE_36__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "f-w-300"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-caret-up text-c-green f-22 m-r-10 m-l-10"
      }), "13 %")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Users from United States")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_AmChartWorldUser__WEBPACK_IMPORTED_MODULE_37__["default"], {
        height: "450px"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Phone Calls")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        className: "p-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_AmChartPhoneCalls__WEBPACK_IMPORTED_MODULE_38__["default"], {
        height: "350px"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "progress-gender"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Gender"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, null, "325 Employees")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "m-b-10"
      }, "Female ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "float-right"
      }, "Male")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-bar progress-c-theme2",
        role: "progressbar",
        style: {
          width: '30%',
          height: '10px'
        },
        "aria-valuenow": "30",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-bar progress-c-theme",
        role: "progressbar",
        style: {
          width: '30%',
          height: '10px'
        },
        "aria-valuenow": "30",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "f-w-300 m-t-20  text-muted"
      }, "62%", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "float-right"
      }, "28%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "m-b-10 m-t-20"
      }, "Female ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "float-right"
      }, "Male")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-bar progress-c-theme2",
        role: "progressbar",
        style: {
          width: '40%',
          height: '10px'
        },
        "aria-valuenow": "40",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-bar progress-c-theme",
        role: "progressbar",
        style: {
          width: '30%',
          height: '10px'
        },
        "aria-valuenow": "30",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "f-w-300 m-t-20  text-muted"
      }, "60%", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "float-right"
      }, "50%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "m-b-10 m-t-20"
      }, "Female ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "float-right"
      }, "Male")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-bar progress-c-theme2",
        role: "progressbar",
        style: {
          width: '50%',
          height: '10px'
        },
        "aria-valuenow": "50",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-bar progress-c-theme",
        role: "progressbar",
        style: {
          width: '52%',
          height: '10px'
        },
        "aria-valuenow": "50",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "f-w-300 m-t-20  text-muted"
      }, "50%", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "float-right"
      }, "50%"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "progress-gender"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Age"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, null, "Average 40+")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart_AmChartAge__WEBPACK_IMPORTED_MODULE_39__["default"], {
        height: "250px"
      }))))));
    }
  }]);

  return WdgetChart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (WdgetChart);

/***/ })

}]);