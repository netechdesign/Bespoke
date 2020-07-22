(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/deep-diff/index.js":
/*!*****************************************!*\
  !*** ./node_modules/deep-diff/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;(function(root, factory) { // eslint-disable-line no-extra-semi
  var deepDiff = factory(root);
  // eslint-disable-next-line no-undef
  if (true) {
      // AMD
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { // eslint-disable-line no-undef
          return deepDiff;
      }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var _deepdiff; }
}(this, function(root) {
  var validKinds = ['N', 'E', 'A', 'D'];

  // nodejs compatible on server side and in the browser.
  function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  }

  function Diff(kind, path) {
    Object.defineProperty(this, 'kind', {
      value: kind,
      enumerable: true
    });
    if (path && path.length) {
      Object.defineProperty(this, 'path', {
        value: path,
        enumerable: true
      });
    }
  }

  function DiffEdit(path, origin, value) {
    DiffEdit.super_.call(this, 'E', path);
    Object.defineProperty(this, 'lhs', {
      value: origin,
      enumerable: true
    });
    Object.defineProperty(this, 'rhs', {
      value: value,
      enumerable: true
    });
  }
  inherits(DiffEdit, Diff);

  function DiffNew(path, value) {
    DiffNew.super_.call(this, 'N', path);
    Object.defineProperty(this, 'rhs', {
      value: value,
      enumerable: true
    });
  }
  inherits(DiffNew, Diff);

  function DiffDeleted(path, value) {
    DiffDeleted.super_.call(this, 'D', path);
    Object.defineProperty(this, 'lhs', {
      value: value,
      enumerable: true
    });
  }
  inherits(DiffDeleted, Diff);

  function DiffArray(path, index, item) {
    DiffArray.super_.call(this, 'A', path);
    Object.defineProperty(this, 'index', {
      value: index,
      enumerable: true
    });
    Object.defineProperty(this, 'item', {
      value: item,
      enumerable: true
    });
  }
  inherits(DiffArray, Diff);

  function arrayRemove(arr, from, to) {
    var rest = arr.slice((to || from) + 1 || arr.length);
    arr.length = from < 0 ? arr.length + from : from;
    arr.push.apply(arr, rest);
    return arr;
  }

  function realTypeOf(subject) {
    var type = typeof subject;
    if (type !== 'object') {
      return type;
    }

    if (subject === Math) {
      return 'math';
    } else if (subject === null) {
      return 'null';
    } else if (Array.isArray(subject)) {
      return 'array';
    } else if (Object.prototype.toString.call(subject) === '[object Date]') {
      return 'date';
    } else if (typeof subject.toString === 'function' && /^\/.*\//.test(subject.toString())) {
      return 'regexp';
    }
    return 'object';
  }

  // http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
  function hashThisString(string) {
    var hash = 0;
    if (string.length === 0) { return hash; }
    for (var i = 0; i < string.length; i++) {
      var char = string.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
  }

  // Gets a hash of the given object in an array order-independent fashion
  // also object key order independent (easier since they can be alphabetized)
  function getOrderIndependentHash(object) {
    var accum = 0;
    var type = realTypeOf(object);

    if (type === 'array') {
      object.forEach(function (item) {
        // Addition is commutative so this is order indep
        accum += getOrderIndependentHash(item);
      });

      var arrayString = '[type: array, hash: ' + accum + ']';
      return accum + hashThisString(arrayString);
    }

    if (type === 'object') {
      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          var keyValueString = '[ type: object, key: ' + key + ', value hash: ' + getOrderIndependentHash(object[key]) + ']';
          accum += hashThisString(keyValueString);
        }
      }

      return accum;
    }

    // Non object, non array...should be good?
    var stringToHash = '[ type: ' + type + ' ; value: ' + object + ']';
    return accum + hashThisString(stringToHash);
  }

  function deepDiff(lhs, rhs, changes, prefilter, path, key, stack, orderIndependent) {
    changes = changes || [];
    path = path || [];
    stack = stack || [];
    var currentPath = path.slice(0);
    if (typeof key !== 'undefined' && key !== null) {
      if (prefilter) {
        if (typeof (prefilter) === 'function' && prefilter(currentPath, key)) {
          return;
        } else if (typeof (prefilter) === 'object') {
          if (prefilter.prefilter && prefilter.prefilter(currentPath, key)) {
            return;
          }
          if (prefilter.normalize) {
            var alt = prefilter.normalize(currentPath, key, lhs, rhs);
            if (alt) {
              lhs = alt[0];
              rhs = alt[1];
            }
          }
        }
      }
      currentPath.push(key);
    }

    // Use string comparison for regexes
    if (realTypeOf(lhs) === 'regexp' && realTypeOf(rhs) === 'regexp') {
      lhs = lhs.toString();
      rhs = rhs.toString();
    }

    var ltype = typeof lhs;
    var rtype = typeof rhs;
    var i, j, k, other;

    var ldefined = ltype !== 'undefined' ||
      (stack && (stack.length > 0) && stack[stack.length - 1].lhs &&
        Object.getOwnPropertyDescriptor(stack[stack.length - 1].lhs, key));
    var rdefined = rtype !== 'undefined' ||
      (stack && (stack.length > 0) && stack[stack.length - 1].rhs &&
        Object.getOwnPropertyDescriptor(stack[stack.length - 1].rhs, key));

    if (!ldefined && rdefined) {
      changes.push(new DiffNew(currentPath, rhs));
    } else if (!rdefined && ldefined) {
      changes.push(new DiffDeleted(currentPath, lhs));
    } else if (realTypeOf(lhs) !== realTypeOf(rhs)) {
      changes.push(new DiffEdit(currentPath, lhs, rhs));
    } else if (realTypeOf(lhs) === 'date' && (lhs - rhs) !== 0) {
      changes.push(new DiffEdit(currentPath, lhs, rhs));
    } else if (ltype === 'object' && lhs !== null && rhs !== null) {
      for (i = stack.length - 1; i > -1; --i) {
        if (stack[i].lhs === lhs) {
          other = true;
          break;
        }
      }
      if (!other) {
        stack.push({ lhs: lhs, rhs: rhs });
        if (Array.isArray(lhs)) {
          // If order doesn't matter, we need to sort our arrays
          if (orderIndependent) {
            lhs.sort(function (a, b) {
              return getOrderIndependentHash(a) - getOrderIndependentHash(b);
            });

            rhs.sort(function (a, b) {
              return getOrderIndependentHash(a) - getOrderIndependentHash(b);
            });
          }
          i = rhs.length - 1;
          j = lhs.length - 1;
          while (i > j) {
            changes.push(new DiffArray(currentPath, i, new DiffNew(undefined, rhs[i--])));
          }
          while (j > i) {
            changes.push(new DiffArray(currentPath, j, new DiffDeleted(undefined, lhs[j--])));
          }
          for (; i >= 0; --i) {
            deepDiff(lhs[i], rhs[i], changes, prefilter, currentPath, i, stack, orderIndependent);
          }
        } else {
          var akeys = Object.keys(lhs);
          var pkeys = Object.keys(rhs);
          for (i = 0; i < akeys.length; ++i) {
            k = akeys[i];
            other = pkeys.indexOf(k);
            if (other >= 0) {
              deepDiff(lhs[k], rhs[k], changes, prefilter, currentPath, k, stack, orderIndependent);
              pkeys[other] = null;
            } else {
              deepDiff(lhs[k], undefined, changes, prefilter, currentPath, k, stack, orderIndependent);
            }
          }
          for (i = 0; i < pkeys.length; ++i) {
            k = pkeys[i];
            if (k) {
              deepDiff(undefined, rhs[k], changes, prefilter, currentPath, k, stack, orderIndependent);
            }
          }
        }
        stack.length = stack.length - 1;
      } else if (lhs !== rhs) {
        // lhs is contains a cycle at this element and it differs from rhs
        changes.push(new DiffEdit(currentPath, lhs, rhs));
      }
    } else if (lhs !== rhs) {
      if (!(ltype === 'number' && isNaN(lhs) && isNaN(rhs))) {
        changes.push(new DiffEdit(currentPath, lhs, rhs));
      }
    }
  }

  function observableDiff(lhs, rhs, observer, prefilter, orderIndependent) {
    var changes = [];
    deepDiff(lhs, rhs, changes, prefilter, null, null, null, orderIndependent);
    if (observer) {
      for (var i = 0; i < changes.length; ++i) {
        observer(changes[i]);
      }
    }
    return changes;
  }

  function orderIndependentDeepDiff(lhs, rhs, changes, prefilter, path, key, stack) {
    return deepDiff(lhs, rhs, changes, prefilter, path, key, stack, true);
  }

  function accumulateDiff(lhs, rhs, prefilter, accum) {
    var observer = (accum) ?
      function (difference) {
        if (difference) {
          accum.push(difference);
        }
      } : undefined;
    var changes = observableDiff(lhs, rhs, observer, prefilter);
    return (accum) ? accum : (changes.length) ? changes : undefined;
  }

  function accumulateOrderIndependentDiff(lhs, rhs, prefilter, accum) {
    var observer = (accum) ?
      function (difference) {
        if (difference) {
          accum.push(difference);
        }
      } : undefined;
    var changes = observableDiff(lhs, rhs, observer, prefilter, true);
    return (accum) ? accum : (changes.length) ? changes : undefined;
  }

  function applyArrayChange(arr, index, change) {
    if (change.path && change.path.length) {
      var it = arr[index],
        i, u = change.path.length - 1;
      for (i = 0; i < u; i++) {
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          applyArrayChange(it[change.path[i]], change.index, change.item);
          break;
        case 'D':
          delete it[change.path[i]];
          break;
        case 'E':
        case 'N':
          it[change.path[i]] = change.rhs;
          break;
      }
    } else {
      switch (change.kind) {
        case 'A':
          applyArrayChange(arr[index], change.index, change.item);
          break;
        case 'D':
          arr = arrayRemove(arr, index);
          break;
        case 'E':
        case 'N':
          arr[index] = change.rhs;
          break;
      }
    }
    return arr;
  }

  function applyChange(target, source, change) {
    if (typeof change === 'undefined' && source && ~validKinds.indexOf(source.kind)) {
      change = source;
    }
    if (target && change && change.kind) {
      var it = target,
        i = -1,
        last = change.path ? change.path.length - 1 : 0;
      while (++i < last) {
        if (typeof it[change.path[i]] === 'undefined') {
          it[change.path[i]] = (typeof change.path[i + 1] !== 'undefined' && typeof change.path[i + 1] === 'number') ? [] : {};
        }
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          if (change.path && typeof it[change.path[i]] === 'undefined') {
            it[change.path[i]] = [];
          }
          applyArrayChange(change.path ? it[change.path[i]] : it, change.index, change.item);
          break;
        case 'D':
          delete it[change.path[i]];
          break;
        case 'E':
        case 'N':
          it[change.path[i]] = change.rhs;
          break;
      }
    }
  }

  function revertArrayChange(arr, index, change) {
    if (change.path && change.path.length) {
      // the structure of the object at the index has changed...
      var it = arr[index],
        i, u = change.path.length - 1;
      for (i = 0; i < u; i++) {
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          revertArrayChange(it[change.path[i]], change.index, change.item);
          break;
        case 'D':
          it[change.path[i]] = change.lhs;
          break;
        case 'E':
          it[change.path[i]] = change.lhs;
          break;
        case 'N':
          delete it[change.path[i]];
          break;
      }
    } else {
      // the array item is different...
      switch (change.kind) {
        case 'A':
          revertArrayChange(arr[index], change.index, change.item);
          break;
        case 'D':
          arr[index] = change.lhs;
          break;
        case 'E':
          arr[index] = change.lhs;
          break;
        case 'N':
          arr = arrayRemove(arr, index);
          break;
      }
    }
    return arr;
  }

  function revertChange(target, source, change) {
    if (target && source && change && change.kind) {
      var it = target,
        i, u;
      u = change.path.length - 1;
      for (i = 0; i < u; i++) {
        if (typeof it[change.path[i]] === 'undefined') {
          it[change.path[i]] = {};
        }
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          // Array was modified...
          // it will be an array...
          revertArrayChange(it[change.path[i]], change.index, change.item);
          break;
        case 'D':
          // Item was deleted...
          it[change.path[i]] = change.lhs;
          break;
        case 'E':
          // Item was edited...
          it[change.path[i]] = change.lhs;
          break;
        case 'N':
          // Item is new...
          delete it[change.path[i]];
          break;
      }
    }
  }

  function applyDiff(target, source, filter) {
    if (target && source) {
      var onChange = function (change) {
        if (!filter || filter(target, source, change)) {
          applyChange(target, source, change);
        }
      };
      observableDiff(target, source, onChange);
    }
  }

  Object.defineProperties(accumulateDiff, {

    diff: {
      value: accumulateDiff,
      enumerable: true
    },
    orderIndependentDiff: {
      value: accumulateOrderIndependentDiff,
      enumerable: true
    },
    observableDiff: {
      value: observableDiff,
      enumerable: true
    },
    orderIndependentObservableDiff: {
      value: orderIndependentDeepDiff,
      enumerable: true
    },
    orderIndepHash: {
      value: getOrderIndependentHash,
      enumerable: true
    },
    applyDiff: {
      value: applyDiff,
      enumerable: true
    },
    applyChange: {
      value: applyChange,
      enumerable: true
    },
    revertChange: {
      value: revertChange,
      enumerable: true
    },
    isConflict: {
      value: function () {
        return typeof $conflict !== 'undefined';
      },
      enumerable: true
    }
  });

  // hackish...
  accumulateDiff.DeepDiff = accumulateDiff;
  // ...but works with:
  // import DeepDiff from 'deep-diff'
  // import { DeepDiff } from 'deep-diff'
  // const DeepDiff = require('deep-diff');
  // const { DeepDiff } = require('deep-diff');

  if (root) {
    root.DeepDiff = accumulateDiff;
  }

  return accumulateDiff;
}));


/***/ }),

/***/ "./node_modules/detect-node/browser.js":
/*!*********************************************!*\
  !*** ./node_modules/detect-node/browser.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;



/***/ }),

/***/ "./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/constants.js":
/*!**********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/constants.js ***!
  \**********************************************************/
/*! exports provided: FOCUS_GROUP, FOCUS_DISABLED, FOCUS_ALLOW, FOCUS_AUTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_GROUP", function() { return FOCUS_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_DISABLED", function() { return FOCUS_DISABLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_ALLOW", function() { return FOCUS_ALLOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_AUTO", function() { return FOCUS_AUTO; });
var FOCUS_GROUP = 'data-focus-lock';
var FOCUS_DISABLED = 'data-focus-lock-disabled';
var FOCUS_ALLOW = 'data-no-focus-lock';
var FOCUS_AUTO = 'data-autofocus-inside';

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/focusInside.js":
/*!************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/focusInside.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_all_affected__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/all-affected */ "./node_modules/focus-lock/dist/es2015/utils/all-affected.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");



var focusInFrame = function focusInFrame(frame) {
  return frame === document.activeElement;
};

var focusInsideIframe = function focusInsideIframe(topNode) {
  return !!Object(_utils_array__WEBPACK_IMPORTED_MODULE_1__["arrayFind"])(Object(_utils_array__WEBPACK_IMPORTED_MODULE_1__["toArray"])(topNode.querySelectorAll('iframe')), focusInFrame);
};

var focusInside = function focusInside(topNode) {
  var activeElement = document && document.activeElement;

  if (!activeElement || activeElement.dataset && activeElement.dataset.focusGuard) {
    return false;
  }
  return Object(_utils_all_affected__WEBPACK_IMPORTED_MODULE_0__["default"])(topNode).reduce(function (result, node) {
    return result || node.contains(activeElement) || focusInsideIframe(node);
  }, false);
};

/* harmony default export */ __webpack_exports__["default"] = (focusInside);

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/focusIsHidden.js":
/*!**************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/focusIsHidden.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/focus-lock/dist/es2015/constants.js");



var focusIsHidden = function focusIsHidden() {
  return document && Object(_utils_array__WEBPACK_IMPORTED_MODULE_0__["toArray"])(document.querySelectorAll('[' + _constants__WEBPACK_IMPORTED_MODULE_1__["FOCUS_ALLOW"] + ']')).some(function (node) {
    return node.contains(document.activeElement);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (focusIsHidden);

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/focusMerge.js":
/*!***********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/focusMerge.js ***!
  \***********************************************************/
/*! exports provided: newFocus, getFocusabledIn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newFocus", function() { return newFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFocusabledIn", function() { return getFocusabledIn; });
/* harmony import */ var _utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/DOMutils */ "./node_modules/focus-lock/dist/es2015/utils/DOMutils.js");
/* harmony import */ var _utils_firstFocus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/firstFocus */ "./node_modules/focus-lock/dist/es2015/utils/firstFocus.js");
/* harmony import */ var _utils_all_affected__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/all-affected */ "./node_modules/focus-lock/dist/es2015/utils/all-affected.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");





var findAutoFocused = function findAutoFocused(autoFocusables) {
  return function (node) {
    return !!node.autofocus || node.dataset && !!node.dataset.autofocus || autoFocusables.indexOf(node) >= 0;
  };
};

var isGuard = function isGuard(node) {
  return node && node.dataset && node.dataset.focusGuard;
};
var notAGuard = function notAGuard(node) {
  return !isGuard(node);
};

var newFocus = function newFocus(innerNodes, outerNodes, activeElement, lastNode, autoFocused) {
  var cnt = innerNodes.length;
  var firstFocus = innerNodes[0];
  var lastFocus = innerNodes[cnt - 1];
  var isOnGuard = isGuard(activeElement);

  // focus is inside
  if (innerNodes.indexOf(activeElement) >= 0) {
    return undefined;
  }

  var activeIndex = outerNodes.indexOf(activeElement);
  var lastIndex = outerNodes.indexOf(lastNode || activeIndex);
  var lastNodeInside = innerNodes.indexOf(lastNode);
  var indexDiff = activeIndex - lastIndex;
  var firstNodeIndex = outerNodes.indexOf(firstFocus);
  var lastNodeIndex = outerNodes.indexOf(lastFocus);

  var returnFirstNode = Object(_utils_firstFocus__WEBPACK_IMPORTED_MODULE_1__["pickFocusable"])(innerNodes, 0);
  var returnLastNode = Object(_utils_firstFocus__WEBPACK_IMPORTED_MODULE_1__["pickFocusable"])(innerNodes, cnt - 1);

  // new focus
  if (activeIndex === -1 || lastNodeInside === -1) {
    return innerNodes.indexOf(autoFocused && autoFocused.length ? Object(_utils_firstFocus__WEBPACK_IMPORTED_MODULE_1__["default"])(autoFocused) : Object(_utils_firstFocus__WEBPACK_IMPORTED_MODULE_1__["default"])(innerNodes));
  }
  // old focus
  if (!indexDiff && lastNodeInside >= 0) {
    return lastNodeInside;
  }
  // first element
  if (activeIndex <= firstNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
    return returnLastNode;
  }
  // last element
  if (activeIndex >= firstNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
    return returnFirstNode;
  }
  // jump out, but not on the guard
  if (indexDiff && Math.abs(indexDiff) > 1) {
    return lastNodeInside;
  }
  // focus above lock
  if (activeIndex <= firstNodeIndex) {
    return returnLastNode;
  }
  // focus below lock
  if (activeIndex > lastNodeIndex) {
    return returnFirstNode;
  }
  // index is inside tab order, but outside Lock
  if (indexDiff) {
    if (Math.abs(indexDiff) > 1) {
      return lastNodeInside;
    }
    return (cnt + lastNodeInside + indexDiff) % cnt;
  }
  // do nothing
  return undefined;
};

var getTopCommonParent = function getTopCommonParent(baseActiveElement, leftEntry, rightEntries) {
  var activeElements = Object(_utils_array__WEBPACK_IMPORTED_MODULE_3__["asArray"])(baseActiveElement);
  var leftEntries = Object(_utils_array__WEBPACK_IMPORTED_MODULE_3__["asArray"])(leftEntry);
  var activeElement = activeElements[0];
  var topCommon = null;
  leftEntries.filter(Boolean).forEach(function (entry) {
    topCommon = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getCommonParent"])(topCommon || entry, entry) || topCommon;
    rightEntries.filter(Boolean).forEach(function (subEntry) {
      var common = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getCommonParent"])(activeElement, subEntry);
      if (common) {
        if (!topCommon || common.contains(topCommon)) {
          topCommon = common;
        } else {
          topCommon = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getCommonParent"])(common, topCommon);
        }
      }
    });
  });
  return topCommon;
};

var allParentAutofocusables = function allParentAutofocusables(entries) {
  return entries.reduce(function (acc, node) {
    return acc.concat(Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["parentAutofocusables"])(node));
  }, []);
};

var reorderNodes = function reorderNodes(srcNodes, dstNodes) {
  var remap = new Map();
  // no Set(dstNodes) for IE11 :(
  dstNodes.forEach(function (entity) {
    return remap.set(entity.node, entity);
  });
  // remap to dstNodes
  return srcNodes.map(function (node) {
    return remap.get(node);
  }).filter(Boolean);
};

var getFocusabledIn = function getFocusabledIn(topNode) {
  var entries = Object(_utils_all_affected__WEBPACK_IMPORTED_MODULE_2__["default"])(topNode).filter(notAGuard);
  var commonParent = getTopCommonParent(topNode, topNode, entries);
  var outerNodes = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getTabbableNodes"])([commonParent], true);
  var innerElements = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getTabbableNodes"])(entries).filter(function (_ref) {
    var node = _ref.node;
    return notAGuard(node);
  }).map(function (_ref2) {
    var node = _ref2.node;
    return node;
  });

  return outerNodes.map(function (_ref3) {
    var node = _ref3.node,
        index = _ref3.index;
    return {
      node: node,
      index: index,
      lockItem: innerElements.indexOf(node) >= 0,
      guard: isGuard(node)
    };
  });
};

var getFocusMerge = function getFocusMerge(topNode, lastNode) {
  var activeElement = document && document.activeElement;
  var entries = Object(_utils_all_affected__WEBPACK_IMPORTED_MODULE_2__["default"])(topNode).filter(notAGuard);

  var commonParent = getTopCommonParent(activeElement || topNode, topNode, entries);

  var innerElements = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getTabbableNodes"])(entries).filter(function (_ref4) {
    var node = _ref4.node;
    return notAGuard(node);
  });

  if (!innerElements[0]) {
    innerElements = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getAllTabbableNodes"])(entries).filter(function (_ref5) {
      var node = _ref5.node;
      return notAGuard(node);
    });
    if (!innerElements[0]) {
      return undefined;
    }
  }

  var outerNodes = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getTabbableNodes"])([commonParent]).map(function (_ref6) {
    var node = _ref6.node;
    return node;
  });
  var orderedInnerElements = reorderNodes(outerNodes, innerElements);
  var innerNodes = orderedInnerElements.map(function (_ref7) {
    var node = _ref7.node;
    return node;
  });

  var newId = newFocus(innerNodes, outerNodes, activeElement, lastNode, innerNodes.filter(findAutoFocused(allParentAutofocusables(entries))));

  if (newId === undefined) {
    return newId;
  }
  return orderedInnerElements[newId];
};

/* harmony default export */ __webpack_exports__["default"] = (getFocusMerge);

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/index.js":
/*!******************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/index.js ***!
  \******************************************************/
/*! exports provided: tabHook, focusInside, focusIsHidden, focusMerge, getFocusabledIn, constants, getAllAffectedNodes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabHook */ "./node_modules/focus-lock/dist/es2015/tabHook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tabHook", function() { return _tabHook__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _focusMerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focusMerge */ "./node_modules/focus-lock/dist/es2015/focusMerge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusMerge", function() { return _focusMerge__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocusabledIn", function() { return _focusMerge__WEBPACK_IMPORTED_MODULE_1__["getFocusabledIn"]; });

/* harmony import */ var _focusInside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./focusInside */ "./node_modules/focus-lock/dist/es2015/focusInside.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusInside", function() { return _focusInside__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _focusIsHidden__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./focusIsHidden */ "./node_modules/focus-lock/dist/es2015/focusIsHidden.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusIsHidden", function() { return _focusIsHidden__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _setFocus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setFocus */ "./node_modules/focus-lock/dist/es2015/setFocus.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return _constants__WEBPACK_IMPORTED_MODULE_5__; });
/* harmony import */ var _utils_all_affected__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/all-affected */ "./node_modules/focus-lock/dist/es2015/utils/all-affected.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllAffectedNodes", function() { return _utils_all_affected__WEBPACK_IMPORTED_MODULE_6__["default"]; });











/* harmony default export */ __webpack_exports__["default"] = (_setFocus__WEBPACK_IMPORTED_MODULE_4__["default"]);

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/setFocus.js":
/*!*********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/setFocus.js ***!
  \*********************************************************/
/*! exports provided: focusOn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusOn", function() { return focusOn; });
/* harmony import */ var _focusMerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./focusMerge */ "./node_modules/focus-lock/dist/es2015/focusMerge.js");


var focusOn = function focusOn(target) {
  target.focus();
  if (target.contentWindow) {
    target.contentWindow.focus();
  }
};

var guardCount = 0;
var lockDisabled = false;

/* harmony default export */ __webpack_exports__["default"] = (function (topNode, lastNode) {
  var focusable = Object(_focusMerge__WEBPACK_IMPORTED_MODULE_0__["default"])(topNode, lastNode);

  if (lockDisabled) {
    return;
  }

  if (focusable) {
    if (guardCount > 2) {
      // eslint-disable-next-line no-console
      console.error('FocusLock: focus-fighting detected. Only one focus management system could be active. ' + 'See https://github.com/theKashey/focus-lock/#focus-fighting');
      lockDisabled = true;
      setTimeout(function () {
        lockDisabled = false;
      }, 1);
      return;
    }
    guardCount++;
    focusOn(focusable.node);
    guardCount--;
  }
});

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/tabHook.js":
/*!********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/tabHook.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  attach: function attach() {},
  detach: function detach() {}
});

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/DOMutils.js":
/*!***************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/DOMutils.js ***!
  \***************************************************************/
/*! exports provided: isVisible, notHiddenInput, getCommonParent, filterFocusable, getTabbableNodes, getAllTabbableNodes, parentAutofocusables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return isVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notHiddenInput", function() { return notHiddenInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommonParent", function() { return getCommonParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterFocusable", function() { return filterFocusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTabbableNodes", function() { return getTabbableNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllTabbableNodes", function() { return getAllTabbableNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parentAutofocusables", function() { return parentAutofocusables; });
/* harmony import */ var _tabOrder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabOrder */ "./node_modules/focus-lock/dist/es2015/utils/tabOrder.js");
/* harmony import */ var _tabUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabUtils */ "./node_modules/focus-lock/dist/es2015/utils/tabUtils.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");




var isElementHidden = function isElementHidden(computedStyle) {
  if (!computedStyle || !computedStyle.getPropertyValue) {
    return false;
  }
  return computedStyle.getPropertyValue('display') === 'none' || computedStyle.getPropertyValue('visibility') === 'hidden';
};

var isVisible = function isVisible(node) {
  return !node || node === document || node.nodeType === Node.DOCUMENT_NODE || !isElementHidden(window.getComputedStyle(node, null)) && isVisible(node.parentNode);
};

var notHiddenInput = function notHiddenInput(node) {
  return !((node.tagName === 'INPUT' || node.tagName === 'BUTTON') && (node.type === 'hidden' || node.disabled));
};

var getParents = function getParents(node) {
  var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  parents.push(node);
  if (node.parentNode) {
    getParents(node.parentNode, parents);
  }
  return parents;
};

var getCommonParent = function getCommonParent(nodea, nodeb) {
  var parentsA = getParents(nodea);
  var parentsB = getParents(nodeb);

  for (var i = 0; i < parentsA.length; i += 1) {
    var currentParent = parentsA[i];
    if (parentsB.indexOf(currentParent) >= 0) {
      return currentParent;
    }
  }
  return false;
};

var filterFocusable = function filterFocusable(nodes) {
  return Object(_array__WEBPACK_IMPORTED_MODULE_2__["toArray"])(nodes).filter(function (node) {
    return isVisible(node);
  }).filter(function (node) {
    return notHiddenInput(node);
  });
};

var getTabbableNodes = function getTabbableNodes(topNodes, withGuards) {
  return Object(_tabOrder__WEBPACK_IMPORTED_MODULE_0__["orderByTabIndex"])(filterFocusable(Object(_tabUtils__WEBPACK_IMPORTED_MODULE_1__["getFocusables"])(topNodes, withGuards)), true, withGuards);
};

