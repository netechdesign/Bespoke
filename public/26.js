(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./resources/js/Back-office/Pages/Dashboard.js":
/*!*****************************************************!*\
  !*** ./resources/js/Back-office/Pages/Dashboard.js ***!
  \*****************************************************/
/*! exports provided: Jobstatus, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jobstatus", function() { return Jobstatus; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var _Demo_Widget_Chart_AmChartEarnings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Demo/Widget/Chart/AmChartEarnings */ "./resources/js/Demo/Widget/Chart/AmChartEarnings.js");
/* harmony import */ var _store_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/constant */ "./resources/js/store/constant.js");
/* harmony import */ var _assets_images_user_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/user/avatar-1.jpg */ "./resources/js/assets/images/user/avatar-1.jpg");
/* harmony import */ var _assets_images_user_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_user_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_user_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/user/avatar-2.jpg */ "./resources/js/assets/images/user/avatar-2.jpg");
/* harmony import */ var _assets_images_user_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_user_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_user_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/user/avatar-3.jpg */ "./resources/js/assets/images/user/avatar-3.jpg");
/* harmony import */ var _assets_images_user_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_user_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apexcharts */ "./node_modules/apexcharts/dist/apexcharts.common.js");
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Dashboard_UtilitaAborts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Dashboard/UtilitaAborts */ "./resources/js/Back-office/Pages/Dashboard/UtilitaAborts.js");
/* harmony import */ var _Dashboard_UtilitaInstallsFuels__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Dashboard/UtilitaInstallsFuels */ "./resources/js/Back-office/Pages/Dashboard/UtilitaInstallsFuels.js");
/* harmony import */ var _Dashboard_MorrisonAborts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Dashboard/MorrisonAborts */ "./resources/js/Back-office/Pages/Dashboard/MorrisonAborts.js");
/* harmony import */ var _Dashboard_MorrisonInstallsFuels__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Dashboard/MorrisonInstallsFuels */ "./resources/js/Back-office/Pages/Dashboard/MorrisonInstallsFuels.js");
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
















var _ref = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
    id = _ref.id,
    auth_token = _ref.auth_token;

var baseurl = window.location.origin;
var Jobstatus = /*#__PURE__*/function (_React$Component) {
  _inherits(Jobstatus, _React$Component);

  var _super = _createSuper(Jobstatus);

  function Jobstatus(props) {
    var _this;

    _classCallCheck(this, Jobstatus);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(Jobstatus, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6,
        xl: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "mb-4"
      }, this.props.name, " ", this.props.statuslist.job_status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row d-flex align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-9"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "f-w-300 d-flex align-items-center m-b-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-arrow-up text-c-green f-30 m-r-5"
      }), this.props.statuslist.total))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress m-t-30",
        style: {
          'height': '20px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-bar progress-c-theme",
        role: "progressbar",
        style: {
          fontSize: '15px',
          width: this.props.statuslist.parsentage + '%'
        },
        "aria-valuenow": this.props.statuslist.parsentage,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, this.props.statuslist.parsentage + '%')))));
    }
  }]);

  return Jobstatus;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Dashboard = /*#__PURE__*/function (_React$Component2) {
  _inherits(Dashboard, _React$Component2);

  var _super2 = _createSuper(Dashboard);

  function Dashboard(props) {
    var _this2;

    _classCallCheck(this, Dashboard);

    _this2 = _super2.call(this, props);
    _this2.state = {
      jobstatus: [],
      msd_job_status: []
    };
    return _this2;
  }

  _createClass(Dashboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var data = new FormData(); // data.append('start_date', '01/07/2020');
      // data.append('end_date', '31/07/2020');

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(baseurl + '/api/jobstatus', data, {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + auth_token
        }
      }).then(function (res) {
        if (res.data.job_status) {
          _this3.setState({
            jobstatus: res.data.job_status,
            msd_job_status: res.data.msd_job_status
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, this.state.jobstatus.map(function (result, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Jobstatus, {
          key: index,
          name: "Utilita",
          statuslist: result
        });
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 12,
        xl: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Utilita")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6,
        xl: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Dashboard_UtilitaInstallsFuels__WEBPACK_IMPORTED_MODULE_11__["default"], {
        height: "450px"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6,
        xl: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Dashboard_UtilitaAborts__WEBPACK_IMPORTED_MODULE_10__["default"], {
        height: "450px"
      }))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, this.state.msd_job_status.map(function (result, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Jobstatus, {
          key: index,
          name: "MSD",
          statuslist: result
        });
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 12,
        xl: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Morrison Data services")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6,
        xl: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Dashboard_MorrisonInstallsFuels__WEBPACK_IMPORTED_MODULE_13__["default"], {
        height: "450px"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6,
        xl: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Dashboard_MorrisonAborts__WEBPACK_IMPORTED_MODULE_12__["default"], {
        height: "450px"
      }))))))))));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./resources/js/Back-office/Pages/Dashboard/MorrisonAborts.js":
