(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[176],{

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../node-libs-browser/node_modules/process/browser.js */ "./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./resources/js/Back-office/Pages/SupplierList.js":
/*!********************************************************!*\
  !*** ./resources/js/Back-office/Pages/SupplierList.js ***!
  \********************************************************/
/*! exports provided: Suppliers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suppliers", function() { return Suppliers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
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







window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_5___default.a;
window.$ = jquery__WEBPACK_IMPORTED_MODULE_5___default.a;
global.jQuery = jquery__WEBPACK_IMPORTED_MODULE_5___default.a;
jquery__WEBPACK_IMPORTED_MODULE_5___default.a.DataTable = __webpack_require__(/*! datatables.net-bs */ "./node_modules/datatables.net-bs/js/dataTables.bootstrap.js");

__webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js"); //require('pdfmake/build/pdfmake.js');
//require('pdfmake/build/vfs_fonts.js');


__webpack_require__(/*! datatables.net-autofill */ "./node_modules/datatables.net-autofill/js/dataTables.autoFill.js");

__webpack_require__(/*! datatables.net-buttons-bs */ "./node_modules/datatables.net-buttons-bs/js/buttons.bootstrap.js");

__webpack_require__(/*! datatables.net-buttons/js/buttons.colVis.js */ "./node_modules/datatables.net-buttons/js/buttons.colVis.js");

__webpack_require__(/*! datatables.net-buttons/js/buttons.flash.js */ "./node_modules/datatables.net-buttons/js/buttons.flash.js");

__webpack_require__(/*! datatables.net-buttons/js/buttons.html5.js */ "./node_modules/datatables.net-buttons/js/buttons.html5.js");

__webpack_require__(/*! datatables.net-buttons/js/buttons.print.js */ "./node_modules/datatables.net-buttons/js/buttons.print.js");

__webpack_require__(/*! datatables.net-colreorder */ "./node_modules/datatables.net-colreorder/js/dataTables.colReorder.js");

__webpack_require__(/*! datatables.net-keytable */ "./node_modules/datatables.net-keytable/js/dataTables.keyTable.js");

__webpack_require__(/*! datatables.net-responsive-bs */ "./node_modules/datatables.net-responsive-bs/js/responsive.bootstrap.js");

__webpack_require__(/*! datatables.net-rowgroup */ "./node_modules/datatables.net-rowgroup/js/dataTables.rowGroup.js");

__webpack_require__(/*! datatables.net-rowreorder */ "./node_modules/datatables.net-rowreorder/js/dataTables.rowReorder.js");

__webpack_require__(/*! datatables.net-scroller */ "./node_modules/datatables.net-scroller/js/dataTables.scroller.js");

__webpack_require__(/*! datatables.net-select */ "./node_modules/datatables.net-select/js/dataTables.select.js");

__webpack_require__(/*! datatables.net-fixedcolumns */ "./node_modules/datatables.net-fixedcolumns/js/dataTables.fixedColumns.js");

__webpack_require__(/*! datatables.net-fixedheader */ "./node_modules/datatables.net-fixedheader/js/dataTables.fixedHeader.js");

var _ref = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).data : 'Null',
    id = _ref.id,
    auth_token = _ref.auth_token;

var oTable = "";

