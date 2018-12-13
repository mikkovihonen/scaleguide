webpackHotUpdate(1,{

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
        mode: mode,
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
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "printOnly",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, this.state.rootNote + " " + this.state.mode), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChordSelector_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onChange: this.handleChordSelectorChange,
        note: this.state.rootNote,
        mode: this.state.mode,
        type: this.state.type,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Notes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PianoKeyboard_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        notesPressed: this.state.scale,
        rootNote: this.state.rootNote,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Degrees"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "chordsWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
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
            lineNumber: 49
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            display: "flex",
            marginBottom: "10px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          style: {
            width: "30px",
            textAlign: "center"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, _this2.state.degrees[i]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PianoKeyboard_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: "pianoKeyboard_" + i,
          notesPressed: object,
          rootNote: "C",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        })));
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=1.dedf3530376b57543243.hot-update.js.map