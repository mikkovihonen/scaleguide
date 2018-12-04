(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PianoKeyboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PianoKeyboard.js */ "./components/PianoKeyboard.js");
/* harmony import */ var _ChordSelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChordSelector.js */ "./components/ChordSelector.js");
/* harmony import */ var tonal_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tonal-key */ "./node_modules/tonal-key/build/es6.js");
/* harmony import */ var tonal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tonal */ "./node_modules/tonal/index.js");
var _jsxFileName = "/Users/mikkovihonen/Workspace/scaleguide/components/App.js";

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
      rootNote: props.note !== undefined ? props.note : "C",
      mode: props.mode !== undefined ? props.mode : "major",
      type: props.type !== undefined ? props.type : "triads",
      chords: [],
      degrees: [],
      scale: []
    };
    _this.handleChordSelectorChange = _this.handleChordSelectorChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(App, [{
    key: "handleChordSelectorChange",
    value: function handleChordSelectorChange(note, mode, type) {
      var scaleString = [note, mode].join(" ");
      if (typeof this.props.onSelectorChange === "function") this.props.onSelectorChange(note, mode, type);
      this.setState({
        rootNote: note,
        scale: tonal__WEBPACK_IMPORTED_MODULE_4__["Scale"].notes(scaleString),
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
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChordSelector_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onChange: this.handleChordSelectorChange,
        note: this.state.rootNote,
        mode: this.state.mode,
        type: this.state.type,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Notes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PianoKeyboard_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        notesPressed: this.state.scale,
        rootNote: this.state.rootNote,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Degrees"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "chordsWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, this.state.chords.map(function (object, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: "pianoKeyboardWrapper_" + i,
          style: {
            display: "flex"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            display: "flex",
            marginBottom: "10px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          style: {
            width: "30px",
            textAlign: "center"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, _this2.state.degrees[i]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PianoKeyboard_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: "pianoKeyboard_" + i,
          notesPressed: object,
          rootNote: "C",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        })));
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./components/ChordSelector.js":
/*!*************************************!*\
  !*** ./components/ChordSelector.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tonal_key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tonal-key */ "./node_modules/tonal-key/build/es6.js");
var _jsxFileName = "/Users/mikkovihonen/Workspace/scaleguide/components/ChordSelector.js";

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
      note: props.note,
      mode: props.mode,
      type: props.type
    };
    _this.handleNote = _this.handleNote.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMode = _this.handleMode.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleType = _this.handleType.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.propagateChange(_this.state.note, _this.state.mode, _this.state.type);

    return _this;
  }

  _createClass(ChordSelector, [{
    key: "handleNote",
    value: function handleNote(event) {
      this.setState({
        note: event.target.value
      });
      this.propagateChange(event.target.value, this.state.mode, this.state.type);
    }
  }, {
    key: "handleMode",
    value: function handleMode(event) {
      this.setState({
        mode: event.target.value
      });
      this.propagateChange(this.state.note, event.target.value, this.state.type);
    }
  }, {
    key: "handleType",
    value: function handleType(event) {
      this.setState({
        type: event.target.value
      });
      this.propagateChange(this.state.note, this.state.mode, event.target.value);
    }
  }, {
    key: "propagateChange",
    value: function propagateChange(note, mode, type) {
      if (typeof this.props.onChange === "function") {
        this.props.onChange(note, mode, type);
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
        value: this.state.mode,
        onChange: this.handleMode,
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

/***/ "./components/PianoBlackKey.js":
/*!*************************************!*\
  !*** ./components/PianoBlackKey.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/mikkovihonen/Workspace/scaleguide/components/PianoBlackKey.js";

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

/***/ "./components/PianoKeyboard.js":
/*!*************************************!*\
  !*** ./components/PianoKeyboard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tonal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tonal */ "./node_modules/tonal/index.js");
/* harmony import */ var _PianoWhiteKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PianoWhiteKey.js */ "./components/PianoWhiteKey.js");
/* harmony import */ var _PianoBlackKey_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PianoBlackKey.js */ "./components/PianoBlackKey.js");
var _jsxFileName = "/Users/mikkovihonen/Workspace/scaleguide/components/PianoKeyboard.js";

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
    _classCallCheck(this, PianoKeyboard);

    return _possibleConstructorReturn(this, _getPrototypeOf(PianoKeyboard).call(this, props));
  }

  _createClass(PianoKeyboard, [{
    key: "renderKey",
    value: function renderKey(key, index) {
      key.pressed = this.props.notesPressed.map(function (note) {
        return tonal__WEBPACK_IMPORTED_MODULE_1__["Note"].chroma(note);
      }).includes(tonal__WEBPACK_IMPORTED_MODULE_1__["Note"].chroma(key.note));
      return key.type === "white" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PianoWhiteKey_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: "pianoKey_" + index,
        value: key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PianoBlackKey_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: "pianoKey_" + index,
        value: key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "inline-flex",
          borderLeft: "1px solid #150b13"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, tonal__WEBPACK_IMPORTED_MODULE_1__["Scale"].notes(this.props.rootNote + " chromatic").map(function (note) {
        return {
          "note": note,
          "type": ["C", "D", "E", "F", "G", "A", "B"].reduce(function (acc, cur) {
            return acc || tonal__WEBPACK_IMPORTED_MODULE_1__["Note"].chroma(cur) === tonal__WEBPACK_IMPORTED_MODULE_1__["Note"].chroma(note);
          }, false) ? "white" : "black"
        };
      }).reduce(function (arr, curVal, curIdx, src) {
        return function () {
          if (src[0].type === "black") src.unshift({
            "note": "",
            "type": "white"
          });
          if (src[src.length - 1].type === "black") src.push({
            "note": "",
            "type": "white"
          });
          return src;
        }(arr, curVal, curIdx, src);
      }).map(function (key, index) {
        return _this.renderKey(key, index);
      }));
    }
  }]);

  return PianoKeyboard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PianoKeyboard);

/***/ }),

/***/ "./components/PianoWhiteKey.js":
/*!*************************************!*\
  !*** ./components/PianoWhiteKey.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/mikkovihonen/Workspace/scaleguide/components/PianoWhiteKey.js";

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

/***/ }),

/***/ "./node_modules/tonal-array/build/es6.js":
/*!***********************************************!*\
  !*** ./node_modules/tonal-array/build/es6.js ***!
  \***********************************************/
/*! exports provided: range, rotate, compact, sort, unique, shuffle, permutations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compact", function() { return compact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unique", function() { return unique; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return shuffle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "permutations", function() { return permutations; });
/* harmony import */ var tonal_note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tonal-note */ "./node_modules/tonal-note/build/es6.js");
/**
 * [![npm version](https://img.shields.io/npm/v/tonal-array.svg?style=flat-square)](https://www.npmjs.com/package/tonal-array)
 *
 * Tonal array utilities. Create ranges, sort notes, ...
 *
 * @example
 * import * as Array;
 * Array.sort(["f", "a", "c"]) // => ["C", "F", "A"]
 *
 * @example
 * const Array = require("tonal-array")
 * Array.range(1, 4) // => [1, 2, 3, 4]
 *
 * @module Array
 */


// ascending range
function ascR(b, n) {
  for (var a = []; n--; a[n] = n + b){ ; }
  return a;
}
// descending range
function descR(b, n) {
  for (var a = []; n--; a[n] = b - n){ ; }
  return a;
}

/**
 * Create a numeric range
 *
 * @param {Number} from
 * @param {Number} to
 * @return {Array}
 *
 * @example
 * Array.range(-2, 2) // => [-2, -1, 0, 1, 2]
 * Array.range(2, -2) // => [2, 1, 0, -1, -2]
 */
function range(a, b) {
  return a === null || b === null
    ? []
    : a < b
      ? ascR(a, b - a + 1)
      : descR(a, a - b + 1);
}
/**
 *
 * Rotates a list a number of times. It"s completly agnostic about the
 * contents of the list.
 *
 * @param {Integer} times - the number of rotations
 * @param {Array} array
 * @return {Array} the rotated array
 * @example
 * Array.rotate(1, [1, 2, 3]) // => [2, 3, 1]
 */
function rotate(times, arr) {
  var len = arr.length;
  var n = ((times % len) + len) % len;
  return arr.slice(n, len).concat(arr.slice(0, n));
}

/**
 * Return a copy of the array with the null values removed
 * @function
 * @param {Array} array
 * @return {Array}
 *
 * @example
 * Array.compact(["a", "b", null, "c"]) // => ["a", "b", "c"]
 */
var compact = function (arr) { return arr.filter(function (n) { return n === 0 || n; }); };

// a function that get note heights (with negative number for pitch classes)
var height = function (name) {
  var m = Object(tonal_note__WEBPACK_IMPORTED_MODULE_0__["props"])(name).midi;
  return m !== null ? m : Object(tonal_note__WEBPACK_IMPORTED_MODULE_0__["props"])(name + "-100").midi;
};

/**
 * Sort an array of notes in ascending order
 *
 * @param {String|Array} notes
 * @return {Array} sorted array of notes
 */
function sort(src) {
  return compact(src.map(tonal_note__WEBPACK_IMPORTED_MODULE_0__["name"])).sort(function (a, b) { return height(a) > height(b); });
}

/**
 * Get sorted notes with duplicates removed
 *
 * @function
 * @param {Array} notes
 */
function unique(arr) {
  return sort(arr).filter(function (n, i, a) { return i === 0 || n !== a[i - 1]; });
}

/**
 * Randomizes the order of the specified array in-place, using the Fisher–Yates shuffle.
 *
 * @private
 * @function
 * @param {Array|String} arr - the array
 * @return {Array} the shuffled array
 *
 * @example
 * Array.shuffle(["C", "D", "E", "F"])
 */
var shuffle = function (arr, rnd) {
  if ( rnd === void 0 ) rnd = Math.random;

  var i, t;
  var m = arr.length;
  while (m) {
    i = (rnd() * m--) | 0;
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }
  return arr;
};

/**
 * Get all permutations of an array
 * http://stackoverflow.com/questions/9960908/permutations-in-javascript
 *
 * @param {Array} array - the array
 * @return {Array<Array>} an array with all the permutations
 */
var permutations = function (arr) {
  if (arr.length === 0) { return [[]]; }
  return permutations(arr.slice(1)).reduce(function(acc, perm) {
    return acc.concat(
      arr.map(function(e, pos) {
        var newPerm = perm.slice();
        newPerm.splice(pos, 0, arr[0]);
        return newPerm;
      })
    );
  }, []);
};


/***/ }),

/***/ "./node_modules/tonal-chord/build/es6.js":
/*!***********************************************!*\
  !*** ./node_modules/tonal-chord/build/es6.js ***!
  \***********************************************/
/*! exports provided: names, props, intervals, notes, exists, supersets, subsets, tokenize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "props", function() { return props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intervals", function() { return intervals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notes", function() { return notes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return exists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supersets", function() { return supersets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subsets", function() { return subsets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenize", function() { return tokenize; });
/* harmony import */ var tonal_note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tonal-note */ "./node_modules/tonal-note/build/es6.js");
/* harmony import */ var tonal_distance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tonal-distance */ "./node_modules/tonal-distance/build/es6.js");
/* harmony import */ var tonal_dictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tonal-dictionary */ "./node_modules/tonal-dictionary/build/es6.js");
/* harmony import */ var tonal_pcset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tonal-pcset */ "./node_modules/tonal-pcset/build/es6.js");
/**
 * [![npm version](https://img.shields.io/npm/v/tonal-chord.svg)](https://www.npmjs.com/package/tonal-chord)
 * [![tonal](https://img.shields.io/badge/tonal-chord-yellow.svg)](https://www.npmjs.com/browse/keyword/tonal)
 *
 * `tonal-chord` is a collection of functions to manipulate musical chords
 *
 * This is part of [tonal](https://www.npmjs.com/package/tonal) music theory library.
 *
 * @example
 * // es6
 * import * as Chord from "tonal-chord"
 * // es5
 * const Chord = require("tonal-chord")
 *
 * @example
 * Chord.notes("CMaj7") // => ["C", "E", "G", "B"]
 *
 * @module Chord
 */





