(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./resources/js/App/components/GalleryMasonry.js":
/*!*******************************************************!*\
  !*** ./resources/js/App/components/GalleryMasonry.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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



var GalleryMasonry = /*#__PURE__*/function (_React$Component) {
  _inherits(GalleryMasonry, _React$Component);

  var _super = _createSuper(GalleryMasonry);

  function GalleryMasonry(props) {
    var _this;

    _classCallCheck(this, GalleryMasonry);

    _this = _super.call(this, props);
    _this.state = {
      columns: 1
    };
    _this.onResize = _this.onResize.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(GalleryMasonry, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.onResize();
      window.addEventListener('resize', this.onResize);
    }
  }, {
    key: "getColumns",
    value: function getColumns(w) {
      return this.props.brakePoints.reduceRight(function (p, c, i) {
        return c < w ? p : i;
      }, this.props.brakePoints.length) + 1;
    }
  }, {
    key: "onResize",
    value: function onResize() {
      var columns = this.getColumns(this.refs.Masonry.offsetWidth);

      if (columns !== this.state.columns) {
        this.setState({
          columns: columns
        });
      }
    }
  }, {
    key: "mapChildren",
    value: function mapChildren() {
      var col = [];
      var numC = this.state.columns;

      for (var i = 0; i < numC; i++) {
        col.push([]);
      }

      return this.props.children.reduce(function (p, c, i) {
        p[i % numC].push(c);
        return p;
      }, col);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "masonry",
        ref: "Masonry"
      }, this.mapChildren().map(function (col, ci) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "column",
          key: ci
        }, col.map(function (child, i) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: i
          }, child);
        }));
      }));
    }
  }]);

  return GalleryMasonry;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (GalleryMasonry);

/***/ }),

/***/ "./resources/js/Demo/AppPages/Gallery/MasonryGallery.js":
/*!**************************************************************!*\
  !*** ./resources/js/Demo/AppPages/Gallery/MasonryGallery.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var _App_components_GalleryMasonry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../App/components/GalleryMasonry */ "./resources/js/App/components/GalleryMasonry.js");
/* harmony import */ var _assets_images_gallery_grid_masonry_1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/images/gallery-grid/masonry-1.jpg */ "./resources/js/assets/images/gallery-grid/masonry-1.jpg");
/* harmony import */ var _assets_images_gallery_grid_masonry_1_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_gallery_grid_masonry_1_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_gallery_grid_masonry_2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/images/gallery-grid/masonry-2.jpg */ "./resources/js/assets/images/gallery-grid/masonry-2.jpg");
/* harmony import */ var _assets_images_gallery_grid_masonry_2_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_gallery_grid_masonry_2_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_gallery_grid_masonry_3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/images/gallery-grid/masonry-3.jpg */ "./resources/js/assets/images/gallery-grid/masonry-3.jpg");
/* harmony import */ var _assets_images_gallery_grid_masonry_3_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_gallery_grid_masonry_3_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_gallery_grid_masonry_4_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/images/gallery-grid/masonry-4.jpg */ "./resources/js/assets/images/gallery-grid/masonry-4.jpg");
/* harmony import */ var _assets_images_gallery_grid_masonry_4_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_gallery_grid_masonry_4_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_gallery_grid_masonry_5_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/images/gallery-grid/masonry-5.jpg */ "./resources/js/assets/images/gallery-grid/masonry-5.jpg");
/* harmony import */ var _assets_images_gallery_grid_masonry_5_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_gallery_grid_masonry_5_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_images_gallery_grid_masonry_6_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/images/gallery-grid/masonry-6.jpg */ "./resources/js/assets/images/gallery-grid/masonry-6.jpg");
/* harmony import */ var _assets_images_gallery_grid_masonry_6_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_gallery_grid_masonry_6_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_images_gallery_grid_masonry_7_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../assets/images/gallery-grid/masonry-7.jpg */ "./resources/js/assets/images/gallery-grid/masonry-7.jpg");
/* harmony import */ var _assets_images_gallery_grid_masonry_7_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_images_gallery_grid_masonry_7_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_images_gallery_grid_masonry_8_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../assets/images/gallery-grid/masonry-8.jpg */ "./resources/js/assets/images/gallery-grid/masonry-8.jpg");
/* harmony import */ var _assets_images_gallery_grid_masonry_8_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_images_gallery_grid_masonry_8_jpg__WEBPACK_IMPORTED_MODULE_11__);
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













