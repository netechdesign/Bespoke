(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[112],{

/***/ "./resources/js/Demo/UIElements/Advance/TaskBoard.js":
/*!***********************************************************!*\
  !*** ./resources/js/Demo/UIElements/Advance/TaskBoard.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_trello__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-trello */ "./node_modules/react-trello/dist/index.js");
/* harmony import */ var react_trello__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_trello__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var _data_task_board_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/task-board-base */ "./resources/js/Demo/UIElements/Advance/data/task-board-base.json");
var _data_task_board_base__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/task-board-base */ "./resources/js/Demo/UIElements/Advance/data/task-board-base.json", 1);
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







var TaskBoard = /*#__PURE__*/function (_React$Component) {
  _inherits(TaskBoard, _React$Component);

  var _super = _createSuper(TaskBoard);

  function TaskBoard() {
    var _this;

    _classCallCheck(this, TaskBoard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onLaneAdd", function () {
      console.log('Add Task');
    });

    return _this;
  }

  _createClass(TaskBoard, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_trello__WEBPACK_IMPORTED_MODULE_2___default.a, {
        data: _data_task_board_base__WEBPACK_IMPORTED_MODULE_4__,
        draggable: true,
        editable: true,
        canAddLanes: true,
        collapsibleLanes: true,
        className: "adv-task-board",
        addCardLink: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "mt-1"
        }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          size: "sm"
        }, "Add New Card")),
        onLaneAdd: this.onLaneAdd,
        addLaneTitle: "+ Add New Task"
      }));
    }
  }]);

  return TaskBoard;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TaskBoard);

/***/ }),

/***/ "./resources/js/Demo/UIElements/Advance/data/task-board-base.json":
/*!************************************************************************!*\
  !*** ./resources/js/Demo/UIElements/Advance/data/task-board-base.json ***!
  \************************************************************************/
/*! exports provided: lanes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"lanes\":[{\"id\":\"PLANNED\",\"title\":\"Planned Tasks\",\"label\":\"20/70\",\"style\":{\"width\":280},\"cards\":[{\"id\":\"Milk\",\"title\":\"Buy milk\",\"label\":\"15 mins\",\"description\":\"2 Gallons of milk at the Deli store\"},{\"id\":\"Plan2\",\"title\":\"Dispose Garbage\",\"label\":\"10 mins\",\"description\":\"Sort out recyclable and waste as needed\"},{\"id\":\"Plan3\",\"title\":\"Write Blog\",\"label\":\"30 mins\",\"description\":\"Can AI make memes?\"},{\"id\":\"Plan4\",\"title\":\"Pay Rent\",\"label\":\"5 mins\",\"description\":\"Transfer to bank account\"}]},{\"id\":\"WIP\",\"title\":\"Work In Progress\",\"label\":\"10/20\",\"style\":{\"width\":280},\"cards\":[{\"id\":\"Wip1\",\"title\":\"Clean House\",\"label\":\"30 mins\",\"description\":\"Soap wash and polish floor. Polish windows and doors. Scrap all broken glasses\"},{\"id\":\"Wip2\",\"title\":\"Practice Meditation\",\"label\":\"15 mins\",\"description\":\"Use Headspace app\"},{\"id\":\"Wip3\",\"title\":\"Maintain Daily Journal\",\"label\":\"15 mins\",\"description\":\"Use Spreadsheet for now\"}]},{\"id\":\"BLOCKED\",\"title\":\"Blocked\",\"label\":\"12/35\",\"style\":{\"width\":280},\"cards\":[{\"id\":\"Block1\",\"title\":\"IP Address\",\"label\":\"now\",\"description\":\"196.1.1.0\"}]},{\"id\":\"COMPLETED\",\"title\":\"Completed\",\"style\":{\"width\":280},\"label\":\"2/5\",\"cards\":[{\"id\":\"Completed1\",\"title\":\"Practice Meditation\",\"label\":\"15 mins\",\"description\":\"Use Headspace app\"},{\"id\":\"Completed2\",\"title\":\"Maintain Daily Journal\",\"label\":\"15 mins\",\"description\":\"Use Spreadsheet for now\"},{\"id\":\"Completed3\",\"title\":\"Go Trekking\",\"label\":\"300 mins\",\"description\":\"Completed 10km on cycle\"},{\"id\":\"Completed4\",\"title\":\"Go Jogging\",\"label\":\"300 mins\",\"description\":\"Completed 10km on cycle\"},{\"id\":\"Completed5\",\"title\":\"Go Cycling\",\"label\":\"300 mins\",\"description\":\"Completed 10km on cycle\"}]}]}");

/***/ })

}]);