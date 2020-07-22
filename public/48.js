(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
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

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _taggedTemplateLiteral;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/autosize/dist/autosize.js":
/*!************************************************!*\
  !*** ./node_modules/autosize/dist/autosize.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else { var mod; }
})(this, function (module, exports) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			delete: function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	}();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function createEvent(name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = null;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				return;
			}

			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = '';
			ta.style.height = ta.scrollHeight + heightOffset + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that 
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight < styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map.delete(ta);
		}.bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function autosize(el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function autosize(el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	exports.default = autosize;
	module.exports = exports['default'];
});

/***/ }),

/***/ "./node_modules/immutability-helper/index.js":
/*!***************************************************!*\
  !*** ./node_modules/immutability-helper/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");

var hasOwnProperty = Object.prototype.hasOwnProperty;
var splice = Array.prototype.splice;

var toString = Object.prototype.toString
var type = function(obj) {
  return toString.call(obj).slice(8, -1);
}

var assign = Object.assign || /* istanbul ignore next */ function assign(target, source) {
  getAllKeys(source).forEach(function(key) {
    if (hasOwnProperty.call(source, key)) {
      target[key] = source[key];
    }
  });
  return target;
};

var getAllKeys = typeof Object.getOwnPropertySymbols === 'function' ?
  function(obj) { return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj)) } :
  /* istanbul ignore next */ function(obj) { return Object.keys(obj) };

/* istanbul ignore next */
function copy(object) {
  if (Array.isArray(object)) {
    return assign(object.constructor(object.length), object)
  } else if (type(object) === 'Map') {
    return new Map(object)
  } else if (type(object) === 'Set') {
    return new Set(object)
  } else if (object && typeof object === 'object') {
    var prototype = Object.getPrototypeOf(object);
    return assign(Object.create(prototype), object);
  } else {
    return object;
  }
}

function newContext() {
  var commands = assign({}, defaultCommands);
  update.extend = function(directive, fn) {
    commands[directive] = fn;
  };
  update.isEquals = function(a, b) { return a === b; };

  return update;

  function update(object, spec) {
    if (typeof spec === 'function') {
      spec = { $apply: spec };
    }

    if (!(Array.isArray(object) && Array.isArray(spec))) {
      invariant(
        !Array.isArray(spec),
        'update(): You provided an invalid spec to update(). The spec may ' +
        'not contain an array except as the value of $set, $push, $unshift, ' +
        '$splice or any custom command allowing an array value.'
      );
    }

    invariant(
      typeof spec === 'object' && spec !== null,
      'update(): You provided an invalid spec to update(). The spec and ' +
      'every included key path must be plain objects containing one of the ' +
      'following commands: %s.',
      Object.keys(commands).join(', ')
    );

    var nextObject = object;
    var index, key;
    getAllKeys(spec).forEach(function(key) {
      if (hasOwnProperty.call(commands, key)) {
        var objectWasNextObject = object === nextObject;
        nextObject = commands[key](spec[key], nextObject, spec, object);
        if (objectWasNextObject && update.isEquals(nextObject, object)) {
          nextObject = object;
        }
      } else {
        var nextValueForKey =
          type(object) === 'Map'
            ? update(object.get(key), spec[key])
            : update(object[key], spec[key]);
        var nextObjectValue =
          type(nextObject) === 'Map'
              ? nextObject.get(key)
              : nextObject[key];
        if (!update.isEquals(nextValueForKey, nextObjectValue) || typeof nextValueForKey === 'undefined' && !hasOwnProperty.call(object, key)) {
          if (nextObject === object) {
            nextObject = copy(object);
          }
          if (type(nextObject) === 'Map') {
            nextObject.set(key, nextValueForKey);
          } else {
            nextObject[key] = nextValueForKey;
          }
        }
      }
    })
    return nextObject;
  }

}

var defaultCommands = {
  $push: function(value, nextObject, spec) {
    invariantPushAndUnshift(nextObject, spec, '$push');
    return value.length ? nextObject.concat(value) : nextObject;
  },
  $unshift: function(value, nextObject, spec) {
    invariantPushAndUnshift(nextObject, spec, '$unshift');
    return value.length ? value.concat(nextObject) : nextObject;
  },
  $splice: function(value, nextObject, spec, originalObject) {
    invariantSplices(nextObject, spec);
    value.forEach(function(args) {
      invariantSplice(args);
      if (nextObject === originalObject && args.length) nextObject = copy(originalObject);
      splice.apply(nextObject, args);
    });
    return nextObject;
  },
  $set: function(value, nextObject, spec) {
    invariantSet(spec);
    return value;
  },
  $toggle: function(targets, nextObject) {
    invariantSpecArray(targets, '$toggle');
    var nextObjectCopy = targets.length ? copy(nextObject) : nextObject;

    targets.forEach(function(target) {
      nextObjectCopy[target] = !nextObject[target];
    });

    return nextObjectCopy;
  },
  $unset: function(value, nextObject, spec, originalObject) {
    invariantSpecArray(value, '$unset');
    value.forEach(function(key) {
      if (Object.hasOwnProperty.call(nextObject, key)) {
        if (nextObject === originalObject) nextObject = copy(originalObject);
        delete nextObject[key];
      }
    });
    return nextObject;
  },
  $add: function(value, nextObject, spec, originalObject) {
    invariantMapOrSet(nextObject, '$add');
    invariantSpecArray(value, '$add');
    if (type(nextObject) === 'Map') {
      value.forEach(function(pair) {
        var key = pair[0];
        var value = pair[1];
        if (nextObject === originalObject && nextObject.get(key) !== value) nextObject = copy(originalObject);
        nextObject.set(key, value);
      });
    } else {
      value.forEach(function(value) {
        if (nextObject === originalObject && !nextObject.has(value)) nextObject = copy(originalObject);
        nextObject.add(value);
      });
    }
    return nextObject;
  },
  $remove: function(value, nextObject, spec, originalObject) {
    invariantMapOrSet(nextObject, '$remove');
    invariantSpecArray(value, '$remove');
    value.forEach(function(key) {
      if (nextObject === originalObject && nextObject.has(key)) nextObject = copy(originalObject);
      nextObject.delete(key);
    });
    return nextObject;
  },
  $merge: function(value, nextObject, spec, originalObject) {
    invariantMerge(nextObject, value);
    getAllKeys(value).forEach(function(key) {
      if (value[key] !== nextObject[key]) {
        if (nextObject === originalObject) nextObject = copy(originalObject);
        nextObject[key] = value[key];
      }
    });
    return nextObject;
  },
  $apply: function(value, original) {
    invariantApply(value);
    return value(original);
  }
};

var contextForExport = newContext();

module.exports = contextForExport;
module.exports.default = contextForExport;
module.exports.newContext = newContext;

// invariants

function invariantPushAndUnshift(value, spec, command) {
  invariant(
    Array.isArray(value),
    'update(): expected target of %s to be an array; got %s.',
    command,
    value
  );
  invariantSpecArray(spec[command], command)
}

function invariantSpecArray(spec, command) {
  invariant(
    Array.isArray(spec),
    'update(): expected spec of %s to be an array; got %s. ' +
    'Did you forget to wrap your parameter in an array?',
    command,
    spec
  );
}

function invariantSplices(value, spec) {
  invariant(
    Array.isArray(value),
    'Expected $splice target to be an array; got %s',
    value
  );
  invariantSplice(spec['$splice']);
}

function invariantSplice(value) {
  invariant(
    Array.isArray(value),
    'update(): expected spec of $splice to be an array of arrays; got %s. ' +
    'Did you forget to wrap your parameters in an array?',
    value
  );
}

function invariantApply(fn) {
  invariant(
    typeof fn === 'function',
    'update(): expected spec of $apply to be a function; got %s.',
    fn
  );
}

function invariantSet(spec) {
  invariant(
    Object.keys(spec).length === 1,
    'Cannot have more than one key in an object with $set'
  );
}

function invariantMerge(target, specValue) {
  invariant(
    specValue && typeof specValue === 'object',
    'update(): $merge expects a spec of type \'object\'; got %s',
    specValue
  );
  invariant(
    target && typeof target === 'object',
    'update(): $merge expects a target of type \'object\'; got %s',
    target
  );
}

function invariantMapOrSet(target, command) {
  var typeOfTarget = type(target);
  invariant(
    typeOfTarget === 'Map' || typeOfTarget === 'Set',
    'update(): %s expects a target of type Set or Map; got %s',
    command,
    typeOfTarget
  );
}


/***/ }),

/***/ "./node_modules/just-curry-it/index.js":
/*!*********************************************!*\
  !*** ./node_modules/just-curry-it/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = curry;

/*
  function add(a, b, c) {
    return a + b + c;
  }
  curry(add)(1)(2)(3); // 6
  curry(add)(1)(2)(2); // 5
  curry(add)(2)(4, 3); // 9

  function add(...args) {
    return args.reduce((sum, n) => sum + n, 0)
  }
  var curryAdd4 = curry(add, 4)
  curryAdd4(1)(2, 3)(4); // 10

  function converter(ratio, input) {
    return (input*ratio).toFixed(1);
  }
  const curriedConverter = curry(converter)
  const milesToKm = curriedConverter(1.62);
  milesToKm(35); // 56.7
  milesToKm(10); // 16.2
*/

function curry(fn, arity) {
  return function curried() {
    if (arity == null) {
      arity = fn.length;
    }
    var args = [].slice.call(arguments);
    if (args.length >= arity) {
      return fn.apply(this, args);
    } else {
      return function() {
        return curried.apply(this, args.concat([].slice.call(arguments)));
      };
    }
  };
}


/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "./node_modules/lodash/_isFlattenable.js");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "./node_modules/lodash/_basePick.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_basePick.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var basePickBy = __webpack_require__(/*! ./_basePickBy */ "./node_modules/lodash/_basePickBy.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js");

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;


/***/ }),

/***/ "./node_modules/lodash/_basePickBy.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_basePickBy.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js"),
    baseSet = __webpack_require__(/*! ./_baseSet */ "./node_modules/lodash/_baseSet.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js");

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),

/***/ "./node_modules/lodash/_baseSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),

/***/ "./node_modules/lodash/_flatRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_flatRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(/*! ./flatten */ "./node_modules/lodash/flatten.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "./node_modules/lodash/cloneDeep.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/cloneDeep.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(/*! ./_baseClone */ "./node_modules/lodash/_baseClone.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),

/***/ "./node_modules/lodash/flatten.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/flatten.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js");

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ "./node_modules/lodash/isEqual.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isEqual.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),

/***/ "./node_modules/lodash/pick.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/pick.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var basePick = __webpack_require__(/*! ./_basePick */ "./node_modules/lodash/_basePick.js"),
    flatRest = __webpack_require__(/*! ./_flatRest */ "./node_modules/lodash/_flatRest.js");

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;


/***/ }),

/***/ "./node_modules/react-click-outside/dist/index.js":
/*!********************************************************!*\
  !*** ./node_modules/react-click-outside/dist/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var hoistNonReactStatic = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

module.exports = function enhanceWithClickOutside(WrappedComponent) {
  var componentName = WrappedComponent.displayName || WrappedComponent.name;

  var EnhancedComponent = function (_React$Component) {
    _inherits(EnhancedComponent, _React$Component);

    function EnhancedComponent(props) {
      _classCallCheck(this, EnhancedComponent);

      var _this = _possibleConstructorReturn(this, (EnhancedComponent.__proto__ || Object.getPrototypeOf(EnhancedComponent)).call(this, props));

      _this.handleClickOutside = _this.handleClickOutside.bind(_this);
      return _this;
    }

    _createClass(EnhancedComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
      }
    }, {
      key: 'handleClickOutside',
      value: function handleClickOutside(e) {
        var domNode = this.__domNode;
        if ((!domNode || !domNode.contains(e.target)) && this.__wrappedInstance && typeof this.__wrappedInstance.handleClickOutside === 'function') {
          this.__wrappedInstance.handleClickOutside(e);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            wrappedRef = _props.wrappedRef,
            rest = _objectWithoutProperties(_props, ['wrappedRef']);

        return React.createElement(WrappedComponent, _extends({}, rest, {
          ref: function ref(c) {
            _this2.__wrappedInstance = c;
            _this2.__domNode = ReactDOM.findDOMNode(c);
            wrappedRef && wrappedRef(c);
          }
        }));
      }
    }]);

    return EnhancedComponent;
  }(React.Component);

  EnhancedComponent.displayName = 'clickOutside(' + componentName + ')';

  return hoistNonReactStatic(EnhancedComponent, WrappedComponent);
};

/***/ }),

/***/ "./node_modules/react-popopo/dist/Popover.js":
/*!***************************************************!*\
  !*** ./node_modules/react-popopo/dist/Popover.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _PopoverStore = __webpack_require__(/*! ./PopoverStore */ "./node_modules/react-popopo/dist/PopoverStore.js");

var _styles = __webpack_require__(/*! ./styles */ "./node_modules/react-popopo/dist/styles.js");

class Popover extends _react.default.PureComponent {
  constructor() {
    super(...arguments);
    (0, _defineProperty2.default)(this, "state", {
      isPopoverShown: false
    });
    (0, _defineProperty2.default)(this, "componentWillUnmount", () => {
      _PopoverStore.popoverStore.unregister(this.hide);
    });
    (0, _defineProperty2.default)(this, "show", e => {
      _PopoverStore.popoverStore.register(this.hide);

      this.setState({
        isPopoverShown: true
      });

      if (this.props.onShow) {
        this.props.onShow(e);
      }
    });
    (0, _defineProperty2.default)(this, "hide", e => {
      this.setState({
        isPopoverShown: false
      });

      if (this.props.onHide) {
        this.props.onHide(e);
      }
    });
    (0, _defineProperty2.default)(this, "toggle", e => {
      e.preventDefault();
      e.stopPropagation();

      if (this.state.isPopoverShown) {
        this.hide(e);

        _PopoverStore.popoverStore.unregister(this.hide);
      } else {
        this.show(e);
      }
    });
  }

  render() {
    var {
      position,
      trigger,
      PopoverContent,
      PopoverTrigger,
      PopoverContainer
    } = this.props;
    var {
      isPopoverShown
    } = this.state;
    return _react.default.createElement(PopoverContainer, {
      position: position,
      active: isPopoverShown
    }, _react.default.createElement(PopoverTrigger, {
      href: "",
      onClick: this.toggle
    }, trigger), _react.default.createElement(PopoverContent, {
      position: position,
      active: isPopoverShown
    }, this.props.children));
  }

}

exports.default = Popover;
(0, _defineProperty2.default)(Popover, "propTypes", {
  children: _propTypes.default.node,
  trigger: _propTypes.default.any.isRequired,
  position: _propTypes.default.oneOf(['top', 'right', 'bottom', 'left']),
  onShow: _propTypes.default.func,
  onHide: _propTypes.default.func,
  PopoverContainer: _propTypes.default.elementType,
  PopoverTrigger: _propTypes.default.elementType,
  PopoverContent: _propTypes.default.elementType
});
(0, _defineProperty2.default)(Popover, "defaultProps", {
  children: [],
  position: 'top',
  onShow: undefined,
  onHide: undefined,
  PopoverContainer: _styles.PopoverContainer,
  PopoverTrigger: _styles.PopoverTrigger,
  PopoverContent: _styles.PopoverContent
});

/***/ }),

/***/ "./node_modules/react-popopo/dist/PopoverStore.js":
/*!********************************************************!*\
  !*** ./node_modules/react-popopo/dist/PopoverStore.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popoverStore = exports.PopoverStore = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

class PopoverStore {
  constructor() {
    (0, _defineProperty2.default)(this, "callback", null);
  }

  hide() {
    this.register(null);
  }

  register(cb) {
    if (this.callback) {
      this.callback();
    }

    this.callback = cb;
  }

  unregister(cb) {
    if (this.callback === cb) {
      this.callback = null;
    }
  }

}

exports.PopoverStore = PopoverStore;
var popoverStore = new PopoverStore();
exports.popoverStore = popoverStore;

/***/ }),

/***/ "./node_modules/react-popopo/dist/PopoverWrapper.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-popopo/dist/PopoverWrapper.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _PopoverStore = __webpack_require__(/*! ./PopoverStore */ "./node_modules/react-popopo/dist/PopoverStore.js");

class PopoverWrapper extends _react.default.PureComponent {
  hidePopovers() {
    _PopoverStore.popoverStore.hide();
  }

  render() {
    return _react.default.createElement("div", (0, _extends2.default)({
      onClick: this.hidePopovers,
      onTouchEnd: this.hidePopovers
    }, this.props), this.props.children);
  }

}

exports.default = PopoverWrapper;
(0, _defineProperty2.default)(PopoverWrapper, "propTypes", {
  children: _propTypes.default.node
});
(0, _defineProperty2.default)(PopoverWrapper, "defaultProps", {
  children: []
});

/***/ }),

/***/ "./node_modules/react-popopo/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/react-popopo/dist/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Popover", {
  enumerable: true,
  get: function get() {
    return _Popover.default;
  }
});
Object.defineProperty(exports, "PopoverWrapper", {
  enumerable: true,
  get: function get() {
    return _PopoverWrapper.default;
  }
});
Object.defineProperty(exports, "PopoverContainer", {
  enumerable: true,
  get: function get() {
    return _styles.PopoverContainer;
  }
});
Object.defineProperty(exports, "PopoverTrigger", {
  enumerable: true,
  get: function get() {
    return _styles.PopoverTrigger;
  }
});
Object.defineProperty(exports, "PopoverContent", {
  enumerable: true,
  get: function get() {
    return _styles.PopoverContent;
  }
});

var _Popover = _interopRequireDefault(__webpack_require__(/*! ./Popover */ "./node_modules/react-popopo/dist/Popover.js"));

var _PopoverWrapper = _interopRequireDefault(__webpack_require__(/*! ./PopoverWrapper */ "./node_modules/react-popopo/dist/PopoverWrapper.js"));

var _styles = __webpack_require__(/*! ./styles */ "./node_modules/react-popopo/dist/styles.js");

/***/ }),

/***/ "./node_modules/react-popopo/dist/styles.js":
/*!**************************************************!*\
  !*** ./node_modules/react-popopo/dist/styles.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverContainer = exports.PopoverContent = exports.PopoverTrigger = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  position: relative;\n  display: inline-flex;\n  box-sizing: border-box;\n\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  box-sizing: border-box;\n  position: absolute;\n  z-index: 10;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);\n  transition: all 0.3s ease 0ms;\n  border-radius: 3px;\n  min-width: 7em;\n  flex-flow: column nowrap;\n  background-color: #000;\n  color: #fff;\n  padding: 5px;\n  visibility: hidden;\n  opacity: 0;\n\n  ", "\n\n  &::before {\n    content: \"\";\n    position: absolute;\n    background: transparent none repeat scroll 0 0;\n    border: 6px solid transparent;\n    transition: all 0.3s ease 0ms;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var PopoverTrigger = _styledComponents.default.a(_templateObject());

exports.PopoverTrigger = PopoverTrigger;

var PopoverContent = _styledComponents.default.div(_templateObject2(), props => props.active && "\n    visibility: visible;\n    opacity: 1;\n    transition-delay: 100ms;\n  ");

exports.PopoverContent = PopoverContent;

var PopoverContainer = _styledComponents.default.div(_templateObject3(), props => props.position === 'top' && "\n    flex-flow: column-reverse nowrap;\n    ".concat(PopoverContent, " {\n      bottom: 0;\n      left: 50%;\n      transform: translateX(-50%) translateY(-50%) translateY(-6px);\n\n      &::before {\n        border-top-color: #000;\n        bottom: -4px;\n        transform: translateX(-50%) translateY(8px);\n        left: 50%;\n    }\n  "), props => props.position === 'bottom' && "\n    flex-flow: column nowrap;\n    ".concat(PopoverContent, " {\n      left: 50%;\n      transform: translateX(-50%) translateY(6px);\n\n      &::before {\n        border-bottom-color: #000;\n        top: -20px;\n        transform: translateX(-50%) translateY(8px);\n        left: 50%;\n      }\n    }\n  "), props => props.position === 'left' && "\n    flex-flow: row-reverse nowrap;\n    ".concat(PopoverContent, " {\n      top: 50%;\n      transform: translateY(-50%) translateX(-100%);\n\n      &::before {\n        border-left-color: #000;\n        right: -6px;\n        transform: translateX(50%) translateY(-6px);\n        top: 50%;\n      }\n    }\n  "), props => props.position === 'right' && "\n    flex-flow: row nowrap;\n    ".concat(PopoverContent, " {\n      top: 50%;\n      transform: translateY(-50%) translateX(6px);\n\n      &::before {\n        border-right-color: #000;\n        left: -6px;\n        transform: translateX(-50%) translateY(-6px);\n        top: 50%;\n      }\n    }\n  "));

exports.PopoverContainer = PopoverContainer;

/***/ }),

/***/ "./node_modules/react-trello/dist/actions/BoardActions.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-trello/dist/actions/BoardActions.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addLane = exports.loadBoard = void 0;

var _reduxActions = __webpack_require__(/*! redux-actions */ "./node_modules/redux-actions/es/index.js");

const loadBoard = (0, _reduxActions.createAction)('LOAD_BOARD');
exports.loadBoard = loadBoard;
const addLane = (0, _reduxActions.createAction)('ADD_LANE');
exports.addLane = addLane;

/***/ }),

/***/ "./node_modules/react-trello/dist/actions/LaneActions.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-trello/dist/actions/LaneActions.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeLane = exports.moveLane = exports.paginateLane = exports.updateLane = exports.updateLanes = exports.updateCards = exports.moveCardAcrossLanes = exports.removeCard = exports.addCard = void 0;

var _reduxActions = __webpack_require__(/*! redux-actions */ "./node_modules/redux-actions/es/index.js");

const addCard = (0, _reduxActions.createAction)('ADD_CARD');
exports.addCard = addCard;
const removeCard = (0, _reduxActions.createAction)('REMOVE_CARD');
exports.removeCard = removeCard;
const moveCardAcrossLanes = (0, _reduxActions.createAction)('MOVE_CARD');
exports.moveCardAcrossLanes = moveCardAcrossLanes;
const updateCards = (0, _reduxActions.createAction)('UPDATE_CARDS');
exports.updateCards = updateCards;
const updateLanes = (0, _reduxActions.createAction)('UPDATE_LANES');
exports.updateLanes = updateLanes;
const updateLane = (0, _reduxActions.createAction)('UPDATE_LANE');
exports.updateLane = updateLane;
const paginateLane = (0, _reduxActions.createAction)('PAGINATE_LANE');
exports.paginateLane = paginateLane;
const moveLane = (0, _reduxActions.createAction)('MOVE_LANE');
exports.moveLane = moveLane;
const removeLane = (0, _reduxActions.createAction)('REMOVE_LANE');
exports.removeLane = removeLane;

/***/ }),

/***/ "./node_modules/react-trello/dist/components/AddCardLink.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-trello/dist/components/AddCardLink.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Base = __webpack_require__(/*! ../styles/Base */ "./node_modules/react-trello/dist/styles/Base.js");

var _default = ({
  onClick,
  t
}) => _react.default.createElement(_Base.AddCardLink, {
  onClick: onClick
}, t('Click to add card'));

exports.default = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/components/Card.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-trello/dist/components/Card.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Base = __webpack_require__(/*! ../styles/Base */ "./node_modules/react-trello/dist/styles/Base.js");

var _Tag = _interopRequireDefault(__webpack_require__(/*! ./Card/Tag */ "./node_modules/react-trello/dist/components/Card/Tag.js"));

var _DeleteButton = _interopRequireDefault(__webpack_require__(/*! ../widgets/DeleteButton */ "./node_modules/react-trello/dist/widgets/DeleteButton.js"));