/**
 * Return the available chord names
 *
 * @function
 * @param {boolean} aliases - true to include aliases
 * @return {Array} the chord names
 *
 * @example
 * Chord.names() // => ["maj7", ...]
 */
var names = tonal_dictionary__WEBPACK_IMPORTED_MODULE_2__["chord"].names;

var NO_CHORD = Object.freeze({
  name: null,
  names: [],
  intervals: [],
  chroma: null,
  setnum: null
});

var properties = function (name) {
  var intervals = Object(tonal_dictionary__WEBPACK_IMPORTED_MODULE_2__["chord"])(name);
  if (!intervals) { return NO_CHORD; }
  var s = { intervals: intervals, name: name };
  s.chroma = Object(tonal_pcset__WEBPACK_IMPORTED_MODULE_3__["chroma"])(intervals);
  s.setnum = parseInt(s.chroma, 2);
  s.names = tonal_dictionary__WEBPACK_IMPORTED_MODULE_2__["chord"].names(s.chroma);
  return s;
};

var memo = function (fn, cache) {
  if ( cache === void 0 ) cache = {};

  return function (str) { return cache[str] || (cache[str] = fn(str)); };
};

/**
 * Get chord properties. It returns an object with:
 *
 * - name: the chord name
 * - names: a list with all possible names (includes the current)
 * - intervals: an array with the chord intervals
 * - chroma:  chord croma (see pcset)
 * - setnum: chord chroma number
 *
 * @function
 * @param {String} name - the chord name (without tonic)
 * @return {Object} an object with the properties or a object with all properties
 * set to null if not valid chord name
 */
var props = memo(properties);

/**
 * Get chord intervals. It always returns an array
 *
 * @function
 * @param {String} name - the chord name (optionally a tonic and type)
 * @return {Array<String>} a list of intervals or null if the type is not known
 */
var intervals = function (name) { return props(tokenize(name)[1]).intervals; };

/**
 * Get the chord notes of a chord. This function accepts either a chord name
 * (for example: "Cmaj7") or a list of notes.
 *
 * It always returns an array, even if the chord is not found.
 *
 * @function
 * @param {String} nameOrTonic - name of the chord or the tonic (if the second parameter is present)
 * @param {String} [name] - (Optional) name if the first parameter is the tonic
 * @return {Array} an array of notes or an empty array
 *
 * @example
 * Chord.notes("Cmaj7") // => ["C", "E", "G", "B"]
 * Chord.notes("C", "maj7") // => ["C", "E", "G", "B"]
 */
function notes(nameOrTonic, name) {
  if (name) { return props(name).intervals.map(Object(tonal_distance__WEBPACK_IMPORTED_MODULE_1__["transpose"])(nameOrTonic)); }
  var ref = tokenize(nameOrTonic);
  var tonic = ref[0];
  var type = ref[1];
  return props(type).intervals.map(Object(tonal_distance__WEBPACK_IMPORTED_MODULE_1__["transpose"])(tonic));
}

/**
 * Check if a given name correspond to a chord in the dictionary
 *
 * @function
 * @param {String} name
 * @return {Boolean}
 * @example
 * Chord.exists("CMaj7") // => true
 * Chord.exists("Maj7") // => true
 * Chord.exists("Ablah") // => false
 */
var exists = function (name) { return Object(tonal_dictionary__WEBPACK_IMPORTED_MODULE_2__["chord"])(tokenize(name)[1]) !== undefined; };

/**
 * Get all chords names that are a superset of the given one
 * (has the same notes and at least one more)
 *
 * @function
 * @param {String} name
 * @return {Array} a list of chord names
 */
var supersets = function (name) {
  if (!intervals(name).length) { return []; }
  var isSuperset = Object(tonal_pcset__WEBPACK_IMPORTED_MODULE_3__["isSupersetOf"])(intervals(name));
  return tonal_dictionary__WEBPACK_IMPORTED_MODULE_2__["chord"].names().filter(function (name) { return isSuperset(Object(tonal_dictionary__WEBPACK_IMPORTED_MODULE_2__["chord"])(name)); });
};

/**
 * Find all chords names that are a subset of the given one
 * (has less notes but all from the given chord)
 *
 * @function
 * @param {String} name
 * @return {Array} a list of chord names
 */
var subsets = function (name) {
  var isSubset = Object(tonal_pcset__WEBPACK_IMPORTED_MODULE_3__["isSubsetOf"])(intervals(name));
  return tonal_dictionary__WEBPACK_IMPORTED_MODULE_2__["chord"].names().filter(function (name) { return isSubset(Object(tonal_dictionary__WEBPACK_IMPORTED_MODULE_2__["chord"])(name)); });
};

// 6, 64, 7, 9, 11 and 13 are consider part of the chord
// (see https://github.com/danigb/tonal/issues/55)
var NUM_TYPES = /^(6|64|7|9|11|13)$/;
/**
 * Tokenize a chord name. It returns an array with the tonic and chord type
 * If not tonic is found, all the name is considered the chord name.
 *
 * This function does NOT check if the chord type exists or not. It only tries
 * to split the tonic and chord type.
 *
 * @function
 * @param {String} name - the chord name
 * @return {Array} an array with [type, tonic]
 * @example
 * Chord.tokenize("Cmaj7") // => [ "C", "maj7" ]
 * Chord.tokenize("C7") // => [ "C", "7" ]
 * Chord.tokenize("mMaj7") // => [ "", "mMaj7" ]
 * Chord.tokenize("Cnonsense") // => [ "C", "nonsense" ]
 */
function tokenize(name) {
  var p = Object(tonal_note__WEBPACK_IMPORTED_MODULE_0__["tokenize"])(name);
  if (p[0] === "") { return ["", name]; }
  // aug is augmented (see https://github.com/danigb/tonal/issues/55)
  if (p[0] === "A" && p[3] === "ug") { return ["", "aug"]; }

  if (NUM_TYPES.test(p[2])) {
    return [p[0] + p[1], p[2] + p[3]];
  } else {
    return [p[0] + p[1] + p[2], p[3]];
  }
}


/***/ }),

/***/ "./node_modules/tonal-dictionary/build/data/chords.json":
/*!**************************************************************!*\
  !*** ./node_modules/tonal-dictionary/build/data/chords.json ***!
  \**************************************************************/
/*! exports provided: 4, 5, 7, 9, 11, 13, 64, M, M#5, M#5add9, M13, M13#11, M6, M6#11, M69, M69#11, M7#11, M7#5, M7#5sus4, M7#9#11, M7add13, M7b5, M7b6, M7b9, M7sus4, M9, M9#11, M9#5, M9#5sus4, M9b5, M9sus4, Madd9, Maj7, Mb5, Mb6, Msus2, Msus4, Maddb9, 11b9, 13#11, 13#9, 13#9#11, 13b5, 13b9, 13b9#11, 13no5, 13sus4, 69#11, 7#11, 7#11b13, 7#5, 7#5#9, 7#5b9, 7#5b9#11, 7#5sus4, 7#9, 7#9#11, 7#9#11b13, 7#9b13, 7add6, 7b13, 7b5, 7b6, 7b9, 7b9#11, 7b9#9, 7b9b13, 7b9b13#11, 7no5, 7sus4, 7sus4b9, 7sus4b9b13, 9#11, 9#11b13, 9#5, 9#5#11, 9b13, 9b5, 9no5, 9sus4, m, m#5, m11, m11A 5, m11b5, m13, m6, m69, m7, m7#5, m7add11, m7b5, m9, m9#5, m9b5, mMaj7, mMaj7b6, mM9, mM9b6, mb6M7, mb6b9, o, o7, o7M7, oM7, sus24, +add#9, madd4, madd9, default */
/***/ (function(module) {

module.exports = {"4":["1P 4P 7m 10m",["quartal"]],"5":["1P 5P"],"7":["1P 3M 5P 7m",["Dominant","Dom"]],"9":["1P 3M 5P 7m 9M",["79"]],"11":["1P 5P 7m 9M 11P"],"13":["1P 3M 5P 7m 9M 13M",["13_"]],"64":["5P 8P 10M"],"M":["1P 3M 5P",["Major",""]],"M#5":["1P 3M 5A",["augmented","maj#5","Maj#5","+","aug"]],"M#5add9":["1P 3M 5A 9M",["+add9"]],"M13":["1P 3M 5P 7M 9M 13M",["maj13","Maj13"]],"M13#11":["1P 3M 5P 7M 9M 11A 13M",["maj13#11","Maj13#11","M13+4","M13#4"]],"M6":["1P 3M 5P 13M",["6"]],"M6#11":["1P 3M 5P 6M 11A",["M6b5","6#11","6b5"]],"M69":["1P 3M 5P 6M 9M",["69"]],"M69#11":["1P 3M 5P 6M 9M 11A"],"M7#11":["1P 3M 5P 7M 11A",["maj7#11","Maj7#11","M7+4","M7#4"]],"M7#5":["1P 3M 5A 7M",["maj7#5","Maj7#5","maj9#5","M7+"]],"M7#5sus4":["1P 4P 5A 7M"],"M7#9#11":["1P 3M 5P 7M 9A 11A"],"M7add13":["1P 3M 5P 6M 7M 9M"],"M7b5":["1P 3M 5d 7M"],"M7b6":["1P 3M 6m 7M"],"M7b9":["1P 3M 5P 7M 9m"],"M7sus4":["1P 4P 5P 7M"],"M9":["1P 3M 5P 7M 9M",["maj9","Maj9"]],"M9#11":["1P 3M 5P 7M 9M 11A",["maj9#11","Maj9#11","M9+4","M9#4"]],"M9#5":["1P 3M 5A 7M 9M",["Maj9#5"]],"M9#5sus4":["1P 4P 5A 7M 9M"],"M9b5":["1P 3M 5d 7M 9M"],"M9sus4":["1P 4P 5P 7M 9M"],"Madd9":["1P 3M 5P 9M",["2","add9","add2"]],"Maj7":["1P 3M 5P 7M",["maj7","M7"]],"Mb5":["1P 3M 5d"],"Mb6":["1P 3M 13m"],"Msus2":["1P 2M 5P",["add9no3","sus2"]],"Msus4":["1P 4P 5P",["sus","sus4"]],"Maddb9":["1P 3M 5P 9m"],"11b9":["1P 5P 7m 9m 11P"],"13#11":["1P 3M 5P 7m 9M 11A 13M",["13+4","13#4"]],"13#9":["1P 3M 5P 7m 9A 13M",["13#9_"]],"13#9#11":["1P 3M 5P 7m 9A 11A 13M"],"13b5":["1P 3M 5d 6M 7m 9M"],"13b9":["1P 3M 5P 7m 9m 13M"],"13b9#11":["1P 3M 5P 7m 9m 11A 13M"],"13no5":["1P 3M 7m 9M 13M"],"13sus4":["1P 4P 5P 7m 9M 13M",["13sus"]],"69#11":["1P 3M 5P 6M 9M 11A"],"7#11":["1P 3M 5P 7m 11A",["7+4","7#4","7#11_","7#4_"]],"7#11b13":["1P 3M 5P 7m 11A 13m",["7b5b13"]],"7#5":["1P 3M 5A 7m",["+7","7aug","aug7"]],"7#5#9":["1P 3M 5A 7m 9A",["7alt","7#5#9_","7#9b13_"]],"7#5b9":["1P 3M 5A 7m 9m"],"7#5b9#11":["1P 3M 5A 7m 9m 11A"],"7#5sus4":["1P 4P 5A 7m"],"7#9":["1P 3M 5P 7m 9A",["7#9_"]],"7#9#11":["1P 3M 5P 7m 9A 11A",["7b5#9"]],"7#9#11b13":["1P 3M 5P 7m 9A 11A 13m"],"7#9b13":["1P 3M 5P 7m 9A 13m"],"7add6":["1P 3M 5P 7m 13M",["67","7add13"]],"7b13":["1P 3M 7m 13m"],"7b5":["1P 3M 5d 7m"],"7b6":["1P 3M 5P 6m 7m"],"7b9":["1P 3M 5P 7m 9m"],"7b9#11":["1P 3M 5P 7m 9m 11A",["7b5b9"]],"7b9#9":["1P 3M 5P 7m 9m 9A"],"7b9b13":["1P 3M 5P 7m 9m 13m"],"7b9b13#11":["1P 3M 5P 7m 9m 11A 13m",["7b9#11b13","7b5b9b13"]],"7no5":["1P 3M 7m"],"7sus4":["1P 4P 5P 7m",["7sus"]],"7sus4b9":["1P 4P 5P 7m 9m",["susb9","7susb9","7b9sus","7b9sus4","phryg"]],"7sus4b9b13":["1P 4P 5P 7m 9m 13m",["7b9b13sus4"]],"9#11":["1P 3M 5P 7m 9M 11A",["9+4","9#4","9#11_","9#4_"]],"9#11b13":["1P 3M 5P 7m 9M 11A 13m",["9b5b13"]],"9#5":["1P 3M 5A 7m 9M",["9+"]],"9#5#11":["1P 3M 5A 7m 9M 11A"],"9b13":["1P 3M 7m 9M 13m"],"9b5":["1P 3M 5d 7m 9M"],"9no5":["1P 3M 7m 9M"],"9sus4":["1P 4P 5P 7m 9M",["9sus"]],"m":["1P 3m 5P"],"m#5":["1P 3m 5A",["m+","mb6"]],"m11":["1P 3m 5P 7m 9M 11P",["_11"]],"m11A 5":["1P 3m 6m 7m 9M 11P"],"m11b5":["1P 3m 7m 12d 2M 4P",["h11","_11b5"]],"m13":["1P 3m 5P 7m 9M 11P 13M",["_13"]],"m6":["1P 3m 4P 5P 13M",["_6"]],"m69":["1P 3m 5P 6M 9M",["_69"]],"m7":["1P 3m 5P 7m",["minor7","_","_7"]],"m7#5":["1P 3m 6m 7m"],"m7add11":["1P 3m 5P 7m 11P",["m7add4"]],"m7b5":["1P 3m 5d 7m",["half-diminished","h7","_7b5"]],"m9":["1P 3m 5P 7m 9M",["_9"]],"m9#5":["1P 3m 6m 7m 9M"],"m9b5":["1P 3m 7m 12d 2M",["h9","-9b5"]],"mMaj7":["1P 3m 5P 7M",["mM7","_M7"]],"mMaj7b6":["1P 3m 5P 6m 7M",["mM7b6"]],"mM9":["1P 3m 5P 7M 9M",["mMaj9","-M9"]],"mM9b6":["1P 3m 5P 6m 7M 9M",["mMaj9b6"]],"mb6M7":["1P 3m 6m 7M"],"mb6b9":["1P 3m 6m 9m"],"o":["1P 3m 5d",["mb5","dim"]],"o7":["1P 3m 5d 13M",["diminished","m6b5","dim7"]],"o7M7":["1P 3m 5d 6M 7M"],"oM7":["1P 3m 5d 7M"],"sus24":["1P 2M 4P 5P",["sus4add9"]],"+add#9":["1P 3M 5A 9A"],"madd4":["1P 3m 4P 5P"],"madd9":["1P 3m 5P 9M"]};

/***/ }),

