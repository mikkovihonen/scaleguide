webpackHotUpdate(1,{

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
        className: "screenOnly",
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

/***/ })

})
//# sourceMappingURL=1.07522e504875c51f423e.hot-update.js.map