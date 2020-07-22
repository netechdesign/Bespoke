(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "./node_modules/react-loki/es/LokiStep.js":
/*!************************************************!*\
  !*** ./node_modules/react-loki/es/LokiStep.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var LokiStep = function LokiStep(_ref) {
  var currentStep = _ref.currentStep,
      stepsDone = _ref.stepsDone,
      totalSteps = _ref.totalSteps,
      step = _ref.step,
      isLokiComplete = _ref.isLokiComplete,
      goTo = _ref.goTo;

  var isActive = currentStep === step.index;
  var isComplete = currentStep > step.index;
  var isDisabled = !isActive && !isComplete;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    "li",
    {
      className: "LokiStep " + (isActive && "LokiStep-Active") + " " + ((isComplete || isLokiComplete) && "LokiStep-Complete")
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "a",
      {
        href: "#",
        onClick: function onClick(event) {
          event.preventDefault();

          if (isDisabled) {
            return;
          }

          goTo(step.index);
        },
        className: "LokiStep-Link " + (isDisabled && "disabled"),
        disabled: isDisabled
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "div",
        { className: "LokiStep-Icon" },
        step.icon || step.index
      )
    )
  );
};

LokiStep.propTypes =  true ? {
  currentStep: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  totalSteps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  step: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  isLokiComplete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
} : undefined;

/* harmony default export */ __webpack_exports__["default"] = (LokiStep);

/***/ }),

/***/ "./node_modules/react-loki/es/LokiStepContainer.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-loki/es/LokiStepContainer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var LokiStepContainer = function LokiStepContainer(_ref) {
    var children = _ref.children;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "ol",
        { className: "LokiSteps" },
        children
    );
};

/* harmony default export */ __webpack_exports__["default"] = (LokiStepContainer);

/***/ }),

/***/ "./node_modules/react-loki/es/index.js":
/*!*********************************************!*\
  !*** ./node_modules/react-loki/es/index.js ***!
  \*********************************************/
/*! exports provided: default, LokiStepContainer, LokiStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loki; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LokiStep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LokiStep */ "./node_modules/react-loki/es/LokiStep.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LokiStep", function() { return _LokiStep__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _LokiStepContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LokiStepContainer */ "./node_modules/react-loki/es/LokiStepContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LokiStepContainer", function() { return _LokiStepContainer__WEBPACK_IMPORTED_MODULE_3__["default"]; });

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Loki = (_temp2 = _class = function (_Component) {
  _inherits(Loki, _Component);

  function Loki() {
    var _temp, _this, _ret;

    _classCallCheck(this, Loki);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      currentStep: 1,
      stepsDone: [],
      complete: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Loki.prototype._back = function _back(data) {
    this.props.onBack && this.props.onBack(data);
    this.setState({ currentStep: this.state.currentStep - 1 });
  };

  Loki.prototype._next = function _next(data) {
    if (this.state.currentStep === this.props.steps.length) {
      this.props.onFinish(data);
      return this.setState({ complete: true });
    }

    this.props.onNext && this.props.onNext(data);
    this.setState({
      currentStep: this.state.currentStep + 1,
      stepsDone: this.state.stepsDone.concat([this.state.currentStep])
    });
  };

  Loki.prototype._lokiData = function _lokiData() {
    return {
      currentStep: this.state.currentStep,
      stepIndex: this.state.currentStep - 1,
      cantBack: this.state.currentStep === 1,
      isInFinalStep: this.state.currentStep === this.props.steps.length,
      backHandler: this._back.bind(this),
      nextHandler: this._next.bind(this)
    };
  };

  Loki.prototype._renderSteps = function _renderSteps() {
    var _this2 = this;

    if (!this.props.steps) {
      return;
    }

    if (this.props.renderSteps) {
      return this.props.renderSteps(this._lokiData());
    }

    var steps = this.props.steps.map(function (step, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LokiStep__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: index,
        stepsDone: _this2.state.stepsDone,
        currentStep: _this2.state.currentStep,
        totalSteps: _this2.props.steps.length,
        step: _extends({}, step, { index: index + 1 }),
        goTo: function goTo(newStep) {
          return _this2.setState({ currentStep: newStep });
        },
        isLokiComplete: _this2.state.complete
      });
    });

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _LokiStepContainer__WEBPACK_IMPORTED_MODULE_3__["default"],
      null,
      steps
    );
  };

  Loki.prototype._renderComponents = function _renderComponents() {
    if (!this.props.steps) {
      return;
    }

    if (this.props.renderComponents) {
      return this.props.renderComponents(this._lokiData());
    }

    var _lokiData2 = this._lokiData(),
        stepIndex = _lokiData2.stepIndex,
        cantBack = _lokiData2.cantBack,
        isInFinalStep = _lokiData2.isInFinalStep,
        backHandler = _lokiData2.backHandler,
        nextHandler = _lokiData2.nextHandler;

    var component = this.props.steps[stepIndex].component;

    if (this.props.noActions) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(component, {
        isComplete: this.state.complete,
        backLabel: this.props.backLabel,
        nextLabel: isInFinalStep ? this.props.finishLabel : this.props.nextLabel,
        cantBack: cantBack,
        isInFinalStep: isInFinalStep,
        onBack: backHandler,
        onNext: nextHandler
      });
    }

    return component;
  };

  Loki.prototype._renderActions = function _renderActions() {
    // If we don't want the buttons we do not render them
    if (!this.props.steps || this.props.noActions) {
      return;
    }

    var cantBack = this.state.currentStep === 1;
    var isInFinalStep = this.state.currentStep === this.props.steps.length;

    // If we want custom actions we render them
    if (this.props.renderActions) {
      return this.props.renderActions(this._lokiData());
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "div",
      { className: "Loki-Actions" },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "button",
        {
          type: "button",
          onClick: this._back.bind(this),
          disabled: cantBack || this.state.complete
        },
        this.props.backLabel
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "button",
        {
          type: "button",
          onClick: this._next.bind(this),
          disabled: this.state.complete
        },
        isInFinalStep ? this.props.finishLabel : this.props.nextLabel
      )
    );
  };

  Loki.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "div",
      { className: "Loki" },
      this._renderSteps(),
      this._renderComponents(),
      this._renderActions()
    );
  };

  return Loki;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _class.defaultProps = {
  backLabel: "Back",
  nextLabel: "Next",
  finishLabel: "Finish"
}, _temp2);