/***/ "./node_modules/tonal-dictionary/build/data/scales.json":
/*!**************************************************************!*\
  !*** ./node_modules/tonal-dictionary/build/data/scales.json ***!
  \**************************************************************/
/*! exports provided: chromatic, lydian, major, mixolydian, dorian, aeolian, phrygian, locrian, melodic minor, melodic minor second mode, lydian augmented, lydian dominant, melodic minor fifth mode, locrian #2, altered, harmonic minor, phrygian dominant, half-whole diminished, diminished, major pentatonic, lydian pentatonic, mixolydian pentatonic, locrian pentatonic, minor pentatonic, minor six pentatonic, minor hexatonic, flat three pentatonic, flat six pentatonic, major flat two pentatonic, whole tone pentatonic, ionian pentatonic, lydian #5P pentatonic, lydian dominant pentatonic, minor #7M pentatonic, super locrian pentatonic, in-sen, iwato, hirajoshi, kumoijoshi, pelog, vietnamese 1, vietnamese 2, prometheus, prometheus neopolitan, ritusen, scriabin, piongio, major blues, minor blues, composite blues, augmented, augmented heptatonic, dorian #4, lydian diminished, whole tone, leading whole tone, lydian minor, locrian major, neopolitan, neopolitan minor, neopolitan major, neopolitan major pentatonic, romanian minor, double harmonic lydian, harmonic major, double harmonic major, egyptian, hungarian minor, hungarian major, oriental, spanish heptatonic, flamenco, balinese, todi raga, malkos raga, kafi raga, purvi raga, persian, bebop, bebop dominant, bebop minor, bebop major, bebop locrian, minor bebop, mystery #1, enigmatic, minor six diminished, ionian augmented, lydian #9, ichikosucho, six tone symmetric, default */
/***/ (function(module) {

module.exports = {"chromatic":["1P 2m 2M 3m 3M 4P 4A 5P 6m 6M 7m 7M"],"lydian":["1P 2M 3M 4A 5P 6M 7M"],"major":["1P 2M 3M 4P 5P 6M 7M",["ionian"]],"mixolydian":["1P 2M 3M 4P 5P 6M 7m",["dominant"]],"dorian":["1P 2M 3m 4P 5P 6M 7m"],"aeolian":["1P 2M 3m 4P 5P 6m 7m",["minor"]],"phrygian":["1P 2m 3m 4P 5P 6m 7m"],"locrian":["1P 2m 3m 4P 5d 6m 7m"],"melodic minor":["1P 2M 3m 4P 5P 6M 7M"],"melodic minor second mode":["1P 2m 3m 4P 5P 6M 7m"],"lydian augmented":["1P 2M 3M 4A 5A 6M 7M"],"lydian dominant":["1P 2M 3M 4A 5P 6M 7m",["lydian b7"]],"melodic minor fifth mode":["1P 2M 3M 4P 5P 6m 7m",["hindu","mixolydian b6M"]],"locrian #2":["1P 2M 3m 4P 5d 6m 7m",["half-diminished"]],"altered":["1P 2m 3m 3M 5d 6m 7m",["super locrian","diminished whole tone","pomeroy"]],"harmonic minor":["1P 2M 3m 4P 5P 6m 7M"],"phrygian dominant":["1P 2m 3M 4P 5P 6m 7m",["spanish","phrygian major"]],"half-whole diminished":["1P 2m 3m 3M 4A 5P 6M 7m",["dominant diminished"]],"diminished":["1P 2M 3m 4P 5d 6m 6M 7M",["whole-half diminished"]],"major pentatonic":["1P 2M 3M 5P 6M",["pentatonic"]],"lydian pentatonic":["1P 3M 4A 5P 7M",["chinese"]],"mixolydian pentatonic":["1P 3M 4P 5P 7m",["indian"]],"locrian pentatonic":["1P 3m 4P 5d 7m",["minor seven flat five pentatonic"]],"minor pentatonic":["1P 3m 4P 5P 7m"],"minor six pentatonic":["1P 3m 4P 5P 6M"],"minor hexatonic":["1P 2M 3m 4P 5P 7M"],"flat three pentatonic":["1P 2M 3m 5P 6M",["kumoi"]],"flat six pentatonic":["1P 2M 3M 5P 6m"],"major flat two pentatonic":["1P 2m 3M 5P 6M"],"whole tone pentatonic":["1P 3M 5d 6m 7m"],"ionian pentatonic":["1P 3M 4P 5P 7M"],"lydian #5P pentatonic":["1P 3M 4A 5A 7M"],"lydian dominant pentatonic":["1P 3M 4A 5P 7m"],"minor #7M pentatonic":["1P 3m 4P 5P 7M"],"super locrian pentatonic":["1P 3m 4d 5d 7m"],"in-sen":["1P 2m 4P 5P 7m"],"iwato":["1P 2m 4P 5d 7m"],"hirajoshi":["1P 2M 3m 5P 6m"],"kumoijoshi":["1P 2m 4P 5P 6m"],"pelog":["1P 2m 3m 5P 6m"],"vietnamese 1":["1P 3m 4P 5P 6m"],"vietnamese 2":["1P 3m 4P 5P 7m"],"prometheus":["1P 2M 3M 4A 6M 7m"],"prometheus neopolitan":["1P 2m 3M 4A 6M 7m"],"ritusen":["1P 2M 4P 5P 6M"],"scriabin":["1P 2m 3M 5P 6M"],"piongio":["1P 2M 4P 5P 6M 7m"],"major blues":["1P 2M 3m 3M 5P 6M"],"minor blues":["1P 3m 4P 5d 5P 7m",["blues"]],"composite blues":["1P 2M 3m 3M 4P 5d 5P 6M 7m"],"augmented":["1P 2A 3M 5P 5A 7M"],"augmented heptatonic":["1P 2A 3M 4P 5P 5A 7M"],"dorian #4":["1P 2M 3m 4A 5P 6M 7m"],"lydian diminished":["1P 2M 3m 4A 5P 6M 7M"],"whole tone":["1P 2M 3M 4A 5A 7m"],"leading whole tone":["1P 2M 3M 4A 5A 7m 7M"],"lydian minor":["1P 2M 3M 4A 5P 6m 7m"],"locrian major":["1P 2M 3M 4P 5d 6m 7m",["arabian"]],"neopolitan":["1P 2m 3m 4P 5P 6m 7M"],"neopolitan minor":["1P 2m 3m 4P 5P 6m 7M"],"neopolitan major":["1P 2m 3m 4P 5P 6M 7M",["dorian b2"]],"neopolitan major pentatonic":["1P 3M 4P 5d 7m"],"romanian minor":["1P 2M 3m 5d 5P 6M 7m"],"double harmonic lydian":["1P 2m 3M 4A 5P 6m 7M"],"harmonic major":["1P 2M 3M 4P 5P 6m 7M"],"double harmonic major":["1P 2m 3M 4P 5P 6m 7M",["gypsy"]],"egyptian":["1P 2M 4P 5P 7m"],"hungarian minor":["1P 2M 3m 4A 5P 6m 7M"],"hungarian major":["1P 2A 3M 4A 5P 6M 7m"],"oriental":["1P 2m 3M 4P 5d 6M 7m"],"spanish heptatonic":["1P 2m 3m 3M 4P 5P 6m 7m"],"flamenco":["1P 2m 3m 3M 4A 5P 7m"],"balinese":["1P 2m 3m 4P 5P 6m 7M"],"todi raga":["1P 2m 3m 4A 5P 6m 7M"],"malkos raga":["1P 3m 4P 6m 7m"],"kafi raga":["1P 3m 3M 4P 5P 6M 7m 7M"],"purvi raga":["1P 2m 3M 4P 4A 5P 6m 7M"],"persian":["1P 2m 3M 4P 5d 6m 7M"],"bebop":["1P 2M 3M 4P 5P 6M 7m 7M"],"bebop dominant":["1P 2M 3M 4P 5P 6M 7m 7M"],"bebop minor":["1P 2M 3m 3M 4P 5P 6M 7m"],"bebop major":["1P 2M 3M 4P 5P 5A 6M 7M"],"bebop locrian":["1P 2m 3m 4P 5d 5P 6m 7m"],"minor bebop":["1P 2M 3m 4P 5P 6m 7m 7M"],"mystery #1":["1P 2m 3M 5d 6m 7m"],"enigmatic":["1P 2m 3M 5d 6m 7m 7M"],"minor six diminished":["1P 2M 3m 4P 5P 6m 6M 7M"],"ionian augmented":["1P 2M 3M 4P 5A 6M 7M"],"lydian #9":["1P 2m 3M 4A 5P 6M 7M"],"ichikosucho":["1P 2M 3M 4P 5d 5P 6M 7M"],"six tone symmetric":["1P 2m 3M 4P 5A 6M"]};

/***/ }),

