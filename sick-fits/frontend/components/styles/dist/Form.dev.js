"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);\n  background: rgba(0, 0, 0, 0.02);\n  border: 5px solid white;\n  padding: 20px;\n  font-size: 1.5rem;\n  line-height: 1.5;\n  font-weight: 600;\n  label {\n    display: block;\n    margin-bottom: 1rem;\n  }\n  input,\n  textarea,\n  select {\n    width: 100%;\n    padding: 0.5rem;\n    font-size: 1rem;\n    border: 1px solid black;\n    &:focus {\n      outline: 0;\n      border-color: var(--red);\n    }\n  }\n  button,\n  input[type='submit'] {\n    width: auto;\n    background: red;\n    color: white;\n    border: 0;\n    font-size: 2rem;\n    font-weight: 600;\n    padding: 0.5rem 1.2rem;\n  }\n  fieldset {\n    border: 0;\n    padding: 0;\n\n    &[disabled] {\n      opacity: 0.5;\n    }\n    &::before {\n      height: 10px;\n      content: '';\n      display: block;\n      background-image: linear-gradient(\n        to right,\n        #ff3019 0%,\n        #e2b04a 50%,\n        #ff3019 100%\n      );\n    }\n    &[aria-busy='true']::before {\n      background-size: 50% auto;\n      animation: ", " 0.5s linear infinite;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  from {\n    background-position: 0 0;\n    /* rotate: 0; */\n  }\n\n  to {\n    background-position: 100% 100%;\n    /* rotate: 360deg; */\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var loading = (0, _styledComponents.keyframes)(_templateObject());

var Form = _styledComponents["default"].form(_templateObject2(), loading);

var _default = Form;
exports["default"] = _default;