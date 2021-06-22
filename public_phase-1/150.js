(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[150],{

/***/ "./resources/js/Demo/UIElements/Advance/Alert.js":
/*!*******************************************************!*\
  !*** ./resources/js/Demo/UIElements/Advance/Alert.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2-react-content */ "./node_modules/sweetalert2-react-content/dist/sweetalert2-react-content.umd.js");
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_3__);
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var AdvanceAlert = /*#__PURE__*/function (_React$Component) {
  _inherits(AdvanceAlert, _React$Component);

  var _super = _createSuper(AdvanceAlert);

  function AdvanceAlert() {
    var _this;

    _classCallCheck(this, AdvanceAlert);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isBasic: false,
      isSuccess: false,
      isWarning: false,
      isError: false,
      isInfo: false,
      isConfirm: false,
      isConfirmSuccess: false,
      isConfirmCancel: false
    });

    _defineProperty(_assertThisInitialized(_this), "sweetAlertHandler", function (alert) {
      var MySwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_3___default()(sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a);
      MySwal.fire({
        title: alert.title,
        text: alert.text,
        type: alert.type
      });
    });

    _defineProperty(_assertThisInitialized(_this), "sweetConfirmHandler", function () {
      var MySwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_3___default()(sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a);
      MySwal.fire({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this imaginary file!',
        type: 'warning',
        showCloseButton: true,
        showCancelButton: true
      }).then(function (willDelete) {
        if (willDelete.value) {
          return MySwal.fire('', 'Poof! Your imaginary file has been deleted!', 'success');
        } else {
          return MySwal.fire('', 'Your imaginary file is safe!', 'error');
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "sweetPromptHandler", function () {
      var MySwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_3___default()(sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a);
      MySwal.fire({
        text: 'Write something here:',
        input: 'text'
      }).then(function (result) {
        if (result.value) {
          return MySwal.fire('', "You Typed: ".concat(result.value));
        } else {
          return MySwal.fire('Invalid!', 'No message write', 'error');
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "sweetAjaxHandler", function () {
      var MySwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_3___default()(sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a);
      MySwal.fire({
        text: 'Submit your Github username',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        preConfirm: function preConfirm(login) {
          if (login) {
            return fetch("//api.github.com/users/".concat(login)).then(function (response) {
              if (!response.ok) {
                throw new Error(response.statusText);
              }

              return response.json();
            })["catch"](function (error) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.showValidationMessage("Request failed: ".concat(error));
            });
          } else {
            return MySwal.fire('Invalid!', 'No name enter', 'error');
          }
        },
        allowOutsideClick: function allowOutsideClick() {
          return !sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.isLoading();
        }
      }).then(function (result) {
        if (result.value && result.value.login !== undefined) {
          return MySwal.fire({
            title: "".concat(result.value.login, "'s avatar"),
            imageUrl: result.value.avatar_url
          });
        }
      });
    });

    return _this;
  }

  _createClass(AdvanceAlert, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, null, "Alerts")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: function onClick() {
          return _this2.sweetAlertHandler({
            title: '',
            type: '',
            text: 'Hello World!'
          });
        }
      }, "Basic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "success",
        onClick: function onClick() {
          return _this2.sweetAlertHandler({
            title: 'Good job!',
            type: 'success',
            text: 'You clicked the button!'
          });
        }
      }, "Success"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "danger",
        onClick: function onClick() {
          return _this2.sweetAlertHandler({
            title: 'Good job!',
            type: 'error',
            text: 'You clicked the button!'
          });
        }
      }, "Error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "warning",
        onClick: function onClick() {
          return _this2.sweetAlertHandler({
            title: 'Good job!',
            type: 'warning',
            text: 'You clicked the button!'
          });
        }
      }, "Warning"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "info",
        onClick: function onClick() {
          return _this2.sweetAlertHandler({
            title: 'Good job!',
            type: 'info',
            text: 'You clicked the button!'
          });
        }
      }, "Info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: this.sweetConfirmHandler
      }, "Confirm"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: this.sweetPromptHandler
      }, "Prompt"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: this.sweetAjaxHandler
      }, "Ajax"))))));
    }
  }]);

  return AdvanceAlert;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AdvanceAlert);

/***/ })

}]);