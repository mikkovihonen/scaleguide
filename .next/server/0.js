exports.ids = [0];
exports.modules = {

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PianoKeyboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PianoKeyboard.js */ "./src/PianoKeyboard.js");
/* harmony import */ var _ChordSelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChordSelector.js */ "./src/ChordSelector.js");
/* harmony import */ var tonal_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tonal-key */ "tonal-key");
/* harmony import */ var tonal_key__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tonal_key__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tonal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tonal */ "tonal");
/* harmony import */ var tonal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tonal__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/mikkovihonen/Workspace/scaleguide/src/App.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      chords: [],
      degrees: []
    };
    _this.handleChordSelectorChange = _this.handleChordSelectorChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(App, [{
    key: "handleChordSelectorChange",
    value: function handleChordSelectorChange(note, scale, type) {
      var scaleString = [note, scale].join(" ");
      this.setState({
        chords: ("triads" === type ? tonal_key__WEBPACK_IMPORTED_MODULE_3__["triads"](scaleString) : tonal_key__WEBPACK_IMPORTED_MODULE_3__["chords"](scaleString)).map(function (chord) {
          return tonal__WEBPACK_IMPORTED_MODULE_4__["Chord"].notes(chord);
        }),
        degrees: tonal_key__WEBPACK_IMPORTED_MODULE_3__["degrees"](scaleString)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "backgroundWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Scaleguide"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChordSelector_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onChange: this.handleChordSelectorChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Notes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Degrees"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "chordsWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, this.state.chords.map(function (object, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: "pianoKeyboardWrapper_" + i,
          style: {
            display: "flex",
            alignItems: "center"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          style: {
            width: "30px",
            textAlign: "center"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, _this2.state.degrees[i]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PianoKeyboard_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: "pianoKeyboard_" + i,
          value: {
            notesPressed: object
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }));
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Common chord progressions")));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/ChordSelector.js":
/*!******************************!*\
  !*** ./src/ChordSelector.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tonal_key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tonal-key */ "tonal-key");
/* harmony import */ var tonal_key__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tonal_key__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/mikkovihonen/Workspace/scaleguide/src/ChordSelector.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var ChordSelector =
/*#__PURE__*/
function (_Component) {
  _inherits(ChordSelector, _Component);

  function ChordSelector(props) {
    var _this;

    _classCallCheck(this, ChordSelector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChordSelector).call(this, props));
    _this.state = {
      chromaticScale: "C C# D D# E F F# G G# A A# B".split(" "),
      scales: tonal_key__WEBPACK_IMPORTED_MODULE_1__["modeNames"](true),
      note: 'C',
      scale: 'major',
      type: 'triads'
    };
    _this.handleNote = _this.handleNote.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleScale = _this.handleScale.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleType = _this.handleType.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.propagateChange(_this.state.note, _this.state.scale, _this.state.type);

    return _this;
  }

  _createClass(ChordSelector, [{
    key: "handleNote",
    value: function handleNote(event) {
      this.setState({
        note: event.target.value
      });
      this.propagateChange(event.target.value, this.state.scale, this.state.type);
    }
  }, {
    key: "handleScale",
    value: function handleScale(event) {
      this.setState({
        scale: event.target.value
      });
      this.propagateChange(this.state.note, event.target.value, this.state.type);
    }
  }, {
    key: "handleType",
    value: function handleType(event) {
      this.setState({
        type: event.target.value
      });
      this.propagateChange(this.state.note, this.state.scale, event.target.value);
    }
  }, {
    key: "propagateChange",
    value: function propagateChange(note, scale, type) {
      if (typeof this.props.onChange === "function") {
        this.props.onChange(note, scale, type);
      }
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        style: {
          marginRight: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Key", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        value: this.state.note,
        onChange: this.handleNote,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, this.state.chromaticScale.map(function (object, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: object.toString(),
          value: object,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, object.replace(/^\w/, function (c) {
          return c.toUpperCase();
        }));
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        style: {
          marginRight: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Mode", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        value: this.state.scale,
        onChange: this.handleScale,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, this.state.scales.map(function (object, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: object.toString(),
          value: object,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, object.replace(/^\w/, function (c) {
          return c.toUpperCase();
        }));
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Type", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        value: this.state.type,
        onChange: this.handleType,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "triads",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Triads"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "chords",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Chords"))));
    }
  }]);

  return ChordSelector;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ChordSelector);

/***/ }),

/***/ "./src/PianoBlackKey.js":
/*!******************************!*\
  !*** ./src/PianoBlackKey.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/mikkovihonen/Workspace/scaleguide/src/PianoBlackKey.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var PianoBlackKey =
/*#__PURE__*/
function (_Component) {
  _inherits(PianoBlackKey, _Component);

  function PianoBlackKey(props) {
    var _this;

    _classCallCheck(this, PianoBlackKey);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PianoBlackKey).call(this, props));
    _this.state = {
      value: props.value
    };
    return _this;
  }

  _createClass(PianoBlackKey, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: "0px",
          display: "flex"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "flex",
          transform: "translateX(-50%)",
          height: "70px",
          background: "#150b13",
          color: "white",
          border: "1px solid #150b13"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "30px",
          width: "30px",
          background: this.props.value.pressed ? "red" : "#150b13",
          marginTop: "auto",
          alignItems: "center",
          justifyContent: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "flex"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, this.props.value.note))));
    }
  }]);

  return PianoBlackKey;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PianoBlackKey);

