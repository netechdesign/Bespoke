(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73],{

/***/ "./resources/js/Demo/UIElements/Advance/Slider.js":
/*!********************************************************!*\
  !*** ./resources/js/Demo/UIElements/Advance/Slider.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var _assets_images_slider_img_slide_1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/images/slider/img-slide-1.jpg */ "./resources/js/assets/images/slider/img-slide-1.jpg");
/* harmony import */ var _assets_images_slider_img_slide_1_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_slider_img_slide_1_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_slider_img_slide_2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/images/slider/img-slide-2.jpg */ "./resources/js/assets/images/slider/img-slide-2.jpg");
/* harmony import */ var _assets_images_slider_img_slide_2_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_slider_img_slide_2_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_slider_img_slide_3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/images/slider/img-slide-3.jpg */ "./resources/js/assets/images/slider/img-slide-3.jpg");
/* harmony import */ var _assets_images_slider_img_slide_3_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_slider_img_slide_3_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_slider_img_slide_4_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/images/slider/img-slide-4.jpg */ "./resources/js/assets/images/slider/img-slide-4.jpg");
/* harmony import */ var _assets_images_slider_img_slide_4_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_slider_img_slide_4_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_slider_img_slide_5_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/images/slider/img-slide-5.jpg */ "./resources/js/assets/images/slider/img-slide-5.jpg");
/* harmony import */ var _assets_images_slider_img_slide_5_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_slider_img_slide_5_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_images_slider_img_slide_6_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/images/slider/img-slide-6.jpg */ "./resources/js/assets/images/slider/img-slide-6.jpg");
/* harmony import */ var _assets_images_slider_img_slide_6_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_slider_img_slide_6_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_images_slider_img_slide_7_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../assets/images/slider/img-slide-7.jpg */ "./resources/js/assets/images/slider/img-slide-7.jpg");
/* harmony import */ var _assets_images_slider_img_slide_7_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_images_slider_img_slide_7_jpg__WEBPACK_IMPORTED_MODULE_10__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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













var AdvanceSlider = /*#__PURE__*/function (_React$Component) {
  _inherits(AdvanceSlider, _React$Component);

  var _super = _createSuper(AdvanceSlider);

  function AdvanceSlider(props) {
    var _this;

    _classCallCheck(this, AdvanceSlider);

    _this = _super.call(this, props);
    _this.next = _this.next.bind(_assertThisInitialized(_this));
    _this.previous = _this.previous.bind(_assertThisInitialized(_this));
    _this.nextNav = _this.nextNav.bind(_assertThisInitialized(_this));
    _this.previousNav = _this.previousNav.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AdvanceSlider, [{
    key: "next",
    value: function next() {
      this.slider.slickNext();
    }
  }, {
    key: "previous",
    value: function previous() {
      this.slider.slickPrev();
    }
  }, {
    key: "nextNav",
    value: function nextNav() {
      this.sliderNav.slickNext();
    }
  }, {
    key: "previousNav",
    value: function previousNav() {
      this.sliderNav.slickPrev();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var settingsBasic = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '500px',
        autoplay: true,
        autoplaySpeed: 5000
      };
      var settingsMultiResponsive = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        }, {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      };
      var settingsDots = {
        dots: true,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000
      };
      var settingsButtons = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      };
      var settingsNavButtonDots = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,

        /*autoplay: true,
        autoplaySpeed: 1500,*/
        appendDots: function appendDots(dots) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "pc-dots",
            style: {
              backgroundColor: "#000",
              padding: "8px",
              bottom: "-33px"
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
            className: "p-0 m-0"
          }, " ", dots, " "));
        },
        customPaging: function customPaging(i) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "pc-dot"
          }, i + 1);
        }
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 12,
        xl: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Basic Slider")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, settingsBasic, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "Slide1"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_3_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
        alt: "Slide3"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: "Slide2"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_4_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
        alt: "Slide4"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_5_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "Slide5"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_6_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
        alt: "Slide6"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_7_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
        alt: "Slide7"
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 12,
        xl: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Only Dots with Fade")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, settingsDots, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "Slide1"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_3_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
        alt: "Slide3"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: "Slide2"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_4_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
        alt: "Slide4"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_5_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "Slide5"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_6_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
        alt: "Slide6"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_7_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
        alt: "Slide7"
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 12,
        xl: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Custom Buttons and Dots")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
        ref: function ref(c) {
          return _this2.slider = c;
        }
      }, settingsNavButtonDots), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "Slide1"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_3_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
        alt: "Slide3"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: "Slide2"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_4_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
        alt: "Slide4"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_5_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "Slide5"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_6_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
        alt: "Slide6"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_7_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
        alt: "Slide7"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mt-5 text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        onClick: this.previous
      }, "Previous"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        onClick: this.next
      }, "Next"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 12,
        xl: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Only Nav Buttons")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
        ref: function ref(c) {
          return _this2.sliderNav = c;
        }
      }, settingsButtons), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "Slide1"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_3_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
        alt: "Slide3"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: "Slide2"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_4_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
        alt: "Slide4"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_5_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "Slide5"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_6_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
        alt: "Slide6"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "d-block w-100",
        src: _assets_images_slider_img_slide_7_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
        alt: "Slide7"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        onClick: this.previousNav
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-chevron-left m-0"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        onClick: this.nextNav
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-chevron-right m-0"
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Multi-Items with Responsive Slider")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, settingsMultiResponsive, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-10"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "w-100",
        src: _assets_images_slider_img_slide_1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "Slide1"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-10"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "w-100",
        src: _assets_images_slider_img_slide_3_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
        alt: "Slide3"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-10"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "w-100",
        src: _assets_images_slider_img_slide_2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: "Slide2"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-10"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "w-100",
        src: _assets_images_slider_img_slide_4_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
        alt: "Slide4"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-10"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "w-100",
        src: _assets_images_slider_img_slide_5_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "Slide5"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-10"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "w-100",
        src: _assets_images_slider_img_slide_6_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
        alt: "Slide6"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-10"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "w-100",
        src: _assets_images_slider_img_slide_7_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
        alt: "Slide7"
      }))))))));
    }
  }]);

  return AdvanceSlider;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AdvanceSlider);

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