var getAllTabbableNodes = function getAllTabbableNodes(topNodes) {
  return Object(_tabOrder__WEBPACK_IMPORTED_MODULE_0__["orderByTabIndex"])(filterFocusable(Object(_tabUtils__WEBPACK_IMPORTED_MODULE_1__["getFocusables"])(topNodes)), false);
};

var parentAutofocusables = function parentAutofocusables(topNode) {
  return filterFocusable(Object(_tabUtils__WEBPACK_IMPORTED_MODULE_1__["getParentAutofocusables"])(topNode));
};

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/all-affected.js":
/*!*******************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/all-affected.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };




var filterNested = function filterNested(nodes) {
  var l = nodes.length;
  for (var i = 0; i < l; i += 1) {
    var _loop = function _loop(j) {
      if (i !== j) {
        if (nodes[i].contains(nodes[j])) {
          return {
            v: filterNested(nodes.filter(function (x) {
              return x !== nodes[j];
            }))
          };
        }
      }
    };

    for (var j = 0; j < l; j += 1) {
      var _ret = _loop(j);

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }
  }
  return nodes;
};

var getTopParent = function getTopParent(node) {
  return node.parentNode ? getTopParent(node.parentNode) : node;
};

var getAllAffectedNodes = function getAllAffectedNodes(node) {
  var nodes = Object(_array__WEBPACK_IMPORTED_MODULE_1__["asArray"])(node);
  return nodes.filter(Boolean).reduce(function (acc, currentNode) {
    var group = currentNode.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_0__["FOCUS_GROUP"]);
    acc.push.apply(acc, group ? filterNested(Object(_array__WEBPACK_IMPORTED_MODULE_1__["toArray"])(getTopParent(currentNode).querySelectorAll('[' + _constants__WEBPACK_IMPORTED_MODULE_0__["FOCUS_GROUP"] + '="' + group + '"]:not([' + _constants__WEBPACK_IMPORTED_MODULE_0__["FOCUS_DISABLED"] + '="disabled"])'))) : [currentNode]);
    return acc;
  }, []);
};

/* harmony default export */ __webpack_exports__["default"] = (getAllAffectedNodes);

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/array.js":
/*!************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/array.js ***!
  \************************************************************/
/*! exports provided: toArray, arrayFind, asArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayFind", function() { return arrayFind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asArray", function() { return asArray; });
var toArray = function toArray(a) {
  var ret = Array(a.length);
  for (var i = 0; i < a.length; ++i) {
    ret[i] = a[i];
  }
  return ret;
};

var arrayFind = function arrayFind(array, search) {
  return array.filter(function (a) {
    return a === search;
  })[0];
};

var asArray = function asArray(a) {
  return Array.isArray(a) ? a : [a];
};

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/firstFocus.js":
/*!*****************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/firstFocus.js ***!
  \*****************************************************************/
/*! exports provided: pickFocusable, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickFocusable", function() { return pickFocusable; });
var isRadio = function isRadio(node) {
  return node.tagName === 'INPUT' && node.type === 'radio';
};

var findSelectedRadio = function findSelectedRadio(node, nodes) {
  return nodes.filter(isRadio).filter(function (el) {
    return el.name === node.name;
  }).filter(function (el) {
    return el.checked;
  })[0] || node;
};

var pickFirstFocus = function pickFirstFocus(nodes) {
  if (nodes[0] && nodes.length > 1) {
    if (isRadio(nodes[0]) && nodes[0].name) {
      return findSelectedRadio(nodes[0], nodes);
    }
  }
  return nodes[0];
};

var pickFocusable = function pickFocusable(nodes, index) {
  if (nodes.length > 1) {
    if (isRadio(nodes[index]) && nodes[index].name) {
      return nodes.indexOf(findSelectedRadio(nodes[index], nodes));
    }
  }
  return index;
};

/* harmony default export */ __webpack_exports__["default"] = (pickFirstFocus);

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/tabOrder.js":
/*!***************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/tabOrder.js ***!
  \***************************************************************/
/*! exports provided: tabSort, orderByTabIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabSort", function() { return tabSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderByTabIndex", function() { return orderByTabIndex; });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");


var tabSort = function tabSort(a, b) {
  var tabDiff = a.tabIndex - b.tabIndex;
  var indexDiff = a.index - b.index;

  if (tabDiff) {
    if (!a.tabIndex) return 1;
    if (!b.tabIndex) return -1;
  }

  return tabDiff || indexDiff;
};

var orderByTabIndex = function orderByTabIndex(nodes, filterNegative, keepGuards) {
  return Object(_array__WEBPACK_IMPORTED_MODULE_0__["toArray"])(nodes).map(function (node, index) {
    return {
      node: node,
      index: index,
      tabIndex: keepGuards && node.tabIndex === -1 ? (node.dataset || {}).focusGuard ? 0 : -1 : node.tabIndex
    };
  }).filter(function (data) {
    return !filterNegative || data.tabIndex >= 0;
  }).sort(tabSort);
};

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/tabUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/tabUtils.js ***!
  \***************************************************************/
/*! exports provided: getFocusables, getParentAutofocusables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFocusables", function() { return getFocusables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParentAutofocusables", function() { return getParentAutofocusables; });
/* harmony import */ var _tabbables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabbables */ "./node_modules/focus-lock/dist/es2015/utils/tabbables.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./node_modules/focus-lock/dist/es2015/constants.js");




var queryTabbables = _tabbables__WEBPACK_IMPORTED_MODULE_0__["default"].join(',');
var queryGuardTabbables = queryTabbables + ', [data-focus-guard]';

var getFocusables = function getFocusables(parents, withGuards) {
  return parents.reduce(function (acc, parent) {
    return acc.concat(
    // add all tabbables inside
    Object(_array__WEBPACK_IMPORTED_MODULE_1__["toArray"])(parent.querySelectorAll(withGuards ? queryGuardTabbables : queryTabbables)),
    // add if node is tabble itself
    parent.parentNode ? Object(_array__WEBPACK_IMPORTED_MODULE_1__["toArray"])(parent.parentNode.querySelectorAll(_tabbables__WEBPACK_IMPORTED_MODULE_0__["default"].join(','))).filter(function (node) {
      return node === parent;
    }) : []);
  }, []);
};

var getParentAutofocusables = function getParentAutofocusables(parent) {
  var parentFocus = parent.querySelectorAll('[' + _constants__WEBPACK_IMPORTED_MODULE_2__["FOCUS_AUTO"] + ']');
  return Object(_array__WEBPACK_IMPORTED_MODULE_1__["toArray"])(parentFocus).map(function (node) {
    return getFocusables([node]);
  }).reduce(function (acc, nodes) {
    return acc.concat(nodes);
  }, []);
};

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/tabbables.js":
/*!****************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/tabbables.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (['button:enabled:not([readonly])', 'select:enabled:not([readonly])', 'textarea:enabled:not([readonly])', 'input:enabled:not([readonly])', 'a[href]', 'area[href]', 'iframe', 'object', 'embed', '[tabindex]', '[contenteditable]', '[autofocus]']);

/***/ }),

/***/ "./node_modules/focus-outline-manager/focus-outline-manager.js":
/*!*********************************************************************!*\
  !*** ./node_modules/focus-outline-manager/focus-outline-manager.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Copyright (c) 2012 The Chromium Authors, Vladimirs. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * focus-outline-manager
 *
 * Watch users keyboard input and manage the focus outline visibility
 */

/**
 * The class name to set on the document element.
 * @const
 */
var CLASS_NAME = 'focus-outline-hidden';

/**
 * This class sets a CSS class name on the HTML element when a user presses the
 * tab key. It removes the class name when the user clicks anywhere.
 *
 * This allows you to write CSS like this:
 *
 * html.focus-outline-hidden *:focus {
 *     outline: none;
 * }
 *
 * And the outline will only be shown if the user uses the keyboard to get to it.
 *
 * @constructor
 */
function FocusOutlineManager () {
    var that = this;

    document.addEventListener('keydown', function (e) {
        that.focusByKeyboard = true;
    }, true);

    document.addEventListener('mousedown', function (e) {
        that.focusByKeyboard = false;
    }, true);

    document.addEventListener('focus', function (event) {
        // Update visibility only when focus is actually changed.
        that.updateVisibility();
    }, true);

    document.addEventListener('focusout', function (event) {
        window.setTimeout(function () {
            if (!document.hasFocus()) {
                that.focusByKeyboard = true;
                that.updateVisibility();
            }
        }, 0);
    });

    this.updateVisibility();
}

FocusOutlineManager.prototype = {
    /**
     * Whether focus change is triggered by TAB key.
     * @type {boolean}
     * @private
     */
    focusByKeyboard: true,

    updateVisibility: function () {
        this.hidden = !this.focusByKeyboard;
    },

    /**
     * Whether the focus outline should be hidden.
     * @type {boolean}
     */
    set hidden(hidden) {
        document.documentElement.classList.toggle(CLASS_NAME, hidden);
    },

    get hidden() {
        return document.documentElement.classList.contains(CLASS_NAME);
    }
};

new FocusOutlineManager();


/***/ }),

/***/ "./node_modules/is-lite/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/is-lite/lib/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getObjectType = function (value) {
    return Object.prototype.toString.call(value).slice(8, -1);
};
var isObjectOfType = function (type) { return function (value) {
    return exports.getObjectType(value) === type;
}; };
var isOfType = function (type) { return function (value) { return typeof value === type; }; };
var is = function (value) {
    switch (value) {
        case null:
            return "null" /* null */;
        case true:
        case false:
            return "boolean" /* boolean */;
        default:
    }
    switch (typeof value) {
        case 'undefined':
            return "undefined" /* undefined */;
        case 'string':
            return "string" /* string */;
        case 'number':
            return "number" /* number */;
        case 'bigint':
            return "bigint" /* bigint */;
        case 'symbol':
            return "symbol" /* symbol */;
        default:
    }
    if (is.array(value)) {
        return "Array" /* array */;
    }
    if (is.function(value)) {
        return "Function" /* function */;
    }
    var tagType = exports.getObjectType(value);
    /* istanbul ignore else */
    if (tagType) {
        return tagType;
    }
    /* istanbul ignore next */
    return "Object" /* object */;
};
is.array = Array.isArray;
is.arrayOf = function (target, predicate) {
    if (!is.array(target) && !is.function(predicate)) {
        return false;
    }
    return target.every(function (d) { return predicate(d); });
};
// tslint:disable-next-line:ban-types
is.asyncFunction = isObjectOfType("AsyncFunction" /* asyncFunction */);
is.boolean = function (value) {
    return value === true || value === false;
};
is.date = isObjectOfType("Date" /* date */);
is.defined = function (value) { return !is.undefined(value); };
is.domElement = function (value) {
    var DOM_PROPERTIES_TO_CHECK = [
        'innerHTML',
        'ownerDocument',
        'style',
        'attributes',
        'nodeValue',
    ];
    return (is.object(value) &&
        !is.plainObject(value) &&
        value.nodeType === 1 &&
        is.string(value.nodeName) &&
        DOM_PROPERTIES_TO_CHECK.every(function (property) { return property in value; }));
};
is.empty = function (value) {
    return ((is.string(value) && value.length === 0) ||
        (is.array(value) && value.length === 0) ||
        (is.object(value) && !is.map(value) && !is.set(value) && Object.keys(value).length === 0) ||
        (is.set(value) && value.size === 0) ||
        (is.map(value) && value.size === 0));
};
is.error = isObjectOfType("Error" /* error */);
// tslint:disable-next-line:ban-types
is.function = isObjectOfType("Function" /* function */);
is.generator = function (value) {
    return (is.iterable(value) &&
        is.function(value.next) &&
        is.function(value.throw));
};
is.generatorFunction = isObjectOfType("GeneratorFunction" /* generatorFunction */);
// tslint:disable-next-line:variable-name
is.instanceOf = function (instance, class_) {
    if (!instance || !class_) {
        return false;
    }
    return Object.getPrototypeOf(instance) === class_.prototype;
};
is.iterable = function (value) {
    return (!is.nullOrUndefined(value) && is.function(value[Symbol.iterator]));
};
is.map = isObjectOfType("Map" /* map */);
is.nan = function (value) {
    return Number.isNaN(value);
};
is.null = function (value) {
    return value === null;
};
is.nullOrUndefined = function (value) {
    return is.null(value) || is.undefined(value);
};
is.number = function (value) {
    return isOfType("number" /* number */)(value) && !is.nan(value);
};
is.numericString = function (value) {
    return is.string(value) && value.length > 0 && !Number.isNaN(Number(value));
};
is.object = function (value) {
    return !is.nullOrUndefined(value) && (is.function(value) || typeof value === 'object');
};
is.oneOf = function (target, value) {
    if (!is.array(target)) {
        return false;
    }
    return target.indexOf(value) > -1;
};
is.plainObject = function (value) {
    if (exports.getObjectType(value) !== 'Object') {
        return false;
    }
    var prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype === Object.getPrototypeOf({});
};
is.promise = isObjectOfType("Promise" /* promise */);
is.propertyOf = function (target, key, predicate) {
    if (!is.object(target) || !key) {
        return false;
    }
    // @ts-ignore
    var value = target[key];
    if (is.function(predicate)) {
        return predicate(value);
    }
    return is.defined(value);
};
is.regexp = isObjectOfType("RegExp" /* regExp */);
is.set = isObjectOfType("Set" /* set */);
is.string = isOfType("string" /* string */);
is.symbol = isOfType("symbol" /* symbol */);
is.undefined = isOfType("undefined" /* undefined */);
is.weakMap = isObjectOfType("WeakMap" /* weakMap */);
is.weakSet = isObjectOfType("WeakSet" /* weakSet */);
exports.default = is;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-clientside-effect/lib/index.es.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-clientside-effect/lib/index.es.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function withSideEffect(reducePropsToState, handleStateChangeOnClient) {
  if (true) {
    if (typeof reducePropsToState !== 'function') {
      throw new Error('Expected reducePropsToState to be a function.');
    }

    if (typeof handleStateChangeOnClient !== 'function') {
      throw new Error('Expected handleStateChangeOnClient to be a function.');
    }
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (true) {
      if (typeof WrappedComponent !== 'function') {
        throw new Error('Expected WrappedComponent to be a React component.');
      }
    }

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));
      handleStateChangeOnClient(state);
    }

    var SideEffect =
    /*#__PURE__*/
    function (_PureComponent) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SideEffect, _PureComponent);

      function SideEffect() {
        return _PureComponent.apply(this, arguments) || this;
      }

      // Try to use displayName of wrapped component
      SideEffect.peek = function peek() {
        return state;
      };

      var _proto = SideEffect.prototype;

      _proto.componentDidMount = function componentDidMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    return SideEffect;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (withSideEffect);


/***/ }),

/***/ "./node_modules/react-floater/es/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-floater/es/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-proptype-conditional-require */ "./node_modules/react-proptype-conditional-require/dist/isRequiredIf.js");
/* harmony import */ var react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! deepmerge */ "./node_modules/react-floater/node_modules/deepmerge/dist/cjs.js");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var is_lite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! is-lite */ "./node_modules/is-lite/lib/index.js");
/* harmony import */ var is_lite__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(is_lite__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tree_changes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tree-changes */ "./node_modules/tree-changes/lib/index.js");
/* harmony import */ var tree_changes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tree_changes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(exenv__WEBPACK_IMPORTED_MODULE_8__);










function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var DEFAULTS = {flip:{padding:20},preventOverflow:{padding:10}};

var STATUS = {INIT:'init',IDLE:'idle',OPENING:'opening',OPEN:'open',CLOSING:'closing',ERROR:'error'};

var canUseDOM=exenv__WEBPACK_IMPORTED_MODULE_8___default.a.canUseDOM;var isReact16=react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.createPortal!==undefined;function isMobile(){return 'ontouchstart'in window&&/Mobi/.test(navigator.userAgent);}/**
 * Log method calls if debug is enabled
 *
 * @private
 * @param {Object}       arg
 * @param {string}       arg.title    - The title the logger was called from
 * @param {Object|Array} [arg.data]   - The data to be logged
 * @param {boolean}      [arg.warn]  - If true, the message will be a warning
 * @param {boolean}      [arg.debug] - Nothing will be logged unless debug is true
 */function log(_ref){var title=_ref.title,data=_ref.data,_ref$warn=_ref.warn,warn=_ref$warn===void 0?false:_ref$warn,_ref$debug=_ref.debug,debug=_ref$debug===void 0?false:_ref$debug;/* eslint-disable no-console */var logFn=warn?console.warn||console.error:console.log;if(debug&&title&&data){console.groupCollapsed("%creact-floater: ".concat(title),'color: #9b00ff; font-weight: bold; font-size: 12px;');if(Array.isArray(data)){data.forEach(function(d){if(is_lite__WEBPACK_IMPORTED_MODULE_5___default.a.plainObject(d)&&d.key){logFn.apply(console,[d.key,d.value]);}else{logFn.apply(console,[d]);}});}else{logFn.apply(console,[data]);}console.groupEnd();}/* eslint-enable */}function on(element,event,cb){var capture=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;element.addEventListener(event,cb,capture);}function off(element,event,cb){var capture=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;element.removeEventListener(event,cb,capture);}function once(element,event,cb){var capture=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;var _nextCB;// eslint-disable-next-line prefer-const
_nextCB=function nextCB(e){cb(e);off(element,event,_nextCB);};on(element,event,_nextCB,capture);}function noop(){}

var ReactFloaterPortal=/*#__PURE__*/function(_React$Component){_inherits(ReactFloaterPortal,_React$Component);function ReactFloaterPortal(props){var _this;_classCallCheck(this,ReactFloaterPortal);_this=_possibleConstructorReturn(this,_getPrototypeOf(ReactFloaterPortal).call(this,props));if(!canUseDOM)return _possibleConstructorReturn(_this);_this.node=document.createElement('div');if(props.id){_this.node.id=props.id;}if(props.zIndex){_this.node.style.zIndex=props.zIndex;}document.body.appendChild(_this.node);return _this;}_createClass(ReactFloaterPortal,[{key:"componentDidMount",value:function componentDidMount(){if(!canUseDOM)return;if(!isReact16){this.renderPortal();}}},{key:"componentDidUpdate",value:function componentDidUpdate(){if(!canUseDOM)return;if(!isReact16){this.renderPortal();}}},{key:"componentWillUnmount",value:function componentWillUnmount(){if(!canUseDOM||!this.node)return;if(!isReact16){react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.unmountComponentAtNode(this.node);}document.body.removeChild(this.node);}},{key:"renderPortal",value:function renderPortal(){if(!canUseDOM)return null;var _this$props=this.props,children=_this$props.children,setRef=_this$props.setRef;/* istanbul ignore else */if(isReact16){return react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.createPortal(children,this.node);}var portal=react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.unstable_renderSubtreeIntoContainer(this,children.length>1?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,children):children[0],this.node);setRef(portal);return null;}},{key:"renderReact16",value:function renderReact16(){var _this$props2=this.props,hasChildren=_this$props2.hasChildren,placement=_this$props2.placement,target=_this$props2.target;if(!hasChildren){if(target||placement==='center'){return this.renderPortal();}return null;}return this.renderPortal();}},{key:"render",value:function render(){if(!isReact16){return null;}return this.renderReact16();}}]);return ReactFloaterPortal;}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);_defineProperty(ReactFloaterPortal,"propTypes",{children:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array]),hasChildren:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,id:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),placement:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,setRef:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,target:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),zIndex:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number});

var FloaterArrow=/*#__PURE__*/function(_React$Component){_inherits(FloaterArrow,_React$Component);function FloaterArrow(){_classCallCheck(this,FloaterArrow);return _possibleConstructorReturn(this,_getPrototypeOf(FloaterArrow).apply(this,arguments));}_createClass(FloaterArrow,[{key:"render",value:function render(){var _this$props=this.props,placement=_this$props.placement,setArrowRef=_this$props.setArrowRef,styles=_this$props.styles;var _styles$arrow=styles.arrow,color=_styles$arrow.color,display=_styles$arrow.display,length=_styles$arrow.length,margin=_styles$arrow.margin,position=_styles$arrow.position,spread=_styles$arrow.spread;var arrowStyles={display:display,position:position};var points;var x=spread;var y=length;/* istanbul ignore else */if(placement.startsWith('top')){points="0,0 ".concat(x/2,",").concat(y," ").concat(x,",0");arrowStyles.bottom=0;arrowStyles.marginLeft=margin;arrowStyles.marginRight=margin;}else if(placement.startsWith('bottom')){points="".concat(x,",").concat(y," ").concat(x/2,",0 0,").concat(y);arrowStyles.top=0;arrowStyles.marginLeft=margin;arrowStyles.marginRight=margin;}else if(placement.startsWith('left')){y=spread;x=length;points="0,0 ".concat(x,",").concat(y/2," 0,").concat(y);arrowStyles.right=0;arrowStyles.marginTop=margin;arrowStyles.marginBottom=margin;}else if(placement.startsWith('right')){y=spread;x=length;points="".concat(x,",").concat(y," ").concat(x,",0 0,").concat(y/2);arrowStyles.left=0;arrowStyles.marginTop=margin;arrowStyles.marginBottom=margin;}return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"__floater__arrow",style:this.parentStyle},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{ref:setArrowRef,style:arrowStyles},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",{width:x,height:y,version:"1.1",xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon",{points:points,fill:color}))));}},{key:"parentStyle",get:function get(){var _this$props2=this.props,placement=_this$props2.placement,styles=_this$props2.styles;var length=styles.arrow.length;var arrow={pointerEvents:'none',position:'absolute',width:'100%'};/* istanbul ignore else */if(placement.startsWith('top')){arrow.bottom=0;arrow.left=0;arrow.right=0;arrow.height=length;}else if(placement.startsWith('bottom')){arrow.left=0;arrow.right=0;arrow.top=0;arrow.height=length;}else if(placement.startsWith('left')){arrow.right=0;arrow.top=0;arrow.bottom=0;}else if(placement.startsWith('right')){arrow.left=0;arrow.top=0;}return arrow;}}]);return FloaterArrow;}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);_defineProperty(FloaterArrow,"propTypes",{placement:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,setArrowRef:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,styles:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired});

var FloaterCloseBtn=function FloaterCloseBtn(_ref){var handleClick=_ref.handleClick,styles=_ref.styles;var color=styles.color,height=styles.height,width=styles.width,style=_objectWithoutProperties(styles,["color","height","width"]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{"aria-label":"close",onClick:handleClick,style:style,type:"button"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",{width:"".concat(width,"px"),height:"".concat(height,"px"),viewBox:"0 0 18 18",version:"1.1",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z",fill:color}))));};FloaterCloseBtn.propTypes={handleClick:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,styles:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired};

var FloaterContainer=function FloaterContainer(_ref){var content=_ref.content,footer=_ref.footer,handleClick=_ref.handleClick,open=_ref.open,positionWrapper=_ref.positionWrapper,showCloseButton=_ref.showCloseButton,title=_ref.title,styles=_ref.styles;var output={content:react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(content)?content:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"__floater__content",style:styles.content},content)};if(title){output.title=react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(title)?title:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"__floater__title",style:styles.title},title);}if(footer){output.footer=react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(footer)?footer:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"__floater__footer",style:styles.footer},footer);}if((showCloseButton||positionWrapper)&&!is_lite__WEBPACK_IMPORTED_MODULE_5___default.a["boolean"](open)){output.close=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FloaterCloseBtn,{styles:styles.close,handleClick:handleClick});}return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"__floater__container",style:styles.container},output.close,output.title,output.content,output.footer);};FloaterContainer.propTypes={content:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,footer:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,handleClick:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,open:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,positionWrapper:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,showCloseButton:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,styles:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,title:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node};

var Floater=/*#__PURE__*/function(_React$Component){_inherits(Floater,_React$Component);function Floater(){_classCallCheck(this,Floater);return _possibleConstructorReturn(this,_getPrototypeOf(Floater).apply(this,arguments));}_createClass(Floater,[{key:"render",value:function render(){var _this$props=this.props,component=_this$props.component,closeFn=_this$props.handleClick,hideArrow=_this$props.hideArrow,setFloaterRef=_this$props.setFloaterRef,status=_this$props.status;var output={};var classes=['__floater'];if(component){if(react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(component)){output.content=react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(component,{closeFn:closeFn});}else{output.content=component({closeFn:closeFn});}}else{output.content=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FloaterContainer,this.props);}if(status===STATUS.OPEN){classes.push('__floater__open');}if(!hideArrow){output.arrow=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FloaterArrow,this.props);}return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{ref:setFloaterRef,className:classes.join(' '),style:this.style},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"__floater__body"},output.content,output.arrow));}},{key:"style",get:function get(){var _this$props2=this.props,disableAnimation=_this$props2.disableAnimation,component=_this$props2.component,placement=_this$props2.placement,hideArrow=_this$props2.hideArrow,status=_this$props2.status,styles=_this$props2.styles;var length=styles.arrow.length,floater=styles.floater,floaterCentered=styles.floaterCentered,floaterClosing=styles.floaterClosing,floaterOpening=styles.floaterOpening,floaterWithAnimation=styles.floaterWithAnimation,floaterWithComponent=styles.floaterWithComponent;var element={};if(!hideArrow){if(placement.startsWith('top')){element.padding="0 0 ".concat(length,"px");}else if(placement.startsWith('bottom')){element.padding="".concat(length,"px 0 0");}else if(placement.startsWith('left')){element.padding="0 ".concat(length,"px 0 0");}else if(placement.startsWith('right')){element.padding="0 0 0 ".concat(length,"px");}}if([STATUS.OPENING,STATUS.OPEN].indexOf(status)!==-1){element=_objectSpread2({},element,{},floaterOpening);}if(status===STATUS.CLOSING){element=_objectSpread2({},element,{},floaterClosing);}if(status===STATUS.OPEN&&!disableAnimation){element=_objectSpread2({},element,{},floaterWithAnimation);}if(placement==='center'){element=_objectSpread2({},element,{},floaterCentered);}if(component){element=_objectSpread2({},element,{},floaterWithComponent);}return _objectSpread2({},floater,{},element);}}]);return Floater;}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);_defineProperty(Floater,"propTypes",{component:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element]),content:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,disableAnimation:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,footer:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,handleClick:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,hideArrow:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,open:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,placement:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,positionWrapper:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,setArrowRef:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,setFloaterRef:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,showCloseButton:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,status:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,styles:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,title:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node});

var ReactFloaterWrapper=/*#__PURE__*/function(_React$Component){_inherits(ReactFloaterWrapper,_React$Component);function ReactFloaterWrapper(){_classCallCheck(this,ReactFloaterWrapper);return _possibleConstructorReturn(this,_getPrototypeOf(ReactFloaterWrapper).apply(this,arguments));}_createClass(ReactFloaterWrapper,[{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,handleClick=_this$props.handleClick,handleMouseEnter=_this$props.handleMouseEnter,handleMouseLeave=_this$props.handleMouseLeave,setChildRef=_this$props.setChildRef,setWrapperRef=_this$props.setWrapperRef,style=_this$props.style,styles=_this$props.styles;var element;/* istanbul ignore else */if(children){if(react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(children)===1){if(!react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(children)){element=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,children);}else{var refProp=is_lite__WEBPACK_IMPORTED_MODULE_5___default.a["function"](children.type)?'innerRef':'ref';element=react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(children),_defineProperty({},refProp,setChildRef));}}else{element=children;}}if(!element){return null;}return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{ref:setWrapperRef,style:_objectSpread2({},styles,{},style),onClick:handleClick,onMouseEnter:handleMouseEnter,onMouseLeave:handleMouseLeave},element);}}]);return ReactFloaterWrapper;}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);_defineProperty(ReactFloaterWrapper,"propTypes",{children:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,handleClick:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,handleMouseEnter:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,handleMouseLeave:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,setChildRef:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,setWrapperRef:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,style:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,styles:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired});

