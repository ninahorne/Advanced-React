"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 20px;\n  position: relative;\n  background: white;\n  position: fixed;\n  height: 100%;\n  top: 0;\n  right: 0;\n  width: 40%;\n  min-width: 500px;\n  bottom: 0;\n  transform: translateX(100%);\n  transition: all 0.3s;\n  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);\n  z-index: 5;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  ", ";\n  header {\n    border-bottom: 5px solid var(--black);\n    margin-bottom: 2rem;\n    padding-bottom: 2rem;\n  }\n  footer {\n    border-top: 10px double var(--black);\n    margin-top: 2rem;\n    padding-top: 2rem;\n    display: grid;\n    grid-template-columns: auto auto;\n    align-items: center;\n    font-size: 3rem;\n    font-weight: 900;\n    p {\n      margin: 0;\n    }\n  }\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    overflow: scroll;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CartStyles = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.open && "transform: translateX(0);";
});

var _default = CartStyles;
exports["default"] = _default;