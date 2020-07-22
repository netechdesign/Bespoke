(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./resources/js/Demo/UIElements/Basic/Carousels.js":
/*!*********************************************************!*\
  !*** ./resources/js/Demo/UIElements/Basic/Carousels.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var _assets_images_slider_img_slide_1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/images/slider/img-slide-1.jpg */ "./resources/js/assets/images/slider/img-slide-1.jpg");
/* harmony import */ var _assets_images_slider_img_slide_1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_slider_img_slide_1_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_slider_img_slide_2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/images/slider/img-slide-2.jpg */ "./resources/js/assets/images/slider/img-slide-2.jpg");
/* harmony import */ var _assets_images_slider_img_slide_2_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_slider_img_slide_2_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_slider_img_slide_3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/images/slider/img-slide-3.jpg */ "./resources/js/assets/images/slider/img-slide-3.jpg");
/* harmony import */ var _assets_images_slider_img_slide_3_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_slider_img_slide_3_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_slider_img_slide_4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/images/slider/img-slide-4.jpg */ "./resources/js/assets/images/slider/img-slide-4.jpg");
/* harmony import */ var _assets_images_slider_img_slide_4_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_slider_img_slide_4_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_slider_img_slide_5_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/images/slider/img-slide-5.jpg */ "./resources/js/assets/images/slider/img-slide-5.jpg");
/* harmony import */ var _assets_images_slider_img_slide_5_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_slider_img_slide_5_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_slider_img_slide_6_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/images/slider/img-slide-6.jpg */ "./resources/js/assets/images/slider/img-slide-6.jpg");
/* harmony import */ var _assets_images_slider_img_slide_6_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_slider_img_slide_6_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_images_slider_img_slide_7_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/images/slider/img-slide-7.jpg */ "./resources/js/assets/images/slider/img-slide-7.jpg");
/* harmony import */ var _assets_images_slider_img_slide_7_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_slider_img_slide_7_jpg__WEBPACK_IMPORTED_MODULE_9__);
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












var BasicCarousels = /*#__PURE__*/function (_React$Component) {
  _inherits(BasicCarousels, _React$Component);

  var _super = _createSuper(BasicCarousels);

  function BasicCarousels() {
    _classCallCheck(this, BasicCarousels);

    return _super.apply(this, arguments);
  }

  _createClass(BasicCarousels, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Basic Carousel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
        controls: false,
        indicators: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
        alt: "Slide1"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_2_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "Slide2"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: "Slide3"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_4_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
        alt: "Slide4"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_5_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
        alt: "Slide5"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_6_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "Slide6"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_7_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
        alt: "Slide7"
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Carousel Controls")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
        indicators: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_2_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "Slide2"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: "Slide3"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_4_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
        alt: "Slide4"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_5_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
        alt: "Slide5"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_6_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "Slide6"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_7_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
        alt: "Slide7"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
        alt: "Slide1"
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Carousel Indicators")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_4_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
        alt: "Slide4"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_5_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
        alt: "Slide5"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_6_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "Slide6"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_7_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
        alt: "Slide7"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: "Slide3"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
        alt: "Slide2"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: "Slide3"
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Carousel Crossfade")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
        fade: true,
        indicators: false,
        interval: 3000
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_4_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
        alt: "Slide4"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_5_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
        alt: "Slide5"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_6_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "Slide6"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_7_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
        alt: "Slide7"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: "Slide3"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
        alt: "Slide2"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: "Slide3"
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Carousel With Captions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
        interval: 3000
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_2_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "Slide2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Caption, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "text-white"
      }, "First slide label"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: "Slide3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Caption, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "text-white"
      }, "Second slide label"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_4_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
        alt: "Slide4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Caption, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "text-white"
      }, "Third slide label"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_5_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
        alt: "Slide5"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Caption, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "text-white"
      }, "Forth slide label"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_6_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "Slide6"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Caption, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "text-white"
      }, "Fifth slide label"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_7_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
        alt: "Slide7"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Caption, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "text-white"
      }, "Sixth slide label"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
        alt: "Slide1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Caption, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "text-white"
      }, "Seventh slide label"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.")))))))));
    }
  }]);

  return BasicCarousels;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (BasicCarousels);

/***/ }),

/***/ "./resources/js/assets/images/slider/img-slide-1.jpg":
/*!***********************************************************!*\
  !*** ./resources/js/assets/images/slider/img-slide-1.jpg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/img-slide-1.jpg?1d92bbc6c29cf59b94bb6146c403922e";

/***/ }),

/***/ "./resources/js/assets/images/slider/img-slide-2.jpg":
/*!***********************************************************!*\
  !*** ./resources/js/assets/images/slider/img-slide-2.jpg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/img-slide-2.jpg?5c7505e8268240c3c0913bcc28a38352";

/***/ }),

/***/ "./resources/js/assets/images/slider/img-slide-3.jpg":
/*!***********************************************************!*\
  !*** ./resources/js/assets/images/slider/img-slide-3.jpg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/img-slide-3.jpg?1809900e9d686716e6adb408dec70f9b";

/***/ }),

/***/ "./resources/js/assets/images/slider/img-slide-4.jpg":
/*!***********************************************************!*\
  !*** ./resources/js/assets/images/slider/img-slide-4.jpg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/img-slide-4.jpg?8cced928d0b585c179844f37cace4e19";

/***/ }),

/***/ "./resources/js/assets/images/slider/img-slide-5.jpg":
/*!***********************************************************!*\
  !*** ./resources/js/assets/images/slider/img-slide-5.jpg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/img-slide-5.jpg?d1951c0c3c4f6702c6065854c0e6e568";

/***/ }),

/***/ "./resources/js/assets/images/slider/img-slide-6.jpg":
/*!***********************************************************!*\
  !*** ./resources/js/assets/images/slider/img-slide-6.jpg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/img-slide-6.jpg?fc642d28aca52957a182e061606c58b5";

/***/ }),

/***/ "./resources/js/assets/images/slider/img-slide-7.jpg":
/*!***********************************************************!*\
  !*** ./resources/js/assets/images/slider/img-slide-7.jpg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/img-slide-7.jpg?38f0ed171ddb9bb6baeea5a0da4e2cab";

/***/ })

}]);