class Card extends _react.Component {
  constructor(...args) {
    super(...args);
    (0, _defineProperty2.default)(this, "onDelete", e => {
      this.props.onDelete();
      e.stopPropagation();
    });
  }

  render() {
    const _this$props = this.props,
          showDeleteButton = _this$props.showDeleteButton,
          style = _this$props.style,
          tagStyle = _this$props.tagStyle,
          onClick = _this$props.onClick,
          onDelete = _this$props.onDelete,
          className = _this$props.className,
          id = _this$props.id,
          title = _this$props.title,
          label = _this$props.label,
          description = _this$props.description,
          tags = _this$props.tags,
          cardDraggable = _this$props.cardDraggable;
    return _react.default.createElement(_Base.MovableCardWrapper, {
      "data-id": id,
      onClick: onClick,
      style: style,
      className: className
    }, _react.default.createElement(_Base.CardHeader, null, _react.default.createElement(_Base.CardTitle, {
      draggable: cardDraggable
    }, title), _react.default.createElement(_Base.CardRightContent, null, label), showDeleteButton && _react.default.createElement(_DeleteButton.default, {
      onClick: this.onDelete
    })), _react.default.createElement(_Base.Detail, null, description), tags && tags.length > 0 && _react.default.createElement(_Base.Footer, null, tags.map(tag => _react.default.createElement(_Tag.default, (0, _extends2.default)({
      key: tag.title
    }, tag, {
      tagStyle: tagStyle
    })))));
  }

}

Card.propTypes = {
  showDeleteButton: _propTypes.default.bool,
  onDelete: _propTypes.default.func,
  onClick: _propTypes.default.func,
  style: _propTypes.default.object,
  tagStyle: _propTypes.default.object,
  className: _propTypes.default.string,
  id: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  label: _propTypes.default.string,
  description: _propTypes.default.string,
  tags: _propTypes.default.array
};
Card.defaultProps = {
  showDeleteButton: true,
  onDelete: () => {},
  onClick: () => {},
  style: {},
  tagStyle: {},
  title: 'no title',
  description: '',
  label: '',
  tags: [],
  className: ''
};
var _default = Card;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/components/Card/Tag.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-trello/dist/components/Card/Tag.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Base = __webpack_require__(/*! ../../styles/Base */ "./node_modules/react-trello/dist/styles/Base.js");

class Tag extends _react.Component {
  render() {
    const _this$props = this.props,
          title = _this$props.title,
          color = _this$props.color,
          bgcolor = _this$props.bgcolor,
          tagStyle = _this$props.tagStyle,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["title", "color", "bgcolor", "tagStyle"]);
    const style = (0, _objectSpread2.default)({
      color: color || 'white',
      backgroundColor: bgcolor || 'orange'
    }, tagStyle);
    return _react.default.createElement(_Base.TagSpan, (0, _extends2.default)({
      style: style
    }, otherProps), title);
  }

}

Tag.propTypes = {
  title: _propTypes.default.string.isRequired,
  color: _propTypes.default.string,
  bgcolor: _propTypes.default.string,
  tagStyle: _propTypes.default.object
};
var _default = Tag;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/components/Lane/LaneFooter.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-trello/dist/components/Lane/LaneFooter.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Base = __webpack_require__(/*! ../../styles/Base */ "./node_modules/react-trello/dist/styles/Base.js");

var _Elements = __webpack_require__(/*! ../../styles/Elements */ "./node_modules/react-trello/dist/styles/Elements.js");

var _default = ({
  onClick,
  collapsed
}) => _react.default.createElement(_Base.LaneFooter, {
  onClick: onClick
}, collapsed ? _react.default.createElement(_Elements.ExpandBtn, null) : _react.default.createElement(_Elements.CollapseBtn, null));

exports.default = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/components/Lane/LaneHeader.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-trello/dist/components/Lane/LaneHeader.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _InlineInput = _interopRequireDefault(__webpack_require__(/*! ../../widgets/InlineInput */ "./node_modules/react-trello/dist/widgets/InlineInput.js"));

var _Base = __webpack_require__(/*! ../../styles/Base */ "./node_modules/react-trello/dist/styles/Base.js");

var _LaneMenu = _interopRequireDefault(__webpack_require__(/*! ./LaneHeader/LaneMenu */ "./node_modules/react-trello/dist/components/Lane/LaneHeader/LaneMenu.js"));

const LaneHeaderComponent = ({
  updateTitle,
  canAddLanes,
  onDelete,
  onDoubleClick,
  editLaneTitle,
  label,
  title,
  titleStyle,
  labelStyle,
  t,
  laneDraggable
}) => {
  return _react.default.createElement(_Base.LaneHeader, {
    onDoubleClick: onDoubleClick,
    editLaneTitle: editLaneTitle
  }, _react.default.createElement(_Base.Title, {
    draggable: laneDraggable,
    style: titleStyle
  }, editLaneTitle ? _react.default.createElement(_InlineInput.default, {
    value: title,
    border: true,
    placeholder: t('placeholder.title'),
    resize: "vertical",
    onSave: updateTitle
  }) : title), label && _react.default.createElement(_Base.RightContent, null, _react.default.createElement("span", {
    style: labelStyle
  }, label)), canAddLanes && _react.default.createElement(_LaneMenu.default, {
    t: t,
    onDelete: onDelete
  }));
};

LaneHeaderComponent.propTypes = {
  updateTitle: _propTypes.default.func,
  editLaneTitle: _propTypes.default.bool,
  canAddLanes: _propTypes.default.bool,
  laneDraggable: _propTypes.default.bool,
  label: _propTypes.default.string,
  title: _propTypes.default.string,
  onDelete: _propTypes.default.func,
  onDoubleClick: _propTypes.default.func,
  t: _propTypes.default.func.isRequired
};
LaneHeaderComponent.defaultProps = {
  updateTitle: () => {},
  editLaneTitle: false,
  canAddLanes: false
};
var _default = LaneHeaderComponent;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/components/Lane/LaneHeader/LaneMenu.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-trello/dist/components/Lane/LaneHeader/LaneMenu.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactPopopo = __webpack_require__(/*! react-popopo */ "./node_modules/react-popopo/dist/index.js");

var _Base = __webpack_require__(/*! ../../../styles/Base */ "./node_modules/react-trello/dist/styles/Base.js");

var _Elements = __webpack_require__(/*! ../../../styles/Elements */ "./node_modules/react-trello/dist/styles/Elements.js");

const TEST = _propTypes.default.elementType;

const LaneMenu = ({
  t,
  onDelete
}) => _react.default.createElement(_reactPopopo.Popover, {
  position: "bottom",
  PopoverContainer: _Base.CustomPopoverContainer,
  PopoverContent: _Base.CustomPopoverContent,
  trigger: _react.default.createElement(_Elements.MenuButton, null, "\u22EE")
}, _react.default.createElement(_Elements.LaneMenuHeader, null, _react.default.createElement(_Elements.LaneMenuTitle, null, t('Lane actions')), _react.default.createElement(_Elements.DeleteWrapper, null, _react.default.createElement(_Elements.GenDelButton, null, "\u2716"))), _react.default.createElement(_Elements.LaneMenuContent, null, _react.default.createElement(_Elements.LaneMenuItem, {
  onClick: onDelete
}, t('Delete lane'))));

var _default = LaneMenu;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/components/Loader.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-trello/dist/components/Loader.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Loader = __webpack_require__(/*! ../styles/Loader */ "./node_modules/react-trello/dist/styles/Loader.js");

const Loader = () => _react.default.createElement(_Loader.LoaderDiv, null, _react.default.createElement(_Loader.LoadingBar, null), _react.default.createElement(_Loader.LoadingBar, null), _react.default.createElement(_Loader.LoadingBar, null), _react.default.createElement(_Loader.LoadingBar, null));

var _default = Loader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/components/NewCardForm.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-trello/dist/components/NewCardForm.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Base = __webpack_require__(/*! ../styles/Base */ "./node_modules/react-trello/dist/styles/Base.js");

var _Elements = __webpack_require__(/*! ../styles/Elements */ "./node_modules/react-trello/dist/styles/Elements.js");

var _EditableLabel = _interopRequireDefault(__webpack_require__(/*! ../widgets/EditableLabel */ "./node_modules/react-trello/dist/widgets/EditableLabel.js"));

class NewCardForm extends _react.Component {
  constructor(...args) {
    super(...args);
    (0, _defineProperty2.default)(this, "updateField", (field, value) => {
      this.setState({
        [field]: value
      });
    });
    (0, _defineProperty2.default)(this, "handleAdd", () => {
      this.props.onAdd(this.state);
    });
  }

  render() {
    const _this$props = this.props,
          onCancel = _this$props.onCancel,
          t = _this$props.t;
    return _react.default.createElement(_Base.CardForm, null, _react.default.createElement(_Base.CardWrapper, null, _react.default.createElement(_Base.CardHeader, null, _react.default.createElement(_Base.CardTitle, null, _react.default.createElement(_EditableLabel.default, {
      placeholder: t('placeholder.title'),
      onChange: val => this.updateField('title', val),
      autoFocus: true
    })), _react.default.createElement(_Base.CardRightContent, null, _react.default.createElement(_EditableLabel.default, {
      placeholder: t('placeholder.label'),
      onChange: val => this.updateField('label', val)
    }))), _react.default.createElement(_Base.Detail, null, _react.default.createElement(_EditableLabel.default, {
      placeholder: t('placeholder.description'),
      onChange: val => this.updateField('description', val)
    }))), _react.default.createElement(_Elements.AddButton, {
      onClick: this.handleAdd
    }, t('button.Add card')), _react.default.createElement(_Elements.CancelButton, {
      onClick: onCancel
    }, t('button.Cancel')));
  }

}

NewCardForm.propTypes = {
  onCancel: _propTypes.default.func.isRequired,
  onAdd: _propTypes.default.func.isRequired,
  t: _propTypes.default.func.isRequired
};
NewCardForm.defaultProps = {};
var _default = NewCardForm;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/components/NewLaneForm.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-trello/dist/components/NewLaneForm.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Base = __webpack_require__(/*! ../styles/Base */ "./node_modules/react-trello/dist/styles/Base.js");

var _Elements = __webpack_require__(/*! ../styles/Elements */ "./node_modules/react-trello/dist/styles/Elements.js");

var _NewLaneTitleEditor = _interopRequireDefault(__webpack_require__(/*! ../widgets/NewLaneTitleEditor */ "./node_modules/react-trello/dist/widgets/NewLaneTitleEditor.js"));

var _reactClickOutside = _interopRequireDefault(__webpack_require__(/*! react-click-outside */ "./node_modules/react-click-outside/dist/index.js"));

class NewLane extends _react.Component {
  constructor(...args) {
    super(...args);
    (0, _defineProperty2.default)(this, "handleSubmit", () => {
      this.props.onAdd({
        title: this.getValue()
      });
    });
    (0, _defineProperty2.default)(this, "getValue", () => this.refInput.getValue());
    (0, _defineProperty2.default)(this, "onClickOutside", (a, b, c) => {
      if (this.getValue().length > 0) {
        this.handleSubmit();
      } else {
        this.props.onCancel();
      }
    });
  }

  render() {
    const _this$props = this.props,
          onCancel = _this$props.onCancel,
          t = _this$props.t;
    return _react.default.createElement(_reactClickOutside.default, {
      onClickOutside: this.onClickOutside
    }, _react.default.createElement(_Base.Section, null, _react.default.createElement(_Base.LaneTitle, null, _react.default.createElement(_NewLaneTitleEditor.default, {
      ref: _ref => this.refInput = _ref,
      placeholder: t('placeholder.title'),
      onCancel: this.props.onCancel,
      onSave: this.handleSubmit,
      resize: "vertical",
      border: true,
      autoFocus: true
    })), _react.default.createElement(_Base.NewLaneButtons, null, _react.default.createElement(_Elements.AddButton, {
      onClick: this.handleSubmit
    }, t('button.Add lane')), _react.default.createElement(_Elements.CancelButton, {
      onClick: onCancel
    }, t('button.Cancel')))));
  }

}

NewLane.propTypes = {
  onCancel: _propTypes.default.func.isRequired,
  onAdd: _propTypes.default.func.isRequired,
  t: _propTypes.default.func.isRequired
};
NewLane.defaultProps = {};
var _default = NewLane;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/components/NewLaneSection.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-trello/dist/components/NewLaneSection.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Base = __webpack_require__(/*! ../styles/Base */ "./node_modules/react-trello/dist/styles/Base.js");

var _Elements = __webpack_require__(/*! ../styles/Elements */ "./node_modules/react-trello/dist/styles/Elements.js");

var _default = ({
  t,
  onClick
}) => _react.default.createElement(_Base.NewLaneSection, null, _react.default.createElement(_Elements.AddLaneLink, {
  t: t,
  onClick: onClick
}, t('Add another lane')));

exports.default = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/components/index.js":
/*!************************************************************!*\
  !*** ./node_modules/react-trello/dist/components/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _LaneHeader = _interopRequireDefault(__webpack_require__(/*! ./Lane/LaneHeader */ "./node_modules/react-trello/dist/components/Lane/LaneHeader.js"));

var _LaneFooter = _interopRequireDefault(__webpack_require__(/*! ./Lane/LaneFooter */ "./node_modules/react-trello/dist/components/Lane/LaneFooter.js"));

var _Card = _interopRequireDefault(__webpack_require__(/*! ./Card */ "./node_modules/react-trello/dist/components/Card.js"));

var _Loader = _interopRequireDefault(__webpack_require__(/*! ./Loader */ "./node_modules/react-trello/dist/components/Loader.js"));

var _NewLaneForm = _interopRequireDefault(__webpack_require__(/*! ./NewLaneForm */ "./node_modules/react-trello/dist/components/NewLaneForm.js"));

var _NewCardForm = _interopRequireDefault(__webpack_require__(/*! ./NewCardForm */ "./node_modules/react-trello/dist/components/NewCardForm.js"));

var _AddCardLink = _interopRequireDefault(__webpack_require__(/*! ./AddCardLink */ "./node_modules/react-trello/dist/components/AddCardLink.js"));

var _NewLaneSection = _interopRequireDefault(__webpack_require__(/*! ./NewLaneSection */ "./node_modules/react-trello/dist/components/NewLaneSection.js"));

var _Base = __webpack_require__(/*! ../styles/Base */ "./node_modules/react-trello/dist/styles/Base.js");

var _default = {
  GlobalStyle: _Base.GlobalStyle,
  BoardWrapper: _Base.BoardWrapper,
  Loader: _Loader.default,
  ScrollableLane: _Base.ScrollableLane,
  LaneHeader: _LaneHeader.default,
  LaneFooter: _LaneFooter.default,
  Section: _Base.Section,
  NewLaneForm: _NewLaneForm.default,
  NewLaneSection: _NewLaneSection.default,
  NewCardForm: _NewCardForm.default,
  Card: _Card.default,
  AddCardLink: _AddCardLink.default
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/controllers/Board.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-trello/dist/controllers/Board.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-trello/node_modules/react-redux/es/index.js");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reduxLogger = _interopRequireDefault(__webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js"));

var _v = _interopRequireDefault(__webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js"));

var _BoardContainer = _interopRequireDefault(__webpack_require__(/*! ./BoardContainer */ "./node_modules/react-trello/dist/controllers/BoardContainer.js"));

var _createTranslate = _interopRequireDefault(__webpack_require__(/*! ../helpers/createTranslate */ "./node_modules/react-trello/dist/helpers/createTranslate.js"));

var _BoardReducer = _interopRequireDefault(__webpack_require__(/*! ../reducers/BoardReducer */ "./node_modules/react-trello/dist/reducers/BoardReducer.js"));

const middlewares = process.env.REDUX_LOGGING ? [_reduxLogger.default] : [];

class Board extends _react.Component {
  constructor({
    id
  }) {
    super();
    (0, _defineProperty2.default)(this, "getStore", () => {
      //When you create multiple boards, unique stores are created for isolation
      return (0, _redux.createStore)(_BoardReducer.default, (0, _redux.applyMiddleware)(...middlewares));
    });
    this.store = this.getStore();
    this.id = id || (0, _v.default)();
  }

  render() {
    const _this$props = this.props,
          id = _this$props.id,
          className = _this$props.className,
          components = _this$props.components;
    const allClassNames = (0, _classnames.default)('react-trello-board', className || '');
    return _react.default.createElement(_reactRedux.Provider, {
      store: this.store
    }, _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(components.GlobalStyle, null), _react.default.createElement(_BoardContainer.default, (0, _extends2.default)({
      id: this.id
    }, this.props, {
      className: allClassNames
    }))));
  }

}

exports.default = Board;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node-libs-browser/node_modules/process/browser.js */ "./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/react-trello/dist/controllers/BoardContainer.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-trello/dist/controllers/BoardContainer.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-trello/node_modules/react-redux/es/index.js");

var _Container = _interopRequireDefault(__webpack_require__(/*! ../dnd/Container */ "./node_modules/react-trello/dist/dnd/Container.js"));

var _Draggable = _interopRequireDefault(__webpack_require__(/*! ../dnd/Draggable */ "./node_modules/react-trello/dist/dnd/Draggable.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _pick = _interopRequireDefault(__webpack_require__(/*! lodash/pick */ "./node_modules/lodash/pick.js"));

var _isEqual = _interopRequireDefault(__webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js"));

var _Lane = _interopRequireDefault(__webpack_require__(/*! ./Lane */ "./node_modules/react-trello/dist/controllers/Lane.js"));

var _reactPopopo = __webpack_require__(/*! react-popopo */ "./node_modules/react-popopo/dist/index.js");

var boardActions = _interopRequireWildcard(__webpack_require__(/*! ../actions/BoardActions */ "./node_modules/react-trello/dist/actions/BoardActions.js"));

var laneActions = _interopRequireWildcard(__webpack_require__(/*! ../actions/LaneActions */ "./node_modules/react-trello/dist/actions/LaneActions.js"));

class BoardContainer extends _react.Component {
  constructor(...args) {
    super(...args);
    (0, _defineProperty2.default)(this, "state", {
      addLaneMode: false
    });
    (0, _defineProperty2.default)(this, "onDragStart", ({
      payload
    }) => {
      const handleLaneDragStart = this.props.handleLaneDragStart;
      handleLaneDragStart(payload.id);
    });
    (0, _defineProperty2.default)(this, "onLaneDrop", ({
      removedIndex,
      addedIndex,
      payload
    }) => {
      const _this$props = this.props,
            actions = _this$props.actions,
            handleLaneDragEnd = _this$props.handleLaneDragEnd;

      if (removedIndex !== addedIndex) {
        actions.moveLane({
          oldIndex: removedIndex,
          newIndex: addedIndex
        });
        handleLaneDragEnd(removedIndex, addedIndex, payload);
      }
    });
    (0, _defineProperty2.default)(this, "getCardDetails", (laneId, cardIndex) => {
      return this.props.reducerData.lanes.find(lane => lane.id === laneId).cards[cardIndex];
    });
    (0, _defineProperty2.default)(this, "getLaneDetails", index => {
      return this.props.reducerData.lanes[index];
    });
    (0, _defineProperty2.default)(this, "wireEventBus", () => {
      const _this$props2 = this.props,
            actions = _this$props2.actions,
            eventBusHandle = _this$props2.eventBusHandle;
      let eventBus = {
        publish: event => {
          switch (event.type) {
            case 'ADD_CARD':
              return actions.addCard({
                laneId: event.laneId,
                card: event.card
              });

            case 'REMOVE_CARD':
              return actions.removeCard({
                laneId: event.laneId,
                cardId: event.cardId
              });

            case 'REFRESH_BOARD':
              return actions.loadBoard(event.data);

            case 'MOVE_CARD':
              return actions.moveCardAcrossLanes({
                fromLaneId: event.fromLaneId,
                toLaneId: event.toLaneId,
                cardId: event.cardId,
                index: event.index
              });

            case 'UPDATE_CARDS':
              return actions.updateCards({
                laneId: event.laneId,
                cards: event.cards
              });

            case 'UPDATE_LANES':
              return actions.updateLanes(event.lanes);

            case 'UPDATE_LANE':
              return actions.updateLane(event.lane);
          }
        }
      };
      eventBusHandle(eventBus);
    });
    (0, _defineProperty2.default)(this, "hideEditableLane", () => {
      this.setState({
        addLaneMode: false
      });
    });
    (0, _defineProperty2.default)(this, "showEditableLane", () => {
      this.setState({
        addLaneMode: true
      });
    });
    (0, _defineProperty2.default)(this, "addNewLane", params => {
      this.hideEditableLane();
      this.props.actions.addLane(params);
      this.props.onLaneAdd(params);
    });
  }

  componentDidMount() {
    const _this$props3 = this.props,
          actions = _this$props3.actions,
          eventBusHandle = _this$props3.eventBusHandle;
    actions.loadBoard(this.props.data);

    if (eventBusHandle) {
      this.wireEventBus();
    }
  }

  componentWillReceiveProps(nextProps) {
    // nextProps.data changes when external Board input props change and nextProps.reducerData changes due to event bus or UI changes
    const _this$props4 = this.props,
          data = _this$props4.data,
          reducerData = _this$props4.reducerData,
          onDataChange = _this$props4.onDataChange;

    if (nextProps.reducerData && !(0, _isEqual.default)(reducerData, nextProps.reducerData)) {
      onDataChange(nextProps.reducerData);
    }

    if (nextProps.data && !(0, _isEqual.default)(nextProps.data, data)) {
      this.props.actions.loadBoard(nextProps.data);
      onDataChange(nextProps.data);
    }
  }

  get groupName() {
    const id = this.props.id;
    return "TrelloBoard".concat(id);
  }

  render() {
    const _this$props5 = this.props,
          id = _this$props5.id,
          components = _this$props5.components,
          reducerData = _this$props5.reducerData,
          draggable = _this$props5.draggable,
          laneDraggable = _this$props5.laneDraggable,
          laneDragClass = _this$props5.laneDragClass,
          laneDropClass = _this$props5.laneDropClass,
          style = _this$props5.style,
          onDataChange = _this$props5.onDataChange,
          onCardAdd = _this$props5.onCardAdd,
          onCardClick = _this$props5.onCardClick,
          onBeforeCardDelete = _this$props5.onBeforeCardDelete,
          onCardDelete = _this$props5.onCardDelete,
          onLaneScroll = _this$props5.onLaneScroll,
          onLaneClick = _this$props5.onLaneClick,
          onLaneAdd = _this$props5.onLaneAdd,
          onLaneDelete = _this$props5.onLaneDelete,
          onLaneUpdate = _this$props5.onLaneUpdate,
          editable = _this$props5.editable,
          canAddLanes = _this$props5.canAddLanes,
          laneStyle = _this$props5.laneStyle,
          onCardMoveAcrossLanes = _this$props5.onCardMoveAcrossLanes,
          t = _this$props5.t,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props5, ["id", "components", "reducerData", "draggable", "laneDraggable", "laneDragClass", "laneDropClass", "style", "onDataChange", "onCardAdd", "onCardClick", "onBeforeCardDelete", "onCardDelete", "onLaneScroll", "onLaneClick", "onLaneAdd", "onLaneDelete", "onLaneUpdate", "editable", "canAddLanes", "laneStyle", "onCardMoveAcrossLanes", "t"]);
    const addLaneMode = this.state.addLaneMode; // Stick to whitelisting attributes to segregate board and lane props

    const passthroughProps = (0, _pick.default)(this.props, ['onCardMoveAcrossLanes', 'onLaneScroll', 'onLaneDelete', 'onLaneUpdate', 'onCardClick', 'onBeforeCardDelete', 'onCardDelete', 'onCardAdd', 'onLaneClick', 'laneSortFunction', 'draggable', 'laneDraggable', 'cardDraggable', 'collapsibleLanes', 'canAddLanes', 'hideCardDeleteIcon', 'tagStyle', 'handleDragStart', 'handleDragEnd', 'cardDragClass', 'editLaneTitle', 't']);
    return _react.default.createElement(components.BoardWrapper, (0, _extends2.default)({
      style: style
    }, otherProps, {
      draggable: false
    }), _react.default.createElement(_reactPopopo.PopoverWrapper, null, _react.default.createElement(_Container.default, {
      orientation: "horizontal",
      onDragStart: this.onDragStart,
      dragClass: laneDragClass,
      dropClass: laneDropClass,
      onDrop: this.onLaneDrop,
      lockAxis: "x",
      getChildPayload: index => this.getLaneDetails(index),
      groupName: this.groupName
    }, reducerData.lanes.map((lane, index) => {
      const id = lane.id,
            droppable = lane.droppable,
            otherProps = (0, _objectWithoutProperties2.default)(lane, ["id", "droppable"]);

      const laneToRender = _react.default.createElement(_Lane.default, (0, _extends2.default)({
        key: id,
        boardId: this.groupName,
        components: components,
        id: id,
        getCardDetails: this.getCardDetails,
        index: index,
        droppable: droppable === undefined ? true : droppable,
        style: laneStyle || lane.style || {},
        labelStyle: lane.labelStyle || {},
        cardStyle: this.props.cardStyle || lane.cardStyle,
        editable: editable && !lane.disallowAddingCard
      }, otherProps, passthroughProps));

      return draggable && laneDraggable ? _react.default.createElement(_Draggable.default, {
        key: lane.id
      }, laneToRender) : laneToRender;
    }))), canAddLanes && _react.default.createElement(_Container.default, {
      orientation: "horizontal"
    }, editable && !addLaneMode ? _react.default.createElement(components.NewLaneSection, {
      t: t,
      onClick: this.showEditableLane
    }) : addLaneMode && _react.default.createElement(components.NewLaneForm, {
      onCancel: this.hideEditableLane,
      onAdd: this.addNewLane,
      t: t
    })));
  }

}

BoardContainer.propTypes = {
  id: _propTypes.default.string,
  components: _propTypes.default.object,
  actions: _propTypes.default.object,
  data: _propTypes.default.object.isRequired,
  reducerData: _propTypes.default.object,
  onDataChange: _propTypes.default.func,
  eventBusHandle: _propTypes.default.func,
  onLaneScroll: _propTypes.default.func,
  onCardClick: _propTypes.default.func,
  onBeforeCardDelete: _propTypes.default.func,
  onCardDelete: _propTypes.default.func,
  onCardAdd: _propTypes.default.func,
  onLaneAdd: _propTypes.default.func,
  onLaneDelete: _propTypes.default.func,
  onLaneClick: _propTypes.default.func,
  onLaneUpdate: _propTypes.default.func,
  laneSortFunction: _propTypes.default.func,
  draggable: _propTypes.default.bool,
  collapsibleLanes: _propTypes.default.bool,
  editable: _propTypes.default.bool,
  canAddLanes: _propTypes.default.bool,
  hideCardDeleteIcon: _propTypes.default.bool,
  handleDragStart: _propTypes.default.func,
  handleDragEnd: _propTypes.default.func,
  handleLaneDragStart: _propTypes.default.func,
  handleLaneDragEnd: _propTypes.default.func,
  style: _propTypes.default.object,
  tagStyle: _propTypes.default.object,
  laneDraggable: _propTypes.default.bool,
  cardDraggable: _propTypes.default.bool,
  cardDragClass: _propTypes.default.string,
  laneDragClass: _propTypes.default.string,
  laneDropClass: _propTypes.default.string,
  onCardMoveAcrossLanes: _propTypes.default.func.isRequired,
  t: _propTypes.default.func.isRequired
};
BoardContainer.defaultProps = {
  t: v => v,
  onDataChange: () => {},
  handleDragStart: () => {},
  handleDragEnd: () => {},
  handleLaneDragStart: () => {},
  handleLaneDragEnd: () => {},
  onLaneAdd: () => {},
  onLaneDelete: () => {},
  onCardMoveAcrossLanes: () => {},
  onLaneUpdate: () => {},
  editable: false,
  canAddLanes: false,
  hideCardDeleteIcon: false,
  draggable: false,
  collapsibleLanes: false,
  laneDraggable: true,
  cardDraggable: true,
  cardDragClass: 'react_trello_dragClass',
  laneDragClass: 'react_trello_dragLaneClass',
  laneDropClass: ''
};

const mapStateToProps = state => {
  return state.lanes ? {
    reducerData: state
  } : {};
};

const mapDispatchToProps = dispatch => ({
  actions: (0, _redux.bindActionCreators)((0, _objectSpread2.default)({}, boardActions, laneActions), dispatch)
});

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BoardContainer);

exports.default = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/controllers/Lane.js":
/*!************************************************************!*\
  !*** ./node_modules/react-trello/dist/controllers/Lane.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-trello/node_modules/react-redux/es/index.js");

var _isEqual = _interopRequireDefault(__webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js"));

var _cloneDeep = _interopRequireDefault(__webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js"));

var _pick = _interopRequireDefault(__webpack_require__(/*! lodash/pick */ "./node_modules/lodash/pick.js"));