/*!********************************************************************!*\
  !*** ./resources/js/Back-office/Pages/Dashboard/MorrisonAborts.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apexcharts */ "./node_modules/apexcharts/dist/apexcharts.common.js");
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_4__);
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







var _ref = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
    id = _ref.id,
    auth_token = _ref.auth_token;

var baseurl = window.location.origin;

var MorrisonAborts = /*#__PURE__*/function (_React$Component) {
  _inherits(MorrisonAborts, _React$Component);

  var _super = _createSuper(MorrisonAborts);

  function MorrisonAborts(props) {
    var _this;

    _classCallCheck(this, MorrisonAborts);

    _this = _super.call(this, props);
    _this.state = {
      start_date: '',
      end_date: '',
      title: ''
    };
    return _this;
  }

  _createClass(MorrisonAborts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //series
      document.getElementById("MorrisonAbortsrequestLoder").innerHTML = '<img style="width:2%"  src="' + baseurl + '/images/ajax_loader_gray_512.gif"></img>';
      var data = new FormData();
      data.append('job_status', 'Aborted'); //Utilita Installs Fuels (Total per day)

      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(baseurl + '/api/dashboardmorrison', data, {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + auth_token
        }
      }).then(function (res) {
        // let data = JSON.parse(res.data); 
        document.getElementById("MorrisonAbortsrequestLoder").innerHTML = '';
        var result = res.data;
        console.log(result.week_day);
        var options = {
          series: [{
            name: "Total",
            type: 'column',
            data: result.totals
          }, {
            name: "Target",
            data: result.target
          }],
          colors: ['#0d74bc', '#d8cb1b'],
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          plotOptions: {
            bar: {
              horizontal: false,
              dataLabels: {
                position: 'top'
              }
            }
          },
          dataLabels: {
            enabled: true,
            offsetX: 0,
            offsetY: -10,
            enabledOnSeries: [0],
            style: {
              fontSize: '12px',
              colors: ['#3fa0fc']
            }
          },
          stroke: {
            width: [0, 7, 5],
            curve: 'straight',
            dashArray: [0, 0, 5]
          },
          title: {
            text: 'MDS Aborts (Total per day)',
            align: 'left'
          },
          legend: {
            tooltipHoverFormatter: function tooltipHoverFormatter(val, opts) {
              return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '';
            }
          },
          markers: {
            size: 0,
            hover: {
              sizeOffset: 6
            }
          },
          xaxis: {
            categories: result.week_day,
            title: {
              text: 'Week'
            }
          },
          tooltip: {
            y: [{
              title: {
                formatter: function formatter(val) {
                  return val + " ";
                }
              }
            }, {
              title: {
                formatter: function formatter(val) {
                  return val + " ";
                }
              }
            }, {
              title: {
                formatter: function formatter(val) {
                  return val;
                }
              }
            }]
          },
          grid: {
            borderColor: '#f1f1f1'
          }
        };
        var abortedBar = new apexcharts__WEBPACK_IMPORTED_MODULE_4___default.a(document.querySelector("#MorrisonAborts"), options);
        abortedBar.render();
      });
    } //

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          match = _this$props.match,
          location = _this$props.location,
          history = _this$props.history;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "MorrisonAbortsrequestLoder",
        style: {
          'textAlign': 'center'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "MorrisonAborts"
      }));
    }
  }]);

  return MorrisonAborts;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MorrisonAborts);

/***/ }),

/***/ "./resources/js/Back-office/Pages/Dashboard/MorrisonInstallsFuels.js":
/*!***************************************************************************!*\
  !*** ./resources/js/Back-office/Pages/Dashboard/MorrisonInstallsFuels.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apexcharts */ "./node_modules/apexcharts/dist/apexcharts.common.js");
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_4__);
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







var _ref = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
    id = _ref.id,
    auth_token = _ref.auth_token;

var baseurl = window.location.origin;