var defaultOptions={zIndex:100};function getStyles(styles){var options=deepmerge__WEBPACK_IMPORTED_MODULE_4___default()(defaultOptions,styles.options||{});return {wrapper:{cursor:'help',display:'inline-flex',flexDirection:'column',zIndex:options.zIndex},wrapperPosition:{left:-1000,position:'absolute',top:-1000,visibility:'hidden'},floater:{display:'inline-block',filter:'drop-shadow(0 0 3px rgba(0, 0, 0, 0.3))',maxWidth:300,opacity:0,position:'relative',transition:'opacity 0.3s',visibility:'hidden',zIndex:options.zIndex},floaterOpening:{opacity:1,visibility:'visible'},floaterWithAnimation:{opacity:1,transition:'opacity 0.3s, transform 0.2s',visibility:'visible'},floaterWithComponent:{maxWidth:'100%'},floaterClosing:{opacity:0,visibility:'visible'},floaterCentered:{left:'50%',position:'fixed',top:'50%',transform:'translate(-50%, -50%)'},container:{backgroundColor:'#fff',color:'#666',minHeight:60,minWidth:200,padding:20,position:'relative',zIndex:10},title:{borderBottom:'1px solid #555',color:'#555',fontSize:18,marginBottom:5,paddingBottom:6,paddingRight:18},content:{fontSize:15},close:{backgroundColor:'transparent',border:0,borderRadius:0,color:'#555',fontSize:0,height:15,outline:'none',padding:10,position:'absolute',right:0,top:0,width:15,WebkitAppearance:'none'},footer:{borderTop:'1px solid #ccc',fontSize:13,marginTop:10,paddingTop:5},arrow:{color:'#fff',display:'inline-flex',length:16,margin:8,position:'absolute',spread:32},options:options};}

var POSITIONING_PROPS=['position','top','right','bottom','left'];var ReactFloater=/*#__PURE__*/function(_React$Component){_inherits(ReactFloater,_React$Component);function ReactFloater(props){var _this;_classCallCheck(this,ReactFloater);_this=_possibleConstructorReturn(this,_getPrototypeOf(ReactFloater).call(this,props));/* istanbul ignore else */_defineProperty(_assertThisInitialized(_this),"setArrowRef",function(ref){_this.arrowRef=ref;});_defineProperty(_assertThisInitialized(_this),"setChildRef",function(ref){_this.childRef=ref;});_defineProperty(_assertThisInitialized(_this),"setFloaterRef",function(ref){if(!_this.floaterRef){_this.floaterRef=ref;}});_defineProperty(_assertThisInitialized(_this),"setWrapperRef",function(ref){_this.wrapperRef=ref;});_defineProperty(_assertThisInitialized(_this),"handleTransitionEnd",function(){var status=_this.state.status;var callback=_this.props.callback;/* istanbul ignore else */if(_this.wrapperPopper){_this.wrapperPopper.instance.update();}_this.setState({status:status===STATUS.OPENING?STATUS.OPEN:STATUS.IDLE},function(){var newStatus=_this.state.status;callback(newStatus===STATUS.OPEN?'open':'close',_this.props);});});_defineProperty(_assertThisInitialized(_this),"handleClick",function(){var _this$props=_this.props,event=_this$props.event,open=_this$props.open;if(is_lite__WEBPACK_IMPORTED_MODULE_5___default.a["boolean"](open))return;var _this$state=_this.state,positionWrapper=_this$state.positionWrapper,status=_this$state.status;/* istanbul ignore else */if(_this.event==='click'||_this.event==='hover'&&positionWrapper){log({title:'click',data:[{event:event,status:status===STATUS.OPEN?'closing':'opening'}],debug:_this.debug});_this.toggle();}});_defineProperty(_assertThisInitialized(_this),"handleMouseEnter",function(){var _this$props2=_this.props,event=_this$props2.event,open=_this$props2.open;if(is_lite__WEBPACK_IMPORTED_MODULE_5___default.a["boolean"](open)||isMobile())return;var status=_this.state.status;/* istanbul ignore else */if(_this.event==='hover'&&status===STATUS.IDLE){log({title:'mouseEnter',data:[{key:'originalEvent',value:event}],debug:_this.debug});clearTimeout(_this.eventDelayTimeout);_this.toggle();}});_defineProperty(_assertThisInitialized(_this),"handleMouseLeave",function(){var _this$props3=_this.props,event=_this$props3.event,eventDelay=_this$props3.eventDelay,open=_this$props3.open;if(is_lite__WEBPACK_IMPORTED_MODULE_5___default.a["boolean"](open)||isMobile())return;var _this$state2=_this.state,status=_this$state2.status,positionWrapper=_this$state2.positionWrapper;/* istanbul ignore else */if(_this.event==='hover'){log({title:'mouseLeave',data:[{key:'originalEvent',value:event}],debug:_this.debug});if(!eventDelay){_this.toggle(STATUS.IDLE);}else if([STATUS.OPENING,STATUS.OPEN].indexOf(status)!==-1&&!positionWrapper&&!_this.eventDelayTimeout){_this.eventDelayTimeout=setTimeout(function(){delete _this.eventDelayTimeout;_this.toggle();},eventDelay*1000);}}});_this.state={currentPlacement:props.placement,positionWrapper:props.wrapperOptions.position&&!!props.target,status:STATUS.INIT,statusWrapper:STATUS.INIT};_this._isMounted=false;if(canUseDOM){window.addEventListener('load',function(){if(_this.popper){_this.popper.instance.update();}if(_this.wrapperPopper){_this.wrapperPopper.instance.update();}});}return _this;}_createClass(ReactFloater,[{key:"componentDidMount",value:function componentDidMount(){if(!canUseDOM)return;var positionWrapper=this.state.positionWrapper;var _this$props5=this.props,children=_this$props5.children,open=_this$props5.open,target=_this$props5.target;this._isMounted=true;log({title:'init',data:{hasChildren:!!children,hasTarget:!!target,isControlled:is_lite__WEBPACK_IMPORTED_MODULE_5___default.a["boolean"](open),positionWrapper:positionWrapper,target:this.target,floater:this.floaterRef},debug:this.debug});this.initPopper();if(!children&&target&&!is_lite__WEBPACK_IMPORTED_MODULE_5___default.a["boolean"](open));}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps,prevState){if(!canUseDOM)return;var _this$props6=this.props,autoOpen=_this$props6.autoOpen,open=_this$props6.open,target=_this$props6.target,wrapperOptions=_this$props6.wrapperOptions;var _treeChanges=tree_changes__WEBPACK_IMPORTED_MODULE_6___default()(prevState,this.state),changedFrom=_treeChanges.changedFrom,changedTo=_treeChanges.changedTo;if(prevProps.open!==open){var forceStatus;// always follow `open` in controlled mode
if(is_lite__WEBPACK_IMPORTED_MODULE_5___default.a["boolean"](open)){forceStatus=open?STATUS.OPENING:STATUS.CLOSING;}this.toggle(forceStatus);}if(prevProps.wrapperOptions.position!==wrapperOptions.position||prevProps.target!==target){this.changeWrapperPosition(this.props);}if(changedTo('status',STATUS.IDLE)&&open){this.toggle(STATUS.OPEN);}else if(changedFrom('status',STATUS.INIT,STATUS.IDLE)&&autoOpen){this.toggle(STATUS.OPEN);}if(this.popper&&changedTo('status',STATUS.OPENING)){this.popper.instance.update();}if(this.floaterRef&&(changedTo('status',STATUS.OPENING)||changedTo('status',STATUS.CLOSING))){once(this.floaterRef,'transitionend',this.handleTransitionEnd);}}},{key:"componentWillUnmount",value:function componentWillUnmount(){if(!canUseDOM)return;this._isMounted=false;if(this.popper){this.popper.instance.destroy();}if(this.wrapperPopper){this.wrapperPopper.instance.destroy();}}},{key:"initPopper",value:function initPopper(){var _this2=this;var target=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.target;var positionWrapper=this.state.positionWrapper;var _this$props7=this.props,disableFlip=_this$props7.disableFlip,getPopper=_this$props7.getPopper,hideArrow=_this$props7.hideArrow,offset=_this$props7.offset,placement=_this$props7.placement,wrapperOptions=_this$props7.wrapperOptions;var flipBehavior=placement==='top'||placement==='bottom'?'flip':['right','bottom-end','top-end','left','top-start','bottom-start'];/* istanbul ignore else */if(placement==='center'){this.setState({status:STATUS.IDLE});}else if(target&&this.floaterRef){var _this$options=this.options,arrow=_this$options.arrow,flip=_this$options.flip,offsetOptions=_this$options.offset,rest=_objectWithoutProperties(_this$options,["arrow","flip","offset"]);new popper_js__WEBPACK_IMPORTED_MODULE_3__["default"](target,this.floaterRef,{placement:placement,modifiers:_objectSpread2({arrow:_objectSpread2({enabled:!hideArrow,element:this.arrowRef},arrow),flip:_objectSpread2({enabled:!disableFlip,behavior:flipBehavior},flip),offset:_objectSpread2({offset:"0, ".concat(offset,"px")},offsetOptions)},rest),onCreate:function onCreate(data){_this2.popper=data;getPopper(data,'floater');if(_this2._isMounted){_this2.setState({currentPlacement:data.placement,status:STATUS.IDLE});}if(placement!==data.placement){setTimeout(function(){data.instance.update();},1);}},onUpdate:function onUpdate(data){_this2.popper=data;var currentPlacement=_this2.state.currentPlacement;if(_this2._isMounted&&data.placement!==currentPlacement){_this2.setState({currentPlacement:data.placement});}}});}if(positionWrapper){var wrapperOffset=!is_lite__WEBPACK_IMPORTED_MODULE_5___default.a.undefined(wrapperOptions.offset)?wrapperOptions.offset:0;new popper_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.target,this.wrapperRef,{placement:wrapperOptions.placement||placement,modifiers:{arrow:{enabled:false},offset:{offset:"0, ".concat(wrapperOffset,"px")},flip:{enabled:false}},onCreate:function onCreate(data){_this2.wrapperPopper=data;if(_this2._isMounted){_this2.setState({statusWrapper:STATUS.IDLE});}getPopper(data,'wrapper');if(placement!==data.placement){setTimeout(function(){data.instance.update();},1);}}});}}},{key:"changeWrapperPosition",value:function changeWrapperPosition(_ref){var target=_ref.target,wrapperOptions=_ref.wrapperOptions;this.setState({positionWrapper:wrapperOptions.position&&!!target});}},{key:"toggle",value:function toggle(forceStatus){var status=this.state.status;var nextStatus=status===STATUS.OPEN?STATUS.CLOSING:STATUS.OPENING;if(!is_lite__WEBPACK_IMPORTED_MODULE_5___default.a.undefined(forceStatus)){nextStatus=forceStatus;}this.setState({status:nextStatus});}},{key:"render",value:function render(){var _this$state3=this.state,currentPlacement=_this$state3.currentPlacement,positionWrapper=_this$state3.positionWrapper,status=_this$state3.status;var _this$props8=this.props,children=_this$props8.children,component=_this$props8.component,content=_this$props8.content,disableAnimation=_this$props8.disableAnimation,footer=_this$props8.footer,hideArrow=_this$props8.hideArrow,id=_this$props8.id,open=_this$props8.open,showCloseButton=_this$props8.showCloseButton,style=_this$props8.style,target=_this$props8.target,title=_this$props8.title;var wrapper=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReactFloaterWrapper,{handleClick:this.handleClick,handleMouseEnter:this.handleMouseEnter,handleMouseLeave:this.handleMouseLeave,setChildRef:this.setChildRef,setWrapperRef:this.setWrapperRef,style:style,styles:this.styles.wrapper},children);var output={};if(positionWrapper){output.wrapperInPortal=wrapper;}else{output.wrapperAsChildren=wrapper;}return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReactFloaterPortal,{hasChildren:!!children,id:id,placement:currentPlacement,setRef:this.setFloaterRef,target:target,zIndex:this.styles.options.zIndex},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Floater,{component:component,content:content,disableAnimation:disableAnimation,footer:footer,handleClick:this.handleClick,hideArrow:hideArrow||currentPlacement==='center',open:open,placement:currentPlacement,positionWrapper:positionWrapper,setArrowRef:this.setArrowRef,setFloaterRef:this.setFloaterRef,showCloseButton:showCloseButton,status:status,styles:this.styles,title:title}),output.wrapperInPortal),output.wrapperAsChildren);}},{key:"debug",get:function get(){var debug=this.props.debug;return debug||!!global.ReactFloaterDebug;}},{key:"event",get:function get(){var _this$props9=this.props,disableHoverToClick=_this$props9.disableHoverToClick,event=_this$props9.event;if(event==='hover'&&isMobile()&&!disableHoverToClick){return 'click';}return event;}},{key:"options",get:function get(){var options=this.props.options;return deepmerge__WEBPACK_IMPORTED_MODULE_4___default()(DEFAULTS,options||{});}},{key:"styles",get:function get(){var _this3=this;var _this$state4=this.state,status=_this$state4.status,positionWrapper=_this$state4.positionWrapper,statusWrapper=_this$state4.statusWrapper;var styles=this.props.styles;var nextStyles=deepmerge__WEBPACK_IMPORTED_MODULE_4___default()(getStyles(styles),styles);if(positionWrapper){var wrapperStyles;if(!([STATUS.IDLE].indexOf(status)!==-1)||!([STATUS.IDLE].indexOf(statusWrapper)!==-1)){wrapperStyles=nextStyles.wrapperPosition;}else{wrapperStyles=this.wrapperPopper.styles;}nextStyles.wrapper=_objectSpread2({},nextStyles.wrapper,{},wrapperStyles);}/* istanbul ignore else */if(this.target){var targetStyles=window.getComputedStyle(this.target);/* istanbul ignore else */if(this.wrapperStyles){nextStyles.wrapper=_objectSpread2({},nextStyles.wrapper,{},this.wrapperStyles);}else if(!(['relative','static'].indexOf(targetStyles.position)!==-1)){this.wrapperStyles={};if(!positionWrapper){POSITIONING_PROPS.forEach(function(d){_this3.wrapperStyles[d]=targetStyles[d];});nextStyles.wrapper=_objectSpread2({},nextStyles.wrapper,{},this.wrapperStyles);this.target.style.position='relative';this.target.style.top='auto';this.target.style.right='auto';this.target.style.bottom='auto';this.target.style.left='auto';}}}return nextStyles;}},{key:"target",get:function get(){if(!canUseDOM)return null;var target=this.props.target;if(target){if(is_lite__WEBPACK_IMPORTED_MODULE_5___default.a.domElement(target)){return target;}return document.querySelector(target);}return this.childRef||this.wrapperRef;}}]);return ReactFloater;}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);_defineProperty(ReactFloater,"propTypes",{autoOpen:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,callback:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,component:react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_2___default()(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element]),function(props){return !props.content;}),content:react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_2___default()(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,function(props){return !props.component;}),debug:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,disableAnimation:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,disableFlip:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,disableHoverToClick:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,event:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['hover','click']),eventDelay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,footer:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,getPopper:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,hideArrow:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,id:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),offset:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,open:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,options:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,placement:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['top','top-start','top-end','bottom','bottom-start','bottom-end','left','left-start','left-end','right','right-start','right-end','auto','center']),showCloseButton:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,style:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,styles:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,target:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),title:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,wrapperOptions:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({offset:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,placement:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['top','top-start','top-end','bottom','bottom-start','bottom-end','left','left-start','left-end','right','right-start','right-end','auto']),position:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool})});_defineProperty(ReactFloater,"defaultProps",{autoOpen:false,callback:noop,debug:false,disableAnimation:false,disableFlip:false,disableHoverToClick:false,event:'click',eventDelay:0.4,getPopper:noop,hideArrow:false,offset:15,placement:'bottom',showCloseButton:false,styles:{},target:null,wrapperOptions:{position:false}});

/* harmony default export */ __webpack_exports__["default"] = (ReactFloater);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-floater/node_modules/deepmerge/dist/cjs.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-floater/node_modules/deepmerge/dist/cjs.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/AutoFocusInside.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/AutoFocusInside.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-lock/constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./node_modules/react-focus-lock/dist/es2015/util.js");






var AutoFocusInside = function AutoFocusInside(_ref) {
  var disabled = _ref.disabled,
      children = _ref.children,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(_util__WEBPACK_IMPORTED_MODULE_4__["inlineProp"])(focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__["FOCUS_AUTO"], !disabled), {
    className: className
  }), children);
};

AutoFocusInside.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
} : undefined;
AutoFocusInside.defaultProps = {
  disabled: false,
  className: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (AutoFocusInside);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/Combination.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/Combination.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Lock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Lock */ "./node_modules/react-focus-lock/dist/es2015/Lock.js");
/* harmony import */ var _Trap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Trap */ "./node_modules/react-focus-lock/dist/es2015/Trap.js");





/* that would be a BREAKING CHANGE!
// delaying sidecar execution till the first usage
const RequireSideCar = (props) => {
  // eslint-disable-next-line global-require
  const SideCar = require('./Trap').default;
  return <SideCar {...props} />;
};
*/

var FocusLockCombination = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Lock__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    sideCar: _Trap__WEBPACK_IMPORTED_MODULE_4__["default"],
    ref: ref
  }, props));
});

var _ref = _Lock__WEBPACK_IMPORTED_MODULE_3__["default"].propTypes || {},
    sideCar = _ref.sideCar,
    propTypes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["sideCar"]);

FocusLockCombination.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (FocusLockCombination);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/FocusGuard.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/FocusGuard.js ***!
  \*****************************************************************/
/*! exports provided: hiddenGuard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiddenGuard", function() { return hiddenGuard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var hiddenGuard = {
  width: '1px',
  height: '0px',
  padding: 0,
  overflow: 'hidden',
  position: 'fixed',
  top: '1px',
  left: '1px'
};

var InFocusGuard = function InFocusGuard(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: "guard-first",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }), children, children && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: "guard-last",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }));
};

InFocusGuard.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
} : undefined;
InFocusGuard.defaultProps = {
  children: null
};
/* harmony default export */ __webpack_exports__["default"] = (InFocusGuard);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/FreeFocusInside.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/FreeFocusInside.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-lock/constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./node_modules/react-focus-lock/dist/es2015/util.js");






var FreeFocusInside = function FreeFocusInside(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(_util__WEBPACK_IMPORTED_MODULE_4__["inlineProp"])(focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__["FOCUS_ALLOW"], true), {
    className: className
  }), children);
};

FreeFocusInside.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
} : undefined;
FreeFocusInside.defaultProps = {
  className: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (FreeFocusInside);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/Lock.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/Lock.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-lock/constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var use_callback_ref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-callback-ref */ "./node_modules/use-callback-ref/dist/es2015/index.js");
/* harmony import */ var _FocusGuard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FocusGuard */ "./node_modules/react-focus-lock/dist/es2015/FocusGuard.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medium */ "./node_modules/react-focus-lock/dist/es2015/medium.js");







var emptyArray = [];
var FocusLock = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (props, parentRef) {
  var _extends2;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      realObserved = _useState[0],
      setObserved = _useState[1];

  var observed = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var isActive = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  var originalFocusedElement = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var children = props.children,
      disabled = props.disabled,
      noFocusGuards = props.noFocusGuards,
      persistentFocus = props.persistentFocus,
      autoFocus = props.autoFocus,
      allowTextSelection = props.allowTextSelection,
      group = props.group,
      className = props.className,
      whiteList = props.whiteList,
      _props$shards = props.shards,
      shards = _props$shards === void 0 ? emptyArray : _props$shards,
      _props$as = props.as,
      Container = _props$as === void 0 ? 'div' : _props$as,
      _props$lockProps = props.lockProps,
      containerProps = _props$lockProps === void 0 ? {} : _props$lockProps,
      SideCar = props.sideCar,
      shouldReturnFocus = props.returnFocus,
      onActivationCallback = props.onActivation,
      onDeactivationCallback = props.onDeactivation;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      id = _useState2[0]; // SIDE EFFECT CALLBACKS


  var onActivation = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    originalFocusedElement.current = originalFocusedElement.current || document && document.activeElement;

    if (observed.current && onActivationCallback) {
      onActivationCallback(observed.current);
    }

    isActive.current = true;
  }, [onActivationCallback]);
  var onDeactivation = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    isActive.current = false;

    if (onDeactivationCallback) {
      onDeactivationCallback(observed.current);
    }
  }, [onDeactivationCallback]);
  var returnFocus = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (allowDefer) {
    var current = originalFocusedElement.current;

    if (Boolean(shouldReturnFocus) && current && current.focus) {
      var focusOptions = typeof shouldReturnFocus === 'object' ? shouldReturnFocus : undefined;
      originalFocusedElement.current = null;

      if (allowDefer) {
        // React might return focus after update
        // it's safer to defer the action
        Promise.resolve().then(function () {
          return current.focus(focusOptions);
        });
      } else {
        current.focus(focusOptions);
      }
    }
  }, [shouldReturnFocus]); // MEDIUM CALLBACKS

  var onFocus = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (event) {
    if (isActive.current) {
      _medium__WEBPACK_IMPORTED_MODULE_6__["mediumFocus"].useMedium(event);
    }
  }, []);
  var onBlur = _medium__WEBPACK_IMPORTED_MODULE_6__["mediumBlur"].useMedium; // REF PROPAGATION
  // not using real refs due to race conditions

  var setObserveNode = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (newObserved) {
    if (observed.current !== newObserved) {
      observed.current = newObserved;
      setObserved(newObserved);
    }
  }, []);

  if (true) {
    if (typeof allowTextSelection !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn('React-Focus-Lock: allowTextSelection is deprecated and enabled by default');
    }

    react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
      if (!observed.current) {
        // eslint-disable-next-line no-console
        console.error('FocusLock: could not obtain ref to internal node');
      }
    }, []);
  }

  var lockProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])((_extends2 = {}, _extends2[focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__["FOCUS_DISABLED"]] = disabled && 'disabled', _extends2[focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__["FOCUS_GROUP"]] = group, _extends2), containerProps);

  var hasLeadingGuards = noFocusGuards !== true;
  var hasTailingGuards = hasLeadingGuards && noFocusGuards !== 'tail';
  var mergedRef = Object(use_callback_ref__WEBPACK_IMPORTED_MODULE_4__["useMergeRefs"])([parentRef, setObserveNode]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, hasLeadingGuards && [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    key: "guard-first",
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: _FocusGuard__WEBPACK_IMPORTED_MODULE_5__["hiddenGuard"]
  }), // nearest focus guard
  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    key: "guard-nearest",
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 1,
    style: _FocusGuard__WEBPACK_IMPORTED_MODULE_5__["hiddenGuard"]
  })], !disabled && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SideCar, {
    id: id,
    sideCar: _medium__WEBPACK_IMPORTED_MODULE_6__["mediumSidecar"],
    observed: realObserved,
    disabled: disabled,
    persistentFocus: persistentFocus,
    autoFocus: autoFocus,
    whiteList: whiteList,
    shards: shards,
    onActivation: onActivation,
    onDeactivation: onDeactivation,
    returnFocus: returnFocus
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: mergedRef
  }, lockProps, {
    className: className,
    onBlur: onBlur,
    onFocus: onFocus
  }), children), hasTailingGuards && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: _FocusGuard__WEBPACK_IMPORTED_MODULE_5__["hiddenGuard"]
  }));
});
FocusLock.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__["node"],
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  returnFocus: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"], prop_types__WEBPACK_IMPORTED_MODULE_2__["object"]]),
  noFocusGuards: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  allowTextSelection: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  persistentFocus: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  group: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  whiteList: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],
  shards: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["arrayOf"])(prop_types__WEBPACK_IMPORTED_MODULE_2__["any"]),
  as: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_2__["string"], prop_types__WEBPACK_IMPORTED_MODULE_2__["func"], prop_types__WEBPACK_IMPORTED_MODULE_2__["object"]]),
  lockProps: prop_types__WEBPACK_IMPORTED_MODULE_2__["object"],
  onActivation: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],
  onDeactivation: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],
  sideCar: prop_types__WEBPACK_IMPORTED_MODULE_2__["any"].isRequired
} : undefined;
FocusLock.defaultProps = {
  children: undefined,
  disabled: false,
  returnFocus: false,
  noFocusGuards: false,
  autoFocus: true,
  persistentFocus: false,
  allowTextSelection: undefined,
  group: undefined,
  className: undefined,
  whiteList: undefined,
  shards: undefined,
  as: 'div',
  lockProps: {},
  onActivation: undefined,
  onDeactivation: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (FocusLock);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/MoveFocusInside.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/MoveFocusInside.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-lock/constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./node_modules/react-focus-lock/dist/es2015/util.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./medium */ "./node_modules/react-focus-lock/dist/es2015/medium.js");







function MoveFocusInside(_ref) {
  var isDisabled = _ref.disabled,
      className = _ref.className,
      children = _ref.children;
  var ref = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);
  var disabled = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(isDisabled);

  var moveFocus = function moveFocus() {
    var observed = ref.current;
    _medium__WEBPACK_IMPORTED_MODULE_5__["mediumEffect"].useMedium(function (car) {
      if (!disabled.current && observed) {
        if (!car.focusInside(observed)) {
          car.moveFocusInside(observed, null);
        }
      }
    });
  };

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    disabled.current = isDisabled;
    moveFocus();
  }, [isDisabled]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(_util__WEBPACK_IMPORTED_MODULE_4__["inlineProp"])(focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__["FOCUS_AUTO"], !isDisabled), {
    ref: ref,
    className: className
  }), children);
}

MoveFocusInside.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
} : undefined;
MoveFocusInside.defaultProps = {
  disabled: false,
  className: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (MoveFocusInside);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/Trap.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/Trap.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_clientside_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-clientside-effect */ "./node_modules/react-clientside-effect/lib/index.es.js");
/* harmony import */ var focus_lock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-lock */ "./node_modules/focus-lock/dist/es2015/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./node_modules/react-focus-lock/dist/es2015/util.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./medium */ "./node_modules/react-focus-lock/dist/es2015/medium.js");







var focusOnBody = function focusOnBody() {
  return document && document.activeElement === document.body;
};

var isFreeFocus = function isFreeFocus() {
  return focusOnBody() || Object(focus_lock__WEBPACK_IMPORTED_MODULE_3__["focusIsHidden"])();
};

var lastActiveTrap = null;
var lastActiveFocus = null;
var lastPortaledElement = null;
var focusWasOutsideWindow = false;

var defaultWhitelist = function defaultWhitelist() {
  return true;
};

var focusWhitelisted = function focusWhitelisted(activeElement) {
  return (lastActiveTrap.whiteList || defaultWhitelist)(activeElement);
};

var recordPortal = function recordPortal(observerNode, portaledElement) {
  lastPortaledElement = {
    observerNode: observerNode,
    portaledElement: portaledElement
  };
};

var focusIsPortaledPair = function focusIsPortaledPair(element) {
  return lastPortaledElement && lastPortaledElement.portaledElement === element;
};

function autoGuard(startIndex, end, step, allNodes) {
  var lastGuard = null;
  var i = startIndex;

  do {
    var item = allNodes[i];

    if (item.guard) {
      if (item.node.dataset.focusAutoGuard) {
        lastGuard = item;
      }
    } else if (item.lockItem) {
      if (i !== startIndex) {
        // we will tab to the next element
        return;
      }

      lastGuard = null;
    } else {
      break;
    }
  } while ((i += step) !== end);

  if (lastGuard) {
    lastGuard.node.tabIndex = 0;
  }
}

var extractRef = function extractRef(ref) {
  return ref && 'current' in ref ? ref.current : ref;
};

var activateTrap = function activateTrap() {
  var result = false;

  if (lastActiveTrap) {
    var _lastActiveTrap = lastActiveTrap,
        observed = _lastActiveTrap.observed,
        persistentFocus = _lastActiveTrap.persistentFocus,
        autoFocus = _lastActiveTrap.autoFocus,
        shards = _lastActiveTrap.shards;
    var workingNode = observed || lastPortaledElement && lastPortaledElement.portaledElement;
    var activeElement = document && document.activeElement;

    if (workingNode) {
      var workingArea = [workingNode].concat(shards.map(extractRef).filter(Boolean));

      if (!activeElement || focusWhitelisted(activeElement)) {
        if (persistentFocus || focusWasOutsideWindow || !isFreeFocus() || !lastActiveFocus && autoFocus) {
          if (workingNode && !(Object(focus_lock__WEBPACK_IMPORTED_MODULE_3__["focusInside"])(workingArea) || focusIsPortaledPair(activeElement, workingNode))) {
            if (document && !lastActiveFocus && activeElement && !autoFocus) {
              activeElement.blur();
              document.body.focus();
            } else {
              result = Object(focus_lock__WEBPACK_IMPORTED_MODULE_3__["default"])(workingArea, lastActiveFocus);
              lastPortaledElement = {};
            }
          }

          focusWasOutsideWindow = false;
          lastActiveFocus = document && document.activeElement;
        }
      }

      if (document) {
        var newActiveElement = document && document.activeElement;
        var allNodes = Object(focus_lock__WEBPACK_IMPORTED_MODULE_3__["getFocusabledIn"])(workingArea);
        var focusedItem = allNodes.find(function (_ref) {
          var node = _ref.node;
          return node === newActiveElement;
        });

        if (focusedItem) {
          // remove old focus
          allNodes.filter(function (_ref2) {
            var guard = _ref2.guard,
                node = _ref2.node;
            return guard && node.dataset.focusAutoGuard;
          }).forEach(function (_ref3) {
            var node = _ref3.node;
            return node.removeAttribute('tabIndex');
          });
          var focusedIndex = allNodes.indexOf(focusedItem);
          autoGuard(focusedIndex, allNodes.length, +1, allNodes);
          autoGuard(focusedIndex, -1, -1, allNodes);
        }
      }
    }
  }

  return result;
};

