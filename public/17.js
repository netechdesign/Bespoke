(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/node-libs-browser/node_modules/process/browser.js":
/*!************************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/process/browser.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./resources/js/Back-office/Pages/Data_import.js":
/*!*******************************************************!*\
  !*** ./resources/js/Back-office/Pages/Data_import.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap4-form-validation */ "./node_modules/react-bootstrap4-form-validation/lib/index.js");
/* harmony import */ var react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-text-mask */ "./node_modules/react-text-mask/dist/reactTextMask.js");
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_text_mask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _HttpFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../HttpFunctions */ "./resources/js/HttpFunctions.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pnotify/dist/es/PNotify */ "./node_modules/pnotify/dist/es/PNotify.js");
/* harmony import */ var pnotify_dist_es_PNotifyButtons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! pnotify/dist/es/PNotifyButtons */ "./node_modules/pnotify/dist/es/PNotifyButtons.js");
/* harmony import */ var pnotify_dist_es_PNotifyConfirm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! pnotify/dist/es/PNotifyConfirm */ "./node_modules/pnotify/dist/es/PNotifyConfirm.js");
/* harmony import */ var pnotify_dist_es_PNotifyCallbacks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pnotify/dist/es/PNotifyCallbacks */ "./node_modules/pnotify/dist/es/PNotifyCallbacks.js");
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














var Data_import = /*#__PURE__*/function (_React$Component) {
  _inherits(Data_import, _React$Component);

  var _super = _createSuper(Data_import);

  function Data_import() {
    var _this;

    _classCallCheck(this, Data_import);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      validated: false,
      validatedTooltip: false,
      supportedCheckbox: false,
      supportedRadio: false,
      supportedSelect: 0,
      supportedFile: 0,
      visible: true,
      formSubmitting: false,
      buttonName: 'Import',
      selectedFile: null,
      file_id: '',
      file_name: '',
      file_type: [{
        id: 1,
        name: 'Morrison Data services'
      }, {
        id: 2,
        name: 'Utilita'
      }, {
        id: 3,
        name: 'Vehical Mileage'
      }],
      progress: 0
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      _this.setState({
        progress: 0
      });

      _this.state.file_type.filter(function (val, index) {
        if (val.id == e.target.value) {
          _this.setState({
            file_name: val.name
          });
        }
      });

      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeHandler", function (event) {
      var file = event.target.files[0];

      if (_this.validateSize(event)) {
        // if return true allow to setState
        _this.setState({
          selectedFile: file
        });

        _this.setState({
          progress: 0
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "validateSize", function (event) {
      var file = event.target.files[0];
      var size = 3000000;
      var err = '';
      console.log(file.size);

      if (file.size > size) {
        err = file.type + 'is too large, please pick a smaller file\n';
        alert(err); //  toast.error(err);
      }

      return true;
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e, formData, inputs) {
      e.preventDefault();
      var baseurl = window.location.origin;

      _this.setState({
        formSubmitting: true
      });

      _this.setState({
        buttonName: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "spinner-grow spinner-grow-sm mr-1",
          role: "status"
        }), "sending")
      });

      var data = new FormData();
      data.append('file', _this.state.selectedFile);
      data.append('file_id', _this.state.file_id);
      data.append('file_name', _this.state.file_name);

      var _ref = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
          id = _ref.id,
          auth_token = _ref.auth_token;

      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(baseurl + '/api/mds', data, {
        headers: {
          'Authorization': 'Bearer ' + auth_token
        }
      }).then(function (res) {
        if (res.data.success) {
          // console.log(res.data.data);
          _this.setState({
            formSubmitting: false
          });

          _this.setState({
            buttonName: 'Import'
          });

          _this.setState({
            selectedFile: null
          });

          $('#avatar').val('');
          /*console.clear(); */
          //this.setState({progress:100});

          pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_8__["default"].success({
            title: 'Success',
            text: res.data.message,
            modules: {
              Desktop: {
                desktop: true
              }
            }
          }).on('click', function (e) {});
        } else {
          $('#avatar').val('');
          pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_8__["default"].error({
            title: "System Error",
            text: res.data.message
          });

          _this.setState({
            formSubmitting: false
          });

          _this.setState({
            buttonName: 'Import'
          });

          _this.setState({
            selectedFile: null
          });
        }
      })["catch"](function (err) {
        pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_8__["default"].error({
          title: "System Error",
          text: err
        });

        _this.setState({
          formSubmitting: false
        });

        _this.setState({
          buttonName: 'Import'
        });

        _this.setState({
          selectedFile: null
        });

        console.log(err);
      }); // successDesktopPNotify();
      //  this.props.history.push('/role');

      _this.setState({
        showModal: true
      });
    });

    return _this;
  }

  _createClass(Data_import, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          validated = _this$state.validated,
          validatedTooltip = _this$state.validatedTooltip;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "ADD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_2__["ValidationForm"], {
        onSubmit: this.handleSubmit,
        onErrorSubmit: this.handleErrorSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        htmlFor: "custom"
      }, "Select File Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "custom-controls-stacked radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_2__["Radio"].RadioGroup, {
        name: "file_id",
        required: true,
        valueSelected: this.state.file_id,
        inline: false,
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_2__["Radio"].RadioItem, {
        id: "radio4",
        label: "Morrison Data services",
        value: "1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_2__["Radio"].RadioItem, {
        id: "radio5",
        label: "Utilita",
        value: "2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_2__["Radio"].RadioItem, {
        id: "radio6",
        label: "Vehical Mileage",
        value: "3"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        htmlFor: "upload_avatar"
      }, "Upload File"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "custom-file"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_2__["FileInput"], {
        name: "avatar",
        id: "avatar",
        required: true,
        fileType: ["csv", "CSV", "xls", "xlsx"] // maxFileSize="10000 kb"
        ,
        errorMessage: {
          required: "Please upload a file",
          fileType: "Only .xls and csv file is allowed" // maxFileSize: "Max file size is 10000 kb"

        },
        onChange: this.onChangeHandler
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        sm: 12,
        className: "mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        disabled: this.state.formSubmitting,
        type: "submit"
      }, " ", this.state.buttonName)))))))));
    }
  }]);

  return Data_import;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Data_import);

/***/ }),

/***/ "./resources/js/HttpFunctions.js":
/*!***************************************!*\
  !*** ./resources/js/HttpFunctions.js ***!
  \***************************************/
/*! exports provided: baseurl, Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseurl", function() { return baseurl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./resources/js/config.js");


/**
 *  baseurl  get baseurl
 */

var baseurl = window.location.origin;
/**
 * Login api request
 * @param {*} user for send Credentials
 */

var Login = function Login(user) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseurl + '/api/user/login', {
    email: user.email,
    password: user.password,
    remember_me: user.remember
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

/***/ })

}]);