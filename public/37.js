(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

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

      if (location.state.detail) {
        var _location$state$detai = location.state.detail,
            _id = _location$state$detai.id,
            _start_date = _location$state$detai.start_date,
            _end_date = _location$state$detai.end_date,
            _report_type = _location$state$detai.report_type;
        localStorage.setItem('bespokesearch', JSON.stringify(location.state.detail));
      } else {
        var _ref2 = localStorage.getItem('bespokesearch') ? JSON.parse(localStorage.getItem('bespokesearch')).user : 'Null',
            _id2 = _ref2.id,
            _start_date2 = _ref2.start_date,
            _end_date2 = _ref2.end_date,
            _report_type2 = _ref2.report_type;
      }

      var _location$state$detai2 = location.state.detail,
          id = _location$state$detai2.id,
          start_date = _location$state$detai2.start_date,
          end_date = _location$state$detai2.end_date,
          report_type = _location$state$detai2.report_type;
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
        document.getElementById("requestLoder").innerHTML = '<img style="width:2%"  src="' + baseurl + '/images/ajax_loader_gray_512.gif"></img>';
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
        document.getElementById("requestLoder").innerHTML = '<img style="width:2%"  src="' + baseurl + '/images/ajax_loader_gray_512.gif"></img>';
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(baseurl + '/api/utilita/' + id, data, {
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + auth_token
          }
        }).then(function (res) {
          // let data = JSON.parse(res.data); 
          document.getElementById("requestLoder").innerHTML = '';
          var result = res.data.complate;
          var CompletedjobData = res.data.CompletedjobData; //series

          var options = {
            series: result['series'],
            colors: ['#0d74bc', '#d8cb1b'],
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
              custom: function custom(_ref3) {
                var series = _ref3.series,
                    seriesIndex = _ref3.seriesIndex,
                    dataPointIndex = _ref3.dataPointIndex,
                    w = _ref3.w;
                var lineName = '';

                if (seriesIndex == 0) {
                  lineName = 'AM';
                } else if (seriesIndex == 1) {
                  lineName = 'PM';
                }

                var listed = '';

                if (CompletedjobData[w.globals.labels[dataPointIndex]]) {
                  CompletedjobData[w.globals.labels[dataPointIndex]].map(function (vl, inx) {
                    if (vl.appointment_time == lineName) {
                      listed += '<tr>';
                      listed += '<td>' + vl.customer_id + '</td>';
                      listed += '<td>' + vl.schedule_date + '</td>';
                      listed += '<td>' + vl.schedule_start_time + '</td>';
                      listed += '<td>' + vl.schedule_end_time + '</td>';
                      listed += '<td>' + vl.job_type + '</td>';
                      listed += '<td>' + vl.post_code + '</td>';
                      listed += '<td>' + vl.region + '</td>';
                      listed += '</tr>';
                    }
                  });
                }

                return '<h6 style="margin:10px;">' + w.globals.labels[dataPointIndex] + '</h6>' + '<table width="100%" class="table table-striped"  style="width:100" class="arrow_box">' + "<thead><tr>" + "<th>customer id</th>" + //  w.globals.labels[dataPointIndex] + //  series[seriesIndex][dataPointIndex] +
                "<th>schedule date</th>" + "<th>Start time</th>" + "<th>End time</th>" + "<th>job type</th>" + "<th>post code</th>" + "<th>region</th>" + "</tr></thead>" + "<tbody>" + listed + "</tbody>" + "</table>";
              },
              fixed: {
                enabled: true,
                position: "topRight",
                offsetX: 0,
                offsetY: 0
              }
              /*
              y: {
                 formatter: function (val) {
                   return val + ""
                 }
               }
               */

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
          var abortedrs = res.data.aborted;
          var AbortedjobData = res.data.AbortedjobData; //series

          var options = {
            series: abortedrs['series'],
            colors: ['#0d74bc', '#d8cb1b'],
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
              text: 'Aborted',
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
              custom: function custom(_ref4) {
                var series = _ref4.series,
                    seriesIndex = _ref4.seriesIndex,
                    dataPointIndex = _ref4.dataPointIndex,
                    w = _ref4.w;
                var lineName = '';

                if (seriesIndex == 0) {
                  lineName = 'AM';
                } else if (seriesIndex == 1) {
                  lineName = 'PM';
                }

                var listed = '';

                if (AbortedjobData[w.globals.labels[dataPointIndex]]) {
                  AbortedjobData[w.globals.labels[dataPointIndex]].map(function (vl, inx) {
                    if (vl.appointment_time == lineName) {
                      listed += '<tr>';
                      listed += '<td>' + vl.customer_id + '</td>';
                      listed += '<td>' + vl.schedule_date + '</td>';
                      listed += '<td>' + vl.schedule_start_time + '</td>';
                      listed += '<td>' + vl.schedule_end_time + '</td>';
                      listed += '<td>' + vl.job_type + '</td>';
                      listed += '<td>' + vl.post_code + '</td>';
                      listed += '<td>' + vl.region + '</td>';
                      listed += '</tr>';
                    }
                  });
                }

                return '<h6 style="margin:10px;">' + w.globals.labels[dataPointIndex] + '</h6>' + '<table width="100%" class="table table-striped"  style="width:100" class="arrow_box">' + "<thead><tr>" + "<th>customer id</th>" + //  w.globals.labels[dataPointIndex] + //  series[seriesIndex][dataPointIndex] +
                "<th>schedule date</th>" + "<th>Start time</th>" + "<th>End time</th>" + "<th>job type</th>" + "<th>post code</th>" + "<th>region</th>" + "</tr></thead>" + "<tbody>" + listed + "</tbody>" + "</table>";
              },
              fixed: {
                enabled: true,
                position: "topRight",
                offsetX: 0,
                offsetY: 0
              }
              /*
              y: {
                 formatter: function (val) {
                   return val + ""
                 }
               }
               */

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
          abortedBar.render(); //Description chart reports

          var descriptionBar = res.data.total_description;
          var AbortedReasonData = res.data.AbortedReasonData;
          var options = {
            series: descriptionBar['series'],
            colors: ['#0d74bc', '#d8cb1b'],
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
              text: 'Aborts-reason'
            },
            subtitle: {
              text: _this2.state.start_date + ' to ' + _this2.state.end_date,
              align: 'left'
            },
            xaxis: {
              categories: descriptionBar['description'],
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
                text: 'Description',
                align: 'left',
                margin: 10
              }
            },
            tooltip: {
              custom: function custom(_ref5) {
                var series = _ref5.series,
                    seriesIndex = _ref5.seriesIndex,
                    dataPointIndex = _ref5.dataPointIndex,
                    w = _ref5.w;
                var lineName = '';

                if (seriesIndex == 0) {
                  lineName = 'AM';
                } else if (seriesIndex == 1) {
                  lineName = 'PM';
                }

                var listed = '';

                if (AbortedReasonData[w.globals.labels[dataPointIndex]]) {
                  AbortedReasonData[w.globals.labels[dataPointIndex]].map(function (vl, inx) {
                    if (vl.appointment_time == lineName) {
                      listed += '<tr>';
                      listed += '<td>' + vl.customer_id + '</td>';
                      listed += '<td>' + vl.schedule_date + '</td>';
                      listed += '<td>' + vl.schedule_start_time + '</td>';
                      listed += '<td>' + vl.schedule_end_time + '</td>';
                      listed += '<td>' + vl.job_type + '</td>';
                      listed += '<td>' + vl.post_code + '</td>';
                      listed += '<td>' + vl.region + '</td>';
                      listed += '</tr>';
                    }
                  });
                }

                return '<h6 style="margin:10px;">' + w.globals.labels[dataPointIndex] + '</h6>' + '<table width="100%" class="table table-striped"  style="width:100" class="arrow_box">' + "<thead><tr>" + "<th>customer id</th>" + //  w.globals.labels[dataPointIndex] + //  series[seriesIndex][dataPointIndex] +
                "<th>schedule date</th>" + "<th>Start time</th>" + "<th>End time</th>" + "<th>job type</th>" + "<th>post code</th>" + "<th>region</th>" + "</tr></thead>" + "<tbody>" + listed + "</tbody>" + "</table>";
              },
              fixed: {
                enabled: true,
                position: "topRight",
                offsetX: 0,
                offsetY: 0
              }
              /*
              y: {
                 formatter: function (val) {
                   return val + ""
                 }
               }
               */

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
          var descriptions = new apexcharts__WEBPACK_IMPORTED_MODULE_9___default.a(document.querySelector("#descriptionBar"), options);
          descriptions.render();
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
                colors: [function (_ref6) {
                  var value = _ref6.value,
                      seriesIndex = _ref6.seriesIndex,
                      w = _ref6.w;

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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "descriptionBar"
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