var _v = _interopRequireDefault(__webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js"));

var _Container = _interopRequireDefault(__webpack_require__(/*! ../dnd/Container */ "./node_modules/react-trello/dist/dnd/Container.js"));

var _Draggable = _interopRequireDefault(__webpack_require__(/*! ../dnd/Draggable */ "./node_modules/react-trello/dist/dnd/Draggable.js"));

var laneActions = _interopRequireWildcard(__webpack_require__(/*! ../actions/LaneActions */ "./node_modules/react-trello/dist/actions/LaneActions.js"));

class Lane extends _react.Component {
  constructor(...args) {
    super(...args);
    (0, _defineProperty2.default)(this, "state", {
      loading: false,
      currentPage: this.props.currentPage,
      addCardMode: false,
      collapsed: false,
      isDraggingOver: false
    });
    (0, _defineProperty2.default)(this, "handleScroll", evt => {
      const node = evt.target;
      const elemScrollPosition = node.scrollHeight - node.scrollTop - node.clientHeight;
      const onLaneScroll = this.props.onLaneScroll;

      if (elemScrollPosition <= 0 && onLaneScroll && !this.state.loading) {
        const currentPage = this.state.currentPage;
        this.setState({
          loading: true
        });
        const nextPage = currentPage + 1;
        onLaneScroll(nextPage, this.props.id).then(moreCards => {
          if (!moreCards || moreCards.length === 0) {
            // if no cards present, stop retrying until user action
            node.scrollTop = node.scrollTop - 100;
          } else {
            this.props.actions.paginateLane({
              laneId: this.props.id,
              newCards: moreCards,
              nextPage: nextPage
            });
          }

          this.setState({
            loading: false
          });
        });
      }
    });
    (0, _defineProperty2.default)(this, "laneDidMount", node => {
      if (node) {
        node.addEventListener('scroll', this.handleScroll);
      }
    });
    (0, _defineProperty2.default)(this, "removeCard", cardId => {
      if (this.props.onBeforeCardDelete && typeof this.props.onBeforeCardDelete === 'function') {
        this.props.onBeforeCardDelete(() => {
          this.props.onCardDelete && this.props.onCardDelete(cardId, this.props.id);
          this.props.actions.removeCard({
            laneId: this.props.id,
            cardId: cardId
          });
        });
      } else {
        this.props.onCardDelete && this.props.onCardDelete(cardId, this.props.id);
        this.props.actions.removeCard({
          laneId: this.props.id,
          cardId: cardId
        });
      }
    });
    (0, _defineProperty2.default)(this, "handleCardClick", (e, card) => {
      const onCardClick = this.props.onCardClick;
      onCardClick && onCardClick(card.id, card.metadata, card.laneId);
      e.stopPropagation();
    });
    (0, _defineProperty2.default)(this, "showEditableCard", () => {
      this.setState({
        addCardMode: true
      });
    });
    (0, _defineProperty2.default)(this, "hideEditableCard", () => {
      this.setState({
        addCardMode: false
      });
    });
    (0, _defineProperty2.default)(this, "addNewCard", params => {
      const laneId = this.props.id;
      const id = (0, _v.default)();
      this.hideEditableCard();
      let card = (0, _objectSpread2.default)({
        id
      }, params);
      this.props.actions.addCard({
        laneId,
        card
      });
      this.props.onCardAdd(card, laneId);
    });
    (0, _defineProperty2.default)(this, "onDragStart", ({
      payload
    }) => {
      const handleDragStart = this.props.handleDragStart;
      handleDragStart && handleDragStart(payload.id, payload.laneId);
    });
    (0, _defineProperty2.default)(this, "shouldAcceptDrop", sourceContainerOptions => {
      return this.props.droppable && sourceContainerOptions.groupName === this.groupName;
    });
    (0, _defineProperty2.default)(this, "onDragEnd", (laneId, result) => {
      const handleDragEnd = this.props.handleDragEnd;
      const addedIndex = result.addedIndex,
            payload = result.payload;

      if (this.state.isDraggingOver) {
        this.setState({
          isDraggingOver: false
        });
      }

      if (addedIndex != null) {
        const newCard = (0, _objectSpread2.default)({}, (0, _cloneDeep.default)(payload), {
          laneId
        });
        const response = handleDragEnd ? handleDragEnd(payload.id, payload.laneId, laneId, addedIndex, newCard) : true;

        if (response === undefined || !!response) {
          this.props.actions.moveCardAcrossLanes({
            fromLaneId: payload.laneId,
            toLaneId: laneId,
            cardId: payload.id,
            index: addedIndex
          });
          this.props.onCardMoveAcrossLanes(payload.laneId, laneId, payload.id, addedIndex);
        }

        return response;
      }
    });
    (0, _defineProperty2.default)(this, "renderDragContainer", isDraggingOver => {
      const _this$props = this.props,
            id = _this$props.id,
            cards = _this$props.cards,
            laneSortFunction = _this$props.laneSortFunction,
            editable = _this$props.editable,
            hideCardDeleteIcon = _this$props.hideCardDeleteIcon,
            cardDraggable = _this$props.cardDraggable,
            cardDragClass = _this$props.cardDragClass,
            cardDropClass = _this$props.cardDropClass,
            tagStyle = _this$props.tagStyle,
            cardStyle = _this$props.cardStyle,
            components = _this$props.components,
            t = _this$props.t;
      const _this$state = this.state,
            addCardMode = _this$state.addCardMode,
            collapsed = _this$state.collapsed;
      const showableCards = collapsed ? [] : cards;
      const cardList = this.sortCards(showableCards, laneSortFunction).map((card, idx) => {
        const onDeleteCard = () => this.removeCard(card.id);

        const cardToRender = _react.default.createElement(components.Card, (0, _extends2.default)({
          key: card.id,
          index: idx,
          style: card.style || cardStyle,
          className: "react-trello-card",
          onDelete: onDeleteCard,
          onClick: e => this.handleCardClick(e, card),
          showDeleteButton: !hideCardDeleteIcon,
          tagStyle: tagStyle,
          cardDraggable: cardDraggable
        }, card));

        return cardDraggable && (!card.hasOwnProperty('draggable') || card.draggable) ? _react.default.createElement(_Draggable.default, {
          key: card.id
        }, cardToRender) : _react.default.createElement("span", {
          key: card.id
        }, cardToRender);
      });
      return _react.default.createElement(components.ScrollableLane, {
        ref: this.laneDidMount,
        isDraggingOver: isDraggingOver
      }, _react.default.createElement(_Container.default, {
        orientation: "vertical",
        groupName: this.groupName,
        dragClass: cardDragClass,
        dropClass: cardDropClass,
        onDragStart: this.onDragStart,
        onDrop: e => this.onDragEnd(id, e),
        onDragEnter: () => this.setState({
          isDraggingOver: true
        }),
        onDragLeave: () => this.setState({
          isDraggingOver: false
        }),
        shouldAcceptDrop: this.shouldAcceptDrop,
        getChildPayload: index => this.props.getCardDetails(id, index)
      }, cardList), editable && !addCardMode && _react.default.createElement(components.AddCardLink, {
        onClick: this.showEditableCard,
        t: t
      }), addCardMode && _react.default.createElement(components.NewCardForm, {
        onCancel: this.hideEditableCard,
        t: t,
        laneId: id,
        onAdd: this.addNewCard
      }));
    });
    (0, _defineProperty2.default)(this, "removeLane", () => {
      const id = this.props.id;
      this.props.actions.removeLane({
        laneId: id
      });
      this.props.onLaneDelete(id);
    });
    (0, _defineProperty2.default)(this, "updateTitle", value => {
      this.props.actions.updateLane({
        id: this.props.id,
        title: value
      });
      this.props.onLaneUpdate(this.props.id, {
        title: value
      });
    });
    (0, _defineProperty2.default)(this, "renderHeader", pickedProps => {
      const components = this.props.components;
      return _react.default.createElement(components.LaneHeader, (0, _extends2.default)({}, pickedProps, {
        onDelete: this.removeLane,
        onDoubleClick: this.toggleLaneCollapsed,
        updateTitle: this.updateTitle
      }));
    });
    (0, _defineProperty2.default)(this, "toggleLaneCollapsed", () => {
      this.props.collapsibleLanes && this.setState(state => ({
        collapsed: !state.collapsed
      }));
    });
  }

  sortCards(cards, sortFunction) {
    if (!cards) return [];
    if (!sortFunction) return cards;
    return cards.concat().sort(function (card1, card2) {
      return sortFunction(card1, card2);
    });
  }

  componentWillReceiveProps(nextProps) {
    if (!(0, _isEqual.default)(this.props.cards, nextProps.cards)) {
      this.setState({
        currentPage: nextProps.currentPage
      });
    }
  }

  get groupName() {
    const boardId = this.props.boardId;
    return "TrelloBoard".concat(boardId, "Lane");
  }

  render() {
    const _this$state2 = this.state,
          loading = _this$state2.loading,
          isDraggingOver = _this$state2.isDraggingOver,
          collapsed = _this$state2.collapsed;
    const _this$props2 = this.props,
          id = _this$props2.id,
          cards = _this$props2.cards,
          collapsibleLanes = _this$props2.collapsibleLanes,
          components = _this$props2.components,
          onLaneClick = _this$props2.onLaneClick,
          onLaneScroll = _this$props2.onLaneScroll,
          onCardClick = _this$props2.onCardClick,
          onCardAdd = _this$props2.onCardAdd,
          onBeforeCardDelete = _this$props2.onBeforeCardDelete,
          onCardDelete = _this$props2.onCardDelete,
          onLaneDelete = _this$props2.onLaneDelete,
          onLaneUpdate = _this$props2.onLaneUpdate,
          onCardMoveAcrossLanes = _this$props2.onCardMoveAcrossLanes,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props2, ["id", "cards", "collapsibleLanes", "components", "onLaneClick", "onLaneScroll", "onCardClick", "onCardAdd", "onBeforeCardDelete", "onCardDelete", "onLaneDelete", "onLaneUpdate", "onCardMoveAcrossLanes"]);
    const allClassNames = (0, _classnames.default)('react-trello-lane', this.props.className || '');
    const showFooter = collapsibleLanes && cards.length > 0;
    return _react.default.createElement(components.Section, (0, _extends2.default)({}, otherProps, {
      key: id,
      onClick: () => onLaneClick && onLaneClick(id),
      draggable: false,
      className: allClassNames
    }), this.renderHeader((0, _objectSpread2.default)({
      id,
      cards
    }, otherProps)), this.renderDragContainer(isDraggingOver), loading && _react.default.createElement(components.Loader, null), showFooter && _react.default.createElement(components.LaneFooter, {
      onClick: this.toggleLaneCollapsed,
      collapsed: collapsed
    }));
  }

}

Lane.propTypes = {
  actions: _propTypes.default.object,
  id: _propTypes.default.string.isRequired,
  boardId: _propTypes.default.string,
  title: _propTypes.default.node,
  index: _propTypes.default.number,
  laneSortFunction: _propTypes.default.func,
  style: _propTypes.default.object,
  cardStyle: _propTypes.default.object,
  tagStyle: _propTypes.default.object,
  titleStyle: _propTypes.default.object,
  labelStyle: _propTypes.default.object,
  cards: _propTypes.default.array,
  label: _propTypes.default.string,
  currentPage: _propTypes.default.number,
  draggable: _propTypes.default.bool,
  collapsibleLanes: _propTypes.default.bool,
  droppable: _propTypes.default.bool,
  onCardMoveAcrossLanes: _propTypes.default.func,
  onCardClick: _propTypes.default.func,
  onBeforeCardDelete: _propTypes.default.func,
  onCardDelete: _propTypes.default.func,
  onCardAdd: _propTypes.default.func,
  onLaneDelete: _propTypes.default.func,
  onLaneUpdate: _propTypes.default.func,
  onLaneClick: _propTypes.default.func,
  onLaneScroll: _propTypes.default.func,
  editable: _propTypes.default.bool,
  laneDraggable: _propTypes.default.bool,
  cardDraggable: _propTypes.default.bool,
  cardDragClass: _propTypes.default.string,
  cardDropClass: _propTypes.default.string,
  canAddLanes: _propTypes.default.bool,
  t: _propTypes.default.func.isRequired
};
Lane.defaultProps = {
  style: {},
  titleStyle: {},
  labelStyle: {},
  label: undefined,
  editable: false,
  onLaneUpdate: () => {},
  onCardAdd: () => {}
};

const mapDispatchToProps = dispatch => ({
  actions: (0, _redux.bindActionCreators)(laneActions, dispatch)
});

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Lane);

exports.default = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/dnd/Container.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-trello/dist/dnd/Container.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _trelloSmoothDnd = _interopRequireWildcard(__webpack_require__(/*! trello-smooth-dnd */ "./node_modules/trello-smooth-dnd/dist/index.js"));

_trelloSmoothDnd.default.dropHandler = _trelloSmoothDnd.dropHandlers.reactDropHandler().handler;

_trelloSmoothDnd.default.wrapChild = p => p; // dont wrap children they will already be wrapped


class Container extends _react.Component {
  constructor(props) {
    super(props);
    this.getContainerOptions = this.getContainerOptions.bind(this);
    this.setRef = this.setRef.bind(this);
    this.prevContainer = null;
  }

  componentDidMount() {
    this.containerDiv = this.containerDiv || _reactDom.default.findDOMNode(this);
    this.prevContainer = this.containerDiv;
    this.container = (0, _trelloSmoothDnd.default)(this.containerDiv, this.getContainerOptions());
  }

  componentWillUnmount() {
    this.container.dispose();
    this.container = null;
  }

  componentDidUpdate() {
    this.containerDiv = this.containerDiv || _reactDom.default.findDOMNode(this);

    if (this.containerDiv) {
      if (this.prevContainer && this.prevContainer !== this.containerDiv) {
        this.container.dispose();
        this.container = (0, _trelloSmoothDnd.default)(this.containerDiv, this.getContainerOptions());
        this.prevContainer = this.containerDiv;
      }
    }
  }

  render() {
    if (this.props.render) {
      return this.props.render(this.setRef);
    } else {
      return _react.default.createElement("div", {
        style: this.props.style,
        ref: this.setRef
      }, this.props.children);
    }
  }

  setRef(element) {
    this.containerDiv = element;
  }

  getContainerOptions() {
    const functionProps = {};

    if (this.props.onDragStart) {
      functionProps.onDragStart = (...p) => this.props.onDragStart(...p);
    }

    if (this.props.onDragEnd) {
      functionProps.onDragEnd = (...p) => this.props.onDragEnd(...p);
    }

    if (this.props.onDrop) {
      functionProps.onDrop = (...p) => this.props.onDrop(...p);
    }

    if (this.props.getChildPayload) {
      functionProps.getChildPayload = (...p) => this.props.getChildPayload(...p);
    }

    if (this.props.shouldAnimateDrop) {
      functionProps.shouldAnimateDrop = (...p) => this.props.shouldAnimateDrop(...p);
    }

    if (this.props.shouldAcceptDrop) {
      functionProps.shouldAcceptDrop = (...p) => this.props.shouldAcceptDrop(...p);
    }

    if (this.props.onDragEnter) {
      functionProps.onDragEnter = (...p) => this.props.onDragEnter(...p);
    }

    if (this.props.onDragLeave) {
      functionProps.onDragLeave = (...p) => this.props.onDragLeave(...p);
    }

    if (this.props.render) {
      functionProps.render = (...p) => this.props.render(...p);
    }

    if (this.props.onDropReady) {
      functionProps.onDropReady = (...p) => this.props.onDropReady(...p);
    }

    if (this.props.getGhostParent) {
      functionProps.getGhostParent = (...p) => this.props.getGhostParent(...p);
    }

    return Object.assign({}, this.props, functionProps);
  }

}

Container.propTypes = {
  behaviour: _propTypes.default.oneOf(["move", "copy", "drag-zone"]),
  groupName: _propTypes.default.string,
  orientation: _propTypes.default.oneOf(["horizontal", "vertical"]),
  style: _propTypes.default.object,
  dragHandleSelector: _propTypes.default.string,
  className: _propTypes.default.string,
  nonDragAreaSelector: _propTypes.default.string,
  dragBeginDelay: _propTypes.default.number,
  animationDuration: _propTypes.default.number,
  autoScrollEnabled: _propTypes.default.string,
  lockAxis: _propTypes.default.string,
  dragClass: _propTypes.default.string,
  dropClass: _propTypes.default.string,
  onDragStart: _propTypes.default.func,
  onDragEnd: _propTypes.default.func,
  onDrop: _propTypes.default.func,
  getChildPayload: _propTypes.default.func,
  shouldAnimateDrop: _propTypes.default.func,
  shouldAcceptDrop: _propTypes.default.func,
  onDragEnter: _propTypes.default.func,
  onDragLeave: _propTypes.default.func,
  render: _propTypes.default.func,
  getGhostParent: _propTypes.default.func,
  removeOnDropOut: _propTypes.default.bool
};
Container.defaultProps = {
  behaviour: 'move',
  orientation: 'vertical',
  className: 'reactTrelloBoard'
};
var _default = Container;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/dnd/Draggable.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-trello/dist/dnd/Draggable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _trelloSmoothDnd = __webpack_require__(/*! trello-smooth-dnd */ "./node_modules/trello-smooth-dnd/dist/index.js");

const wrapperClass = _trelloSmoothDnd.constants.wrapperClass;

class Draggable extends _react.Component {
  render() {
    if (this.props.render) {
      return _react.default.cloneElement(this.props.render(), {
        className: wrapperClass
      });
    }

    const clsName = "".concat(this.props.className ? this.props.className + ' ' : '');
    return _react.default.createElement("div", (0, _extends2.default)({}, this.props, {
      className: "".concat(clsName).concat(wrapperClass)
    }), this.props.children);
  }

}

