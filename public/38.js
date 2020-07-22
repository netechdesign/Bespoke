(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./resources/js/App/components/Gallery.js":
/*!************************************************!*\
  !*** ./resources/js/App/components/Gallery.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aphrodite/no-important */ "./node_modules/aphrodite/no-important.js");
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_images_texts_videos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-images-texts-videos */ "./node_modules/react-images-texts-videos/lib/Lightbox.js");
/* harmony import */ var react_images_texts_videos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_images_texts_videos__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/constant */ "./resources/js/store/constant.js");
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







var Gallery = /*#__PURE__*/function (_React$Component) {
  _inherits(Gallery, _React$Component);

  var _super = _createSuper(Gallery);

  function Gallery(props) {
    var _this;

    _classCallCheck(this, Gallery);

    _this = _super.call(this, props);
    var itemType;

    if (_this.props.images) {
      itemType = 'images';
    } else if (_this.props.texts) {
      itemType = 'texts';
    } else {
      itemType = 'videos';
    }

    _this.state = {
      lightboxIsOpen: false,
      currentItem: 0,
      itemType: itemType
    };
    _this.closeLightbox = _this.closeLightbox.bind(_assertThisInitialized(_this));
    _this.gotoNext = _this.gotoNext.bind(_assertThisInitialized(_this));
    _this.gotoPrevious = _this.gotoPrevious.bind(_assertThisInitialized(_this));
    _this.gotoItem = _this.gotoItem.bind(_assertThisInitialized(_this));
    _this.handleClickItem = _this.handleClickItem.bind(_assertThisInitialized(_this));
    _this.openLightbox = _this.openLightbox.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Gallery, [{
    key: "openLightbox",
    value: function openLightbox(event, index) {
      event.preventDefault();
      this.setState({
        currentItem: index,
        lightboxIsOpen: true
      });
    }
  }, {
    key: "closeLightbox",
    value: function closeLightbox() {
      this.setState({
        currentItem: 0,
        lightboxIsOpen: false
      });
    }
  }, {
    key: "gotoPrevious",
    value: function gotoPrevious() {
      this.setState({
        currentItem: this.state.currentItem - 1
      });
    }
  }, {
    key: "gotoNext",
    value: function gotoNext() {
      this.setState({
        currentItem: this.state.currentItem + 1
      });
    }
  }, {
    key: "gotoItem",
    value: function gotoItem(index) {
      this.setState({
        currentItem: index
      });
    }
  }, {
    key: "handleClickItem",
    value: function handleClickItem() {
      if (this.state.currentItem === this.props[this.state.itemType].length - 1) return;
      this.gotoNext();
    }
  }, {
    key: "renderGallery",
    value: function renderGallery() {
      var _this2 = this;

      if (this.state.itemType === 'images') {
        var images = this.props.images;
        if (!images) return;
        var gallery;

        if (this.props.singleItem) {
          gallery = images.filter(function (i) {
            return i.useForDemo;
          }).map(function (obj, i) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: obj.src,
              className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__["css"])(classes.thumbnail, classes[obj.orientation]),
              onClick: function onClick(e) {
                return _this2.openLightbox(e, i);
              },
              key: i
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-thumbnail"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              src: obj.thumbnail,
              className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__["css"])(classes.source),
              alt: ""
            })));
          });
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__["css"])(classes.gallery)
          }, gallery);
        } else {
          gallery = images.filter(function (i) {
            return i.useForDemo;
          }).map(function (obj, i) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
              xl: 2,
              lg: 3,
              md: 4,
              sm: 6,
              xs: 12,
              key: i,
              className: "mb-1"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: obj.src,
              className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__["css"])(classes.thumbnail, classes[obj.orientation]),
              onClick: function onClick(e) {
                return _this2.openLightbox(e, i);
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-thumbnail"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              src: obj.thumbnail,
              className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__["css"])(classes.source),
              alt: ""
            }))));
          });
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__["css"])(classes.gallery)
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, gallery));
        }
      } else if (this.state.itemType === 'texts') {
        var texts = this.props.texts;

        var _gallery;

        if (!texts) return;

        if (this.props.singleItem) {
          _gallery = texts.map(function (text, i) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__["css"])(classes.text_thumbail),
              key: i,
              onClick: function onClick(e) {
                return _this2.openLightbox(e, i);
              }
            }, text);
          });
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__["css"])(classes.gallery)
          }, _gallery);
        } else {
          _gallery = texts.map(function (text, i) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
              xl: 2,
              lg: 3,
              md: 4,
              sm: 6,
              xs: 12,
              key: i,
              className: "mb-1"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__["css"])(classes.text_thumbail),
              onClick: function onClick(e) {
                return _this2.openLightbox(e, i);
              }
            }, text));
          });
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__["css"])(classes.gallery)
          }, _gallery);
        }
      } else {
        var _gallery2;

        var videos = this.props.videos;
        if (!videos) return;

        if (this.props.singleItem) {
          _gallery2 = videos.map(function (videoId, i) {
            var videoThumbnail = "https://img.youtube.com/vi/".concat(videoId, "/0.jpg");
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: _store_constant__WEBPACK_IMPORTED_MODULE_4__["default"].BLANK_LINK,
              className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__["css"])(classes.video_thumbnail),
              key: i,
              onClick: function onClick(e) {
                return _this2.openLightbox(e, i);
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-thumbnail"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              src: videoThumbnail,
              className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__["css"])(classes.source_video),
              alt: ""
            })));
          });
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__["css"])(classes.gallery)
          }, _gallery2);
        } else {
          _gallery2 = videos.map(function (videoId, i) {
            var videoThumbnail = "https://img.youtube.com/vi/".concat(videoId, "/0.jpg");
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
              xl: 2,
              lg: 3,
              md: 4,
              sm: 6,
              xs: 12,
              key: i,
              className: "mb-1"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: _store_constant__WEBPACK_IMPORTED_MODULE_4__["default"].BLANK_LINK,
              className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__["css"])(classes.video_thumbnail),
              onClick: function onClick(e) {
                return _this2.openLightbox(e, i);
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-thumbnail"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              src: videoThumbnail,
              className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__["css"])(classes.source_video),
              alt: ""
            }))));
          });
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__["css"])(classes.gallery)
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, _gallery2));
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section"
      }, this.props.heading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, this.props.heading), this.props.subheading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, this.props.subheading), this.renderGallery(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_images_texts_videos__WEBPACK_IMPORTED_MODULE_3___default.a, {
        currentItem: this.state.currentItem,
        items: {
          type: this.state.itemType,
          items: this.props[this.state.itemType]
        },
        isOpen: this.state.lightboxIsOpen,
        onClickImage: function onClickImage() {
          return _this3.handleClickItem;
        },
        onClickNext: this.gotoNext,
        onClickPrev: this.gotoPrevious,
        onClickThumbnail: function onClickThumbnail() {
          return _this3.gotoItem;
        },
        onClose: this.closeLightbox,
        showThumbnails: this.props.showThumbnails,
        theme: this.props.theme,
        backdropClosesModal: this.props.backdropClosesModal
      }));
    }
  }]);

  return Gallery;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Gallery.displayName = 'Gallery';
