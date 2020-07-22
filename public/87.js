(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[87],{

/***/ "./node_modules/react-tag-autocomplete/dist-es5/Input.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-tag-autocomplete/dist-es5/Input.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "./node_modules/react/index.js")

var SIZER_STYLES = {
  position: 'absolute',
  width: 0,
  height: 0,
  visibility: 'hidden',
  overflow: 'scroll',
  whiteSpace: 'pre'
}

var STYLE_PROPS = [
  'fontSize',
  'fontFamily',
  'fontWeight',
  'fontStyle',
  'letterSpacing',
  'textTransform'
]

var Input = /*@__PURE__*/(function (superclass) {
  function Input (props) {
    superclass.call(this, props)
    this.state = { inputWidth: null }
  }

  if ( superclass ) Input.__proto__ = superclass;
  Input.prototype = Object.create( superclass && superclass.prototype );
  Input.prototype.constructor = Input;

  Input.prototype.componentDidMount = function componentDidMount () {
    if (this.props.autoresize) {
      this.copyInputStyles()
      this.updateInputWidth()
    }

    if (this.props.autofocus) {
      this.input.focus()
    }
  };

  Input.prototype.componentDidUpdate = function componentDidUpdate (ref) {
    var query = ref.query;
    var placeholder = ref.placeholder;

    if (query !== this.props.query || placeholder !== this.props.placeholder) {
      this.updateInputWidth()
    }
  };

  Input.prototype.copyInputStyles = function copyInputStyles () {
    var this$1 = this;

    var inputStyle = window.getComputedStyle(this.input)

    STYLE_PROPS.forEach(function (prop) {
      this$1.sizer.style[prop] = inputStyle[prop]
    })
  };

  Input.prototype.updateInputWidth = function updateInputWidth () {
    var inputWidth

    if (this.props.autoresize) {
      // scrollWidth is designed to be fast not accurate.
      // +2 is completely arbitrary but does the job.
      inputWidth = Math.ceil(this.sizer.scrollWidth) + 2
    }

    if (inputWidth !== this.state.inputWidth) {
      this.setState({ inputWidth: inputWidth })
    }
  };

  Input.prototype.render = function render () {
    var this$1 = this;

    var ref = this.props;
    var inputAttributes = ref.inputAttributes;
    var inputEventHandlers = ref.inputEventHandlers;
    var query = ref.query;
    var placeholder = ref.placeholder;
    var expandable = ref.expandable;
    var listboxId = ref.listboxId;
    var selectedIndex = ref.selectedIndex;
    var ariaLabel = ref.ariaLabel;

    return (
      React.createElement( 'div', { className: this.props.classNames.searchInput },
        React.createElement( 'input', Object.assign({},
          inputAttributes, inputEventHandlers, { ref: function (c) { this$1.input = c }, value: query, placeholder: placeholder, role: 'combobox', 'aria-autocomplete': 'list', 'aria-label': ariaLabel || placeholder, 'aria-owns': listboxId, 'aria-activedescendant': selectedIndex > -1 ? (listboxId + "-" + selectedIndex) : null, 'aria-expanded': expandable, style: { width: this.state.inputWidth } })),
        React.createElement( 'div', { ref: function (c) { this$1.sizer = c }, style: SIZER_STYLES }, query || placeholder)
      )
    )
  };

  return Input;
}(React.Component));

module.exports = Input


/***/ }),

/***/ "./node_modules/react-tag-autocomplete/dist-es5/ReactTags.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-tag-autocomplete/dist-es5/ReactTags.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "./node_modules/react/index.js")
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")
var Tag = __webpack_require__(/*! ./Tag */ "./node_modules/react-tag-autocomplete/dist-es5/Tag.js")
var Input = __webpack_require__(/*! ./Input */ "./node_modules/react-tag-autocomplete/dist-es5/Input.js")
var Suggestions = __webpack_require__(/*! ./Suggestions */ "./node_modules/react-tag-autocomplete/dist-es5/Suggestions.js")

var KEYS = {
  ENTER: 13,
  TAB: 9,
  BACKSPACE: 8,
  UP_ARROW: 38,
  DOWN_ARROW: 40
}