Draggable.propTypes = {
  render: _propTypes.default.func
};
var _default = Draggable;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/helpers/LaneHelper.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-trello/dist/helpers/LaneHelper.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _immutabilityHelper = _interopRequireDefault(__webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js"));

var _v = _interopRequireDefault(__webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js"));

const LaneHelper = {
  initialiseLanes: (state, {
    lanes
  }) => {
    const newLanes = lanes.map(lane => {
      lane.currentPage = 1;
      lane.cards && lane.cards.forEach(c => c.laneId = lane.id);
      return lane;
    });
    return (0, _immutabilityHelper.default)(state, {
      lanes: {
        $set: newLanes
      }
    });
  },
  paginateLane: (state, {
    laneId,
    newCards,
    nextPage
  }) => {
    const updatedLanes = LaneHelper.appendCardsToLane(state, {
      laneId: laneId,
      newCards: newCards
    });
    updatedLanes.find(lane => lane.id === laneId).currentPage = nextPage;
    return (0, _immutabilityHelper.default)(state, {
      lanes: {
        $set: updatedLanes
      }
    });
  },
  appendCardsToLane: (state, {
    laneId,
    newCards,
    index
  }) => {
    const lane = state.lanes.find(lane => lane.id === laneId);
    newCards = newCards.map(c => (0, _immutabilityHelper.default)(c, {
      laneId: {
        $set: laneId
      }
    })).filter(c => lane.cards.find(card => card.id === c.id) == null);
    return state.lanes.map(lane => {
      if (lane.id === laneId) {
        if (index !== undefined) {
          return (0, _immutabilityHelper.default)(lane, {
            cards: {
              $splice: [[index, 0, ...newCards]]
            }
          });
        } else {
          const cardsToUpdate = [...lane.cards, ...newCards];
          return (0, _immutabilityHelper.default)(lane, {
            cards: {
              $set: cardsToUpdate
            }
          });
        }
      } else {
        return lane;
      }
    });
  },
  appendCardToLane: (state, {
    laneId,
    card,
    index
  }) => {
    const newLanes = LaneHelper.appendCardsToLane(state, {
      laneId: laneId,
      newCards: [card],
      index
    });
    return (0, _immutabilityHelper.default)(state, {
      lanes: {
        $set: newLanes
      }
    });
  },
  addLane: (state, lane) => {
    const newLane = (0, _objectSpread2.default)({
      id: (0, _v.default)(),
      cards: []
    }, lane);
    return (0, _immutabilityHelper.default)(state, {
      lanes: {
        $push: [newLane]
      }
    });
  },
  updateLane: (state, updatedLane) => {
    const newLanes = state.lanes.map(lane => {
      if (updatedLane.id == lane.id) {
        return (0, _objectSpread2.default)({}, lane, updatedLane);
      } else {
        return lane;
      }
    });
    return (0, _immutabilityHelper.default)(state, {
      lanes: {
        $set: newLanes
      }
    });
  },
  removeCardFromLane: (state, {
    laneId,
    cardId
  }) => {
    const lanes = state.lanes.map(lane => {
      if (lane.id === laneId) {
        let newCards = lane.cards.filter(card => card.id !== cardId);
        return (0, _immutabilityHelper.default)(lane, {
          cards: {
            $set: newCards
          }
        });
      } else {
        return lane;
      }
    });
    return (0, _immutabilityHelper.default)(state, {
      lanes: {
        $set: lanes
      }
    });
  },
  moveCardAcrossLanes: (state, {
    fromLaneId,
    toLaneId,
    cardId,
    index
  }) => {
    let cardToMove = null;
    const interimLanes = state.lanes.map(lane => {
      if (lane.id === fromLaneId) {
        cardToMove = lane.cards.find(card => card.id === cardId);
        const newCards = lane.cards.filter(card => card.id !== cardId);
        return (0, _immutabilityHelper.default)(lane, {
          cards: {
            $set: newCards
          }
        });
      } else {
        return lane;
      }
    });
    const updatedState = (0, _immutabilityHelper.default)(state, {
      lanes: {
        $set: interimLanes
      }
    });
    return LaneHelper.appendCardToLane(updatedState, {
      laneId: toLaneId,
      card: cardToMove,
      index: index
    });
  },
  updateCardsForLane: (state, {
    laneId,
    cards
  }) => {
    const lanes = state.lanes.map(lane => {
      if (lane.id === laneId) {
        return (0, _immutabilityHelper.default)(lane, {
          cards: {
            $set: cards
          }
        });
      } else {
        return lane;
      }
    });
    return (0, _immutabilityHelper.default)(state, {
      lanes: {
        $set: lanes
      }
    });
  },
  updateLanes: (state, lanes) => {
    return (0, _objectSpread2.default)({}, state, {
      lanes: lanes
    });
  },
  moveLane: (state, {
    oldIndex,
    newIndex
  }) => {
    const laneToMove = state.lanes[oldIndex];
    const tempState = (0, _immutabilityHelper.default)(state, {
      lanes: {
        $splice: [[oldIndex, 1]]
      }
    });
    return (0, _immutabilityHelper.default)(tempState, {
      lanes: {
        $splice: [[newIndex, 0, laneToMove]]
      }
    });
  },
  removeLane: (state, {
    laneId
  }) => {
    const updatedLanes = state.lanes.filter(lane => lane.id !== laneId);
    return (0, _immutabilityHelper.default)(state, {
      lanes: {
        $set: updatedLanes
      }
    });
  }
};
var _default = LaneHelper;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/helpers/createTranslate.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-trello/dist/helpers/createTranslate.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var _default = TABLE => key => (0, _get.default)(TABLE, key);

exports.default = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/helpers/deprecationWarnings.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-trello/dist/helpers/deprecationWarnings.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const REPLACE_TABLE = {
  addCardLink: 'components.Card',
  customLaneHeader: 'components.LaneHeader',
  newLaneTemplate: 'components.NewLaneSection',
  newCardTemplate: 'components.NewCardForm',
  children: 'components.Card',
  customCardLayout: 'components.Card',
  addLaneTitle: '`t` function with key "Add another lane"',
  addCardLink: '`t` function with key "Click to add card"'
};

const warn = prop => {
  const use = REPLACE_TABLE[prop];
  console.warn("react-trello property '".concat(prop, "' is removed. Use '").concat(use, "' instead. More - https://github.com/rcdexta/react-trello/blob/master/UPGRADE.md"));
};

var _default = props => {
  Object.keys(REPLACE_TABLE).forEach(key => {
    if (props.hasOwnProperty(key)) {
      warn(key);
    }
  });
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/react-trello/dist/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Draggable", {
  enumerable: true,
  get: function get() {
    return _Draggable.default;
  }
});
Object.defineProperty(exports, "Container", {
  enumerable: true,
  get: function get() {
    return _Container.default;
  }
});
Object.defineProperty(exports, "BoardContainer", {
  enumerable: true,
  get: function get() {
    return _BoardContainer.default;
  }
});
Object.defineProperty(exports, "Board", {
  enumerable: true,
  get: function get() {
    return _Board.default;
  }
});
Object.defineProperty(exports, "Lane", {
  enumerable: true,
  get: function get() {
    return _Lane.default;
  }
});
Object.defineProperty(exports, "components", {
  enumerable: true,
  get: function get() {
    return _components.default;
  }
});
Object.defineProperty(exports, "locales", {
  enumerable: true,
  get: function get() {
    return _locales.default;
  }
});
Object.defineProperty(exports, "widgets", {
  enumerable: true,
  get: function get() {
    return _widgets.default;
  }
});
Object.defineProperty(exports, "createTranslate", {
  enumerable: true,
  get: function get() {
    return _createTranslate.default;
  }
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Draggable = _interopRequireDefault(__webpack_require__(/*! ./dnd/Draggable */ "./node_modules/react-trello/dist/dnd/Draggable.js"));

var _Container = _interopRequireDefault(__webpack_require__(/*! ./dnd/Container */ "./node_modules/react-trello/dist/dnd/Container.js"));

var _BoardContainer = _interopRequireDefault(__webpack_require__(/*! ./controllers/BoardContainer */ "./node_modules/react-trello/dist/controllers/BoardContainer.js"));

var _Board = _interopRequireDefault(__webpack_require__(/*! ./controllers/Board */ "./node_modules/react-trello/dist/controllers/Board.js"));

var _Lane = _interopRequireDefault(__webpack_require__(/*! ./controllers/Lane */ "./node_modules/react-trello/dist/controllers/Lane.js"));

var _deprecationWarnings = _interopRequireDefault(__webpack_require__(/*! ./helpers/deprecationWarnings */ "./node_modules/react-trello/dist/helpers/deprecationWarnings.js"));

var _components = _interopRequireDefault(__webpack_require__(/*! ./components */ "./node_modules/react-trello/dist/components/index.js"));

var _locales = _interopRequireDefault(__webpack_require__(/*! ./locales */ "./node_modules/react-trello/dist/locales/index.js"));

var _widgets = _interopRequireDefault(__webpack_require__(/*! ./widgets */ "./node_modules/react-trello/dist/widgets/index.js"));

var _createTranslate = _interopRequireDefault(__webpack_require__(/*! ./helpers/createTranslate */ "./node_modules/react-trello/dist/helpers/createTranslate.js"));

const DEFAULT_LANG = 'en';

var _default = (_ref) => {
  let components = _ref.components,
      _ref$lang = _ref.lang,
      lang = _ref$lang === void 0 ? DEFAULT_LANG : _ref$lang,
      otherProps = (0, _objectWithoutProperties2.default)(_ref, ["components", "lang"]);
  (0, _deprecationWarnings.default)(otherProps);
  const translate = (0, _createTranslate.default)(_locales.default[lang].translation);
  return _react.default.createElement(_Board.default, (0, _extends2.default)({
    t: translate,
    components: (0, _objectSpread2.default)({}, _components.default, components)
  }, otherProps));
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/locales/en/translation.json":
/*!********************************************************************!*\
  !*** ./node_modules/react-trello/dist/locales/en/translation.json ***!
  \********************************************************************/
/*! exports provided: Add another lane, Click to add card, Delete lane, Lane actions, button, placeholder, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Add another lane\":\"+ Add another lane\",\"Click to add card\":\"Click to add card\",\"Delete lane\":\"Delete lane\",\"Lane actions\":\"Lane actions\",\"button\":{\"Add lane\":\"Add lane\",\"Add card\":\"Add card\",\"Cancel\":\"Cancel\"},\"placeholder\":{\"title\":\"title\",\"description\":\"description\",\"label\":\"label\"}}");

/***/ }),

/***/ "./node_modules/react-trello/dist/locales/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-trello/dist/locales/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// i18next support structure
var _default = {
  en: {
    translation: __webpack_require__(/*! ./en/translation.json */ "./node_modules/react-trello/dist/locales/en/translation.json")
  },
  ru: {
    translation: __webpack_require__(/*! ./ru/translation.json */ "./node_modules/react-trello/dist/locales/ru/translation.json")
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/locales/ru/translation.json":
/*!********************************************************************!*\
  !*** ./node_modules/react-trello/dist/locales/ru/translation.json ***!
  \********************************************************************/
/*! exports provided: Add another lane, Click to add card, Delete lane, Lane actions, button, placeholder, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Add another lane\":\"＋Добавить колонку\",\"Click to add card\":\"＋Добавить карточку\",\"Delete lane\":\"Удалить колонку\",\"Lane actions\":\"Действия над колонкой\",\"button\":{\"Add card\":\"Добавить карту\",\"Add lane\":\"Добавить колонку\",\"Cancel\":\"Отменить\"},\"placeholder\":{\"title\":\"Название\",\"description\":\"Описание\",\"label\":\"Метка\"}}");

/***/ }),

/***/ "./node_modules/react-trello/dist/reducers/BoardReducer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-trello/dist/reducers/BoardReducer.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _LaneHelper = _interopRequireDefault(__webpack_require__(/*! ../helpers/LaneHelper */ "./node_modules/react-trello/dist/helpers/LaneHelper.js"));

const boardReducer = (state = {
  lanes: []
}, action) => {
  const payload = action.payload,
        type = action.type;

  switch (type) {
    case 'LOAD_BOARD':
      return _LaneHelper.default.initialiseLanes(state, payload);

    case 'ADD_CARD':
      return _LaneHelper.default.appendCardToLane(state, payload);

    case 'REMOVE_CARD':
      return _LaneHelper.default.removeCardFromLane(state, payload);

    case 'MOVE_CARD':
      return _LaneHelper.default.moveCardAcrossLanes(state, payload);

    case 'UPDATE_CARDS':
      return _LaneHelper.default.updateCardsForLane(state, payload);

    case 'UPDATE_LANES':
      return _LaneHelper.default.updateLanes(state, payload);

    case 'UPDATE_LANE':
      return _LaneHelper.default.updateLane(state, payload);

    case 'PAGINATE_LANE':
      return _LaneHelper.default.paginateLane(state, payload);

    case 'MOVE_LANE':
      return _LaneHelper.default.moveLane(state, payload);

    case 'REMOVE_LANE':
      return _LaneHelper.default.removeLane(state, payload);

    case 'ADD_LANE':
      return _LaneHelper.default.addLane(state, payload);

    default:
      return state;
  }
};

var _default = boardReducer;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/styles/Base.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-trello/dist/styles/Base.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineInput = exports.CardForm = exports.NewLaneButtons = exports.NewLaneSection = exports.LaneSection = exports.LaneTitle = exports.AddCardLink = exports.TagSpan = exports.Footer = exports.Detail = exports.CardRightContent = exports.CardTitle = exports.CardHeader = exports.MovableCardWrapper = exports.CardWrapper = exports.RightContent = exports.Title = exports.ScrollableLane = exports.LaneFooter = exports.LaneHeader = exports.Section = exports.Header = exports.BoardWrapper = exports.CustomPopoverContent = exports.CustomPopoverContainer = exports.GlobalStyle = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"));

var _reactPopopo = __webpack_require__(/*! react-popopo */ "./node_modules/react-popopo/dist/index.js");

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

function _templateObject29() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n      &:focus {\n        box-shadow: inset 0 0 0 2px #0079bf;\n      }\n    "]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  overflow-x: hidden; /* for Firefox (issue #5) */\n  word-wrap: break-word;\n  min-height: 28px;\n  max-height: 112px; /* optional, but recommended */\n  resize: none;\n  width: 100%;\n  height: 28px;\n  font-size: 15px;\n  line-height: 20px;\n  background-color: transparent;\n  box-shadow: none;\n  box-sizing: border-box;\n  border-radius: 3px;\n  border: 0;\n  padding: 4px 8px;\n  outline: 0;\n  ", " &:focus {\n    background-color: white;\n  }\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  background-color: #e3e3e3;\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  margin-top: 10px;\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  width: 200px;\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  background-color: #2b6aa3;\n  border-radius: 3px;\n  margin: 5px;\n  position: relative;\n  padding: 5px;\n  display: inline-flex;\n  height: auto;\n  flex-direction: column;\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 15px;\n  width: 268px;\n  height: auto;\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  border-radius: 0 0 3px 3px;\n  color: #838c91;\n  display: block;\n  padding: 5px 2px;\n  margin-top: 10px;\n  position: relative;\n  text-decoration: none;\n  cursor: pointer;\n\n  &:hover {\n    //background-color: #cdd2d4;\n    color: #4d4d4d;\n    text-decoration: underline;\n  }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  padding: 2px 3px;\n  border-radius: 3px;\n  margin: 2px 5px;\n  font-size: 70%;\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  border-top: 1px solid #eee;\n  padding-top: 6px;\n  text-align: right;\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: row;\n  flex-wrap: wrap;\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 12px;\n  color: #4d4d4d;\n  white-space: pre-wrap;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 10px;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 14px;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  border-bottom: 1px solid #eee;\n  padding-bottom: 6px;\n  color: #000;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  &:hover {\n    background-color: #f0f0f0;\n    color: #000;\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  border-radius: 3px;\n  border-bottom: 1px solid #ccc;\n  background-color: #fff;\n  position: relative;\n  padding: 10px;\n  cursor: pointer;\n  max-width: 250px;\n  margin-bottom: 7px;\n  min-width: 230px;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  width: 30%;\n  text-align: right;\n  padding-right: 10px;\n  font-size: 13px;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 18px;\n  cursor: ", ";\n  width: 70%;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  flex: 1;\n  overflow-y: auto;\n  min-width: 250px;\n  overflow-x: hidden;\n  align-self: center;\n  max-height: 90vh;\n  margin-top: 10px;\n  flex-direction: column;\n  justify-content: space-between;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  position: relative;\n  height: 10px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n      padding: 0px 5px;\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n      padding: 0px;\n      line-height: 30px;\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  margin-bottom: 0px;\n  ", " ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  background-color: #e3e3e3;\n  border-radius: 3px;\n  margin: 5px 5px;\n  position: relative;\n  padding: 10px;\n  display: inline-flex;\n  height: auto;\n  max-height: 90%;\n  flex-direction: column;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  background-color: #3179ba;\n  overflow-y: hidden;\n  padding: 5px;\n  color: #393939;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  height: 100vh;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  visibility: hidden;\n  margin-top: -5px;\n  opacity: 0;\n  position: absolute;\n  z-index: 10;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);\n  transition: all 0.3s ease 0ms;\n  border-radius: 3px;\n  min-width: 7em;\n  flex-flow: column nowrap;\n  background-color: #fff;\n  color: #000;\n  padding: 5px;\n  left: 50%;\n  transform: translateX(-50%);\n  ", " &::before {\n    visibility: hidden;\n  }\n  a {\n    color: rgba(255, 255, 255, 0.56);\n    padding: 0.5em 1em;\n    margin: 0;\n    text-decoration: none;\n    &:hover {\n      background-color: #00bcd4 !important;\n      color: #37474f;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  position: absolute;\n  right: 10px;\n  flex-flow: column nowrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  .comPlainTextContentEditable {\n    -webkit-user-modify: read-write-plaintext-only;\n    cursor: text;\n  }\n\n  .comPlainTextContentEditable--has-placeholder::before {\n    content: attr(placeholder);\n    opacity: 0.5;\n    color: inherit;\n    cursor: text;\n  }\n\n  .react_trello_dragClass {\n    transform: rotate(3deg);\n  }\n\n  .react_trello_dragLaneClass {\n    transform: rotate(3deg);\n  }\n\n  .icon-overflow-menu-horizontal:before {\n    content: \"\\E91F\";\n  }\n  .icon-lg, .icon-sm {\n    color: #798d99;\n  }\n  .icon-lg {\n    height: 32px;\n    font-size: 16px;\n    line-height: 32px;\n    width: 32px;\n  }\n"], ["\n  .comPlainTextContentEditable {\n    -webkit-user-modify: read-write-plaintext-only;\n    cursor: text;\n  }\n\n  .comPlainTextContentEditable--has-placeholder::before {\n    content: attr(placeholder);\n    opacity: 0.5;\n    color: inherit;\n    cursor: text;\n  }\n\n  .react_trello_dragClass {\n    transform: rotate(3deg);\n  }\n\n  .react_trello_dragLaneClass {\n    transform: rotate(3deg);\n  }\n\n  .icon-overflow-menu-horizontal:before {\n    content: \"\\\\E91F\";\n  }\n  .icon-lg, .icon-sm {\n    color: #798d99;\n  }\n  .icon-lg {\n    height: 32px;\n    font-size: 16px;\n    line-height: 32px;\n    width: 32px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject());
exports.GlobalStyle = GlobalStyle;
const CustomPopoverContainer = (0, _styledComponents.default)(_reactPopopo.PopoverContainer)(_templateObject2());
exports.CustomPopoverContainer = CustomPopoverContainer;
const CustomPopoverContent = (0, _styledComponents.default)(_reactPopopo.PopoverContent)(_templateObject3(), props => props.active && "\n    visibility: visible;\n    opacity: 1;\n    transition-delay: 100ms;\n  ");
exports.CustomPopoverContent = CustomPopoverContent;

const BoardWrapper = _styledComponents.default.div(_templateObject4());

exports.BoardWrapper = BoardWrapper;

const Header = _styledComponents.default.header(_templateObject5());

exports.Header = Header;

const Section = _styledComponents.default.section(_templateObject6());

exports.Section = Section;
const LaneHeader = (0, _styledComponents.default)(Header)(_templateObject7(), props => props.editLaneTitle && (0, _styledComponents.css)(_templateObject8()), props => !props.editLaneTitle && (0, _styledComponents.css)(_templateObject9()));
exports.LaneHeader = LaneHeader;

const LaneFooter = _styledComponents.default.div(_templateObject10());

exports.LaneFooter = LaneFooter;

const ScrollableLane = _styledComponents.default.div(_templateObject11());

exports.ScrollableLane = ScrollableLane;

const Title = _styledComponents.default.span(_templateObject12(), props => props.draggable ? 'grab' : "auto");

exports.Title = Title;

const RightContent = _styledComponents.default.span(_templateObject13());

exports.RightContent = RightContent;

const CardWrapper = _styledComponents.default.article(_templateObject14());

exports.CardWrapper = CardWrapper;
const MovableCardWrapper = (0, _styledComponents.default)(CardWrapper)(_templateObject15());
exports.MovableCardWrapper = MovableCardWrapper;
const CardHeader = (0, _styledComponents.default)(Header)(_templateObject16());
exports.CardHeader = CardHeader;
const CardTitle = (0, _styledComponents.default)(Title)(_templateObject17());
exports.CardTitle = CardTitle;
const CardRightContent = (0, _styledComponents.default)(RightContent)(_templateObject18());
exports.CardRightContent = CardRightContent;

const Detail = _styledComponents.default.div(_templateObject19());

exports.Detail = Detail;

const Footer = _styledComponents.default.div(_templateObject20());

exports.Footer = Footer;

const TagSpan = _styledComponents.default.span(_templateObject21());

exports.TagSpan = TagSpan;

const AddCardLink = _styledComponents.default.a(_templateObject22());

exports.AddCardLink = AddCardLink;

const LaneTitle = _styledComponents.default.div(_templateObject23());

exports.LaneTitle = LaneTitle;

const LaneSection = _styledComponents.default.section(_templateObject24());

exports.LaneSection = LaneSection;
const NewLaneSection = (0, _styledComponents.default)(LaneSection)(_templateObject25());
exports.NewLaneSection = NewLaneSection;

const NewLaneButtons = _styledComponents.default.div(_templateObject26());

exports.NewLaneButtons = NewLaneButtons;

const CardForm = _styledComponents.default.div(_templateObject27());

exports.CardForm = CardForm;

const InlineInput = _styledComponents.default.textarea(_templateObject28(), props => props.border && (0, _styledComponents.css)(_templateObject29()));

exports.InlineInput = InlineInput;

/***/ }),

/***/ "./node_modules/react-trello/dist/styles/Elements.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-trello/dist/styles/Elements.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddLaneLink = exports.CancelButton = exports.AddButton = exports.ExpandBtn = exports.CollapseBtn = exports.ExpandCollapseBase = exports.DeleteIcon = exports.LaneMenuTitle = exports.LaneMenuItem = exports.LaneMenuContent = exports.LaneMenuHeader = exports.MenuButton = exports.DelButton = exports.GenDelButton = exports.DeleteWrapper = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _Base = __webpack_require__(/*! ./Base */ "./node_modules/react-trello/dist/styles/Base.js");

function _templateObject15() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  background: #2b6aa3;\n  border: none;\n  color: #fff;\n  transition: background 0.3s ease;\n  min-height: 32px;\n  padding: 4px 16px;\n  vertical-align: top;\n  margin-top: 0;\n  margin-right: 0px;\n  border-radius: 4px;\n  font-size: 13px;\n  cursor: pointer;\n  margin-bottom: 0;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  background: #999999;\n  color: #fff;\n  transition: background 0.3s ease;\n  min-height: 32px;\n  padding: 4px 16px;\n  vertical-align: top;\n  margin-top: 0;\n  font-weight: bold;\n  border-radius: 3px;\n  font-size: 14px;\n  cursor: pointer;\n  margin-bottom: 0;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  background: #5aac44;\n  color: #fff;\n  transition: background 0.3s ease;\n  min-height: 32px;\n  padding: 4px 16px;\n  vertical-align: top;\n  margin-top: 0;\n  margin-right: 8px;\n  font-weight: bold;\n  border-radius: 3px;\n  font-size: 14px;\n  cursor: pointer;\n  margin-bottom: 0;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-top: 7px solid #444;\n    border-left: 7px solid transparent;\n    border-right: 7px solid transparent;\n    border-radius: 6px;\n  }\n  &:after {\n    content: '';\n    position: absolute;\n    left: 4px;\n    top: 0px;\n    border-top: 3px solid #e3e3e3;\n    border-left: 3px solid transparent;\n    border-right: 3px solid transparent;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-bottom: 7px solid #444;\n    border-left: 7px solid transparent;\n    border-right: 7px solid transparent;\n    border-radius: 6px;\n  }\n  &:after {\n    content: '';\n    position: absolute;\n    left: 4px;\n    top: 4px;\n    border-bottom: 3px solid #e3e3e3;\n    border-left: 3px solid transparent;\n    border-right: 3px solid transparent;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  width: 36px;\n  margin: 0 auto;\n  font-size: 14px;\n  position: relative;\n  cursor: pointer;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  position: relative;\n  display: inline-block;\n  width: 4px;\n  height: 4px;\n  opacity: 1;\n  overflow: hidden;\n  border: 1px solid #83bd42;\n  border-radius: 50%;\n  padding: 4px;\n  background-color: #83bd42;\n\n  ", ":hover & {\n    opacity: 1;\n  }\n\n  &:hover::before,\n  &:hover::after {\n    background: red;\n  }\n\n  &:before,\n  &:after {\n    content: '';\n    position: absolute;\n    height: 2px;\n    width: 60%;\n    top: 45%;\n    left: 20%;\n    background: #fff;\n    border-radius: 5px;\n  }\n\n  &:before {\n    -webkit-transform: rotate(45deg);\n    -moz-transform: rotate(45deg);\n    -o-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n\n  &:after {\n    -webkit-transform: rotate(-45deg);\n    -moz-transform: rotate(-45deg);\n    -o-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n    box-sizing: border-box;\n    color: #6b808c;\n    display: block;\n    line-height: 30px;\n    border-bottom: 1px solid rgba(9,45,66,.13);\n    margin: 0 6px;\n    overflow: hidden;\n    padding: 0 32px;\n    position: relative;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    z-index: 1;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n    cursor: pointer;\n    display: block;\n    font-weight: 700;\n    padding: 6px 12px;\n    position: relative;\n    margin: 0 -12px;\n    text-decoration: none;\n\n    &:hover {\n      background-color: #3179BA;\n      color: #fff;\n    }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n    overflow-x: hidden;\n    overflow-y: auto;\n    padding: 0 12px 12px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n    position: relative;\n    margin-bottom: 4px;\n    text-align: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  transition: all 0.5s ease;\n  display: inline-block;\n  border: none;\n  outline: none;\n  font-size: 16px;\n  font-weight: bold;\n  height: 15px;\n  line-height: 1px;\n  margin: 0 0 8px;\n  padding: 0;\n  text-align: center;\n  width: 15px;\n  background: inherit;\n  cursor: pointer;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  transition: all 0.5s ease;\n  display: inline-block;\n  border: none;\n  font-size: 8px;\n  height: 15px;\n  line-height: 1px;\n  margin: 0 0 8px;\n  padding: 0;\n  text-align: center;\n  width: 15px;\n  background: inherit;\n  cursor: pointer;\n  opacity: 0;\n  ", ":hover & {\n    opacity: 1;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  transition: all 0.5s ease;\n  display: inline-block;\n  border: none;\n  font-size: 15px;\n  height: 15px;\n  padding: 0;\n  margin-top: 5px;\n  text-align: center;\n  width: 15px;\n  background: inherit;\n  cursor: pointer;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  text-align: center;\n  position: absolute;\n  top: -1px;\n  right: 2px;\n  cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const DeleteWrapper = _styledComponents.default.div(_templateObject());

exports.DeleteWrapper = DeleteWrapper;

const GenDelButton = _styledComponents.default.button(_templateObject2());

exports.GenDelButton = GenDelButton;

const DelButton = _styledComponents.default.button(_templateObject3(), _Base.MovableCardWrapper);

exports.DelButton = DelButton;

const MenuButton = _styledComponents.default.button(_templateObject4());

exports.MenuButton = MenuButton;

const LaneMenuHeader = _styledComponents.default.div(_templateObject5());

exports.LaneMenuHeader = LaneMenuHeader;

const LaneMenuContent = _styledComponents.default.div(_templateObject6());

exports.LaneMenuContent = LaneMenuContent;

const LaneMenuItem = _styledComponents.default.div(_templateObject7());

exports.LaneMenuItem = LaneMenuItem;

const LaneMenuTitle = _styledComponents.default.span(_templateObject8());

exports.LaneMenuTitle = LaneMenuTitle;

const DeleteIcon = _styledComponents.default.span(_templateObject9(), _Base.CardWrapper);

exports.DeleteIcon = DeleteIcon;

const ExpandCollapseBase = _styledComponents.default.span(_templateObject10());

exports.ExpandCollapseBase = ExpandCollapseBase;
const CollapseBtn = (0, _styledComponents.default)(ExpandCollapseBase)(_templateObject11());
exports.CollapseBtn = CollapseBtn;
const ExpandBtn = (0, _styledComponents.default)(ExpandCollapseBase)(_templateObject12());
exports.ExpandBtn = ExpandBtn;

const AddButton = _styledComponents.default.button(_templateObject13());

exports.AddButton = AddButton;

const CancelButton = _styledComponents.default.button(_templateObject14());

exports.CancelButton = CancelButton;

const AddLaneLink = _styledComponents.default.button(_templateObject15());

exports.AddLaneLink = AddLaneLink;

/***/ }),

