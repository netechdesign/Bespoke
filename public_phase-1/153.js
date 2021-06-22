(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[153],{

/***/ "./resources/js/Demo/UIElements/Advance/PNotify.js":
/*!*********************************************************!*\
  !*** ./resources/js/Demo/UIElements/Advance/PNotify.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pnotify/dist/es/PNotify */ "./node_modules/pnotify/dist/es/PNotify.js");
/* harmony import */ var pnotify_dist_es_PNotifyButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pnotify/dist/es/PNotifyButtons */ "./node_modules/pnotify/dist/es/PNotifyButtons.js");
/* harmony import */ var pnotify_dist_es_PNotifyConfirm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pnotify/dist/es/PNotifyConfirm */ "./node_modules/pnotify/dist/es/PNotifyConfirm.js");
/* harmony import */ var pnotify_dist_es_PNotifyCallbacks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pnotify/dist/es/PNotifyCallbacks */ "./node_modules/pnotify/dist/es/PNotifyCallbacks.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
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










function defaultPNotify() {
  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].notice({
    title: "Default Notice",
    text: "Check me out! I'm notice"
  });
}

function primaryPNotify() {
  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].notice({
    title: "Primary Notice",
    text: "Check me out! I'm notice"
  });
}

function successPNotify() {
  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].success({
    title: "Success Notice",
    text: "Check me out! I'm notice"
  });
}

function infoPNotify() {
  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].info({
    title: "Info Notice",
    text: "Check me out! I'm notice"
  });
}

function errorPNotify() {
  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].error({
    title: "Error Notice",
    text: "Check me out! I'm notice"
  });
}

function successDesktopPNotify() {
  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].success({
    title: 'Success Desktop Notice',
    text: "I'm a success desktop notification, if you have given me a permission.",
    modules: {
      Desktop: {
        desktop: true
      }
    }
  }).on('click', function (e) {
    if (e.target.className.match('ui-pnotify-sticker') || e.target.className.match('ui-pnotify-closer') || e.target.className.match('brighttheme-icon-sticker') || e.target.className.match('brighttheme-icon-closer')) {
      return;
    }

    alert('Hey! You clicked the desktop notification!');
  });
}

function errorDesktopPNotify() {
  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].error({
    title: 'Error Desktop Notice',
    text: "I'm a error desktop notification, if you have given me a permission.",
    modules: {
      Desktop: {
        desktop: true
      }
    }
  }).on('click', function (e) {
    if (e.target.className.match('ui-pnotify-sticker') || e.target.className.match('ui-pnotify-closer') || e.target.className.match('brighttheme-icon-sticker') || e.target.className.match('brighttheme-icon-closer')) {
      return;
    }

    alert('Hey! You clicked the desktop notification!');
  });
}

function warningDesktopPNotify() {
  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].notice({
    title: 'Warning Desktop Notice',
    text: "I'm a warning desktop notification, if you have given me a permission.",
    modules: {
      Desktop: {
        desktop: true
      }
    }
  }).on('click', function (e) {
    if (e.target.className.match('ui-pnotify-sticker') || e.target.className.match('ui-pnotify-closer') || e.target.className.match('brighttheme-icon-sticker') || e.target.className.match('brighttheme-icon-closer')) {
      return;
    }

    alert('Hey! You clicked the desktop notification!');
  });
}

function infoDesktopPNotify() {
  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].info({
    title: 'Info Desktop Notice',
    text: "I'm a info desktop notification, if you have given me a permission.",
    modules: {
      Desktop: {
        desktop: true
      }
    }
  }).on('click', function (e) {
    if (e.target.className.match('ui-pnotify-sticker') || e.target.className.match('ui-pnotify-closer') || e.target.className.match('brighttheme-icon-sticker') || e.target.className.match('brighttheme-icon-closer')) {
      return;
    }

    alert('Hey! You clicked the desktop notification!');
  });
}

function topLeftPNotify() {
  if (typeof window.stackTopLeft === 'undefined') {
    window.stackTopLeft = {
      'dir1': 'down',
      'dir2': 'right',
      'firstpos1': 25,
      'firstpos2': 25,
      'push': 'top'
    };
  }

  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].notice({
    title: "Over here",
    text: "Check me out. I'm in a different stack.",
    stack: window.stackTopLeft
  });
}

function bottomLeftPNotify() {
  if (typeof window.stackBottomLeft === 'undefined') {
    window.stackBottomLeft = {
      'dir1': 'right',
      'dir2': 'up',
      'firstpos1': 25,
      'firstpos2': 25,
      'push': 'top'
    };
  }

  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].notice({
    title: "Over here",
    text: "Check me out. I'm in a different stack.",
    stack: window.stackBottomLeft
  });
}