function atable() {
  var _$$DataTable;

  var tableResponsive = '#data-table-responsive';
  oTable = jquery__WEBPACK_IMPORTED_MODULE_5___default()(tableResponsive).DataTable((_$$DataTable = {
    "bStateSave": true,
    "processing": true,
    "bPaginate": true,
    "serverSide": true,
    "bProcessing": true,
    "iDisplayLength": 10,
    "bServerSide": true,
    "sAjaxSource": window.location.origin + '/api/mds/'
  }, _defineProperty(_$$DataTable, "bPaginate", true), _defineProperty(_$$DataTable, "fnServerParams", function fnServerParams(aoData) {
    var acolumns = this.fnSettings().aoColumns,
        columns = [];
    jquery__WEBPACK_IMPORTED_MODULE_5___default.a.each(acolumns, function (i, item) {
      columns.push(item.data);
    });
    aoData.push({
      name: 'columns',
      value: columns
    });

    if (jquery__WEBPACK_IMPORTED_MODULE_5___default()('input[name="file_id"]').val() != '') {
      aoData.push({
        name: 'file_id',
        value: jquery__WEBPACK_IMPORTED_MODULE_5___default()('input[name="file_id"]').val()
      });
    }
    /*  if($('#status').val()!='') {
          aoData.push({name: 'is_active', value: $('#status').val()});
      }
    */

  }), _defineProperty(_$$DataTable, "columns", [{
    "data": "sheets_id"
  }, {
    "data": "file_name"
  }, {
    "data": "month"
  }, {
    "data": "week_day"
  }, {
    "data": "week_date"
  }, {
    "data": "date"
  }, {
    "data": "start_time"
  }, {
    "data": "end_time"
  }, {
    "data": "time_difference"
  }, {
    "data": "work_master_sign_id"
  }, {
    "data": "name"
  }, {
    "data": "area"
  }, {
    "data": "geo_area"
  }, {
    "data": "report_group"
  }, {
    "data": "field_force"
  }, {
    "data": "leaver_flg"
  }, {
    "data": "week_summary"
  }, {
    "data": "num"
  }, {
    "data": "complete"
  }, {
    "data": "abort"
  }, {
    "data": "no_access_rate"
  }, {
    "data": "smart_book"
  }, {
    "data": "warrant_book"
  }, {
    "data": "traditional_book"
  }, {
    "data": "smart_complete"
  }, {
    "data": "warrant_complete"
  }, {
    "data": "traditional_complete"
  }, {
    "data": "smart_abort"
  }, {
    "data": "warrant_abort"
  }, {
    "data": "traditional_abort"
  }, {
    "data": "smart_no_access"
  }, {
    "data": "warrant_no_access"
  }, {
    "data": "traditional_no_access"
  }, {
    "data": "sf_df"
  }, {
    "data": "job_type"
  }, {
    "data": "sf_df_helper"
  }, {
    "data": "work_type"
  }, {
    "data": "job_id"
  }, {
    "data": "schedule_date"
  }, {
    "data": "id"
  }]), _defineProperty(_$$DataTable, "responsive", {
    responsive: {
      details: {
        display: jquery__WEBPACK_IMPORTED_MODULE_5___default.a.fn.dataTable.Responsive.display.childRowImmediate,
        type: ''
      }
    }
  }), _defineProperty(_$$DataTable, "order", [[0, "desc"]]), _defineProperty(_$$DataTable, "lengthMenu", [[10, 25, 50, 100], [10, 25, 50, 100]]), _defineProperty(_$$DataTable, "oLanguage", {
    "sLengthMenu": "_MENU_",
    "oPaginate": {
      "sNext": '<span aria-hidden="true">»</span>',
      "sPrevious": '<span aria-hidden="true">«</span>'
    } // sProcessing: "<img width='33px' src='"+BASE_URL+"assets/layouts/layout/img/ajax-loading.gif'>"

  }), _defineProperty(_$$DataTable, "fnInitComplete", function fnInitComplete() {//oTable.fnAdjustColumnSizing();
  }), _defineProperty(_$$DataTable, 'fnServerData', function fnServerData(sSource, aoData, fnCallback) {
    jquery__WEBPACK_IMPORTED_MODULE_5___default.a.ajax({
      'dataType': 'json',
      'type': 'GET',
      'url': sSource,
      'data': aoData,
      "iDisplayLength": 10,
      "bPaginate": true,
      'headers': {
        Authorization: "Bearer " + auth_token
      },
      'success': fnCallback
    });
  }), _defineProperty(_$$DataTable, "fnDrawCallback", function fnDrawCallback() {
    jquery__WEBPACK_IMPORTED_MODULE_5___default()('body').css('min-height', jquery__WEBPACK_IMPORTED_MODULE_5___default()('#data-table-responsive tr').length * 50 + 200);
    jquery__WEBPACK_IMPORTED_MODULE_5___default()(window).trigger('resize');
  }), _defineProperty(_$$DataTable, "columnDefs", [{
    "render": function render(data, type, row) {
      var str_buttons = '<button type="button" class="btn btn-info btn-sm" ><i style="margin:0px !important;" class="feather icon-edit"></i></button>';
      return [str_buttons].join('');
    },
    "targets": jquery__WEBPACK_IMPORTED_MODULE_5___default()('#data-table-responsive th#action').index(),
    "orderable": false,
    "searchable": false
  }, {
    "targets": 0,
    "orderable": false
  }]), _$$DataTable));
}

