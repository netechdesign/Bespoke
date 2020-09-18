(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

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

/***/ "./resources/js/Back-Office/Role/index.js":
/*!************************************************!*\
  !*** ./resources/js/Back-Office/Role/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pnotify/dist/es/PNotify */ "./node_modules/pnotify/dist/es/PNotify.js");
/* harmony import */ var _HttpFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../HttpFunctions */ "./resources/js/HttpFunctions.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
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








window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_6___default.a;
window.$ = jquery__WEBPACK_IMPORTED_MODULE_6___default.a;
global.jQuery = jquery__WEBPACK_IMPORTED_MODULE_6___default.a;
jquery__WEBPACK_IMPORTED_MODULE_6___default.a.DataTable = __webpack_require__(/*! datatables.net-bs */ "./node_modules/datatables.net-bs/js/dataTables.bootstrap.js");

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

var _ref = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
    id = _ref.id,
    auth_token = _ref.auth_token;

var oTable = "";

function atable() {
  var _$$DataTable;

  var tableResponsive = '#data-table-responsive';
  oTable = jquery__WEBPACK_IMPORTED_MODULE_6___default()(tableResponsive).DataTable((_$$DataTable = {
    "bStateSave": true,
    "processing": true,
    "bPaginate": true,
    "serverSide": true,
    "bProcessing": true,
    "iDisplayLength": 10,
    "bServerSide": true,
    "sAjaxSource": window.location.origin + '/api/role/'
  }, _defineProperty(_$$DataTable, "bPaginate", true), _defineProperty(_$$DataTable, "fnServerParams", function fnServerParams(aoData) {
    var acolumns = this.fnSettings().aoColumns,
        columns = [];
    jquery__WEBPACK_IMPORTED_MODULE_6___default.a.each(acolumns, function (i, item) {
      columns.push(item.data);
    });
    aoData.push({
      name: 'columns',
      value: columns
    });

    if (jquery__WEBPACK_IMPORTED_MODULE_6___default()('input[name="role_name"]').val() != '') {
      aoData.push({
        name: 'role_name',
        value: jquery__WEBPACK_IMPORTED_MODULE_6___default()('input[name="role_name"]').val()
      });
    }
    /*  if($('#status').val()!='') {
          aoData.push({name: 'is_active', value: $('#status').val()});
      }
    */

  }), _defineProperty(_$$DataTable, "columns", [{
    "data": "name"
  }, {
    "data": "id"
  }]), _defineProperty(_$$DataTable, "responsive", {
    responsive: {
      details: {
        display: jquery__WEBPACK_IMPORTED_MODULE_6___default.a.fn.dataTable.Responsive.display.childRowImmediate,
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
    jquery__WEBPACK_IMPORTED_MODULE_6___default.a.ajax({
      'dataType': 'json',
      'type': 'GET',
      'url': sSource,
      'data': aoData,
      'headers': {
        Authorization: "Bearer " + auth_token
      },
      'success': fnCallback
    });
  }), _defineProperty(_$$DataTable, "fnDrawCallback", function fnDrawCallback() {
    jquery__WEBPACK_IMPORTED_MODULE_6___default()('body').css('min-height', jquery__WEBPACK_IMPORTED_MODULE_6___default()('#data-table-responsive tr').length * 50 + 200);
    jquery__WEBPACK_IMPORTED_MODULE_6___default()(window).trigger('resize');
  }), _defineProperty(_$$DataTable, "columnDefs", [{
    "render": function render(data, type, row) {
      var str_buttons = '<button type="button" class="edit btn btn-info btn-sm" data-id="' + row.id + '" ><i style="margin:0px !important;" class="feather icon-edit"></i></button>';
      return [str_buttons].join('');
    },
    "targets": jquery__WEBPACK_IMPORTED_MODULE_6___default()('#data-table-responsive th#action').index(),
    "orderable": false,
    "searchable": false
  }, {
    "targets": 0,
    "orderable": false
  }]), _$$DataTable));
}

var Role = /*#__PURE__*/function (_React$Component) {
  _inherits(Role, _React$Component);

  var _super = _createSuper(Role);

  function Role(props) {
    var _this;

    _classCallCheck(this, Role);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(Role, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          match = _this$props.match,
          location = _this$props.location,
          history = _this$props.history;
      Object(_HttpFunctions__WEBPACK_IMPORTED_MODULE_5__["CheckPermission"])('role', 'show', history);
      /*
        const {id,parmissions} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
      
        const pages = parmissions.filter((vl,idx) =>{
            if(Object.keys(vl)[0] =='role'){
                return vl
            }
        })
      const Ischeck =  pages[0]['role'].filter((v,i)=>{
              if(v['page_name']=='show'){
                  if(v['Ischeck']){
                  return v;
                  }
              }
      })
      
      if(Ischeck.length==0){
        history.goBack();
        PNotify.error({
            title: "Permission Error",
            text:config.AccessDeniedMessage,
        });
      }
      */

      atable();
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('#data-table-responsive tbody').on('click', '.edit', function () {
        var id = jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).attr('data-id');
        history.push('/role/edit/' + id);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
        as: "h5"
      }, "Role"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        style: {
          'float': 'right'
        },
        as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: "/role/add"
      }, "+ Add")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
        ref: "tbl",
        striped: true,
        hover: true,
        responsive: true,
        className: "table table-condensed",
        id: "data-table-responsive"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "name"
      }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "action"
      }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "name"
      }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "action"
      }, "Action")))))))));
    }
  }]);

  return Role;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Role);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./resources/js/HttpFunctions.js":
