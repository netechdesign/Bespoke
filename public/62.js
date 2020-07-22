(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ "./resources/js/Demo/UIElements/Advance/LightBox.js":
/*!**********************************************************!*\
  !*** ./resources/js/Demo/UIElements/Advance/LightBox.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _App_components_Gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../App/components/Gallery */ "./resources/js/App/components/Gallery.js");
/* harmony import */ var react_image_video_lightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-image-video-lightbox */ "./node_modules/react-image-video-lightbox/build/index.js");
/* harmony import */ var react_image_video_lightbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_image_video_lightbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_light_box_l1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/images/light-box/l1.jpg */ "./resources/js/assets/images/light-box/l1.jpg");
/* harmony import */ var _assets_images_light_box_l1_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_light_box_l1_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_light_box_l2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/images/light-box/l2.jpg */ "./resources/js/assets/images/light-box/l2.jpg");
/* harmony import */ var _assets_images_light_box_l2_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_light_box_l2_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_light_box_l3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/images/light-box/l3.jpg */ "./resources/js/assets/images/light-box/l3.jpg");
/* harmony import */ var _assets_images_light_box_l3_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_light_box_l3_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_light_box_l4_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/images/light-box/l4.jpg */ "./resources/js/assets/images/light-box/l4.jpg");
/* harmony import */ var _assets_images_light_box_l4_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_light_box_l4_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_light_box_l5_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/images/light-box/l5.jpg */ "./resources/js/assets/images/light-box/l5.jpg");
/* harmony import */ var _assets_images_light_box_l5_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_light_box_l5_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_images_light_box_l6_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/images/light-box/l6.jpg */ "./resources/js/assets/images/light-box/l6.jpg");
/* harmony import */ var _assets_images_light_box_l6_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_light_box_l6_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_images_light_box_sl1_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../assets/images/light-box/sl1.jpg */ "./resources/js/assets/images/light-box/sl1.jpg");
/* harmony import */ var _assets_images_light_box_sl1_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_images_light_box_sl1_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_images_light_box_sl2_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../assets/images/light-box/sl2.jpg */ "./resources/js/assets/images/light-box/sl2.jpg");
/* harmony import */ var _assets_images_light_box_sl2_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_images_light_box_sl2_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_images_light_box_sl3_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../assets/images/light-box/sl3.jpg */ "./resources/js/assets/images/light-box/sl3.jpg");
/* harmony import */ var _assets_images_light_box_sl3_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_images_light_box_sl3_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_images_light_box_sl4_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../assets/images/light-box/sl4.jpg */ "./resources/js/assets/images/light-box/sl4.jpg");
/* harmony import */ var _assets_images_light_box_sl4_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_images_light_box_sl4_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_images_light_box_sl5_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../assets/images/light-box/sl5.jpg */ "./resources/js/assets/images/light-box/sl5.jpg");
/* harmony import */ var _assets_images_light_box_sl5_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_images_light_box_sl5_jpg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_images_light_box_sl6_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../assets/images/light-box/sl6.jpg */ "./resources/js/assets/images/light-box/sl6.jpg");
/* harmony import */ var _assets_images_light_box_sl6_jpg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_images_light_box_sl6_jpg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
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



















