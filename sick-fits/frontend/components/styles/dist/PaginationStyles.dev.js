"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  display: inline-grid;\n  grid-template-columns: repeat(4, auto);\n  align-items: stretch;\n  justify-content: center;\n  align-content: center;\n  margin: 2rem 0;\n  border: 1px solid var(--lightGray);\n  border-radius: 10px;\n  & > * {\n    margin: 0;\n    padding: 15px 30px;\n    border-right: 1px solid var(--lightGray);\n    &:last-child {\n      border-right: 0;\n    }\n  }\n  a[aria-disabled='true'] {\n    color: grey;\n    pointer-events: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PaginationStyles = _styledComponents["default"].div(_templateObject());

var _default = PaginationStyles;
exports["default"] = _default;