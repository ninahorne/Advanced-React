"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 1rem;\n  text-align: center;\n  transform: skew(-5deg) rotate(-1deg);\n  margin-top: -3rem;\n  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);\n  a {\n    background: var(--red);\n    display: inline;\n    line-height: 1.3;\n    font-size: 4rem;\n    text-align: center;\n    color: white;\n    padding: 0 1rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = _styledComponents["default"].h3(_templateObject());

var _default = Title;
exports["default"] = _default;