var AdvanceLightBox = /*#__PURE__*/function (_React$Component) {
  _inherits(AdvanceLightBox, _React$Component);

  var _super = _createSuper(AdvanceLightBox);

  function AdvanceLightBox() {
    var _this;

    _classCallCheck(this, AdvanceLightBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      singleItem: false,
      lightboxPhotoOpen: false,
      lightboxVideoOpen: false
    });

    return _this;
  }

  _createClass(AdvanceLightBox, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var lightBoxVideo, lightBoxPhoto;

      if (this.state.lightboxPhotoOpen) {
        lightBoxPhoto = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            height: '350px'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_image_video_lightbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
          data: [{
            url: _assets_images_light_box_l1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
            type: 'photo',
            altTag: 'placeholder image'
          }, {
            url: _assets_images_light_box_l2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
            type: 'photo',
            altTag: 'placeholder image'
          }, {
            url: _assets_images_light_box_l3_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
            type: 'photo',
            altTag: 'placeholder image'
          }, {
            url: _assets_images_light_box_l4_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
            type: 'photo',
            altTag: 'placeholder image'
          }, {
            url: _assets_images_light_box_l5_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
            type: 'photo',
            altTag: 'placeholder image'
          }],
          startIndex: 0,
          showResourceCount: true,
          onCloseCallback: function onCloseCallback() {
            _this2.setState({
              lightboxPhotoOpen: false
            });
          }
        }));
      }

      if (this.state.lightboxVideoOpen) {
        lightBoxVideo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            height: '350px'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_image_video_lightbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
          data: [{
            url: "https://www.youtube.com/embed/IkyZHPnfFnE",
            type: 'video',
            altTag: 'placeholder video'
          }, {
            url: "https://www.youtube.com/embed/IkyZHPnfFnE",
            type: 'video',
            altTag: 'placeholder video'
          }, {
            url: "https://www.youtube.com/embed/IkyZHPnfFnE",
            type: 'video',
            altTag: 'placeholder video'
          }, {
            url: "https://www.youtube.com/embed/IkyZHPnfFnE",
            type: 'video',
            altTag: 'placeholder video'
          }, {
            url: "https://www.youtube.com/embed/IkyZHPnfFnE",
            type: 'video',
            altTag: 'placeholder video'
          }],
          startIndex: 0,
          showResourceCount: true,
          onCloseCallback: function onCloseCallback() {
            _this2.setState({
              lightboxVideoOpen: false
            });
          }
        }));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Single Images")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 2,
        lg: 3,
        sm: 4,
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_Gallery__WEBPACK_IMPORTED_MODULE_2__["default"], {
        images: [{
          src: _assets_images_light_box_l1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
          thumbnail: _assets_images_light_box_sl1_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
          caption: "Datta Image 1",
          useForDemo: true
        }],
        backdropClosesModal: true,
        singleItem: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 2,
        lg: 3,
        sm: 4,
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_Gallery__WEBPACK_IMPORTED_MODULE_2__["default"], {
        images: [{
          src: _assets_images_light_box_l2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
          thumbnail: _assets_images_light_box_sl2_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
          caption: "Datta Image 2",
          useForDemo: true
        }],
        backdropClosesModal: true,
        singleItem: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 2,
        lg: 3,
        sm: 4,
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_Gallery__WEBPACK_IMPORTED_MODULE_2__["default"], {
        images: [{
          src: _assets_images_light_box_l3_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
          thumbnail: _assets_images_light_box_sl3_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
          caption: "Datta Image 3",
          useForDemo: true
        }],
        backdropClosesModal: true,
        singleItem: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 2,
        lg: 3,
        sm: 4,
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_Gallery__WEBPACK_IMPORTED_MODULE_2__["default"], {
        images: [{
          src: _assets_images_light_box_l4_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
          thumbnail: _assets_images_light_box_sl4_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
          caption: "Datta Image 4",
          useForDemo: true
        }],
        backdropClosesModal: true,
        singleItem: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 2,
        lg: 3,
        sm: 4,
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_Gallery__WEBPACK_IMPORTED_MODULE_2__["default"], {
        images: [{
          src: _assets_images_light_box_l5_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
          thumbnail: _assets_images_light_box_sl5_jpg__WEBPACK_IMPORTED_MODULE_14___default.a,
          caption: "Datta Image 5",
          useForDemo: true
        }],
        backdropClosesModal: true,
        singleItem: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 2,
        lg: 3,
        sm: 4,
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_Gallery__WEBPACK_IMPORTED_MODULE_2__["default"], {
        images: [{
          src: _assets_images_light_box_l6_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
          thumbnail: _assets_images_light_box_sl6_jpg__WEBPACK_IMPORTED_MODULE_15___default.a,
          caption: "Datta Image 6",
          useForDemo: true
        }],
        backdropClosesModal: true,
        singleItem: true
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Image Gallery")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_Gallery__WEBPACK_IMPORTED_MODULE_2__["default"], {
        images: [{
          src: _assets_images_light_box_l1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
          thumbnail: _assets_images_light_box_sl1_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
          caption: "Gallery Image 1",
          useForDemo: true
        }, {
          src: _assets_images_light_box_l2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
          thumbnail: _assets_images_light_box_sl2_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
          caption: "Gallery Image 2",
          useForDemo: true
        }, {
          src: _assets_images_light_box_l3_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
          thumbnail: _assets_images_light_box_sl3_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
          caption: "Gallery Image 3",
          useForDemo: true
        }, {
          src: _assets_images_light_box_l4_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
          thumbnail: _assets_images_light_box_sl4_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
          caption: "Gallery Image 4",
          useForDemo: true
        }, {
          src: _assets_images_light_box_l5_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
          thumbnail: _assets_images_light_box_sl5_jpg__WEBPACK_IMPORTED_MODULE_14___default.a,
          caption: "Gallery Image 5",
          useForDemo: true
        }, {
          src: _assets_images_light_box_l6_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
          thumbnail: _assets_images_light_box_sl6_jpg__WEBPACK_IMPORTED_MODULE_15___default.a,
          caption: "Gallery Image 6",
          useForDemo: true
        }],
        backdropClosesModal: true
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Image Gallery")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_Gallery__WEBPACK_IMPORTED_MODULE_2__["default"], {
        videos: ['0LjlawWMXCw', 'ZQ264Axbjxg', 'bYbV_PFdfQs', 'IkyZHPnfFnE', 'HjV2aWgavdo', 'Rh03jAsRHQM'],
        backdropClosesModal: true
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Inline Gallery")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: function onClick() {
          _this2.setState({
            lightboxPhotoOpen: true
          });
        }
      }, "Inline Photo Gallery"), lightBoxPhoto), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: function onClick() {
          _this2.setState({
            lightboxVideoOpen: true
          });
        }
      }, "Inline Video Gallery"), lightBoxVideo)))))));
    }
  }]);

  return AdvanceLightBox;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AdvanceLightBox);