Loki.propTypes =  true ? {
  steps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  onFinish: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
} : undefined;



/***/ }),

/***/ "./resources/js/Demo/Forms/FormsWizard.js":
/*!************************************************!*\
  !*** ./resources/js/Demo/Forms/FormsWizard.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_loki__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loki */ "./node_modules/react-loki/es/index.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var _store_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/constant */ "./resources/js/store/constant.js");
/* harmony import */ var _wizard_loki_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wizard-loki/index */ "./resources/js/Demo/Forms/wizard-loki/index.js");
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








var Step1 = function Step1() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sw-container tab-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "step-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Title Step 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Sub title 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "@Title content 1!.. "), " Lorem Ipsum is simply dummy text of the printing ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "@Content content 1 "), " and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "mt-3"
  }, "Sub title 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "@Title content 2!.. "), " Lorem Ipsum is simply dummy text and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.")));
};

var Step2 = function Step2() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sw-container tab-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "step-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Title Step 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Sub title 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "@Title content 1!.. "), " Lorem Ipsum is simply dummy text of the printing ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "@Content content 1 "), " and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "mt-3"
  }, "Sub title 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "@Title content 2!.. "), " Lorem Ipsum is simply dummy text and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.")));
};

var Step3 = function Step3() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sw-container tab-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "step-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Title Step 3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Sub title 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "@Title content 1!.. "), " Lorem Ipsum is simply dummy text of the printing ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "@Content content 1 "), " and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "mt-3"
  }, "Sub title 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "@Title content 2!.. "), " Lorem Ipsum is simply dummy text and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.")));
};

var Step4 = function Step4() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sw-container tab-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "step-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Title Step 4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Sub title 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "@Title content 1!.. "), " Lorem Ipsum is simply dummy text of the printing ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "@Content content 1 "), " and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "mt-3"
  }, "Sub title 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "@Title content 2!.. "), " Lorem Ipsum is simply dummy text and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.")));
};

var customSteps = [{
  label: 'Step 1',
  caption: 'This is step description',
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-user"
  }),
  component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Step1, null)
}, {
  label: 'Step 2',
  caption: 'This is step content',
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-lock"
  }),
  component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Step2, null)
}, {
  label: 'Step 3',
  caption: 'This is step text',
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-envelope"
  }),
  component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Step3, null)
}, {
  label: 'Step 4',
  caption: 'This is step content',
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-lock"
  }),
  component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Step4, null)
}];