var onTrap = function onTrap(event) {
  if (activateTrap() && event) {
    // prevent scroll jump
    event.stopPropagation();
    event.preventDefault();
  }
};

var onBlur = function onBlur() {
  return Object(_util__WEBPACK_IMPORTED_MODULE_4__["deferAction"])(activateTrap);
};

var onFocus = function onFocus(event) {
  // detect portal
  var source = event.target;
  var currentNode = event.currentTarget;

  if (!currentNode.contains(source)) {
    recordPortal(currentNode, source);
  }
};

var FocusWatcher = function FocusWatcher() {
  return null;
};

var FocusTrap = function FocusTrap(_ref4) {
  var children = _ref4.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onBlur: onBlur,
    onFocus: onFocus
  }, children);
};

FocusTrap.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
} : undefined;

var onWindowBlur = function onWindowBlur() {
  focusWasOutsideWindow = true;
};

var attachHandler = function attachHandler() {
  document.addEventListener('focusin', onTrap, true);
  document.addEventListener('focusout', onBlur);
  window.addEventListener('blur', onWindowBlur);
};

var detachHandler = function detachHandler() {
  document.removeEventListener('focusin', onTrap, true);
  document.removeEventListener('focusout', onBlur);
  window.removeEventListener('blur', onWindowBlur);
};

function reducePropsToState(propsList) {
  return propsList.filter(function (_ref5) {
    var disabled = _ref5.disabled;
    return !disabled;
  });
}

function handleStateChangeOnClient(traps) {
  var trap = traps.slice(-1)[0];

  if (trap && !lastActiveTrap) {
    attachHandler();
  }

  var lastTrap = lastActiveTrap;
  var sameTrap = lastTrap && trap && trap.id === lastTrap.id;
  lastActiveTrap = trap;

  if (lastTrap && !sameTrap) {
    lastTrap.onDeactivation(); // return focus only of last trap was removed

    if (!traps.filter(function (_ref6) {
      var id = _ref6.id;
      return id === lastTrap.id;
    }).length) {
      // allow defer is no other trap is awaiting restore
      lastTrap.returnFocus(!trap);
    }
  }

  if (trap) {
    lastActiveFocus = null;

    if (!sameTrap || lastTrap.observed !== trap.observed) {
      trap.onActivation();
    }

    activateTrap(true);
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["deferAction"])(activateTrap);
  } else {
    detachHandler();
    lastActiveFocus = null;
  }
} // bind medium


_medium__WEBPACK_IMPORTED_MODULE_5__["mediumFocus"].assignSyncMedium(onFocus);
_medium__WEBPACK_IMPORTED_MODULE_5__["mediumBlur"].assignMedium(onBlur);
_medium__WEBPACK_IMPORTED_MODULE_5__["mediumEffect"].assignMedium(function (cb) {
  return cb({
    moveFocusInside: focus_lock__WEBPACK_IMPORTED_MODULE_3__["default"],
    focusInside: focus_lock__WEBPACK_IMPORTED_MODULE_3__["focusInside"]
  });
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_clientside_effect__WEBPACK_IMPORTED_MODULE_2__["default"])(reducePropsToState, handleStateChangeOnClient)(FocusWatcher));

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/UI.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/UI.js ***!
  \*********************************************************/
/*! exports provided: AutoFocusInside, MoveFocusInside, FreeFocusInside, InFocusGuard, FocusLockUI, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lock */ "./node_modules/react-focus-lock/dist/es2015/Lock.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusLockUI", function() { return _Lock__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _AutoFocusInside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutoFocusInside */ "./node_modules/react-focus-lock/dist/es2015/AutoFocusInside.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoFocusInside", function() { return _AutoFocusInside__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _MoveFocusInside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MoveFocusInside */ "./node_modules/react-focus-lock/dist/es2015/MoveFocusInside.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoveFocusInside", function() { return _MoveFocusInside__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _FreeFocusInside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FreeFocusInside */ "./node_modules/react-focus-lock/dist/es2015/FreeFocusInside.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FreeFocusInside", function() { return _FreeFocusInside__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _FocusGuard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FocusGuard */ "./node_modules/react-focus-lock/dist/es2015/FocusGuard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InFocusGuard", function() { return _FocusGuard__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/* harmony default export */ __webpack_exports__["default"] = (_Lock__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/index.js":
/*!************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/index.js ***!
  \************************************************************/
/*! exports provided: AutoFocusInside, MoveFocusInside, FreeFocusInside, InFocusGuard, FocusLockUI, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Combination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Combination */ "./node_modules/react-focus-lock/dist/es2015/Combination.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./node_modules/react-focus-lock/dist/es2015/UI.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoFocusInside", function() { return _UI__WEBPACK_IMPORTED_MODULE_1__["AutoFocusInside"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoveFocusInside", function() { return _UI__WEBPACK_IMPORTED_MODULE_1__["MoveFocusInside"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FreeFocusInside", function() { return _UI__WEBPACK_IMPORTED_MODULE_1__["FreeFocusInside"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InFocusGuard", function() { return _UI__WEBPACK_IMPORTED_MODULE_1__["InFocusGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusLockUI", function() { return _UI__WEBPACK_IMPORTED_MODULE_1__["FocusLockUI"]; });



/* harmony default export */ __webpack_exports__["default"] = (_Combination__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/medium.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/medium.js ***!
  \*************************************************************/
/*! exports provided: mediumFocus, mediumBlur, mediumEffect, mediumSidecar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediumFocus", function() { return mediumFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediumBlur", function() { return mediumBlur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediumEffect", function() { return mediumEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediumSidecar", function() { return mediumSidecar; });
/* harmony import */ var use_sidecar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! use-sidecar */ "./node_modules/use-sidecar/dist/es2015/index.js");

var mediumFocus = Object(use_sidecar__WEBPACK_IMPORTED_MODULE_0__["createMedium"])({}, function (_ref) {
  var target = _ref.target,
      currentTarget = _ref.currentTarget;
  return {
    target: target,
    currentTarget: currentTarget
  };
});
var mediumBlur = Object(use_sidecar__WEBPACK_IMPORTED_MODULE_0__["createMedium"])();
var mediumEffect = Object(use_sidecar__WEBPACK_IMPORTED_MODULE_0__["createMedium"])();
var mediumSidecar = Object(use_sidecar__WEBPACK_IMPORTED_MODULE_0__["createSidecarMedium"])({
  async: true
});

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/util.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/util.js ***!
  \***********************************************************/
/*! exports provided: deferAction, inlineProp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deferAction", function() { return deferAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inlineProp", function() { return inlineProp; });
function deferAction(action) {
  // Hidding setImmediate from Webpack to avoid inserting polyfill
  var _window = window,
      setImmediate = _window.setImmediate;

  if (typeof setImmediate !== 'undefined') {
    setImmediate(action);
  } else {
    setTimeout(action, 1);
  }
}
var inlineProp = function inlineProp(name, value) {
  var obj = {};
  obj[name] = value;
  return obj;
};

/***/ }),

/***/ "./node_modules/react-joyride/es/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-joyride/es/index.js ***!
  \************************************************/
/*! exports provided: default, ACTIONS, EVENTS, LIFECYCLE, STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIONS", function() { return ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENTS", function() { return EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIFECYCLE", function() { return LIFECYCLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS", function() { return STATUS; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tree_changes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tree-changes */ "./node_modules/tree-changes/lib/index.js");
/* harmony import */ var tree_changes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tree_changes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var is_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! is-lite */ "./node_modules/is-lite/lib/index.js");
/* harmony import */ var is_lite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(is_lite__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(exenv__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! scroll */ "./node_modules/react-joyride/node_modules/scroll/index.js");
/* harmony import */ var scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(scroll__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var scrollparent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! scrollparent */ "./node_modules/scrollparent/scrollparent.js");
/* harmony import */ var scrollparent__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(scrollparent__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! deepmerge */ "./node_modules/react-joyride/node_modules/deepmerge/dist/cjs.js");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_floater__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-floater */ "./node_modules/react-floater/es/index.js");












function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var ACTIONS = {
  INIT: 'init',
  START: 'start',
  STOP: 'stop',
  RESET: 'reset',
  PREV: 'prev',
  NEXT: 'next',
  GO: 'go',
  CLOSE: 'close',
  SKIP: 'skip',
  UPDATE: 'update'
};

var EVENTS = {
  TOUR_START: 'tour:start',
  STEP_BEFORE: 'step:before',
  BEACON: 'beacon',
  TOOLTIP: 'tooltip',
  STEP_AFTER: 'step:after',
  TOUR_END: 'tour:end',
  TOUR_STATUS: 'tour:status',
  TARGET_NOT_FOUND: 'error:target_not_found',
  ERROR: 'error'
};

var LIFECYCLE = {
  INIT: 'init',
  READY: 'ready',
  BEACON: 'beacon',
  TOOLTIP: 'tooltip',
  COMPLETE: 'complete',
  ERROR: 'error'
};

var STATUS = {
  IDLE: 'idle',
  READY: 'ready',
  WAITING: 'waiting',
  RUNNING: 'running',
  PAUSED: 'paused',
  SKIPPED: 'skipped',
  FINISHED: 'finished',
  ERROR: 'error'
};

var canUseDOM = exenv__WEBPACK_IMPORTED_MODULE_5___default.a.canUseDOM;
var isReact16 = react_dom__WEBPACK_IMPORTED_MODULE_4__["createPortal"] !== undefined;
/**
 * Get the current browser
 *
 * @param {string} userAgent
 *
 * @returns {String}
 */

function getBrowser() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : navigator.userAgent;
  var browser = userAgent;

  if (typeof window === 'undefined') {
    browser = 'node';
  } else if (document.documentMode) {
    browser = 'ie';
  } else if (/Edge/.test(userAgent)) {
    browser = 'edge';
  } // Opera 8.0+
  else if (Boolean(window.opera) || userAgent.indexOf(' OPR/') >= 0) {
      browser = 'opera';
    } // Firefox 1.0+
    else if (typeof window.InstallTrigger !== 'undefined') {
        browser = 'firefox';
      } // Chrome 1+
      else if (window.chrome) {
          browser = 'chrome';
        } // Safari (and Chrome iOS, Firefox iOS)
        else if (/(Version\/([0-9._]+).*Safari|CriOS|FxiOS| Mobile\/)/.test(userAgent)) {
            browser = 'safari';
          }

  return browser;
}
/**
 * Get the toString Object type
 * @param {*} value
 * @returns {string}
 */

function getObjectType(value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}
/**
 * Get text from React components
 *
 * @param {*} root
 *
 * @returns {string}
 */

function getText(root) {
  var content = [];

  var recurse = function recurse(child) {
    /* istanbul ignore else */
    if (typeof child === 'string' || typeof child === 'number') {
      content.push(child);
    } else if (Array.isArray(child)) {
      child.forEach(function (c) {
        return recurse(c);
      });
    } else if (child && child.props) {
      var children = child.props.children;

      if (Array.isArray(children)) {
        children.forEach(function (c) {
          return recurse(c);
        });
      } else {
        recurse(children);
      }
    }
  };

  recurse(root);
  return content.join(' ').trim();
}
function hasOwnProperty(value, key) {
  return Object.prototype.hasOwnProperty.call(value, key);
}
function hasValidKeys(value, keys) {
  if (!is_lite__WEBPACK_IMPORTED_MODULE_3___default.a.plainObject(value) || !is_lite__WEBPACK_IMPORTED_MODULE_3___default.a.array(keys)) {
    return false;
  }

  return Object.keys(value).every(function (d) {
    return keys.indexOf(d) !== -1;
  });
}
/**
 * Convert hex to RGB
 *
 * @param {string} hex
 * @returns {Array}
 */

function hexToRGB(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var properHex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(properHex);
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : [];
}
/**
 * Decide if the step shouldn't skip the beacon
 * @param {Object} step
 *
 * @returns {boolean}
 */

function hideBeacon(step) {
  return step.disableBeacon || step.placement === 'center';
}
/**
 * Compare if two variables are equal
 *
 * @param {*} left
 * @param {*} right
 *
 * @returns {boolean}
 */

function isEqual(left, right) {
  var type;
  var hasReactElement = Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(left) || Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(right);
  var hasUndefined = is_lite__WEBPACK_IMPORTED_MODULE_3___default.a.undefined(left) || is_lite__WEBPACK_IMPORTED_MODULE_3___default.a.undefined(right);

  if (getObjectType(left) !== getObjectType(right) || hasReactElement || hasUndefined) {
    return false;
  }

  if (is_lite__WEBPACK_IMPORTED_MODULE_3___default.a.domElement(left)) {
    return left.isSameNode(right);
  }

  if (is_lite__WEBPACK_IMPORTED_MODULE_3___default.a.number(left)) {
    return left === right;
  }

  if (is_lite__WEBPACK_IMPORTED_MODULE_3___default.a["function"](left)) {
    return left.toString() === right.toString();
  }

  for (var key in left) {
    /* istanbul ignore else */
    if (hasOwnProperty(left, key)) {
      if (typeof left[key] === 'undefined' || typeof right[key] === 'undefined') {
        return false;
      }

      type = getObjectType(left[key]);

      if (['object', 'array'].indexOf(type) !== -1 && isEqual(left[key], right[key])) {
        continue;
      }

      if (type === 'function' && isEqual(left[key], right[key])) {
        continue;
      }

      if (left[key] !== right[key]) {
        return false;
      }
    }
  }

  for (var p in right) {
    /* istanbul ignore else */
    if (hasOwnProperty(right, p)) {
      if (typeof left[p] === 'undefined') {
        return false;
      }
    }
  }

  return true;
}
/**
 * Detect legacy browsers
 *
 * @returns {boolean}
 */

function isLegacy() {
  return !(['chrome', 'safari', 'firefox', 'opera'].indexOf(getBrowser()) !== -1);
}
/**
 * Log method calls if debug is enabled
 *
 * @private
 * @param {Object}       arg
 * @param {string}       arg.title    - The title the logger was called from
 * @param {Object|Array} [arg.data]   - The data to be logged
 * @param {boolean}      [arg.warn]  - If true, the message will be a warning
 * @param {boolean}      [arg.debug] - Nothing will be logged unless debug is true
 */

function log(_ref) {
  var title = _ref.title,
      data = _ref.data,
      _ref$warn = _ref.warn,
      warn = _ref$warn === void 0 ? false : _ref$warn,
      _ref$debug = _ref.debug,
      debug = _ref$debug === void 0 ? false : _ref$debug;

  /* eslint-disable no-console */
  var logFn = warn ? console.warn || console.error : console.log;

  if (debug) {
    if (title && data) {
      console.groupCollapsed("%creact-joyride: ".concat(title), 'color: #ff0044; font-weight: bold; font-size: 12px;');

      if (Array.isArray(data)) {
        data.forEach(function (d) {
          if (is_lite__WEBPACK_IMPORTED_MODULE_3___default.a.plainObject(d) && d.key) {
            logFn.apply(console, [d.key, d.value]);
          } else {
            logFn.apply(console, [d]);
          }
        });
      } else {
        logFn.apply(console, [data]);
      }

      console.groupEnd();
    } else {
      console.error('Missing title or data props');
    }
  }
  /* eslint-enable */

}

var defaultState = {
  action: '',
  controlled: false,
  index: 0,
  lifecycle: LIFECYCLE.INIT,
  size: 0,
  status: STATUS.IDLE
};
var validKeys = ['action', 'index', 'lifecycle', 'status'];
function createStore(props) {
  var store = new Map();
  var data = new Map();

  var Store =
  /*#__PURE__*/
  function () {
    function Store() {
      var _this = this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$continuous = _ref.continuous,
          continuous = _ref$continuous === void 0 ? false : _ref$continuous,
          stepIndex = _ref.stepIndex,
          _ref$steps = _ref.steps,
          _steps = _ref$steps === void 0 ? [] : _ref$steps;

      _classCallCheck(this, Store);

      _defineProperty(this, "listener", void 0);

      _defineProperty(this, "setSteps", function (steps) {
        var _this$getState = _this.getState(),
            size = _this$getState.size,
            status = _this$getState.status;

        var state = {
          size: steps.length,
          status: status
        };
        data.set('steps', steps);

        if (status === STATUS.WAITING && !size && steps.length) {
          state.status = STATUS.RUNNING;
        }

        _this.setState(state);
      });

      _defineProperty(this, "addListener", function (listener) {
        _this.listener = listener;
      });

      _defineProperty(this, "update", function (state) {
        if (!hasValidKeys(state, validKeys)) {
          throw new Error("State is not valid. Valid keys: ".concat(validKeys.join(', ')));
        }

        _this.setState(_objectSpread2({}, _this.getNextState(_objectSpread2({}, _this.getState(), {}, state, {
          action: state.action || ACTIONS.UPDATE
        }), true)));
      });

      _defineProperty(this, "start", function (nextIndex) {
        var _this$getState2 = _this.getState(),
            index = _this$getState2.index,
            size = _this$getState2.size;

        _this.setState(_objectSpread2({}, _this.getNextState({
          action: ACTIONS.START,
          index: is_lite__WEBPACK_IMPORTED_MODULE_3___default.a.number(nextIndex) ? nextIndex : index
        }, true), {
          status: size ? STATUS.RUNNING : STATUS.WAITING
        }));
      });

      _defineProperty(this, "stop", function () {
        var advance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        var _this$getState3 = _this.getState(),
            index = _this$getState3.index,
            status = _this$getState3.status;

        if ([STATUS.FINISHED, STATUS.SKIPPED].indexOf(status) !== -1) return;

        _this.setState(_objectSpread2({}, _this.getNextState({
          action: ACTIONS.STOP,
          index: index + (advance ? 1 : 0)
        }), {
          status: STATUS.PAUSED
        }));
      });

      _defineProperty(this, "close", function () {
        var _this$getState4 = _this.getState(),
            index = _this$getState4.index,
            status = _this$getState4.status;

        if (status !== STATUS.RUNNING) return;

        _this.setState(_objectSpread2({}, _this.getNextState({
          action: ACTIONS.CLOSE,
          index: index + 1
        })));
      });

      _defineProperty(this, "go", function (nextIndex) {
        var _this$getState5 = _this.getState(),
            controlled = _this$getState5.controlled,
            status = _this$getState5.status;

        if (controlled || status !== STATUS.RUNNING) return;

        var step = _this.getSteps()[nextIndex];

        _this.setState(_objectSpread2({}, _this.getNextState({
          action: ACTIONS.GO,
          index: nextIndex
        }), {
          status: step ? status : STATUS.FINISHED
        }));
      });

      _defineProperty(this, "info", function () {
        return _this.getState();
      });

      _defineProperty(this, "next", function () {
        var _this$getState6 = _this.getState(),
            index = _this$getState6.index,
            status = _this$getState6.status;

        if (status !== STATUS.RUNNING) return;

        _this.setState(_this.getNextState({
          action: ACTIONS.NEXT,
          index: index + 1
        }));
      });

      _defineProperty(this, "open", function () {
        var _this$getState7 = _this.getState(),
            status = _this$getState7.status;

        if (status !== STATUS.RUNNING) return;

        _this.setState(_objectSpread2({}, _this.getNextState({
          action: ACTIONS.UPDATE,
          lifecycle: LIFECYCLE.TOOLTIP
        })));
      });

      _defineProperty(this, "prev", function () {
        var _this$getState8 = _this.getState(),
            index = _this$getState8.index,
            status = _this$getState8.status;

        if (status !== STATUS.RUNNING) return;

        _this.setState(_objectSpread2({}, _this.getNextState({
          action: ACTIONS.PREV,
          index: index - 1
        })));
      });

      _defineProperty(this, "reset", function () {
        var restart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        var _this$getState9 = _this.getState(),
            controlled = _this$getState9.controlled;

        if (controlled) return;

        _this.setState(_objectSpread2({}, _this.getNextState({
          action: ACTIONS.RESET,
          index: 0
        }), {
          status: restart ? STATUS.RUNNING : STATUS.READY
        }));
      });

      _defineProperty(this, "skip", function () {
        var _this$getState10 = _this.getState(),
            status = _this$getState10.status;

        if (status !== STATUS.RUNNING) return;

        _this.setState({
          action: ACTIONS.SKIP,
          lifecycle: LIFECYCLE.INIT,
          status: STATUS.SKIPPED
        });
      });

      this.setState({
        action: ACTIONS.INIT,
        controlled: is_lite__WEBPACK_IMPORTED_MODULE_3___default.a.number(stepIndex),
        continuous: continuous,
        index: is_lite__WEBPACK_IMPORTED_MODULE_3___default.a.number(stepIndex) ? stepIndex : 0,
        lifecycle: LIFECYCLE.INIT,
        status: _steps.length ? STATUS.READY : STATUS.IDLE
      }, true);
      this.setSteps(_steps);
    }

    _createClass(Store, [{
      key: "setState",
      value: function setState(nextState) {
        var initial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var state = this.getState();

        var _state$nextState = _objectSpread2({}, state, {}, nextState),
            action = _state$nextState.action,
            index = _state$nextState.index,
            lifecycle = _state$nextState.lifecycle,
            size = _state$nextState.size,
            status = _state$nextState.status;

        store.set('action', action);
        store.set('index', index);
        store.set('lifecycle', lifecycle);
        store.set('size', size);
        store.set('status', status);

        if (initial) {
          store.set('controlled', nextState.controlled);
          store.set('continuous', nextState.continuous);
        }
        /* istanbul ignore else */


        if (this.listener && this.hasUpdatedState(state)) {
          // console.log('▶ ▶ ▶ NEW STATE', this.getState());
          this.listener(this.getState());
        }
      }
    }, {
      key: "getState",
      value: function getState() {
        if (!store.size) {
          return _objectSpread2({}, defaultState);
        }

        return {
          action: store.get('action') || '',
          controlled: store.get('controlled') || false,
          index: parseInt(store.get('index'), 10),
          lifecycle: store.get('lifecycle') || '',
          size: store.get('size') || 0,
          status: store.get('status') || ''
        };
      }
    }, {
      key: "getNextState",
      value: function getNextState(state) {
        var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        var _this$getState11 = this.getState(),
            action = _this$getState11.action,
            controlled = _this$getState11.controlled,
            index = _this$getState11.index,
            size = _this$getState11.size,
            status = _this$getState11.status;

        var newIndex = is_lite__WEBPACK_IMPORTED_MODULE_3___default.a.number(state.index) ? state.index : index;
        var nextIndex = controlled && !force ? index : Math.min(Math.max(newIndex, 0), size);
        return {
          action: state.action || action,
          controlled: controlled,
          index: nextIndex,
          lifecycle: state.lifecycle || LIFECYCLE.INIT,
          size: state.size || size,
          status: nextIndex === size ? STATUS.FINISHED : state.status || status
        };
      }
    }, {
      key: "hasUpdatedState",
      value: function hasUpdatedState(oldState) {
        var before = JSON.stringify(oldState);
        var after = JSON.stringify(this.getState());
        return before !== after;
      }
    }, {
      key: "getSteps",
      value: function getSteps() {
        var steps = data.get('steps');
        return Array.isArray(steps) ? steps : [];
      }
    }, {
      key: "getHelpers",
      value: function getHelpers() {
        return {
          close: this.close,
          go: this.go,
          info: this.info,
          next: this.next,
          open: this.open,
          prev: this.prev,
          reset: this.reset,
          skip: this.skip
        };
      }
    }]);

    return Store;
  }();

  return new Store(props);
}

function scrollDoc() {
  return document.scrollingElement || document.createElement('body');
}
/**
 * Find the bounding client rect
 *
 * @private
 * @param {HTMLElement} element - The target element
 * @returns {Object}
 */

function getClientRect(element) {
  if (!element) {
    return {};
  }

  return element.getBoundingClientRect();
}
/**
 * Helper function to get the browser-normalized "document height"
 * @returns {Number}
 */

function getDocumentHeight() {
  var _document = document,
      body = _document.body,
      html = _document.documentElement;

  if (!body || !html) {
    return 0;
  }

  return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
}
/**
 * Find and return the target DOM element based on a step's 'target'.
 *
 * @private
 * @param {string|HTMLElement} element
 *
 * @returns {HTMLElement|null}
 */

function getElement(element) {
  /* istanbul ignore else */
  if (typeof element === 'string') {
    return document.querySelector(element);
  }

  return element;
}
/**
 *  Get computed style property
 *
 * @param {HTMLElement} el
 *
 * @returns {Object}
 */

function getStyleComputedProperty(el) {
  if (!el || el.nodeType !== 1) {
    return {};
  }

  return getComputedStyle(el);
}
/**
 * Get scroll parent with fix
 *
 * @param {HTMLElement} element
 * @param {boolean} skipFix
 * @param {boolean} [forListener]
 *
 * @returns {*}
 */

function getScrollParent(element, skipFix, forListener) {
  var parent = scrollparent__WEBPACK_IMPORTED_MODULE_7___default()(element);

  if (parent.isSameNode(scrollDoc())) {
    if (forListener) {
      return document;
    }

    return scrollDoc();
  }

  var hasScrolling = parent.scrollHeight > parent.offsetHeight;
  /* istanbul ignore else */

  if (!hasScrolling && !skipFix) {
    parent.style.overflow = 'initial';
    return scrollDoc();
  }

  return parent;
}
/**
 * Check if the element has custom scroll parent
 *
 * @param {HTMLElement} element
 * @param {boolean} skipFix
 *
 * @returns {boolean}
 */

function hasCustomScrollParent(element, skipFix) {
  if (!element) return false;
  var parent = getScrollParent(element, skipFix);
  return !parent.isSameNode(scrollDoc());
}
/**
 * Check if the element has custom offset parent
 *
 * @param {HTMLElement} element
 *
 * @returns {boolean}
 */

function hasCustomOffsetParent(element) {
  return element.offsetParent !== document.body;
}
/**
 * Check if an element has fixed/sticky position
 * @param {HTMLElement|Node} el
 * @param {string} [type]
 *
 * @returns {boolean}
 */

function hasPosition(el) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'fixed';

  if (!el || !(el instanceof HTMLElement)) {
    return false;
  }

  var nodeName = el.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }

  if (getStyleComputedProperty(el).position === type) {
    return true;
  }

  return hasPosition(el.parentNode, type);
}
/**
 * Check if the element is visible
 *
 * @param {HTMLElement} element
 *
 * @returns {boolean}
 */

function isElementVisible(element) {
  if (!element) return false;
  var parentElement = element;

  while (parentElement) {
    if (parentElement === document.body) break;
    /* istanbul ignore else */

    if (parentElement instanceof HTMLElement) {
      var _getComputedStyle = getComputedStyle(parentElement),
          display = _getComputedStyle.display,
          visibility = _getComputedStyle.visibility;

      if (display === 'none' || visibility === 'hidden') {
        return false;
      }
    }

    parentElement = parentElement.parentNode;
  }

  return true;
}
/**
 * Find and return the target DOM element based on a step's 'target'.
 *
 * @private
 * @param {string|HTMLElement} element
 * @param {number} offset
 * @param {boolean} skipFix
 *
 * @returns {HTMLElement|undefined}
 */

function getElementPosition(element, offset, skipFix) {
  var elementRect = getClientRect(element);
  var parent = getScrollParent(element, skipFix);
  var hasScrollParent = hasCustomScrollParent(element, skipFix);
  var parentTop = 0;
  /* istanbul ignore else */

  if (parent instanceof HTMLElement) {
    parentTop = parent.scrollTop;
  }

  var top = elementRect.top + (!hasScrollParent && !hasPosition(element) ? parentTop : 0);
  return Math.floor(top - offset);
}
/**
 * Get the scrollTop position
 *
 * @param {HTMLElement} element
 * @param {number} offset
 * @param {boolean} skipFix
 *
 * @returns {number}
 */

function getScrollTo(element, offset, skipFix) {
  if (!element) {
    return 0;
  }

  var parent = scrollparent__WEBPACK_IMPORTED_MODULE_7___default()(element);
  var top = element.offsetTop;

  if (hasCustomScrollParent(element, skipFix) && !hasCustomOffsetParent(element)) {
    top -= parent.offsetTop;
  }

  return Math.floor(top - offset);
}
/**
 * Scroll to position
 * @param {number} value
 * @param {HTMLElement} element
 * @param {number} scrollDuration
 * @returns {Promise<*>}
 */

function scrollTo(value) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scrollDoc();
  var scrollDuration = arguments.length > 2 ? arguments[2] : undefined;
  return new Promise(function (resolve, reject) {
    var scrollTop = element.scrollTop;
    var limit = value > scrollTop ? value - scrollTop : scrollTop - value;
    scroll__WEBPACK_IMPORTED_MODULE_6___default.a.top(element, value, {
      duration: limit < 100 ? 50 : scrollDuration
    }, function (error) {
      if (error && error.message !== 'Element already at target scroll position') {
        return reject(error);
      }

      return resolve();
    });
  });
}

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;
    /* istanbul ignore else */

    if (props[propName] == null) {
      if (isRequired) {
        return new Error("Required ".concat(location, " `").concat(propFullNameSafe, "` was not specified in `").concat(componentNameSafe, "`."));
      }

      return null;
    }

    for (var _len = arguments.length, args = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      args[_key - 6] = arguments[_key];
    }

    return validate.apply(void 0, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
}

var componentTypeWithRefs = createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
  var propValue = props[propName];
  var Component = propValue;

  if (!react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(propValue) && Object(react_is__WEBPACK_IMPORTED_MODULE_8__["isValidElementType"])(propValue)) {
    var ownProps = {
      ref: function ref() {},
      step: {}
    };
    Component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, ownProps);
  }

  if (is_lite__WEBPACK_IMPORTED_MODULE_3___default.a.string(propValue) || is_lite__WEBPACK_IMPORTED_MODULE_3___default.a.number(propValue) || !Object(react_is__WEBPACK_IMPORTED_MODULE_8__["isValidElementType"])(propValue) || !([react_is__WEBPACK_IMPORTED_MODULE_8__["Element"], react_is__WEBPACK_IMPORTED_MODULE_8__["ForwardRef"]].indexOf(Object(react_is__WEBPACK_IMPORTED_MODULE_8__["typeOf"])(Component)) !== -1)) {
    return new Error("Invalid ".concat(location, " `").concat(propFullName, "` supplied to `").concat(componentName, "`. Expected a React class or forwardRef."));
  }

  return undefined;
});