/***/ "./node_modules/tonal-dictionary/build/es6.js":
/*!****************************************************!*\
  !*** ./node_modules/tonal-dictionary/build/es6.js ***!
  \****************************************************/
/*! exports provided: dictionary, combine, scale, chord, pcset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dictionary", function() { return dictionary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combine", function() { return combine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chord", function() { return chord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pcset", function() { return pcset; });
/* harmony import */ var _data_scales_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/scales.json */ "./node_modules/tonal-dictionary/build/data/scales.json");
var _data_scales_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/scales.json */ "./node_modules/tonal-dictionary/build/data/scales.json", 1);
/* harmony import */ var _data_chords_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/chords.json */ "./node_modules/tonal-dictionary/build/data/chords.json");
var _data_chords_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/chords.json */ "./node_modules/tonal-dictionary/build/data/chords.json", 1);
/* harmony import */ var tonal_pcset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tonal-pcset */ "./node_modules/tonal-pcset/build/es6.js");
/**
 * [![npm version](https://img.shields.io/npm/v/tonal-dictionary.svg)](https://www.npmjs.com/package/tonal-dictionary)
 *
 * `tonal-dictionary` contains a dictionary of musical scales and chords
 *
 * This is part of [tonal](https://www.npmjs.com/package/tonal) music theory library.
 *
 * @example
 * // es6
 * import * as Dictionary from "tonal-dictionary"
 * // es5
 * const Dictionary = require("tonal-dictionary")
 *
 * @example
 * Dictionary.chord("Maj7") // => ["1P", "3M", "5P", "7M"]
 *
 * @module Dictionary
 */




var dictionary = function (raw) {
  var keys = Object.keys(raw).sort();
  var data = [];
  var index = [];

  var add = function (name, ivls, chroma) {
    data[name] = ivls;
    index[chroma] = index[chroma] || [];
    index[chroma].push(name);
  };

  keys.forEach(function (key) {
    var ivls = raw[key][0].split(" ");
    var alias = raw[key][1];
    var chr = Object(tonal_pcset__WEBPACK_IMPORTED_MODULE_2__["chroma"])(ivls);

    add(key, ivls, chr);
    if (alias) { alias.forEach(function (a) { return add(a, ivls, chr); }); }
  });
  var allKeys = Object.keys(data).sort();

  var dict = function (name) { return data[name]; };
  dict.names = function (p) {
    if (typeof p === "string") { return (index[p] || []).slice(); }
    else { return (p === true ? allKeys : keys).slice(); }
  };
  return dict;
};

var combine = function (a, b) {
  var dict = function (name) { return a(name) || b(name); };
  dict.names = function (p) { return a.names(p).concat(b.names(p)); };
  return dict;
};

/**
 * A dictionary of scales: a function that given a scale name (without tonic)
 * returns an array of intervals
 *
 * @function
 * @param {String} name
 * @return {Array} intervals
 * @example
 * import { scale } from "tonal-dictionary"
 * scale("major") // => ["1P", "2M", ...]
 * scale.names(); // => ["major", ...]
 */
var scale = dictionary(_data_scales_json__WEBPACK_IMPORTED_MODULE_0__);

/**
 * A dictionary of chords: a function that given a chord type
 * returns an array of intervals
 *
 * @function
 * @param {String} type
 * @return {Array} intervals
 * @example
 * import { chord } from "tonal-dictionary"
 * chord("Maj7") // => ["1P", "3M", ...]
 * chord.names(); // => ["Maj3", ...]
 */
var chord = dictionary(_data_chords_json__WEBPACK_IMPORTED_MODULE_1__);
var pcset = combine(scale, chord);


/***/ }),

/***/ "./node_modules/tonal-distance/build/es6.js":
/*!**************************************************!*\
  !*** ./node_modules/tonal-distance/build/es6.js ***!
  \**************************************************/
/*! exports provided: transpose, trFifths, fifths, transposeBy, addIntervals, add, subtract, interval, semitones */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trFifths", function() { return trFifths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fifths", function() { return fifths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transposeBy", function() { return transposeBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addIntervals", function() { return addIntervals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return interval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "semitones", function() { return semitones; });
/* harmony import */ var tonal_note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tonal-note */ "./node_modules/tonal-note/build/es6.js");
/* harmony import */ var tonal_interval__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tonal-interval */ "./node_modules/tonal-interval/build/es6.js");
/**
 * [![npm version](https://img.shields.io/npm/v/tonal-distance.svg)](https://www.npmjs.com/package/tonal-distance)
 * [![tonal](https://img.shields.io/badge/tonal-distance-yellow.svg)](https://github.com/danigb/tonal/tree/master/packages/tonal/distance)
 *
 * Transpose notes by intervals and find distances between notes
 *
 * @example
 * // es6
 * import * as Distance from "tonal-distance"
 * Distance.interval("C3", "C4") // => "1P"
 *
 * @example
 * // es6 import selected functions
 * import { interval, semitones, transpose } from "tonal-distance"
 *
 * semitones("C" ,"D") // => 2
 * interval("C4", "G4") // => "5P"
 * transpose("C4", "P5") // => "G4"
 *
 * @example
 * // included in tonal facade
 * const Tonal = require("tonal");
 * Tonal.Distance.transpose("C4", "P5")
 * Tonal.Distance.transposeBy("P5", "C4")
 *
 * @module Distance
 */



// Map from letter step to number of fifths starting from "C":
// { C: 0, D: 2, E: 4, F: -1, G: 1, A: 3, B: 5 }
var FIFTHS = [0, 2, 4, -1, 1, 3, 5];

// Given a number of fifths, return the octaves they span
var fOcts = function (f) { return Math.floor((f * 7) / 12); };

// Get the number of octaves it span each step
var FIFTH_OCTS = FIFTHS.map(fOcts);

var encode = function (ref) {
  var step = ref.step;
  var alt = ref.alt;
  var oct = ref.oct;
  var dir = ref.dir; if ( dir === void 0 ) dir = 1;

  var f = FIFTHS[step] + 7 * alt;
  if (oct === null) { return [dir * f]; }
  var o = oct - FIFTH_OCTS[step] - 4 * alt;
  return [dir * f, dir * o];
};

// We need to get the steps from fifths
// Fifths for CDEFGAB are [ 0, 2, 4, -1, 1, 3, 5 ]
// We add 1 to fifths to avoid negative numbers, so:
// for ["F", "C", "G", "D", "A", "E", "B"] we have:
var STEPS = [3, 0, 4, 1, 5, 2, 6];

// Return the number of fifths as if it were unaltered
function unaltered(f) {
  var i = (f + 1) % 7;
  return i < 0 ? 7 + i : i;
}

var decode = function (f, o, dir) {
  var step = STEPS[unaltered(f)];
  var alt = Math.floor((f + 1) / 7);
  if (o === undefined) { return { step: step, alt: alt, dir: dir }; }
  var oct = o + 4 * alt + FIFTH_OCTS[step];
  return { step: step, alt: alt, oct: oct, dir: dir };
};

var memo = function (fn, cache) {
  if ( cache === void 0 ) cache = {};

  return function (str) { return cache[str] || (cache[str] = fn(str)); };
};

var encoder = function (props) { return memo(function (str) {
    var p = props(str);
    return p.name === null ? null : encode(p);
  }); };

var encodeNote = encoder(tonal_note__WEBPACK_IMPORTED_MODULE_0__["props"]);
var encodeIvl = encoder(tonal_interval__WEBPACK_IMPORTED_MODULE_1__["props"]);

/**
 * Transpose a note by an interval. The note can be a pitch class.
 *
 * This function can be partially applied.
 *
 * @param {String} note
 * @param {String} interval
 * @return {String} the transposed note
 * @example
 * import { tranpose } from "tonal-distance"
 * transpose("d3", "3M") // => "F#3"
 * // it works with pitch classes
 * transpose("D", "3M") // => "F#"
 * // can be partially applied
 * ["C", "D", "E", "F", "G"].map(transpose("M3)) // => ["E", "F#", "G#", "A", "B"]
 */
function transpose(note, interval) {
  if (arguments.length === 1) { return function (i) { return transpose(note, i); }; }
  var n = encodeNote(note);
  var i = encodeIvl(interval);
  if (n === null || i === null) { return null; }
  var tr = n.length === 1 ? [n[0] + i[0]] : [n[0] + i[0], n[1] + i[1]];
  return Object(tonal_note__WEBPACK_IMPORTED_MODULE_0__["build"])(decode(tr[0], tr[1]));
}

/**
 * Transpose a pitch class by a number of perfect fifths.
 *
 * It can be partially applied.
 *
 * @function
 * @param {String} pitchClass - the pitch class
 * @param {Integer} fifhts - the number of fifths
 * @return {String} the transposed pitch class
 *
 * @example
 * import { trFifths } from "tonal-transpose"
 * [0, 1, 2, 3, 4].map(trFifths("C")) // => ["C", "G", "D", "A", "E"]
 * // or using tonal
 * Distance.trFifths("G4", 1) // => "D"
 */

function trFifths(note, fifths) {
  if (arguments.length === 1) { return function (f) { return trFifths(note, f); }; }
  var n = encodeNote(note);
  if (n === null) { return null; }
  return Object(tonal_note__WEBPACK_IMPORTED_MODULE_0__["build"])(decode(n[0] + fifths));
}

/**
 * Get the distance in fifths between pitch classes
 *
 * Can be partially applied.
 *
 * @param {String} to - note or pitch class
 * @param {String} from - note or pitch class
 */
function fifths(from, to) {
  if (arguments.length === 1) { return function (to) { return fifths(from, to); }; }
  var f = encodeNote(from);
  var t = encodeNote(to);
  if (t === null || f === null) { return null; }
  return t[0] - f[0];
}

/**
 * The same as transpose with the arguments inverted.
 *
 * Can be partially applied.
 *
 * @param {String} note
 * @param {String} interval
 * @return {String} the transposed note
 * @example
 * import { tranposeBy } from "tonal-distance"
 * transposeBy("3m", "5P") // => "7m"
 */
function transposeBy(interval, note) {
  if (arguments.length === 1) { return function (n) { return transpose(n, interval); }; }
  return transpose(note, interval);
}

var isDescending = function (e) { return e[0] * 7 + e[1] * 12 < 0; };
var decodeIvl = function (i) { return isDescending(i) ? decode(-i[0], -i[1], -1) : decode(i[0], i[1], 1); };

function addIntervals(ivl1, ivl2, dir) {
  var i1 = encodeIvl(ivl1);
  var i2 = encodeIvl(ivl2);
  if (i1 === null || i2 === null) { return null; }
  var i = [i1[0] + dir * i2[0], i1[1] + dir * i2[1]];
  return Object(tonal_interval__WEBPACK_IMPORTED_MODULE_1__["build"])(decodeIvl(i));
}

/**
 * Add two intervals
 *
 * Can be partially applied.
 *
 * @param {String} interval1
 * @param {String} interval2
 * @return {String} the resulting interval
 * @example
 * import { add } from "tonal-distance"
 * add("3m", "5P") // => "7m"
 */
function add(ivl1, ivl2) {
  if (arguments.length === 1) { return function (i2) { return add(ivl1, i2); }; }
  return addIntervals(ivl1, ivl2, 1);
}

/**
 * Subtract two intervals
 *
 * Can be partially applied
 *
 * @param {String} minuend
 * @param {String} subtrahend
 * @return {String} interval diference
 */
function subtract(ivl1, ivl2) {
  if (arguments.length === 1) { return function (i2) { return add(ivl1, i2); }; }
  return addIntervals(ivl1, ivl2, -1);
}

