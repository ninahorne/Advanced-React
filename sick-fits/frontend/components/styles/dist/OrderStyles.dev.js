"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  max-width: 1000px;\n  margin: 0 auto;\n  border: 1px solid var(--offWhite);\n  box-shadow: var(--bs);\n  padding: 2rem;\n  border-top: 10px solid red;\n  & > p {\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    margin: 0;\n    border-bottom: 1px solid var(--offWhite);\n    span {\n      padding: 1rem;\n      &:first-child {\n        font-weight: 900;\n        text-align: right;\n      }\n    }\n  }\n  .order-item {\n    border-bottom: 1px solid var(--offWhite);\n    display: grid;\n    grid-template-columns: 300px 1fr;\n    align-items: center;\n    grid-gap: 2rem;\n    margin: 2rem 0;\n    padding-bottom: 2rem;\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OrderStyles = _styledComponents["default"].div(_templateObject());

var _default = OrderStyles;
exports["default"] = _default;