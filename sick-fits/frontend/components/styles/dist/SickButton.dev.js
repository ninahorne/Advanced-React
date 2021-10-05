"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: red;\n  color: white;\n  font-weight: 500;\n  border: 0;\n  border-radius: 0;\n  text-transform: uppercase;\n  font-size: 2rem;\n  padding: 0.8rem 1.5rem;\n  transform: skew(-2deg);\n  display: inline-block;\n  transition: all 0.5s;\n  &[disabled] {\n    opacity: 0.5;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SickButton = _styledComponents["default"].button(_templateObject());

var _default = SickButton;
exports["default"] = _default;