/**
 * Find the interval between two pitches. It works with pitch classes
 * (both must be pitch classes and the interval is always ascending)
 *
 * Can be partially applied
 *
 * @param {String} from - distance from
 * @param {String} to - distance to
 * @return {String} the interval distance
 *
 * @example
 * import { interval } from "tonal-distance"
 * interval("C2", "C3") // => "P8"
 * interval("G", "B") // => "M3"
 *
 * @example
 * import * as Distance from "tonal-distance"
 * Distance.interval("M2", "P5") // => "P4"
 */
function interval(from, to) {
  if (arguments.length === 1) { return function (t) { return interval(from, t); }; }
  var f = encodeNote(from);
  var t = encodeNote(to);
  if (f === null || t === null || f.length !== t.length) { return null; }
  var d =
    f.length === 1
      ? [t[0] - f[0], -Math.floor(((t[0] - f[0]) * 7) / 12)]
      : [t[0] - f[0], t[1] - f[1]];
  return Object(tonal_interval__WEBPACK_IMPORTED_MODULE_1__["build"])(decodeIvl(d));
}

/**
 * Get the distance between two notes in semitones
 *
 * @param {String|Pitch} from - first note
 * @param {String|Pitch} to - last note
 * @return {Integer} the distance in semitones or null if not valid notes
 * @example
 * import { semitones } from "tonal-distance"
 * semitones("C3", "A2") // => -3
 * // or use tonal
 * Tonal.Distance.semitones("C3", "G3") // => 7
 */
function semitones(from, to) {
  if (arguments.length === 1) { return function (t) { return semitones(from, t); }; }
  var f = Object(tonal_note__WEBPACK_IMPORTED_MODULE_0__["props"])(from);
  var t = Object(tonal_note__WEBPACK_IMPORTED_MODULE_0__["props"])(to);
  return f.midi !== null && t.midi !== null
    ? t.midi - f.midi
    : f.chroma !== null && t.chroma !== null
      ? (t.chroma - f.chroma + 12) % 12
      : null;
}


/***/ }),

/***/ "./node_modules/tonal-interval/build/es6.js":
/*!**************************************************!*\
  !*** ./node_modules/tonal-interval/build/es6.js ***!
  \**************************************************/
/*! exports provided: names, tokenize, qToAlt, altToQ, props, num, name, semitones, chroma, ic, build, simplify, invert, fromSemitones */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenize", function() { return tokenize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qToAlt", function() { return qToAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "altToQ", function() { return altToQ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "props", function() { return props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "num", function() { return num; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "semitones", function() { return semitones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chroma", function() { return chroma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ic", function() { return ic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "build", function() { return build; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simplify", function() { return simplify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromSemitones", function() { return fromSemitones; });
var IVL_TNL = "([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})";
var IVL_STR = "(AA|A|P|M|m|d|dd)([-+]?\\d+)";
var REGEX = new RegExp("^" + IVL_TNL + "|" + IVL_STR + "$");
var SIZES = [0, 2, 4, 5, 7, 9, 11];
var TYPES = "PMMPPMM";
var CLASSES = [0, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1];
var NAMES = "1P 2m 2M 3m 3M 4P 5P 6m 6M 7m 7M 8P".split(" ");
var names = function (types) {
    return typeof types !== "string"
        ? NAMES.slice()
        : NAMES.filter(function (n) { return types.indexOf(n[1]) !== -1; });
};
var tokenize = function (str) {
    var m = REGEX.exec("" + str);
    if (m === null)
        return null;
    return (m[1] ? [m[1], m[2]] : [m[4], m[3]]);
};
var NO_IVL = Object.freeze({
    name: null,
    num: null,
    q: null,
    step: null,
    alt: null,
    dir: null,
    type: null,
    simple: null,
    semitones: null,
    chroma: null,
    oct: null
});
var fillStr = function (s, n) { return Array(Math.abs(n) + 1).join(s); };
var qToAlt = function (type, q) {
    if (q === "M" && type === "M")
        return 0;
    if (q === "P" && type === "P")
        return 0;
    if (q === "m" && type === "M")
        return -1;
    if (/^A+$/.test(q))
        return q.length;
    if (/^d+$/.test(q))
        return type === "P" ? -q.length : -q.length - 1;
    return null;
};
var altToQ = function (type, alt) {
    if (alt === 0)
        return type === "M" ? "M" : "P";
    else if (alt === -1 && type === "M")
        return "m";
    else if (alt > 0)
        return fillStr("A", alt);
    else if (alt < 0)
        return fillStr("d", type === "P" ? alt : alt + 1);
    else
        return null;
};
var numToStep = function (num) { return (Math.abs(num) - 1) % 7; };
var properties = function (str) {
    var t = tokenize(str);
    if (t === null)
        return NO_IVL;
    var p = {
        num: 0,
        q: "d",
        name: "",
        type: "M",
        step: 0,
        dir: -1,
        simple: 1,
        alt: 0,
        oct: 0,
        semitones: 0,
        chroma: 0,
        ic: 0
    };
    p.num = +t[0];
    p.q = t[1];
    p.step = numToStep(p.num);
    p.type = TYPES[p.step];
    if (p.type === "M" && p.q === "P")
        return NO_IVL;
    p.name = "" + p.num + p.q;
    p.dir = p.num < 0 ? -1 : 1;
    p.simple = (p.num === 8 || p.num === -8
        ? p.num
        : p.dir * (p.step + 1));
    p.alt = qToAlt(p.type, p.q);
    p.oct = Math.floor((Math.abs(p.num) - 1) / 7);
    p.semitones = p.dir * (SIZES[p.step] + p.alt + 12 * p.oct);
    p.chroma = ((((p.dir * (SIZES[p.step] + p.alt)) % 12) + 12) %
        12);
    return Object.freeze(p);
};
var cache = {};
function props(str) {
    if (typeof str !== "string")
        return NO_IVL;
    return cache[str] || (cache[str] = properties(str));
}
var num = function (str) { return props(str).num; };
var name = function (str) { return props(str).name; };
var semitones = function (str) { return props(str).semitones; };
var chroma = function (str) { return props(str).chroma; };
var ic = function (ivl) {
    if (typeof ivl === "string")
        ivl = props(ivl).chroma;
    return typeof ivl === "number" ? CLASSES[ivl % 12] : null;
};
var build = function (_a) {
    var _b = _a === void 0 ? {} : _a, num = _b.num, step = _b.step, alt = _b.alt, _c = _b.oct, oct = _c === void 0 ? 1 : _c, dir = _b.dir;
    if (step !== undefined)
        num = step + 1 + 7 * oct;
    if (num === undefined)
        return null;
    if (typeof alt !== "number")
        return null;
    var d = typeof dir !== "number" ? "" : dir < 0 ? "-" : "";
    var type = TYPES[numToStep(num)];
    return (d + num + altToQ(type, alt));
};
var simplify = function (str) {
    var p = props(str);
    if (p === NO_IVL)
        return null;
    var intervalProps = p;
    return intervalProps.simple + intervalProps.q;
};
var invert = function (str) {
    var p = props(str);
    if (p === NO_IVL)
        return null;
    var intervalProps = p;
    var step = (7 - intervalProps.step) % 7;
    var alt = intervalProps.type === "P" ? -intervalProps.alt : -(intervalProps.alt + 1);
    return build({ step: step, alt: alt, oct: intervalProps.oct, dir: intervalProps.dir });
};
var IN = [1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 7, 7];
var IQ = "P m M m M P d P m M m M".split(" ");
var fromSemitones = function (num) {
    var d = num < 0 ? -1 : 1;
    var n = Math.abs(num);
    var c = n % 12;
    var o = Math.floor(n / 12);
    return d * (IN[c] + 7 * o) + IQ[c];
};




/***/ }),

/***/ "./node_modules/tonal-key/build/es6.js":
/*!*********************************************!*\
  !*** ./node_modules/tonal-key/build/es6.js ***!
  \*********************************************/
/*! exports provided: modeNames, fromAlter, names, props, scale, degrees, alteredNotes, leadsheetSymbols, chords, triads, secDomChords, relative, tokenize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modeNames", function() { return modeNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromAlter", function() { return fromAlter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "props", function() { return props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degrees", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alteredNotes", function() { return alteredNotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leadsheetSymbols", function() { return leadsheetSymbols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chords", function() { return chords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triads", function() { return triads; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secDomChords", function() { return secDomChords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relative", function() { return relative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenize", function() { return tokenize; });
/* harmony import */ var tonal_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tonal-array */ "./node_modules/tonal-array/build/es6.js");
/* harmony import */ var tonal_note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tonal-note */ "./node_modules/tonal-note/build/es6.js");
/* harmony import */ var tonal_distance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tonal-distance */ "./node_modules/tonal-distance/build/es6.js");

var arguments$1 = arguments;
/**
 * [![npm version](https://img.shields.io/npm/v/tonal-key.svg?style=flat-square)](https://www.npmjs.com/package/tonal-key)
 * [![tonal](https://img.shields.io/badge/tonal-key-yellow.svg?style=flat-square)](https://www.npmjs.com/browse/keyword/tonal)
 *
 * `tonal-key` is a collection of functions to query about tonal keys.
 *
 * This is part of [tonal](https://www.npmjs.com/package/tonal) music theory library.
 *
 * @example
 * // es6
 * import * as Key from "tonal-key"
 * // es5
 * const Key = require("tonal-key")
 *
 * @example
 * Key.scale("E mixolydian") // => [ "E", "F#", "G#", "A", "B", "C#", "D" ]
 * Key.relative("minor", "C major") // => "A minor"
 *
 * @module Key
 */




var MODES = "major dorian phrygian lydian mixolydian minor locrian ionian aeolian".split(
  " "
);
var NUMS = [0, 1, 2, 3, 4, 5, 6, 0, 5];
var NOTES = "C D E F G A B".split(" ");

var TRIADS = ["", "m", "m", "", "", "m", "dim"];
var SEVENTHS = "Maj7 m7 m7 Maj7 7 m7 m7b5".split(" ");
var DEGREES = "I II III IV V VI VII".split(" ");
var FIFTHS = [0, 2, 4, -1, 1, 3, 5, 0, 3];

var modenum = function (mode) { return NUMS[MODES.indexOf(mode)]; };

/**
 * Get a list of valid mode names. The list of modes will be always in
 * increasing order (ionian to locrian)
 *
 * @function
 * @param {Boolean} alias - true to get aliases names
 * @return {Array} an array of strings
 * @example
 * Key.modes() // => [ "ionian", "dorian", "phrygian", "lydian",
 * // "mixolydian", "aeolian", "locrian" ]
 * Key.modes(true) // => [ "ionian", "dorian", "phrygian", "lydian",
 * // "mixolydian", "aeolian", "locrian", "major", "minor" ]
 */
var modeNames = function (aliases) { return aliases === true ? MODES.slice() : MODES.slice(0, 7); };

/**
 * Create a major key from alterations
 *
 * @function
 * @param {Integer} alt - the alteration number (positive sharps, negative flats)
 * @return {Key} the key object
 * @example
 * Key.fromAlter(2) // => "D major"
 */
var fromAlter = function (i) { return Object(tonal_distance__WEBPACK_IMPORTED_MODULE_2__["trFifths"])("C", i) + " major"; };

var names = function (alt) {
  if ( alt === void 0 ) alt = 4;

  alt = Math.abs(alt);
  var result = [];
  for (var i = -alt; i <= alt; i++) { result.push(fromAlter(i)); }
  return result;
};

var NO_KEY = Object.freeze({
  name: null,
  tonic: null,
  mode: null,
  modenum: null,
  intervals: [],
  scale: [],
  alt: null,
  acc: null
});

var properties = function (name) {
  var p = tokenize(name);
  if (p[0] === null) { return NO_KEY; }
  var k = { tonic: p[0], mode: p[1] };
  k.name = k.tonic + " " + k.mode;
  k.modenum = modenum(k.mode);
  var cs = Object(tonal_array__WEBPACK_IMPORTED_MODULE_0__["rotate"])(k.modenum, NOTES);
  k.alt = Object(tonal_distance__WEBPACK_IMPORTED_MODULE_2__["fifths"])("C", k.tonic) - FIFTHS[MODES.indexOf(k.mode)];
  k.acc = Object(tonal_note__WEBPACK_IMPORTED_MODULE_1__["altToAcc"])(k.alt);
  k.intervals = cs.map(Object(tonal_distance__WEBPACK_IMPORTED_MODULE_2__["interval"])(cs[0]));
  k.scale = k.intervals.map(Object(tonal_distance__WEBPACK_IMPORTED_MODULE_2__["transpose"])(k.tonic));
  return Object.freeze(k);
};

var memo = function (fn, cache) {
  if ( cache === void 0 ) cache = {};

  return function (str) { return cache[str] || (cache[str] = fn(str)); };
};

/**
 * Return the a key properties object with the following information:
 *
 * - name {String}: name
 * - tonic {String}: key tonic
 * - mode {String}: key mode
 * - modenum {Number}: mode number (0 major, 1 dorian, ...)
 * - intervals {Array}: the scale intervals
 * - scale {Array}: the scale notes
 * - acc {String}: accidentals of the key signature
 * - alt {Number}: alteration number (a numeric representation of accidentals)
 *
 * @function
 * @param {String} name - the key name
 * @return {Object} the key properties object or null if not a valid key
 *
 * @example
 * Key.props("C3 dorian") // => { tonic: "C", mode: "dorian", ... }
 */
var props = memo(properties);

/**
 * Get scale of a key
 *
 * @function
 * @param {String|Object} key
 * @return {Array} the key scale
 *
 * @example
 * Key.scale("A major") // => [ "A", "B", "C#", "D", "E", "F#", "G#" ]
 * Key.scale("Bb minor") // => [ "Bb", "C", "Db", "Eb", "F", "Gb", "Ab" ]
 * Key.scale("C dorian") // => [ "C", "D", "Eb", "F", "G", "A", "Bb" ]
 * Key.scale("E mixolydian") // => [ "E", "F#", "G#", "A", "B", "C#", "D" ]
 */
var scale = function (str) { return props(str).scale; };

/**
 * Get a list of key scale degrees
 * @param {String} keyName
 * @return {Array}
 * @example
 * Key.degrees("C major") => ["I", "ii", "iii", "IV", "V", "vi", "vii"]
 */
var degrees = function (str) {
  var p = props(str);
  if (p.name === null) { return []; }
  var chords = Object(tonal_array__WEBPACK_IMPORTED_MODULE_0__["rotate"])(p.modenum, SEVENTHS);
  return chords.map(function (chord, i) {
    var deg = DEGREES[i];
    return chord[0] === "m" ? deg.toLowerCase() : deg;
  });
};

/**
 * Get a list of the altered notes of a given Key. The notes will be in
 * the same order than in the key signature.
 *
 * @function
 * @param {String} key - the key name
 * @return {Array}
 *
 * @example
 * Key.alteredNotes("Eb major") // => [ "Bb", "Eb", "Ab" ]
 */
var alteredNotes = function (name) {
  var alt = props(name).alt;
  if (alt === null) { return null; }
  return alt === 0
    ? []
    : alt > 0
      ? Object(tonal_array__WEBPACK_IMPORTED_MODULE_0__["range"])(1, alt).map(Object(tonal_distance__WEBPACK_IMPORTED_MODULE_2__["trFifths"])("B"))
      : Object(tonal_array__WEBPACK_IMPORTED_MODULE_0__["range"])(-1, alt).map(Object(tonal_distance__WEBPACK_IMPORTED_MODULE_2__["trFifths"])("F"));
};

/**
 * Get a lead-sheet symbols for a given key name
 *
 * This function is currified (so can be partially applied)
 *
 * From http://openmusictheory.com/triads.html
 *
 * A lead-sheet symbol begins with a capital letter (and, if necessary,
 * an accidental) denoting the root of the chord.
 * That letter is followed by information about a chord’s quality:
 *
 * - major triad: no quality symbol is added
 * - minor triad: lower-case “m”
 * - diminished triad: lower-case “dim” or a degree sign “°”
 * - augmented triad: lower-case “aug” or a plus sign “+”
 *
 * @param {Array<String>} symbols - an array of symbols in major scale order
 * @param {String} keyName - the name of the key you want the symbols for
 * @return {function}
 * @see Key.chords
 * @see Key.triads
 *
 * @example
 * const chords = Key.leadsheetSymbols(["M", "m", "m", "M", "7", "m", "dim"])
 * chords("D dorian") //=> ["Dm", "Em", "FM", "G7", "Am", "Bdim", "CM"]
 */
function leadsheetSymbols(symbols, keyName) {
  if (arguments.length === 1) { return function (name) { return leadsheetSymbols(symbols, name); }; }
  var p = props(keyName);
  if (!p.name) { return []; }
  var names = Object(tonal_array__WEBPACK_IMPORTED_MODULE_0__["rotate"])(p.modenum, symbols);
  return p.scale.map(function (tonic, i) { return tonic + names[i]; });
}

/**
 * Get key chords
 *
 * @function
 * @param {String} name - the key name
 * @return {Array}
 *
 * @example
 * Key.chords("A major") // => ["AMaj7", "Bm7", "C#m7", "DMaj7", ..,]
 */
var chords = leadsheetSymbols(SEVENTHS);

/**
 * Get key triads
 *
 * @function
 * @param {String} name - the key name
 * @return {Array}
 *
 * @example
 * Key.triads("A major") // => ["AM", "Bm", "C#m", "DM", "E7", "F#m", "G#mb5"]
 */
var triads = leadsheetSymbols(TRIADS);

/**
 * Get secondary dominant key chords
 *
 * @function
 * @param {String} name - the key name
 * @return {Array}
 *
 * @example
 * Key.secDomChords("A major") // => ["E7", "F#7", ...]
 */

var secDomChords = function (name) {
  var p = props(name);
  if (!p.name) { return []; }
  return p.scale.map(function (t) { return Object(tonal_distance__WEBPACK_IMPORTED_MODULE_2__["transpose"])(t, "P5") + "7"; });
};

/**
 * Get relative of a key. Two keys are relative when the have the same
 * key signature (for example C major and A minor)
 *
 * It can be partially applied.
 *
 * @function
 * @param {String} mode - the relative destination
 * @param {String} key - the key source
 *
 * @example
 * Key.relative("dorian", "B major") // => "C# dorian"
 * // partial application
 * var minor = Key.relative("minor")
 * minor("C major") // => "A minor"
 * minor("E major") // => "C# minor"
 */
var relative = function (mode, key) {
  if (arguments$1.length === 1) { return function (key) { return relative(mode, key); }; }
  var num = modenum(mode.toLowerCase());
  if (num === undefined) { return null; }
  var k = props(key);
  if (k.name === null) { return null; }
  return Object(tonal_distance__WEBPACK_IMPORTED_MODULE_2__["trFifths"])(k.tonic, FIFTHS[num] - FIFTHS[k.modenum]) + " " + mode;
};

/**
 * Split the key name into its components (pitch class tonic and mode name)
 *
 * @function
 * @param {String} name
 * @return {Array} an array in the form [tonic, key]
 *
 * @example
 * Key.tokenize("C major") // => ["C", "major"]
 */
var tokenize = function (name) {
  var p = Object(tonal_note__WEBPACK_IMPORTED_MODULE_1__["tokenize"])(name);
  p[3] = p[3].toLowerCase();
  if (p[0] === "" || MODES.indexOf(p[3]) === -1) { return [null, null]; }
  return [p[0] + p[1], p[3]];
};


/***/ }),