var defaultOptions = {
  arrowColor: '#fff',
  backgroundColor: '#fff',
  beaconSize: 36,
  overlayColor: 'rgba(0, 0, 0, 0.5)',
  primaryColor: '#f04',
  spotlightShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
  textColor: '#333',
  zIndex: 100
};
var buttonBase = {
  backgroundColor: 'transparent',
  border: 0,
  borderRadius: 0,
  color: '#555',
  cursor: 'pointer',
  fontSize: 16,
  lineHeight: 1,
  padding: 8,
  WebkitAppearance: 'none'
};
var spotlight = {
  borderRadius: 4,
  position: 'absolute'
};
function getStyles() {
  var stepStyles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var options = deepmerge__WEBPACK_IMPORTED_MODULE_9___default()(defaultOptions, stepStyles.options || {});
  var width = 290;

  if (window.innerWidth > 480) {
    width = 380;
  }

  if (options.width) {
    if (window.innerWidth < options.width) {
      width = window.innerWidth - 30;
    } else {
      width = options.width; //eslint-disable-line prefer-destructuring
    }
  }

  var overlay = {
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: options.zIndex
  };
  var defaultStyles = {
    beacon: _objectSpread2({}, buttonBase, {
      display: 'inline-block',
      height: options.beaconSize,
      position: 'relative',
      width: options.beaconSize,
      zIndex: options.zIndex
    }),
    beaconInner: {
      animation: 'joyride-beacon-inner 1.2s infinite ease-in-out',
      backgroundColor: options.primaryColor,
      borderRadius: '50%',
      display: 'block',
      height: '50%',
      left: '50%',
      opacity: 0.7,
      position: 'absolute',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: '50%'
    },
    beaconOuter: {
      animation: 'joyride-beacon-outer 1.2s infinite ease-in-out',
      backgroundColor: "rgba(".concat(hexToRGB(options.primaryColor).join(','), ", 0.2)"),
      border: "2px solid ".concat(options.primaryColor),
      borderRadius: '50%',
      boxSizing: 'border-box',
      display: 'block',
      height: '100%',
      left: 0,
      opacity: 0.9,
      position: 'absolute',
      top: 0,
      transformOrigin: 'center',
      width: '100%'
    },
    tooltip: {
      backgroundColor: options.backgroundColor,
      borderRadius: 5,
      boxSizing: 'border-box',
      color: options.textColor,
      fontSize: 16,
      maxWidth: '100%',
      padding: 15,
      position: 'relative',
      width: width
    },
    tooltipContainer: {
      lineHeight: 1.4,
      textAlign: 'center'
    },
    tooltipTitle: {
      fontSize: 18,
      margin: 0
    },
    tooltipContent: {
      padding: '20px 10px'
    },
    tooltipFooter: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: 15
    },
    tooltipFooterSpacer: {
      flex: 1
    },
    buttonNext: _objectSpread2({}, buttonBase, {
      backgroundColor: options.primaryColor,
      borderRadius: 4,
      color: '#fff'
    }),
    buttonBack: _objectSpread2({}, buttonBase, {
      color: options.primaryColor,
      marginLeft: 'auto',
      marginRight: 5
    }),
    buttonClose: _objectSpread2({}, buttonBase, {
      color: options.textColor,
      height: 14,
      padding: 15,
      position: 'absolute',
      right: 0,
      top: 0,
      width: 14
    }),
    buttonSkip: _objectSpread2({}, buttonBase, {
      color: options.textColor,
      fontSize: 14
    }),
    overlay: _objectSpread2({}, overlay, {
      backgroundColor: options.overlayColor,
      mixBlendMode: 'hard-light'
    }),
    overlayLegacy: _objectSpread2({}, overlay),
    overlayLegacyCenter: _objectSpread2({}, overlay, {
      backgroundColor: options.overlayColor
    }),
    spotlight: _objectSpread2({}, spotlight, {
      backgroundColor: 'gray'
    }),
    spotlightLegacy: _objectSpread2({}, spotlight, {
      boxShadow: "0 0 0 9999px ".concat(options.overlayColor, ", ").concat(options.spotlightShadow)
    }),
    floaterStyles: {
      arrow: {
        color: options.arrowColor
      },
      options: {
        zIndex: options.zIndex
      }
    },
    options: options
  };
  return deepmerge__WEBPACK_IMPORTED_MODULE_9___default()(defaultStyles, stepStyles);
}

var DEFAULTS = {
  floaterProps: {
    options: {
      preventOverflow: {
        boundariesElement: 'scrollParent'
      }
    },
    wrapperOptions: {
      offset: -18,
      position: true
    }
  },
  locale: {
    back: 'Back',
    close: 'Close',
    last: 'Last',
    next: 'Next',
    open: 'Open the dialog',
    skip: 'Skip'
  },
  step: {
    event: 'click',
    placement: 'bottom',
    offset: 10
  }
};

function getTourProps(props) {
  var sharedTourProps = ['beaconComponent', 'disableCloseOnEsc', 'disableOverlay', 'disableOverlayClose', 'disableScrolling', 'disableScrollParentFix', 'floaterProps', 'hideBackButton', 'locale', 'showProgress', 'showSkipButton', 'spotlightClicks', 'spotlightPadding', 'styles', 'tooltipComponent'];
  return Object.keys(props).filter(function (d) {
    return sharedTourProps.indexOf(d) !== -1;
  }).reduce(function (acc, i) {
    acc[i] = props[i]; //eslint-disable-line react/destructuring-assignment

    return acc;
  }, {});
}

function getMergedStep(step, props) {
  if (!step) return null;
  var mergedStep = deepmerge__WEBPACK_IMPORTED_MODULE_9___default.a.all([getTourProps(props), DEFAULTS.step, step], {
    isMergeableObject: is_lite__WEBPACK_IMPORTED_MODULE_3___default.a.plainObject
  });
  var mergedStyles = getStyles(deepmerge__WEBPACK_IMPORTED_MODULE_9___default()(props.styles || {}, step.styles || {}));
  var scrollParent = hasCustomScrollParent(getElement(step.target), mergedStep.disableScrollParentFix);
  var floaterProps = deepmerge__WEBPACK_IMPORTED_MODULE_9___default.a.all([props.floaterProps || {}, DEFAULTS.floaterProps, mergedStep.floaterProps || {}]); // Set react-floater props

  floaterProps.offset = mergedStep.offset;
  floaterProps.styles = deepmerge__WEBPACK_IMPORTED_MODULE_9___default()(floaterProps.styles || {}, mergedStyles.floaterStyles || {});
  delete mergedStyles.floaterStyles;
  floaterProps.offset += props.spotlightPadding || step.spotlightPadding;

  if (step.placementBeacon) {
    floaterProps.wrapperOptions.placement = step.placementBeacon;
  }

  if (scrollParent) {
    floaterProps.options.preventOverflow.boundariesElement = 'window';
  }

  return _objectSpread2({}, mergedStep, {
    locale: deepmerge__WEBPACK_IMPORTED_MODULE_9___default.a.all([DEFAULTS.locale, props.locale || {}, mergedStep.locale || {}]),
    floaterProps: floaterProps,
    styles: mergedStyles
  });
}
/**
 * Validate if a step is valid
 *
 * @param {Object} step - A step object
 * @param {boolean} debug
 *
 * @returns {boolean} - True if the step is valid, false otherwise
 */

function validateStep(step) {
  var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!is_lite__WEBPACK_IMPORTED_MODULE_3___default.a.plainObject(step)) {
    log({
      title: 'validateStep',
      data: 'step must be an object',
      warn: true,
      debug: debug
    });
    return false;
  }

  if (!step.target) {
    log({
      title: 'validateStep',
      data: 'target is missing from the step',
      warn: true,
      debug: debug
    });
    return false;
  }

  return true;
}
/**
 * Validate if steps is valid
 *
 * @param {Array} steps - A steps array
 * @param {boolean} debug
 *
 * @returns {boolean} - True if the steps are valid, false otherwise
 */

function validateSteps(steps) {
  var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!is_lite__WEBPACK_IMPORTED_MODULE_3___default.a.array(steps)) {
    log({
      title: 'validateSteps',
      data: 'steps must be an array',
      warn: true,
      debug: debug
    });
    return false;
  }

  return steps.every(function (d) {
    return validateStep(d, debug);
  });
}

var Scope = function Scope(_element) {
  var _this = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _classCallCheck(this, Scope);

  _defineProperty(this, "element", void 0);

  _defineProperty(this, "options", void 0);

  _defineProperty(this, "canBeTabbed", function (element) {
    var tabIndex = element.tabIndex;
    if (tabIndex === null || tabIndex < 0) tabIndex = undefined;
    var isTabIndexNaN = isNaN(tabIndex);
    return !isTabIndexNaN && _this.canHaveFocus(element, true);
  });

  _defineProperty(this, "canHaveFocus", function (element, isTabIndexNotNaN) {
    var validTabNodes = /input|select|textarea|button|object/;
    var nodeName = element.nodeName.toLowerCase();
    var res = validTabNodes.test(nodeName) && !element.getAttribute('disabled') || (nodeName === 'a' ? element.getAttribute('href') || isTabIndexNotNaN : isTabIndexNotNaN);
    return res && _this.isVisible(element);
  });

  _defineProperty(this, "findValidTabElements", function () {
    return [].slice.call(_this.element.querySelectorAll('*'), 0).filter(_this.canBeTabbed);
  });

  _defineProperty(this, "handleKeyDown", function (e) {
    var _this$options$keyCode = _this.options.keyCode,
        keyCode = _this$options$keyCode === void 0 ? 9 : _this$options$keyCode;
    /* istanbul ignore else */

    if (e.keyCode === keyCode) {
      _this.interceptTab(e);
    }
  });

  _defineProperty(this, "interceptTab", function (event) {
    event.preventDefault();

    var elements = _this.findValidTabElements();

    var shiftKey = event.shiftKey;

    if (!elements.length) {
      return;
    }

    var x = elements.indexOf(document.activeElement);

    if (x === -1 || !shiftKey && x + 1 === elements.length) {
      x = 0;
    } else if (shiftKey && x === 0) {
      x = elements.length - 1;
    } else {
      x += shiftKey ? -1 : 1;
    }

    elements[x].focus();
  });

  _defineProperty(this, "isHidden", function (element) {
    var noSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;
    var style = window.getComputedStyle(element);
    if (noSize && !element.innerHTML) return true;
    return noSize && style.getPropertyValue('overflow') !== 'visible' || style.getPropertyValue('display') === 'none';
  });

  _defineProperty(this, "isVisible", function (element) {
    var parentElement = element;

    while (parentElement) {
      /* istanbul ignore else */
      if (parentElement instanceof HTMLElement) {
        if (parentElement === document.body) break;
        /* istanbul ignore else */

        if (_this.isHidden(parentElement)) return false;
        parentElement = parentElement.parentNode;
      }
    }

    return true;
  });

  _defineProperty(this, "removeScope", function () {
    window.removeEventListener('keydown', _this.handleKeyDown);
  });

  _defineProperty(this, "checkFocus", function (target) {
    if (document.activeElement !== target) {
      target.focus();
      window.requestAnimationFrame(function () {
        return _this.checkFocus(target);
      });
    }
  });

  _defineProperty(this, "setFocus", function () {
    var selector = _this.options.selector;
    if (!selector) return;

    var target = _this.element.querySelector(selector);
    /* istanbul ignore else */


    if (target) {
      window.requestAnimationFrame(function () {
        return _this.checkFocus(target);
      });
    }
  });

  if (!(_element instanceof HTMLElement)) {
    throw new TypeError('Invalid parameter: element must be an HTMLElement');
  }

  this.element = _element;
  this.options = options;
  window.addEventListener('keydown', this.handleKeyDown, false);
  this.setFocus();
};

var JoyrideBeacon =
/*#__PURE__*/
function (_React$Component) {
  _inherits(JoyrideBeacon, _React$Component);

  function JoyrideBeacon(props) {
    var _this;

    _classCallCheck(this, JoyrideBeacon);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JoyrideBeacon).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "setBeaconRef", function (c) {
      _this.beacon = c;
    });

    if (!props.beaconComponent) {
      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      var css = "\n        @keyframes joyride-beacon-inner {\n          20% {\n            opacity: 0.9;\n          }\n        \n          90% {\n            opacity: 0.7;\n          }\n        }\n        \n        @keyframes joyride-beacon-outer {\n          0% {\n            transform: scale(1);\n          }\n        \n          45% {\n            opacity: 0.7;\n            transform: scale(0.75);\n          }\n        \n          100% {\n            opacity: 0.9;\n            transform: scale(1);\n          }\n        }\n      ";
      style.type = 'text/css';
      style.id = 'joyride-beacon-animation';
      style.appendChild(document.createTextNode(css));
      head.appendChild(style);
    }

    return _this;
  }

  _createClass(JoyrideBeacon, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var shouldFocus = this.props.shouldFocus;

      setTimeout(function () {
        if (is_lite__WEBPACK_IMPORTED_MODULE_3___default.a.domElement(_this2.beacon) && shouldFocus) {
          _this2.beacon.focus();
        }
      }, 0);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var style = document.getElementById('joyride-beacon-animation');

      if (style) {
        style.parentNode.removeChild(style);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          beaconComponent = _this$props.beaconComponent,
          locale = _this$props.locale,
          onClickOrHover = _this$props.onClickOrHover,
          styles = _this$props.styles;
      var props = {
        'aria-label': locale.open,
        onClick: onClickOrHover,
        onMouseEnter: onClickOrHover,
        ref: this.setBeaconRef,
        title: locale.open
      };
      var component;

      if (beaconComponent) {
        var BeaconComponent = beaconComponent;
        component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BeaconComponent, props);
      } else {
        component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", _extends({
          key: "JoyrideBeacon",
          className: "react-joyride__beacon",
          style: styles.beacon,
          type: "button"
        }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          style: styles.beaconInner
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          style: styles.beaconOuter
        }));
      }

      return component;
    }
  }]);

  return JoyrideBeacon;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var JoyrideSpotlight = function JoyrideSpotlight(_ref) {
  var styles = _ref.styles;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: "JoyrideSpotlight",
    className: "react-joyride__spotlight",
    style: styles
  });
};

var JoyrideOverlay =
/*#__PURE__*/
function (_React$Component) {
  _inherits(JoyrideOverlay, _React$Component);

  function JoyrideOverlay() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, JoyrideOverlay);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(JoyrideOverlay)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "_isMounted", false);

    _defineProperty(_assertThisInitialized(_this), "state", {
      mouseOverSpotlight: false,
      isScrolling: false,
      showSpotlight: true
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseMove", function (e) {
      var mouseOverSpotlight = _this.state.mouseOverSpotlight;
      var _this$spotlightStyles = _this.spotlightStyles,
          height = _this$spotlightStyles.height,
          left = _this$spotlightStyles.left,
          position = _this$spotlightStyles.position,
          top = _this$spotlightStyles.top,
          width = _this$spotlightStyles.width;
      var offsetY = position === 'fixed' ? e.clientY : e.pageY;
      var offsetX = position === 'fixed' ? e.clientX : e.pageX;
      var inSpotlightHeight = offsetY >= top && offsetY <= top + height;
      var inSpotlightWidth = offsetX >= left && offsetX <= left + width;
      var inSpotlight = inSpotlightWidth && inSpotlightHeight;

      if (inSpotlight !== mouseOverSpotlight) {
        _this.updateState({
          mouseOverSpotlight: inSpotlight
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function () {
      var target = _this.props.target;
      var element = getElement(target);

      if (_this.scrollParent !== document) {
        var isScrolling = _this.state.isScrolling;

        if (!isScrolling) {
          _this.updateState({
            isScrolling: true,
            showSpotlight: false
          });
        }

        clearTimeout(_this.scrollTimeout);
        _this.scrollTimeout = setTimeout(function () {
          _this.updateState({
            isScrolling: false,
            showSpotlight: true
          });
        }, 50);
      } else if (hasPosition(element, 'sticky')) {
        _this.updateState({});
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleResize", function () {
      clearTimeout(_this.resizeTimeout);
      _this.resizeTimeout = setTimeout(function () {
        if (!_this._isMounted) {
          return;
        }

        _this.forceUpdate();
      }, 100);
    });

    return _this;
  }

  _createClass(JoyrideOverlay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          debug = _this$props.debug,
          disableScrolling = _this$props.disableScrolling,
          disableScrollParentFix = _this$props.disableScrollParentFix,
          target = _this$props.target;
      var element = getElement(target);
      this.scrollParent = getScrollParent(element, disableScrollParentFix, true);
      this._isMounted = true;

      window.addEventListener('resize', this.handleResize);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      var _this$props2 = this.props,
          lifecycle = _this$props2.lifecycle,
          spotlightClicks = _this$props2.spotlightClicks;

      var _treeChanges = tree_changes__WEBPACK_IMPORTED_MODULE_2___default()(prevProps, this.props),
          changed = _treeChanges.changed,
          changedTo = _treeChanges.changedTo;
      /* istanbul ignore else */


      if (changedTo('lifecycle', LIFECYCLE.TOOLTIP)) {
        this.scrollParent.addEventListener('scroll', this.handleScroll, {
          passive: true
        });
        setTimeout(function () {
          var isScrolling = _this2.state.isScrolling;

          if (!isScrolling) {
            _this2.updateState({
              showSpotlight: true
            });
          }
        }, 100);
      }

      if (changed('spotlightClicks') || changed('disableOverlay') || changed('lifecycle')) {
        if (spotlightClicks && lifecycle === LIFECYCLE.TOOLTIP) {
          window.addEventListener('mousemove', this.handleMouseMove, false);
        } else if (lifecycle !== LIFECYCLE.TOOLTIP) {
          window.removeEventListener('mousemove', this.handleMouseMove);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
      window.removeEventListener('mousemove', this.handleMouseMove);
      window.removeEventListener('resize', this.handleResize);
      clearTimeout(this.resizeTimeout);
      clearTimeout(this.scrollTimeout);
      this.scrollParent.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "updateState",
    value: function updateState(state) {
      if (!this._isMounted) {
        return;
      }

      this.setState(state);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          mouseOverSpotlight = _this$state.mouseOverSpotlight,
          showSpotlight = _this$state.showSpotlight;
      var _this$props3 = this.props,
          disableOverlay = _this$props3.disableOverlay,
          lifecycle = _this$props3.lifecycle,
          onClickOverlay = _this$props3.onClickOverlay,
          placement = _this$props3.placement,
          styles = _this$props3.styles;

      if (disableOverlay || lifecycle !== LIFECYCLE.TOOLTIP) {
        return null;
      }

      var baseStyles = styles.overlay;
      /* istanbul ignore else */

      if (isLegacy()) {
        baseStyles = placement === 'center' ? styles.overlayLegacyCenter : styles.overlayLegacy;
      }

      var stylesOverlay = _objectSpread2({
        cursor: 'pointer',
        height: getDocumentHeight(),
        pointerEvents: mouseOverSpotlight ? 'none' : 'auto'
      }, baseStyles);

      var spotlight = placement !== 'center' && showSpotlight && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(JoyrideSpotlight, {
        styles: this.spotlightStyles
      }); // Hack for Safari bug with mix-blend-mode with z-index

      if (getBrowser() === 'safari') {
        var mixBlendMode = stylesOverlay.mixBlendMode,
            zIndex = stylesOverlay.zIndex,
            safarOverlay = _objectWithoutProperties(stylesOverlay, ["mixBlendMode", "zIndex"]);

        spotlight = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: _objectSpread2({}, safarOverlay)
        }, spotlight);
        delete stylesOverlay.backgroundColor;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "react-joyride__overlay",
        style: stylesOverlay,
        onClick: onClickOverlay
      }, spotlight);
    }
  }, {
    key: "spotlightStyles",
    get: function get() {
      var showSpotlight = this.state.showSpotlight;
      var _this$props4 = this.props,
          disableScrollParentFix = _this$props4.disableScrollParentFix,
          spotlightClicks = _this$props4.spotlightClicks,
          spotlightPadding = _this$props4.spotlightPadding,
          styles = _this$props4.styles,
          target = _this$props4.target;
      var element = getElement(target);
      var elementRect = getClientRect(element);
      var isFixedTarget = hasPosition(element);
      var top = getElementPosition(element, spotlightPadding, disableScrollParentFix);
      return _objectSpread2({}, isLegacy() ? styles.spotlightLegacy : styles.spotlight, {
        height: Math.round(elementRect.height + spotlightPadding * 2),
        left: Math.round(elementRect.left - spotlightPadding),
        opacity: showSpotlight ? 1 : 0,
        pointerEvents: spotlightClicks ? 'none' : 'auto',
        position: isFixedTarget ? 'fixed' : 'absolute',
        top: top,
        transition: 'opacity 0.2s',
        width: Math.round(elementRect.width + spotlightPadding * 2)
      });
    }
  }]);

  return JoyrideOverlay;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var JoyrideTooltipCloseBtn = function JoyrideTooltipCloseBtn(_ref) {
  var styles = _ref.styles,
      props = _objectWithoutProperties(_ref, ["styles"]);

  var color = styles.color,
      height = styles.height,
      width = styles.width,
      style = _objectWithoutProperties(styles, ["color", "height", "width"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", _extends({
    style: style,
    type: "button"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: typeof width === 'number' ? "".concat(width, "px") : width,
    height: typeof height === 'number' ? "".concat(height, "px") : height,
    viewBox: "0 0 18 18",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z",
    fill: color
  }))));
};

var JoyrideTooltipContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(JoyrideTooltipContainer, _React$Component);

  function JoyrideTooltipContainer() {
    _classCallCheck(this, JoyrideTooltipContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(JoyrideTooltipContainer).apply(this, arguments));
  }

  _createClass(JoyrideTooltipContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          backProps = _this$props.backProps,
          closeProps = _this$props.closeProps,
          continuous = _this$props.continuous,
          index = _this$props.index,
          isLastStep = _this$props.isLastStep,
          primaryProps = _this$props.primaryProps,
          size = _this$props.size,
          skipProps = _this$props.skipProps,
          step = _this$props.step,
          tooltipProps = _this$props.tooltipProps;
      var content = step.content,
          hideBackButton = step.hideBackButton,
          hideCloseButton = step.hideCloseButton,
          hideFooter = step.hideFooter,
          showProgress = step.showProgress,
          showSkipButton = step.showSkipButton,
          title = step.title,
          styles = step.styles;
      var _step$locale = step.locale,
          back = _step$locale.back,
          close = _step$locale.close,
          last = _step$locale.last,
          next = _step$locale.next,
          skip = _step$locale.skip;
      var output = {
        primary: close
      };

      if (continuous) {
        output.primary = isLastStep ? last : next;

        if (showProgress) {
          output.primary = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, output.primary, " (", index + 1, "/", size, ")");
        }
      }

      if (showSkipButton && !isLastStep) {
        output.skip = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", _extends({
          style: styles.buttonSkip,
          type: "button",
          "aria-live": "off"
        }, skipProps), skip);
      }

      if (!hideBackButton && index > 0) {
        output.back = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", _extends({
          style: styles.buttonBack,
          type: "button"
        }, backProps), back);
      }

      output.close = !hideCloseButton && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(JoyrideTooltipCloseBtn, _extends({
        styles: styles.buttonClose
      }, closeProps));
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
        key: "JoyrideTooltip",
        className: "react-joyride__tooltip",
        style: styles.tooltip
      }, tooltipProps), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.tooltipContainer
      }, title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        style: styles.tooltipTitle,
        "aria-label": title
      }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.tooltipContent
      }, content)), !hideFooter && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.tooltipFooter
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.tooltipFooterSpacer
      }, output.skip), output.back, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", _extends({
        style: styles.buttonNext,
        type: "button"
      }, primaryProps), output.primary)), output.close);
    }
  }]);

  return JoyrideTooltipContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var JoyrideTooltip =
