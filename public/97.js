(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[97],{

/***/ "./resources/js/App/components/AllCkEditor.js":
/*!****************************************************!*\
  !*** ./resources/js/App/components/AllCkEditor.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-react */ "./node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-decoupled-document */ "./node_modules/@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_2__);
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


 //import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//import InlineEditor from '@ckeditor/ckeditor5-build-inline';
//import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';



function getEditor(editor) {
  switch (editor) {
    case 'classic':
      return ClassicEditor;

    case 'balloon':
      return BalloonEditor;

    case 'inline':
      return InlineEditor;

    case 'document':
      return _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_2___default.a;

    default:
      return ClassicEditor;
  }
}

var AllCkEditor = /*#__PURE__*/function (_React$Component) {
  _inherits(AllCkEditor, _React$Component);

  var _super = _createSuper(AllCkEditor);

  function AllCkEditor() {
    _classCallCheck(this, AllCkEditor);

    return _super.apply(this, arguments);
  }

  _createClass(AllCkEditor, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
        editor: getEditor(this.props.editor),
        data: this.props.html,
        onInit: function onInit(editor) {
          if (_this.props.editor === 'document') {
            var toolbarContainer = document.querySelector('.document-editor__toolbar');
            toolbarContainer.appendChild(editor.ui.view.toolbar.element);
            window.editor = editor;
          } // console.log( 'Editor is ready to use!', editor );

        },
        onChange: function onChange(event, editor) {// const data = editor.getData();
          // console.log( { event, editor, data } );
        },
        onBlur: function onBlur(editor) {// console.log( 'Blur.', editor );
        },
        onFocus: function onFocus(editor) {// console.log( 'Focus.', editor );
        }
      });
    }
  }]);

  return AllCkEditor;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AllCkEditor);

/***/ }),

/***/ "./resources/js/Demo/Extension/Editor/EditorCkDocument.js":
/*!****************************************************************!*\
  !*** ./resources/js/Demo/Extension/Editor/EditorCkDocument.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var _App_components_AllCkEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../App/components/AllCkEditor */ "./resources/js/App/components/AllCkEditor.js");
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






var EditorCkDocument = /*#__PURE__*/function (_React$Component) {
  _inherits(EditorCkDocument, _React$Component);

  var _super = _createSuper(EditorCkDocument);

  function EditorCkDocument() {
    _classCallCheck(this, EditorCkDocument);

    return _super.apply(this, arguments);
  }

  _createClass(EditorCkDocument, [{
    key: "render",
    value: function render() {
      var html = "\n                            <h2 style=\"text-align:center;\">The Flavorful Tuscany Meetup</h2>\n                            <h3 style=\"text-align:center;\">Welcome letter</h3>\n                            <p>Dear Guest,</p>\n                            <p>We are delighted to welcome you to the annual <i>Flavorful Tuscany Meetup</i> and hope you will enjoy the programmer as well as your stay at the <a href=\"http://ckeditor.com\">Bilancino Hotel</a>.</p>\n                            <p>Please find below the full schedule of the event.</p>\n                            <figure class=\"table ck-widget ck-widget_selectable\" contenteditable=\"false\">\n                                <table>\n                                    <thead>\n                                        <tr>\n                                            <th class=\"ck-editor__editable ck-editor__nested-editable\" contenteditable=\"true\" colspan=\"2\">Saturday, July 14</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr>\n                                            <td class=\"ck-editor__editable ck-editor__nested-editable\" contenteditable=\"true\">9:30&nbsp;AM&nbsp;-&nbsp;11:30&nbsp;AM</td>\n                                            <td class=\"ck-editor__editable ck-editor__nested-editable\" contenteditable=\"true\">Americano vs. Brewed - \u201Cknow coffee\u201D with <strong>Stefano Garau</strong></td>\n                                        </tr>\n                                        <tr>\n                                            <td class=\"ck-editor__editable ck-editor__nested-editable\" contenteditable=\"true\">1:00&nbsp;PM&nbsp;-&nbsp;3:00&nbsp;PM</td>\n                                            <td class=\"ck-editor__editable ck-editor__nested-editable\" contenteditable=\"true\">Pappardelle al pomodoro -\n                                                <mark class=\"marker-yellow\">live cooking</mark> with <strong>Rita</strong></td>\n                                        </tr>\n                                        <tr>\n                                            <td class=\"ck-editor__editable ck-editor__nested-editable\" contenteditable=\"true\">5:00&nbsp;PM&nbsp;-&nbsp;8:00&nbsp;PM</td>\n                                            <td class=\"ck-editor__editable ck-editor__nested-editable\" contenteditable=\"true\">Tuscan vineyards at a glancewith <strong>Frederico Riscoli</strong></td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </figure>\n                            <blockquote>\n                                <p>The annual Flavorful Tuscany meetups are always a culinary discovery. You get the best of Tuscan flavors during an intense one-day stay at one of the top hotels of the region. All the\n                                    sessions are lead by top chefs passionate about their profession. I would certainly recommend to save the date in your calendar for this one!</p>\n                                <p>Angelina Calvino, food journalist</p>\n                            </blockquote>\n                            <p>Please arrive at the <a href=\"http://ckeditor.com\">Bilancino Hotel</a> reception desk\n                                <mark class=\"marker-yellow\">at least half an hour earlier</mark> to make sure that the registration process goes as smoothly as possible.</p>\n                            <p>We look forward to welcoming you to the event.</p>\n                            <p><strong>Victoria Valc</strong></p>\n                            <p><strong>Event Manager</strong></p>\n                            <p><strong>Bilancino Hotel</strong></p>\n                       ";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Document Editor")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "document-editor"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "document-editor__toolbar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "document-editor__editable-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "document-editor__editable"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_AllCkEditor__WEBPACK_IMPORTED_MODULE_3__["default"], {
        html: html,
        editor: "document"
      })))))))));
    }
  }]);

  return EditorCkDocument;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (EditorCkDocument);

/***/ })

}]);