function bottomRightPNotify() {
  if (typeof window.stackBottomRight === 'undefined') {
    window.stackBottomRight = {
      'dir1': 'up',
      'dir2': 'left',
      'firstpos1': 25,
      'firstpos2': 25
    };
  }

  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].notice({
    title: "Over here",
    text: "Check me out. I'm in a different stack.",
    stack: window.stackBottomRight
  });
}

function customLeftPNotify() {
  if (typeof window.stackCustomLeft === 'undefined') {
    window.stackCustomLeft = {
      'dir1': 'right',
      'dir2': 'down',
      'firstpos1': 200,
      'firstpos2': 200
    };
  }

  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].success({
    title: "Good News Everyone",
    text: "I've invented a device that bites shiny metal asses.",
    stack: window.stackCustomLeft
  });
}

function customBottomPNotify() {
  if (typeof window.stackCustomBottom === 'undefined') {
    window.stackCustomBottom = {
      'dir1': 'left',
      'dir2': 'up',
      'firstpos1': 200,
      'firstpos2': 200
    };
  }

  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].success({
    title: "Good News Everyone",
    text: "I've invented a device that bites shiny metal asses.",
    stack: window.stackCustomBottom
  });
}

function barTopPNotify() {
  if (typeof window.stackBarTop === 'undefined') {
    window.stackBarTop = {
      'dir1': 'down',
      'firstpos1': 0,
      'spacing1': 2,
      'push': 'top'
    };
  }

  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].info({
    title: "Breaking News",
    text: "Have you met Ted?",
    addClass: 'stack-bar-top',
    cornerClass: 'ui-pnotify-sharp',
    shadow: false,
    width: '100%',
    stack: window.stackBarTop
  });
}

function barBottomPNotify() {
  if (typeof window.stackBarBottom === 'undefined') {
    window.stackBarBottom = {
      'dir1': 'up',
      'firstpos1': 0,
      'spacing1': 2,
      'push': 'top'
    };
  }

  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].info({
    title: "Breaking News",
    text: "Have you met Ted?",
    addClass: 'stack-bar-bottom',
    cornerClass: 'ui-pnotify-sharp',
    shadow: false,
    width: '100%',
    stack: window.stackBarBottom
  });
}

function noTitlePNotify() {
  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].notice({
    title: false,
    text: "Check me out! I'm a notice without title.",
    icon: false
  });
}

function richContentPNotify() {
  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].notice({
    title: '<b>Rich content notice</b>',
    titleTrusted: true,
    text: "Look at my beautiful <strong>strong</strong>, <a href='#' class='alert-link'>linked</a>, <em>emphasized</em>, and <u>underlined</u> text with <i class='icon-make-group' /> icon.",
    textTrusted: true
  });
}

function closeOnClickPNotify() {
  var notice = pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].notice({
    title: 'Close on click',
    text: 'Click me anywhere to dismiss me.',
    hide: false,
    icon: false,
    modules: {
      Buttons: {
        closer: false,
        sticker: false
      }
    }
  });
  notice.on('click', function () {
    notice.close();
  });
}

function customButtonPNotify() {
  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].notice({
    title: 'Choose a Side',
    text: 'You have three options to choose from.',
    icon: 'fa fa-question-circle',
    hide: false,
    modules: {
      Confirm: {
        confirm: true,
        buttons: [{
          text: 'Fries',
          primary: true,
          click: function click(notice) {
            notice.update({
              title: 'You\'ve Chosen a Side',
              text: 'You want fries.',
              icon: true,
              type: 'error',
              hide: true,
              modules: {
                Confirm: {
                  confirm: false
                },
                Buttons: {
                  closer: true,
                  sticker: true
                }
              }
            });
          }
        }, {
          text: 'Mash',
          click: function click(notice) {
            notice.update({
              title: 'You\'ve Chosen a Side',
              text: 'You want mashed potatoes.',
              icon: true,
              type: 'info',
              hide: true,
              modules: {
                Confirm: {
                  confirm: false
                },
                Buttons: {
                  closer: true,
                  sticker: true
                }
              }
            });
          }
        }, {
          text: 'Fruit',
          click: function click(notice) {
            notice.update({
              title: 'You\'ve Chosen a Side',
              text: 'You want fruit.',
              icon: true,
              type: 'success',
              hide: true,
              modules: {
                Confirm: {
                  confirm: false
                },
                Buttons: {
                  closer: true,
                  sticker: true
                }
              }
            });
          }
        }]
      },
      Buttons: {
        closer: false,
        sticker: false
      },
      History: {
        history: false
      }
    }
  });
}

