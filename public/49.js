(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

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
/* harmony import */ var dom_to_pdf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dom-to-pdf */ "./node_modules/dom-to-pdf/index.js");
/* harmony import */ var dom_to_pdf__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dom_to_pdf__WEBPACK_IMPORTED_MODULE_10__);
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

    _defineProperty(_assertThisInitialized(_this), "generatePdf", function () {
      var element = document.getElementById('pdf-container');
      var options = {
        filename: _this.state.title + '-' + _this.state.start_date + ".pdf"
      };
      document.getElementById("requestLoder").innerHTML = '<img style="width:2%"  src="' + baseurl + '/images/ajax_loader_gray_512.gif"></img>';
      return dom_to_pdf__WEBPACK_IMPORTED_MODULE_10___default()(element, options, function () {
        // callback function
        document.getElementById("requestLoder").innerHTML = '';
      });
    });

    _this.state = {
      start_date: '',
      end_date: '',
      title: ''
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
        this.setState({
          title: 'Morrison Data services'
        });
        document.getElementById("requestLoder").innerHTML = '<img style="width:2%"  src="' + baseurl + '/images/ajax_loader_gray_512.gif"></img>';
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(baseurl + '/api/utilita/' + id, data, {
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + auth_token
          }
        }).then(function (res) {
          // let data = JSON.parse(res.data); 
          document.getElementById("requestLoder").innerHTML = '';
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
              text: 'Completed',
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
        this.setState({
          title: 'Utilita'
        });
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
          var CompletedjobData = res.data.CompletedjobData;
          var totalEngineerMiles = res.data.totalEngineerMiles; //series

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
              text: 'Completed',
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
                var total_Miles = 'traveller record not found';

                if (totalEngineerMiles[w.globals.labels[dataPointIndex]]) {
                  total_Miles = 'Travelled ' + totalEngineerMiles[w.globals.labels[dataPointIndex]] + ' miles';
                }

                if (CompletedjobData[w.globals.labels[dataPointIndex]]) {
                  CompletedjobData[w.globals.labels[dataPointIndex]].map(function (vl, inx) {
                    if (vl.appointment_time == lineName) {
                      listed += '<tr>';
                      listed += '<td>' + vl.customer_id + '</td>';
                      listed += '<td>' + vl.job_id + '</td>';
                      listed += '<td>' + vl.schedule_date + '</td>';
                      listed += '<td>' + vl.schedule_start_time + '</td>';
                      listed += '<td>' + vl.schedule_end_time + '</td>';
                      listed += '<td>' + vl.on_site_time + '</td>';
                      listed += '<td>' + vl.job_type + '</td>';
                      listed += '<td>' + vl.post_code + '</td>';
                      listed += '<td>' + vl.region + '</td>';
                      listed += '</tr>';
                    }
                  });
                }

                return '<div><h6 style="margin:10px;float:left">' + w.globals.labels[dataPointIndex] + '</h6>' + '<b style="float:right;margin: 6px 60px;">' + total_Miles + '</b></div>' + '<table width="100%" class="table table-striped"  style="width:100" class="arrow_box">' + "<thead><tr>" + "<th>Customer Id</th>" + //  w.globals.labels[dataPointIndex] + //  series[seriesIndex][dataPointIndex] +
                "<th>Job Id</th>" + "<th>Schedule Date</th>" + "<th>Start Time</th>" + "<th>End Time</th>" + "<th>On Site Time</th>" + "<th>Job Type</th>" + "<th>Post code</th>" + "<th>Region</th>" + "</tr></thead>" + "<tbody>" + listed + "</tbody>" + "</table>";
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
                      listed += '<td>' + vl.job_id + '</td>';
                      listed += '<td>' + vl.schedule_date + '</td>';
                      listed += '<td>' + vl.schedule_start_time + '</td>';
                      listed += '<td>' + vl.schedule_end_time + '</td>';
                      listed += '<td>' + vl.on_site_time + '</td>';
                      listed += '<td>' + vl.job_type + '</td>';
                      listed += '<td>' + vl.post_code + '</td>';
                      listed += '<td>' + vl.region + '</td>';
                      listed += '</tr>';
                    }
                  });
                }

                return '<h6 style="margin:10px;">' + w.globals.labels[dataPointIndex] + '</h6>' + '<table width="100%" class="table table-striped"  style="width:100" class="arrow_box">' + "<thead><tr>" + "<th>Customer Id</th>" + //  w.globals.labels[dataPointIndex] + //  series[seriesIndex][dataPointIndex] +
                "<th>Job Id</th>" + "<th>Schedule Date</th>" + "<th>Start Time</th>" + "<th>End Time</th>" + "<th>On Site Time</th>" + "<th>Job Type</th>" + "<th>Post Code</th>" + "<th>Region</th>" + "</tr></thead>" + "<tbody>" + listed + "</tbody>" + "</table>";
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
                      listed += '<td>' + vl.job_id + '</td>';
                      listed += '<td>' + vl.schedule_date + '</td>';
                      listed += '<td>' + vl.schedule_start_time + '</td>';
                      listed += '<td>' + vl.schedule_end_time + '</td>';
                      listed += '<td>' + vl.on_site_time + '</td>';
                      listed += '<td>' + vl.job_type + '</td>';
                      listed += '<td>' + vl.post_code + '</td>';
                      listed += '<td>' + vl.region + '</td>';
                      listed += '</tr>';
                    }
                  });
                }

                return '<h6 style="margin:10px;">' + w.globals.labels[dataPointIndex] + '</h6>' + '<table width="100%" class="table table-striped"  style="width:100" class="arrow_box">' + "<thead><tr>" + "<th>Customer Id</th>" + //  w.globals.labels[dataPointIndex] + //  series[seriesIndex][dataPointIndex] +
                "<th>Job Id</th>" + "<th>Schedule Date</th>" + "<th>Start Time</th>" + "<th>End Time</th>" + "<th>On Site Time</th>" + "<th>Job Type</th>" + "<th>Post Code</th>" + "<th>Region</th>" + "</tr></thead>" + "<tbody>" + listed + "</tbody>" + "</table>";
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
        this.setState({
          title: 'Vehicle Mileage'
        });
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
            var listmileage = res.data.listmileage;
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
                custom: function custom(_ref6) {
                  var series = _ref6.series,
                      seriesIndex = _ref6.seriesIndex,
                      dataPointIndex = _ref6.dataPointIndex,
                      w = _ref6.w;
                  var lineName = '';

                  if (seriesIndex == 0) {
                    lineName = 'AM';
                  } else if (seriesIndex == 1) {
                    lineName = 'PM';
                  }

                  var listed = '';

                  if (listmileage) {
                    listmileage.map(function (vl, inx) {
                      if (w.globals.labels[dataPointIndex] == vl.driver_name) {
                        listed += '<tr>';
                        listed += '<td>' + vl.drive_date + '</td>';
                        listed += '<td>' + vl.miles.toFixed(2) + '</td>';
                        listed += '<td>' + vl.duration + '</td>';
                        listed += '<td>' + vl.max_speed.toFixed(2) + '</td>';
                        listed += '<td>' + vl.start_location + ', ' + vl.start_postcode + '</td>';
                        listed += '<td>' + vl.start_time + '</td>';
                        listed += '<td>' + vl.end_location + ', ' + vl.end_postcode + '</td>';
                        listed += '<td>' + vl.end_time + '</td>';
                        listed += '</tr>';
                      }
                    });
                  }

                  return '<h6 style="margin:10px;">' + w.globals.labels[dataPointIndex] + '</h6>' + '<b style="margin-left:10px;"> Total Miles :' + series[seriesIndex][dataPointIndex].toFixed(2) + '</b>' + '<table width="100%" class="table table-striped"  style="width:100" class="arrow_box">' + "<thead><tr>" + "<th>Drive Date</th>" + //  w.globals.labels[dataPointIndex] + //  series[seriesIndex][dataPointIndex] +
                  "<th>Miles</th>" + "<th>Duration</th>" + "<th>Max Speed</th>" + "<th>Start Location</th>" + "<th>Start Time</th>" + "<th>End Location</th>" + "<th>End Time</th>" + "</tr></thead>" + "<tbody>" + listed + "</tbody>" + "</table>";
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
                colors: [function (_ref7) {
                  var value = _ref7.value,
                      seriesIndex = _ref7.seriesIndex,
                      w = _ref7.w;

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
                custom: function custom(_ref8) {
                  var series = _ref8.series,
                      seriesIndex = _ref8.seriesIndex,
                      dataPointIndex = _ref8.dataPointIndex,
                      w = _ref8.w;
                  var lineName = '';

                  if (seriesIndex == 0) {
                    lineName = 'AM';
                  } else if (seriesIndex == 1) {
                    lineName = 'PM';
                  }

                  var listed = '';

                  if (listmileage) {
                    listmileage.map(function (vl, inx) {
                      if (w.globals.labels[dataPointIndex] == vl.driver_name) {
                        if (vl.max_speed > 70) {
                          listed += '<tr style="background-color: #fbbfbf;color:white" >';
                        } else {
                          listed += '<tr>';
                        }

                        listed += '<td>' + vl.drive_date + '</td>';
                        listed += '<td>' + vl.miles.toFixed(2) + '</td>';
                        listed += '<td>' + vl.duration + '</td>';
                        listed += '<td>' + vl.max_speed.toFixed(2) + '</td>';
                        listed += '<td>' + vl.start_location + ', ' + vl.start_postcode + '</td>';
                        listed += '<td>' + vl.start_time + '</td>';
                        listed += '<td>' + vl.end_location + ', ' + vl.end_postcode + '</td>';
                        listed += '<td>' + vl.end_time + '</td>';
                        listed += '</tr>';
                      }
                    });
                  }

                  return '<h6 style="margin:10px;">' + w.globals.labels[dataPointIndex] + '</h6>' + '<b style="margin-left:10px;"> Total Miles :' + series[seriesIndex][dataPointIndex].toFixed(2) + '</b>' + '<table width="100%" class="table table-striped"  style="width:100" class="arrow_box">' + "<thead><tr>" + "<th>Drive Date</th>" + //  w.globals.labels[dataPointIndex] + //  series[seriesIndex][dataPointIndex] +
                  "<th>Miles</th>" + "<th>Duration</th>" + "<th>Max Speed</th>" + "<th>Start Location</th>" + "<th>Start Time</th>" + "<th>End Location</th>" + "<th>End Time</th>" + "</tr></thead>" + "<tbody>" + listed + "</tbody>" + "</table>";
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
      }, this.state.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, " From ", this.state.start_date, " To ", this.state.end_date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-sm",
        style: {
          'float': 'right'
        },
        onClick: function onClick() {
          history.goBack();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        "class": "feather icon-chevron-left"
      }), "Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-sm btn-light",
        style: {
          'float': 'right'
        },
        onClick: this.generatePdf
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        "class": "feather icon-download"
      }), "Download all")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "requestLoder",
        style: {
          'textAlign': 'center'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "pdf-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "abortedBar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "descriptionBar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "StackedBar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "vahicalMileage"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "vahicalMax_speed"
      })))))));
    }
  }]);

  return UtilitaChart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (UtilitaChart);

/***/ })

}]);