function handleChange() {
  setTimeout(function () {
    oTable.draw();
  }, 500);
}

var Suppliers = [{
  value: '1',
  label: 'Morrison Data services'
}, {
  value: '2',
  label: 'Utilita'
}];

var SupplierList = /*#__PURE__*/function (_React$Component) {
  _inherits(SupplierList, _React$Component);

  var _super = _createSuper(SupplierList);

  function SupplierList(props) {
    var _this;

    _classCallCheck(this, SupplierList);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(SupplierList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      atable();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
        md: "2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
        htmlFor: "firstName"
      }, "Supplier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onChange: function onChange() {
          handleChange();
        },
        className: "basic-single",
        classNamePrefix: "select",
        name: "file_id",
        options: Suppliers,
        placeholder: "Select Supplier"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
        ref: "tbl",
        striped: true,
        hover: true,
        responsive: true,
        className: "table table-condensed",
        id: "data-table-responsive"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "sheets_id"
      }, "sheet_id"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "file_name"
      }, "Supplier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "month"
      }, "Month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "week_day"
      }, "Week Day"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "week_date"
      }, "Week Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "date"
      }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "start_time"
      }, "Start Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "end_time"
      }, "End Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "time_difference"
      }, "Time Difference"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "work_master_sign_id"
      }, "Work master sign id"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "name"
      }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "area"
      }, "Area"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "geo_area"
      }, "Geo area"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "report_group"
      }, "Report group"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "field_force"
      }, "Field force"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "leaver_flg"
      }, "Leaver flg"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "week_summary"
      }, "Week summary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "num"
      }, "Num"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "complete"
      }, "Complete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "abort"
      }, "Abort"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "no_access_rate"
      }, "No access rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "smart_book"
      }, "Smart book"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "warrant_book"
      }, "Warrant book"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "traditional_book"
      }, "Traditional book"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "smart_complete"
      }, "Smart complete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "warrant_complete"
      }, "Warrant complete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "traditional_complete"
      }, "Traditional complete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "smart_abort"
      }, "Smart abort"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "warrant_abort"
      }, "Warrant abort"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "traditional_abort"
      }, "Traditional abort"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "smart_no_access"
      }, "Smart no access"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "warrant_no_access"
      }, "Warrant no access"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "traditional_no_access"
      }, "Traditional no access"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "sf_df"
      }, "sf df"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "job_type"
      }, "Job type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "sf_df_helper"
      }, "sf df helper"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "work_type"
      }, "Work type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "job_id"
      }, "Job id"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "schedule_date"
      }, "Date of action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "action"
      }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "sheets_id"
      }, "sheet_id"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "file_name"
      }, "Supplier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "month"
      }, "Month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "week_day"
      }, "Week Day"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "week_date"
      }, "Week Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "date"
      }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "start_time"
      }, "Start Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "end_time"
      }, "End Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "time_difference"
      }, "Time Difference"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "work_master_sign_id"
      }, "Work master sign id"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "name"
      }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "area"
      }, "Area"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "geo_area"
      }, "Geo area"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "report_group"
      }, "Report group"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "field_force"
      }, "Field force"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "leaver_flg"
      }, "Leaver flg"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "week_summary"
      }, "Week summary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "num"
      }, "Num"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "complete"
      }, "Complete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "abort"
      }, "Abort"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "no_access_rate"
      }, "No access rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "smart_book"
      }, "Smart book"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "warrant_book"
      }, "Warrant book"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "traditional_book"
      }, "Traditional book"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "smart_complete"
      }, "Smart complete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "warrant_complete"
      }, "Warrant complete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "traditional_complete"
      }, "Traditional complete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "smart_abort"
      }, "Smart abort"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "warrant_abort"
      }, "Warrant abort"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "traditional_abort"
      }, "Traditional abort"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "smart_no_access"
      }, "Smart no access"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "warrant_no_access"
      }, "Warrant no access"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "traditional_no_access"
      }, "Traditional no access"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "sf_df"
      }, "sf df"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "job_type"
      }, "Job type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "sf_df_helper"
      }, "sf df helper"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "work_type"
      }, "Work type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "job_id"
      }, "Job id"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "schedule_date"
      }, "Date of action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "action"
      }, "Action")))))))));
    }
  }]);

  return SupplierList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SupplierList);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);