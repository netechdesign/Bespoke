(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

/***/ "./resources/js/Demo/AppPages/Gallery/GalleryGrid.js":
/*!***********************************************************!*\
  !*** ./resources/js/Demo/AppPages/Gallery/GalleryGrid.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _hoc_Aux_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hoc/_Aux/index */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var _App_components_Gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../App/components/Gallery */ "./resources/js/App/components/Gallery.js");
/* harmony import */ var _assets_images_gallery_grid_img_grd_gal_1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/images/gallery-grid/img-grd-gal-1.jpg */ "./resources/js/assets/images/gallery-grid/img-grd-gal-1.jpg");
/* harmony import */ var _assets_images_gallery_grid_img_grd_gal_1_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_gallery_grid_img_grd_gal_1_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_gallery_grid_img_grd_gal_2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/images/gallery-grid/img-grd-gal-2.jpg */ "./resources/js/assets/images/gallery-grid/img-grd-gal-2.jpg");
/* harmony import */ var _assets_images_gallery_grid_img_grd_gal_2_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_gallery_grid_img_grd_gal_2_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_gallery_grid_img_grd_gal_3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/images/gallery-grid/img-grd-gal-3.jpg */ "./resources/js/assets/images/gallery-grid/img-grd-gal-3.jpg");
/* harmony import */ var _assets_images_gallery_grid_img_grd_gal_3_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_gallery_grid_img_grd_gal_3_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_gallery_grid_img_grd_gal_4_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/images/gallery-grid/img-grd-gal-4.jpg */ "./resources/js/assets/images/gallery-grid/img-grd-gal-4.jpg");
/* harmony import */ var _assets_images_gallery_grid_img_grd_gal_4_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_gallery_grid_img_grd_gal_4_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_gallery_grid_img_grd_gal_5_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/images/gallery-grid/img-grd-gal-5.jpg */ "./resources/js/assets/images/gallery-grid/img-grd-gal-5.jpg");
/* harmony import */ var _assets_images_gallery_grid_img_grd_gal_5_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_gallery_grid_img_grd_gal_5_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_images_gallery_grid_img_grd_gal_6_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/images/gallery-grid/img-grd-gal-6.jpg */ "./resources/js/assets/images/gallery-grid/img-grd-gal-6.jpg");
/* harmony import */ var _assets_images_gallery_grid_img_grd_gal_6_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_gallery_grid_img_grd_gal_6_jpg__WEBPACK_IMPORTED_MODULE_9__);
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












