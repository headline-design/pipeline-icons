function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgAlgo = React.forwardRef(function (props, ref) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    fill: "currentcolor",
    height: props.size,
    width: props.size,
    ref: ref
  }), React.createElement("path", {
    d: "M11.774 23.653c6.351 0 11.5-5.149 11.5-11.5s-5.149-11.5-11.5-11.5-11.5 5.149-11.5 11.5 5.149 11.5 11.5 11.5z",
    fill: "inherit"
  }), React.createElement("path", {
    d: "M18.482 17.911h-2.103l-1.366-5.082-2.937 5.082H9.727l4.54-7.867-.731-2.731-6.121 10.599H5.066l7.758-13.437h2.057l.901 3.338h2.122l-1.449 2.519 2.029 7.577z",
    fill: "white"
  }));
});
SvgAlgo.displayName = "SvgAlgo";
SvgAlgo.defaultProps = {
  size: 24,
  color: "#F49E00"
};
export default SvgAlgo;