function callbackButtonPNotify() {
  var dontAlert = function dontAlert() {};

  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].notice({
    title: 'I\'m Here',
    text: 'I have a callback for each of my events. I\'ll call all my callbacks while I change states.',
    modules: {
      Callbacks: {
        beforeInit: function beforeInit(opts) {
          dontAlert('I\'m called before the notice initializes. I\'m passed the options used to make the notice. I can modify them. Watch me replace the word callback with tire iron!');
          opts.text = opts.text.replace(/callback/g, 'tire iron');
        },
        afterInit: function afterInit(notice) {
          dontAlert('I\'m called after the notice initializes. I\'m passed the PNotify object for the current notice: ' + notice + '\n\nThere are more callbacks you can assign, but this is the last notice you\'ll see. Check the code to see them all.');
        },
        beforeOpen: function beforeOpen(notice) {
          alert('I\'m called before the notice opens. I\'m passed the PNotify object for the current notice: ' + notice);
        },
        afterOpen: function afterOpen(notice) {
          dontAlert('I\'m called after the notice opens. I\'m passed the PNotify object for the current notice: ' + notice);
        },
        beforeClose: function beforeClose(notice, timerHide) {
          alert('I\'m called before the notice closes. I\'m passed the PNotify object for the current notice: ' + notice);
          dontAlert('I also have an argument called timerHide, which is true if the notice was closed because the timer ran down. Value: ' + timerHide);
        },
        afterClose: function afterClose(notice, timerHide) {
          dontAlert('I\'m called after the notice closes. I\'m passed the PNotify object for the current notice: ' + notice);
          dontAlert('I also have an argument called timerHide, which is true if the notice was closed because the timer ran down. Value: ' + timerHide);
        }
      }
    }
  });
}

function progressButtonPNotify() {
  var curValue = 1;
  var progress;
  var loader = pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].notice({
    title: 'Creating series of tubes',
    text: '<div class="progress">\n' + '  <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0"></div>\n' + '</div>',
    textTrusted: true,
    icon: 'fa fa-cog fa-spin',
    hide: false,
    modules: {
      Buttons: {
        closer: false,
        sticker: false
      },
      History: {
        history: false
      },
      Callbacks: {
        beforeOpen: function beforeOpen(notice) {
          progress = jquery__WEBPACK_IMPORTED_MODULE_6__(notice.refs.elem).find('div.progress-bar');
          progress.width(curValue + '%').attr('aria-valuenow', curValue);
          var plus = 1;
          var timer = setInterval(function () {
            if (curValue === 70) {
              plus = 0.25;
              loader.update({
                title: 'Aligning discrete worms',
                icon: 'fa fa-circle-notch fa-spin'
              });
            }

            if (curValue === 80) {
              loader.update({
                title: 'Connecting end points',
                icon: 'fa fa-sync fa-spin'
              });
            }

            if (curValue === 90) {
              loader.update({
                title: 'Dividing and conquering',
                icon: 'fa fa-spinner fa-pulse'
              });
            }

            if (curValue >= 100) {
              window.clearInterval(timer);
              loader.close();
              return;
            }

            curValue += plus;
            progress.width(curValue + '%').attr('aria-valuenow', curValue);
          }, 65);
        }
      }
    }
  });
}

function dynamicProgressButtonPNotify() {
  var percent = 0;
  var notice = pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].info({
    text: 'Please Wait',
    icon: 'fa fa-spinner fa-pulse',
    hide: false,
    shadow: false,
    width: '200px',
    modules: {
      Buttons: {
        closer: false,
        sticker: false
      }
    }
  });
  setTimeout(function () {
    notice.update({
      title: false
    });
    var interval = setInterval(function () {
      percent += 2;
      var options = {
        text: percent + '% complete.'
      };

      if (percent === 80) {
        options.title = 'Almost There';
      }

      if (percent >= 100) {
        window.clearInterval(interval);
        options.title = 'Done!';
        options.type = 'success';
        options.hide = true;
        options.icon = 'fa fa-check';
        options.shadow = true;
        options.width = pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].defaults.width;
        options.modules = {
          Buttons: {
            closer: true,
            sticker: true
          }
        };
      }

      notice.update(options);
    }, 120);
  }, 2000);
}