/***/ }),

/***/ "./resources/js/assets/images/light-box/l1.jpg":
/*!*****************************************************!*\
  !*** ./resources/js/assets/images/light-box/l1.jpg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/l1.jpg?93a6219dc2b166338f47b135d97cb4da";

/***/ }),

/***/ "./resources/js/assets/images/light-box/l2.jpg":
/*!*****************************************************!*\
  !*** ./resources/js/assets/images/light-box/l2.jpg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/l2.jpg?02cb3d510b1dd4f477fe5e7e553dafd9";

/***/ }),

/***/ "./resources/js/assets/images/light-box/l3.jpg":
/*!*****************************************************!*\
  !*** ./resources/js/assets/images/light-box/l3.jpg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/l3.jpg?7f6c7334abc3f78db0628dbe3395349d";

/***/ }),

/***/ "./resources/js/assets/images/light-box/l4.jpg":
/*!*****************************************************!*\
  !*** ./resources/js/assets/images/light-box/l4.jpg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/l4.jpg?62a5feba8124b9f65aa158559fe9b360";

/***/ }),

/***/ "./resources/js/assets/images/light-box/l5.jpg":
/*!*****************************************************!*\
  !*** ./resources/js/assets/images/light-box/l5.jpg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/l5.jpg?21f2fb8d81bd324077fb4247a21723f2";

/***/ }),

/***/ "./resources/js/assets/images/light-box/l6.jpg":
/*!*****************************************************!*\
  !*** ./resources/js/assets/images/light-box/l6.jpg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/l6.jpg?8100496ffd498d7e0b02009c090ba1ca";

/***/ }),

/***/ "./resources/js/assets/images/light-box/sl1.jpg":
/*!******************************************************!*\
  !*** ./resources/js/assets/images/light-box/sl1.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/sl1.jpg?7cb3091c0306ab282276aeaeb7cf7e66";

/***/ }),

/***/ "./resources/js/assets/images/light-box/sl2.jpg":
/*!******************************************************!*\
  !*** ./resources/js/assets/images/light-box/sl2.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/sl2.jpg?7c77c01e6fddd77e770fe78d6695be8e";

/***/ }),

/***/ "./resources/js/assets/images/light-box/sl3.jpg":
/*!******************************************************!*\
  !*** ./resources/js/assets/images/light-box/sl3.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/sl3.jpg?5353f860d10a289599f10972a9c1974e";

/***/ }),

/***/ "./resources/js/assets/images/light-box/sl4.jpg":
/*!******************************************************!*\
  !*** ./resources/js/assets/images/light-box/sl4.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/sl4.jpg?c35b115a11174af270f13671eb8901e0";

/***/ }),

/***/ "./resources/js/assets/images/light-box/sl5.jpg":
/*!******************************************************!*\
  !*** ./resources/js/assets/images/light-box/sl5.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/sl5.jpg?7886b480403b37d08a033b01b697907e";

/***/ }),

/***/ "./resources/js/assets/images/light-box/sl6.jpg":
/*!******************************************************!*\
  !*** ./resources/js/assets/images/light-box/sl6.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/sl6.jpg?e98dd07b353375109c085e2148c78ddc";

/***/ })

}]);