var CLASS_NAMES = {
  root: 'react-tags',
  rootFocused: 'is-focused',
  selected: 'react-tags__selected',
  selectedTag: 'react-tags__selected-tag',
  selectedTagName: 'react-tags__selected-tag-name',
  search: 'react-tags__search',
  searchInput: 'react-tags__search-input',
  suggestions: 'react-tags__suggestions',
  suggestionActive: 'is-active',
  suggestionDisabled: 'is-disabled'
}

var ReactTags = /*@__PURE__*/(function (superclass) {
  function ReactTags (props) {
    superclass.call(this, props)

    this.state = {
      query: '',
      focused: false,
      expandable: false,
      selectedIndex: -1,
      classNames: Object.assign({}, CLASS_NAMES, this.props.classNames)
    }

    this.inputEventHandlers = {
      // Provide a no-op function to the input component to avoid warnings
      // <https://github.com/i-like-robots/react-tags/issues/135>
      // <https://github.com/facebook/react/issues/13835>
      onChange: function () { },
      onBlur: this.handleBlur.bind(this),
      onFocus: this.handleFocus.bind(this),
      onInput: this.handleInput.bind(this),
      onKeyDown: this.handleKeyDown.bind(this)
    }

    this.container = React.createRef()
  }

  if ( superclass ) ReactTags.__proto__ = superclass;
  ReactTags.prototype = Object.create( superclass && superclass.prototype );
  ReactTags.prototype.constructor = ReactTags;

  ReactTags.prototype.componentWillReceiveProps = function componentWillReceiveProps (newProps) {
    this.setState({
      classNames: Object.assign({}, CLASS_NAMES, newProps.classNames)
    })
  };

  ReactTags.prototype.handleInput = function handleInput (e) {
    var query = e.target.value

    if (this.props.handleInputChange) {
      this.props.handleInputChange(query)
    }

    this.setState({ query: query })
  };

  ReactTags.prototype.handleKeyDown = function handleKeyDown (e) {
    var ref = this.state;
    var query = ref.query;
    var selectedIndex = ref.selectedIndex;
    var ref$1 = this.props;
    var delimiters = ref$1.delimiters;
    var delimiterChars = ref$1.delimiterChars;

    // when one of the terminating keys is pressed, add current query to the tags.
    if (delimiters.indexOf(e.keyCode) > -1 || delimiterChars.indexOf(e.key) > -1) {
      if (query || selectedIndex > -1) {
        e.preventDefault()
      }

      this.handleDelimiter()
    }

    // when backspace key is pressed and query is blank, delete the last tag
    if (e.keyCode === KEYS.BACKSPACE && query.length === 0 && this.props.allowBackspace) {
      this.deleteTag(this.props.tags.length - 1)
    }

    if (e.keyCode === KEYS.UP_ARROW) {
      e.preventDefault()

      // if last item, cycle to the bottom
      if (selectedIndex <= 0) {
        this.setState({ selectedIndex: this.suggestions.state.options.length - 1 })
      } else {
        this.setState({ selectedIndex: selectedIndex - 1 })
      }
    }

    if (e.keyCode === KEYS.DOWN_ARROW) {
      e.preventDefault()

      this.setState({ selectedIndex: (selectedIndex + 1) % this.suggestions.state.options.length })
    }
  };

  ReactTags.prototype.handleDelimiter = function handleDelimiter () {
    var ref = this.state;
    var query = ref.query;
    var selectedIndex = ref.selectedIndex;

    if (query.length >= this.props.minQueryLength) {
      // Check if the user typed in an existing suggestion.
      var match = this.suggestions.state.options.findIndex(function (suggestion) {
        return suggestion.name.search(new RegExp(("^" + query + "$"), 'i')) === 0
      })

      var index = selectedIndex === -1 ? match : selectedIndex

      if (index > -1 && this.suggestions.state.options[index]) {
        this.addTag(this.suggestions.state.options[index])
      } else if (this.props.allowNew) {
        this.addTag({ name: query })
      }
    }
  };

  ReactTags.prototype.handleClick = function handleClick (e) {
    if (document.activeElement !== e.target) {
      this.input.input.focus()
    }
  };

  ReactTags.prototype.handleBlur = function handleBlur () {
    this.setState({ focused: false, selectedIndex: -1 })

    if (this.props.handleBlur) {
      this.props.handleBlur()
    }

    if (this.props.addOnBlur) {
      this.handleDelimiter()
    }
  };

  ReactTags.prototype.handleFocus = function handleFocus () {
    this.setState({ focused: true })

    if (this.props.handleFocus) {
      this.props.handleFocus()
    }
  };

  ReactTags.prototype.handleDeleteTag = function handleDeleteTag (index, event) {
    // Because we'll destroy the element with cursor focus we need to ensure
    // it does not get lost and move it to the next interactive element
    if (this.container.current) {
      var interactiveEls = this.container.current.querySelectorAll('a,button,input')

      var currentEl = Array.prototype.findIndex.call(interactiveEls, function (element) {
        return element === event.currentTarget
      })

      var nextEl = interactiveEls[currentEl - 1] || interactiveEls[currentEl + 1]

      if (nextEl) {
        nextEl.focus()
      }
    }

    this.deleteTag(index)
  };

  ReactTags.prototype.addTag = function addTag (tag) {
    if (tag.disabled) {
      return
    }

    if (typeof this.props.handleValidate === 'function' && !this.props.handleValidate(tag)) {
      return
    }

    this.props.handleAddition(tag)

    // reset the state
    this.setState({
      query: '',
      selectedIndex: -1
    })
  };

  ReactTags.prototype.deleteTag = function deleteTag (i) {
    this.props.handleDelete(i)

    if (this.props.clearInputOnDelete && this.state.query !== '') {
      this.setState({ query: '' })
    }
  };

  ReactTags.prototype.render = function render () {
    var this$1 = this;

    var listboxId = 'ReactTags-listbox'

    var TagComponent = this.props.tagComponent || Tag

    var tags = this.props.tags.map(function (tag, i) { return (
      React.createElement( TagComponent, {
        key: i, tag: tag, classNames: this$1.state.classNames, onDelete: this$1.handleDeleteTag.bind(this$1, i) })
    ); })

    var expandable = this.state.focused && this.state.query.length >= this.props.minQueryLength
    var classNames = [this.state.classNames.root]

    this.state.focused && classNames.push(this.state.classNames.rootFocused)

    return (
      React.createElement( 'div', { ref: this.container, className: classNames.join(' '), onClick: this.handleClick.bind(this) },
        React.createElement( 'div', { className: this.state.classNames.selected, 'aria-live': 'polite', 'aria-relevant': 'additions removals' },
          tags
        ),
        React.createElement( 'div', { className: this.state.classNames.search },
          React.createElement( Input, Object.assign({},
            this.state, { inputAttributes: this.props.inputAttributes, inputEventHandlers: this.inputEventHandlers, ref: function (c) { this$1.input = c }, listboxId: listboxId, autofocus: this.props.autofocus, autoresize: this.props.autoresize, expandable: expandable, placeholder: this.props.placeholder, ariaLabel: this.props.ariaLabel })),
          React.createElement( Suggestions, Object.assign({},
            this.state, { ref: function (c) { this$1.suggestions = c }, listboxId: listboxId, expandable: expandable, noSuggestionsText: this.props.noSuggestionsText, suggestions: this.props.suggestions, suggestionsFilter: this.props.suggestionsFilter, addTag: this.addTag.bind(this), maxSuggestionsLength: this.props.maxSuggestionsLength }))
        )
      )
    )
  };

  return ReactTags;
}(React.Component));