/***/ "./node_modules/react-trello/dist/styles/Loader.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-trello/dist/styles/Loader.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingBar = exports.LoaderDiv = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"));

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

function _templateObject3() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-block;\n  margin: 0 2px;\n  width: 4px;\n  height: 18px;\n  border-radius: 4px;\n  animation: ", " 1s ease-in-out infinite;\n  background-color: #777;\n\n  &:nth-child(1) {\n    animation-delay: 0.0001s;\n  }\n  &:nth-child(2) {\n    animation-delay: 0.09s;\n  }\n  &:nth-child(3) {\n    animation-delay: 0.18s;\n  }\n  &:nth-child(4) {\n    animation-delay: 0.27s;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  text-align: center;\n  margin: 15px 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n    0% {\n      transform: scale(1);\n    }\n    20% {\n      transform: scale(1, 2.2);\n    }\n    40% {\n      transform: scale(1);\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const keyframeAnimation = (0, _styledComponents.keyframes)(_templateObject());

const LoaderDiv = _styledComponents.default.div(_templateObject2());

exports.LoaderDiv = LoaderDiv;

const LoadingBar = _styledComponents.default.div(_templateObject3(), keyframeAnimation);

exports.LoadingBar = LoadingBar;

/***/ }),

/***/ "./node_modules/react-trello/dist/widgets/DeleteButton.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-trello/dist/widgets/DeleteButton.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Elements = __webpack_require__(/*! ../styles/Elements */ "./node_modules/react-trello/dist/styles/Elements.js");

const DeleteButton = props => {
  return _react.default.createElement(_Elements.DeleteWrapper, props, _react.default.createElement(_Elements.DelButton, null, "\u2716"));
};

var _default = DeleteButton;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/widgets/EditableLabel.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-trello/dist/widgets/EditableLabel.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

class EditableLabel extends _react.default.Component {
  constructor({
    value: _value
  }) {
    super();
    (0, _defineProperty2.default)(this, "getText", el => {
      return el.innerText;
    });
    (0, _defineProperty2.default)(this, "onTextChange", ev => {
      const value = this.getText(ev.target);
      this.setState({
        value: value
      });
    });
    (0, _defineProperty2.default)(this, "onBlur", () => {
      this.props.onChange(this.state.value);
    });
    (0, _defineProperty2.default)(this, "onPaste", ev => {
      ev.preventDefault();
      const value = ev.clipboardData.getData('text');
      document.execCommand('insertText', false, value);
    });
    (0, _defineProperty2.default)(this, "getClassName", () => {
      const placeholder = this.state.value === '' ? 'comPlainTextContentEditable--has-placeholder' : '';
      return "comPlainTextContentEditable ".concat(placeholder);
    });
    (0, _defineProperty2.default)(this, "onKeyDown", e => {
      if (e.keyCode === 13) {
        this.props.onChange(this.state.value);
        this.refDiv.blur();
        e.preventDefault();
      }

      if (e.keyCode === 27) {
        this.refDiv.value = this.props.value;
        this.setState({
          value: this.props.value
        }); // this.refDiv.blur()

        e.preventDefault();
        e.stopPropagation();
      }
    });
    this.state = {
      value: _value
    };
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      this.refDiv.focus();
    }
  }

  render() {
    const placeholder = this.props.value.length > 0 ? false : this.props.placeholder;
    return _react.default.createElement("div", {
      ref: _ref => this.refDiv = _ref,
      contentEditable: "true",
      className: this.getClassName(),
      onPaste: this.onPaste,
      onBlur: this.onBlur,
      onInput: this.onTextChange,
      onKeyDown: this.onKeyDown,
      placeholder: placeholder
    });
  }

}

EditableLabel.propTypes = {
  onChange: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  autoFocus: _propTypes.default.bool,
  inline: _propTypes.default.bool,
  value: _propTypes.default.string
};
EditableLabel.defaultProps = {
  onChange: () => {},
  placeholder: '',
  autoFocus: false,
  inline: false,
  value: ''
};
var _default = EditableLabel;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/widgets/InlineInput.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-trello/dist/widgets/InlineInput.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Base = __webpack_require__(/*! ../styles/Base */ "./node_modules/react-trello/dist/styles/Base.js");

var _autosize = _interopRequireDefault(__webpack_require__(/*! autosize */ "./node_modules/autosize/dist/autosize.js"));

class InlineInputController extends _react.default.Component {
  constructor(...args) {
    super(...args);
    (0, _defineProperty2.default)(this, "onFocus", e => e.target.select());
    (0, _defineProperty2.default)(this, "onMouseDown", e => {
      if (document.activeElement != e.target) {
        e.preventDefault();
        this.refInput.focus();
      }
    });
    (0, _defineProperty2.default)(this, "onBlur", () => {
      this.updateValue();
    });
    (0, _defineProperty2.default)(this, "onKeyDown", e => {
      if (e.keyCode == 13) {
        this.refInput.blur();
        e.preventDefault();
      }

      if (e.keyCode == 27) {
        this.setValue(this.props.value);
        this.refInput.blur();
        e.preventDefault();
      }

      if (e.keyCode == 9) {
        if (this.getValue().length == 0) {
          this.props.onCancel();
        }

        this.refInput.blur();
        e.preventDefault();
      }
    });
    (0, _defineProperty2.default)(this, "getValue", () => this.refInput.value);
    (0, _defineProperty2.default)(this, "setValue", value => this.refInput.value = value);
    (0, _defineProperty2.default)(this, "updateValue", () => {
      if (this.getValue() != this.props.value) {
        this.props.onSave(this.getValue());
      }
    });
    (0, _defineProperty2.default)(this, "setRef", ref => {
      this.refInput = ref;

      if (this.props.resize != 'none') {
        (0, _autosize.default)(this.refInput);
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setValue(nextProps.value);
  }

  render() {
    const _this$props = this.props,
          autoFocus = _this$props.autoFocus,
          border = _this$props.border,
          value = _this$props.value,
          placeholder = _this$props.placeholder;
    return _react.default.createElement(_Base.InlineInput, {
      ref: this.setRef,
      border: border,
      onMouseDown: this.onMouseDown,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onKeyDown: this.onKeyDown,
      placeholder: value.length == 0 ? undefined : placeholder,
      defaultValue: value,
      autoComplete: "off",
      autoCorrect: "off",
      autoCapitalize: "off",
      spellCheck: "false",
      dataGramm: "false",
      rows: 1,
      autoFocus: autoFocus
    });
  }

}

InlineInputController.propTypes = {
  onSave: _propTypes.default.func,
  border: _propTypes.default.bool,
  placeholder: _propTypes.default.string,
  value: _propTypes.default.string,
  autoFocus: _propTypes.default.bool,
  resize: _propTypes.default.oneOf(['none', 'vertical', 'horizontal'])
};
InlineInputController.defaultProps = {
  onSave: () => {},
  placeholder: '',
  value: '',
  border: false,
  autoFocus: false,
  resize: 'none'
};
var _default = InlineInputController;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/widgets/NewLaneTitleEditor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-trello/dist/widgets/NewLaneTitleEditor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Base = __webpack_require__(/*! ../styles/Base */ "./node_modules/react-trello/dist/styles/Base.js");

var _autosize = _interopRequireDefault(__webpack_require__(/*! autosize */ "./node_modules/autosize/dist/autosize.js"));

class NewLaneTitleEditor extends _react.default.Component {
  constructor(...args) {
    super(...args);
    (0, _defineProperty2.default)(this, "onKeyDown", e => {
      if (e.keyCode == 13) {
        this.refInput.blur();
        this.props.onSave();
        e.preventDefault();
      }

      if (e.keyCode == 27) {
        this.cancel();
        e.preventDefault();
      }

      if (e.keyCode == 9) {
        if (this.getValue().length == 0) {
          this.cancel();
        } else {
          this.props.onSave();
        }

        e.preventDefault();
      }
    });
    (0, _defineProperty2.default)(this, "cancel", () => {
      this.setValue('');
      this.props.onCancel();
      this.refInput.blur();
    });
    (0, _defineProperty2.default)(this, "getValue", () => this.refInput.value);
    (0, _defineProperty2.default)(this, "setValue", value => this.refInput.value = value);
    (0, _defineProperty2.default)(this, "saveValue", () => {
      if (this.getValue() != this.props.value) {
        this.props.onSave(this.getValue());
      }
    });
    (0, _defineProperty2.default)(this, "focus", () => this.refInput.focus());
    (0, _defineProperty2.default)(this, "setRef", ref => {
      this.refInput = ref;

      if (this.props.resize != 'none') {
        (0, _autosize.default)(this.refInput);
      }
    });
  }

  render() {
    const _this$props = this.props,
          autoFocus = _this$props.autoFocus,
          resize = _this$props.resize,
          border = _this$props.border,
          autoResize = _this$props.autoResize,
          value = _this$props.value,
          placeholder = _this$props.placeholder;
    return _react.default.createElement(_Base.InlineInput, {
      style: {
        resize: resize
      },
      ref: this.setRef,
      border: border,
      onKeyDown: this.onKeyDown,
      placeholder: value.length == 0 ? undefined : placeholder,
      defaultValue: value,
      rows: 3,
      autoResize: autoResize,
      autoFocus: autoFocus
    });
  }

}

NewLaneTitleEditor.propTypes = {
  onSave: _propTypes.default.func,
  onCancel: _propTypes.default.func,
  border: _propTypes.default.bool,
  placeholder: _propTypes.default.string,
  value: _propTypes.default.string,
  autoFocus: _propTypes.default.bool,
  autoResize: _propTypes.default.bool,
  resize: _propTypes.default.oneOf(['none', 'vertical', 'horizontal'])
};
NewLaneTitleEditor.defaultProps = {
  inputRef: () => {},
  onSave: () => {},
  onCancel: () => {},
  placeholder: '',
  value: '',
  border: false,
  autoFocus: false,
  autoResize: false,
  resize: 'none'
};
var _default = NewLaneTitleEditor;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/widgets/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-trello/dist/widgets/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _DeleteButton = _interopRequireDefault(__webpack_require__(/*! ./DeleteButton */ "./node_modules/react-trello/dist/widgets/DeleteButton.js"));

var _EditableLabel = _interopRequireDefault(__webpack_require__(/*! ./EditableLabel */ "./node_modules/react-trello/dist/widgets/EditableLabel.js"));

var _InlineInput = _interopRequireDefault(__webpack_require__(/*! ./InlineInput */ "./node_modules/react-trello/dist/widgets/InlineInput.js"));

var _default = {
  DeleteButton: _DeleteButton.default,
  EditableLabel: _EditableLabel.default,
  InlineInput: _InlineInput.default
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-trello/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/components/Provider.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/components/Provider.js ***!
  \**************************************************************************************/
/*! exports provided: createProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProvider", function() { return createProvider; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/PropTypes */ "./node_modules/react-trello/node_modules/react-redux/es/utils/PropTypes.js");
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-trello/node_modules/react-redux/es/utils/warning.js");





var prefixUnsafeLifecycleMethods = typeof react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef !== "undefined";
var didWarnAboutReceivingStore = false;

function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }

  didWarnAboutReceivingStore = true;
  Object(_utils_warning__WEBPACK_IMPORTED_MODULE_4__["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reduxjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider(storeKey) {
  var _Provider$childContex;

  if (storeKey === void 0) {
    storeKey = 'store';
  }

  var subscriptionKey = storeKey + "Subscription";

  var Provider =
  /*#__PURE__*/
  function (_Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Provider, _Component);

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      var _this;

      _this = _Component.call(this, props, context) || this;
      _this[storeKey] = props.store;
      return _this;
    }

    _proto.render = function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(this.props.children);
    };

    return Provider;
  }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

  if (true) {
    // Use UNSAFE_ event name where supported
    var eventName = prefixUnsafeLifecycleMethods ? 'UNSAFE_componentWillReceiveProps' : 'componentWillReceiveProps';

    Provider.prototype[eventName] = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: _utils_PropTypes__WEBPACK_IMPORTED_MODULE_3__["storeShape"].isRequired,
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_3__["storeShape"].isRequired, _Provider$childContex[subscriptionKey] = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_3__["subscriptionShape"], _Provider$childContex);
  return Provider;
}
/* harmony default export */ __webpack_exports__["default"] = (createProvider());

/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/components/connectAdvanced.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/components/connectAdvanced.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return connectAdvanced; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/react-trello/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-trello/node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/PropTypes */ "./node_modules/react-trello/node_modules/react-redux/es/utils/PropTypes.js");










var prefixUnsafeLifecycleMethods = typeof react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef !== "undefined";
var hotReloadingVersion = 0;
var dummyState = {};

function noop() {}

function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);

        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };
  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  var _contextTypes, _childContextTypes;

  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      connectOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef"]);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;
  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_9__["storeShape"], _contextTypes[subscriptionKey] = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_9__["subscriptionShape"], _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_9__["subscriptionShape"], _childContextTypes);
  return function wrapWithConnect(WrappedComponent) {
    invariant__WEBPACK_IMPORTED_MODULE_5___default()(Object(react_is__WEBPACK_IMPORTED_MODULE_7__["isValidElementType"])(WrappedComponent), "You must pass a component to the function returned by " + (methodName + ". Instead received " + JSON.stringify(WrappedComponent)));
    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent // TODO Actually fix our use of componentWillReceiveProps

      /* eslint-disable react/no-deprecated */

    });

    var Connect =
    /*#__PURE__*/
    function (_Component) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Connect, _Component);

      function Connect(props, context) {
        var _this;

        _this = _Component.call(this, props, context) || this;
        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this)));
        invariant__WEBPACK_IMPORTED_MODULE_5___default()(_this.store, "Could not find \"" + storeKey + "\" in either the context or props of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + ("or explicitly pass \"" + storeKey + "\" as a prop to \"" + displayName + "\"."));

        _this.initSelector();

        _this.initSubscription();

        return _this;
      }

      var _proto = Connect.prototype;

      _proto.getChildContext = function getChildContext() {
        var _ref3;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref3 = {}, _ref3[subscriptionKey] = subscription || this.context[subscriptionKey], _ref3;
      };

      _proto.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return; // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.

        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      }; // Note: this is renamed below to the UNSAFE_ version in React >=16.3.0


      _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      _proto.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      _proto.getWrappedInstance = function getWrappedInstance() {
        invariant__WEBPACK_IMPORTED_MODULE_5___default()(withRef, "To access the wrapped instance, you need to specify " + ("{ withRef: true } in the options argument of the " + methodName + "() call."));
        return this.wrappedInstance;
      };

      _proto.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      _proto.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      _proto.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return; // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_8__["default"](this.store, parentSub, this.onStateChange.bind(this)); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.

        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      _proto.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      _proto.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      _proto.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      _proto.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props; // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad

        var withExtras = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props);

        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      _proto.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return Object(react__WEBPACK_IMPORTED_MODULE_6__["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

    if (prefixUnsafeLifecycleMethods) {
      // Use UNSAFE_ event name where supported
      Connect.prototype.UNSAFE_componentWillReceiveProps = Connect.prototype.componentWillReceiveProps;
      delete Connect.prototype.componentWillReceiveProps;
    }
    /* eslint-enable react/no-deprecated */


    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (true) {
      // Use UNSAFE_ event name where supported
      var eventName = prefixUnsafeLifecycleMethods ? 'UNSAFE_componentWillUpdate' : 'componentWillUpdate';

      Connect.prototype[eventName] = function componentWillUpdate() {
        var _this2 = this;

        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector(); // If any connected descendants don't hot reload (and resubscribe in the process), their
          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
          // listeners, this does mean that the old versions of connected descendants will still be
          // notified of state changes; however, their onStateChange function is a no-op so this
          // isn't a huge deal.

          var oldListeners = [];

          if (this.subscription) {
            oldListeners = this.subscription.listeners.get();
            this.subscription.tryUnsubscribe();
          }

          this.initSubscription();

          if (shouldHandleStateChanges) {
            this.subscription.trySubscribe();
            oldListeners.forEach(function (listener) {
              return _this2.subscription.listeners.subscribe(listener);
            });
          }
        }
      };
    }

    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/connect/connect.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/connect/connect.js ***!
  \**********************************************************************************/
/*! exports provided: createConnect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConnect", function() { return createConnect; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/connectAdvanced */ "./node_modules/react-trello/node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/shallowEqual */ "./node_modules/react-trello/node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapDispatchToProps */ "./node_modules/react-trello/node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapStateToProps */ "./node_modules/react-trello/node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var _mergeProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mergeProps */ "./node_modules/react-trello/node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var _selectorFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectorFactory */ "./node_modules/react-trello/node_modules/react-redux/es/connect/selectorFactory.js");








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__["default"] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__["default"] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__["default"] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps__WEBPACK_IMPORTED_MODULE_6__["default"] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory__WEBPACK_IMPORTED_MODULE_7__["default"] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areMergedPropsE,
        extraOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ __webpack_exports__["default"] = (createConnect());

/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \*********************************************************************************************/
/*! exports provided: whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsFunction", function() { return whenMapDispatchToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsMissing", function() { return whenMapDispatchToPropsIsMissing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsObject", function() { return whenMapDispatchToPropsIsObject; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-trello/node_modules/react-redux/es/connect/wrapMapToProps.js");


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsFunc"])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/connect/mapStateToProps.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \******************************************************************************************/
/*! exports provided: whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsFunction", function() { return whenMapStateToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsMissing", function() { return whenMapStateToPropsIsMissing; });
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-trello/node_modules/react-redux/es/connect/wrapMapToProps.js");

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsFunc"])(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsConstant"])(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/connect/mergeProps.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/connect/mergeProps.js ***!
  \*************************************************************************************/
/*! exports provided: defaultMergeProps, wrapMergePropsFunc, whenMergePropsIsFunction, whenMergePropsIsOmitted, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMergeProps", function() { return defaultMergeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMergePropsFunc", function() { return wrapMergePropsFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsFunction", function() { return whenMergePropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsOmitted", function() { return whenMergePropsIsOmitted; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-trello/node_modules/react-redux/es/utils/verifyPlainObject.js");


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/connect/selectorFactory.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/connect/selectorFactory.js ***!
  \******************************************************************************************/
/*! exports provided: impureFinalPropsSelectorFactory, pureFinalPropsSelectorFactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "impureFinalPropsSelectorFactory", function() { return impureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pureFinalPropsSelectorFactory", function() { return pureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return finalPropsSelectorFactory; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _verifySubselectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifySubselectors */ "./node_modules/react-trello/node_modules/react-redux/es/connect/verifySubselectors.js");