var FormsWizard = /*#__PURE__*/function (_React$Component) {
  _inherits(FormsWizard, _React$Component);

  var _super = _createSuper(FormsWizard);

  function FormsWizard() {
    var _this;

    _classCallCheck(this, FormsWizard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isFinished: false
    });

    _defineProperty(_assertThisInitialized(_this), "customRenderer", function (_ref) {
      var currentStep = _ref.currentStep,
          stepIndex = _ref.stepIndex,
          cantBack = _ref.cantBack,
          isInFinalStep = _ref.isInFinalStep,
          backHandler = _ref.backHandler,
          nextHandler = _ref.nextHandler;
      var i = 0;
      var steps = customSteps.map(function (step, index) {
        var isActive = currentStep === index + 1;
        var itemLinkClass = ['nav-item'];

        if (isActive) {
          itemLinkClass = [].concat(_toConsumableArray(itemLinkClass), ['active']);
          i = 1;
        } else if (i === 0 || _this.state.isFinished) {
          itemLinkClass = [].concat(_toConsumableArray(itemLinkClass), ['done']);
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: index,
          className: itemLinkClass.join(' ')
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: _store_constant__WEBPACK_IMPORTED_MODULE_4__["default"].BLANK_LINK,
          className: "nav-link disabled"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, step.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "m-0"
        }, step.caption)));
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "nav nav-tabs step-anchor"
      }, steps);
    });

    _defineProperty(_assertThisInitialized(_this), "customActions", function (_ref2) {
      var currentStep = _ref2.currentStep,
          stepIndex = _ref2.stepIndex,
          cantBack = _ref2.cantBack,
          isInFinalStep = _ref2.isInFinalStep,
          backHandler = _ref2.backHandler,
          nextHandler = _ref2.nextHandler;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "btn-toolbar sw-toolbar sw-toolbar-bottom justify-content-end"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], {
        className: "sw-btn-group",
        "aria-label": "Wizard Buttons"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary",
        onClick: backHandler,
        disabled: cantBack
      }, "Previous"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary",
        onClick: nextHandler,
        disabled: _this.state.isFinished && isInFinalStep
      }, isInFinalStep ? 'Finish' : 'Next')));
    });

    _defineProperty(_assertThisInitialized(_this), "customComponents", function (_ref3) {
      var currentStep = _ref3.currentStep;
      return customSteps.map(function (step, index) {
        if (currentStep === index + 1) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: index
          }, step.component);
        }

        return false;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onFinish", function () {
      _this.setState({
        isFinished: true
      });
    });

    return _this;
  }

  _createClass(FormsWizard, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Simple Wizard")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sw-main sw-theme-default"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loki__WEBPACK_IMPORTED_MODULE_2__["default"], {
        steps: customSteps,
        currentStep: 2,
        renderComponents: this.customComponents,
        renderSteps: this.customRenderer,
        renderActions: this.customActions,
        onFinish: this.onFinish
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Form Wizard")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wizard_loki_index__WEBPACK_IMPORTED_MODULE_5__["default"], null))))));
    }
  }]);

  return FormsWizard;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FormsWizard);

/***/ }),

/***/ "./resources/js/Demo/Forms/wizard-loki/NewsletterForm.js":
/*!***************************************************************!*\
  !*** ./resources/js/Demo/Forms/wizard-loki/NewsletterForm.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");



var NewsletterForm = function NewsletterForm(props) {
  var isSubmitting = props.isSubmitting,
      backLabel = props.backLabel,
      nextLabel = props.nextLabel,
      onBack = props.onBack,
      onNext = props.onNext,
      cantBack = props.cantBack;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "justify-content-md-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    md: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    className: "p-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox d-inline checkbox-fill"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "checkbox",
    name: "receiveNewsletter",
    id: "receiveNewsletter",
    defaultChecked: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    htmlFor: "receiveNewsletter",
    className: "cr"
  }, "Register for newsletter"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], {
    "aria-label": "Wizard Buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "secondary",
    onClick: onBack,
    disabled: isSubmitting || cantBack
  }, backLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "secondary",
    onClick: onNext,
    disabled: isSubmitting
  }, nextLabel)))));
};

/* harmony default export */ __webpack_exports__["default"] = (NewsletterForm);

/***/ }),

