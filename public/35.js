(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./resources/js/Back-Office/Pages/UtilitaChart.js":
/*!********************************************************!*\
  !*** ./resources/js/Back-Office/Pages/UtilitaChart.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pnotify/dist/es/PNotify */ "./node_modules/pnotify/dist/es/PNotify.js");
/* harmony import */ var pnotify_dist_es_PNotifyButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pnotify/dist/es/PNotifyButtons */ "./node_modules/pnotify/dist/es/PNotifyButtons.js");
/* harmony import */ var pnotify_dist_es_PNotifyConfirm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pnotify/dist/es/PNotifyConfirm */ "./node_modules/pnotify/dist/es/PNotifyConfirm.js");
/* harmony import */ var pnotify_dist_es_PNotifyCallbacks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pnotify/dist/es/PNotifyCallbacks */ "./node_modules/pnotify/dist/es/PNotifyCallbacks.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apexcharts */ "./node_modules/apexcharts/dist/apexcharts.common.js");
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_9__);
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












var _ref = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
    id = _ref.id,
    auth_token = _ref.auth_token;

var baseurl = window.location.origin;

var UtilitaChart = /*#__PURE__*/function (_React$Component) {
  _inherits(UtilitaChart, _React$Component);

  var _super = _createSuper(UtilitaChart);

  function UtilitaChart(props) {
    var _this;

    _classCallCheck(this, UtilitaChart);

    _this = _super.call(this, props);
    _this.state = {
      start_date: '',
      end_date: ''
    };
    return _this;
  }

  _createClass(UtilitaChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var items = [];
      var _this$props = this.props,
          match = _this$props.match,
          location = _this$props.location,
          history = _this$props.history;
      var _location$state$detai = location.state.detail,
          id = _location$state$detai.id,
          start_date = _location$state$detai.start_date,
          end_date = _location$state$detai.end_date,
          report_type = _location$state$detai.report_type;
      var reportType = report_type['value'];
      this.setState({
        start_date: start_date
      });
      this.setState({
        end_date: end_date
      });
      var data = {
        _method: 'get',
        id: id,
        start_date: start_date,
        end_date: end_date,
        file_id: reportType
      };

      if (reportType == 1) {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(baseurl + '/api/utilita/' + id, data, {
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + auth_token
          }
        }).then(function (res) {
          // let data = JSON.parse(res.data); 
          var result = res.data.complate; //series

          var options = {
            series: result['series'],
            chart: {
              type: 'bar',
              height: 500,
              stacked: true
            },
            plotOptions: {
              bar: {
                horizontal: true
              }
            },
            stroke: {
              width: 1,
              colors: ['#fff']
            },
            title: {
              text: 'Install Numbers'
            },
            subtitle: {
              text: 'Complated',
              align: 'left'
            },
            xaxis: {
              categories: result['engineer'],
              labels: {
                formatter: function formatter(val) {
                  return val + "";
                }
              },
              title: {
                text: 'Value'
              }
            },
            yaxis: {
              title: {
                text: 'Engineer Name'
              }
            },
            tooltip: {
              y: {
                formatter: function formatter(val) {
                  return val + "";
                }
              }
            },
            fill: {
              opacity: 1
            },
            legend: {
              position: 'top',
              horizontalAlign: 'left',
              offsetX: 40
            }
          };
          var StackedBar = new apexcharts__WEBPACK_IMPORTED_MODULE_9___default.a(document.querySelector("#StackedBar"), options);
          StackedBar.render();
          var abortedrs = res.data.aborted; //series

          var options = {
            series: abortedrs['series'],
            chart: {
              type: 'bar',
              height: 500,
              stacked: true
            },
            plotOptions: {
              bar: {
                horizontal: true
              }
            },
            stroke: {
              width: 1,
              colors: ['#fff']
            },
            title: {
              text: 'Install Numbers'
            },
            subtitle: {
              text: 'aborted',
              align: 'left'
            },
            xaxis: {
              categories: abortedrs['engineer'],
              labels: {
                formatter: function formatter(val) {
                  return val + "";
                }
              },
              title: {
                text: 'Value'
              }
            },
            yaxis: {
              title: {
                text: 'Engineer Name'
              }
            },
            tooltip: {
              y: {
                formatter: function formatter(val) {
                  return val + "";
                }
              }
            },
            fill: {
              opacity: 1
            },
            legend: {
              position: 'top',
              horizontalAlign: 'left',
              offsetX: 40
            }
          };
          var abortedBar = new apexcharts__WEBPACK_IMPORTED_MODULE_9___default.a(document.querySelector("#abortedBar"), options);
          abortedBar.render();
        });
      } else if (reportType == 2) {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(baseurl + '/api/utilita/' + id, data, {
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + auth_token
          }
        }).then(function (res) {
          // let data = JSON.parse(res.data); 
          var result = res.data.complate; //series

          var options = {
            series: result['series'],
            chart: {
              type: 'bar',
              height: 500,
              stacked: true
            },
            plotOptions: {
              bar: {
                horizontal: true
              }
            },
            stroke: {
              width: 1,
              colors: ['#fff']
            },
            title: {
              text: 'Install Numbers'
            },
            subtitle: {
              text: 'Complated',
              align: 'left'
            },
            xaxis: {
              categories: result['engineer'],
              labels: {
                formatter: function formatter(val) {
                  return val + "";
                }
              },
              title: {
                text: 'Value'
              }
            },
            yaxis: {
              title: {
                text: 'Engineer Name'
              }
            },
            tooltip: {
              y: {
                formatter: function formatter(val) {
                  return val + "";
                }
              }
            },
            fill: {
              opacity: 1
            },
            legend: {
              position: 'top',
              horizontalAlign: 'left',
              offsetX: 40
            }
          };
          var StackedBar = new apexcharts__WEBPACK_IMPORTED_MODULE_9___default.a(document.querySelector("#StackedBar"), options);
          StackedBar.render();
          var abortedrs = res.data.aborted; //series

          var options = {
            series: abortedrs['series'],
            chart: {
              type: 'bar',
              height: 500,
              stacked: true
            },
            plotOptions: {
              bar: {
                horizontal: true
              }
            },
            stroke: {
              width: 1,
              colors: ['#fff']
            },
            title: {
              text: 'Install Numbers'
            },
            subtitle: {
              text: 'aborted',
              align: 'left'
            },
            xaxis: {
              categories: abortedrs['engineer'],
              labels: {
                formatter: function formatter(val) {
                  return val + "";
                }
              },
              title: {
                text: 'Value'
              }
            },
            yaxis: {
              title: {
                text: 'Engineer Name'
              }
            },
            tooltip: {
              y: {
                formatter: function formatter(val) {
                  return val + "";
                }
              }
            },
            fill: {
              opacity: 1
            },
            legend: {
              position: 'top',
              horizontalAlign: 'left',
              offsetX: 40
            }
          };
          var abortedBar = new apexcharts__WEBPACK_IMPORTED_MODULE_9___default.a(document.querySelector("#abortedBar"), options);
          abortedBar.render();
        });
      } else if (reportType == 3) {
        var driver_name = [];
        var total_miles = [];
        var max_speed = [];
        document.getElementById("requestLoder").innerHTML = '<img style="width:2%"  src="' + baseurl + '/images/ajax_loader_gray_512.gif"></img>';
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(baseurl + '/api/vehicalmileas/1', data, {
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + auth_token
          }
        }).then(function (res) {
          if (res.data.success) {
            document.getElementById("requestLoder").innerHTML = '';

            if (res.data.totalmileage.length == 0) {
              document.getElementById("vahicalMileage").innerHTML = '<div>Record not found</div>';
              return false;
            }

            res.data.totalmileage.map(function (val, indx) {
              driver_name.push(val.driver_name);
              total_miles.push(val.total_miles);
              max_speed.push(val.max_speed);
            });
            var options = {
              title: {
                text: 'Miles'
              },
              subtitle: {
                text: _this2.state.start_date + ' to ' + _this2.state.end_date,
                align: 'left'
              },
              series: [{
                data: total_miles
              }],
              chart: {
                type: 'bar',
                height: 600
              },
              plotOptions: {
                bar: {
                  horizontal: true
                }
              },
              dataLabels: {
                enabled: false
              },
              xaxis: {
                categories: driver_name,
                title: {
                  text: 'Miles'
                }
              },
              yaxis: {
                title: {
                  text: 'Driver Name'
                }
              },
              tooltip: {
                y: {
                  formatter: function formatter(val) {
                    return val + " Miles";
                  }
                }
              }
            };
            var chart = new apexcharts__WEBPACK_IMPORTED_MODULE_9___default.a(document.querySelector("#vahicalMileage"), options);
            chart.render();
            var options = {
              title: {
                text: 'Speed Spread'
              },
              subtitle: {
                text: _this2.state.start_date + ' to ' + _this2.state.end_date,
                align: 'left'
              },
              fill: {
                colors: [function (_ref2) {
                  var value = _ref2.value,
                      seriesIndex = _ref2.seriesIndex,
                      w = _ref2.w;

                  if (value > 70) {
                    return '#FF0000';
                  } else {
                    return '#0099FF';
                  }
                }]
              },
              series: [{
                data: max_speed
              }],
              chart: {
                type: 'bar',
                height: 600
              },
              plotOptions: {
                bar: {
                  horizontal: true
                }
              },
              dataLabels: {
                enabled: false
              },
              xaxis: {
                categories: driver_name,
                title: {
                  text: 'Top speed'
                }
              },
              yaxis: {
                title: {
                  text: 'Driver Name'
                }
              },
              tooltip: {
                y: {
                  formatter: function formatter(val) {
                    return val + " Miles";
                  }
                }
              }
            };
            var chart = new apexcharts__WEBPACK_IMPORTED_MODULE_9___default.a(document.querySelector("#vahicalMax_speed"), options);
            chart.render();
          }
        });
      } //

    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          match = _this$props2.match,
          location = _this$props2.location,
          history = _this$props2.history;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Utilita Chart"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-sm",
        style: {
          'float': 'right'
        },
        onClick: function onClick() {
          history.goBack();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        "class": "feather icon-chevron-left"
      }), "Back")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, this.state.start_date, " to ", this.state.end_date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "requestLoder",
        style: {
          'textAlign': 'center'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "abortedBar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "StackedBar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "vahicalMileage"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "vahicalMax_speed"
      }))))));
    }
  }]);

  return UtilitaChart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (UtilitaChart);

/***/ })

}]);