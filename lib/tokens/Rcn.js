"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Svg = (0, _styledComponents2["default"])("svg")({
  flex: "none"
}, _styledSystem.space, _styledSystem.color);
var SvgRcn = React.forwardRef(function (props, ref) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    fill: "currentcolor",
    height: props.size,
    width: props.size,
    ref: ref
  }), React.createElement("path", {
    d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
    fill: "inherit"
  }), React.createElement("path", {
    d: "M10.77 4.97c.638-.118 1.29-.105 1.935-.072.744.087 1.49.243 2.174.55a7.23 7.23 0 013.317 2.798c.294.43.492.91.691 1.389.185-.294.35-.6.51-.908a.416.416 0 01.383-.249.437.437 0 01.468.383c.018.18-.095.335-.169.49-.234.473-.536.91-.849 1.336-.058.061-.034.147-.027.222.348 2.052-.314 4.237-1.725 5.784a7.351 7.351 0 01-2.983 2.002c-1.318.462-2.77.566-4.134.243-1.977-.428-3.726-1.732-4.72-3.461-.218-.35-.356-.74-.528-1.111-.188.288-.347.592-.507.895a.483.483 0 01-.398.266c-.286 0-.545-.308-.43-.582a7.516 7.516 0 01.96-1.578c.08-.085.07-.205.054-.31-.14-.903-.099-1.824.12-2.71C5.49 7.852 7.56 5.77 10.07 5.122c.232-.055.465-.113.701-.153zM8.999 6.478a6.424 6.424 0 00-2.956 3.249 6.355 6.355 0 00-.434 2.623c.14-.105.275-.22.402-.342.746-.666 1.62-1.182 2.533-1.593 1.697-.771 3.566-1.104 5.423-1.194-.628-.65-1.309-1.251-1.936-1.902.198-.218.412-.419.627-.62.244.22.469.46.707.686.772.768 1.568 1.515 2.328 2.294-.81.807-1.641 1.595-2.451 2.403-.068.064-.14.125-.215.181-.204-.205-.44-.385-.604-.626.498-.522 1.065-.98 1.543-1.52-.857.012-1.709.133-2.547.3-.678.12-1.329.35-1.979.568-1.362.51-2.618 1.322-3.576 2.41-.057.056-.048.14-.034.21.114.486.327.94.561 1.38.773 1.393 2.108 2.469 3.642 2.955.897.276 1.854.383 2.787.253a6.445 6.445 0 003.505-1.602c1.398-1.233 2.183-3.111 2.062-4.956-.148.115-.28.246-.418.37a10.058 10.058 0 01-3.183 1.85 14.863 14.863 0 01-4.745.899c.141.184.315.339.48.503.483.471.96.948 1.451 1.412-.189.223-.41.417-.618.62-.209-.17-.39-.367-.585-.554-.73-.708-1.453-1.425-2.182-2.136a2.38 2.38 0 01-.278-.3c.316-.34.679-.632 1.002-.963.555-.537 1.095-1.088 1.657-1.618.21.204.43.399.617.625-.5.517-1.031 1.004-1.537 1.515.555.027 1.102-.068 1.653-.12.397-.042.788-.132 1.18-.214 2.014-.465 3.975-1.421 5.327-2.997-.518-2.238-2.42-4.08-4.685-4.6-1.508-.384-3.153-.165-4.524.55z",
    fill: "white"
  }));
});
SvgRcn.displayName = "SvgRcn";
SvgRcn.defaultProps = {
  size: 24,
  color: "#3555F9"
};
exports["default"] = SvgRcn;