function multiLinePNotify() {
  var notice = pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].notice({
    title: 'Input Needed',
    text: 'Write me a poem, please.',
    icon: 'fa fa-question-circle',
    hide: false,
    modules: {
      Confirm: {
        prompt: true,
        promptMultiLine: true,
        promptValue: 'Roses are red,\nViolets are blue,\n'
      },
      Buttons: {
        closer: false,
        sticker: false
      },
      History: {
        history: false
      }
    }
  });
  notice.on('pnotify.confirm', function (e) {
    notice.cancelClose().update({
      title: 'Your Poem',
      text: e.value,
      icon: true,
      type: 'success',
      hide: true,
      modules: {
        Confirm: {
          prompt: false
        },
        Buttons: {
          closer: true,
          sticker: true
        }
      }
    });
  });
  notice.on('pnotify.cancel', function (e) {
    notice.cancelClose().update({
      title: 'You Don\'t Like Poetry',
      text: 'Roses are dead,\nViolets are dead,\nI suck at gardening.',
      icon: true,
      type: 'error',
      hide: true,
      modules: {
        Confirm: {
          prompt: false
        },
        Buttons: {
          closer: true,
          sticker: true
        }
      }
    });
  });
}

function promptPNotify() {
  var notice = pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].notice({
    title: 'Input Needed',
    text: 'What side would you like?',
    icon: 'fa fa-question-circle',
    hide: false,
    modules: {
      Confirm: {
        prompt: true
      },
      Buttons: {
        closer: false,
        sticker: false
      },
      History: {
        history: false
      }
    }
  });
  notice.on('pnotify.confirm', function (e) {
    notice.cancelClose().update({
      title: 'You\'ve Chosen a Side',
      text: 'You want ' + e.value + '.',
      icon: true,
      type: 'success',
      hide: true,
      modules: {
        Confirm: {
          prompt: false
        },
        Buttons: {
          closer: true,
          sticker: true
        }
      }
    });
  });
  notice.on('pnotify.cancel', function (e) {
    notice.cancelClose().update({
      title: 'You Don\'t Want a Side',
      text: 'No soup for you!',
      icon: true,
      type: 'error',
      hide: true,
      modules: {
        Confirm: {
          prompt: false
        },
        Buttons: {
          closer: true,
          sticker: true
        }
      }
    });
  });
}

function confirmPNotify() {
  var notice = pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].notice({
    title: 'Confirmation Needed',
    text: 'Are you sure?',
    icon: 'fa fa-question-circle',
    hide: false,
    modules: {
      Confirm: {
        confirm: true
      },
      Buttons: {
        closer: false,
        sticker: false
      },
      History: {
        history: false
      }
    }
  });
  notice.on('pnotify.confirm', function () {
    alert('Ok, cool.');
  });
  notice.on('pnotify.cancel', function () {
    alert('Oh ok. Chicken, I see.');
  });
}

function stickeyPNotify() {
  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].notice({
    title: 'Sticky Notice',
    text: 'Check me out! I\'m a sticky notice. You\'ll have to close me yourself.',
    hide: false
  });
}

function permanentPNotify() {
  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].notice({
    title: 'Permanent Buttons Notice',
    text: 'My buttons are really lonely, so they\'re gonna hang out with us.',
    modules: {
      Buttons: {
        closerHover: false,
        stickerHover: false
      }
    }
  });
}

