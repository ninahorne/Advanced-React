"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: white;\n  border: 1px solid var(--offWhite);\n  box-shadow: var(--bs);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  img {\n    width: 100%;\n    height: 400px;\n    object-fit: cover;\n  }\n  p {\n    line-height: 2;\n    font-weight: 300;\n    flex-grow: 1;\n    padding: 0 3rem;\n    font-size: 1.5rem;\n  }\n  .buttonList {\n    display: grid;\n    width: 100%;\n    border-top: 1px solid var(--lightGray);\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n    grid-gap: 1px;\n    background: var(--lightGray);\n    & > * {\n      background: white;\n      border: 0;\n      font-size: 1rem;\n      padding: 1rem;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Item = _styledComponents["default"].div(_templateObject());

var _default = Item;
exports["default"] = _default;