function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (true) {
    Object(_verifySubselectors__WEBPACK_IMPORTED_MODULE_1__["default"])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/connect/verifySubselectors.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifySubselectors; });
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-trello/node_modules/react-redux/es/utils/warning.js");


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      Object(_utils_warning__WEBPACK_IMPORTED_MODULE_0__["default"])("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \*****************************************************************************************/
/*! exports provided: wrapMapToPropsConstant, getDependsOnOwnProps, wrapMapToPropsFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsConstant", function() { return wrapMapToPropsConstant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependsOnOwnProps", function() { return getDependsOnOwnProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsFunc", function() { return wrapMapToPropsFunc; });
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-trello/node_modules/react-redux/es/utils/verifyPlainObject.js");

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/index.js ***!
  \************************************************************************/
/*! exports provided: Provider, createProvider, connectAdvanced, connect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Provider */ "./node_modules/react-trello/node_modules/react-redux/es/components/Provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return _components_Provider__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createProvider", function() { return _components_Provider__WEBPACK_IMPORTED_MODULE_0__["createProvider"]; });

/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connectAdvanced */ "./node_modules/react-trello/node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _connect_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connect/connect */ "./node_modules/react-trello/node_modules/react-redux/es/connect/connect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return _connect_connect__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/utils/PropTypes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/utils/PropTypes.js ***!
  \**********************************************************************************/
/*! exports provided: subscriptionShape, storeShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscriptionShape", function() { return subscriptionShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeShape", function() { return storeShape; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var subscriptionShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  trySubscribe: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  tryUnsubscribe: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  notifyNestedSubs: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  isSubscribed: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
});
var storeShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  subscribe: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  getState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
});

/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/utils/Subscription.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/utils/Subscription.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Subscription; });
// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants
var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];
  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;

      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);
      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;
        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(store, parentSub, onStateChange) {
    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/utils/isPlainObject.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/utils/isPlainObject.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPlainObject; });
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/utils/shallowEqual.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/utils/shallowEqual.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shallowEqual; });
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/utils/verifyPlainObject.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifyPlainObject; });
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject */ "./node_modules/react-trello/node_modules/react-redux/es/utils/isPlainObject.js");
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warning */ "./node_modules/react-trello/node_modules/react-redux/es/utils/warning.js");


function verifyPlainObject(value, displayName, methodName) {
  if (!Object(_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    Object(_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}

/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/utils/warning.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/utils/warning.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warning; });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),

/***/ "./node_modules/reduce-reducers/es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/reduce-reducers/es/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var initialState = typeof args[args.length - 1] !== 'function' && args.pop();
  var reducers = args;

  if (typeof initialState === 'undefined') {
    throw new TypeError('The initial state may not be undefined. If you do not want to set a value for this reducer, you can use null instead of undefined.');
  }

  return function (prevState, value) {
    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    var prevStateIsUndefined = typeof prevState === 'undefined';
    var valueIsUndefined = typeof value === 'undefined';

    if (prevStateIsUndefined && valueIsUndefined && initialState) {
      return initialState;
    }

    return reducers.reduce(function (newState, reducer) {
      return reducer.apply(undefined, [newState, value].concat(args));
    }, prevStateIsUndefined && !valueIsUndefined && initialState ? initialState : prevState);
  };
});

/***/ }),

/***/ "./node_modules/redux-actions/es/combineActions.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-actions/es/combineActions.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return combineActions; });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/isFunction */ "./node_modules/redux-actions/es/utils/isFunction.js");
/* harmony import */ var _utils_isSymbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/isSymbol */ "./node_modules/redux-actions/es/utils/isSymbol.js");
/* harmony import */ var _utils_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/isEmpty */ "./node_modules/redux-actions/es/utils/isEmpty.js");
/* harmony import */ var _utils_toString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/toString */ "./node_modules/redux-actions/es/utils/toString.js");
/* harmony import */ var _utils_isString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/isString */ "./node_modules/redux-actions/es/utils/isString.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./node_modules/redux-actions/es/constants.js");








function isValidActionType(type) {
  return Object(_utils_isString__WEBPACK_IMPORTED_MODULE_5__["default"])(type) || Object(_utils_isFunction__WEBPACK_IMPORTED_MODULE_1__["default"])(type) || Object(_utils_isSymbol__WEBPACK_IMPORTED_MODULE_2__["default"])(type);
}

function isValidActionTypes(types) {
  if (Object(_utils_isEmpty__WEBPACK_IMPORTED_MODULE_3__["default"])(types)) {
    return false;
  }

  return types.every(isValidActionType);
}

function combineActions() {
  for (var _len = arguments.length, actionsTypes = new Array(_len), _key = 0; _key < _len; _key++) {
    actionsTypes[_key] = arguments[_key];
  }

  invariant__WEBPACK_IMPORTED_MODULE_0___default()(isValidActionTypes(actionsTypes), 'Expected action types to be strings, symbols, or action creators');
  var combinedActionType = actionsTypes.map(_utils_toString__WEBPACK_IMPORTED_MODULE_4__["default"]).join(_constants__WEBPACK_IMPORTED_MODULE_6__["ACTION_TYPE_DELIMITER"]);
  return {
    toString: function toString() {
      return combinedActionType;
    }
  };
}

/***/ }),

/***/ "./node_modules/redux-actions/es/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/redux-actions/es/constants.js ***!
  \****************************************************/
/*! exports provided: DEFAULT_NAMESPACE, ACTION_TYPE_DELIMITER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_NAMESPACE", function() { return DEFAULT_NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_TYPE_DELIMITER", function() { return ACTION_TYPE_DELIMITER; });
var DEFAULT_NAMESPACE = '/';
var ACTION_TYPE_DELIMITER = '||';

/***/ }),

/***/ "./node_modules/redux-actions/es/createAction.js":
/*!*******************************************************!*\
  !*** ./node_modules/redux-actions/es/createAction.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createAction; });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/isFunction */ "./node_modules/redux-actions/es/utils/isFunction.js");
/* harmony import */ var _utils_identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/identity */ "./node_modules/redux-actions/es/utils/identity.js");
/* harmony import */ var _utils_isNull__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/isNull */ "./node_modules/redux-actions/es/utils/isNull.js");




function createAction(type, payloadCreator, metaCreator) {
  if (payloadCreator === void 0) {
    payloadCreator = _utils_identity__WEBPACK_IMPORTED_MODULE_2__["default"];
  }

  invariant__WEBPACK_IMPORTED_MODULE_0___default()(Object(_utils_isFunction__WEBPACK_IMPORTED_MODULE_1__["default"])(payloadCreator) || Object(_utils_isNull__WEBPACK_IMPORTED_MODULE_3__["default"])(payloadCreator), 'Expected payloadCreator to be a function, undefined or null');
  var finalPayloadCreator = Object(_utils_isNull__WEBPACK_IMPORTED_MODULE_3__["default"])(payloadCreator) || payloadCreator === _utils_identity__WEBPACK_IMPORTED_MODULE_2__["default"] ? _utils_identity__WEBPACK_IMPORTED_MODULE_2__["default"] : function (head) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return head instanceof Error ? head : payloadCreator.apply(void 0, [head].concat(args));
  };
  var hasMeta = Object(_utils_isFunction__WEBPACK_IMPORTED_MODULE_1__["default"])(metaCreator);
  var typeString = type.toString();

  var actionCreator = function actionCreator() {
    var payload = finalPayloadCreator.apply(void 0, arguments);
    var action = {
      type: type
    };

    if (payload instanceof Error) {
      action.error = true;
    }

    if (payload !== undefined) {
      action.payload = payload;
    }

    if (hasMeta) {
      action.meta = metaCreator.apply(void 0, arguments);
    }

    return action;
  };

  actionCreator.toString = function () {
    return typeString;
  };

  return actionCreator;
}

/***/ }),

/***/ "./node_modules/redux-actions/es/createActions.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-actions/es/createActions.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createActions; });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_isPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/isPlainObject */ "./node_modules/redux-actions/es/utils/isPlainObject.js");
/* harmony import */ var _utils_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/isFunction */ "./node_modules/redux-actions/es/utils/isFunction.js");
/* harmony import */ var _utils_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/identity */ "./node_modules/redux-actions/es/utils/identity.js");
/* harmony import */ var _utils_isArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/isArray */ "./node_modules/redux-actions/es/utils/isArray.js");
/* harmony import */ var _utils_isString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/isString */ "./node_modules/redux-actions/es/utils/isString.js");
/* harmony import */ var _utils_isNil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/isNil */ "./node_modules/redux-actions/es/utils/isNil.js");
/* harmony import */ var _utils_getLastElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/getLastElement */ "./node_modules/redux-actions/es/utils/getLastElement.js");
/* harmony import */ var _utils_camelCase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/camelCase */ "./node_modules/redux-actions/es/utils/camelCase.js");
/* harmony import */ var _utils_arrayToObject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/arrayToObject */ "./node_modules/redux-actions/es/utils/arrayToObject.js");
/* harmony import */ var _utils_flattenActionMap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/flattenActionMap */ "./node_modules/redux-actions/es/utils/flattenActionMap.js");
/* harmony import */ var _utils_unflattenActionCreators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/unflattenActionCreators */ "./node_modules/redux-actions/es/utils/unflattenActionCreators.js");
/* harmony import */ var _createAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./createAction */ "./node_modules/redux-actions/es/createAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./constants */ "./node_modules/redux-actions/es/constants.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function createActions(actionMap) {
  for (var _len = arguments.length, identityActions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    identityActions[_key - 1] = arguments[_key];
  }

  var options = Object(_utils_isPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_utils_getLastElement__WEBPACK_IMPORTED_MODULE_7__["default"])(identityActions)) ? identityActions.pop() : {};
  invariant__WEBPACK_IMPORTED_MODULE_0___default()(identityActions.every(_utils_isString__WEBPACK_IMPORTED_MODULE_5__["default"]) && (Object(_utils_isString__WEBPACK_IMPORTED_MODULE_5__["default"])(actionMap) || Object(_utils_isPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(actionMap)), 'Expected optional object followed by string action types');

  if (Object(_utils_isString__WEBPACK_IMPORTED_MODULE_5__["default"])(actionMap)) {
    return actionCreatorsFromIdentityActions([actionMap].concat(identityActions), options);
  }

  return _objectSpread({}, actionCreatorsFromActionMap(actionMap, options), actionCreatorsFromIdentityActions(identityActions, options));
}

function actionCreatorsFromActionMap(actionMap, options) {
  var flatActionMap = Object(_utils_flattenActionMap__WEBPACK_IMPORTED_MODULE_10__["default"])(actionMap, options);
  var flatActionCreators = actionMapToActionCreators(flatActionMap);
  return Object(_utils_unflattenActionCreators__WEBPACK_IMPORTED_MODULE_11__["default"])(flatActionCreators, options);
}

function actionMapToActionCreators(actionMap, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      prefix = _ref.prefix,
      _ref$namespace = _ref.namespace,
      namespace = _ref$namespace === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_13__["DEFAULT_NAMESPACE"] : _ref$namespace;

  function isValidActionMapValue(actionMapValue) {
    if (Object(_utils_isFunction__WEBPACK_IMPORTED_MODULE_2__["default"])(actionMapValue) || Object(_utils_isNil__WEBPACK_IMPORTED_MODULE_6__["default"])(actionMapValue)) {
      return true;
    }

    if (Object(_utils_isArray__WEBPACK_IMPORTED_MODULE_4__["default"])(actionMapValue)) {
      var _actionMapValue$ = actionMapValue[0],
          payload = _actionMapValue$ === void 0 ? _utils_identity__WEBPACK_IMPORTED_MODULE_3__["default"] : _actionMapValue$,
          meta = actionMapValue[1];
      return Object(_utils_isFunction__WEBPACK_IMPORTED_MODULE_2__["default"])(payload) && Object(_utils_isFunction__WEBPACK_IMPORTED_MODULE_2__["default"])(meta);
    }

    return false;
  }

  return Object(_utils_arrayToObject__WEBPACK_IMPORTED_MODULE_9__["default"])(Object.keys(actionMap), function (partialActionCreators, type) {
    var _objectSpread2;

    var actionMapValue = actionMap[type];
    invariant__WEBPACK_IMPORTED_MODULE_0___default()(isValidActionMapValue(actionMapValue), 'Expected function, undefined, null, or array with payload and meta ' + ("functions for " + type));
    var prefixedType = prefix ? "" + prefix + namespace + type : type;
    var actionCreator = Object(_utils_isArray__WEBPACK_IMPORTED_MODULE_4__["default"])(actionMapValue) ? _createAction__WEBPACK_IMPORTED_MODULE_12__["default"].apply(void 0, [prefixedType].concat(actionMapValue)) : Object(_createAction__WEBPACK_IMPORTED_MODULE_12__["default"])(prefixedType, actionMapValue);
    return _objectSpread({}, partialActionCreators, (_objectSpread2 = {}, _objectSpread2[type] = actionCreator, _objectSpread2));
  });
}

function actionCreatorsFromIdentityActions(identityActions, options) {
  var actionMap = Object(_utils_arrayToObject__WEBPACK_IMPORTED_MODULE_9__["default"])(identityActions, function (partialActionMap, type) {
    var _objectSpread3;

    return _objectSpread({}, partialActionMap, (_objectSpread3 = {}, _objectSpread3[type] = _utils_identity__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread3));
  });
  var actionCreators = actionMapToActionCreators(actionMap, options);
  return Object(_utils_arrayToObject__WEBPACK_IMPORTED_MODULE_9__["default"])(Object.keys(actionCreators), function (partialActionCreators, type) {
    var _objectSpread4;

    return _objectSpread({}, partialActionCreators, (_objectSpread4 = {}, _objectSpread4[Object(_utils_camelCase__WEBPACK_IMPORTED_MODULE_8__["default"])(type)] = actionCreators[type], _objectSpread4));
  });
}

/***/ }),

/***/ "./node_modules/redux-actions/es/createCurriedAction.js":
/*!**************************************************************!*\
  !*** ./node_modules/redux-actions/es/createCurriedAction.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var just_curry_it__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! just-curry-it */ "./node_modules/just-curry-it/index.js");
/* harmony import */ var just_curry_it__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(just_curry_it__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createAction */ "./node_modules/redux-actions/es/createAction.js");


/* harmony default export */ __webpack_exports__["default"] = (function (type, payloadCreator) {
  return just_curry_it__WEBPACK_IMPORTED_MODULE_0___default()(Object(_createAction__WEBPACK_IMPORTED_MODULE_1__["default"])(type, payloadCreator), payloadCreator.length);
});

/***/ }),

/***/ "./node_modules/redux-actions/es/handleAction.js":
/*!*******************************************************!*\
  !*** ./node_modules/redux-actions/es/handleAction.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handleAction; });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/isFunction */ "./node_modules/redux-actions/es/utils/isFunction.js");
/* harmony import */ var _utils_isPlainObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/isPlainObject */ "./node_modules/redux-actions/es/utils/isPlainObject.js");
/* harmony import */ var _utils_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/identity */ "./node_modules/redux-actions/es/utils/identity.js");
/* harmony import */ var _utils_isNil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/isNil */ "./node_modules/redux-actions/es/utils/isNil.js");
/* harmony import */ var _utils_isUndefined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/isUndefined */ "./node_modules/redux-actions/es/utils/isUndefined.js");
/* harmony import */ var _utils_toString__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/toString */ "./node_modules/redux-actions/es/utils/toString.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./node_modules/redux-actions/es/constants.js");








function handleAction(type, reducer, defaultState) {
  if (reducer === void 0) {
    reducer = _utils_identity__WEBPACK_IMPORTED_MODULE_3__["default"];
  }

  var types = Object(_utils_toString__WEBPACK_IMPORTED_MODULE_6__["default"])(type).split(_constants__WEBPACK_IMPORTED_MODULE_7__["ACTION_TYPE_DELIMITER"]);
  invariant__WEBPACK_IMPORTED_MODULE_0___default()(!Object(_utils_isUndefined__WEBPACK_IMPORTED_MODULE_5__["default"])(defaultState), "defaultState for reducer handling " + types.join(', ') + " should be defined");
  invariant__WEBPACK_IMPORTED_MODULE_0___default()(Object(_utils_isFunction__WEBPACK_IMPORTED_MODULE_1__["default"])(reducer) || Object(_utils_isPlainObject__WEBPACK_IMPORTED_MODULE_2__["default"])(reducer), 'Expected reducer to be a function or object with next and throw reducers');

  var _ref = Object(_utils_isFunction__WEBPACK_IMPORTED_MODULE_1__["default"])(reducer) ? [reducer, reducer] : [reducer.next, reducer.throw].map(function (aReducer) {
    return Object(_utils_isNil__WEBPACK_IMPORTED_MODULE_4__["default"])(aReducer) ? _utils_identity__WEBPACK_IMPORTED_MODULE_3__["default"] : aReducer;
  }),
      nextReducer = _ref[0],
      throwReducer = _ref[1];

  return function (state, action) {
    if (state === void 0) {
      state = defaultState;
    }

    var actionType = action.type;

    if (!actionType || types.indexOf(Object(_utils_toString__WEBPACK_IMPORTED_MODULE_6__["default"])(actionType)) === -1) {
      return state;
    }

    return (action.error === true ? throwReducer : nextReducer)(state, action);
  };
}

/***/ }),

/***/ "./node_modules/redux-actions/es/handleActions.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-actions/es/handleActions.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handleActions; });
/* harmony import */ var reduce_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reduce-reducers */ "./node_modules/reduce-reducers/es/index.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_isPlainObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/isPlainObject */ "./node_modules/redux-actions/es/utils/isPlainObject.js");
/* harmony import */ var _utils_isMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/isMap */ "./node_modules/redux-actions/es/utils/isMap.js");
/* harmony import */ var _utils_ownKeys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/ownKeys */ "./node_modules/redux-actions/es/utils/ownKeys.js");
/* harmony import */ var _utils_flattenReducerMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/flattenReducerMap */ "./node_modules/redux-actions/es/utils/flattenReducerMap.js");
/* harmony import */ var _handleAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handleAction */ "./node_modules/redux-actions/es/handleAction.js");
/* harmony import */ var _utils_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/get */ "./node_modules/redux-actions/es/utils/get.js");








function handleActions(handlers, defaultState, options) {
  if (options === void 0) {
    options = {};
  }

  invariant__WEBPACK_IMPORTED_MODULE_1___default()(Object(_utils_isPlainObject__WEBPACK_IMPORTED_MODULE_2__["default"])(handlers) || Object(_utils_isMap__WEBPACK_IMPORTED_MODULE_3__["default"])(handlers), 'Expected handlers to be a plain object.');
  var flattenedReducerMap = Object(_utils_flattenReducerMap__WEBPACK_IMPORTED_MODULE_5__["default"])(handlers, options);
  var reducers = Object(_utils_ownKeys__WEBPACK_IMPORTED_MODULE_4__["default"])(flattenedReducerMap).map(function (type) {
    return Object(_handleAction__WEBPACK_IMPORTED_MODULE_6__["default"])(type, Object(_utils_get__WEBPACK_IMPORTED_MODULE_7__["default"])(type, flattenedReducerMap), defaultState);
  });
  var reducer = reduce_reducers__WEBPACK_IMPORTED_MODULE_0__["default"].apply(void 0, reducers.concat([defaultState]));
  return function (state, action) {
    if (state === void 0) {
      state = defaultState;
    }

    return reducer(state, action);
  };
}

/***/ }),

/***/ "./node_modules/redux-actions/es/index.js":
/*!************************************************!*\
  !*** ./node_modules/redux-actions/es/index.js ***!
  \************************************************/
/*! exports provided: combineActions, createAction, createActions, createCurriedAction, handleAction, handleActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _combineActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combineActions */ "./node_modules/redux-actions/es/combineActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineActions", function() { return _combineActions__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _createAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createAction */ "./node_modules/redux-actions/es/createAction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return _createAction__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _createActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createActions */ "./node_modules/redux-actions/es/createActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createActions", function() { return _createActions__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _createCurriedAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createCurriedAction */ "./node_modules/redux-actions/es/createCurriedAction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCurriedAction", function() { return _createCurriedAction__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _handleAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handleAction */ "./node_modules/redux-actions/es/handleAction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleAction", function() { return _handleAction__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _handleActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handleActions */ "./node_modules/redux-actions/es/handleActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleActions", function() { return _handleActions__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./node_modules/redux-actions/es/utils/arrayToObject.js":
/*!**************************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/arrayToObject.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (array, callback) {
  return array.reduce(function (partialObject, element) {
    return callback(partialObject, element);
  }, {});
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/camelCase.js":
/*!**********************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/camelCase.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var to_camel_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! to-camel-case */ "./node_modules/to-camel-case/index.js");
/* harmony import */ var to_camel_case__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(to_camel_case__WEBPACK_IMPORTED_MODULE_0__);

var namespacer = '/';
/* harmony default export */ __webpack_exports__["default"] = (function (type) {
  return type.indexOf(namespacer) === -1 ? to_camel_case__WEBPACK_IMPORTED_MODULE_0___default()(type) : type.split(namespacer).map(to_camel_case__WEBPACK_IMPORTED_MODULE_0___default.a).join(namespacer);
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/flattenActionMap.js":
/*!*****************************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/flattenActionMap.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject */ "./node_modules/redux-actions/es/utils/isPlainObject.js");
/* harmony import */ var _flattenWhenNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flattenWhenNode */ "./node_modules/redux-actions/es/utils/flattenWhenNode.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_flattenWhenNode__WEBPACK_IMPORTED_MODULE_1__["default"])(_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/flattenReducerMap.js":
/*!******************************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/flattenReducerMap.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject */ "./node_modules/redux-actions/es/utils/isPlainObject.js");
/* harmony import */ var _isMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isMap */ "./node_modules/redux-actions/es/utils/isMap.js");
/* harmony import */ var _hasGeneratorInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hasGeneratorInterface */ "./node_modules/redux-actions/es/utils/hasGeneratorInterface.js");
/* harmony import */ var _flattenWhenNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flattenWhenNode */ "./node_modules/redux-actions/es/utils/flattenWhenNode.js");




/* harmony default export */ __webpack_exports__["default"] = (Object(_flattenWhenNode__WEBPACK_IMPORTED_MODULE_3__["default"])(function (node) {
  return (Object(_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(node) || Object(_isMap__WEBPACK_IMPORTED_MODULE_1__["default"])(node)) && !Object(_hasGeneratorInterface__WEBPACK_IMPORTED_MODULE_2__["default"])(node);
}));

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/flattenWhenNode.js":
/*!****************************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/flattenWhenNode.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./node_modules/redux-actions/es/constants.js");
/* harmony import */ var _ownKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ownKeys */ "./node_modules/redux-actions/es/utils/ownKeys.js");
/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get */ "./node_modules/redux-actions/es/utils/get.js");