/***/ "./node_modules/tonal-note/build/es6.js":
/*!**********************************************!*\
  !*** ./node_modules/tonal-note/build/es6.js ***!
  \**********************************************/
/*! exports provided: names, tokenize, props, name, pc, midi, midiToFreq, freq, freqToMidi, chroma, oct, stepToLetter, altToAcc, from, build, fromMidi, simplify, enharmonic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenize", function() { return tokenize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "props", function() { return props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pc", function() { return pc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "midi", function() { return midi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "midiToFreq", function() { return midiToFreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freq", function() { return freq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freqToMidi", function() { return freqToMidi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chroma", function() { return chroma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oct", function() { return oct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepToLetter", function() { return stepToLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "altToAcc", function() { return altToAcc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return from; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "build", function() { return build; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMidi", function() { return fromMidi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simplify", function() { return simplify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enharmonic", function() { return enharmonic; });
var NAMES = "C C# Db D D# Eb E F F# Gb G G# Ab A A# Bb B".split(" ");
var names = function (accTypes) {
    return typeof accTypes !== "string"
        ? NAMES.slice()
        : NAMES.filter(function (n) {
            var acc = n[1] || " ";
            return accTypes.indexOf(acc) !== -1;
        });
};
var SHARPS = names(" #");
var FLATS = names(" b");
var REGEX = /^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;
function tokenize(str) {
    if (typeof str !== "string")
        str = "";
    var m = REGEX.exec(str);
    return [m[1].toUpperCase(), m[2].replace(/x/g, "##"), m[3], m[4]];
}
var NO_NOTE = Object.freeze({
    pc: null,
    name: null,
    step: null,
    alt: null,
    oct: null,
    octStr: null,
    chroma: null,
    midi: null,
    freq: null
});
var SEMI = [0, 2, 4, 5, 7, 9, 11];
var properties = function (str) {
    var tokens = tokenize(str);
    if (tokens[0] === "" || tokens[3] !== "")
        return NO_NOTE;
    var letter = tokens[0], acc = tokens[1], octStr = tokens[2];
    var p = {
        letter: letter,
        acc: acc,
        octStr: octStr,
        pc: letter + acc,
        name: letter + acc + octStr,
        step: (letter.charCodeAt(0) + 3) % 7,
        alt: acc[0] === "b" ? -acc.length : acc.length,
        oct: octStr.length ? +octStr : null,
        chroma: 0,
        midi: null,
        freq: null
    };
    p.chroma = (SEMI[p.step] + p.alt + 120) % 12;
    p.midi = p.oct !== null ? SEMI[p.step] + p.alt + 12 * (p.oct + 1) : null;
    p.freq = midiToFreq(p.midi);
    return Object.freeze(p);
};
var memo = function (fn, cache) {
    if (cache === void 0) { cache = {}; }
    return function (str) { return cache[str] || (cache[str] = fn(str)); };
};
var props = memo(properties);
var name = function (str) { return props(str).name; };
var pc = function (str) { return props(str).pc; };
var isMidiRange = function (m) { return m >= 0 && m <= 127; };
var midi = function (note) {
    if (typeof note !== "number" && typeof note !== "string") {
        return null;
    }
    var midi = props(note).midi;
    var value = midi || midi === 0 ? midi : +note;
    return isMidiRange(value) ? value : null;
};
var midiToFreq = function (midi, tuning) {
    if (tuning === void 0) { tuning = 440; }
    return typeof midi === "number" ? Math.pow(2, (midi - 69) / 12) * tuning : null;
};
var freq = function (note) { return props(note).freq || midiToFreq(note); };
var L2 = Math.log(2);
var L440 = Math.log(440);
var freqToMidi = function (freq) {
    var v = (12 * (Math.log(freq) - L440)) / L2 + 69;
    return Math.round(v * 100) / 100;
};
var chroma = function (str) { return props(str).chroma; };
var oct = function (str) { return props(str).oct; };
var LETTERS = "CDEFGAB";
var stepToLetter = function (step) { return LETTERS[step]; };
var fillStr = function (s, n) { return Array(n + 1).join(s); };
var numToStr = function (num, op) {
    return typeof num !== "number" ? "" : op(num);
};
var altToAcc = function (alt) {
    return numToStr(alt, function (alt) { return (alt < 0 ? fillStr("b", -alt) : fillStr("#", alt)); });
};
var from = function (fromProps, baseNote) {
    if (fromProps === void 0) { fromProps = {}; }
    if (baseNote === void 0) { baseNote = null; }
    var _a = baseNote
        ? Object.assign({}, props(baseNote), fromProps)
        : fromProps, step = _a.step, alt = _a.alt, oct = _a.oct;
    if (typeof step !== "number")
        return null;
    var letter = stepToLetter(step);
    if (!letter)
        return null;
    var pc = letter + altToAcc(alt);
    return oct || oct === 0 ? pc + oct : pc;
};
var build = from;
function fromMidi(num, sharps) {
    if (sharps === void 0) { sharps = false; }
    num = Math.round(num);
    var pcs = sharps === true ? SHARPS : FLATS;
    var pc = pcs[num % 12];
    var o = Math.floor(num / 12) - 1;
    return pc + o;
}
var simplify = function (note, sameAcc) {
    if (sameAcc === void 0) { sameAcc = true; }
    var _a = props(note), alt = _a.alt, chroma = _a.chroma, midi = _a.midi;
    if (chroma === null)
        return null;
    var alteration = alt;
    var useSharps = sameAcc === false ? alteration < 0 : alteration > 0;
    return midi === null
        ? pc(fromMidi(chroma, useSharps))
        : fromMidi(midi, useSharps);
};
var enharmonic = function (note) { return simplify(note, false); };




/***/ }),

