(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[131],{

/***/ "./resources/js/Demo/Extension/Invoice/InvoiceList.js":
/*!************************************************************!*\
  !*** ./resources/js/Demo/Extension/Invoice/InvoiceList.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var _store_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/constant */ "./resources/js/store/constant.js");
/* harmony import */ var _assets_images_user_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/images/user/avatar-1.jpg */ "./resources/js/assets/images/user/avatar-1.jpg");
/* harmony import */ var _assets_images_user_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_user_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_user_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/images/user/avatar-2.jpg */ "./resources/js/assets/images/user/avatar-2.jpg");
/* harmony import */ var _assets_images_user_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_user_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_user_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/images/user/avatar-3.jpg */ "./resources/js/assets/images/user/avatar-3.jpg");
/* harmony import */ var _assets_images_user_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_user_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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









var InvoiceList = /*#__PURE__*/function (_React$Component) {
  _inherits(InvoiceList, _React$Component);

  var _super = _createSuper(InvoiceList);

  function InvoiceList() {
    var _this;

    _classCallCheck(this, InvoiceList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activateCollapse: [1, 2, 3]
    });

    _defineProperty(_assertThisInitialized(_this), "collapseHandler", function (activeKey) {
      if (_this.state.activateCollapse.findIndex(function (item) {
        return item === activeKey;
      }) > -1) {
        _this.setState({
          activateCollapse: _this.state.activateCollapse.filter(function (item) {
            return item !== parseInt(activeKey);
          })
        });
      } else {
        _this.setState(function (prevState) {
          return {
            activateCollapse: [].concat(_toConsumableArray(prevState.activateCollapse), [parseInt(activeKey)])
          };
        });
      }
    });

    return _this;
  }

  _createClass(InvoiceList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var activateCollapse = this.state.activateCollapse;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 3
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "task-board-left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Search Box")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "form-control add_task_todo",
        placeholder: "Search here...",
        required: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group-append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-primary btn-icon btn-msg-send",
        type: "button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-search"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "task-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "task-right-header-status",
        onClick: function onClick() {
          return _this2.collapseHandler(1);
        },
        "aria-controls": "completed-status"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "f-w-400",
        "data-toggle": "collapse"
      }, "Completed Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-caret-down float-right m-t-5"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
        "in": activateCollapse.findIndex(function (item) {
          return item === 1;
        }) > -1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "taskboard-right-progress",
        id: "completed-status"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "m-t-10"
      }, "Highest priority"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ProgressBar"], {
        variant: "success",
        now: 80
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "m-t-10"
      }, "High priority"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ProgressBar"], {
        variant: "info",
        now: 70
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "m-t-10"
      }, "Normal priority"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ProgressBar"], {
        variant: "warning",
        now: 50
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "m-t-10"
      }, "Low priority"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ProgressBar"], {
        variant: "danger",
        now: 60
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "task-right-header-users",
        onClick: function onClick() {
          return _this2.collapseHandler(2);
        },
        "aria-controls": "assign-users"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "f-w-400",
        "data-toggle": "collapse"
      }, "Assign Users"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-caret-down float-right m-t-5"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
        "in": activateCollapse.findIndex(function (item) {
          return item === 2;
        }) > -1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-box assign-user taskboard-right-users",
        id: "assign-users"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media-left media-middle mr-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "media-object img-radius",
        src: _assets_images_user_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "Generic placeholder"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "live-status bg-danger"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Josephin Doe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Santa Ana,CA"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media-left media-middle mr-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "media-object img-radius",
        src: _assets_images_user_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: "Generic placeholder"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "live-status bg-success"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Josephin Doe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Huntingston, NJ"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media-left media-middle mr-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "media-object img-radius",
        src: _assets_images_user_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
        alt: "Generic placeholder"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "live-status bg-danger"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Josephin Doe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Willingstion, WA"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media-left media-middle mr-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "media-object img-radius",
        src: _assets_images_user_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: "Generic placeholder"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "live-status bg-success"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Josephin Doe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Illions, IL"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "task-right-header-revision",
        onClick: function onClick() {
          return _this2.collapseHandler(3);
        },
        "aria-controls": "revision"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "f-w-400",
        "data-toggle": "collapse"
      }, "Revision"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-caret-down float-right m-t-5"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
        "in": activateCollapse.findIndex(function (item) {
          return item === 3;
        }) > -1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "taskboard-right-revision user-box",
        id: "revision"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media-left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-outline-primary btn-icon",
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        role: "button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-cogs"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chat-header f-w-400 mb-1"
      }, "Drop the IE specific hacks for temporal inputs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "chat-header  text-muted"
      }, "4 minutes ago"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media-left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-outline-danger btn-icon",
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        role: "button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-share-alt"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chat-header f-w-400 mb-1"
      }, "Have Carousel ignore keyboard events"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "chat-header text-muted"
      }, "12 Dec,2015"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media-left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-outline-warning btn-icon",
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        role: "button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-font"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chat-header f-w-400 mb-1"
      }, "Add full font overrides for popovers and tooltips"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "chat-header text-muted"
      }, "2 month ago"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media-left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-outline-success btn-icon",
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        role: "button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-phone"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chat-header"
      }, "Responsive Asssignment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "chat-header  text-muted"
      }, "6 month ago"))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 9,
        className: "filter-bar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "navbar m-b-30 p-10"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "nav"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item f-text active"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link text-secondary",
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Filter: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "sr-only"
      }, "(current)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
        variant: "link",
        className: "text-secondary nav-link",
        id: "dropdown-basic"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fa fa-clock-o"
      }), " By Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Show all"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Today"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Yesterday"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "This week"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "This month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "This year")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
        variant: "link",
        className: "text-secondary nav-link",
        id: "bystatus"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fa fa-line-chart"
      }), " By Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Show all"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Open"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "On hold"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Resolved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Closed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Duplicate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Don't fix")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
        variant: "link",
        className: "text-secondary nav-link",
        id: "bypriority"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fa fa-list-ol"
      }), " By Priority"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Show all"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Highest"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "High"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Normal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Low"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav-item nav-grid f-view"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "m-r-15"
      }, "View Mode: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary btn-icon m-0 mr-1",
        "data-toggle": "tooltip",
        "data-placement": "top",
        title: "list view"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-list-ul"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary btn-icon m-0",
        "data-toggle": "tooltip",
        "data-placement": "top",
        title: "grid view"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-th-large"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "card-border-c-blue"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "text-secondary"
      }, "#24. Create UI design model "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "label label-primary float-right"
      }, " 28 January, 2015 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        className: "card-task"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
        className: "task-detail"
      }, "A collection of textile samples lay spread out on the table One morning, when Gregor Samsa woke from troubled."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
        className: "task-due"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, " Due : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        className: "label label-primary"
      }, "23 hours")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "task-list-table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "img-fluid img-radius mr-1",
        src: _assets_images_user_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: "1"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "img-fluid img-radius mr-1",
        src: _assets_images_user_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "1"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-plus"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "task-board"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
        className: "mr-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
        variant: "primary",
        size: "sm"
      }, "Normal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Highest priority"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "High priority"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "active"
      }, "Normal priority"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Low priority"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
        className: "mr-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
        variant: "primary",
        size: "sm"
      }, "Open"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Show all"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "active"
      }, "Open"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "On hold"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Resolved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Closed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Duplicate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Don't fix"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
        className: "mr-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
        variant: "primary",
        size: "sm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fa fa-bars"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Check in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "active"
      }, "Attach Screenshots"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Reassign"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Edit task"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Remove"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "card-border-c-green"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "text-secondary"
      }, "#24. Create UI design model "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "label label-success float-right"
      }, " 28 January, 2015 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        className: "card-task"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
        className: "task-detail"
      }, "A collection of textile samples lay spread out on the table One morning, when Gregor Samsa woke from troubled."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
        className: "task-due"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, " Due : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        className: "label label-success"
      }, "23 hours")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "task-list-table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "img-fluid img-radius mr-1",
        src: _assets_images_user_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: "1"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "img-fluid img-radius mr-1",
        src: _assets_images_user_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "1"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-plus"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "task-board"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
        className: "mr-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
        variant: "success",
        size: "sm"
      }, "Normal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Highest priority"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "High priority"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "active"
      }, "Normal priority"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Low priority"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
        className: "mr-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
        variant: "success",
        size: "sm"
      }, "Open"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Show all"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "active"
      }, "Open"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "On hold"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Resolved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Closed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Duplicate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Don't fix"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
        className: "mr-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
        variant: "success",
        size: "sm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fa fa-bars"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Check in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "active"
      }, "Attach Screenshots"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Reassign"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Edit task"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Remove"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "card-border-c-red"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "text-secondary"
      }, "#24. Create UI design model "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "label label-danger float-right"
      }, " 28 January, 2015 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        className: "card-task"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
        className: "task-detail"
      }, "A collection of textile samples lay spread out on the table One morning, when Gregor Samsa woke from troubled."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
        className: "task-due"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, " Due : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        className: "label label-danger"
      }, "23 hours")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "task-list-table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "img-fluid img-radius mr-1",
        src: _assets_images_user_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: "1"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "img-fluid img-radius mr-1",
        src: _assets_images_user_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "1"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-plus"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "task-board"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
        className: "mr-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
        variant: "danger",
        size: "sm"
      }, "Normal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Highest priority"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "High priority"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "active"
      }, "Normal priority"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Low priority"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
        className: "mr-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
        variant: "danger",
        size: "sm"
      }, "Open"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Show all"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "active"
      }, "Open"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "On hold"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Resolved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Closed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Duplicate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Don't fix"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
        className: "mr-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
        variant: "danger",
        size: "sm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fa fa-bars"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Check in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "active"
      }, "Attach Screenshots"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Reassign"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Edit task"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Remove"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "card-border-c-yellow"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "text-secondary"
      }, "#24. Create UI design model "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "label label-warning float-right"
      }, " 28 January, 2015 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        className: "card-task"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
        className: "task-detail"
      }, "A collection of textile samples lay spread out on the table One morning, when Gregor Samsa woke from troubled."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
        className: "task-due"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, " Due : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        className: "label label-warning"
      }, "23 hours")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "task-list-table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "img-fluid img-radius mr-1",
        src: _assets_images_user_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: "1"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "img-fluid img-radius mr-1",
        src: _assets_images_user_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "1"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-plus"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "task-board"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
        className: "mr-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
        variant: "warning",
        size: "sm"
      }, "Normal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Highest priority"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "High priority"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "active"
      }, "Normal priority"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Low priority"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
        className: "mr-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
        variant: "warning",
        size: "sm"
      }, "Open"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Show all"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "active"
      }, "Open"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "On hold"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Resolved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Closed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Duplicate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Don't fix"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
        className: "mr-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
        variant: "warning",
        size: "sm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fa fa-bars"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Check in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "active"
      }, "Attach Screenshots"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Reassign"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Edit task"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Remove"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "card-border-c-green"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "text-secondary"
      }, "#24. Create UI design model "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "label label-success float-right"
      }, " 28 January, 2015 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        className: "card-task"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
        className: "task-detail"
      }, "A collection of textile samples lay spread out on the table One morning, when Gregor Samsa woke from troubled."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
        className: "task-due"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, " Due : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        className: "label label-success"
      }, "23 hours")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "task-list-table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "img-fluid img-radius mr-1",
        src: _assets_images_user_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: "1"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "img-fluid img-radius mr-1",
        src: _assets_images_user_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "1"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-plus"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "task-board"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
        className: "mr-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
        variant: "success",
        size: "sm"
      }, "Normal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Highest priority"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "High priority"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "active"
      }, "Normal priority"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Low priority"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
        className: "mr-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
        variant: "success",
        size: "sm"
      }, "Open"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Show all"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "active"
      }, "Open"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "On hold"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Resolved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Closed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Duplicate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Don't fix"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
        className: "mr-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
        variant: "success",
        size: "sm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fa fa-bars"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Check in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "active"
      }, "Attach Screenshots"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Reassign"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Edit task"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Remove"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "card-border-c-blue"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "text-secondary"
      }, "#24. Create UI design model "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "label label-primary float-right"
      }, " 28 January, 2015 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        className: "card-task"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
        className: "task-detail"
      }, "A collection of textile samples lay spread out on the table One morning, when Gregor Samsa woke from troubled."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
        className: "task-due"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, " Due : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        className: "label label-primary"
      }, "23 hours")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "task-list-table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "img-fluid img-radius mr-1",
        src: _assets_images_user_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: "1"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "img-fluid img-radius mr-1",
        src: _assets_images_user_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "1"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-plus"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "task-board"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
        className: "mr-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
        variant: "primary",
        size: "sm"
      }, "Normal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Highest priority"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "High priority"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "active"
      }, "Normal priority"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Low priority"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
        className: "mr-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
        variant: "primary",
        size: "sm"
      }, "Open"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Show all"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "active"
      }, "Open"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "On hold"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Resolved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Closed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Duplicate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Don't fix"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
        className: "mr-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
        variant: "primary",
        size: "sm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fa fa-bars"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Check in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "active"
      }, "Attach Screenshots"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Reassign"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Edit task"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK
      }, "Remove")))))))))));
    }
  }]);

  return InvoiceList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (InvoiceList);

/***/ })

}]);