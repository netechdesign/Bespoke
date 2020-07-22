(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[130],{

/***/ "./resources/js/Demo/Extension/FullEventCalendar.js":
/*!**********************************************************!*\
  !*** ./resources/js/Demo/Extension/FullEventCalendar.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var fullcalendar_reactwrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fullcalendar-reactwrapper */ "./node_modules/fullcalendar-reactwrapper/lib/index.js");
/* harmony import */ var fullcalendar_reactwrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fullcalendar_reactwrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
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






var FullEventCalendar = /*#__PURE__*/function (_React$Component) {
  _inherits(FullEventCalendar, _React$Component);

  var _super = _createSuper(FullEventCalendar);

  function FullEventCalendar(props) {
    var _this;

    _classCallCheck(this, FullEventCalendar);

    _this = _super.call(this, props);
    _this.state = {
      today: '2018-08-12',
      events: [{
        title: 'All Day Event',
        start: '2018-08-01',
        borderColor: '#04a9f5',
        backgroundColor: '#04a9f5',
        textColor: '#fff'
      }, {
        title: 'Long Event',
        start: '2018-08-07',
        end: '2018-08-10',
        borderColor: '#f44236',
        backgroundColor: '#f44236',
        textColor: '#fff'
      }, {
        id: 999,
        title: 'Repeating Event',
        start: '2018-08-09T16:00:00',
        borderColor: '#f4c22b',
        backgroundColor: '#f4c22b',
        textColor: '#fff'
      }, {
        id: 999,
        title: 'Repeating Event',
        start: '2018-08-16T16:00:00',
        borderColor: '#3ebfea',
        backgroundColor: '#3ebfea',
        textColor: '#fff'
      }, {
        title: 'Conference',
        start: '2018-08-11',
        end: '2018-08-13',
        borderColor: '#1de9b6',
        backgroundColor: '#1de9b6',
        textColor: '#fff'
      }, {
        title: 'Meeting',
        start: '2018-08-12T10:30:00',
        end: '2018-08-12T12:30:00'
      }, {
        title: 'Lunch',
        start: '2018-08-12T12:00:00',
        borderColor: '#f44236',
        backgroundColor: '#f44236',
        textColor: '#fff'
      }, {
        title: 'Happy Hour',
        start: '2018-08-12T17:30:00',
        borderColor: '#a389d4',
        backgroundColor: '#a389d4',
        textColor: '#fff'
      }, {
        title: 'Birthday Party',
        start: '2018-08-13T07:00:00'
      }, {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2018-08-28',
        borderColor: '#a389d4',
        backgroundColor: '#a389d4',
        textColor: '#fff'
      }]
    };
    return _this;
  }

  _createClass(FullEventCalendar, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Full Calendar")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        className: "calendar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fullcalendar_reactwrapper__WEBPACK_IMPORTED_MODULE_2___default.a, {
        id: "datta-calendar",
        className: "calendar",
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,basicWeek,basicDay'
        },
        defaultDate: this.state.today,
        navLinks: true,
        editable: true,
        eventLimit: true,
        events: this.state.events
      }))))));
    }
  }]);

  return FullEventCalendar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FullEventCalendar);

/***/ })

}]);