/*!***************************************!*\
  !*** ./resources/js/HttpFunctions.js ***!
  \***************************************/
/*! exports provided: baseurl, CheckPermission, Login, Pemissionlist, RoleAdd */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\wamp64\\www\\msd\\resources\\js\\HttpFunctions.js: Identifier 'history' has already been declared (13:52)\n\n\u001b[0m \u001b[90m 11 | \u001b[39m\u001b[90m * @param {*} user for send Credentials\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 12 | \u001b[39m\u001b[90m */\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 13 | \u001b[39m    \u001b[36mexport\u001b[39m \u001b[36mconst\u001b[39m  \u001b[33mCheckPermission\u001b[39m \u001b[33m=\u001b[39m (page\u001b[33m,\u001b[39mpage_name\u001b[33m,\u001b[39mhistory) \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                                                    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 14 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 15 | \u001b[39m        \u001b[36mconst\u001b[39m { match\u001b[33m,\u001b[39m location\u001b[33m,\u001b[39m history } \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 16 | \u001b[39m        \u001b[36mconst\u001b[39m {id\u001b[33m,\u001b[39mparmissions} \u001b[33m=\u001b[39m localStorage\u001b[33m.\u001b[39mgetItem(\u001b[32m'userData'\u001b[39m)\u001b[33m?\u001b[39m \u001b[33mJSON\u001b[39m\u001b[33m.\u001b[39mparse(localStorage\u001b[33m.\u001b[39mgetItem(\u001b[32m'userData'\u001b[39m))\u001b[33m.\u001b[39muser \u001b[33m:\u001b[39m \u001b[32m'Null'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n    at Object._raise (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:745:17)\n    at Object.raiseWithData (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:738:17)\n    at Object.raise (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:732:17)\n    at ScopeHandler.checkRedeclarationInScope (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:4792:12)\n    at ScopeHandler.declareName (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:4772:14)\n    at Object.checkLVal (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:9260:22)\n    at Object.checkParams (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:10741:12)\n    at Object.node.body.parseBlock.hasStrictModeDirective (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:10716:14)\n    at Object.parseBlockOrModuleBlockBody (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:11756:23)\n    at Object.parseBlockBody (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:11716:10)\n    at Object.parseBlock (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:11700:10)\n    at Object.parseFunctionBody (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:10707:24)\n    at Object.parseArrowExpression (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:10676:10)\n    at Object.parseParenAndDistinguishExpression (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:10294:12)\n    at Object.parseExprAtom (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:10006:21)\n    at Object.parseExprAtom (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:4637:20)\n    at Object.parseExprSubscripts (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:9655:23)\n    at Object.parseMaybeUnary (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:9635:21)\n    at Object.parseExprOps (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:9505:23)\n    at Object.parseMaybeConditional (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:9478:23)\n    at Object.parseMaybeAssign (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:9433:21)\n    at Object.parseVar (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:11814:26)\n    at Object.parseVarStatement (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:11623:10)\n    at Object.parseStatementContent (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:11222:21)\n    at Object.parseStatement (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:11155:17)\n    at Object.parseExportDeclaration (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:12364:17)\n    at Object.maybeParseExportDeclaration (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:12320:31)\n    at Object.parseExport (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:12250:29)\n    at Object.parseStatementContent (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:11259:27)\n    at Object.parseStatement (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:11155:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:11730:25)\n    at Object.parseBlockBody (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:11716:10)\n    at Object.parseTopLevel (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:11086:10)\n    at Object.parse (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:12767:10)\n    at parse (C:\\wamp64\\www\\msd\\node_modules\\@babel\\parser\\lib\\index.js:12820:38)\n    at parser (C:\\wamp64\\www\\msd\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)");

/***/ })

}]);