var MorrisonInstallsFuels = /*#__PURE__*/function (_React$Component) {
  _inherits(MorrisonInstallsFuels, _React$Component);

  var _super = _createSuper(MorrisonInstallsFuels);

  function MorrisonInstallsFuels(props) {
    var _this;

    _classCallCheck(this, MorrisonInstallsFuels);

    _this = _super.call(this, props);
    _this.state = {
      start_date: '',
      end_date: '',
      title: ''
    };
    return _this;
  }

  _createClass(MorrisonInstallsFuels, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //series
      document.getElementById("MorrisonrequestLoder").innerHTML = '<img style="width:2%"  src="' + baseurl + '/images/ajax_loader_gray_512.gif"></img>';
      var data = new FormData();
      data.append('job_status', 'Completed'); //Utilita Installs Fuels (Total per day)

      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(baseurl + '/api/dashboardmorrison', data, {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + auth_token
        }
      }).then(function (res) {
        // let data = JSON.parse(res.data); 
        document.getElementById("MorrisonrequestLoder").innerHTML = '';
        var result = res.data;
        console.log(result.week_day);
        var options = {
          series: [{
            name: "Total",
            type: 'column',
            data: result.totals
          }, {
            name: "Target",
            data: result.target
          }],
          colors: ['#0d74bc', '#d8cb1b'],
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          plotOptions: {
            bar: {
              horizontal: false,
              dataLabels: {
                position: 'top'
              }
            }
          },
          dataLabels: {
            enabled: true,
            offsetX: 0,
            offsetY: -10,
            enabledOnSeries: [0],
            style: {
              fontSize: '12px',
              colors: ['#3fa0fc']
            }
          },
          stroke: {
            width: [0, 7, 5],
            curve: 'straight',
            dashArray: [0, 0, 5]
          },
          title: {
            text: 'MDS Installs Fuels (Total per day)',
            align: 'left'
          },
          legend: {
            tooltipHoverFormatter: function tooltipHoverFormatter(val, opts) {
              return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '';
            }
          },
          markers: {
            size: 0,
            hover: {
              sizeOffset: 6
            }
          },
          xaxis: {
            categories: result.week_day,
            title: {
              text: 'Week'
            }
          },
          tooltip: {
            y: [{
              title: {
                formatter: function formatter(val) {
                  return val + " ";
                }
              }
            }, {
              title: {
                formatter: function formatter(val) {
                  return val + " ";
                }
              }
            }, {
              title: {
                formatter: function formatter(val) {
                  return val;
                }
              }
            }]
          },
          grid: {
            borderColor: '#f1f1f1'
          }
        };
        var abortedBar = new apexcharts__WEBPACK_IMPORTED_MODULE_4___default.a(document.querySelector("#MorrisonInstallsFuels"), options);
        abortedBar.render();
      });
    } //

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          match = _this$props.match,
          location = _this$props.location,
          history = _this$props.history;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "MorrisonrequestLoder",
        style: {
          'textAlign': 'center'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "MorrisonInstallsFuels"
      }));
    }
  }]);

  return MorrisonInstallsFuels;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MorrisonInstallsFuels);

/***/ }),

/***/ "./resources/js/Back-office/Pages/Dashboard/UtilitaAborts.js":
/*!*******************************************************************!*\
  !*** ./resources/js/Back-office/Pages/Dashboard/UtilitaAborts.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apexcharts */ "./node_modules/apexcharts/dist/apexcharts.common.js");
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_4__);
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







var _ref = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
    id = _ref.id,
    auth_token = _ref.auth_token;

var baseurl = window.location.origin;

var UtilitaAborts = /*#__PURE__*/function (_React$Component) {
  _inherits(UtilitaAborts, _React$Component);

  var _super = _createSuper(UtilitaAborts);

  function UtilitaAborts(props) {
    var _this;

    _classCallCheck(this, UtilitaAborts);

    _this = _super.call(this, props);
    _this.state = {
      start_date: '',
      end_date: '',
      title: ''
    };
    return _this;
  }

  _createClass(UtilitaAborts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //series
      document.getElementById("UtilitaAbortsrequestLoder").innerHTML = '<img style="width:2%"  src="' + baseurl + '/images/ajax_loader_gray_512.gif"></img>';
      var data = new FormData();
      data.append('job_status', 'Aborted'); //Utilita Installs Fuels (Total per day)

      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(baseurl + '/api/dashboardutilita', data, {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + auth_token
        }
      }).then(function (res) {
        // let data = JSON.parse(res.data); 
        document.getElementById("UtilitaAbortsrequestLoder").innerHTML = '';
        var result = res.data;
        console.log(result.week_day);
        var options = {
          series: [{
            name: "Total",
            type: 'column',
            data: result.totals
          }, {
            name: "Target",
            data: result.target
          }],
          colors: ['#0d74bc', '#d8cb1b'],
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          plotOptions: {
            bar: {
              horizontal: false,
              dataLabels: {
                position: 'top'
              }
            }
          },
          dataLabels: {
            enabled: true,
            offsetX: 0,
            offsetY: -10,
            enabledOnSeries: [0],
            style: {
              fontSize: '12px',
              colors: ['#3fa0fc']
            }
          },
          stroke: {
            width: [0, 7, 5],
            curve: 'straight',
            dashArray: [0, 0, 5]
          },
          title: {
            text: 'Utilita Aborts (Total per day)',
            align: 'left'
          },
          legend: {
            tooltipHoverFormatter: function tooltipHoverFormatter(val, opts) {
              return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '';
            }
          },
          markers: {
            size: 0,
            hover: {
              sizeOffset: 6
            }
          },
          xaxis: {
            categories: result.week_day,
            title: {
              text: 'Week'
            }
          },
          tooltip: {
            y: [{
              title: {
                formatter: function formatter(val) {
                  return val + " ";
                }
              }
            }, {
              title: {
                formatter: function formatter(val) {
                  return val + " ";
                }
              }
            }, {
              title: {
                formatter: function formatter(val) {
                  return val;
                }
              }
            }]
          },
          grid: {
            borderColor: '#f1f1f1'
          }
        };
        var abortedBar = new apexcharts__WEBPACK_IMPORTED_MODULE_4___default.a(document.querySelector("#UtilitaAborts"), options);
        abortedBar.render();
      });
    } //

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          match = _this$props.match,
          location = _this$props.location,
          history = _this$props.history;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "UtilitaAbortsrequestLoder",
        style: {
          'textAlign': 'center'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "UtilitaAborts"
      }));
    }
  }]);

  return UtilitaAborts;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (UtilitaAborts);

