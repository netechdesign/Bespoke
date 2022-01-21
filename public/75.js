(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

/***/ "./resources/js/Back-office/Pages/Reports/UtilitaInstalls.js":
/*!*******************************************************************!*\
  !*** ./resources/js/Back-office/Pages/Reports/UtilitaInstalls.js ***!
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
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var _ref = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
    id = _ref.id,
    auth_token = _ref.auth_token;

var baseurl = window.location.origin;

var UtilitaInstalls = /*#__PURE__*/function (_React$Component) {
  _inherits(UtilitaInstalls, _React$Component);

  var _super = _createSuper(UtilitaInstalls);

  function UtilitaInstalls(props) {
    var _this;

    _classCallCheck(this, UtilitaInstalls);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "graphload", function () {
      _this.setState({
        titleText: _this.props.match.params.id
      });

      document.getElementById("requestLoder").innerHTML = '<img style="width:2%"  src="' + window.location.origin + '/images/ajax_loader_gray_512.gif"></img>';
      document.getElementById("htmlcontaint").innerHTML = '';
      document.getElementById("grandTotal").innerHTML = '';

      var _ref2 = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
          id = _ref2.id,
          auth_token = _ref2.auth_token;

      var baseurl = window.location.origin;
      var data = new FormData();
      data.append('file_id', '2');

      if (_this.props.match.params.id) {
        data.append('report_for', _this.props.match.params.id);
      } else {
        data.append('report_for', 'day');
      }

      if (_this.props.match.params.status) {
        data.append('job_status', _this.props.match.params.status);
      } else {
        data.append('job_status', 'Completed');
      }

      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(baseurl + '/api/utilita/install', data, {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + auth_token
        }
      }).then(function (res) {
        if (res.data.success) {
          var results = res.data.complate;
          var target_data = res.data.target_data;
          var grand_total = 0;
          var grand_target = 0;

          var self = _assertThisInitialized(_this);

          results.map(function (item, indx) {
            var engineer_leader = Object.keys(item);
            self.setState({
              teamLeader: self.state.teamLeader.concat(engineer_leader)
            });
          }); //start

          results.map(function (item, indx) {
            var engineer_leader = Object.keys(item);
            var endineer_data = item[engineer_leader];
            var categories = endineer_data['engineer'];
            var series_data = endineer_data['series'];
            var options = {
              series: series_data,
              chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                toolbar: {
                  show: false
                },
                events: {
                  mounted: function mounted(chartContext, config) {
                    setTimeout(function () {
                      addAnnotations(config);
                    });
                  }
                }
              },
              plotOptions: {
                bar: {
                  horizontal: true
                }
              },
              dataLabels: {
                enabled: true
              },
              stroke: {
                width: 1,
                colors: ['#fff']
              },
              title: {
                text: 'Team Leader - ' + engineer_leader,
                offsetX: 0,
                offsetY: 30,
                style: {
                  fontSize: '11px',
                  fontWeight: 'normal',
                  colors: ['#3fa0fc']
                }
              },
              xaxis: {
                categories: categories,
                labels: {
                  show: false
                }
              },
              yaxis: {
                title: {
                  text: ''
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
                position: 'bottom',
                horizontalAlign: 'right',
                offsetX: 40,
                show: false
              }
            }; // condition for year  target

            if (self.props.match.params.id == 'weektodate' || self.props.match.params.id == 'day') {
              options.annotations = {
                xaxis: [{
                  x: target_data,
                  borderColor: "#d8cb1b",
                  borderWidth: 1,
                  strokeDashArray: 0,
                  offsetX: 0,
                  offsetY: 0,
                  label: {
                    offsetY: -10,
                    borderColor: "#d8cb1b",
                    style: {
                      color: "#fff",
                      background: "#d8cb1b"
                    },
                    orientation: "horizontal",
                    text: "Target " + target_data
                  }
                }]
              };
            }

            console.log(options);

            var addAnnotations = function addAnnotations(config) {
              var seriesTotals = config.globals.stackedSeriesTotals;
              var isHorizontal = options.plotOptions.bar.horizontal; //  chart.clearAnnotations();

              try {
                categories.forEach(function (category, index) {
                  chart.addPointAnnotation({
                    y: isHorizontal ? calcHorizontalY(config, index) : seriesTotals[index],
                    x: isHorizontal ? 0 : category,
                    label: {
                      text: "".concat(seriesTotals[index]),
                      offsetY: 20,
                      style: {
                        color: "#fff",
                        background: "#d8cb1b"
                      }
                    }
                  }, false);

                  if (isHorizontal) {//   adjustPointAnnotationXCoord(config, index);
                  }
                });
              } catch (error) {
                console.log("Add point annotation error: ".concat(error.message));
              }
            };

            var calcHorizontalY = function calcHorizontalY(config, index) {
              var catLength = categories.length;
              var yRange = config.globals.yRange[0];
              var minY = config.globals.minY;
              var halfBarHeight = yRange / catLength / 2;
              return minY + halfBarHeight + 2 * halfBarHeight * (catLength - 1 - index);
            };

            var adjustPointAnnotationXCoord = function adjustPointAnnotationXCoord(config, index) {
              var gridWidth = config.globals.gridWidth;
              var seriesTotal = config.globals.stackedSeriesTotals[index];
              var minY = config.globals.minY;
              var yRange = config.globals.yRange[0];
              var xOffset = gridWidth * (seriesTotal + Math.abs(minY)) / yRange;
              var circle = document.querySelector(".apexcharts-point-annotations circle:nth-of-type(".concat(index + 1, ")"));
              var labelField = document.querySelector(".apexcharts-point-annotations rect:nth-of-type(".concat(index + 1));
              var labelFieldXCoord = parseFloat(labelField.getAttribute("x"));
              var text = document.querySelector(".apexcharts-point-annotations text:nth-of-type(".concat(index + 1));
              labelField.setAttribute("x", gridWidth);
              text.setAttribute("x", gridWidth);
              circle.setAttribute("cx", gridWidth);
            };

            var chart = new apexcharts__WEBPACK_IMPORTED_MODULE_4___default.a(document.querySelector("#" + engineer_leader), options);
            chart.render(); //target_data

            var team_leader_total = 0;
            var team_leader_target_total = 0;
            series_data.map(function (vl, indx) {
              if (vl['data']) {
                vl['data'].map(function (v, indx) {
                  team_leader_total = parseFloat(team_leader_total) + parseFloat(v);
                  team_leader_target_total = parseFloat(team_leader_target_total) + parseFloat(target_data);
                });
              }
            });
            grand_total = parseFloat(grand_total) + parseFloat(team_leader_total);
            grand_target = parseFloat(grand_target) + parseFloat(team_leader_target_total);
            var total_text = '<div style="text-align: left !important;"><b style="margin: 0px 10px 0px 145px;color: #0e74bc;">Total = <span style="color: #05bb7b;">' + team_leader_total + '</span></b>';
            total_text += '<b style="margin: 0px 10px 0px 56px;color: #0e74bc;">Target= <span style="color: #05bb7b;">' + team_leader_target_total + '</span></b></div>';
            $("#" + engineer_leader).append(total_text); //end 
          });
          document.getElementById("requestLoder").innerHTML = '';
          var grandTotal = '<b style="margin: 0px 10px 0px 0px;color: #0e74bc;">Total = <span style="color: #05bb7b;">' + grand_total + '</span></b>';
          grandTotal += '<b style="margin: 0px 10px 0px 56px;color: #0e74bc;">Target= <span style="color: #05bb7b;">' + grand_target + '</span></b>';
          document.getElementById("grandTotal").innerHTML = grandTotal;
        } else {
          document.getElementById("requestLoder").innerHTML = '';
          document.getElementById("htmlcontaint").innerHTML = '<b>' + res.data.message + '</b>';
        }
      });
      document.getElementById("monthtodateHtml").innerHTML = '';

      if (_this.props.match.params.id == 'monthtodate') {
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(baseurl + '/api/utilita/installtable', data, {
          headers: {
            'Authorization': 'Bearer ' + auth_token
          }
        }).then(function (res) {
          document.getElementById("monthtodateHtml").innerHTML = res.data;
        });
      }
    });

    _this.state = {
      titleText: '',
      total: 0,
      teamLeader: []
    };
    return _this;
  }

  _createClass(UtilitaInstalls, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log('tag', 'componentWillMount');
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.match.params.id != prevProps.match.params.id) {
        this.graphload();
      }

      document.getElementById("fromto").innerHTML = ' ';

      if (this.props.match.params.id == 'yeartodate') {
        var d = new Date();
        var monthName = d.toLocaleString("default", {
          month: "long"
        });
        document.getElementById("fromto").innerHTML = 'From January To ' + monthName;
      }

      if (this.props.match.params.id == 'weektodate') {
        document.getElementById("fromto").innerHTML = '(Job)';
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('tag', 'componentDidMount');
      this.graphload();
    } //

  }, {
    key: "render",
    value: //
    function render() {
      var _this$props = this.props,
          match = _this$props.match,
          location = _this$props.location,
          history = _this$props.history;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        id: "grandTotal"
      }), "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        id: "fromto",
        style: {
          'color': 'black',
          'position': 'absolute',
          'top': '-37px',
          'left': '250px'
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 12,
        xl: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "requestLoder",
        style: {
          'textAlign': 'center'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "htmlcontaint",
        style: {
          'textAlign': 'center'
        }
      }, this.state.teamLeader.map(function (item, indx) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            'borderBottom': '2px solid #f1f1f1'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: indx,
          id: item
        }));
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "monthtodateHtml",
        style: {
          'textAlign': 'center'
        }
      }))))));
    }
  }]);

  return UtilitaInstalls;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (UtilitaInstalls);

/***/ })

}]);