/*#__PURE__*/
function (_React$Component) {
  _inherits(JoyrideTooltip, _React$Component);

  function JoyrideTooltip() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, JoyrideTooltip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(JoyrideTooltip)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClickBack", function (e) {
      e.preventDefault();
      var helpers = _this.props.helpers;
      helpers.prev();
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickClose", function (e) {
      e.preventDefault();
      var helpers = _this.props.helpers;
      helpers.close();
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickPrimary", function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          continuous = _this$props.continuous,
          helpers = _this$props.helpers;

      if (!continuous) {
        helpers.close();
        return;
      }

      helpers.next();
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickSkip", function (e) {
      e.preventDefault();
      var helpers = _this.props.helpers;
      helpers.skip();
    });

    _defineProperty(_assertThisInitialized(_this), "getElementsProps", function () {
      var _this$props2 = _this.props,
          continuous = _this$props2.continuous,
          isLastStep = _this$props2.isLastStep,
          setTooltipRef = _this$props2.setTooltipRef,
          step = _this$props2.step;
      var back = getText(step.locale.back);
      var close = getText(step.locale.close);
      var last = getText(step.locale.last);
      var next = getText(step.locale.next);
      var skip = getText(step.locale.skip);
      var primaryText = continuous ? next : close;

      if (isLastStep) {
        primaryText = last;
      }

      return {
        backProps: {
          'aria-label': back,
          'data-action': 'back',
          onClick: _this.handleClickBack,
          role: 'button',
          title: back
        },
        closeProps: {
          'aria-label': close,
          'data-action': 'close',
          onClick: _this.handleClickClose,
          role: 'button',
          title: close
        },
        primaryProps: {
          'aria-label': primaryText,
          'data-action': 'primary',
          onClick: _this.handleClickPrimary,
          role: 'button',
          title: primaryText
        },
        skipProps: {
          'aria-label': skip,
          'data-action': 'skip',
          onClick: _this.handleClickSkip,
          role: 'button',
          title: skip
        },
        tooltipProps: {
          'aria-modal': true,
          ref: setTooltipRef,
          role: 'alertdialog'
        }
      };
    });

    return _this;
  }

  _createClass(JoyrideTooltip, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          continuous = _this$props3.continuous,
          index = _this$props3.index,
          isLastStep = _this$props3.isLastStep,
          size = _this$props3.size,
          step = _this$props3.step;

      var beaconComponent = step.beaconComponent,
          tooltipComponent = step.tooltipComponent,
          cleanStep = _objectWithoutProperties(step, ["beaconComponent", "tooltipComponent"]);

      var component;

      if (tooltipComponent) {
        var renderProps = _objectSpread2({}, this.getElementsProps(), {
          continuous: continuous,
          index: index,
          isLastStep: isLastStep,
          size: size,
          step: cleanStep
        });

        var TooltipComponent = tooltipComponent;
        component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TooltipComponent, renderProps);
      } else {
        component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(JoyrideTooltipContainer, _extends({}, this.getElementsProps(), {
          continuous: continuous,
          index: index,
          isLastStep: isLastStep,
          size: size,
          step: step
        }));
      }

      return component;
    }
  }]);

  return JoyrideTooltip;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var JoyridePortal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(JoyridePortal, _React$Component);

  function JoyridePortal(props) {
    var _this;

    _classCallCheck(this, JoyridePortal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JoyridePortal).call(this, props));
    if (!canUseDOM) return _possibleConstructorReturn(_this);
    _this.node = document.createElement('div');
    /* istanbul ignore else */

    if (props.id) {
      _this.node.id = props.id;
    }

    document.body.appendChild(_this.node);
    return _this;
  }

  _createClass(JoyridePortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!canUseDOM) return;

      if (!isReact16) {
        this.renderReact15();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!canUseDOM) return;

      if (!isReact16) {
        this.renderReact15();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!canUseDOM || !this.node) return;

      if (!isReact16) {
        react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.unmountComponentAtNode(this.node);
      }

      document.body.removeChild(this.node);
    }
  }, {
    key: "renderReact15",
    value: function renderReact15() {
      if (!canUseDOM) return null;
      var children = this.props.children;
      react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.unstable_renderSubtreeIntoContainer(this, children, this.node);
      return null;
    }
  }, {
    key: "renderReact16",
    value: function renderReact16() {
      if (!canUseDOM || !isReact16) return null;
      var children = this.props.children;
      return react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.createPortal(children, this.node);
    }
  }, {
    key: "render",
    value: function render() {
      if (!isReact16) {
        return null;
      }

      return this.renderReact16();
    }
  }]);

  return JoyridePortal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var JoyrideStep =
/*#__PURE__*/
function (_React$Component) {
  _inherits(JoyrideStep, _React$Component);

  function JoyrideStep() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, JoyrideStep);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(JoyrideStep)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "scope", {
      removeScope: function removeScope() {}
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickHoverBeacon", function (e) {
      var _this$props = _this.props,
          step = _this$props.step,
          update = _this$props.update;

      if (e.type === 'mouseenter' && step.event !== 'hover') {
        return;
      }

      update({
        lifecycle: LIFECYCLE.TOOLTIP
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOverlay", function () {
      var _this$props2 = _this.props,
          helpers = _this$props2.helpers,
          step = _this$props2.step;

      if (!step.disableOverlayClose) {
        helpers.close();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setTooltipRef", function (c) {
      _this.tooltip = c;
    });

    _defineProperty(_assertThisInitialized(_this), "setPopper", function (popper, type) {
      var _this$props3 = _this.props,
          action = _this$props3.action,
          setPopper = _this$props3.setPopper,
          update = _this$props3.update;

      if (type === 'wrapper') {
        _this.beaconPopper = popper;
      } else {
        _this.tooltipPopper = popper;
      }

      setPopper(popper, type);

      if (_this.beaconPopper && _this.tooltipPopper) {
        update({
          action: action === ACTIONS.CLOSE ? ACTIONS.CLOSE : action,
          lifecycle: LIFECYCLE.READY
        });
      }
    });

    return _this;
  }

  _createClass(JoyrideStep, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props4 = this.props,
          debug = _this$props4.debug,
          index = _this$props4.index;
      log({
        title: "step:".concat(index),
        data: [{
          key: 'props',
          value: this.props
        }],
        debug: debug
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props5 = this.props,
          action = _this$props5.action,
          callback = _this$props5.callback,
          continuous = _this$props5.continuous,
          controlled = _this$props5.controlled,
          debug = _this$props5.debug,
          index = _this$props5.index,
          lifecycle = _this$props5.lifecycle,
          size = _this$props5.size,
          status = _this$props5.status,
          step = _this$props5.step,
          update = _this$props5.update;

      var _treeChanges = tree_changes__WEBPACK_IMPORTED_MODULE_2___default()(prevProps, this.props),
          changed = _treeChanges.changed,
          changedTo = _treeChanges.changedTo,
          changedFrom = _treeChanges.changedFrom;

      var state = {
        action: action,
        controlled: controlled,
        index: index,
        lifecycle: lifecycle,
        size: size,
        status: status
      };
      var skipBeacon = continuous && action !== ACTIONS.CLOSE && (index > 0 || action === ACTIONS.PREV);
      var hasStoreChanged = changed('action') || changed('index') || changed('lifecycle') || changed('status');
      var hasStarted = changedFrom('lifecycle', [LIFECYCLE.TOOLTIP, LIFECYCLE.INIT], LIFECYCLE.INIT);
      var isAfterAction = changedTo('action', [ACTIONS.NEXT, ACTIONS.PREV, ACTIONS.SKIP, ACTIONS.CLOSE]);

      if (isAfterAction && (hasStarted || controlled)) {
        callback(_objectSpread2({}, state, {
          index: prevProps.index,
          lifecycle: LIFECYCLE.COMPLETE,
          step: prevProps.step,
          type: EVENTS.STEP_AFTER
        }));
      } // There's a step to use, but there's no target in the DOM


      if (hasStoreChanged && step) {
        var element = getElement(step.target);
        var elementExists = !!element;
        var hasRenderedTarget = elementExists && isElementVisible(element);

        if (hasRenderedTarget) {
          if (changedFrom('status', STATUS.READY, STATUS.RUNNING) || changedFrom('lifecycle', LIFECYCLE.INIT, LIFECYCLE.READY)) {
            callback(_objectSpread2({}, state, {
              step: step,
              type: EVENTS.STEP_BEFORE
            }));
          }
        } else {
          console.warn(elementExists ? 'Target not visible' : 'Target not mounted', step); //eslint-disable-line no-console

          callback(_objectSpread2({}, state, {
            type: EVENTS.TARGET_NOT_FOUND,
            step: step
          }));

          if (!controlled) {
            update({
              index: index + ([ACTIONS.PREV].indexOf(action) !== -1 ? -1 : 1)
            });
          }
        }
      }

      if (changedFrom('lifecycle', LIFECYCLE.INIT, LIFECYCLE.READY)) {
        update({
          lifecycle: hideBeacon(step) || skipBeacon ? LIFECYCLE.TOOLTIP : LIFECYCLE.BEACON
        });
      }

      if (changed('index')) {
        log({
          title: "step:".concat(lifecycle),
          data: [{
            key: 'props',
            value: this.props
          }],
          debug: debug
        });
      }
      /* istanbul ignore else */


      if (changedTo('lifecycle', LIFECYCLE.BEACON)) {
        callback(_objectSpread2({}, state, {
          step: step,
          type: EVENTS.BEACON
        }));
      }

      if (changedTo('lifecycle', LIFECYCLE.TOOLTIP)) {
        callback(_objectSpread2({}, state, {
          step: step,
          type: EVENTS.TOOLTIP
        }));
        this.scope = new Scope(this.tooltip, {
          selector: '[data-action=primary]'
        });
        this.scope.setFocus();
      }

      if (changedFrom('lifecycle', [LIFECYCLE.TOOLTIP, LIFECYCLE.INIT], LIFECYCLE.INIT)) {
        this.scope.removeScope();
        delete this.beaconPopper;
        delete this.tooltipPopper;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.scope.removeScope();
    }
    /**
     * Beacon click/hover event listener
     *
     * @param {Event} e
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          continuous = _this$props6.continuous,
          debug = _this$props6.debug,
          helpers = _this$props6.helpers,
          index = _this$props6.index,
          lifecycle = _this$props6.lifecycle,
          shouldScroll = _this$props6.shouldScroll,
          size = _this$props6.size,
          step = _this$props6.step;
      var target = getElement(step.target);

      if (!validateStep(step) || !is_lite__WEBPACK_IMPORTED_MODULE_3___default.a.domElement(target)) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: "JoyrideStep-".concat(index),
        className: "react-joyride__step"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(JoyridePortal, {
        id: "react-joyride-portal"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(JoyrideOverlay, _extends({}, step, {
        debug: debug,
        lifecycle: lifecycle,
        onClickOverlay: this.handleClickOverlay
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_floater__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({
        component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(JoyrideTooltip, {
          continuous: continuous,
          helpers: helpers,
          index: index,
          isLastStep: index + 1 === size,
          setTooltipRef: this.setTooltipRef,
          size: size,
          step: step
        }),
        debug: debug,
        getPopper: this.setPopper,
        id: "react-joyride-step-".concat(index),
        isPositioned: step.isFixed || hasPosition(target),
        open: this.open,
        placement: step.placement,
        target: step.target
      }, step.floaterProps), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(JoyrideBeacon, {
        beaconComponent: step.beaconComponent,
        locale: step.locale,
        onClickOrHover: this.handleClickHoverBeacon,
        shouldFocus: shouldScroll,
        styles: step.styles
      })));
    }
  }, {
    key: "open",
    get: function get() {
      var _this$props7 = this.props,
          step = _this$props7.step,
          lifecycle = _this$props7.lifecycle;
      return !!(hideBeacon(step) || lifecycle === LIFECYCLE.TOOLTIP);
    }
  }]);

  return JoyrideStep;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Joyride =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Joyride, _React$Component);

  function Joyride(props) {
    var _this;

    _classCallCheck(this, Joyride);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Joyride).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "initStore", function () {
      var _this$props = _this.props,
          debug = _this$props.debug,
          getHelpers = _this$props.getHelpers,
          run = _this$props.run,
          stepIndex = _this$props.stepIndex;
      _this.store = new createStore(_objectSpread2({}, _this.props, {
        controlled: run && is_lite__WEBPACK_IMPORTED_MODULE_3___default.a.number(stepIndex)
      }));
      _this.helpers = _this.store.getHelpers();
      var addListener = _this.store.addListener;
      log({
        title: 'init',
        data: [{
          key: 'props',
          value: _this.props
        }, {
          key: 'state',
          value: _this.state
        }],
        debug: debug
      }); // Sync the store to this component's state.

      addListener(_this.syncState);
      getHelpers(_this.helpers);
      return _this.store.getState();
    });

    _defineProperty(_assertThisInitialized(_this), "callback", function (data) {
      var callback = _this.props.callback;
      /* istanbul ignore else */

      if (is_lite__WEBPACK_IMPORTED_MODULE_3___default.a["function"](callback)) {
        callback(data);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyboard", function (e) {
      var _this$state = _this.state,
          index = _this$state.index,
          lifecycle = _this$state.lifecycle;
      var steps = _this.props.steps;
      var step = steps[index];
      var intKey = window.Event ? e.which : e.keyCode;

      if (lifecycle === LIFECYCLE.TOOLTIP) {
        if (intKey === 27 && step && !step.disableCloseOnEsc) {
          _this.store.close();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "syncState", function (state) {
      _this.setState(state);
    });

    _defineProperty(_assertThisInitialized(_this), "setPopper", function (popper, type) {
      if (type === 'wrapper') {
        _this.beaconPopper = popper;
      } else {
        _this.tooltipPopper = popper;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "shouldScroll", function (disableScrolling, index, scrollToFirstStep, lifecycle, step, target, prevState) {
      return !disableScrolling && (index !== 0 || scrollToFirstStep || lifecycle === LIFECYCLE.TOOLTIP) && step.placement !== 'center' && (!step.isFixed || !hasPosition(target)) && // fixed steps don't need to scroll
      prevState.lifecycle !== lifecycle && [LIFECYCLE.BEACON, LIFECYCLE.TOOLTIP].indexOf(lifecycle) !== -1;
    });

    _this.state = _this.initStore();
    return _this;
  }

  _createClass(Joyride, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!canUseDOM) return;
      var _this$props2 = this.props,
          disableCloseOnEsc = _this$props2.disableCloseOnEsc,
          debug = _this$props2.debug,
          run = _this$props2.run,
          steps = _this$props2.steps;
      var start = this.store.start;

      if (validateSteps(steps, debug) && run) {
        start();
      }
      /* istanbul ignore else */


      if (!disableCloseOnEsc) {
        document.body.addEventListener('keydown', this.handleKeyboard, {
          passive: true
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (!canUseDOM) return;
      var _this$state2 = this.state,
          action = _this$state2.action,
          controlled = _this$state2.controlled,
          index = _this$state2.index,
          lifecycle = _this$state2.lifecycle,
          status = _this$state2.status;
      var _this$props3 = this.props,
          debug = _this$props3.debug,
          run = _this$props3.run,
          stepIndex = _this$props3.stepIndex,
          steps = _this$props3.steps;
      var prevSteps = prevProps.steps,
          prevStepIndex = prevProps.stepIndex;
      var _this$store = this.store,
          setSteps = _this$store.setSteps,
          reset = _this$store.reset,
          start = _this$store.start,
          stop = _this$store.stop,
          update = _this$store.update;

      var _treeChanges = tree_changes__WEBPACK_IMPORTED_MODULE_2___default()(prevProps, this.props),
          changedProps = _treeChanges.changed;

      var _treeChanges2 = tree_changes__WEBPACK_IMPORTED_MODULE_2___default()(prevState, this.state),
          changed = _treeChanges2.changed,
          changedFrom = _treeChanges2.changedFrom,
          changedTo = _treeChanges2.changedTo;

      var step = getMergedStep(steps[index], this.props);
      var stepsChanged = !isEqual(prevSteps, steps);
      var stepIndexChanged = is_lite__WEBPACK_IMPORTED_MODULE_3___default.a.number(stepIndex) && changedProps('stepIndex');

      if (stepsChanged) {
        if (validateSteps(steps, debug)) {
          setSteps(steps);
        } else {
          console.warn('Steps are not valid', steps); //eslint-disable-line no-console
        }
      }
      /* istanbul ignore else */


      if (changedProps('run')) {
        if (run) {
          start(stepIndex);
        } else {
          stop();
        }
      }
      /* istanbul ignore else */


      if (stepIndexChanged) {
        var nextAction = prevStepIndex < stepIndex ? ACTIONS.NEXT : ACTIONS.PREV;

        if (action === ACTIONS.STOP) {
          nextAction = ACTIONS.START;
        }

        if (!([STATUS.FINISHED, STATUS.SKIPPED].indexOf(status) !== -1)) {
          update({
            action: action === ACTIONS.CLOSE ? ACTIONS.CLOSE : nextAction,
            index: stepIndex,
            lifecycle: LIFECYCLE.INIT
          });
        }
      }

      var callbackData = _objectSpread2({}, this.state, {
        index: index,
        step: step
      });

      var isAfterAction = changedTo('action', [ACTIONS.NEXT, ACTIONS.PREV, ACTIONS.SKIP, ACTIONS.CLOSE]);

      if (isAfterAction && changedTo('status', STATUS.PAUSED)) {
        var prevStep = getMergedStep(steps[prevState.index], this.props);
        this.callback(_objectSpread2({}, callbackData, {
          index: prevState.index,
          lifecycle: LIFECYCLE.COMPLETE,
          step: prevStep,
          type: EVENTS.STEP_AFTER
        }));
      }

      if (changedTo('status', [STATUS.FINISHED, STATUS.SKIPPED])) {
        var _prevStep = getMergedStep(steps[prevState.index], this.props);

        if (!controlled) {
          this.callback(_objectSpread2({}, callbackData, {
            index: prevState.index,
            lifecycle: LIFECYCLE.COMPLETE,
            step: _prevStep,
            type: EVENTS.STEP_AFTER
          }));
        }

        this.callback(_objectSpread2({}, callbackData, {
          type: EVENTS.TOUR_END,
          // Return the last step when the tour is finished
          step: _prevStep,
          index: prevState.index
        }));
        reset();
      } else if (changedFrom('status', [STATUS.IDLE, STATUS.READY], STATUS.RUNNING)) {
        this.callback(_objectSpread2({}, callbackData, {
          type: EVENTS.TOUR_START
        }));
      } else if (changed('status')) {
        this.callback(_objectSpread2({}, callbackData, {
          type: EVENTS.TOUR_STATUS
        }));
      } else if (changedTo('action', ACTIONS.RESET)) {
        this.callback(_objectSpread2({}, callbackData, {
          type: EVENTS.TOUR_STATUS
        }));
      }

      if (step) {
        this.scrollToStep(prevState);

        if (step.placement === 'center' && status === STATUS.RUNNING && lifecycle === LIFECYCLE.INIT) {
          this.store.update({
            lifecycle: LIFECYCLE.READY
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var disableCloseOnEsc = this.props.disableCloseOnEsc;
      /* istanbul ignore else */

      if (!disableCloseOnEsc) {
        document.body.removeEventListener('keydown', this.handleKeyboard);
      }
    }
  }, {
    key: "scrollToStep",
    value: function scrollToStep(prevState) {
      var _this$state3 = this.state,
          index = _this$state3.index,
          lifecycle = _this$state3.lifecycle,
          status = _this$state3.status;
      var _this$props4 = this.props,
          debug = _this$props4.debug,
          disableScrolling = _this$props4.disableScrolling,
          disableScrollParentFix = _this$props4.disableScrollParentFix,
          scrollToFirstStep = _this$props4.scrollToFirstStep,
          scrollOffset = _this$props4.scrollOffset,
          scrollDuration = _this$props4.scrollDuration,
          steps = _this$props4.steps;
      var step = getMergedStep(steps[index], this.props);
      /* istanbul ignore else */

      if (step) {
        var target = getElement(step.target);
        var shouldScroll = this.shouldScroll(disableScrolling, index, scrollToFirstStep, lifecycle, step, target, prevState);

        if (status === STATUS.RUNNING && shouldScroll) {
          var hasCustomScroll = hasCustomScrollParent(target, disableScrollParentFix);
          var scrollParent = getScrollParent(target, disableScrollParentFix);
          var scrollY = Math.floor(getScrollTo(target, scrollOffset, disableScrollParentFix)) || 0;
          log({
            title: 'scrollToStep',
            data: [{
              key: 'index',
              value: index
            }, {
              key: 'lifecycle',
              value: lifecycle
            }, {
              key: 'status',
              value: status
            }],
            debug: debug
          });
          /* istanbul ignore else */

          if (lifecycle === LIFECYCLE.BEACON && this.beaconPopper) {
            var _this$beaconPopper = this.beaconPopper,
                placement = _this$beaconPopper.placement,
                popper = _this$beaconPopper.popper;
            /* istanbul ignore else */

            if (!(['bottom'].indexOf(placement) !== -1) && !hasCustomScroll) {
              scrollY = Math.floor(popper.top - scrollOffset);
            }
          } else if (lifecycle === LIFECYCLE.TOOLTIP && this.tooltipPopper) {
            var _this$tooltipPopper = this.tooltipPopper,
                flipped = _this$tooltipPopper.flipped,
                _placement = _this$tooltipPopper.placement,
                _popper = _this$tooltipPopper.popper;

            if (['top', 'right', 'left'].indexOf(_placement) !== -1 && !flipped && !hasCustomScroll) {
              scrollY = Math.floor(_popper.top - scrollOffset);
            } else {
              scrollY -= step.spotlightPadding;
            }
          }

          scrollY = scrollY >= 0 ? scrollY : 0;
          /* istanbul ignore else */

          if (status === STATUS.RUNNING) {
            scrollTo(scrollY, scrollParent, scrollDuration);
          }
        }
      }
    }
    /**
     * Trigger the callback.
     *
     * @private
     * @param {Object} data
     */

  }, {
    key: "render",
    value: function render() {
      if (!canUseDOM) return null;
      var _this$state4 = this.state,
          index = _this$state4.index,
          status = _this$state4.status;
      var _this$props5 = this.props,
          continuous = _this$props5.continuous,
          debug = _this$props5.debug,
          disableScrolling = _this$props5.disableScrolling,
          scrollToFirstStep = _this$props5.scrollToFirstStep,
          steps = _this$props5.steps;
      var step = getMergedStep(steps[index], this.props);
      var output;

      if (status === STATUS.RUNNING && step) {
        output = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(JoyrideStep, _extends({}, this.state, {
          callback: this.callback,
          continuous: continuous,
          debug: debug,
          setPopper: this.setPopper,
          helpers: this.helpers,
          shouldScroll: !disableScrolling && (index !== 0 || scrollToFirstStep),
          step: step,
          update: this.store.update
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "react-joyride"
      }, output);
    }
  }]);

  return Joyride;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Joyride, "defaultProps", {
  continuous: false,
  debug: false,
  disableCloseOnEsc: false,
  disableOverlay: false,
  disableOverlayClose: false,
  disableScrolling: false,
  disableScrollParentFix: false,
  getHelpers: function getHelpers() {},
  hideBackButton: false,
  run: true,
  scrollOffset: 20,
  scrollDuration: 300,
  scrollToFirstStep: false,
  showSkipButton: false,
  showProgress: false,
  spotlightClicks: false,
  spotlightPadding: 10,
  steps: []
});

/* harmony default export */ __webpack_exports__["default"] = (Joyride);



/***/ }),

/***/ "./node_modules/react-joyride/node_modules/deepmerge/dist/cjs.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-joyride/node_modules/deepmerge/dist/cjs.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),

/***/ "./node_modules/react-joyride/node_modules/scroll/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-joyride/node_modules/scroll/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var E_NOSCROLL = new Error('Element already at target scroll position')
var E_CANCELLED = new Error('Scroll cancelled')
var min = Math.min
var ms = Date.now

module.exports = {
  left: make('scrollLeft'),
  top: make('scrollTop')
}

function make (prop) {
  return function scroll (el, to, opts, cb) {
    opts = opts || {}

    if (typeof opts == 'function') cb = opts, opts = {}
    if (typeof cb != 'function') cb = noop

    var start = ms()
    var from = el[prop]
    var ease = opts.ease || inOutSine
    var duration = !isNaN(opts.duration) ? +opts.duration : 350
    var cancelled = false

    return from === to ?
      cb(E_NOSCROLL, el[prop]) :
      requestAnimationFrame(animate), cancel

    function cancel () {
      cancelled = true
    }

    function animate (timestamp) {
      if (cancelled) return cb(E_CANCELLED, el[prop])

      var now = ms()
      var time = min(1, ((now - start) / duration))
      var eased = ease(time)

      el[prop] = (eased * (to - from)) + from

      time < 1 ?
        requestAnimationFrame(animate) :
        requestAnimationFrame(function () {
          cb(null, el[prop])
        })
    }
  }
}

function inOutSine (n) {
  return 0.5 * (1 - Math.cos(Math.PI * n))
}

function noop () {}


/***/ }),

/***/ "./node_modules/react-proptype-conditional-require/dist/isRequiredIf.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-proptype-conditional-require/dist/isRequiredIf.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0});var VALIDATOR_ARG_ERROR_MESSAGE='The typeValidator argument must be a function with the signature function(props, propName, componentName).',MESSAGE_ARG_ERROR_MESSAGE='The error message is optional, but must be a string if provided.',propIsRequired=function propIsRequired(a,b,c,d){if('boolean'==typeof a)return a;return'function'==typeof a?a(b,c,d):!(!0!==!!a)&&!!a},propExists=function propExists(a,b){return Object.hasOwnProperty.call(a,b)},missingPropError=function missingPropError(a,b,c,d){return d?new Error(d):new Error('Required '+a[b]+' `'+b+'`'+(' was not specified in `'+c+'`.'))},guardAgainstInvalidArgTypes=function guardAgainstInvalidArgTypes(a,b){if('function'!=typeof a)throw new TypeError(VALIDATOR_ARG_ERROR_MESSAGE);if(!!b&&'string'!=typeof b)throw new TypeError(MESSAGE_ARG_ERROR_MESSAGE)},isRequiredIf=function isRequiredIf(a,b,c){return guardAgainstInvalidArgTypes(a,c),function(d,e,f){for(var _len=arguments.length,g=Array(3<_len?_len-3:0),_key=3;_key<_len;_key++)g[_key-3]=arguments[_key];return propIsRequired(b,d,e,f)?propExists(d,e)?a.apply(void 0,[d,e,f].concat(g)):missingPropError(d,e,f,c):a.apply(void 0,[d,e,f].concat(g));// Is not required, so just run typeValidator.
}};exports.default=isRequiredIf;

//# sourceMappingURL=isRequiredIf.js.map

/***/ }),

/***/ "./node_modules/reactour/dist/reactour.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/reactour/dist/reactour.esm.js ***!
  \****************************************************/
/*! exports provided: default, Arrow, Badge, Close, Controls, Dot, Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arrow", function() { return Arrow$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return Badge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Close", function() { return StyledClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controls", function() { return Controls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dot", function() { return Dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony import */ var focus_outline_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! focus-outline-manager */ "./node_modules/focus-outline-manager/focus-outline-manager.js");
/* harmony import */ var focus_outline_manager__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(focus_outline_manager__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var scroll_smooth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! scroll-smooth */ "./node_modules/scroll-smooth/dist/index.js");
/* harmony import */ var scroll_smooth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(scroll_smooth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var scrollparent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! scrollparent */ "./node_modules/scrollparent/scrollparent.js");
/* harmony import */ var scrollparent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(scrollparent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_focus_lock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-focus-lock */ "./node_modules/react-focus-lock/dist/es2015/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);











function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .focus-outline-hidden :focus {\n      outline: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["createGlobalStyle"])(_templateObject());

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: 0;\n  cursor: ", ";\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var SvgButton = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].button(_templateObject$1(), function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
});

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n\n  ", ";\n  ", ";\n\n  &:hover {\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 12px;\n  line-height: 1;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var Label = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].span(_templateObject$2());

function Arrow(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      inverted = _ref.inverted,
      label = _ref.label,
      disabled = _ref.disabled;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SvgButton, {
    className: className,
    onClick: onClick,
    "data-tour-elem": "".concat(inverted ? 'right' : 'left', "-arrow"),
    disabled: disabled
  }, label ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, null, label) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    viewBox: "0 0 18.4 14.4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: inverted ? 'M17 7.2H1M10.8 1L17 7.2l-6.2 6.2' : 'M1.4 7.2h16M7.6 1L1.4 7.2l6.2 6.2',
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeMiterlimit: "10"
  })));
}

Arrow.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  inverted: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  label: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool
};
var Arrow$1 = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(Arrow)(_templateObject2(), function (props) {
  return props.disabled ? '#caccce' : '#646464';
}, function (props) {
  return props.inverted ? 'margin-left: 24px;' : 'margin-right: 24px;';
}, function (props) {
  return !props.label && "\n    width: 16px;\n    height: 12px;\n    flex: 0 0 16px;\n  ";
}, function (props) {
  return props.disabled ? '#caccce' : '#000';
});

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 22px;\n  right: 22px;\n  width: 9px;\n  height: 9px;\n  color: #5e5e5e;\n  &:hover {\n    color: #000;\n  }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}

function Close(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SvgButton, {
    className: className,
    onClick: onClick
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    viewBox: "0 0 9.1 9.1"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "currentColor",
    d: "M5.9 4.5l2.8-2.8c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L4.5 3.1 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4l2.8 2.8L.3 7.4c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3L4.5 6l2.8 2.8c.3.2.5.3.8.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L5.9 4.5z"
  })));
}

Close.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};
var StyledClose = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(Close)(_templateObject$3());

