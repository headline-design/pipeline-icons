function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);
var SvgFilterTiltShift = React.forwardRef(function (props, ref) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor",
    ref: ref
  }), React.createElement("path", {
    d: "M11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69A7.941 7.941 0 0111 4.07zm7.32.19A9.949 9.949 0 0013 2.05v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43zM19.93 11h2.02c-.2-2.01-1-3.84-2.21-5.32L18.31 7.1a7.941 7.941 0 011.62 3.9zM5.69 7.1L4.26 5.68A9.949 9.949 0 002.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43A7.868 7.868 0 014.07 13zM15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm3.31 4.9l1.43 1.43a9.981 9.981 0 002.21-5.32h-2.02a7.945 7.945 0 01-1.62 3.89zM13 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62zm-7.32-.19A9.981 9.981 0 0011 21.95v-2.02a7.941 7.941 0 01-3.9-1.62l-1.42 1.43z"
  }));
});
SvgFilterTiltShift.displayName = "SvgFilterTiltShift";
SvgFilterTiltShift.defaultProps = {
  size: 24,
  color: "inherit"
};
export default SvgFilterTiltShift;