var GalleryGrid = /*#__PURE__*/function (_React$Component) {
  _inherits(GalleryGrid, _React$Component);

  var _super = _createSuper(GalleryGrid);

  function GalleryGrid() {
    _classCallCheck(this, GalleryGrid);

    return _super.apply(this, arguments);
  }

  _createClass(GalleryGrid, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux_index__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Image Grid")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6,
        className: "mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_Gallery__WEBPACK_IMPORTED_MODULE_3__["default"], {
        images: [{
          src: _assets_images_gallery_grid_img_grd_gal_1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
          thumbnail: _assets_images_gallery_grid_img_grd_gal_1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
          caption: "Datta Image 1",
          useForDemo: true
        }],
        backdropClosesModal: true,
        singleItem: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6,
        className: "mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_Gallery__WEBPACK_IMPORTED_MODULE_3__["default"], {
        images: [{
          src: _assets_images_gallery_grid_img_grd_gal_2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
          thumbnail: _assets_images_gallery_grid_img_grd_gal_2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
          caption: "Datta Image 2",
          useForDemo: true
        }],
        backdropClosesModal: true,
        singleItem: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6,
        className: "mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_Gallery__WEBPACK_IMPORTED_MODULE_3__["default"], {
        images: [{
          src: _assets_images_gallery_grid_img_grd_gal_3_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
          thumbnail: _assets_images_gallery_grid_img_grd_gal_3_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
          caption: "Datta Image 3",
          useForDemo: true
        }],
        backdropClosesModal: true,
        singleItem: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6,
        className: "mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_Gallery__WEBPACK_IMPORTED_MODULE_3__["default"], {
        images: [{
          src: _assets_images_gallery_grid_img_grd_gal_4_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
          thumbnail: _assets_images_gallery_grid_img_grd_gal_4_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
          caption: "Datta Image 4",
          useForDemo: true
        }],
        backdropClosesModal: true,
        singleItem: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6,
        className: "mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_Gallery__WEBPACK_IMPORTED_MODULE_3__["default"], {
        images: [{
          src: _assets_images_gallery_grid_img_grd_gal_5_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
          thumbnail: _assets_images_gallery_grid_img_grd_gal_5_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
          caption: "Datta Image 5",
          useForDemo: true
        }],
        backdropClosesModal: true,
        singleItem: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6,
        className: "mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_Gallery__WEBPACK_IMPORTED_MODULE_3__["default"], {
        images: [{
          src: _assets_images_gallery_grid_img_grd_gal_6_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
          thumbnail: _assets_images_gallery_grid_img_grd_gal_6_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
          caption: "Datta Image 6",
          useForDemo: true
        }],
        backdropClosesModal: true,
        singleItem: true
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Video Grid")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6,
        className: "mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_Gallery__WEBPACK_IMPORTED_MODULE_3__["default"], {
        videos: ['0LjlawWMXCw'],
        backdropClosesModal: true,
        singleItem: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6,
        className: "mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_Gallery__WEBPACK_IMPORTED_MODULE_3__["default"], {
        videos: ['ZQ264Axbjxg'],
        backdropClosesModal: true,
        singleItem: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6,
        className: "mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_Gallery__WEBPACK_IMPORTED_MODULE_3__["default"], {
        videos: ['bYbV_PFdfQs'],
        backdropClosesModal: true,
        singleItem: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6,
        className: "mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_Gallery__WEBPACK_IMPORTED_MODULE_3__["default"], {
        videos: ['IkyZHPnfFnE'],
        backdropClosesModal: true,
        singleItem: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6,
        className: "mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_Gallery__WEBPACK_IMPORTED_MODULE_3__["default"], {
        videos: ['HjV2aWgavdo'],
        backdropClosesModal: true,
        singleItem: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6,
        className: "mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_Gallery__WEBPACK_IMPORTED_MODULE_3__["default"], {
        videos: ['Rh03jAsRHQM'],
        backdropClosesModal: true,
        singleItem: true
      }))))))));
    }
  }]);

  return GalleryGrid;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (GalleryGrid);

/***/ }),

/***/ "./resources/js/assets/images/gallery-grid/img-grd-gal-1.jpg":
/*!*******************************************************************!*\
  !*** ./resources/js/assets/images/gallery-grid/img-grd-gal-1.jpg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/img-grd-gal-1.jpg?fe78b2790b02331c0517ca76cae0a1e0";

/***/ }),

/***/ "./resources/js/assets/images/gallery-grid/img-grd-gal-2.jpg":
/*!*******************************************************************!*\
  !*** ./resources/js/assets/images/gallery-grid/img-grd-gal-2.jpg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/img-grd-gal-2.jpg?d44716556b9b737f6023aa40e54c2a00";

/***/ }),

/***/ "./resources/js/assets/images/gallery-grid/img-grd-gal-3.jpg":
/*!*******************************************************************!*\
  !*** ./resources/js/assets/images/gallery-grid/img-grd-gal-3.jpg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/img-grd-gal-3.jpg?ae4cc8c1517161784df667c451577f5a";

/***/ }),

/***/ "./resources/js/assets/images/gallery-grid/img-grd-gal-4.jpg":
/*!*******************************************************************!*\
  !*** ./resources/js/assets/images/gallery-grid/img-grd-gal-4.jpg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/img-grd-gal-4.jpg?dd8027d1eb99280fb7beb5c66f3cd2f1";

/***/ }),

/***/ "./resources/js/assets/images/gallery-grid/img-grd-gal-5.jpg":
/*!*******************************************************************!*\
  !*** ./resources/js/assets/images/gallery-grid/img-grd-gal-5.jpg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/img-grd-gal-5.jpg?501ba72576d6107332cedfca834201cd";

/***/ }),

/***/ "./resources/js/assets/images/gallery-grid/img-grd-gal-6.jpg":
/*!*******************************************************************!*\
  !*** ./resources/js/assets/images/gallery-grid/img-grd-gal-6.jpg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/img-grd-gal-6.jpg?75253e9e72dc5bb60778ee8de8a4be6b";

/***/ })

}]);