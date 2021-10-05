"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: var(--red);\n  transform: rotate(3deg);\n  color: white;\n  font-weight: 600;\n  padding: 5px;\n  line-height: 1;\n  font-size: 3rem;\n  display: inline-block;\n  position: absolute;\n  top: -3px;\n  right: -3px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PriceTag = _styledComponents["default"].span(_templateObject());

var _default = PriceTag;
exports["default"] = _default;