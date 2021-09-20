(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./resources/js/App/components/AnimatedModal.js":
/*!******************************************************!*\
  !*** ./resources/js/App/components/AnimatedModal.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_animated_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-animated-modal */ "./node_modules/react-animated-modal/build/index.js");
/* harmony import */ var react_animated_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_animated_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
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





var AnimatedModal = /*#__PURE__*/function (_React$Component) {
  _inherits(AnimatedModal, _React$Component);

  var _super = _createSuper(AnimatedModal);

  function AnimatedModal() {
    _classCallCheck(this, AnimatedModal);

    return _super.apply(this, arguments);
  }

  _createClass(AnimatedModal, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_animated_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
        visible: this.props.showModal,
        closemodal: this.props.modalClosed,
        type: this.props.animation
      }, this.props.children));
    }
  }]);

  return AnimatedModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AnimatedModal);

/***/ }),

/***/ "./resources/js/Back-Office/Job_lookup/index.js":
/*!******************************************************!*\
  !*** ./resources/js/Back-Office/Job_lookup/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap4-form-validation */ "./node_modules/react-bootstrap4-form-validation/lib/index.js");
/* harmony import */ var react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-text-mask */ "./node_modules/react-text-mask/dist/reactTextMask.js");
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_text_mask__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var _HttpFunctions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../HttpFunctions */ "./resources/js/HttpFunctions.js");
/* harmony import */ var pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! pnotify/dist/es/PNotify */ "./node_modules/pnotify/dist/es/PNotify.js");
/* harmony import */ var pnotify_dist_es_PNotifyButtons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! pnotify/dist/es/PNotifyButtons */ "./node_modules/pnotify/dist/es/PNotifyButtons.js");
/* harmony import */ var pnotify_dist_es_PNotifyConfirm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pnotify/dist/es/PNotifyConfirm */ "./node_modules/pnotify/dist/es/PNotifyConfirm.js");
/* harmony import */ var pnotify_dist_es_PNotifyCallbacks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pnotify/dist/es/PNotifyCallbacks */ "./node_modules/pnotify/dist/es/PNotifyCallbacks.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! sweetalert2-react-content */ "./node_modules/sweetalert2-react-content/dist/sweetalert2-react-content.umd.js");
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _App_components_AnimatedModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../App/components/AnimatedModal */ "./resources/js/App/components/AnimatedModal.js");
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




















window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_13___default.a;
window.$ = jquery__WEBPACK_IMPORTED_MODULE_13___default.a;
global.jQuery = jquery__WEBPACK_IMPORTED_MODULE_13___default.a;
jquery__WEBPACK_IMPORTED_MODULE_13___default.a.DataTable = __webpack_require__(/*! datatables.net-bs */ "./node_modules/datatables.net-bs/js/dataTables.bootstrap.js");

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

var baseurl = window.location.origin;
var oTable = "";