/***/ }),

/***/ "./resources/js/Back-office/Pages/Dashboard/UtilitaInstallsFuels.js":
/*!**************************************************************************!*\
  !*** ./resources/js/Back-office/Pages/Dashboard/UtilitaInstallsFuels.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apexcharts */ "./node_modules/apexcharts/dist/apexcharts.common.js");
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_4__);
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







var _ref = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
    id = _ref.id,
    auth_token = _ref.auth_token;

var baseurl = window.location.origin;

var UtilitaInstallsFuels = /*#__PURE__*/function (_React$Component) {
  _inherits(UtilitaInstallsFuels, _React$Component);

  var _super = _createSuper(UtilitaInstallsFuels);

  function UtilitaInstallsFuels(props) {
    var _this;

    _classCallCheck(this, UtilitaInstallsFuels);

    _this = _super.call(this, props);
    _this.state = {
      start_date: '',
      end_date: '',
      title: ''
    };
    return _this;
  }

  _createClass(UtilitaInstallsFuels, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //series
      document.getElementById("requestLoder").innerHTML = '<img style="width:2%"  src="' + baseurl + '/images/ajax_loader_gray_512.gif"></img>';
      var data = new FormData();
      data.append('job_status', 'Completed'); //Utilita Installs Fuels (Total per day)

      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(baseurl + '/api/dashboardutilita', data, {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + auth_token
        }
      }).then(function (res) {
        // let data = JSON.parse(res.data); 
        document.getElementById("requestLoder").innerHTML = '';
        var result = res.data;
        var options = {
          series: [{
            name: "Total",
            type: 'column',
            data: result.totals
          }, {
            name: "Target",
            data: result.target
          }],
          colors: ['#0d74bc', '#d8cb1b'],
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          plotOptions: {
            bar: {
              horizontal: false,
              dataLabels: {
                position: 'top'
              }
            }
          },
          dataLabels: {
            enabled: true,
            offsetX: 0,
            offsetY: -10,
            enabledOnSeries: [0],
            style: {
              fontSize: '12px',
              colors: ['#3fa0fc']
            }
          },
          stroke: {
            width: [0, 7, 5],
            curve: 'straight',
            dashArray: [0, 0, 5]
          },
          title: {
            text: 'Utilita Jobs (Total per day)',
            align: 'left'
          },
          legend: {
            tooltipHoverFormatter: function tooltipHoverFormatter(val, opts) {
              return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '';
            }
          },
          markers: {
            size: 0,
            hover: {
              sizeOffset: 6
            }
          },
          xaxis: {
            categories: result.week_day,
            title: {
              text: 'Week'
            }
          },
          tooltip: {
            y: [{
              title: {
                formatter: function formatter(val) {
                  return val + " ";
                }
              }
            }, {
              title: {
                formatter: function formatter(val) {
                  return val + " ";
                }
              }
            }, {
              title: {
                formatter: function formatter(val) {
                  return val;
                }
              }
            }]
          },
          grid: {
            borderColor: '#f1f1f1'
          }
        };
        var abortedBar = new apexcharts__WEBPACK_IMPORTED_MODULE_4___default.a(document.querySelector("#UtilitaInstallsFuels"), options);
        abortedBar.render();
      });
    } //

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          match = _this$props.match,
          location = _this$props.location,
          history = _this$props.history;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "requestLoder",
        style: {
          'textAlign': 'center'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "UtilitaInstallsFuels"
      }));
    }
  }]);

  return UtilitaInstallsFuels;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (UtilitaInstallsFuels);

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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

/***/ })

}]);