/* harmony default export */ __webpack_exports__["default"] = (function (predicate) {
  return function flatten(map, _temp, partialFlatMap, partialFlatActionType) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$namespace = _ref.namespace,
        namespace = _ref$namespace === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_NAMESPACE"] : _ref$namespace,
        prefix = _ref.prefix;

    if (partialFlatMap === void 0) {
      partialFlatMap = {};
    }

    if (partialFlatActionType === void 0) {
      partialFlatActionType = '';
    }

    function connectNamespace(type) {
      var _ref2;

      if (!partialFlatActionType) return type;
      var types = type.toString().split(_constants__WEBPACK_IMPORTED_MODULE_0__["ACTION_TYPE_DELIMITER"]);
      var partials = partialFlatActionType.split(_constants__WEBPACK_IMPORTED_MODULE_0__["ACTION_TYPE_DELIMITER"]);
      return (_ref2 = []).concat.apply(_ref2, partials.map(function (p) {
        return types.map(function (t) {
          return "" + p + namespace + t;
        });
      })).join(_constants__WEBPACK_IMPORTED_MODULE_0__["ACTION_TYPE_DELIMITER"]);
    }

    function connectPrefix(type) {
      if (partialFlatActionType || !prefix || prefix && new RegExp("^" + prefix + namespace).test(type)) {
        return type;
      }

      return "" + prefix + namespace + type;
    }

    Object(_ownKeys__WEBPACK_IMPORTED_MODULE_1__["default"])(map).forEach(function (type) {
      var nextNamespace = connectPrefix(connectNamespace(type));
      var mapValue = Object(_get__WEBPACK_IMPORTED_MODULE_2__["default"])(type, map);

      if (predicate(mapValue)) {
        flatten(mapValue, {
          namespace: namespace,
          prefix: prefix
        }, partialFlatMap, nextNamespace);
      } else {
        partialFlatMap[nextNamespace] = mapValue;
      }
    });
    return partialFlatMap;
  };
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/get.js":
/*!****************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/get.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return get; });
/* harmony import */ var _isMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isMap */ "./node_modules/redux-actions/es/utils/isMap.js");

function get(key, x) {
  return Object(_isMap__WEBPACK_IMPORTED_MODULE_0__["default"])(x) ? x.get(key) : x[key];
}

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/getLastElement.js":
/*!***************************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/getLastElement.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (array) {
  return array[array.length - 1];
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/hasGeneratorInterface.js":
/*!**********************************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/hasGeneratorInterface.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hasGeneratorInterface; });
/* harmony import */ var _ownKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ownKeys */ "./node_modules/redux-actions/es/utils/ownKeys.js");

function hasGeneratorInterface(handler) {
  var keys = Object(_ownKeys__WEBPACK_IMPORTED_MODULE_0__["default"])(handler);
  var hasOnlyInterfaceNames = keys.every(function (ownKey) {
    return ownKey === 'next' || ownKey === 'throw';
  });
  return keys.length && keys.length <= 2 && hasOnlyInterfaceNames;
}

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/identity.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/identity.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (value) {
  return value;
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isArray.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isArray.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (value) {
  return Array.isArray(value);
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isEmpty.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isEmpty.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (value) {
  return value.length === 0;
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isFunction.js":
/*!***********************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isFunction.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (value) {
  return typeof value === 'function';
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isMap.js":
/*!******************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isMap.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (value) {
  return typeof Map !== 'undefined' && value instanceof Map;
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isNil.js":
/*!******************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isNil.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (value) {
  return value === null || value === undefined;
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isNull.js":
/*!*******************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isNull.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (value) {
  return value === null;
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isPlainObject.js":
/*!**************************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isPlainObject.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (value) {
  if (typeof value !== 'object' || value === null) return false;
  var proto = value;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(value) === proto;
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isString.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isString.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (value) {
  return typeof value === 'string';
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isSymbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isSymbol.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (value) {
  return typeof value === 'symbol' || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Symbol]';
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isUndefined.js":
/*!************************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isUndefined.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (value) {
  return value === undefined;
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/ownKeys.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/ownKeys.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ownKeys; });
/* harmony import */ var _isMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isMap */ "./node_modules/redux-actions/es/utils/isMap.js");

function ownKeys(object) {
  if (Object(_isMap__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    // We are using loose transforms in babel. Here we are trying to convert an
    // interable to an array. Loose mode expects everything to already be an
    // array. The problem is that our eslint rules encourage us to prefer
    // spread over Array.from.
    //
    // Instead of disabling loose mode we simply disable the warning.
    // eslint-disable-next-line unicorn/prefer-spread
    return Array.from(object.keys());
  }

  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
    return Reflect.ownKeys(object);
  }

  var keys = Object.getOwnPropertyNames(object);

  if (typeof Object.getOwnPropertySymbols === 'function') {
    keys = keys.concat(Object.getOwnPropertySymbols(object));
  }

  return keys;
}

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/toString.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/toString.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (value) {
  return value.toString();
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/unflattenActionCreators.js":
/*!************************************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/unflattenActionCreators.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return unflattenActionCreators; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./node_modules/redux-actions/es/constants.js");
/* harmony import */ var _isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isEmpty */ "./node_modules/redux-actions/es/utils/isEmpty.js");
/* harmony import */ var _camelCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camelCase */ "./node_modules/redux-actions/es/utils/camelCase.js");



function unflattenActionCreators(flatActionCreators, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$namespace = _ref.namespace,
      namespace = _ref$namespace === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_NAMESPACE"] : _ref$namespace,
      prefix = _ref.prefix;

  function unflatten(flatActionType, partialNestedActionCreators, partialFlatActionTypePath) {
    var nextNamespace = Object(_camelCase__WEBPACK_IMPORTED_MODULE_2__["default"])(partialFlatActionTypePath.shift());

    if (Object(_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(partialFlatActionTypePath)) {
      partialNestedActionCreators[nextNamespace] = flatActionCreators[flatActionType];
    } else {
      if (!partialNestedActionCreators[nextNamespace]) {
        partialNestedActionCreators[nextNamespace] = {};
      }

      unflatten(flatActionType, partialNestedActionCreators[nextNamespace], partialFlatActionTypePath);
    }
  }

  var nestedActionCreators = {};
  Object.getOwnPropertyNames(flatActionCreators).forEach(function (type) {
    var unprefixedType = prefix ? type.replace("" + prefix + namespace, '') : type;
    return unflatten(type, nestedActionCreators, unprefixedType.split(namespace));
  });
  return nestedActionCreators;
}

/***/ }),

/***/ "./node_modules/redux-logger/dist/redux-logger.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-logger/dist/redux-logger.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?t(exports):undefined}(this,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)))}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};l(e,t,n)}}function y(e){return"color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h)}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S)}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y)}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w)}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof global?"undefined":N(global))&&global?global:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/to-camel-case/index.js":
/*!*********************************************!*\
  !*** ./node_modules/to-camel-case/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var space = __webpack_require__(/*! to-space-case */ "./node_modules/to-space-case/index.js")

/**
 * Export.
 */

module.exports = toCamelCase

/**
 * Convert a `string` to camel case.
 *
 * @param {String} string
 * @return {String}
 */

function toCamelCase(string) {
  return space(string).replace(/\s(\w)/g, function (matches, letter) {
    return letter.toUpperCase()
  })
}


/***/ }),

/***/ "./node_modules/to-no-case/index.js":
/*!******************************************!*\
  !*** ./node_modules/to-no-case/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Export.
 */

module.exports = toNoCase

/**
 * Test whether a string is camel-case.
 */

var hasSpace = /\s/
var hasSeparator = /(_|-|\.|:)/
var hasCamel = /([a-z][A-Z]|[A-Z][a-z])/

/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 *
 * @param {String} string
 * @return {String}
 */

function toNoCase(string) {
  if (hasSpace.test(string)) return string.toLowerCase()
  if (hasSeparator.test(string)) return (unseparate(string) || string).toLowerCase()
  if (hasCamel.test(string)) return uncamelize(string).toLowerCase()
  return string.toLowerCase()
}

/**
 * Separator splitter.
 */

var separatorSplitter = /[\W_]+(.|$)/g

/**
 * Un-separate a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function unseparate(string) {
  return string.replace(separatorSplitter, function (m, next) {
    return next ? ' ' + next : ''
  })
}

/**
 * Camelcase splitter.
 */

var camelSplitter = /(.)([A-Z]+)/g

/**
 * Un-camelcase a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function uncamelize(string) {
  return string.replace(camelSplitter, function (m, previous, uppers) {
    return previous + ' ' + uppers.toLowerCase().split('').join(' ')
  })
}


/***/ }),

/***/ "./node_modules/to-space-case/index.js":
/*!*********************************************!*\
  !*** ./node_modules/to-space-case/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var clean = __webpack_require__(/*! to-no-case */ "./node_modules/to-no-case/index.js")

/**
 * Export.
 */

module.exports = toSpaceCase

/**
 * Convert a `string` to space case.
 *
 * @param {String} string
 * @return {String}
 */

function toSpaceCase(string) {
  return clean(string).replace(/[\W_]+(.|$)/g, function (matches, match) {
    return match ? ' ' + match : ''
  }).trim()
}


/***/ }),

