(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[85],{

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

/***/ "./resources/js/Back-Office/Pages/Engineer.js":
/*!****************************************************!*\
  !*** ./resources/js/Back-Office/Pages/Engineer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! sweetalert2-react-content */ "./node_modules/sweetalert2-react-content/dist/sweetalert2-react-content.umd.js");
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _App_components_AnimatedModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../App/components/AnimatedModal */ "./resources/js/App/components/AnimatedModal.js");
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



















window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_12___default.a;
window.$ = jquery__WEBPACK_IMPORTED_MODULE_12___default.a;
global.jQuery = jquery__WEBPACK_IMPORTED_MODULE_12___default.a;
jquery__WEBPACK_IMPORTED_MODULE_12___default.a.DataTable = __webpack_require__(/*! datatables.net-bs */ "./node_modules/datatables.net-bs/js/dataTables.bootstrap.js");

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
  oTable = jquery__WEBPACK_IMPORTED_MODULE_12___default()(tableResponsive).DataTable((_$$DataTable = {
    "bStateSave": true,
    "processing": true,
    "bPaginate": true,
    "serverSide": true,
    "bProcessing": true,
    "iDisplayLength": 10,
    "bServerSide": true,
    "sAjaxSource": window.location.origin + '/api/engineer'
  }, _defineProperty(_$$DataTable, "bPaginate", true), _defineProperty(_$$DataTable, "fnServerParams", function fnServerParams(aoData) {
    var acolumns = this.fnSettings().aoColumns,
        columns = [];
    jquery__WEBPACK_IMPORTED_MODULE_12___default.a.each(acolumns, function (i, item) {
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
    "data": "engineer_name"
  }, {
    "data": "engineer_id"
  }, {
    "data": "id"
  }]), _defineProperty(_$$DataTable, "responsive", {
    responsive: {
      details: {
        display: jquery__WEBPACK_IMPORTED_MODULE_12___default.a.fn.dataTable.Responsive.display.childRowImmediate,
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
    jquery__WEBPACK_IMPORTED_MODULE_12___default.a.ajax({
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
    jquery__WEBPACK_IMPORTED_MODULE_12___default()('body').css('min-height', jquery__WEBPACK_IMPORTED_MODULE_12___default()('#data-table-responsive tr').length * 50 + 200);
    jquery__WEBPACK_IMPORTED_MODULE_12___default()(window).trigger('resize');
  }), _defineProperty(_$$DataTable, "columnDefs", [{
    "render": function render(data, type, row) {
      var str_buttons = '<button type="button" data-id="' + row.id + '" class="deletefile btn btn-danger btn-sm" ><i style="margin:0px !important;" class="feather icon-x"></i></button>';
      return [str_buttons].join('');
    },
    "targets": jquery__WEBPACK_IMPORTED_MODULE_12___default()('#data-table-responsive th#action').index(),
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

var Engineer = /*#__PURE__*/function (_React$Component) {
  _inherits(Engineer, _React$Component);

  var _super = _createSuper(Engineer);

  function Engineer(props) {
    var _this;

    _classCallCheck(this, Engineer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
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
        }))
      });

      var data = new FormData();
      data.append('engineer_id', _this.state.engineer_id);
      data.append('engineer_name', _this.state.engineer_name);

      var _ref2 = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
          id = _ref2.id,
          auth_token = _ref2.auth_token;

      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(baseurl + '/api/engineer', data, {
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
            buttonName: 'Add'
          });

          _this.setState({
            showModal: false
          });

          _this.setState({
            engineer_id: ''
          });

          _this.setState({
            engineer_name: ''
          }); //this.setState({progress:100});


          oTable.draw();
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
          jquery__WEBPACK_IMPORTED_MODULE_12___default()('#avatar').val('');
          pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_8__["default"].error({
            title: "System Error",
            text: res.data.message
          });

          _this.setState({
            formSubmitting: false
          });

          _this.setState({
            buttonName: 'Add'
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
          buttonName: 'Add'
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

    _this.state = {
      showModal: false,
      Engineers: [],
      engineer_id: '',
      engineer_name: '',
      validated: false,
      validatedTooltip: false,
      visible: true,
      formSubmitting: false,
      buttonName: 'Add'
    };
    return _this;
  }

  _createClass(Engineer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var items = [];
      atable(11);
      jquery__WEBPACK_IMPORTED_MODULE_12___default()('#data-table-responsive tbody').on('click', '.deletefile', function () {
        var id = jquery__WEBPACK_IMPORTED_MODULE_12___default()(this).attr('data-id');
        var MySwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_15___default()(sweetalert2__WEBPACK_IMPORTED_MODULE_14___default.a);
        MySwal.fire({
          title: 'Are you sure?',
          text: 'Once deleted, you will not be able to recover this data!',
          type: 'warning',
          showCloseButton: true,
          showCancelButton: true
        }).then(function (willDelete) {
          if (willDelete.value) {
            var _ref3 = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
                _auth_token = _ref3.auth_token;

            var _baseurl = window.location.origin;
            axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(_baseurl + '/api/engineer/' + id, {
              _method: 'delete'
            }, {
              headers: {
                'Authorization': 'Bearer ' + _auth_token
              }
            }).then(function (res) {
              if (res.data.success) {
                oTable.draw();
                return MySwal.fire('', 'Engineer has been deleted!', 'success');
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
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_AnimatedModal__WEBPACK_IMPORTED_MODULE_16__["default"], {
        animation: "slideInDown",
        showModal: this.state.showModal,
        modalClosed: function modalClosed() {
          return _this2.setState({
            showModal: false
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Add Engineer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_2__["ValidationForm"], {
        onSubmit: this.handleSubmit,
        onErrorSubmit: this.handleErrorSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        htmlFor: "engineer_name"
      }, "Engineer Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_2__["TextInput"], {
        name: "engineer_name",
        id: "engineer_name",
        placeholder: "Engineer Name",
        required: true,
        value: this.state.engineer_name,
        onChange: this.handleChange,
        autoComplete: "off"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        htmlFor: "engineer_id"
      }, "Engineer Id"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_2__["TextInput"], {
        name: "engineer_id",
        id: "engineer_id",
        placeholder: "Engineer Id",
        required: true,
        value: this.state.engineer_id,
        onChange: this.handleChange,
        autoComplete: "off"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        sm: 12,
        className: "mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        disabled: this.state.formSubmitting,
        type: "submit"
      }, " ", this.state.buttonName))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Engineer List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-sm",
        style: {
          'float': 'right'
        },
        onClick: function onClick() {
          return _this2.setState({
            showModal: true
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        "class": "feather icon-plus"
      }), "Add")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
        ref: "tbl",
        striped: true,
        hover: true,
        responsive: true,
        className: "table table-condensed",
        id: "data-table-responsive"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "parent_engineer"
      }, "Engineer Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "child_engineer_name"
      }, "Engineer id"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "action"
      }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "parent_engineer"
      }, "Engineer Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "child_engineer_name"
      }, "Engineer id"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "action"
      }, "Action")))))))));
    }
  }]);

  return Engineer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Engineer);
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