function getNodeRect(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(),
      top = _node$getBoundingClie.top,
      right = _node$getBoundingClie.right,
      bottom = _node$getBoundingClie.bottom,
      left = _node$getBoundingClie.left,
      width = _node$getBoundingClie.width,
      height = _node$getBoundingClie.height;

  return {
    top: top,
    right: right,
    bottom: bottom,
    left: left,
    width: width,
    height: height
  };
}
function inView(_ref) {
  var top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      left = _ref.left,
      w = _ref.w,
      h = _ref.h,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === void 0 ? 0 : _ref$threshold;
  return top >= 0 + threshold && left >= 0 + threshold && bottom <= h - threshold && right <= w - threshold;
}
function isBody(node) {
  return node === document.querySelector('body') || node === document.querySelector('html');
}
var isHoriz = function isHoriz(pos) {
  return /(left|right)/.test(pos);
};
var isOutsideX = function isOutsideX(val, windowWidth) {
  return val > windowWidth;
};
var isOutsideY = function isOutsideY(val, windowHeight) {
  return val > windowHeight;
};
var safe = function safe(sum) {
  return sum < 0 ? 0 : sum;
};
function bestPositionOf(positions) {
  return Object.keys(positions).map(function (p) {
    return {
      position: p,
      value: positions[p]
    };
  }).sort(function (a, b) {
    return b.value - a.value;
  }).map(function (p) {
    return p.position;
  });
}

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  --reactour-accent: ", ";\n  ", "\n  position: fixed;\n  transition: transform 0.3s;\n  top: 0;\n  left: 0;\n  z-index: 1000000;\n\n  transform: ", ";\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var Guide = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject$4(), function (props) {
  return props.accentColor;
}, function (props) {
  return props.defaultStyles ? "\n  max-width: 331px;\n  min-width: 150px;\n  padding-right: 40px;\n  border-radius: ".concat(props.rounded, "px;\n  background-color: #fff;\n  padding: 24px 30px;\n  box-shadow: 0 0.5em 3em rgba(0, 0, 0, 0.3);\n  color: inherit;\n  ") : '';
}, function (props) {
  var targetTop = props.targetTop,
      targetRight = props.targetRight,
      targetBottom = props.targetBottom,
      targetLeft = props.targetLeft,
      windowWidth = props.windowWidth,
      windowHeight = props.windowHeight,
      helperWidth = props.helperWidth,
      helperHeight = props.helperHeight,
      helperPosition = props.helperPosition,
      padding = props.padding;
  var available = {
    left: targetLeft,
    right: windowWidth - targetRight,
    top: targetTop,
    bottom: windowHeight - targetBottom
  };

  var couldPositionAt = function couldPositionAt(position) {
    return available[position] > (isHoriz(position) ? helperWidth + padding * 2 : helperHeight + padding * 2);
  };

  var autoPosition = function autoPosition(coords) {
    var positionsOrder = bestPositionOf(available);

    for (var j = 0; j < positionsOrder.length; j++) {
      if (couldPositionAt(positionsOrder[j])) {
        return coords[positionsOrder[j]];
      }
    }

    return coords.center;
  };

  var pos = function pos(helperPosition) {
    if (Array.isArray(helperPosition)) {
      var isOutX = isOutsideX(helperPosition[0], windowWidth);
      var isOutY = isOutsideY(helperPosition[1], windowHeight);

      var warn = function warn(axis, num) {
        console.warn("".concat(axis, ":").concat(num, " is outside window, falling back to center"));
      };

      if (isOutX) warn('x', helperPosition[0]);
      if (isOutY) warn('y', helperPosition[1]);
      return [isOutX ? windowWidth / 2 - helperWidth / 2 : helperPosition[0], isOutY ? windowHeight / 2 - helperHeight / 2 : helperPosition[1]];
    }

    var hX = isOutsideX(targetLeft + helperWidth, windowWidth) ? isOutsideX(targetRight + padding, windowWidth) ? targetRight - helperWidth : targetRight - helperWidth + padding : targetLeft - padding;
    var x = hX > padding ? hX : padding;
    var hY = isOutsideY(targetTop + helperHeight, windowHeight) ? isOutsideY(targetBottom + padding, windowHeight) ? targetBottom - helperHeight : targetBottom - helperHeight + padding : targetTop - padding;
    var y = hY > padding ? hY : padding;
    var coords = {
      top: [x, targetTop - helperHeight - padding * 2],
      right: [targetRight + padding * 2, y],
      bottom: [x, targetBottom + padding * 2],
      left: [targetLeft - helperWidth - padding * 2, y],
      center: [windowWidth / 2 - helperWidth / 2, windowHeight / 2 - helperHeight / 2]
    };

    if (helperPosition === 'center' || couldPositionAt(helperPosition)) {
      return coords[helperPosition];
    }

    return autoPosition(coords);
  };

  var p = pos(helperPosition);
  return "translate(".concat(Math.round(p[0]), "px, ").concat(Math.round(p[1]), "px)");
});

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  font-family: monospace;\n  background: var(--reactour-accent);\n  background: ", ";\n  height: 1.875em;\n  line-height: 2;\n  padding-left: 0.8125em;\n  padding-right: 0.8125em;\n  font-size: 1em;\n  border-radius: 1.625em;\n  color: white;\n  text-align: center;\n  box-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.3);\n  top: -0.8125em;\n  left: -0.8125em;\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var Badge = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].span(_templateObject$5(), function (props) {
  return props.accentColor;
});

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin-top: 24px;\n  align-items: center;\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var Controls = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject$6());

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  counter-reset: dot;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var Navigation = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].nav(_templateObject$7());

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  counter-increment: dot;\n  width: 8px;\n  height: 8px;\n  border: ", ";\n\n  border-radius: 100%;\n  padding: 0;\n  display: block;\n  margin: 4px;\n  transition: opacity 0.3s, transform 0.3s;\n  cursor: ", ";\n  transform: scale(", ");\n\n  color: ", ";\n  background: ", ";\n\n  color: ", ";\n  background: ", ";\n\n  &:before {\n    content: counter(dot);\n    position: absolute;\n    bottom: calc(100% + 0.25em);\n    left: 50%;\n    opacity: 0;\n    transform: translate(-50%, 1em);\n    transition: 0.3s;\n    display: ", ";\n  }\n\n  &:hover {\n    background-color: currentColor;\n\n    &:before {\n      opacity: 0.5;\n      transform: translate(-50%, -2px);\n    }\n  }\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var Dot = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].button(_templateObject$8(), function (props) {
  return props.current === props.index ? '0' : '1px solid #caccce';
}, function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
}, function (props) {
  return props.current === props.index ? 1.25 : 1;
}, function (props) {
  return props.current === props.index ? 'var(--reactour-accent)' : '#caccce';
}, function (props) {
  return props.current === props.index ? 'var(--reactour-accent)' : 'none';
}, function (props) {
  return props.current === props.index ? props.accentColor : '#caccce';
}, function (props) {
  return props.current === props.index ? props.accentColor : 'none';
}, function (props) {
  return props.showNumber ? 'block' : 'none';
});

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n  opacity: ", ";\n  color: ", ";\n  width: 100%;\n  left: 0;\n  top: 0;\n  height: 100%;\n  position: fixed;\n  z-index: 99999;\n  pointer-events: none;\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var SvgMaskWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject$9(), function (props) {
  return !props.maskClassName && 0.7;
}, function (props) {
  return !props.maskClassName && '#000';
});
function SvgMask(_ref) {
  var windowWidth = _ref.windowWidth,
      windowHeight = _ref.windowHeight,
      targetWidth = _ref.targetWidth,
      targetHeight = _ref.targetHeight,
      targetTop = _ref.targetTop,
      targetLeft = _ref.targetLeft,
      padding = _ref.padding,
      rounded = _ref.rounded,
      roundedStep = _ref.roundedStep,
      disableInteraction = _ref.disableInteraction,
      disableInteractionClassName = _ref.disableInteractionClassName,
      className = _ref.className,
      onClick = _ref.onClick,
      highlightedBorder = _ref.highlightedBorder;
  var width = safe(targetWidth + padding * 2);
  var height = safe(targetHeight + padding * 2);
  var top = safe(targetTop - padding);
  var left = safe(targetLeft - padding);
  var roundedRadius = roundedStep ? Math.min(width / 2, height / 2) : rounded;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SvgMaskWrapper, {
    onClick: onClick,
    maskClassName: className
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: windowWidth,
    height: windowHeight,
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("mask", {
    id: "mask-main"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
    x: 0,
    y: 0,
    width: windowWidth,
    height: windowHeight,
    fill: "white"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
    x: left,
    y: top,
    width: width,
    height: height,
    fill: "black"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
    x: left - 1,
    y: top - 1,
    width: roundedRadius,
    height: roundedRadius,
    fill: "white"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
    cx: left + roundedRadius,
    cy: top + roundedRadius,
    r: roundedRadius,
    fill: "black"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
    x: left + width - roundedRadius + 1,
    y: top - 1,
    width: roundedRadius,
    height: roundedRadius,
    fill: "white"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
    cx: left + width - roundedRadius,
    cy: top + roundedRadius,
    r: roundedRadius,
    fill: "black"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
    x: left - 1,
    y: top + height - roundedRadius + 1,
    width: roundedRadius,
    height: roundedRadius,
    fill: "white"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
    cx: left + roundedRadius,
    cy: top + height - roundedRadius,
    r: roundedRadius,
    fill: "black"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
    x: left + width - roundedRadius + 1,
    y: top + height - roundedRadius + 1,
    width: roundedRadius,
    height: roundedRadius,
    fill: "white"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
    cx: left + width - roundedRadius,
    cy: top + height - roundedRadius,
    r: roundedRadius,
    fill: "black "
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("clipPath", {
    id: "clip-path"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
    x: 0,
    y: 0,
    width: windowWidth,
    height: top
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
    x: 0,
    y: top,
    width: left,
    height: height
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
    x: targetLeft + targetWidth + padding,
    y: top,
    width: safe(windowWidth - targetWidth - left),
    height: height
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
    x: 0,
    y: targetTop + targetHeight + padding,
    width: windowWidth,
    height: safe(windowHeight - targetHeight - top)
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
    x: 0,
    y: 0,
    width: windowWidth,
    height: windowHeight,
    fill: "currentColor",
    mask: "url(#mask-main)"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
    x: 0,
    y: 0,
    width: windowWidth,
    height: windowHeight,
    fill: "currentColor",
    clipPath: "url(#clip-path)",
    pointerEvents: "auto"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
    x: left,
    y: top,
    width: width,
    height: height,
    pointerEvents: "auto",
    fill: "transparent",
    display: disableInteraction ? 'block' : 'none',
    className: disableInteractionClassName
  }), highlightedBorder && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
    x: safe(left + highlightedBorder.width / 2.0),
    y: safe(top + highlightedBorder.width / 2.0),
    width: safe(width - highlightedBorder.width),
    height: safe(height - highlightedBorder.width),
    pointerEvents: "auto",
    fill: "none",
    strokeWidth: highlightedBorder.width,
    stroke: highlightedBorder.color,
    rx: roundedRadius - 2
  })));
}
SvgMask.propTypes = {
  windowWidth: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  windowHeight: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  targetWidth: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  targetHeight: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  targetTop: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  targetLeft: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  padding: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  rounded: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  roundedStep: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  disableInteraction: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  disableInteractionClassName: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  highlightedBorder: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    color: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
    width: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired
  })
};

function Portal(_ref) {
  var children = _ref.children;
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  if (ref.current === null) {
    ref.current = document.createElement('div');
    ref.current.setAttribute('id', '___reactour');
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.body.appendChild(ref.current);
    return function () {
      document.body.removeChild(ref.current);
    };
  }, [ref]);
  return Object(react_dom__WEBPACK_IMPORTED_MODULE_9__["createPortal"])(children, ref.current);
}

var propTypes = {
  disableFocusLock: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  badgeContent: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  highlightedMaskClassName: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.element]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  closeWithMask: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  inViewThreshold: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  lastStepNextButton: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node,
  maskClassName: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  maskSpace: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  nextButton: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node,
  onAfterOpen: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  onBeforeClose: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  onRequestClose: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  prevButton: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node,
  scrollDuration: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  scrollOffset: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  showButtons: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  showCloseButton: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  showNavigation: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  showNavigationNumber: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  showNumber: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  startAt: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  goToStep: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  getCurrentStep: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  nextStep: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  prevStep: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  steps: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    selector: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
    content: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func]).isRequired,
    position: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number), prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf(['top', 'right', 'bottom', 'left', 'center'])]),
    action: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
    style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
    stepInteraction: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
    navDotAriaLabel: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
    roundedStep: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool
  })),
  update: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  updateDelay: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  disableInteraction: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  disableDotsNavigation: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  disableKeyboardNavigation: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf(['esc', 'right', 'left'])), prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool]),
  rounded: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  accentColor: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  highlightedBorder: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    color: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
    width: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired
  })
};
var defaultProps = {
  disableFocusLock: false,
  showNavigation: true,
  showNavigationNumber: true,
  showButtons: true,
  showCloseButton: true,
  showNumber: true,
  scrollDuration: 1,
  maskSpace: 10,
  updateDelay: 1,
  disableInteraction: false,
  rounded: 0,
  accentColor: '#007aff',
  closeWithMask: true
};

var CN = {
  mask: {
    base: 'reactour__mask',
    isOpen: 'reactour__mask--is-open',
    disableInteraction: 'reactour__mask--disable-interaction'
  },
  helper: {
    base: 'reactour__helper',
    isOpen: 'reactour__helper--is-open'
  },
  dot: {
    base: 'reactour__dot',
    active: 'reactour__dot--is-active'
  }
};

var Tour =
/*#__PURE__*/
function (_Component) {
  _inherits(Tour, _Component);

  function Tour() {
    var _this;

    _classCallCheck(this, Tour);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tour).call(this));

    _defineProperty(_assertThisInitialized(_this), "unlockFocus", function (callback) {
      _this.setState({
        focusUnlocked: true
      }, callback());
    });

    _defineProperty(_assertThisInitialized(_this), "showStep", function () {
      if (!_this.helper || !_this.helper.current) return;
      var steps = _this.props.steps;
      var _this$state = _this.state,
          current = _this$state.current,
          focusUnlocked = _this$state.focusUnlocked;

      if (focusUnlocked) {
        _this.setState({
          focusUnlocked: false
        });
      }

      var step = steps[current];
      var node = step.selector ? document.querySelector(step.selector) : null;

      var stepCallback = function stepCallback(o) {
        if (step.action && typeof step.action === 'function') {
          _this.unlockFocus(function () {
            return step.action(o);
          });
        }
      };

      if (step.observe) {
        var target = document.querySelector(step.observe);
        var config = {
          attributes: true,
          childList: true,
          characterData: true
        };

        _this.setState(function (prevState) {
          if (prevState.observer) {
            setTimeout(function () {
              prevState.observer.disconnect();
            }, 0);
          }

          return {
            observer: new MutationObserver(function (mutations) {
              mutations.forEach(function (mutation) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                  var cb = function cb() {
                    return stepCallback(mutation.addedNodes[0]);
                  };

                  setTimeout(function () {
                    return _this.calculateNode(mutation.addedNodes[0], step.position, cb);
                  }, 100);
                } else if (mutation.type === 'childList' && mutation.removedNodes.length > 0) {
                  var _cb = function _cb() {
                    return stepCallback(node);
                  };

                  _this.calculateNode(node, step.position, _cb);
                }
              });
            })
          };
        }, function () {
          return _this.state.observer.observe(target, config);
        });
      } else {
        if (_this.state.observer) {
          _this.state.observer.disconnect();

          _this.setState({
            observer: null
          });
        }
      }

      if (node) {
        var cb = function cb() {
          return stepCallback(node);
        };

        _this.calculateNode(node, step.position, cb);
      } else {
        _this.setState(setNodeState(null, _this.helper.current, step.position), stepCallback);

        step.selector && console.warn("Doesn't find a DOM node '".concat(step.selector, "'. Please check the 'steps' Tour prop Array at position ").concat(current, "."));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "calculateNode", function (node, stepPosition, cb) {
      var _this$props = _this.props,
          scrollDuration = _this$props.scrollDuration,
          inViewThreshold = _this$props.inViewThreshold,
          scrollOffset = _this$props.scrollOffset;
      var attrs = getNodeRect(node);
      var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

      if (!inView(_objectSpread2({}, attrs, {
        w: w,
        h: h,
        threshold: inViewThreshold
      }))) {
        var parentScroll = scrollparent__WEBPACK_IMPORTED_MODULE_4___default()(node);
        var offset = scrollOffset ? scrollOffset : attrs.height > h ? -25 : -(h / 2) + attrs.height / 2;
        scroll_smooth__WEBPACK_IMPORTED_MODULE_3___default.a.to(node, {
          context: isBody(parentScroll) ? window : parentScroll,
          duration: scrollDuration,
          offset: offset,
          callback: function callback(nd) {
            _this.setState(setNodeState(nd, _this.helper.current, stepPosition), cb);
          }
        });
      } else {
        _this.setState(setNodeState(node, _this.helper.current, stepPosition), cb);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "maskClickHandler", function (e) {
      var _this$props2 = _this.props,
          closeWithMask = _this$props2.closeWithMask,
          onRequestClose = _this$props2.onRequestClose;

      if (closeWithMask && !e.target.classList.contains(CN.mask.disableInteraction)) {
        onRequestClose(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "nextStep", function () {
      var _this$props3 = _this.props,
          steps = _this$props3.steps,
          getCurrentStep = _this$props3.getCurrentStep;

      _this.setState(function (prevState) {
        var nextStep = prevState.current < steps.length - 1 ? prevState.current + 1 : prevState.current;

        if (typeof getCurrentStep === 'function') {
          getCurrentStep(nextStep);
        }

        return {
          current: nextStep
        };
      }, _this.showStep);
    });

    _defineProperty(_assertThisInitialized(_this), "prevStep", function () {
      var getCurrentStep = _this.props.getCurrentStep;

      _this.setState(function (prevState) {
        var nextStep = prevState.current > 0 ? prevState.current - 1 : prevState.current;

        if (typeof getCurrentStep === 'function') {
          getCurrentStep(nextStep);
        }

        return {
          current: nextStep
        };
      }, _this.showStep);
    });

    _defineProperty(_assertThisInitialized(_this), "gotoStep", function (n) {
      var _this$props4 = _this.props,
          steps = _this$props4.steps,
          getCurrentStep = _this$props4.getCurrentStep;

      _this.setState(function (prevState) {
        var nextStep = steps[n] ? n : prevState.current;

        if (typeof getCurrentStep === 'function') {
          getCurrentStep(nextStep);
        }

        return {
          current: nextStep
        };
      }, _this.showStep);
    });

    _defineProperty(_assertThisInitialized(_this), "keyDownHandler", function (e) {
      var _this$props5 = _this.props,
          onRequestClose = _this$props5.onRequestClose,
          nextStep = _this$props5.nextStep,
          prevStep = _this$props5.prevStep,
          disableKeyboardNavigation = _this$props5.disableKeyboardNavigation,
          showCloseButton = _this$props5.showCloseButton;
      e.stopPropagation();

      if (disableKeyboardNavigation === true) {
        return;
      }

      var isEscDisabled, isRightDisabled, isLeftDisabled;

      if (disableKeyboardNavigation) {
        isEscDisabled = disableKeyboardNavigation.includes('esc');
        isRightDisabled = disableKeyboardNavigation.includes('right');
        isLeftDisabled = disableKeyboardNavigation.includes('left');
      }

      if (e.keyCode === 27 && !isEscDisabled) {
        // esc
        e.preventDefault();
        onRequestClose();
      }

      if (e.keyCode === 39 && !isRightDisabled) {
        // right
        e.preventDefault();
        typeof nextStep === 'function' ? nextStep() : _this.nextStep();
      }

      if (e.keyCode === 37 && !isLeftDisabled) {
        // left
        e.preventDefault();
        typeof prevStep === 'function' ? prevStep() : _this.prevStep();
      }
    });

    _this.state = {
      isOpen: false,
      current: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: 0,
      height: 0,
      w: 0,
      h: 0,
      inDOM: false,
      observer: null,
      focusUnlocked: false
    };
    _this.helper = Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    _this.helperElement = null;
    _this.debouncedShowStep = lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default()(_this.showStep, 70);
    return _this;
  }

  _createClass(Tour, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props6 = this.props,
          isOpen = _this$props6.isOpen,
          startAt = _this$props6.startAt;

      if (isOpen) {
        this.open(startAt);
      }
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var _this$props7 = this.props,
          isOpen = _this$props7.isOpen,
          update = _this$props7.update,
          updateDelay = _this$props7.updateDelay;

      if (!isOpen && nextProps.isOpen) {
        this.open(nextProps.startAt);
      } else if (isOpen && !nextProps.isOpen) {
        this.close();
      }

      if (isOpen && update !== nextProps.update) {
        if (nextProps.steps[this.state.current]) {
          setTimeout(this.showStep, updateDelay);
        } else {
          this.props.onRequestClose();
        }
      }

      if (isOpen && nextProps.isOpen && this.state.current !== nextProps.goToStep) {
        this.gotoStep(nextProps.goToStep);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var isOpen = this.props.isOpen;

      if (isOpen) {
        this.close();
      }

      if (this.state.observer) {
        this.state.observer.disconnect();
      }
    }
  }, {
    key: "open",
    value: function open(startAt) {
      var _this2 = this;

      var onAfterOpen = this.props.onAfterOpen;
      this.setState(function (prevState) {
        return {
          isOpen: true,
          current: startAt !== undefined ? startAt : prevState.current
        };
      }, function () {
        setTimeout(_this2.showStep, 1);
        _this2.helperElement = _this2.helper.current;
        if (!_this2.props.disableFocusLock) _this2.helper.current.focus();

        if (onAfterOpen) {
          onAfterOpen(_this2.helperElement);
        }
      });
      window.addEventListener('resize', this.debouncedShowStep, false);
      window.addEventListener('keydown', this.keyDownHandler, false);
    }
  }, {
    key: "close",
    value: function close() {
      this.setState(function (prevState) {
        if (prevState.observer) {
          prevState.observer.disconnect();
        }

        return {
          isOpen: false,
          observer: null
        };
      }, this.onBeforeClose);
      window.removeEventListener('resize', this.debouncedShowStep);
      window.removeEventListener('keydown', this.keyDownHandler);
    }
  }, {
    key: "onBeforeClose",
    value: function onBeforeClose() {
      var onBeforeClose = this.props.onBeforeClose;

      if (onBeforeClose) {
        onBeforeClose(this.helperElement);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props8 = this.props,
          className = _this$props8.className,
          steps = _this$props8.steps,
          maskClassName = _this$props8.maskClassName,
          showButtons = _this$props8.showButtons,
          showCloseButton = _this$props8.showCloseButton,
          showNavigation = _this$props8.showNavigation,
          showNavigationNumber = _this$props8.showNavigationNumber,
          showNumber = _this$props8.showNumber,
          onRequestClose = _this$props8.onRequestClose,
          maskSpace = _this$props8.maskSpace,
          lastStepNextButton = _this$props8.lastStepNextButton,
          nextButton = _this$props8.nextButton,
          prevButton = _this$props8.prevButton,
          badgeContent = _this$props8.badgeContent,
          highlightedMaskClassName = _this$props8.highlightedMaskClassName,
          disableInteraction = _this$props8.disableInteraction,
          disableDotsNavigation = _this$props8.disableDotsNavigation,
          nextStep = _this$props8.nextStep,
          prevStep = _this$props8.prevStep,
          rounded = _this$props8.rounded,
          accentColor = _this$props8.accentColor,
          CustomHelper = _this$props8.CustomHelper,
          disableFocusLock = _this$props8.disableFocusLock,
          highlightedBorder = _this$props8.highlightedBorder;
      var _this$state2 = this.state,
          isOpen = _this$state2.isOpen,
          current = _this$state2.current,
          inDOM = _this$state2.inDOM,
          targetTop = _this$state2.top,
          targetRight = _this$state2.right,
          targetBottom = _this$state2.bottom,
          targetLeft = _this$state2.left,
          targetWidth = _this$state2.width,
          targetHeight = _this$state2.height,
          windowWidth = _this$state2.w,
          windowHeight = _this$state2.h,
          helperWidth = _this$state2.helperWidth,
          helperHeight = _this$state2.helperHeight,
          helperPosition = _this$state2.helperPosition,
          focusUnlocked = _this$state2.focusUnlocked;

      if (isOpen) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Portal, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GlobalStyle, null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SvgMask, {
          onClick: this.maskClickHandler,
          forwardRef: function forwardRef(c) {
            return _this3.mask = c;
          },
          windowWidth: windowWidth,
          windowHeight: windowHeight,
          targetWidth: targetWidth,
          targetHeight: targetHeight,
          targetTop: targetTop,
          targetLeft: targetLeft,
          padding: maskSpace,
          rounded: rounded,
          roundedStep: steps[current].roundedStep,
          className: maskClassName,
          disableInteraction: steps[current].stepInteraction === false || disableInteraction ? !steps[current].stepInteraction : disableInteraction,
          disableInteractionClassName: "".concat(CN.mask.disableInteraction, " ").concat(highlightedMaskClassName),
          highlightedBorder: highlightedBorder
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_focus_lock__WEBPACK_IMPORTED_MODULE_6__["default"], {
          disabled: disableFocusLock
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Guide, {
          ref: this.helper,
          targetHeight: targetHeight,
          targetWidth: targetWidth,
          targetTop: targetTop,
          targetRight: targetRight,
          targetBottom: targetBottom,
          targetLeft: targetLeft,
          windowWidth: windowWidth,
          windowHeight: windowHeight,
          helperWidth: helperWidth,
          helperHeight: helperHeight,
          helperPosition: helperPosition,
          padding: maskSpace,
          tabIndex: -1,
          current: current,
          style: steps[current].style ? steps[current].style : {},
          rounded: rounded,
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(CN.helper.base, className, _defineProperty({}, CN.helper.isOpen, isOpen)),
          accentColor: accentColor,
          defaultStyles: !CustomHelper,
          role: "dialog"
        }, CustomHelper ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CustomHelper, {
          current: current,
          totalSteps: steps.length,
          gotoStep: this.gotoStep,
          close: onRequestClose,
          content: steps[current] && (typeof steps[current].content === 'function' ? steps[current].content({
            close: onRequestClose,
            goTo: this.gotoStep,
            inDOM: inDOM,
            step: current + 1
          }) : steps[current].content)
        }, this.props.children) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, this.props.children, steps[current] && (typeof steps[current].content === 'function' ? steps[current].content({
          close: onRequestClose,
          goTo: this.gotoStep,
          inDOM: inDOM,
          step: current + 1
        }) : steps[current].content), showNumber && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Badge, {
          "data-tour-elem": "badge",
          accentColor: accentColor
        }, typeof badgeContent === 'function' ? badgeContent(current + 1, steps.length) : current + 1), (showButtons || showNavigation) && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Controls, {
          "data-tour-elem": "controls"
        }, showButtons && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Arrow$1, {
          onClick: typeof prevStep === 'function' ? prevStep : this.prevStep,
          disabled: current === 0,
          label: prevButton ? prevButton : null
        }), showNavigation && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Navigation, {
          "data-tour-elem": "navigation"
        }, steps.map(function (s, i) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Dot, {
            key: "".concat(s.selector ? s.selector : 'undef', "_").concat(i),
            onClick: function onClick() {
              return _this3.gotoStep(i);
            },
            current: current,
            index: i,
            accentColor: accentColor,
            disabled: current === i || disableDotsNavigation,
            showNumber: showNavigationNumber,
            "data-tour-elem": "dot",
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(CN.dot.base, _defineProperty({}, CN.dot.active, current === i)),
            "aria-label": s.navDotAriaLabel
          });
        })), showButtons && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Arrow$1, {
          onClick: current === steps.length - 1 ? lastStepNextButton ? onRequestClose : function () {} : typeof nextStep === 'function' ? nextStep : this.nextStep,
          disabled: !lastStepNextButton && current === steps.length - 1,
          inverted: true,
          label: lastStepNextButton && current === steps.length - 1 ? lastStepNextButton : nextButton ? nextButton : null
        })), showCloseButton ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledClose, {
          onClick: onRequestClose,
          className: "reactour__close"
        }) : null))));
      }

      return null;
    }
  }]);

  return Tour;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var setNodeState = function setNodeState(node, helper, position) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  var _hx$getNodeRect = getNodeRect(helper),
      helperWidth = _hx$getNodeRect.width,
      helperHeight = _hx$getNodeRect.height;

  var attrs = node ? getNodeRect(node) : {
    top: h + 10,
    right: w / 2 + 9,
    bottom: h / 2 + 9,
    left: w / 2 - helperWidth / 2,
    width: 0,
    height: 0,
    w: w,
    h: h,
    helperPosition: 'center'
  };
  return function update() {
    return _objectSpread2({
      w: w,
      h: h,
      helperWidth: helperWidth,
      helperHeight: helperHeight,
      helperPosition: position
    }, attrs, {
      inDOM: node ? true : false
    });
  };
};