var brakePoints = [350, 500, 750];
var images = [_assets_images_gallery_grid_masonry_1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _assets_images_gallery_grid_masonry_2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a, _assets_images_gallery_grid_masonry_3_jpg__WEBPACK_IMPORTED_MODULE_6___default.a, _assets_images_gallery_grid_masonry_4_jpg__WEBPACK_IMPORTED_MODULE_7___default.a, _assets_images_gallery_grid_masonry_5_jpg__WEBPACK_IMPORTED_MODULE_8___default.a, _assets_images_gallery_grid_masonry_6_jpg__WEBPACK_IMPORTED_MODULE_9___default.a, _assets_images_gallery_grid_masonry_7_jpg__WEBPACK_IMPORTED_MODULE_10___default.a, _assets_images_gallery_grid_masonry_2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a, _assets_images_gallery_grid_masonry_8_jpg__WEBPACK_IMPORTED_MODULE_11___default.a, _assets_images_gallery_grid_masonry_4_jpg__WEBPACK_IMPORTED_MODULE_7___default.a];

var Tile = function Tile(_ref) {
  var src = _ref.src;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: src,
    alt: "mg"
  }));
};

var TileCard = function TileCard(_ref2) {
  var src = _ref2.src;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Img, {
    variant: "top",
    src: src
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "job-card-desc"
  }, "Job Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "job-meta-data mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-map-marker-alt"
  }), "washington"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "job-meta-data"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-handshake"
  }), "10 Years")));
};

var MasonryGallery = /*#__PURE__*/function (_React$Component) {
  _inherits(MasonryGallery, _React$Component);

  var _super = _createSuper(MasonryGallery);

  function MasonryGallery() {
    _classCallCheck(this, MasonryGallery);

    return _super.apply(this, arguments);
  }

  _createClass(MasonryGallery, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Gallery Masonry")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_GalleryMasonry__WEBPACK_IMPORTED_MODULE_3__["default"], {
        brakePoints: brakePoints
      }, images.map(function (image, id) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tile, {
          key: id,
          src: image
        });
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Gallery With Description")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_GalleryMasonry__WEBPACK_IMPORTED_MODULE_3__["default"], {
        brakePoints: brakePoints
      }, images.map(function (image, id) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TileCard, {
          key: id,
          src: image
        });
      })))))));
    }
  }]);

  return MasonryGallery;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MasonryGallery);

/***/ }),

/***/ "./resources/js/assets/images/gallery-grid/masonry-1.jpg":
/*!***************************************************************!*\
  !*** ./resources/js/assets/images/gallery-grid/masonry-1.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/masonry-1.jpg?57083290fc6f0a303031d0b0a151505f";

/***/ }),

/***/ "./resources/js/assets/images/gallery-grid/masonry-2.jpg":
/*!***************************************************************!*\
  !*** ./resources/js/assets/images/gallery-grid/masonry-2.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/masonry-2.jpg?77b0f57abfa850a1181e81b8f36f5d22";

/***/ }),

/***/ "./resources/js/assets/images/gallery-grid/masonry-3.jpg":
/*!***************************************************************!*\
  !*** ./resources/js/assets/images/gallery-grid/masonry-3.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/masonry-3.jpg?6bf8b40b54b013949a54cae8f25cdfa8";

/***/ }),

/***/ "./resources/js/assets/images/gallery-grid/masonry-4.jpg":
/*!***************************************************************!*\
  !*** ./resources/js/assets/images/gallery-grid/masonry-4.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/masonry-4.jpg?b63db5642c9738dca1cc7d2607c8b023";

/***/ }),

/***/ "./resources/js/assets/images/gallery-grid/masonry-5.jpg":
/*!***************************************************************!*\
  !*** ./resources/js/assets/images/gallery-grid/masonry-5.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/masonry-5.jpg?7a9c2d1282b985a76e9fcb29c45dabb6";

/***/ }),

/***/ "./resources/js/assets/images/gallery-grid/masonry-6.jpg":
/*!***************************************************************!*\
  !*** ./resources/js/assets/images/gallery-grid/masonry-6.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/masonry-6.jpg?b8ab7394c9d8780f6207ad571a4d3955";

/***/ }),

/***/ "./resources/js/assets/images/gallery-grid/masonry-7.jpg":
/*!***************************************************************!*\
  !*** ./resources/js/assets/images/gallery-grid/masonry-7.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/masonry-7.jpg?0056ac00a7de9b5aeba445859934625a";

/***/ }),

/***/ "./resources/js/assets/images/gallery-grid/masonry-8.jpg":
/*!***************************************************************!*\
  !*** ./resources/js/assets/images/gallery-grid/masonry-8.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/masonry-8.jpg?9a27bd039806238692b747809e10433d";

/***/ })

}]);