var AdvancePNotify = /*#__PURE__*/function (_React$Component) {
  _inherits(AdvancePNotify, _React$Component);

  var _super = _createSuper(AdvancePNotify);

  function AdvancePNotify() {
    _classCallCheck(this, AdvancePNotify);

    return _super.apply(this, arguments);
  }

  _createClass(AdvancePNotify, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Notification Alert")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
        responsive: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Default Notice"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        variant: "inverse",
        onClick: defaultPNotify
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-bell"
      }), " Click Here!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Use method ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "notice"), " with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "PNotify"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Primary Notice"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        variant: "primary",
        onClick: primaryPNotify
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-bell"
      }), " Click Here!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Use method ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "notice"), " with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "PNotify"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Success Notice"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        variant: "success",
        onClick: successPNotify
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-bell"
      }), " Click Here!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Use method ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "success"), " with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "PNotify"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Info Notice"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        variant: "info",
        onClick: infoPNotify
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-bell"
      }), " Click Here!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Use method ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "info"), " with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "PNotify"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Error Notice"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        variant: "danger",
        onClick: errorPNotify
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-bell"
      }), " Click Here!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Use method ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "error"), " with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "PNotify"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Desktop Alert")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, null, "Use variant method from notification alert and set ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "option"), " like, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "modules:{ Desktop: { desktop: true}}"), " with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "PNotify")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "success",
        onClick: successDesktopPNotify
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-bell"
      }), " Click Here!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "info",
        onClick: infoDesktopPNotify
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-bell"
      }), " Click Here!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "warning",
        onClick: warningDesktopPNotify
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-bell"
      }), " Click Here!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "danger",
        onClick: errorDesktopPNotify
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-bell"
      }), " Click Here!"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Notification Position")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
        responsive: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Top Left"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        onClick: topLeftPNotify
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-bell"
      }), " Click Here!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Set ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "option"), " like, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "stack:{'dir1': 'down', 'dir2': 'right', 'firstpos1': 25, 'firstpos2': 25, 'push': 'top'}"), " with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "PNotify"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Bottom Left"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        onClick: bottomLeftPNotify
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-bell"
      }), " Click Here!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Set ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "option"), " like, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "stack:{'dir1': 'right', 'dir2': 'up', 'firstpos1': 25, 'firstpos2': 25, 'push': 'top'}"), " with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "PNotify"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Bottom Right"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        onClick: bottomRightPNotify
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-bell"
      }), " Click Here!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Set ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "option"), " like, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "stack:{'dir1': 'up', 'dir2': 'left', 'firstpos1': 25, 'firstpos2': 25}"), " with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "PNotify"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Custom Left"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        onClick: customLeftPNotify
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-bell"
      }), " Click Here!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Set ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "option"), " like, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "stack:{'dir1': 'right', 'dir2': 'down', 'firstpos1': 200, 'firstpos2': 200}"), " with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "PNotify"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Custom Right"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        onClick: customBottomPNotify
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-bell"
      }), " Click Here!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Set ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "option"), " like, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "stack:{'dir1': 'left', 'dir2': 'up', 'firstpos1': 200, 'firstpos2': 200}"), " with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "PNotify"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Custom Top"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        onClick: barTopPNotify
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-bell"
      }), " Click Here!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Set ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "option"), " like, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "stack:{'dir1': 'down', 'firstpos1': 0, 'spacing1': 2, 'push': 'top'}"), " with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "PNotify"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Custom Bottom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        onClick: barBottomPNotify
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-bell"
      }), " Click Here!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Set ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "option"), " like, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "stack:{'dir1': 'up', 'firstpos1': 0, 'spacing1': 2, 'push': 'top'}"), " with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "PNotify"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Notification Position")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
        responsive: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "No Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        onClick: noTitlePNotify
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-bell"
      }), " Click Here!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Set ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "option"), " like, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "title:false, icon: false"), " with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "PNotify"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Rich Title/Content"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        onClick: richContentPNotify
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-bell"
      }), " Click Here!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Set ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "option"), " like, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "titleTrusted:true, textTrusted: true"), " with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "PNotify"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Click to Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        onClick: closeOnClickPNotify
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-bell"
      }), " Click Here!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Set ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "function"), " like, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "closeOnClickPNotify"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Custom Button"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        onClick: customButtonPNotify
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-bell"
      }), " Click Here!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Set ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "function"), " like, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "customButtonPNotify"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Callback Button"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        onClick: callbackButtonPNotify
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-bell"
      }), " Click Here!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Set ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "function"), " like, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "callbackButtonPNotify"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Progress Button"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        onClick: progressButtonPNotify
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-bell"
      }), " Click Here!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Set ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "function"), " like, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "progressButtonPNotify"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Dynamic Progress Button"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        onClick: dynamicProgressButtonPNotify
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-bell"
      }), " Click Here!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Set ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "function"), " like, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "dynamicProgressButtonPNotify"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Multi Line Props"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        onClick: multiLinePNotify
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-bell"
      }), " Click Here!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Set ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "function"), " like, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "multiLinePNotify"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Prompt Button"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        onClick: promptPNotify
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-bell"
      }), " Click Here!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Set ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "function"), " like, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "promptPNotify"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Confirm Button"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        onClick: confirmPNotify
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-bell"
      }), " Click Here!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Set ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "function"), " like, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "confirmPNotify"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Stickey Button"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        onClick: stickeyPNotify
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-bell"
      }), " Click Here!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Set ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "function"), " like, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "stickeyPNotify"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Permanent Button"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "sm",
        onClick: permanentPNotify
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-bell"
      }), " Click Here!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Set ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "function"), " like, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "permanentPNotify"))))))))));
    }
  }]);

  return AdvancePNotify;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AdvancePNotify);

/***/ })

}]);