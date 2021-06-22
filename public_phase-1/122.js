(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[122],{

/***/ "./resources/js/Demo/AppPages/Task/TaskList.js":
/*!*****************************************************!*\
  !*** ./resources/js/Demo/AppPages/Task/TaskList.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var _assets_images_user_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/images/user/avatar-1.jpg */ "./resources/js/assets/images/user/avatar-1.jpg");
/* harmony import */ var _assets_images_user_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_user_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_user_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/images/user/avatar-2.jpg */ "./resources/js/assets/images/user/avatar-2.jpg");
/* harmony import */ var _assets_images_user_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_user_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_user_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/images/user/avatar-3.jpg */ "./resources/js/assets/images/user/avatar-3.jpg");
/* harmony import */ var _assets_images_user_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_user_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
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








window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_6___default.a;
window.$ = jquery__WEBPACK_IMPORTED_MODULE_6___default.a;
global.jQuery = jquery__WEBPACK_IMPORTED_MODULE_6___default.a;
jquery__WEBPACK_IMPORTED_MODULE_6___default.a.DataTable = __webpack_require__(/*! datatables.net-bs */ "./node_modules/datatables.net-bs/js/dataTables.bootstrap.js");

__webpack_require__(/*! datatables.net-responsive-bs */ "./node_modules/datatables.net-responsive-bs/js/responsive.bootstrap.js");

var tasks = [{
  "id": "12",
  "task": "Add Proper Cursor In Sortable Page",
  "date": "2017-08-01",
  "status": "opt5",
  "images": [_assets_images_user_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a, _assets_images_user_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_4___default.a]
}, {
  "id": "56",
  "task": "Checkbox Design issue",
  "date": "2017-08-05",
  "status": "opt3",
  "images": [_assets_images_user_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a]
}, {
  "id": "78",
  "task": "Create UI design model",
  "date": "2017-08-12",
  "status": "opt2",
  "images": [_assets_images_user_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _assets_images_user_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a]
}, {
  "id": "20",
  "task": "Create UI design model",
  "date": "2017-08-12",
  "status": "opt2",
  "images": [_assets_images_user_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a, _assets_images_user_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _assets_images_user_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a]
}, {
  "id": "35",
  "task": "Edit the draft for the icons",
  "date": "2017-08-18",
  "status": "opt4",
  "images": [_assets_images_user_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a, _assets_images_user_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a]
}];

function atable() {
  var tableZero = '#data-table-zero';
  jquery__WEBPACK_IMPORTED_MODULE_6___default.a.fn.dataTable.ext.errMode = 'throw';
  jquery__WEBPACK_IMPORTED_MODULE_6___default()(tableZero).DataTable({
    data: tasks,
    order: [[0, "desc"]],
    columns: [{
      "data": "id",
      render: function render(data, type, row) {
        return '#' + data;
      }
    }, {
      "data": "task",
      render: function render(data, type, row) {
        return data;
      }
    }, {
      "data": "date",
      render: function render(data, type, row) {
        return "<div class=\"form-group form-primary mb-0\">\n                            <input type=\"date\" class=\"form-control\" value=\"" + data + "\" />\n                            <span class=\"form-bar\"/>\n                        </div>";
      }
    }, {
      "data": "status",
      render: function render(data, type, row) {
        return "<div class=\"form-group form-primary mb-0\">\n                              <select name=\"select\" class=\"form-control form-control-sm\">\n                                " + getOption('opt1', data, 'Open') + "\n                                " + getOption('opt2', data, 'Resolved') + "\n                                " + getOption('opt3', data, 'Invalid') + "\n                                " + getOption('opt4', data, 'On hold') + "\n                                " + getOption('opt5', data, 'Close') + "\n                              </select>\n                              <span class=\"form-bar\"/>\n                            </div>";
      }
    }, {
      "data": "images",
      render: function render(data, type, row) {
        var html = "";

        for (var i = 0; i < data.length; i++) {
          html += "<a href=\"javascript:;\">\n                                    <img class=\"img-fluid img-radius m-r-5\" src=\"" + data[i] + "\" alt=\"Task List\">\n                                </a>";
        }

        html += "<a href=\"javascript:;\"><i class=\"fa fa-plus f-w-600 m-l-5\"/></a>";
        return html;
      }
    }, {
      "data": "id",
      render: function render(data, type, row) {
        return "<a href=\"javascript:\" class=\"btn btn-icon btn-rounded btn-outline-primary\"><span class=\"fa fa-book\"/></a>\n                            <a href=\"javascript:\" class=\"btn btn-icon btn-rounded btn-outline-warning\"><span class=\"fa fa-edit\"/></a>\n                            <a href=\"javascript:\" class=\"btn btn-icon btn-rounded btn-outline-danger\"><span class=\"fa fa-trash\"/></a>";
      }
    }],
    responsive: {
      responsive: {
        details: {
          display: jquery__WEBPACK_IMPORTED_MODULE_6___default.a.fn.dataTable.Responsive.display.childRowImmediate,
          type: ''
        }
      }
    }
  });

  function getOption(value, selected, label) {
    if (value === selected) {
      return "<option value=\"" + value + "\" selected>" + label + "</option>";
    } else {
      return "<option value=\"" + value + "\">" + label + "</option>";
    }
  }
}

