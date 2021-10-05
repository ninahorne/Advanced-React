"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  box-shadow: var(--bs);\n  list-style: none;\n  padding: 2rem;\n  border: 1px solid var(--offWhite);\n  h2 {\n    border-bottom: 2px solid red;\n    margin-top: 0;\n    margin-bottom: 2rem;\n    padding-bottom: 2rem;\n  }\n\n  .images {\n    display: grid;\n    grid-gap: 10px;\n    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));\n    margin-top: 1rem;\n    img {\n      height: 200px;\n      object-fit: cover;\n      width: 100%;\n    }\n  }\n  .order-meta {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));\n    display: grid;\n    grid-gap: 1rem;\n    text-align: center;\n    & > * {\n      margin: 0;\n      background: rgba(0, 0, 0, 0.03);\n      padding: 1rem 0;\n    }\n    strong {\n      display: block;\n      margin-bottom: 1rem;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OrderItemStyles = _styledComponents["default"].li(_templateObject());

var _default = OrderItemStyles;
exports["default"] = _default;