function atable() {
  var _$$DataTable;

  var tableResponsive = '#data-table-responsive';
  oTable = jquery__WEBPACK_IMPORTED_MODULE_13___default()(tableResponsive).DataTable((_$$DataTable = {
    "bStateSave": true,
    "processing": true,
    "bPaginate": true,
    "serverSide": true,
    "bProcessing": true,
    "iDisplayLength": 10,
    "bServerSide": true,
    "sAjaxSource": window.location.origin + '/api/job_lookup'
  }, _defineProperty(_$$DataTable, "bPaginate", true), _defineProperty(_$$DataTable, "fnServerParams", function fnServerParams(aoData) {
    var acolumns = this.fnSettings().aoColumns,
        columns = [];
    jquery__WEBPACK_IMPORTED_MODULE_13___default.a.each(acolumns, function (i, item) {
      columns.push(item.data);
    });
    aoData.push({
      name: 'columns',
      value: columns
    });
    /*  if($('#status').val()!='') {
          aoData.push({name: 'is_active', value: $('#status').val()});
      }
    */
  }), _defineProperty(_$$DataTable, "columns", [{
    "data": "job_type"
  }, {
    "data": "mix"
  }, {
    "data": 'revenue'
  }, {
    "data": 'pu'
  }, {
    "data": 'revenue_aborted'
  }, {
    "data": 'pu_aborted'
  }, {
    "data": 'contract'
  }, {
    "data": "from_date"
  }, {
    "data": "to_date"
  }, {
    "data": "id"
  }]), _defineProperty(_$$DataTable, "responsive", {
    responsive: {
      details: {
        display: jquery__WEBPACK_IMPORTED_MODULE_13___default.a.fn.dataTable.Responsive.display.childRowImmediate,
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
    jquery__WEBPACK_IMPORTED_MODULE_13___default.a.ajax({
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
    jquery__WEBPACK_IMPORTED_MODULE_13___default()('body').css('min-height', jquery__WEBPACK_IMPORTED_MODULE_13___default()('#data-table-responsive tr').length * 50 + 200);
    jquery__WEBPACK_IMPORTED_MODULE_13___default()(window).trigger('resize');
  }), _defineProperty(_$$DataTable, "columnDefs", [{
    "render": function render(data, type, row) {
      var str_buttons = '<button type="button" class="edit btn btn-info btn-sm" data-id="' + row.id + '" ><i style="margin:0px !important;" class="feather icon-edit"></i></button>';
      str_buttons += '<button type="button" data-id="' + row.id + '" class="deletefile btn btn-danger btn-sm" ><i style="margin:0px !important;" class="feather icon-x"></i></button>';
      return [str_buttons].join('');
    },
    "targets": jquery__WEBPACK_IMPORTED_MODULE_13___default()('#data-table-responsive th#action').index(),
    "orderable": false,
    "searchable": false
  }, {
    "targets": 0,
    "orderable": false
  }]), _$$DataTable));
}

function handleChange_search() {
  setTimeout(function () {
    oTable.draw();
  }, 500);
}

var Job_lookup = /*#__PURE__*/function (_React$Component) {
  _inherits(Job_lookup, _React$Component);

  var _super = _createSuper(Job_lookup);

  function Job_lookup(props) {
    var _this;

    _classCallCheck(this, Job_lookup);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    _this.state = {
      showModal: false,
      Team: [],
      validated: false,
      validatedTooltip: false,
      visible: true,
      formSubmitting: false,
      buttonName: 'Add'
    };
    return _this;
  }

  _createClass(Job_lookup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var items = [];
      var _this$props = this.props,
          match = _this$props.match,
          location = _this$props.location,
          history = _this$props.history;
      Object(_HttpFunctions__WEBPACK_IMPORTED_MODULE_8__["CheckPermission"])('File', 'Data Import', history);
      atable();
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('#data-table-responsive tbody').on('click', '.edit', function () {
        var id = jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr('data-id');
        history.push('/job_lookup/edit/' + id);
      });
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('#data-table-responsive tbody').on('click', '.deletefile', function () {
        var id = jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr('data-id');
        var MySwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_16___default()(sweetalert2__WEBPACK_IMPORTED_MODULE_15___default.a);
        MySwal.fire({
          title: 'Are you sure?',
          text: 'Once deleted, you will not be able to recover this data!',
          type: 'warning',
          showCloseButton: true,
          showCancelButton: true
        }).then(function (willDelete) {
          if (willDelete.value) {
            var _ref2 = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
                _auth_token = _ref2.auth_token;

            var _baseurl = window.location.origin;
            axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(_baseurl + '/api/job_lookup/' + id, {
              _method: 'delete'
            }, {
              headers: {
                'Authorization': 'Bearer ' + _auth_token
              }
            }).then(function (res) {
              if (res.data.success) {
                oTable.draw();
                return MySwal.fire('', 'Job Type has been deleted!', 'success');
              }
            });
          } else {// return MySwal.fire('', 'Your imaginary file is safe!', 'error');
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
        as: "h5"
      }, "Job Lookup List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        style: {
          'float': 'right'
        },
        as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: "/job_lookup/add"
      }, "+ Add")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
        ref: "tbl",
        striped: true,
        hover: true,
        responsive: true,
        className: "table table-condensed",
        id: "data-table-responsive"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "job_type"
      }, "Job Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "mix"
      }, "Mix"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "revenue"
      }, "Revenue-Completed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "pu"
      }, "Pu-Completed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "revenue_aborted"
      }, "Revenue-Aborted"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "pu_aborted"
      }, "Pu-Aborted"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "contract"
      }, "contract"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "from_date"
      }, "From"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "to_date"
      }, "To"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "action"
      }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "job_type"
      }, "Job Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "mix"
      }, "Mix"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "revenue"
      }, "Revenue-Completed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "pu"
      }, "Pu-Completed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "revenue_aborted"
      }, "Revenue-Aborted"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "pu_aborted"
      }, "Pu-Aborted"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "contract"
      }, "contract"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "from_date"
      }, "From"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "to_date"
      }, "To"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "action"
      }, "Action")))))))));
    }
  }]);

  return Job_lookup;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Job_lookup);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./resources/js/HttpFunctions.js":
/*!***************************************!*\
  !*** ./resources/js/HttpFunctions.js ***!
  \***************************************/
/*! exports provided: baseurl, CheckPermission, Login, Pemissionlist, RoleAdd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseurl", function() { return baseurl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckPermission", function() { return CheckPermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pemissionlist", function() { return Pemissionlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleAdd", function() { return RoleAdd; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./resources/js/config.js");
/* harmony import */ var pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pnotify/dist/es/PNotify */ "./node_modules/pnotify/dist/es/PNotify.js");



/**
 *  baseurl  get baseurl
 */

var baseurl = window.location.origin;
/**
 * Login api request
 * @param {*} user for send Credentials
 */

var CheckPermission = function CheckPermission(page, page_name, history) {
  var redirect = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  var _ref = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
      id = _ref.id,
      parmissions = _ref.parmissions;

  var pages = parmissions.filter(function (vl, idx) {
    if (Object.keys(vl)[0] == page) {
      return vl;
    }
  });

  if (pages.length > 0) {
    var Ischeck = pages[0][page].filter(function (v, i) {
      if (v['page_name'] == page_name) {
        if (v['Ischeck']) {
          return v;
        }
      }
    });

    if (Ischeck.length == 0) {
      if (redirect) {
        history.goBack();
      }

      pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].error({
        title: "Permission Error",
        text: _config__WEBPACK_IMPORTED_MODULE_1__["default"].AccessDeniedMessage
      });
      return 1;
    }
  } else {
    history.goBack();
  }
};
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
var Pemissionlist = function Pemissionlist(parameter) {
  var _ref2 = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
      id = _ref2.id,
      auth_token = _ref2.auth_token;

  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseurl + '/api/parmission/list', {
    'id': id
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    }
  });
};
var RoleAdd = function RoleAdd(role) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseurl + '/api/role', {
    email: role.email,
    password: role.password,
    remember_me: role.remember
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

/***/ })

}]);