/***/ "./node_modules/tonal-pcset/build/es6.js":
/*!***********************************************!*\
  !*** ./node_modules/tonal-pcset/build/es6.js ***!
  \***********************************************/
/*! exports provided: chroma, chromas, modes, isChroma, intervals, isEqual, isSubsetOf, isSupersetOf, includes, filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chroma", function() { return chroma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chromas", function() { return chromas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modes", function() { return modes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isChroma", function() { return isChroma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intervals", function() { return intervals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return isEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSubsetOf", function() { return isSubsetOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSupersetOf", function() { return isSupersetOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includes", function() { return includes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var tonal_note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tonal-note */ "./node_modules/tonal-note/build/es6.js");
/* harmony import */ var tonal_interval__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tonal-interval */ "./node_modules/tonal-interval/build/es6.js");
/* harmony import */ var tonal_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tonal-array */ "./node_modules/tonal-array/build/es6.js");
/**
 * [![npm version](https://img.shields.io/npm/v/tonal-pcset.svg?style=flat-square)](https://www.npmjs.com/package/tonal-pcset)
 * [![tonal](https://img.shields.io/badge/tonal-pcset-yellow.svg?style=flat-square)](https://www.npmjs.com/browse/keyword/tonal)
 *
 * `tonal-pcset` is a collection of functions to work with pitch class sets, oriented
 * to make comparations (isEqual, isSubset, isSuperset)
 *
 * This is part of [tonal](https://www.npmjs.com/package/tonal) music theory library.
 *
 * You can install via npm: `npm i --save tonal-pcset`
 *
 * ```js
 * // es6
 * import PcSet from "tonal-pcset"
 * var PcSet = require("tonal-pcset")
 *
 * PcSet.isEqual("c2 d5 e6", "c6 e3 d1") // => true
 * ```
 *
 * ## API documentation
 *
 * @module PcSet
 */




var chr = function (str) { return Object(tonal_note__WEBPACK_IMPORTED_MODULE_0__["chroma"])(str) || Object(tonal_interval__WEBPACK_IMPORTED_MODULE_1__["chroma"])(str) || 0; };
var pcsetNum = function (set) { return parseInt(chroma(set), 2); };
var clen = function (chroma) { return chroma.replace(/0/g, "").length; };

/**
 * Get chroma of a pitch class set. A chroma identifies each set uniquely.
 * It"s a 12-digit binary each presenting one semitone of the octave.
 *
 * Note that this function accepts a chroma as parameter and return it
 * without modification.
 *
 * @param {Array|String} set - the pitch class set
 * @return {String} a binary representation of the pitch class set
 * @example
 * PcSet.chroma(["C", "D", "E"]) // => "1010100000000"
 */
function chroma(set) {
  if (isChroma(set)) { return set; }
  if (!Array.isArray(set)) { return ""; }
  var b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  set.map(chr).forEach(function (i) {
    b[i] = 1;
  });
  return b.join("");
}

var all = null;
/**
 * Get a list of all possible chromas (all possible scales)
 * More information: http://allthescales.org/
 * @return {Array} an array of possible chromas from '10000000000' to '11111111111'
 *
 */
function chromas(n) {
  all = all || Object(tonal_array__WEBPACK_IMPORTED_MODULE_2__["range"])(2048, 4095).map(function (n) { return n.toString(2); });
  return typeof n === "number"
    ? all.filter(function (chroma) { return clen(chroma) === n; })
    : all.slice();
}

/**
 * Given a a list of notes or a pcset chroma, produce the rotations
 * of the chroma discarding the ones that starts with "0"
 *
 * This is used, for example, to get all the modes of a scale.
 *
 * @param {Array|String} set - the list of notes or pitchChr of the set
 * @param {Boolean} normalize - (Optional, true by default) remove all
 * the rotations that starts with "0"
 * @return {Array<String>} an array with all the modes of the chroma
 *
 * @example
 * PcSet.modes(["C", "D", "E"]).map(PcSet.intervals)
 */
function modes(set, normalize) {
  normalize = normalize !== false;
  var binary = chroma(set).split("");
  return Object(tonal_array__WEBPACK_IMPORTED_MODULE_2__["compact"])(
    binary.map(function(_, i) {
      var r = Object(tonal_array__WEBPACK_IMPORTED_MODULE_2__["rotate"])(i, binary);
      return normalize && r[0] === "0" ? null : r.join("");
    })
  );
}

var REGEX = /^[01]{12}$/;
/**
 * Test if the given string is a pitch class set chroma.
 * @param {String} chroma - the pitch class set chroma
 * @return {Boolean} true if its a valid pcset chroma
 * @example
 * PcSet.isChroma("101010101010") // => true
 * PcSet.isChroma("101001") // => false
 */
function isChroma(set) {
  return REGEX.test(set);
}

var IVLS = "1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M".split(" ");
/**
 * Given a pcset (notes or chroma) return it"s intervals
 * @param {String|Array} pcset - the pitch class set (notes or chroma)
 * @return {Array} intervals or empty array if not valid pcset
 * @example
 * PcSet.intervals("1010100000000") => ["1P", "2M", "3M"]
 */
function intervals(set) {
  if (!isChroma(set)) { return []; }
  return Object(tonal_array__WEBPACK_IMPORTED_MODULE_2__["compact"])(
    set.split("").map(function(d, i) {
      return d === "1" ? IVLS[i] : null;
    })
  );
}

/**
 * Test if two pitch class sets are identical
 *
 * @param {Array|String} set1 - one of the pitch class sets
 * @param {Array|String} set2 - the other pitch class set
 * @return {Boolean} true if they are equal
 * @example
 * PcSet.isEqual(["c2", "d3"], ["c5", "d2"]) // => true
 */
function isEqual(s1, s2) {
  if (arguments.length === 1) { return function (s) { return isEqual(s1, s); }; }
  return chroma(s1) === chroma(s2);
}

/**
 * Create a function that test if a collection of notes is a
 * subset of a given set
 *
 * The function can be partially applied
 *
 * @param {Array|String} set - an array of notes or a chroma set string to test against
 * @param {Array|String} notes - an array of notes or a chroma set
 * @return {boolean} true if notes is a subset of set, false otherwise
 * @example
 * const inCMajor = PcSet.isSubsetOf(["C", "E", "G"])
 * inCMajor(["e6", "c4"]) // => true
 * inCMajor(["e6", "c4", "d3"]) // => false
 */
function isSubsetOf(set, notes) {
  if (arguments.length > 1) { return isSubsetOf(set)(notes); }
  set = pcsetNum(set);
  return function(notes) {
    notes = pcsetNum(notes);
    return notes !== set && (notes & set) === notes;
  };
}

/**
 * Create a function that test if a collectio of notes is a
 * superset of a given set (it contains all notes and at least one more)
 *
 * @param {Array|String} set - an array of notes or a chroma set string to test against
 * @param {Array|String} notes - an array of notes or a chroma set
 * @return {boolean} true if notes is a superset of set, false otherwise
 * @example
 * const extendsCMajor = PcSet.isSupersetOf(["C", "E", "G"])
 * extendsCMajor(["e6", "a", "c4", "g2"]) // => true
 * extendsCMajor(["c6", "e4", "g3"]) // => false
 */
function isSupersetOf(set, notes) {
  if (arguments.length > 1) { return isSupersetOf(set)(notes); }
  set = pcsetNum(set);
  return function(notes) {
    notes = pcsetNum(notes);
    return notes !== set && (notes | set) === notes;
  };
}

/**
 * Test if a given pitch class set includes a note
 * @param {Array|String} set - the base set to test against
 * @param {String|Pitch} note - the note to test
 * @return {Boolean} true if the note is included in the pcset
 * @example
 * PcSet.includes(["C", "D", "E"], "C4") // => true
 * PcSet.includes(["C", "D", "E"], "C#4") // => false
 */
function includes(set, note) {
  if (arguments.length > 1) { return includes(set)(note); }
  set = chroma(set);
  return function(note) {
    return set[chr(note)] === "1";
  };
}

/**
 * Filter a list with a pitch class set
 *
 * @param {Array|String} set - the pitch class set notes
 * @param {Array|String} notes - the note list to be filtered
 * @return {Array} the filtered notes
 *
 * @example
 * PcSet.filter(["C", "D", "E"], ["c2", "c#2", "d2", "c3", "c#3", "d3"]) // => [ "c2", "d2", "c3", "d3" ])
 * PcSet.filter(["C2"], ["c2", "c#2", "d2", "c3", "c#3", "d3"]) // => [ "c2", "c3" ])
 */
function filter(set, notes) {
  if (arguments.length === 1) { return function (n) { return filter(set, n); }; }
  return notes.filter(includes(set));
}


/***/ }),

/***/ "./node_modules/tonal-scale/build/es6.js":
/*!***********************************************!*\
  !*** ./node_modules/tonal-scale/build/es6.js ***!
  \***********************************************/
/*! exports provided: props, names, intervals, notes, exists, tokenize, modeNames, chords, toScale, supersets, subsets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "props", function() { return props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intervals", function() { return intervals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notes", function() { return notes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return exists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenize", function() { return tokenize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modeNames", function() { return modeNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chords", function() { return chords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toScale", function() { return toScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supersets", function() { return supersets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subsets", function() { return subsets; });
/* harmony import */ var tonal_note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tonal-note */ "./node_modules/tonal-note/build/es6.js");
/* harmony import */ var tonal_pcset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tonal-pcset */ "./node_modules/tonal-pcset/build/es6.js");
/* harmony import */ var tonal_distance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tonal-distance */ "./node_modules/tonal-distance/build/es6.js");
/* harmony import */ var tonal_dictionary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tonal-dictionary */ "./node_modules/tonal-dictionary/build/es6.js");
/* harmony import */ var tonal_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tonal-array */ "./node_modules/tonal-array/build/es6.js");
/**
 * [![npm version](https://img.shields.io/npm/v/tonal-scale.svg?style=flat-square)](https://www.npmjs.com/package/tonal-scale)
 *
 * A scale is a collection of pitches in ascending or descending order.
 *
 * This module provides functions to get and manipulate scales.
 *
 * @example
 * // es6
 * import * as Scale from "tonal-scale"
 * // es5
 * const Scale = require("tonal-scale");
 *
 * @example
 * Scale.notes("Ab bebop") // => [ "Ab", "Bb", "C", "Db", "Eb", "F", "Gb", "G" ]
 * Scale.names() => ["major", "minor", ...]
 * @module Scale
 */






var NO_SCALE = Object.freeze({
  name: null,
  intervals: [],
  names: [],
  chroma: null,
  setnum: null
});

var properties = function (name) {
  var intervals = Object(tonal_dictionary__WEBPACK_IMPORTED_MODULE_3__["scale"])(name);
  if (!intervals) { return NO_SCALE; }
  var s = { intervals: intervals, name: name };
  s.chroma = Object(tonal_pcset__WEBPACK_IMPORTED_MODULE_1__["chroma"])(intervals);
  s.setnum = parseInt(s.chroma, 2);
  s.names = tonal_dictionary__WEBPACK_IMPORTED_MODULE_3__["scale"].names(s.chroma);
  return Object.freeze(s);
};