ReactTags.defaultProps = {
  tags: [],
  placeholder: 'Add new tag',
  noSuggestionsText: null,
  suggestions: [],
  suggestionsFilter: null,
  autofocus: true,
  autoresize: true,
  delimiters: [KEYS.TAB, KEYS.ENTER],
  delimiterChars: [],
  minQueryLength: 2,
  maxSuggestionsLength: 6,
  allowNew: false,
  allowBackspace: true,
  tagComponent: null,
  inputAttributes: {},
  addOnBlur: false,
  clearInputOnDelete: true
}

ReactTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object),
  placeholder: PropTypes.string,
  ariaLabel: PropTypes.string,
  noSuggestionsText: PropTypes.string,
  suggestions: PropTypes.arrayOf(PropTypes.object),
  suggestionsFilter: PropTypes.func,
  autofocus: PropTypes.bool,
  autoresize: PropTypes.bool,
  delimiters: PropTypes.arrayOf(PropTypes.number),
  delimiterChars: PropTypes.arrayOf(PropTypes.string),
  handleDelete: PropTypes.func.isRequired,
  handleAddition: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func,
  handleFocus: PropTypes.func,
  handleBlur: PropTypes.func,
  handleValidate: PropTypes.func,
  minQueryLength: PropTypes.number,
  maxSuggestionsLength: PropTypes.number,
  classNames: PropTypes.object,
  allowNew: PropTypes.bool,
  allowBackspace: PropTypes.bool,
  tagComponent: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element
  ]),
  inputAttributes: PropTypes.object,
  addOnBlur: PropTypes.bool,
  clearInputOnDelete: PropTypes.bool
}