/***/ "./node_modules/trello-smooth-dnd/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/trello-smooth-dnd/dist/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":o(window))&&(r=window)}e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.containerInstance="smooth-dnd-container-instance",t.containersInDraggable="smooth-dnd-containers-in-draggable",t.defaultGroupName="@@smooth-dnd-default-group@@",t.wrapperClass="smooth-dnd-draggable-wrapper",t.defaultGrabHandleClass="smooth-dnd-default-grap-handle",t.animationClass="animated",t.translationValue="__smooth_dnd_draggable_translation_value",t.visibilityValue="__smooth_dnd_draggable_visibility_value",t.ghostClass="smooth-dnd-ghost",t.containerClass="smooth-dnd-container",t.extraSizeForInsertion="smooth-dnd-extra-size-for-insertion",t.stretcherElementClass="smooth-dnd-stretcher-element",t.stretcherElementInstance="smooth-dnd-stretcher-instance",t.isDraggableDetached="smoth-dnd-is-draggable-detached",t.disbaleTouchActions="smooth-dnd-disable-touch-action",t.noUserSelectClass="smooth-dnd-no-user-select"},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});t.getIntersection=function(e,t){return{left:Math.max(e.left,t.left),top:Math.max(e.top,t.top),right:Math.min(e.right,t.right),bottom:Math.min(e.bottom,t.bottom)}};var n=t.getIntersectionOnAxis=function(e,t,n){return"x"===n?{left:Math.max(e.left,t.left),top:e.top,right:Math.min(e.right,t.right),bottom:e.bottom}:{left:e.left,top:Math.max(e.top,t.top),right:e.right,bottom:Math.min(e.bottom,t.bottom)}},r=t.getContainerRect=function(e){var t=e.getBoundingClientRect(),n={left:t.left,right:t.right+10,top:t.top,bottom:t.bottom};if(a(e,"x")&&!i(e,"x")){var r=n.right-n.left;n.right=n.right+e.scrollWidth-r}if(a(e,"y")&&!i(e,"y")){var o=n.bottom-n.top;n.bottom=n.bottom+e.scrollHeight-o}return n},o=(t.getScrollingAxis=function(t){var n=e.getComputedStyle(t),r=n.overflow;if("auto"===r||"scroll"===r)return"xy";var o=n["overflow-x"],i="auto"===o||"scroll"===o,a=n["overflow-y"];return(i?"x":"")+("auto"===a||"scroll"===a?"y":"")||null},t.isScrolling=function(t,n){var r=e.getComputedStyle(t),o=r.overflow,i=r["overflow-"+n];return"auto"===o||"scroll"===o||("auto"===i||"scroll"===i)}),i=t.isScrollingOrHidden=function(t,n){var r=e.getComputedStyle(t),o=r.overflow,i=r["overflow-"+n];return"auto"===o||"scroll"===o||"hidden"===o||("auto"===i||"scroll"===i||"hidden"===i)},a=t.hasBiggerChild=function(e,t){return"x"===t?e.scrollWidth>e.clientWidth:e.scrollHeight>e.clientHeight};t.hasScrollBar=function(e,t){return a(e,t)&&o(e,t)},t.getVisibleRect=function(e,t){var o=e,l=t||r(e);for(o=e.parentElement;o;)a(o,"x")&&i(o,"x")&&(l=n(l,o.getBoundingClientRect(),"x")),a(o,"y")&&i(o,"y")&&(l=n(l,o.getBoundingClientRect(),"y")),o=o.parentElement;return l},t.listenScrollParent=function(t,n){var r=[];return setTimeout(function(){for(var i=t;i;)(o(i,"x")||o(i,"y"))&&(i.addEventListener("scroll",n),r.push(i)),i=i.parentElement;e.addEventListener("scroll",n)},10),{dispose:function(){r.forEach(function(e){e.removeEventListener("scroll",n)}),e.removeEventListener("scroll",n)}}},t.hasParent=function(e,t){for(var n=e;n;){if(n===t)return!0;n=n.parentElement}return!1},t.getParent=function(e,t){for(var n=e;n;){if(n.matches(t))return n;n=n.parentElement}return null},t.hasClass=function(e,t){return e.className.split(" ").map(function(e){return e}).indexOf(t)>-1},t.addClass=function(e,t){if(e){e.className=e.className||"";var n=e.className.split(" ").filter(function(e){return e});-1===n.indexOf(t)&&(n.unshift(t),e.className=n.join(" "))}},t.removeClass=function(e,t){if(e){var n=e.className.split(" ").filter(function(e){return e&&e!==t});e.className=n.join(" ")}},t.debounce=function(e,t,n){var r=null;return function(){for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];r&&clearTimeout(r),n&&!r?e.call.apply(e,[void 0].concat(i)):r=setTimeout(function(){r=null,e.call.apply(e,[void 0].concat(i))},t)}},t.removeChildAt=function(e,t){return e.removeChild(e.children[t])},t.addChildAt=function(e,t,n){n>=e.children.lenght?e.appendChild(t):e.insertBefore(t,e.children[n])},t.isMobile=function(){return"undefined"!=typeof window&&!!(e.navigator.userAgent.match(/Android/i)||e.navigator.userAgent.match(/webOS/i)||e.navigator.userAgent.match(/iPhone/i)||e.navigator.userAgent.match(/iPad/i)||e.navigator.userAgent.match(/iPod/i)||e.navigator.userAgent.match(/BlackBerry/i)||e.navigator.userAgent.match(/Windows Phone/i))},t.clearSelection=function(){e.getSelection?e.getSelection().empty?e.getSelection().empty():e.getSelection().removeAllRanges&&e.getSelection().removeAllRanges():e.document.selection&&e.document.selection.empty()},t.getElementCursor=function(t){if(t){var n=e.getComputedStyle(t);if(n)return n.cursor}return null}}).call(this,n(0))},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.domDropHandler=function(t){var n=t.element,i=t.draggables;t.layout,t.options;return function(t,a){var l=t.removedIndex,u=t.addedIndex,s=t.droppedElement,c=null;if(null!==l&&(c=(0,r.removeChildAt)(n,l),i.splice(l,1)),null!==u){var d=e.document.createElement("div");d.className=""+o.wrapperClass,d.appendChild(c&&c.firstElementChild?c.firstElementChild:s),d[o.containersInDraggable]=[],(0,r.addChildAt)(n,d,u),u>=i.length?i.push(d):i.splice(u,0,d)}a&&a(t)}},t.reactDropHandler=function(){return{handler:function(e){e.element,e.draggables,e.layout,e.options;return function(e,t){t&&t(e)}}}};var r=n(2),o=n(1)}).call(this,n(0))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dropHandlers=t.constants=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(5)),o=a(n(1)),i=a(n(3));function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.default=r.default,t.constants=o,t.dropHandlers=i},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(6)),o=u(n(10)),i=n(2),a=n(3),l=n(1);function u(e){return e&&e.__esModule?e:{default:e}}var s={groupName:null,behaviour:"move",orientation:"vertical",getChildPayload:null,animationDuration:250,autoScrollEnabled:!0,shouldAcceptDrop:null,shouldAnimateDrop:null};function c(e,t,n){t?((0,i.addClass)(e,l.animationClass),e.style.transitionDuration=n+"ms"):((0,i.removeClass)(e,l.animationClass),e.style.removeProperty("transition-duration"))}function d(e){return e?e[l.containerInstance]:null}function f(t){if(N.wrapChild)return N.wrapChild(t);var n=e.document.createElement("div");return n.className=""+l.wrapperClass,t.parentElement.insertBefore(n,t),n.appendChild(t),n}function g(e){var t=[];return Array.prototype.map.call(e.children,function(n){if(n.nodeType===Node.ELEMENT_NODE){var r=n;(0,i.hasClass)(n,l.wrapperClass)||(r=f(n)),r[l.containersInDraggable]=[],r[l.translationValue]=0,t.push(r)}else"function"==typeof e.removeChild&&e.removeChild(n)}),t}function p(e){var t=e.layout;return function(e,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function e(n,r,o,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(i<o)return o;if(o===i){var l=t.getBeginEnd(n[o]),u=l.begin,s=l.end;return r>u&&r<=s?a?r<(s+u)/2?o:o+1:o:null}var c=Math.floor((i+o)/2),d=t.getBeginEnd(n[c]),f=d.begin,g=d.end;return r<f?e(n,r,o,c-1,a):r>g?e(n,r,c+1,i,a):a?r<(g+f)/2?c:c+1:c}(e,n,0,e.length-1,r)}}function m(e){var t=e.element,n=e.draggables,r=e.layout,o=e.options,i=function(e){var t=e.element,n=e.draggables,r=e.layout;return e.options,function(){n.forEach(function(e){c(e,!1),r.setTranslation(e,0),r.setVisibility(e,!0),e[l.containersInDraggable]=[]}),t[l.stretcherElementInstance]&&(t[l.stretcherElementInstance].parentNode.removeChild(t[l.stretcherElementInstance]),t[l.stretcherElementInstance]=null)}}({element:t,draggables:n,layout:r,options:o}),u=(N.dropHandler||a.domDropHandler)({element:t,draggables:n,layout:r,options:o});return function(e,t){var n=t.addedIndex,r=t.removedIndex;if(i(),e.targetElement||o.removeOnDropOut){var a={removedIndex:r,addedIndex:null!==n?null!==r&&r<n?n-1:n:null,payload:e.payload,droppedElement:e.element.firstElementChild};u(a,o.onDrop)}}}function v(e,t){var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;return Object.assign({},s,e)}(t),r=g(e,n.orientation,n.animationDuration);return(0,i.addClass)(e,l.containerClass+" "+n.orientation),{element:e,draggables:r,options:n,layout:(0,o.default)(e,n.orientation,n.animationDuration)}}function h(e,t){var n=function(e,t){for(var n=e.element;n;){var r=d(n.parentElement);if(r&&t.indexOf(r)>-1)return{container:r,draggable:n};n=n.parentElement}return null}(e,t);n&&(n.container.getChildContainers().push(e),e.setParentContainer(n.container),n.draggable[l.containersInDraggable].push(e))}function y(e){e.draggables;var t=e.element,n=e.options,r=null;return function(e){var o=e.draggableInfo,i=(e.dragResult,r);return null==r&&o.container.element===t&&"copy"!==n.behaviour&&(i=r=o.elementIndex),{removedIndex:i}}}function b(e){var t=e.draggables,n=e.layout;return function(e){e.draggableInfo;var r=e.dragResult;null!==r.removedIndex&&n.setVisibility(t[r.removedIndex],!1)}}function C(e){var t=e.element,n=e.layout;return function(e){var r=e.draggableInfo;return{pos:d(t).isPosInChildContainer()?null:n.getPosition(r.position)}}}function E(e){var t=e.element,n=!1;return function(e){e.draggableInfo;var r=e.dragResult;d(t).getParentContainer()&&n!==(null!==r.pos)&&(n=null!==r.pos,d(t).getParentContainer().onChildPositionCaptured(n))}}function x(e){var t=e.layout,n=null;return function(e){var r=e.draggableInfo;return null===e.dragResult.pos?n=null:{elementSize:n=n||t.getSize(r.element)}}}function S(e){var t=e.element;return function(e){var n=e.draggableInfo,r=e.dragResult;!function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];t&&n?e.targetElement=t:e.targetElement===t&&(e.targetElement=null)}(n,t,!!r.pos)}}function O(e){e.draggables,e.layout;return function(e){return null!==e.dragResult.pos?{addedIndex:0}:{addedIndex:null}}}function w(e){e.draggables;var t=e.layout,n=null;return function(e){var r=e.dragResult.addedIndex;if(r!==n){n=r;var o=t.getBeginEndOfContainer(),i=o.begin,a=o.end;return{shadowBeginEnd:{rect:t.getTopLeftOfElementBegin(i,a)}}}}}function D(e){var t=B(e);return function(e){var n=e.draggableInfo,r=e.dragResult;return n.invalidateShadow?t({draggableInfo:n,dragResult:r}):null}}function I(e){var t=function(e){var t=e.draggables,n=p({layout:e.layout});return function(e){var r=e.dragResult,o=r.shadowBeginEnd,i=r.pos;if(!o){var a=n(t,i,!0);return null!==a?a:t.length}return o.begin+o.beginAdjustment<=i&&o.end>=i?null:i<o.begin+o.beginAdjustment?n(t,i):i>o.end?n(t,i)+1:t.length}}(e);return function(e){var n=e.dragResult,r=null;return null!==n.pos&&null===(r=t({dragResult:n}))&&(r=n.addedIndex),{addedIndex:r}}}function P(){var e=null;return function(t){var n=t.dragResult,r=n.addedIndex,o=n.shadowBeginEnd;r!==e&&null!==e&&o&&(o.beginAdjustment=0),e=r}}function R(t){var n=t.element,r=t.draggables,o=t.layout,i=t.options,a=null;return function(t){var u=t.dragResult,s=u.addedIndex,c=u.removedIndex,d=u.elementSize;if(null===c)if(null!==s){if(!a){var f=o.getBeginEndOfContainer();f.end=f.begin+o.getSize(n);var g=o.getScrollSize(n)>o.getSize(n)?f.begin+o.getScrollSize(n)-o.getScrollValue(n):f.end,p=r.length>0?o.getBeginEnd(r[r.length-1]).end-r[r.length-1][l.translationValue]:f.begin;if(p+d>g){(a=e.document.createElement("div")).className=l.stretcherElementClass+" "+i.orientation;var m=d+p-g;return o.setSize(a.style,m+"px"),n.appendChild(a),n[l.stretcherElementInstance]=a,{containerBoxChanged:!0}}}}else if(a){o.setTranslation(a,0);var v=a;return a=null,n.removeChild(v),n[l.stretcherElementInstance]=null,{containerBoxChanged:!0}}}}function T(e){e.element;var t=e.draggables,n=e.layout,r=null,o=null;return function(e){var i=e.dragResult,a=i.addedIndex,l=i.removedIndex,u=i.elementSize;if(a!==r||l!==o){for(var s=0;s<t.length;s++)if(s!==l){var c=t[s],d=0;null!==l&&l<s&&(d-=n.getSize(t[l])),null!==a&&a<=s&&(d+=u),n.setTranslation(c,d)}return r=a,o=l,{addedIndex:a,removedIndex:l}}}}function B(e){var t=e.draggables,n=e.layout,r=null;return function(e){var o=e.draggableInfo,i=e.dragResult,a=i.addedIndex,l=i.removedIndex,u=i.elementSize,s=i.pos,c=i.shadowBeginEnd;if(null!==s){if(null===a||!o.invalidateShadow&&a===r)return null;r&&(r=a);var d=a-1,f=0,g=null,p=null;if(d===l&&d--,d>-1){var m=n.getSize(t[d]);if(p=n.getBeginEnd(t[d]),u<m){var v=(m-u)/2;f=p.end-v}else f=p.end}else p={end:n.getBeginEndOfContainer().begin};var h=1e4,y=a;if(y===l&&y++,y<t.length){var b=n.getSize(t[y]);if(g=n.getBeginEnd(t[y]),u<b){var C=(b-u)/2;h=g.begin+C}else h=g.begin}else g={begin:n.getContainerRectangles().end};return{shadowBeginEnd:{begin:f,end:h,rect:p&&g?n.getTopLeftOfElementBegin(p.end,g.begin):null,beginAdjustment:c?c.beginAdjustment:0}}}return r=null,{shadowBeginEnd:null}}}function A(){var e=null;return function(t){var n=t.dragResult,r=n.pos,o=n.addedIndex,i=n.shadowBeginEnd;t.draggableInfo.invalidateShadow;if(null!==r){if(null!=o&&null===e){if(r<i.begin){var a=r-i.begin-5;i.beginAdjustment=a}e=o}}else e=null}}function _(e){var t=e.options,n=!1;return function(e){var r=!!e.dragResult.pos;if(r!==n){if(n=r,!r)return t.onDragLeave&&t.onDragLeave(),{dragLeft:!0};t.onDragEnter&&t.onDragEnter()}}}function z(e){var t=e.options,n=null;return function(e){var r=e.dragResult,o=r.addedIndex,i=r.removedIndex,a=e.draggableInfo,l=a.payload,u=a.element;if(t.onDropReady&&n!==o){n=o;var s=o;null!==i&&o>i&&s--,t.onDropReady({addedIndex:s,removedIndex:i,payload:l,element:u.firstElementChild})}}}function j(e){return"drop-zone"===e.options.behaviour?M(e)(y,b,C,E,x,S,O,w,_,z):M(e)(y,b,C,E,x,S,D,I,P,R,T,B,A,_,z)}function M(e){return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];var o=n.map(function(t){return t(e)}),i=null;return function(e){return i=o.reduce(function(t,n){return Object.assign(t,n({draggableInfo:e,dragResult:t}))},i||{addedIndex:null,removedIndex:null,elementSize:null,pos:null,shadowBeginEnd:null})}}}function L(e){return function(t){var n=null,r=null,o=v(e,t),a=j(o),u=m(o),s=null,d=!1,p=[];function y(){null!==r&&(r.invalidateShadow=!0,n=a(r),r.invalidateShadow=!1)}function b(e){d=e,s&&(s.onChildPositionCaptured(e),r&&(n=a(r)))}function C(e,t,n){for(var r=g(t,n.orientation,n.animationDuration),o=0;o<r.length;o++)e[o]=r[o];for(var i=0;i<e.length-r.length;i++)e.pop()}return o.layout.setScrollListener(function(){y()}),{element:e,draggables:o.draggables,isDragRelevant:function(e){var t=e.element,n=e.options;return function(e,r){if(n.shouldAcceptDrop)return n.shouldAcceptDrop(e.getOptions(),r);var o=e.getOptions();return"copy"!==n.behaviour&&(0,i.getParent)(t,"."+l.wrapperClass)!==e.element&&(e.element===t||!(!o.groupName||o.groupName!==n.groupName))}}(o),getScale:o.layout.getContainerScale,layout:o.layout,getChildContainers:function(){return p},onChildPositionCaptured:b,dispose:function(e){!function(e){Array.prototype.map.call(e.children,function(t){if(t.nodeType===Node.ELEMENT_NODE){var n=t;(0,i.hasClass)(t,l.wrapperClass)&&(e.insertBefore(n,f.firstElementChild),e.removeChild(n))}})}(e.element)},prepareDrag:function(e,t){var n=e.element,r=o.draggables,i=e.getOptions();C(r,n,i),e.layout.invalidateRects(),h(e,t),r.forEach(function(e){return c(e,!0,i.animationDuration)})},isPosInChildContainer:function(){return d},handleDrag:function(e){return r=e,(n=a(e)).dragLeft&&"drop-zone"!==o.options.behaviour&&(n.dragLeft=!1,setTimeout(function(){n&&T(o)({dragResult:n})},20)),n},handleDrop:function(e){r=null,b(!1),a=j(o),u(e,n),n=null,s=null,p=[]},getDragResult:function(){return n},getTranslateCalculator:function(){return T(o).apply(void 0,arguments)},setParentContainer:function(e){s=e},getParentContainer:function(){return s},onTranslated:function(){y()},getOptions:function(){return o.options},setDraggables:function(){C(o.draggables,e,o.options)}}}}function N(e,t){var n=L(e)(t);return e[l.containerInstance]=n,r.default.register(n),{dispose:function(){r.default.unregister(n),n.layout.dispose(),n.dispose(n)}}}t.default=N}).call(this,n(0))},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),n(7);var r=l(n(2)),o=l(n(1)),i=n(8),a=function(e){return e&&e.__esModule?e:{default:e}}(n(9));function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}var u=["mousedown","touchstart"],s=["mousemove","touchmove"],c=["mouseup","touchend"],d=null,f=null,g=null,p=null,m=[],v=!1,h=null,y=null,b=null,C=null,E=r.isMobile();function x(){"undefined"!=typeof window&&u.forEach(function(t){e.document.addEventListener(t,w,{passive:!1})})}function S(){return p.ghostParent?p.ghostParent:f&&f.parentElement||e.document.body}var O=function(){var t=void 0,n=void 0,r=void 0,o=null,i=1,a=5;function l(e){var r=I(e),o=r.clientX,l=r.clientY;if(n)(Math.abs(t.clientX-o)>a||Math.abs(t.clientY-l)>a)&&f();else if(Math.abs(t.clientX-o)>i||Math.abs(t.clientY-l)>i)return g()}function u(){f()}function d(){f()}function f(){clearTimeout(o),s.forEach(function(t){return e.document.removeEventListener(t,l)},{passive:!1}),c.forEach(function(t){return e.document.removeEventListener(t,u)},{passive:!1}),e.document.removeEventListener("drag",d,{passive:!1})}function g(){clearTimeout(o),f(),r()}return function(i,a,f){t=I(i),r=f,(n="number"==typeof a?a:E?200:0)&&(o=setTimeout(g,n)),s.forEach(function(t){return e.document.addEventListener(t,l)},{passive:!1}),c.forEach(function(t){return e.document.addEventListener(t,u)},{passive:!1}),e.document.addEventListener("drag",d,{passive:!1})}}();function w(t){var n=I(t);if(!v&&(void 0===n.button||0===n.button)&&(f=r.getParent(n.target,"."+o.wrapperClass))){var i=r.getParent(f,"."+o.containerClass),a=m.filter(function(e){return e.element===i})[0],l=a.getOptions().dragHandleSelector,u=a.getOptions().nonDragAreaSelector,d=!0;l&&!r.getParent(n.target,l)&&(d=!1),u&&r.getParent(n.target,u)&&(d=!1),d&&O(n,a.getOptions().dragBeginDelay,function(){r.clearSelection(),R(n,r.getElementCursor(t.target)),s.forEach(function(t){e.document.addEventListener(t,T,{passive:!1})}),c.forEach(function(t){e.document.addEventListener(t,D,{passive:!1})})})}}function D(){s.forEach(function(t){e.document.removeEventListener(t,T,{passive:!1})}),c.forEach(function(t){e.document.removeEventListener(t,D,{passive:!1})}),y({reset:!0}),C&&((0,i.removeStyle)(C),C=null),p&&function(e){function t(){r.removeClass(g.ghost,"animated"),g.ghost.style.transitionDuration=null,S().removeChild(g.ghost),e()}function n(e,n,o){var i=e.top,a=e.left;r.addClass(g.ghost,"animated"),o&&r.addClass(g.ghost.firstElementChild,o),g.ghost.style.transitionDuration=n+"ms",g.ghost.style.left=a+"px",g.ghost.style.top=i+"px",setTimeout(function(){t()},n+20)}if(p.targetElement){var o=m.filter(function(e){return e.element===p.targetElement})[0];!function(e){return!e.shouldAnimateDrop||e.shouldAnimateDrop(p.container.getOptions(),p.payload)}(o.getOptions())?t():n(o.getDragResult().shadowBeginEnd.rect,Math.max(150,o.getOptions().animationDuration/2),o.getOptions().dropClass)}else{var i=m.filter(function(e){return e===p.container})[0],a=i.getOptions(),l=a.behaviour,u=a.removeOnDropOut;if("move"===l&&!u&&i.getDragResult()){var s=i.getDragResult(),c=s.removedIndex,d=s.elementSize,f=i.layout;i.getTranslateCalculator({dragResult:{removedIndex:c,addedIndex:c,elementSize:d}});var v=c>0?f.getBeginEnd(i.draggables[c-1]).end:f.getBeginEndOfContainer().begin;n(f.getTopLeftOfElementBegin(v),i.getOptions().animationDuration,i.getOptions().dropClass)}else r.addClass(g.ghost,"animated"),g.ghost.style.transitionDuration=i.getOptions().animationDuration+"ms",g.ghost.style.opacity="0",g.ghost.style.transform="scale(0.90)",setTimeout(function(){t()},i.getOptions().animationDuration)}}(function(){r.removeClass(e.document.body,o.disbaleTouchActions),r.removeClass(e.document.body,o.noUserSelectClass),P(!1),(d||[]).forEach(function(e){e.handleDrop(p)}),d=null,f=null,g=null,p=null,v=!1,null,b=null,h=null})}function I(e){return e.touches?e.touches[0]:e}function P(e){m.forEach(function(t){var n=e?t.getOptions().onDragStart:t.getOptions().onDragEnd;if(n){var r={isSource:t===p.container,payload:p.payload};t.isDragRelevant(p.container,p.payload)?r.willAcceptDrop=!0:r.willAcceptDrop=!1,n(r)}})}function R(t,n){v=!0;var l=m.filter(function(e){return f.parentElement===e.element})[0];l.setDraggables(),l,b=l.getOptions().lockAxis?l.getOptions().lockAxis.toLowerCase():null,p=function(e){var t=m.filter(function(t){return e.parentElement===t.element})[0],n=t.draggables.indexOf(e),r=t.getOptions().getGhostParent;return{container:t,element:e,elementIndex:n,payload:t.getOptions().getChildPayload?t.getOptions().getChildPayload(n):void 0,targetElement:null,position:{x:0,y:0},groupName:t.getOptions().groupName,ghostParent:r?r():null}}(f),g=function(t,n,a,l){var u=n.x,s=n.y,c=a.getScale(),d=(c.scaleX,c.scaleY,t.getBoundingClientRect()),f=d.left,g=d.top,p=d.right,m=d.bottom,v=f+(p-f)/2,h=g+(m-g)/2,y=t.cloneNode(!0);return y.style.zIndex=1e3,y.style.boxSizing="border-box",y.style.position="fixed",y.style.left=f+"px",y.style.top=g+"px",y.style.width=p-f+"px",y.style.height=m-g+"px",y.style.overflow="visible",y.style.transition=null,y.style.removeProperty("transition"),y.style.pointerEvents="none",a.getOptions().dragClass?setTimeout(function(){r.addClass(y.firstElementChild,a.getOptions().dragClass);var t=e.getComputedStyle(y.firstElementChild).cursor;C=(0,i.addCursorStyleToBody)(t)}):C=(0,i.addCursorStyleToBody)(l),r.addClass(y,a.getOptions().orientation),r.addClass(y,o.ghostClass),{ghost:y,centerDelta:{x:v-u,y:h-s},positionDelta:{left:f-u,top:g-s}}}(f,{x:t.clientX,y:t.clientY},p.container,n),p.position={x:t.clientX+g.centerDelta.x,y:t.clientY+g.centerDelta.y},p.mousePosition={x:t.clientX,y:t.clientY},r.addClass(e.document.body,o.disbaleTouchActions),r.addClass(e.document.body,o.noUserSelectClass),d=m.filter(function(e){return e.isDragRelevant(l,p.payload)}),h=function(e){var t=e;return function(e){var n=!1;t.forEach(function(t){var r=t.handleDrag(e);n|=r.containerBoxChanged||!1,r.containerBoxChanged=!1}),y({draggableInfo:e}),n&&(n=!1,setTimeout(function(){m.forEach(function(e){e.layout.invalidateRects(),e.onTranslated()})},10))}}(d),y&&y({reset:!0}),y=function(e,t){return e.getOptions().autoScrollEnabled?(0,a.default)(t):function(){return null}}(l,d),d.forEach(function(e){return e.prepareDrag(e,d)}),P(!0),h(p),S().appendChild(g.ghost)}function T(e){e.preventDefault();var t=I(e);p?(b?"y"===b?(g.ghost.style.top=t.clientY+g.positionDelta.top+"px",p.position.y=t.clientY+g.centerDelta.y,p.mousePosition.y=t.clientY):"x"===b&&(g.ghost.style.left=t.clientX+g.positionDelta.left+"px",p.position.x=t.clientX+g.centerDelta.x,p.mousePosition.x=t.clientX):(g.ghost.style.left=t.clientX+g.positionDelta.left+"px",g.ghost.style.top=t.clientY+g.positionDelta.top+"px",p.position.x=t.clientX+g.centerDelta.x,p.position.y=t.clientY+g.centerDelta.y,p.mousePosition.x=t.clientX,p.mousePosition.y=t.clientY),h(p)):R(t,r.getElementCursor(e.target))}(0,i.addStyleToHead)(),t.default=(x(),{register:function(e){m.push(e)},unregister:function(e){m.splice(m.indexOf(e),1)}})}).call(this,n(0))},function(e,t,n){"use strict";(function(e){!function(e){e&&e.prototype&&!e.prototype.matches&&(e.prototype.matches=e.prototype.matchesSelector||e.prototype.mozMatchesSelector||e.prototype.msMatchesSelector||e.prototype.oMatchesSelector||e.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1})}(e.Node||e.Element),function(e){e&&e.prototype&&null==e.prototype.firstElementChild&&Object.defineProperty(e.prototype,"firstElementChild",{get:function(){for(var e,t=this.childNodes,n=0;e=t[n++];)if(1===e.nodeType)return e;return null}})}(e.Node||e.Element),Array.prototype.some||(Array.prototype.some=function(e){if(null==this)throw new TypeError("Array.prototype.some called on null or undefined");if("function"!=typeof e)throw new TypeError;for(var t=Object(this),n=t.length>>>0,r=arguments.length>=2?arguments[1]:void 0,o=0;o<n;o++)if(o in t&&e.call(r,t[o],o,t))return!0;return!1})}).call(this,n(0))},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.removeStyle=t.addCursorStyleToBody=t.addStyleToHead=void 0;var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1));function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={overflow:"hidden",display:"block"},u={height:"100%",display:"inline-block","vertical-align":"top","white-space":"normal"},s=(a(r={},"."+i.containerClass,{position:"relative"}),a(r,"."+i.containerClass+" *",{"box-sizing":"border-box"}),a(r,"."+i.containerClass+".horizontal",{"white-space":"nowrap"}),a(r,"."+i.containerClass+".horizontal > ."+i.stretcherElementClass,{display:"inline-block"}),a(r,"."+i.containerClass+".horizontal > ."+i.wrapperClass,u),a(r,"."+i.containerClass+".vertical > ."+i.wrapperClass,l),a(r,"."+i.wrapperClass,{}),a(r,"."+i.wrapperClass+".horizontal",u),a(r,"."+i.wrapperClass+".vertical",l),a(r,"."+i.wrapperClass+".animated",{transition:"transform ease"}),a(r,"."+i.ghostClass+" *",{"box-sizing":"border-box"}),a(r,"."+i.ghostClass+".animated",{transition:"all ease-in-out"}),a(r,"."+i.disbaleTouchActions+" *",{"touch-actions":"none","-ms-touch-actions":"none"}),a(r,"."+i.noUserSelectClass+" *",{"-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}),r);function c(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return"object"===(void 0===r?"undefined":o(r))?""+t+n+"{"+c(r)+"}":""+t+n+":"+r+";"},"")}t.addStyleToHead=function(){if("undefined"!=typeof window){var t=e.document.head||e.document.getElementsByTagName("head")[0],n=e.document.createElement("style"),r=c(s);n.type="text/css",n.styleSheet?n.styleSheet.cssText=r:n.appendChild(e.document.createTextNode(r)),t.appendChild(n)}},t.addCursorStyleToBody=function(t){if(t&&"undefined"!=typeof window){var n=e.document.head||e.document.getElementsByTagName("head")[0],r=e.document.createElement("style"),o=c({"body *":{cursor:t+" !important"}});return r.type="text/css",r.styleSheet?r.styleSheet.cssText=o:r.appendChild(e.document.createTextNode(o)),n.appendChild(r),r}return null},t.removeStyle=function(t){t&&"undefined"!=typeof window&&(e.document.head||e.document.getElementsByTagName("head")[0]).removeChild(t)}}).call(this,n(0))},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"y",n=!1,r=null,o=null,i=null,a=null;return{animate:function(l,u){i=l,a=u,(n=!0)&&function n(){null===r&&(r=requestAnimationFrame(function(l){null===o&&(o=l);var u=l-o;o=l;var s=u/1e3*a;(function(e,t,n){e&&(e!==window?"x"===t?e.scrollLeft+=n:e.scrollTop+=n:"x"===t?e.scrollBy(n,0):e.scrollBy(0,n))})(e,t,s="begin"===i?0-s:s),r=null,n()}))}()},stop:function(){n&&(cancelAnimationFrame(r),n=!1,o=null,r=null)}}};function a(e){var t={element:e,rect:(0,r.getVisibleRect)(e,e.getBoundingClientRect()),descendants:[],invalidate:n,axis:null,dispose:function(){e.removeEventListener("scroll",n)}};function n(){t.rect=(0,r.getVisibleRect)(e,e.getBoundingClientRect()),t.descendants.forEach(function(e){return e.invalidate()})}return e.addEventListener("scroll",n),t}function l(e){return Object.assign(e,i(e.element,e.axis))}t.default=function(t){var n=function(e){var t=[],n=null;return e.forEach(function(e){var o=e;for(n=null;o;){var i=(0,r.getScrollingAxis)(o);if(i&&!t.some(function(e){return e.element===o})){var l=a(o);n&&l.descendants.push(n),n=l,"xy"===i?(t.push(Object.assign({},l,{axis:"x"})),t.push(Object.assign({},l,{axis:"y"},{descendants:[]}))):t.push(Object.assign({},l,{axis:i}))}o=o.parentElement}}),t}(t.map(function(e){return e.element})),u=[].concat(o(n.map(l)),o(function(){function t(){return{left:0,right:e.innerWidth,top:0,bottom:e.innerHeight}}return[Object.assign({rect:t(),axis:"y"},i(e)),Object.assign({rect:t(),axis:"x"},i(e,"x"))]}()));return function(e){var t=e.draggableInfo,r=e.reset;if(u.length){if(r)return u.forEach(function(e){return e.stop()}),n.forEach(function(e){return e.dispose()}),null;u.forEach(function(e){var n=function(e,t){var n=t.rect,r=n.left,o=n.right,i=n.top,a=n.bottom,l=e.x,u=e.y;if(l<r||l>o||u<i||u>a)return null;var s=void 0,c=void 0,d=void 0;return"x"===t.axis?(s=r,c=o,d=l):(s=i,c=a,d=u),c-d<100?{direction:"end",speedFactor:(100-(c-d))/100}:d-s<100?{direction:"begin",speedFactor:(100-(d-s))/100}:void 0}(t.mousePosition,e);n?e.animate(n.direction,1500*n.speedFactor):e.stop()})}}}}).call(this,n(0))},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(t,n,l){t[o.extraSizeForInsertion]=0;var u=l,s=function(e){return{get:function(t,n){var r=e[n];return t[r||n]},set:function(t,n,r){requestAnimationFrame(function(){t[e[n]]=e.setters[n]?e.setters[n](r):r})}}}("horizontal"===n?i:a),c={translation:0},d=null;e.addEventListener("resize",function(){m(t)}),setTimeout(function(){g()},10);var f=r.listenScrollParent(t,function(){m(t),d&&d()});function g(){m(t),function(e){var t=e.getBoundingClientRect();c.scaleX=e.offsetWidth?(t.right-t.left)/e.offsetWidth:1,c.scaleY=e.offsetHeight?(t.bottom-t.top)/e.offsetHeight:1}(t)}var p=void 0;function m(e){c.rect=r.getContainerRect(e),c.visibleRect=r.getVisibleRect(e,c.rect)}function v(e){return s.get(e,"size")*s.get(c,"scale")}function h(e){return s.get(e,"dragPosition")}function y(e,t){var r=c.visibleRect,o=r.left,i=r.top,a=r.right,l=r.bottom;l-i<2&&(l=i+30);var u=c.rect;return"vertical"===n?e>u.left&&e<u.right&&t>i&&t<l:e>o&&e<a&&t>u.top&&t<u.bottom}return{getSize:v,getContainerRectangles:function(){return{rect:c.rect,visibleRect:c.visibleRect}},getBeginEndOfDOMRect:function(e){return{begin:s.get(e,"begin"),end:s.get(e,"end")}},getBeginEndOfContainer:function(){var e=s.get(c.rect,"begin")+c.translation,t=s.get(c.rect,"end")+c.translation;return{begin:e,end:t}},getBeginEndOfContainerVisibleRect:function(){var e=s.get(c.visibleRect,"begin")+c.translation,t=s.get(c.visibleRect,"end")+c.translation;return{begin:e,end:t}},getBeginEnd:function(e){var n=function(e){return(s.get(e,"distanceToParent")+(e[o.translationValue]||0))*s.get(c,"scale")}(e)+(s.get(c.rect,"begin")+c.translation)-s.get(t,"scrollValue");return{begin:n,end:n+v(e)*s.get(c,"scale")}},getAxisValue:h,setTranslation:function(e,t){t?s.set(e.style,"translate",t):e.style.removeProperty("transform");e[o.translationValue]=t,e[o.containersInDraggable]&&setTimeout(function(){e[o.containersInDraggable].forEach(function(e){!function e(t){t.layout.invalidateRects();t.onTranslated();t.getChildContainers()&&t.getChildContainers().forEach(function(t){return e(t)})}(e)})},u+20)},getTranslation:function(e){return e[o.translationValue]},setVisibility:function(e,t){void 0!==e[o.visibilityValue]&&e[o.visibilityValue]===t||(t?e.style.removeProperty("visibility"):e.style.visibility="hidden",e[o.visibilityValue]=t)},isVisible:function(e){return void 0===e[o.visibilityValue]||e[o.visibilityValue]},isInVisibleRect:y,dispose:function(){f&&f.dispose();p&&(p.parentNode.removeChild(p),p=null)},getContainerScale:function(){return{scaleX:c.scaleX,scaleY:c.scaleY}},setScrollListener:function(e){d=e},setSize:function(e,t){s.set(e,"setSize",t)},getTopLeftOfElementBegin:function(e){var t=0,r=0;"horizontal"===n?(r=e,t=c.rect.top):(r=c.rect.left,t=e);return{top:t,left:r}},getScrollSize:function(e){return s.get(e,"scrollSize")},getScrollValue:function(e){return s.get(e,"scrollValue")},setScrollValue:function(e,t){return s.set(e,"scrollValue",t)},invalidate:g,invalidateRects:function(){m(t)},getPosition:function(e){return y(e.x,e.y)?h(e):null}}};var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(2)),o=n(1);var i={size:"offsetWidth",distanceToParent:"offsetLeft",translate:"transform",begin:"left",end:"right",dragPosition:"x",scrollSize:"scrollWidth",offsetSize:"offsetWidth",scrollValue:"scrollLeft",scale:"scaleX",setSize:"width",setters:{translate:function(e){return"translate3d("+e+"px, 0, 0)"}}},a={size:"offsetHeight",distanceToParent:"offsetTop",translate:"transform",begin:"top",end:"bottom",dragPosition:"y",scrollSize:"scrollHeight",offsetSize:"offsetHeight",scrollValue:"scrollTop",scale:"scaleY",setSize:"height",setters:{translate:function(e){return"translate3d(0,"+e+"px, 0)"}}}}).call(this,n(0))}])});

/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ })

}]);