var memoize = function (fn, cache) { return function (str) { return cache[str] || (cache[str] = fn(str)); }; };

/**
 * Get scale properties. It returns an object with:
 * - name: the scale name
 * - names: a list with all possible names (includes the current)
 * - intervals: an array with the scale intervals
 * - chroma:  scale croma (see pcset)
 * - setnum: scale chroma number
 *
 * @function
 * @param {String} name - the scale name (without tonic)
 * @return {Object}
 */
var props = memoize(properties, {});

/**
 * Return the available scale names
 *
 * @function
 * @param {boolean} aliases - true to include aliases
 * @return {Array} the scale names
 *
 * @example
 * Scale.names() // => ["maj7", ...]
 */
var names = tonal_dictionary__WEBPACK_IMPORTED_MODULE_3__["scale"].names;

/**
 * Given a scale name, return its intervals. The name can be the type and
 * optionally the tonic (which is ignored)
 *
 * It retruns an empty array when no scale found
 *
 * @function
 * @param {String} name - the scale name (tonic and type, tonic is optional)
 * @return {Array<String>} the scale intervals if is a known scale or an empty
 * array if no scale found
 * @example
 * Scale.intervals("major") // => [ "1P", "2M", "3M", "4P", "5P", "6M", "7M" ]
 */
var intervals = function (name) {
  var p = tokenize(name);
  return props(p[1]).intervals;
};

/**
 * Get the notes (pitch classes) of a scale.
 *
 * Note that it always returns an array, and the values are only pitch classes.
 *
 * @function
 * @param {String} tonic
 * @param {String} nameOrTonic - the scale name or tonic (if 2nd param)
 * @param {String} [name] - the scale name without tonic
 * @return {Array} a pitch classes array
 *
 * @example
 * Scale.notes("C", "major") // => [ "C", "D", "E", "F", "G", "A", "B" ]
 * Scale.notes("C major") // => [ "C", "D", "E", "F", "G", "A", "B" ]
 * Scale.notes("C4", "major") // => [ "C", "D", "E", "F", "G", "A", "B" ]
 * Scale.notes("A4", "no-scale") // => []
 * Scale.notes("blah", "major") // => []
 */
function notes(nameOrTonic, name) {
  var p = tokenize(nameOrTonic);
  name = name || p[1];
  return intervals(name).map(Object(tonal_distance__WEBPACK_IMPORTED_MODULE_2__["transpose"])(p[0]));
}

/**
 * Check if the given name is a known scale from the scales dictionary
 *
 * @function
 * @param {String} name - the scale name
 * @return {Boolean}
 */
function exists(name) {
  var p = tokenize(name);
  return Object(tonal_dictionary__WEBPACK_IMPORTED_MODULE_3__["scale"])(p[1]) !== undefined;
}

/**
 * Given a string with a scale name and (optionally) a tonic, split
 * that components.
 *
 * It retuns an array with the form [ name, tonic ] where tonic can be a
 * note name or null and name can be any arbitrary string
 * (this function doesn"t check if that scale name exists)
 *
 * @function
 * @param {String} name - the scale name
 * @return {Array} an array [tonic, name]
 * @example
 * Scale.tokenize("C mixolydean") // => ["C", "mixolydean"]
 * Scale.tokenize("anything is valid") // => ["", "anything is valid"]
 * Scale.tokenize() // => ["", ""]
 */
function tokenize(str) {
  if (typeof str !== "string") { return ["", ""]; }
  var i = str.indexOf(" ");
  var tonic = Object(tonal_note__WEBPACK_IMPORTED_MODULE_0__["name"])(str.substring(0, i)) || Object(tonal_note__WEBPACK_IMPORTED_MODULE_0__["name"])(str) || "";
  var name = tonic !== "" ? str.substring(tonic.length + 1) : str;
  return [tonic, name.length ? name : ""];
}

/**
 * Find mode names of a scale
 *
 * @function
 * @param {String} name - scale name
 */
var modeNames = function (name) {
  var ivls = intervals(name);
  var tonics = notes(name);

  return Object(tonal_pcset__WEBPACK_IMPORTED_MODULE_1__["modes"])(ivls)
    .map(function (chroma, i) {
      var name = tonal_dictionary__WEBPACK_IMPORTED_MODULE_3__["scale"].names(chroma)[0];
      if (name) { return [tonics[i] || ivls[i], name]; }
    })
    .filter(function (x) { return x; });
};

/**
 * Get all chords that fits a given scale
 *
 * @function
 * @param {String} name
 */
var chords = function (name) {
  var inScale = Object(tonal_pcset__WEBPACK_IMPORTED_MODULE_1__["isSubsetOf"])(intervals(name));
  return tonal_dictionary__WEBPACK_IMPORTED_MODULE_3__["chord"].names().filter(function (name) { return inScale(Object(tonal_dictionary__WEBPACK_IMPORTED_MODULE_3__["chord"])(name)); });
};

/**
 * Given an array of notes, return the scale: a pitch class set starting from
 * the first note of the array
 *
 * @function
 * @param {Array} notes
 * @return {Array}
 */
var toScale = function (notes) {
  var pcset = Object(tonal_array__WEBPACK_IMPORTED_MODULE_4__["compact"])(notes.map(tonal_note__WEBPACK_IMPORTED_MODULE_0__["pc"]));
  if (!pcset.length) { return pcset; }
  var tonic = pcset[0];
  var scale = Object(tonal_array__WEBPACK_IMPORTED_MODULE_4__["unique"])(pcset);
  return Object(tonal_array__WEBPACK_IMPORTED_MODULE_4__["rotate"])(scale.indexOf(tonic), scale);
};

/**
 * Get all scales names that are a superset of the given one
 * (has the same notes and at least one more)
 *
 * @function
 * @param {String} name
 * @return {Array} a list of scale names
 */
var supersets = function (name) {
  if (!intervals(name).length) { return []; }
  var isSuperset = Object(tonal_pcset__WEBPACK_IMPORTED_MODULE_1__["isSupersetOf"])(intervals(name));
  return tonal_dictionary__WEBPACK_IMPORTED_MODULE_3__["scale"].names().filter(function (name) { return isSuperset(Object(tonal_dictionary__WEBPACK_IMPORTED_MODULE_3__["scale"])(name)); });
};

/**
 * Find all scales names that are a subset of the given one
 * (has less notes but all from the given scale)
 *
 * @function
 * @param {String} name
 * @return {Array} a list of scale names
 */
var subsets = function (name) {
  var isSubset = Object(tonal_pcset__WEBPACK_IMPORTED_MODULE_1__["isSubsetOf"])(intervals(name));
  return tonal_dictionary__WEBPACK_IMPORTED_MODULE_3__["scale"].names().filter(function (name) { return isSubset(Object(tonal_dictionary__WEBPACK_IMPORTED_MODULE_3__["scale"])(name)); });
};


/***/ }),

/***/ "./node_modules/tonal/index.js":
/*!*************************************!*\
  !*** ./node_modules/tonal/index.js ***!
  \*************************************/
/*! exports provided: Array, Note, Interval, Distance, Scale, Chord, PcSet, Dictionary, transpose, interval, note, midi, freq, chord, scale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return interval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "note", function() { return note; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "midi", function() { return midi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freq", function() { return freq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chord", function() { return chord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony import */ var tonal_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tonal-array */ "./node_modules/tonal-array/build/es6.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Array", function() { return tonal_array__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var tonal_note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tonal-note */ "./node_modules/tonal-note/build/es6.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Note", function() { return tonal_note__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var tonal_interval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tonal-interval */ "./node_modules/tonal-interval/build/es6.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Interval", function() { return tonal_interval__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var tonal_distance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tonal-distance */ "./node_modules/tonal-distance/build/es6.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Distance", function() { return tonal_distance__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var tonal_dictionary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tonal-dictionary */ "./node_modules/tonal-dictionary/build/es6.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return tonal_dictionary__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var tonal_scale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tonal-scale */ "./node_modules/tonal-scale/build/es6.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Scale", function() { return tonal_scale__WEBPACK_IMPORTED_MODULE_5__; });
/* harmony import */ var tonal_chord__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tonal-chord */ "./node_modules/tonal-chord/build/es6.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Chord", function() { return tonal_chord__WEBPACK_IMPORTED_MODULE_6__; });
/* harmony import */ var tonal_pcset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tonal-pcset */ "./node_modules/tonal-pcset/build/es6.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PcSet", function() { return tonal_pcset__WEBPACK_IMPORTED_MODULE_7__; });
/**
 * [![npm version](https://img.shields.io/npm/v/tonal-key.svg?style=flat-square)](https://www.npmjs.com/package/tonal-key)
 *
 * The `Tonal` module is a facade to the rest of the modules. They are namespaced,
 * so for example to use `pc` function from `tonal-note` you have to write:
 * `Tonal.Note.pc`
 *
 * It exports the following modules:
 * - Note
 * - Interval
 * - Distance
 * - Scale
 * - Chord
 * - PcSet
 *
 * Additionally this facade exports some functions without namespace (see "Methods" below)
 *
 * @example
 * // es6 modules
 * import * as Tonal from "tonal"
 * Tonal.Note.name("cx") // => "C##"
 *
 * @example
 * import { Note } from "tonal"
 * Note.name("bb") // => "Bb"
 *
 * @example
 * // es5 node modules
 * var Tonal = require("tonal");
 * Tonal.Distance.transpose(Tonal.Note.pc("C#2"), "M3") // => "E#"
 * Tonal.Chord.notes("Dmaj7") // => ["D", "F#", "A", "C#"]
 *
 * @module Tonal
 */











/**
 * Transpose a note by an interval
 * @function
 * @param {String} note
 * @param {String} interval
 * @return {String} the transported note
 * @see Distance.transpose
 */
const transpose = tonal_distance__WEBPACK_IMPORTED_MODULE_3__["transpose"];

/**
 * Get the interval from two notes
 * @function
 * @param {String} from
 * @param {String} to
 * @return {String} the interval in reverse shorthand notation
 * @see Distance.interval
 */
const interval = tonal_distance__WEBPACK_IMPORTED_MODULE_3__["interval"];

/**
 * Get note properties
 * @function
 * @param {String} note - the note name
 * @return {Object}
 * @see Note.props
 * @example
 * Tonal.note("A4").chroma // => 9
 */
const note = tonal_note__WEBPACK_IMPORTED_MODULE_1__["props"];

/**
 * Get midi note number
 * @function
 * @param {String} note
 * @return {Number}
 * @see Note.midi
 * @example
 * Tonal.midi("A4") // => 49
 */
const midi = tonal_note__WEBPACK_IMPORTED_MODULE_1__["midi"];

/**
 * Get note frequency using equal tempered tuning at 440
 * @function
 * @param {String} note
 * @return {Number}
 * @see Note.freq
 * @example
 * Tonal.freq("A4") // => 440
 */
const freq = tonal_note__WEBPACK_IMPORTED_MODULE_1__["freq"];

/**
 * Get intervals from a chord type
 * @function
 * @param {String} type - the chord type (no tonic)
 * @return {Array} an array of intervals or undefined if the chord type is not known
 * @see Dictionary.chord
 * @example
 * Tonal.chord("m7b5") // => ["1P", "3m", "5d", "7m"]
 */
const chord = tonal_dictionary__WEBPACK_IMPORTED_MODULE_4__["chord"];

/**
 * Get intervals from scale name
 * @function
 * @param {String} name - the scale name (without tonic)
 * @return {Array} an array of intervals or undefiend if the scale is not kown
 * @example
 * Tonal.scale("major") // => ["1P", "2M", "3M"...]
 */
const scale = tonal_dictionary__WEBPACK_IMPORTED_MODULE_4__["scale"];


/***/ })

}]);
//# sourceMappingURL=1.js.map