var gutter = {
  small: 2,
  large: 4
};
var classes = aphrodite_no_important__WEBPACK_IMPORTED_MODULE_2__["StyleSheet"].create({
  gallery: {
    marginRight: -gutter.small,
    overflow: 'hidden',
    '@media (min-width: 500px)': {
      marginRight: -gutter.large
    }
  },
  // anchor
  thumbnail: {
    boxSizing: 'border-box',
    display: 'block',
    "float": 'left',
    lineHeight: 0,
    paddingRight: gutter.small,
    paddingBottom: gutter.small,
    overflow: 'hidden',
    '@media (min-width: 500px)': {
      paddingRight: gutter.large,
      paddingBottom: gutter.large
    }
  },
  // anchor
  video_thumbnail: {
    width: '50%',
    height: '258px',
    boxSizing: 'border-box',
    display: 'block',
    "float": 'left',
    lineHeight: 0,
    paddingRight: gutter.small,
    paddingBottom: gutter.small,
    overflow: 'hidden',
    '@media (min-width: 500px)': {
      paddingRight: gutter.large,
      paddingBottom: gutter.large
    }
  },
  // anchor
  text_thumbail: {
    cursor: 'pointer',
    height: '200px',
    'text-align': 'justify',
    'font-size': '16px',
    width: '46%',
    padding: '10px',
    margin: '10px',
    boxSizing: 'border-box',
    display: 'block',
    "float": 'left',
    overflow: 'scroll',
    border: 'solid 1px #E6E6E8',
    'border-radius': '4px',
    color: 'darkgray',
    '@media (min-width: 500px)': {}
  },
  // orientation
  landscape: {
    width: '30%'
  },
  square: {
    paddingBottom: 0,
    width: '40%',
    '@media (min-width: 500px)': {
      paddingBottom: 0
    }
  },
  // actual <img />
  source: {
    border: 0,
    display: 'block',
    height: 'auto',
    maxWidth: '100%',
    width: 'auto'
  },
  source_video: {
    border: 0,
    height: 'auto',
    maxWidth: '90%',
    width: 'auto'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ })

}]);