/***/ "./resources/js/Demo/Forms/wizard-loki/PasswordForm.js":
/*!*************************************************************!*\
  !*** ./resources/js/Demo/Forms/wizard-loki/PasswordForm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");



var PasswordForm = function PasswordForm(props) {
  var user = props.user,
      isSubmitting = props.isSubmitting,
      backLabel = props.backLabel,
      nextLabel = props.nextLabel,
      onBack = props.onBack,
      onNext = props.onNext,
      cantBack = props.cantBack;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "justify-content-md-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    md: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    className: "p-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    htmlFor: "password"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    type: "password",
    name: "password",
    id: "password",
    defaultValue: user.password
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    htmlFor: "passwordConfirmation"
  }, "Password Confirmation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    type: "password",
    name: "passwordConfirmation",
    id: "passwordConfirmation",
    defaultValue: user.passwordConfirmation
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], {
    "aria-label": "Wizard Buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "secondary",
    onClick: onBack,
    disabled: isSubmitting || cantBack
  }, backLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "secondary",
    onClick: onNext,
    disabled: isSubmitting
  }, nextLabel)))));
};

/* harmony default export */ __webpack_exports__["default"] = (PasswordForm);

/***/ }),

/***/ "./resources/js/Demo/Forms/wizard-loki/UserForm.js":
/*!*********************************************************!*\
  !*** ./resources/js/Demo/Forms/wizard-loki/UserForm.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");



var UserForm = function UserForm(props) {
  var user = props.user,
      isSubmitting = props.isSubmitting,
      backLabel = props.backLabel,
      nextLabel = props.nextLabel,
      onBack = props.onBack,
      onNext = props.onNext,
      cantBack = props.cantBack;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "justify-content-md-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    md: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    className: "p-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    htmlFor: "name"
  }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    type: "text",
    name: "userName",
    id: "userName",
    defaultValue: user.name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    htmlFor: "email"
  }, "E-mail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    type: "text",
    name: "email",
    id: "email",
    defaultValue: user.email
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], {
    "aria-label": "Wizard Buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "secondary",
    onClick: onBack,
    disabled: isSubmitting || cantBack
  }, backLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "secondary",
    onClick: onNext,
    disabled: isSubmitting
  }, nextLabel)))));
};

/* harmony default export */ __webpack_exports__["default"] = (UserForm);

/***/ }),

/***/ "./resources/js/Demo/Forms/wizard-loki/index.js":
/*!******************************************************!*\
  !*** ./resources/js/Demo/Forms/wizard-loki/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormWizard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loki__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loki */ "./node_modules/react-loki/es/index.js");
/* harmony import */ var _UserForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserForm */ "./resources/js/Demo/Forms/wizard-loki/UserForm.js");
/* harmony import */ var _PasswordForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PasswordForm */ "./resources/js/Demo/Forms/wizard-loki/PasswordForm.js");
/* harmony import */ var _NewsletterForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NewsletterForm */ "./resources/js/Demo/Forms/wizard-loki/NewsletterForm.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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







var FormWizard = /*#__PURE__*/function (_Component) {
  _inherits(FormWizard, _Component);

  var _super = _createSuper(FormWizard);

  function FormWizard() {
    var _this;

    _classCallCheck(this, FormWizard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      user: {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        receiveNewsletter: false
      }
    });

    return _this;
  }

  _createClass(FormWizard, [{
    key: "_mergeValues",
    value: function _mergeValues(values) {
      this.setState({
        user: _objectSpread(_objectSpread({}, this.state.user), values)
      });
    }
  }, {
    key: "_finishWizard",
    value: function _finishWizard() {
      console.log('Completed!');
    }
  }, {
    key: "render",
    value: function render() {
      var complexSteps = [{
        label: 'Step 1',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fa fa-user"
        }),
        component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
          user: this.state.user
        })
      }, {
        label: 'Step 2',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fa fa-lock"
        }),
        component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PasswordForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
          user: this.state.user
        })
      }, {
        label: 'Step 3',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fa fa-envelope"
        }),
        component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewsletterForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
          user: this.state.user
        })
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Demo"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loki__WEBPACK_IMPORTED_MODULE_1__["default"], {
        steps: complexSteps,
        onNext: this._mergeValues.bind(this),
        onBack: this._mergeValues.bind(this),
        onFinish: this._finishWizard.bind(this),
        noActions: true
      }));
    }
  }]);

  return FormWizard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

}]);