var TaskList = /*#__PURE__*/function (_React$Component) {
  _inherits(TaskList, _React$Component);

  var _super = _createSuper(TaskList);

  function TaskList() {
    var _this;

    _classCallCheck(this, TaskList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      selectedTask: []
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      var clickedValue = e.target.value;

      if (e.target.checked) {
        _this.setState(function (prevState) {
          return {
            selectedTask: [].concat(_toConsumableArray(prevState.selectedTask), [parseInt(clickedValue)])
          };
        });
      } else {
        _this.setState(function (prevState) {
          return {
            selectedTask: _this.state.selectedTask.filter(function (item) {
              return item !== parseInt(clickedValue);
            })
          };
        });
      }
    });

    return _this;
  }

  _createClass(TaskList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      atable();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var selectedTask = this.state.selectedTask;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Task List")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        className: "task-data"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
        ref: "tbl",
        striped: true,
        hover: true,
        responsive: true,
        id: "data-table-zero"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Task List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Last Commit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Assigned User"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Task List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Last Commit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Assigned User"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Action")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "To Do List")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "form-control add_task_todo",
        placeholder: "Create your task list"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group-append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-primary btn-icon btn-msg-send",
        type: "button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-plus"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "new-task"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "to-do-list mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "checkbox-fade fade-in-primary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: selectedTask.findIndex(function (item) {
          return item === 1;
        }) > -1 ? 'check-task done-task' : 'check-task'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        value: 1,
        defaultChecked: selectedTask.findIndex(function (item) {
          return item === 1;
        }) > -1,
        onClick: function onClick(e) {
          return _this2.handleClick(e);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "cr mr-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "cr-icon fa fa-check txt-primary"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "to-do-list mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "checkbox-fade fade-in-primary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: selectedTask.findIndex(function (item) {
          return item === 2;
        }) > -1 ? 'check-task done-task' : 'check-task'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        value: 2,
        defaultChecked: selectedTask.findIndex(function (item) {
          return item === 2;
        }) > -1,
        onClick: function onClick(e) {
          return _this2.handleClick(e);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "cr mr-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "cr-icon fa fa-check txt-primary"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "scrambled it to make a type specimen book. It has survived not only five centuries")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "to-do-list mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "checkbox-fade fade-in-primary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: selectedTask.findIndex(function (item) {
          return item === 3;
        }) > -1 ? 'check-task done-task' : 'check-task'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        value: 3,
        defaultChecked: selectedTask.findIndex(function (item) {
          return item === 3;
        }) > -1,
        onClick: function onClick(e) {
          return _this2.handleClick(e);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "cr mr-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "cr-icon fa fa-check txt-primary"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "It is a long established fact that a reader will be distracted by the readable content of a page")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "to-do-list mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "checkbox-fade fade-in-primary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: selectedTask.findIndex(function (item) {
          return item === 4;
        }) > -1 ? 'check-task done-task' : 'check-task'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        value: 4,
        defaultChecked: selectedTask.findIndex(function (item) {
          return item === 4;
        }) > -1,
        onClick: function onClick(e) {
          return _this2.handleClick(e);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "cr mr-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "cr-icon fa fa-check txt-primary"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "to-do-list mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "checkbox-fade fade-in-primary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: selectedTask.findIndex(function (item) {
          return item === 5;
        }) > -1 ? 'check-task done-task' : 'check-task'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        value: 5,
        defaultChecked: selectedTask.findIndex(function (item) {
          return item === 5;
        }) > -1,
        onClick: function onClick(e) {
          return _this2.handleClick(e);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "cr mr-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "cr-icon fa fa-check txt-primary"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "The standard chunk of Lorem Ipsum used since the 1500s is reproduced"))))))))));
    }
  }]);

  return TaskList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TaskList);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);