Tour.propTypes = propTypes;
Tour.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["default"] = (Tour);



/***/ }),

/***/ "./node_modules/scroll-smooth/dist/anchorScroll.js":
/*!*********************************************************!*\
  !*** ./node_modules/scroll-smooth/dist/anchorScroll.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _scrollSmooth = __webpack_require__(/*! ./scrollSmooth */ "./node_modules/scroll-smooth/dist/scrollSmooth.js");

var _scrollSmooth2 = _interopRequireDefault(_scrollSmooth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$query = _ref.query,
      query = _ref$query === undefined ? '[href^="#"]:not([href="#"]' : _ref$query,
      _ref$match = _ref.match,
      match = _ref$match === undefined ? function (target) {
    return document.getElementById(target.hash.substring(1));
  } : _ref$match,
      _ref$hashChange = _ref.hashChange,
      hashChange = _ref$hashChange === undefined ? true : _ref$hashChange,
      scrollSmoothConfig = _ref.scrollSmoothConfig;

  var links = document.querySelectorAll(query);
  var handler = function handler(e) {
    e.preventDefault();
    var dest = match(e.target);

    if (!dest) return;

    if (hashChange) {
      history.replaceState(null, null, '#' + dest.id);
    }

    (0, _scrollSmooth2.default)(dest, _extends({}, scrollSmoothConfig));
  };

  Array.from(links).map(function (link) {
    link.addEventListener('click', handler, false);
  });
};

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/scroll-smooth/dist/index.js":
/*!**************************************************!*\
  !*** ./node_modules/scroll-smooth/dist/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scrollSmooth = __webpack_require__(/*! ./scrollSmooth */ "./node_modules/scroll-smooth/dist/scrollSmooth.js");

var _scrollSmooth2 = _interopRequireDefault(_scrollSmooth);

var _tools = __webpack_require__(/*! ./tools */ "./node_modules/scroll-smooth/dist/tools.js");

var _anchorScroll = __webpack_require__(/*! ./anchorScroll */ "./node_modules/scroll-smooth/dist/anchorScroll.js");

var _anchorScroll2 = _interopRequireDefault(_anchorScroll);

var _observe = __webpack_require__(/*! ./observe */ "./node_modules/scroll-smooth/dist/observe.js");

var _observe2 = _interopRequireDefault(_observe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  to: _scrollSmooth2.default,
  calcEndPoint: _tools.calcEndPoint,
  anchorScroll: _anchorScroll2.default,
  observe: _observe2.default
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/scroll-smooth/dist/observe.js":
/*!****************************************************!*\
  !*** ./node_modules/scroll-smooth/dist/observe.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$activeClass = _ref.activeClass,
      activeClass = _ref$activeClass === undefined ? 'active' : _ref$activeClass,
      _ref$query = _ref.query,
      query = _ref$query === undefined ? '[href^="#"]:not([href="#"]' : _ref$query,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === undefined ? [0.25, 0.5, 0.75] : _ref$threshold,
      _ref$detectType = _ref.detectType,
      detectType = _ref$detectType === undefined ? 'max' : _ref$detectType;

  var options = { threshold: threshold };

  var removeClass = function removeClass(node) {
    return node.classList.remove(activeClass);
  };
  var addClass = function addClass(node) {
    return node.classList.add(activeClass);
  };

  var unsetAllActives = function unsetAllActives() {
    document.querySelectorAll('.' + activeClass).forEach(removeClass);
  };

  var setActive = function setActive(activeNode) {
    unsetAllActives();
    addClass(document.querySelector('a[href="#' + activeNode.id + '"]'));
  };

  var callback = function callback(entries) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio >= Math[detectType].apply(Math, _toConsumableArray(threshold))) {
        setActive(entry.target);
      }
    });
  };

  var links = document.querySelectorAll(query);
  var observer = new IntersectionObserver(callback, options);
  var observeTarget = function observeTarget(link) {
    var target = document.querySelector('#' + link.hash.slice(1));
    observer.observe(target);
  };

  links.forEach(observeTarget);
};

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/scroll-smooth/dist/scrollSmooth.js":
/*!*********************************************************!*\
  !*** ./node_modules/scroll-smooth/dist/scrollSmooth.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _tools = __webpack_require__(/*! ./tools */ "./node_modules/scroll-smooth/dist/tools.js");

exports.default = function (target) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$duration = _ref.duration,
      duration = _ref$duration === undefined ? 500 : _ref$duration,
      _ref$context = _ref.context,
      context = _ref$context === undefined ? window : _ref$context,
      _ref$offset = _ref.offset,
      offset = _ref$offset === undefined ? 0 : _ref$offset,
      _ref$ease = _ref.ease,
      ease = _ref$ease === undefined ? 'easeInOutCubic' : _ref$ease,
      callback = _ref.callback;

  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object') return;

  var start = context.scrollTop || window.pageYOffset;
  var end = (0, _tools.calcEndPoint)(target, context, offset);
  var clock = performance.now();
  var rAF = window.requestAnimationFrame;

  var tick = function tick() {
    var elapsed = performance.now() - clock;
    var pos = (0, _tools.setPosition)(start, end, elapsed, duration, ease);
    if (context !== window) {
      context.scrollTop = pos;
    } else {
      window.scroll(0, pos);
    }

    if (elapsed > duration) {
      typeof callback === 'function' && callback(target);
    } else {
      rAF(tick);
    }
  };

  tick();
};

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/scroll-smooth/dist/tools.js":
/*!**************************************************!*\
  !*** ./node_modules/scroll-smooth/dist/tools.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var easeFunctions = exports.easeFunctions = {
  linear: function linear(t) {
    return t;
  },
  easeInQuad: function easeInQuad(t) {
    return t * t;
  },
  easeOutQuad: function easeOutQuad(t) {
    return t * (2 - t);
  },
  easeInOutQuad: function easeInOutQuad(t) {
    return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  easeInCubic: function easeInCubic(t) {
    return t * t * t;
  },
  easeOutCubic: function easeOutCubic(t) {
    return --t * t * t + 1;
  },
  easeInOutCubic: function easeInOutCubic(t) {
    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  easeInQuart: function easeInQuart(t) {
    return t * t * t * t;
  },
  easeOutQuart: function easeOutQuart(t) {
    return 1 - --t * t * t * t;
  },
  easeInOutQuart: function easeInOutQuart(t) {
    return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  easeInQuint: function easeInQuint(t) {
    return t * t * t * t * t;
  },
  easeOutQuint: function easeOutQuint(t) {
    return 1 + --t * t * t * t * t;
  },
  easeInOutQuint: function easeInOutQuint(t) {
    return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  }
};

var isNumeric = exports.isNumeric = function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

var setPosition = exports.setPosition = function setPosition(begin, end, elapsed, duration) {
  var ease = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'easeInOutCubic';

  return elapsed > duration ? end : begin + (end - begin) * easeFunctions[ease](elapsed / duration);
};

var calcEndPoint = exports.calcEndPoint = function calcEndPoint(target) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (isNumeric(target)) {
    return parseInt(target) + offset;
  }

  var y = context === window ? window.pageYOffset : context.scrollTop - context.getBoundingClientRect().top;

  var distance = target.nodeName.toLowerCase() === 'html' ? -y : target.getBoundingClientRect().top + y;

  return distance + offset;
};

/***/ }),

/***/ "./node_modules/scrollparent/scrollparent.js":
/*!***************************************************!*\
  !*** ./node_modules/scrollparent/scrollparent.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function () {
  var regex = /(auto|scroll)/;

  var parents = function (node, ps) {
    if (node.parentNode === null) { return ps; }

    return parents(node.parentNode, ps.concat([node]));
  };

  var style = function (node, prop) {
    return getComputedStyle(node, null).getPropertyValue(prop);
  };

  var overflow = function (node) {
    return style(node, "overflow") + style(node, "overflow-y") + style(node, "overflow-x");
  };

  var scroll = function (node) {
   return regex.test(overflow(node));
  };

  var scrollParent = function (node) {
    if (!(node instanceof HTMLElement || node instanceof SVGElement)) {
      return ;
    }

    var ps = parents(node.parentNode, []);

    for (var i = 0; i < ps.length; i += 1) {
      if (scroll(ps[i])) {
        return ps[i];
      }
    }

    return document.scrollingElement || document.documentElement;
  };

  return scrollParent;
}));


/***/ }),

/***/ "./node_modules/tree-changes/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/tree-changes/lib/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var deep_diff_1 = __webpack_require__(/*! deep-diff */ "./node_modules/deep-diff/index.js");
// @ts-ignore
var nested_property_1 = __webpack_require__(/*! nested-property */ "./node_modules/tree-changes/node_modules/nested-property/index.js");
function isPlainObj() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.every(function (d) {
        if (!d) {
            return false;
        }
        var prototype = Object.getPrototypeOf(d);
        return (Object.prototype.toString.call(d).slice(8, -1) === 'Object' &&
            (prototype === null || prototype === Object.getPrototypeOf({})));
    });
}
function isArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.every(Array.isArray);
}
function isNumber() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.every(function (d) { return typeof d === 'number'; });
}
function treeChanges(data, nextData) {
    if (!data || !nextData) {
        throw new Error('Missing required parameters');
    }
    return {
        changed: function (key) {
            var left = nested_property_1.get(data, key);
            var right = nested_property_1.get(nextData, key);
            if (isArray(left, right) || isPlainObj(left, right)) {
                return !!deep_diff_1.diff(left, right);
            }
            return left !== right;
        },
        changedFrom: function (key, previous, actual) {
            if (typeof key === 'undefined') {
                throw new Error('Key parameter is required');
            }
            var useActual = typeof previous !== 'undefined' && typeof actual !== 'undefined';
            var left = nested_property_1.get(data, key);
            var right = nested_property_1.get(nextData, key);
            var leftComparator = Array.isArray(previous)
                ? previous.indexOf(left) >= 0
                : left === previous;
            var rightComparator = Array.isArray(actual) ? actual.indexOf(right) >= 0 : right === actual;
            return leftComparator && (useActual ? rightComparator : !useActual);
        },
        changedTo: function (key, actual) {
            if (typeof key === 'undefined') {
                throw new Error('Key parameter is required');
            }
            var left = nested_property_1.get(data, key);
            var right = nested_property_1.get(nextData, key);
            var leftComparator = Array.isArray(actual) ? actual.indexOf(left) < 0 : left !== actual;
            var rightComparator = Array.isArray(actual) ? actual.indexOf(right) >= 0 : right === actual;
            return leftComparator && rightComparator;
        },
        increased: function (key) {
            if (typeof key === 'undefined') {
                throw new Error('Key parameter is required');
            }
            return (isNumber(nested_property_1.get(data, key), nested_property_1.get(nextData, key)) &&
                nested_property_1.get(data, key) < nested_property_1.get(nextData, key));
        },
        decreased: function (key) {
            if (typeof key === 'undefined') {
                throw new Error('Key parameter is required');
            }
            return (isNumber(nested_property_1.get(data, key), nested_property_1.get(nextData, key)) &&
                nested_property_1.get(data, key) > nested_property_1.get(nextData, key));
        },
    };
}
exports.default = treeChanges;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/tree-changes/node_modules/nested-property/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/tree-changes/node_modules/nested-property/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* @license nested-property https://github.com/cosmosio/nested-property
*
* The MIT License (MIT)
*
* Copyright (c) 2014-2015 Olivier Scherrer <pode.fr@gmail.com>
*/


module.exports = {
  set: setNestedProperty,
  get: getNestedProperty,
  has: hasNestedProperty,
  hasOwn: function (object, property, options) {
      return this.has(object, property, options || {own: true});
  },
  isIn: isInNestedProperty
};

/**
 * Get the property of an object nested in one or more objects
 * given an object such as a.b.c.d = 5, getNestedProperty(a, "b.c.d") will return 5.
 * @param {Object} object the object to get the property from
 * @param {String} property the path to the property as a string
 * @returns the object or the the property value if found
 */
function getNestedProperty(object, property) {
    if (object && typeof object == "object") {
        if (typeof property == "string" && property !== "") {
            var split = property.split(".");
            return split.reduce(function (obj, prop) {
                return obj && obj[prop];
            }, object);
        } else if (typeof property == "number") {
            return object[property];
        } else {
            return object;
        }
    } else {
        return object;
    }
}

/**
 * Tell if a nested object has a given property (or array a given index)
 * given an object such as a.b.c.d = 5, hasNestedProperty(a, "b.c.d") will return true.
 * It also returns true if the property is in the prototype chain.
 * @param {Object} object the object to get the property from
 * @param {String} property the path to the property as a string
 * @param {Object} options:
 *  - own: set to reject properties from the prototype
 * @returns true if has (property in object), false otherwise
 */
function hasNestedProperty(object, property, options) {
    options = options || {};

    if (object && typeof object == "object") {
        if (typeof property == "string" && property !== "") {
            var split = property.split(".");
            return split.reduce(function (obj, prop, idx, array) {
                if (idx == array.length - 1) {
                    if (options.own) {
                        return !!(obj && obj.hasOwnProperty(prop));
                    } else {
                        return !!(obj !== null && typeof obj == "object" && prop in obj);
                    }
                }
                return obj && obj[prop];
            }, object);
        } else if (typeof property == "number") {
            return property in object;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

/**
 * Set the property of an object nested in one or more objects
 * If the property doesn't exist, it gets created.
 * @param {Object} object
 * @param {String} property
 * @param value the value to set
 * @returns object if no assignment was made or the value if the assignment was made
 */
function setNestedProperty(object, property, value) {
    if (object && typeof object == "object") {
        if (typeof property == "string" && property !== "") {
            var split = property.split(".");
            return split.reduce(function (obj, prop, idx) {
                const nextPropIsNumber = Number.isInteger(Number(split[idx + 1]));
                
                obj[prop] = obj[prop] || (nextPropIsNumber ? [] : {})
                if (split.length == (idx + 1)) {
                    obj[prop] = value;
                }
                return obj[prop];
            }, object);
        } else if (typeof property == "number") {
            object[property] = value;
            return object[property];
        } else {
            return object;
        }
    } else {
        return object;
    }
}

/**
 * Tell if an object is on the path to a nested property
 * If the object is on the path, and the path exists, it returns true, and false otherwise.
 * @param {Object} object to get the nested property from
 * @param {String} property name of the nested property
 * @param {Object} objectInPath the object to check
 * @param {Object} options:
 *  - validPath: return false if the path is invalid, even if the object is in the path
 * @returns {boolean} true if the object is on the path
 */
function isInNestedProperty(object, property, objectInPath, options) {
    options = options || {};

    if (object && typeof object == "object") {
        if (typeof property == "string" && property !== "") {
            var split = property.split("."),
                isIn = false,
                pathExists;

            pathExists = !!split.reduce(function (obj, prop) {
                isIn = isIn || obj === objectInPath || (!!obj && obj[prop] === objectInPath);
                return obj && obj[prop];
            }, object);

            if (options.validPath) {
                return isIn && pathExists;
            } else {
                return isIn;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/assignRef.js":
/*!****************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/assignRef.js ***!
  \****************************************************************/
/*! exports provided: assignRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignRef", function() { return assignRef; });
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref) {
        ref.current = value;
    }
    return ref;
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/createRef.js":
/*!****************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/createRef.js ***!
  \****************************************************************/
/*! exports provided: createCallbackRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCallbackRef", function() { return createCallbackRef; });
function createCallbackRef(callback) {
    var current = null;
    return {
        get current() {
            return current;
        },
        set current(value) {
            var last = current;
            if (last !== value) {
                current = value;
                callback(value, last);
            }
        }
    };
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/index.js":
/*!************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/index.js ***!
  \************************************************************/
/*! exports provided: assignRef, useCallbackRef, createCallbackRef, mergeRefs, useMergeRefs, useTransformRef, transformRef, refToCallback, useRefToCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assignRef */ "./node_modules/use-callback-ref/dist/es2015/assignRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assignRef", function() { return _assignRef__WEBPACK_IMPORTED_MODULE_0__["assignRef"]; });

/* harmony import */ var _useRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRef */ "./node_modules/use-callback-ref/dist/es2015/useRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCallbackRef", function() { return _useRef__WEBPACK_IMPORTED_MODULE_1__["useCallbackRef"]; });

/* harmony import */ var _createRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createRef */ "./node_modules/use-callback-ref/dist/es2015/createRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCallbackRef", function() { return _createRef__WEBPACK_IMPORTED_MODULE_2__["createCallbackRef"]; });

/* harmony import */ var _mergeRef__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mergeRef */ "./node_modules/use-callback-ref/dist/es2015/mergeRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeRefs", function() { return _mergeRef__WEBPACK_IMPORTED_MODULE_3__["mergeRefs"]; });

/* harmony import */ var _useMergeRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useMergeRef */ "./node_modules/use-callback-ref/dist/es2015/useMergeRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMergeRefs", function() { return _useMergeRef__WEBPACK_IMPORTED_MODULE_4__["useMergeRefs"]; });

/* harmony import */ var _useTransformRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useTransformRef */ "./node_modules/use-callback-ref/dist/es2015/useTransformRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTransformRef", function() { return _useTransformRef__WEBPACK_IMPORTED_MODULE_5__["useTransformRef"]; });

/* harmony import */ var _transformRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transformRef */ "./node_modules/use-callback-ref/dist/es2015/transformRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformRef", function() { return _transformRef__WEBPACK_IMPORTED_MODULE_6__["transformRef"]; });

/* harmony import */ var _refToCallback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./refToCallback */ "./node_modules/use-callback-ref/dist/es2015/refToCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "refToCallback", function() { return _refToCallback__WEBPACK_IMPORTED_MODULE_7__["refToCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRefToCallback", function() { return _refToCallback__WEBPACK_IMPORTED_MODULE_7__["useRefToCallback"]; });


// callback ref


// merge ref


// transform ref


// refToCallback



/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/mergeRef.js":
/*!***************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/mergeRef.js ***!
  \***************************************************************/
/*! exports provided: mergeRefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeRefs", function() { return mergeRefs; });
/* harmony import */ var _createRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createRef */ "./node_modules/use-callback-ref/dist/es2015/createRef.js");
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignRef */ "./node_modules/use-callback-ref/dist/es2015/assignRef.js");


function mergeRefs(refs) {
    return Object(_createRef__WEBPACK_IMPORTED_MODULE_0__["createCallbackRef"])(function (newValue) {
        return refs.forEach(function (ref) { return Object(_assignRef__WEBPACK_IMPORTED_MODULE_1__["assignRef"])(ref, newValue); });
    });
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/refToCallback.js":
/*!********************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/refToCallback.js ***!
  \********************************************************************/
/*! exports provided: refToCallback, useRefToCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refToCallback", function() { return refToCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRefToCallback", function() { return useRefToCallback; });
function refToCallback(ref) {
    return function (newValue) {
        if (typeof ref === 'function') {
            ref(newValue);
        }
        else if (ref) {
            ref.current = newValue;
        }
    };
}
var nullCallback = function () { return null; };
// lets maintain a weak ref to, well, ref :)
// not using `kashe` to keep this package small
var weakMem = new WeakMap();
var weakMemoize = function (ref) {
    var usedRef = ref || nullCallback;
    if (weakMem.has(usedRef)) {
        return weakMem.get(usedRef);
    }
    var cb = refToCallback(usedRef);
    weakMem.set(usedRef, cb);
    return cb;
};
function useRefToCallback(ref) {
    return weakMemoize(ref);
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/transformRef.js":
/*!*******************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/transformRef.js ***!
  \*******************************************************************/
/*! exports provided: transformRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformRef", function() { return transformRef; });
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assignRef */ "./node_modules/use-callback-ref/dist/es2015/assignRef.js");
/* harmony import */ var _createRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createRef */ "./node_modules/use-callback-ref/dist/es2015/createRef.js");


function transformRef(ref, transformer) {
    return Object(_createRef__WEBPACK_IMPORTED_MODULE_1__["createCallbackRef"])(function (value) { return Object(_assignRef__WEBPACK_IMPORTED_MODULE_0__["assignRef"])(ref, transformer(value)); });
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/useMergeRef.js":
/*!******************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/useMergeRef.js ***!
  \******************************************************************/
/*! exports provided: useMergeRefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMergeRefs", function() { return useMergeRefs; });
/* harmony import */ var _useRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useRef */ "./node_modules/use-callback-ref/dist/es2015/useRef.js");
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignRef */ "./node_modules/use-callback-ref/dist/es2015/assignRef.js");


function useMergeRefs(refs, defaultValue) {
    return Object(_useRef__WEBPACK_IMPORTED_MODULE_0__["useCallbackRef"])(defaultValue, function (newValue) {
        return refs.forEach(function (ref) { return Object(_assignRef__WEBPACK_IMPORTED_MODULE_1__["assignRef"])(ref, newValue); });
    });
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/useRef.js":
/*!*************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/useRef.js ***!
  \*************************************************************/
/*! exports provided: useCallbackRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallbackRef", function() { return useCallbackRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useCallbackRef(initialValue, callback) {
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () { return ({
        // value
        value: initialValue,
        // last callback
        callback: callback,
        // "memoized" public interface
        facade: {
            get current() {
                return ref.value;
            },
            set current(value) {
                var last = ref.value;
                if (last !== value) {
                    ref.value = value;
                    ref.callback(value, last);
                }
            }
        }
    }); })[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/useTransformRef.js":
/*!**********************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/useTransformRef.js ***!
  \**********************************************************************/
/*! exports provided: useTransformRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransformRef", function() { return useTransformRef; });
/* harmony import */ var _useRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useRef */ "./node_modules/use-callback-ref/dist/es2015/useRef.js");
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignRef */ "./node_modules/use-callback-ref/dist/es2015/assignRef.js");


function useTransformRef(ref, transformer) {
    return Object(_useRef__WEBPACK_IMPORTED_MODULE_0__["useCallbackRef"])(undefined, function (value) {
        return Object(_assignRef__WEBPACK_IMPORTED_MODULE_1__["assignRef"])(ref, transformer(value));
    });
}


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/config.js":
/*!********************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/config.js ***!
  \********************************************************/
/*! exports provided: config, setConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setConfig", function() { return setConfig; });
var config = {
    onError: function (e) { return console.error(e); },
};
var setConfig = function (conf) {
    Object.assign(config, conf);
};


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/env.js":
/*!*****************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/env.js ***!
  \*****************************************************/
/*! exports provided: env */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "env", function() { return env; });
/* harmony import */ var detect_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! detect-node */ "./node_modules/detect-node/browser.js");
/* harmony import */ var detect_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(detect_node__WEBPACK_IMPORTED_MODULE_0__);

var env = {
    isNode: detect_node__WEBPACK_IMPORTED_MODULE_0___default.a,
    forceCache: false,
};


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/exports.js":
/*!*********************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/exports.js ***!
  \*********************************************************/
/*! exports provided: exportSidecar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportSidecar", function() { return exportSidecar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var SideCar = function (_a) {
    var sideCar = _a.sideCar, rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["sideCar"]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Target, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar;
}


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/hoc.js":
/*!*****************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/hoc.js ***!
  \*****************************************************/
/*! exports provided: sidecar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidecar", function() { return sidecar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hook */ "./node_modules/use-sidecar/dist/es2015/hook.js");



function sidecar(importer, errorComponent) {
    var ErrorCase = function () { return errorComponent; };
    return function Sidecar(props) {
        var _a = Object(_hook__WEBPACK_IMPORTED_MODULE_2__["useSidecar"])(importer, props.sideCar), Car = _a[0], error = _a[1];
        if (error && errorComponent) {
            return ErrorCase;
        }
        return Car ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Car, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props)) : null;
    };
}


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/hook.js":
/*!******************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/hook.js ***!
  \******************************************************/
/*! exports provided: useSidecar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSidecar", function() { return useSidecar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env */ "./node_modules/use-sidecar/dist/es2015/env.js");


var cache = new WeakMap();
function useSidecar(importer, effect) {
    var options = effect && effect.options || {};
    if (_env__WEBPACK_IMPORTED_MODULE_1__["env"].isNode && !options.ssr) {
        return [null, null];
    }
    var couldUseCache = _env__WEBPACK_IMPORTED_MODULE_1__["env"].forceCache || (_env__WEBPACK_IMPORTED_MODULE_1__["env"].isNode && !!options.ssr) || (!options.async);
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(couldUseCache ? function () { return cache.get(importer); } : undefined), Car = _a[0], setCar = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), error = _b[0], setError = _b[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!Car) {
            importer()
                .then(function (car) {
                var resolved = effect ? effect.read() : (car.default || car);
                if (!resolved) {
                    console.error('Sidecar error: with importer', importer);
                    var error_1;
                    if (effect) {
                        console.error('Sidecar error: with medium', effect);
                        error_1 = new Error('Sidecar medium was not found');
                    }
                    else {
                        error_1 = new Error('Sidecar was not found in exports');
                    }
                    setError(function () { return error_1; });
                    throw error_1;
                }
                cache.set(importer, resolved);
                setCar(function () { return resolved; });
            }, function (e) { return setError(function () { return e; }); });
        }
    }, []);
    return [Car, error];
}
;


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/index.js ***!
  \*******************************************************/
/*! exports provided: sidecar, useSidecar, setConfig, createMedium, createSidecarMedium, renderCar, exportSidecar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hoc */ "./node_modules/use-sidecar/dist/es2015/hoc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sidecar", function() { return _hoc__WEBPACK_IMPORTED_MODULE_0__["sidecar"]; });

/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hook */ "./node_modules/use-sidecar/dist/es2015/hook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSidecar", function() { return _hook__WEBPACK_IMPORTED_MODULE_1__["useSidecar"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./node_modules/use-sidecar/dist/es2015/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setConfig", function() { return _config__WEBPACK_IMPORTED_MODULE_2__["setConfig"]; });

/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medium */ "./node_modules/use-sidecar/dist/es2015/medium.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMedium", function() { return _medium__WEBPACK_IMPORTED_MODULE_3__["createMedium"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSidecarMedium", function() { return _medium__WEBPACK_IMPORTED_MODULE_3__["createSidecarMedium"]; });

/* harmony import */ var _renderProp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderProp */ "./node_modules/use-sidecar/dist/es2015/renderProp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderCar", function() { return _renderProp__WEBPACK_IMPORTED_MODULE_4__["renderCar"]; });

/* harmony import */ var _exports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exports */ "./node_modules/use-sidecar/dist/es2015/exports.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exportSidecar", function() { return _exports__WEBPACK_IMPORTED_MODULE_5__["exportSidecar"]; });









/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/medium.js":
/*!********************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/medium.js ***!
  \********************************************************/
/*! exports provided: createMedium, createSidecarMedium */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMedium", function() { return createMedium; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSidecarMedium", function() { return createSidecarMedium; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function () {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function (data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function () {
                buffer = buffer.filter(function (x) { return x !== item; });
            };
        },
        assignSyncMedium: function (cb) {
            assigned = true;
            while (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function (x) { return cb(x); },
                filter: function () { return buffer; },
            };
        },
        assignMedium: function (cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function () {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function () { return Promise.resolve().then(executeQueue); };
            cycle();
            buffer = {
                push: function (x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function (filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                },
            };
        },
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    return innerCreateMedium(defaults, middleware);
}
function createSidecarMedium(options) {
    if (options === void 0) { options = {}; }
    var medium = innerCreateMedium(null);
    medium.options = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ async: true, ssr: false }, options);
    return medium;
}


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/renderProp.js":
/*!************************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/renderProp.js ***!
  \************************************************************/
/*! exports provided: renderCar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderCar", function() { return renderCar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function renderCar(WrappedComponent, defaults, options) {
    if (options === void 0) { options = {}; }
    function State(_a) {
        var stateRef = _a.stateRef, props = _a.props;
        var renderTarget = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function SideTarget() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(function () {
                stateRef.current(args);
            });
            return null;
        }, []);
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](WrappedComponent, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props, { children: renderTarget }));
    }
    var Children = react__WEBPACK_IMPORTED_MODULE_1__["memo"](function (_a) {
        var stateRef = _a.stateRef, defaultState = _a.defaultState, children = _a.children;
        var _b = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultState.current), state = _b[0], setState = _b[1];
        react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
            stateRef.current = setState;
        }, []);
        return children.apply(void 0, state);
    }, function () { return true; });
    return function Combiner(props) {
        var defaultState = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](defaults(props));
        var ref = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](function (state) { return defaultState.current = state; });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](State, { stateRef: ref, props: props }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Children, { stateRef: ref, defaultState: defaultState, children: props.children })));
    };
}


/***/ })

}]);