module.exports = ReactTags


/***/ }),

/***/ "./node_modules/react-tag-autocomplete/dist-es5/Suggestions.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-tag-autocomplete/dist-es5/Suggestions.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "./node_modules/react/index.js")

function escapeForRegExp (query) {
  return query.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&')
}

function markIt (input, query) {
  if (query) {
    var regex = RegExp(escapeForRegExp(query), 'gi')
    input = input.replace(regex, '<mark>$&</mark>')
  }

  return {
    __html: input
  }
}

function filterSuggestions (query, suggestions, length, suggestionsFilter, noSuggestionsText) {
  if (!suggestionsFilter) {
    var regex = new RegExp(("(?:^|\\s)" + (escapeForRegExp(query))), 'i')
    suggestionsFilter = function (item) { return regex.test(item.name); }
  }

  var filtered = suggestions.filter(function (item) { return suggestionsFilter(item, query); }).slice(0, length)

  if (filtered.length === 0 && noSuggestionsText) {
    filtered.push({ id: 0, name: noSuggestionsText, disabled: true, disableMarkIt: true })
  }

  return filtered
}

var Suggestions = /*@__PURE__*/(function (superclass) {
  function Suggestions (props) {
    superclass.call(this, props)

    this.state = {
      options: filterSuggestions(this.props.query, this.props.suggestions, this.props.maxSuggestionsLength, this.props.suggestionsFilter, this.props.noSuggestionsText)
    }
  }

  if ( superclass ) Suggestions.__proto__ = superclass;
  Suggestions.prototype = Object.create( superclass && superclass.prototype );
  Suggestions.prototype.constructor = Suggestions;

  Suggestions.prototype.componentWillReceiveProps = function componentWillReceiveProps (newProps) {
    this.setState({
      options: filterSuggestions(newProps.query, newProps.suggestions, newProps.maxSuggestionsLength, newProps.suggestionsFilter, newProps.noSuggestionsText)
    })
  };

  Suggestions.prototype.handleMouseDown = function handleMouseDown (item, e) {
    // focus is shifted on mouse down but calling preventDefault prevents this
    e.preventDefault()
    this.props.addTag(item)
  };

  Suggestions.prototype.render = function render () {
    var this$1 = this;

    if (!this.props.expandable || !this.state.options.length) {
      return null
    }

    var options = this.state.options.map(function (item, i) {
      var key = (this$1.props.listboxId) + "-" + i
      var classNames = []

      if (this$1.props.selectedIndex === i) {
        classNames.push(this$1.props.classNames.suggestionActive)
      }

      if (item.disabled) {
        classNames.push(this$1.props.classNames.suggestionDisabled)
      }

      return (
        React.createElement( 'li', {
          id: key, key: key, role: 'option', className: classNames.join(' '), 'aria-disabled': item.disabled === true, onMouseDown: this$1.handleMouseDown.bind(this$1, item) },
          item.disableMarkIt ? item.name
            : React.createElement( 'span', { dangerouslySetInnerHTML: markIt(item.name, this$1.props.query, item.markInput) })
        )
      )
    })

    return (
      React.createElement( 'div', { className: this.props.classNames.suggestions },
        React.createElement( 'ul', { role: 'listbox', id: this.props.listboxId }, options)
      )
    )
  };

  return Suggestions;
}(React.Component));

module.exports = Suggestions


/***/ }),

/***/ "./node_modules/react-tag-autocomplete/dist-es5/Tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-tag-autocomplete/dist-es5/Tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "./node_modules/react/index.js")

module.exports = function (props) { return (
  React.createElement( 'button', { type: 'button', className: props.classNames.selectedTag, title: 'Click to remove tag', onClick: props.onDelete },
    React.createElement( 'span', { className: props.classNames.selectedTagName }, props.tag.name)
  )
); }


/***/ })

}]);