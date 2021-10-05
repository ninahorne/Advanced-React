"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-spacing: 0;\n  width: 100%;\n  border: 1px solid var(--offWhite);\n  thead {\n    font-size: 10px;\n  }\n  td,\n  th {\n    border-bottom: 1px solid var(--offWhite);\n    border-right: 1px solid var(--offWhite);\n    padding: 10px 5px;\n    position: relative;\n    &:last-child {\n      border-right: none;\n      width: 150px;\n      button {\n        width: 100%;\n      }\n    }\n  }\n  tr {\n    &:hover {\n      background: var(--offWhite);\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Table = _styledComponents["default"].table(_templateObject());

var _default = Table;
exports["default"] = _default;