/***/ }),

/***/ "./src/PianoKeyboard.js":
/*!******************************!*\
  !*** ./src/PianoKeyboard.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tonal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tonal */ "tonal");
/* harmony import */ var tonal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tonal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PianoWhiteKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PianoWhiteKey.js */ "./src/PianoWhiteKey.js");
/* harmony import */ var _PianoBlackKey_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PianoBlackKey.js */ "./src/PianoBlackKey.js");
var _jsxFileName = "/Users/mikkovihonen/Workspace/scaleguide/src/PianoKeyboard.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var PianoKeyboard =
/*#__PURE__*/
function (_Component) {
  _inherits(PianoKeyboard, _Component);

  function PianoKeyboard(props) {
    var _this;

    _classCallCheck(this, PianoKeyboard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PianoKeyboard).call(this, props));
    _this.state = {
      value: null,
      notesPressed: props.value.notesPressed,
      pianoKeys: [{
        "note": "C",
        "type": "white"
      }, {
        "note": "C#",
        "type": "black"
      }, {
        "note": "D",
        "type": "white"
      }, {
        "note": "D#",
        "type": "black"
      }, {
        "note": "E",
        "type": "white"
      }, {
        "note": "F",
        "type": "white"
      }, {
        "note": "F#",
        "type": "black"
      }, {
        "note": "G",
        "type": "white"
      }, {
        "note": "G#",
        "type": "black"
      }, {
        "note": "A",
        "type": "white"
      }, {
        "note": "A#",
        "type": "black"
      }, {
        "note": "B",
        "type": "white"
      }]
    };
    return _this;
  }

  _createClass(PianoKeyboard, [{
    key: "renderKey",
    value: function renderKey(key, index) {
      key.pressed = this.props.value.notesPressed.map(function (note) {
        return tonal__WEBPACK_IMPORTED_MODULE_1__["Note"].chroma(note);
      }).includes(tonal__WEBPACK_IMPORTED_MODULE_1__["Note"].chroma(key.note));
      return key.type === "white" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PianoWhiteKey_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: "pianoKey_" + index,
        value: key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PianoBlackKey_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: "pianoKey_" + index,
        value: key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var listItems = this.state.pianoKeys.map(function (key, index) {
        return _this2.renderKey(key, index);
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "flex",
          borderLeft: "1px solid #150b13"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, listItems), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }));
    }
  }]);

  return PianoKeyboard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PianoKeyboard);

/***/ }),

/***/ "./src/PianoWhiteKey.js":
/*!******************************!*\
  !*** ./src/PianoWhiteKey.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/mikkovihonen/Workspace/scaleguide/src/PianoWhiteKey.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var PianoWhiteKey =
/*#__PURE__*/
function (_Component) {
  _inherits(PianoWhiteKey, _Component);

  function PianoWhiteKey(props) {
    var _this;

    _classCallCheck(this, PianoWhiteKey);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PianoWhiteKey).call(this, props));
    _this.state = {
      key: props.value
    };
    return _this;
  }

  _createClass(PianoWhiteKey, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "flex",
          width: "40px",
          height: "120px",
          background: "white",
          border: "solid black",
          borderWidth: "1px 1px 1px 0px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "40px",
          width: "100%",
          background: this.props.value.pressed ? "red" : "white",
          color: this.props.value.pressed ? "white" : "black",
          marginTop: "auto",
          alignItems: "center",
          justifyContent: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "flex"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, this.props.value.note)));
    }
  }]);

  return PianoWhiteKey;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PianoWhiteKey);

/***/ })

};;
//# sourceMappingURL=0.js.map