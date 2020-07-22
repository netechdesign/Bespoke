(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[113],{

/***/ "./resources/js/Demo/UIElements/Advance/Tree.js":
/*!******************************************************!*\
  !*** ./resources/js/Demo/UIElements/Advance/Tree.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_animated_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-animated-tree */ "./node_modules/react-animated-tree/dist/react-animated-tree.es.js");
/* harmony import */ var deni_react_treeview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! deni-react-treeview */ "./node_modules/deni-react-treeview/build/deni-react-treeview.js");
/* harmony import */ var deni_react_treeview__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(deni_react_treeview__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tree_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tree.json */ "./resources/js/Demo/UIElements/Advance/tree.json");
var _tree_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./tree.json */ "./resources/js/Demo/UIElements/Advance/tree.json", 1);
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
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







var treeStyles = {
  position: 'inherit',
  top: 40,
  left: 40,
  color: '#888',
  fill: '#000',
  width: '100%'
};

var AdvanceTree = /*#__PURE__*/function (_React$Component) {
  _inherits(AdvanceTree, _React$Component);

  var _super = _createSuper(AdvanceTree);

  function AdvanceTree() {
    _classCallCheck(this, AdvanceTree);

    return _super.apply(this, arguments);
  }

  _createClass(AdvanceTree, [{
    key: "render",
    value: function render() {
      var typeFolder = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-folder-open fa-2x text-warning align-middle"
      });
      var typeFolderClose = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-folder fa-2x text-warning align-middle"
      });
      var typeHtml5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-html5 fa-2x text-danger align-middle"
      });
      var typePdf = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-file-pdf-o fa-2x text-info align-middle"
      });
      var typeBlank = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-file-text fa-2x align-middle"
      });
      var typeCode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-file-code-o fa-2x align-middle"
      });
      var typeImage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-file-image-o fa-2x text-primary align-middle"
      });
      var typeZip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-file-archive-o fa-2x text-info align-middle"
      });
      var typeJson = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-file fa-2x align-middle"
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 12,
        md: 6,
        xl: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Basic Tree")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(deni_react_treeview__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "customizable-tree",
        items: _tree_json__WEBPACK_IMPORTED_MODULE_4__,
        showRoot: true
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 12,
        md: 6,
        xl: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "With Checkbox")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(deni_react_treeview__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "customizable-tree",
        items: _tree_json__WEBPACK_IMPORTED_MODULE_4__,
        theme: "orange",
        showCheckbox: true,
        showRoot: true
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 12,
        md: 6,
        xl: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Without Icon")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(deni_react_treeview__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "customizable-tree",
        items: _tree_json__WEBPACK_IMPORTED_MODULE_4__,
        showRoot: true,
        showCheckbox: true,
        theme: "moonlight",
        showIcon: false
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 12,
        md: 6,
        xl: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Tree Select Row")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(deni_react_treeview__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "customizable-tree",
        theme: "purple",
        items: _tree_json__WEBPACK_IMPORTED_MODULE_4__,
        showRoot: true,
        showCheckbox: true,
        selectRow: true
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 12,
        md: 6,
        xl: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Metro Theme Tree")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(deni_react_treeview__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "customizable-tree",
        items: _tree_json__WEBPACK_IMPORTED_MODULE_4__,
        theme: "metro",
        showRoot: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, null, "Theme: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "classic(default)"), ", ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "metro"), ", ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "moonlight"), ", ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "purple"), ", ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "green"), ", ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "orange"), ", ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "red"), ", ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "silver"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 12,
        md: 6,
        xl: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Animated Tree")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_animated_tree__WEBPACK_IMPORTED_MODULE_2__["default"], {
        content: "Root Node",
        type: typeFolder,
        canHide: true,
        open: true,
        style: treeStyles
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_animated_tree__WEBPACK_IMPORTED_MODULE_2__["default"], {
        content: "Child Node",
        type: typeFolder,
        open: true,
        canHide: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_animated_tree__WEBPACK_IMPORTED_MODULE_2__["default"], {
        content: "user.php",
        type: typeHtml5
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_animated_tree__WEBPACK_IMPORTED_MODULE_2__["default"], {
        content: "invoice.pdf",
        type: typePdf
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_animated_tree__WEBPACK_IMPORTED_MODULE_2__["default"], {
        content: "data.text",
        type: typeBlank
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_animated_tree__WEBPACK_IMPORTED_MODULE_2__["default"], {
        content: "script.js",
        type: typeCode
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_animated_tree__WEBPACK_IMPORTED_MODULE_2__["default"], {
        content: "Child Node",
        type: typeFolderClose,
        canHide: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_animated_tree__WEBPACK_IMPORTED_MODULE_2__["default"], {
        content: "logo.npg",
        type: typeImage
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_animated_tree__WEBPACK_IMPORTED_MODULE_2__["default"], {
        content: "Sub Node",
        type: typeFolderClose
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_animated_tree__WEBPACK_IMPORTED_MODULE_2__["default"], {
        content: "avatar.jpg",
        type: typeImage
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_animated_tree__WEBPACK_IMPORTED_MODULE_2__["default"], {
        content: "favicon.ico",
        type: typeImage
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_animated_tree__WEBPACK_IMPORTED_MODULE_2__["default"], {
        content: "index.html",
        type: typeHtml5
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_animated_tree__WEBPACK_IMPORTED_MODULE_2__["default"], {
        content: "package.json",
        type: typeJson
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_animated_tree__WEBPACK_IMPORTED_MODULE_2__["default"], {
        content: "root.zip",
        type: typeZip
      }))))))));
    }
  }]);

  return AdvanceTree;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AdvanceTree);

/***/ }),

/***/ "./resources/js/Demo/UIElements/Advance/tree.json":
/*!********************************************************!*\
  !*** ./resources/js/Demo/UIElements/Advance/tree.json ***!
  \********************************************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"text\":\"Child Node\",\"expanded\":true,\"children\":[{\"id\":1,\"text\":\"user.php\",\"isLeaf\":true},{\"id\":2,\"text\":\"invoice.pdf\",\"isLeaf\":true},{\"id\":3,\"text\":\"data.text\",\"isLeaf\":true},{\"id\":4,\"text\":\"script.js\",\"isLeaf\":true}]},{\"id\":2,\"text\":\"Child Node\",\"expanded\":true,\"children\":[{\"id\":1,\"text\":\"logo.png\",\"isLeaf\":true},{\"id\":2,\"text\":\"Sub Node\",\"children\":[{\"id\":1,\"text\":\"logo.png\",\"isLeaf\":true},{\"id\":2,\"text\":\"favicon.ico\",\"isLeaf\":true}]}]},{\"id\":3,\"text\":\"index.html\",\"isLeaf\":true},{\"id\":4,\"text\":\"package.json\",\"isLeaf\":true},{\"id\":5,\"text\":\"root.zip\",\"isLeaf\":true}]");

/***/ })

}]);